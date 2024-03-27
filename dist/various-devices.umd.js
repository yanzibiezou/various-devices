(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n.variousDevices={}))})(this,function(n){"use strict";const i=()=>!!(typeof process<"u"&&process.versions&&process.versions.electron),u=()=>typeof window<"u"&&typeof window.document<"u",l=()=>typeof process<"u"&&process.versions!=null&&process.versions.node!=null,c=()=>typeof self<"u"&&typeof self.postMessage<"u"&&typeof importScripts<"u",r=()=>i()?"electron":u()?"browser":l()?"node":c()?"webworker":"unknown",f=o=>{const e=["B","KB","MB","GB","TB"];let t=0;for(;o>=1024&&t<e.length-1;)o/=1024,t++;return`${o.toFixed(2)} ${e[t]}`},d=()=>({ua:window.navigator.userAgent,platform:window.navigator.platform}),h=()=>{const o=r();if(o=="node")return{platform:o,version:process.version};throw new Error("不是Node环境 (is not Node environment)")},y=async()=>{if(r()=="node"){let e;return typeof require<"u"?e=require("os"):e=await Promise.resolve().then(()=>O),{name:e.type(),version:e.release(),platform:e.platform(),arch:e.arch(),cpuModel:e.cpus()[0].model,cpuSpeed:e.cpus()[0].speed,cpus:e.cpus().length,totalMemory:f(e.totalmem()),freeMemory:f(e.freemem())}}else throw new Error("不是Node环境 (is not Node environment)")},b=()=>{const o=r();if(o=="electron")return{platform:o,version:process.version,node:process.versions.node,v8:process.versions.v8,chrome:process.versions.chrome||"",zlib:process.versions.zlib,openssl:process.versions.openssl,modules:process.versions.modules,nghttp2:process.versions.nghttp2||"",napi:process.versions.napi||"",llhttp:process.versions.llhttp||""};throw new Error("不是Electron环境 (is not Electron environment)")},a=()=>{if(r()=="browser"){const{platform:e,ua:t}=d(),s=["Macintosh","MacIntel","MacPPC","Mac68K"];return"userAgentData"in window.navigator&&window.navigator.userAgentData?window.navigator.userAgentData.platform==="macOS":e&&s.indexOf(e)!==-1?!0:/macintosh|mac os x/i.test(t)}else throw new Error("不是浏览器环境 (is not browser environment)")},m=()=>{if(r()=="browser"){const{platform:e,ua:t}=d(),s=["Win32","Win64","Windows","WinCE"];return console.log(e),e&&s.indexOf(e)!==-1?!0:/windows|win32/i.test(t)}else throw new Error("不是浏览器环境 (is not browser environment)")},w=()=>{if(r()=="browser"){const{platform:e,ua:t}=d();return e&&["Linux","X11"].indexOf(e)!==-1?!0:/linux/i.test(t)}else throw new Error("不是浏览器环境 (is not browser environment)")},E=()=>{if(a())return"macos";if(m())return"windows";if(w())return"linux";throw new Error("不是桌面环境 (is not desktop environment)")},P=()=>typeof wx<"u"?"mp-weixin":typeof my<"u"?"mp-alipay":typeof swan<"u"?"mp-baidu":typeof Kwai<"u"?"mp-kuaishou":typeof qq<"u"?"mp-qq":typeof tt<"u"?"mp-toutiao":typeof uni<"u"?uni.platform:"unknown",p=()=>/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent),g=()=>/Android/i.test(navigator.userAgent),v=()=>({width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}),M=()=>{let o;if(p())o="ios";else if(g())o="android";else throw new Error("不是Ios/Android环境 (is not Ios/Android environment)");const{width:e,height:t}=v();return{platform:o,screenWidth:e,screenHeight:t}},O=Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"}));n.getDesktop=E,n.getEnv=r,n.getMiniProgramPlatform=P,n.getMobileDeviceInfo=M,n.getOs=y,n.getPlatformElectron=b,n.getPlatformNode=h,n.getScreenSize=v,n.isAndroid=g,n.isBrowser=u,n.isElectron=i,n.isIOS=p,n.isLinux=w,n.isMacOS=a,n.isNode=l,n.isWebWorker=c,n.isWindows=m,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
