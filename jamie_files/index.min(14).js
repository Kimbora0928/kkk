!function(){var t,l,s,u,f,a,e,p;function d(e,n){var t,r={}.hasOwnProperty;for(t in n)r.call(n,t)&&(e[t]=n[t]);return e}t="undefined"!=typeof window&&null!==window?window.fetch:"undefined"!=typeof module&&null!==module&&"undefined"!=typeof require&&null!==require?require("node-fetch"):null,l="undefined"!=typeof window&&null!==window?window.semver:"undefined"!=typeof module&&null!==module&&"undefined"!=typeof require&&null!==require?require("@plotdb/semver"):null,f=function(e,n){return t(e,n).then(function(i){var e;return i&&i.ok?i.text():i?i.clone().text().then(function(e){var n,t=i.status||404,r=new Error(t+" "+e);r.name="lderror",r.id=t,r.message=e,r=r;try{(n=JSON.parse(e))&&"lderror"===n.name&&(d(r,n).json=n)}catch(e){0}return Promise.reject(r)}):Promise.reject(((e=new Error("404")).name="lderror",e.id=404,e))})},(a=function(e){var n,t,r,i,o=this;return this.lc=(e=null==e?{}:e).context||{},this.id=Math.random().toString(36).substring(2),e.iframe?this.iframe=e.iframe:(this.iframe=n=u.createElement("iframe"),(t=n.style).position="absolute",t.top=0,t.left=0,t.width=0,t.height=0,t.pointerEvents="none",t.opacity=0,n.setAttribute("title","rescope script loader"),n.setAttribute("name","pdb-proxin-"+this.id),n.setAttribute("sandbox","allow-same-origin allow-scripts"),u.body.appendChild(n)),r=Object.fromEntries(Reflect.ownKeys(this.iframe.contentWindow).map(function(e){return[e,!0]})),i={},this._proxy=new Proxy(e.target||s,{get:function(e,n,t){return null!=o.lc[n]?o.lc[n]:null!=i[n]?i[n]:"function"==typeof e[n]?i[n]=e[n].bind(e):null!=r[n]?e[n]:void 0},set:function(e,n,t){return r[n]?e[n]=t:o.lc[n]=t,!0}}),this}).prototype=((e=Object.create(Object.prototype)).proxy=function(){return this._proxy},e.ctx=function(){return this.lc},e),(p=function(e){var n,t;return null==e&&(e={}),this.id=Math.random().toString(36).substring(2),this.iframe=n=u.createElement("iframe"),this._cache={},this.proxy=new a,this.registry(e.registry||"/assets/lib/"),(t=n.style).position="absolute",t.top=0,t.left=0,t.width=0,t.height=0,t.pointerEvents="none",t.opacity=0,n.setAttribute("title","rescope script loader"),n.setAttribute("name","pdb-rescope-"+this.id),n.setAttribute("sandbox","allow-same-origin allow-scripts"),u.body.appendChild(n),n.contentWindow.document.body.innerHTML=(e.preloads||[]).map(function(e){return'<script type="text/javascript" src="'+e+'"><\/script>'}).join(""),this}).env=function(e){e=[e,e.document];return s=e[0],u=e[1],e},p.prop={legacy:{webkitStorageInfo:!0}},p.id=function(e){return e.id||e.url||e.name+"@"+(e.version||"")+":"+(e.path||"")},p._cache={},p._ver={map:{},list:{}},p.cache=function(e){var n,t,r,i,o,u,c,s;if((e="string"==typeof e?{url:e}:e).id||(e.id=p.id(e)),n=this._cache[e.id])return n;if(o=(i=(r=(t=e.id&&!e.name?(t=/^(\S+)@(\S+):(\S+)$/.exec(e.id))?[t[1],t[2],t[3]]:[e.id,"",""]:[e.name,e.version||"",e.path||""])[0],t[1]),t[2]),/^[0-9.]+$/.exec(i)){if((n=((t=this._ver.map)[r]||(t[r]={}))[i])&&(i=n),n=this._cache[p.id({name:r,version:i,path:o})])return n;for(u=0,c=((t=this._ver.list)[r]||(t[r]=[])).length;u<c;++u)if(s=u,s=this._ver.list[r][s],l.fit(s,i)&&(this._ver.map[r][i]=s,e.id=p.id({name:r,version:s,path:o}),n=this._cache[e.id]))return n}return function(e,n){var t=-1,r=n.length>>>0;for(;++t<r;)if(e===n[t])return!0;return!1}(i,(t=this._ver.list)[r]||(t[r]=[]))||this._ver.list[r].push(i),this._cache[e.id]=e},p.prototype=((e=Object.create(Object.prototype)).peekScope=function(){return!1},e.init=function(){return Promise.resolve()},e._ref=function(e){var n;return"string"==typeof e?e:(n=e.url)?n:this._reg.fetch?this._reg.fetch(e):this._reg(e)},e.registry=function(e){return"string"==typeof e?("/"===e[e.length-1]&&(e=e.substring(0,e.length-1)),this._reg=(n=e,function(e){return n+"/"+e.name+"/"+(e.version||"main")+"/"+(e.path||"index.min.js")})):this._reg=e;var n},e.cache=function(e){var n;return(e="string"==typeof e?{url:e}:e).id||(e.id=p.id(e)),(n=this._cache[e.id])?n:this._cache[e.id]=p.cache(e)},e.bundle=function(n){var t,e,r,i,o=this;for(r in null==n&&(n=[]),n=(Array.isArray(n)?n:[n]).map(function(e){return o.cache(e)}),t={},n.filter(function(e){return e&&e.id}).map(function(e){return t[e.id]=e}),e=[],t)i=t[r],e.push(i);return n=e,this.load(n,null,!0,!0).then(function(){var e=n.filter(function(e){return e.code}).map(function(e){return JSON.stringify({url:e.url,id:e.id,name:e.name,version:e.version,path:e.path,code:e.code})});return Promise.resolve("["+e.join(",")+"].forEach(function(o){rescope.cache(o);})")})},e.exports=function(e){var n,t=[],r=(e=null==e?{}:e).ctx||{},i="string"==typeof e.libs?[e.libs]:e.libs||[],o=(e=[{},this.iframe.contentWindow])[0],u=e[1];for(n in r)o[n]=u[n],u[n]=r[n];for(n in this._exports(i,0,r),o)t.push(u[n]=o[n]);return t},e._exports=function(e,n,t){var r,i,o,u,c,s,l=[];if(null==t&&(t={}),r=e[n=null==n?0:n]){if(o=(i=[{},(r=this.cache(r)).fprop,this.iframe.contentWindow])[0],u=i[1],c=i[2],u)for(s in u)o[s]=c[s],c[s]=u[s];else if(r.fprop=u={},r.prop={},r.propIniting=!0,r.gen)d(u,r.gen.apply(c,[c,c,c])),r.prop=Object.fromEntries(function(){var e=[];for(s in u)e.push([s,null]);return e}());else{for(s in Object.fromEntries(Reflect.ownKeys(c).filter(function(e){return!p.prop.legacy[e]}).map(function(e){return[e,!0]})))o[s]=c[s];for(s in c.eval(r.code),Object.fromEntries(Reflect.ownKeys(c).filter(function(e){return!p.prop.legacy[e]}).map(function(e){return[e,!0]})))c[s]!==o[s]&&"NaN"!==s&&(u[s]=c[s],r.prop[s]=null)}for(s in u)t[s]=u[s];for(s in this._exports(e,n+1),u)l.push(c[s]=o[s]);return l}},e._wrap=function(e,n,t){var r,i,o;for(o in null==n&&(n={}),null==t&&(t={}),i="var window, global, globalThis, self, __ret = {}; __win = {};\nwindow = global = globalThis = window = scope;",r=(e=null==e?{}:e).prop||{})i+="var "+o+"; __win['"+o+"'] = win['"+o+"']; win['"+o+"'] = undefined;";for(o in n)i+="var "+o+" = window['"+o+"'] = ctx['"+o+"'];";for(o in i+=e.code+";",r)i+="__ret['"+o+"'] = "+o+" || window['"+o+"'] || win['"+o+"'] || this['"+o+"'];\nwin['"+o+"'] = __win['"+o+"'];";return i+="return __ret;",t.codeOnly?"function(scope, ctx, win){"+i+"}":new Function("scope","ctx","win",i)},e.load=function(e,n,t,r){var i,o,u,c=this;return null==n&&(n={}),null==t&&(t=!1),null==r&&(r=!1),u=(e=(Array.isArray(e)?e:[e]).map(function(e){return c.cache(e)})).px||(e.px=n&&n.p?n.p:new a),i=u.ctx(),o=u.proxy(),u=e.map(function(n){var e;return!n.code&&!n.gen||t?(e=c._ref(n)).then?e.then(function(e){return n.code=e.content,c.cache((n.id=void 0,n.version=e.version,n.code=e.content,n))}):f(e,{method:"GET"}).then(function(e){return n.code=e}):Promise.resolve()}),Promise.all(u).then(function(){if(!r)return c.exports({libs:e,ctx:n.f}),e.map(function(e){return e.propIniting&&(e.gen||(e.gen=c._wrap(e,i)),e.prop=e.gen.apply(o,[o,i,s]),e.propIniting=!1),d(i,e.prop)})}).then(function(){return i})},e.context=function(e,n,t){var r;return"function"!=typeof n&&(n=(r=[t,n])[0],t=r[1]),this.load(e,t).then(function(e){return n?n(e):e})},e),p.env("undefined"!=typeof self&&null!==self?self:globalThis),p.proxin=a,p.dualContext=function(){return{p:new a,f:{},ctx:function(){return this.p.ctx()}}},"undefined"!=typeof module&&null!==module?module.exports=p:"undefined"!=typeof window&&null!==window&&(window.rescope=p)}.call(this);