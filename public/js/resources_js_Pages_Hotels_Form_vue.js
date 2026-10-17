"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Hotels_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Form.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Form.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/useBreadcrumbs */ "./resources/js/composables/useBreadcrumbs.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Form',
  props: {
    hotel: Object,
    // all fields, see HotelController@form
    hq: Object,
    // { id, name } or null
    hotels: Array,
    // switcher list: [{ id, title, subtitle, icon, tag, active, url }]
    options: Object,
    // types, statuses, paymentMethods, placeCategories, socialNetworks, facilities
    submitUrl: String,
    backUrl: String
  },
  setup: function setup(__props, _ref) {
    var _h$star_rating;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var isEdit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return !!props.hotel.id;
    });
    var title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (!isEdit.value) return props.hotel.type === 'headquarters' ? 'Add Headquarters' : 'Add Branch';
      return "Edit ".concat(props.hotel.name);
    });
    // Hotels › Add Branch   |   Hotels › Meriton Suites Herschel Street › Edit
    if (isEdit.value) (0,_composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__.useBreadcrumbs)(props.hotel.name, 'Edit');else (0,_composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__.useBreadcrumbs)(title.value);
    var starOptions = [1, 2, 3, 4, 5].map(function (n) {
      return {
        value: n,
        label: '★'.repeat(n)
      };
    });
    var socialIcon = function socialIcon(network) {
      var _x$linkedin$youtube$t;
      return (_x$linkedin$youtube$t = {
        x: 'fa-twitter',
        linkedin: 'fa-linkedin',
        youtube: 'fa-youtube',
        tiktok: 'fa-tiktok'
      }[network]) !== null && _x$linkedin$youtube$t !== void 0 ? _x$linkedin$youtube$t : "fa-".concat(network);
    };
    var socialLabel = function socialLabel(network) {
      var _x$linkedin$youtube$t2;
      return (_x$linkedin$youtube$t2 = {
        x: 'X (Twitter)',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',
        tiktok: 'TikTok'
      }[network]) !== null && _x$linkedin$youtube$t2 !== void 0 ? _x$linkedin$youtube$t2 : network.charAt(0).toUpperCase() + network.slice(1);
    };

    // ---- tabs ----
    // which form fields live on which tab (for the red error counts)
    var TAB_FIELDS = {
      general: ['type', 'status', 'name', 'brand', 'star_rating', 'tagline', 'description', 'legal_name', 'registration_no'],
      location: ['address_line1', 'address_line2', 'city', 'state', 'postcode', 'country', 'latitude', 'longitude', 'map_url'],
      contact: ['phones', 'email', 'website', 'social_links'],
      stay: ['check_in_time', 'check_out_time', 'reception_hours', 'late_arrival_note', 'cancellation_policy', 'house_rules'],
      payment: ['parking_available', 'parking_fee', 'parking_clearance', 'parking_notes', 'payment_methods'],
      facilities: ['facility_ids'],
      nearby: ['nearby_places'],
      photo: ['photo'] // shown on the General tab badge (photo sits above the menu)
    };

    var TAB_INFO = {
      general: ['General', 'fas fa-hotel'],
      location: ['Location', 'fas fa-map-marker-alt'],
      contact: ['Contact', 'fas fa-phone-alt'],
      stay: ['Stay & Policies', 'fas fa-concierge-bell'],
      payment: ['Parking & Payment', 'fas fa-car'],
      facilities: ['Facilities', 'fas fa-swimming-pool'],
      nearby: ['Nearby Places', 'fas fa-map-signs']
    };
    var tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('general');

    // number of errors on a tab: 'phones.0.number' belongs to 'phones', etc.
    var errorsOn = function errorsOn(key) {
      return Object.keys(form.errors).filter(function (field) {
        return [].concat(_toConsumableArray(TAB_FIELDS[key]), _toConsumableArray(key === 'general' ? TAB_FIELDS.photo : [])).includes(field.split('.')[0]);
      }).length;
    };
    var tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return Object.entries(TAB_INFO).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          _ref3$ = _slicedToArray(_ref3[1], 2),
          label = _ref3$[0],
          icon = _ref3$[1];
        return {
          key: key,
          label: label,
          icon: icon,
          errors: errorsOn(key)
        };
      });
    });

    // card under the photo: name, brand, live status dot
    var switcherCurrent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _props$hq$name, _props$hq;
      return {
        title: form.name || (props.hotel.type === 'headquarters' ? 'New headquarters' : 'New branch'),
        subtitle: form.brand || (props.hotel.type === 'headquarters' ? 'Headquarters' : "Branch of ".concat((_props$hq$name = (_props$hq = props.hq) === null || _props$hq === void 0 ? void 0 : _props$hq.name) !== null && _props$hq$name !== void 0 ? _props$hq$name : '')),
        icon: props.hotel.type === 'headquarters' ? 'fas fa-building' : 'fas fa-hotel',
        active: form.status === 'active'
      };
    });
    var h = props.hotel;
    var uploading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false); // true while FilePond is still uploading

    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)(_objectSpread(_objectSpread({}, h), {}, {
      star_rating: (_h$star_rating = h.star_rating) !== null && _h$star_rating !== void 0 ? _h$star_rating : '',
      phones: (h.phones || []).map(function (p) {
        return _objectSpread({}, p);
      }),
      social_links: _objectSpread({}, h.social_links || {}),
      payment_methods: _toConsumableArray(h.payment_methods || []),
      facility_ids: _toConsumableArray(h.facility_ids || []),
      nearby_places: (h.nearby_places || []).map(function (p) {
        return _objectSpread({}, p);
      }),
      // [] = no photo, [{ id: 'current', url }] = existing, [{ upload }] = new (FilePond)
      photo: (h.photo || []).map(function (p) {
        return _objectSpread({}, p);
      })
    }));

    // Social media switches: on = show the link box. Off clears the link (not saved),
    // but remembers it in case the switch is turned back on before saving.
    var socialOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.fromEntries(props.options.socialNetworks.map(function (n) {
      return [n, !!form.social_links[n]];
    })));
    var socialBackup = {};
    var toggleSocial = function toggleSocial(network, on) {
      socialOn[network] = on;
      if (on) {
        var _socialBackup$network;
        form.social_links[network] = (_socialBackup$network = socialBackup[network]) !== null && _socialBackup$network !== void 0 ? _socialBackup$network : '';
      } else {
        socialBackup[network] = form.social_links[network];
        form.social_links[network] = '';
      }
    };

    // rows for the switch tables (<ui-toggle-table>)
    var paymentRows = props.options.paymentMethods.flatMap(function (group) {
      return group.items.map(function (m) {
        return {
          key: m.key,
          name: m.name,
          logo: m.logo_url,
          category: {
            label: group.label,
            color: group.color
          },
          note: m.disabled ? 'Disabled' : null // switched off in Settings but still on this hotel
        };
      });
    });

    var facilityRows = props.options.facilities.flatMap(function (group) {
      return group.items.map(function (f) {
        return {
          key: f.id,
          name: f.name,
          category: {
            label: group.label
          }
        };
      });
    });

    // Files are already uploaded by FilePond, so this is a normal JSON request.
    var submit = function submit() {
      form.transform(function (data) {
        return _objectSpread(_objectSpread({}, data), {}, {
          photo: data.photo.map(function (_ref4) {
            var id = _ref4.id,
              upload = _ref4.upload;
            return {
              id: id !== null && id !== void 0 ? id : null,
              upload: upload !== null && upload !== void 0 ? upload : null
            };
          })
        });
      })[isEdit.value ? 'put' : 'post'](props.submitUrl, {
        preserveScroll: true,
        // jump to the first tab that has a problem
        onError: function onError() {
          var _tabs$value$find$key, _tabs$value$find;
          tab.value = (_tabs$value$find$key = (_tabs$value$find = tabs.value.find(function (t) {
            return t.errors;
          })) === null || _tabs$value$find === void 0 ? void 0 : _tabs$value$find.key) !== null && _tabs$value$find$key !== void 0 ? _tabs$value$find$key : tab.value;
        }
      });
    };
    var __returned__ = {
      props: props,
      isEdit: isEdit,
      title: title,
      starOptions: starOptions,
      socialIcon: socialIcon,
      socialLabel: socialLabel,
      TAB_FIELDS: TAB_FIELDS,
      TAB_INFO: TAB_INFO,
      tab: tab,
      errorsOn: errorsOn,
      tabs: tabs,
      switcherCurrent: switcherCurrent,
      h: h,
      uploading: uploading,
      form: form,
      socialOn: socialOn,
      socialBackup: socialBackup,
      toggleSocial: toggleSocial,
      paymentRows: paymentRows,
      facilityRows: facilityRows,
      submit: submit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Form.vue?vue&type=template&id=8530aaca":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Form.vue?vue&type=template&id=8530aaca ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["onSubmit"];
var _hoisted_2 = {
  "class": "cl-tab-summary"
};
var _hoisted_3 = {
  key: 0,
  "class": "cl-field__error cl-tab-summary__note"
};
var _hoisted_4 = {
  key: 1,
  "class": "cl-field__hint cl-tab-summary__note"
};
var _hoisted_5 = {
  "class": "cl-field"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Star rating", -1 /* HOISTED */);
var _hoisted_7 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_8 = {
  "class": "cl-field is-full"
};
var _hoisted_9 = {
  "class": "cl-form-table"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "34%"
  }
}, "Phone"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "is-center",
  style: {
    "width": "90px"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_11 = {
  "data-label": "Phone"
};
var _hoisted_12 = ["onUpdate:modelValue"];
var _hoisted_13 = {
  "data-label": "Number"
};
var _hoisted_14 = ["onUpdate:modelValue"];
var _hoisted_15 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_16 = {
  "class": "is-center",
  "data-label": "Action"
};
var _hoisted_17 = {
  key: 0
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "3",
  "class": "cl-form-table__empty"
}, "No phone numbers yet.", -1 /* HOISTED */);
var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = {
  colspan: "3"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-plus"
}, null, -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "cl-field is-full"
};
var _hoisted_23 = {
  "class": "cl-form-table"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "34%"
  }
}, "Social Media"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Link"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "is-center",
  style: {
    "width": "90px"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_25 = {
  "data-label": "Social Media"
};
var _hoisted_26 = {
  "class": "cl-form-table__name"
};
var _hoisted_27 = {
  "data-label": "Link"
};
var _hoisted_28 = ["onUpdate:modelValue", "placeholder"];
var _hoisted_29 = {
  key: 1,
  "class": "cl-form-table__muted"
};
var _hoisted_30 = {
  key: 2,
  "class": "cl-field__error"
};
var _hoisted_31 = {
  "class": "is-center",
  "data-label": "Action"
};
var _hoisted_32 = {
  "class": "cl-field is-full"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Payment methods accepted", -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "cl-note"
};
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-exclamation-circle"
}, null, -1 /* HOISTED */);
var _hoisted_36 = {
  "class": "cl-field is-full"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Facilities available", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "cl-note"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-exclamation-circle"
}, null, -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "cl-field is-full"
};
var _hoisted_41 = {
  "class": "cl-form-table"
};
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Place"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "26%"
  }
}, "Type"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "120px"
  }
}, "Distance (km)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "is-center",
  style: {
    "width": "80px"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_43 = {
  "data-label": "Place"
};
var _hoisted_44 = ["onUpdate:modelValue"];
var _hoisted_45 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_46 = {
  "data-label": "Type"
};
var _hoisted_47 = {
  "data-label": "Distance"
};
var _hoisted_48 = ["onUpdate:modelValue"];
var _hoisted_49 = {
  "class": "is-center",
  "data-label": "Action"
};
var _hoisted_50 = {
  key: 0
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  colspan: "4",
  "class": "cl-form-table__empty"
}, "No places yet.", -1 /* HOISTED */);
var _hoisted_52 = [_hoisted_51];
var _hoisted_53 = {
  colspan: "4"
};
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-plus"
}, null, -1 /* HOISTED */);
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-chevron-left"
}, null, -1 /* HOISTED */);
var _hoisted_56 = ["disabled"];
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-save"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_ui_file_upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-file-upload");
  var _component_ui_record_switcher = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-record-switcher");
  var _component_ui_switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-switch");
  var _component_ui_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-input");
  var _component_ui_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-select");
  var _component_ui_rich_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-rich-editor");
  var _component_ui_form_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-form-section");
  var _component_ui_icon_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-icon-button");
  var _component_ui_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-date-picker");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_ui_toggle_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-toggle-table");
  var _component_ui_tab_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-tab-layout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: $setup.title
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_tab_layout, {
    modelValue: $setup.tab,
    "onUpdate:modelValue": _cache[35] || (_cache[35] = function ($event) {
      return $setup.tab = $event;
    }),
    tabs: $setup.tabs
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" one photo per hotel (building placeholder until uploaded) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_file_upload, {
        modelValue: $setup.form.photo,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.photo = $event;
        }),
        busy: $setup.uploading,
        "onUpdate:busy": _cache[1] || (_cache[1] = function ($event) {
          return $setup.uploading = $event;
        }),
        variant: "avatar",
        placeholder: $props.hotel.photo_placeholder,
        error: $setup.form.errors.photo
      }, null, 8 /* PROPS */, ["modelValue", "busy", "placeholder", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" current hotel + jump to another hotel (HQ first). The dot follows the Status switch. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_record_switcher, {
        current: $setup.switcherCurrent,
        items: $props.hotels,
        "current-id": $props.hotel.id
      }, null, 8 /* PROPS */, ["current", "items", "current-id"]), $setup.form.errors.type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.type), 1 /* TEXT */)) : !$setup.isEdit && $props.hotel.type === 'headquarters' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, " The first hotel is the headquarters. Every hotel added after it is a branch. ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    general: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_switch, {
            modelValue: $setup.form.status,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $setup.form.status = $event;
            }),
            label: "Status",
            "on-value": "active",
            "off-value": "inactive",
            "on-text": "Active",
            "off-text": "Inactive",
            error: $setup.form.errors.status
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.name,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $setup.form.name = $event;
            }),
            label: "Hotel name",
            error: $setup.form.errors.name,
            required: "",
            placeholder: "e.g. Meriton Suites Herschel Street, Brisbane",
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.brand,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $setup.form.brand = $event;
            }),
            label: "Brand / group",
            error: $setup.form.errors.brand,
            placeholder: "e.g. Meriton Suites"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
            modelValue: $setup.form.star_rating,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $setup.form.star_rating = $event;
            }),
            options: $setup.starOptions,
            placeholder: "Not rated"
          }, null, 8 /* PROPS */, ["modelValue", "options"]), $setup.form.errors.star_rating ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.star_rating), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.tagline,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $setup.form.tagline = $event;
            }),
            label: "Tagline",
            error: $setup.form.errors.tagline,
            "class": "is-full",
            placeholder: "e.g. Sky-high value in the Brisbane CBD"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_rich_editor, {
            modelValue: $setup.form.description,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
              return $setup.form.description = $event;
            }),
            label: "Description",
            error: $setup.form.errors.description,
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), $setup.form.type === 'headquarters' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: 0
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.legal_name,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
              return $setup.form.legal_name = $event;
            }),
            label: "Legal / company name",
            error: $setup.form.errors.legal_name,
            placeholder: "e.g. Meriton Property Services Pty Ltd"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.registration_no,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
              return $setup.form.registration_no = $event;
            }),
            label: "Registration no. (ABN / SSM)",
            error: $setup.form.errors.registration_no
          }, null, 8 /* PROPS */, ["modelValue", "error"])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1 /* STABLE */
      })];
    }),

    location: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.address_line1,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
              return $setup.form.address_line1 = $event;
            }),
            label: "Address",
            error: $setup.form.errors.address_line1,
            required: "",
            placeholder: "e.g. 43 Herschel Street",
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.address_line2,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
              return $setup.form.address_line2 = $event;
            }),
            label: "Address line 2",
            error: $setup.form.errors.address_line2,
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.city,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
              return $setup.form.city = $event;
            }),
            label: "City",
            error: $setup.form.errors.city,
            required: ""
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.state,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
              return $setup.form.state = $event;
            }),
            label: "State",
            error: $setup.form.errors.state
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.postcode,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
              return $setup.form.postcode = $event;
            }),
            label: "Postcode",
            error: $setup.form.errors.postcode
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.country,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
              return $setup.form.country = $event;
            }),
            label: "Country",
            error: $setup.form.errors.country,
            required: ""
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.latitude,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
              return $setup.form.latitude = $event;
            }),
            label: "Latitude",
            error: $setup.form.errors.latitude,
            inputmode: "decimal",
            placeholder: "-27.4669"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.longitude,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
              return $setup.form.longitude = $event;
            }),
            label: "Longitude",
            error: $setup.form.errors.longitude,
            inputmode: "decimal",
            placeholder: "153.0179"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.map_url,
            "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
              return $setup.form.map_url = $event;
            }),
            label: "Google Maps link",
            error: $setup.form.errors.map_url,
            type: "url",
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    contact: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.email,
            "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
              return $setup.form.email = $event;
            }),
            label: "Email",
            type: "email",
            error: $setup.form.errors.email
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.website,
            "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
              return $setup.form.website = $event;
            }),
            label: "Website",
            type: "url",
            error: $setup.form.errors.website,
            placeholder: "https://"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Phone numbers: one row each "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.phones, function (phone, i) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
              key: i
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return phone.label = $event;
              },
              "class": "cl-form-table__input",
              placeholder: "e.g. Australia, Hotel direct"
            }, null, 8 /* PROPS */, _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, phone.label]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return phone.number = $event;
              },
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-form-table__input", {
                'is-invalid': $setup.form.errors["phones.".concat(i, ".number")]
              }]),
              placeholder: "e.g. +61 7 3999 8000"
            }, null, 10 /* CLASS, PROPS */, _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, phone.number]]), $setup.form.errors["phones.".concat(i, ".number")] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors["phones.".concat(i, ".number")]), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_icon_button, {
              icon: "fas fa-trash",
              title: "Remove",
              variant: "soft-danger",
              size: "sm",
              onClick: function onClick($event) {
                return $setup.form.phones.splice(i, 1);
              }
            }, null, 8 /* PROPS */, ["onClick"])])]);
          }), 128 /* KEYED_FRAGMENT */)), !$setup.form.phones.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_17, _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            "class": "cl-form-table__add",
            onClick: _cache[21] || (_cache[21] = function ($event) {
              return $setup.form.phones.push({
                label: '',
                number: ''
              });
            })
          }, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add phone number ")])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Social media: switch a network on to add its link "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options.socialNetworks, function (network) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
              key: network,
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                'is-off': !$setup.socialOn[network]
              })
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["fab", $setup.socialIcon(network)])
            }, null, 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.socialLabel(network)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_27, [$setup.socialOn[network] ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
              key: 0,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return $setup.form.social_links[network] = $event;
              },
              type: "url",
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-form-table__input", {
                'is-invalid': $setup.form.errors["social_links.".concat(network)]
              }]),
              placeholder: "https://".concat(network === 'x' ? 'x' : network, ".com/...")
            }, null, 10 /* CLASS, PROPS */, _hoisted_28)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.social_links[network]]]) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_29, "Not used")), $setup.form.errors["social_links.".concat(network)] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors["social_links.".concat(network)]), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_switch, {
              "model-value": $setup.socialOn[network],
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return $setup.toggleSocial(network, $event);
              }
            }, null, 8 /* PROPS */, ["model-value", "onUpdate:modelValue"])])], 2 /* CLASS */);
          }), 128 /* KEYED_FRAGMENT */))])])])];
        }),

        _: 1 /* STABLE */
      })];
    }),

    stay: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_date_picker, {
            modelValue: $setup.form.check_in_time,
            "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
              return $setup.form.check_in_time = $event;
            }),
            mode: "time",
            label: "Check-in from",
            placeholder: "e.g. 3:00 PM",
            error: $setup.form.errors.check_in_time
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_date_picker, {
            modelValue: $setup.form.check_out_time,
            "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
              return $setup.form.check_out_time = $event;
            }),
            mode: "time",
            label: "Check-out by",
            placeholder: "e.g. 10:00 AM",
            error: $setup.form.errors.check_out_time
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.reception_hours,
            "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
              return $setup.form.reception_hours = $event;
            }),
            label: "Reception / guest services hours",
            error: $setup.form.errors.reception_hours,
            placeholder: "e.g. 24 hours",
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_rich_editor, {
            modelValue: $setup.form.late_arrival_note,
            "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
              return $setup.form.late_arrival_note = $event;
            }),
            label: "Early / late arrival",
            error: $setup.form.errors.late_arrival_note,
            height: 130,
            "class": "is-full",
            placeholder: "e.g. Bookings not claimed by 11pm on arrival are released and the first night charged."
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_rich_editor, {
            modelValue: $setup.form.cancellation_policy,
            "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
              return $setup.form.cancellation_policy = $event;
            }),
            label: "Cancellation policy",
            error: $setup.form.errors.cancellation_policy,
            height: 130,
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_rich_editor, {
            modelValue: $setup.form.house_rules,
            "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
              return $setup.form.house_rules = $event;
            }),
            label: "House rules",
            error: $setup.form.errors.house_rules,
            height: 130,
            "class": "is-full",
            hint: "Visitors, curfew, pets, smoking, minimum age..."
          }, null, 8 /* PROPS */, ["modelValue", "error"])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    payment: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_switch, {
            modelValue: $setup.form.parking_available,
            "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
              return $setup.form.parking_available = $event;
            }),
            text: "On-site parking available",
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue"]), $setup.form.parking_available ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: 0
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.parking_fee,
            "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
              return $setup.form.parking_fee = $event;
            }),
            label: "Parking fee (per vehicle / night)",
            type: "number",
            step: "0.01",
            min: "0",
            error: $setup.form.errors.parking_fee
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.parking_clearance,
            "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
              return $setup.form.parking_clearance = $event;
            }),
            label: "Height clearance (m)",
            type: "number",
            step: "0.01",
            min: "0",
            error: $setup.form.errors.parking_clearance
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_rich_editor, {
            modelValue: $setup.form.parking_notes,
            "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
              return $setup.form.parking_notes = $event;
            }),
            label: "Parking notes",
            error: $setup.form.errors.parking_notes,
            height: 130,
            "class": "is-full",
            placeholder: "e.g. Undercover, entry via Herschel Street, may reach capacity."
          }, null, 8 /* PROPS */, ["modelValue", "error"])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add or switch off methods for all hotels in "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
            href: "/admin/payment-methods"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Settings › Payment Methods")];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" methods come from Settings › Payment Methods (enabled ones) "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_toggle_table, {
            modelValue: $setup.form.payment_methods,
            "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
              return $setup.form.payment_methods = $event;
            }),
            rows: $setup.paymentRows,
            title: "Payment Methods",
            "empty-text": "No payment methods enabled in Settings."
          }, null, 8 /* PROPS */, ["modelValue", "rows"])])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    facilities: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add or rename facilities in "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
            href: "/admin/room-facilities"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Rooms › Room Facilities")];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_toggle_table, {
            modelValue: $setup.form.facility_ids,
            "onUpdate:modelValue": _cache[33] || (_cache[33] = function ($event) {
              return $setup.form.facility_ids = $event;
            }),
            rows: $setup.facilityRows,
            title: "Facilities",
            "empty-text": "No facilities yet."
          }, null, 8 /* PROPS */, ["modelValue", "rows"])])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    nearby: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, {
        description: "Attractions, transport, dining and hospitals near the hotel."
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_41, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.nearby_places, function (place, i) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
              key: i
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return place.name = $event;
              },
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-form-table__input", {
                'is-invalid': $setup.form.errors["nearby_places.".concat(i, ".name")]
              }]),
              placeholder: "e.g. King George Square"
            }, null, 10 /* CLASS, PROPS */, _hoisted_44), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, place.name]]), $setup.form.errors["nearby_places.".concat(i, ".name")] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors["nearby_places.".concat(i, ".name")]), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
              modelValue: place.category,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return place.category = $event;
              },
              options: $props.options.placeCategories,
              size: "sm",
              "class": "cl-form-table__select"
            }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return place.distance_km = $event;
              },
              type: "number",
              step: "0.1",
              min: "0",
              inputmode: "decimal",
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cl-form-table__input", {
                'is-invalid': $setup.form.errors["nearby_places.".concat(i, ".distance_km")]
              }]),
              placeholder: "km"
            }, null, 10 /* CLASS, PROPS */, _hoisted_48), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, place.distance_km]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_icon_button, {
              icon: "fas fa-trash",
              title: "Remove",
              variant: "soft-danger",
              size: "sm",
              onClick: function onClick($event) {
                return $setup.form.nearby_places.splice(i, 1);
              }
            }, null, 8 /* PROPS */, ["onClick"])])]);
          }), 128 /* KEYED_FRAGMENT */)), !$setup.form.nearby_places.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_50, _hoisted_52)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tfoot", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            type: "button",
            "class": "cl-form-table__add",
            onClick: _cache[34] || (_cache[34] = function ($event) {
              return $setup.form.nearby_places.push({
                name: '',
                category: 'attraction',
                distance_km: ''
              });
            })
          }, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add place ")])])])])])])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: $props.backUrl,
        "class": "cl-btn cl-btn--light cl-btn--pill"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back")];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "cl-btn cl-btn--gradient cl-btn--pill",
        disabled: $setup.form.processing || $setup.uploading
      }, [_hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.uploading ? 'Uploading photo…' : $setup.form.processing ? 'Saving…' : $setup.isEdit ? 'Save Changes' : 'Add Hotel'), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_56)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "tabs"])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/Hotels/Form.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Hotels/Form.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_8530aaca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=8530aaca */ "./resources/js/Pages/Hotels/Form.vue?vue&type=template&id=8530aaca");
/* harmony import */ var _Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Hotels/Form.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Form_vue_vue_type_template_id_8530aaca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Hotels/Form.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Hotels/Form.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Hotels/Form.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Form.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Hotels/Form.vue?vue&type=template&id=8530aaca":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Hotels/Form.vue?vue&type=template&id=8530aaca ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_8530aaca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_8530aaca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=template&id=8530aaca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Hotels/Form.vue?vue&type=template&id=8530aaca");


/***/ })

}]);