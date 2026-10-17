"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Public_MockGateway_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/MockGateway.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/MockGateway.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _composables_useMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/useMoney */ "./resources/js/composables/useMoney.js");




// a gateway page: no booking-site header / footer
var __default__ = {
  layout: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'MockGateway',
  props: {
    payment: Object,
    // { ref, amount, currency, status }
    merchant: String,
    description: String,
    payer: Object,
    methods: Array,
    // the hotel's accepted methods, grouped
    completeUrl: String,
    // signed
    cancelUrl: String
  },
  setup: function setup(__props, _ref) {
    var _props$methods$0$item, _props$methods$, _props$methods$$items;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var method = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_props$methods$0$item = (_props$methods$ = props.methods[0]) === null || _props$methods$ === void 0 ? void 0 : (_props$methods$$items = _props$methods$.items[0]) === null || _props$methods$$items === void 0 ? void 0 : _props$methods$$items.key) !== null && _props$methods$0$item !== void 0 ? _props$methods$0$item : '');
    var busy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var complete = function complete(outcome) {
      return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.post(props.completeUrl, {
        outcome: outcome,
        method: method.value
      }, {
        onStart: function onStart() {
          busy.value = true;
        },
        onFinish: function onFinish() {
          busy.value = false;
        }
      });
    };
    var __returned__ = {
      props: props,
      method: method,
      busy: busy,
      complete: complete,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get router() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router;
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
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/MockGateway.vue?vue&type=template&id=36d851fd":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/MockGateway.vue?vue&type=template&id=36d851fd ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cl-gateway"
};
var _hoisted_2 = {
  "class": "cl-gateway__card"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "cl-gateway__badge"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-flask"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" MOCK GATEWAY · TEST MODE · NO REAL MONEY")], -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "cl-gateway__head"
};
var _hoisted_5 = {
  "class": "cl-gateway__merchant"
};
var _hoisted_6 = {
  "class": "cl-gateway__desc"
};
var _hoisted_7 = {
  "class": "cl-gateway__amount"
};
var _hoisted_8 = {
  "class": "cl-gateway__payer"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-user"
}, null, -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "cl-gateway__title"
}, "Choose a payment method", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "cl-gateway__group-title"
};
var _hoisted_12 = {
  "class": "cl-gateway__methods"
};
var _hoisted_13 = ["value"];
var _hoisted_14 = ["src", "alt"];
var _hoisted_15 = {
  key: 0,
  "class": "cl-gateway__desc"
};
var _hoisted_16 = {
  "class": "cl-gateway__actions"
};
var _hoisted_17 = ["disabled"];
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-check"
}, null, -1 /* HOISTED */);
var _hoisted_19 = ["disabled"];
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times"
}, null, -1 /* HOISTED */);
var _hoisted_21 = {
  key: 1,
  "class": "cl-gateway__desc"
};
var _hoisted_22 = ["href"];
var _hoisted_23 = {
  "class": "cl-gateway__ref"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Mock Payment Gateway"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.merchant), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.money($props.payment.amount, $props.payment.currency)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.payer.name) + " · " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.payer.email), 1 /* TEXT */)]), $props.payment.status === 'pending' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.methods, function (group) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: group.key,
      "class": "cl-gateway__group"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(group.icon)
    }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(group.label), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.items, function (m) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
        key: m.key,
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-gateway__method", {
          'is-selected': $setup.method === m.key
        }])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.method = $event;
        }),
        type: "radio",
        value: m.key
      }, null, 8 /* PROPS */, _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, $setup.method]]), m.logo_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
        key: 0,
        src: m.logo_url,
        alt: m.name
      }, null, 8 /* PROPS */, _hoisted_14)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(m.name), 1 /* TEXT */)], 2 /* CLASS */);
    }), 128 /* KEYED_FRAGMENT */))])]);
  }), 128 /* KEYED_FRAGMENT */)), !$props.methods.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_15, "This hotel has no online payment methods switched on - the mock accepts any.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "cl-btn cl-btn--gradient cl-btn--pill",
    disabled: $setup.busy,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.complete('paid');
    })
  }, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Pay " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.money($props.payment.amount, $props.payment.currency)), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "cl-btn cl-btn--light cl-btn--pill",
    disabled: $setup.busy,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.complete('failed');
    })
  }, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Simulate failed payment ")], 8 /* PROPS */, _hoisted_19)])], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_21, "This bill is already " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.payment.status) + ".", 1 /* TEXT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $props.cancelUrl,
    "class": "cl-gateway__cancel"
  }, "Cancel and return to the hotel", 8 /* PROPS */, _hoisted_22), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, "Bill " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.payment.ref), 1 /* TEXT */)])])], 64 /* STABLE_FRAGMENT */);
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

/***/ "./resources/js/Pages/Public/MockGateway.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Public/MockGateway.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MockGateway_vue_vue_type_template_id_36d851fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MockGateway.vue?vue&type=template&id=36d851fd */ "./resources/js/Pages/Public/MockGateway.vue?vue&type=template&id=36d851fd");
/* harmony import */ var _MockGateway_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MockGateway.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Public/MockGateway.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MockGateway_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MockGateway_vue_vue_type_template_id_36d851fd__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Public/MockGateway.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Public/MockGateway.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Public/MockGateway.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MockGateway_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MockGateway_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MockGateway.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/MockGateway.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Public/MockGateway.vue?vue&type=template&id=36d851fd":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Public/MockGateway.vue?vue&type=template&id=36d851fd ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MockGateway_vue_vue_type_template_id_36d851fd__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MockGateway_vue_vue_type_template_id_36d851fd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MockGateway.vue?vue&type=template&id=36d851fd */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/MockGateway.vue?vue&type=template&id=36d851fd");


/***/ })

}]);