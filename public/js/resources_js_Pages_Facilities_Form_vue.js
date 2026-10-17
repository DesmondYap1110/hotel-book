"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Facilities_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Facilities/Form.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Facilities/Form.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/useBreadcrumbs */ "./resources/js/composables/useBreadcrumbs.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Form',
  props: {
    title: String,
    // 'Hotel Facilities' | 'Room Facilities'
    example: String,
    // placeholder for Name
    facility: Object,
    // { id, name, category } - id is null when adding
    categories: Array,
    // [{ value, label }]
    submitUrl: String,
    backUrl: String
  },
  setup: function setup(__props, _ref) {
    var _props$facility$name, _props$facility$categ;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var isEdit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return !!props.facility.id;
    });
    var heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return "".concat(isEdit.value ? 'Edit' : 'Add', " ").concat(props.title.replace(/ies$/, 'y'));
    }); // "Add Hotel Facility"
    (0,_composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__.useBreadcrumbs)(isEdit.value ? 'Edit' : 'Add');
    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      name: (_props$facility$name = props.facility.name) !== null && _props$facility$name !== void 0 ? _props$facility$name : '',
      category: (_props$facility$categ = props.facility.category) !== null && _props$facility$categ !== void 0 ? _props$facility$categ : ''
    });
    var submit = function submit() {
      return isEdit.value ? form.put(props.submitUrl) : form.post(props.submitUrl);
    };
    var __returned__ = {
      props: props,
      isEdit: isEdit,
      heading: heading,
      form: form,
      submit: submit,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get useForm() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm;
      },
      get useBreadcrumbs() {
        return _composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__.useBreadcrumbs;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Facilities/Form.vue?vue&type=template&id=2aa5efce":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Facilities/Form.vue?vue&type=template&id=2aa5efce ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "cl-form-actions"
};
var _hoisted_6 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_ui_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-select");
  var _component_ui_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-input");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_ui_page_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-page-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: $setup.heading
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_page_card, {
    title: $setup.heading
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "cl-form-narrow",
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
        modelValue: $setup.form.category,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.category = $event;
        }),
        options: $props.categories,
        placeholder: "Choose a category",
        invalid: !!$setup.form.errors.category
      }, null, 8 /* PROPS */, ["modelValue", "options", "invalid"]), $setup.form.errors.category ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.category), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
        modelValue: $setup.form.name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.name = $event;
        }),
        label: "Name",
        error: $setup.form.errors.name,
        placeholder: $props.example,
        maxlength: "100",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue", "error", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "cl-btn cl-btn--primary",
        disabled: $setup.form.processing
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.isEdit ? 'Save Changes' : 'Add Facility'), 9 /* TEXT, PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: $props.backUrl,
        "class": "cl-btn cl-btn--light"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cancel")];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"])])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["title"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/Facilities/Form.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Facilities/Form.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_2aa5efce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=2aa5efce */ "./resources/js/Pages/Facilities/Form.vue?vue&type=template&id=2aa5efce");
/* harmony import */ var _Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Facilities/Form.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Form_vue_vue_type_template_id_2aa5efce__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Facilities/Form.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Facilities/Form.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Facilities/Form.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Facilities/Form.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Facilities/Form.vue?vue&type=template&id=2aa5efce":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Facilities/Form.vue?vue&type=template&id=2aa5efce ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_2aa5efce__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_2aa5efce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=template&id=2aa5efce */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Facilities/Form.vue?vue&type=template&id=2aa5efce");


/***/ })

}]);