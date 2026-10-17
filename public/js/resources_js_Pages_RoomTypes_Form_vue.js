"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RoomTypes_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RoomTypes/Form.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RoomTypes/Form.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var _composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composables/useBreadcrumbs */ "./resources/js/composables/useBreadcrumbs.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["fields"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Form',
  props: {
    roomType: Object,
    // fields + facility_ids + images [{ id, url }]
    beds: Array,
    // [{ key: 'king_bed', label: 'King' }, ...]
    facilities: Array,
    // [{ label, items: [{ id, name }] }] (RoomFacility::grouped)
    usage: Object,
    // { rooms, hotels } when editing
    submitUrl: String,
    backUrl: String
  },
  setup: function setup(__props, _ref) {
    var _t$name, _t$description, _t$max_adult, _t$max_child, _t$king_bed, _t$queen_bed, _t$single_bed;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var isEdit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return !!props.roomType.id;
    });
    var title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return isEdit.value ? "Edit ".concat(props.roomType.name) : 'Add Room Type';
    });
    if (isEdit.value) (0,_composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__.useBreadcrumbs)(props.roomType.name, 'Edit');else (0,_composables_useBreadcrumbs__WEBPACK_IMPORTED_MODULE_2__.useBreadcrumbs)('Add');
    var t = props.roomType;
    var uploading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      name: (_t$name = t.name) !== null && _t$name !== void 0 ? _t$name : '',
      description: (_t$description = t.description) !== null && _t$description !== void 0 ? _t$description : '',
      max_adult: (_t$max_adult = t.max_adult) !== null && _t$max_adult !== void 0 ? _t$max_adult : 2,
      max_child: (_t$max_child = t.max_child) !== null && _t$max_child !== void 0 ? _t$max_child : 0,
      king_bed: (_t$king_bed = t.king_bed) !== null && _t$king_bed !== void 0 ? _t$king_bed : 0,
      queen_bed: (_t$queen_bed = t.queen_bed) !== null && _t$queen_bed !== void 0 ? _t$queen_bed : 0,
      single_bed: (_t$single_bed = t.single_bed) !== null && _t$single_bed !== void 0 ? _t$single_bed : 0,
      facility_ids: _toConsumableArray(t.facility_ids || []),
      // [{ id, url }] = existing, [{ upload }] = new (FilePond)
      images: (t.images || []).map(function (img) {
        return _objectSpread({}, img);
      })
    });
    var bedCounts = [1, 2, 3, 4].map(function (n) {
      return {
        value: n,
        label: "".concat(n, " bed").concat(n > 1 ? 's' : '')
      };
    });
    var guestCounts = function guestCounts(from, to) {
      return Array.from({
        length: to - from + 1
      }, function (_, i) {
        return from + i;
      }).map(function (n) {
        return {
          value: n,
          label: String(n)
        };
      });
    };
    var facilityRows = props.facilities.flatMap(function (group) {
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

    // ---- tabs in the card header ----
    // which fields live on which tab (for the red error counts)
    var TABS = [{
      key: 'general',
      label: 'General',
      icon: 'fas fa-door-open',
      fields: ['name', 'description', 'images']
    }, {
      key: 'beds',
      label: 'Beds & Guests',
      icon: 'fas fa-bed',
      fields: ['beds', 'king_bed', 'queen_bed', 'single_bed', 'max_adult', 'max_child']
    }, {
      key: 'facilities',
      label: 'Facilities & Services',
      icon: 'fas fa-concierge-bell',
      fields: ['facility_ids']
    }];
    var tab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('general');
    var tabs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return TABS.map(function (_ref2) {
        var fields = _ref2.fields,
          t = _objectWithoutProperties(_ref2, _excluded);
        return _objectSpread(_objectSpread({}, t), {}, {
          errors: Object.keys(form.errors).filter(function (field) {
            return fields.includes(field.split('.')[0]);
          }).length
        });
      });
    });
    var submit = function submit() {
      form.transform(function (data) {
        return _objectSpread(_objectSpread({}, data), {}, {
          images: data.images.map(function (_ref3) {
            var id = _ref3.id,
              upload = _ref3.upload;
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
      t: t,
      uploading: uploading,
      form: form,
      bedCounts: bedCounts,
      guestCounts: guestCounts,
      facilityRows: facilityRows,
      TABS: TABS,
      tab: tab,
      tabs: tabs,
      submit: submit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RoomTypes/Form.vue?vue&type=template&id=5497d75e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RoomTypes/Form.vue?vue&type=template&id=5497d75e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["onSubmit"];
var _hoisted_2 = {
  key: 0,
  "class": "cl-note"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-exclamation-circle"
}, null, -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "cl-field is-full"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Photos "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  "class": "cl-form-table__muted"
}, "(first photo is the cover - drag to reorder, up to 10)")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "cl-field is-full"
};
var _hoisted_7 = {
  "class": "cl-form-table"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Bed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  style: {
    "width": "30%"
  }
}, "Quantity"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "is-center",
  style: {
    "width": "90px"
  }
}, "Action")])], -1 /* HOISTED */);
var _hoisted_9 = {
  "data-label": "Bed"
};
var _hoisted_10 = {
  "class": "cl-form-table__name"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-bed"
}, null, -1 /* HOISTED */);
var _hoisted_12 = {
  "data-label": "Quantity"
};
var _hoisted_13 = {
  key: 1,
  "class": "cl-form-table__muted"
};
var _hoisted_14 = {
  "class": "is-center",
  "data-label": "Action"
};
var _hoisted_15 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_16 = {
  "class": "cl-field"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Max adults", -1 /* HOISTED */);
var _hoisted_18 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_19 = {
  "class": "cl-field"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "cl-field__label"
}, "Max children", -1 /* HOISTED */);
var _hoisted_21 = {
  key: 0,
  "class": "cl-field__error"
};
var _hoisted_22 = {
  "class": "cl-field is-full"
};
var _hoisted_23 = {
  "class": "cl-note"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-exclamation-circle"
}, null, -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "cl-tabs__footer"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-chevron-left"
}, null, -1 /* HOISTED */);
var _hoisted_27 = ["disabled"];
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-save"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_ui_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-input");
  var _component_ui_rich_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-rich-editor");
  var _component_ui_file_upload = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-file-upload");
  var _component_ui_form_section = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-form-section");
  var _component_ui_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-select");
  var _component_ui_switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-switch");
  var _component_ui_toggle_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-toggle-table");
  var _component_ui_page_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ui-page-card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: $setup.title
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_page_card, {
    title: $setup.title,
    tab: $setup.tab,
    "onUpdate:tab": _cache[7] || (_cache[7] = function ($event) {
      return $setup.tab = $event;
    }),
    tabs: $setup.tabs
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" novalidate: the server checks every field and the error opens its tab "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        "class": "cl-tabbed-form",
        novalidate: "",
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
      }, [$props.usage ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Used by " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.usage.rooms) + " room(s) and priced at " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.usage.hotels) + " hotel(s). Rooms and prices are set per hotel in ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/hotels"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Hotels")];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" › Rooms / Room Prices tabs.")])], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.tab === 'general']]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 1. General "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_input, {
            modelValue: $setup.form.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $setup.form.name = $event;
            }),
            label: "Name",
            error: $setup.form.errors.name,
            required: "",
            maxlength: "100",
            placeholder: "e.g. Deluxe King",
            "class": "is-full"
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_rich_editor, {
            modelValue: $setup.form.description,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $setup.form.description = $event;
            }),
            label: "Description",
            error: $setup.form.errors.description,
            height: 150,
            "class": "is-full",
            placeholder: "What makes this room nice: size, view, bed, bathroom..."
          }, null, 8 /* PROPS */, ["modelValue", "error"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_file_upload, {
            modelValue: $setup.form.images,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $setup.form.images = $event;
            }),
            busy: $setup.uploading,
            "onUpdate:busy": _cache[3] || (_cache[3] = function ($event) {
              return $setup.uploading = $event;
            }),
            multiple: "",
            "max-files": 10,
            error: $setup.form.errors.images
          }, null, 8 /* PROPS */, ["modelValue", "busy", "error"])])];
        }),
        _: 1 /* STABLE */
      }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.tab === 'general']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 2. Beds & guests "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.beds, function (bed) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
              key: bed.key,
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
                'is-off': !$setup.form[bed.key]
              })
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(bed.label), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_12, [$setup.form[bed.key] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ui_select, {
              key: 0,
              modelValue: $setup.form[bed.key],
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return $setup.form[bed.key] = $event;
              },
              options: $setup.bedCounts,
              size: "sm",
              "class": "cl-form-table__select"
            }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "options"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "None"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_switch, {
              "model-value": $setup.form[bed.key] > 0,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return $setup.form[bed.key] = $event ? 1 : 0;
              }
            }, null, 8 /* PROPS */, ["model-value", "onUpdate:modelValue"])])], 2 /* CLASS */);
          }), 128 /* KEYED_FRAGMENT */))])]), $setup.form.errors.beds ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.beds), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
            modelValue: $setup.form.max_adult,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $setup.form.max_adult = $event;
            }),
            options: $setup.guestCounts(1, 10),
            invalid: !!$setup.form.errors.max_adult
          }, null, 8 /* PROPS */, ["modelValue", "options", "invalid"]), $setup.form.errors.max_adult ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.max_adult), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_select, {
            modelValue: $setup.form.max_child,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $setup.form.max_child = $event;
            }),
            options: $setup.guestCounts(0, 10),
            invalid: !!$setup.form.errors.max_child
          }, null, 8 /* PROPS */, ["modelValue", "options", "invalid"]), $setup.form.errors.max_child ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.max_child), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
        }),
        _: 1 /* STABLE */
      }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.tab === 'beds']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 3. Facilities "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_form_section, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add or rename facilities in "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
            href: "/admin/room-facilities"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Rooms › Room Facilities")];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ui_toggle_table, {
            modelValue: $setup.form.facility_ids,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $setup.form.facility_ids = $event;
            }),
            rows: $setup.facilityRows,
            title: "Room Facilities",
            "empty-text": "No room facilities yet."
          }, null, 8 /* PROPS */, ["modelValue", "rows"])])];
        }),
        _: 1 /* STABLE */
      }, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.tab === 'facilities']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: $props.backUrl,
        "class": "cl-btn cl-btn--light cl-btn--pill"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back")];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "cl-btn cl-btn--gradient cl-btn--pill",
        disabled: $setup.form.processing || $setup.uploading
      }, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.uploading ? 'Uploading photos…' : $setup.form.processing ? 'Saving…' : $setup.isEdit ? 'Save Changes' : 'Add Room Type'), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_27)])], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["title", "tab", "tabs"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/RoomTypes/Form.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/RoomTypes/Form.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_5497d75e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=5497d75e */ "./resources/js/Pages/RoomTypes/Form.vue?vue&type=template&id=5497d75e");
/* harmony import */ var _Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/RoomTypes/Form.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Form_vue_vue_type_template_id_5497d75e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/RoomTypes/Form.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/RoomTypes/Form.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/RoomTypes/Form.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RoomTypes/Form.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/RoomTypes/Form.vue?vue&type=template&id=5497d75e":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/RoomTypes/Form.vue?vue&type=template&id=5497d75e ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_5497d75e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Form_vue_vue_type_template_id_5497d75e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Form.vue?vue&type=template&id=5497d75e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RoomTypes/Form.vue?vue&type=template&id=5497d75e");


/***/ })

}]);