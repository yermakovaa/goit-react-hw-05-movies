(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},20:function(e,t,c){e.exports={wrapper:"ErrorView_wrapper__KqLZh",text:"ErrorView_text__34gFF"}},21:function(e,t,c){e.exports={container:"Container_container__2JXpR"}},23:function(e,t,c){},26:function(e,t,c){e.exports={overlay:"LoaderComponent_overlay__2iH7v"}},27:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),i=c(11),s=c.n(i),o=c(6),j=c(4),l=c(14),u=c(21),b=c.n(u);var O=function(e){var t=e.children;return Object(n.jsx)("div",{className:b.a.container,children:t})},h=c(12),d=c.n(h),x=function(){return Object(n.jsxs)("nav",{children:[Object(n.jsx)(o.c,{exact:!0,to:"/goit-react-hw-04-movies",className:d.a.link,activeClassName:d.a.activeLink,children:"Home"}),Object(n.jsx)(o.c,{to:"/goit-react-hw-04-movies/movies",className:d.a.link,activeClassName:d.a.activeLink,children:"Movies"})]})},m=c(23),E=c.n(m);function v(){return Object(n.jsx)("header",{className:E.a.header,children:Object(n.jsx)(x,{})})}var f=c(3),p=c(19),g=c.n(p),D=c(24),S="https://api.themoviedb.org/3",w="6914e86918040074e2fe382ba8e8cb5e";function N(){return R.apply(this,arguments)}function R(){return(R=Object(D.a)(g.a.mark((function e(){var t,c,n,a=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",c=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,c);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},y=c(25),_=c.n(y),C=(c(61),c(26)),I=c.n(C);var T=function(){return Object(n.jsx)("div",{className:I.a.overlay,children:Object(n.jsx)(_.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})})},k=c.p+"static/media/oops.72ac764a.jpg",J=c(20),V=c.n(J);var F=function(e){var t=e.message;return Object(n.jsxs)("div",{role:"alert",className:V.a.wrapper,children:[Object(n.jsx)("img",{src:k,width:"550",alt:"sadcat"}),Object(n.jsx)("p",{text:t,className:V.a.text,children:t})]})},P=c(27),G=c.n(P);var H=function(){var e=Object(j.g)().url,t=Object(a.useState)(null),c=Object(f.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(null),l=Object(f.a)(s,2),u=l[0],b=l[1],O=Object(a.useState)(L.IDLE),h=Object(f.a)(O,2),d=h[0],x=h[1];return Object(a.useEffect)((function(){x(L.PENDING),N("".concat(S,"/trending/movie/day?api_key=").concat(w)).then((function(e){var t=e.results;i(t),x(L.RESOLVED)})).catch((function(e){console.log(e),b("Something went wrong. Try again."),x(L.REJECTED)}))}),[]),Object(n.jsxs)("main",{children:[Object(n.jsx)("h1",{className:G.a.title,children:"Trending today"}),d===L.PENDING&&Object(n.jsx)(T,{}),d===L.REJECTED&&Object(n.jsx)(F,{message:u.message}),d===L.RESOLVED&&Object(n.jsx)("ul",{children:r.map((function(t){return Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"".concat(e,"/movies/").concat(t.id),children:t.title})},t.id)}))})]})},q=(c(62),c(13)),B=c.n(q);var M=function(e){var t=e.onHandleSubmit,c=Object(a.useState)(""),r=Object(f.a)(c,2),i=r[0],s=r[1];return Object(n.jsxs)("form",{className:B.a.form,onSubmit:function(e){if(e.preventDefault(),""===i.trim())return l.b.info("\ud83d\ude31 Please enter a value for search movies!");t(i),s("")},children:[Object(n.jsx)("input",{className:B.a.input,type:"text",value:i,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target;return s(t.value)}}),Object(n.jsx)("button",{type:"submit",className:B.a.btn,children:Object(n.jsx)("span",{className:B.a.label,children:"Search"})})]})};var A=function(){var e=Object(j.g)().url,t=Object(a.useState)(""),c=Object(f.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(null),l=Object(f.a)(s,2),u=l[0],b=l[1],O=Object(a.useState)(null),h=Object(f.a)(O,2),d=h[0],x=h[1],m=Object(a.useState)(L.IDLE),E=Object(f.a)(m,2),v=E[0],p=E[1];return Object(a.useEffect)((function(){r&&(p(L.PENDING),function(e){return N("".concat(S,"/search/movie?api_key=").concat(w,"&query=").concat(e))}(r).then((function(e){var t=e.results;if(0===t.length)return x("No results were found for ".concat(r,"!")),void p(L.REJECTED);b(t),p(L.RESOLVED)})).catch((function(e){console.log(e),x("Something went wrong. Try again."),p(L.REJECTED)})))}),[r]),Object(n.jsxs)("main",{children:[Object(n.jsx)(M,{onHandleSubmit:function(e){i(e),b(null),x(null),p(L.IDLE)}}),v===L.PENDING&&Object(n.jsx)(T,{}),v===L.REJECTED&&Object(n.jsx)(F,{message:d}),v===L.RESOLVED&&Object(n.jsx)("ul",{children:u.map((function(t){return Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"".concat(e,"/").concat(t.id),children:t.title})},t.id)}))})]})};var K=function(){var e=Object(j.f)().movieId,t=Object(a.useState)(null),c=Object(f.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(null),o=Object(f.a)(s,2),l=o[0],u=o[1],b=Object(a.useState)(L.IDLE),O=Object(f.a)(b,2),h=O[0],d=O[1];return Object(a.useEffect)((function(){(function(e){return N("".concat(S,"/movie/").concat(e,"/credits?api_key=").concat(w))})(e).then((function(e){var t=e.cast;i(t),d(L.RESOLVED)})).catch((function(e){console.log(e),u("Something went wrong. Try again."),d(L.REJECTED)}))}),[e]),Object(n.jsxs)(n.Fragment,{children:[h===L.PENDING&&Object(n.jsx)(T,{}),h===L.REJECTED&&Object(n.jsx)(F,{message:l}),h===L.RESOLVED&&Object(n.jsx)("ul",{children:r.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.original_name}),Object(n.jsx)("h4",{children:e.original_name}),Object(n.jsx)("p",{children:e.character})]},e.id)}))})]})};var U=function(){var e=Object(j.f)().movieId,t=Object(a.useState)(null),c=Object(f.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(null),o=Object(f.a)(s,2),l=o[0],u=o[1],b=Object(a.useState)(L.IDLE),O=Object(f.a)(b,2),h=O[0],d=O[1];return Object(a.useEffect)((function(){(function(e){return N("".concat(S,"/movie/").concat(e,"/reviews?api_key=").concat(w))})(e).then((function(e){var t=e.results;i(t),d(L.RESOLVED)})).catch((function(e){console.log(e),u("Something went wrong. Try again."),d(L.REJECTED)}))}),[e]),Object(n.jsxs)(n.Fragment,{children:[h===L.PENDING&&Object(n.jsx)(T,{}),h===L.REJECTED&&Object(n.jsx)(F,{message:l}),h===L.RESOLVED&&Object(n.jsx)("ul",{children:r.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("h4",{children:["Author: ",e.author]}),Object(n.jsx)("p",{children:e.content})]},e.id)}))})]})};var X=function(){var e=Object(j.f)().movieId,t=Object(j.g)(),c=t.url,r=t.path,i=Object(a.useState)(null),s=Object(f.a)(i,2),l=s[0],u=s[1],b=Object(a.useState)(null),O=Object(f.a)(b,2),h=O[0],d=O[1],x=Object(a.useState)(L.IDLE),m=Object(f.a)(x,2),E=m[0],v=m[1];return Object(a.useEffect)((function(){(function(e){return N("".concat(S,"/movie/").concat(e,"?api_key=").concat(w))})(e).then((function(e){var t=e.poster_path,c=e.original_title,n=e.popularity,a=e.overview,r=e.genres;u({src:"https://image.tmdb.org/t/p/w500/".concat(t),title:c,score:n.toFixed(0),overview:a,genres:r}),v(L.RESOLVED)})).catch((function(e){console.log(e),d("Something went wrong. Try again."),v(L.REJECTED)}))}),[e]),Object(n.jsxs)("main",{children:[E===L.PENDING&&Object(n.jsx)(T,{}),E===L.REJECTED&&Object(n.jsx)(F,{message:h}),E===L.RESOLVED&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:l.src,alt:l.title}),Object(n.jsx)("h2",{children:l.title}),Object(n.jsxs)("p",{children:["User Score: ",l.score," %"]}),Object(n.jsx)("h3",{children:"Overview"}),Object(n.jsx)("p",{children:l.overview}),Object(n.jsx)("h3",{children:"Genres"}),Object(n.jsx)("ul",{children:l.genres.map((function(e){return Object(n.jsx)("li",{children:e.name},e.id)}))}),Object(n.jsx)("hr",{}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.c,{to:"".concat(c,"/cast"),children:"Cast"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.c,{to:"".concat(c,"/reviews"),children:"Reviews"})})]}),Object(n.jsx)(j.a,{path:"".concat(r,"/cast"),children:E===L.RESOLVED&&Object(n.jsx)(K,{})}),Object(n.jsx)(j.a,{path:"".concat(r,"/reviews"),children:E===L.RESOLVED&&Object(n.jsx)(U,{})})]})]})};var Z=function(){return Object(n.jsxs)(O,{children:[Object(n.jsx)(v,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/goit-react-hw-04-movies",exact:!0,children:Object(n.jsx)(H,{})}),Object(n.jsx)(j.a,{path:"/goit-react-hw-04-movies/movies",exact:!0,children:Object(n.jsx)(A,{})}),Object(n.jsx)(j.a,{path:"/goit-react-hw-04-movies/movies/:movieId",children:Object(n.jsx)(X,{})})]}),Object(n.jsx)(l.a,{autoClose:3700})]})};c(63);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(Z,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.98bdfbd9.chunk.js.map