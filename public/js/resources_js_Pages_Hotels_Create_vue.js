"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Hotels_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Create.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Create.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Hotels_Add_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Hotels/Add.vue */ "./resources/js/components/Hotels/Add.vue");
/* harmony import */ var _composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables/useBreadcrumbs */ "./resources/js/composables/useBreadcrumbs.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Create',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    (0,_composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__.useBreadcrumbs)('Add');
    var __returned__ = {
      HotelAdd: _components_Hotels_Add_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      get useBreadcrumbs() {
        return _composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__.useBreadcrumbs;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _uploadImage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uploadImage.vue */ "./resources/js/components/uploadImage.vue");
/* harmony import */ var vue3_toastify_dist_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-toastify/dist/index.css */ "./node_modules/vue3-toastify/dist/index.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors */ "./resources/js/errors.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Add',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var _useErrors = (0,_errors__WEBPACK_IMPORTED_MODULE_3__.useErrors)(),
      errors = _useErrors.errors,
      get = _useErrors.get,
      record = _useErrors.record,
      clear = _useErrors.clear;
    var uploadedImages = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({
      name: '',
      quantity: '',
      description: '',
      policies: '',
      check_in_from: '',
      check_out_from: '',
      check_in_until: '',
      check_out_until: '',
      receptional_open_until: '',
      landmarkDistancePairs: [{
        landmark: '',
        distance: ''
      }]
    });
    var resetForm = function resetForm() {
      form.name = '';
      form.quantity = '';
      form.description = '';
      uploadedImages.value = [];
      // Clear all errors
      Object.keys(errors).forEach(function (field) {
        return clear(field);
      });
    };
    var submitForm = function submitForm() {
      var formData = new FormData();
      var index = 0; // Initialize the index

      uploadedImages.value.forEach(function (image, index) {
        formData.append("images[".concat(index, "]"), image);
      });
      axios.post('/api/hotels', formData).then(function (response) {
        resetForm();
        // uploadImageRef.value.reset();
        window.dispatchEvent(new Event('resetChildComponent'));
        notify();
      })["catch"](function (error) {
        // errors.value.record(error.response.data.errors);
        record(error.response.data.errors);
      });
    };
    var addMore = function addMore() {
      form.landmarkDistancePairs.push({
        landmark: '',
        distance: ''
      });
    };
    var remove = function remove(index) {
      form.landmarkDistancePairs.splice(index, 1);
    };
    var __returned__ = {
      errors: errors,
      get: get,
      record: record,
      clear: clear,
      uploadedImages: uploadedImages,
      form: form,
      resetForm: resetForm,
      submitForm: submitForm,
      addMore: addMore,
      remove: remove,
      uploadImage: _uploadImage_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_2__.reactive,
      get useErrors() {
        return _errors__WEBPACK_IMPORTED_MODULE_3__.useErrors;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var maxImageCount = 20;

// Watch for changes in the props.uploadedImages

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'uploadImage',
  props: {
    uploadedImages: {}
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      emit = _ref.emit;
    var props = __props;
    __expose({
      reset: reset
    });

    // const uploadedImages = ref([]);
    var uploadedImages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.uploadedImages);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.uploadedImages;
    }, function (newValue, oldValue) {
      uploadedImages.value = _toConsumableArray(newValue); // Make a copy of newValue to avoid reactivity issues
    });

    var handleFileChange = function handleFileChange(e) {
      var filesArr = Array.from(e.target.files);
      filesArr.forEach(function (file) {
        if (!file.type.match('image.*')) {
          return;
        }
        if (uploadedImages.value.length >= maxImageCount) {
          return;
        }
        console.log(file);
        uploadedImages.value.push(file);
      });
    };
    var removeImage = function removeImage(index) {
      uploadedImages.value.splice(index, 1);
    };
    var getImageUrl = function getImageUrl(image) {
      return URL.createObjectURL(image);
    };

    // Emit the uploadedImages array to the parent component
    var emitImages = function emitImages(images) {
      emit('update:uploadedImages', images);
    };

    // Watch for changes in uploadedImages and emit them
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(uploadedImages, function (newValue) {
      emitImages(newValue);
    });

    // Fetch and populate uploadedImages, then emit the initial value
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      // ... Fetch and populate uploadedImages ...

      // Emit the initial value
      emitImages(uploadedImages.value);
    });
    var reset = function reset() {
      uploadedImages.value = [];
      console.log("Delete image");
    };

    // Listen for the reset event from the parent component
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      window.addEventListener('resetChildComponent', reset);
    });
    var __returned__ = {
      props: props,
      emit: emit,
      uploadedImages: uploadedImages,
      maxImageCount: maxImageCount,
      handleFileChange: handleFileChange,
      removeImage: removeImage,
      getImageUrl: getImageUrl,
      emitImages: emitImages,
      reset: reset,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Create.vue?vue&type=template&id=d17be1da":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Create.vue?vue&type=template&id=d17be1da ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Add Hotel"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["HotelAdd"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=template&id=63cef048":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=template&id=63cef048 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row d-flex"
};
var _hoisted_4 = {
  "class": "col-md-6"
};
var _hoisted_5 = {
  "class": "card"
};
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  id: "form-sub-title"
}, " General ", -1 /* HOISTED */);
var _hoisted_8 = {
  "class": "card-text"
};
var _hoisted_9 = {
  "class": "form-group"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, " Name: ", -1 /* HOISTED */);
var _hoisted_11 = ["textContent"];
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "description"
}, "Description", -1 /* HOISTED */);
var _hoisted_14 = ["maxlength"];
var _hoisted_15 = {
  "class": "message-counter"
};
var _hoisted_16 = ["textContent"];
var _hoisted_17 = {
  "class": "form-group"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "policies"
}, "Hotel Policies", -1 /* HOISTED */);
var _hoisted_19 = ["maxlength"];
var _hoisted_20 = {
  "class": "message-counter"
};
var _hoisted_21 = ["textContent"];
var _hoisted_22 = {
  "class": "form-group"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "check_in_from"
}, " Check In From: ", -1 /* HOISTED */);
var _hoisted_24 = ["textContent"];
var _hoisted_25 = {
  "class": "form-group"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "check_out_from"
}, " Check In From: ", -1 /* HOISTED */);
var _hoisted_27 = ["textContent"];
var _hoisted_28 = {
  "class": "form-group"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "check_in_until"
}, " Check In From: ", -1 /* HOISTED */);
var _hoisted_30 = ["textContent"];
var _hoisted_31 = {
  "class": "form-group"
};
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "check_out_until"
}, " Check In From: ", -1 /* HOISTED */);
var _hoisted_33 = ["textContent"];
var _hoisted_34 = {
  "class": "form-group"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "receptional_open_until"
}, " Reception open until: ", -1 /* HOISTED */);
var _hoisted_36 = ["textContent"];
var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col-md-12 text-right"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"])),
    enctype: "multipart/form-data"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "name",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.name = $event;
    }),
    "class": "form-control",
    placeholder: "Enter name",
    id: "name",
    name: "name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('name'))
  }, null, 8 /* PROPS */, _hoisted_11)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <vue-multi-image-upload @data-image=\"images\" :max=\"10\" :data-reset=\"component\"\n                                        :options=\"options\" :image-size=\"imageSize\" :image-format=\"formatType\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["uploadImage"], {
    ref: "uploadImageRef",
    uploadedImages: $setup.uploadedImages,
    "onUpdate:uploadedImages": _cache[1] || (_cache[1] = function ($event) {
      return $setup.uploadedImages = $event;
    })
  }, null, 8 /* PROPS */, ["uploadedImages"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button @click=\"component.clear = true\">Clear</button> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.description = $event;
    }),
    maxlength: _ctx.max,
    "class": "form-control",
    id: "description",
    rows: "3",
    name: "description",
    placeholder: "Enter description"
  }, null, 8 /* PROPS */, _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.description]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.description.length) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.max), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('description'))
  }, null, 8 /* PROPS */, _hoisted_16)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.policies = $event;
    }),
    maxlength: _ctx.max,
    "class": "form-control",
    id: "policies",
    rows: "3",
    name: "policies",
    placeholder: "Enter policies"
  }, null, 8 /* PROPS */, _hoisted_19), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.policies]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.policies.length) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.max), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('policies'))
  }, null, 8 /* PROPS */, _hoisted_21)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.check_in_from = $event;
    }),
    "class": "form-control",
    placeholder: "Enter check_in_from",
    id: "check_in_from",
    name: "check_in_from"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.check_in_from]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('check_in_from'))
  }, null, 8 /* PROPS */, _hoisted_24)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.check_out_from = $event;
    }),
    "class": "form-control",
    placeholder: "Enter check_out_from",
    id: "check_out_from",
    name: "check_out_from"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.check_out_from]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('check_out_from'))
  }, null, 8 /* PROPS */, _hoisted_27)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.form.check_in_until = $event;
    }),
    "class": "form-control",
    placeholder: "Enter check_in_until",
    id: "check_in_until",
    name: "check_in_until"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.check_in_until]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('check_in_until'))
  }, null, 8 /* PROPS */, _hoisted_30)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.check_out_until = $event;
    }),
    "class": "form-control",
    placeholder: "Enter check_out_until",
    id: "check_out_until",
    name: "check_out_until"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.check_out_until]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('check_out_until'))
  }, null, 8 /* PROPS */, _hoisted_33)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.receptional_open_until = $event;
    }),
    "class": "form-control",
    placeholder: "Enter receptional_open_until",
    id: "receptional_open_until",
    name: "receptional_open_until"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.receptional_open_until]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "help is-danger",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.get('receptional_open_until'))
  }, null, 8 /* PROPS */, _hoisted_36)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <p id=\"form-sub-title\">\n                                    Landmark\n                                </p>\n                                <div class=\"card-text\">\n                                    <div class=\"form-group row\">\n                                        <div class=\"col-md-6\" v-for=\"(item, index) in form.landmarkDistancePairs\" :key=\"index\">\n                                            <div class=\"form-group row\">\n                                                <div class=\"col-md-6\">\n                                                    <label :for=\"'landmark' + index\">Landmark:</label>\n                                                    <input type=\"text\" v-model=\"item.landmark\" class=\"form-control\" :placeholder=\"'Enter landmark ' + (index + 1)\" :id=\"'landmark' + index\" :name=\"'landmark' + index\">\n                                                    <div>\n                                                        <span class=\"help is-danger\" v-text=\"get('landmark.'+ index)\"></span>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-6\">\n                                                    <label :for=\"'distance' + index\">Distance:</label>\n                                                    <input type=\"text\" v-model=\"item.distance\" class=\"form-control\" :placeholder=\"'Enter distance ' + (index + 1)\" :id=\"'distance' + index\" :name=\"'distance' + index\">\n                                                    <div>\n                                                        <span class=\"help is-danger\" v-text=\"get('distance.' + index)\"></span>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-1\">\n                                                    <button @click=\"remove(index)\" class=\"cl-btn cl-btn--danger\" :disabled=\"index === 0\">Remove</button>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <button @click=\"addMore\" class=\"cl-btn cl-btn--dark\">Add More</button>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "cl-btn cl-btn--light",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.resetForm();
    })
  }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: $setup.submitForm,
    "class": "cl-btn cl-btn--primary ml-2"
  }, "Save")])])], 32 /* HYDRATE_EVENTS */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=template&id=181809df":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=template&id=181809df ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = {
  "class": "card-body"
};
var _hoisted_3 = {
  "class": "file-input"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "file-input__label",
  "for": "file-input"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "upload",
  "class": "svg-inline--fa fa-upload fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Upload file")], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "upload__img-wrap"
};
var _hoisted_6 = ["data-number", "data-file"];
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"upload__box\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"upload__btn-box\">\r\n                    <label class=\"upload__btn\">\r\n                        <p>Upload Images</p>\r\n                        <input type=\"file\" multiple data-max_length=\"20\" class=\"upload__inputfile\"\r\n                            @change=\"handleFileChange\">\r\n                    </label>\r\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label id=\"idlabel\" class=\"mdl-button mdl-js-button mdl-button--raised\">\r\n                    <input type=\"file\" id=\"files\" name=\"files[]\"  multiple  @change=\"handleFileChange\"/>\r\n                    <i class=\"fa fa-camera\"></i>\r\n                  </label> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    name: "file-input",
    id: "file-input",
    "class": "file-input__input",
    multiple: "",
    onChange: $setup.handleFileChange
  }, null, 32 /* HYDRATE_EVENTS */), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.uploadedImages, function (image, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "upload__img-box"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        backgroundImage: "url(".concat($setup.getImageUrl(image), ")")
      }),
      "data-number": index,
      "data-file": image.name,
      "class": "img-bg"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "upload__img-close",
      onClick: function onClick($event) {
        return $setup.removeImage(index);
      }
    }, null, 8 /* PROPS */, _hoisted_7)], 12 /* STYLE, PROPS */, _hoisted_6)]);
  }), 128 /* KEYED_FRAGMENT */))]), $setup.uploadedImages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.reset();
    })
  }, "Clear")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> ")])]);
}

/***/ }),

/***/ "./resources/js/errors.js":
/*!********************************!*\
  !*** ./resources/js/errors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useErrors: () => (/* binding */ useErrors)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function useErrors() {
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({});
  function get(field) {
    if (errors[field]) {
      return errors[field][0];
    }
  }
  function record(newErrors) {
    Object.assign(errors, newErrors);
  }
  function clear(field) {
    delete errors[field];
  }
  function any() {
    return Object.keys(errors).length > 0;
  }
  return {
    errors: errors,
    get: get,
    record: record,
    clear: clear,
    any: any
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-hotel {\n    width: 100px;\n    height: 100px;\n}\nhtml * {\n    box-sizing: border-box;\n}\np {\n    margin: 0;\n}\n.upload__box {\n    padding: 40px;\n}\n.upload__inputfile {\n    width: .1px;\n    height: .1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.upload__btn {\n    display: inline-block;\n    font-weight: 600;\n    color: #fff;\n    text-align: center;\n    min-width: 116px;\n    padding: 5px;\n    transition: all .3s ease;\n    cursor: pointer;\n    border: 2px solid;\n    background-color: #4045ba;\n    border-color: #4045ba;\n    border-radius: 10px;\n    line-height: 26px;\n    font-size: 14px;\n}\n.upload__btn:hover {\n    background-color: unset;\n    color: #4045ba;\n    transition: all .3s ease;\n}\n.upload__btn-box {\n    margin-bottom: 10px;\n}\n.upload__img-wrap {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 -10px;\n}\n.upload__img-box {\n    width: 150px;\n    padding: 0 10px;\n    margin-bottom: 12px;\n}\n.upload__img-close {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    text-align: center;\n    line-height: 24px;\n    z-index: 1;\n    cursor: pointer;\n}\n.upload__img-close:after {\n    content: '\\2716';\n    font-size: 14px;\n    color: white;\n}\n.img-bg {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    position: relative;\n    padding-bottom: 100%;\n}\n#form-sub-title {\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.4;\n    margin-bottom: 15px;\n    color: #1896bd;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.file-input__input {\r\n    width: 0.1px;\r\n    height: 0.1px;\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    z-index: -1;\n}\n.file-input__label {\r\n    cursor: pointer;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    padding: 10px 12px;\r\n    background-color: #4245a8;\r\n    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);\n}\n.file-input__label svg {\r\n    height: 16px;\r\n    margin-right: 4px;\n}\n.img-bg {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    padding-bottom: 100%;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_0_id_63cef048_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=style&index=0&id=63cef048&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_0_id_63cef048_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_0_id_63cef048_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_style_index_0_id_181809df_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_style_index_0_id_181809df_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_style_index_0_id_181809df_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Hotels/Create.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Hotels/Create.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_d17be1da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=d17be1da */ "./resources/js/Pages/Hotels/Create.vue?vue&type=template&id=d17be1da");
/* harmony import */ var _Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Hotels/Create.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Create_vue_vue_type_template_id_d17be1da__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Hotels/Create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Hotels/Add.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Hotels/Add.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_63cef048__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=63cef048 */ "./resources/js/components/Hotels/Add.vue?vue&type=template&id=63cef048");
/* harmony import */ var _Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Hotels/Add.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Add_vue_vue_type_style_index_0_id_63cef048_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=63cef048&lang=css */ "./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Add_vue_vue_type_template_id_63cef048__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Hotels/Add.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/uploadImage.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/uploadImage.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _uploadImage_vue_vue_type_template_id_181809df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploadImage.vue?vue&type=template&id=181809df */ "./resources/js/components/uploadImage.vue?vue&type=template&id=181809df");
/* harmony import */ var _uploadImage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadImage.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/uploadImage.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _uploadImage_vue_vue_type_style_index_0_id_181809df_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css */ "./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_uploadImage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_uploadImage_vue_vue_type_template_id_181809df__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/uploadImage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Hotels/Create.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Hotels/Create.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Create.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Hotels/Add.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Hotels/Add.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/uploadImage.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/uploadImage.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./uploadImage.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Hotels/Create.vue?vue&type=template&id=d17be1da":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Hotels/Create.vue?vue&type=template&id=d17be1da ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_d17be1da__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Create_vue_vue_type_template_id_d17be1da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Create.vue?vue&type=template&id=d17be1da */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Create.vue?vue&type=template&id=d17be1da");


/***/ }),

/***/ "./resources/js/components/Hotels/Add.vue?vue&type=template&id=63cef048":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Hotels/Add.vue?vue&type=template&id=63cef048 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_63cef048__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_63cef048__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=template&id=63cef048 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=template&id=63cef048");


/***/ }),

/***/ "./resources/js/components/uploadImage.vue?vue&type=template&id=181809df":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/uploadImage.vue?vue&type=template&id=181809df ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_template_id_181809df__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_template_id_181809df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./uploadImage.vue?vue&type=template&id=181809df */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=template&id=181809df");


/***/ }),

/***/ "./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_0_id_63cef048_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=style&index=0&id=63cef048&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Hotels/Add.vue?vue&type=style&index=0&id=63cef048&lang=css");


/***/ }),

/***/ "./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_uploadImage_vue_vue_type_style_index_0_id_181809df_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/uploadImage.vue?vue&type=style&index=0&id=181809df&lang=css");


/***/ })

}]);