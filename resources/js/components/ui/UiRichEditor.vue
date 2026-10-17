<!--
  UiRichEditor - rich text (Summernote) for every "description" field.

  <ui-rich-editor v-model="form.description" label="Description" :error="form.errors.description" />

  The value is HTML. The server cleans it before saving (App\Support\RichText::clean),
  so always run descriptions through RichText::clean() in the Request class.
  Show it with v-html only after it has been cleaned by the server.
-->
<template>
    <div class="cl-field">
        <label v-if="label" class="cl-field__label">{{ label }}</label>
        <div class="cl-rich" :class="{ 'is-invalid': error }">
            <textarea ref="el"></textarea>
        </div>
        <div v-if="hint && !error" class="cl-field__hint">{{ hint }}</div>
        <div v-if="error" class="cl-field__error">{{ error }}</div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import $ from 'jquery';
import 'summernote/dist/summernote-lite.min.js';
import 'summernote/dist/summernote-lite.min.css';

const props = defineProps({
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
    error: { type: String, default: '' },
    hint: { type: String, default: '' },
    placeholder: { type: String, default: 'Write a description…' },
    height: { type: Number, default: 180 },
});
const emit = defineEmits(['update:modelValue']);

const el = ref(null);
let ready = false;
let lastEmitted = null;

onMounted(() => {
    $(el.value).summernote({
        height: props.height,
        placeholder: props.placeholder,
        disableDragAndDrop: true,          // no pasted/dropped images (use the file uploader)
        styleTags: ['p', 'h2', 'h3', 'h4', 'blockquote'],
        // keep in sync with config/purifier.php -> rich_text
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
            ['color', ['forecolor']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['insert', ['link']],
            ['history', ['undo', 'redo']],
        ],
        callbacks: {
            onChange(contents) {
                lastEmitted = contents;
                emit('update:modelValue', contents);
            },
        },
    });
    $(el.value).summernote('code', props.modelValue || '');
    ready = true;
});

// value changed by the parent (e.g. form reset or data loaded later)
watch(() => props.modelValue, (value) => {
    if (ready && value !== lastEmitted) $(el.value).summernote('code', value || '');
});

onBeforeUnmount(() => { if (ready) $(el.value).summernote('destroy'); });
</script>
