
var Module = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(Module) {
  Module = Module || {};


var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa,ba;g.ready=new Promise(function(a,b){aa=a;ba=b});var t={},w;for(w in g)g.hasOwnProperty(w)&&(t[w]=g[w]);var ca="./this.program",da,ea,fa,ha;da=function(a){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,null)};ea=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||y("Assertion failed: undefined");return a};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));
process.argv.slice(2);process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",y);g.inspect=function(){return"[Emscripten Module object]"};var ia=g.print||console.log.bind(console),z=g.printErr||console.warn.bind(console);for(w in t)t.hasOwnProperty(w)&&(g[w]=t[w]);t=null;g.thisProgram&&(ca=g.thisProgram);var A;g.wasmBinary&&(A=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!==typeof WebAssembly&&y("no native wasm support detected");var ja,ka=!1,la=new TextDecoder("utf8");
function ma(a,b){if(!a)return"";b=a+b;for(var c=a;!(c>=b)&&C[c];)++c;return la.decode(C.subarray(a,c))}
function na(a,b,c,d){if(0<d){d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var n=a.charCodeAt(++h);f=65536+((f&1023)<<10)|n&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0}}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var pa=new TextDecoder("utf-16le");function qa(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&D[c];)++c;return pa.decode(C.subarray(a,c<<1))}function ra(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var h=0;h<c;++h)E[b>>1]=a.charCodeAt(h),b+=2;E[b>>1]=0;return b-d}
function sa(a){return 2*a.length}function ta(a,b){for(var c=0,d="";!(c>=b/4);){var h=F[a+4*c>>2];if(0==h)break;++c;65536<=h?(h-=65536,d+=String.fromCharCode(55296|h>>10,56320|h&1023)):d+=String.fromCharCode(h)}return d}function ua(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var n=a.charCodeAt(++h);f=65536+((f&1023)<<10)|n&1023}F[b>>2]=f;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var wa,G,C,E,D,F,H,xa,ya;function za(){var a=ja.buffer;wa=a;g.HEAP8=G=new Int8Array(a);g.HEAP16=E=new Int16Array(a);g.HEAP32=F=new Int32Array(a);g.HEAPU8=C=new Uint8Array(a);g.HEAPU16=D=new Uint16Array(a);g.HEAPU32=H=new Uint32Array(a);g.HEAPF32=xa=new Float32Array(a);g.HEAPF64=ya=new Float64Array(a)}var I,Aa=[],Ba=[],Ca=[];function Da(){var a=g.preRun.shift();Aa.unshift(a)}
var J=0,Ea=null,K=null;g.preloadedImages={};g.preloadedAudios={};function y(a){if(g.onAbort)g.onAbort(a);z(a);ka=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}var L=(new URL("jxl_node_enc.wasm",import.meta.url)).toString();
function Fa(){return Promise.resolve().then(function(){a:{try{if(L==L&&A){var a=new Uint8Array(A);break a}if(ea){a=ea(L);break a}throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}a=void 0}return a})}function Ga(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.ya;"number"===typeof c?void 0===b.$?I.get(c)():I.get(c)(b.$):c(void 0===b.$?null:b.$)}}}
function Ha(a){this.V=a-16;this.qa=function(b){F[this.V+8>>2]=b};this.na=function(b){F[this.V+0>>2]=b};this.oa=function(){F[this.V+4>>2]=0};this.ma=function(){G[this.V+12>>0]=0};this.pa=function(){G[this.V+13>>0]=0};this.ja=function(b,c){this.qa(b);this.na(c);this.oa();this.ma();this.pa()}}var Ia=0,M={};function Ja(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function N(a){return this.fromWireType(H[a>>2])}var O={},P={},Q={};
function Ka(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function La(a,b){a=Ka(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ma(a){var b=Error,c=La(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Na=void 0;
function Oa(a,b,c){function d(m){m=c(m);if(m.length!==a.length)throw new Na("Mismatched type converter count");for(var k=0;k<a.length;++k)R(a[k],m[k])}a.forEach(function(m){Q[m]=b});var h=Array(b.length),f=[],n=0;b.forEach(function(m,k){P.hasOwnProperty(m)?h[k]=P[m]:(f.push(m),O.hasOwnProperty(m)||(O[m]=[]),O[m].push(function(){h[k]=P[m];++n;n===f.length&&d(h)}))});0===f.length&&d(h)}
function Pa(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Qa=void 0;function T(a){for(var b="";C[a];)b+=Qa[C[a++]];return b}var Ra=void 0;function U(a){throw new Ra(a);}
function R(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||U('type "'+d+'" must have a positive integer typeid pointer');if(P.hasOwnProperty(a)){if(c.ia)return;U("Cannot register type '"+d+"' twice")}P[a]=b;delete Q[a];O.hasOwnProperty(a)&&(b=O[a],delete O[a],b.forEach(function(h){h()}))}var Sa=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ta(a){4<a&&0===--V[a].aa&&(V[a]=void 0,Sa.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Sa.length?Sa.pop():V.length;V[b]={aa:1,value:a};return b}}function Ua(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Va(a,b){switch(b){case 2:return function(c){return this.fromWireType(xa[c>>2])};case 3:return function(c){return this.fromWireType(ya[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Wa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=La(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Xa(a,b){var c=g;if(void 0===c[a].S){var d=c[a];c[a]=function(){c[a].S.hasOwnProperty(arguments.length)||U("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].S+")!");return c[a].S[arguments.length].apply(this,arguments)};c[a].S=[];c[a].S[d.da]=d}}
function Ya(a,b,c){g.hasOwnProperty(a)?((void 0===c||void 0!==g[a].S&&void 0!==g[a].S[c])&&U("Cannot register public name '"+a+"' twice"),Xa(a,a),g.hasOwnProperty(c)&&U("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),g[a].S[c]=b):(g[a]=b,void 0!==c&&(g[a].Aa=c))}function Za(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}
function $a(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=g["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=I.get(b).apply(null,c);return d}}function X(a,b){a=T(a);var c=a.includes("j")?$a(a,b):I.get(b);"function"!==typeof c&&U("unknown function pointer with signature "+a+": "+b);return c}var ab=void 0;function bb(a){a=cb(a);var b=T(a);Y(a);return b}
function db(a,b){function c(f){h[f]||P[f]||(Q[f]?Q[f].forEach(c):(d.push(f),h[f]=!0))}var d=[],h={};b.forEach(c);throw new ab(a+": "+d.map(bb).join([", "]));}function eb(a,b,c){switch(b){case 0:return c?function(d){return G[d]}:function(d){return C[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return D[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return H[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var fb={};
function gb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function hb(a,b){var c=P[a];void 0===c&&U(b+" has unknown type "+bb(a));return c}var ib={},jb={};function kb(){if(!lb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in jb)a[b]=jb[b];var c=[];for(b in a)c.push(b+"="+a[b]);lb=c}return lb}
var lb,mb=[null,[],[]];function Z(a){return 0===a%4&&(0!==a%100||0===a%400)}function nb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var ob=[31,29,31,30,31,30,31,31,30,31,30,31],pb=[31,28,31,30,31,30,31,31,30,31,30,31];function qb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Z(a.getFullYear())?ob:pb)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function rb(a,b,c,d){function h(e,l,u){for(e="number"===typeof e?e.toString():e||"";e.length<l;)e=u[0]+e;return e}function f(e,l){return h(e,l,"0")}function n(e,l){function u(B){return 0>B?-1:0<B?1:0}var v;0===(v=u(e.getFullYear()-l.getFullYear()))&&0===(v=u(e.getMonth()-l.getMonth()))&&(v=u(e.getDate()-l.getDate()));return v}function m(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),
0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function k(e){e=qb(new Date(e.R+1900,0,1),e.Z);var l=new Date(e.getFullYear()+1,0,4),u=m(new Date(e.getFullYear(),0,4));l=m(l);return 0>=n(u,e)?0>=n(l,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var q=F[d+40>>2];d={wa:F[d>>2],va:F[d+4>>2],X:F[d+8>>2],W:F[d+12>>2],U:F[d+16>>2],R:F[d+20>>2],Y:F[d+24>>2],Z:F[d+28>>2],Ba:F[d+32>>2],ua:F[d+36>>2],
xa:q?ma(q):""};c=ma(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var p in q)c=c.replace(new RegExp(p,"g"),q[p]);var r="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
x="January February March April May June July August September October November December".split(" ");q={"%a":function(e){return r[e.Y].substring(0,3)},"%A":function(e){return r[e.Y]},"%b":function(e){return x[e.U].substring(0,3)},"%B":function(e){return x[e.U]},"%C":function(e){return f((e.R+1900)/100|0,2)},"%d":function(e){return f(e.W,2)},"%e":function(e){return h(e.W,2," ")},"%g":function(e){return k(e).toString().substring(2)},"%G":function(e){return k(e)},"%H":function(e){return f(e.X,2)},"%I":function(e){e=
e.X;0==e?e=12:12<e&&(e-=12);return f(e,2)},"%j":function(e){return f(e.W+nb(Z(e.R+1900)?ob:pb,e.U-1),3)},"%m":function(e){return f(e.U+1,2)},"%M":function(e){return f(e.va,2)},"%n":function(){return"\n"},"%p":function(e){return 0<=e.X&&12>e.X?"AM":"PM"},"%S":function(e){return f(e.wa,2)},"%t":function(){return"\t"},"%u":function(e){return e.Y||7},"%U":function(e){var l=new Date(e.R+1900,0,1),u=0===l.getDay()?l:qb(l,7-l.getDay());e=new Date(e.R+1900,e.U,e.W);return 0>n(u,e)?f(Math.ceil((31-u.getDate()+
(nb(Z(e.getFullYear())?ob:pb,e.getMonth()-1)-31)+e.getDate())/7),2):0===n(u,l)?"01":"00"},"%V":function(e){var l=new Date(e.R+1901,0,4),u=m(new Date(e.R+1900,0,4));l=m(l);var v=qb(new Date(e.R+1900,0,1),e.Z);return 0>n(v,u)?"53":0>=n(l,v)?"01":f(Math.ceil((u.getFullYear()<e.R+1900?e.Z+32-u.getDate():e.Z+1-u.getDate())/7),2)},"%w":function(e){return e.Y},"%W":function(e){var l=new Date(e.R,0,1),u=1===l.getDay()?l:qb(l,0===l.getDay()?1:7-l.getDay()+1);e=new Date(e.R+1900,e.U,e.W);return 0>n(u,e)?f(Math.ceil((31-
u.getDate()+(nb(Z(e.getFullYear())?ob:pb,e.getMonth()-1)-31)+e.getDate())/7),2):0===n(u,l)?"01":"00"},"%y":function(e){return(e.R+1900).toString().substring(2)},"%Y":function(e){return e.R+1900},"%z":function(e){e=e.ua;var l=0<=e;e=Math.abs(e)/60;return(l?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.xa},"%%":function(){return"%"}};for(p in q)c.includes(p)&&(c=c.replace(new RegExp(p,"g"),q[p](d)));p=sb(c);if(p.length>b)return 0;G.set(p,a);return p.length-1}
Na=g.InternalError=Ma("InternalError");for(var tb=Array(256),ub=0;256>ub;++ub)tb[ub]=String.fromCharCode(ub);Qa=tb;Ra=g.BindingError=Ma("BindingError");g.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};g.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};ab=g.UnboundTypeError=Ma("UnboundTypeError");function sb(a){var b=Array(oa(a)+1);na(a,b,0,b.length);return b}
var wb={o:function(a){return vb(a+16)+16},D:function(){},n:function(a,b,c){(new Ha(a)).ja(b,c);Ia++;throw a;},k:function(a){var b=M[a];delete M[a];var c=b.ka,d=b.la,h=b.ba,f=h.map(function(n){return n.ha}).concat(h.map(function(n){return n.sa}));Oa([a],f,function(n){var m={};h.forEach(function(k,q){var p=n[q],r=k.fa,x=k.ga,e=n[q+h.length],l=k.ra,u=k.ta;m[k.ea]={read:function(v){return p.fromWireType(r(x,v))},write:function(v,B){var S=[];l(u,v,e.toWireType(S,B));Ja(S)}}});return[{name:b.name,fromWireType:function(k){var q=
{},p;for(p in m)q[p]=m[p].read(k);d(k);return q},toWireType:function(k,q){for(var p in m)if(!(p in q))throw new TypeError('Missing field:  "'+p+'"');var r=c();for(p in m)m[p].write(r,q[p]);null!==k&&k.push(d,r);return r},argPackAdvance:8,readValueFromPointer:N,T:d}]})},q:function(){},z:function(a,b,c,d,h){var f=Pa(c);b=T(b);R(a,{name:b,fromWireType:function(n){return!!n},toWireType:function(n,m){return m?d:h},argPackAdvance:8,readValueFromPointer:function(n){if(1===c)var m=G;else if(2===c)m=E;else if(4===
c)m=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(m[n>>f])},T:null})},y:function(a,b){b=T(b);R(a,{name:b,fromWireType:function(c){var d=V[c].value;Ta(c);return d},toWireType:function(c,d){return W(d)},argPackAdvance:8,readValueFromPointer:N,T:null})},h:function(a,b,c){c=Pa(c);b=T(b);R(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,h){if("number"!==typeof h&&"boolean"!==typeof h)throw new TypeError('Cannot convert "'+Ua(h)+'" to '+this.name);
return h},argPackAdvance:8,readValueFromPointer:Va(b,c),T:null})},j:function(a,b,c,d,h,f){var n=Za(b,c);a=T(a);h=X(d,h);Ya(a,function(){db("Cannot call "+a+" due to unbound types",n)},b-1);Oa([],n,function(m){var k=[m[0],null].concat(m.slice(1)),q=m=a,p=h,r=k.length;2>r&&U("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,e=!1,l=1;l<k.length;++l)if(null!==k[l]&&void 0===k[l].T){e=!0;break}var u="void"!==k[0].name,v="",B="";for(l=0;l<r-2;++l)v+=
(0!==l?", ":"")+"arg"+l,B+=(0!==l?", ":"")+"arg"+l+"Wired";q="return function "+Ka(q)+"("+v+") {\nif (arguments.length !== "+(r-2)+") {\nthrowBindingError('function "+q+" called with ' + arguments.length + ' arguments, expected "+(r-2)+" args!');\n}\n";e&&(q+="var destructors = [];\n");var S=e?"destructors":"null";v="throwBindingError invoker fn runDestructors retType classParam".split(" ");p=[U,p,f,Ja,k[0],k[1]];x&&(q+="var thisWired = classParam.toWireType("+S+", this);\n");for(l=0;l<r-2;++l)q+=
"var arg"+l+"Wired = argType"+l+".toWireType("+S+", arg"+l+"); // "+k[l+2].name+"\n",v.push("argType"+l),p.push(k[l+2]);x&&(B="thisWired"+(0<B.length?", ":"")+B);q+=(u?"var rv = ":"")+"invoker(fn"+(0<B.length?", ":"")+B+");\n";if(e)q+="runDestructors(destructors);\n";else for(l=x?1:2;l<k.length;++l)r=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==k[l].T&&(q+=r+"_dtor("+r+"); // "+k[l].name+"\n",v.push(r+"_dtor"),p.push(k[l].T));u&&(q+="var ret = retType.fromWireType(rv);\nreturn ret;\n");v.push(q+"}\n");
k=Wa(v).apply(null,p);l=b-1;if(!g.hasOwnProperty(m))throw new Na("Replacing nonexistant public symbol");void 0!==g[m].S&&void 0!==l?g[m].S[l]=k:(g[m]=k,g[m].da=l);return[]})},c:function(a,b,c,d,h){function f(q){return q}b=T(b);-1===h&&(h=4294967295);var n=Pa(c);if(0===d){var m=32-8*c;f=function(q){return q<<m>>>m}}var k=b.includes("unsigned");R(a,{name:b,fromWireType:f,toWireType:function(q,p){if("number"!==typeof p&&"boolean"!==typeof p)throw new TypeError('Cannot convert "'+Ua(p)+'" to '+this.name);
if(p<d||p>h)throw new TypeError('Passing a number "'+Ua(p)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+h+"]!");return k?p>>>0:p|0},argPackAdvance:8,readValueFromPointer:eb(b,n,0!==d),T:null})},b:function(a,b,c){function d(f){f>>=2;var n=H;return new h(wa,n[f+1],n[f])}var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=T(c);R(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},
{ia:!0})},i:function(a,b){b=T(b);var c="std::string"===b;R(a,{name:b,fromWireType:function(d){var h=H[d>>2];if(c)for(var f=d+4,n=0;n<=h;++n){var m=d+4+n;if(n==h||0==C[m]){f=ma(f,m-f);if(void 0===k)var k=f;else k+=String.fromCharCode(0),k+=f;f=m+1}}else{k=Array(h);for(n=0;n<h;++n)k[n]=String.fromCharCode(C[d+4+n]);k=k.join("")}Y(d);return k},toWireType:function(d,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var f="string"===typeof h;f||h instanceof Uint8Array||h instanceof Uint8ClampedArray||
h instanceof Int8Array||U("Cannot pass non-string to std::string");var n=(c&&f?function(){return oa(h)}:function(){return h.length})(),m=vb(4+n+1);H[m>>2]=n;if(c&&f)na(h,C,m+4,n+1);else if(f)for(f=0;f<n;++f){var k=h.charCodeAt(f);255<k&&(Y(m),U("String has UTF-16 code units that do not fit in 8 bits"));C[m+4+f]=k}else for(f=0;f<n;++f)C[m+4+f]=h[f];null!==d&&d.push(Y,m);return m},argPackAdvance:8,readValueFromPointer:N,T:function(d){Y(d)}})},g:function(a,b,c){c=T(c);if(2===b){var d=qa;var h=ra;var f=
sa;var n=function(){return D};var m=1}else 4===b&&(d=ta,h=ua,f=va,n=function(){return H},m=2);R(a,{name:c,fromWireType:function(k){for(var q=H[k>>2],p=n(),r,x=k+4,e=0;e<=q;++e){var l=k+4+e*b;if(e==q||0==p[l>>m])x=d(x,l-x),void 0===r?r=x:(r+=String.fromCharCode(0),r+=x),x=l+b}Y(k);return r},toWireType:function(k,q){"string"!==typeof q&&U("Cannot pass non-string to C++ string type "+c);var p=f(q),r=vb(4+p+b);H[r>>2]=p>>m;h(q,r+4,p+b);null!==k&&k.push(Y,r);return r},argPackAdvance:8,readValueFromPointer:N,
T:function(k){Y(k)}})},l:function(a,b,c,d,h,f){M[a]={name:T(b),ka:X(c,d),la:X(h,f),ba:[]}},d:function(a,b,c,d,h,f,n,m,k,q){M[a].ba.push({ea:T(b),ha:c,fa:X(d,h),ga:f,sa:n,ra:X(m,k),ta:q})},A:function(a,b){b=T(b);R(a,{za:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},e:Ta,C:function(a){if(0===a)return W(gb());var b=fb[a];a=void 0===b?T(a):b;return W(gb()[a])},B:function(a){4<a&&(V[a].aa+=1)},m:function(a,b,c,d){a||U("Cannot use deleted val. handle = "+a);a=V[a].value;
var h=ib[b];if(!h){h="";for(var f=0;f<b;++f)h+=(0!==f?", ":"")+"arg"+f;var n="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(f=0;f<b;++f)n+="var argType"+f+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+f+'], "parameter '+f+'");\nvar arg'+f+" = argType"+f+".readValueFromPointer(args);\nargs += argType"+f+"['argPackAdvance'];\n";h=(new Function("requireRegisteredType","Module","__emval_register",n+("var obj = new constructor("+h+");\nreturn __emval_register(obj);\n}\n")))(hb,
g,W);ib[b]=h}return h(a,c,d)},a:function(){y()},s:function(a,b,c){C.copyWithin(a,b,b+c)},f:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ja.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);za();var h=1;break a}catch(f){}h=void 0}if(h)return!0}return!1},u:function(a,b){var c=0;kb().forEach(function(d,h){var f=b+c;h=F[a+4*h>>2]=f;for(f=0;f<d.length;++f)G[h++>>0]=d.charCodeAt(f);
G[h>>0]=0;c+=d.length+1});return 0},v:function(a,b){var c=kb();F[a>>2]=c.length;var d=0;c.forEach(function(h){d+=h.length+1});F[b>>2]=d;return 0},w:function(){return 0},p:function(){},x:function(a,b,c,d){for(var h=0,f=0;f<c;f++){for(var n=F[b+8*f>>2],m=F[b+(8*f+4)>>2],k=0;k<m;k++){var q=C[n+k],p=mb[a];if(0===q||10===q){q=1===a?ia:z;var r;for(r=0;p[r]&&!(NaN<=r);)++r;r=la.decode(p.subarray?p.subarray(0,r):new Uint8Array(p.slice(0,r)));q(r);p.length=0}else p.push(q)}h+=m}F[d>>2]=h;return 0},r:function(){},
t:function(a,b,c,d){return rb(a,b,c,d)}};
(function(){function a(h){g.asm=h.exports;ja=g.asm.E;za();I=g.asm.K;Ba.unshift(g.asm.F);J--;g.monitorRunDependencies&&g.monitorRunDependencies(J);0==J&&(null!==Ea&&(clearInterval(Ea),Ea=null),K&&(h=K,K=null,h()))}function b(h){a(h.instance)}function c(h){return Fa().then(function(f){return WebAssembly.instantiate(f,d)}).then(h,function(f){z("failed to asynchronously prepare wasm: "+f);y(f)})}var d={a:wb};J++;g.monitorRunDependencies&&g.monitorRunDependencies(J);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(h){return z("Module.instantiateWasm callback failed with error: "+h),!1}(function(){return A||"function"!==typeof WebAssembly.instantiateStreaming||L.startsWith("data:application/octet-stream;base64,")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(h){return WebAssembly.instantiateStreaming(h,d).then(b,function(f){z("wasm streaming compile failed: "+f);z("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.F).apply(null,arguments)};var vb=g._malloc=function(){return(vb=g._malloc=g.asm.G).apply(null,arguments)},Y=g._free=function(){return(Y=g._free=g.asm.H).apply(null,arguments)},cb=g.___getTypeName=function(){return(cb=g.___getTypeName=g.asm.I).apply(null,arguments)};g.___embind_register_native_and_builtin_types=function(){return(g.___embind_register_native_and_builtin_types=g.asm.J).apply(null,arguments)};
g.dynCall_viijii=function(){return(g.dynCall_viijii=g.asm.L).apply(null,arguments)};g.dynCall_iiji=function(){return(g.dynCall_iiji=g.asm.M).apply(null,arguments)};g.dynCall_jiji=function(){return(g.dynCall_jiji=g.asm.N).apply(null,arguments)};g.dynCall_iiiiij=function(){return(g.dynCall_iiiiij=g.asm.O).apply(null,arguments)};g.dynCall_iiiiijj=function(){return(g.dynCall_iiiiijj=g.asm.P).apply(null,arguments)};g.dynCall_iiiiiijj=function(){return(g.dynCall_iiiiiijj=g.asm.Q).apply(null,arguments)};
var xb;K=function yb(){xb||zb();xb||(K=yb)};
function zb(){function a(){if(!xb&&(xb=!0,g.calledRun=!0,!ka)){Ga(Ba);aa(g);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var b=g.postRun.shift();Ca.unshift(b)}Ga(Ca)}}if(!(0<J)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Da();Ga(Aa);0<J||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);a()},1)):a())}}g.run=zb;
if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();zb();


  return Module.ready
}
);
})();
export default Module;