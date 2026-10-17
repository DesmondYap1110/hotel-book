"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Public_Checkout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Checkout.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Checkout.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _composables_useMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/useMoney */ "./resources/js/composables/useMoney.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Checkout',
  props: {
    hotel: Object,
    stay: Object,
    // { check_in, check_out, adults, children }
    room: Object,
    // the chosen room type (availability row)
    isMock: Boolean,
    // mock gateway (local / staging)
    holdMins: Number
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)(_objectSpread(_objectSpread({}, props.stay), {}, {
      room_type_id: props.room.room_type_id,
      name: '',
      email: '',
      phone: '',
      special_requests: '',
      agree: false
    }));
    var backUrl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return "/hotels/".concat(props.hotel.slug, "?").concat(new URLSearchParams(props.stay));
    });
    // errors that belong to no field on this page (room sold out, payment page down, dates)
    var generalError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return form.errors.room_type_id || form.errors.payment || form.errors.check_in || form.errors.check_out;
    });
    var niceDate = function niceDate(ymd) {
      return new Date("".concat(ymd, "T00:00:00")).toLocaleDateString('en-MY', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    };

    // the server answers with a redirect to the payment gateway (Inertia follows it as a full page load)
    var submit = function submit() {
      return form.post("/hotels/".concat(props.hotel.slug, "/book"), {
        preserveScroll: true
      });
    };
    var __returned__ = {
      props: props,
      form: form,
      backUrl: backUrl,
      generalError: generalError,
      niceDate: niceDate,
      submit: submit,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get useForm() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm;
      },
      get money() {
        return _composables_useMoney__WEBPACK_IMPORTED_MODULE_2__.money;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Checkout.vue?vue&type=template&id=65ef19b3":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Checkout.vue?vue&type=template&id=65ef19b3 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cl-public__container cl-section"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-chevron-left"
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "cl-section__title"
}, "Your details", -1 /* HOISTED */);
var _hoisted_4 = ["onSubmit"];
var _hoisted_5 = {
  "class": "cl-info-card"
};
var _hoisted_6 = {
  "class": "cl-form-grid"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "I agree to the hotel's booking and cancellation policy.", -1 /* HOISTED */);
var _hoisted_8 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_9 = {
  key: 1,
  "class": "cl-policy"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Cancellation policy", -1 /* HOISTED */);
var _hoisted_11 = ["innerHTML"];
var _hoisted_12 = {
  key: 2,
  "class": "cl-alert-inline"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-exclamation-circle"
}, null, -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "cl-summary"
};
var _hoisted_15 = ["src", "alt"];
var _hoisted_16 = {
  "class": "cl-summary__body"
};
var _hoisted_17 = {
  "class": "cl-summary__room"
};
var _hoisted_18 = {
  "class": "cl-summary__list"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Check-in", -1 /* HOISTED */);
var _hoisted_20 = {
  key: 0
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Check-out", -1 /* HOISTED */);
var _hoisted_22 = {
  key: 0
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Guests", -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "cl-summary__total"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Total", -1 /* HOISTED */);
var _hoisted_26 = ["disabled"];
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-lock"
}, null, -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "cl-summary__note"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-clock"
}, null, -1 /* HOISTED */);
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-flask"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_ui_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-input");
  var _component_ui_textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-textarea");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Checkout"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: $setup.backUrl,
    "class": "cl-back"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back to rooms")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"]), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "cl-checkout",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
    modelValue: $setup.form.name,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.name = $event;
    }),
    label: "Full name",
    autocomplete: "name",
    error: $setup.form.errors.name,
    "class": "is-full",
    placeholder: "As in your IC / passport"
  }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
    modelValue: $setup.form.email,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.email = $event;
    }),
    label: "Email",
    type: "email",
    autocomplete: "email",
    error: $setup.form.errors.email,
    placeholder: "you@example.com"
  }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
    modelValue: $setup.form.phone,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.phone = $event;
    }),
    label: "Mobile number",
    type: "tel",
    autocomplete: "tel",
    error: $setup.form.errors.phone,
    placeholder: "+60 12-345 6789"
  }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_textarea, {
    modelValue: $setup.form.special_requests,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.special_requests = $event;
    }),
    label: "Special requests (optional)",
    rows: 3,
    "class": "is-full",
    error: $setup.form.errors.special_requests,
    placeholder: "e.g. late arrival, high floor, baby cot"
  }, null, 8 /* PROPS */, ["modelValue", "error"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-agree", {
      'is-invalid': $setup.form.errors.agree
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.agree = $event;
    }),
    type: "checkbox"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.agree]]), _hoisted_7], 2 /* CLASS */), $setup.form.errors.agree ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.agree), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.hotel.cancellation_policy ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "cl-rich-text",
    innerHTML: $props.hotel.cancellation_policy
  }, null, 8 /* PROPS */, _hoisted_11)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.generalError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.generalError), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" summary "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.hotel.photo_url,
    alt: $props.hotel.name,
    "class": "cl-summary__photo"
  }, null, 8 /* PROPS */, _hoisted_15), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.room.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dl", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.niceDate($props.stay.check_in)), 1 /* TEXT */), $props.hotel.check_in_time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_20, " from " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.check_in_time), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.niceDate($props.stay.check_out)), 1 /* TEXT */), $props.hotel.check_out_time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_22, " by " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.check_out_time), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.stay.adults) + " adult(s)" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.stay.children ? ", ".concat($props.stay.children, " child(ren)") : ''), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.money($props.room.price)) + " × " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.room.nights) + " night" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.room.nights > 1 ? 's' : ''), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.money($props.room.total)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.money($props.room.total)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "cl-btn cl-btn--gradient cl-btn--pill cl-btn--block",
    disabled: $setup.form.processing
  }, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.processing ? 'Opening payment…' : "Pay ".concat($setup.money($props.room.total))), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_26), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your room is held for " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.holdMins) + " minutes while you pay. ", 1 /* TEXT */), $props.isMock ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [_hoisted_30, _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Test mode: you will see the mock payment page.")], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4)])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/composables/useMoney.js":
/*!**********************************************!*\
  !*** ./resources/js/composables/useMoney.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   money: () => (/* binding */ money)
/* harmony export */ });
// Money for display:  money(259) -> "RM 259.00"
var formatter = new Intl.NumberFormat('en-MY', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
var money = function money(amount) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MYR';
  return "".concat(currency === 'MYR' ? 'RM' : currency, " ").concat(formatter.format(Number(amount) || 0));
};

/***/ }),

/***/ "./resources/js/Pages/Public/Checkout.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Public/Checkout.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkout_vue_vue_type_template_id_65ef19b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=65ef19b3 */ "./resources/js/Pages/Public/Checkout.vue?vue&type=template&id=65ef19b3");
/* harmony import */ var _Checkout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Public/Checkout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Checkout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Checkout_vue_vue_type_template_id_65ef19b3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Public/Checkout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Public/Checkout.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Public/Checkout.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Checkout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Checkout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Public/Checkout.vue?vue&type=template&id=65ef19b3":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Public/Checkout.vue?vue&type=template&id=65ef19b3 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_template_id_65ef19b3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Checkout_vue_vue_type_template_id_65ef19b3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Checkout.vue?vue&type=template&id=65ef19b3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Checkout.vue?vue&type=template&id=65ef19b3");


/***/ })

}]);