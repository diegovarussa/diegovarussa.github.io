(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a06":function(e,t,n){"use strict";var r=n("c532"),s=n("30b5"),i=n("f6b4"),a=n("5270"),o=n("4a7b");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=o(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=o(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(o(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(o(r||{},{method:e,url:t,data:n}))}})),e.exports=c},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),s=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var c={adapter:o(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n("4362"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,s,i){var a=new Error(e);return r(a,t,n,s,i)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(s(t)+"="+s(e))})))})),i=a.join("&")}if(i){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function s(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=s(window.location.href),function(t){var n=r.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var s=n.config.validateStatus;n.status&&s&&!s(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},s=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],o=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(s){r.isUndefined(t[s])?r.isUndefined(e[s])||(n[s]=c(void 0,e[s])):n[s]=c(e[s],t[s])}r.forEach(s,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(i,u),r.forEach(a,(function(s){r.isUndefined(t[s])?r.isUndefined(e[s])||(n[s]=c(void 0,e[s])):n[s]=c(void 0,t[s])})),r.forEach(o,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=s.concat(i).concat(a).concat(o),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},5232:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("h1",{staticClass:"title"},[e._v("RetroAchievements")]),n("b-field",{attrs:{grouped:""}},[n("b-field",{attrs:{label:"Username",expanded:""}},[n("b-input",{model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("b-field",{attrs:{label:"API Key",expanded:""}},[n("b-input",{attrs:{type:"password","password-reveal":""},model:{value:e.apiKey,callback:function(t){e.apiKey=t},expression:"apiKey"}})],1),n("b-field",{attrs:{label:"‎"}},[n("button",{staticClass:"button is-dark",on:{click:e.onLogin}},[e._v("Login")])])],1),e.userSummary.ID?n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-quarter"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("b-image",{attrs:{alt:"Player Picture",src:"https://retroachievements.org"+e.userSummary.UserPic,responsive:!0,rounded:!0}})],1),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[e._v(e._s(e.username))]),n("p",{staticClass:"subtitle is-6"},[n("em",[e._v("Member Since: "+e._s(e.userSummary.MemberSince))])])])]),n("div",{staticClass:"content"},[n("div",[n("strong",[e._v("Rank: ")]),e._v(e._s(e.userSummary.Rank))]),n("div",[n("strong",[e._v("Points: ")]),e._v(e._s(e.userSummary.Points))]),n("div",[n("strong",[e._v("True Points: ")]),e._v(e._s(e.userSummary.TotalTruePoints)+" ")]),n("div",[n("strong",[e._v("Total Awards: ")]),e._v(e._s(Object.keys(e.userSummary.Awarded).length)+" ")])])])])]),n("div",{staticClass:"column"},[n("b-autocomplete",{attrs:{"open-on-focus":"",data:e.filteredRecentlyPlayed,field:"Title",placeholder:"Search in your recently played games",icon:"magnify"},on:{select:e.onSelectGame},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.option.Title)+" ")]}}],null,!1,18734740),model:{value:e.gameName,callback:function(t){e.gameName=t},expression:"gameName"}}),n("hr"),e.selectedGame.ID?n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("div",{staticClass:"columns has-text-centered"},[n("div",{staticClass:"column"},[n("b-image",{attrs:{alt:"Player Picture",src:"https://retroachievements.org"+e.selectedGame.ImageBoxArt,responsive:!1}})],1),n("div",{staticClass:"column"},[n("b-image",{attrs:{alt:"Player Picture",src:"https://retroachievements.org"+e.selectedGame.ImageIngame,responsive:!1}})],1),n("div",{staticClass:"column"},[n("b-image",{attrs:{alt:"Player Picture",src:"https://retroachievements.org"+e.selectedGame.ImageTitle,responsive:!1}})],1)])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("b-tooltip",{attrs:{type:"is-dark"},scopedSlots:e._u([{key:"content",fn:function(){return[e._v(" ID: "+e._s(e.selectedGame.ID)+" ")]},proxy:!0}],null,!1,3108121962)},[n("p",{staticClass:"title is-4"},[e._v(e._s(e.selectedGame.Title))])]),n("p",{staticClass:"subtitle is-6"},[n("em",[e._v("Release Data: "+e._s(e.selectedGame.Released))])])],1)]),n("div",{staticClass:"content"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",[n("strong",[e._v("Console Name: ")]),e._v(e._s(e.selectedGame.ConsoleName)+" ")]),n("div",[n("strong",[e._v("Developer: ")]),e._v(e._s(e.selectedGame.Developer)+" ")]),n("div",[n("strong",[e._v("Genre: ")]),e._v(e._s(e.selectedGame.Genre))])]),n("div",{staticClass:"column"},[n("div",[n("strong",[e._v("Total Achievements: ")]),e._v(e._s(e.selectedGame.NumAchievements)+" ")]),n("div",[n("strong",[e._v("Total Casual Players: ")]),e._v(e._s(e.selectedGame.NumDistinctPlayersCasual)+" ")]),n("div",[n("strong",[e._v("Total Hardcore Players: ")]),e._v(e._s(e.selectedGame.NumDistinctPlayersHardcore)+" ")])])])])])]):e._e()],1)]):e._e(),e.selectedGame.Achievements?n("b-field",{attrs:{grouped:"","group-multiline":"",position:"is-centered"}},[n("p",{staticClass:"control"},[n("b-radio",{attrs:{"native-value":0,type:"is-dark"},model:{value:e.achievementsFilter,callback:function(t){e.achievementsFilter=t},expression:"achievementsFilter"}},[n("span",[e._v("All")])])],1),n("p",{staticClass:"control"},[n("b-radio",{attrs:{"native-value":1,type:"is-dark"},model:{value:e.achievementsFilter,callback:function(t){e.achievementsFilter=t},expression:"achievementsFilter"}},[n("span",[e._v("I have")])])],1),n("p",{staticClass:"control"},[n("b-radio",{attrs:{"native-value":2,type:"is-dark"},model:{value:e.achievementsFilter,callback:function(t){e.achievementsFilter=t},expression:"achievementsFilter"}},[n("span",[e._v("I don't have")])])],1),n("b-input",{attrs:{placeholder:"Custom Filter (Contains)",type:"search",icon:"magnify-plus"},model:{value:e.achievementsFilterStringContains,callback:function(t){e.achievementsFilterStringContains=t},expression:"achievementsFilterStringContains"}}),n("b-input",{attrs:{placeholder:"Custom Filter (Not Contains)",type:"search",icon:"magnify-minus"},model:{value:e.achievementsFilterStringNotContains,callback:function(t){e.achievementsFilterStringNotContains=t},expression:"achievementsFilterStringNotContains"}}),n("p",{staticClass:"control"},[n("b-tag",{attrs:{rounded:"",type:"is-dark",size:"is-medium"}},[e._v("Total: "+e._s(e.filteredAchievements.length))])],1)],1):e._e(),e.selectedGame.Achievements?n("div",{staticClass:"columns is-multiline"},e._l(e.filteredAchievements,(function(t,r){return n("div",{key:r,staticClass:"column is-one-quarter"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"}),n("div",{staticClass:"card-content"},[n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column is-4 has-text-centered"},[n("b-image",{attrs:{alt:"Player Picture",src:"https://s3-eu-west-1.amazonaws.com/i.retroachievements.org/Badge/"+t.BadgeName+(t.DateEarned?"":"_lock")+".png",responsive:!1,rounded:!0}})],1),n("div",{staticClass:"column"},[n("span",{staticClass:"title is-5"},[e._v(e._s(t.Title))])])]),n("div",{staticClass:"content"},[e._v(" "+e._s(t.Description)+" ")])])])])})),0):e._e()],1)},s=[],i=n("bc3a"),a=n.n(i),o={name:"RetroAchievements",data(){return{username:"",apiKey:"",userSummary:{},gameName:"",selectedGame:{},achievementsFilter:0,achievementsFilterStringContains:"",achievementsFilterStringNotContains:""}},methods:{async fetchData(e){let t=this.$buefy.loading.open(),n=!1;try{const t=await a.a.get("https://retroachievements.org/API/"+e);n=t.data,("string"===typeof n||n instanceof String)&&this.$buefy.toast.open({message:"Erro: "+n,type:"is-danger"})}catch(r){this.$buefy.toast.open({message:r,type:"is-danger"}),console.error(r)}return t.close(),n},async onLogin(){this.userSummary=await this.fetchData(`API_GetUserSummary.php?z=${this.username}&y=${this.apiKey}&u=${this.username}&g=50&a=100`),this.userSummary&&(localStorage.setItem("RetroAchievements.Username",this.username),localStorage.setItem("RetroAchievements.ApiKey",this.apiKey))},async onSelectGame(e){e&&(this.selectedGame=await this.fetchData(`API_GetGameInfoAndUserProgress.php?z=${this.username}&y=${this.apiKey}&u=${this.username}&g=${e.GameID}`),this.selectedGame&&localStorage.setItem("RetroAchievements.SelectedGame",JSON.stringify(this.selectedGame)))}},computed:{filteredRecentlyPlayed(){return this.userSummary.RecentlyPlayed.filter(e=>e.Title.toString().toLowerCase().indexOf(this.gameName.toLowerCase())>=0)},filteredAchievements(){let e=Object.values(this.selectedGame.Achievements),t=e.filter(e=>{let t=!1;switch(this.achievementsFilter){case 0:t=!0;break;case 1:e.DateEarned&&(t=!0);break;case 2:e.DateEarned||(t=!0);break;default:break}if(""!==this.achievementsFilterStringContains&&t){let n=RegExp(this.achievementsFilterStringContains.toString().toLowerCase());t=!(!n.test(e.Description.toString().toLowerCase())&&!n.test(e.Title.toString().toLowerCase()))}if(""!==this.achievementsFilterStringNotContains&&t){let n=RegExp(this.achievementsFilterStringNotContains.toString().toLowerCase());t=!n.test(e.Description.toString().toLowerCase())&&!n.test(e.Title.toString().toLowerCase())}if(t)return e});return t}},async created(){let e=localStorage.getItem("RetroAchievements.Username"),t=localStorage.getItem("RetroAchievements.ApiKey");if(e&&t){this.username=e,this.apiKey=t,await this.onLogin();let n=localStorage.getItem("RetroAchievements.SelectedGame");n&&(this.selectedGame=JSON.parse(n))}}},c=o,u=n("2877"),l=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=l.exports},5270:function(e,t,n){"use strict";var r=n("c532"),s=n("c401"),i=n("2e67"),a=n("2444");function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){o(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return o(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(o(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"5f02":function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,s,i,a){var o=[];o.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),r.isString(s)&&o.push("path="+s),r.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),s=n("e683");e.exports=function(e,t){return e&&!r(t)?s(e,t):t}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function s(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e,t=new s((function(t){e=t}));return{token:t,cancel:e}},e.exports=s},b50d:function(e,t,n){"use strict";var r=n("c532"),s=n("467f"),i=n("7aac"),a=n("30b5"),o=n("83b9"),c=n("c345"),u=n("3934"),l=n("2d83");e.exports=function(e){return new Promise((function(t,n){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+h)}var v=o(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:i,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};s(t,n,a),p=null}},p.onabort=function(){p&&(n(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),f||(f=null),p.send(f)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&s.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function a(e){return"undefined"===typeof e}function o(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===s.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function m(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function h(e){return"[object Date]"===s.call(e)}function v(e){return"[object File]"===s.call(e)}function g(e){return"[object Blob]"===s.call(e)}function y(e){return"[object Function]"===s.call(e)}function b(e){return p(e)&&y(e.pipe)}function C(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function A(){var e={};function t(t,n){m(e[n])&&m(t)?e[n]=A(e[n],t):m(t)?e[n]=A({},t):i(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)S(arguments[n],t);return e}function _(e,t,n){return S(t,(function(t,s){e[s]=n&&"function"===typeof t?r(t,n):t})),e}function k(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:i,isArrayBuffer:c,isBuffer:o,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:p,isPlainObject:m,isUndefined:a,isDate:h,isFile:v,isBlob:g,isFunction:y,isStream:b,isURLSearchParams:C,isStandardBrowserEnv:x,forEach:S,merge:A,extend:_,trim:w,stripBOM:k}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),s=n("1d2b"),i=n("0a06"),a=n("4a7b"),o=n("2444");function c(e){var t=new i(e),n=s(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=c(o);u.Axios=i,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var s=e[r];"."===s?e.splice(r,1):".."===s?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,s=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!s){n=t+1;break}}else-1===r&&(s=!1,r=t+1);return-1===r?"":e.slice(n,r)}function s(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return t=n(s(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===i(e,-1);return e=n(s(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(s(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var s=r(e.split("/")),i=r(n.split("/")),a=Math.min(s.length,i.length),o=a,c=0;c<a;c++)if(s[c]!==i[c]){o=c;break}var u=[];for(c=o;c<s.length;c++)u.push("..");return u=u.concat(i.slice(o)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,s=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!s){r=i;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,s=!0,i=0,a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47!==o)-1===r&&(s=!1,r=a+1),46===o?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!s){n=a+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,n){"use strict";var r=n("c532");function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s}}]);
//# sourceMappingURL=about.98eab394.js.map