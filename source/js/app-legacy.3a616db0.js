(function(){"use strict";var t={3211:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"ml-3"})],1)},a=[],i={name:"App",components:{}},s=i,c=n(1001),d=(0,c.Z)(s,r,a,!1,null,null,null),l=d.exports,u=n(8262),f=n(3266),h=(n(44),n(2222),"/api"),m="".concat(h,"/v1"),p="node",v="node_relation",b={v1:{node:"".concat(m,"/").concat(p),node_relation:"".concat(m,"/").concat(v)}},w={BaseUrl:"/",api:{v1:{node:{node:b.v1.node,list:function(t){return"".concat(b.v1.node,"/list/").concat(t)},matrix:function(t){return"".concat(b.v1.node,"/matrix/").concat(t)},update_markdown:function(t){return"".concat(b.v1.node,"/").concat(t)}},node_relation:{list_by_root:function(t){return"".concat(b.v1.node_relation,"/").concat(t)},node_relation:b.v1.node_relation,update_node_relation_by_node:function(t){return"".concat(b.v1.node_relation,"/node/").concat(t)}}}}},x=n(8372),_=n.n(x),g=n(2809),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("RootNodes")],1)},y=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-btn",{on:{click:function(e){return t.$bvModal.show("modal-create-root-node")}}},[n("b-icon",{attrs:{icon:"plus"}})],1),t._l(t.nodes,(function(e){return n("div",{key:e.id},[n("router-link",{attrs:{to:"/node/"+e.ID}},[t._v(t._s(e.markdown))])],1)})),n("b-modal",{attrs:{id:"modal-create-root-node","hide-footer":"",size:"xl"}},[n("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3","content-cols-sm":"","content-cols-lg":"7",description:"display in summary mode",label:"Title","label-for":"input-horizontal"}},[n("b-form-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("p",[t._v("markdown")]),n("MarkdownEditor",{ref:"create_root_node_markdown_editor",attrs:{markdown:""}}),n("div",{staticClass:"float-right",attrs:{id:"panel"}},[n("b-btn",{on:{click:t.createRootNode}},[t._v("save")])],1)],1)],2)},Z=[],S=n(7906),I=n(6198),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"previewer"}},[n("b-form-textarea",{attrs:{debounce:"300"},model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}}),n("div",{attrs:{id:"preview"},domProps:{innerHTML:t._s(t.compiledMarkdown)}})],1)},N=[],T=n(2909),R={name:"MarkdownEditor",props:{markdown:String},data:function(){return{edit:this.markdown}},computed:{compiledMarkdown:function(){return(0,T.TU)(this.edit,{sanitize:!0})}}},E=R,D=(0,c.Z)(E,C,N,!1,null,"5ae0a58c",null),$=D.exports,L={name:"RootNodes",components:{MarkdownEditor:$},data:function(){return{nodes:[],title:""}},created:function(){this.listNodesByRoot()},methods:{listNodesByRoot:function(){var t=this;return(0,I.Z)((0,S.Z)().mark((function e(){return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_().api.get(w.api.v1.node.list(0),null,{caller:t});case 2:t.nodes=e.sent;case 3:case"end":return e.stop()}}),e)})))()},createRootNode:function(){var t=this;return(0,I.Z)((0,S.Z)().mark((function e(){var n,o;return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_().api.post(w.api.v1.node.node,null,{title:t.title,markdown:t.$refs.create_root_node_markdown_editor.edit},{caller:t});case 2:return n=e.sent,o=n.id,e.next=6,_().api.post(w.api.v1.node_relation.node_relation,null,{root:t.root,node:o},{caller:t});case 6:return e.next=8,_().api.post(w.api.v1.node_relation.node_relation,null,{root:t.root,node:o},{caller:t});case 8:t.$bvModal.hide("modal-create-root-node");case 9:case"end":return e.stop()}}),e)})))()}}},O=L,B=(0,c.Z)(O,M,Z,!1,null,"16d82c23",null),j=B.exports,A={name:"IndexView",components:{RootNodes:j}},V=A,P=(0,c.Z)(V,k,y,!1,null,"c455c148",null),U=P.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NodeMatrix",{attrs:{"static-view":"","data-source":"/"+t.source+"/"+t.dataSource}})],1)},W=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.staticView?t._e():n("b-button",{staticClass:"download-btn",on:{click:t.downloadDataSource}},[n("b-icon",{attrs:{icon:"download"}})],1),n("TableOfContent",{attrs:{toc:t.toc}}),n("b-toast",{attrs:{id:"my-toast",variant:"warning",solid:"","no-auto-hide":"",visible:t.loading},scopedSlots:t._u([{key:"toast-title",fn:function(){return[n("div",{staticClass:"d-flex flex-grow-1 align-items-baseline"},[n("b-img",{staticClass:"mr-2",attrs:{blank:"","blank-color":"#ff5555",width:"12",height:"12"}}),n("strong",{staticClass:"mr-auto"},[t._v("Loading")]),n("small",{staticClass:"text-muted mr-2"},[t._v("42 seconds ago")])],1)]},proxy:!0}])},[n("b-spinner")],1),t._l(t.nodeMatrix,(function(e,o){return n("div",{key:"col-"+o,staticClass:"mt-5",staticStyle:{"white-space":"nowrap"}},t._l(e,(function(e,r){return n("div",{key:"col-"+o+"-row-"+r,ref:"node-"+e.ID,refInFor:!0,staticClass:"ml-5",class:{hidden:0===e.ID},staticStyle:{display:"inline-block",width:"500px","vertical-align":"middle"},attrs:{id:"node-"+e.ID},on:{mouseover:t.mouseover}},[-1!==e.ID?n("div",[n("b-tooltip",{attrs:{offset:"-200",boundary:"document",placement:"top",target:"node-"+e.ID,variant:"light",triggers:"hover"}},[n("div",[0!==e.next?n("b-btn",{attrs:{variant:"light"}},[n("a",{attrs:{href:"#card-"+e.next},on:{click:function(n){return n.preventDefault(),t.anchor("card-"+e.next)}}},[t._v("Next")])]):t.staticView?t._e():n("b-btn",{on:{click:function(n){return t.next(e.ID)}}},[t._v("Next")]),0!==e.child?n("b-btn",{staticClass:"ml-2",attrs:{variant:"light"}},[n("a",{attrs:{href:"#card-"+e.child},on:{click:function(n){return n.preventDefault(),t.anchor("card-"+e.child)}}},[t._v("Call")])]):t.staticView?t._e():n("b-btn",{staticClass:"ml-2",on:{click:function(n){return t.call(e.ID)}}},[t._v("Call")]),void 0!==e.parent?n("b-btn",{staticClass:"ml-2",attrs:{variant:"light"}},[n("a",{attrs:{href:"#card-"+e.parent},on:{click:function(n){return n.preventDefault(),t.anchor("card-"+e.parent)}}},[t._v("Parent")])]):t._e()],1)]),e.markdown.length>0?n("MarkdownCard",{staticStyle:{"white-space":"normal"},attrs:{nodeId:e.ID.toString(),id:"card-"+e.ID,markdown:e.markdown.toString()},on:{update_node:t.refreshWorld}}):n("AnalysisItem")],1):t._e()])})),0)})),t.staticView?t._e():n("b-modal",{attrs:{id:"node-common","hide-footer":"",size:"xl"}},[n("MarkdownEditor",{ref:"markdown_editor_common",attrs:{markdown:""}}),n("div",{staticClass:"float-right",attrs:{id:"panel"}},[n("b-btn",{on:{click:t.save}},[t._v("save")])],1)],1)],2)},F=[],G=(n(9653),n(8862),n(1539),n(8783),n(3948),n(285),n(1637),n(4747),n(6133)),J=n(2751);n(3290),n(9714);function X(t){var e=[],n={h1:1,h2:1,h3:1,h4:1,h5:1,h6:1};function o(t){if(1===t.nodeType&&"script"!==t.nodeName)if(Object.prototype.hasOwnProperty.call(n,t.nodeName.toLowerCase()))null===t.getAttribute("class")&&e.push(t);else for(var r=0;r<t.childNodes.length;r++)o(t.childNodes[r])}return o(t),e}function q(t){var e=(0,T.TU)(t),n=document.createElement("div");return n.innerHTML=e,X(n)}var K=function(){function t(e,n,o){(0,G.Z)(this,t),this.x=1,this.y=1,this.toc=[],this.matrix=[[e]],this.nodes=n,this.nodeRelations=o,this.nextRecursive(e)}return(0,J.Z)(t,[{key:"nextRecursive",value:function(t){if(0!==t){var e=this.nodeRelations[t];if(0!==e.next){this.matrix[this.matrix.length-1].push(e.next);var n=this.matrix[this.matrix.length-1].length;if(n>this.y){for(var o=0;o<this.x-1;o++)this.matrix[o].push(0);this.y=n}this.nextRecursive(e.next)}else for(var r=this.matrix[this.x-1].length;r<this.y;r++)this.matrix[this.x-1].push(0)}}},{key:"childRecursive",value:function(t){for(var e=this.y-1;e>=0;e--){var n=this.matrix[t][e];if(0!==n){var o=this.nodeRelations[n];if(0!==o.child){var r=new Array(e).fill(0);r.push(o.child),this.matrix.push(r),this.x+=1,this.nextRecursive(o.child),this.childRecursive(this.x-1)}}}}},{key:"shift",value:function(){for(var t=2;t<=this.x-1;t++)for(var e=-1,n=-1,o=0;o<=this.y-1;o++)this.matrix[t][o]>0&&(-1!==e?n=o:(e=o,n=e)),0!==this.matrix[t][o]&&o!==this.y-1||(-1!==e&&this.shiftLine(t,e,n),e=-1,n=-1)}},{key:"shiftLine",value:function(t,e,n){for(var o=0,r=e;r<=n;r++){var a=t;while(a>0)if(a--,0!==this.matrix[a][r]){a+=1;break}if(a===t)return;(0===o||o>t-a)&&(o=t-a)}if(o>0)for(var i=e;i<=n;i++)this.matrix[t-o][i]=this.matrix[t][i],this.matrix[t][i]=0}},{key:"cleanSuffix",value:function(){for(var t=0;t<=this.y-1;t++)for(var e=this.x-1;e>=0;e--){if(this.matrix[e][t]>0)break;this.matrix[e][t]=-1}}},{key:"print",value:function(){for(var t=0;t<=this.y-1;t++){for(var e=0;e<=this.x-1;e++)process.stdout.write(this.matrix[e][t].toString());process.stdout.write("\n")}}},{key:"dumpNode",value:function(){for(var t=[[]],e=0;e<=this.y-1;e++){for(var n=[],o=0;o<=this.x-1;o++){var r=this.matrix[o][e],a=this.nodes[r];if(r>0){var i=this.nodeRelations[r];if(a.child=i.child,a.next=i.next,a.child>0){var s=this.nodes[a.child];s.parent=r}}else a={ID:r,markdown:""};n.push(a)}t.push(n)}return t}},{key:"generateToc",value:function(t){var e=this;if(0!==t){var n=this.nodes[t],o=q(n.markdown);o.forEach((function(t){var n={nodeName:t.nodeName,innerText:t.innerText,id:t.id};e.toc.push(n)}));var r=this.nodeRelations[t];r.child>0&&this.generateToc(r.child),r.next>0&&this.generateToc(r.next)}}}]),t}(),Q={Matrix:K},Y=n(3191),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",[n("div",{staticStyle:{width:"100%"},domProps:{innerHTML:t._s(t.markdownToHtml)},on:{dblclick:function(e){return t.$bvModal.show("modal-node-"+t.nodeId)}}})]),n("b-modal",{attrs:{id:"modal-node-"+t.nodeId,"hide-footer":"",size:"xl"}},[n("MarkdownEditor",{ref:"markdown_editor",attrs:{markdown:t.markdown}}),n("div",{staticClass:"float-right",attrs:{id:"panel"}},[n("b-btn",{on:{click:t.save}},[t._v("save")])],1)],1)],1)},et=[],nt={name:"MarkdownCard",components:{MarkdownEditor:$},props:{nodeId:String,markdown:String},data:function(){return{}},computed:{markdownToHtml:function(){return(0,T.TU)(this.markdown)}},methods:{save:function(){var t=this;return(0,I.Z)((0,S.Z)().mark((function e(){return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_().api.put(w.api.v1.node.update_markdown(t.nodeId),null,{markdown:t.$refs.markdown_editor.edit},{caller:t,success_msg:"update successfully"});case 2:t.$bvModal.hide("modal-node-"+t.nodeId),t.$emit("update_node");case 4:case"end":return e.stop()}}),e)})))()}}},ot=nt,rt=(0,c.Z)(ot,tt,et,!1,null,"18c30a6e",null),at=rt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"mb-2",attrs:{tag:"article"}},[n("b-card-title",[t._v(" WithMounts() ")]),n("b-card-sub-title",[n("b-link",{staticClass:"card-link",attrs:{href:"#"}},[n("b-icon-github")],1)],1),n("b-card-body",[n("b-card-text",[t._v(" "+t._s(t.note)+" ")]),n("pre",[t._v(" "+t._s(t.code)+" ")])],1)],1)],1)},st=[],ct={name:"AnalysisItem",props:{note:String,link:String,code:String},data:function(){return{}}},dt=ct,lt=(0,c.Z)(dt,it,st,!1,null,"6df6b935",null),ut=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SideBar",{attrs:{toc:t.toc}})],1)},ht=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-toc",modifiers:{"sidebar-toc":!0}}],staticClass:"toc-btn"},[n("b-icon",{attrs:{icon:"justify"}})],1),n("b-sidebar",{attrs:{id:"sidebar-toc",title:"Toc",right:"",visible:"",shadow:""}},[n("div",{staticClass:"px-3 py-2"},[n("ul",t._l(t.toc,(function(e,o){return n("li",{key:"header-"+o,class:"toc-"+e.nodeName.toLowerCase()},[n("a",{attrs:{href:"#"+e.id},on:{click:function(n){return n.preventDefault(),t.anchor(e.id)}}},[t._v(t._s(e.innerText))])])})),0)])])],1)},pt=[];function vt(t){var e=document.getElementById(t);e&&e.scrollIntoView()}var bt={name:"SideBar",props:{toc:Array},methods:{anchor:vt}},wt=bt,xt=(0,c.Z)(wt,mt,pt,!1,null,"37e781ab",null),_t=xt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"collapse btn btn-secondary toc-btn",attrs:{for:"_1"}},[n("b-icon",{attrs:{icon:"justify"}})],1),n("input",{attrs:{id:"_1",type:"radio",name:"c1"}}),n("b-sidebar",{attrs:{id:"sidebar-toc",title:"Toc",right:"",shadow:"",visible:""},scopedSlots:t._u([{key:"header",fn:function(){return[n("label",{staticClass:"collapse",attrs:{for:"_2"}},[n("b-icon",{attrs:{icon:"x",variant:"secondary"}})],1),n("input",{attrs:{id:"_2",type:"radio",name:"c1"}})]},proxy:!0}])},[n("div",{staticClass:"px-3 py-2"},[n("ul",t._l(t.toc,(function(e,o){return n("li",{key:"header-"+o,class:"toc-"+e.nodeName.toLowerCase()},[n("a",{attrs:{href:"#"+e.id}},[t._v(t._s(e.innerText))])])})),0)])])],1)},kt=[],yt={name:"SideBarStatic",props:{toc:Array}},Mt=yt,Zt=(0,c.Z)(Mt,gt,kt,!1,null,"07a09ed6",null),St=Zt.exports,It={name:"TableOfContent",components:{SideBarStatic:St,SideBar:_t},props:{toc:Array},data:function(){return{headings:[{nodeName:"h1",innerText:"heading"}]}},mounted:function(){},methods:{}},Ct=It,Nt=(0,c.Z)(Ct,ft,ht,!1,null,"0a2d7d3f",null),Tt=Nt.exports,Rt=1,Et=2,Dt={name:"NodeMatrix",components:{TableOfContent:Tt,AnalysisItem:ut,MarkdownCard:at,MarkdownEditor:$},props:{root:Number,staticView:Boolean,dataSource:String},data:function(){return{nodesMap:{},nodeRelationsMap:{},nodeMatrix:[],mode:0,baseNode:0,plumbInstance:null,nodeLoading:!1,nodeRelationsLoading:!1,toc:[],time_start:0}},computed:{loading:function(){return this.nodeLoading||this.nodeRelationsLoading}},created:function(){var t=this;return(0,I.Z)((0,S.Z)().mark((function e(){return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.time_start=(new Date).getTime(),e.next=3,t.refreshData();case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){this.plumbInstance=Y.jsPlumb.getInstance(),this.plumbInstance.bind("click",(function(t){window.scrollTo(t.target.offsetLeft-100,t.target.offsetTop-100)}))},destroyed:function(){this.plumbInstance.deleteEveryConnection(),this.plumbInstance.deleteEveryEndpoint()},watch:{nodeMatrix:function(){var t=(0,I.Z)((0,S.Z)().mark((function t(){var e=this;return(0,S.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$nextTick((function(){e.drawLine()}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},methods:{anchor:vt,downloadDataSource:function(){var t={matrix:this.nodeMatrix,toc:this.toc},e=JSON.stringify(t),n=window.URL.createObjectURL(new Blob([e])),o=document.createElement("a");o.href=n,o.setAttribute("download","data-source.json"),document.body.appendChild(o),o.click()},refreshData:function(){var t=this;return(0,I.Z)((0,S.Z)().mark((function e(){var n,o;return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.staticView){e.next=7;break}return e.next=3,_().api.get(t.dataSource,null,{caller:t,success_msg:"list node matrix successfully"});case 3:return n=e.sent,t.nodeMatrix=n["matrix"],t.toc=n["toc"],e.abrupt("return");case 7:return console.log("time before data pulled is","".concat((new Date).getTime()-t.time_start,"ms")),e.next=10,t.listNodes(t.root);case 10:return e.next=12,t.listNodeRelationsByRoot(t.root);case 12:console.log("time after data pulled is","".concat((new Date).getTime()-t.time_start,"ms")),o=new Q.Matrix(t.root,t.nodesMap,t.nodeRelationsMap),o.childRecursive(0),o.shift(),o.cleanSuffix(),t.nodeMatrix=o.dumpNode(),o.generateToc(t.root),t.toc=o.toc;case 20:case"end":return e.stop()}}),e)})))()},refreshWorld:function(){var t=this;return(0,I.Z)((0,S.Z)().mark((function e(){return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.plumbInstance.deleteEveryConnection(),t.plumbInstance.deleteEveryEndpoint(),e.next=4,t.refreshData();case 4:case"end":return e.stop()}}),e)})))()},save:function(){var t=this;return(0,I.Z)((0,S.Z)().mark((function e(){var n,o,r;return(0,S.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_().api.post(w.api.v1.node.node,null,{markdown:t.$refs.markdown_editor_common.edit},{caller:t});case 2:return n=e.sent,o=n.id,r={},t.mode===Et?r.child=o:t.mode===Rt&&(r.next=o),e.next=8,_().api.post(w.api.v1.node_relation.node_relation,null,{root:t.root,node:o},{caller:t});case 8:return e.next=10,_().api.put(w.api.v1.node_relation.update_node_relation_by_node(t.baseNode),null,r,{caller:t});case 10:return t.$bvModal.hide("node-common"),e.next=13,t.refreshWorld();case 13:case"end":return e.stop()}}),e)})))()},next:function(t){this.baseNode=t,this.mode=Rt,this.$bvModal.show("node-common")},call:function(t){this.baseNode=t,this.mode=Et,this.$bvModal.show("node-common")},mouseover:function(){console.log("mouseover")},drawLine:function(){var t=this;t.plumbInstance.ready((function(){for(var e=0;e<t.nodeMatrix.length;e++)for(var n=0;n<t.nodeMatrix[e].length;n++){var o=t.nodeMatrix[e][n];o.ID<=0||(0!==o.child&&t.plumbInstance.connect({source:"node-"+o.ID,target:"node-"+o.child,anchor:["Right","Left"],endpoint:"Blank",connector:["Straight"],overlays:[["Arrow",{width:16,length:16,location:1}]],paintStyle:{stroke:"#909393",strokeWidth:2}}),0!==o.next&&t.plumbInstance.connect({source:"node-"+o.ID,target:"node-"+o.next,anchor:["Bottom","Top"],endpoint:"Blank",connector:["Straight"],overlays:[["Arrow",{width:16,length:16,location:1}]],paintStyle:{stroke:"#909393",strokeWidth:2}}))}})),console.log("time after line drawn cost is","".concat((new Date).getTime()-this.time_start,"ms"))},listNodes:function(t){var e=this;return(0,I.Z)((0,S.Z)().mark((function n(){var o;return(0,S.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.nodeLoading=!0,n.next=3,_().api.get(w.api.v1.node.list(t),null,{caller:e,success_msg:"list node successfully"});case 3:o=n.sent,o.forEach((function(t){e.nodesMap[t.ID]=t})),e.nodeLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},listNodeRelationsByRoot:function(t){var e=this;return(0,I.Z)((0,S.Z)().mark((function n(){var o;return(0,S.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.nodeRelationsLoading=!0,n.next=3,_().api.get(w.api.v1.node_relation.list_by_root(t),null,{caller:e,success_msg:"list node_relation successfully"});case 3:o=n.sent,o.forEach((function(t){e.nodeRelationsMap[t.node]=t})),e.nodeRelationsLoading=!1;case 6:case"end":return n.stop()}}),n)})))()}}},$t=Dt,Lt=(0,c.Z)($t,H,F,!1,null,"9556e920",null),Ot=Lt.exports,Bt={name:"StaticView",components:{NodeMatrix:Ot},data:function(){return{dataSource:this.$route.params.data_source,source:this.$route.params.source}},created:function(){_().api.initClient("/")}},jt=Bt,At=(0,c.Z)(jt,z,W,!1,null,"912daf0c",null),Vt=At.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NodeMatrix",{attrs:{root:t.root}})],1)},Ut=[],zt={name:"DynamicView",components:{NodeMatrix:Ot},data:function(){return{root:parseInt(this.$route.params.id)}}},Wt=zt,Ht=(0,c.Z)(Wt,Pt,Ut,!1,null,"54656367",null),Ft=Ht.exports;o["default"].use(g.Z);var Gt=new g.Z({routes:[{path:"/",name:"IndexView",component:U},{path:"/node/:id",name:"NodeMatrix",component:Ft},{path:"/static/:source/:data_source",name:"StaticView",component:Vt}]});o["default"].use(u.XG7),o["default"].use(f.A7),_().api.initClient(w.BaseUrl),o["default"].config.productionTip=!1,new o["default"]({router:Gt,render:function(t){return t(l)}}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],c=o[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(e&&e(o);d<i.length;d++)a=i[d],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3211)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.3a616db0.js.map