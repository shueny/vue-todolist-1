(function(t){function e(e){for(var s,i,c=e[0],d=e[1],r=e[2],m=0,u=[];m<c.length;m++)i=c[m],n[i]&&u.push(n[i][0]),n[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(e);while(u.length)u.shift()();return a.push.apply(a,r||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,c=1;c<o.length;c++){var d=o[c];0!==n[d]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},n={app:0},a=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todolist-1/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var l=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"3fb7":function(t,e,o){"use strict";var s=o("77e9"),n=o.n(s);n.a},4678:function(t,e,o){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=a(t);return o(e)}function a(t){var e=s[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="4678"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var s=o("2b0e"),n=o("ecee"),a=o("c074"),i=o("b702"),c=o("42b9"),d=o("ad3d"),r=o("9f7b"),l=o.n(r),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},u=[],f=(o("5c0b"),o("2877")),b={},h=Object(f["a"])(b,m,u,!1,null,null,null),p=h.exports,j=o("8c4f"),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Todo")],1)},k=[],T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-todo"},[o("div",{staticClass:"container"},[o("section",{staticClass:"header"},[o("div",{staticClass:"text"},[o("span",{staticClass:"day",domProps:{textContent:t._s(t.day)}}),o("span",{staticClass:"yearMonth"},[o("b",{staticClass:"year",domProps:{textContent:t._s(t.year)}}),o("b",{staticClass:"month",domProps:{textContent:t._s(t.month)}})]),o("span",{domProps:{textContent:t._s(t.timeMessage)}}),o("span",{staticClass:"week",domProps:{textContent:t._s(t.currentWeek)}})])]),o("section",{staticClass:"addTask"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],attrs:{placeholder:"+ Add task"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),o("a",{staticClass:"btn btn--add",on:{click:t.addTodo}},[t._v("+")])]),o("section",{staticClass:"content"},[o("div",[t.allFilter?o("div",{staticClass:"todoList"},t._l(t.allTodos,function(e){return o("TodoList",{key:e.id,attrs:{item:e},on:{"cancel-item":t.cancelEdit,"remove-todo":t.removeTodo,"edit-todo":t.editTodo,"done-edit":t.doneEdit,"delete-todo":t.deleteTodos,"mark-todo":t.markTodos}})}),1):t._e(),t.doneFilter?o("div",{staticClass:"todoList"},t._l(t.doneTodos,function(e){return o("TodoList",{key:e.id,attrs:{item:e},on:{"cancel-item":t.cancelEdit,"remove-todo":t.removeTodo,"edit-todo":t.editTodo,"done-edit":function(e){t.done,t.edit},"delete-todo":t.deleteTodos,"mark-todo":t.markTodos}})}),1):t._e(),t.todoFilter?o("div",{staticClass:"todoList"},t._l(t.undoneTodos,function(e){return o("TodoList",{key:e.id,attrs:{item:e},on:{"cancel-item":t.cancelEdit,"remove-todo":t.removeTodo,"edit-todo":t.editTodo,"done-edit":function(e){t.done,t.edit},"delete-todo":t.deleteTodos,"mark-todo":t.markTodos}})}),1):t._e()])]),o("div",{staticClass:"filters"},[o("button",{staticClass:"btn filters__btn filters__btn--all p-2",class:{active:t.allFilter},on:{click:t.sortAll}},[t._v("All")]),o("button",{staticClass:"btn filters__btn filters__btn--complete p-2",class:{active:t.doneFilter},on:{click:t.sortDone}},[t._v("Complete")]),o("button",{staticClass:"btn filters__btn filters__btn--incomplete p-2",class:{active:t.todoFilter},on:{click:t.sortTodo}},[t._v("Incomplete")])])]),o("div",{staticClass:"modal fade",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[o("div",{staticClass:"modal-content container"},[t._m(0),o("div",{staticClass:"modal-body"},[o("div",{staticClass:"mb-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTodoTitle,expression:"cacheTodoTitle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cacheTodoTitle},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEditComment()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEditComment(t.item)}],input:function(e){e.target.composing||(t.cacheTodoTitle=e.target.value)}}})]),o("div",{},[o("p",{staticClass:"title text-left"},[t._v("Comments:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add Comment..."},domProps:{value:t.commentText},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelAddComment()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addComment()}],input:function(e){e.target.composing||(t.commentText=e.target.value)}}}),t._l(t.cacheTodo.comments,function(e,s){return o("div",{key:e.index,staticClass:"comment-list m-2 py-2",class:{"border-bottom":s!==t.cacheTodo.comments.length-1}},[o("div",{staticClass:"d-flex px-3"},[o("span",[t._v(t._s(e))]),o("button",{staticClass:"btn close ml-auto mx-1",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeComment(s)}}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])})],2)]),t._m(1)])])])])},y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Edit")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-footer justify-content-center"},[o("button",{staticClass:"btn btn-secondary btn--save",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close & Save")])])}],g=(o("ac6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"list-group-item text-left"},[o("div",{staticClass:"d-flex"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label",class:{completed:t.item.completed},attrs:{for:t.item.id}},[t._v(t._s(t.item.title)+"\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.item.completed,expression:"item.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:t.item.id},domProps:{checked:Array.isArray(t.item.completed)?t._i(t.item.completed,null)>-1:t.item.completed},on:{change:function(e){var o=t.item.completed,s=e.target,n=!!s.checked;if(Array.isArray(o)){var a=null,i=t._i(o,a);s.checked?i<0&&t.$set(t.item,"completed",o.concat([a])):i>-1&&t.$set(t.item,"completed",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.item,"completed",n)}}}),o("span",{staticClass:"checkmark"})])]),o("button",{staticClass:"btn btn-default btn-edit mx-1",attrs:{type:"button","data-toggle":"modal","data-target":"#editModal"},on:{click:function(e){return t.editTodo(t.item)}}},[o("font-awesome-icon",{attrs:{icon:"edit"}})],1),o("button",{staticClass:"btn close ml-auto mx-1",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeTodo(t.item)}}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1),o("button",{staticClass:"btn star ml-auto",class:{active:t.item.marked},attrs:{type:"button","aria-label":""},on:{click:function(e){return t.markTodos(t.item)}}},[o("font-awesome-icon",{attrs:{icon:"star"}})],1)]),o("div",{staticClass:"pl-4 noteArea"},[o("span",{staticClass:"date px-2"},[o("b",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:["far","calendar-check"]}})],1),t._v("\n          "+t._s(t.item.messageDate)+"\n        ")]),t.item?o("span",{staticClass:"comment-count px-2"},[o("b",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:["far","comment-dots"]}})],1),t._v("\n          "+t._s(t.item.comments.length)+"\n        ")]):t._e()])])])}),C=[],_={name:"TodoList",props:["item"],data:function(){return{cacheTodo:{},cacheTodoTitle:""}},methods:{cancelEdit:function(t){this.$emit("cancel-edit",t)},removeTodo:function(t){this.$emit("remove-todo",t)},editTodo:function(t){this.$emit("edit-todo",t)},doneEdit:function(t){this.$emit("done-edit",t)},deleteTodos:function(t){this.$emit("delete-todo",t)},markTodos:function(t){this.$emit("mark-todo",t)}}},x=_,w=Object(f["a"])(x,g,C,!1,null,null,null),E=w.exports,O=o("c1df"),z={name:"Todo",components:{TodoList:E},data:function(){return{newTodo:"",todos:[{title:"要買蘿蔔",completed:!1,marked:!1,messageDate:"05/02/2019 10:00 AM",comments:["6:00pm","the new restaurant"]},{title:"冷萃咖啡",completed:!0,marked:!0,comments:[],messageDate:"03/22/2019 08:23 AM"}],cacheTodo:{},cacheTodoTitle:"",cacheTodoMark:"",cacheComment:{},cacheCommentTitle:"",commentText:"",allFilter:!0,todoFilter:!1,doneFilter:!1,day:O().format("DD"),year:O().format("YYYY"),month:O().format("MMM"),currentWeek:O().format("ddd"),timeMessage:O().format("LTS")}},methods:{getTodos:function(){localStorage.getItem("todos-vuejs")&&(this.todos=JSON.parse(localStorage.getItem("todos-vuejs")))},addTodo:function(t){return this.newTodo&&this.todos.unshift({id:this.todos.length,title:this.newTodo,completed:!1,marked:!1,comments:[],messageDate:O().format("L")+" "+O().format("LT")}),this.newTodo="",!0},updateCurrentTime:function(){this.timeMessage=O().format("LTS")},sortAll:function(){this.allFilter=!0,this.todoFilter=!1,this.doneFilter=!1},sortTodo:function(){this.allFilter=!1,this.todoFilter=!0,this.doneFilter=!1},sortDone:function(){this.allFilter=!1,this.todoFilter=!1,this.doneFilter=!0},cancelEdit:function(){this.cacheTodo={}},removeTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1)},editTodo:function(t){this.cacheTodo=t,this.cacheTodoTitle=t.title},doneEdit:function(t){t.title=this.cacheTodoTitle,this.cacheTodoTitle="",this.cacheTodo={}},deleteTodos:function(){this.todos=[]},completeTodos:function(t){this.todos=[]},markTodos:function(t){return this.cacheTodoMark=t.marked,this.cacheTodoMark?t.marked=!1:t.marked=!0},addComment:function(){void 0===this.cacheTodo.comments&&this.cacheTodo.comments.push(this.commentText),this.commentText&&this.cacheTodo.comments.unshift(this.commentText),this.commentText=""},removeComment:function(t){this.cacheTodo.comments.splice(t,1)}},computed:{allTodos:function(){return this.todos},doneTodos:function(){return this.todos.filter(function(t){return t.completed})},undoneTodos:function(){return this.todos.filter(function(t){return!t.completed})},remaining:function(){return this.todos.filter(function(t){return!t.completed})}},mounted:function(){this.getTodos()},watch:{todos:{handler:function(t){localStorage.setItem("todos-vuejs",JSON.stringify(t))},deep:!0}},created:function(){var t=this;this.timeMessage=O().format("LTS"),setInterval(function(){return t.updateCurrentTime()},1e3)}},M=z,F=(o("3fb7"),Object(f["a"])(M,T,y,!1,null,null,null)),S=F.exports,A={name:"home",components:{Todo:S}},L=A,$=Object(f["a"])(L,v,k,!1,null,null,null),P=$.exports;s["default"].use(j["a"]);var N=new j["a"]({mode:"history",base:"/vue-todolist-1/",routes:[{path:"/",name:"home",component:P}]}),D=o("2f62");s["default"].use(D["a"]);var I=new D["a"].Store({state:{},mutations:{},actions:{}}),J=o("9483");Object(J["a"])("".concat("/vue-todolist-1/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("4989"),o("ab8b"),o("d355");n["c"].add(i["a"],i["b"],a["b"],a["g"],a["e"],c["a"],a["d"],a["i"],a["h"],a["f"],a["a"],a["c"]),s["default"].component("font-awesome-icon",d["a"]),s["default"].config.productionTip=!1,s["default"].use(l.a),new s["default"]({router:N,store:I,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var s=o("5e27"),n=o.n(s);n.a},"5e27":function(t,e,o){},"77e9":function(t,e,o){}});
//# sourceMappingURL=app.132d7a57.js.map