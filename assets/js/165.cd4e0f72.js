(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1005:function(e,t,a){"use strict";a.r(t);a(173);var n={name:"tableComp",props:{tableColist:[],tableData:[],tags:[],dates:[],pageSize:{type:Number,default:10},pageNo:{type:Number,default:1},total:[Number]},data:function(){return{pageSizeList:[5,10,25,40,50]}},computed:{},methods:{handleLook:function(e,t){this.$emit("look",e,t)},handleSizeChange:function(e){console.log(e),this.$emit("pageSizeChange",e)},handleCurrentChange:function(e){console.log("跳转当当前页",e),this.$emit("pageCurrentChange",e)},filterTag:function(e,t){return t.tag===e},filterHandler:function(e,t,a){return t[a.property]===e},labelHead:function(e,t){var a=t.column,n=a.label.length;return a.minWidth=16*n,e("div",{class:"table-head",style:{width:"100%"}},[a.label])}}},l=(a(762),a(12)),i=Object(l.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-container"},[a("el-table",{attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"文章id",size:"medium",width:"auto",align:"center",prop:"id",sortable:"","default-sort":{prop:"id",order:"descending"},"column-key":"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("\n             "+e._s(t.row.id)+"\n            ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"文章标题",size:"medium","min-width":"230",align:"center",showOverflowTooltip:!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-link",{attrs:{type:"primary",underline:!1,href:t.row.link,target:"_blank"}},[e._v(e._s(t.row.title))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"文章描述",size:"medium",width:"auto",align:"center",showOverflowTooltip:!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("\n             "+e._s(t.row.desc)+"\n            ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"作者",size:"medium",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("\n             "+e._s(t.row.author)+"\n            ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发布时间",size:"medium","min-width":"90",align:"center",prop:"update_time",sortable:"","column-key":"update_time",showOverflowTooltip:!0,filters:e.dates,"filter-method":e.filterHandler},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v("\n             "+e._s(t.row.update_time)+"\n            ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"标签",size:"medium",width:"auto",align:"center",filters:e.tags,"filter-method":e.filterTag,"filter-placement":"bottom-end","scoped-slot":e.labelHead},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-tag",{attrs:{type:"JavaScript"==t.row.tag?"primary":"success"}},[e._v(e._s(t.row.tag))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"管理",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleLook(t.row,t.$index)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pagination-container"},[0!=e.tableData.length?a("el-pagination",{attrs:{"current-page":e.pageNo,"page-sizes":e.pageSizeList,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)])}),[],!1,null,"11ae510a",null);t.default=i.exports},709:function(e,t,a){},762:function(e,t,a){"use strict";a(709)}}]);