(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,a,i=n(0),c=n(5),o=n.n(c),u=(n(20),n(15)),s=(n(21),n(2)),l=n(9),_=n(13);!function(e){e.PLAYER_MOVE="PLAYER_MOVE",e.RESTART_GAME="RESTART_GAME",e.CHANGE_TITLE="CHANGE_TITLE"}(r||(r={})),function(e){e[e.X=0]="X",e[e.O=1]="O",e[e.Tie=2]="Tie"}(a||(a={}));var d=["X","X","X"],f=["O","O","O"],m=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function p(e,t){return void 0===e.find((function(n,r){return e[r]!==t[r]}))}function j(e){var t=function(t){return t.map((function(t){return e[t]}))};return m.find((function(e){return p(t(e),d)||p(t(e),f)}))}var v=function(e){return{type:r.CHANGE_TITLE,payload:e}};function O(e,t){if(e.field[t.payload]||e.endGame)return e;var n=Object(l.a)({},e);return n.field[t.payload]=n.xMove?"X":"O",j(n.field)&&(n.endGame=!0),void 0!==n.field.find((function(e){return""===e}))?n.xMove=!n.xMove:n.endGame=!0,n.title=n.xMove?"X move":"O move",n}var b=n(4),h=n.n(b),x=n(1),E=function(e){var t=e.title,n=Object(s.b)();return Object(x.jsx)("div",{className:h.a.wrapper,children:Object(x.jsxs)("div",{className:h.a.content+" neumorphism",children:[Object(x.jsx)("div",{className:h.a.title,children:t}),Object(x.jsx)("div",{onClick:function(){return n({type:r.RESTART_GAME,payload:void 0})},className:"fa fa-refresh "+h.a.icon,"aria-hidden":"true"})]})})},G=n(3),w=n.n(G),T=function(e){var t=e.state,n=e.number,a=e.outline,i=Object(s.b)();return Object(x.jsx)("div",{className:w.a.wrapper,draggable:"false",children:Object(x.jsx)("div",{className:[w.a.content,function(){switch(t){case"X":return w.a.is_x;case"O":return w.a.is_o;default:return w.a.is_empty}}(),a?w.a.outline:"","neumorphism"].join(" "),onClick:function(){var e;i((e=n,{type:r.PLAYER_MOVE,payload:e}))}})})},A=n(8),S=n.n(A),y=function(e){var t=e.gameState,n=e.vinLine;return Object(x.jsx)("div",{className:S.a.wrapper,children:Object(x.jsx)("div",{className:S.a.content,children:[0,1,2].map((function(e){return Object(x.jsx)("div",{className:S.a.row,children:[0,1,2].map((function(r){return Object(x.jsx)(T,{number:3*e+r,state:t[3*e+r],outline:n.has(3*e+r)},3*e+r)}))},e)}))})})},N=s.c;var M=function(){var e=Object(s.b)(),t=N((function(e){return e.game})),n=Object(i.useState)(new Set),r=Object(u.a)(n,2),c=r[0],o=r[1];return Object(i.useEffect)((function(){t.endGame?function(n){switch(n){case a.X:e(v("X win!"));break;case a.O:e(v("O win!"));break;default:return void e(v("Tie!"))}o(new Set(j(t.field)))}(function(e){var t,n=Object(_.a)(m);try{for(n.s();!(t=n.n()).done;){var r=t.value.map((function(t){return e[t]}));switch(!0){case p(r,d):return a.X;case p(r,f):return a.O}}}catch(i){n.e(i)}finally{n.f()}return a.Tie}(t.field)):o(new Set)}),[t.endGame]),Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"App__content",children:[Object(x.jsx)(E,{title:t.title}),Object(x.jsx)(y,{gameState:t.field,vinLine:c})]})})},X=n(6),R=n(14),g=Object(X.combineReducers)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{field:["","","","","","","","",""],xMove:!0,endGame:!1,title:"X move"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.PLAYER_MOVE:return O(e,t);case r.RESTART_GAME:return{field:["","","","","","","","",""],xMove:!0,endGame:!1,title:"X move"};case r.CHANGE_TITLE:return Object(l.a)(Object(l.a)({},e),{},{title:t.payload});default:return e}}}),L=Object(X.createStore)(g,Object(R.composeWithDevTools)());o.a.render(Object(x.jsx)(s.a,{store:L,children:Object(x.jsx)(M,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={wrapper:"Square_wrapper__2c_7r",content:"Square_content__1E19F",is_empty:"Square_is_empty__2xh96",is_x:"Square_is_x__gEuLP",is_o:"Square_is_o__2fcgo",neumorphism:"Square_neumorphism__1ExXp",outline:"Square_outline__17nGj"}},4:function(e,t,n){e.exports={wrapper:"GameBar_wrapper__1G1rY",content:"GameBar_content__1lT3T",icon:"GameBar_icon__3qAWn",title:"GameBar_title__1rdyx",refresh:"GameBar_refresh__1k5B5"}},8:function(e,t,n){e.exports={wrapper:"GameField_wrapper__eQpQ0",content:"GameField_content__jPfGE",row:"GameField_row__25rVG"}}},[[27,1,2]]]);
//# sourceMappingURL=main.1971468e.chunk.js.map