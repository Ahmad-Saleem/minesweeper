(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(5),l=t.n(o),i=t(6),c=t(2),u=t(12),s=t(13),d=t(3),m={easy:{name:"easy",rows:10,cols:10,mines:10},meduim:{name:"medium",rows:20,cols:20,mines:20},hard:{name:"hard",rows:30,cols:30,mines:30}},f=Object(d.b)({x:-1,y:-1,hasMine:!1,isOpened:!1,isFlaged:!1,value:0,neghbours:Object(d.a)()}),p=Object(d.b)({board:Object(d.a)(),level:m.easy,flaggedCells:0,openedCells:0,state:{name:"init"}}),h=function(){return{type:"SETUP_MINES",payload:{}}},v=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new Array(e).fill(t,0,e).map((function(e){return new Array(n).fill(t,0,n)}))},g=function(e,n){var t=n.rows,a=n.cols,r=n.mines,o=e.withMutations((function(e){for(var n=0;n<r;){var o=Math.floor(Math.random()*t),l=Math.floor(Math.random()*a);e.setIn([o,l,"hasMine"],!0),n++}}));return E(o)},E=function(e){return e.withMutations((function(e){e.forEach((function(n,t){n.forEach((function(n,a){var r=[b(e,t,a-1),b(e,t-1,a-1),b(e,t-1,a),b(e,t-1,a+1),b(e,t,a+1),b(e,t+1,a+1),b(e,t+1,a),b(e,t+1,a-1)];console.log({i:t,j:a},r);var o=r.filter((function(e){return e&&e.get("hasMine")})).length;e.setIn([t,a,"value"],o)}))}))}))},b=function(e,n,t){if(n<0||t<0)return null;var a=e.get(n);if(!a)return null;var r=a.get(t);return r||null},w=p({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.easy,n=v(e.rows,e.cols,null);return n.forEach((function(e,t){e.forEach((function(e,a){n[t][a]=f({x:t,y:a})}))})),Object(d.c)(n)}()}),y=Object(c.combineReducers)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SETUP_MINES":return e.update("board",(function(n){return g(n,e.get("level"))}));case"CELL_OPEN":return e.setIn(["board",n.payload.x,n.payload.y,"isOpened"],!0).update("openedCells",(function(e){return++e}));case"INCREASE_OPENED_CELLS":return e.set("openedCells",e.get("openedCells")+1);case"GAME_INIT":return w;default:return e}}}),M=[u.a],O=Object(s.composeWithDevTools)({trace:!0}),C=Object(c.createStore)(y,O(c.applyMiddleware.apply(void 0,M)));t(24);var N=Object(i.b)((function(e){return{game:e.game}}),(function(e){return{openCell:function(n){return e(function(e){return function(n,t){0===t().game.get("openedCells")&&n(h()),n(function(e){return{type:"CELL_OPEN",payload:e}}(e))}}(n))}}}))((function(e){var n=e.game,t=e.openCell,a=n.board;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Mine Sweeper ")),r.a.createElement("main",null,r.a.createElement("div",{className:"board"},a.size>0&&a.map((function(e,n){return r.a.createElement("div",{key:n,className:"row"},e.map((function(e,n){return r.a.createElement("div",{key:n,className:"cell ".concat(e.get("isOpened")?"cell-opened":""),onClick:function(){return t(e)},style:e.get("hasMine")?{backgroundColor:"red"}:{}},e.get("hasMine")?"":e.get("value")>0?e.get("value"):"")})))})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{store:C},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ff513a7b.chunk.js.map