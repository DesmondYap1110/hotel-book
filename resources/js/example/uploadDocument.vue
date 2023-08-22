<style scoped>

input:not([type="checkbox"]) {
    height: 40px;
    border: 0;
}

.pdf-thumb-border {
	font-size: 40px;
	border: 2px solid #ADB5BD;
	border-radius: 0.5rem;
	padding: 2px 3px;
}

.image-thumb-border {
	border: 2px solid #ADB5BD;
	background: 50% 50%;
	height: 50px;
	width: 50px;
	border-radius: 0.5rem;
	padding: 1px;
}

.nowrap {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>

<template>
	<div class="form-horizontal">
		<div class="row">
			<div class="col-md-12">
				<input :disabled="loading" id="upload-file" accept="image/jpeg,image/png,application/pdf" multiple type="file" name="file" @change="fieldChange"/>
				<small class="d-block">JPEG, PNG and PDF files only - Each file size must less than 5MB.<br>Hold <kbd>ctrl</kbd> and click to select multiple files</small>
				<div class="card p-3 mt-3" v-if="attachments.length">
					<h5>
						<b>{{ attachments.length }} File(s) Selected</b>
					</h5>
					<div class="row">
						<div class="card card-outline bg-light col-xl-6 col-lg-9 col-md-9 col-sm-10 col-xs-10"
							:class="!sizeLimit(attachment.size) ? 'card-warning' : 'card-success'"
							v-for="(attachment, index) in attachments">
							<div class="p-1 row">
								<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 text-center align-self-center nowrap">
									<i class="fas fa-fw fa-file-pdf pdf-thumb-border" v-if="attachment.type == 'application/pdf'" title="PDF File"></i>
									<img class="image-thumb-border" :src="links[index]" v-else title="Image File" />
								</div>
								<div class="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-xs-10 nowrap">
									<div class="form-group text-truncate m-0 small">
										<a class="nowrap" :href="links[index]" title="Click to preview this uploaded file." target="_blank" v-if="sizeLimit(attachment.size)">{{ attachment.name }}</a>
										<a class="nowrap" v-else>{{ attachment.name }}</a>
									</div>
									<div class="form-inline small">
										<input type="text"
												class="form-control form-control-sm d-flex nowrap"
												v-model="customnames[index]"
												placeholder="Customize File Name Here"
												:disabled="!sizeLimit(attachment.size)"
												style="height: 1.5rem">
									</div>
								</div>
								<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center align-self-center border-left">
									<a class="text-muted" href="#" title="Remove this file." v-if="sizeLimit(attachment.size)" @click="removeFile(index)">
										<i class="fas fa-trash-alt text-danger h5 m-0"></i>
									</a>
								</div>
							</div>
							<div class="overlay dark p-1"
								v-if="!sizeLimit(attachment.size)"
								title="The selected file exceeds the maximum single file size limit of 5MB.">
								<div class="col-md-10 col-sm-10 text-center">
									<i class="fas fa-fw fa-exclamation-triangle text-warning blink_me"></i>
									<small class="text-warning font-italic blink_me">Exceeded threshold size limit.</small>
								</div>
								<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center align-self-center border-left">
									<a class="text-muted" href="#" title="Remove this file." @click="removeFile(index)">
										<i class="fas fa-trash-alt text-white h5 m-0"></i>
									</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<button @click="uploadFile()" type="button" class="btn float-right btn-primary btn-md"><i class="fa fa-upload fa-fw" aria-hidden="true"></i>Upload</button>
				<small v-if="required || error" class="text-danger float-right my-1 mr-2" style="border: 1px solid #FF0000;padding: 5px;">
					{{ required ? '* Please attach the files before upload.' : error ? 'JPEG, PNG and PDF files only - Each file size must less than 5MB.' : '' }}
				</small>
			</div>
		</div>
	</div>
</template>

<script>

 export default{
        props: [
        	'type',
        	'post-document-api-route',
        	'redirect-route',
        	],

        data(){
            return {
            	required : false,
            	error: false,
            	attachments:[],
          		form: new FormData,
          		filenames: [],
          		customnames: [],
          		links: [],
          		loading: false,
            }
        },

        mounted(){
        	$('.modal').on("hide.bs.modal", () => this.clearAll());
        },
        methods: {
            fieldChange: function(e){

            	this.attachments = [];
            	this.error = false;
        		this.required = false;

            	let selectedFiles = e.target.files;

            	if(!selectedFiles.length){
            		return false;
            	}

            	for(let i=0; i<selectedFiles.length; i++){
					this.attachments.push(selectedFiles[i]);
					var tmppath = URL.createObjectURL(selectedFiles[i]);
					this.links[i] = tmppath;
				}

            	for(let i=0; i<this.attachments.length; i++){
					this.filenames[i] = this.attachments[i].name;
				}
            },

            uploadFile(){
            	this.loading = true;
            	this.$snotify.confirm('Do you confirm?', 'Upload File(s)', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.uploadFileRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

            uploadFileRequest(){

            	if(this.attachments.length == 0){
            		this.required = true;
            		this.loading = false;
            		this.closeSnotify();
            		this.$snotify.error('The given data was invalid.');
            		return "";
            	}

            	//$('#loadingModal').modal('show');

            	this.form.append('type', this.type);

            	for(let i=0; i<this.attachments.length; i++){
            		this.form.append('files[]', this.attachments[i]);
				}

            	for(let i=0; i<this.filenames.length; i++){
            		if(this.customnames[i] != null){
            			this.filenames[i] = this.customnames[i];
            		}
            		this.form.append('filenames[]', this.filenames[i]);
				}

            	document.getElementById('upload-file').value = [];
            	this.loading = true;

            	this.closeSnotify();
            	axios.post(this.postDocumentApiRoute, this.form)
            	.then(response => {
            		this.form.delete('files[]');
            		this.error = false;
            		this.required = false;
            		this.$snotify.success('Documents successfully uploaded!');
            		this.clearAll();
            		if(this.redirectRoute)
           				window.location.href = this.redirectRoute;
            		else
            			this.$emit('uploaded');
            	})
            	.catch(error => {
            		this.closeSnotify();
            		this.$snotify.error('Invalid data input!');
            		this.form.delete('files[]');
            		console.log(error);
            		this.error = true;
            		this.required = false;
            		//$('#loadingModal').modal('hide');
            	})
            	.finally(() => {
            		this.loading = false;
            	});

            },

            clearAll(){
            	this.attachments = [];
            	this.customnames = [];
        		this.filenames = [];
        		this.links = [];
        		this.form = new FormData;
        		this.error = false;
        		this.required = false;
            },

            removeFile(index){
            	this.attachments.splice(index, 1);
            	this.filenames.splice(index, 1);
            	this.links.splice(index, 1);
            },

            sizeLimit(size){
            	return size <= 5000000;
            },

            closeSnotify () {
            	this.loading = false;
            	this.$snotify.remove();
            },
        }
}



</script>

