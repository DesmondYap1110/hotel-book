"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["room-add"],{

/***/ "./node_modules/@vueform/toggle/dist/toggle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@vueform/toggle/dist/toggle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var b={name:"Toggle",emits:["input","update:modelValue","change"],props:{...{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1}},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(a,d){const n=function(a,d,n){const{value:t,modelValue:u,falseValue:i,trueValue:c,disabled:r}=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(a),o=u&&void 0!==u.value?u:t,s=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>o.value===c.value)),g=e=>{d.emit("input",e),d.emit("update:modelValue",e),d.emit("change",e)},b=()=>{g(c.value)},f=()=>{g(i.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(o.value)&&-1===[i.value,c.value].indexOf(o.value)&&f(),-1!==[!0,1,"1","on"].indexOf(o.value)&&-1===[i.value,c.value].indexOf(o.value)&&b(),{externalValue:o,checked:s,update:g,check:b,uncheck:f,handleInput:e=>{g(e.target.checked?c.value:i.value)},handleClick:()=>{r.value||(s.value?f():b())}}}(a,d),t=function(a,d,n){const{trueValue:t,falseValue:u,onLabel:i,offLabel:c}=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(a),r=n.checked,o=n.update;return{label:(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>{let e=r.value?i.value:c.value;return e||(e="&nbsp;"),e})),toggle:()=>{o(r.value?u.value:t.value)},on:()=>{o(t.value)},off:()=>{o(u.value)}}}(a,0,{checked:n.checked,update:n.update}),u=function(a,d,n){const t=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(a),u=t.disabled,i=n.checked,c=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...t.classes.value})));return{classList:(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((()=>({container:c.value.container,toggle:[c.value.toggle,u.value?i.value?c.value.toggleOnDisabled:c.value.toggleOffDisabled:i.value?c.value.toggleOn:c.value.toggleOff],handle:[c.value.handle,u.value?i.value?c.value.handleOnDisabled:c.value.handleOffDisabled:i.value?c.value.handleOn:c.value.handleOff],label:c.value.label})))}}(a,0,{checked:n.checked}),i=function(l,a,d){const{disabled:n}=(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(l),t=d.check,u=d.uncheck,i=d.checked;return{handleSpace:()=>{n.value||(i.value?u():t())}}}(a,0,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...u,...t,...i}}};const f=["tabindex","aria-checked","aria-describedby","aria-labelledby"],h=["id","name","value","checked","disabled"],v=["innerHTML"],p=["checked"];b.render=function(e,l,b,k,y,O){return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div",(0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({class:e.classList.container,tabindex:b.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":b.describedby,"aria-labelledby":b.labelledby,role:"switch"},b.aria,{onKeypress:l[1]||(l[1]=(0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(((...l)=>e.handleSpace&&e.handleSpace(...l)),["prevent"]),["space"]))}),[(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input",{type:"checkbox",id:b.id,name:b.name,value:b.trueValue,checked:e.checked,disabled:b.disabled},null,8,h),[[vue__WEBPACK_IMPORTED_MODULE_0__.vShow,!1]]),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div",{class:(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(e.classList.toggle),onClick:l[0]||(l[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span",{class:(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(e.classList.handle)},null,2),(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(e.$slots,"label",{checked:e.checked,classList:e.classList},(()=>[(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span",{class:(0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(e.classList.label),innerHTML:e.label},null,10,v)])),b.required?((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,p)):(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if",!0)],2)],16,f)},b.__file="src/Toggle.vue";


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataTable.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataTable.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'DataTable',
  props: {
    columns: {
      type: Object,
      required: true
    },
    rows: {
      type: Object,
      required: true
    }
  },
  emits: ['editUser', 'confirmUserDeletion'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      emit = _ref.emit;
    __expose();
    var props = __props;
    var __returned__ = {
      emit: emit,
      props: props,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Rooms/Add.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Rooms/Add.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Add',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      title: '',
      client_id: '',
      start_time: '',
      end_time: '',
      description: ''
    });
    var __returned__ = {
      form: form,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vueform_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/toggle */ "./node_modules/@vueform/toggle/dist/toggle.js");
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.mjs");




// defineProps({
//     options: Object,
// });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Add',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      name: '',
      images: [],
      message: '',
      price: '',
      selectedBeds: [],
      max_adult: '',
      max_child: '',
      area: '',
      status: ''
    });
    var max = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1000);
    var handleFileChange = function handleFileChange(e) {
      var files = Array.from(e.target.files);
      var maxLength = e.target.getAttribute('data-max_length');
      files.forEach(function (file) {
        if (!file.type.match('image.*')) {
          return;
        }
        if (form.images.length >= maxLength) {
          return false;
        } else {
          var reader = new FileReader();
          reader.onload = function () {
            form.images.push({
              src: reader.result,
              name: file.name
            });
          };
          reader.readAsDataURL(file);
        }
      });
    };
    var removeFile = function removeFile(index) {
      form.images.splice(index, 1);
    };
    var beds = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      id: 1,
      name: 'Single',
      isSelected: false,
      quantity: ''
    }, {
      id: 2,
      name: 'Queen',
      isSelected: false,
      quantity: ''
    }, {
      id: 3,
      name: 'King',
      isSelected: false,
      quantity: ''
    }]);
    var toggleBedSelection = function toggleBedSelection(bed) {
      var selected = bed.isSelected;
      if (selected) {
        form.selectedBeds.push(bed);
      } else {
        var index = form.selectedBeds.findIndex(function (b) {
          return b.id === bed.id;
        });
        if (index !== -1) {
          form.selectedBeds.splice(index, 1);
        }
      }
    };
    var submitForm = function submitForm() {
      axios.post('/admin/room_types', form).then(function (response) {
        toastr.success('Appointment created successfully!');
      })["catch"](function (error) {
        actions.setErrors(error.response.data.errors);
      });
    };
    var __returned__ = {
      form: form,
      max: max,
      handleFileChange: handleFileChange,
      removeFile: removeFile,
      beds: beds,
      toggleBedSelection: toggleBedSelection,
      submitForm: submitForm,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      get Toggle() {
        return _vueform_toggle__WEBPACK_IMPORTED_MODULE_1__["default"];
      },
      get Multiselect() {
        return _vueform_multiselect__WEBPACK_IMPORTED_MODULE_2__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Lists.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Lists.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataTable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataTable.vue */ "./resources/js/components/DataTable.vue");
/* harmony import */ var _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pagination.vue */ "./resources/js/components/Pagination.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Lists',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var columns = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([{
      name: 'Name'
    }, {
      name: 'Area'
    }, {
      name: 'Guests'
    }, {
      name: 'Price'
    }, {
      name: 'Quantity'
    }, {
      name: 'Status'
    }, {
      name: 'Action'
    }]);

    // const rows = ref([
    //     {
    //         id: 1,
    //         room_no: 1001,
    //         room_floor: 1,
    //         room_type: 'Single',
    //         is_available: true,
    //     },
    //     {
    //         id: 2,
    //         room_no: 1002,
    //         room_floor: 2,
    //         room_type: 'Double',
    //         is_available: true,
    //     },
    // ]);

    var editUser = function editUser(id) {
      alert(id);
    };
    var confirmUserDeletion = function confirmUserDeletion(id) {
      alert(id);
    };
    var __returned__ = {
      columns: columns,
      editUser: editUser,
      confirmUserDeletion: confirmUserDeletion,
      DataTable: _DataTable_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Pagination: _Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      ref: vue__WEBPACK_IMPORTED_MODULE_2__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "table table-bordered"
};
var _hoisted_2 = ["onClick"];
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-edit mr-2"
}, null, -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = ["onClick"];
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-trash text-danger"
}, null, -1 /* HOISTED */);
var _hoisted_7 = [_hoisted_6];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, function (column) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("th", {
      key: column.name,
      scope: "col"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(column.name), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.rows, function (row) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: row.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.room_no), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.room_floor), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.room_type), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.is_available), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return _ctx.$emit('editUser', row.id);
      }, ["prevent"])
    }, _hoisted_4, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return _ctx.$emit('confirmUserDeletion', row.id);
      }, ["prevent"])
    }, _hoisted_7, 8 /* PROPS */, _hoisted_5)])]);
  }), 128 /* KEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row justify-content-between"
};
var _hoisted_3 = {
  "class": "col-4 d-flex"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "pr-2"
}, "Row Per Page:", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "select"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<option value=\"5\">5</option><option value=\"10\">10</option><option value=\"15\">15</option><option value=\"20\">20</option><option value=\"25\">25</option>", 5);
var _hoisted_11 = [_hoisted_6];
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-4\"><nav aria-label=\"Page navigation example\"><ul class=\"pagination justify-content-end\"><li class=\"page-item disabled\"><a class=\"page-link\">Previous</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li><li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li></ul></nav></div>", 1);
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.rowsPerPage = $event;
    })
  }, _hoisted_11, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.rowsPerPage]])])]), _hoisted_12])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Rooms/Add.vue?vue&type=template&id=1860e20f":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Rooms/Add.vue?vue&type=template&id=1860e20f ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = {
  "class": "card-body"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-6"
};
var _hoisted_5 = {
  "class": "form-group"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "room_no"
}, "Room No", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "col-md-6"
};
var _hoisted_8 = {
  "class": "form-group"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "room_type"
}, "Room Type", -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = {
  "class": "col-md-6"
};
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "room_floor"
}, "Room Floor", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "form-group"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "description"
}, "Description", -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn btn-primary"
}, "Submit", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Form, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.room_no = $event;
        }),
        type: "text",
        "class": "form-control flatpickr",
        id: "room_no"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.room_no]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.room_type = $event;
        }),
        id: "client",
        "class": "form-control"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <option v-for=\"client in clients\" :value=\"client.id\" :key=\"client.id\">{{ client.first_name }} {{ client.last_name }}</option> ")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.room_type]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.room_floor = $event;
        }),
        type: "text",
        "class": "form-control flatpickr",
        id: "room_floor"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.room_floor]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.form.is_available = $event;
        }),
        "class": "form-control",
        id: "description",
        rows: "3",
        placeholder: "Enter Description"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.is_available]])]), _hoisted_16];
    }),
    _: 1 /* STABLE */
  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=template&id=34f08e90":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=template&id=34f08e90 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content-header"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row mb-2"
};
var _hoisted_4 = {
  "class": "col-sm-6"
};
var _hoisted_5 = {
  "class": "m-0"
};
var _hoisted_6 = {
  key: 0
};
var _hoisted_7 = {
  key: 1
};
var _hoisted_8 = {
  "class": "col-sm-6"
};
var _hoisted_9 = {
  "class": "breadcrumb float-sm-right"
};
var _hoisted_10 = {
  "class": "breadcrumb-item"
};
var _hoisted_11 = {
  "class": "breadcrumb-item"
};
var _hoisted_12 = {
  "class": "breadcrumb-item active"
};
var _hoisted_13 = {
  key: 0
};
var _hoisted_14 = {
  key: 1
};
var _hoisted_15 = {
  "class": "row d-flex"
};
var _hoisted_16 = {
  "class": "col-md-6"
};
var _hoisted_17 = {
  "class": "card"
};
var _hoisted_18 = {
  "class": "card-body"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  id: "form-sub-title"
}, " General ", -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "card-text"
};
var _hoisted_21 = {
  "class": "form-group"
};
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, " Name: ", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "card"
};
var _hoisted_24 = {
  "class": "card-body text-center"
};
var _hoisted_25 = {
  "class": "upload__box"
};
var _hoisted_26 = {
  "class": "upload__btn-box"
};
var _hoisted_27 = {
  "class": "upload__btn"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Upload images", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "upload__img-wrap"
};
var _hoisted_30 = ["data-number", "data-file"];
var _hoisted_31 = ["onClick"];
var _hoisted_32 = {
  "class": "form-group"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "description"
}, "Description", -1 /* HOISTED */);
var _hoisted_34 = ["maxlength"];
var _hoisted_35 = {
  "class": "message-counter"
};
var _hoisted_36 = {
  "class": "col-md-6"
};
var _hoisted_37 = {
  "class": "card"
};
var _hoisted_38 = {
  "class": "card-body"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  id: "form-sub-title"
}, " Detail ", -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "card-text"
};
var _hoisted_41 = {
  "class": "card"
};
var _hoisted_42 = {
  "class": "card-body"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "bed"
}, "Beds:", -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "pl-3"
};
var _hoisted_45 = {
  key: 0,
  "class": "mt-2 form-group"
};
var _hoisted_46 = ["name", "onUpdate:modelValue"];
var _hoisted_47 = {
  "class": "row"
};
var _hoisted_48 = {
  "class": "form-group col-md-6"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "max_adult"
}, "Max Adult:", -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "form-group col-md-6"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "max_children"
}, "Max Children:", -1 /* HOISTED */);
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-save m-2"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, [_ctx.editMode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_6, "Edit")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, "Create")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Appointment ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/dashboard"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/appointments"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Room Types")];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [_ctx.editMode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "Edit")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, "Create"))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "name",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.name = $event;
    }),
    "class": "form-control",
    placeholder: "Enter name",
    id: "name",
    name: "name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    multiple: "",
    "data-max_length": "20",
    onChange: $setup.handleFileChange,
    "class": "upload__inputfile"
  }, null, 32 /* HYDRATE_EVENTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.images, function (image, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "upload__img-box"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        backgroundImage: 'url(' + image.src + ')'
      }),
      "data-number": index,
      "data-file": image.name,
      "class": "img-bg"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "upload__img-close",
      onClick: function onClick($event) {
        return $setup.removeFile(index);
      }
    }, null, 8 /* PROPS */, _hoisted_31)], 12 /* STYLE, PROPS */, _hoisted_30)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.message = $event;
    }),
    maxlength: $setup.max,
    "class": "form-control",
    id: "description",
    rows: "3",
    name: "description",
    placeholder: "Enter description"
  }, null, 8 /* PROPS */, _hoisted_34), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.message]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.message.length) + "/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.max), 1 /* TEXT */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.beds, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Toggle"], {
      value: item.id,
      modelValue: item.isSelected,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.isSelected = $event;
      },
      onChange: function onChange($event) {
        return $setup.toggleBedSelection(item);
      }
    }, null, 8 /* PROPS */, ["value", "modelValue", "onUpdate:modelValue", "onChange"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), item.isSelected ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "number",
      min: "1",
      max: "5",
      "class": "form-control",
      placeholder: "Enter quantity of bed",
      name: 'items.' + index + '.quantity',
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return item.quantity = $event;
      }
    }, null, 8 /* PROPS */, _hoisted_46), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, item.quantity]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    placeholder: "Enter max adult",
    name: "max_adult",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.max_adult = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.max_adult]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    placeholder: "Enter max children",
    name: "max_children",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.max_child = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.max_child]])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: $setup.submitForm,
    "class": "btn btn-info"
  }, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save Changes")])])])], 32 /* HYDRATE_EVENTS */)])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Lists.vue?vue&type=template&id=9bf77478":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Lists.vue?vue&type=template&id=9bf77478 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content"
};
var _hoisted_2 = {
  "class": "container-fluid"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-lg-12"
};
var _hoisted_5 = {
  "class": "card"
};
var _hoisted_6 = {
  "class": "card-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["DataTable"], {
    columns: $setup.columns,
    rows: _ctx.rows,
    onEditUser: $setup.editUser,
    onConfirmUserDeletion: $setup.confirmUserDeletion
  }, null, 8 /* PROPS */, ["columns", "rows"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Pagination"])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".multiselect{align-items:center;background:var(--ms-bg,#fff);border:var(--ms-border-width,1px) solid var(--ms-border-color,#d1d5db);border-radius:var(--ms-radius,4px);box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--ms-font-size,1rem);justify-content:flex-end;margin:0 auto;min-height:calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);outline:none;position:relative;width:100%}.multiselect.is-open{border-radius:var(--ms-radius,4px) var(--ms-radius,4px) 0 0}.multiselect.is-open-top{border-radius:0 0 var(--ms-radius,4px) var(--ms-radius,4px)}.multiselect.is-disabled{background:var(--ms-bg-disabled,#f3f4f6);cursor:default}.multiselect.is-active{border:var(--ms-border-width-active,var(--ms-border-width,1px)) solid var(--ms-border-color-active,var(--ms-border-color,#d1d5db));box-shadow:0 0 0 var(--ms-ring-width,3px) var(--ms-ring-color,rgba(16,185,129,.188))}.multiselect-wrapper{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;justify-content:flex-end;margin:0 auto;min-height:calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);outline:none;position:relative;width:100%}.multiselect-multiple-label,.multiselect-placeholder,.multiselect-single-label{align-items:center;background:transparent;box-sizing:border-box;display:flex;height:100%;left:0;line-height:var(--ms-line-height,1.375);max-width:100%;padding-left:var(--ms-px,.875rem);padding-right:calc(1.25rem + var(--ms-px, .875rem)*3);pointer-events:none;position:absolute;top:0}.multiselect-placeholder{color:var(--ms-placeholder-color,#9ca3af)}.multiselect-single-label-text{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiselect-search{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--ms-bg,#fff);border:0;border-radius:var(--ms-radius,4px);bottom:0;box-sizing:border-box;font-family:inherit;font-size:inherit;height:100%;left:0;outline:none;padding-left:var(--ms-px,.875rem);position:absolute;right:0;top:0;width:100%}.multiselect-search::-webkit-search-cancel-button,.multiselect-search::-webkit-search-decoration,.multiselect-search::-webkit-search-results-button,.multiselect-search::-webkit-search-results-decoration{-webkit-appearance:none}.multiselect-tags{align-items:center;display:flex;flex-grow:1;flex-shrink:1;flex-wrap:wrap;margin:var(--ms-tag-my,.25rem) 0 0;padding-left:var(--ms-py,.5rem)}.multiselect-tag{align-items:center;background:var(--ms-tag-bg,#10b981);border-radius:var(--ms-tag-radius,4px);color:var(--ms-tag-color,#fff);display:flex;font-size:var(--ms-tag-font-size,.875rem);font-weight:var(--ms-tag-font-weight,600);line-height:var(--ms-tag-line-height,1.25rem);margin-bottom:var(--ms-tag-my,.25rem);margin-right:var(--ms-tag-mx,.25rem);padding:var(--ms-tag-py,.125rem) 0 var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem);white-space:nowrap}.multiselect-tag.is-disabled{background:var(--ms-tag-bg-disabled,#9ca3af);color:var(--ms-tag-color-disabled,#fff);padding-right:var(--ms-tag-px,.5rem)}.multiselect-tag-remove{align-items:center;border-radius:var(--ms-tag-remove-radius,4px);display:flex;justify-content:center;margin:var(--ms-tag-remove-my,0) var(--ms-tag-remove-mx,.125rem);padding:var(--ms-tag-remove-py,.25rem) var(--ms-tag-remove-px,.25rem)}.multiselect-tag-remove:hover{background:rgba(0,0,0,.063)}.multiselect-tag-remove-icon{background-color:currentColor;display:inline-block;height:.75rem;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;opacity:.8;width:.75rem}.multiselect-tags-search-wrapper{display:inline-block;flex-grow:1;flex-shrink:1;height:100%;margin:0 var(--ms-tag-mx,4px) var(--ms-tag-my,4px);position:relative}.multiselect-tags-search-copy{display:inline-block;height:1px;visibility:hidden;white-space:pre-wrap;width:100%}.multiselect-tags-search{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;bottom:0;box-sizing:border-box;font-family:inherit;font-size:inherit;left:0;outline:none;padding:0;position:absolute;right:0;top:0;width:100%}.multiselect-tags-search::-webkit-search-cancel-button,.multiselect-tags-search::-webkit-search-decoration,.multiselect-tags-search::-webkit-search-results-button,.multiselect-tags-search::-webkit-search-results-decoration{-webkit-appearance:none}.multiselect-inifite{align-items:center;display:flex;justify-content:center;min-height:calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2);width:100%}.multiselect-inifite-spinner,.multiselect-spinner{animation:multiselect-spin 1s linear infinite;background-color:var(--ms-spinner-color,#10b981);flex-grow:0;flex-shrink:0;height:1rem;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m456.433 371.72-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E\");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:1rem;z-index:10}.multiselect-spinner{margin:0 var(--ms-px,.875rem) 0 0}.multiselect-clear{display:flex;flex-grow:0;flex-shrink:0;opacity:1;padding:0 var(--ms-px,.875rem) 0 0;position:relative;transition:.3s;z-index:10}.multiselect-clear:hover .multiselect-clear-icon{background-color:var(--ms-clear-color-hover,#000)}.multiselect-clear-icon{background-color:var(--ms-clear-color,#999);display:inline-block;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m207.6 256 107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E\");transition:.3s}.multiselect-caret,.multiselect-clear-icon{height:1.125rem;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:.625rem}.multiselect-caret{background-color:var(--ms-caret-color,#999);flex-grow:0;flex-shrink:0;margin:0 var(--ms-px,.875rem) 0 0;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\");pointer-events:none;position:relative;transform:rotate(0deg);transition:transform .3s;z-index:10}.multiselect-caret.is-open{pointer-events:auto;transform:rotate(180deg)}.multiselect-dropdown{-webkit-overflow-scrolling:touch;background:var(--ms-dropdown-bg,#fff);border:var(--ms-dropdown-border-width,1px) solid var(--ms-dropdown-border-color,#d1d5db);border-radius:0 0 var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px);bottom:0;display:flex;flex-direction:column;left:calc(var(--ms-border-width, 1px)*-1);margin-top:calc(var(--ms-border-width, 1px)*-1);max-height:var(--ms-max-height,10rem);outline:none;overflow-y:scroll;position:absolute;right:calc(var(--ms-border-width, 1px)*-1);transform:translateY(100%);z-index:100}.multiselect-dropdown.is-top{border-radius:var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px) 0 0;bottom:auto;top:var(--ms-border-width,1px);transform:translateY(-100%)}.multiselect-dropdown.is-hidden{display:none}.multiselect-options{display:flex;flex-direction:column;list-style:none;margin:0;padding:0}.multiselect-group{margin:0;padding:0}.multiselect-group-label{align-items:center;background:var(--ms-group-label-bg,#e5e7eb);box-sizing:border-box;color:var(--ms-group-label-color,#374151);cursor:default;display:flex;font-size:.875rem;font-weight:600;justify-content:flex-start;line-height:var(--ms-group-label-line-height,1.375);padding:var(--ms-group-label-py,.3rem) var(--ms-group-label-px,.75rem);text-align:left;text-decoration:none}.multiselect-group-label.is-pointable{cursor:pointer}.multiselect-group-label.is-pointed{background:var(--ms-group-label-bg-pointed,#d1d5db);color:var(--ms-group-label-color-pointed,#374151)}.multiselect-group-label.is-selected{background:var(--ms-group-label-bg-selected,#059669);color:var(--ms-group-label-color-selected,#fff)}.multiselect-group-label.is-disabled{background:var(--ms-group-label-bg-disabled,#f3f4f6);color:var(--ms-group-label-color-disabled,#d1d5db);cursor:not-allowed}.multiselect-group-label.is-selected.is-pointed{background:var(--ms-group-label-bg-selected-pointed,#0c9e70);color:var(--ms-group-label-color-selected-pointed,#fff)}.multiselect-group-label.is-selected.is-disabled{background:var(--ms-group-label-bg-selected-disabled,#75cfb1);color:var(--ms-group-label-color-selected-disabled,#d1fae5)}.multiselect-group-options{margin:0;padding:0}.multiselect-option{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--ms-option-font-size,1rem);justify-content:flex-start;line-height:var(--ms-option-line-height,1.375);padding:var(--ms-option-py,.5rem) var(--ms-option-px,.75rem);text-align:left;text-decoration:none}.multiselect-option.is-pointed{background:var(--ms-option-bg-pointed,#f3f4f6);color:var(--ms-option-color-pointed,#1f2937)}.multiselect-option.is-selected{background:var(--ms-option-bg-selected,#10b981);color:var(--ms-option-color-selected,#fff)}.multiselect-option.is-disabled{background:var(--ms-option-bg-disabled,#fff);color:var(--ms-option-color-disabled,#d1d5db);cursor:not-allowed}.multiselect-option.is-selected.is-pointed{background:var(--ms-option-bg-selected-pointed,#26c08e);color:var(--ms-option-color-selected-pointed,#fff)}.multiselect-option.is-selected.is-disabled{background:var(--ms-option-bg-selected-disabled,#87dcc0);color:var(--ms-option-color-selected-disabled,#d1fae5)}.multiselect-no-options,.multiselect-no-results{color:var(--ms-empty-color,#4b5563);padding:var(--ms-option-py,.5rem) var(--ms-option-px,.75rem)}.multiselect-fake-input{background:transparent;border:0;bottom:-1px;font-size:0;height:1px;left:0;outline:none;padding:0;position:absolute;right:0;width:100%}.multiselect-fake-input:active,.multiselect-fake-input:focus{outline:none}.multiselect-assistive-text{clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;position:absolute;width:1px}.multiselect-spacer{display:none}[dir=rtl] .multiselect-multiple-label,[dir=rtl] .multiselect-placeholder,[dir=rtl] .multiselect-single-label{left:auto;padding-left:calc(1.25rem + var(--ms-px, .875rem)*3);padding-right:var(--ms-px,.875rem);right:0}[dir=rtl] .multiselect-search{padding-left:0;padding-right:var(--ms-px,.875rem)}[dir=rtl] .multiselect-tags{padding-left:0;padding-right:var(--ms-py,.5rem)}[dir=rtl] .multiselect-tag{margin-left:var(--ms-tag-mx,.25rem);margin-right:0;padding:var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem) var(--ms-tag-py,.125rem) 0}[dir=rtl] .multiselect-tag.is-disabled{padding-left:var(--ms-tag-px,.5rem)}[dir=rtl] .multiselect-caret,[dir=rtl] .multiselect-spinner{margin:0 0 0 var(--ms-px,.875rem)}[dir=rtl] .multiselect-clear{padding:0 0 0 var(--ms-px,.875rem)}@keyframes multiselect-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".toggle-container{display:inline-block}.toggle-container:focus{box-shadow:0 0 0 var(--toggle-ring-width,3px) var(--toggle-ring-color,rgba(16,185,129,.188));outline:none}.toggle{align-items:center;border:var(--toggle-border,.125rem) solid;border-radius:999px;box-sizing:content-box;cursor:pointer;display:flex;font-size:var(--toggle-font-size,.75rem);height:var(--toggle-height,1.25rem);line-height:1;position:relative;transition:all .3s;width:var(--toggle-width,3rem)}.toggle-on{background:var(--toggle-bg-on,#10b981);border-color:var(--toggle-border-on,#10b981);color:var(--toggle-text-on,#fff);justify-content:flex-start}.toggle-off{background:var(--toggle-bg-off,#e5e7eb);border-color:var(--toggle-border-off,#e5e7eb);color:var(--toggle-text-off,#374151);justify-content:flex-end}.toggle-on-disabled{background:var(--toggle-bg-on-disabled,#d1d5db);border-color:var(--toggle-border-on-disabled,#d1d5db);color:var(--toggle-text-on-disabled,#9ca3af);cursor:not-allowed;justify-content:flex-start}.toggle-off-disabled{background:var(--toggle-bg-off-disabled,#e5e7eb);border-color:var(--toggle-border-off-disabled,#e5e7eb);color:var(--toggle-text-off-disabled,#9ca3af);cursor:not-allowed;justify-content:flex-end}.toggle-handle{background:var(--toggle-handle-enabled,#fff);border-radius:50%;display:inline-block;height:var(--toggle-height,1.25rem);position:absolute;top:0;transition-duration:var(--toggle-duration,.15s);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:var(--toggle-height,1.25rem)}.toggle-handle-on{left:100%;transform:translateX(-100%)}.toggle-handle-off{left:0}.toggle-handle-on-disabled{background:var(--toggle-handle-disabled,#f3f4f6);left:100%;transform:translateX(-100%)}.toggle-handle-off-disabled{background:var(--toggle-handle-disabled,#f3f4f6);left:0}.toggle-label{box-sizing:border-box;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;width:calc(var(--toggle-width, 3.25rem) - var(--toggle-height, 1.25rem))}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-hotel {\n    width: 100px;\n    height: 100px;\n}\nhtml * {\n    box-sizing: border-box;\n}\np {\n    margin: 0;\n}\n.upload__box {\n    padding: 40px;\n}\n.upload__inputfile {\n    width: .1px;\n    height: .1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.upload__btn {\n    display: inline-block;\n    font-weight: 600;\n    color: #fff;\n    text-align: center;\n    min-width: 116px;\n    padding: 5px;\n    transition: all .3s ease;\n    cursor: pointer;\n    border: 2px solid;\n    background-color: #4045ba;\n    border-color: #4045ba;\n    border-radius: 10px;\n    line-height: 26px;\n    font-size: 14px;\n}\n.upload__btn:hover {\n    background-color: unset;\n    color: #4045ba;\n    transition: all .3s ease;\n}\n.upload__btn-box {\n    margin-bottom: 10px;\n}\n.upload__img-wrap {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 -10px;\n}\n.upload__img-box {\n    width: 150px;\n    padding: 0 10px;\n    margin-bottom: 12px;\n}\n.upload__img-close {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    text-align: center;\n    line-height: 24px;\n    z-index: 1;\n    cursor: pointer;\n}\n.upload__img-close:after {\n    content: '\\2716';\n    font-size: 14px;\n    color: white;\n}\n.img-bg {\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    position: relative;\n    padding-bottom: 100%;\n}\n#form-sub-title {\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.4;\n    margin-bottom: 15px;\n    color: #1896bd;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./default.css?vue&type=style&index=1&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./default.css?vue&type=style&index=0&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_2_id_34f08e90_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=style&index=2&id=34f08e90&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_2_id_34f08e90_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_2_id_34f08e90_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/DataTable.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/DataTable.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataTable_vue_vue_type_template_id_4b997e69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=4b997e69 */ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69");
/* harmony import */ var _DataTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/DataTable.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DataTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DataTable_vue_vue_type_template_id_4b997e69__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/DataTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Pagination.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Pagination.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_d7acf176__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=d7acf176 */ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Pagination_vue_vue_type_template_id_d7acf176__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Rooms/Add.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Rooms/Add.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_1860e20f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=1860e20f */ "./resources/js/components/Rooms/Add.vue?vue&type=template&id=1860e20f");
/* harmony import */ var _Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Rooms/Add.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Add_vue_vue_type_template_id_1860e20f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Rooms/Add.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Types/Add.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Types/Add.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_34f08e90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=34f08e90 */ "./resources/js/components/Types/Add.vue?vue&type=template&id=34f08e90");
/* harmony import */ var _Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Types/Add.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _vueform_toggle_themes_default_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css */ "./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css");
/* harmony import */ var _Add_vue_vue_type_style_index_2_id_34f08e90_lang_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=2&id=34f08e90&lang=css */ "./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;




const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Add_vue_vue_type_template_id_34f08e90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Types/Add.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Types/Lists.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Types/Lists.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Lists_vue_vue_type_template_id_9bf77478__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lists.vue?vue&type=template&id=9bf77478 */ "./resources/js/components/Types/Lists.vue?vue&type=template&id=9bf77478");
/* harmony import */ var _Lists_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lists.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Types/Lists.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_hotel_book_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Lists_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Lists_vue_vue_type_template_id_9bf77478__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Types/Lists.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataTable_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataTable.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataTable.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Rooms/Add.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Rooms/Add.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Rooms/Add.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Types/Add.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Types/Add.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Types/Lists.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Types/Lists.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Lists_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Lists_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Lists.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Lists.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataTable_vue_vue_type_template_id_4b997e69__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataTable_vue_vue_type_template_id_4b997e69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataTable.vue?vue&type=template&id=4b997e69 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DataTable.vue?vue&type=template&id=4b997e69");


/***/ }),

/***/ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_d7acf176__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_d7acf176__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=d7acf176 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176");


/***/ }),

/***/ "./resources/js/components/Rooms/Add.vue?vue&type=template&id=1860e20f":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Rooms/Add.vue?vue&type=template&id=1860e20f ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_1860e20f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_1860e20f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=template&id=1860e20f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Rooms/Add.vue?vue&type=template&id=1860e20f");


/***/ }),

/***/ "./resources/js/components/Types/Add.vue?vue&type=template&id=34f08e90":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Types/Add.vue?vue&type=template&id=34f08e90 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_34f08e90__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_34f08e90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=template&id=34f08e90 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=template&id=34f08e90");


/***/ }),

/***/ "./resources/js/components/Types/Lists.vue?vue&type=template&id=9bf77478":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Types/Lists.vue?vue&type=template&id=9bf77478 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Lists_vue_vue_type_template_id_9bf77478__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Lists_vue_vue_type_template_id_9bf77478__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Lists.vue?vue&type=template&id=9bf77478 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Lists.vue?vue&type=template&id=9bf77478");


/***/ }),

/***/ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_1_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./default.css?vue&type=style&index=1&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=1&lang=css");


/***/ }),

/***/ "./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_default_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./default.css?vue&type=style&index=0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/@vueform/toggle/themes/default.css?vue&type=style&index=0&lang=css");


/***/ }),

/***/ "./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_style_index_2_id_34f08e90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=style&index=2&id=34f08e90&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Types/Add.vue?vue&type=style&index=2&id=34f08e90&lang=css");


/***/ }),

/***/ "./node_modules/@vueform/multiselect/dist/multiselect.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@vueform/multiselect/dist/multiselect.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function isNullish (val) {
  return [null, undefined].indexOf(val) !== -1
}

function useData (props, context, dep)
{
  const { object, valueProp, mode } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  const $this = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;

  // =============== METHODS ==============

  const update = (val, triggerInput = true) => {
    // Setting object(s) as internal value
    iv.value = makeInternal(val);

    // Setting object(s) or plain value as external 
    // value based on `option` setting
    const externalVal = makeExternal(val);

    context.emit('change', externalVal, $this);

    if (triggerInput) {
      context.emit('input', externalVal);
      context.emit('update:modelValue', externalVal);
    }
  }; 

  // no export
  const makeExternal = (val) => {
    // If external value should be object
    // no transformation is required
    if (object.value) {
      return val
    }

    // No need to transform if empty value
    if (isNullish(val)) {
      return val
    }

    // If external should be plain transform
    // value object to plain values
    return !Array.isArray(val) ? val[valueProp.value] : val.map(v => v[valueProp.value])
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === 'single' ? {} : []
    }

    return val
  };

  return {
    update,
  }
}

function useValue (props, context)
{
  const { value, modelValue, mode, valueProp } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // ================ DATA ================

  // internalValue
  const iv = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(mode.value !== 'single' ? [] : {});

  // ============== COMPUTED ==============

  /* istanbul ignore next */
  // externalValue
  const ev = modelValue && modelValue.value !== undefined ? modelValue : value;

  const plainValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return mode.value === 'single' ? iv.value[valueProp.value] : iv.value.map(v=>v[valueProp.value])
  });

  const textValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return mode.value !== 'single' ? iv.value.map(v=>v[valueProp.value]).join(',') : iv.value[valueProp.value]
  });

  return {
    iv,
    internalValue: iv,
    ev,
    externalValue: ev,
    textValue,
    plainValue,
  }
}

function useSearch (props, context, dep)
{
  const { regex } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  const $this = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy;

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const open = dep.open;

  // ================ DATA ================

  const search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  const input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  // =============== METHODS ==============

  const clearSearch = () => {
    search.value = '';
  };

  const handleSearchInput = (e) => {
    search.value = e.target.value;
  };

  const handleKeypress = (e) => {
    if (regex && regex.value) {
      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }

      if (!e.key.match(regexp)) {
        e.preventDefault();
      }
    }
  };

  const handlePaste = (e) => {
    if (regex && regex.value) {
      let clipboardData = e.clipboardData || /* istanbul ignore next */ window.clipboardData;
      let pastedData = clipboardData.getData('Text');

      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }
      
      if (!pastedData.split('').every(c => !!c.match(regexp))) {
        e.preventDefault();
      }
    }

    context.emit('paste', e, $this);
  };

  // ============== WATCHERS ==============

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(search, (val) => {
    if (!isOpen.value && val) {
      open();
    }

    context.emit('search-change', val, $this);
  });

  return {
    search,
    input,
    clearSearch,
    handleSearchInput,
    handleKeypress,
    handlePaste,
  }
}

function usePointer$1 (props, context, dep)
{
  const { groupSelect, mode, groups, disabledProp } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // ================ DATA ================

  const pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  // =============== METHODS ==============

  const setPointer = (option) => {
    if (option === undefined || (option !== null && option[disabledProp.value])) {
      return
    }

    if (groups.value && option && option.group && (mode.value === 'single' || !groupSelect.value)) {
      return
    }

    pointer.value = option;
  };

  const clearPointer = () => {
    setPointer(null);
  };

  return {
    pointer,
    setPointer,
    clearPointer,
  }
}

function normalize (str, strict = true) {
  return strict
    ? String(str).toLowerCase().trim()
    : String(str).toLowerCase()
                 .normalize('NFD')
                 .trim()
                 .replace(new RegExp(/æ/g), 'ae')
                 .replace(new RegExp(/œ/g), 'oe')
                 .replace(new RegExp(/ø/g), 'o')
                 .replace(/\p{Diacritic}/gu, '')
}

function isObject (variable) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

function arraysEqual (array1, array2) {
  const array2Sorted = array2.slice().sort();

  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
      return value === array2Sorted[index];
  })
}

function useOptions (props, context, dep)
{
  const { 
    options, mode, trackBy: trackBy_, limit, hideSelected, createTag, createOption: createOption_, label,
    appendNewTag, appendNewOption: appendNewOption_, multipleLabel, object, loading, delay, resolveOnLoad,
    minChars, filterResults, clearOnSearch, clearOnSelect, valueProp, allowAbsent, groupLabel,
    canDeselect, max, strict, closeOnSelect, closeOnDeselect, groups: groupped, reverse, infinite,
    groupOptions, groupHideEmpty, groupSelect, onCreate, disabledProp, searchStart, searchFilter,
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  const $this = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const ev = dep.ev;
  const search = dep.search;
  const clearSearch = dep.clearSearch;
  const update = dep.update;
  const pointer = dep.pointer;
  const clearPointer = dep.clearPointer;
  const focus = dep.focus;
  const deactivate = dep.deactivate;
  const close = dep.close;
  const localize = dep.localize;

  // ================ DATA ================

  // no export
  // appendedOptions
  const ap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  // no export
  // resolvedOptions
  const ro = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);

  const resolving = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

  // no export
  const searchWatcher = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  const offset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(infinite.value && limit.value === -1 ? 10 : limit.value);

  // ============== COMPUTED ==============

  // no export
  const createOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const appendNewOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (appendNewTag.value !== undefined) {
      return appendNewTag.value
    } else if (appendNewOption_.value !== undefined) {
      return appendNewOption_.value
    }

    return true
  });

  // no export
  // extendedOptions
  const eo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (groupped.value) {
      let groups = eg.value || /* istanbul ignore next */ [];

      let eo = [];

      groups.forEach((group) => {
        optionsToArray(group[groupOptions.value]).forEach((option) => {
          eo.push(Object.assign({}, option, group[disabledProp.value] ? { [disabledProp.value]: true } : {}));
        });
      });

      return eo
    } else {
      let eo = optionsToArray(ro.value || /* istanbul ignore next */ []);

      if (ap.value.length) {
        eo = eo.concat(ap.value);
      }

      return eo
    }
  });

  // preFilteredOptions
  const pfo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let options = eo.value;

    if (reverse.value) {
      options = options.reverse();
    }

    if (createdOption.value.length) {
      options = createdOption.value.concat(options);
    }

    return filterOptions(options)
  });

  // filteredOptions
  const fo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let options = pfo.value;

    if (offset.value > 0) {
      options = options.slice(0, offset.value);
    }

    return options
  });

  // no export
  // extendedGroups
  const eg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (!groupped.value) {
      return []
    }

    let eg = [];
    let groups = ro.value || /* istanbul ignore next */ [];

    if (ap.value.length) {
      eg.push({
        [groupLabel.value]: ' ',
        [groupOptions.value]: [...ap.value],
        __CREATE__: true
      });
    }

    return eg.concat(groups)
  });

  // preFilteredGroups
  const pfg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let groups = [...eg.value].map(g => ({...g}));

    if (createdOption.value.length) {
      if (groups[0] && groups[0].__CREATE__) {
        groups[0][groupOptions.value] = [...createdOption.value, ...groups[0][groupOptions.value]];
      } else {
        groups = [{
          [groupLabel.value]: ' ',
          [groupOptions.value]: [...createdOption.value],
          __CREATE__: true
        }].concat(groups);
      }
    }

    return groups
  });

  // filteredGroups
  const fg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (!groupped.value) {
      return []
    }

    let options = pfg.value;

    return filterGroups((options || /* istanbul ignore next */ []).map((group, index) => {
      const arrayOptions = optionsToArray(group[groupOptions.value]);

      return {
        ...group,
        index,
        group: true,
        [groupOptions.value]: filterOptions(arrayOptions, false).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
        __VISIBLE__: filterOptions(arrayOptions).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
      }
      // Difference between __VISIBLE__ and {groupOptions}: visible does not contain selected options when hideSelected=true
    }))
  });

  const hasSelected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    switch (mode.value) {
      case 'single':
        return !isNullish(iv.value[valueProp.value])

      case 'multiple':
      case 'tags':
        return !isNullish(iv.value) && iv.value.length > 0
    }
  });

  const multipleLabelText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return multipleLabel !== undefined && multipleLabel.value !== undefined
      ? multipleLabel.value(iv.value, $this)
      : (iv.value && iv.value.length > 1 ? `${iv.value.length} options selected` : `1 option selected`)
  });

  const noOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length
  });


  const noResults = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return eo.value.length > 0 && fo.value.length == 0 && ((search.value && groupped.value) || !groupped.value)
  });

  // no export
  const createdOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (createOption.value === false || !search.value) {
      return []
    }

    if (getOptionByTrackBy(search.value) !== -1) {
      return []
    }

    return [{
      [valueProp.value]: search.value,
      [trackBy.value]: search.value,
      [label.value]: search.value,
      __CREATE__: true,
    }]
  });

  const trackBy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return trackBy_.value || label.value
  });

  // no export
  const nullValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    switch (mode.value) {
      case 'single':
        return null

      case 'multiple':
      case 'tags':
        return []
    }
  });

  const busy = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return loading.value || resolving.value
  });

  // =============== METHODS ==============

  /**
   * @param {array|object|string|number} option 
   */
  const select = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        update(option);
        break

      case 'multiple':
      case 'tags':
        update((iv.value).concat(option));
        break
    }

    context.emit('select', finalValue(option), option, $this);
  };

  const deselect = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        clear();
        break

      case 'tags':
      case 'multiple':
        update(Array.isArray(option)
          ? iv.value.filter(v => option.map(o => o[valueProp.value]).indexOf(v[valueProp.value]) === -1)
          : iv.value.filter(v => v[valueProp.value] != option[valueProp.value]));
        break
    }

    context.emit('deselect', finalValue(option), option, $this);
  };

  // no export
  const finalValue = (option) => {
    return object.value ? option : option[valueProp.value]
  };

  const remove = (option) => {
    deselect(option);
  };

  const handleTagRemove = (option, e) => {
    if (e.button !== 0) {
      e.preventDefault();
      return
    }

    remove(option);
  };

  const clear = () => {
    context.emit('clear', $this);
    update(nullValue.value);
  };

  const isSelected = (option) => {
    if (option.group !== undefined) {
      return mode.value === 'single' ? false : areAllSelected(option[groupOptions.value]) && option[groupOptions.value].length
    }

    switch (mode.value) {
      case 'single':
        return !isNullish(iv.value) && iv.value[valueProp.value] == option[valueProp.value]

      case 'tags':
      case 'multiple':
        return !isNullish(iv.value) && iv.value.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    }
  };

  const isDisabled = (option) => {
    return option[disabledProp.value] === true
  };

  const isMax = () => {
    if (max === undefined || max.value === -1 || (!hasSelected.value && max.value > 0)) {
      return false
    }
    
    return iv.value.length >= max.value
  };

  const handleOptionClick = (option) => {
    if (isDisabled(option)) {
      return
    }

    if (onCreate && onCreate.value && !isSelected(option) && option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;

      option = onCreate.value(option, $this);
      
      if (option instanceof Promise) {
        resolving.value = true;
        option.then((result) => {
          resolving.value = false;
          handleOptionSelect(result);
        });

        return
      } 
    }

    handleOptionSelect(option);
  };

  const handleOptionSelect = (option) => {
    if (option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
    }
    
    switch (mode.value) {
      case 'single':
        if (option && isSelected(option)) {
          if (canDeselect.value) {
            deselect(option);
          }

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        /* istanbul ignore else */
        if (clearOnSelect.value) {
          clearSearch();
        }

        if (closeOnSelect.value) {
          clearPointer();
          close();
        }

        if (option) {
          select(option);
        }
        break

      case 'multiple':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
          select(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break

      case 'tags':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (option) {
          select(option);
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break
    }

    if (!closeOnSelect.value) {
      focus();
    }
  };

  const handleGroupClick = (group) => {
    if (isDisabled(group) || mode.value === 'single' || !groupSelect.value) {
      return
    }

    switch (mode.value) {
      case 'multiple':
      case 'tags':
        if (areAllEnabledSelected(group[groupOptions.value])) {
          deselect(group[groupOptions.value]);
        } else {
          select(group[groupOptions.value]
            .filter(o => iv.value.map(v => v[valueProp.value]).indexOf(o[valueProp.value]) === -1)
            .filter(o => !o[disabledProp.value])
            .filter((o, k) => iv.value.length + 1 + k <= max.value || max.value === -1)
          );
        }
        break
    }

    if (closeOnSelect.value) {
      deactivate();
    }
  };

  const handleOptionAppend = (option) => {
    if (getOption(option[valueProp.value]) === undefined && createOption.value) {
      context.emit('tag', option[valueProp.value], $this);
      context.emit('option', option[valueProp.value], $this);
      context.emit('create', option[valueProp.value], $this);

      if (appendNewOption.value) {
        appendOption(option);
      }

      clearSearch();
    }
  };

  const selectAll = () => {
    if (mode.value === 'single') {
      return
    }

    select(fo.value.filter(o => !o.disabled && !isSelected(o)));
  };

  // no export
  const areAllEnabledSelected = (options) => {
    return options.find(o => !isSelected(o) && !o[disabledProp.value]) === undefined
  };

  // no export
  const areAllSelected = (options) => {
    return options.find(o => !isSelected(o)) === undefined
  };

  const getOption = (val) => {
    return eo.value[eo.value.map(o => String(o[valueProp.value])).indexOf(String(val))]
  };

  // no export
  const getOptionByTrackBy = (val, norm = true) => {
    return eo.value.map(o => parseInt(o[trackBy.value]) == o[trackBy.value] ? parseInt(o[trackBy.value]) : o[trackBy.value]).indexOf(
      parseInt(val) == val ? parseInt(val) : val
    )
  };

  // no export
  const shouldHideOption = (option) => {
    return ['tags', 'multiple'].indexOf(mode.value) !== -1 && hideSelected.value && isSelected(option)
  };

  // no export
  const appendOption = (option) => {
    ap.value.push(option);
  };

  // no export
  const filterGroups = (groups) => {
    // If the search has value we need to filter among 
    // the ones that are visible to the user to avoid
    // displaying groups which technically have options
    // based on search but that option is already selected.
    return groupHideEmpty.value
      ? groups.filter(g => search.value
          ? g.__VISIBLE__.length
          : g[groupOptions.value].length
        )
      : groups.filter(g => search.value ? g.__VISIBLE__.length : true)
  };

  // no export
  const filterOptions = (options, excludeHideSelected = true) => {
    let fo = options;
    
    if (search.value && filterResults.value) {
      let filter = searchFilter.value;

      if (!filter) {
        filter = (option, $this) => {
          let target = normalize(localize(option[trackBy.value]), strict.value);

          return searchStart.value
            ? target.startsWith(normalize(search.value, strict.value))
            : target.indexOf(normalize(search.value, strict.value)) !== -1
        };
      }

      fo = fo.filter(filter);
    }

    if (hideSelected.value && excludeHideSelected) {
      fo = fo.filter((option) => !shouldHideOption(option));
    }

    return fo
  };

  // no export
  const optionsToArray = (options) => {
    let uo = options;
    
    // Transforming an object to an array of objects
    if (isObject(uo)) {
      uo = Object.keys(uo).map((key) => {
        let val = uo[key];

        return { [valueProp.value]: key, [trackBy.value]: val, [label.value]: val}
      });
    }

    // Transforming an plain arrays to an array of objects
    uo = uo.map((val) => {
      return typeof val === 'object' ? val : { [valueProp.value]: val, [trackBy.value]: val, [label.value]: val}
    });

    return uo
  };

  // no export
  const initInternalValue = () => {
    if (!isNullish(ev.value)) {
      iv.value = makeInternal(ev.value);
    }
  };

  const resolveOptions = (callback) => {
    resolving.value = true;

    return new Promise((resolve, reject) => {
      options.value(search.value, $this).then((response) => {
        ro.value = response || [];

        if (typeof callback == 'function') {
          callback(response);
        }

        resolving.value = false;
      }).catch((e) => {
        console.error(e);

        ro.value = [];

        resolving.value = false;
      }).finally(() => {
        resolve();
      });
    })
  };

  // no export
  const refreshLabels = () => {
    if (!hasSelected.value) {
      return
    }

    if (mode.value === 'single') {
      let option = getOption(iv.value[valueProp.value]);

      /* istanbul ignore else */
      if (option !== undefined) {
        let newLabel = option[label.value];

        iv.value[label.value] = newLabel;

        if (object.value) {
          ev.value[label.value] = newLabel;
        }
      }
    } else {
      iv.value.forEach((val, i) => {
        let option = getOption(iv.value[i][valueProp.value]);

        /* istanbul ignore else */
        if (option !== undefined) {
          let newLabel = option[label.value];

          iv.value[i][label.value] = newLabel;

          if (object.value) {
            ev.value[i][label.value] = newLabel;
          }
        }
      });
    }
  };

  const refreshOptions = (callback) => {
    resolveOptions(callback);
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === 'single' ? {} : []
    }

    if (object.value) {
      return val
    }

    // If external should be plain transform value object to plain values
    return mode.value === 'single' ? getOption(val) || (allowAbsent.value ? {
      [label.value]: val,
      [valueProp.value]: val,
      [trackBy.value]: val,
    } : {}) : val.filter(v => !!getOption(v) || allowAbsent.value).map(v => getOption(v) || {
      [label.value]: v,
      [valueProp.value]: v,
      [trackBy.value]: v,
    })
  };

  // no export
  const initSearchWatcher = () => {
    searchWatcher.value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(search, (query) => {
      if (query.length < minChars.value || (!query && minChars.value !== 0)) {
        return
      }

      resolving.value = true;

      if (clearOnSearch.value) {
        ro.value = [];
      }
      setTimeout(() => {
        if (query != search.value) {
          return
        }

        options.value(search.value, $this).then((response) => {
          if (query == search.value || !search.value) {
            ro.value = response;
            pointer.value = fo.value.filter(o => o[disabledProp.value] !== true)[0] || null;
            resolving.value = false;
          }
        }).catch( /* istanbul ignore next */ (e) => {
          console.error(e);
        });
      }, delay.value);

    }, { flush: 'sync' });
  };

  // ================ HOOKS ===============

  if (mode.value !== 'single' && !isNullish(ev.value) && !Array.isArray(ev.value)) {
    throw new Error(`v-model must be an array when using "${mode.value}" mode`)
  }

  if (options && typeof options.value == 'function') {
    if (resolveOnLoad.value) {
      resolveOptions(initInternalValue);
    } else if (object.value == true) {
      initInternalValue();
    }
  }
  else {
    ro.value = options.value;

    initInternalValue();
  }
  
  // ============== WATCHERS ==============

  if (delay.value > -1) {
    initSearchWatcher();
  }

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(delay, (value, old) => {
    /* istanbul ignore else */
    if (searchWatcher.value) {
      searchWatcher.value();
    }

    if (value >= 0) {
      initSearchWatcher();
    }
  });

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(ev, (newValue) => {
    if (isNullish(newValue)) {
      update(makeInternal(newValue), false);
      return
    }

    switch (mode.value) {
      case 'single':
        if (object.value ? newValue[valueProp.value] != iv.value[valueProp.value] : newValue != iv.value[valueProp.value]) {
          update(makeInternal(newValue), false);
        }
        break

      case 'multiple':
      case 'tags':
        if (!arraysEqual(object.value ? newValue.map(o => o[valueProp.value]) : newValue, iv.value.map(o => o[valueProp.value]))) {
          update(makeInternal(newValue), false);
        }
        break
    }
  }, { deep: true });

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(options, (n, o) => {
    if (typeof props.options === 'function') {
      if (resolveOnLoad.value && (!o || (n && n.toString() !== o.toString()))) {
        resolveOptions();
      }
    } else {
      ro.value = props.options;

      if (!Object.keys(iv.value).length) {
        initInternalValue();
      }

      refreshLabels();
    }
  });

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(label, refreshLabels);

  return {
    pfo,
    fo,
    filteredOptions: fo,
    hasSelected,
    multipleLabelText,
    eo,
    extendedOptions: eo,
    eg,
    extendedGroups: eg,
    fg,
    filteredGroups: fg,
    noOptions,
    noResults,
    resolving,
    busy,
    offset,
    select,
    deselect,
    remove,
    selectAll,
    clear,
    isSelected,
    isDisabled,
    isMax,
    getOption,
    handleOptionClick,
    handleGroupClick,
    handleTagRemove,
    refreshOptions,
    resolveOptions,
    refreshLabels,
  }
}

function usePointer (props, context, dep)
{
  const {
    valueProp, showOptions, searchable, groupLabel,
    groups: groupped, mode, groupSelect, disabledProp,
    groupOptions,
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // ============ DEPENDENCIES ============

  const fo = dep.fo;
  const fg = dep.fg;
  const handleOptionClick = dep.handleOptionClick;
  const handleGroupClick = dep.handleGroupClick;
  const search = dep.search;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const multiselect = dep.multiselect;
  const isOpen = dep.isOpen;

  // ============== COMPUTED ==============

  // no export
  const options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return fo.value.filter(o => !o[disabledProp.value])
  });

  const groups = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return fg.value.filter(g => !g[disabledProp.value])
  });

  const canPointGroups = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return mode.value !== 'single' && groupSelect.value
  });

  const isPointerGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return pointer.value && pointer.value.group
  });

  const currentGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return getParentGroup(pointer.value)
  });

  const prevGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const group = isPointerGroup.value ? pointer.value : /* istanbul ignore next */ getParentGroup(pointer.value);
    const groupIndex = groups.value.map(g => g[groupLabel.value]).indexOf(group[groupLabel.value]);
    let prevGroup = groups.value[groupIndex - 1];

    if (prevGroup === undefined) {
      prevGroup = lastGroup.value;
    }

    return prevGroup
  });
  
  const nextGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let nextIndex = groups.value.map(g => g.label).indexOf(isPointerGroup.value
      ? pointer.value[groupLabel.value]
      : getParentGroup(pointer.value)[groupLabel.value]) + 1;

    if (groups.value.length <= nextIndex) {
      nextIndex = 0;
    }

    return groups.value[nextIndex]
  });

  const lastGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return [...groups.value].slice(-1)[0]
  });
  
  const currentGroupFirstEnabledOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return pointer.value.__VISIBLE__.filter(o => !o[disabledProp.value])[0]
  });

  const currentGroupPrevEnabledOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const options = currentGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1]
  });
  
  const currentGroupNextEnabledOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const options = getParentGroup(pointer.value).__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1]
  });

  const prevGroupLastEnabledOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return [...prevGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  const lastGroupLastEnabledOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return [...lastGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  // =============== METHODS ==============

  const isPointed = (option) => {
    return (!!pointer.value && (
      (!option.group && pointer.value[valueProp.value] === option[valueProp.value]) ||
      (option.group !== undefined && pointer.value[groupLabel.value] === option[groupLabel.value])
    )) ? true : undefined
  };

  const setPointerFirst = () => {
    setPointer(options.value[0] || null);
  };

  const selectPointer = () => {
    if (!pointer.value || pointer.value[disabledProp.value] === true) {
      return
    }

    if (isPointerGroup.value) {
      handleGroupClick(pointer.value);
    } else {
      handleOptionClick(pointer.value);
    }
  };

  const forwardPointer = () => {
    if (pointer.value === null) {
      setPointer((groupped.value && canPointGroups.value ? (!groups.value[0].__CREATE__ ? groups.value[0] : options.value[0]) : options.value[0]) || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let nextPointer = isPointerGroup.value ? currentGroupFirstEnabledOption.value : currentGroupNextEnabledOption.value;

      if (nextPointer === undefined) {
        nextPointer = nextGroup.value;

        if (nextPointer.__CREATE__) {
          nextPointer = nextPointer[groupOptions.value][0];
        }
      }

      setPointer(nextPointer || /* istanbul ignore next */ null);
    } else {
      let next = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1;

      if (options.value.length <= next) {
        next = 0;
      }

      setPointer(options.value[next] || null);
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const backwardPointer = () => {
    if (pointer.value === null) {
      let prevPointer = options.value[options.value.length - 1];

      if (groupped.value && canPointGroups.value) {
        prevPointer = lastGroupLastEnabledOption.value;

        if (prevPointer === undefined) {
          prevPointer = lastGroup.value;
        }
      }

      setPointer(prevPointer  || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let prevPointer = isPointerGroup.value ? prevGroupLastEnabledOption.value : currentGroupPrevEnabledOption.value;

      if (prevPointer === undefined) {
        prevPointer = isPointerGroup.value ? prevGroup.value : currentGroup.value;

        if (prevPointer.__CREATE__) {
          prevPointer = prevGroupLastEnabledOption.value;

          if (prevPointer === undefined) {
            prevPointer = prevGroup.value;
          }
        }
      }

      setPointer(prevPointer || /* istanbul ignore next */ null);
    } else {
      let prevIndex = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1;

      if (prevIndex < 0) {
        prevIndex = options.value.length - 1;
      }

      setPointer(options.value[prevIndex] || null);
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const getParentGroup = (option) => {
    return groups.value.find((group) => {
      return group.__VISIBLE__.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    })
  };

  // no export
  /* istanbul ignore next */
  const adjustWrapperScrollToPointer = () => {
    let pointedOption = multiselect.value.querySelector(`[data-pointed]`);

    if (!pointedOption) {
      return
    }

    let wrapper = pointedOption.parentElement.parentElement;

    if (groupped.value) {
      wrapper = isPointerGroup.value
        ? pointedOption.parentElement.parentElement.parentElement
        : pointedOption.parentElement.parentElement.parentElement.parentElement;
    }

    if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight;
    }
    
    if (pointedOption.offsetTop < wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop;
    }
  };

  // ============== WATCHERS ==============

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(search, (val) => {
    if (searchable.value) {
      if (val.length && showOptions.value) {
        setPointerFirst();
      } else {
        clearPointer();
      }
    }
  });

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(isOpen, (val) => {
    if (val) {
      let firstSelected = multiselect.value.querySelectorAll(`[data-selected]`)[0];

      if (!firstSelected) {
        return
      }

      let wrapper = firstSelected.parentElement.parentElement;
      
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        /* istanbul ignore next */
        if (wrapper.scrollTop > 0) {
          return
        }

        wrapper.scrollTop = firstSelected.offsetTop;
      });
    }
  });

  return {
    pointer,
    canPointGroups,
    isPointed,
    setPointerFirst,
    selectPointer,
    forwardPointer,
    backwardPointer,
  }
}

function useDropdown (props, context, dep)
{
  const { disabled } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  const $this = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy;

  // ================ DATA ================

  const isOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

  // =============== METHODS ==============

  const open = () => {
    if (isOpen.value || disabled.value) {
      return
    }

    isOpen.value = true;
    context.emit('open', $this);
  };

  const close = () => {
    if (!isOpen.value) {
      return
    }

    isOpen.value = false;
    context.emit('close', $this);
  };

  return {
    isOpen,
    open,
    close,
  }
}

function useMultiselect (props, context, dep)
{
  const { searchable, disabled, clearOnBlur } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // ============ DEPENDENCIES ============

  const input = dep.input;
  const open = dep.open;
  const close = dep.close;
  const clearSearch = dep.clearSearch;
  const isOpen = dep.isOpen;

  // ================ DATA ================

  const multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  
  const wrapper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  const tags = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  const isActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

  const mouseClicked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

  // ============== COMPUTED ==============

  const tabindex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return searchable.value || disabled.value ? -1 : 0
  });

  // =============== METHODS ==============

  const blur = () => {
    if (searchable.value) {
      input.value.blur();
    }

    wrapper.value.blur();
  };

  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus();
    }
  };

  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return
    }

    isActive.value = true;

    if (shouldOpen) {
      open();
    }
  };

  const deactivate = () => {
    isActive.value = false;

    setTimeout(() => {
      if (!isActive.value) {
        close();

        if (clearOnBlur.value) {
          clearSearch();
        }
      }
    }, 1);
  };

  const handleFocusIn = (e) => {
    if ((e.target.closest('[data-tags]') && e.target.nodeName !== 'INPUT') || e.target.closest('[data-clear]')) {
      return
    }

    activate(mouseClicked.value);
  };

  const handleFocusOut = () => {
    deactivate();
  };

  const handleCaretClick = () => {
    deactivate();
    blur();
  };

  /* istanbul ignore next */
  const handleMousedown = (e) => {
    mouseClicked.value = true;

    if (isOpen.value && (e.target.isEqualNode(wrapper.value) || e.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate();
      }, 0);
    } else if (document.activeElement.isEqualNode(wrapper.value) && !isOpen.value) {
      activate();    
    }

    setTimeout(() => {
      mouseClicked.value = false;
    }, 0);
  };

  return {
    multiselect,
    wrapper,
    tags,
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown,
  }
}

function useKeyboard (props, context, dep)
{
  const {
    mode, addTagOn, openDirection, searchable,
    showOptions, valueProp, groups: groupped,
    addOptionOn: addOptionOn_, createTag, createOption: createOption_,
    reverse,
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  const $this = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const update = dep.update;
  const search = dep.search;
  const setPointer = dep.setPointer;
  const selectPointer = dep.selectPointer;
  const backwardPointer = dep.backwardPointer;
  const forwardPointer = dep.forwardPointer;
  const multiselect = dep.multiselect;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const blur = dep.blur;
  const fo = dep.fo;

  // ============== COMPUTED ==============

  // no export
  const createOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const addOptionOn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (addTagOn.value !== undefined) {
      return addTagOn.value
    }
    else if (addOptionOn_.value !== undefined) {
      return addOptionOn_.value
    }

    return ['enter']
  });

  // =============== METHODS ==============

  // no export
  const preparePointer = () => {
    // When options are hidden and creating tags is allowed
    // no pointer will be set (because options are hidden).
    // In such case we need to set the pointer manually to the 
    // first option, which equals to the option created from
    // the search value.
    if (mode.value === 'tags' && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map(o => o[valueProp.value]).indexOf(search.value)]);
    }
  };

  const removeLastRemovable = (arr) => {
    // Find the index of the last object in the array that doesn't have a "remove" property set to false
    let indexToRemove = arr.length - 1;
    while (indexToRemove >= 0 && (arr[indexToRemove].remove === false || arr[indexToRemove].disabled)) {
      indexToRemove--;
    }

    // If all objects have a "remove" property set to false, don't remove anything and return the original array
    if (indexToRemove < 0) {
      return arr
    }

    // Remove the object at the found index and return the updated array
    arr.splice(indexToRemove, 1);
    return arr
  };

  const handleKeydown = (e) => {
    context.emit('keydown', e, $this);

    let tagList;
    let activeIndex;

    if (['ArrowLeft', 'ArrowRight', 'Enter'].indexOf(e.key) !== -1 && mode.value === 'tags') {
      tagList = [...(multiselect.value.querySelectorAll(`[data-tags] > *`))].filter(e => e !== tags.value);
      activeIndex = tagList.findIndex(e => e === document.activeElement);
    }

    switch (e.key) {
      case 'Backspace':
        if (mode.value === 'single') {
          return
        }

        if (searchable.value && [null, ''].indexOf(search.value) === -1) {
          return
        }

        if (iv.value.length === 0) {
          return
        }

        update(removeLastRemovable([...iv.value]));
        break

      case 'Enter':
        e.preventDefault();

        if (e.keyCode === 229) {
          // ignore IME confirmation
          return
        }

        if (activeIndex !== -1 && activeIndex !== undefined) {
          update([...iv.value].filter((v, k) => k !== activeIndex));

          if (activeIndex === tagList.length - 1) {
            if (tagList.length - 1) {
              tagList[tagList.length - 2].focus();
            } else if (searchable.value) {
              tags.value.querySelector('input').focus();
            } else {
              wrapper.value.focus();
            }
          }
          return
        }

        if (addOptionOn.value.indexOf('enter') === -1 && createOption.value) {
          return
        }
        
        preparePointer();
        selectPointer();
        break

      case ' ':
        if (!createOption.value && !searchable.value) {
          e.preventDefault();
          
          preparePointer();
          selectPointer();
          return
        }

        if (!createOption.value) {
          return false
        } 

        if (addOptionOn.value.indexOf('space') === -1 && createOption.value) {
          return
        }

        e.preventDefault();
        
        preparePointer();
        selectPointer();
        break
      
      case 'Tab':
      case ';':
      case ',':
        if (addOptionOn.value.indexOf(e.key.toLowerCase()) === -1 || !createOption.value) {
          return
        }

        preparePointer();
        selectPointer();
        e.preventDefault();
        break

      case 'Escape':
        blur();
        break

      case 'ArrowUp':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }
        
        backwardPointer();
        break

      case 'ArrowDown':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }

        forwardPointer();
        break

      case 'ArrowLeft':
        if (
          (searchable.value && tags.value && tags.value.querySelector('input').selectionStart)
          || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length
        ) {
          return
        }

        e.preventDefault();

        if (activeIndex === -1) {
          tagList[tagList.length-1].focus();
        }
        else if (activeIndex > 0) {
          tagList[activeIndex-1].focus();
        }
        break

      case 'ArrowRight':
        if (activeIndex === -1 || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length) {
          return
        }

        e.preventDefault();
        
        /* istanbul ignore else */
        if (tagList.length > activeIndex + 1) {
          tagList[activeIndex+1].focus();
        }
        else if (searchable.value) {
          tags.value.querySelector('input').focus();
        }
        else if (!searchable.value) {
          wrapper.value.focus();
        }
        
        break
    }
  };

  const handleKeyup = (e) => {
    context.emit('keyup', e, $this);
  };

  return {
    handleKeydown,
    handleKeyup,
    preparePointer,
  }
}

function useClasses (props, context, dependencies)
{const { 
    classes: classes_, disabled, openDirection, showOptions
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // ============ DEPENDENCIES ============

  const isOpen = dependencies.isOpen;
  const isPointed = dependencies.isPointed;
  const isSelected = dependencies.isSelected;
  const isDisabled = dependencies.isDisabled;
  const isActive = dependencies.isActive;
  const canPointGroups = dependencies.canPointGroups;
  const resolving = dependencies.resolving;
  const fo = dependencies.fo;

  const classes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
    container: 'multiselect',
    containerDisabled: 'is-disabled',
    containerOpen: 'is-open',
    containerOpenTop: 'is-open-top',
    containerActive: 'is-active',
    wrapper: 'multiselect-wrapper',
    singleLabel: 'multiselect-single-label',
    singleLabelText: 'multiselect-single-label-text',
    multipleLabel: 'multiselect-multiple-label',
    search: 'multiselect-search',
    tags: 'multiselect-tags',
    tag: 'multiselect-tag',
    tagDisabled: 'is-disabled',
    tagRemove: 'multiselect-tag-remove',
    tagRemoveIcon: 'multiselect-tag-remove-icon',
    tagsSearchWrapper: 'multiselect-tags-search-wrapper',
    tagsSearch: 'multiselect-tags-search',
    tagsSearchCopy: 'multiselect-tags-search-copy',
    placeholder: 'multiselect-placeholder',
    caret: 'multiselect-caret',
    caretOpen: 'is-open',
    clear: 'multiselect-clear',
    clearIcon: 'multiselect-clear-icon',
    spinner: 'multiselect-spinner',
    inifinite: 'multiselect-inifite',
    inifiniteSpinner: 'multiselect-inifite-spinner',
    dropdown: 'multiselect-dropdown',
    dropdownTop: 'is-top',
    dropdownHidden: 'is-hidden',
    options: 'multiselect-options',
    optionsTop: 'is-top',
    group: 'multiselect-group',
    groupLabel: 'multiselect-group-label',
    groupLabelPointable: 'is-pointable',
    groupLabelPointed: 'is-pointed',
    groupLabelSelected: 'is-selected',
    groupLabelDisabled: 'is-disabled',
    groupLabelSelectedPointed: 'is-selected is-pointed',
    groupLabelSelectedDisabled: 'is-selected is-disabled',
    groupOptions: 'multiselect-group-options',
    option: 'multiselect-option',
    optionPointed: 'is-pointed',
    optionSelected: 'is-selected',
    optionDisabled: 'is-disabled',
    optionSelectedPointed: 'is-selected is-pointed',
    optionSelectedDisabled: 'is-selected is-disabled',
    noOptions: 'multiselect-no-options',
    noResults: 'multiselect-no-results',
    fakeInput: 'multiselect-fake-input',
    assist: 'multiselect-assistive-text',
    spacer: 'multiselect-spacer',
    ...classes_.value,
  }));

  // ============== COMPUTED ==============

  const showDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return !!(isOpen.value && showOptions.value && (!resolving.value || (resolving.value && fo.value.length)))
  });

  const classList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const c = classes.value;

    return {
      container: [c.container]
        .concat(disabled.value ? c.containerDisabled : [])
        .concat(showDropdown.value && openDirection.value === 'top'  ? c.containerOpenTop : [])
        .concat(showDropdown.value && openDirection.value !== 'top' ? c.containerOpen : [])
        .concat(isActive.value ? c.containerActive : []),
      wrapper: c.wrapper,
      spacer: c.spacer,
      singleLabel: c.singleLabel,
      singleLabelText: c.singleLabelText,
      multipleLabel: c.multipleLabel,
      search: c.search,
      tags: c.tags,
      tag: [c.tag]
        .concat(disabled.value ? c.tagDisabled : []),
      tagDisabled: c.tagDisabled,
      tagRemove: c.tagRemove,
      tagRemoveIcon: c.tagRemoveIcon,
      tagsSearchWrapper: c.tagsSearchWrapper,
      tagsSearch: c.tagsSearch,
      tagsSearchCopy: c.tagsSearchCopy,
      placeholder: c.placeholder,
      caret: [c.caret]
        .concat(isOpen.value ? c.caretOpen : []),
      clear: c.clear,
      clearIcon: c.clearIcon,
      spinner: c.spinner,
      inifinite: c.inifinite,
      inifiniteSpinner: c.inifiniteSpinner,
      dropdown: [c.dropdown]
        .concat(openDirection.value === 'top' ? c.dropdownTop : [])
        .concat(!isOpen.value || !showOptions.value || !showDropdown.value ? c.dropdownHidden : []),
      options: [c.options]
        .concat(openDirection.value === 'top' ? c.optionsTop : []),
      group: c.group,
      groupLabel: (g) => {
        let groupLabel = [c.groupLabel];

        if (isPointed(g)) {
          groupLabel.push(isSelected(g) ? c.groupLabelSelectedPointed : c.groupLabelPointed);
        } else if (isSelected(g) && canPointGroups.value) {
          groupLabel.push(isDisabled(g) ? c.groupLabelSelectedDisabled : c.groupLabelSelected);
        } else if (isDisabled(g)) {
          groupLabel.push(c.groupLabelDisabled);
        }

        if (canPointGroups.value) {
          groupLabel.push(c.groupLabelPointable);
        }

        return groupLabel
      },
      groupOptions: c.groupOptions,
      option: (o, g) => {
        let option = [c.option];

        if (isPointed(o)) {
          option.push(isSelected(o) ? c.optionSelectedPointed : c.optionPointed);
        } else if (isSelected(o)) {
          option.push(isDisabled(o) ? c.optionSelectedDisabled : c.optionSelected);
        } else if (isDisabled(o) || (g && isDisabled(g))) {
          option.push(c.optionDisabled);
        }

        return option
      },
      noOptions: c.noOptions,
      noResults: c.noResults,
      assist: c.assist,
      fakeInput: c.fakeInput,
    }
  });

  return {
    classList,
    showDropdown,
  }
}

function useScroll (props, context, dep)
{
  const {
    limit, infinite,
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const offset = dep.offset;
  const search = dep.search;
  const pfo = dep.pfo;
  const eo = dep.eo;

  // ================ DATA ================

  // no export
  const observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  const infiniteLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  // ============== COMPUTED ==============

  const hasMore = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return offset.value < pfo.value.length
  });

  // =============== METHODS ==============

  // no export
  /* istanbul ignore next */
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0];

    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;

      offset.value += limit.value == -1 ? 10 : limit.value;

      (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
        parent.scrollTop = scrollTop;
      });
    }
  };

  const observe = () => {
    /* istanbul ignore else */
    if (isOpen.value && offset.value < pfo.value.length) {
      observer.value.observe(infiniteLoader.value);
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect();
    }
  };

  // ============== WATCHERS ==============

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(isOpen, () => {
    if (!infinite.value) {
      return
    }

    observe();
  });

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(search, () => {
    if (!infinite.value) {
      return
    }

    offset.value = limit.value;

    observe();
  }, { flush: 'post' });

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(eo, () => {
    if (!infinite.value) {
      return
    }

    observe();
  }, { immediate: false, flush: 'post' });

  // ================ HOOKS ===============

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    /* istanbul ignore else */
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver);
    }
  });

  return {
    hasMore,
    infiniteLoader,
  }
}

function useA11y (props, context, dep)
{
  const {
    placeholder, id, valueProp, label: labelProp, mode, groupLabel, aria, searchable ,
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // ============ DEPENDENCIES ============

  const pointer = dep.pointer;
  const iv = dep.iv;
  const hasSelected = dep.hasSelected;
  const multipleLabelText = dep.multipleLabelText;

  // ================ DATA ================

  const label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

  // ============== COMPUTED ==============

  const ariaAssist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('assist');

    return texts.join('-')
  });

  const ariaControls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-options');

    return texts.join('-')
  });

  const ariaActiveDescendant = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    if (pointer.value) {
      texts.push(pointer.value.group ? 'multiselect-group' : 'multiselect-option');

      texts.push(pointer.value.group ? pointer.value.index : pointer.value[valueProp.value]);

      return texts.join('-')
    }
  });



  const ariaPlaceholder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return placeholder.value
  });

  const ariaMultiselectable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return mode.value !== 'single'
  });

  const ariaLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let ariaLabel = '';

    if (mode.value === 'single' && hasSelected.value) {
      ariaLabel += iv.value[labelProp.value];
    }

    if (mode.value === 'multiple' && hasSelected.value) {
      ariaLabel += multipleLabelText.value;
    }

    if (mode.value === 'tags' && hasSelected.value) {
      ariaLabel += iv.value.map(v => v[labelProp.value]).join(', ');
    }

    return ariaLabel
  });

  const arias = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let arias = { ...aria.value };
    
    // Need to add manually because focusing
    // the input won't read the selected value
    if (searchable.value) {
      arias['aria-labelledby'] = arias['aria-labelledby']
        ? `${ariaAssist.value} ${arias['aria-labelledby']}`
        : ariaAssist.value;
      
      if (ariaLabel.value && arias['aria-label']) {
        arias['aria-label'] = `${ariaLabel.value}, ${arias['aria-label']}`;
      }
    }

    return arias
  });

  // =============== METHODS ==============

  const ariaOptionId = (option) => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-option');

    texts.push(option[valueProp.value]);

    return texts.join('-')
  };

  const ariaGroupId = (option) => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-group');

    texts.push(option.index);

    return texts.join('-')
  };

  const ariaOptionLabel = (label) => {
    let texts = [];

    texts.push(label);

    return texts.join(' ')
  };

  const ariaGroupLabel = (label) => {
    let texts = [];

    texts.push(label);

    return texts.join(' ')
  };

  const ariaTagLabel = (label) => {
    return `${label} ❎`
  };

  // =============== HOOKS ================

  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    /* istanbul ignore next */
    if (id && id.value && document && document.querySelector) {
      let forTag = document.querySelector(`[for="${id.value}"]`);
      label.value = forTag ? forTag.innerText : null;
    }
  });

  return {
    arias,
    ariaLabel,
    ariaAssist,
    ariaControls,
    ariaPlaceholder,
    ariaMultiselectable,
    ariaActiveDescendant,
    ariaOptionId,
    ariaOptionLabel,
    ariaGroupId,
    ariaGroupLabel,
    ariaTagLabel,
  }
}

function useI18n (props, context, dep)
{
  const {
    locale, fallbackLocale,
  } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);

  // =============== METHODS ==============

  const localize = (target) => {
    if (!target || typeof target !== 'object') {
      return target
    }

    if (target && target[locale.value]) {
      return target[locale.value]
    } else if (target && locale.value && target[locale.value.toUpperCase()]) {
      return target[locale.value.toUpperCase()]
    } else if (target && target[fallbackLocale.value]) {
      return target[fallbackLocale.value]
    } else if (target && fallbackLocale.value && target[fallbackLocale.value.toUpperCase()]) {
      return target[fallbackLocale.value.toUpperCase()]
    } else if (target && Object.keys(target)[0]) {
      return target[Object.keys(target)[0]]
    } else {
      return ''
    }
  };

  return {
    localize,
  }
}

function resolveDeps (props, context, features, deps = {}) {
  features.forEach((composable) => {
    /* istanbul ignore else */
    if (composable) {
      deps = {
        ...deps,
        ...composable(props, context, deps)
      };
    }

  });
  
  return deps
}

var script = {
    name: 'Multiselect',
    emits: [
      'paste', 'open', 'close', 'select', 'deselect', 
      'input', 'search-change', 'tag', 'option', 'update:modelValue',
      'change', 'clear', 'keydown', 'keyup', 'max', 'create',
    ],
    props: {
      value: {
        required: false,
      },
      modelValue: {
        required: false,
      },
      options: {
        type: [Array, Object, Function],
        required: false,
        default: () => ([])
      },
      id: {
        type: [String, Number],
        required: false,
      },
      name: {
        type: [String, Number],
        required: false,
        default: 'multiselect',
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      label: {
        type: String,
        required: false,
        default: 'label',
      },
      trackBy: {
        type: String,
        required: false,
        default: undefined,
      },
      valueProp: {
        type: String,
        required: false,
        default: 'value',
      },
      placeholder: {
        type: String,
        required: false,
        default: null,
      },
      mode: {
        type: String,
        required: false,
        default: 'single', // single|multiple|tags
      },
      searchable: {
        type: Boolean,
        required: false,
        default: false,
      },
      limit: {
        type: Number,
        required: false,
        default: -1,
      },
      hideSelected: {
        type: Boolean,
        required: false,
        default: true,
      },
      createTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      createOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      addTagOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      addOptionOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      caret: {
        type: Boolean,
        required: false,
        default: true,
      },
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      noOptionsText: {
        type: [String, Object],
        required: false,
        default: 'The list is empty',
      },
      noResultsText: {
        type: [String, Object],
        required: false,
        default: 'No results found',
      },
      multipleLabel: {
        type: Function,
        required: false,
      },
      object: {
        type: Boolean,
        required: false,
        default: false,
      },
      delay: {
        type: Number,
        required: false,
        default: -1,
      },
      minChars: {
        type: Number,
        required: false,
        default: 0,
      },
      resolveOnLoad: {
        type: Boolean,
        required: false,
        default: true,
      },
      filterResults: {
        type: Boolean,
        required: false,
        default: true,
      },
      clearOnSearch: {
        type: Boolean,
        required: false,
        default: false,
      },
      clearOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canDeselect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canClear: {
        type: Boolean,
        required: false,
        default: true,
      },
      max: {
        type: Number,
        required: false,
        default: -1,
      },
      showOptions: {
        type: Boolean,
        required: false,
        default: true,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      openDirection: {
        type: String,
        required: false,
        default: 'bottom',
      },
      nativeSupport: {
        type: Boolean,
        required: false,
        default: false,
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      strict: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnDeselect: {
        type: Boolean,
        required: false,
        default: false,
      },
      autocomplete: {
        type: String,
        required: false,
      },
      groups: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupLabel: {
        type: String,
        required: false,
        default: 'label',
      },
      groupOptions: {
        type: String,
        required: false,
        default: 'options',
      },
      groupHideEmpty: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      inputType: {
        type: String,
        required: false,
        default: 'text',
      },
      attrs: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      onCreate: {
        required: false,
        type: Function,
      },
      disabledProp: {
        type: String,
        required: false,
        default: 'disabled',
      },
      searchStart: {
        type: Boolean,
        required: false,
        default: false,
      },
      reverse: {
        type: Boolean,
        required: false,
        default: false,
      },
      regex: {
        type: [Object, String, RegExp],
        required: false,
        default: undefined,
      },
      rtl: {
        type: Boolean,
        required: false,
        default: false,
      },
      infinite: {
        type: Boolean,
        required: false,
        default: false,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      clearOnBlur: {
        required: false,
        type: Boolean,
        default: true,
      },
      locale: {
        required: false,
        type: String,
        default: null,
      },
      fallbackLocale: {
        required: false,
        type: String,
        default: 'en',
      },
      searchFilter: {
        required: false,
        type: Function,
        default: null,
      },
      allowAbsent: {
        required: false,
        type: Boolean,
        default: false,
      },
    },
    setup(props, context)
    { 
      return resolveDeps(props, context, [
        useI18n,
        useValue,
        usePointer$1,
        useDropdown,
        useSearch,
        useData,
        useMultiselect,
        useOptions,
        useScroll,
        usePointer,
        useKeyboard,
        useClasses,
        useA11y,
      ])
    }
  };

const _hoisted_1 = ["id", "dir"];
const _hoisted_2 = ["tabindex", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable", "role"];
const _hoisted_3 = ["type", "modelValue", "value", "autocomplete", "id", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_4 = ["onKeyup", "aria-label"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["type", "modelValue", "value", "id", "autocomplete", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["id"];
const _hoisted_9 = ["id", "aria-label", "aria-selected"];
const _hoisted_10 = ["data-pointed", "onMouseenter", "onClick"];
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = ["aria-label"];
const _hoisted_13 = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"];
const _hoisted_14 = ["data-pointed", "data-selected", "onMouseenter", "onClick", "id", "aria-selected", "aria-label"];
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["value"];
const _hoisted_18 = ["name", "value"];
const _hoisted_19 = ["name", "value"];
const _hoisted_20 = ["id"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    ref: "multiselect",
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.container),
    id: $props.searchable ? undefined : $props.id,
    dir: $props.rtl ? 'rtl' : undefined,
    onFocusin: _cache[10] || (_cache[10] = (...args) => (_ctx.handleFocusIn && _ctx.handleFocusIn(...args))),
    onFocusout: _cache[11] || (_cache[11] = (...args) => (_ctx.handleFocusOut && _ctx.handleFocusOut(...args))),
    onKeyup: _cache[12] || (_cache[12] = (...args) => (_ctx.handleKeyup && _ctx.handleKeyup(...args))),
    onKeydown: _cache[13] || (_cache[13] = (...args) => (_ctx.handleKeydown && _ctx.handleKeydown(...args)))
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      class: _ctx.classList.wrapper,
      onMousedown: _cache[9] || (_cache[9] = (...args) => (_ctx.handleMousedown && _ctx.handleMousedown(...args))),
      ref: "wrapper",
      tabindex: _ctx.tabindex,
      "aria-controls": !$props.searchable ? _ctx.ariaControls : undefined,
      "aria-placeholder": !$props.searchable ? _ctx.ariaPlaceholder : undefined,
      "aria-expanded": !$props.searchable ? _ctx.isOpen : undefined,
      "aria-activedescendant": !$props.searchable ? _ctx.ariaActiveDescendant : undefined,
      "aria-multiselectable": !$props.searchable ? _ctx.ariaMultiselectable : undefined,
      role: !$props.searchable ? 'combobox' : undefined
    }, !$props.searchable ? _ctx.arias : {}), [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Search "),
      ($props.mode !== 'tags' && $props.searchable && !$props.disabled)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            key: 0,
            type: $props.inputType,
            modelValue: _ctx.search,
            value: _ctx.search,
            class: _ctx.classList.search,
            autocomplete: $props.autocomplete,
            id: $props.searchable ? $props.id : undefined,
            onInput: _cache[0] || (_cache[0] = (...args) => (_ctx.handleSearchInput && _ctx.handleSearchInput(...args))),
            onKeypress: _cache[1] || (_cache[1] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
            onPaste: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.handlePaste && _ctx.handlePaste(...args)), ["stop"])),
            ref: "input",
            "aria-controls": _ctx.ariaControls,
            "aria-placeholder": _ctx.ariaPlaceholder,
            "aria-expanded": _ctx.isOpen,
            "aria-activedescendant": _ctx.ariaActiveDescendant,
            "aria-multiselectable": _ctx.ariaMultiselectable,
            role: "combobox"
          }, {
            ...$props.attrs,
            ..._ctx.arias,
          }), null, 16 /* FULL_PROPS */, _hoisted_3))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tags (with search) "),
      ($props.mode == 'tags')
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: 1,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.tags),
            "data-tags": ""
          }, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.iv, (option, i, key) => {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "tag", {
                option: option,
                handleTagRemove: _ctx.handleTagRemove,
                disabled: $props.disabled
              }, () => [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([
                _ctx.classList.tag,
                option.disabled ? _ctx.classList.tagDisabled : null,
              ]),
                  tabindex: "-1",
                  onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => (_ctx.handleTagRemove(option, $event)), ["enter"]),
                  key: key,
                  "aria-label": _ctx.ariaTagLabel(_ctx.localize(option[$props.label]))
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.localize(option[$props.label])) + " ", 1 /* TEXT */),
                  (!$props.disabled && !option.disabled)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                        key: 0,
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.tagRemove),
                        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.handleTagRemove(option, $event)), ["stop"])
                      }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.tagRemoveIcon)
                        }, null, 2 /* CLASS */)
                      ], 10 /* CLASS, PROPS */, _hoisted_5))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_4))
              ])
            }), 256 /* UNKEYED_FRAGMENT */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.tagsSearchWrapper),
              ref: "tags"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Used for measuring search width "),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.tagsSearchCopy)
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.search), 3 /* TEXT, CLASS */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Actual search input "),
              ($props.searchable && !$props.disabled)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
                    key: 0,
                    type: $props.inputType,
                    modelValue: _ctx.search,
                    value: _ctx.search,
                    class: _ctx.classList.tagsSearch,
                    id: $props.searchable ? $props.id : undefined,
                    autocomplete: $props.autocomplete,
                    onInput: _cache[3] || (_cache[3] = (...args) => (_ctx.handleSearchInput && _ctx.handleSearchInput(...args))),
                    onKeypress: _cache[4] || (_cache[4] = (...args) => (_ctx.handleKeypress && _ctx.handleKeypress(...args))),
                    onPaste: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.handlePaste && _ctx.handlePaste(...args)), ["stop"])),
                    ref: "input",
                    "aria-controls": _ctx.ariaControls,
                    "aria-placeholder": _ctx.ariaPlaceholder,
                    "aria-expanded": _ctx.isOpen,
                    "aria-activedescendant": _ctx.ariaActiveDescendant,
                    "aria-multiselectable": _ctx.ariaMultiselectable,
                    role: "combobox"
                  }, {
                ...$props.attrs,
                ..._ctx.arias,
              }), null, 16 /* FULL_PROPS */, _hoisted_6))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ], 2 /* CLASS */)
          ], 2 /* CLASS */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Single label "),
      ($props.mode == 'single' && _ctx.hasSelected && !_ctx.search && _ctx.iv)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "singlelabel", {
            key: 2,
            value: _ctx.iv
          }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.singleLabel)
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.singleLabelText)
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.localize(_ctx.iv[$props.label])), 3 /* TEXT, CLASS */)
            ], 2 /* CLASS */)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Multiple label "),
      ($props.mode == 'multiple' && _ctx.hasSelected && !_ctx.search)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "multiplelabel", {
            key: 3,
            values: _ctx.iv
          }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.multipleLabel),
              innerHTML: _ctx.multipleLabelText
            }, null, 10 /* CLASS, PROPS */, _hoisted_7)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Placeholder "),
      ($props.placeholder && !_ctx.hasSelected && !_ctx.search)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "placeholder", { key: 4 }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.placeholder),
              "aria-hidden": "true"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.placeholder), 3 /* TEXT, CLASS */)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Spinner "),
      ($props.loading || _ctx.resolving)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "spinner", { key: 5 }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.spinner),
              "aria-hidden": "true"
            }, null, 2 /* CLASS */)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clear "),
      (_ctx.hasSelected && !$props.disabled && $props.canClear && !_ctx.busy)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "clear", {
            key: 6,
            clear: _ctx.clear
          }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              "aria-hidden": "true",
              tabindex: "0",
              role: "button",
              "data-clear": "",
              "aria-roledescription": "❎",
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.clear),
              onClick: _cache[6] || (_cache[6] = (...args) => (_ctx.clear && _ctx.clear(...args))),
              onKeyup: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((...args) => (_ctx.clear && _ctx.clear(...args)), ["enter"]))
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.clearIcon)
              }, null, 2 /* CLASS */)
            ], 34 /* CLASS, HYDRATE_EVENTS */)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Caret "),
      ($props.caret && $props.showOptions)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "caret", { key: 7 }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.caret),
              onClick: _cache[8] || (_cache[8] = (...args) => (_ctx.handleCaretClick && _ctx.handleCaretClick(...args))),
              "aria-hidden": "true"
            }, null, 2 /* CLASS */)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 16 /* FULL_PROPS */, _hoisted_2),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Options "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.dropdown),
      tabindex: "-1"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "beforelist", { options: _ctx.fo }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.options),
        id: _ctx.ariaControls,
        role: "listbox"
      }, [
        ($props.groups)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.fg, (group, i, key) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.group),
                key: key,
                id: _ctx.ariaGroupId(group),
                "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                "aria-selected": _ctx.isSelected(group),
                role: "option"
              }, [
                (!group.__CREATE__)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                      key: 0,
                      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.groupLabel(group)),
                      "data-pointed": _ctx.isPointed(group),
                      onMouseenter: $event => (_ctx.setPointer(group, i)),
                      onClick: $event => (_ctx.handleGroupClick(group))
                    }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "grouplabel", {
                        group: group,
                        isSelected: _ctx.isSelected,
                        isPointed: _ctx.isPointed
                      }, () => [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                          innerHTML: _ctx.localize(group[$props.groupLabel])
                        }, null, 8 /* PROPS */, _hoisted_11)
                      ])
                    ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_10))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.groupOptions),
                  "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                  role: "group"
                }, [
                  ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(group.__VISIBLE__, (option, i, key) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.option(option, group)),
                      "data-pointed": _ctx.isPointed(option),
                      "data-selected": _ctx.isSelected(option) || undefined,
                      key: key,
                      onMouseenter: $event => (_ctx.setPointer(option)),
                      onClick: $event => (_ctx.handleOptionClick(option)),
                      id: _ctx.ariaOptionId(option),
                      "aria-selected": _ctx.isSelected(option),
                      "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                      role: "option"
                    }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                        option: option,
                        isSelected: _ctx.isSelected,
                        isPointed: _ctx.isPointed,
                        search: _ctx.search
                      }, () => [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.localize(option[$props.label])), 1 /* TEXT */)
                      ])
                    ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_13))
                  }), 128 /* KEYED_FRAGMENT */))
                ], 10 /* CLASS, PROPS */, _hoisted_12)
              ], 10 /* CLASS, PROPS */, _hoisted_9))
            }), 128 /* KEYED_FRAGMENT */))
          : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.fo, (option, i, key) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.option(option)),
                "data-pointed": _ctx.isPointed(option),
                "data-selected": _ctx.isSelected(option) || undefined,
                key: key,
                onMouseenter: $event => (_ctx.setPointer(option)),
                onClick: $event => (_ctx.handleOptionClick(option)),
                id: _ctx.ariaOptionId(option),
                "aria-selected": _ctx.isSelected(option),
                "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                role: "option"
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                  option: option,
                  isSelected: _ctx.isSelected,
                  isPointed: _ctx.isPointed,
                  search: _ctx.search
                }, () => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.localize(option[$props.label])), 1 /* TEXT */)
                ])
              ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_14))
            }), 128 /* KEYED_FRAGMENT */))
      ], 10 /* CLASS, PROPS */, _hoisted_8),
      (_ctx.noOptions)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "nooptions", { key: 0 }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.noOptions),
              innerHTML: _ctx.localize($props.noOptionsText)
            }, null, 10 /* CLASS, PROPS */, _hoisted_15)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (_ctx.noResults)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noresults", { key: 1 }, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.noResults),
              innerHTML: _ctx.localize($props.noResultsText)
            }, null, 10 /* CLASS, PROPS */, _hoisted_16)
          ])
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($props.infinite && _ctx.hasMore)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: 2,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.inifinite),
            ref: "infiniteLoader"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "infinite", {}, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.inifiniteSpinner)
              }, null, 2 /* CLASS */)
            ])
          ], 2 /* CLASS */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "afterlist", { options: _ctx.fo })
    ], 2 /* CLASS */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Hacky input element to show HTML5 required warning "),
    ($props.required)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.fakeInput),
          tabindex: "-1",
          value: _ctx.textValue,
          required: ""
        }, null, 10 /* CLASS, PROPS */, _hoisted_17))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Native input support "),
    ($props.nativeSupport)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
          ($props.mode == 'single')
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                key: 0,
                type: "hidden",
                name: $props.name,
                value: _ctx.plainValue !== undefined ? _ctx.plainValue : ''
              }, null, 8 /* PROPS */, _hoisted_18))
            : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.plainValue, (v, i) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
                  type: "hidden",
                  name: `${$props.name}[]`,
                  value: v,
                  key: i
                }, null, 8 /* PROPS */, _hoisted_19))
              }), 128 /* KEYED_FRAGMENT */))
        ], 64 /* STABLE_FRAGMENT */))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Screen reader assistive text "),
    ($props.searchable && _ctx.hasSelected)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 2,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.assist),
          id: _ctx.ariaAssist,
          "aria-hidden": "true"
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.ariaLabel), 11 /* TEXT, CLASS, PROPS */, _hoisted_20))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Create height for empty input "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(_ctx.classList.spacer)
    }, null, 2 /* CLASS */)
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_1))
}

script.render = render;
script.__file = "src/Multiselect.vue";




/***/ })

}]);