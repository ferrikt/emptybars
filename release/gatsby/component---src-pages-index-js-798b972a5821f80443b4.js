(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return s}));var n=r("q1tI"),o=r.n(n),i=r("Wbzz"),a=r("Bl7J"),c=r("vrFN");t.default=function(e){var t=e.data,r={};t.composers.nodes.forEach((function(e){!function(e,t){e[t.relativeDirectory]={name:t.fields.content,compositions:{}}}(r,e)})),t.compositions.nodes.forEach((function(e){!function(e,t){var r=t.relativeDirectory.split("/")[0],n=t.relativeDirectory.split("/")[1];e[r].compositions[n]={name:t.fields.content,performers:{}}}(r,e)})),t.performers.nodes.forEach((function(e){!function(e,t){var r=t.relativeDirectory.split("/")[0],n=t.relativeDirectory.split("/")[1],o=t.relativeDirectory.split("/")[2];e[r].compositions[n].performers[o]={name:t.fields.content}}(r,e)}));var n=t.composers.nodes.map((function(e){return e.relativeDirectory}));n.sort();var s=function(e,t){var n=Object.keys(r[e].compositions[t].performers);return n.sort(),o.a.createElement("li",{key:t},r[e].compositions[t].name,o.a.createElement("ul",null,n.map((function(n){return function(e,t,n){return o.a.createElement("li",{key:n},o.a.createElement(i.Link,{to:e+"/"+t+"/"+n},"performed by ",r[e].compositions[t].performers[n].name))}(e,t,n)}))))};return o.a.createElement(a.a,{composition:"EmptyBars.org"},o.a.createElement(c.a,{title:"Home"}),o.a.createElement("ul",null,n.map((function(e){var t=Object.keys(r[e].compositions);return t.sort(),o.a.createElement("li",{key:e},r[e].name,o.a.createElement("ul",null,t.map((function(t){return s(e,t)}))))}))))};var s="1924051148"}}]);
//# sourceMappingURL=component---src-pages-index-js-798b972a5821f80443b4.js.map