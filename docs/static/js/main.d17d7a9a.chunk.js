(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(5),l=t.n(o),i=t(6),c=t(2),u=t(12),s=t(13),d=t(3),f={easy:{name:"easy",rows:10,cols:10,mines:10},meduim:{name:"medium",rows:20,cols:20,mines:20},hard:{name:"hard",rows:30,cols:30,mines:30}},m=Object(d.b)({x:-1,y:-1,hasMine:!1,isOpened:!1,isFlaged:!1,value:0,neghbours:Object(d.a)()}),g=Object(d.b)({board:Object(d.a)(),level:f.easy,flaggedCells:0,openedCells:0,state:{name:"init"}}),p=t(14),h=function(e){return function(n,t){0===t().game.get("openedCells")&&n(v(e)),n(function e(n){return function(t,a){var r=a().game;(t({type:"CELL_OPEN",payload:n}),n.get("hasMine"))?alert("looooose"):0!==n.get("value")||n.get("isOpened")||n.get("neghbours").forEach((function(n){var a=r.getIn(["board"].concat(Object(p.a)(n)));a.get("hasMine")||t(e(a))}))}}(e))}},v=function(e){return{type:"SETUP_MINES",payload:e}},E=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new Array(e).fill(t,0,e).map((function(e){return new Array(n).fill(t,0,n)}))},b=function(e,n,t){var a=n.rows,r=n.cols,o=n.mines,l=e.withMutations((function(e){for(var n=0;n<o;){var l=Math.floor(Math.random()*a),i=Math.floor(Math.random()*r);t.get("x")!==l&&t.get("y")!==i&&!1===e.getIn([l,i,"hasMine"])&&(e.setIn([l,i,"hasMine"],!0),n++)}}));return y(l)},y=function(e){return e.withMutations((function(e){e.forEach((function(n,t){n.forEach((function(n,a){var r=[w(e,t,a-1),w(e,t-1,a-1),w(e,t-1,a),w(e,t-1,a+1),w(e,t,a+1),w(e,t+1,a+1),w(e,t+1,a),w(e,t+1,a-1)].filter((function(e){return e&&null!=e})),o=r.filter((function(e){return e&&e.get("hasMine")})).length;e.setIn([t,a,"value"],o);var l=r.map((function(e){return[e.get("x"),e.get("y")]}));e.setIn([t,a,"neghbours"],Object(d.c)(l))}))}))}))},w=function(e,n,t){if(n<0||t<0)return null;var a=e.get(n);if(!a)return null;var r=a.get(t);return r||null},O=g({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.easy,n=E(e.rows,e.cols,null);return n.forEach((function(e,t){e.forEach((function(e,a){n[t][a]=m({x:t,y:a})}))})),Object(d.c)(n)}()}),M=Object(c.combineReducers)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SETUP_MINES":return e.update("board",(function(t){return b(t,e.get("level"),n.payload)}));case"CELL_OPEN":return e.setIn(["board",n.payload.x,n.payload.y,"isOpened"],!0).update("openedCells",(function(e){return++e}));case"INCREASE_OPENED_CELLS":return e.set("openedCells",e.get("openedCells")+1);case"GAME_INIT":return O;default:return e}}}),C=[u.a],I=Object(s.composeWithDevTools)({trace:!0}),j=Object(c.createStore)(M,I(c.applyMiddleware.apply(void 0,C)));t(25);var N=Object(i.b)((function(e){return{game:e.game}}),(function(e){return{openCell:function(n){return e(h(n))}}}))((function(e){var n=e.game,t=e.openCell,a=n.board;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Mine Sweeper ")),r.a.createElement("main",null,r.a.createElement("div",{className:"board"},a.size>0&&a.map((function(e,n){return r.a.createElement("div",{key:n,className:"row"},e.map((function(e,n){return r.a.createElement("div",{key:n,className:"cell ".concat(e.get("isOpened")?"cell-opened":""),onClick:function(){return t(e)},style:e.get("hasMine")&&e.get("isOpened")?{backgroundColor:"red"}:{}},e.get("hasMine")?"":e.get("isOpened")&&e.get("value")>0?e.get("value"):"")})))})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{store:j},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d17d7a9a.chunk.js.map