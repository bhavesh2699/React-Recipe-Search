(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"Recipe_recipe__1EHEa",image:"Recipe_image__3rtav"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),l=(a(12),a(2)),s=a.n(l),u=a(6),m=a(1),p=a(3),o=a.n(p),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:o.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,c.a.createElement("b",null,"calories: ",a)),c.a.createElement("img",{className:o.a.image,src:n,alt:t}))},E=(a(14),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),l=Object(m.a)(i,2),p=l[0],o=l[1],E=Object(n.useState)("chicken"),b=Object(m.a)(E,2),d=b[0],h=b[1];Object(n.useEffect)((function(){document.title="Recipe search",v()}),[d]);var v=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("ef399f99","&app_key=").concat("7b58dcf7fd0d292afccffd94912fc6fa"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Recipe Finder"),c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),h(p),o("")}},c.a.createElement("input",{className:"search-bar",type:"text",value:p,onChange:function(e){o(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.0bea3191.chunk.js.map