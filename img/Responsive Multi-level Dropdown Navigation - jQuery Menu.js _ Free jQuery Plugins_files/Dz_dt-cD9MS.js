if (self.CavalryLogger) { CavalryLogger.start_js(["yu7D3"]); }

__d("destroyOnUnload",["Run"],(function(a,b,c,d,e,f){function a(a){b("Run").onLeave(a)}e.exports=a}),null);
__d("PluginCSSReflowHack",["Style"],(function(a,b,c,d,e,f){a={trigger:function(a){setTimeout(function(){var c="border-bottom-width",d=b("Style").get(a,c);b("Style").set(a,c,parseInt(d,10)+1+"px");b("Style").set(a,c,d)},1e3)}};e.exports=a}),null);
__d("PluginConfirm",["DOMEvent","DOMEventListener","PlatformBaseVersioning","PluginMessage","PopupWindow","URI"],(function(a,b,c,d,e,f){__p&&__p();function g(a){Object.assign(this,{plugin:a,confirm_params:{},return_params:b("URI").getRequestURI().getQueryData()}),this.addReturnParams({ret:"sentry"}),delete this.return_params.hash}Object.assign(g.prototype,{addConfirmParams:function(a){Object.assign(this.confirm_params,a)},addReturnParams:function(a){Object.assign(this.return_params,a);return this},start:function(){var a=b("PlatformBaseVersioning").versionAwareURI(new(b("URI"))("/plugins/error/confirm/"+this.plugin)).addQueryData(this.confirm_params).addQueryData({secure:b("URI").getRequestURI().isSecure(),plugin:this.plugin,return_params:JSON.stringify(this.return_params)});this.popup=b("PopupWindow").open(a.toString(),320,486);b("PluginMessage").listen();return this}});g.starter=function(a,b,c){a=new g(a);a.addConfirmParams(b||{});a.addReturnParams(c||{});return a.start.bind(a)};g.listen=function(a,c,d,e){b("DOMEventListener").add(a,"click",function(a){new(b("DOMEvent"))(a).kill(),g.starter(c,d,e)()})};e.exports=g}),null);
__d("PluginConnection",["Arbiter","CSS","Plugin"],(function(a,b,c,d,e,f){__p&&__p();var g=function(){};Object.assign(g.prototype,{init:function(a,c,d,event){event=event||b("Plugin").CONNECT;this.identifier=a;this.element=c;this.css=d;b("Arbiter").subscribe([b("Plugin").CONNECT,b("Plugin").DISCONNECT],function(e,f){a===f.href&&b("CSS")[e===event?"addClass":"removeClass"](c,d);return!0});return this},connected:function(){return b("CSS").hasClass(this.element,this.css)},connect:function(){return b("Arbiter").inform(b("Plugin").CONNECT,{href:this.identifier},"state")},disconnect:function(){return b("Arbiter").inform(b("Plugin").DISCONNECT,{href:this.identifier},"state")},toggle:function(){return this.connected()?this.disconnect():this.connect()}});g.init=function(a){for(var b,c=0;c<a.length;c++)b=new g(),b.init.apply(b,a[c])};e.exports=g}),null);
__d("BanzaiLogger",["Banzai"],(function(a,b,c,d,e,f){var g="logger";function a(a){return{log:function(c,d){b("Banzai").post(h._getRoute(c),d,a)},registerToSendWithBeacon:function(a,c,d,e){b("Banzai").registerToSendWithBeacon(h._getRoute(a),c,d,e)},_getRoute:function(a){return g+":"+a}}}var h=a();h.create=a;e.exports=h}),null);
__d("PagePluginActionTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click"})}),null);
__d("PagePluginActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PAGE_AVATAR:"page_avatar",PAGE_CTA:"page_cta",PAGE_LIKE:"page_like",PAGE_PERMALINK:"page_permalink",PAGE_SHARE:"page_share",PAGE_UNLIKE:"page_unlike"})}),null);
__d("PluginPageActionLogger",["BanzaiLogger","BanzaiODS","DOMEventListener","DOMQuery","PagePluginActions","PagePluginActionTypes"],(function(a,b,c,d,e,f){__p&&__p();a={initializeClickLoggers:function(a,c,d,e,f,g,h,i,j,k){__p&&__p();function l(f,g){f=b("DOMQuery").scry(e,"."+f)[0];if(!f)return;b("DOMEventListener").add(f,"click",function(e){b("BanzaiODS").bumpEntityKey("platform_www","platform.plugin.page.action"),b("BanzaiLogger").log("PagePluginActionsLoggerConfig",{page_id:c,page_plugin_action:g,page_plugin_action_type:b("PagePluginActionTypes").CLICK,referer_url:d,is_sdk:a})})}l(f,b("PagePluginActions").PAGE_LIKE);l(g,b("PagePluginActions").PAGE_UNLIKE);l(h,b("PagePluginActions").PAGE_AVATAR);l(i,b("PagePluginActions").PAGE_PERMALINK);l(j,b("PagePluginActions").PAGE_SHARE);l(k,b("PagePluginActions").PAGE_CTA)}};e.exports=a}),null);
__d("NavigationMetricsEnumJS",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"})}),null);
__d("ResourceTimingMetricsEnumJS",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"})}),null);
__d("ImageTimingHelper",["Arbiter","BigPipe","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={};function i(a){__p&&__p();var c=a.lid,d=a.pagelet,e=a.images,f=a.timeslice,i=a.ts,j=g[c];j||(j=g[c]=[]);e.forEach(function(a){try{var c=new(b("URI"))(a);a=c.setFragment("").toString()}catch(a){return}if(h[a])return;h[a]=!0;j.push({pagelet:d,timeslice:f,ts:i,uri:a})})}b("Arbiter").subscribe(b("BigPipe").Events.init,function(a,b){b.lid&&b.lid!=="0"&&b.arbiter.subscribe("images_displayed",function(a,b){i(b)})});b("Arbiter").subscribe("MRenderingScheduler/images_displayed",function(a,b){i(b)});e.exports.getImageTimings=function(a){return g[a]||[]}}),null);
__d("NavigationTimingHelper",["NavigationMetricsEnumJS","forEachObject","performance"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){var d={};b("forEachObject")(b("NavigationMetricsEnumJS"),function(b){var e=c[b];e&&(d[b]=e+a)});return d}var h={getAsyncRequestTimings:function(a){if(!a||!b("performance").timing||!b("performance").getEntriesByName)return undefined;a=b("performance").getEntriesByName(a);return a.length===0?undefined:g(b("performance").timing.navigationStart,a[0])},getPerformanceNavigationTiming:function(){if(!b("performance").timing||!b("performance").getEntriesByType)return{};var a=b("performance").getEntriesByType("navigation");return!a.length?{}:g(b("performance").timing.navigationStart,a[0])},getNavTimings:function(){if(!b("performance").timing)return undefined;var a=babelHelpers["extends"]({},g(0,b("performance").timing),h.getPerformanceNavigationTiming());return g(0,a)}};e.exports=h}),null);
__d("PageletEventsHelper",["Arbiter","PageletEventConstsJS"],(function(a,b,c,d,e,f){__p&&__p();var g="BigPipe/init",h="MRenderingScheduler/init",i="pagelet_event",j="phase_begin",k={},l=[],m=!1;function n(){return{pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}}}function o(a,b,c,d){k[d]==undefined&&(k[d]=n()),k[d].pagelets[b]==undefined&&(k[d].pagelets[b]={}),k[d].pagelets[b][a]=c}function p(a){__p&&__p();a.subscribe(i,function(a,c){__p&&__p();var event=c.event,d=c.ts;a=c.id;var e=c.lid,f=c.phase,g=c.categories,h=c.allResources;c=c.displayResources;o(event,a,d,e);var i=k[e],j=i.pagelets[a];event===b("PageletEventConstsJS").ARRIVE_END&&(j.phase=f,i.all_resources[a]=h,i.display_resources[a]=c);(event===b("PageletEventConstsJS").ONLOAD_END||event===b("PageletEventConstsJS").DISPLAY_END)&&g&&g.forEach(function(a){i.categories[a]==undefined&&(i.categories[a]={}),i.categories[a][event]=d});for(var j=0,f=l.length;j<f;j++)l[j](a,event,d,e)}),a.subscribe(j,function(event,a){k[a.lid].phase_start[a.phase]=a.ts})}a={init:function(){__p&&__p();if(m)return;b("Arbiter").subscribe(g,function(event,a){var b=a.lid;a=a.arbiter;k[b]=n();p(a)});b("Arbiter").subscribe(h,function(event,a){var b=a.lid;a=a.arbiter;k[b]=n();p(a)});m=!0},getMetrics:function(a){return k[a]?JSON.parse(JSON.stringify(k[a])):null},subscribeToPageletEvents:function(a){l.push(a);return{remove:function(){l.splice(0,l.indexOf(a))}}}};e.exports=a}),null);
__d("ResourceTimingBootloaderHelper",["Bootloader","ErrorUtils","ImageTimingHelper","ResourceTimingMetricsEnumJS","ResourceTimingsStore","ResourceTypes","URI","forEachObject","isEmpty","performance"],(function(a,b,c,d,e,f){__p&&__p();var g=500,h=[],i={},j={},k={},l=[".mp4",".m4v",".mpd","m4a"],m=new Set(["bootload","js_exec","start_bootload","tag_bootload"]);function n(a){for(var b=0;b<l.length;b++){var c=l[b];if(a.endsWith(c))return!0}return!1}function o(a){__p&&__p();var c=new Map();b("ResourceTimingsStore").getMapFor(a).forEach(function(a){if(a.requestSent!=null){var b=c.get(a.uri);b!=null?b.push(a):c.set(a.uri,[a])}});c.forEach(function(a){return a.sort(function(a,b){return a.requestSent-b.requestSent})});return c}function p(a,b,c,d){__p&&__p();var e=a.get(b);if(e==null){var f=b.indexOf("?");if(f!==-1){b=b.substring(0,f);e=a.get(b)}}if(e!=null)for(var f=0;f<e.length;f++){a=e[f];b=a.requestSent;a=a.responseReceived;if((c==null||b!=null&&b<=c)&&(d==null||a!=null&&a>=d))return e.splice(f,1)[0]}return null}function q(a,c,d,e,f,g,h){__p&&__p();if(!b("performance").timing||!b("performance").getEntriesByType)return null;var i={},l=b("performance").timing.navigationStart;d&&(i=b("ImageTimingHelper").getImageTimings(e).sort(function(a,b){return a.ts-b.ts}).reduce(function(a,b){if(a[b.uri])return a;a[b.uri]=b.pagelet;return a},{}));d=Array.from(b("performance").getEntriesByType("resource"));e=d.filter(function(a){return a.duration>=0&&a.startTime!=null&&a.startTime+l>c&&(f==null||a.responseEnd==null||a.responseEnd+l<f)});e.sort(function(a,b){return a.startTime-b.startTime});d=e.length;var m=0,q=0,u=0,v=0,w=0,x=o(b("ResourceTypes").XHR),y=o(b("ResourceTypes").CSS),z=o(b("ResourceTypes").JS);for(var A=0;A<e.length;A++){var B=e[A],C="",D="",E=void 0,F=B.initiatorType;switch(F){case"css":case"link":case"script":F=b("ResourceTimingsStore").parseMakeHasteURL(B.name);if(!F)continue;var G=F[0];F=F[1];if(F==="css"||F==="js"){var H=F==="css"?y:z;E=p(H,B.name,B.startTime+l,B.responseEnd+l);if(E!=null&&h){D=F;C=E.uid;break}else{D=F;H=k[B.name]||u++;C=H+"_"+G}}else{F=t(B.name);H=F[0];D=F[1];C=q+++"_"+H}break;case"img":C=q+++"_"+r(B.name);D="img";break;case"iframe":C=v+++"_"+r(B.name)+s(B.name);D="iframe";break;case"xmlhttprequest":if(g){G=r(B.name);F=s(B.name);if(n(F)){C=w+++"_"+G+F;D="video";break}else{E=p(x,B.name,B.startTime+l,B.responseEnd+l);if(E!=null){D=b("ResourceTypes").XHR;C=E.uid;break}}}default:continue}H={};G=Object.keys(b("ResourceTimingMetricsEnumJS"));for(var F=0;F<G.length;F++){var I=b("ResourceTimingMetricsEnumJS")[G[F]],J=B[I];J&&(H[I]=J+b("performance").timing.navigationStart)}if(E!=null){I=E;J=I.requestSent;F=I.responseReceived;if(c!=null&&J!=null&&J<c||f!=null&&F!=null&&F>f)continue;H.requestSent=J;H.responseReceived=F}H.type=D;H.desc=C;if(E!=null&&(D===b("ResourceTypes").JS||D===b("ResourceTypes").CSS||D===b("ResourceTypes").XHR)){G=b("ResourceTimingsStore").getAnnotationsFor(D,E.uid);G!=null&&(H.annotations=G)}D=="img"&&Object.prototype.hasOwnProperty.call(i,B.name)&&(H.pagelet=i[B.name]);H.transferSize=B.transferSize;H.encodedBodySize=B.encodedBodySize;a[B.name]==undefined&&(a[B.name]=[]);m++;a[B.name].push(H)}return h?{numValidEntries:d,numSuccessfulMetrics:m}:null}function r(a){a=new(b("URI"))(a).getDomain();return a}function s(a){a=new(b("URI"))(a).getPath();return a}function t(a){return[r(a),"img"]}function u(a){__p&&__p();var b=Object.keys(a).filter(function(a){return a.startsWith("start_bootload/")}).sort(function(b,c){return a[b]-a[c]}).map(function(a){return a.substring(a.indexOf("/")+1)});b.forEach(function(b){return m.forEach(function(c){c=c+"/"+b;a[c]!=null&&(i[c]=a[c])})});h=h.concat(b);if(h.length>g){b=h.splice(0,h.length-g);b.forEach(function(a){return m.forEach(function(b){i[b+"/"+a]&&delete i[b+"/"+a]})})}}a={addPastBootloaderMetricsToResourceTimings:function(c,d){__p&&__p();c===void 0&&(c={});d===void 0&&(d={});var a=b("Bootloader").getURLToHashMap();b("forEachObject")(c,function(b,c){__p&&__p();var e=a[c];if(!e)return;var f=new Map();f.set("bootloader_hash",e);m.forEach(function(a){var b=a+"/"+e;b=d[b]||i[b];b!=null&&f.set(a,b)});f.size>0&&b.forEach(function(a){if(a.requestSent||a.responseReceived)return;f.forEach(function(b,c){return a[c]=b})})})},mergeBootloaderMetricsAndResourceTimings:function(a,c,d){__p&&__p();a===void 0&&(a={});c===void 0&&(c={});d===void 0&&(d=!0);b("isEmpty")(k)&&(k=b("Bootloader").getURLToHashMap());var e=new Map();b("forEachObject")(k,function(a,b){e.set(a,b)});var f=[];b("forEachObject")(c,function(b,c){__p&&__p();var d=c.indexOf("/");if(d===-1)return;var g=c.substring(0,d);if(!m.has(g))return;f.push(c);var h=c.substring(d+1);c=e.get(h);if(!c){c=h;h=k[c];if(!h)return}c.startsWith("data:")&&(c="inlined resource: "+h);a[c]==null&&(a[c]=[{}]);a[c].forEach(function(a){a.bootloader_hash=h,a[g]=b})});d||(u(c),f.forEach(function(a){return delete c[a]}));return a},getLastTTIAndE2EImageResponseEnds:function(a,c,d){__p&&__p();var e={TTI:a,E2E:c};if(!b("performance").timing)return e;var f=d.filter(function(b){return b.ts<=a}).map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{}),g=d.map(function(a){return a.uri}).reduce(function(b,a){b[a]=!0;return b},{});for(var h in j)j[h].forEach(function(a){a.type==="img"&&(f[h]&&(e.TTI=Math.max(e.TTI,a.responseEnd)),g[h]&&(e.E2E=Math.max(e.E2E,a.responseEnd)))});return e},getMetrics:function(a,c,d,e,f,g){j={};b("isEmpty")(k)&&(k=b("Bootloader").getURLToHashMap());a=q(j,a,c,d,e,f,g);return{data:j,diagnostics:a}}};e.exports=a}),null);
__d("PerfXFlusher",["invariant","Banzai"],(function(a,b,c,d,e,f,g){var h="perfx_custom_logger_endpoint",i=["perfx_page","perfx_page_type","lid"];function j(a){i.forEach(function(b){return g(b in a,'PerfXFlusher: Field "%s" missing in the PerfX payload',b)})}a={flush:function(a){j(a),b("Banzai").post(h,a,{signal:!0})},registerToSendWithBeacon:function(a){b("Banzai").registerToSendWithBeacon(h,a)}};e.exports=a}),null);
__d("DataAttributeUtils",["DataStore","Parent"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h={LEGACY_CLICK_TRACKING_ATTRIBUTE:"data-ft",CLICK_TRACKING_DATASTORE_KEY:"data-ft",ENABLE_STORE_CLICK_TRACKING:"data-fte",IMPRESSION_TRACKING_CONFIG_ATTRIBUTE:"data-xt-vimp",IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY:"data-xt-vimp",REMOVE_LEGACY_TRACKING:"data-ftr",getDataAttribute:function(a,b){return i[b]?i[b](a):a.getAttribute(b)},setDataAttribute:function(a,b,c){return j[b]?j[b](a,c):a.setAttribute(b,c)},getDataFt:function(a){if(a.getAttribute(h.ENABLE_STORE_CLICK_TRACKING)){var c=b("DataStore").get(a,h.CLICK_TRACKING_DATASTORE_KEY);c||(c=h.moveClickTrackingToDataStore(a,a.getAttribute(h.REMOVE_LEGACY_TRACKING)));return c}return a.getAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE)},setDataFt:function(a,c){if(a.getAttribute(h.ENABLE_STORE_CLICK_TRACKING)){b("DataStore").set(a,h.CLICK_TRACKING_DATASTORE_KEY,c);return}a.setAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE,c)},moveXTVimp:function(a){h.moveAttributeToDataStore(a,h.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE,h.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY),g.push(a.id)},getXTrackableElements:function(){var a=g.map(function(a){return document.getElementById(a)}).filter(function(a){return!!a}),b=document.querySelectorAll("[data-xt-vimp]");for(var c=0;c<b.length;c++)a.push(b[c]);return a},getDataAttributeGeneric:function(a,c,d){d=b("DataStore").get(a,d);return d!==undefined?d:a.getAttribute(c)},moveAttributeToDataStore:function(a,c,d){var e=a.getAttribute(c);e&&(b("DataStore").set(a,d,e),a.removeAttribute(c))},moveClickTrackingToDataStore:function(a,c){var d=a.getAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE);d&&(b("DataStore").set(a,h.CLICK_TRACKING_DATASTORE_KEY,d),c&&a.removeAttribute(h.LEGACY_CLICK_TRACKING_ATTRIBUTE));return d},getClickTrackingParent:function(a){a=b("Parent").byAttribute(a,h.LEGACY_CLICK_TRACKING_ATTRIBUTE)||b("Parent").byAttribute(a,h.ENABLE_STORE_CLICK_TRACKING);return a},getClickTrackingElements:function(a){return a.querySelectorAll("["+h.LEGACY_CLICK_TRACKING_ATTRIBUTE+"], ["+h.ENABLE_STORE_CLICK_TRACKING+"]")},getParentByAttributeOrDataStoreKey:function(a,c,d){while(a&&(!a.getAttribute||!a.getAttribute(c))&&b("DataStore").get(a,d)===undefined)a=a.parentNode;return a}},i={"data-ft":h.getDataFt,"data-xt-vimp":function(a){return h.getDataAttributeGeneric(a,"data-xt-vimp","data-xt-vimp")},"data-ad":function(a){return h.getDataAttributeGeneric(a,"data-ad","data-ad")},"data-xt":function(a){return h.getDataAttributeGeneric(a,"data-xt","data-xt")}},j={"data-ft":h.setDataFt,"data-xt":function(a,c){b("DataStore").set(a,"data-xt",c)}};e.exports=h}),null);
__d("PerfXSharedFields",[],(function(a,b,c,d,e,f){var g={addCommonValues:function(a){navigator&&navigator.hardwareConcurrency!==undefined&&(a.num_cores=navigator.hardwareConcurrency);navigator&&navigator.deviceMemory&&(a.ram_gb=navigator.deviceMemory);navigator&&navigator.connection&&(typeof navigator.connection.downlink==="number"&&(a.downlink_megabits=navigator.connection.downlink),typeof navigator.connection.effectiveType==="string"&&(a.effective_connection_type=navigator.connection.effectiveType),typeof navigator.connection.rtt==="number"&&(a.rtt_ms=navigator.connection.rtt));return a},getCommonData:function(){var a={};g.addCommonValues(a);return a}};e.exports=g}),null);
__d("QuicklingRefreshOverheadUtil",["QuicklingConfig","WebStorage","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h=1e4;a={onQuicklingStart:function(){g=b("performanceAbsoluteNow")()},onQuicklingVersionMatch:function(){g=null},onQuicklingRefreshStart:function(){if(!b("QuicklingConfig").logRefreshOverhead||g===null)return;var a=b("WebStorage").getSessionStorage();if(!a)return;a.setItem("quickling_refresh_overhead",(b("performanceAbsoluteNow")()-g).toString());a.setItem("quickling_refresh_start",Date.now().toString())},getOverhead:function(a){__p&&__p();if(!b("QuicklingConfig").logRefreshOverhead)return null;var c=b("WebStorage").getSessionStorageForRead();if(!c)return null;var d=c.getItem("quickling_refresh_start");if(d==null)return null;if(a-parseInt(d,10)>h)return null;a=c.getItem("quickling_refresh_overhead");return a!=null?parseFloat(a):null}};e.exports=a}),null);
__d("pageLoadedViaSWCache",[],(function(a,b,c,d,e,f){function a(){return self.__SW_CACHE__===1}e.exports=a}),null);
__d("PerfXLogger",["ArtilleryOnUntilOffLogging","BanzaiODS","DataAttributeUtils","NavigationMetrics","NavigationTimingHelper","PerfXFlusher","PerfXSharedFields","QuicklingRefreshOverheadUtil","VisibilityListener","forEachObject","pageLoadedViaSWCache","performanceAbsoluteNow","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={},i=65*1e3,j=["e2e","tti","all_pagelets_displayed","all_pagelets_loaded","artillery_disable_time"],k={},l={_listenersSetUp:!1,_uploadEarly:!1,_alreadyUploadedEarly:!1,_setupListeners:function(){__p&&__p();if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();b("PerfXFlusher").registerToSendWithBeacon(function(){var a=[];b("forEachObject")(g,function(b,c){if(!g[c].sent){b=this.getPayload(c,"unload fired");b!=null&&a.push(b)}}.bind(this));g={};return a}.bind(this));this._listenersSetUp=!0},_init:function(a){__p&&__p();var b=a.lid;if(b==null)return;this._alreadyUploadedEarly=!1;this._uploadEarly=!!a.upload_perfx_early;delete a.upload_perfx_early;var c=h[b]||[];delete h[b];if(a.sw_controlled_tags){if(navigator.serviceWorker&&navigator.serviceWorker.controller)for(var d=0;d<a.sw_controlled_tags.length;d++)c.push(a.sw_controlled_tags[d]);delete a.sw_controlled_tags}g[b]=babelHelpers["extends"]({tags:new Set(c),sent:!1},a);this._registerTimeoutSendback(b);this._setupListeners()},initWithNavigationMetricsLID:function(a,c){__p&&__p();var d=b("NavigationMetrics").getFullPageLoadLid();if(!d)return;this._init(babelHelpers["extends"]({},c,{lid:d}));if(a&&a.always)for(var c=0;c<a.always.length;c++)l.addTag(d,a.always[c]);if(a&&a.swCache&&b("pageLoadedViaSWCache")())for(var c=0;c<a.swCache.length;c++)l.addTag(d,a.swCache[c])},init:function(a,b){b!=null&&a.lid!=null&&(k[a.lid]=b),this._init(a)},addTag:function(a,c){this._alreadyUploadedEarly&&b("BanzaiODS").bumpEntityKey("PerfXLateTag",c);var d=g[a];if(d){d.tags.add(c);return}h[a]||(h[a]=[]);h[a].push(c)},addTagWithNavigationMetricsLID:function(a){this._alreadyUploadedEarly&&b("BanzaiODS").bumpEntityKey("PerfXLateTag",a);var c=b("NavigationMetrics").getFullPageLoadLid();if(!c)return;l.addTag(c,a)},_registerTimeoutSendback:function(a){var c=this._getFetchStart(a),d=i;c!=null&&(d-=b("performanceAbsoluteNow")()-c);b("setTimeoutAcrossTransitions")(function(){return this._uploadPayload(a,"sendback time out")}.bind(this),d)},_subscribeToNavigationMetrics:function(){__p&&__p();b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,b){if(!(a in g))return;j.includes(b.event)&&Object.prototype.hasOwnProperty.call(b,"timestamp")&&b.timestamp!=null&&(g[a][b.event]=b.timestamp);b.event==="all_pagelets_displayed"&&this._uploadEarly&&(j.forEach(function(event){Object.prototype.hasOwnProperty.call(b,event)&&b[event]!=null&&(g[a][event]=b[event])}),this._uploadPayload(a),this._alreadyUploadedEarly=!0)}.bind(this)),b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.NAVIGATION_DONE,function(a,b){var c=b.serverLID;if(!(c in g))return;j.forEach(function(event){Object.prototype.hasOwnProperty.call(b,event)&&b[event]!=null&&(g[c][event]=b[event])});this._uploadPayload(c)}.bind(this))},_getPayloadWithOffset:function(a,c,d){__p&&__p();a=g[a];if(a==null)return null;var e=Object.assign({},a),f=document.querySelector('[id^="hyperfeed_story_id"]');if(f){f=JSON.parse(b("DataAttributeUtils").getDataFt(f));f&&(e.mf_query_id=f.qid)}e.tags=Array.from(a.tags);e.art_id||(e.artillery_disable_time=b("ArtilleryOnUntilOffLogging").lastDisableTime());this._adjustValues(e,c);e.fetch_start=c;if(e.perfx_page_type==="normal"){f=b("NavigationTimingHelper").getNavTimings();f!=null&&f.navigationStart!=null&&(e.nav_to_fetch=c-f.navigationStart);a=b("QuicklingRefreshOverheadUtil").getOverhead(c);a!==null&&(e.quickling_refresh_overhead=a)}d!=null&&(e.sendback_reason=d);b("PerfXSharedFields").addCommonValues(e);b("VisibilityListener").supported()&&e.fetch_start&&e.all_pagelets_displayed&&e.tti&&e.e2e&&(e.tab_hidden_time_dd=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.all_pagelets_displayed),e.tab_hidden_time_tti=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.tti),e.tab_hidden_time_e2e=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.e2e));window&&window.location&&window.location.pathname&&(e.request_uri=window.location.pathname);delete e.sent;return e},_uploadPayload:function(a,c){if(g[a]!=null&&!g[a].sent){c=this.getPayload(a,c);c!=null&&(b("PerfXFlusher").flush(c),g[a].sent=!0)}},getPayload:function(a,b){return this._getPayloadWithOffset(a,this._getFetchStart(a),b)},_getFetchStart:function(a){if(!(a in g))return null;var c=g[a].perfx_page_type;if(c=="quickling")if(!(a in k))return null;else c=b("NavigationTimingHelper").getAsyncRequestTimings(k[a]);else c=b("NavigationTimingHelper").getNavTimings();return!c||!c.fetchStart?null:c.fetchStart},_adjustValues:function(a,b){j.forEach(function(c){Object.prototype.hasOwnProperty.call(a,c)&&(a[c]-=b)})}};e.exports=l}),null);