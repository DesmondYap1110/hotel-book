<!--
  UiFileUpload - drag & drop uploads (FilePond) with previews, progress, reorder and remove.

  ── mode="server" (recommended, Inertia forms) ─────────────────────────────────
  Each file uploads as soon as it is dropped (POST /admin/uploads -> token).
  v-model is a list of entries:
      existing file:  { id, url, caption }       (from the database)
      new upload:     { upload: 'token', caption, preview }
  On save, the controller moves new files into place with TempUpload::claim($token, ...).

  <ui-file-upload v-model="form.images" v-model:busy="uploading" multiple />

  ── mode="local" (old forms that send files themselves) ────────────────────────
  v-model is a plain array of File objects, nothing is uploaded until the form is sent.

  <ui-file-upload v-model="uploadedImages" mode="local" multiple />

  Props: kind ('image' | 'document'), maxFiles, maxFileSize ('5MB'), accept (['image/*'])

  ── variant="avatar" ─ one round photo (hotel / profile picture) ─────────────────
  <ui-file-upload v-model="form.photo" variant="avatar" placeholder="/images/hotel-placeholder.svg" />
  Shows the placeholder image until a photo is chosen; the photo is cropped square.
-->
<template>
    <div class="cl-upload" :class="{ 'is-invalid': error, 'cl-upload--avatar': isAvatar }">
        <FilePond
            ref="pond"
            name="file"
            :files="initialFiles"
            :server="server"
            :instant-upload="mode === 'server'"
            :allow-multiple="multiple && !isAvatar"
            :max-files="multiple && !isAvatar ? maxFiles : 1"
            :max-file-size="maxFileSize"
            :accepted-file-types="accept"
            :allow-reorder="multiple && !isAvatar"
            item-insert-location="after"
            :credits="false"
            :label-idle="labelIdle"
            v-bind="layoutOptions"
            @init="sync"
            @updatefiles="sync"
            @processfile="sync"
            @reorderfiles="sync"
            @removefile="sync"
        />

        <!-- avatar: edit + delete on the right of the photo (shown on hover) -->
        <div v-if="isAvatar" class="cl-upload__actions">
            <button type="button" class="cl-upload__action cl-upload__action--edit"
                    :title="hasFiles ? 'Change photo' : 'Upload photo'" :aria-label="hasFiles ? 'Change photo' : 'Upload photo'"
                    @click="pond.browse()">
                <i class="fas fa-pen"></i>
            </button>
            <button v-if="hasFiles" type="button" class="cl-upload__action cl-upload__action--delete"
                    title="Remove photo" aria-label="Remove photo" @click="pond.removeFiles({ revert: true })">
                <i class="fas fa-trash"></i>
            </button>
        </div>

        <div v-if="error" class="cl-field__error">{{ error }}</div>
    </div>
</template>

<script setup>
import { ref, watch, toRaw } from 'vue';
import axios from 'axios';
import vueFilePond from 'vue-filepond';
import { FileStatus, FileOrigin } from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImageExifOrientation,
    FilePondPluginImageCrop,
    FilePondPluginImagePreview,
);

const props = defineProps({
    modelValue: { type: Array, default: () => [] },
    mode: { type: String, default: 'server' },       // server | local
    kind: { type: String, default: 'image' },        // must match UploadController::KINDS
    multiple: { type: Boolean, default: false },
    maxFiles: { type: Number, default: 20 },
    maxFileSize: { type: String, default: '5MB' },
    accept: { type: Array, default: () => ['image/jpeg', 'image/png', 'image/webp', 'image/gif'] },
    error: { type: String, default: '' },
    uploadUrl: { type: String, default: '/admin/uploads' },
    variant: { type: String, default: 'default' },   // default | avatar
    placeholder: { type: String, default: '' },      // avatar: image shown when empty
});
const emit = defineEmits(['update:modelValue', 'update:busy']);

const pond = ref(null);
const hasFiles = ref(props.modelValue.length > 0); // avatar: show the pencil only when there is a photo
const isAvatar = props.variant === 'avatar';

const labelIdle = isAvatar
    ? `<img src="${props.placeholder}" class="cl-upload__placeholder" alt="">`
    : 'Drag & drop files or <span class="filepond--label-action">Browse</span>';

// FilePond layout: round 'compact circle' for avatars, grid of previews otherwise
const layoutOptions = isAvatar
    ? {
        stylePanelLayout: 'compact circle',
        stylePanelAspectRatio: '1:1',
        imagePreviewHeight: 170,
        imageCropAspectRatio: '1:1',
        styleLoadIndicatorPosition: 'center bottom',
        styleProgressIndicatorPosition: 'center bottom',
        styleButtonRemoveItemPosition: 'center bottom',
        styleButtonProcessItemPosition: 'center bottom',
    }
    : { imagePreviewHeight: 140, styleItemPanelAspectRatio: 0.7 };

// ---------- what FilePond shows first ----------
// server mode: existing files from the database (loaded by URL)
// local mode:  File objects the parent already has
const toPondFile = (entry, i) => (props.mode === 'server'
    ? { source: entry.url, options: { type: 'local', metadata: { existing: i } } }
    : entry);
const existing = props.mode === 'server' ? props.modelValue.filter((e) => e.id) : [];
const initialFiles = ref(props.mode === 'server' ? existing.map(toPondFile) : [...props.modelValue]);

// ---------- server: upload / revert / load via axios (CSRF handled by axios) ----------
const server = props.mode !== 'server' ? null : {
    process: (fieldName, file, metadata, load, error, progress, abort) => {
        const data = new FormData();
        data.append('file', file, file.name);
        data.append('kind', props.kind);
        const controller = new AbortController();

        axios.post(props.uploadUrl, data, {
            signal: controller.signal,
            headers: { Accept: 'application/json' },
            onUploadProgress: (e) => progress(e.lengthComputable, e.loaded, e.total),
        })
            .then((res) => load(String(res.data)))
            .catch((e) => {
                if (axios.isCancel(e)) return;
                error(e.response?.data?.errors?.file?.[0] || e.response?.data?.message || 'Upload failed');
            });

        return { abort: () => { controller.abort(); abort(); } };
    },
    revert: (token, load) => {
        axios.delete(props.uploadUrl, { data: token, headers: { 'Content-Type': 'text/plain' } }).finally(load);
    },
    load: (source, load, error) => {
        const controller = new AbortController();
        fetch(source, { signal: controller.signal })
            .then((res) => res.blob())
            .then(load)
            .catch(() => error('Could not load file'));
        return { abort: () => controller.abort() };
    },
    remove: (source, load) => load(), // removing an existing file only takes it out of the list
};

// ---------- keep v-model in sync with FilePond ----------
const newEntries = new Map(); // FilePond item id -> { upload, caption, preview }
let lastEmitted = props.modelValue;

const sync = () => {
    const items = pond.value?.getFiles?.() ?? [];

    if (props.mode === 'local') {
        lastEmitted = items.map((item) => item.file);
    } else {
        lastEmitted = items.map((item) => {
            if (item.origin === FileOrigin.LOCAL) return existing[item.getMetadata('existing')];
            if (item.status !== FileStatus.PROCESSING_COMPLETE || !item.serverId) return null;
            if (!newEntries.has(item.id)) {
                newEntries.set(item.id, { upload: item.serverId, caption: '', preview: URL.createObjectURL(item.file) });
            }
            return newEntries.get(item.id);
        }).filter(Boolean);
    }

    // only tell the parent when something really changed (avoids update loops)
    if (!sameList(lastEmitted, props.modelValue)) emit('update:modelValue', lastEmitted);
    emit('update:busy', items.some((item) => [FileStatus.PROCESSING, FileStatus.PROCESSING_QUEUED, FileStatus.LOADING].includes(item.status)));
    hasFiles.value = items.length > 0;
};

// same items in the same order? (Vue may hand back a reactive copy of our own list)
const sameList = (a = [], b = []) => a.length === b.length && a.every((item, i) => toRaw(item) === toRaw(b[i]));

// parent replaced the list (form reset, or local files loaded later) -> show it
watch(() => props.modelValue, (value) => {
    if (!pond.value || sameList(value, lastEmitted)) return;
    if (props.mode === 'local') {
        pond.value.removeFiles();
        if (value.length) pond.value.addFiles(value);
    } else if (!value.length) {
        newEntries.clear();
        pond.value.removeFiles();
    }
});
</script>
