"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["welcome-component"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var FULL_DASH_ARRAY = 283;
var WARNING_THRESHOLD = 5;
var ALERT_THRESHOLD = 3;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'CountdownTmer',
  props: {
    timer: Object
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var TIME_LIMIT = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var TIME_CURRENT = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return props.timer;
    }, function (newVal, oldVal) {
      TIME_LIMIT.value = newVal.timer.max;
      TIME_CURRENT.value = newVal.timer.current;
    });
    var COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    var timePassed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(TIME_LIMIT.value - TIME_CURRENT.value);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      timePassed.value = TIME_LIMIT.value - TIME_CURRENT.value;
    });
    var timerInterval = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var circleDasharray = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return "".concat((timeFraction.value * FULL_DASH_ARRAY).toFixed(0), " 283");
    });
    var timeLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return TIME_LIMIT.value - timePassed.value;
    });
    var formattedTimeLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var time = timeLeft.value;
      var minutes = Math.floor(time / 60);
      var seconds = time % 60;

      // Add a leading zero if seconds is less than 10
      seconds = seconds < 10 ? "0".concat(seconds) : "".concat(seconds);
      return "".concat(minutes, ":").concat(seconds);
    });
    var timeFraction = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var rawTimeFraction = timeLeft.value / TIME_LIMIT.value;
      return rawTimeFraction - 1 / TIME_LIMIT.value * (1 - rawTimeFraction);
    });
    var remainingPathColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var alert = COLOR_CODES.alert,
        warning = COLOR_CODES.warning,
        info = COLOR_CODES.info;
      if (timeLeft.value <= alert.threshold) {
        return alert.color;
      } else if (timeLeft.value <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return timeLeft.value;
    }, function (newValue) {
      if (newValue === 0) {
        onTimesUp();
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      startTimer();
      TIME_LIMIT.value = props.timer.max;
      TIME_CURRENT.value = props.timer.current;
    });
    var onTimesUp = function onTimesUp() {
      clearInterval(timerInterval.value);
    };
    var startTimer = function startTimer() {
      timerInterval.value = setInterval(function () {
        return timePassed.value += 1;
      }, 1000);
    };
    var resetTimer = function resetTimer() {
      clearInterval(timerInterval.value);
      timePassed.value = 0;
      startTimer();
    };
    var __returned__ = {
      props: props,
      TIME_LIMIT: TIME_LIMIT,
      TIME_CURRENT: TIME_CURRENT,
      FULL_DASH_ARRAY: FULL_DASH_ARRAY,
      WARNING_THRESHOLD: WARNING_THRESHOLD,
      ALERT_THRESHOLD: ALERT_THRESHOLD,
      COLOR_CODES: COLOR_CODES,
      timePassed: timePassed,
      get timerInterval() {
        return timerInterval;
      },
      set timerInterval(v) {
        timerInterval = v;
      },
      circleDasharray: circleDasharray,
      timeLeft: timeLeft,
      formattedTimeLeft: formattedTimeLeft,
      timeFraction: timeFraction,
      remainingPathColor: remainingPathColor,
      onTimesUp: onTimesUp,
      startTimer: startTimer,
      resetTimer: resetTimer,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _CountdownTmer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountdownTmer.vue */ "./resources/js/components/CountdownTmer.vue");


var maxImageCount = 20;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'WelcomeComponent',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var timer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      max: 10,
      current: 9
    });
    var uploadedImages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var handleFileChange = function handleFileChange(e) {
      var filesArr = Array.from(e.target.files);
      filesArr.forEach(function (file) {
        if (!file.type.match('image.*')) {
          return;
        }
        if (uploadedImages.value.length >= maxImageCount) {
          return;
        }
        uploadedImages.value.push(file);
      });
    };
    var removeImage = function removeImage(index) {
      uploadedImages.value.splice(index, 1);
    };
    var getImageUrl = function getImageUrl(image) {
      return URL.createObjectURL(image);
    };
    var __returned__ = {
      timer: timer,
      uploadedImages: uploadedImages,
      maxImageCount: maxImageCount,
      handleFileChange: handleFileChange,
      removeImage: removeImage,
      getImageUrl: getImageUrl,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      CountdownTmer: _CountdownTmer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-455892dc"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "base-timer"
};
var _hoisted_2 = {
  "class": "base-timer__svg",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
};
var _hoisted_3 = {
  "class": "base-timer__circle"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
    "class": "base-timer__path-elapsed",
    cx: "50",
    cy: "50",
    r: "45"
  }, null, -1 /* HOISTED */);
});
var _hoisted_5 = ["stroke-dasharray"];
var _hoisted_6 = {
  "class": "base-timer__label"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "stroke-dasharray": $setup.circleDasharray,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["base-timer__path-remaining", $setup.remainingPathColor]),
    d: "\r\n              M 50, 50\r\n              m -45, 0\r\n              a 45,45 0 1,0 90,0\r\n              a 45,45 0 1,0 -90,0\r\n            "
  }, null, 10 /* CLASS, PROPS */, _hoisted_5)])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formattedTimeLeft), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: $setup.resetTimer
  }, "Reset Timer")], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1974e6b4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "upload__box"
};
var _hoisted_2 = {
  "class": "upload__btn-box"
};
var _hoisted_3 = {
  "class": "upload__btn"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Upload images", -1 /* HOISTED */);
});
var _hoisted_5 = {
  "class": "upload__img-wrap"
};
var _hoisted_6 = ["data-number", "data-file"];
var _hoisted_7 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    multiple: "",
    "data-max_length": "20",
    "class": "upload__inputfile",
    onChange: $setup.handleFileChange
  }, null, 32 /* HYDRATE_EVENTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.uploadedImages, function (image, index) {
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
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CountdownTmer"], {
    timer: $setup.timer
  }, null, 8 /* PROPS */, ["timer"])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".base-timer[data-v-455892dc] {\n  position: relative;\n  width: 300px;\n  height: 300px;\n}\n.base-timer__svg[data-v-455892dc] {\n  transform: scaleX(1);\n}\n.base-timer__circle[data-v-455892dc] {\n  fill: none;\n  stroke: none;\n}\n.base-timer__path-elapsed[data-v-455892dc] {\n  stroke-width: 7px;\n  stroke: grey;\n}\n.base-timer__path-remaining[data-v-455892dc] {\n  stroke-width: 7px;\n  stroke-linecap: round;\n  transform: rotate(90deg);\n  transform-origin: center;\n  transition: 1s linear all;\n  fill-rule: nonzero;\n  stroke: currentColor;\n}\n.base-timer__path-remaining.green[data-v-455892dc] {\n  color: #41b883;\n}\n.base-timer__path-remaining.orange[data-v-455892dc] {\n  color: orange;\n}\n.base-timer__path-remaining.red[data-v-455892dc] {\n  color: red;\n}\n.base-timer__label[data-v-455892dc] {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 48px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml *[data-v-1974e6b4] {\r\n  box-sizing: border-box;\n}\np[data-v-1974e6b4] {\r\n  margin: 0;\n}\n.upload__box[data-v-1974e6b4] {\r\n  padding: 40px;\n}\n.upload__inputfile[data-v-1974e6b4] {\r\n  width: 0.1px;\r\n  height: 0.1px;\r\n  opacity: 0;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  z-index: -1;\n}\n.upload__btn[data-v-1974e6b4] {\r\n  display: inline-block;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  text-align: center;\r\n  min-width: 116px;\r\n  padding: 5px;\r\n  transition: all 0.3s ease;\r\n  cursor: pointer;\r\n  border: 2px solid;\r\n  background-color: #4045ba;\r\n  border-color: #4045ba;\r\n  border-radius: 10px;\r\n  line-height: 26px;\r\n  font-size: 14px;\n}\n.upload__btn[data-v-1974e6b4]:hover {\r\n  background-color: unset;\r\n  color: #4045ba;\r\n  transition: all 0.3s ease;\n}\n.upload__btn-box[data-v-1974e6b4] {\r\n  margin-bottom: 10px;\n}\n.upload__img-wrap[data-v-1974e6b4] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 0 -10px;\n}\n.upload__img-box[data-v-1974e6b4] {\r\n  width: 200px;\r\n  padding: 0 10px;\r\n  margin-bottom: 12px;\n}\n.upload__img-close[data-v-1974e6b4] {\r\n  width: 24px;\r\n  height: 24px;\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  text-align: center;\r\n  line-height: 24px;\r\n  z-index: 1;\r\n  cursor: pointer;\n}\n.upload__img-close[data-v-1974e6b4]:after {\r\n  content: '\\2716';\r\n  font-size: 14px;\r\n  color: white;\n}\n.img-bg[data-v-1974e6b4] {\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  position: relative;\r\n  padding-bottom: 100%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_style_index_0_id_455892dc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_style_index_0_id_455892dc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_style_index_0_id_455892dc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_style_index_0_id_1974e6b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_style_index_0_id_1974e6b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_style_index_0_id_1974e6b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/CountdownTmer.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/CountdownTmer.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CountdownTmer_vue_vue_type_template_id_455892dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true */ "./resources/js/components/CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true");
/* harmony import */ var _CountdownTmer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountdownTmer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/CountdownTmer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _CountdownTmer_vue_vue_type_style_index_0_id_455892dc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss */ "./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CountdownTmer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CountdownTmer_vue_vue_type_template_id_455892dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-455892dc"],['__file',"resources/js/components/CountdownTmer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/WelcomeComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/WelcomeComponent.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WelcomeComponent_vue_vue_type_template_id_1974e6b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true */ "./resources/js/components/WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true");
/* harmony import */ var _WelcomeComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WelcomeComponent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/WelcomeComponent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _WelcomeComponent_vue_vue_type_style_index_0_id_1974e6b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css */ "./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css");
/* harmony import */ var c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,c_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_WelcomeComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_WelcomeComponent_vue_vue_type_template_id_1974e6b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1974e6b4"],['__file',"resources/js/components/WelcomeComponent.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/CountdownTmer.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/CountdownTmer.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CountdownTmer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/WelcomeComponent.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/WelcomeComponent.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WelcomeComponent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_template_id_455892dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_template_id_455892dc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=template&id=455892dc&scoped=true");


/***/ }),

/***/ "./resources/js/components/WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_template_id_1974e6b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_template_id_1974e6b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=template&id=1974e6b4&scoped=true");


/***/ }),

/***/ "./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CountdownTmer_vue_vue_type_style_index_0_id_455892dc_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/CountdownTmer.vue?vue&type=style&index=0&id=455892dc&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WelcomeComponent_vue_vue_type_style_index_0_id_1974e6b4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/WelcomeComponent.vue?vue&type=style&index=0&id=1974e6b4&scoped=true&lang=css");


/***/ })

}]);