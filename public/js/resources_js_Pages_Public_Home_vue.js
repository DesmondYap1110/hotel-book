"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Public_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Home.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Home.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Public_StaySearch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Public/StaySearch.vue */ "./resources/js/components/Public/StaySearch.vue");
/* harmony import */ var _composables_useMoney__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composables/useMoney */ "./resources/js/composables/useMoney.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Home',
  props: {
    hotels: Array,
    // [{ slug, name, brand, tagline, location, stars, photo_url, from_price }]
    stay: Object // default dates + guests
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var hotelUrl = function hotelUrl(hotel) {
      return "/hotels/".concat(hotel.slug, "?").concat(new URLSearchParams(props.stay));
    };
    var __returned__ = {
      props: props,
      hotelUrl: hotelUrl,
      StaySearch: _components_Public_StaySearch_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      get money() {
        return _composables_useMoney__WEBPACK_IMPORTED_MODULE_1__.money;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Public/StaySearch.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Public/StaySearch.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'StaySearch',
  props: {
    stay: {
      type: Object,
      required: true
    },
    // { check_in, check_out, adults, children }
    hotels: {
      type: Array,
      "default": null
    },
    // [{ slug, name }] -> show the hotel dropdown
    hotelSlug: {
      type: String,
      "default": ''
    },
    // fixed hotel (hotel page)
    errors: {
      type: Object,
      "default": function _default() {
        return {};
      }
    } // server errors for check_in / check_out
  },
  setup: function setup(__props, _ref) {
    var _props$hotels, _props$hotels$;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var today = new Date().toISOString().slice(0, 10);
    var slug = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.hotelSlug || ((_props$hotels = props.hotels) === null || _props$hotels === void 0 ? void 0 : (_props$hotels$ = _props$hotels[0]) === null || _props$hotels$ === void 0 ? void 0 : _props$hotels$.slug) || '');
    var dates = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("".concat(props.stay.check_in, " to ").concat(props.stay.check_out));
    var adults = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(Number(props.stay.adults) || 2);
    var children = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(Number(props.stay.children) || 0);
    var localError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var hotelError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var hotelOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (props.hotels || []).map(function (h) {
        return {
          value: h.slug,
          label: h.name
        };
      });
    });
    var adultOptions = [1, 2, 3, 4, 5, 6].map(function (n) {
      return {
        value: n,
        label: "".concat(n, " adult").concat(n > 1 ? 's' : '')
      };
    });
    var childOptions = [0, 1, 2, 3, 4].map(function (n) {
      return {
        value: n,
        label: n ? "".concat(n, " child").concat(n > 1 ? 'ren' : '') : 'No children'
      };
    });
    var datesError = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _props$errors$check_i, _props$errors$check_o;
      return localError.value || ((_props$errors$check_i = props.errors.check_in) === null || _props$errors$check_i === void 0 ? void 0 : _props$errors$check_i[0]) || ((_props$errors$check_o = props.errors.check_out) === null || _props$errors$check_o === void 0 ? void 0 : _props$errors$check_o[0]) || '';
    });
    var search = function search() {
      var _split = (dates.value || '').split(' to '),
        _split2 = _slicedToArray(_split, 2),
        checkIn = _split2[0],
        checkOut = _split2[1];
      localError.value = !checkIn || !checkOut ? 'Choose a check-in and a check-out date.' : '';
      hotelError.value = slug.value ? '' : 'Choose a hotel.';
      if (localError.value || hotelError.value) return;
      _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router.get("/hotels/".concat(slug.value), {
        check_in: checkIn,
        check_out: checkOut,
        adults: adults.value,
        children: children.value
      });
    };
    var __returned__ = {
      props: props,
      today: today,
      slug: slug,
      dates: dates,
      adults: adults,
      children: children,
      localError: localError,
      hotelError: hotelError,
      hotelOptions: hotelOptions,
      adultOptions: adultOptions,
      childOptions: childOptions,
      datesError: datesError,
      search: search,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get router() {
        return _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.router;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Home.vue?vue&type=template&id=0b9eff4c":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Home.vue?vue&type=template&id=0b9eff4c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cl-hero"
};
var _hoisted_2 = {
  "class": "cl-public__container"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "cl-hero__title"
}, "Stay with Clementra", -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "cl-hero__text"
}, "Comfortable rooms across Malaysia. Book in minutes, pay securely with FPX, card or e-wallet.", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "cl-public__container cl-section"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "cl-section__title"
}, "Our hotels", -1 /* HOISTED */);
var _hoisted_7 = {
  key: 0,
  "class": "cl-hotel-grid"
};
var _hoisted_8 = {
  "class": "cl-hotel-card__photo"
};
var _hoisted_9 = ["src", "alt"];
var _hoisted_10 = {
  "class": "cl-hotel-card__body"
};
var _hoisted_11 = ["aria-label"];
var _hoisted_12 = {
  "class": "cl-hotel-card__name"
};
var _hoisted_13 = {
  key: 1,
  "class": "cl-hotel-card__meta"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-map-marker-alt"
}, null, -1 /* HOISTED */);
var _hoisted_15 = {
  key: 2,
  "class": "cl-hotel-card__tagline"
};
var _hoisted_16 = {
  "class": "cl-hotel-card__foot"
};
var _hoisted_17 = {
  key: 0,
  "class": "cl-price"
};
var _hoisted_18 = {
  key: 1,
  "class": "cl-price cl-price--muted"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "cl-hotel-card__cta"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View rooms "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-right"
})], -1 /* HOISTED */);
var _hoisted_20 = {
  key: 1,
  "class": "cl-list-empty"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Book your stay"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["StaySearch"], {
    stay: $props.stay,
    hotels: $props.hotels
  }, null, 8 /* PROPS */, ["stay", "hotels"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_5, [_hoisted_6, $props.hotels.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.hotels, function (hotel) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: hotel.slug,
      href: $setup.hotelUrl(hotel),
      "class": "cl-hotel-card"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: hotel.photo_url,
          alt: hotel.name,
          loading: "lazy"
        }, null, 8 /* PROPS */, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [hotel.stars ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          "class": "cl-stars",
          "aria-label": "".concat(hotel.stars, " stars")
        }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(hotel.stars, function (n) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
            key: n,
            "class": "fas fa-star"
          });
        }), 128 /* KEYED_FRAGMENT */))], 8 /* PROPS */, _hoisted_11)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hotel.name), 1 /* TEXT */), hotel.location ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hotel.location), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), hotel.tagline ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(hotel.tagline), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [hotel.from_price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("from "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.money(hotel.from_price)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" / night")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, "Rooms coming soon")), _hoisted_19])])];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"]);
  }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_20, "No hotels are open for booking yet."))])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Public/StaySearch.vue?vue&type=template&id=bc9bfae8":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Public/StaySearch.vue?vue&type=template&id=bc9bfae8 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["onSubmit"];
var _hoisted_2 = {
  key: 0,
  "class": "cl-field"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-hotel"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Hotel")], -1 /* HOISTED */);
var _hoisted_4 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_5 = {
  "class": "cl-field"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Adults", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "cl-field"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Children", -1 /* HOISTED */);
var _hoisted_9 = {
  type: "submit",
  "class": "cl-btn cl-btn--gradient cl-btn--pill cl-search__btn"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-search"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ui_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-select");
  var _component_ui_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-date-picker");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-search", {
      'has-hotel': $props.hotels
    }]),
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.search, ["prevent"])
  }, [$props.hotels ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
    modelValue: $setup.slug,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.slug = $event;
    }),
    options: $setup.hotelOptions,
    placeholder: "Choose a hotel",
    invalid: !!$setup.hotelError
  }, null, 8 /* PROPS */, ["modelValue", "options", "invalid"]), $setup.hotelError ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.hotelError), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_date_picker, {
    modelValue: $setup.dates,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.dates = $event;
    }),
    mode: "range",
    label: "Check-in – Check-out",
    "min-date": $setup.today,
    clearable: false,
    placeholder: "Choose your dates",
    error: $setup.datesError
  }, null, 8 /* PROPS */, ["modelValue", "min-date", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
    modelValue: $setup.adults,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.adults = $event;
    }),
    options: $setup.adultOptions
  }, null, 8 /* PROPS */, ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
    modelValue: $setup.children,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.children = $event;
    }),
    options: $setup.childOptions
  }, null, 8 /* PROPS */, ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hotels ? 'Search' : 'Update'), 1 /* TEXT */)])], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1);
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

/***/ "./resources/js/Pages/Public/Home.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Public/Home.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_0b9eff4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=0b9eff4c */ "./resources/js/Pages/Public/Home.vue?vue&type=template&id=0b9eff4c");
/* harmony import */ var _Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Public/Home.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_0b9eff4c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Public/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Public/StaySearch.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Public/StaySearch.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StaySearch_vue_vue_type_template_id_bc9bfae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaySearch.vue?vue&type=template&id=bc9bfae8 */ "./resources/js/components/Public/StaySearch.vue?vue&type=template&id=bc9bfae8");
/* harmony import */ var _StaySearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StaySearch.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Public/StaySearch.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StaySearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StaySearch_vue_vue_type_template_id_bc9bfae8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Public/StaySearch.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Public/Home.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Public/Home.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Home.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Public/StaySearch.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Public/StaySearch.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaySearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaySearch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StaySearch.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Public/StaySearch.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Public/Home.vue?vue&type=template&id=0b9eff4c":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Public/Home.vue?vue&type=template&id=0b9eff4c ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_0b9eff4c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_0b9eff4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=0b9eff4c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Public/Home.vue?vue&type=template&id=0b9eff4c");


/***/ }),

/***/ "./resources/js/components/Public/StaySearch.vue?vue&type=template&id=bc9bfae8":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Public/StaySearch.vue?vue&type=template&id=bc9bfae8 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaySearch_vue_vue_type_template_id_bc9bfae8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StaySearch_vue_vue_type_template_id_bc9bfae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StaySearch.vue?vue&type=template&id=bc9bfae8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Public/StaySearch.vue?vue&type=template&id=bc9bfae8");


/***/ })

}]);