"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Account_Password_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Account/Password.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Account/Password.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables/useBreadcrumbs */ "./resources/js/composables/useBreadcrumbs.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Password',
  props: {
    submitUrl: String
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    (0,_composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_1__.useBreadcrumbs)('Change Password');
    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      current_password: '',
      password: '',
      password_confirmation: ''
    });

    // success message comes back as a flash toast (->with('status', ...))
    var submit = function submit() {
      return form.put(props.submitUrl, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return form.reset();
        }
      });
    };
    var __returned__ = {
      props: props,
      form: form,
      submit: submit,
      get useForm() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm;
      },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Account/Password.vue?vue&type=template&id=e12270f4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Account/Password.vue?vue&type=template&id=e12270f4 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["onSubmit"];
var _hoisted_2 = {
  "class": "cl-form-actions"
};
var _hoisted_3 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_ui_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-input");
  var _component_ui_page_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-page-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Change Password"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_page_card, {
    title: "Change Password"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "cl-form-narrow",
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
        modelValue: $setup.form.current_password,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.current_password = $event;
        }),
        type: "password",
        label: "Current Password",
        error: $setup.form.errors.current_password,
        autocomplete: "current-password",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
        modelValue: $setup.form.password,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.password = $event;
        }),
        type: "password",
        label: "New Password",
        error: $setup.form.errors.password,
        autocomplete: "new-password",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
        modelValue: $setup.form.password_confirmation,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.password_confirmation = $event;
        }),
        type: "password",
        label: "Confirm New Password",
        error: $setup.form.errors.password_confirmation,
        autocomplete: "new-password",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "cl-btn cl-btn--primary",
        disabled: $setup.form.processing
      }, "Update Password", 8 /* PROPS */, _hoisted_3)])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)];
    }),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/Account/Password.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Account/Password.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Password_vue_vue_type_template_id_e12270f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password.vue?vue&type=template&id=e12270f4 */ "./resources/js/Pages/Account/Password.vue?vue&type=template&id=e12270f4");
/* harmony import */ var _Password_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Account/Password.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Password_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Password_vue_vue_type_template_id_e12270f4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Account/Password.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Account/Password.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Account/Password.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Password_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Password_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Password.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Account/Password.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Account/Password.vue?vue&type=template&id=e12270f4":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Account/Password.vue?vue&type=template&id=e12270f4 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Password_vue_vue_type_template_id_e12270f4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Password_vue_vue_type_template_id_e12270f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Password.vue?vue&type=template&id=e12270f4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Account/Password.vue?vue&type=template&id=e12270f4");


/***/ })

}]);