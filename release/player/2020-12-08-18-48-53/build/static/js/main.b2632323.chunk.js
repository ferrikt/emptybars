(this.webpackJsonpreactplayer=this.webpackJsonpreactplayer||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),l=a(2),o=a(11),s=a(12),u=a(17),d=a(15),p=a(13),m=a.n(p),f=a(5),h=(a(41),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={progress:-1,duration:-1,gotoAfterStopSec:-1,endSec:-1,playing:!1,playbackSpeed:100,showControls:!1},n.$player=r.a.createRef(),n}return Object(s.a)(a,[{key:"_handleDuration",value:function(e){this.setState({duration:e})}},{key:"_stopAndReturn",value:function(){var e=this.state.gotoAfterStopSec;this.setState({endSec:-1,gotoAfterStopSec:-1,playing:!1}),this.$player.current.seekTo(e,"seconds")}},{key:"_handleProgress",value:function(e){var t=e.playedSeconds;this.state.endSec>0&&t>this.state.endSec&&this._stopAndReturn(),this.setState({progress:t}),this.props.onProgressUpdate(t)}},{key:"_handleOnPlay",value:function(){this.state.playing||this.setState({playing:!0,endSec:-1,gotoAfterStopSec:-1})}},{key:"_handleOnStart",value:function(){this.setState({showControls:!0}),this.props.onPlay()}},{key:"_handleStop",value:function(){this.setState({playing:!1}),this.props.onStop()}},{key:"_handleOnSelect",value:function(e){this.setState({playbackSpeed:e.target.value})}},{key:"playSection",value:function(e,t,a){this.$player.current.seekTo(e,"seconds"),this.setState({gotoAfterStopSec:Math.max("STAY_AT_END"===a?t:e,0),endSec:Math.max(t,.01),playing:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"playWithNavButtons"},r.a.createElement(m.a,{ref:this.$player,url:this.props.videoUrl,width:"100%",height:"100%",onDuration:this._handleDuration.bind(this),onProgress:this._handleProgress.bind(this),onPlay:this._handleOnPlay.bind(this),onStart:this._handleOnStart.bind(this),progressInterval:100,onPause:this._handleStop.bind(this),onEnded:this._handleStop.bind(this),playbackRate:this.state.playbackSpeed/100,playing:this.state.playing,controls:!0,config:{youtube:{playerVars:{origin:window.location.origin}}}}),this.state.showControls?r.a.createElement("div",{className:"positionAndControls"},"Current position: ",r.a.createElement("span",{className:"position"},Object(f.a)(this.state.progress)),r.a.createElement("br",null),"Playback speed:",r.a.createElement("select",{value:this.state.playbackSpeed,onChange:this._handleOnSelect.bind(this)},[25,50,60,70,80,90,100,125,150,200].map((function(e){return r.a.createElement("option",{key:"option".concat(e),value:e},e,"%")})))):"")}}]),a}(r.a.Component)),g=a(16);a(42);var v=function(e){var t=e.sections,a=e.playInterval,n=e.activeSections,i=e.playInput,c=e.setPlayInput,o=function(e){c(e.target.value)},s=function(e){o({target:{value:e+1+":"+(e+1)}}),a(t[e].startSec,t[e].endSec)},u=function(e){var a=(e=e.split("-").join("+-")).split("+"),n=parseInt(a[0]);if(n!=a[0])return[!1,!1];if(n<=0||n>t.length)return console.error("Section "+n+" is out of range. Max="+t.length),[!1,!1];if(1==a.length)return[n,0];if(2==a.length){var r=a[1].split("s").join("").trim();return function(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}(r)?[n,parseFloat(r)]:(console.error(r+" is not a number"),[!1,!1])}return[!1,!1]},d=function(){var e=i.replace(" ","").split(":");if(2!=e.length)return!1;var t=e[0],a=e[1],n=u(t),r=Object(l.a)(n,2),c=r[0],o=r[1];if(!c)return!1;var s=u(a),d=Object(l.a)(s,2),p=d[0],m=d[1];return!!p&&[c,o,p,m]},p=function(e){var t=d();if(t){var a=Object(l.a)(t,4),n=a[0],r=(a[1],a[2]);a[3];return n<=e+1&&r>=e+1}return!1};return r.a.createElement("div",{className:"sections"},r.a.createElement("div",null,"Sections:"),r.a.createElement("div",{className:"scrolling"},t.map((function(e,t){e.startSec,e.endSec;return r.a.createElement("div",{tabIndex:0,className:"button ".concat(n.indexOf(t)>=0?"active":""," ").concat(p(t)?"inPlayInput":""),key:t,onClick:s.bind(null,t)},"#",t+1)}))),r.a.createElement("div",{className:"playSectionsSection"},"Play sections: ",r.a.createElement("input",{onChange:o,value:i,className:d()?"":"errorInput"}),r.a.createElement(g.a,{id:"formats"},r.a.createElement("div",null,r.a.createElement("div",null,"Allowed formats:",r.a.createElement("ul",{className:"allowedFormats"},r.a.createElement("li",null,r.a.createElement("span",null,"1:1")," - play section 1 "),r.a.createElement("li",null,r.a.createElement("span",null,"1:3")," - play sections 1, 2 and 3"),r.a.createElement("li",null,r.a.createElement("span",null,"1-10s:2+15.2s")," - play sections 1 and 2, ",r.a.createElement("br",null),"but start 10 seconds earlier and finish 15.2 seconds later"))))),"\xa0 ",r.a.createElement("img",{src:"https://images2.imgbox.com/02/01/VzjEL9yb_o.png?download=true",align:"center","data-tip":!0,"data-for":"formats"})),d()?r.a.createElement("button",{onClick:function(){var e=d(),n=Object(l.a)(e,4),r=n[0],i=n[1],c=n[2],o=n[3];a(t[r-1].startSec+i,t[c-1].endSec+o)}},"Play"):"")};a(43);var S=function(e){var t,a,i=e.title,c=e.image,o=e.width,s=e.areas,u=e.onImageClicked,d=Object(n.useRef)(null);c&&c.width&&c.height?(t=1*o/c.width,a=parseInt(c.height*t)):(t=-1,a=-1);var p=function(){if(c&&c.width&&c.height&&d&&d.current){var e=d.current.getContext("2d");e.drawImage(c,0,0,c.width,c.height,0,0,o,a),s.forEach((function(a,n){e.fillStyle="rgba(255, 255, 0, 0.5)",e.fillRect(a.x*t,a.y*t,a.width*t,a.height*t)}))}};return Object(n.useEffect)((function(){p()})),c&&c.width&&c.height?(p(),r.a.createElement("div",{className:"imageAreas"},r.a.createElement("div",{className:"canvas"},r.a.createElement("div",{className:"title"},i),r.a.createElement("canvas",{width:o,height:a,ref:d,onClick:function(e){var a=function(e,t){var a=e.getBoundingClientRect();return[t.clientX-a.left,t.clientY-a.top]}(d.current,e),n=Object(l.a)(a,2),r=n[0],i=n[1];u(r/t,i/t)}})))):r.a.createElement("div",{className:"imageAreas"},r.a.createElement("div",{className:"canvas"},r.a.createElement("div",{className:"title"},i),r.a.createElement("div",null,"Error loading")))};a(44);var b=function(e){var t=this,a=e.images,i=e.pages,c=e.sectionPageAreas,o=e.skipScrollingFromTime,s=e.onPageClicked,u=Object(n.useState)(1),d=Object(l.a)(u,2),p=d[0],m=d[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),g=h[0],v=h[1],b=Object(n.useRef)(),y=function(){for(var e=0;e<b.current.childNodes.length;e++)if("scrollArea"==b.current.childNodes[e].className)return b.current.childNodes[e];throw"Cannot find scrollArea"},E=function(){return parseInt(500*p*297/210+20)},O=function(){return o&&(new Date).getTime()-o<2e3},N=function(){var e=JSON.stringify(c);if(g!=e&&b.current){var t=!0,a=function(){for(var e=-1,t=0;t<i.length;t++){var a=i[t].id;if(c[a]&&c[a].length){e=t;break}}return e}();if(a>=0){var n=function(e){for(var t=y(),a=0,n=0;n<t.childNodes.length;n++)if("page"==t.childNodes[n].className){if(a==e)return t.childNodes[n];a++}throw"cannot find page "+e}(a);O()||(b.current.scrollTop=n.offsetTop-y().offsetTop),0==n.offsetTop&&(t=!1),!O()&&Object.keys(c).length>1&&(b.current.scrollTop+=parseInt(E()/2))}t&&v(e)}};Object(n.useEffect)(N,[]),N();var j={height:E()+"px",width:parseInt(500*p+20)+"px"};return r.a.createElement("div",null,r.a.createElement("div",{className:"sectionPages",ref:b,style:j},r.a.createElement("div",{className:"zoom"},r.a.createElement("img",{src:"https://images2.imgbox.com/22/21/4gO3I6ii_o.png?download=true",width:"32",onClick:function(){m(p+.1)}}),r.a.createElement("img",{src:"https://images2.imgbox.com/1b/b2/L4tgMq2a_o.png?download=true",width:"32",onClick:function(){m(p-.1)}}),r.a.createElement("img",{src:"https://images2.imgbox.com/f3/d5/paRxNKm0_o.png?download=true",width:"32",onClick:function(){m(1)}})),r.a.createElement("div",{className:"scrollArea"},i.map((function(e,n){return r.a.createElement("div",{className:"page",key:"sectionpage"+n},r.a.createElement(S,{title:"Page #".concat(n+1),image:a[n],onImageClicked:function(e,t){return function(e,t,a){var n=i[e].id;s(n,t,a)}(n,e,t)}.bind(t),width:parseInt(500*p),areas:c[e.id]||[]}))})))))};a(45);var y=function(e){var t=e.sections,a=e.images,i=e.pages,c=e.videoUrl,o=Object(n.useState)([]),s=Object(l.a)(o,2),u=s[0],d=s[1],p=Object(n.useState)(!1),m=Object(l.a)(p,2),f=m[0],g=m[1],S=Object(n.useState)(!1),y=Object(l.a)(S,2),E=y[0],O=y[1],N=Object(n.useState)(!1),j=Object(l.a)(N,2),k=j[0],w=j[1],I=Object(n.useState)(0),P=Object(l.a)(I,2),A=(P[0],P[1]),C=Object(n.useState)(""),x=Object(l.a)(C,2),_=x[0],M=x[1],T=Object(n.useRef)(null),R=function(e,t){T.current.playSection(e,t)},D=function(e){var a=[];t.forEach((function(t,n){t.startSec<=e&&t.endSec>=e&&a.push(n)})),d(a)},J=function(e,t,a){for(var n=0;n<e.length;n++){var r=e[n],i=r.x,c=r.y,l=i+r.width,o=c+r.height;if(t>Math.min(i,l)&&t<Math.max(i,l)&&a>Math.min(c,o)&&a<Math.max(c,o))return!0}return!1};return r.a.createElement("div",{className:f?"player":"player notInitialised"},r.a.createElement("div",{className:"sectionPagesWrapper"},r.a.createElement(b,{images:a,pages:i||[],onPageClicked:function(e,a,n){for(var r=0;r<t.length;r++){var i=t[r];if(J(i.pageAreas[e]||[],a,n))return M(r+1+":"+(r+1)),w(!0),O((new Date).getTime()),D(i.startSec),void R(i.startSec,i.endSec)}},skipScrollingFromTime:E,sectionPageAreas:function(){var e={};return u.forEach((function(a){for(var n in t[a].pageAreas){var r=t[a].pageAreas[n];e[n]?e[n]=e[n].concat(r):e[n]=r}})),e}()})),r.a.createElement("div",{className:"playerAndSections"},r.a.createElement(h,{videoUrl:c,onProgressUpdate:function(e){A(parseFloat(e.toFixed(1))),k&&(O((new Date).getTime()),w(!1)),D(e)},ref:T,onPlay:function(){g(!0)},onStop:function(){O(!1),w(!1)}}),r.a.createElement(v,{sections:t,playInterval:R,activeSections:u,playInput:_,setPlayInput:M})))},E=a(14),O=function(e){var t=e.imageUrls,a=e.onImagesLoaded,i=Object(n.useState)(new Array(t.length).fill(0)),c=Object(l.a)(i,2),o=c[0],s=c[1];Object(n.useEffect)((function(){var e=new Array(t.length).fill(0),n=setInterval((function(){for(var t=parseInt(3*Math.random()),a=0;a<e.length;a++)e[a]+=t,e[a]>50&&(e[a]-=parseInt(t/2)),e[a]>100&&(e[a]=100);s(JSON.parse(JSON.stringify(e)))}),500),r=0,i=function(i){e[i]=100,s(JSON.parse(JSON.stringify(e))),(r+=1)>=t.length&&(a(c),clearInterval(n))},c=t.map((function(e,t){var a=new Image;return a.src=e,a.onload=function(){i(t)},a.onerror=function(e){console.error(e),i(t)},a}))}),[]);return r.a.createElement("div",null,"Loading ",function(){var e=parseInt(o.reduce((function(e,t){return e+t}),0)/Math.max(0,o.length));return parseInt(o.reduce((function(e,t){return e+t}),0)/Math.max(0,o.length))+"%"+(100==e?"...":"")}())},N=(a(46),function(e){var t=e.onDataProvided,a=Object(n.useRef)(null);return r.a.createElement("div",{class:"dataProvider"},r.a.createElement("h2",null,"Paste segments data to play:"),r.a.createElement("div",null,r.a.createElement("textarea",{ref:a,placeholder:"Paste segments data to play here"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){t(JSON.parse(a.current.value))}},"Play")))});Object(E.a)((function(e,t){var a=function(e,t){c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,{imageUrls:t.pages.map((function(e){return e.url})),onImagesLoaded:function(a){return c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,Object.assign({images:a},Object(f.b)(t)))),e)}})),e)};t.videoUrl?a(e,t):c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,{onDataProvided:function(t){return a(e,t)}})),e)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b2632323.chunk.js.map