(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[15],{197:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(3),a=n(0),s=n(124),r=n(1);function i(e){var t=e.value,n=e.onChange,i=e.className,l=void 0===i?"":i,o=e.disabled,j=void 0!==o&&o,u=e.float,d=void 0!==u&&u,b=e.placeholder,h=e.allowEmpty,x=void 0!==h&&h,m=e.max,O=e.min,f=Object(a.useState)(""),p=Object(c.a)(f,2),v=p[0],g=p[1],y=Object(a.useCallback)((function(){if(x&&""===v)return n(void 0);if(""===v)return n(0);var e=d?parseFloat:parseInt;n(e(v))}),[n,v,d,x]);return Object(a.useEffect)((function(){var e;return g(null!==(e=null===t||void 0===t?void 0:t.toString())&&void 0!==e?e:"")}),[t,g]),Object(r.jsx)(s.a,{value:v,"aria-label":"custom-input",className:"hide-appearance ".concat(l),type:"number",placeholder:b,onChange:function(e){return g(e.target.value)},onBlur:y,disabled:j,onKeyDown:function(e){return"Enter"===e.key&&y()},max:m,min:O})}},199:function(e,t,n){"use strict";var c=n(2),a=n(5),s=n(7),r=n.n(s),i=n(0),l=n.n(i),o=n(8),j=["bsPrefix","size","toggle","vertical","className","as"],u=l.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.size,i=e.toggle,u=e.vertical,d=e.className,b=e.as,h=void 0===b?"div":b,x=Object(a.a)(e,j),m=Object(o.a)(n,"btn-group"),O=m;return u&&(O=m+"-vertical"),l.a.createElement(h,Object(c.a)({},x,{ref:t,className:r()(d,O,s&&m+"-"+s,i&&m+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},202:function(e,t,n){"use strict";var c={weaponTypes:{bow:n.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:n.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:n.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:n.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:n.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:n.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:n.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:n.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:n.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:n.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=c},225:function(e,t,n){"use strict";var c=n(5),a=n(2),s=n(7),r=n.n(s),i=n(0),l=n.n(i),o=n(18),j=n(8),u=["bsPrefix","size","hasValidation","className","as"],d=Object(o.a)("input-group-append"),b=Object(o.a)("input-group-prepend"),h=Object(o.a)("input-group-text",{Component:"span"}),x=l.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.size,i=e.hasValidation,o=e.className,d=e.as,b=void 0===d?"div":d,h=Object(c.a)(e,u);return n=Object(j.a)(n,"input-group"),l.a.createElement(b,Object(a.a)({ref:t},h,{className:r()(o,n,s&&n+"-"+s,i&&"has-validation")}))}));x.displayName="InputGroup";var m=Object(a.a)({},x,{Text:h,Radio:function(e){return l.a.createElement(h,null,l.a.createElement("input",Object(a.a)({type:"radio"},e)))},Checkbox:function(e){return l.a.createElement(h,null,l.a.createElement("input",Object(a.a)({type:"checkbox"},e)))},Append:d,Prepend:b});t.a=m},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var c=n(10);function a(e){var t=e%1e3,n=Math.floor(e/1e3%60),c=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:c,seconds:n,milliseconds:t}}function s(e){var t=a(e),n=t.hours,s=t.minutes,r=t.seconds,i="Minutes";return n&&(i="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.q)(s,"0",2),":").concat(Object(c.q)(r,"0",2)," ").concat(i)}function r(e){var t=a(e),n=t.hours,s=t.minutes,r=t.seconds,i=t.milliseconds,l="Minutes";return n&&(l="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(c.q)(s,"0",2),":").concat(Object(c.q)(r,"0",2),".").concat(Object(c.q)(i,"0",3)," ").concat(l)}},268:function(e,t,n){"use strict";var c=n(2),a=n(5),s=n(0),r=n.n(s),i=n(6),l=n.n(i),o=n(83),j=n(123),u=n(122),d=["title","children","bsPrefix","rootCloseEvent","variant","size","menuAlign","menuRole","renderMenuOnMount","disabled","href","id"],b={id:l.a.any,href:l.a.string,onClick:l.a.func,title:l.a.node.isRequired,disabled:l.a.bool,menuAlign:u.a,menuRole:l.a.string,renderMenuOnMount:l.a.bool,rootCloseEvent:l.a.string,bsPrefix:l.a.string,variant:l.a.string,size:l.a.string},h=r.a.forwardRef((function(e,t){var n=e.title,s=e.children,i=e.bsPrefix,l=e.rootCloseEvent,b=e.variant,h=e.size,x=e.menuAlign,m=e.menuRole,O=e.renderMenuOnMount,f=e.disabled,p=e.href,v=e.id,g=Object(a.a)(e,d);return r.a.createElement(o.a,Object(c.a)({ref:t},g),r.a.createElement(j.a,{id:v,href:p,size:h,variant:b,disabled:f,childBsPrefix:i},n),r.a.createElement(u.b,{align:x,role:m,renderOnMount:O,rootCloseEvent:l},s))}));h.displayName="DropdownButton",h.propTypes=b,t.a=h},512:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var c=n(3),a=n(22),s=n(26);function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return o(this,n)}}var u=n(54),d=n(9),b=n(0),h=n.n(b),x=n(175),m=n(27),O=n(133),f=n(61),p=n(31),v=n(199),g=n(57),y=n(268),N=n(83),w=n(225),k=n(181),C=n(46),E=n(202),T=n(197),_=n(228),M=n(10),R=n(1),S=1e3,D=36e5;function I(e){return Object(R.jsxs)(x.a,{className:"mb-2",children:[Object(R.jsx)(H,{}),Object(R.jsx)(B,{}),Object(R.jsx)(F,{})]})}var P=160,z=48e4,B=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(n,e);var t=j(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).resinIncrement=void 0,c.updateTimer=void 0,c.setResin=function(e){return c.setState((function(t){var n={resin:e=parseInt(e)||0};return e>=P?(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=0,t.resin<P&&(n.date=(new Date).getTime())):(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=setInterval((function(){return c.setResin(c.state.resin+1)}),z),n.date=(new Date).getTime()),n}))};var s=Object(M.l)("resinInfo");c.state=s||{resin:100,date:(new Date).getTime()};var r=c.state,i=r.resin,l=r.date;if(i<P&&Date.now()-l>z){var o=P-i,j=Math.min(Math.floor((Date.now()-l)/z),o);i+=j,l+=j*z,c.state.resin=i,c.state.date=l}return C.a.pageview("/tools"),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.resin,c=t.date;if(n<P){var a=c+z-new Date;this.resinIncrement=setTimeout((function(){e.setResin(e.state.resin+1)}),a)}this.updateTimer=setInterval((function(){return e.forceUpdate()}),S)}},{key:"componentWillUnmount",value:function(){this.updateTimer&&clearInterval(this.updateTimer),this.resinIncrement&&clearTimeout(this.resinIncrement)}},{key:"componentDidUpdate",value:function(){var e=Object(M.d)(this.state);Object(M.p)("resinInfo",e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.resin,c=t.date,a=n>=P?c:c+z,s=new Date(n>=P?c:c+(P-n)*z),r=Object(_.a)(Math.abs(a-Date.now()));return Object(R.jsxs)(m.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(R.jsxs)(m.a.Header,{children:[Object(R.jsx)(O.a,{src:E.a.resin.fragile,className:"thumb-small d-inline my-n1 ml-n2"}),Object(R.jsx)("span",{children:"Resin Counter"})]}),Object(R.jsx)(m.a.Body,{children:Object(R.jsxs)(f.a,{children:[Object(R.jsx)(p.a,{xs:"auto",className:"px-3",children:Object(R.jsxs)("span",{style:{fontSize:"4em"},children:[Object(R.jsx)(O.a,{src:E.a.resin.fragile,className:"d-inline w-auto mt-n3 ml-n3 mr-n4",style:{height:"1.5em"}}),Object(R.jsx)("input",{type:"number",className:"invisible-input hide-appearance text-white mb-0 text-right",size:4,value:n,min:0,max:999,style:{width:"2.1em"},onChange:function(t){return e.setResin(t.target.value)}}),"/",P]})}),Object(R.jsxs)(p.a,{children:[Object(R.jsxs)(v.a,{className:"w-100 d-flex mb-2",children:[Object(R.jsx)(g.a,{onClick:function(){return e.setResin(0)},disabled:0===n,children:"0"}),Object(R.jsx)(g.a,{onClick:function(){return e.setResin(n-1)},disabled:0===n,children:"-1"}),Object(R.jsx)(g.a,{onClick:function(){return e.setResin(n-20)},disabled:n<20,children:"-20"}),Object(R.jsx)(g.a,{onClick:function(){return e.setResin(n-40)},disabled:n<40,children:"-40"}),Object(R.jsx)(g.a,{onClick:function(){return e.setResin(n-60)},disabled:n<60,children:"-60"}),Object(R.jsx)(g.a,{onClick:function(){return e.setResin(n+1)},children:"+1"}),Object(R.jsx)(g.a,{onClick:function(){return e.setResin(n+60)},children:"+60"}),Object(R.jsxs)(g.a,{onClick:function(){return e.setResin(P)},disabled:n===P,children:["MAX ",P]})]}),Object(R.jsx)("h5",{children:n<P?Object(R.jsxs)("span",{children:["Next resin in ",r,", full Resin at ",s.toLocaleTimeString()," ",s.toLocaleDateString()]}):Object(R.jsxs)("span",{children:["Resin has been full for at least ",r,", since ",s.toLocaleTimeString()," ",s.toLocaleDateString()]})})]}),Object(R.jsx)("small",{children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})]})})]})}}]),n}(h.a.Component),A={America:-18e6,Europe:D,Asia:288e5,"TW, HK, MO":288e5};function H(e){var t=Object(b.useState)(Object.keys(A)[0]),n=Object(c.a)(t,2),a=n[0],s=n[1],r=Object(b.useState)(new Date(Date.now()+A[a])),i=Object(c.a)(r,2),l=i[0],o=i[1];Object(b.useEffect)((function(){return s(Object(M.l)("server_timezone")||Object.keys(A)[0])}),[]),Object(b.useEffect)((function(){var e=function t(){return o(new Date(Date.now()+A[a])),setTimeout((function(){e=t()}),S-Date.now()%S)}();return Object(M.p)("server_timezone",a),function(){return clearTimeout(e)}}),[a]);var j=new Date(l);j.getUTCHours()<4?j.setUTCHours(4,0,0,0):(j=new Date(j.getTime()+864e5)).setUTCHours(4,0,0,0);var h=j.getTime()-l.getTime(),x=Object(_.a)(h);return Object(R.jsxs)(m.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(R.jsx)(m.a.Header,{children:Object(R.jsxs)(f.a,{children:[Object(R.jsxs)(p.a,{xs:"auto",children:[Object(R.jsx)("h5",{className:"d-inline",children:Object(R.jsx)(d.a,{icon:u.d,className:"fa-fw mr-2"})}),Object(R.jsx)("span",{children:"Teyvat Time"})]}),Object(R.jsx)(p.a,{xs:"auto",children:Object(R.jsx)(y.a,{title:a,children:Object.keys(A).map((function(e){return Object(R.jsx)(N.a.Item,{onClick:function(){return s(e)},children:e},e)}))})})]})}),Object(R.jsx)(m.a.Body,{children:Object(R.jsxs)(f.a,{className:"d-flex justify-content-center",children:[Object(R.jsx)(p.a,{xs:"auto",className:"px-3",children:Object(R.jsx)("span",{style:{fontSize:"4em"},className:"d-block",children:l.toLocaleTimeString([],{timeZone:"UTC"})})}),Object(R.jsx)(p.a,{xs:"auto ",children:Object(R.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(R.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Server Date: ",Object(R.jsx)("b",{children:l.toDateString()})]}),Object(R.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Time until reset: ",Object(R.jsx)("b",{children:x})]}),Object(R.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Resin until reset: ",Object(R.jsx)("b",{children:Math.floor(h/48e4)})]})]})})]})})]})}var W={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:E.a.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:E.a.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:E.a.exp_books.wit}},q=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],L=[20,40,50,60,70,80,90];function F(e){var t=Object(b.useState)(0),n=Object(c.a)(t,2),a=n[0],s=n[1],r=Object(b.useState)(0),i=Object(c.a)(r,2),l=i[0],o=i[1],j=Object(b.useState)(0),u=Object(c.a)(j,2),d=u[0],h=u[1],x={advice:a,experience:l,wit:d},y={advice:s,experience:o,wit:h},N=Object(b.useState)(!1),C=Object(c.a)(N,2),E=C[0],_=C[1],S=Object(b.useState)(1),D=Object(c.a)(S,2),I=D[0],P=D[1],z=Object(b.useState)(0),B=Object(c.a)(z,2),A=B[0],H=B[1],F=Object(b.useState)(0),X=Object(c.a)(F,2),V=X[0],Y=X[1];Object(b.useEffect)((function(){return Y(Object(M.l)("mora")||0)}),[]),Object(b.useEffect)((function(){Object(M.p)("mora",V)}),[V]),Object(b.useEffect)((function(){return P(Object(M.l)("exp_calc_level")||1)}),[]),Object(b.useEffect)((function(){Object(M.p)("exp_calc_level",I)}),[I]),Object(b.useEffect)((function(){return H(Object(M.l)("exp_calc_cur_exp")||0)}),[]),Object(b.useEffect)((function(){Object(M.p)("exp_calc_cur_exp",A)}),[A]),Object(b.useEffect)((function(){var e=Object(M.l)("exp_books")||{},t={advice:s,experience:o,wit:h};Object.entries(e).forEach((function(e){var n,a=Object(c.a)(e,2),s=a[0],r=a[1];return null===(n=t[s])||void 0===n?void 0:n.call(t,r)}))}),[]),Object(b.useEffect)((function(){return Object(M.p)("exp_books",{advice:a,experience:l,wit:d})}),[a,l,d]);for(var G=L.find((function(e){return e>I})),J=-A,K=I;K<Math.min(G,q.length);K++)J+=q[K];for(var Z=function(e,t,n,c,a){var s=a?Math.floor(c/1e3):Math.ceil(c/1e3),r=Math.min(Math.floor(s/20),e);s-=20*r;var i=Math.min(Math.floor(s/5),t);s-=5*i;var l=Math.min(s,n);if(s-=l,a||0===s)return[r,i,l];if(3===i&&r!==e)return[r+1,0,0];if(i!==t)return[r,i+1,0];if(r!==e)return[r+1,0,0];return null}(d,l,a,J,E)||[],Q=Object(c.a)(Z,3),$=Q[0],ee=void 0===$?0:$,te=Q[1],ne=void 0===te?0:te,ce=Q[2],ae=void 0===ce?0:ce,se={advice:ae,experience:ne,wit:ee},re=2e4*ee+5e3*ne+1e3*ae,ie=re/5,le=J-re,oe=V-ie,je=re+A,ue=I;ue<Math.min(G,q.length)&&q[ue]<=je;ue++)je-=q[ue];ue===G&&(je=0);var de="";return oe<0?de=Object(R.jsxs)("span",{children:["You don't have enough ",Object(R.jsx)("b",{children:"Mora"})," for this operation."]}):0===Z.length?de=Object(R.jsxs)("span",{children:["You don't have enough ",Object(R.jsx)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===I&&(de="You are at the maximum level."),Object(R.jsxs)(m.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(R.jsx)(m.a.Header,{children:Object(R.jsxs)(f.a,{children:[Object(R.jsxs)(p.a,{xs:"auto",children:[Object(R.jsx)(O.a,{src:W.wit.img,className:"thumb-small d-inline my-n1 ml-n2"}),Object(R.jsx)("span",{children:"Experience Calculator"})]}),Object(R.jsx)(p.a,{children:Object(R.jsxs)(v.a,{children:[Object(R.jsx)(g.a,{variant:E?"primary":"success",disabled:!E,onClick:function(){return _(!1)},children:"Full Level"}),Object(R.jsx)(g.a,{variant:E?"success":"primary",disabled:E,onClick:function(){return _(!0)},children:"Don't fully level"})]})})]})}),Object(R.jsxs)(m.a.Body,{children:[Object(R.jsx)(f.a,{className:"mb-2",children:Object(R.jsxs)(p.a,{children:[Object(R.jsx)("span",{children:"This calcualtor tries to calculate the amount of exp books required to get to the next milestone level. "}),E?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minize as much exp loss as possible."]})}),Object(R.jsxs)(f.a,{children:[Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Current Level"})}),Object(R.jsx)(T.a,{placeholder:void 0,value:I,onChange:function(e){return P(Object(M.a)(e,0,90))}})]})}),Object(R.jsx)(p.a,{xs:12,md:8,className:"mb-2",children:Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Current EXP."})}),Object(R.jsx)(T.a,{placeholder:void 0,value:A,onChange:function(e){return H(Object(M.a)(e,0,(q[I]||1)-1))}}),Object(R.jsx)(w.a.Append,{children:Object(R.jsxs)(w.a.Text,{children:["/",q[I]||0]})})]})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(m.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(m.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Next Milestone: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{children:G})})]})})}),Object(R.jsx)(p.a,{xs:12,md:8,className:"mb-2",children:Object(R.jsx)(m.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(m.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"EXP. needed to milestone: "}),Object(R.jsxs)("span",{className:"float-right text-right",children:[Object(R.jsx)("strong",{children:re})," / ",Object(R.jsx)("b",{children:J})]})]})})})]}),Object(R.jsxs)(f.a,{children:[Object.entries(W).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(R.jsx)(p.a,{xs:12,lg:4,children:Object(R.jsx)(U,{bookObj:a,value:x[n],setValue:y[n],required:se[n]})},n)})),Object(R.jsx)(p.a,{xs:12,lg:4,className:"mb-2",children:Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Current Mora"})}),Object(R.jsx)(T.a,{placeholder:void 0,value:V,onChange:function(e){return Y(Math.max(null!==e&&void 0!==e?e:0,0))}})]})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(m.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(m.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Mora Cost: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{children:ie})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(m.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(m.a.Body,{className:"py-2",children:[Object(R.jsxs)("span",{children:["EXP ",E?"Diff":"Waste",": "]}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:le<0?"text-danger":"text-success",children:le})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(m.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(m.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Final Mora: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:oe<0?"text-danger":"text-success",children:oe})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(m.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(m.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Final Level: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:"text-success",children:ue})})]})})}),Object(R.jsx)(p.a,{xs:12,md:4,className:"mb-2",children:Object(R.jsx)(m.a,{bg:"lightcontent",text:"lightfont",children:Object(R.jsxs)(m.a.Body,{className:"py-2",children:[Object(R.jsx)("span",{children:"Final EXP: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:je<0?"text-danger":"text-success",children:je})})]})})})]})]}),Object(R.jsx)(m.a.Footer,{children:Object(R.jsxs)(f.a,{children:[Object(R.jsx)(p.a,{children:Boolean(de)&&Object(R.jsx)(k.a,{variant:"danger",className:"mb-0 py-2",children:de})}),Object(R.jsx)(p.a,{xs:"auto",children:Object(R.jsx)(g.a,{disabled:!!de,onClick:function(){P(ue),H(je),Object.entries(se).forEach((function(e){var t,n=Object(c.a)(e,2),a=n[0],s=n[1];return null===(t=y[a])||void 0===t?void 0:t.call(y,x[a]-s)})),Y(oe)},variant:"success",children:"Apply"})})]})})]})}function U(e){var t=e.bookObj,n=t.name,c=t.img,a=e.value,s=void 0===a?0:a,r=e.setValue,i=e.required,l=void 0===i?0:i;return Object(R.jsxs)(m.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(R.jsx)(m.a.Header,{children:n}),Object(R.jsx)(m.a.Body,{children:Object(R.jsxs)(f.a,{children:[Object(R.jsx)(p.a,{xs:3,children:Object(R.jsx)(O.a,{src:c,className:"w-100 h-auto",rounded:!0})}),Object(R.jsxs)(p.a,{children:[Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Prepend,{children:Object(R.jsx)(w.a.Text,{children:"Amount"})}),Object(R.jsx)(T.a,{placeholder:void 0,value:s,onChange:function(e){return r(Math.max(null!==e&&void 0!==e?e:0,0))}})]}),Object(R.jsxs)("div",{className:"mt-2",children:[Object(R.jsx)("span",{children:"Required: "}),Object(R.jsx)("span",{className:"float-right text-right",children:Object(R.jsx)("b",{className:l?"text-success":"",children:l})})]})]})]})})]})}}}]);
//# sourceMappingURL=15.5f1fd044.chunk.js.map