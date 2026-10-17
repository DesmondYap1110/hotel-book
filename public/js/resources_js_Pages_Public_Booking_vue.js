"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Public_Booking_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Booking.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Booking.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _composables_useMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/useMoney */ "./resources/js/composables/useMoney.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Booking',
  props: {
    booking: Object,
    // see BookingController@show
    hotel: Object,
    payUrl: String // signed "pay again" URL while the hold lasts, else null
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var STATUS = {
      confirmed: {
        icon: 'fa-check',
        title: 'Your booking is confirmed',
        text: 'We look forward to welcoming you.'
      },
      pending_payment: {
        icon: 'fa-hourglass-half',
        title: 'Waiting for payment',
        text: 'Your room is held. Complete the payment to confirm it.'
      },
      expired: {
        icon: 'fa-times',
        title: 'Booking expired',
        text: 'The payment was not completed in time, so the room was released.'
      },
      cancelled: {
        icon: 'fa-ban',
        title: 'Booking cancelled',
        text: 'This booking was cancelled by the hotel.'
      }
    };
    var info = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _STATUS$props$booking;
      return (_STATUS$props$booking = STATUS[props.booking.status]) !== null && _STATUS$props$booking !== void 0 ? _STATUS$props$booking : STATUS.pending_payment;
    });
    var statusIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return info.value.icon;
    });
    var headline = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return info.value.title;
    });
    var subline = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.booking.status === 'pending_payment' && props.booking.last_payment === 'failed' ? 'The last payment did not go through. Your room is still held - you can try again.' : info.value.text;
    });

    // hold countdown (mm:ss); reloads the page when the hold ends
    var countdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var timer = null;
    var tick = function tick() {
      var left = Math.max(0, new Date(props.booking.expires_at) - Date.now());
      countdown.value = "".concat(Math.floor(left / 60000), ":").concat(String(Math.floor(left % 60000 / 1000)).padStart(2, '0'));
      if (!left) {
        clearInterval(timer);
        _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.reload();
      }
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (props.booking.expires_at) {
        tick();
        timer = setInterval(tick, 1000);
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
      return clearInterval(timer);
    });
    var paying = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var payNow = function payNow() {
      return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.post(props.payUrl, {}, {
        onStart: function onStart() {
          paying.value = true;
        },
        onFinish: function onFinish() {
          paying.value = false;
        }
      });
    };
    var __returned__ = {
      props: props,
      STATUS: STATUS,
      info: info,
      statusIcon: statusIcon,
      headline: headline,
      subline: subline,
      countdown: countdown,
      get timer() {
        return timer;
      },
      set timer(v) {
        timer = v;
      },
      tick: tick,
      paying: paying,
      payNow: payNow,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onBeforeUnmount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount,
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
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Booking.vue?vue&type=template&id=cea16a08":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Booking.vue?vue&type=template&id=cea16a08 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cl-public__container cl-section cl-booking"
};
var _hoisted_2 = {
  "class": "cl-status__icon"
};
var _hoisted_3 = {
  "class": "cl-status__title"
};
var _hoisted_4 = {
  "class": "cl-status__text"
};
var _hoisted_5 = {
  "class": "cl-status__ref"
};
var _hoisted_6 = ["onSubmit"];
var _hoisted_7 = ["disabled"];
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-lock"
}, null, -1 /* HOISTED */);
var _hoisted_9 = {
  key: 0,
  "class": "cl-status__hold"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-clock"
}, null, -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "cl-booking__grid"
};
var _hoisted_12 = {
  "class": "cl-info-card"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Your stay", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "cl-summary__list"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Hotel", -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Room", -1 /* HOISTED */);
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Check-in", -1 /* HOISTED */);
var _hoisted_18 = {
  key: 0
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Check-out", -1 /* HOISTED */);
var _hoisted_20 = {
  key: 0
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Guests", -1 /* HOISTED */);
var _hoisted_22 = {
  key: 0
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dt", null, "Requests", -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "cl-summary__total"
};
var _hoisted_25 = {
  key: 0,
  "class": "cl-summary__note"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-check-circle"
}, null, -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "cl-info-card"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Guest", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "cl-info-list"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-user"
}, null, -1 /* HOISTED */);
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-envelope"
}, null, -1 /* HOISTED */);
var _hoisted_32 = {
  key: 0
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-phone-alt"
}, null, -1 /* HOISTED */);
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Need help?", -1 /* HOISTED */);
var _hoisted_35 = {
  "class": "cl-info-list"
};
var _hoisted_36 = {
  key: 0
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-phone-alt"
}, null, -1 /* HOISTED */);
var _hoisted_38 = {
  key: 1
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-envelope"
}, null, -1 /* HOISTED */);
var _hoisted_40 = {
  key: 2
};
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-map-marker-alt"
}, null, -1 /* HOISTED */);
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "cl-summary__note"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-bookmark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Keep this page's link - it is your booking link.")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Booking ".concat($props.booking.reference)
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-status", "cl-status--".concat($props.booking.badge)])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fas", $setup.statusIcon])
  }, null, 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.headline), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.subline), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Booking reference "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.reference), 1 /* TEXT */)]), $props.payUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    key: 0,
    "class": "cl-status__pay",
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.payNow, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "cl-btn cl-btn--gradient cl-btn--pill",
    disabled: $setup.paying
  }, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.paying ? 'Opening payment…' : "Pay ".concat($setup.money($props.booking.total, $props.booking.currency))), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_7), $setup.countdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Room held for " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.countdown), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6)) : $props.booking.status !== 'confirmed' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 1,
    href: "/hotels/".concat($props.hotel.slug),
    "class": "cl-btn cl-btn--light cl-btn--pill"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Book again ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dl", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.room_type), 1 /* TEXT */), $props.booking.room_number ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" · Room " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.room_number), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.check_in), 1 /* TEXT */), $props.hotel.check_in_time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_18, " from " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.check_in_time), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.check_out), 1 /* TEXT */), $props.hotel.check_out_time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_20, " by " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.check_out_time), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.adults) + " adult(s)" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.children ? ", ".concat($props.booking.children, " child(ren)") : ''), 1 /* TEXT */)]), $props.booking.special_requests ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("dd", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.special_requests), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Total (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.nights) + " night" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.nights > 1 ? 's' : '') + ")", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.money($props.booking.total, $props.booking.currency)), 1 /* TEXT */)]), $props.booking.paid_at ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Paid on " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.paid_at), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.guest.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.guest.email), 1 /* TEXT */)]), $props.booking.guest.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.booking.guest.phone), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_35, [$props.hotel.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.phone), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.hotel.email ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.email), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.hotel.address ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotel.address), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_42])])])], 64 /* STABLE_FRAGMENT */);
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

/***/ "./resources/js/Pages/Public/Booking.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Public/Booking.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Booking_vue_vue_type_template_id_cea16a08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking.vue?vue&type=template&id=cea16a08 */ "./resources/js/Pages/Public/Booking.vue?vue&type=template&id=cea16a08");
/* harmony import */ var _Booking_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Public/Booking.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Booking_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Booking_vue_vue_type_template_id_cea16a08__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Public/Booking.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Public/Booking.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Public/Booking.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Booking_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Booking_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Booking.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Booking.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Public/Booking.vue?vue&type=template&id=cea16a08":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Public/Booking.vue?vue&type=template&id=cea16a08 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Booking_vue_vue_type_template_id_cea16a08__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Booking_vue_vue_type_template_id_cea16a08__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Booking.vue?vue&type=template&id=cea16a08 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Booking.vue?vue&type=template&id=cea16a08");


/***/ })

}]);