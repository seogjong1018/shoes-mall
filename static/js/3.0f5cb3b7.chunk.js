(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[3],{119:function(e,t,n){},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(40);function s(e,t){e.classList?e.classList.add(t):Object(a.a)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}},121:function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function s(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}n.d(t,"a",(function(){return s}))},123:function(e,t,n){"use strict";n.r(t);var a=n(28),s=n(59),r=n(0),o=n.n(r),c=n(6),l=n(61),i=(n(119),n(118));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=n(62),m=n(63),f=(n(3),n(120)),d=n(121),E=n(24),v=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return Object(d.a)(e,t)}))},b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1];t.removeClasses(s,"exit"),t.addClass(s,r?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1]?"appear":"enter";t.addClass(s,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1]?"appear":"enter";t.removeClasses(s,r),t.addClass(s,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,s=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:s,activeClassName:a?s+"-active":n[e+"Active"],doneClassName:a?s+"-done":n[e+"Done"]}},t}Object(m.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&s&&(a+=" "+s),"active"===n&&e&&e.scrollTop,a&&(this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return Object(f.a)(e,t)}))}(e,a))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,s=n.active,r=n.done;this.appliedClasses[t]={},a&&v(e,a),s&&v(e,s),r&&v(e,r)},n.render=function(){var e=this.props,t=(e.classNames,Object(p.a)(e,["classNames"]));return o.a.createElement(E.e,u({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.a.Component);b.defaultProps={classNames:""},b.propTypes={};var g=b,h=n(33);function N(){var e=Object(s.a)(["\n  text-align: left;\n  margin-top: 40px;\n"]);return N=function(){return e},e}function C(){var e=Object(s.a)(["\n  margin: 0 5px;\n"]);return C=function(){return e},e}function x(){var e=Object(s.a)(["\n  font-size: 25px;\n  color: ",";\n"]);return x=function(){return e},e}function j(){var e=Object(s.a)(["\n  padding: 20px;\n"]);return j=function(){return e},e}var O=l.a.div(j()),y=l.a.h4(x(),(function(e){return e.color})),k=l.a.button(C()),A=l.a.div(N()),w=function(){return o.a.createElement("div",{className:"my-alert2"},o.a.createElement("p",null,"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))},S=function(e){return Object(r.useEffect)((function(){e.setSwitch(!0)})),0===e.Tab?o.a.createElement(A,null,o.a.createElement("p",null,"1. \uc0c1\ud488\uc0c1\ud0dc : \uc0c8\uc0c1\ud488"),o.a.createElement("p",null,"2. \uc6d0\uc0b0\uc9c0 : \ud55c\uad6d"),o.a.createElement("p",null,"3. \ubc30\uc1a1 \uae30\uac04 : 2 ~ 3\uc77c")):1===e.Tab?o.a.createElement(A,null,o.a.createElement("p",null,"1. \uad6c\ub9e4\uc790 \ub2e8\uc21c \ubcc0\uc2ec\uc740 \uc0c1\ud488 \uc218\ub839\ud6c4 7\uc77c \uc774\ub0b4"),o.a.createElement("p",null,"2. \ud45c\uc2dc/\uad11\uace0\uc640 \uc0c1\uc774, \uc0c1\ud488\ud558\uc790\uc758 \uacbd\uc6b0 \uc0c1\ud488 \uc218\ub839 \ud6c4 3\uac1c\uc6d4 \uc774\ub0b4 \ud639\uc740 \ud45c\uc2dc/\uad11\uace0\uc640 \ub2e4\ub978 \uc0ac\uc2e4\uc744 \uc548 \ub0a0\ub85c\ubd80\ud130 30\uc77c \uc774\ub0b4.",o.a.createElement("br",null)," \ub458 \uc911 \ud558\ub098 \uacbd\uacfc\uc2dc \ubc18\ud488/\uad50\ud658 \ubd88\uac00")):void 0},T=function(e){return o.a.createElement("p",null,"\uc7ac\uace0 : ",e.Inventory[0])};t.default=Object(h.b)((function(e){return console.log(e),{state:e}}))((function(e){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),s=n[0],l=n[1],u=Object(r.useState)(0),p=Object(a.a)(u,2),m=p[0],f=p[1],d=Object(r.useState)(!1),E=Object(a.a)(d,2),v=E[0],b=E[1];Object(r.useEffect)((function(){var e=setTimeout((function(){l(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var h=Object(c.f)(),N=Object(c.g)().id;return o.a.createElement("div",{className:"container"},o.a.createElement(O,null,o.a.createElement(y,{className:"black"},"\uc0c1\uc138\ud398\uc774\uc9c0")),!0===s?o.a.createElement(w,null):null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.Shoes[N].id+1)+".jpg",width:"100%"})),o.a.createElement("div",{className:"col-md-6 mt-4"},o.a.createElement("h4",{className:"pt-5"},e.Shoes[N].title),o.a.createElement("p",null,e.Shoes[N].content),o.a.createElement("p",null,e.Shoes[N].price),o.a.createElement(T,{Inventory:e.Inventory}),o.a.createElement(k,{className:"btn btn-danger",onClick:function(){e.setInventory([9,10,11]),e.dispatch({type:"add",data:{id:e.Shoes[N].id,name:e.Shoes[N].title,quantity:1}}),h.push("/cart")}},"\uc8fc\ubb38\ud558\uae30"),o.a.createElement("button",{className:"btn btn-danger",onClick:function(){h.goBack()}},"\ub4a4\ub85c\uac00\uae30"))),o.a.createElement(i.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0"},o.a.createElement(i.a.Item,null,o.a.createElement(i.a.Link,{eventKey:"link-0",onClick:function(){b(!1),f(0)}},"\uc0c1\uc138\uc815\ubcf4")),o.a.createElement(i.a.Item,null,o.a.createElement(i.a.Link,{eventKey:"link-1",onClick:function(){b(!1),f(1)}},"\ubc18\ud488/\uad50\ud658\uc815\ubcf4"))),o.a.createElement(g,{in:v,classNames:"wow",timeout:500},o.a.createElement(S,{Tab:m,setSwitch:b})))}))}}]);
//# sourceMappingURL=3.0f5cb3b7.chunk.js.map