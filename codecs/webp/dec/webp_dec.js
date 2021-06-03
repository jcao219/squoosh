
var Module = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(Module) {
  Module = Module || {};


var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa,r;e.ready=new Promise(function(a,b){aa=a;r=b});var t={},u;for(u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);var v="",x;v=self.location.href;_scriptDir&&(v=_scriptDir);0!==v.indexOf("blob:")?v=v.substr(0,v.lastIndexOf("/")+1):v="";x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)};var y=e.printErr||console.warn.bind(console);
for(u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);t=null;var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&B("no native wasm support detected");var C,ba=!1,ca=new TextDecoder("utf8");
function da(a,b,c){var d=D;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ea=new TextDecoder("utf-16le");
function fa(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&E[c];)++c;return ea.decode(D.subarray(a,c<<1))}function ha(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)F[b>>1]=a.charCodeAt(f),b+=2;F[b>>1]=0;return b-d}function ia(a){return 2*a.length}function ja(a,b){for(var c=0,d="";!(c>=b/4);){var f=G[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}
function ka(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}G[b>>2]=g;b+=4;if(b+4>c)break}G[b>>2]=0;return b-d}function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var I,ma,D,F,E,G,K,na,oa;
function pa(){var a=C.buffer;I=a;e.HEAP8=ma=new Int8Array(a);e.HEAP16=F=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=E=new Uint16Array(a);e.HEAPU32=K=new Uint32Array(a);e.HEAPF32=na=new Float32Array(a);e.HEAPF64=oa=new Float64Array(a)}var L,qa=[],ra=[],sa=[];function ta(){var a=e.preRun.shift();qa.unshift(a)}var M=0,ua=null,N=null;e.preloadedImages={};e.preloadedAudios={};
function B(a){if(e.onAbort)e.onAbort(a);y(a);ba=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");r(a);throw a;}var O=(new URL("webp_dec.wasm",import.meta.url)).toString();function va(){try{if(O==O&&z)return new Uint8Array(z);if(x)return x(O);throw"both async and sync fetching of the wasm failed";}catch(a){B(a)}}
function wa(){return z||"function"!==typeof fetch?Promise.resolve().then(function(){return va()}):fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return va()})}function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.H;"number"===typeof c?void 0===b.C?L.get(c)():L.get(c)(b.C):c(void 0===b.C?null:b.C)}}}
function ya(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var za=void 0;function P(a){for(var b="";D[a];)b+=za[D[a++]];return b}var Q={},R={},S={};function Aa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Ba(a,b){a=Aa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Ca(a){var b=Error,c=Ba(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var Da=void 0;function T(a){throw new Da(a);}var Ea=void 0;function Fa(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Ea("Mismatched type converter count");for(var p=0;p<d.length;++p)U(d[p],h[p])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],k=0;a.forEach(function(h,p){R.hasOwnProperty(h)?f[p]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[p]=R[h];++k;k===g.length&&c(f)}))});0===g.length&&c(f)}
function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T('type "'+d+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.G)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Ia=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ja(a){4<a&&0===--V[a].D&&(V[a]=void 0,Ia.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ia.length?Ia.pop():V.length;V[b]={D:1,value:a};return b}}function Ka(a){return this.fromWireType(K[a>>2])}function La(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Ma(a,b){switch(b){case 2:return function(c){return this.fromWireType(na[c>>2])};case 3:return function(c){return this.fromWireType(oa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Na(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ba(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Oa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Pa(a,b){var c=e;if(void 0===c[a].A){var d=c[a];c[a]=function(){c[a].A.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].A+")!");return c[a].A[arguments.length].apply(this,arguments)};c[a].A=[];c[a].A[d.F]=d}}
function Qa(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].A&&void 0!==e[a].A[c])&&T("Cannot register public name '"+a+"' twice"),Pa(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].A[c]=b):(e[a]=b,void 0!==c&&(e[a].J=c))}function Ra(a,b){for(var c=[],d=0;d<a;d++)c.push(G[(b>>2)+d]);return c}
function Sa(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=e["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=L.get(b).apply(null,c);return d}}function Ta(a,b){a=P(a);var c=a.includes("j")?Sa(a,b):L.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var Ua=void 0;function Va(a){a=Wa(a);var b=P(a);X(a);return b}
function Xa(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new Ua(a+": "+d.map(Va).join([", "]));}function Ya(a,b,c){switch(b){case 0:return c?function(d){return ma[d]}:function(d){return D[d]};case 1:return c?function(d){return F[d>>1]}:function(d){return E[d>>1]};case 2:return c?function(d){return G[d>>2]}:function(d){return K[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Za={};
function $a(){return"object"===typeof globalThis?globalThis:Function("return this")()}function ab(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+Va(a));return c}for(var bb={},cb=Array(256),Y=0;256>Y;++Y)cb[Y]=String.fromCharCode(Y);za=cb;Da=e.BindingError=Ca("BindingError");Ea=e.InternalError=Ca("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};
Ua=e.UnboundTypeError=Ca("UnboundTypeError");
var eb={e:function(){},p:function(){},n:function(a,b,c,d,f){var g=ya(c);b=P(b);U(a,{name:b,fromWireType:function(k){return!!k},toWireType:function(k,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(k){if(1===c)var h=ma;else if(2===c)h=F;else if(4===c)h=G;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[k>>g])},B:null})},r:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Ja(c);return d},toWireType:function(c,d){return W(d)},
argPackAdvance:8,readValueFromPointer:Ka,B:null})},m:function(a,b,c){c=ya(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+La(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Ma(b,c),B:null})},i:function(a,b,c,d,f,g){var k=Ra(b,c);a=P(a);f=Ta(d,f);Qa(a,function(){Xa("Cannot call "+a+" due to unbound types",k)},b-1);Fa(k,function(h){var p=a,m=a;h=[h[0],null].concat(h.slice(1));
var n=f,q=h.length;2>q&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var w=null!==h[1]&&!1,A=!1,l=1;l<h.length;++l)if(null!==h[l]&&void 0===h[l].B){A=!0;break}var Ga="void"!==h[0].name,H="",J="";for(l=0;l<q-2;++l)H+=(0!==l?", ":"")+"arg"+l,J+=(0!==l?", ":"")+"arg"+l+"Wired";m="return function "+Aa(m)+"("+H+") {\nif (arguments.length !== "+(q-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(q-2)+" args!');\n}\n";
A&&(m+="var destructors = [];\n");var Ha=A?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[T,n,g,Oa,h[0],h[1]];w&&(m+="var thisWired = classParam.toWireType("+Ha+", this);\n");for(l=0;l<q-2;++l)m+="var arg"+l+"Wired = argType"+l+".toWireType("+Ha+", arg"+l+"); // "+h[l+2].name+"\n",H.push("argType"+l),n.push(h[l+2]);w&&(J="thisWired"+(0<J.length?", ":"")+J);m+=(Ga?"var rv = ":"")+"invoker(fn"+(0<J.length?", ":"")+J+");\n";if(A)m+="runDestructors(destructors);\n";
else for(l=w?1:2;l<h.length;++l)q=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==h[l].B&&(m+=q+"_dtor("+q+"); // "+h[l].name+"\n",H.push(q+"_dtor"),n.push(h[l].B));Ga&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(m+"}\n");h=Na(H).apply(null,n);l=b-1;if(!e.hasOwnProperty(p))throw new Ea("Replacing nonexistant public symbol");void 0!==e[p].A&&void 0!==l?e[p].A[l]=h:(e[p]=h,e[p].F=l);return[]})},b:function(a,b,c,d,f){function g(m){return m}b=P(b);-1===f&&(f=4294967295);var k=ya(c);
if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var p=b.includes("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+La(n)+'" to '+this.name);if(n<d||n>f)throw new TypeError('Passing a number "'+La(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return p?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:Ya(b,k,0!==d),B:null})},a:function(a,
b,c){function d(g){g>>=2;var k=K;return new f(I,k[g+1],k[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{G:!0})},h:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=K[d>>2];if(c)for(var g=d+4,k=0;k<=f;++k){var h=d+4+k;if(k==f||0==D[h]){if(g){for(var p=g+(h-g),m=g;!(m>=p)&&D[m];)++m;g=ca.decode(D.subarray(g,m))}else g="";if(void 0===
n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(f);for(k=0;k<f;++k)n[k]=String.fromCharCode(D[d+4+k]);n=n.join("")}X(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var k=(c&&g?function(){for(var m=0,n=0;n<f.length;++n){var q=f.charCodeAt(n);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|f.charCodeAt(++n)&
1023);127>=q?++m:m=2047>=q?m+2:65535>=q?m+3:m+4}return m}:function(){return f.length})(),h=db(4+k+1);K[h>>2]=k;if(c&&g)da(f,h+4,k+1);else if(g)for(g=0;g<k;++g){var p=f.charCodeAt(g);255<p&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));D[h+4+g]=p}else for(g=0;g<k;++g)D[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Ka,B:function(d){X(d)}})},f:function(a,b,c){c=P(c);if(2===b){var d=fa;var f=ha;var g=ia;var k=function(){return E};var h=1}else 4===
b&&(d=ja,f=ka,g=la,k=function(){return K},h=2);U(a,{name:c,fromWireType:function(p){for(var m=K[p>>2],n=k(),q,w=p+4,A=0;A<=m;++A){var l=p+4+A*b;if(A==m||0==n[l>>h])w=d(w,l-w),void 0===q?q=w:(q+=String.fromCharCode(0),q+=w),w=l+b}X(p);return q},toWireType:function(p,m){"string"!==typeof m&&T("Cannot pass non-string to C++ string type "+c);var n=g(m),q=db(4+n+b);K[q>>2]=n>>h;f(m,q+4,n+b);null!==p&&p.push(X,q);return q},argPackAdvance:8,readValueFromPointer:Ka,B:function(p){X(p)}})},o:function(a,b){b=
P(b);U(a,{I:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},c:Ja,d:function(a){if(0===a)return W($a());var b=Za[a];a=void 0===b?P(a):b;return W($a()[a])},j:function(a){4<a&&(V[a].D+=1)},k:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=bb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var k="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)k+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+
g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",k+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(ab,e,W);bb[b]=f}return f(a,c,d)},l:function(){B()},q:function(a,b,c){D.copyWithin(a,b,b+c)},g:function(a){var b=D.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,
d);0<d%65536&&(d+=65536-d%65536);a:{try{C.grow(Math.min(2147483648,d)-I.byteLength+65535>>>16);pa();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1}};
(function(){function a(f){e.asm=f.exports;C=e.asm.s;pa();L=e.asm.y;ra.unshift(e.asm.t);M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==ua&&(clearInterval(ua),ua=null),N&&(f=N,N=null,f()))}function b(f){a(f.instance)}function c(f){return wa().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){y("failed to asynchronously prepare wasm: "+g);B(g)})}var d={a:eb};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||O.startsWith("data:application/octet-stream;base64,")||"function"!==typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){y("wasm streaming compile failed: "+g);y("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(r);return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.t).apply(null,arguments)};var db=e._malloc=function(){return(db=e._malloc=e.asm.u).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.v).apply(null,arguments)},Wa=e.___getTypeName=function(){return(Wa=e.___getTypeName=e.asm.w).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.x).apply(null,arguments)};var Z;
N=function fb(){Z||gb();Z||(N=fb)};
function gb(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!ba)){xa(ra);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();sa.unshift(b)}xa(sa)}}if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ta();xa(qa);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=gb;
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();gb();


  return Module.ready
}
);
})();
export default Module;