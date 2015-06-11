this.launchpad={},this.launchpadNamed={},function(e){var t=e.babelHelpers={};t.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},t.createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t.get=function n(e,t,r){var i=Object.getOwnPropertyDescriptor(e,t);if(void 0===i){var a=Object.getPrototypeOf(e);return null===a?void 0:n(a,t,r)}if("value"in i)return i.value;var s=i.get;return void 0===s?void 0:s.call(r)},t.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}("undefined"==typeof global?self:global),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"abstractMethod",value:function(){throw Error("Unimplemented abstract method")}},{key:"collectSuperClassesProperty",value:function(e,t){for(var n=[e[t]];e.__proto__&&!e.__proto__.isPrototypeOf(Function);)e=e.__proto__,n.push(e[t]);return n}},{key:"getUid",value:function(t){return t?t[e.UID_PROPERTY]||(t[e.UID_PROPERTY]=e.uniqueIdCounter_++):e.uniqueIdCounter_++}},{key:"identityFunction",value:function(e){return e}},{key:"isBoolean",value:function(e){return"boolean"==typeof e}},{key:"isDef",value:function(e){return void 0!==e}},{key:"isDefAndNotNull",value:function(t){return e.isDef(t)&&!e.isNull(t)}},{key:"isDocument",value:function(e){return e&&"object"==typeof e&&9===e.nodeType}},{key:"isElement",value:function(e){return e&&"object"==typeof e&&1===e.nodeType}},{key:"isFunction",value:function(e){return"function"==typeof e}},{key:"isNull",value:function(e){return null===e}},{key:"isNumber",value:function(e){return"number"==typeof e}},{key:"isWindow",value:function(e){return null!==e&&e===e.window}},{key:"isObject",value:function(e){var t=typeof e;return"object"===t&&null!==e||"function"===t}},{key:"isString",value:function(e){return"string"==typeof e}},{key:"mergeSuperClassesProperty",value:function(t,n,r){var i=n+"_MERGED";if(t.hasOwnProperty(i))return!1;var a=e.collectSuperClassesProperty(t,n);return r&&(a=r(a)),t[i]=a,!0}},{key:"nullFunction",value:function(){}}]),e}();e.UID_PROPERTY="core_"+(1e9*Math.random()>>>0),e.uniqueIdCounter_=1,this.launchpad.core=e}.call(this),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,[{key:"send",value:function(e){}}]),e}();this.launchpad.Transport=e}.call(this),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"parseUrl",value:function(e){var t,n,r=e.indexOf("//");return r>-1&&(e=e.substring(r+2)),t=e.substring(0,e.indexOf("/")),n=e.substring(e.indexOf("/")),[t,n]}},{key:"joinPaths",value:function(e,t){return"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),"/"===t.charAt(0)&&(t=t.substring(1)),[e,t].join("/")}},{key:"parseResponseHeaders",value:function(e){var t=[];if(!e)return t;for(var n=e.split("\r\n"),r=0;r<n.length;r++){var i=n[r].indexOf(": ");if(i>0){var a=n[r].substring(0,i),s=n[r].substring(i+2);t.push({name:a,value:s})}}return t}}]),e}();this.launchpad.Util=e}.call(this),function(){"use strict";var e=this.launchpad.core,t=function(){function t(){babelHelpers.classCallCheck(this,t),this.headers_=[]}return babelHelpers.createClass(t,[{key:"body",value:function(t){return e.isDef(t)?(this.body_=t,this):this.body_}},{key:"header",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.headers_.push({name:e,value:t}),this}},{key:"headers",value:function(t){return e.isDef(t)?(this.headers_=t,this):this.headers_}}]),t}();this.launchpad.ClientMessage=t}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.ClientMessage,n=function(t){function n(e){if(babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),!e)throw new Error("Can't create response without request");this.clientRequest_=e}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"request",value:function(){return this.clientRequest_}},{key:"statusCode",value:function(t){return e.isDef(t)?(this.statusCode_=t,this):this.statusCode_}}]),n}(t);this.launchpad.ClientResponse=n}.call(this),function(){/*!
   * Promises polyfill from Google's Closure Library.
   *
   *      Copyright 2013 The Closure Library Authors. All Rights Reserved.
   *
   * NOTE(eduardo): Promise support is not ready on all supported browsers,
   * therefore core.js is temporarily using Google's promises as polyfill. It
   * supports cancellable promises and has clean and fast implementation.
   */
"use strict";var e=this.launchpad.core,t=function(){};t.prototype.then=function(){},t.IMPLEMENTED_BY_PROP="$goog_Thenable",t.addImplementation=function(e){e.prototype.then=e.prototype.then,e.prototype.$goog_Thenable=!0},t.isImplementedBy=function(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(t){return!1}};var n=function(e){var t=Array.prototype.slice.call(arguments,1);return function(){var n=t.slice();return n.push.apply(n,arguments),e.apply(this,n)}},r={};r.throwException=function(e){r.nextTick(function(){throw e})},r.run=function(e,t){r.run.workQueueScheduled_||(r.nextTick(r.run.processWorkQueue),r.run.workQueueScheduled_=!0),r.run.workQueue_.push(new r.run.WorkItem_(e,t))},r.run.workQueueScheduled_=!1,r.run.workQueue_=[],r.run.processWorkQueue=function(){for(;r.run.workQueue_.length;){var e=r.run.workQueue_;r.run.workQueue_=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.fn.call(n.scope)}catch(i){r.throwException(i)}}}r.run.workQueueScheduled_=!1},r.run.WorkItem_=function(e,t){this.fn=e,this.scope=t},r.nextTick=function(t,n){var i=t;return n&&(i=t.bind(n)),i=r.nextTick.wrapCallback_(i),e.isFunction(window.setImmediate)?void window.setImmediate(i):(r.nextTick.setImmediate_||(r.nextTick.setImmediate_=r.nextTick.getSetImmediateEmulator_()),void r.nextTick.setImmediate_(i))},r.nextTick.setImmediate_=null,r.nextTick.getSetImmediateEmulator_=function(){var e=window.MessageChannel;if("undefined"==typeof e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&(e=function(){var e=document.createElement("iframe");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow,n=t.document;n.open(),n.write(""),n.close();var r="callImmediate"+Math.random(),i=t.location.protocol+"//"+t.location.host,a=function(e){(e.origin===i||e.data===r)&&this.port1.onmessage()}.bind(this);t.addEventListener("message",a,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(r,i)}}}),"undefined"!=typeof e){var t=new e,n={},r=n;return t.port1.onmessage=function(){n=n.next;var e=n.cb;n.cb=null,e()},function(e){r.next={cb:e},r=r.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("script")?function(e){var t=document.createElement("script");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){setTimeout(e,0)}},r.nextTick.wrapCallback_=function(e){return e};var i=function a(e,t){this.state_=a.State_.PENDING,this.result_=void 0,this.parent_=null,this.callbackEntries_=null,this.executing_=!1,a.UNHANDLED_REJECTION_DELAY>0?this.unhandledRejectionId_=0:0===a.UNHANDLED_REJECTION_DELAY&&(this.hadUnhandledRejection_=!1);try{var n=this;e.call(t,function(e){n.resolve_(a.State_.FULFILLED,e)},function(e){n.resolve_(a.State_.REJECTED,e)})}catch(r){this.resolve_(a.State_.REJECTED,r)}};i.UNHANDLED_REJECTION_DELAY=0,i.State_={PENDING:0,BLOCKED:1,FULFILLED:2,REJECTED:3},i.CallbackEntry_=null,i.resolve=function(e){return new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){e.length||t(void 0);for(var r,i=0;r=e[i];i++)r.then(t,n)})},i.all=function(e){return new i(function(t,r){var i=e.length,a=[];if(!i)return void t(a);for(var s,o=function(e,n){i--,a[e]=n,0===i&&t(a)},u=function(e){r(e)},l=0;s=e[l];l++)s.then(n(o,l),u)})},i.firstFulfilled=function(e){return new i(function(t,r){var i=e.length,a=[];if(!i)return void t(void 0);for(var s,o=function(e){t(e)},u=function(e,t){i--,a[e]=t,0===i&&r(a)},l=0;s=e[l];l++)s.then(o,n(u,l))})},i.prototype.then=function(t,n,r){return this.addChildPromise_(e.isFunction(t)?t:null,e.isFunction(n)?n:null,r)},t.addImplementation(i),i.prototype.thenAlways=function(e,t){var n=function(){try{e.call(t)}catch(n){i.handleRejection_.call(null,n)}};return this.addCallbackEntry_({child:null,onRejected:n,onFulfilled:n}),this},i.prototype.thenCatch=function(e,t){return this.addChildPromise_(null,e,t)},i.prototype["catch"]=i.prototype.thenCatch,i.prototype.cancel=function(e){this.state_===i.State_.PENDING&&r.run(function(){var t=new i.CancellationError(e);this.cancelInternal_(t)},this)},i.prototype.cancelInternal_=function(e){this.state_===i.State_.PENDING&&(this.parent_?this.parent_.cancelChild_(this,e):this.resolve_(i.State_.REJECTED,e))},i.prototype.cancelChild_=function(e,t){if(this.callbackEntries_){for(var n,r=0,a=-1,s=0;n=this.callbackEntries_[s];s++){var o=n.child;if(o&&(r++,o===e&&(a=s),a>=0&&r>1))break}if(a>=0)if(this.state_===i.State_.PENDING&&1===r)this.cancelInternal_(t);else{var u=this.callbackEntries_.splice(a,1)[0];this.executeCallback_(u,i.State_.REJECTED,t)}}},i.prototype.addCallbackEntry_=function(e){this.callbackEntries_&&this.callbackEntries_.length||this.state_!==i.State_.FULFILLED&&this.state_!==i.State_.REJECTED||this.scheduleCallbacks_(),this.callbackEntries_||(this.callbackEntries_=[]),this.callbackEntries_.push(e)},i.prototype.addChildPromise_=function(t,n,r){var a={child:null,onFulfilled:null,onRejected:null};return a.child=new i(function(s,o){a.onFulfilled=t?function(e){try{var n=t.call(r,e);s(n)}catch(i){o(i)}}:s,a.onRejected=n?function(t){try{var a=n.call(r,t);!e.isDef(a)&&t instanceof i.CancellationError?o(t):s(a)}catch(u){o(u)}}:o}),a.child.parent_=this,this.addCallbackEntry_(a),a.child},i.prototype.unblockAndFulfill_=function(e){if(this.state_!==i.State_.BLOCKED)throw new Error("CancellablePromise is not blocked.");this.state_=i.State_.PENDING,this.resolve_(i.State_.FULFILLED,e)},i.prototype.unblockAndReject_=function(e){if(this.state_!==i.State_.BLOCKED)throw new Error("CancellablePromise is not blocked.");this.state_=i.State_.PENDING,this.resolve_(i.State_.REJECTED,e)},i.prototype.resolve_=function(n,r){if(this.state_===i.State_.PENDING){if(this===r)n=i.State_.REJECTED,r=new TypeError("CancellablePromise cannot resolve to itself");else{if(t.isImplementedBy(r))return r=r,this.state_=i.State_.BLOCKED,void r.then(this.unblockAndFulfill_,this.unblockAndReject_,this);if(e.isObject(r))try{var a=r.then;if(e.isFunction(a))return void this.tryThen_(r,a)}catch(s){n=i.State_.REJECTED,r=s}}this.result_=r,this.state_=n,this.scheduleCallbacks_(),n!==i.State_.REJECTED||r instanceof i.CancellationError||i.addUnhandledRejection_(this,r)}},i.prototype.tryThen_=function(e,t){this.state_=i.State_.BLOCKED;var n=this,r=!1,a=function(e){r||(r=!0,n.unblockAndFulfill_(e))},s=function(e){r||(r=!0,n.unblockAndReject_(e))};try{t.call(e,a,s)}catch(o){s(o)}},i.prototype.scheduleCallbacks_=function(){this.executing_||(this.executing_=!0,r.run(this.executeCallbacks_,this))},i.prototype.executeCallbacks_=function(){for(;this.callbackEntries_&&this.callbackEntries_.length;){var e=this.callbackEntries_;this.callbackEntries_=[];for(var t=0;t<e.length;t++)this.executeCallback_(e[t],this.state_,this.result_)}this.executing_=!1},i.prototype.executeCallback_=function(e,t,n){t===i.State_.FULFILLED?e.onFulfilled(n):(this.removeUnhandledRejection_(),e.onRejected(n))},i.prototype.removeUnhandledRejection_=function(){var e;if(i.UNHANDLED_REJECTION_DELAY>0)for(e=this;e&&e.unhandledRejectionId_;e=e.parent_)clearTimeout(e.unhandledRejectionId_),e.unhandledRejectionId_=0;else if(0===i.UNHANDLED_REJECTION_DELAY)for(e=this;e&&e.hadUnhandledRejection_;e=e.parent_)e.hadUnhandledRejection_=!1},i.addUnhandledRejection_=function(e,t){i.UNHANDLED_REJECTION_DELAY>0?e.unhandledRejectionId_=setTimeout(function(){i.handleRejection_.call(null,t)},i.UNHANDLED_REJECTION_DELAY):0===i.UNHANDLED_REJECTION_DELAY&&(e.hadUnhandledRejection_=!0,r.run(function(){e.hadUnhandledRejection_&&i.handleRejection_.call(null,t)}))},i.handleRejection_=r.throwException,i.setUnhandledRejectionHandler=function(e){i.handleRejection_=e},i.CancellationError=function(e){var t=function(e){babelHelpers.classCallCheck(this,t),babelHelpers.get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),e&&(this.message=e)};return babelHelpers.inherits(t,e),t}(Error),i.CancellationError.prototype.name="cancel","undefined"==typeof window.Promise&&(window.Promise=i),this.launchpadNamed.Promise={},this.launchpadNamed.Promise.CancellablePromise=i,this.launchpadNamed.Promise.async=r}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.Transport,n=this.launchpad.Util,r=this.launchpad.ClientResponse,i=this.launchpadNamed.Promise.CancellablePromise,a=function(t){function a(){babelHelpers.classCallCheck(this,a),babelHelpers.get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this)}return babelHelpers.inherits(a,t),babelHelpers.createClass(a,[{key:"send",value:function(e){var t=this.request(e.url(),e.method(),e.body(),e.headers(),e.queries(),null,!1);return t.then(function(t){var i=new r(e);return i.body(t.responseText),i.statusCode(t.status),i.headers(n.parseResponseHeaders(t.getAllResponseHeaders())),i})}},{key:"request",value:function s(t,n,r,a,o,u,l){var s=new XMLHttpRequest,c=new i(function(e,t){s.onload=function(){return 200===s.status||304===s.status?void e(s):void s.onerror()},s.onerror=function(){var e=new Error("Request error");e.request=s,t(e)}}).thenCatch(function(e){throw e}).thenAlways(function(){clearTimeout(f)});if(o){var h="";o.forEach(function(e){h+=e.name+"="+encodeURIComponent(e.value)+"&"}),h=h.slice(0,-1),h&&(t+=t.indexOf("?")>-1?"&":"?",t+=h)}if(s.open(n,t,!l),a){var d={};a.forEach(function(e){d[e.name]=(d[e.name]?d[e.name]+",":"")+e.value,s.setRequestHeader(e.name,d[e.name])})}if(s.send(e.isDef(r)?r:null),e.isDefAndNotNull(u))var f=setTimeout(function(){c.cancel("Request timeout")},u);return c}}]),a}(t);this.launchpad.AjaxTransport=a}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.ClientMessage,n=function(t){function n(){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.queries_=[]}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"method",value:function(t){return e.isDef(t)?(this.method_=t,this):this.method_||n.DEFAULT_METHOD}},{key:"query",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.queries_.push({name:e,value:t}),this}},{key:"queries",value:function(t){return e.isDef(t)?(this.queries_=t,this):this.queries_}},{key:"url",value:function(t){return e.isDef(t)?(this.url_=t,this):this.url_}}]),n}(t);n.DEFAULT_METHOD="GET",this.launchpad.ClientRequest=n}.call(this),function(){"use strict";var e=this.launchpad.AjaxTransport,t=function(){function t(){babelHelpers.classCallCheck(this,t),this.transports={},this.transports[t.DEFAULT_TRANSPORT_NAME]=e}return babelHelpers.createClass(t,[{key:"get",value:function(e){var t=this.transports[e];if(null==t)throw new Error("Invalid transport name: "+e);try{return new t}catch(n){throw new Error("Can't create transport",n)}}},{key:"getDefault",value:function(){return this.get(t.DEFAULT_TRANSPORT_NAME)}}],[{key:"instance",value:function(){return t.instance_||(t.instance_=new t),t.instance_}}]),t}();t.DEFAULT_TRANSPORT_NAME="default",this.launchpad.TransportFactory=t}.call(this),function(){"use strict";var e=this.launchpad.TransportFactory,t=this.launchpad.ClientRequest,n=this.launchpad.Util,r=function(){function r(){if(babelHelpers.classCallCheck(this,r),0===arguments.length)throw new Error("Invalid arguments, try `new LaunchpadClient(baseUrl, url)`");this.url_=n.joinPaths(arguments[0]||"",arguments[1]||""),this.headers_=[],this.queries_=[],this.header("Content-Type","application/json")}return babelHelpers.createClass(r,[{key:"use",value:function(e){return this.customTransport_=e,this}},{key:"connect",value:function(e){if("undefined"==typeof io)throw new Error("Socket.io client not loaded");var t=n.parseUrl(this.url());return e=e||{},e.path=t[1],io(t[0],e)}},{key:"path",value:function(e){return new r(this.url(),e).use(this.customTransport_)}},{key:"delete",value:function(){return this.sendAsync("DELETE")}},{key:"get",value:function(){return this.sendAsync("GET")}},{key:"patch",value:function(e){return this.sendAsync("PATCH",e)}},{key:"post",value:function(e){return this.sendAsync("POST",e)}},{key:"put",value:function(e){return this.sendAsync("PUT",e)}},{key:"header",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.headers_.push({name:e,value:t}),this}},{key:"headers",value:function(){return this.headers_}},{key:"query",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.queries_.push({name:e,value:t}),this}},{key:"queries",value:function(){return this.queries_}},{key:"url",value:function(){return this.url_}},{key:"sendAsync",value:function(n,r){var i=this.customTransport_||e.instance().getDefault(),a=new t;return a.body(r),a.method(n),a.headers(this.headers()),a.queries(this.queries()),a.url(this.url()),this.encode(a),i.send(a).then(this.decode)}},{key:"encode",value:function(e){return r.TEMP_isContentTypeJson(e)&&e.body(JSON.stringify(e.body())),e}},{key:"decode",value:function(e){if(r.TEMP_isContentTypeJson(e))try{e.body(JSON.parse(e.body()))}catch(t){}return e}}],[{key:"url",value:function(e){return new r(e).use(this.customTransport_)}}]),r}();r.TEMP_isContentTypeJson=function(e){for(var t=e.headers(),n=t.length-1;n>=0;n--)if("content-type"===t[n].name.toLowerCase())return 0===t[n].value.toLowerCase().indexOf("application/json");return!1},void 0!==typeof window&&(window.LaunchpadClient=r),this.launchpad.LaunchpadClient=r}.call(this);