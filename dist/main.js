!function(e){var t={};function n(u){if(t[u])return t[u].exports;var i=t[u]={i:u,l:!1,exports:{}};return e[u].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,u){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:u})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(u,i,function(t){return e[t]}.bind(null,i));return u},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){let e,t,n,u,i,o,r,s;function a(){s=document.getElementById("titlehead"),e=document.getElementById("makebtn"),t=document.getElementById("copybtn"),n=document.getElementById("wordcount"),u=document.getElementById("blurb"),i=document.getElementById("blurbcopy"),e.addEventListener("click",l,!1),t.addEventListener("click",m,!1),(r=document.getElementById("sonnetbtn")).addEventListener("click",p,!1),c(n.value),document.removeEventListener("DOMContentLoaded",a)}function l(){s.innerHTML="The Nonsense You Requested",c(n.value)}function c(e){let t=d.getLorem(e);u.innerHTML=t.blurb,0===Number(e)&&(n.value=t.count),i.value=t.blurb.split("<br>").join("\n")}function m(){i.select(),document.execCommand("copy"),alert("Your text is in the clipboard. You may now paste it into your layout.")}const d=function(){let e=["a","ac","accumsan","aenean","aliquam","aliquet","amet","ante","arcu","at","auctor","augue","bibendum","commodo","condimentum","congue","consectetur","consequat","convallis","cras","curabitur","cursus","dapibus","diam","dictum","dignissim","dis","dolor","donec","dui","duis","efficitur","egestas","eget","eleifend","elementum","elit","enim","erat","eros","est","et","etiam","eu","euismod","ex","facilisi","facilisis","fames","faucibus","felis","fermentum","feugiat","finibus","fringilla","fusce","habitant","hendrerit","id","illegitimi","imperdiet","in","integer","ipsum","justo","lacinia","lacus","laoreet","lectus","leo","libero","ligula","lobortis","lorem","luctus","maecenas","magna","magnis","malesuada","mattis","mauris","maximus","mentus","metus","mi","molestie","mollis","montes","morbi","mus","nam","nascetur","natoque","nec","neque","netus","nibh","nisi","nisl","non","noncompis","nulla","nullam","nunc","odio","orci","ornare","parturient","pellentesque","penatibus","phasellus","placerat","porta","porttitor","posuere","pretium","proin","pulvinar","purus","quam","quis","quisque","rhoncus","ridiculus","risus","rutrum","sagittis","sapien","scelerisque","sed","semper","senectus","sit","sodales","sollicitudin","stupido","suscipit","suspendisse","tellus","tempus","tincidunt","tortor","tristique","turpis","ullamcorper","ultrices","ultricies","urna","ut","varius","vehicula","vel","velit","venenatis","vestibulum","vitae","vivamus","viverra","volutpat","vulputate"];return{getLorem:function(t=0){t=Number(t);let n=[],u=e.length;t=t>0?t:f(30,u-1);for(let i=0;i<t;i++){let t=e[f(0,u-1)];n.push(t)}for(let e=0;e<t;e++)e%10==0&&(n[e]=n[e].substring(0,1).toUpperCase()+n[e].substring(1),e>=150&&e%150==0&&(n[e]="<br><br>"+n[e])),e%10!=9&&e!==t-1||(n[e]=n[e]+".");return{blurb:n.join(" "),count:t}}}}();function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}function p(){s.innerHTML="The Shakespeare Sonnet You Requested";let e=f(0,o.length-1),t=o[e].join(" ")+" (Sonnet #"+(e+1)+")";u.innerHTML=t,i.value=t}document.addEventListener("DOMContentLoaded",function(e){try{a(),fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/652/sonnets.json").then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){!function(e){o=[];for(let t=0;t<e.length;t++)o[t]=e[t].lines.slice();r.style.display="inline"}(e)}).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})}catch(e){console.log("Data didn't load",e)}})}()}]);