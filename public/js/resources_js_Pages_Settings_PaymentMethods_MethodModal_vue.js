"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Settings_PaymentMethods_MethodModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var base = '/admin/payment-methods';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'MethodModal',
  props: {
    method: Object,
    // { id?, name, category, logo_url, is_enabled }
    categories: Array // [{ key, label }]
  },

  emits: ['close'],
  setup: function setup(__props, _ref) {
    var _props$method$name, _props$method$is_enab;
    var __expose = _ref.expose,
      emit = _ref.emit;
    __expose();
    var props = __props;
    var isEdit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return !!props.method.id;
    });
    var categoryOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.categories.map(function (c) {
        return {
          value: c.key,
          label: c.label
        };
      });
    });
    var uploading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      name: (_props$method$name = props.method.name) !== null && _props$method$name !== void 0 ? _props$method$name : '',
      category: props.method.category,
      is_enabled: (_props$method$is_enab = props.method.is_enabled) !== null && _props$method$is_enab !== void 0 ? _props$method$is_enab : true,
      // FilePond list: [{ id: 'current', url }] = keep existing logo
      logo: props.method.logo_url ? [{
        id: 'current',
        url: props.method.logo_url
      }] : []
    });
    var submit = function submit() {
      return form.transform(function (data) {
        return _objectSpread(_objectSpread({}, data), {}, {
          logo: data.logo.map(function (_ref2) {
            var id = _ref2.id,
              upload = _ref2.upload;
            return {
              id: id !== null && id !== void 0 ? id : null,
              upload: upload !== null && upload !== void 0 ? upload : null
            };
          })
        });
      })[isEdit.value ? 'put' : 'post'](isEdit.value ? "".concat(base, "/").concat(props.method.id) : base, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return emit('close');
        }
      });
    };
    var __returned__ = {
      props: props,
      emit: emit,
      isEdit: isEdit,
      categoryOptions: categoryOptions,
      uploading: uploading,
      form: form,
      base: base,
      submit: submit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get useForm() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=template&id=b1224348":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=template&id=b1224348 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["onSubmit"];
var _hoisted_2 = {
  "class": "cl-field"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Category", -1 /* HOISTED */);
var _hoisted_4 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_5 = {
  "class": "cl-field"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Logo", -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "cl-field__hint"
}, "PNG / SVG / JPG, up to 2 MB. Optional.", -1 /* HOISTED */);
var _hoisted_8 = ["disabled"];
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-save"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ui_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-input");
  var _component_ui_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-select");
  var _component_ui_file_upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-file-upload");
  var _component_ui_switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-switch");
  var _component_ui_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ui_modal, {
    "model-value": true,
    title: $setup.isEdit ? "Edit ".concat($props.method.name) : 'Add Payment Method',
    onClose: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.$emit('close');
    })
  }, {
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "cl-btn cl-btn--light",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return _ctx.$emit('close');
        })
      }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        form: "payment-method-form",
        "class": "cl-btn cl-btn--primary",
        disabled: $setup.form.processing || $setup.uploading
      }, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.uploading ? 'Uploading logo…' : $setup.form.processing ? 'Saving…' : $setup.isEdit ? 'Save Changes' : 'Add'), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_8)];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        id: "payment-method-form",
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
        modelValue: $setup.form.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.name = $event;
        }),
        label: "Name",
        error: $setup.form.errors.name,
        placeholder: "e.g. Touch 'n Go eWallet",
        maxlength: "100",
        required: "",
        autofocus: ""
      }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
        modelValue: $setup.form.category,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.category = $event;
        }),
        options: $setup.categoryOptions,
        invalid: !!$setup.form.errors.category
      }, null, 8 /* PROPS */, ["modelValue", "options", "invalid"]), $setup.form.errors.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.category), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_file_upload, {
        modelValue: $setup.form.logo,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.logo = $event;
        }),
        busy: $setup.uploading,
        "onUpdate:busy": _cache[3] || (_cache[3] = function ($event) {
          return $setup.uploading = $event;
        }),
        error: $setup.form.errors.logo,
        "max-file-size": "2MB"
      }, null, 8 /* PROPS */, ["modelValue", "busy", "error"]), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_switch, {
        modelValue: $setup.form.is_enabled,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.form.is_enabled = $event;
        }),
        label: "Status",
        "on-text": "Enabled",
        "off-text": "Disabled"
      }, null, 8 /* PROPS */, ["modelValue"])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["title"]);
}

/***/ }),

/***/ "./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MethodModal_vue_vue_type_template_id_b1224348__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MethodModal.vue?vue&type=template&id=b1224348 */ "./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=template&id=b1224348");
/* harmony import */ var _MethodModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MethodModal.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MethodModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MethodModal_vue_vue_type_template_id_b1224348__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Settings/PaymentMethods/MethodModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MethodModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MethodModal_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MethodModal.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=template&id=b1224348":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=template&id=b1224348 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MethodModal_vue_vue_type_template_id_b1224348__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MethodModal_vue_vue_type_template_id_b1224348__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MethodModal.vue?vue&type=template&id=b1224348 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Settings/PaymentMethods/MethodModal.vue?vue&type=template&id=b1224348");


/***/ })

}]);