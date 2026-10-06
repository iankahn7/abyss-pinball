/* ---- Matter.js: Phaser 3.55 build (MIT, (c) Liam Brummitt / Photon Storm) ---- */
var Matter=(()=>{var L=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var F=L((fn,Cr)=>{var C={};Cr.exports=C;(function(){C._nextId=0,C._seed=0,C._nowStartTime=+new Date,C.extend=function(e,t){var n,i,a;typeof t=="boolean"?(n=2,a=t):(n=1,a=!0);for(var s=n;s<arguments.length;s++){var o=arguments[s];if(o)for(var l in o)a&&o[l]&&o[l].constructor===Object&&(!e[l]||e[l].constructor===Object)?(e[l]=e[l]||{},C.extend(e[l],a,o[l])):e[l]=o[l]}return e},C.clone=function(e,t){return C.extend({},t,e)},C.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},C.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),i=0;i<n.length;i++)t.push(e[n[i]]);return t}for(var a in e)t.push(e[a]);return t},C.get=function(e,t,n,i){t=t.split(".").slice(n,i);for(var a=0;a<t.length;a+=1)e=e[t[a]];return e},C.set=function(e,t,n,i,a){var s=t.split(".").slice(i,a);return C.get(e,t,0,-1)[s[s.length-1]]=n,n},C.shuffle=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(C.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e},C.choose=function(e){return e[Math.floor(C.random()*e.length)]},C.isElement=function(e){return typeof HTMLElement<"u"?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},C.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"},C.isFunction=function(e){return typeof e=="function"},C.isPlainObject=function(e){return typeof e=="object"&&e.constructor===Object},C.isString=function(e){return Object.prototype.toString.call(e)==="[object String]"},C.clamp=function(e,t,n){return e<t?t:e>n?n:e},C.sign=function(e){return e<0?-1:1},C.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return new Date-C._nowStartTime},C.random=function(e,t){return e=typeof e<"u"?e:0,t=typeof t<"u"?t:1,e+r()*(t-e)};var r=function(){return C._seed=(C._seed*9301+49297)%233280,C._seed/233280};C.colorToNumber=function(e){return e=e.replace("#",""),e.length==3&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},C.logLevel=1,C.log=function(){console&&C.logLevel>0&&C.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},C.info=function(){console&&C.logLevel>0&&C.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},C.warn=function(){console&&C.logLevel>0&&C.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},C.nextId=function(){return C._nextId++},C.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},C.map=function(e,t){if(e.map)return e.map(t);for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n},C.topologicalSort=function(e){var t=[],n=[],i=[];for(var a in e)!n[a]&&!i[a]&&C._topologicalSort(a,n,i,e,t);return t},C._topologicalSort=function(e,t,n,i,a){var s=i[e]||[];n[e]=!0;for(var o=0;o<s.length;o+=1){var l=s[o];n[l]||t[l]||C._topologicalSort(l,t,n,i,a)}n[e]=!1,t[e]=!0,a.push(e)},C.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var i=function(){for(var a,s=new Array(arguments.length),o=0,l=arguments.length;o<l;o++)s[o]=arguments[o];for(o=0;o<e.length;o+=1){var f=e[o].apply(a,s);typeof f<"u"&&(a=f)}return a};return i._chained=e,i},C.chainPathBefore=function(e,t,n){return C.set(e,t,C.chain(n,C.get(e,t)))},C.chainPathAfter=function(e,t,n){return C.set(e,t,C.chain(C.get(e,t),n))}})()});var er=L((un,Pr)=>{var _={};Pr.exports=_;var G=F();(function(){_._registry={},_.register=function(r){if(_.isPlugin(r)||G.warn("Plugin.register:",_.toString(r),"does not implement all required fields."),r.name in _._registry){var e=_._registry[r.name],t=_.versionParse(r.version).number,n=_.versionParse(e.version).number;t>n?(G.warn("Plugin.register:",_.toString(e),"was upgraded to",_.toString(r)),_._registry[r.name]=r):t<n?G.warn("Plugin.register:",_.toString(e),"can not be downgraded to",_.toString(r)):r!==e&&G.warn("Plugin.register:",_.toString(r),"is already registered to different plugin object")}else _._registry[r.name]=r;return r},_.resolve=function(r){return _._registry[_.dependencyParse(r).name]},_.toString=function(r){return typeof r=="string"?r:(r.name||"anonymous")+"@"+(r.version||r.range||"0.0.0")},_.isPlugin=function(r){return r&&r.name&&r.version&&r.install},_.isUsed=function(r,e){return r.used.indexOf(e)>-1},_.isFor=function(r,e){var t=r.for&&_.dependencyParse(r.for);return!r.for||e.name===t.name&&_.versionSatisfies(e.version,t.range)},_.use=function(r,e){if(r.uses=(r.uses||[]).concat(e||[]),r.uses.length===0){G.warn("Plugin.use:",_.toString(r),"does not specify any dependencies to install.");return}for(var t=_.dependencies(r),n=G.topologicalSort(t),i=[],a=0;a<n.length;a+=1)if(n[a]!==r.name){var s=_.resolve(n[a]);if(!s){i.push("\u274C "+n[a]);continue}_.isUsed(r,s.name)||(_.isFor(s,r)||(G.warn("Plugin.use:",_.toString(s),"is for",s.for,"but installed on",_.toString(r)+"."),s._warned=!0),s.install?s.install(r):(G.warn("Plugin.use:",_.toString(s),"does not specify an install function."),s._warned=!0),s._warned?(i.push("\u{1F536} "+_.toString(s)),delete s._warned):i.push("\u2705 "+_.toString(s)),r.used.push(s.name))}i.length>0&&!s.silent&&G.info(i.join("  "))},_.dependencies=function(r,e){var t=_.dependencyParse(r),n=t.name;if(e=e||{},!(n in e)){r=_.resolve(r)||r,e[n]=G.map(r.uses||[],function(a){_.isPlugin(a)&&_.register(a);var s=_.dependencyParse(a),o=_.resolve(a);return o&&!_.versionSatisfies(o.version,s.range)?(G.warn("Plugin.dependencies:",_.toString(o),"does not satisfy",_.toString(s),"used by",_.toString(t)+"."),o._warned=!0,r._warned=!0):o||(G.warn("Plugin.dependencies:",_.toString(a),"used by",_.toString(t),"could not be resolved."),r._warned=!0),s.name});for(var i=0;i<e[n].length;i+=1)_.dependencies(e[n][i],e);return e}},_.dependencyParse=function(r){if(G.isString(r)){var e=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;return e.test(r)||G.warn("Plugin.dependencyParse:",r,"is not a valid dependency string."),{name:r.split("@")[0],range:r.split("@")[1]||"*"}}return{name:r.name,range:r.range||r.version}},_.versionParse=function(r){var e=/^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/;e.test(r)||G.warn("Plugin.versionParse:",r,"is not a valid version or range.");var t=r.split("-");r=t[0];var n=isNaN(Number(r[0])),i=n?r.substr(1):r,a=G.map(i.split("."),function(s){return Number(s)});return{isRange:n,version:i,range:r,operator:n?r[0]:"",parts:a,prerelease:t[1],number:a[0]*1e8+a[1]*1e4+a[2]}},_.versionSatisfies=function(r,e){e=e||"*";var t=_.versionParse(e),n=t.parts,i=_.versionParse(r),a=i.parts;if(t.isRange){if(t.operator==="*"||r==="*")return!0;if(t.operator==="~")return a[0]===n[0]&&a[1]===n[1]&&a[2]>=n[2];if(t.operator==="^")return n[0]>0?a[0]===n[0]&&i.number>=t.number:n[1]>0?a[1]===n[1]&&a[2]>=n[2]:a[2]===n[2]}return r===e||r==="*"}})()});var Mr=L((cn,Ir)=>{var $={};Ir.exports=$;var dt=er(),_r=F();(function(){$.name="matter-js",$.version="0.14.2",$.uses=[],$.used=[],$.use=function(){dt.use($,Array.prototype.slice.call(arguments))},$.before=function(r,e){return r=r.replace(/^Matter./,""),_r.chainPathBefore($,r,e)},$.after=function(r,e){return r=r.replace(/^Matter./,""),_r.chainPathAfter($,r,e)}})()});var H=L((vn,wr)=>{var T={};wr.exports=T;(function(){T.create=function(r,e){return{x:r||0,y:e||0}},T.clone=function(r){return{x:r.x,y:r.y}},T.magnitude=function(r){return Math.sqrt(r.x*r.x+r.y*r.y)},T.magnitudeSquared=function(r){return r.x*r.x+r.y*r.y},T.rotate=function(r,e,t){var n=Math.cos(e),i=Math.sin(e);t||(t={});var a=r.x*n-r.y*i;return t.y=r.x*i+r.y*n,t.x=a,t},T.rotateAbout=function(r,e,t,n){var i=Math.cos(e),a=Math.sin(e);n||(n={});var s=t.x+((r.x-t.x)*i-(r.y-t.y)*a);return n.y=t.y+((r.x-t.x)*a+(r.y-t.y)*i),n.x=s,n},T.normalise=function(r){var e=T.magnitude(r);return e===0?{x:0,y:0}:{x:r.x/e,y:r.y/e}},T.dot=function(r,e){return r.x*e.x+r.y*e.y},T.cross=function(r,e){return r.x*e.y-r.y*e.x},T.cross3=function(r,e,t){return(e.x-r.x)*(t.y-r.y)-(e.y-r.y)*(t.x-r.x)},T.add=function(r,e,t){return t||(t={}),t.x=r.x+e.x,t.y=r.y+e.y,t},T.sub=function(r,e,t){return t||(t={}),t.x=r.x-e.x,t.y=r.y-e.y,t},T.mult=function(r,e){return{x:r.x*e,y:r.y*e}},T.div=function(r,e){return{x:r.x/e,y:r.y/e}},T.perp=function(r,e){return e=e===!0?-1:1,{x:e*-r.y,y:e*r.x}},T.neg=function(r){return{x:-r.x,y:-r.y}},T.angle=function(r,e){return Math.atan2(e.y-r.y,e.x-r.x)},T._temp=[T.create(),T.create(),T.create(),T.create(),T.create(),T.create()]})()});var re=L((xn,qr)=>{var D={};qr.exports=D;var B=H(),yr=F();(function(){D.create=function(r,e){for(var t=[],n=0;n<r.length;n++){var i=r[n],a={x:i.x,y:i.y,index:n,body:e,isInternal:!1,contact:null,offset:null};a.contact={vertex:a,normalImpulse:0,tangentImpulse:0},t.push(a)}return t},D.fromPath=function(r,e){var t=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,n=[];return r.replace(t,function(i,a,s){n.push({x:parseFloat(a),y:parseFloat(s)})}),D.create(n,e)},D.centre=function(r){for(var e=D.area(r,!0),t={x:0,y:0},n,i,a,s=0;s<r.length;s++)a=(s+1)%r.length,n=B.cross(r[s],r[a]),i=B.mult(B.add(r[s],r[a]),n),t=B.add(t,i);return B.div(t,6*e)},D.mean=function(r){for(var e={x:0,y:0},t=0;t<r.length;t++)e.x+=r[t].x,e.y+=r[t].y;return B.div(e,r.length)},D.area=function(r,e){for(var t=0,n=r.length-1,i=0;i<r.length;i++)t+=(r[n].x-r[i].x)*(r[n].y+r[i].y),n=i;return e?t/2:Math.abs(t)/2},D.inertia=function(r,e){for(var t=0,n=0,i=r,a,s,o=0;o<i.length;o++)s=(o+1)%i.length,a=Math.abs(B.cross(i[s],i[o])),t+=a*(B.dot(i[s],i[s])+B.dot(i[s],i[o])+B.dot(i[o],i[o])),n+=a;return e/6*(t/n)},D.translate=function(r,e,t){var n;if(t)for(n=0;n<r.length;n++)r[n].x+=e.x*t,r[n].y+=e.y*t;else for(n=0;n<r.length;n++)r[n].x+=e.x,r[n].y+=e.y;return r},D.rotate=function(r,e,t){if(e!==0){for(var n=Math.cos(e),i=Math.sin(e),a=0;a<r.length;a++){var s=r[a],o=s.x-t.x,l=s.y-t.y;s.x=t.x+(o*n-l*i),s.y=t.y+(o*i+l*n)}return r}},D.contains=function(r,e){for(var t=0;t<r.length;t++){var n=r[t],i=r[(t+1)%r.length];if((e.x-n.x)*(i.y-n.y)+(e.y-n.y)*(n.x-i.x)>0)return!1}return!0},D.scale=function(r,e,t,n){if(e===1&&t===1)return r;n=n||D.centre(r);for(var i,a,s=0;s<r.length;s++)i=r[s],a=B.sub(i,n),r[s].x=n.x+a.x*e,r[s].y=n.y+a.y*t;return r},D.chamfer=function(r,e,t,n,i){typeof e=="number"?e=[e]:e=e||[8],t=typeof t<"u"?t:-1,n=n||2,i=i||14;for(var a=[],s=0;s<r.length;s++){var o=r[s-1>=0?s-1:r.length-1],l=r[s],f=r[(s+1)%r.length],u=e[s<e.length?s:e.length-1];if(u===0){a.push(l);continue}var v=B.normalise({x:l.y-o.y,y:o.x-l.x}),c=B.normalise({x:f.y-l.y,y:l.x-f.x}),x=Math.sqrt(2*Math.pow(u,2)),p=B.mult(yr.clone(v),u),g=B.normalise(B.mult(B.add(v,c),.5)),M=B.sub(l,B.mult(g,x)),P=t;t===-1&&(P=Math.pow(u,.32)*1.75),P=yr.clamp(P,n,i),P%2===1&&(P+=1);for(var q=Math.acos(B.dot(v,c)),h=q/P,y=0;y<P;y++)a.push(B.add(B.rotate(p,h*y),M))}return a},D.clockwiseSort=function(r){var e=D.mean(r);return r.sort(function(t,n){return B.angle(e,t)-B.angle(e,n)}),r},D.isConvex=function(r){var e=0,t=r.length,n,i,a,s;if(t<3)return null;for(n=0;n<t;n++)if(i=(n+1)%t,a=(n+2)%t,s=(r[i].x-r[n].x)*(r[a].y-r[i].y),s-=(r[i].y-r[n].y)*(r[a].x-r[i].x),s<0?e|=1:s>0&&(e|=2),e===3)return!1;return e!==0?!0:null},D.hull=function(r){var e=[],t=[],n,i;for(r=r.slice(0),r.sort(function(a,s){var o=a.x-s.x;return o!==0?o:a.y-s.y}),i=0;i<r.length;i+=1){for(n=r[i];t.length>=2&&B.cross3(t[t.length-2],t[t.length-1],n)<=0;)t.pop();t.push(n)}for(i=r.length-1;i>=0;i-=1){for(n=r[i];e.length>=2&&B.cross3(e[e.length-2],e[e.length-1],n)<=0;)e.pop();e.push(n)}return e.pop(),t.pop(),e.concat(t)}})()});var Se=L((hn,Ar)=>{var De={};Ar.exports=De;var rr=F();(function(){De.on=function(r,e,t){for(var n=e.split(" "),i,a=0;a<n.length;a++)i=n[a],r.events=r.events||{},r.events[i]=r.events[i]||[],r.events[i].push(t);return t},De.off=function(r,e,t){if(!e){r.events={};return}typeof e=="function"&&(t=e,e=rr.keys(r.events).join(" "));for(var n=e.split(" "),i=0;i<n.length;i++){var a=r.events[n[i]],s=[];if(t&&a)for(var o=0;o<a.length;o++)a[o]!==t&&s.push(a[o]);r.events[n[i]]=s}},De.trigger=function(r,e,t){var n,i,a,s,o=r.events;if(o&&rr.keys(o).length>0){t||(t={}),n=e.split(" ");for(var l=0;l<n.length;l++)if(i=n[l],a=o[i],a){s=rr.clone(t,!1),s.name=i,s.source=r;for(var f=0;f<a.length;f++)a[f].apply(r,[s])}}}})()});var Ce=L((gn,Lr)=>{var N={};Lr.exports=N;var kr=Se();(function(){N._motionWakeThreshold=.18,N._motionSleepThreshold=.08,N._minBias=.9,N.update=function(r,e){for(var t=e*e*e,n=0;n<r.length;n++){var i=r[n],a=i.speed*i.speed+i.angularSpeed*i.angularSpeed;if(i.force.x!==0||i.force.y!==0){N.set(i,!1);continue}var s=Math.min(i.motion,a),o=Math.max(i.motion,a);i.motion=N._minBias*s+(1-N._minBias)*o,i.sleepThreshold>0&&i.motion<N._motionSleepThreshold*t?(i.sleepCounter+=1,i.sleepCounter>=i.sleepThreshold&&N.set(i,!0)):i.sleepCounter>0&&(i.sleepCounter-=1)}},N.afterCollisions=function(r,e){for(var t=e*e*e,n=0;n<r.length;n++){var i=r[n];if(i.isActive){var a=i.collision,s=a.bodyA.parent,o=a.bodyB.parent;if(!(s.isSleeping&&o.isSleeping||s.isStatic||o.isStatic)&&(s.isSleeping||o.isSleeping)){var l=s.isSleeping&&!s.isStatic?s:o,f=l===s?o:s;!l.isStatic&&f.motion>N._motionWakeThreshold*t&&N.set(l,!1)}}}},N.set=function(r,e){var t=r.isSleeping;e?(r.isSleeping=!0,r.sleepCounter=r.sleepThreshold,r.positionImpulse.x=0,r.positionImpulse.y=0,r.positionPrev.x=r.position.x,r.positionPrev.y=r.position.y,r.anglePrev=r.angle,r.speed=0,r.angularSpeed=0,r.motion=0,t||kr.trigger(r,"sleepStart")):(r.isSleeping=!1,r.sleepCounter=0,t&&kr.trigger(r,"sleepEnd"))}})()});var J=L((pn,Tr)=>{var te={};Tr.exports=te;(function(){te.create=function(r){var e={min:{x:0,y:0},max:{x:0,y:0}};return r&&te.update(e,r),e},te.update=function(r,e,t){r.min.x=1/0,r.max.x=-1/0,r.min.y=1/0,r.max.y=-1/0;for(var n=0;n<e.length;n++){var i=e[n];i.x>r.max.x&&(r.max.x=i.x),i.x<r.min.x&&(r.min.x=i.x),i.y>r.max.y&&(r.max.y=i.y),i.y<r.min.y&&(r.min.y=i.y)}t&&(t.x>0?r.max.x+=t.x:r.min.x+=t.x,t.y>0?r.max.y+=t.y:r.min.y+=t.y)},te.contains=function(r,e){return e.x>=r.min.x&&e.x<=r.max.x&&e.y>=r.min.y&&e.y<=r.max.y},te.overlaps=function(r,e){return r.min.x<=e.max.x&&r.max.x>=e.min.x&&r.max.y>=e.min.y&&r.min.y<=e.max.y},te.translate=function(r,e){r.min.x+=e.x,r.max.x+=e.x,r.min.y+=e.y,r.max.y+=e.y},te.shift=function(r,e){var t=r.max.x-r.min.x,n=r.max.y-r.min.y;r.min.x=e.x,r.max.x=e.x+t,r.min.y=e.y,r.max.y=e.y+n}})()});var We=L((mn,Br)=>{var tr={};Br.exports=tr;var St=H(),Ct=F();(function(){tr.fromVertices=function(r){for(var e={},t=0;t<r.length;t++){var n=(t+1)%r.length,i=St.normalise({x:r[n].y-r[t].y,y:r[t].x-r[n].x}),a=i.y===0?1/0:i.x/i.y;a=a.toFixed(3).toString(),e[a]=i}return Ct.values(e)},tr.rotate=function(r,e){if(e!==0)for(var t=Math.cos(e),n=Math.sin(e),i=0;i<r.length;i++){var a=r[i],s;s=a.x*t-a.y*n,a.y=a.x*n+a.y*t,a.x=s}}})()});var fe=L((dn,Or)=>{var S={};Or.exports=S;var V=re(),j=H(),Pt=Ce(),Vr=F(),ne=J(),Pe=We();(function(){S._inertiaScale=4,S._nextCollidingGroupId=1,S._nextNonCollidingGroupId=-1,S._nextCategory=1,S.create=function(e){var t={id:Vr.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:null,position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},previousPositionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inverseMass:0,inertia:0,inverseInertia:0,_original:null,render:{visible:!0,opacity:1,sprite:{xOffset:0,yOffset:0},fillColor:null,fillOpacity:null,lineColor:null,lineOpacity:null,lineThickness:null},gameObject:null,scale:{x:1,y:1},centerOfMass:{x:0,y:0},centerOffset:{x:0,y:0},gravityScale:{x:1,y:1},ignoreGravity:!1,ignorePointer:!1,onCollideCallback:null,onCollideEndCallback:null,onCollideActiveCallback:null,onCollideWith:{}};!e.hasOwnProperty("position")&&e.hasOwnProperty("vertices")?e.position=V.centre(e.vertices):e.hasOwnProperty("vertices")||(t.vertices=V.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"));var n=Vr.extend(t,e);return r(n,e),n.setOnCollideWith=function(i,a){return a?this.onCollideWith[i.id]=a:delete this.onCollideWith[i.id],this},n},S.nextGroup=function(e){return e?S._nextNonCollidingGroupId--:S._nextCollidingGroupId++},S.nextCategory=function(){return S._nextCategory=S._nextCategory<<1,S._nextCategory};var r=function(e,t){t=t||{},S.set(e,{bounds:e.bounds||ne.create(e.vertices),positionPrev:e.positionPrev||j.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e});var n=e.bounds;if(V.rotate(e.vertices,e.angle,e.position),Pe.rotate(e.axes,e.angle),ne.update(n,e.vertices,e.velocity),S.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia}),e.parts.length===1){var i=e.centerOfMass,a=e.centerOffset,s=n.max.x-n.min.x,o=n.max.y-n.min.y;i.x=-(n.min.x-e.position.x)/s,i.y=-(n.min.y-e.position.y)/o,a.x=s*i.x,a.y=o*i.y}};S.set=function(e,t,n){var i;typeof t=="string"&&(i=t,t={},t[i]=n);for(i in t)if(Object.prototype.hasOwnProperty.call(t,i))switch(n=t[i],i){case"isStatic":S.setStatic(e,n);break;case"isSleeping":Pt.set(e,n);break;case"mass":S.setMass(e,n);break;case"density":S.setDensity(e,n);break;case"inertia":S.setInertia(e,n);break;case"vertices":S.setVertices(e,n);break;case"position":S.setPosition(e,n);break;case"angle":S.setAngle(e,n);break;case"velocity":S.setVelocity(e,n);break;case"angularVelocity":S.setAngularVelocity(e,n);break;case"parts":S.setParts(e,n);break;case"centre":S.setCentre(e,n);break;default:e[i]=n}},S.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var i=e.parts[n];i.isStatic=t,t?(i._original={restitution:i.restitution,friction:i.friction,mass:i.mass,inertia:i.inertia,density:i.density,inverseMass:i.inverseMass,inverseInertia:i.inverseInertia},i.restitution=0,i.friction=1,i.mass=i.inertia=i.density=1/0,i.inverseMass=i.inverseInertia=0,i.positionPrev.x=i.position.x,i.positionPrev.y=i.position.y,i.anglePrev=i.angle,i.angularVelocity=0,i.speed=0,i.angularSpeed=0,i.motion=0):i._original&&(i.restitution=i._original.restitution,i.friction=i._original.friction,i.mass=i._original.mass,i.inertia=i._original.inertia,i.density=i._original.density,i.inverseMass=i._original.inverseMass,i.inverseInertia=i._original.inverseInertia,i._original=null)}},S.setMass=function(e,t){var n=e.inertia/(e.mass/6);e.inertia=n*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},S.setDensity=function(e,t){S.setMass(e,t*e.area),e.density=t},S.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},S.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=V.create(t,e),e.axes=Pe.fromVertices(e.vertices),e.area=V.area(e.vertices),S.setMass(e,e.density*e.area);var n=V.centre(e.vertices);V.translate(e.vertices,n,-1),S.setInertia(e,S._inertiaScale*V.inertia(e.vertices,e.mass)),V.translate(e.vertices,e.position),ne.update(e.bounds,e.vertices,e.velocity)},S.setParts=function(e,t,n){var i;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,i=0;i<t.length;i++){var a=t[i];a!==e&&(a.parent=e,e.parts.push(a))}if(e.parts.length!==1){if(n=typeof n<"u"?n:!0,n){var s=[];for(i=0;i<t.length;i++)s=s.concat(t[i].vertices);V.clockwiseSort(s);var o=V.hull(s),l=V.centre(o);S.setVertices(e,o),V.translate(e.vertices,l)}var f=S._totalProperties(e),u=f.centre.x,v=f.centre.y,c=e.bounds,x=e.centerOfMass,p=e.centerOffset;ne.update(c,e.vertices,e.velocity),x.x=-(c.min.x-u)/(c.max.x-c.min.x),x.y=-(c.min.y-v)/(c.max.y-c.min.y),p.x=u,p.y=v,e.area=f.area,e.parent=e,e.position.x=u,e.position.y=v,e.positionPrev.x=u,e.positionPrev.y=v,S.setMass(e,f.mass),S.setInertia(e,f.inertia),S.setPosition(e,f.centre)}},S.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},S.setPosition=function(e,t){var n=j.sub(t,e.position);e.positionPrev.x+=n.x,e.positionPrev.y+=n.y;for(var i=0;i<e.parts.length;i++){var a=e.parts[i];a.position.x+=n.x,a.position.y+=n.y,V.translate(a.vertices,n),ne.update(a.bounds,a.vertices,e.velocity)}},S.setAngle=function(e,t){var n=t-e.angle;e.anglePrev+=n;for(var i=0;i<e.parts.length;i++){var a=e.parts[i];a.angle+=n,V.rotate(a.vertices,n,e.position),Pe.rotate(a.axes,n),ne.update(a.bounds,a.vertices,e.velocity),i>0&&j.rotateAbout(a.position,n,e.position,a.position)}},S.setVelocity=function(e,t){e.positionPrev.x=e.position.x-t.x,e.positionPrev.y=e.position.y-t.y,e.velocity.x=t.x,e.velocity.y=t.y,e.speed=j.magnitude(e.velocity)},S.setAngularVelocity=function(e,t){e.anglePrev=e.angle-t,e.angularVelocity=t,e.angularSpeed=Math.abs(e.angularVelocity)},S.translate=function(e,t){S.setPosition(e,j.add(e.position,t))},S.rotate=function(e,t,n){if(!n)S.setAngle(e,e.angle+t);else{var i=Math.cos(t),a=Math.sin(t),s=e.position.x-n.x,o=e.position.y-n.y;S.setPosition(e,{x:n.x+(s*i-o*a),y:n.y+(s*a+o*i)}),S.setAngle(e,e.angle+t)}},S.scale=function(e,t,n,i){var a=0,s=0;i=i||e.position;for(var o=0;o<e.parts.length;o++){var l=e.parts[o];l.scale.x=t,l.scale.y=n,V.scale(l.vertices,t,n,i),l.axes=Pe.fromVertices(l.vertices),l.area=V.area(l.vertices),S.setMass(l,e.density*l.area),V.translate(l.vertices,{x:-l.position.x,y:-l.position.y}),S.setInertia(l,S._inertiaScale*V.inertia(l.vertices,l.mass)),V.translate(l.vertices,{x:l.position.x,y:l.position.y}),o>0&&(a+=l.area,s+=l.inertia),l.position.x=i.x+(l.position.x-i.x)*t,l.position.y=i.y+(l.position.y-i.y)*n,ne.update(l.bounds,l.vertices,e.velocity)}e.parts.length>1&&(e.area=a,e.isStatic||(S.setMass(e,e.density*a),S.setInertia(e,s))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},S.update=function(e,t,n,i){var a=Math.pow(t*n*e.timeScale,2),s=1-e.frictionAir*n*e.timeScale,o=e.position.x-e.positionPrev.x,l=e.position.y-e.positionPrev.y;e.velocity.x=o*s*i+e.force.x/e.mass*a,e.velocity.y=l*s*i+e.force.y/e.mass*a,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.angularVelocity=(e.angle-e.anglePrev)*s*i+e.torque/e.inertia*a,e.anglePrev=e.angle,e.angle+=e.angularVelocity,e.speed=j.magnitude(e.velocity),e.angularSpeed=Math.abs(e.angularVelocity);for(var f=0;f<e.parts.length;f++){var u=e.parts[f];V.translate(u.vertices,e.velocity),f>0&&(u.position.x+=e.velocity.x,u.position.y+=e.velocity.y),e.angularVelocity!==0&&(V.rotate(u.vertices,e.angularVelocity,e.position),Pe.rotate(u.axes,e.angularVelocity),f>0&&j.rotateAbout(u.position,e.angularVelocity,e.position,u.position)),ne.update(u.bounds,u.vertices,e.velocity)}},S.applyForce=function(e,t,n){e.force.x+=n.x,e.force.y+=n.y;var i={x:t.x-e.position.x,y:t.y-e.position.y};e.torque+=i.x*n.y-i.y*n.x},S._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=e.parts.length===1?0:1;n<e.parts.length;n++){var i=e.parts[n],a=i.mass!==1/0?i.mass:1;t.mass+=a,t.area+=i.area,t.inertia+=i.inertia,t.centre=j.add(t.centre,j.mult(i.position,a))}return t.centre=j.div(t.centre,t.mass),t}})()});var ue=L((Sn,Rr)=>{var m={};Rr.exports=m;var _e=Se(),Ge=F(),_t=J(),Ie=fe();(function(){m.create=function(r){return Ge.extend({id:Ge.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},r)},m.setModified=function(r,e,t,n){if(_e.trigger(r,"compositeModified",r),r.isModified=e,t&&r.parent&&m.setModified(r.parent,e,t,n),n)for(var i=0;i<r.composites.length;i++){var a=r.composites[i];m.setModified(a,e,t,n)}},m.add=function(r,e){var t=[].concat(e);_e.trigger(r,"beforeAdd",{object:e});for(var n=0;n<t.length;n++){var i=t[n];switch(i.type){case"body":if(i.parent!==i){Ge.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}m.addBody(r,i);break;case"constraint":m.addConstraint(r,i);break;case"composite":m.addComposite(r,i);break;case"mouseConstraint":m.addConstraint(r,i.constraint);break}}return _e.trigger(r,"afterAdd",{object:e}),r},m.remove=function(r,e,t){var n=[].concat(e);_e.trigger(r,"beforeRemove",{object:e});for(var i=0;i<n.length;i++){var a=n[i];switch(a.type){case"body":m.removeBody(r,a,t);break;case"constraint":m.removeConstraint(r,a,t);break;case"composite":m.removeComposite(r,a,t);break;case"mouseConstraint":m.removeConstraint(r,a.constraint);break}}return _e.trigger(r,"afterRemove",{object:e}),r},m.addComposite=function(r,e){return r.composites.push(e),e.parent=r,m.setModified(r,!0,!0,!1),r},m.removeComposite=function(r,e,t){var n=r.composites.indexOf(e);if(n!==-1&&(m.removeCompositeAt(r,n),m.setModified(r,!0,!0,!1)),t)for(var i=0;i<r.composites.length;i++)m.removeComposite(r.composites[i],e,!0);return r},m.removeCompositeAt=function(r,e){return r.composites.splice(e,1),m.setModified(r,!0,!0,!1),r},m.addBody=function(r,e){return r.bodies.push(e),m.setModified(r,!0,!0,!1),r},m.removeBody=function(r,e,t){var n=r.bodies.indexOf(e);if(n!==-1&&(m.removeBodyAt(r,n),m.setModified(r,!0,!0,!1)),t)for(var i=0;i<r.composites.length;i++)m.removeBody(r.composites[i],e,!0);return r},m.removeBodyAt=function(r,e){return r.bodies.splice(e,1),m.setModified(r,!0,!0,!1),r},m.addConstraint=function(r,e){return r.constraints.push(e),m.setModified(r,!0,!0,!1),r},m.removeConstraint=function(r,e,t){var n=r.constraints.indexOf(e);if(n!==-1&&m.removeConstraintAt(r,n),t)for(var i=0;i<r.composites.length;i++)m.removeConstraint(r.composites[i],e,!0);return r},m.removeConstraintAt=function(r,e){return r.constraints.splice(e,1),m.setModified(r,!0,!0,!1),r},m.clear=function(r,e,t){if(t)for(var n=0;n<r.composites.length;n++)m.clear(r.composites[n],e,!0);return e?r.bodies=r.bodies.filter(function(i){return i.isStatic}):r.bodies.length=0,r.constraints.length=0,r.composites.length=0,m.setModified(r,!0,!0,!1),r},m.allBodies=function(r){for(var e=[].concat(r.bodies),t=0;t<r.composites.length;t++)e=e.concat(m.allBodies(r.composites[t]));return e},m.allConstraints=function(r){for(var e=[].concat(r.constraints),t=0;t<r.composites.length;t++)e=e.concat(m.allConstraints(r.composites[t]));return e},m.allComposites=function(r){for(var e=[].concat(r.composites),t=0;t<r.composites.length;t++)e=e.concat(m.allComposites(r.composites[t]));return e},m.get=function(r,e,t){var n,i;switch(t){case"body":n=m.allBodies(r);break;case"constraint":n=m.allConstraints(r);break;case"composite":n=m.allComposites(r).concat(r);break}return n?(i=n.filter(function(a){return a.id.toString()===e.toString()}),i.length===0?null:i[0]):null},m.move=function(r,e,t){return m.remove(r,e),m.add(t,e),r},m.rebase=function(r){for(var e=m.allBodies(r).concat(m.allConstraints(r)).concat(m.allComposites(r)),t=0;t<e.length;t++)e[t].id=Ge.nextId();return m.setModified(r,!0,!0,!1),r},m.translate=function(r,e,t){for(var n=t?m.allBodies(r):r.bodies,i=0;i<n.length;i++)Ie.translate(n[i],e);return m.setModified(r,!0,!0,!1),r},m.rotate=function(r,e,t,n){for(var i=Math.cos(e),a=Math.sin(e),s=n?m.allBodies(r):r.bodies,o=0;o<s.length;o++){var l=s[o],f=l.position.x-t.x,u=l.position.y-t.y;Ie.setPosition(l,{x:t.x+(f*i-u*a),y:t.y+(f*a+u*i)}),Ie.rotate(l,e)}return m.setModified(r,!0,!0,!1),r},m.scale=function(r,e,t,n,i){for(var a=i?m.allBodies(r):r.bodies,s=0;s<a.length;s++){var o=a[s],l=o.position.x-n.x,f=o.position.y-n.y;Ie.setPosition(o,{x:n.x+l*e,y:n.y+f*t}),Ie.scale(o,e,t)}return m.setModified(r,!0,!0,!1),r},m.bounds=function(r){for(var e=m.allBodies(r),t=[],n=0;n<e.length;n+=1){var i=e[n];t.push(i.bounds.min,i.bounds.max)}return _t.create(t)}})()});var Me=L((Cn,Dr)=>{var E={};Dr.exports=E;var Er=re(),R=H(),It=Ce(),Mt=J(),wt=We(),Fr=F();(function(){E._warming=.4,E._torqueDampen=1,E._minLength=1e-6,E.create=function(r){var e=r;e.bodyA&&!e.pointA&&(e.pointA={x:0,y:0}),e.bodyB&&!e.pointB&&(e.pointB={x:0,y:0});var t=e.bodyA?R.add(e.bodyA.position,e.pointA):e.pointA,n=e.bodyB?R.add(e.bodyB.position,e.pointB):e.pointB,i=R.magnitude(R.sub(t,n));e.length=typeof e.length<"u"?e.length:i,e.id=e.id||Fr.nextId(),e.label=e.label||"Constraint",e.type="constraint",e.stiffness=e.stiffness||(e.length>0?1:.7),e.damping=e.damping||0,e.angularStiffness=e.angularStiffness||0,e.angleA=e.bodyA?e.bodyA.angle:e.angleA,e.angleB=e.bodyB?e.bodyB.angle:e.angleB,e.plugin={};var a={visible:!0,type:"line",anchors:!0,lineColor:null,lineOpacity:null,lineThickness:null,pinSize:null,anchorColor:null,anchorSize:null};return e.length===0&&e.stiffness>.1?(a.type="pin",a.anchors=!1):e.stiffness<.9&&(a.type="spring"),e.render=Fr.extend(a,e.render),e},E.preSolveAll=function(r){for(var e=0;e<r.length;e+=1){var t=r[e],n=t.constraintImpulse;t.isStatic||n.x===0&&n.y===0&&n.angle===0||(t.position.x+=n.x,t.position.y+=n.y,t.angle+=n.angle)}},E.solveAll=function(r,e){for(var t=0;t<r.length;t+=1){var n=r[t],i=!n.bodyA||n.bodyA&&n.bodyA.isStatic,a=!n.bodyB||n.bodyB&&n.bodyB.isStatic;(i||a)&&E.solve(r[t],e)}for(t=0;t<r.length;t+=1)n=r[t],i=!n.bodyA||n.bodyA&&n.bodyA.isStatic,a=!n.bodyB||n.bodyB&&n.bodyB.isStatic,!i&&!a&&E.solve(r[t],e)},E.solve=function(r,e){var t=r.bodyA,n=r.bodyB,i=r.pointA,a=r.pointB;if(!(!t&&!n)){t&&!t.isStatic&&(R.rotate(i,t.angle-r.angleA,i),r.angleA=t.angle),n&&!n.isStatic&&(R.rotate(a,n.angle-r.angleB,a),r.angleB=n.angle);var s=i,o=a;if(t&&(s=R.add(t.position,i)),n&&(o=R.add(n.position,a)),!(!s||!o)){var l=R.sub(s,o),f=R.magnitude(l);f<E._minLength&&(f=E._minLength);var u=(f-r.length)/f,v=r.stiffness<1?r.stiffness*e:r.stiffness,c=R.mult(l,u*v),x=(t?t.inverseMass:0)+(n?n.inverseMass:0),p=(t?t.inverseInertia:0)+(n?n.inverseInertia:0),g=x+p,M,P,q,h,y;if(r.damping){var I=R.create();q=R.div(l,f),y=R.sub(n&&R.sub(n.position,n.positionPrev)||I,t&&R.sub(t.position,t.positionPrev)||I),h=R.dot(q,y)}t&&!t.isStatic&&(P=t.inverseMass/x,t.constraintImpulse.x-=c.x*P,t.constraintImpulse.y-=c.y*P,t.position.x-=c.x*P,t.position.y-=c.y*P,r.damping&&(t.positionPrev.x-=r.damping*q.x*h*P,t.positionPrev.y-=r.damping*q.y*h*P),M=R.cross(i,c)/g*E._torqueDampen*t.inverseInertia*(1-r.angularStiffness),t.constraintImpulse.angle-=M,t.angle-=M),n&&!n.isStatic&&(P=n.inverseMass/x,n.constraintImpulse.x+=c.x*P,n.constraintImpulse.y+=c.y*P,n.position.x+=c.x*P,n.position.y+=c.y*P,r.damping&&(n.positionPrev.x+=r.damping*q.x*h*P,n.positionPrev.y+=r.damping*q.y*h*P),M=R.cross(a,c)/g*E._torqueDampen*n.inverseInertia*(1-r.angularStiffness),n.constraintImpulse.angle+=M,n.angle+=M)}}},E.postSolveAll=function(r){for(var e=0;e<r.length;e++){var t=r[e],n=t.constraintImpulse;if(!(t.isStatic||n.x===0&&n.y===0&&n.angle===0)){It.set(t,!1);for(var i=0;i<t.parts.length;i++){var a=t.parts[i];Er.translate(a.vertices,n),i>0&&(a.position.x+=n.x,a.position.y+=n.y),n.angle!==0&&(Er.rotate(a.vertices,n.angle,t.position),wt.rotate(a.axes,n.angle),i>0&&R.rotateAbout(a.position,n.angle,t.position,a.position)),Mt.update(a.bounds,a.vertices,t.velocity)}n.angle*=E._warming,n.x*=E._warming,n.y*=E._warming}}},E.pointAWorld=function(r){return{x:(r.bodyA?r.bodyA.position.x:0)+r.pointA.x,y:(r.bodyA?r.bodyA.position.y:0)+r.pointA.y}},E.pointBWorld=function(r){return{x:(r.bodyB?r.bodyB.position.x:0)+r.pointB.x,y:(r.bodyB?r.bodyB.position.y:0)+r.pointB.y}}})()});var nr=L((_n,Gr)=>{var Wr={};Gr.exports=Wr;var yt=ue(),Pn=Me(),qt=F();(function(){Wr.create=function(r){var e=yt.create(),t={label:"World",gravity:{x:0,y:1,scale:.001},bounds:{min:{x:-1/0,y:-1/0},max:{x:1/0,y:1/0}}};return qt.extend(e,t,r)}})()});var Ne=L((In,Ur)=>{var X={};Ur.exports=X;var Ue=re(),Q=H();(function(){X.collides=function(r,e,t){var n,i,a,s,o=!1;if(t){var l=r.parent,f=e.parent,u=l.speed*l.speed+l.angularSpeed*l.angularSpeed+f.speed*f.speed+f.angularSpeed*f.angularSpeed;o=t&&t.collided&&u<.2,s=t}else s={collided:!1,bodyA:r,bodyB:e};if(t&&o){var v=s.axisBody,c=v===r?e:r,x=[v.axes[t.axisNumber]];if(a=X._overlapAxes(v.vertices,c.vertices,x),s.reused=!0,a.overlap<=0)return s.collided=!1,s}else{if(n=X._overlapAxes(r.vertices,e.vertices,r.axes),n.overlap<=0||(i=X._overlapAxes(e.vertices,r.vertices,e.axes),i.overlap<=0))return s.collided=!1,s;n.overlap<i.overlap?(a=n,s.axisBody=r):(a=i,s.axisBody=e),s.axisNumber=a.axisNumber}s.bodyA=r.id<e.id?r:e,s.bodyB=r.id<e.id?e:r,s.collided=!0,s.depth=a.overlap,s.parentA=s.bodyA.parent,s.parentB=s.bodyB.parent,r=s.bodyA,e=s.bodyB,Q.dot(a.axis,Q.sub(e.position,r.position))<0?s.normal={x:a.axis.x,y:a.axis.y}:s.normal={x:-a.axis.x,y:-a.axis.y},s.tangent=Q.perp(s.normal),s.penetration=s.penetration||{},s.penetration.x=s.normal.x*s.depth,s.penetration.y=s.normal.y*s.depth;var p=X._findSupports(r,e,s.normal),g=[];if(Ue.contains(r.vertices,p[0])&&g.push(p[0]),Ue.contains(r.vertices,p[1])&&g.push(p[1]),g.length<2){var M=X._findSupports(e,r,Q.neg(s.normal));Ue.contains(e.vertices,M[0])&&g.push(M[0]),g.length<2&&Ue.contains(e.vertices,M[1])&&g.push(M[1])}return g.length<1&&(g=[p[0]]),s.supports=g,s},X._overlapAxes=function(r,e,t){for(var n=Q._temp[0],i=Q._temp[1],a={overlap:Number.MAX_VALUE},s,o,l=0;l<t.length;l++){if(o=t[l],X._projectToAxis(n,r,o),X._projectToAxis(i,e,o),s=Math.min(n.max-i.min,i.max-n.min),s<=0)return a.overlap=s,a;s<a.overlap&&(a.overlap=s,a.axis=o,a.axisNumber=l)}return a},X._projectToAxis=function(r,e,t){for(var n=Q.dot(e[0],t),i=n,a=1;a<e.length;a+=1){var s=Q.dot(e[a],t);s>i?i=s:s<n&&(n=s)}r.min=n,r.max=i},X._findSupports=function(r,e,t){for(var n=Number.MAX_VALUE,i=Q._temp[0],a=e.vertices,s=r.position,o,l,f,u,v=0;v<a.length;v++)l=a[v],i.x=l.x-s.x,i.y=l.y-s.y,o=-Q.dot(t,i),o<n&&(n=o,f=l);var c=f.index-1>=0?f.index-1:a.length-1;l=a[c],i.x=l.x-s.x,i.y=l.y-s.y,n=-Q.dot(t,i),u=l;var x=(f.index+1)%a.length;return l=a[x],i.x=l.x-s.x,i.y=l.y-s.y,o=-Q.dot(t,i),o<n&&(u=l),[f,u]}})()});var we=L((Mn,Nr)=>{var ee={};Nr.exports=ee;(function(){ee.create=function(r,e){var t=r.bodyA,n=r.bodyB,i={id:ee.id(t,n),bodyA:t,bodyB:n,activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:t.isSensor||n.isSensor,timeCreated:e,timeUpdated:e,collision:null,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return ee.update(i,r,e),i},ee.update=function(r,e,t){if(r.collision=e,e.collided){var n=e.supports,i=r.activeContacts,a=e.parentA,s=e.parentB;r.inverseMass=a.inverseMass+s.inverseMass,r.friction=Math.min(a.friction,s.friction),r.frictionStatic=Math.max(a.frictionStatic,s.frictionStatic),r.restitution=Math.max(a.restitution,s.restitution),r.slop=Math.max(a.slop,s.slop);for(var o=0;o<n.length;o++)i[o]=n[o].contact;var l=n.length;l<i.length&&(i.length=l),r.separation=e.depth,ee.setActive(r,!0,t)}else r.isActive===!0&&ee.setActive(r,!1,t)},ee.setActive=function(r,e,t){e?(r.isActive=!0,r.timeUpdated=t):(r.isActive=!1,r.activeContacts.length=0)},ee.id=function(r,e){return r.id<e.id?"A"+r.id+"B"+e.id:"A"+e.id+"B"+r.id}})()});var ir=L((wn,Xr)=>{var Qe={};Xr.exports=Qe;var At=Ne(),kt=we(),Qr=J();(function(){Qe.collisions=function(r,e){for(var t=[],n=e.pairs.table,i=e.metrics,a=0;a<r.length;a++){var s=r[a][0],o=r[a][1];if(!((s.isStatic||s.isSleeping)&&(o.isStatic||o.isSleeping))&&Qe.canCollide(s.collisionFilter,o.collisionFilter)&&(i.midphaseTests+=1,Qr.overlaps(s.bounds,o.bounds)))for(var l=s.parts.length>1?1:0;l<s.parts.length;l++)for(var f=s.parts[l],u=o.parts.length>1?1:0;u<o.parts.length;u++){var v=o.parts[u];if(f===s&&v===o||Qr.overlaps(f.bounds,v.bounds)){var c=kt.id(f,v),x=n[c],p;x&&x.isActive?p=x.collision:p=null;var g=At.collides(f,v,p);i.narrowphaseTests+=1,g.reused&&(i.narrowReuseCount+=1),g.collided&&(t.push(g),i.narrowDetections+=1)}}}return t},Qe.canCollide=function(r,e){return r.group===e.group&&r.group!==0?r.group>0:(r.mask&e.category)!==0&&(e.mask&r.category)!==0}})()});var ar=L((yn,$r)=>{var O={};$r.exports=O;var Zr=we(),Lt=ir(),zr=F();(function(){O.create=function(r){var e={controller:O,detector:Lt.collisions,buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return zr.extend(e,r)},O.update=function(r,e,t,n){var i,a,s,o=t.world,l=r.buckets,f,u,v=!1,c=t.metrics;for(c.broadphaseTests=0,i=0;i<e.length;i++){var x=e[i];if(!(x.isSleeping&&!n)&&!(x.bounds.max.x<o.bounds.min.x||x.bounds.min.x>o.bounds.max.x||x.bounds.max.y<o.bounds.min.y||x.bounds.min.y>o.bounds.max.y)){var p=O._getRegion(r,x);if(!x.region||p.id!==x.region.id||n){c.broadphaseTests+=1,(!x.region||n)&&(x.region=p);var g=O._regionUnion(p,x.region);for(a=g.startCol;a<=g.endCol;a++)for(s=g.startRow;s<=g.endRow;s++){u=O._getBucketId(a,s),f=l[u];var M=a>=p.startCol&&a<=p.endCol&&s>=p.startRow&&s<=p.endRow,P=a>=x.region.startCol&&a<=x.region.endCol&&s>=x.region.startRow&&s<=x.region.endRow;!M&&P&&P&&f&&O._bucketRemoveBody(r,f,x),(x.region===p||M&&!P||n)&&(f||(f=O._createBucket(l,u)),O._bucketAddBody(r,f,x))}x.region=p,v=!0}}}v&&(r.pairsList=O._createActivePairsList(r))},O.clear=function(r){r.buckets={},r.pairs={},r.pairsList=[]},O._regionUnion=function(r,e){var t=Math.min(r.startCol,e.startCol),n=Math.max(r.endCol,e.endCol),i=Math.min(r.startRow,e.startRow),a=Math.max(r.endRow,e.endRow);return O._createRegion(t,n,i,a)},O._getRegion=function(r,e){var t=e.bounds,n=Math.floor(t.min.x/r.bucketWidth),i=Math.floor(t.max.x/r.bucketWidth),a=Math.floor(t.min.y/r.bucketHeight),s=Math.floor(t.max.y/r.bucketHeight);return O._createRegion(n,i,a,s)},O._createRegion=function(r,e,t,n){return{id:r+","+e+","+t+","+n,startCol:r,endCol:e,startRow:t,endRow:n}},O._getBucketId=function(r,e){return"C"+r+"R"+e},O._createBucket=function(r,e){var t=r[e]=[];return t},O._bucketAddBody=function(r,e,t){for(var n=0;n<e.length;n++){var i=e[n];if(!(t.id===i.id||t.isStatic&&i.isStatic)){var a=Zr.id(t,i),s=r.pairs[a];s?s[2]+=1:r.pairs[a]=[t,i,1]}}e.push(t)},O._bucketRemoveBody=function(r,e,t){e.splice(e.indexOf(t),1);for(var n=0;n<e.length;n++){var i=e[n],a=Zr.id(t,i),s=r.pairs[a];s&&(s[2]-=1)}},O._createActivePairsList=function(r){var e,t,n=[];e=zr.keys(r.pairs);for(var i=0;i<e.length;i++)t=r.pairs[e[i]],t[2]>0?n.push(t):delete r.pairs[e[i]];return n}})()});var sr=L((qn,Kr)=>{var se={};Kr.exports=se;var Xe=we(),Tt=F();(function(){se._pairMaxIdleLife=1e3,se.create=function(r){return Tt.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},r)},se.update=function(r,e,t){var n=r.list,i=r.table,a=r.collisionStart,s=r.collisionEnd,o=r.collisionActive,l,f,u,v;for(a.length=0,s.length=0,o.length=0,v=0;v<n.length;v++)n[v].confirmedActive=!1;for(v=0;v<e.length;v++)l=e[v],l.collided&&(f=Xe.id(l.bodyA,l.bodyB),u=i[f],u?(u.isActive?o.push(u):a.push(u),Xe.update(u,l,t),u.confirmedActive=!0):(u=Xe.create(l,t),i[f]=u,a.push(u),n.push(u)));for(v=0;v<n.length;v++)u=n[v],u.isActive&&!u.confirmedActive&&(Xe.setActive(u,!1,t),s.push(u))},se.removeOld=function(r,e){var t=r.list,n=r.table,i=[],a,s,o,l;for(l=0;l<t.length;l++){if(a=t[l],s=a.collision,s.bodyA.isSleeping||s.bodyB.isSleeping){a.timeUpdated=e;continue}e-a.timeUpdated>se._pairMaxIdleLife&&i.push(l)}for(l=0;l<i.length;l++)o=i[l]-l,a=t[o],delete n[a.id],t.splice(o,1)},se.clear=function(r){return r.table={},r.list.length=0,r.collisionStart.length=0,r.collisionActive.length=0,r.collisionEnd.length=0,r}})()});var et=L((An,br)=>{br.exports={decomp:Qt,quickDecomp:ye,isSimple:Xt,removeCollinearPoints:Zt,removeDuplicatePoints:zt,makeCCW:Ft};function Bt(r,e,t){t=t||0;var n=[0,0],i,a,s,o,l,f,u;return i=r[1][1]-r[0][1],a=r[0][0]-r[1][0],s=i*r[0][0]+a*r[0][1],o=e[1][1]-e[0][1],l=e[0][0]-e[1][0],f=o*e[0][0]+l*e[0][1],u=i*l-o*a,$e(u,0,t)||(n[0]=(l*s-a*f)/u,n[1]=(i*f-o*s)/u),n}function or(r,e,t,n){var i=e[0]-r[0],a=e[1]-r[1],s=n[0]-t[0],o=n[1]-t[1];if(s*a-o*i===0)return!1;var l=(i*(t[1]-r[1])+a*(r[0]-t[0]))/(s*a-o*i),f=(s*(r[1]-t[1])+o*(t[0]-r[0]))/(o*i-s*a);return l>=0&&l<=1&&f>=0&&f<=1}function ke(r,e,t){return(e[0]-r[0])*(t[1]-r[1])-(t[0]-r[0])*(e[1]-r[1])}function Ze(r,e,t){return ke(r,e,t)>0}function lr(r,e,t){return ke(r,e,t)>=0}function Hr(r,e,t){return ke(r,e,t)<0}function qe(r,e,t){return ke(r,e,t)<=0}var Vt=[],Ot=[];function Rt(r,e,t,n){if(n){var i=Vt,a=Ot;i[0]=e[0]-r[0],i[1]=e[1]-r[1],a[0]=t[0]-e[0],a[1]=t[1]-e[1];var s=i[0]*a[0]+i[1]*a[1],o=Math.sqrt(i[0]*i[0]+i[1]*i[1]),l=Math.sqrt(a[0]*a[0]+a[1]*a[1]),f=Math.acos(s/(o*l));return f<n}else return ke(r,e,t)===0}function Ae(r,e){var t=e[0]-r[0],n=e[1]-r[1];return t*t+n*n}function d(r,e){var t=r.length;return r[e<0?e%t+t:e%t]}function Et(r){r.length=0}function Z(r,e,t,n){for(var i=t;i<n;i++)r.push(e[i])}function Ft(r){for(var e=0,t=r,n=1;n<r.length;++n)(t[n][1]<t[e][1]||t[n][1]===t[e][1]&&t[n][0]>t[e][0])&&(e=n);return Ze(d(r,e-1),d(r,e),d(r,e+1))?!1:(Dt(r),!0)}function Dt(r){for(var e=[],t=r.length,n=0;n!==t;n++)e.push(r.pop());for(var n=0;n!==t;n++)r[n]=e[n]}function Jr(r,e){return Hr(d(r,e-1),d(r,e),d(r,e+1))}var Wt=[],Gt=[];function Ut(r,e,t){var n,i,a=Wt,s=Gt;if(lr(d(r,e+1),d(r,e),d(r,t))&&qe(d(r,e-1),d(r,e),d(r,t)))return!1;i=Ae(d(r,e),d(r,t));for(var o=0;o!==r.length;++o)if(!((o+1)%r.length===e||o===e)&&lr(d(r,e),d(r,t),d(r,o+1))&&qe(d(r,e),d(r,t),d(r,o))&&(a[0]=d(r,e),a[1]=d(r,t),s[0]=d(r,o),s[1]=d(r,o+1),n=Bt(a,s),Ae(d(r,e),n)<i))return!1;return!0}function Nt(r,e,t){for(var n=0;n!==r.length;++n)if(!(n===e||n===t||(n+1)%r.length===e||(n+1)%r.length===t)&&or(d(r,e),d(r,t),d(r,n),d(r,n+1)))return!1;return!0}function ze(r,e,t,n){var i=n||[];if(Et(i),e<t)for(var a=e;a<=t;a++)i.push(r[a]);else{for(var a=0;a<=t;a++)i.push(r[a]);for(var a=e;a<r.length;a++)i.push(r[a])}return i}function fr(r){for(var e=[],t=[],n=[],i=[],a=Number.MAX_VALUE,s=0;s<r.length;++s)if(Jr(r,s)){for(var o=0;o<r.length;++o)if(Ut(r,s,o)){t=fr(ze(r,s,o,i)),n=fr(ze(r,o,s,i));for(var l=0;l<n.length;l++)t.push(n[l]);t.length<a&&(e=t,a=t.length,e.push([d(r,s),d(r,o)]))}}return e}function Qt(r){var e=fr(r);return e.length>0?jr(r,e):[r]}function jr(r,e){if(e.length===0)return[r];if(e instanceof Array&&e.length&&e[0]instanceof Array&&e[0].length===2&&e[0][0]instanceof Array){for(var t=[r],n=0;n<e.length;n++)for(var i=e[n],a=0;a<t.length;a++){var s=t[a],o=jr(s,i);if(o){t.splice(a,1),t.push(o[0],o[1]);break}}return t}else{var i=e,n=r.indexOf(i[0]),a=r.indexOf(i[1]);return n!==-1&&a!==-1?[ze(r,n,a),ze(r,a,n)]:!1}}function Xt(r){var e=r,t;for(t=0;t<e.length-1;t++)for(var n=0;n<t-1;n++)if(or(e[t],e[t+1],e[n],e[n+1]))return!1;for(t=1;t<e.length-2;t++)if(or(e[0],e[e.length-1],e[t],e[t+1]))return!1;return!0}function Yr(r,e,t,n,i){i=i||0;var a=e[1]-r[1],s=r[0]-e[0],o=a*r[0]+s*r[1],l=n[1]-t[1],f=t[0]-n[0],u=l*t[0]+f*t[1],v=a*f-l*s;return $e(v,0,i)?[0,0]:[(f*o-s*u)/v,(a*u-l*o)/v]}function ye(r,e,t,n,i,a,s){a=a||100,s=s||0,i=i||25,e=typeof e<"u"?e:[],t=t||[],n=n||[];var o=[0,0],l=[0,0],f=[0,0],u=0,v=0,c=0,x=0,p=0,g=0,M=0,P=[],q=[],h=r,y=r;if(y.length<3)return e;if(s++,s>a)return console.warn("quickDecomp: max level ("+a+") reached."),e;for(var I=0;I<r.length;++I)if(Jr(h,I)){t.push(h[I]),u=v=Number.MAX_VALUE;for(var k=0;k<r.length;++k)Ze(d(h,I-1),d(h,I),d(h,k))&&qe(d(h,I-1),d(h,I),d(h,k-1))&&(f=Yr(d(h,I-1),d(h,I),d(h,k),d(h,k-1)),Hr(d(h,I+1),d(h,I),f)&&(c=Ae(h[I],f),c<v&&(v=c,l=f,g=k))),Ze(d(h,I+1),d(h,I),d(h,k+1))&&qe(d(h,I+1),d(h,I),d(h,k))&&(f=Yr(d(h,I+1),d(h,I),d(h,k),d(h,k+1)),Ze(d(h,I-1),d(h,I),f)&&(c=Ae(h[I],f),c<u&&(u=c,o=f,p=k)));if(g===(p+1)%r.length)f[0]=(l[0]+o[0])/2,f[1]=(l[1]+o[1])/2,n.push(f),I<p?(Z(P,h,I,p+1),P.push(f),q.push(f),g!==0&&Z(q,h,g,h.length),Z(q,h,0,I+1)):(I!==0&&Z(P,h,I,h.length),Z(P,h,0,p+1),P.push(f),q.push(f),Z(q,h,g,I+1));else{if(g>p&&(p+=r.length),x=Number.MAX_VALUE,p<g)return e;for(var k=g;k<=p;++k)lr(d(h,I-1),d(h,I),d(h,k))&&qe(d(h,I+1),d(h,I),d(h,k))&&(c=Ae(d(h,I),d(h,k)),c<x&&Nt(h,I,k)&&(x=c,M=k%r.length));I<M?(Z(P,h,I,M+1),M!==0&&Z(q,h,M,y.length),Z(q,h,0,I+1)):(I!==0&&Z(P,h,I,y.length),Z(P,h,0,M+1),Z(q,h,M,I+1))}return P.length<q.length?(ye(P,e,t,n,i,a,s),ye(q,e,t,n,i,a,s)):(ye(q,e,t,n,i,a,s),ye(P,e,t,n,i,a,s)),e}return e.push(r),e}function Zt(r,e){for(var t=0,n=r.length-1;r.length>3&&n>=0;--n)Rt(d(r,n-1),d(r,n),d(r,n+1),e)&&(r.splice(n%r.length,1),t++);return t}function zt(r,e){for(var t=r.length-1;t>=1;--t)for(var n=r[t],i=t-1;i>=0;--i)if($t(n,r[i],e)){r.splice(t,1);continue}}function $e(r,e,t){return t=t||0,Math.abs(r-e)<=t}function $t(r,e,t){return $e(r[0],e[0],t)&&$e(r[1],e[1],t)}});var Ye=L((kn,rt)=>{var b={};rt.exports=b;var K=re(),ie=F(),ce=fe(),Kt=J(),Ke=H(),Le=et();(function(){b.rectangle=function(r,e,t,n,i){i=i||{};var a={label:"Rectangle Body",position:{x:r,y:e},vertices:K.fromPath("L 0 0 L "+t+" 0 L "+t+" "+n+" L 0 "+n)};if(i.chamfer){var s=i.chamfer;a.vertices=K.chamfer(a.vertices,s.radius,s.quality,s.qualityMin,s.qualityMax),delete i.chamfer}return ce.create(ie.extend({},a,i))},b.trapezoid=function(r,e,t,n,i,a){a=a||{},i*=.5;var s=(1-i*2)*t,o=t*i,l=o+s,f=l+o,u;i<.5?u="L 0 0 L "+o+" "+-n+" L "+l+" "+-n+" L "+f+" 0":u="L 0 0 L "+l+" "+-n+" L "+f+" 0";var v={label:"Trapezoid Body",position:{x:r,y:e},vertices:K.fromPath(u)};if(a.chamfer){var c=a.chamfer;v.vertices=K.chamfer(v.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete a.chamfer}return ce.create(ie.extend({},v,a))},b.circle=function(r,e,t,n,i){n=n||{};var a={label:"Circle Body",circleRadius:t};i=i||25;var s=Math.ceil(Math.max(10,Math.min(i,t)));return s%2===1&&(s+=1),b.polygon(r,e,s,t,ie.extend({},a,n))},b.polygon=function(r,e,t,n,i){if(i=i||{},t<3)return b.circle(r,e,n,i);for(var a=2*Math.PI/t,s="",o=a*.5,l=0;l<t;l+=1){var f=o+l*a,u=Math.cos(f)*n,v=Math.sin(f)*n;s+="L "+u.toFixed(3)+" "+v.toFixed(3)+" "}var c={label:"Polygon Body",position:{x:r,y:e},vertices:K.fromPath(s)};if(i.chamfer){var x=i.chamfer;c.vertices=K.chamfer(c.vertices,x.radius,x.quality,x.qualityMin,x.qualityMax),delete i.chamfer}return ce.create(ie.extend({},c,i))},b.fromVertices=function(r,e,t,n,i,a,s){var o,l,f,u,v,c,x,p,g;for(n=n||{},l=[],i=typeof i<"u"?i:!1,a=typeof a<"u"?a:.01,s=typeof s<"u"?s:10,Le||ie.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."),ie.isArray(t[0])||(t=[t]),p=0;p<t.length;p+=1)if(u=t[p],f=K.isConvex(u),f||!Le)f?u=K.clockwiseSort(u):u=K.hull(u),l.push({position:{x:r,y:e},vertices:u});else{var M=u.map(function(y){return[y.x,y.y]});Le.makeCCW(M),a!==!1&&Le.removeCollinearPoints(M,a);var P=Le.quickDecomp(M);for(v=0;v<P.length;v++){var q=P[v],h=q.map(function(y){return{x:y[0],y:y[1]}});s>0&&K.area(h)<s||l.push({position:K.centre(h),vertices:h})}}for(v=0;v<l.length;v++)l[v]=ce.create(ie.extend(l[v],n));return i&&b.flagCoincidentParts(l,5),l.length>1?(o=ce.create(ie.extend({parts:l.slice(0)},n)),ce.setPosition(o,{x:r,y:e}),o):l[0]},b.flagCoincidentParts=function(r,e){e===void 0&&(e=5);for(var t=0;t<r.length;t++)for(var n=r[t],i=t+1;i<r.length;i++){var a=r[i];if(Kt.overlaps(n.bounds,a.bounds))for(var s=n.vertices,o=a.vertices,l=0;l<n.vertices.length;l++)for(var f=0;f<a.vertices.length;f++){var u=Ke.magnitudeSquared(Ke.sub(s[(l+1)%s.length],o[f])),v=Ke.magnitudeSquared(Ke.sub(s[l],o[(f+1)%o.length]));u<e&&v<e&&(s[l].isInternal=!0,o[f].isInternal=!0)}}return r}})()});var nt=L((Ln,tt)=>{var ve={};tt.exports=ve;var ur=H(),Yt=Ne(),Te=J(),Ht=Ye(),Jt=re();(function(){ve.collides=function(r,e){for(var t=[],n=0;n<e.length;n++){var i=e[n];if(r!==i&&Te.overlaps(i.bounds,r.bounds))for(var a=i.parts.length===1?0:1;a<i.parts.length;a++){var s=i.parts[a];if(Te.overlaps(s.bounds,r.bounds)){var o=Yt.collides(s,r);if(o.collided){t.push(o);break}}}}return t},ve.ray=function(r,e,t,n){n=n||1e-100;for(var i=ur.angle(e,t),a=ur.magnitude(ur.sub(e,t)),s=(t.x+e.x)*.5,o=(t.y+e.y)*.5,l=Ht.rectangle(s,o,a,n,{angle:i}),f=ve.collides(l,r),u=0;u<f.length;u+=1){var v=f[u];v.body=v.bodyB=v.bodyA}return f},ve.region=function(r,e,t){for(var n=[],i=0;i<r.length;i++){var a=r[i],s=Te.overlaps(a.bounds,e);(s&&!t||!s&&t)&&n.push(a)}return n},ve.point=function(r,e){for(var t=[],n=0;n<r.length;n++){var i=r[n];if(Te.contains(i.bounds,e))for(var a=i.parts.length===1?0:1;a<i.parts.length;a++){var s=i.parts[a];if(Te.contains(s.bounds,e)&&Jt.contains(s.vertices,e)){t.push(i);break}}}return t}})()});var cr=L((Tn,it)=>{var W={};it.exports=W;var jt=re(),A=H(),He=F(),bt=J();(function(){W._restingThresh=4,W._restingThreshTangent=6,W._positionDampen=.9,W._positionWarming=.8,W._frictionNormalMultiplier=5,W.preSolvePosition=function(r){var e,t,n;for(e=0;e<r.length;e++)t=r[e],t.isActive&&(n=t.activeContacts.length,t.collision.parentA.totalContacts+=n,t.collision.parentB.totalContacts+=n)},W.solvePosition=function(r,e,t){var n,i,a,s,o,l,f,u,v,c,x,p,g,M,P,q,h=t*W._positionDampen;for(n=0;n<e.length;n++){var y=e[n];y.previousPositionImpulse.x=y.positionImpulse.x,y.previousPositionImpulse.y=y.positionImpulse.y}for(n=0;n<r.length;n++)s=r[n],!(!s.isActive||s.isSensor)&&(o=s.collision,l=o.parentA,f=o.parentB,u=o.normal,x=l.previousPositionImpulse,p=f.previousPositionImpulse,c=o.penetration,M=p.x-x.x+c.x,P=p.y-x.y+c.y,i=u.x,a=u.y,v=i*M+a*P,s.separation=v,q=(v-s.slop)*h,(l.isStatic||f.isStatic)&&(q*=2),l.isStatic||l.isSleeping||(g=q/l.totalContacts,l.positionImpulse.x+=i*g,l.positionImpulse.y+=a*g),f.isStatic||f.isSleeping||(g=q/f.totalContacts,f.positionImpulse.x-=i*g,f.positionImpulse.y-=a*g))},W.postSolvePosition=function(r){for(var e=0;e<r.length;e++){var t=r[e];if(t.totalContacts=0,t.positionImpulse.x!==0||t.positionImpulse.y!==0){for(var n=0;n<t.parts.length;n++){var i=t.parts[n];jt.translate(i.vertices,t.positionImpulse),bt.update(i.bounds,i.vertices,t.velocity),i.position.x+=t.positionImpulse.x,i.position.y+=t.positionImpulse.y}t.positionPrev.x+=t.positionImpulse.x,t.positionPrev.y+=t.positionImpulse.y,A.dot(t.positionImpulse,t.velocity)<0?(t.positionImpulse.x=0,t.positionImpulse.y=0):(t.positionImpulse.x*=W._positionWarming,t.positionImpulse.y*=W._positionWarming)}}},W.preSolveVelocity=function(r){var e,t,n,i,a,s,o,l,f,u,v,c,x,p,g=A._temp[0],M=A._temp[1];for(e=0;e<r.length;e++)if(n=r[e],!(!n.isActive||n.isSensor))for(i=n.activeContacts,a=n.collision,s=a.parentA,o=a.parentB,l=a.normal,f=a.tangent,t=0;t<i.length;t++)u=i[t],v=u.vertex,c=u.normalImpulse,x=u.tangentImpulse,(c!==0||x!==0)&&(g.x=l.x*c+f.x*x,g.y=l.y*c+f.y*x,s.isStatic||s.isSleeping||(p=A.sub(v,s.position,M),s.positionPrev.x+=g.x*s.inverseMass,s.positionPrev.y+=g.y*s.inverseMass,s.anglePrev+=A.cross(p,g)*s.inverseInertia),o.isStatic||o.isSleeping||(p=A.sub(v,o.position,M),o.positionPrev.x-=g.x*o.inverseMass,o.positionPrev.y-=g.y*o.inverseMass,o.anglePrev-=A.cross(p,g)*o.inverseInertia))},W.solveVelocity=function(r,e){for(var t=e*e,n=A._temp[0],i=A._temp[1],a=A._temp[2],s=A._temp[3],o=A._temp[4],l=A._temp[5],f=0;f<r.length;f++){var u=r[f];if(!(!u.isActive||u.isSensor)){var v=u.collision,c=v.parentA,x=v.parentB,p=v.normal,g=v.tangent,M=u.activeContacts,P=1/M.length;c.velocity.x=c.position.x-c.positionPrev.x,c.velocity.y=c.position.y-c.positionPrev.y,x.velocity.x=x.position.x-x.positionPrev.x,x.velocity.y=x.position.y-x.positionPrev.y,c.angularVelocity=c.angle-c.anglePrev,x.angularVelocity=x.angle-x.anglePrev;for(var q=0;q<M.length;q++){var h=M[q],y=h.vertex,I=A.sub(y,c.position,i),k=A.sub(y,x.position,a),Ee=A.add(c.velocity,A.mult(A.perp(I),c.angularVelocity),s),Fe=A.add(x.velocity,A.mult(A.perp(k),x.angularVelocity),o),gr=A.sub(Ee,Fe,l),ge=A.dot(p,gr),pe=A.dot(g,gr),pr=Math.abs(pe),ht=He.sign(pe),me=(1+u.restitution)*ge,gt=He.clamp(u.separation+ge,0,1)*W._frictionNormalMultiplier,le=pe,de=1/0;pr>u.friction*u.frictionStatic*gt*t&&(de=pr,le=He.clamp(u.friction*ht*t,-de,de));var mr=A.cross(I,p),dr=A.cross(k,p),Sr=P/(c.inverseMass+x.inverseMass+c.inverseInertia*mr*mr+x.inverseInertia*dr*dr);if(me*=Sr,le*=Sr,ge<0&&ge*ge>W._restingThresh*t)h.normalImpulse=0;else{var pt=h.normalImpulse;h.normalImpulse=Math.min(h.normalImpulse+me,0),me=h.normalImpulse-pt}if(pe*pe>W._restingThreshTangent*t)h.tangentImpulse=0;else{var mt=h.tangentImpulse;h.tangentImpulse=He.clamp(h.tangentImpulse+le,-de,de),le=h.tangentImpulse-mt}n.x=p.x*me+g.x*le,n.y=p.y*me+g.y*le,c.isStatic||c.isSleeping||(c.positionPrev.x+=n.x*c.inverseMass,c.positionPrev.y+=n.y*c.inverseMass,c.anglePrev+=A.cross(I,n)*c.inverseInertia),x.isStatic||x.isSleeping||(x.positionPrev.x-=n.x*x.inverseMass,x.positionPrev.y-=n.y*x.inverseMass,x.anglePrev-=A.cross(k,n)*x.inverseInertia)}}}}})()});var st=L((Bn,at)=>{var Je={};at.exports=Je;var en=ue(),rn=F();(function(){Je.create=function(r){var e={extended:!1,narrowDetections:0,narrowphaseTests:0,narrowReuse:0,narrowReuseCount:0,midphaseTests:0,broadphaseTests:0,narrowEff:1e-4,midEff:1e-4,broadEff:1e-4,collisions:0,buckets:0,bodies:0,pairs:0};return rn.extend(e,!1,r)},Je.reset=function(r){r.extended&&(r.narrowDetections=0,r.narrowphaseTests=0,r.narrowReuse=0,r.narrowReuseCount=0,r.midphaseTests=0,r.broadphaseTests=0,r.narrowEff=0,r.midEff=0,r.broadEff=0,r.collisions=0,r.buckets=0,r.pairs=0,r.bodies=0)},Je.update=function(r,e){if(r.extended){var t=e.world,n=en.allBodies(t);r.collisions=r.narrowDetections,r.pairs=e.pairs.list.length,r.bodies=n.length,r.midEff=(r.narrowDetections/(r.midphaseTests||1)).toFixed(2),r.narrowEff=(r.narrowDetections/(r.narrowphaseTests||1)).toFixed(2),r.broadEff=(1-r.broadphaseTests/(n.length||1)).toFixed(2),r.narrowReuse=(r.narrowReuseCount/(r.narrowphaseTests||1)).toFixed(2)}}})()});var lt=L((Vn,ot)=>{var z={};ot.exports=z;var tn=nr(),vr=Ce(),Be=cr(),je=sr(),xr=st(),nn=ar(),Ve=Se(),Oe=ue(),xe=Me(),he=F(),an=fe();(function(){z.create=function(r,e){e=he.isElement(r)?e:r,r=he.isElement(r)?r:null,e=e||{},(r||e.render)&&he.warn("Engine.create: engine.render is deprecated (see docs)");var t={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},timing:{timestamp:0,timeScale:1},broadphase:{controller:nn}},n=he.extend(t,e);return n.world=e.world||tn.create(n.world),n.pairs=je.create(),n.broadphase=n.broadphase.controller.create(n.broadphase),n.metrics=n.metrics||{extended:!1},n.metrics=xr.create(n.metrics),n},z.update=function(r,e,t){e=e||1e3/60,t=t||1;var n=r.world,i=r.timing,a=r.broadphase,s=[],o;i.timestamp+=e*i.timeScale;var l={timestamp:i.timestamp};Ve.trigger(r,"beforeUpdate",l);var f=Oe.allBodies(n),u=Oe.allConstraints(n);for(xr.reset(r.metrics),r.enableSleeping&&vr.update(f,i.timeScale),z._bodiesApplyGravity(f,n.gravity),z._bodiesUpdate(f,e,i.timeScale,t,n.bounds),xe.preSolveAll(f),o=0;o<r.constraintIterations;o++)xe.solveAll(u,i.timeScale);xe.postSolveAll(f),a.controller?(n.isModified&&a.controller.clear(a),a.controller.update(a,f,r,n.isModified),s=a.pairsList):s=f,n.isModified&&Oe.setModified(n,!1,!1,!0);var v=a.detector(s,r),c=r.pairs,x=i.timestamp;for(je.update(c,v,x),je.removeOld(c,x),r.enableSleeping&&vr.afterCollisions(c.list,i.timeScale),c.collisionStart.length>0&&Ve.trigger(r,"collisionStart",{pairs:c.collisionStart}),Be.preSolvePosition(c.list),o=0;o<r.positionIterations;o++)Be.solvePosition(c.list,f,i.timeScale);for(Be.postSolvePosition(f),xe.preSolveAll(f),o=0;o<r.constraintIterations;o++)xe.solveAll(u,i.timeScale);for(xe.postSolveAll(f),Be.preSolveVelocity(c.list),o=0;o<r.velocityIterations;o++)Be.solveVelocity(c.list,i.timeScale);return c.collisionActive.length>0&&Ve.trigger(r,"collisionActive",{pairs:c.collisionActive}),c.collisionEnd.length>0&&Ve.trigger(r,"collisionEnd",{pairs:c.collisionEnd}),xr.update(r.metrics,r),z._bodiesClearForces(f),Ve.trigger(r,"afterUpdate",l),r},z.merge=function(r,e){if(he.extend(r,e),e.world){r.world=e.world,z.clear(r);for(var t=Oe.allBodies(r.world),n=0;n<t.length;n++){var i=t[n];vr.set(i,!1),i.id=he.nextId()}}},z.clear=function(r){var e=r.world;je.clear(r.pairs);var t=r.broadphase;if(t.controller){var n=Oe.allBodies(e);t.controller.clear(t),t.controller.update(t,n,r,!0)}},z._bodiesClearForces=function(r){for(var e=0;e<r.length;e++){var t=r[e];t.force.x=0,t.force.y=0,t.torque=0}},z._bodiesApplyGravity=function(r,e){var t=typeof e.scale<"u"?e.scale:.001;if(!(e.x===0&&e.y===0||t===0))for(var n=0;n<r.length;n++){var i=r[n];i.ignoreGravity||i.isStatic||i.isSleeping||(i.force.x+=i.mass*e.x*t*i.gravityScale.x,i.force.y+=i.mass*e.y*t*i.gravityScale.y)}},z._bodiesUpdate=function(r,e,t,n,i){for(var a=0;a<r.length;a++){var s=r[a];s.isStatic||s.isSleeping||an.update(s,e,t,n)}}})()});var ut=L((On,ft)=>{var Y={};ft.exports=Y;var U=ue(),ae=Me(),oe=F(),hr=fe(),Re=Ye();(function(){Y.stack=function(r,e,t,n,i,a,s){for(var o=U.create({label:"Stack"}),l=r,f=e,u,v=0,c=0;c<n;c++){for(var x=0,p=0;p<t;p++){var g=s(l,f,p,c,u,v);if(g){var M=g.bounds.max.y-g.bounds.min.y,P=g.bounds.max.x-g.bounds.min.x;M>x&&(x=M),hr.translate(g,{x:P*.5,y:M*.5}),l=g.bounds.max.x+i,U.addBody(o,g),u=g,v+=1}else l+=i}f+=x+a,l=r}return o},Y.chain=function(r,e,t,n,i,a){for(var s=r.bodies,o=1;o<s.length;o++){var l=s[o-1],f=s[o],u=l.bounds.max.y-l.bounds.min.y,v=l.bounds.max.x-l.bounds.min.x,c=f.bounds.max.y-f.bounds.min.y,x=f.bounds.max.x-f.bounds.min.x,p={bodyA:l,pointA:{x:v*e,y:u*t},bodyB:f,pointB:{x:x*n,y:c*i}},g=oe.extend(p,a);U.addConstraint(r,ae.create(g))}return r.label+=" Chain",r},Y.mesh=function(r,e,t,n,i){var a=r.bodies,s,o,l,f,u;for(s=0;s<t;s++){for(o=1;o<e;o++)l=a[o-1+s*e],f=a[o+s*e],U.addConstraint(r,ae.create(oe.extend({bodyA:l,bodyB:f},i)));if(s>0)for(o=0;o<e;o++)l=a[o+(s-1)*e],f=a[o+s*e],U.addConstraint(r,ae.create(oe.extend({bodyA:l,bodyB:f},i))),n&&o>0&&(u=a[o-1+(s-1)*e],U.addConstraint(r,ae.create(oe.extend({bodyA:u,bodyB:f},i)))),n&&o<e-1&&(u=a[o+1+(s-1)*e],U.addConstraint(r,ae.create(oe.extend({bodyA:u,bodyB:f},i))))}return r.label+=" Mesh",r},Y.pyramid=function(r,e,t,n,i,a,s){return Y.stack(r,e,t,n,i,a,function(o,l,f,u,v,c){var x=Math.min(n,Math.ceil(t/2)),p=v?v.bounds.max.x-v.bounds.min.x:0;if(!(u>x)){u=x-u;var g=u,M=t-1-u;if(!(f<g||f>M)){c===1&&hr.translate(v,{x:(f+(t%2===1?1:-1))*p,y:0});var P=v?f*p:0;return s(r+P+f*i,l,f,u,v,c)}}})},Y.newtonsCradle=function(r,e,t,n,i){for(var a=U.create({label:"Newtons Cradle"}),s=0;s<t;s++){var o=1.9,l=Re.circle(r+s*(n*o),e+i,n,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),f=ae.create({pointA:{x:r+s*(n*o),y:e},bodyB:l});U.addBody(a,l),U.addConstraint(a,f)}return a},Y.car=function(r,e,t,n,i){var a=hr.nextGroup(!0),s=20,o=-t*.5+s,l=t*.5-s,f=0,u=U.create({label:"Car"}),v=Re.rectangle(r,e,t,n,{collisionFilter:{group:a},chamfer:{radius:n*.5},density:2e-4}),c=Re.circle(r+o,e+f,i,{collisionFilter:{group:a},friction:.8}),x=Re.circle(r+l,e+f,i,{collisionFilter:{group:a},friction:.8}),p=ae.create({bodyB:v,pointB:{x:o,y:f},bodyA:c,stiffness:1,length:0}),g=ae.create({bodyB:v,pointB:{x:l,y:f},bodyA:x,stiffness:1,length:0});return U.addBody(u,v),U.addBody(u,c),U.addBody(u,x),U.addConstraint(u,p),U.addConstraint(u,g),u},Y.softBody=function(r,e,t,n,i,a,s,o,l,f){l=oe.extend({inertia:1/0},l),f=oe.extend({stiffness:.2,render:{type:"line",anchors:!1}},f);var u=Y.stack(r,e,t,n,i,a,function(v,c){return Re.circle(v,c,o,l)});return Y.mesh(u,t,n,s,f),u.label="Soft Body",u}})()});var vt=L((En,ct)=>{var be={};ct.exports=be;var Rn=J(),sn=F();(function(){be.pathToVertices=function(r,e){typeof window<"u"&&!("SVGPathSeg"in window)&&sn.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var t,n,i,a,s,o,l,f,u,v,c=[],x,p,g=0,M=0,P=0;e=e||15;var q=function(y,I,k){var Ee=k%2===1&&k>1;if(!u||y!=u.x||I!=u.y){u&&Ee?(x=u.x,p=u.y):(x=0,p=0);var Fe={x:x+y,y:p+I};(Ee||!u)&&(u=Fe),c.push(Fe),M=x+y,P=p+I}},h=function(y){var I=y.pathSegTypeAsLetter.toUpperCase();if(I!=="Z"){switch(I){case"M":case"L":case"T":case"C":case"S":case"Q":M=y.x,P=y.y;break;case"H":M=y.x;break;case"V":P=y.y;break}q(M,P,y.pathSegType)}};for(be._svgPathToAbsolute(r),i=r.getTotalLength(),o=[],t=0;t<r.pathSegList.numberOfItems;t+=1)o.push(r.pathSegList.getItem(t));for(l=o.concat();g<i;){if(v=r.getPathSegAtLength(g),s=o[v],s!=f){for(;l.length&&l[0]!=s;)h(l.shift());f=s}switch(s.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":a=r.getPointAtLength(g),q(a.x,a.y,0);break}g+=e}for(t=0,n=l.length;t<n;++t)h(l[t]);return c},be._svgPathToAbsolute=function(r){for(var e,t,n,i,a,s,o=r.pathSegList,l=0,f=0,u=o.numberOfItems,v=0;v<u;++v){var c=o.getItem(v),x=c.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(x))"x"in c&&(l=c.x),"y"in c&&(f=c.y);else switch("x1"in c&&(n=l+c.x1),"x2"in c&&(a=l+c.x2),"y1"in c&&(i=f+c.y1),"y2"in c&&(s=f+c.y2),"x"in c&&(l+=c.x),"y"in c&&(f+=c.y),x){case"m":o.replaceItem(r.createSVGPathSegMovetoAbs(l,f),v);break;case"l":o.replaceItem(r.createSVGPathSegLinetoAbs(l,f),v);break;case"h":o.replaceItem(r.createSVGPathSegLinetoHorizontalAbs(l),v);break;case"v":o.replaceItem(r.createSVGPathSegLinetoVerticalAbs(f),v);break;case"c":o.replaceItem(r.createSVGPathSegCurvetoCubicAbs(l,f,n,i,a,s),v);break;case"s":o.replaceItem(r.createSVGPathSegCurvetoCubicSmoothAbs(l,f,a,s),v);break;case"q":o.replaceItem(r.createSVGPathSegCurvetoQuadraticAbs(l,f,n,i),v);break;case"t":o.replaceItem(r.createSVGPathSegCurvetoQuadraticSmoothAbs(l,f),v);break;case"a":o.replaceItem(r.createSVGPathSegArcAbs(l,f,c.r1,c.r2,c.angle,c.largeArcFlag,c.sweepFlag),v);break;case"z":case"Z":l=e,f=t;break}(x=="M"||x=="m")&&(e=l,t=f)}}})()});var on=L((Fn,xt)=>{var w=Mr();w.Body=fe();w.Composite=ue();w.World=nr();w.Detector=ir();w.Grid=ar();w.Pairs=sr();w.Pair=we();w.Query=nt();w.Resolver=cr();w.SAT=Ne();w.Constraint=Me();w.Common=F();w.Engine=lt();w.Events=Se();w.Sleeping=Ce();w.Plugin=er();w.Bodies=Ye();w.Composites=ut();w.Axes=We();w.Bounds=J();w.Svg=vt();w.Vector=H();w.Vertices=re();w.World.add=w.Composite.add;w.World.remove=w.Composite.remove;w.World.addComposite=w.Composite.addComposite;w.World.addBody=w.Composite.addBody;w.World.addConstraint=w.Composite.addConstraint;w.World.clear=w.Composite.clear;xt.exports=w});return on();})();

/* ============================================================================
   WATERJON — ABYSS PINBALL 3D · game.js
   Three.js renders the table; Matter.js (Phaser 3.55's build, bundled at the
   top of this file) runs the same physics and tuning as the 2D table.
   Every texture is drawn at runtime: no image files.

   YOUR MUSIC
   • Put your file next to index.html and set AUDIO_SRC below,
     e.g.  const AUDIO_SRC = 'audio/pressure-drop.mp3';
   • Or load one in the game: SOUND & GRAPHICS → LOAD TRACK (MP3/WAV/OGG).
   • With no track the music is silent (sound effects still play).
     The track starts on the first launch, loops all run, fades out at game over.

   ONLINE LEADERBOARD LATER
   • All score reads/writes go through `Leaderboard` (async). Swap
     `Leaderboard.adapter = LocalAdapter` for a remote adapter with the same
     two methods — see the commented RemoteAdapter example below.

   GRAPHICS
   • SOUND & GRAPHICS → AUTO / HIGH / LOW. AUTO starts on HIGH (shadows, bloom,
     clear-coat playfield) and drops to LOW if frames run slow.
   ============================================================================ */

/* ================================ TUNING ================================== */

const AUDIO_SRC = '';                         // '' = silent music fallback
const GAME_TITLE = 'Waterjon Abyss Pinball';

const W = 450, TOP = 100, TH = 800, H = TOP + TH;   // DMD strip on top of the table
const BALLS_PER_GAME = 3;

const PHYSICS_HZ = 180;                       // fixed physics rate, independent of screen Hz
const STEP_MS = 1000 / PHYSICS_HZ;
const GRAVITY = 1.15;                         // x1000 px/s² — a heavy ball
const BALL_R = 8;
const MAX_SPEED = 1750;                       // px/s
const LAUNCH = [1150, 1800];                  // plunger speed range, px/s
const BUMPER_KICK = [900, 1350];
const SLING_KICK = 1100;
const KICKBACK = 1450;
const FLIP = { len: 78, thick: 14, rest: 0.45, up: 0.42, upSpeed: 26, downSpeed: 13 };  // rad, rad/s

const BALL_SAVE_MS = 8000, MB_SAVE_MS = 10000, SKILL_MS = 6000, RAMP_MS = 1100;
const SKILL_ZONE = [0.42, 0.68];             // plunger pull band that arms the Trench Lane skill shot
const COMBO_MS = 4000, MAX_MULT = 5;
const PRESSURE_PER_HIT = 4, SUPER_POPS_MS = 15000;
const SCORE = {
  bumper: 100, superBumper: 500, sling: 10, rollover: 100, laneComplete: 500,
  target: 750, ramp: 1500, orbit: 2000, lock: 3000, jackpot: 10000,
  jackpotStep: 5000, mbJackpotStep: 2500, tentacle: 250, skill: 5000, pressure: 5000,
};

const COL = { cyan: 0x54E6DE, sea: 0x8FE8C6, flood: 0xD8F7F2, red: 0xD93424, amber: 0xE46A24 };
const HEX = { cyan: '#54E6DE', sea: '#8FE8C6', flood: '#D8F7F2', red: '#FF4A36', amber: '#F28C3C' };
const RGB = { cyan: '84,230,222', sea: '143,232,198', red: '217,52,36', amber: '228,106,36' };
const F = {
  title: '"Michroma", "Arial Black", sans-serif',
  ui: '"Barlow Condensed", "Arial Narrow", sans-serif',
  num: '"VT323", "Courier New", monospace',
};
const KEYS = { scores: 'waterjon_abyss_scores_v2', settings: 'waterjon_abyss_settings_v2', callsign: 'waterjon_abyss_callsign', gfx: 'waterjon_abyss_gfx_v3' };

const M = Matter;                            // Phaser 3.55's Matter build (bundled above)
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const rand = (a, b) => a + Math.random() * (b - a);
const fmt = (n) => Math.round(n).toLocaleString('en-US');
const pxs = (pps) => pps * STEP_MS / 1000;   // px/s → px per physics step
const BALL_OPTS = { label: 'ball', restitution: 0.38, friction: 0.012, frictionStatic: 0.05, frictionAir: 0.00022, density: 0.004, slop: 0.02 };

/* =============================== GEOMETRY =================================
   Table space: x 0..450, y 0..800 (the camera shifts it below the DMD).     */

const T = {
  cx: 225, cy: 285, R: 215, wall: 14,          // top arc
  left: 10, right: 440,                        // inner faces of the cabinet walls
  laneX: 426, laneRest: 772,                   // shooter lane
  gateA: [398, 254], gateB: [434, 229],        // one-way gate over the shooter lane (overhangs the divider)
  chanL: [[46, 234], [46, 400]],               // orbit lane inner walls
  chanR: [[362, 200], [362, 300]],
  guideL: [[10, 398], [18, 436], [32, 462], [54, 480]],
  guideR: [[398, 398], [390, 436], [376, 462], [354, 480]],
  sepL: [[40, 548], [40, 640], [117, 711]],     // inlane / outlane separators
  sepR: [[368, 548], [368, 640], [291, 711]],
  slingL: [[64, 548], [64, 612], [110, 640]],
  slingR: [[344, 548], [344, 612], [298, 640]],
  flipL: [119, 716], flipR: [289, 716],
  lockBox: [[104, 240], [104, 184], [126, 170], [148, 184], [148, 240]],
  lockHold: [126, 206],
  bumpers: [[244, 184], [308, 172], [278, 240]], bumperR: 20,
  sonar: [[356, 226], [356, 250], [356, 274]], sonarAng: Math.PI / 2,   // mounted on the right orbit wall
  jackpot: [204, 290], jackPosts: [[181, 322], [227, 322]],
  mouthL: [[232, 472], [234, 428]], mouthR: [[268, 472], [266, 428]], mouth: [250, 440],
  ramp: [[250, 440], [248, 390], [262, 350], [300, 330], [336, 344], [350, 396], [355, 470], [356, 540], [356, 566]],   // returns to the right flipper
  orbitL: [28, 360], orbitR: [381, 262],
  inlaneL: [53, 588], inlaneR: [355, 588],
  kick: [24, 690],
  gauge: [196, 128],
  station: [204, 560],
};

// lamp inserts: key, shape, x, y, rotation, colour
const LAMPS = [
  ['orbitL', 'arrow', 62, 438, -0.62, 'cyan'],
  ['orbitR', 'arrow', 373, 424, 0.35, 'cyan'],
  ['ramp', 'arrow', 250, 494, 0, 'cyan'],
  ['lock1', 'round', 112, 276, 0, 'sea'],
  ['lock2', 'round', 126, 280, 0, 'sea'],
  ['lock3', 'round', 140, 276, 0, 'sea'],
  ['lockArrow', 'arrow', 126, 308, 0, 'sea'],
  ['jackpot', 'arrow', 196, 356, 0, 'red'],
  ['sonar1', 'round', 343, 226, 0, 'cyan'],
  ['sonar2', 'round', 343, 250, 0, 'cyan'],
  ['sonar3', 'round', 343, 274, 0, 'cyan'],
  ['inL', 'round', 52, 606, 0, 'cyan'],
  ['inR', 'round', 356, 606, 0, 'cyan'],
  ['kick', 'round', 24, 604, 0, 'amber'],
  ['save', 'rect', 204, 688, 0, 'amber'],
  ['skill', 'arrow', 28, 268, Math.PI, 'sea'],
  ['launch1', 'arrow', 426, 604, 0, 'amber'],
  ['launch2', 'arrow', 426, 584, 0, 'amber'],
];

/* ---- ramp path (Catmull-Rom, arc-length parameterised) ---- */
function catmull(pts, per) {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
    for (let s = 0; s < per; s++) {
      const t = s / per, t2 = t * t, t3 = t2 * t;
      const f = (k) => 0.5 * (2 * p1[k] + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3);
      out.push({ x: f(0), y: f(1) });
    }
  }
  const last = pts[pts.length - 1];
  out.push({ x: last[0], y: last[1] });
  out[0].d = 0;
  for (let i = 1; i < out.length; i++) out[i].d = out[i - 1].d + Math.hypot(out[i].x - out[i - 1].x, out[i].y - out[i - 1].y);
  out.total = out[out.length - 1].d;
  return out;
}
function pathAt(path, d) {
  if (d <= 0) return { x: path[0].x, y: path[0].y };
  for (let i = 1; i < path.length; i++) {
    if (path[i].d >= d) {
      const a = path[i - 1], b = path[i], t = (d - a.d) / ((b.d - a.d) || 1);
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
    }
  }
  const l = path[path.length - 1];
  return { x: l.x, y: l.y };
}
const RAMP_PATH = catmull(T.ramp, 12);

/* ramp height profile (3D): rises from the mouth, crests, drops to the inlane */
const RAMP_H = 38;
function rampHeight(s) { return RAMP_H * Math.pow(Math.sin(Math.PI * clamp(s, 0, 1)), 0.85); }
const HEXC = { cyan: 0x54E6DE, sea: 0x8FE8C6, red: 0xD93424, amber: 0xE46A24 };

/* ================================ STORAGE ================================= */

const Store = {
  get(k, fallback) { try { const v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } },
};

function cleanName(s) {
  return String(s || '').toUpperCase().replace(/[^A-Z0-9 _.\-]/g, '').trim().slice(0, 12);
}

/* ============================== LEADERBOARD ===============================
   Async on purpose, so an online backend can drop in without touching the game. */

const LocalAdapter = {
  async top(n) {
    const a = Store.get(KEYS.scores, []);
    return (Array.isArray(a) ? a : []).slice(0, n);
  },
  async submit(entry) {
    const a = Store.get(KEYS.scores, []);
    const list = Array.isArray(a) ? a.slice() : [];
    list.push(entry);
    list.sort((x, y) => y.score - x.score || x.at - y.at);
    const top = list.slice(0, 10);
    Store.set(KEYS.scores, top);
    const i = top.indexOf(entry);
    return i >= 0 ? i + 1 : null;
  },
};

/* Example online adapter (Supabase REST shown; Firebase or your own API work the
   same way). Create a table `abyss_scores (name text, score int, at bigint)`,
   fill in URL + anon key, then set:  Leaderboard.adapter = RemoteAdapter;

const RemoteAdapter = {
  url: 'https://YOUR-PROJECT.supabase.co/rest/v1/abyss_scores',
  key: 'YOUR-ANON-KEY',
  headers() { return { apikey: this.key, Authorization: 'Bearer ' + this.key, 'Content-Type': 'application/json' }; },
  async top(n) {
    const r = await fetch(this.url + '?select=name,score,at&order=score.desc&limit=' + n, { headers: this.headers() });
    return r.ok ? r.json() : [];
  },
  async submit(entry) {
    await fetch(this.url, { method: 'POST', headers: this.headers(), body: JSON.stringify(entry) });
    const top = await this.top(10);
    const i = top.findIndex(e => e.name === entry.name && e.score === entry.score && e.at === entry.at);
    return i >= 0 ? i + 1 : null;
  },
};
*/

const Leaderboard = {
  adapter: LocalAdapter,
  cache: [],
  async top(n = 10) {
    try { this.cache = await this.adapter.top(10); } catch (e) { /* keep cache */ }
    return this.cache.slice(0, n);
  },
  async best() { const t = await this.top(1); return t.length ? t[0].score : 0; },
  async qualifies(score) {
    const t = await this.top(10);
    return score > 0 && (t.length < 10 || score > t[t.length - 1].score);
  },
  async submit(name, score) {
    const entry = { name: cleanName(name) || 'DIVER', score: Math.round(score), at: Date.now() };
    try { return await this.adapter.submit(entry); } catch (e) { return null; }
  },
};

/* ================================= SOUND ==================================
   Music: an <audio loop> element (your track). SFX: short synthesized hits —
   low thumps, metal clicks, sonar pings. All of it unlocks on the first tap. */

const Sound = {
  ctx: null, master: null, noiseBuf: null, el: null, viaGraph: false, primed: false,
  trackName: '', blobUrl: null, volume: 0.7, muted: false, fade: 1,
  playing: false, paused: false, rumble: null, last: {}, fadeTimer: null,

  init() {
    const s = Store.get(KEYS.settings, {});
    if (s && typeof s.volume === 'number') this.volume = clamp(s.volume, 0, 1);
    this.muted = !!(s && s.muted);
    if (AUDIO_SRC) this.setTrack(AUDIO_SRC, AUDIO_SRC.split('/').pop());
  },
  save() { Store.set(KEYS.settings, { volume: this.volume, muted: this.muted }); },

  ensure() {                                   // call inside a user gesture
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      try { this.ctx = new AC(); } catch (e) { return false; }
      this.master = this.ctx.createGain();
      this.master.connect(this.ctx.destination);
      const unlock = this.ctx.createBufferSource();          // fully unlocks iOS
      unlock.buffer = this.ctx.createBuffer(1, 1, 22050);
      unlock.connect(this.master); unlock.start(0);
      const nb = this.ctx.createBuffer(1, this.ctx.sampleRate, this.ctx.sampleRate);
      const d = nb.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      this.noiseBuf = nb;
      this.connectEl();
      this.apply();
    }
    if (this.ctx.state === 'suspended' && !this.paused) this.ctx.resume();
    this.prime();
    return true;
  },

  // play+pause the <audio> once inside a gesture so it can start later on iOS
  prime() {
    if (!this.el || this.primed || this.playing) return;
    this.primed = true;
    const el = this.el;
    el.muted = true;
    const p = el.play();
    const done = () => { if (!this.playing) { el.pause(); try { el.currentTime = 0; } catch (e) { /* noop */ } } el.muted = false; };
    if (p && p.then) p.then(done).catch(() => { el.muted = false; this.primed = false; });
    else done();
  },

  connectEl() {                                // route through the gain node where allowed (iOS ignores el.volume)
    if (!this.el || !this.ctx || this.viaGraph) return;
    let same = false;
    try { same = location.protocol !== 'file:' && new URL(this.el.src, location.href).origin === location.origin; } catch (e) { /* noop */ }
    if (same) {
      try { this.ctx.createMediaElementSource(this.el).connect(this.master); this.viaGraph = true; } catch (e) { /* fall back to el.volume */ }
    }
  },

  setTrack(url, name) {
    this.stopMusic();
    if (this.el) { this.el.pause(); this.el.removeAttribute('src'); try { this.el.load(); } catch (e) { /* noop */ } }
    this.el = null; this.viaGraph = false; this.primed = false; this.trackName = '';
    if (!url) return;
    const el = new window.Audio();
    el.loop = true;
    el.preload = 'auto';
    el.src = url;
    this.el = el;
    this.trackName = name || 'Custom track';
    this.connectEl();
    this.apply();
  },
  loadFile(file) {
    if (!file) return false;
    if (this.blobUrl) URL.revokeObjectURL(this.blobUrl);
    this.blobUrl = URL.createObjectURL(file);
    this.setTrack(this.blobUrl, file.name);
    return true;
  },
  clearTrack() {
    if (this.blobUrl) { URL.revokeObjectURL(this.blobUrl); this.blobUrl = null; }
    this.setTrack(AUDIO_SRC || '', AUDIO_SRC ? AUDIO_SRC.split('/').pop() : '');
  },
  describe() { return this.trackName || 'No track loaded (silent)'; },

  apply() {
    const v = this.muted ? 0 : this.volume;
    if (this.master) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.02);
    if (this.el) this.el.volume = clamp(this.viaGraph ? this.fade : v * this.fade, 0, 1);
  },
  setVolume(v) { this.volume = clamp(v, 0, 1); this.save(); this.apply(); },
  setMuted(m) { this.muted = !!m; this.save(); this.apply(); },
  toggleMute() { this.setMuted(!this.muted); return this.muted; },

  startMusic() {                               // on launch
    if (this.playing) return;
    clearInterval(this.fadeTimer);
    this.fade = 1; this.playing = true; this.paused = false;
    this.apply();
    if (this.el) {
      try { this.el.currentTime = 0; } catch (e) { /* noop */ }
      this.el.muted = false;
      const p = this.el.play(); if (p && p.catch) p.catch(() => {});
    }
  },
  fadeOut(ms) {                                // game over
    if (!this.playing) return;
    this.playing = false;
    const t0 = performance.now();
    clearInterval(this.fadeTimer);
    this.fadeTimer = setInterval(() => {
      this.fade = Math.max(0, 1 - (performance.now() - t0) / ms);
      this.apply();
      if (this.fade <= 0) { clearInterval(this.fadeTimer); this.stopMusic(); }
    }, 40);
  },
  stopMusic() {
    clearInterval(this.fadeTimer);
    this.playing = false; this.fade = 1;
    if (this.el) { this.el.pause(); try { this.el.currentTime = 0; } catch (e) { /* noop */ } }
    this.apply();
  },
  pause() {
    if (this.paused) return;
    this.paused = true;
    if (this.el) this.el.pause();
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend();
  },
  resume() {
    if (!this.paused) return;
    this.paused = false;
    if (this.ctx) this.ctx.resume();
    if (this.el && this.playing) { const p = this.el.play(); if (p && p.catch) p.catch(() => {}); }
  },

  /* ---- synthesized effects ---- */
  tone(type, f1, f2, dur, vol, t0) {
    const c = this.ctx, t = c.currentTime + (t0 || 0);
    const o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f1, t);
    if (f2 !== f1) o.frequency.exponentialRampToValueAtTime(Math.max(20, f2), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + dur + 0.03);
  },
  hiss(ftype, freq, q, dur, vol, t0, sweep) {
    const c = this.ctx, t = c.currentTime + (t0 || 0);
    const s = c.createBufferSource(); s.buffer = this.noiseBuf; s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = c.createBiquadFilter(); f.type = ftype; f.Q.value = q; f.frequency.setValueAtTime(freq, t);
    if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.012, dur * 0.25));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.master);
    s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  },
  sfx(name, k) {
    if (!this.ctx || this.muted || this.ctx.state !== 'running') return;
    const now = performance.now();
    if (now - (this.last[name] || 0) < 35) return;
    this.last[name] = now;
    const i = clamp(k === undefined ? 1 : k, 0.25, 1.2);
    switch (name) {
      case 'flip': this.hiss('bandpass', 1900, 1.2, 0.035, 0.2); this.tone('sine', 115, 60, 0.05, 0.22); break;
      case 'bumper': this.tone('sine', 150, 46, 0.15, 0.55 * i); this.hiss('highpass', 3200, 0.7, 0.025, 0.16 * i); break;
      case 'sling': this.tone('sine', 125, 55, 0.09, 0.38); this.hiss('bandpass', 900, 1.5, 0.05, 0.2); break;
      case 'target': this.tone('sine', 1240, 1190, 0.16, 0.07); this.tone('sine', 1870, 1810, 0.12, 0.045); this.tone('sine', 140, 70, 0.06, 0.24); break;
      case 'tick': this.hiss('bandpass', 2600, 2, 0.02, 0.05 * i); break;
      case 'rollover': this.tone('sine', 880, 860, 0.09, 0.06); break;
      case 'ping': this.tone('sine', 1180, 1150, 0.9, 0.15); this.tone('sine', 1180, 1150, 0.7, 0.055, 0.32); this.tone('sine', 1180, 1150, 0.5, 0.022, 0.64); break;
      case 'ramp': this.hiss('bandpass', 350, 1.4, 0.8, 0.24, 0, 2600); this.tone('sine', 70, 140, 0.6, 0.12); break;
      case 'lock': this.tone('sine', 92, 32, 0.6, 0.7); this.hiss('lowpass', 500, 0.8, 0.32, 0.32); this.tone('square', 220, 210, 0.05, 0.04, 0.02); break;
      case 'release': this.tone('sawtooth', 55, 28, 1.6, 0.16); this.tone('sine', 80, 30, 1.4, 0.6); this.hiss('lowpass', 1200, 0.7, 1.4, 0.3, 0, 120); break;
      case 'jackpot': this.tone('sine', 120, 30, 1.3, 0.8); this.hiss('lowpass', 2400, 0.7, 1.2, 0.34, 0, 90); this.tone('sine', 1500, 1440, 1.0, 0.06, 0.05); this.tone('sine', 2250, 2200, 0.8, 0.035, 0.05); break;
      case 'save': this.tone('sine', 660, 650, 0.25, 0.09); this.tone('sine', 990, 980, 0.35, 0.08, 0.12); break;
      case 'kick': this.tone('sine', 110, 40, 0.25, 0.6); this.hiss('bandpass', 600, 1, 0.3, 0.28, 0, 2400); break;
      case 'launch': this.hiss('bandpass', 300, 1.2, 0.4, 0.28, 0, 1800); this.tone('sine', 90, 45, 0.18, 0.42); break;
      case 'drain': this.tone('sine', 240, 38, 1.1, 0.4); this.hiss('lowpass', 900, 0.7, 0.9, 0.2, 0, 80); break;
      case 'alarm': this.tone('square', 440, 440, 0.11, 0.035); this.tone('square', 440, 440, 0.11, 0.035, 0.24); break;
      case 'tentacle': this.tone('sine', 72, 40, 0.18, 0.45); this.hiss('bandpass', 420, 2, 0.12, 0.18); break;
      default: break;
    }
  },
  rumbleStart() {                              // rolling rumble that follows ball speed
    if (!this.ctx || this.rumble) return;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 150; f.Q.value = 0.7;
    const g = this.ctx.createGain(); g.gain.value = 0;
    s.connect(f); f.connect(g); g.connect(this.master); s.start();
    this.rumble = { s, g };
  },
  rumbleSet(level) { if (this.rumble && this.ctx.state === 'running') this.rumble.g.gain.setTargetAtTime(this.muted ? 0 : level, this.ctx.currentTime, 0.06); },
  rumbleStop() { if (!this.rumble) return; try { this.rumble.s.stop(); } catch (e) { /* noop */ } this.rumble = null; },
};

/* ================================ MENUS (DOM) ============================= */

const UI = {
  scene: null, current: null, back: null, panels: {}, lastScore: 0,
  $(id) { return document.getElementById(id); },

  init() {
    const $ = (id) => this.$(id);
    this.overlay = $('overlay');
    ['start', 'over', 'pause', 'settings', 'help'].forEach(k => { this.panels[k] = $('panel-' + k); });

    $('callsign').value = Store.get(KEYS.callsign, '') || '';
    $('callsign-form').onsubmit = (e) => { e.preventDefault(); this.startGame(); };
    $('btn-start').onclick = () => this.startGame();
    $('btn-again').onclick = () => this.startGame();
    $('btn-music').onclick = () => this.sub('settings', 'start');
    $('btn-help').onclick = () => this.sub('help', 'start');
    $('btn-music-pause').onclick = () => this.sub('settings', 'pause');
    $('btn-help-pause').onclick = () => this.sub('help', 'pause');
    $('btn-resume').onclick = () => this.resume();
    $('btn-quit').onclick = () => { this.hide(); if (this.scene) this.scene.endRun(); };
    $('btn-settings-close').onclick = () => this.closeSub();
    $('btn-help-close').onclick = () => this.closeSub();
    $('btn-share').onclick = () => this.share();

    const vol = $('vol'), mute = $('mute');
    vol.oninput = () => { Sound.setVolume(vol.value / 100); $('vol-label').textContent = vol.value + '%'; };
    mute.onchange = () => { Sound.setMuted(mute.checked); if (this.scene) this.scene.refreshButtons(); };
    $('audio-file').onchange = (e) => {
      const f = e.target.files && e.target.files[0];
      if (f) { Sound.ensure(); Sound.loadFile(f); $('track-name').textContent = Sound.describe(); }
      e.target.value = '';
    };
    $('btn-reset-track').onclick = () => { Sound.clearTrack(); $('track-name').textContent = Sound.describe(); };

    $('name-form').onsubmit = async (e) => {
      e.preventDefault();
      const name = cleanName($('name-input').value);
      if (!name) { $('name-input').focus(); return; }
      Store.set(KEYS.callsign, name);
      $('callsign').value = name;
      $('name-form').classList.add('hidden');
      await this.logScore(name, this.lastScore);
    };
    document.querySelectorAll('.seg-btn').forEach(b => { b.onclick = () => { Gfx.set(b.dataset.q); this.refreshGfx(); }; });
    this.renderBoard('start-board', 5);
  },

  attach(scene) { this.scene = scene; scene.refreshBest(); this.refreshGfx(); },
  refreshGfx() {
    document.querySelectorAll('.seg-btn').forEach(b => b.classList.toggle('on', b.dataset.q === Gfx.mode));
    const note = this.$('gfx-note'), g = this.scene;
    if (!note) return;
    if (Gfx.mode === 'auto') note.textContent = g && g.autoLow ? 'AUTO switched to LOW to keep the game smooth on this device.' : 'AUTO starts on HIGH and drops to LOW if your device struggles.';
    else if (Gfx.mode === 'high') note.textContent = 'HIGH: real-time shadows, bloom and a clear-coat playfield.';
    else note.textContent = 'LOW: no shadows or bloom. Best for older phones.';
  },
  isOpen() { return !this.overlay.classList.contains('hidden'); },

  show(name) {
    this.current = name;
    Object.keys(this.panels).forEach(k => this.panels[k].classList.toggle('hidden', k !== name));
    this.overlay.classList.remove('hidden');
    if (name === 'start') this.renderBoard('start-board', 5);
    if (name === 'settings') {
      this.$('track-name').textContent = Sound.describe();
      this.$('vol').value = Math.round(Sound.volume * 100);
      this.$('vol-label').textContent = Math.round(Sound.volume * 100) + '%';
      this.$('mute').checked = Sound.muted;
      this.refreshGfx();
    }
  },
  hide() { this.overlay.classList.add('hidden'); this.current = null; },
  sub(name, back) { this.back = back; this.show(name); },
  closeSub() { const b = this.back || 'start'; this.back = null; this.show(b); },

  pauseMenu() { this.back = null; this.show('pause'); },
  resume() { this.hide(); if (this.scene) this.scene.setPaused(false); },

  startGame() {
    Sound.ensure();
    const name = cleanName(this.$('callsign').value);
    if (name) Store.set(KEYS.callsign, name);
    this.$('callsign').value = name;
    this.hide();
    this.$('share-box').classList.add('hidden');
    this.$('share-status').textContent = '';
    if (this.scene) this.scene.newGame();
  },

  async showGameOver(score) {
    this.lastScore = score;
    this.$('final-score').textContent = fmt(score);
    this.$('final-rank').textContent = '';
    this.$('name-form').classList.add('hidden');
    this.$('share-box').classList.add('hidden');
    this.$('share-status').textContent = '';
    this.show('over');
    const name = cleanName(Store.get(KEYS.callsign, ''));
    const q = await Leaderboard.qualifies(score);
    if (q && name) {
      await this.logScore(name, score);
    } else if (q) {
      this.$('name-form').classList.remove('hidden');
      this.$('name-input').value = '';
      this.$('final-rank').textContent = 'TOP 10 DEPTH';
      await this.renderBoard('over-board', 10);
      setTimeout(() => this.$('name-input').focus(), 150);
    } else {
      this.$('final-rank').textContent = score > 0 ? 'OUTSIDE THE TOP 10' : '';
      await this.renderBoard('over-board', 10);
    }
  },

  async logScore(name, score) {
    const rank = await Leaderboard.submit(name, score);
    this.$('final-rank').textContent = rank ? 'LOGGED AS ' + name + ' · RANK #' + rank : 'LOGGED AS ' + name;
    await this.renderBoard('over-board', 10, rank ? rank - 1 : -1);
    if (this.scene) this.scene.refreshBest();
  },

  async renderBoard(id, n, highlight) {
    const ol = this.$(id);
    const list = await Leaderboard.top(n);
    ol.innerHTML = '';
    if (!list.length) {
      const li = document.createElement('li'); li.className = 'empty'; li.textContent = 'No dives logged yet. Set the first depth.'; ol.appendChild(li);
      return;
    }
    list.forEach((e, i) => {
      const li = document.createElement('li');
      if (i === highlight) li.className = 'me';
      const rk = document.createElement('span'); rk.className = 'rk'; rk.textContent = String(i + 1).padStart(2, '0');
      const nm = document.createElement('span'); nm.className = 'nm'; nm.textContent = e.name;
      const sc = document.createElement('span'); sc.className = 'sc'; sc.textContent = fmt(e.score);
      li.append(rk, nm, sc);
      ol.appendChild(li);
    });
  },

  async share() {
    const text = 'I scored ' + fmt(this.lastScore) + ' on ' + GAME_TITLE + '. Can you survive deeper?';
    const status = this.$('share-status');
    try {
      if (navigator.share) { await navigator.share({ text }); status.textContent = 'Shared.'; return; }
    } catch (e) { /* refused or cancelled: fall through to copy */ }
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Copied to your clipboard.';
      return;
    } catch (e) { /* clipboard blocked */ }
    const box = this.$('share-box'), input = this.$('share-text');
    input.value = text;
    box.classList.remove('hidden');
    input.focus(); input.select();
    status.textContent = 'Select the text above and copy it.';
  },

  primary() {
    const c = this.current;
    if (c === 'start') this.startGame();
    else if (c === 'over' && this.$('name-form').classList.contains('hidden')) this.startGame();
    else if (c === 'pause') this.resume();
    else if (c === 'settings' || c === 'help') this.closeSub();
  },
  escape() {
    const c = this.current;
    if (c === 'pause') this.resume();
    else if (c === 'settings' || c === 'help') this.closeSub();
  },
};

/* ============================ GRAPHICS SETTING ============================ */

const Gfx = {
  mode: (() => { const m = Store.get(KEYS.gfx, 'auto'); return m === 'high' || m === 'low' ? m : 'auto'; })(),
  set(m) {
    this.mode = m === 'high' || m === 'low' ? m : 'auto';
    Store.set(KEYS.gfx, this.mode);
    if (UI.scene) { if (this.mode !== 'auto') UI.scene.autoLow = false; UI.scene.applyGfx(); }
  },
};

/* =============================== CANVAS ART ===============================
   2D canvases become textures on the 3D table: the printed playfield, lamp
   inserts, bumper caps, the gauge face, the backboard and effect sprites.   */

function makeCanvas(w, h, draw, S = 2) {
  const cv = document.createElement('canvas');
  cv.width = Math.ceil(w * S); cv.height = Math.ceil(h * S);
  const c = cv.getContext('2d');
  c.save(); c.scale(S, S); draw(c); c.restore();
  return cv;
}

const METAL = ['#040809', '#1b2729', '#46585b', '#8ea3a5', '#cde0dd', '#f4fffd'];
const METAL_W = [1, 0.8, 0.6, 0.42, 0.24, 0.09];
function metal(c, path, w, shadow) {
  c.save(); c.lineCap = 'round'; c.lineJoin = 'round';
  if (shadow !== false) { c.save(); c.translate(2.5, 4); c.strokeStyle = 'rgba(0,0,0,0.55)'; c.lineWidth = w + 2; path(); c.stroke(); c.restore(); }
  for (let i = 0; i < METAL.length; i++) { c.strokeStyle = METAL[i]; c.lineWidth = Math.max(0.6, w * METAL_W[i]); path(); c.stroke(); }
  c.restore();
}
function metalPoly(c, pts, w, shadow, close) {
  metal(c, () => { c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]); if (close) c.closePath(); }, w, shadow);
}
function bolt(c, x, y, r) {
  const g = c.createRadialGradient(x - r * 0.3, y - r * 0.35, 0.2, x, y, r);
  g.addColorStop(0, '#eef8f6'); g.addColorStop(0.5, '#7b8e90'); g.addColorStop(1, '#121a1c');
  c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
  c.strokeStyle = 'rgba(0,0,0,0.65)'; c.lineWidth = Math.max(0.5, r * 0.25);
  c.beginPath(); c.moveTo(x - r * 0.55, y + r * 0.2); c.lineTo(x + r * 0.55, y - r * 0.2); c.stroke();
}
function roundRect(c, x, y, w, h, r) {
  c.moveTo(x + r, y); c.lineTo(x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r);
  c.lineTo(x + w, y + h - r); c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  c.lineTo(x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r);
  c.lineTo(x, y + r); c.quadraticCurveTo(x, y, x + r, y); c.closePath();
}
function lampPath(c, shape, x, y, rot) {
  c.save(); c.translate(x, y); c.rotate(rot || 0); c.beginPath();
  if (shape === 'arrow') { c.moveTo(0, -11); c.lineTo(7.3, 6); c.lineTo(0, 2.4); c.lineTo(-7.3, 6); c.closePath(); }
  else if (shape === 'round') { c.arc(0, 0, 5, 0, Math.PI * 2); }
  else { roundRect(c, -14, -5, 28, 10, 3); }
  c.restore();
}
function spaced(c, str, x, y, sp, align) {
  const chars = Array.from(str), ws = chars.map(ch => c.measureText(ch).width);
  const total = ws.reduce((a, b) => a + b, 0) + sp * (chars.length - 1);
  let cx = align === 'left' ? x : align === 'right' ? x - total : x - total / 2;
  const prev = c.textAlign; c.textAlign = 'left';
  chars.forEach((ch, i) => { c.fillText(ch, cx, y); cx += ws[i] + sp; });
  c.textAlign = prev;
}
function vspaced(c, str, x, y, sp) { c.save(); c.translate(x, y); c.rotate(-Math.PI / 2); spaced(c, str, 0, 0, sp); c.restore(); }
function tablePath(c) {
  c.moveTo(T.left, TH + 5); c.lineTo(T.left, T.cy);
  c.arc(T.cx, T.cy, T.R, Math.PI, Math.PI * 2);
  c.lineTo(T.right, TH + 5); c.closePath();
}

/* soft contact shadows where 3D parts meet the playfield (ambient occlusion) */
function paintAO(c) {
  c.save();
  if ('filter' in c) c.filter = 'blur(4px)';
  c.strokeStyle = 'rgba(0,0,0,0.55)'; c.lineCap = 'round'; c.lineJoin = 'round';
  const poly = (pts, w) => { c.lineWidth = w; c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(p => c.lineTo(p[0], p[1])); c.stroke(); };
  [T.chanL, T.chanR, T.guideL, T.guideR, T.sepL, T.sepR, T.lockBox, T.mouthL, T.mouthR].forEach(p => poly(p, 12));
  poly([[405, 262], [405, TH]], 22);
  c.lineWidth = 16; c.beginPath(); tablePath(c); c.stroke();
  c.fillStyle = 'rgba(0,0,0,0.6)';
  T.bumpers.forEach(([x, y]) => { c.beginPath(); c.arc(x + 2, y + 3, 27, 0, Math.PI * 2); c.fill(); });
  [T.slingL, T.slingR].forEach(v => { c.beginPath(); c.moveTo(v[0][0], v[0][1]); c.lineTo(v[1][0], v[1][1]); c.lineTo(v[2][0], v[2][1]); c.closePath(); c.fill(); });
  T.jackPosts.forEach(([x, y]) => { c.beginPath(); c.arc(x + 1, y + 2, 8, 0, Math.PI * 2); c.fill(); });
  c.restore();
}

/* lit insert overlays (white, tinted per lamp at render time) */
function paintLit(shape) {
  return makeCanvas(40, 40, c => {
    c.shadowColor = '#fff'; c.shadowBlur = 8;
    lampPath(c, shape, 20, 20, 0); c.fillStyle = 'rgba(255,255,255,0.95)'; c.fill();
    c.shadowBlur = 0; lampPath(c, shape, 20, 20, 0); c.fillStyle = '#fff'; c.fill();
  }, 3);
}

function paintGlow() {
  return makeCanvas(64, 64, c => {
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,0.42)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  }, 1);
}
function paintRing() {
  return makeCanvas(64, 64, c => {
    c.strokeStyle = '#fff'; c.lineWidth = 2.2; c.shadowColor = '#fff'; c.shadowBlur = 6;
    c.beginPath(); c.arc(32, 32, 27, 0, Math.PI * 2); c.stroke();
  }, 2);
}
function paintSpeck() {
  return makeCanvas(16, 16, c => {
    const g = c.createRadialGradient(8, 8, 0, 8, 8, 8);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 16, 16);
  }, 2);
}
function paintCaustics() {
  return makeCanvas(256, 256, c => {
    c.strokeStyle = 'rgba(150,255,245,0.7)'; c.lineWidth = 1.3; c.lineJoin = 'round';
    let seed = 23; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 34; i++) {
      const cx = rnd() * 256, cy = rnd() * 256, r = 12 + rnd() * 30, ph = rnd() * 6;
      for (const ox of [-256, 0, 256]) for (const oy of [-256, 0, 256]) {
        c.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.35) {
          const rr = r * (0.62 + 0.38 * Math.sin(a * 3 + ph));
          const x = cx + ox + Math.cos(a) * rr, y = cy + oy + Math.sin(a) * rr * 0.8;
          if (a === 0) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.stroke();
      }
    }
  }, 1);
}
function paintSweep() {
  return makeCanvas(300, 300, c => {
    for (let i = 0; i < 60; i++) {
      const a = 0.3 * (1 - i / 60);
      const rg = c.createRadialGradient(150, 150, 0, 150, 150, 146);
      rg.addColorStop(0, 'rgba(84,230,222,0)'); rg.addColorStop(0.6, 'rgba(84,230,222,' + a.toFixed(3) + ')'); rg.addColorStop(1, 'rgba(84,230,222,0)');
      c.beginPath(); c.moveTo(150, 150); c.arc(150, 150, 146, -(i + 1) * 0.016, -i * 0.016); c.closePath();
      c.fillStyle = rg; c.fill();
    }
  }, 1);
}
function paintLeviathan() {
  return makeCanvas(560, 200, c => {
    if ('filter' in c) c.filter = 'blur(6px)';
    c.fillStyle = '#000';
    c.beginPath();
    c.moveTo(18, 104);
    c.bezierCurveTo(34, 70, 110, 58, 196, 64);
    c.bezierCurveTo(296, 70, 398, 86, 472, 98);
    c.lineTo(546, 66); c.lineTo(518, 104); c.lineTo(548, 146); c.lineTo(468, 112);
    c.bezierCurveTo(382, 124, 292, 140, 198, 138);
    c.bezierCurveTo(116, 136, 46, 130, 18, 104);
    c.fill();
    for (let i = 0; i < 7; i++) { const x = 150 + i * 42, y = 66 + i * 4; c.beginPath(); c.moveTo(x, y + 4); c.lineTo(x + 16, y - 16 + i); c.lineTo(x + 26, y + 6); c.fill(); }
    c.beginPath(); c.moveTo(150, 132); c.quadraticCurveTo(210, 196, 280, 184); c.quadraticCurveTo(232, 160, 214, 136); c.fill();
  }, 1);
}
/* top of a pop bumper cap: smoked glass, bolt circle, hex nut */
function paintPopCap() {
  return makeCanvas(64, 64, c => {
    const g = c.createRadialGradient(26, 24, 2, 32, 32, 32);
    g.addColorStop(0, '#22474c'); g.addColorStop(0.6, '#0a1a1d'); g.addColorStop(1, '#020607');
    c.fillStyle = g; c.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + 0.3; bolt(c, 32 + Math.cos(a) * 25, 32 + Math.sin(a) * 25, 2); }
    c.fillStyle = '#9aaeae'; c.beginPath();
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; const x = 32 + Math.cos(a) * 6, y = 32 + Math.sin(a) * 6; if (i === 0) c.moveTo(x, y); else c.lineTo(x, y); }
    c.closePath(); c.fill(); c.fillStyle = '#1b2527'; c.beginPath(); c.arc(32, 32, 2.4, 0, Math.PI * 2); c.fill();
    c.fillStyle = 'rgba(216,247,242,0.5)'; c.font = '700 5px ' + F.ui; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('PSI', 32, 44);
  }, 4);
}
function paintGauge() {
  return makeCanvas(40, 40, c => {
    c.fillStyle = '#030809'; c.fillRect(0, 0, 40, 40);
    const g = c.createRadialGradient(17, 15, 2, 20, 20, 19);
    g.addColorStop(0, '#0e2326'); g.addColorStop(1, '#020607');
    c.fillStyle = g; c.beginPath(); c.arc(20, 20, 19, 0, Math.PI * 2); c.fill();
    c.strokeStyle = 'rgba(217,52,36,0.9)'; c.lineWidth = 2.6; c.beginPath(); c.arc(20, 20, 15, -Math.PI / 2 + 1.5, -Math.PI / 2 + 2.3); c.stroke();
    c.strokeStyle = 'rgba(216,247,242,0.75)'; c.lineWidth = 0.8;
    for (let i = 0; i <= 10; i++) {
      const a = -Math.PI / 2 - 2.3 + i * 0.46, r1 = i % 5 === 0 ? 11.5 : 13;
      c.beginPath(); c.moveTo(20 + Math.cos(a) * r1, 20 + Math.sin(a) * r1); c.lineTo(20 + Math.cos(a) * 16, 20 + Math.sin(a) * 16); c.stroke();
    }
    c.fillStyle = 'rgba(143,232,198,0.8)'; c.font = '600 5px ' + F.ui; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('PSI', 20, 29);
  }, 6);
}
/* backboard above the playfield (the machine's light panel) */
function paintBackboard() {
  return makeCanvas(500, 170, c => {
    const g = c.createLinearGradient(0, 0, 0, 170);
    g.addColorStop(0, '#040a0b'); g.addColorStop(1, '#0a1a1d');
    c.fillStyle = g; c.fillRect(0, 0, 500, 170);
    c.strokeStyle = 'rgba(84,230,222,0.06)'; c.lineWidth = 1;
    for (let k = 1; k < 9; k++) { c.beginPath(); c.arc(250, 220, k * 28, Math.PI, Math.PI * 2); c.stroke(); }
    c.save(); c.shadowColor = '#54E6DE'; c.shadowBlur = 16;
    c.fillStyle = '#9ff3e8'; c.font = '400 34px ' + F.title; c.textBaseline = 'middle';
    spaced(c, 'WATERJON', 250, 70, 12);
    c.restore();
    c.fillStyle = 'rgba(216,247,242,0.7)'; c.font = '600 13px ' + F.ui;
    spaced(c, 'ABYSS PINBALL  //  TABLE 01', 250, 108, 5);
    for (let i = 0; i < 22; i++) {
      const x = 30 + i * 20.5;
      c.fillStyle = i % 2 ? 'rgba(84,230,222,0.9)' : 'rgba(84,230,222,0.35)';
      c.beginPath(); c.arc(x, 146, 3, 0, Math.PI * 2); c.fill();
    }
    c.fillStyle = 'rgba(217,52,36,0.9)'; c.fillRect(20, 22, 6, 6); c.fillRect(474, 22, 6, 6);
  }, 2);
}
function paintText(str, color) {
  return makeCanvas(256, 48, c => {
    c.font = '400 40px ' + F.num; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.shadowColor = color; c.shadowBlur = 10; c.fillStyle = color; c.fillText(str, 128, 26);
  }, 1);
}

/* the printed playfield (no rails or toys: those are real 3D parts now) */
function paintPlayfield(c) {
    const { cx, cy, R } = T;
    // ---- water ----
    c.fillStyle = '#020607'; c.fillRect(0, 0, W, TH);
    let g = c.createRadialGradient(205, 650, 10, 205, 650, 640);
    g.addColorStop(0, '#07262b'); g.addColorStop(0.36, '#030a0b'); g.addColorStop(0.82, '#010304');
    c.fillStyle = g; c.fillRect(0, 0, W, TH);
    g = c.createRadialGradient(140, 230, 10, 140, 230, 320);
    g.addColorStop(0, 'rgba(10,51,66,0.22)'); g.addColorStop(1, 'rgba(10,51,66,0)');
    c.fillStyle = g; c.fillRect(0, 0, W, TH);

    c.save();
    c.beginPath(); tablePath(c); c.clip();

    // ---- bathymetric contours ----
    const contours = (ox, oy, n, seed) => {
      for (let k = 1; k <= n; k++) {
        const r = 21 * k, index = k % 4 === 0;
        c.strokeStyle = 'rgba(84,230,222,' + (index ? 0.075 : 0.033) + ')';
        c.lineWidth = index ? 1.1 : 0.7;
        c.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.05; a += 0.05) {
          const rr = r * (1 + 0.1 * Math.sin(3 * a + k * 0.9 + seed) + 0.06 * Math.sin(7 * a - k * 1.3) + 0.035 * Math.sin(11 * a + k + seed));
          const x = ox + Math.cos(a) * rr, y = oy + Math.sin(a) * rr * 0.92;
          if (a === 0) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.stroke();
        if (index) {
          c.fillStyle = 'rgba(143,232,198,0.2)'; c.font = '500 6px ' + F.ui; c.textAlign = 'center'; c.textBaseline = 'middle';
          c.fillText('-' + (k * 600) + 'M', ox + r * 0.72, oy - r * 0.66);
        }
      }
    };
    contours(150, 520, 17, 0.4);
    contours(310, 220, 11, 2.1);

    // ---- hull seams + rivets ----
    [158, 420, 668].forEach(y => {
      c.strokeStyle = 'rgba(216,247,242,0.035)'; c.lineWidth = 1;
      c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke();
      c.fillStyle = 'rgba(216,247,242,0.08)';
      for (let x = 8; x < W; x += 16) { c.beginPath(); c.arc(x, y + 4, 0.9, 0, Math.PI * 2); c.fill(); }
    });

    // ---- sonar station (lower playfield) ----
    const [sx, sy] = T.station;
    c.strokeStyle = 'rgba(84,230,222,0.08)'; c.lineWidth = 1;
    [40, 80, 120, 160].forEach(r => { c.beginPath(); c.arc(sx, sy, r, 0, Math.PI * 2); c.stroke(); });
    c.beginPath(); c.moveTo(sx - 170, sy); c.lineTo(sx + 170, sy); c.moveTo(sx, sy - 170); c.lineTo(sx, sy + 170); c.stroke();
    for (let d = 0; d < 360; d += 10) {
      const a = d * Math.PI / 180, l = d % 30 === 0 ? 8 : 4;
      c.strokeStyle = 'rgba(84,230,222,' + (d % 30 === 0 ? 0.2 : 0.1) + ')';
      c.beginPath(); c.moveTo(sx + Math.cos(a) * 120, sy + Math.sin(a) * 120); c.lineTo(sx + Math.cos(a) * (120 - l), sy + Math.sin(a) * (120 - l)); c.stroke();
    }

    // ---- warning stripes at the outlanes and drain ----
    const stripes = (x0, x1, y0, y1) => {
      c.save(); c.beginPath(); c.rect(x0, y0, x1 - x0, y1 - y0); c.clip();
      c.fillStyle = 'rgba(2,6,7,0.9)'; c.fillRect(x0, y0, x1 - x0, y1 - y0);
      c.fillStyle = 'rgba(217,52,36,0.42)';
      for (let x = x0 - 40; x < x1 + 40; x += 10) { c.beginPath(); c.moveTo(x, y1); c.lineTo(x + 5, y1); c.lineTo(x + 5 + (y1 - y0), y0); c.lineTo(x + (y1 - y0), y0); c.closePath(); c.fill(); }
      c.restore();
    };
    stripes(12, 37, 748, 800);
    stripes(371, 396, 748, 800);
    c.fillStyle = 'rgba(217,52,36,0.6)';
    [176, 204, 232].forEach(x => { c.beginPath(); c.moveTo(x - 5, 784); c.lineTo(x + 5, 784); c.lineTo(x, 791); c.closePath(); c.fill(); });

    // ---- kraken lock pocket interior ----
    c.fillStyle = '#000';
    c.beginPath(); c.moveTo(107, 240); c.lineTo(107, 185); c.lineTo(126, 173); c.lineTo(145, 185); c.lineTo(145, 240); c.closePath(); c.fill();
    g = c.createRadialGradient(126, 205, 2, 126, 205, 30);
    g.addColorStop(0, 'rgba(84,230,222,0.10)'); g.addColorStop(1, 'rgba(84,230,222,0)');
    c.fillStyle = g; c.fill();
    c.strokeStyle = 'rgba(217,52,36,0.7)'; c.lineWidth = 1; c.beginPath(); c.moveTo(108, 241); c.lineTo(144, 241); c.stroke();

    // ---- unlit inserts ----
    LAMPS.forEach(([, shape, x, y, rot, col]) => {
      lampPath(c, shape, x, y, rot);
      c.fillStyle = 'rgba(' + RGB[col] + ',0.13)'; c.fill();
      c.strokeStyle = 'rgba(' + RGB[col] + ',0.42)'; c.lineWidth = 0.8; c.stroke();
    });

    // ---- printed labels ----
    c.textBaseline = 'middle';
    c.font = '700 9px ' + F.ui;
    c.fillStyle = 'rgba(143,232,198,0.55)';
    vspaced(c, 'TRENCH LANE', 34, 322, 2.6);
    vspaced(c, 'SONAR ORBIT', 381, 300, 2.6);
    spaced(c, 'TEMPEST RAMP', 250, 517, 2.2);
    c.font = '700 8px ' + F.ui;
    spaced(c, 'KRAKEN LOCK', 126, 293, 2);
    spaced(c, 'PRESSURE CHAMBER', 280, 141, 1.8);
    vspaced(c, 'SONAR ARRAY', 330, 250, 1.8);
    c.fillStyle = 'rgba(217,52,36,0.75)'; c.font = '700 9px ' + F.ui;
    spaced(c, 'ABYSS JACKPOT', 184, 380, 2);
    c.fillStyle = 'rgba(228,106,36,0.6)'; c.font = '700 7px ' + F.ui;
    vspaced(c, 'DIVE GATE', 24, 652, 2);
    spaced(c, 'BALL SAVE', 204, 701, 1.6);
    vspaced(c, 'LAUNCH', 426, 650, 2);

    // depth ruler inside the trench lane
    c.strokeStyle = 'rgba(143,232,198,0.25)'; c.lineWidth = 0.7;
    for (let y = 244; y <= 392; y += 6) {
      const big = (y - 244) % 30 === 0;
      c.beginPath(); c.moveTo(13, y); c.lineTo(big ? 21 : 17, y); c.stroke();
    }

    // title plate between the slingshots
    c.save();
    c.shadowColor = 'rgba(84,230,222,0.8)'; c.shadowBlur = 10;
    c.fillStyle = 'rgba(143,232,198,0.62)'; c.font = '400 14px ' + F.title;
    spaced(c, 'WATERJON', 204, 590, 5.5);
    c.restore();
    c.fillStyle = 'rgba(216,247,242,0.36)'; c.font = '600 7px ' + F.ui;
    spaced(c, 'ABYSS PINBALL  //  TABLE 01', 204, 607, 2.2);

    // micro technical text
    c.fillStyle = 'rgba(143,232,198,0.22)'; c.font = '500 6px ' + F.ui;
    spaced(c, 'SUBSTATION 04  //  HULL 7B  //  RATED 11,000 M', 204, 650, 1.2);
    c.restore();   // end table clip

    // ---- cabinet frame outside the table ----
    c.save();
    c.beginPath(); c.rect(0, 0, W, TH); tablePath(c);
    c.fillStyle = '#050a0b'; c.fill('evenodd');
    c.clip('evenodd');
    c.strokeStyle = 'rgba(216,247,242,0.03)'; c.lineWidth = 1;
    for (let y = 0; y < 300; y += 2) { c.beginPath(); c.moveTo(0, y + Math.random()); c.lineTo(W, y + Math.random()); c.stroke(); }
    c.restore();

    // ---- aprons with rule cards (dead space under the flipper guides) ----
    const apron = (pts, lines, align) => {
      c.save();
      c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(p => c.lineTo(p[0], p[1])); c.closePath();
      const ag = c.createLinearGradient(0, 650, 0, 800); ag.addColorStop(0, '#0c1517'); ag.addColorStop(1, '#060b0c');
      c.fillStyle = ag; c.fill();
      c.restore();
      c.fillStyle = 'rgba(216,247,242,0.5)'; c.font = '600 6.5px ' + F.ui; c.textBaseline = 'middle';
      lines.forEach((l, i) => spaced(c, l[0], l[1], l[2], 0.8, align));
    };
    apron([[43, 656], [114, 721], [136, 800], [43, 800]], [
      ['SONAR x3', 48, 742], ['= OPEN LOCK', 48, 752], ['LOCK x3 =', 48, 766], ['MULTIBALL', 48, 776], ['RAMP+ORBIT', 48, 790],
    ], 'left');
    apron([[365, 656], [294, 721], [272, 800], [365, 800]], [
      ['RAMP 1,500', 360, 742], ['ORBIT 2,000', 360, 752], ['LOCK 3,000', 360, 762], ['JACKPOT', 360, 776], ['10,000+', 360, 786],
    ], 'right');
}

/* slingshot plastic: smoked teal with a cyan kicker line and a hazard corner */
function paintSling(v, mirror) {
  const xs = v.map(p => p[0]), ys = v.map(p => p[1]);
  const x0 = Math.min(...xs) - 4, y0 = Math.min(...ys) - 4, w = Math.max(...xs) - x0 + 8, h = Math.max(...ys) - y0 + 8;
  const cv = makeCanvas(w, h, c => {
    c.translate(-x0, -y0);
    const g = c.createLinearGradient(v[0][0], v[0][1], v[2][0], v[2][1]);
    g.addColorStop(0, '#0b3238'); g.addColorStop(1, '#030d0f');
    c.fillStyle = g; c.fillRect(x0, y0, w, h);
    const cx = (v[0][0] + v[1][0] + v[2][0]) / 3, cy = (v[0][1] + v[1][1] + v[2][1]) / 3;
    c.save();
    c.beginPath(); c.moveTo(v[0][0], v[0][1]); c.lineTo(v[1][0], v[1][1]); c.lineTo(v[2][0], v[2][1]); c.closePath(); c.clip();
    // concentric sonar arcs
    c.strokeStyle = 'rgba(84,230,222,0.22)'; c.lineWidth = 0.8;
    for (let r = 8; r < 70; r += 7) { c.beginPath(); c.arc(v[1][0], v[1][1], r, 0, Math.PI * 2); c.stroke(); }
    // hazard band at the bottom corner
    c.fillStyle = 'rgba(217,52,36,0.55)';
    for (let i = -8; i < 8; i++) { c.beginPath(); const bx = v[2][0] + i * 6; c.moveTo(bx, v[2][1] + 4); c.lineTo(bx + 3, v[2][1] + 4); c.lineTo(bx + 3 + 10, v[2][1] - 10); c.lineTo(bx + 10, v[2][1] - 10); c.closePath(); c.fill(); }
    c.restore();
    // bright kicker line along the active face
    const nx = (cx - (v[0][0] + v[2][0]) / 2), ny = (cy - (v[0][1] + v[2][1]) / 2), nl = Math.hypot(nx, ny) || 1;
    c.strokeStyle = '#8ff7f0'; c.lineWidth = 1.6; c.lineCap = 'round'; c.shadowColor = '#54E6DE'; c.shadowBlur = 4;
    c.beginPath(); c.moveTo(v[0][0] + nx / nl * 5, v[0][1] + ny / nl * 5 + 6); c.lineTo(v[2][0] + nx / nl * 5 - (mirror ? -8 : 8), v[2][1] + ny / nl * 5 - 3); c.stroke();
    c.shadowBlur = 0;
    c.strokeStyle = 'rgba(216,247,242,0.5)'; c.lineWidth = 0.7;
    c.beginPath(); c.moveTo(v[0][0], v[0][1]); c.lineTo(v[1][0], v[1][1]); c.lineTo(v[2][0], v[2][1]); c.closePath(); c.stroke();
  }, 6);
  return { cv, x0, y0, w, h };
}
/* top of the abyss jackpot: smoked red glass with LED chevrons */
function paintJackTop() {
  return makeCanvas(32, 24, c => {
    c.fillStyle = '#1a0302'; c.fillRect(0, 0, 32, 24);
    c.strokeStyle = '#ff5a44'; c.lineWidth = 1.4; c.lineJoin = 'miter'; c.shadowColor = '#ff3a28'; c.shadowBlur = 3;
    [0, 5, 10].forEach(o => { c.beginPath(); c.moveTo(6, 19 - o * 0.6 + 2); c.lineTo(16, 9 - o * 0.6 + 2 + o); c.lineTo(26, 19 - o * 0.6 + 2); c.stroke(); });
  }, 8);
}
/* tempest ramp floor: tinted plastic with chevrons running uphill */
function paintRampFloor() {
  return makeCanvas(32, 256, c => {
    const g = c.createLinearGradient(0, 0, 32, 0);
    g.addColorStop(0, 'rgba(84,230,222,0.55)'); g.addColorStop(0.18, 'rgba(10,60,66,0.5)'); g.addColorStop(0.82, 'rgba(10,60,66,0.5)'); g.addColorStop(1, 'rgba(84,230,222,0.55)');
    c.fillStyle = g; c.fillRect(0, 0, 32, 256);
    c.strokeStyle = 'rgba(160,255,248,0.75)'; c.lineWidth = 1.6;
    for (let y = 8; y < 256; y += 22) { c.beginPath(); c.moveTo(9, y + 7); c.lineTo(16, y); c.lineTo(23, y + 7); c.stroke(); }
  }, 4);
}
function paintBubble() {
  return makeCanvas(32, 32, c => {
    const g = c.createRadialGradient(16, 16, 9, 16, 16, 15);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.8, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 32, 32);
    c.fillStyle = 'rgba(255,255,255,0.9)'; c.beginPath(); c.ellipse(11, 10, 3, 2, -0.6, 0, Math.PI * 2); c.fill();
  }, 2);
}
/* kraken skin: dark wet hide with faint bioluminescent flecks (u around, v along) */
function paintKrakenSkin() {
  return makeCanvas(128, 512, c => {
    const g = c.createLinearGradient(0, 0, 128, 0);
    g.addColorStop(0, '#2a3c44'); g.addColorStop(0.3, '#0b1418'); g.addColorStop(0.5, '#050a0c'); g.addColorStop(0.7, '#0b1418'); g.addColorStop(1, '#2a3c44');
    c.fillStyle = g; c.fillRect(0, 0, 128, 512);
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    c.strokeStyle = 'rgba(0,0,0,0.35)'; c.lineWidth = 1;
    for (let y = 0; y < 512; y += 9) { c.beginPath(); c.moveTo(0, y + rnd() * 3); c.bezierCurveTo(40, y + 4, 88, y - 3, 128, y + rnd() * 3); c.stroke(); }
    for (let i = 0; i < 160; i++) { c.fillStyle = 'rgba(84,230,222,' + (0.15 + rnd() * 0.35).toFixed(2) + ')'; c.beginPath(); c.arc(30 + rnd() * 68, rnd() * 512, 0.6 + rnd() * 1.1, 0, Math.PI * 2); c.fill(); }
  }, 2);
}

/* extra printed art for the 3D table: a vast kraken under the glass, bioluminescence */
function paintAbyssArt(c) {
  c.save();
  c.beginPath(); tablePath(c); c.clip();
  // the creature: mantle under the pops, arms spreading toward the flippers
  c.globalCompositeOperation = 'screen';
  const arm = (pts, w0, alpha) => {
    for (let pass = 0; pass < 2; pass++) {
      c.beginPath(); c.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length - 1; i++) { const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2; c.quadraticCurveTo(pts[i][0], pts[i][1], mx, my); }
      const l = pts[pts.length - 1]; c.lineTo(l[0], l[1]);
      c.lineCap = 'round';
      if (pass === 0) { c.strokeStyle = 'rgba(16,70,82,' + alpha + ')'; c.lineWidth = w0; }
      else { c.strokeStyle = 'rgba(84,230,222,' + (alpha * 0.35) + ')'; c.lineWidth = 1; }
      c.stroke();
    }
  };
  const g = c.createRadialGradient(262, 200, 10, 262, 210, 120);
  g.addColorStop(0, 'rgba(20,80,92,0.55)'); g.addColorStop(1, 'rgba(20,80,92,0)');
  c.fillStyle = g; c.beginPath(); c.ellipse(262, 205, 110, 92, 0, 0, Math.PI * 2); c.fill();
  arm([[230, 260], [180, 330], [130, 420], [100, 520], [86, 610]], 16, 0.32);
  arm([[250, 270], [240, 360], [214, 450], [176, 540], [150, 640]], 12, 0.26);
  arm([[290, 270], [330, 350], [350, 450], [338, 540], [326, 640]], 14, 0.3);
  arm([[310, 250], [380, 300], [400, 380], [392, 470]], 10, 0.24);
  arm([[220, 240], [150, 280], [90, 300], [50, 360]], 9, 0.22);
  // the eye, watching from beneath the pressure chamber
  const ex = 276, ey = 300;
  let eg = c.createRadialGradient(ex, ey, 1, ex, ey, 26);
  eg.addColorStop(0, 'rgba(255,90,60,0.55)'); eg.addColorStop(0.35, 'rgba(217,52,36,0.28)'); eg.addColorStop(1, 'rgba(217,52,36,0)');
  c.fillStyle = eg; c.beginPath(); c.ellipse(ex, ey, 26, 14, 0, 0, Math.PI * 2); c.fill();
  c.fillStyle = 'rgba(0,0,0,0.85)'; c.globalCompositeOperation = 'source-over';
  c.beginPath(); c.ellipse(ex, ey, 2.2, 9, 0, 0, Math.PI * 2); c.fill();
  c.globalCompositeOperation = 'screen';
  // bioluminescent flecks
  let seed = 41; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 260; i++) {
    const x = 12 + rnd() * 426, y = 40 + rnd() * 720, r = 0.4 + rnd() * 1.2;
    const col = rnd() < 0.85 ? '84,230,222' : '143,232,198';
    c.fillStyle = 'rgba(' + col + ',' + (0.12 + rnd() * 0.4).toFixed(2) + ')';
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
  }
  c.restore();
  // printed rings around the insert groups (insert trims)
  c.save();
  c.strokeStyle = 'rgba(143,232,198,0.35)'; c.lineWidth = 0.8;
  LAMPS.forEach(([, shape, x, y, rot]) => {
    c.save(); c.translate(x, y); c.rotate(rot || 0);
    c.beginPath();
    if (shape === 'arrow') { c.moveTo(0, -14); c.lineTo(9.6, 8); c.lineTo(0, 4.4); c.lineTo(-9.6, 8); c.closePath(); }
    else if (shape === 'round') c.arc(0, 0, 7.4, 0, Math.PI * 2);
    else roundRect(c, -16.5, -7.5, 33, 15, 4);
    c.stroke(); c.restore();
  });
  c.restore();
}
/* soft vertical light shaft (god ray) */
function paintRay() {
  return makeCanvas(64, 256, c => {
    const g = c.createLinearGradient(0, 0, 64, 0);
    g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 256);
    c.globalCompositeOperation = 'destination-in';
    const v = c.createLinearGradient(0, 0, 0, 256);
    v.addColorStop(0, 'rgba(0,0,0,0.9)'); v.addColorStop(0.7, 'rgba(0,0,0,0.25)'); v.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = v; c.fillRect(0, 0, 64, 256);
  }, 1);
}
function paintBackdrop() {
  return makeCanvas(256, 256, c => {
    const g = c.createRadialGradient(128, 150, 10, 128, 150, 180);
    g.addColorStop(0, '#0b3238'); g.addColorStop(0.45, '#05161a'); g.addColorStop(1, '#010304');
    c.fillStyle = g; c.fillRect(0, 0, 256, 256);
  }, 1);
}
function paintSoftCaustics() {
  return makeCanvas(256, 256, c => {
    if ('filter' in c) c.filter = 'blur(2.5px)';
    c.strokeStyle = 'rgba(150,255,245,0.8)'; c.lineWidth = 3; c.lineJoin = 'round';
    let seed = 91; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 26; i++) {
      const cx = rnd() * 256, cy = rnd() * 256, r = 16 + rnd() * 34, ph = rnd() * 6;
      for (const ox of [-256, 0, 256]) for (const oy of [-256, 0, 256]) {
        c.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.2) {
          const rr = r * (0.66 + 0.34 * Math.sin(a * 3 + ph));
          const x = cx + ox + Math.cos(a) * rr, y = cy + oy + Math.sin(a) * rr * 0.85;
          if (a === 0) c.moveTo(x, y); else c.lineTo(x, y);
        }
        c.stroke();
      }
    }
  }, 1);
}

/* =============================== 3D TABLE =================================
   Three.js scene built from the same table geometry the physics uses.
   Table space (x 0..450, y 0..800) maps to 3D as X = x-225, Z = y-400, Y up. */

const lin = (hex, k) => { const c = new THREE.Color(hex).convertSRGBToLinear(); if (k) c.multiplyScalar(k); return c; };
const V3 = (x, y, h) => new THREE.Vector3(x - 225, h || 0, y - 400);
const UP = new THREE.Vector3(0, 1, 0);

/* final grade: ACES tone map, sRGB, vignette, a touch of film grain */
const FinalShader = {
  uniforms: { tDiffuse: { value: null }, exposure: { value: 1.0 }, time: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: [
    'uniform sampler2D tDiffuse; uniform float exposure; uniform float time; varying vec2 vUv;',
    'vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14),0.0,1.0); }',
    'vec3 srgb(vec3 c){ return mix(c*12.92, 1.055*pow(c, vec3(1.0/2.4))-0.055, step(0.0031308, c)); }',
    'void main(){',
    '  vec3 c = texture2D(tDiffuse, vUv).rgb * exposure;',
    '  c = srgb(aces(c));',
    '  vec2 q = vUv - 0.5; c *= mix(0.6, 1.0, smoothstep(0.62, 0.12, dot(q, q) * 1.7));',
    '  float n = fract(sin(dot(vUv * vec2(1271.1, 3117.7) + time, vec2(12.9898, 78.233))) * 43758.5453);',
    '  c += (n - 0.5) * 0.022;',
    '  gl_FragColor = vec4(c, 1.0);',
    '}',
  ].join('\n'),
};

class TableView {
  constructor(game, canvas) {
    this.g = game;
    this.canvas = canvas;
    this.t = 0;
    this.shakeT = 0; this.shakeDur = 1; this.shakeMag = 0; this.punch = 0;
    this.attract = 1;
    this.follow = new THREE.Vector2(0, 0);
    this.ballMeshes = [];
    this.rollQ = new WeakMap();
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false });
    r.setClearColor(lin(0x020607), 1);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.shadowMap.autoUpdate = false;
    this.maxAniso = r.capabilities.getMaxAnisotropy();
    this.webgl2 = r.capabilities.isWebGL2;
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(lin(0x020607), 2600, 6000);
    this.camera = new THREE.PerspectiveCamera(34, 1, 20, 6000);
    this.camera.layers.enable(1);
    this.camBase = { pos: new THREE.Vector3(0, 900, 700), target: new THREE.Vector3(0, 0, 20), fov: 34 };
    this.raycaster = new THREE.Raycaster();
    this.plane0 = new THREE.Plane(UP, 0);
    this.tmpV = new THREE.Vector3(); this.tmpM = new THREE.Matrix4(); this.tmpQ = new THREE.Quaternion(); this.tmpS = new THREE.Vector3();

    this.buildEnv();
    this.buildMaterials();
    this.buildLights();
    this.buildPlayfield();
    this.buildStatic();
    this.buildBumpers();
    this.buildSlings();
    this.buildTargets();
    this.buildFlippers();
    this.buildRamp();
    this.buildLock();
    this.buildToys();
    this.buildInserts();
    this.buildKraken();
    this.buildMeter();
    this.buildAmbience();
    this.buildFX();
    this.flashEl = document.getElementById('flash');
    this.darkEl = document.getElementById('dark');
    this.flashA = 0; this.darkA = 0;
    this.quality = null;
    this.setQuality('high');
  }

  tex(canvas, repeat) {
    const t = new THREE.CanvasTexture(canvas);
    t.encoding = THREE.sRGBEncoding;
    t.anisotropy = this.maxAniso;
    if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
    return t;
  }

  /* ---------------------------- environment ---------------------------- */
  buildEnv() {
    // a dark machine room with a few hard light sources: what the chrome reflects
    const pm = new THREE.PMREMGenerator(this.renderer);
    const env = new THREE.Scene();
    const room = new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), new THREE.MeshBasicMaterial({ side: THREE.BackSide, vertexColors: true }));
    const pos = room.geometry.attributes.position, cols = [];
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i) / 100;                       // floor dark, horizon teal, ceiling grey-teal
      const c = new THREE.Color().lerpColors(lin(0x020607), y > 0 ? lin(0x0c1d21) : lin(0x040b0c), Math.abs(y) < 0.15 ? 1 : y > 0 ? 1 - (y - 0.15) * 0.6 : 1 + y * 1.6);
      cols.push(c.r, c.g, c.b);
    }
    room.geometry.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    env.add(room);
    const panel = (w, h, color, k, pos, rot) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: lin(color, k), side: THREE.DoubleSide }));
      m.position.set(pos[0], pos[1], pos[2]); if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
      env.add(m);
    };
    panel(60, 22, 0xffffff, 5.0, [0, 60, 10], [Math.PI / 2, 0, 0]);      // overhead softbox
    panel(14, 8, 0xffffff, 3.0, [-38, 52, -30], [Math.PI / 2, 0, 0]);
    panel(14, 8, 0xffffff, 3.0, [38, 52, -30], [Math.PI / 2, 0, 0]);
    panel(4, 80, 0x54e6de, 3.2, [-60, 12, 0], [0, Math.PI / 2, 0]);     // cyan cabinet strips
    panel(4, 80, 0x54e6de, 3.2, [60, 12, 0], [0, -Math.PI / 2, 0]);
    panel(90, 10, 0x8fe8c6, 1.6, [0, 26, -62]);                          // backboard glow
    panel(24, 4, 0xd93424, 3.0, [0, 6, 62], [0, Math.PI, 0]);           // red warning light
    panel(10, 30, 0xe46a24, 1.2, [-55, 20, 40], [0, Math.PI / 3, 0]);   // warm accent
    this.envMap = pm.fromScene(env, 0.03).texture;
    this.scene.environment = this.envMap;
    pm.dispose();
  }

  buildMaterials() {
    const S = (o) => new THREE.MeshStandardMaterial(o);
    this.M = {
      chrome: S({ color: lin(0xffffff), metalness: 1, roughness: 0.1 }),
      rail: S({ color: lin(0xd8e4e4), metalness: 1, roughness: 0.22, envMapIntensity: 0.6 }),
      gunmetal: S({ color: lin(0x5d6d70), metalness: 1, roughness: 0.34, envMapIntensity: 0.55 }),
      steel: S({ color: lin(0xb8c6c6), metalness: 1, roughness: 0.32 }),
      cabinet: S({ color: lin(0x06090a), metalness: 0.1, roughness: 0.72, envMapIntensity: 0.2 }),
      guide: S({ color: lin(0x132226), metalness: 0.8, roughness: 0.32 }),
      rubber: S({ color: lin(0x070909), metalness: 0, roughness: 0.78 }),
      black: S({ color: lin(0x010203), metalness: 0, roughness: 0.95 }),
      glass: S({ color: lin(0x1a5a62), metalness: 0.3, roughness: 0.05, transparent: true, opacity: 0.34, depthWrite: false, side: THREE.DoubleSide }),
      glassWall: S({ color: lin(0x2a6a70), metalness: 0.3, roughness: 0.05, transparent: true, opacity: 0.2, depthWrite: false, side: THREE.DoubleSide }),
      domeGlass: S({ color: lin(0x0b2b30), metalness: 0.2, roughness: 0.04, transparent: true, opacity: 0.55 }),
      white: S({ color: lin(0xdae8e6), metalness: 0.15, roughness: 0.3 }),
      led: new THREE.MeshBasicMaterial({ color: lin(0x54e6de, 1.7) }),
      ledDim: new THREE.MeshBasicMaterial({ color: lin(0x54e6de, 0.6) }),
      ledRed: new THREE.MeshBasicMaterial({ color: lin(0xd93424, 2.0) }),
    };
  }

  buildLights() {
    const s = this.scene;
    s.add(new THREE.HemisphereLight(lin(0x3d8590), lin(0x020607), 0.22));
    const key = this.key = new THREE.SpotLight(lin(0xeafcf8), 1.15, 0, 0.5, 0.9, 1);
    key.position.set(0, 640, 360);
    key.target.position.set(0, 0, -20);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.bias = -0.00035;
    key.shadow.normalBias = 0.8;
    key.shadow.camera.near = 300; key.shadow.camera.far = 1500;
    s.add(key, key.target);
    const rim = new THREE.DirectionalLight(lin(0x54e6de), 0.5);
    rim.position.set(0, 260, -700); s.add(rim);
    const point = (color, k, dist, x, y, h) => { const l = new THREE.PointLight(lin(color), k, dist, 2); l.position.copy(V3(x, y, h)); s.add(l); return l; };
    this.popLight = point(0x54e6de, 0, 200, 276, 200, 34);
    this.lockLight = point(0x8fe8c6, 0, 180, 126, 214, 40);
    this.jackLight = point(0xff3a28, 0, 210, 204, 300, 30);
    this.drainLight = point(0xd93424, 0.9, 260, 204, 800, 36);
    this.giL = point(0x54e6de, 1.5, 260, 40, 610, 40);
    this.giR = point(0x54e6de, 1.5, 260, 370, 610, 40);
    this.giTop = point(0x8fe8c6, 1.0, 300, 225, 140, 56);
    this.giFlip = point(0xdff8f4, 1.1, 230, 204, 690, 60);
    this.ramLight = point(0x3fa7ff, 0.0, 240, 300, 400, 70);
    this.kickLight = point(0xe46a24, 0.9, 150, 24, 640, 30);
  }

  /* ---------------------------- playfield ------------------------------ */
  buildPlayfield() {
    const cv = makeCanvas(W, TH, c => { paintPlayfield(c); paintAbyssArt(c); paintAO(c); }, 2.4);
    this.pfTex = this.tex(cv);
    this.refl = { cam: new THREE.PerspectiveCamera(), rt: null, U: { tReflect: { value: null }, reflMat: { value: new THREE.Matrix4() }, reflK: { value: 0 } } };
    this.pfMatHi = new THREE.MeshPhysicalMaterial({ map: this.pfTex, roughness: 0.92, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.06, envMapIntensity: 0.35 });
    const U = this.refl.U;
    this.pfMatHi.onBeforeCompile = (sh) => {                 // glossy playfield: mix in the mirrored scene
      sh.uniforms.tReflect = U.tReflect; sh.uniforms.reflMat = U.reflMat; sh.uniforms.reflK = U.reflK;
      sh.vertexShader = 'uniform mat4 reflMat;\nvarying vec4 vReflUv;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n  vReflUv = reflMat * vec4(transformed, 1.0);');
      sh.fragmentShader = 'uniform sampler2D tReflect;\nuniform float reflK;\nvarying vec4 vReflUv;\n' + sh.fragmentShader.replace('#include <output_fragment>',
        '  if (reflK > 0.0) {\n' +
        '    vec3 rc = texture2DProj(tReflect, vReflUv).rgb;\n' +
        '    float ndv = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);\n' +
        '    outgoingLight += rc * reflK * (0.16 + 0.84 * pow(1.0 - ndv, 2.0));\n' +
        '  }\n#include <output_fragment>');
    };
    this.pfMatLo = new THREE.MeshStandardMaterial({ map: this.pfTex, roughness: 0.8, metalness: 0, envMapIntensity: 0.4 });
    const pf = this.pf = new THREE.Mesh(new THREE.PlaneGeometry(W, TH), this.pfMatHi);
    pf.rotation.x = -Math.PI / 2;
    pf.receiveShadow = true;
    this.noMirror(pf);
    this.scene.add(pf);
    // dark floor beyond the table so nothing reads as void
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), new THREE.MeshStandardMaterial({ color: lin(0x03090a), roughness: 1 }));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -140;
    this.noMirror(floor);
    this.scene.add(floor);
    // light caustics rippling across the seabed far below the cabinet
    const ct = this.tex(paintSoftCaustics(), true); ct.repeat.set(7, 7);
    const sg = new THREE.PlaneGeometry(4200, 4200, 42, 42), sc = [], sp = sg.attributes.position;
    for (let i = 0; i < sp.count; i++) { const r = Math.hypot(sp.getX(i), sp.getY(i) + 300); const f = Math.max(0, Math.min(1, (2000 - r) / 1500)); const k = f * f * (3 - 2 * f); sc.push(k, k, k); }
    sg.setAttribute('color', new THREE.Float32BufferAttribute(sc, 3));
    this.seabed = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ map: ct, vertexColors: true, color: lin(0x54e6de, 0.5), transparent: true, opacity: 0.085, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.seabed.rotation.x = -Math.PI / 2; this.seabed.position.y = -138;
    this.noMirror(this.seabed);
    this.scene.add(this.seabed);
    // cabinet legs down into the dark
    [[-250, -380], [250, -380], [-250, 420], [250, 420]].forEach(([x, z]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(18, 140, 18), this.M.gunmetal);
      leg.position.set(x, -70, z); this.scene.add(leg);
    });
  }
  /* things lying on the glass never show up in its reflection */
  noMirror(o) { o.layers.set(1); return o; }

  renderReflection() {
    const R = this.refl, cam = this.camera, r = this.renderer;
    const cp = this.tmpR1 || (this.tmpR1 = new THREE.Vector3());
    cp.setFromMatrixPosition(cam.matrixWorld);
    if (cp.y < 2) { R.U.reflK.value = 0; return; }
    const rot = (this.tmpR2 || (this.tmpR2 = new THREE.Matrix4())).extractRotation(cam.matrixWorld);
    const look = (this.tmpR3 || (this.tmpR3 = new THREE.Vector3())).set(0, 0, -1).applyMatrix4(rot).add(cp);
    const vc = R.cam;
    vc.position.set(cp.x, -cp.y, cp.z);
    vc.up.set(0, 1, 0).applyMatrix4(rot); vc.up.y = -vc.up.y;
    vc.lookAt(look.x, -look.y, look.z);
    vc.far = cam.far; vc.near = cam.near;
    vc.updateMatrixWorld();
    vc.projectionMatrix.copy(cam.projectionMatrix);
    const tm = R.U.reflMat.value;
    tm.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    tm.multiply(vc.projectionMatrix); tm.multiply(vc.matrixWorldInverse); tm.multiply(this.pf.matrixWorld);
    // oblique near plane: clip everything below the glass
    const plane = (this.tmpR4 || (this.tmpR4 = new THREE.Plane())).set(new THREE.Vector3(0, 1, 0), 0);
    plane.applyMatrix4(vc.matrixWorldInverse);
    const clip = (this.tmpR5 || (this.tmpR5 = new THREE.Vector4())).set(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
    const pm = vc.projectionMatrix.elements, q = this.tmpR6 || (this.tmpR6 = new THREE.Vector4());
    q.x = (Math.sign(clip.x) + pm[8]) / pm[0]; q.y = (Math.sign(clip.y) + pm[9]) / pm[5]; q.z = -1; q.w = (1 + pm[10]) / pm[14];
    clip.multiplyScalar(2 / clip.dot(q));
    pm[2] = clip.x; pm[6] = clip.y; pm[10] = clip.z + 1 - 0.003; pm[14] = clip.w;
    vc.projectionMatrixInverse.copy(vc.projectionMatrix).invert();
    const fog = this.scene.fog; this.scene.fog = null;
    r.setRenderTarget(R.rt);
    r.clear();
    r.render(this.scene, vc);
    r.setRenderTarget(null);
    this.scene.fog = fog;
    R.U.reflK.value = 0.62;
  }

  /* walls, guides, posts, cabinet — merged into a handful of draw calls */
  buildStatic() {
    const G = { walls: [], trims: [], leds: [], guides: [], tops: [], posts: [], rubbers: [], cab: [] };
    const box = (arr, x1, y1, x2, y2, th, h, y0, extra) => {
      const len = Math.hypot(x2 - x1, y2 - y1) + (extra || 0);
      const g = new THREE.BoxGeometry(len, h, th);
      g.rotateY(-Math.atan2(y2 - y1, x2 - x1));
      g.translate((x1 + x2) / 2 - 225, (y0 || 0) + h / 2, (y1 + y2) / 2 - 400);
      arr.push(g);
    };
    const cyl = (arr, x, y, r, h, y0, seg) => { const g = new THREE.CylinderGeometry(r, r, h, seg || 16); g.translate(x - 225, (y0 || 0) + h / 2, y - 400); arr.push(g); };
    const ring = (arr, x, y, r, tube, h) => { const g = new THREE.TorusGeometry(r, tube, 8, 22); g.rotateX(Math.PI / 2); g.translate(x - 225, h, y - 400); arr.push(g); };

    // cabinet wall around the playfield: arc + sides, chrome rail on top, LED strip inside
    const { cx, cy, R } = T, N = 56;
    for (let i = 0; i < N; i++) {
      const a0 = Math.PI + Math.PI * i / N, a1 = Math.PI + Math.PI * (i + 1) / N;
      const P = (rr, a) => [cx + rr * Math.cos(a), cy + rr * Math.sin(a)];
      const [x0, y0] = P(R + 7, a0), [x1, y1] = P(R + 7, a1);
      box(G.walls, x0, y0, x1, y1, 14, 40, 0, 2.5);
      box(G.trims, x0, y0, x1, y1, 16, 3, 40, 2.5);
      const [lx0, ly0] = P(R + 0.9, a0), [lx1, ly1] = P(R + 0.9, a1);
      box(G.leds, lx0, ly0, lx1, ly1, 1.3, 1.6, 33, 1.5);
    }
    [[3, 10.9], [447, 439.1]].forEach(([x, lx]) => {
      box(G.walls, x, cy, x, TH + 30, 14, 40);
      box(G.trims, x, cy, x, TH + 30, 16, 3, 40);
      box(G.leds, lx, cy, lx, TH, 1.3, 1.6, 33);
    });
    // shooter lane divider
    box(G.guides, 405, 262, 405, TH + 12, 14, 22);
    box(G.tops, 405, 262, 405, TH + 12, 15, 1.8, 22);
    // inner guides: dark steel walls with a chrome top edge
    [T.chanL, T.chanR, T.guideL, T.guideR, T.sepL, T.sepR, T.mouthL, T.mouthR].forEach(pts => {
      for (let i = 0; i < pts.length - 1; i++) {
        box(G.guides, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 6, 16);
        box(G.tops, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 7, 1.6, 16);
      }
      pts.forEach(p => { cyl(G.guides, p[0], p[1], 3, 16); cyl(G.tops, p[0], p[1], 3.6, 1.6, 16); });
    });
    // rubber posts
    T.jackPosts.forEach(([x, y]) => { cyl(G.posts, x, y, 3, 22); ring(G.rubbers, x, y, 5.2, 1.7, 9); });
    // flipper pivot posts
    [T.flipL, T.flipR].forEach(([x, y]) => cyl(G.posts, x, y, 4, 18));

    // cabinet sides, lockdown bar
    const cabBox = (w, h, d, x, y, z, arr) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); (arr || G.cab).push(g); };
    cabBox(30, 70, 900, -225 - 26, 35, 20);
    cabBox(30, 70, 900, 225 + 26, 35, 20);
    cabBox(34, 3, 900, -225 - 26, 71.5, 20);
    cabBox(34, 3, 900, 225 + 26, 71.5, 20);
    cabBox(6, 5, 900, -225 - 14, 73, 20, G.trims);
    cabBox(6, 5, 900, 225 + 14, 73, 20, G.trims);
    cabBox(1.4, 1.4, 860, -225 - 10.5, 66, 20, G.leds);
    cabBox(1.4, 1.4, 860, 225 + 10.5, 66, 20, G.leds);
    cabBox(520, 26, 30, 0, 13, 428);
    cabBox(520, 4, 32, 0, 27, 428, G.trims);

    const merge = (arr, mat, cast, recv) => {
      if (!arr.length) return null;
      const m = new THREE.Mesh(THREE.BufferGeometryUtils.mergeBufferGeometries(arr, false), mat);
      m.castShadow = !!cast; m.receiveShadow = !!recv;
      this.scene.add(m);
      return m;
    };
    merge(G.walls, this.M.cabinet, true, true);
    merge(G.trims, this.M.gunmetal, true, false);
    merge(G.leds, this.M.led, false, false);
    merge(G.guides, this.M.guide, true, true);
    merge(G.tops, this.M.chrome, false, false);
    merge(G.posts, this.M.chrome, true, false);
    merge(G.rubbers, this.M.rubber, true, false);
    merge(G.cab, this.M.cabinet, false, true);

    // aprons: raised plates whose top shows the printed rule cards
    const apronTex = this.pfTex.clone(); apronTex.needsUpdate = true;
    apronTex.repeat.set(1 / W, -1 / TH); apronTex.offset.set(0.5, 0.5);
    const apronTop = new THREE.MeshStandardMaterial({ map: apronTex, roughness: 0.5, metalness: 0.3 });
    [[[43, 656], [114, 721], [136, 800], [43, 800]], [[365, 656], [294, 721], [272, 800], [365, 800]]].forEach(poly => {
      const sh = new THREE.Shape(poly.map(p => new THREE.Vector2(p[0] - 225, p[1] - 400)));
      const g = new THREE.ExtrudeGeometry(sh, { depth: 5, bevelEnabled: true, bevelSize: 0.8, bevelThickness: 0.8, bevelSegments: 1 });
      g.rotateX(Math.PI / 2); g.translate(0, 5, 0);
      const m = new THREE.Mesh(g, [apronTop, this.M.steel]);
      m.receiveShadow = true; m.castShadow = true;
      this.scene.add(m);
    });

    // backboard light panel
    const bb = this.tex(makeCanvas(500, 170, c => {}, 1));
    const bbTex = this.tex(paintBackboard());
    const bbFront = new THREE.MeshStandardMaterial({ map: bbTex, emissiveMap: bbTex, emissive: lin(0xffffff), emissiveIntensity: 1.25, roughness: 0.4, metalness: 0.1 });
    const backboard = new THREE.Mesh(new THREE.BoxGeometry(520, 176, 14), [this.M.cabinet, this.M.cabinet, this.M.cabinet, this.M.cabinet, bbFront, this.M.cabinet]);
    backboard.position.set(0, 88, -437);
    this.scene.add(backboard);
    bb.dispose();
    const bbTrim = new THREE.Mesh(new THREE.BoxGeometry(524, 4, 18), this.M.chrome);
    bbTrim.position.set(0, 178, -437); this.scene.add(bbTrim);

    // one-way gate flap (animated)
    const [ax, ay] = T.gateA, [bx2, by2] = T.gateB;
    const gate = this.gate = new THREE.Group();
    gate.position.copy(V3((ax + bx2) / 2, (ay + by2) / 2, 14));
    gate.rotation.y = -Math.atan2(by2 - ay, bx2 - ax);
    const flap = this.gateFlap = new THREE.Mesh(new THREE.BoxGeometry(Math.hypot(bx2 - ax, by2 - ay), 13, 1.5), this.M.steel);
    flap.position.y = -6.5;
    const pivot = new THREE.Group(); pivot.add(flap); gate.add(pivot); this.gatePivot = pivot;
    const wire = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, Math.hypot(bx2 - ax, by2 - ay) + 8, 8), this.M.chrome);
    wire.rotation.z = Math.PI / 2; gate.add(wire);
    flap.castShadow = true;
    this.scene.add(gate);
    this.gateOpen = 0;
  }

  /* ---------------------------- pop bumpers ---------------------------- */
  buildBumpers() {
    const capTex = this.tex(paintPopCap());
    this.bumpers3 = T.bumpers.map(([x, y]) => {
      const g = new THREE.Group(); g.position.copy(V3(x, y, 0));
      const base = new THREE.Mesh(new THREE.CylinderGeometry(26, 27, 4, 40), this.M.steel); base.position.y = 2;
      const body = new THREE.Mesh(new THREE.CylinderGeometry(19.5, 20.5, 18, 40, 1, true), this.M.domeGlass); body.position.y = 13;
      const skirt = new THREE.Mesh(new THREE.TorusGeometry(21.5, 2.3, 10, 40), this.M.chrome); skirt.rotation.x = Math.PI / 2; skirt.position.y = 10;
      const glowMat = new THREE.MeshStandardMaterial({ color: lin(0x0b2e33), emissive: lin(0x54e6de), emissiveIntensity: 0.25, roughness: 0.3 });
      const glow = new THREE.Mesh(new THREE.TorusGeometry(13.5, 1.8, 8, 40), glowMat); glow.rotation.x = Math.PI / 2; glow.position.y = 25.4;
      const capTop = new THREE.MeshStandardMaterial({ map: capTex, roughness: 0.15, metalness: 0.4 });
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(21, 21, 4, 40), [this.M.steel, capTop, this.M.steel]); cap.position.y = 23.5;
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 16, 24), new THREE.MeshStandardMaterial({ color: lin(0x020607), emissive: lin(0x54e6de), emissiveIntensity: 0.0 }));
      inner.position.y = 13; this.innerMats = this.innerMats || []; this.innerMats.push(inner.material);
      [base, skirt, cap].forEach(m => { m.castShadow = true; });
      g.add(base, inner, body, skirt, cap, glow);
      this.scene.add(g);
      return { g, skirt, cap, glow, glowMat, innerMat: inner.material };
    });
  }

  /* ---------------------------- slingshots ----------------------------- */
  buildSlings() {
    this.slings3 = [T.slingL, T.slingR].map((v, i) => {
      const sh = new THREE.Shape(v.map(p => new THREE.Vector2(p[0] - 225, p[1] - 400)));
      const geo = new THREE.ExtrudeGeometry(sh, { depth: 15, bevelEnabled: true, bevelSize: 1.2, bevelThickness: 1.2, bevelSegments: 2 });
      geo.rotateX(Math.PI / 2); geo.translate(0, 17, 0);
      const art = paintSling(v, i === 1), t = this.tex(art.cv);
      t.repeat.set(1 / art.w, -1 / art.h); t.offset.set(-(art.x0 - 225) / art.w, 1 + (art.y0 - 400) / art.h);
      const top = new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: lin(0xffffff), emissiveIntensity: 0.35, roughness: 0.22, metalness: 0.1 });
      const side = new THREE.MeshStandardMaterial({ color: lin(0x0a2226), roughness: 0.3, metalness: 0.2, transparent: true, opacity: 0.85 });
      const mesh = new THREE.Mesh(geo, [top, side]);
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.scene.add(mesh);
      // rubber band on the kicking face + posts
      const a = V3(v[0][0], v[0][1], 9), b = V3(v[2][0], v[2][1], 9);
      const band = new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(a, b), 8, 2.8, 10, false), new THREE.MeshStandardMaterial({ color: lin(0x0a0d0e), emissive: lin(0x54e6de), emissiveIntensity: 0, roughness: 0.6 }));
      band.castShadow = true;
      this.scene.add(band);
      v.forEach(p => {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 22, 14), this.M.chrome);
        post.position.copy(V3(p[0], p[1], 11)); post.castShadow = true; this.scene.add(post);
        const nut = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.2, 2.4, 6), this.M.steel);
        nut.position.copy(V3(p[0], p[1], 23)); this.scene.add(nut);
        const rub = new THREE.Mesh(new THREE.TorusGeometry(5, 1.6, 8, 18), this.M.rubber);
        rub.rotation.x = Math.PI / 2; rub.position.copy(V3(p[0], p[1], 9)); this.scene.add(rub);
      });
      return { topMat: top, bandMat: band.material };
    });
  }

  buildTargets() {
    this.sonars3 = T.sonar.map(([x, y]) => {
      const mat = new THREE.MeshStandardMaterial({ color: lin(0xdbeeee), emissive: lin(0x54e6de), emissiveIntensity: 0, roughness: 0.25, metalness: 0.1 });
      const m = new THREE.Mesh(new THREE.BoxGeometry(6, 16, 17), mat);
      m.position.copy(V3(x, y, 8)); m.castShadow = true;
      this.scene.add(m);
      return { mat, m };
    });
    // abyss jackpot: red arrowhead
    const [jx, jy] = T.jackpot;
    const sh = new THREE.Shape([[-13, 6], [13, 6], [13, -1], [0, -11], [-13, -1]].map(p => new THREE.Vector2(jx + p[0] - 225, jy + p[1] - 400)));
    const geo = new THREE.ExtrudeGeometry(sh, { depth: 16, bevelEnabled: true, bevelSize: 1, bevelThickness: 1, bevelSegments: 2 });
    geo.rotateX(Math.PI / 2); geo.translate(0, 17, 0);
    const jt = this.tex(paintJackTop());
    jt.repeat.set(1 / 32, -1 / 24); jt.offset.set(-(jx - 16 - 225) / 32, 1 + (jy - 13 - 400) / 24);
    this.jackMat = new THREE.MeshStandardMaterial({ map: jt, emissiveMap: jt, emissive: lin(0xffffff), emissiveIntensity: 0.4, roughness: 0.15, metalness: 0.1 });
    const jside = new THREE.MeshStandardMaterial({ color: lin(0x3a0804), emissive: lin(0xff3a28), emissiveIntensity: 0.15, roughness: 0.2, transparent: true, opacity: 0.9 });
    this.jackSide = jside;
    const jm = new THREE.Mesh(geo, [this.jackMat, jside]); jm.castShadow = true;
    this.scene.add(jm);
    const bez = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 2, bevelEnabled: true, bevelSize: 2.2, bevelThickness: 0.8, bevelSegments: 2 }), this.M.chrome);
    bez.geometry.rotateX(Math.PI / 2); bez.geometry.translate(0, 2.4, 0); this.scene.add(bez);
  }

  /* ---------------------------- flippers ------------------------------- */
  flipperShape(mirror, grow) {
    const s = mirror ? -1 : 1, rp = 9.5 * grow, rt = 6 * grow, L = FLIP.len;
    const sh = new THREE.Shape();
    const N = 14;
    const pts = [];
    for (let i = 0; i <= N; i++) { const a = -Math.PI / 2 + Math.PI * i / N; pts.push([L + Math.cos(a) * rt, Math.sin(a) * rt]); }
    for (let i = 0; i <= N; i++) { const a = Math.PI / 2 + Math.PI * i / N; pts.push([Math.cos(a) * rp, Math.sin(a) * rp]); }
    const ordered = mirror ? pts.map(p => [p[0] * s, p[1]]).reverse() : pts;
    sh.moveTo(ordered[0][0], ordered[0][1]);
    ordered.slice(1).forEach(p => sh.lineTo(p[0], p[1]));
    sh.closePath();
    return sh;
  }
  buildFlippers() {
    this.flippers3 = this.g.flippers.map(f => {
      const mirror = f.side === 'R';
      const grp = new THREE.Group();
      const px = f.side === 'L' ? T.flipL : T.flipR;
      grp.position.copy(V3(px[0], px[1], 0));
      const body = new THREE.ExtrudeGeometry(this.flipperShape(mirror, 0.86), { depth: 10, bevelEnabled: true, bevelSize: 1.3, bevelThickness: 1.3, bevelSegments: 3, curveSegments: 12 });
      body.rotateX(Math.PI / 2); body.translate(0, 12.5, 0);
      const bodyMesh = new THREE.Mesh(body, new THREE.MeshStandardMaterial({ color: lin(0xe3ecea), metalness: 0.55, roughness: 0.22 }));
      const rubber = new THREE.ExtrudeGeometry(this.flipperShape(mirror, 1.0), { depth: 6, bevelEnabled: false });
      rubber.rotateX(Math.PI / 2); rubber.translate(0, 9.5, 0);
      const rubMesh = new THREE.Mesh(rubber, new THREE.MeshStandardMaterial({ color: lin(0x0b2528), emissive: lin(0x54e6de), emissiveIntensity: 0.35, roughness: 0.6 }));
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 2.4, 20), this.M.chrome); cap.position.y = 14.6;
      [bodyMesh, rubMesh, cap].forEach(m => { m.castShadow = true; m.receiveShadow = true; });
      grp.add(rubMesh, bodyMesh, cap);
      this.scene.add(grp);
      return { grp, f };
    });
  }

  /* ---------------------------- tempest ramp --------------------------- */
  buildRamp() {
    const P = RAMP_PATH, n = P.length;
    const nrm = (i) => {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)];
      let nx = -(b.y - a.y), ny = b.x - a.x; const l = Math.hypot(nx, ny) || 1; return [nx / l, ny / l];
    };
    const floorPos = [], wallLPos = [], wallRPos = [], uv = [], railL = [], railR = [], edgeL = [], edgeR = [];
    const HW = 13.5;
    for (let i = 0; i < n; i++) {
      const s = P[i].d / P.total, h = rampHeight(s) + 1.2;
      const [nx, ny] = nrm(i), x = P[i].x, y = P[i].y;
      const L = V3(x + nx * HW, y + ny * HW, h), Rr = V3(x - nx * HW, y - ny * HW, h);
      floorPos.push(L, Rr); uv.push(0, s * 6, 1, s * 6);
      wallLPos.push(L, V3(x + nx * HW, y + ny * HW, h + 10));
      wallRPos.push(Rr, V3(x - nx * HW, y - ny * HW, h + 10));
      railL.push(V3(x + nx * (HW + 1.5), y + ny * (HW + 1.5), h + 11)); railR.push(V3(x - nx * (HW + 1.5), y - ny * (HW + 1.5), h + 11));
      edgeL.push(V3(x + nx * HW, y + ny * HW, h + 0.6)); edgeR.push(V3(x - nx * HW, y - ny * HW, h + 0.6));
    }
    const strip = (pts, uvs) => {
      const pos = [], idx = [];
      pts.forEach(p => pos.push(p.x, p.y, p.z));
      for (let i = 0; i < pts.length / 2 - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      if (uvs) g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(idx); g.computeVertexNormals();
      return g;
    };
    const ft = this.tex(paintRampFloor(), true);
    this.rampMat = new THREE.MeshStandardMaterial({ map: ft, emissiveMap: ft, emissive: lin(0xffffff), emissiveIntensity: 0.18, transparent: true, opacity: 0.9, roughness: 0.12, metalness: 0.2, side: THREE.DoubleSide, depthWrite: false });
    const floor = new THREE.Mesh(strip(floorPos, uv), this.rampMat); floor.renderOrder = 2;
    this.scene.add(floor);
    const wl = new THREE.Mesh(strip(wallLPos), this.M.glassWall), wr = new THREE.Mesh(strip(wallRPos), this.M.glassWall);
    wl.renderOrder = wr.renderOrder = 3;
    this.scene.add(wl, wr);
    const tubes = [railL, railR].map(pts => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 180, 1.5, 8, false));
    for (let d = 40; d < P.total - 30; d += 64) {                      // supports where the ramp is high
      const s = d / P.total, h = rampHeight(s);
      if (h < 12) continue;
      const p = pathAt(P, d);
      const g = new THREE.CylinderGeometry(1.4, 1.4, h, 8); g.translate(p.x - 225, h / 2, p.y - 400);
      tubes.push(g);
    }
    const nonIdx = tubes.map(g => (g.index ? g.toNonIndexed() : g));
    const rails = new THREE.Mesh(THREE.BufferGeometryUtils.mergeBufferGeometries(nonIdx, false), this.M.rail);
    rails.castShadow = true;
    this.scene.add(rails);
    // glowing edge light along the floor
    this.rampEdgeMat = new THREE.MeshBasicMaterial({ color: lin(0x54e6de, 1.4) });
    const edges = [edgeL, edgeR].map(pts => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.55, 5, false).toNonIndexed());
    this.scene.add(new THREE.Mesh(THREE.BufferGeometryUtils.mergeBufferGeometries(edges, false), this.rampEdgeMat));
    // entrance lip
    const p0 = P[0], [nx0, ny0] = nrm(0);
    const lip = new THREE.Mesh(new THREE.BoxGeometry(30, 2, 6), this.M.steel);
    lip.position.copy(V3(p0.x, p0.y, 1.5)); lip.rotation.y = -Math.atan2(ny0, nx0);
    this.scene.add(lip);
  }

  /* ---------------------------- kraken lock ---------------------------- */
  buildLock() {
    const pts = T.lockBox;
    const geos = [], tops = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
      const len = Math.hypot(x2 - x1, y2 - y1) + 6;
      const g = new THREE.BoxGeometry(len, 30, 7); g.rotateY(-Math.atan2(y2 - y1, x2 - x1)); g.translate((x1 + x2) / 2 - 225, 15, (y1 + y2) / 2 - 400); geos.push(g);
      const t = new THREE.BoxGeometry(len, 2, 8); t.rotateY(-Math.atan2(y2 - y1, x2 - x1)); t.translate((x1 + x2) / 2 - 225, 31, (y1 + y2) / 2 - 400); tops.push(t);
    }
    const walls = new THREE.Mesh(THREE.BufferGeometryUtils.mergeBufferGeometries(geos, false), this.M.guide);
    walls.castShadow = true; walls.receiveShadow = true; this.scene.add(walls);
    this.scene.add(new THREE.Mesh(THREE.BufferGeometryUtils.mergeBufferGeometries(tops, false), this.M.chrome));
    const strip = new THREE.Mesh(new THREE.BoxGeometry(38, 1.6, 1.6), this.M.ledRed);
    strip.position.copy(V3(126, 241, 1.2)); this.scene.add(strip);
    // warning beacon above the lock
    const post = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 34, 8), this.M.steel); post.position.copy(V3(126, 172, 17)); this.scene.add(post);
    this.beaconMat = new THREE.MeshStandardMaterial({ color: lin(0x10302f), emissive: lin(0x8fe8c6), emissiveIntensity: 0.1, roughness: 0.2, transparent: true, opacity: 0.95 });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(6, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), this.beaconMat);
    dome.position.copy(V3(126, 172, 34)); this.scene.add(dome);

    // mechanical tentacles: armoured plates + glowing seam rings, instanced
    this.tentDefs = [
      { base: [92, 276], closed: [-1.4, 0.24], open: [-2.0, -0.15], n: 11, len: 9.6, ph: 0 },
      { base: [160, 276], closed: [Math.PI + 1.4, -0.24], open: [Math.PI + 2.0, 0.15], n: 11, len: 9.6, ph: 1.7 },
    ];
    const count = this.tentDefs.reduce((a, t) => a + t.n, 0);
    this.tentPlates = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 16, 10), new THREE.MeshStandardMaterial({ color: lin(0x26353a), metalness: 0.9, roughness: 0.3 }), count);
    this.tentRingMat = new THREE.MeshBasicMaterial({ color: lin(0x54e6de, 1.4) });
    this.tentRings = new THREE.InstancedMesh(new THREE.TorusGeometry(1, 0.13, 6, 18), this.tentRingMat, count);
    this.tentPlates.castShadow = true;
    this.tentPlates.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.tentRings.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.tentPlates, this.tentRings);
  }

  buildToys() {
    // pressure gauge
    const gTex = this.tex(paintGauge());
    const gauge = new THREE.Group(); gauge.position.copy(V3(T.gauge[0], T.gauge[1], 0));
    const post = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 10, 10), this.M.steel); post.position.y = 5;
    const face = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, 4, 32), [this.M.chrome, new THREE.MeshStandardMaterial({ map: gTex, emissiveMap: gTex, emissive: lin(0xffffff), emissiveIntensity: 0.35, roughness: 0.2 }), this.M.chrome]);
    face.position.y = 12;
    const needle = this.needle = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1, 12), new THREE.MeshBasicMaterial({ color: lin(0xff5a44, 1.6) }));
    needle.geometry.translate(0, 0, -5);
    needle.position.y = 14.6;
    gauge.add(post, face, needle);
    face.castShadow = true;
    this.scene.add(gauge);
    // plunger rod + tip
    const pl = this.plunger = new THREE.Group();
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 60, 12), this.M.chrome); rod.rotation.x = Math.PI / 2; rod.position.z = 30;
    const tip = new THREE.Mesh(new THREE.BoxGeometry(22, 9, 5), this.M.steel);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(7, 16, 12), new THREE.MeshStandardMaterial({ color: lin(0x0b2e33), emissive: lin(0x54e6de), emissiveIntensity: 0.4, metalness: 0.4, roughness: 0.2 }));
    knob.position.z = 62;
    pl.add(rod, tip, knob);
    pl.position.copy(V3(T.laneX, 783, 6));
    this.scene.add(pl);
    // ball meshes (pool)
    this.ballGeo = new THREE.SphereGeometry(BALL_R, 36, 24);
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(this.ballGeo, this.M.chrome);
      m.castShadow = true; m.visible = false;
      this.scene.add(m);
      const blob = new THREE.Mesh(new THREE.PlaneGeometry(26, 26), new THREE.MeshBasicMaterial({ map: this.tex(paintGlow()), color: 0x000000, transparent: true, opacity: 0.55, depthWrite: false }));
      blob.rotation.x = -Math.PI / 2; blob.visible = false;
      this.noMirror(blob);
      this.scene.add(blob);
      this.ballMeshes.push({ m, blob });
    }
  }

  /* ---------------------------- the kraken ----------------------------- */
  /* two huge tentacles rising out of the dead corners behind the top arch */
  buildKraken() {
    const skin = this.tex(paintKrakenSkin(), true);
    this.krakenMat = new THREE.MeshPhysicalMaterial({ map: skin, color: lin(0xffffff), roughness: 0.38, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.18, emissive: lin(0x54e6de), emissiveMap: skin, emissiveIntensity: 0.05 });
    this.suckerMat = new THREE.MeshStandardMaterial({ color: lin(0x4a5a5e), roughness: 0.45, metalness: 0.1, emissive: lin(0x54e6de), emissiveIntensity: 0.12 });
    const RINGS = 56, SEG = 14;
    const defs = [
      { side: 1, pts: [[18, 150, -8], [14, 118, 40], [10, 80, 80], [16, 44, 110], [34, 20, 126], [58, 22, 120], [72, 40, 104], [70, 60, 92], [56, 64, 88]], r0: 22, ph: 0 },
      { side: -1, pts: [[432, 154, -11], [436, 122, 37], [440, 84, 77], [434, 48, 107], [416, 24, 123], [392, 26, 117], [378, 44, 101], [380, 64, 89], [394, 68, 85]], r0: 21, ph: 2.1 },
    ];
    this.krakens = defs.map(d => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(RINGS * (SEG + 1) * 3), uv = new Float32Array(RINGS * (SEG + 1) * 2), idx = [];
      for (let i = 0; i < RINGS; i++) for (let j = 0; j <= SEG; j++) { const k = i * (SEG + 1) + j; uv[k * 2] = j / SEG; uv[k * 2 + 1] = i / (RINGS - 1) * 3; }
      for (let i = 0; i < RINGS - 1; i++) for (let j = 0; j < SEG; j++) {
        const a = i * (SEG + 1) + j, b = a + SEG + 1;
        idx.push(a, a + 1, b, b, a + 1, b + 1);
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
      geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      geo.setIndex(idx);
      const mesh = new THREE.Mesh(geo, this.krakenMat);
      mesh.castShadow = true; mesh.frustumCulled = false;
      this.scene.add(mesh);
      const nS = 34;
      const suckers = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 0.8, 0.5, 12), this.suckerMat, nS);
      suckers.instanceMatrix.setUsage(THREE.DynamicDrawUsage); suckers.frustumCulled = false;
      this.scene.add(suckers);
      return { d, geo, mesh, suckers, nS, RINGS, SEG, curve: new THREE.CatmullRomCurve3(d.pts.map(p => V3(p[0], p[1], p[2])), false, 'centripetal') };
    });
    this.krakenStrike = 0;
    this.updateKraken(0, 0);
  }

  updateKraken(dt, now) {
    const g = this.g;
    this.krakenStrike = Math.max(0, this.krakenStrike - dt / 900);
    const rage = Math.max(g.thrash || 0, this.krakenStrike);
    const t = now / 1000;
    const tmp = this.tmpK || (this.tmpK = { T: new THREE.Vector3(), N: new THREE.Vector3(), B: new THREE.Vector3(), P: new THREE.Vector3(), Q: new THREE.Vector3(), up: new THREE.Vector3(), m: new THREE.Matrix4(), q: new THREE.Quaternion(), s: new THREE.Vector3(), y: new THREE.Vector3(0, 1, 0), c: new THREE.Vector3(0, 30, -60) });
    this.krakenMat.emissiveIntensity = 0.05 + rage * 0.5 + (g.multiball ? 0.2 : 0);
    this.suckerMat.emissive.copy(rage > 0.05 || g.multiball ? lin(0xff4a36) : lin(0x54e6de));
    this.suckerMat.emissiveIntensity = 0.12 + rage * 2 + (g.lockLit ? 0.3 + 0.25 * Math.sin(now / 160) : 0);
    for (const K of this.krakens) {
      const d = K.d, cps = K.curve.points;
      for (let i = 0; i < d.pts.length; i++) {
        const f = i / (d.pts.length - 1), p = d.pts[i];
        const sway = Math.sin(t * 0.7 + d.ph + f * 2.2) * 9 * f * f + Math.sin(t * 1.3 + d.ph * 1.7 + f * 4) * 3 * f;
        const lift = Math.sin(t * 0.55 + d.ph + f * 1.5) * 6 * f;
        const thr = rage * (Math.sin(t * 9 + i * 0.9 + d.ph) * 16 * f);
        const strike = this.krakenStrike * 26 * f * f;
        cps[i].set(p[0] - 225 + d.side * (sway + thr * 0.6) + d.side * strike * 0.8, p[2] + lift + thr * 0.5 - strike * 0.4, p[1] - 400 + sway * 0.4 + strike);
      }
      const pos = K.geo.attributes.position.array, R = K.RINGS, S = K.SEG;
      // parallel-transport frames along the curve
      let N = null;
      for (let i = 0; i < R; i++) {
        const u = i / (R - 1);
        K.curve.getPointAt(u, tmp.P);
        K.curve.getTangentAt(u, tmp.T);
        if (!N) { N = tmp.N.copy(tmp.y).cross(tmp.T).normalize(); if (N.lengthSq() < 0.01) N.set(1, 0, 0); }
        else { N.sub(tmp.Q.copy(tmp.T).multiplyScalar(N.dot(tmp.T))).normalize(); }
        tmp.B.copy(tmp.T).cross(N).normalize();
        const r = d.r0 * Math.pow(1 - u, 0.9) * (1 + 0.06 * Math.sin(u * 40)) + 0.6;
        for (let j = 0; j <= S; j++) {
          const a = j / S * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
          const k = (i * (S + 1) + j) * 3;
          pos[k] = tmp.P.x + (N.x * ca + tmp.B.x * sa) * r;
          pos[k + 1] = tmp.P.y + (N.y * ca + tmp.B.y * sa) * r;
          pos[k + 2] = tmp.P.z + (N.z * ca + tmp.B.z * sa) * r;
        }
      }
      K.geo.attributes.position.needsUpdate = true;
      K.geo.computeVertexNormals();
      K.geo.computeBoundingSphere();
      // suckers on the side facing the player
      for (let i = 0; i < K.nS; i++) {
        const u = 0.1 + 0.84 * i / (K.nS - 1);
        K.curve.getPointAt(u, tmp.P); K.curve.getTangentAt(u, tmp.T);
        const toward = tmp.Q.set(0, 260, 700).sub(tmp.P);
        toward.sub(tmp.up.copy(tmp.T).multiplyScalar(toward.dot(tmp.T))).normalize();
        const r = d.r0 * Math.pow(1 - u, 0.9) + 0.6;
        const side = (i % 2 ? 0.55 : -0.55);
        tmp.B.copy(tmp.T).cross(toward).normalize();
        const dir = tmp.up.copy(toward).multiplyScalar(Math.cos(side)).addScaledVector(tmp.B, Math.sin(side)).normalize();
        tmp.P.addScaledVector(dir, r * 0.94);
        tmp.q.setFromUnitVectors(tmp.y, dir);
        const sc = Math.max(0.5, r * 0.2);
        tmp.s.set(sc, sc * 1.2, sc);
        tmp.m.compose(tmp.P, tmp.q, tmp.s);
        K.suckers.setMatrixAt(i, tmp.m);
      }
      K.suckers.instanceMatrix.needsUpdate = true;
    }
  }

  /* plunger meter on the lane divider, with the skill-shot band */
  buildMeter() {
    const g = this.meter = new THREE.Group();
    const len = 124, x = 405, yTop = 608;
    g.position.copy(V3(x, yTop + len / 2, 24.2));
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(9, len), new THREE.MeshBasicMaterial({ color: lin(0x020607) }));
    bg.rotation.x = -Math.PI / 2;
    const bandLen = len * (SKILL_ZONE[1] - SKILL_ZONE[0]);
    this.meterBandMat = new THREE.MeshBasicMaterial({ color: lin(0x8fe8c6, 0.5), transparent: true, opacity: 0.5 });
    const band = new THREE.Mesh(new THREE.PlaneGeometry(9, bandLen), this.meterBandMat);
    band.rotation.x = -Math.PI / 2; band.position.set(0, 0.05, -len / 2 + len * (1 - SKILL_ZONE[1]) + bandLen / 2);
    this.meterFillMat = new THREE.MeshBasicMaterial({ color: lin(0xe46a24, 2) });
    const fill = this.meterFill = new THREE.Mesh(new THREE.PlaneGeometry(6, 1), this.meterFillMat);
    fill.rotation.x = -Math.PI / 2; fill.position.y = 0.1;
    g.add(bg, band, fill);
    g.visible = false;
    this.scene.add(g);
  }
  updateMeter() {
    const g = this.g, show = g.awaitingPlunge && g.mode === 'play';
    this.meter.visible = show;
    if (!show) return;
    const len = 124, pl = g.pull;
    const inZone = pl >= SKILL_ZONE[0] && pl <= SKILL_ZONE[1];
    this.meterFill.visible = pl > 0.005;
    this.meterFill.scale.y = Math.max(0.01, len * pl);
    this.meterFill.position.z = len / 2 - len * pl / 2;
    this.meterFillMat.color.copy(inZone ? lin(0x8fe8c6, 2.4) : lin(0xe46a24, 2));
    this.meterBandMat.opacity = inZone ? 0.95 : 0.5;
  }

  /* ---------------------------- lamp inserts --------------------------- */
  buildInserts() {
    const shapes = ['arrow', 'round', 'rect'];
    this.lampIdx = {};
    this.insertMeshes = {};
    const glowTex = this.tex(paintGlow());
    shapes.forEach(shape => {
      const list = LAMPS.filter(l => l[1] === shape);
      const mat = new THREE.MeshBasicMaterial({ map: this.tex(paintLit(shape)), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
      const im = new THREE.InstancedMesh(new THREE.PlaneGeometry(40, 40), mat, list.length);
      im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(list.length * 3), 3);
      list.forEach((l, i) => {
        const [key, , x, y, rot] = l;
        const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, -rot, 'XYZ'));
        im.setMatrixAt(i, new THREE.Matrix4().compose(V3(x, y, 0.45), q, new THREE.Vector3(1, 1, 1)));
        this.lampIdx[key] = { shape, i, col: lin(HEXC[l[5]]) };
      });
      im.frustumCulled = false;
      this.noMirror(im);
      this.scene.add(im);
      this.insertMeshes[shape] = im;
    });
    // halos above the inserts
    const halo = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }), LAMPS.length);
    halo.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(LAMPS.length * 3), 3);
    LAMPS.forEach((l, i) => {
      const s = l[1] === 'rect' ? 56 : l[1] === 'arrow' ? 44 : 30;
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
      halo.setMatrixAt(i, new THREE.Matrix4().compose(V3(l[2], l[3], 0.55), q, new THREE.Vector3(s, s, 1)));
      this.lampIdx[l[0]].halo = i;
    });
    halo.frustumCulled = false;
    this.noMirror(halo);
    this.scene.add(halo);
    this.haloMesh = halo;
  }

  /* ---------------------------- ambience ------------------------------- */
  buildAmbience() {
    // the deep around the machine: a far glow, drifting light shafts
    const back = new THREE.Mesh(new THREE.PlaneGeometry(5200, 2600), new THREE.MeshBasicMaterial({ map: this.tex(paintBackdrop()), depthWrite: false, fog: false }));
    back.position.set(0, 500, -1700); this.noMirror(back); this.scene.add(back);
    const rayTex = this.tex(paintRay());
    this.rays = [];
    for (let i = 0; i < 7; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(rand(90, 220), 1600), new THREE.MeshBasicMaterial({ map: rayTex, color: lin(0x54e6de, 0.5), transparent: true, opacity: rand(0.1, 0.22), blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
      const side = i % 2 ? 1 : -1;
      m.position.set(side * rand(380, 1100), 500, rand(-1300, -200));
      m.rotation.z = side * rand(0.12, 0.3);
      m.userData = { x0: m.position.x, ph: rand(0, 6), op: m.material.opacity };
      this.noMirror(m); this.scene.add(m); this.rays.push(m);
    }
    // marine snow drifting above the glass and through the deep
    const N = 520, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const near = i < 220;
      pos[i * 3] = near ? rand(-260, 260) : rand(-1100, 1100); pos[i * 3 + 1] = near ? rand(4, 240) : rand(-40, 700); pos[i * 3 + 2] = near ? rand(-430, 430) : rand(-1300, 500);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.snow = new THREE.Points(g, new THREE.PointsMaterial({ size: 2.4, map: this.tex(paintSpeck()), color: lin(0x8fe8c6, 0.9), transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
    this.scene.add(this.snow);
    // caustics light on the glass
    const ct = this.tex(paintCaustics(), true); ct.repeat.set(1.8, 3.2);
    this.caustics = new THREE.Mesh(new THREE.PlaneGeometry(W, TH), new THREE.MeshBasicMaterial({ map: ct, transparent: true, opacity: 0.06, blending: THREE.AdditiveBlending, depthWrite: false, color: lin(0x8fe8c6) }));
    this.caustics.rotation.x = -Math.PI / 2; this.caustics.position.y = 0.3;
    this.noMirror(this.caustics);
    this.scene.add(this.caustics);
    // sonar sweep at the station
    this.sweep = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshBasicMaterial({ map: this.tex(paintSweep()), transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.sweep.rotation.x = -Math.PI / 2; this.sweep.position.copy(V3(T.station[0], T.station[1], 0.35));
    this.noMirror(this.sweep);
    this.scene.add(this.sweep);
    // something huge passing under the glass
    this.levi = new THREE.Mesh(new THREE.PlaneGeometry(560, 200), new THREE.MeshBasicMaterial({ map: this.tex(paintLeviathan()), transparent: true, opacity: 0, depthWrite: false }));
    this.levi.rotation.x = -Math.PI / 2; this.levi.position.y = 0.6;
    this.noMirror(this.levi);
    this.scene.add(this.levi);
    this.leviState = { t: -1, next: 9000, dur: 30000, dir: 1, y: 500 };
  }

  /* ---------------------------- FX ------------------------------------- */
  buildFX() {
    const ringTex = this.tex(paintRing()), sparkTex = this.tex(paintSpeck());
    this.rings = [];
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), new THREE.MeshBasicMaterial({ map: ringTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      m.rotation.x = -Math.PI / 2; m.visible = false; this.noMirror(m); this.scene.add(m);
      this.rings.push({ m, t: 1, dur: 1, size: 1 });
    }
    this.sparkArr = [];
    for (let i = 0; i < 32; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: sparkTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      s.scale.set(5, 5, 1); s.visible = false; this.scene.add(s);
      this.sparkArr.push({ s, life: 0, max: 1, v: new THREE.Vector3() });
    }
    this.texts = [];
    for (let i = 0; i < 4; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, depthTest: false }));
      s.scale.set(90, 17, 1); s.visible = false; s.renderOrder = 10; this.noMirror(s); this.scene.add(s);
      this.texts.push({ s, life: 0 });
    }
    this.bubbles = [];
    const bubTex = this.tex(paintBubble());
    for (let i = 0; i < 40; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubTex, transparent: true, depthWrite: false, color: lin(0xbff7f2, 1.4) }));
      s.visible = false; this.scene.add(s);
      this.bubbles.push({ s, life: 0, max: 1, vx: 0, vy: 0, vz: 0, ph: 0 });
    }
    this.ringIdx = 0; this.sparkIdx = 0; this.textIdx = 0; this.bubIdx = 0;
  }
  bubble(x, y, n, spread) {
    for (let i = 0; i < n; i++) {
      const b = this.bubbles[this.bubIdx++ % this.bubbles.length];
      b.s.position.copy(V3(x + rand(-spread, spread), y + rand(-spread, spread), rand(4, 14)));
      const sz = rand(2.2, 5.5); b.s.scale.set(sz, sz, 1);
      b.vy = rand(0.03, 0.07); b.vx = rand(-0.01, 0.01); b.vz = rand(-0.01, 0.01); b.ph = rand(0, 6);
      b.life = b.max = rand(900, 1700); b.s.visible = true;
    }
  }
  updateBubbles(dt) {
    for (const b of this.bubbles) {
      if (b.life <= 0) continue;
      b.life -= dt;
      if (b.life <= 0) { b.s.visible = false; continue; }
      b.ph += dt * 0.008;
      b.s.position.x += (b.vx + Math.sin(b.ph) * 0.012) * dt; b.s.position.y += b.vy * dt; b.s.position.z += b.vz * dt;
      b.s.material.opacity = Math.min(1, b.life / 400) * 0.8;
    }
  }
  ring(x, y, color, size, dur) {
    const r = this.rings[this.ringIdx++ % this.rings.length];
    r.m.position.copy(V3(x, y, 1)); r.m.material.color.copy(lin(color, 2.2)); r.m.visible = true; r.t = 0; r.dur = dur || 450; r.size = size || 1.2;
  }
  sparks(x, y, n, color) {
    for (let i = 0; i < n; i++) {
      const s = this.sparkArr[this.sparkIdx++ % this.sparkArr.length];
      const a = rand(0, Math.PI * 2), sp = rand(0.08, 0.3);
      s.v.set(Math.cos(a) * sp, rand(0.05, 0.25), Math.sin(a) * sp);
      s.life = s.max = rand(220, 420);
      s.s.position.copy(V3(x, y, 12)); s.s.material.color.copy(lin(color, 3)); s.s.visible = true;
    }
  }
  floatText(x, y, str, color) {
    const t = this.texts[this.textIdx++ % this.texts.length];
    if (t.s.material.map) t.s.material.map.dispose();
    t.s.material.map = this.tex(paintText(str, color || HEX.flood));
    t.s.material.needsUpdate = true;
    t.s.position.copy(V3(clamp(x, 60, 390), y, 40)); t.s.visible = true; t.life = 900;
  }
  flash(color, a) { this.flashEl.style.background = '#' + new THREE.Color(color).getHexString(); this.flashA = Math.max(this.flashA, a); }
  shake(ms, mag) { this.shakeT = ms; this.shakeDur = ms; this.shakeMag = Math.max(this.shakeMag * (this.shakeT > 0 ? 1 : 0), mag * 900); }
  impact(x, y, level, color) {
    if (level >= 1) { this.ring(x, y, color, 1.0, 380); this.bubble(x, y, level * 4, 10); }
    if (level >= 2) { this.ring(x, y, color, 1.9, 560); this.flash(color, 0.08); this.shake(110, 0.0035); this.sparks(x, y, 8, color); }
    if (level >= 3) {
      this.darkA = 0.45;
      setTimeout(() => { this.flash(color, 0.24); this.ring(x, y, 0xffffff, 3.6, 760); this.ring(x, y, color, 2.8, 950); }, 70);
      this.shake(320, 0.009);
      this.sparks(x, y, 18, color);
      this.punch = 1;
      this.krakenStrike = 1;
      this.bubble(x, y, 14, 18);
    }
  }

  /* ---------------------------- quality -------------------------------- */
  setQuality(q) {
    if (q === this.quality) return;
    this.quality = q;
    const hi = q === 'high';
    const r = this.renderer;
    const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    this.reflScale = coarse ? 0.4 : 0.5;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, hi ? (coarse ? 1.6 : 2) : 1.25);
    r.setPixelRatio(this.pixelRatio);
    r.shadowMap.enabled = hi;
    this.key.castShadow = hi;
    this.pf.material = hi ? this.pfMatHi : this.pfMatLo;
    this.useComposer = hi;
    r.toneMapping = hi ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;   // HIGH grades in the final pass
    r.toneMappingExposure = 1.0;
    r.outputEncoding = THREE.sRGBEncoding;
    this.scene.traverse(o => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { m.needsUpdate = true; }); });
    if (hi && !this.composer) this.buildComposer();
    this.pf.material.needsUpdate = true;
    if (!hi) this.refl.U.reflK.value = 0;
    this.resize();
  }
  buildComposer() {
    const r = this.renderer;
    const half = r.extensions.has('EXT_color_buffer_float') || r.extensions.has('EXT_color_buffer_half_float');
    const rt = new THREE.WebGLRenderTarget(4, 4, { type: half ? THREE.HalfFloatType : THREE.UnsignedByteType, samples: this.webgl2 ? 4 : 0 });
    const comp = this.composer = new THREE.EffectComposer(r, rt);
    comp.addPass(new THREE.RenderPass(this.scene, this.camera));
    this.bloom = new THREE.UnrealBloomPass(new THREE.Vector2(256, 256), 0.62, 0.42, 0.88);
    comp.addPass(this.bloom);
    this.finalPass = new THREE.ShaderPass(FinalShader);
    comp.addPass(this.finalPass);
  }

  resize() {
    const el = this.canvas.parentElement;
    const w = Math.max(1, el.clientWidth), h = Math.max(1, el.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    if (this.quality === 'high') {
      const rw = Math.round(w * this.pixelRatio * this.reflScale), rh = Math.round(h * this.pixelRatio * this.reflScale);
      if (!this.refl.rt) {
        const r = this.renderer, half = r.extensions.has('EXT_color_buffer_float') || r.extensions.has('EXT_color_buffer_half_float');
        this.refl.rt = new THREE.WebGLRenderTarget(rw, rh, { type: half ? THREE.HalfFloatType : THREE.UnsignedByteType });
        this.refl.U.tReflect.value = this.refl.rt.texture;
      } else this.refl.rt.setSize(rw, rh);
    }
    if (this.composer) {
      this.composer.setPixelRatio(this.pixelRatio);
      this.composer.setSize(w, h);
      this.bloom.setSize(Math.round(w * this.pixelRatio / 2), Math.round(h * this.pixelRatio / 2));
    }
    this.fitCamera(w / h);
  }

  /* frame the machine for any aspect: steep for phones, lower and more cinematic for desktop */
  fitCamera(aspect) {
    const cam = this.camera;
    const portrait = aspect < 0.8;
    const tilt = portrait ? 0.5 : aspect < 1.25 ? 0.72 : 0.9;           // radians from straight down
    cam.fov = portrait ? 40 : 34;
    cam.aspect = aspect;
    cam.updateProjectionMatrix();
    // playfield + walls + the lower half of the backboard (its top may crop on wide screens)
    const pts = [V3(-8, TH + 30, 30), V3(458, TH + 30, 30), V3(-8, TH, 0), V3(458, TH, 0), V3(-8, 70, 42), V3(458, 70, 42),
      V3(10, -36, portrait ? 176 : 120), V3(440, -36, portrait ? 176 : 120)];
    const target = new THREE.Vector3(0, 0, 20);
    const place = (dist) => {
      cam.position.set(target.x, target.y + dist * Math.cos(tilt), target.z + dist * Math.sin(tilt));
      cam.lookAt(target); cam.updateMatrixWorld();
      let x0 = 9, x1 = -9, y0 = 9, y1 = -9;
      for (const p of pts) { const q = p.clone().project(cam); x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y); }
      return { x0, x1, y0, y1 };
    };
    let dist = 1200;
    const mx = portrait ? 0.985 : 0.9;                                  // side margin (HUD buttons live at the edges)
    for (let it = 0; it < 8; it++) {
      let lo = 200, hi = 6000;
      for (let k = 0; k < 30; k++) {
        const mid = (lo + hi) / 2, b = place(mid);
        if (b.x0 < -mx || b.x1 > mx || b.y0 < -0.99 || b.y1 > 0.985) lo = mid; else hi = mid;
      }
      dist = hi;
      const b = place(dist);
      target.z -= ((b.y0 + b.y1) / 2) * dist * 0.3;                   // centre vertically
    }
    place(dist);
    this.camBase.pos.copy(cam.position); this.camBase.target.copy(target); this.camBase.fov = cam.fov; this.camBase.dist = dist; this.camBase.tilt = tilt;
    this.portrait = portrait;
  }

  /* cinematic push-in toward a table point (used while a ball is held) */
  focus(x, y, ms, amt) { this.focusFx = { x, y, t: 0, dur: ms, amt: amt || 1 }; }

  /* screen point → table coordinates (for the plunger touch zone) */
  screenToTable(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hit = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(this.plane0, hit)) return null;
    return { x: hit.x + 225, y: hit.z + 400 };
  }

  /* table coordinates → client pixels (tests, tooltips) */
  tableToScreen(x, y, h) {
    const rect = this.canvas.getBoundingClientRect();
    const q = V3(x, y, h || 0).project(this.camera);
    return { x: rect.left + (q.x + 1) / 2 * rect.width, y: rect.top + (1 - q.y) / 2 * rect.height };
  }

  /* ---------------------------- per frame ------------------------------ */
  update(dt, now) {
    const g = this.g;
    this.t += dt;
    this.updateCamera(dt);
    this.updateBalls(dt);
    for (const f3 of this.flippers3) f3.grp.rotation.y = -f3.f.body.angle;

    // bumpers
    const sup = now < g.superUntil;
    let popPeak = 0;
    g.bumpers.forEach((bp, i) => {
      bp.flash = Math.max(0, bp.flash - dt / 220);
      bp.press = Math.max(0, bp.press - dt / 120);
      const b3 = this.bumpers3[i];
      const idle = sup ? 0.6 + 0.4 * Math.sin(now / 110 + i) : 0.25;
      const k = Math.max(bp.flash * 5, idle);
      b3.glowMat.emissiveIntensity = k;
      b3.glowMat.emissive.copy(sup ? lin(0xf28c3c) : lin(0x54e6de));
      b3.innerMat.emissiveIntensity = bp.flash * 1.6;
      b3.skirt.position.y = 10 - bp.press * 4;
      if (bp.flash > popPeak) { popPeak = bp.flash; this.popLight.position.copy(V3(bp.x, bp.y, 34)); }
    });
    this.popLight.intensity = popPeak * 3.2;
    this.popLight.color.copy(sup ? lin(0xf28c3c) : lin(0x54e6de));

    g.slings.forEach((s, i) => {
      s.flash = Math.max(0, s.flash - dt / 160);
      this.slings3[i].topMat.emissiveIntensity = 0.35 + s.flash * 2.2;
      this.slings3[i].bandMat.emissiveIntensity = s.flash * 3;
    });
    g.sonars.forEach((s, i) => {
      s.flash = Math.max(0, s.flash - dt / 260);
      this.sonars3[i].mat.emissiveIntensity = Math.max(s.flash * 3, s.lit ? 1.2 : 0);
    });
    g.jackFlash = Math.max(0, g.jackFlash - dt / 300);
    const jk = g.jackpotLit ? 1.2 + 1.1 * Math.sin(now / 85) : g.jackFlash * 2;
    this.jackMat.emissiveIntensity = 0.4 + Math.max(0, jk) * 1.6;
    this.jackSide.emissiveIntensity = 0.15 + Math.max(0, jk) * 0.8;
    this.jackLight.intensity = g.jackpotLit ? 1.4 + 0.8 * Math.sin(now / 85) : g.jackFlash * 2;

    this.updateLamps(now);
    this.updateTentacles(dt, now);

    // gauge
    const target = sup ? 100 : g.pressure;
    g.pressureShown += (target - g.pressureShown) * Math.min(1, dt / 120);
    this.needle.rotation.y = -(-2.3 + (g.pressureShown / 100) * 4.6 + (sup ? Math.sin(now / 30) * 0.05 : 0));

    // beacon + lock light
    if (g.multiball) { const on = Math.sin(now / 70) > 0.2; this.beaconMat.emissive.copy(lin(0xff3a28)); this.beaconMat.emissiveIntensity = on ? 4 : 0.3; this.lockLight.color.copy(lin(0xff3a28)); this.lockLight.intensity = on ? 2.2 : 0.2; }
    else if (g.lockLit) { this.beaconMat.emissive.copy(lin(0x8fe8c6)); this.beaconMat.emissiveIntensity = 1.5 + Math.sin(now / 160); this.lockLight.color.copy(lin(0x8fe8c6)); this.lockLight.intensity = 1.2 + 0.6 * Math.sin(now / 160); }
    else { this.beaconMat.emissiveIntensity = 0.1; this.lockLight.intensity = 0; }
    this.kickLight.intensity = g.kickbackLit && g.mode === 'play' ? 0.9 : 0.15;
    const riding = g.balls.some(b => b.state === 'ramp');
    this.ramLight.intensity = riding ? 1.6 : Math.max(0, this.ramLight.intensity - dt / 300);
    this.rampGlow = Math.max(riding ? 1 : 0, (this.rampGlow || 0) - dt / 500);
    this.rampMat.emissiveIntensity = 0.18 + this.rampGlow * 0.9;
    this.rampEdgeMat.color.copy(lin(0x54e6de, 1.2 + this.rampGlow * 3));
    this.updateKraken(dt, now);
    this.updateMeter();
    this.updateBubbles(dt);

    // gate flap swings when a ball passes up through it
    const open = g.gate && g.gate.isSensor ? 1 : 0;
    this.gateOpen += (open - this.gateOpen) * Math.min(1, dt / 90);
    this.gatePivot.rotation.x = -this.gateOpen * 1.0;

    // plunger
    this.plunger.position.z = 383 + g.pull * 18;

    // ambience
    const sp = this.snow.geometry.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      let y = sp.getY(i) - dt * 0.004; let x = sp.getX(i) + Math.sin(now / 1900 + i) * 0.02;
      if (i < 220 ? y < 2 : y < -40) { y = i < 220 ? 240 : 700; x = i < 220 ? rand(-260, 260) : rand(-1100, 1100); }
      sp.setXY(i, x, y);
    }
    sp.needsUpdate = true;
    this.caustics.material.map.offset.set(now * 0.00002, now * 0.000013);
    this.seabed.material.map.offset.set(now * 0.000012, -now * 0.000008);
    for (const r of this.rays) { const u = r.userData; r.position.x = u.x0 + Math.sin(now / 7000 + u.ph) * 60; r.material.opacity = u.op * (0.6 + 0.4 * Math.sin(now / 3100 + u.ph)); }
    this.sweep.rotation.z = now * 0.0007;
    this.updateLeviathan(dt);

    // FX pools
    for (const r of this.rings) {
      if (r.t >= 1) continue;
      r.t += dt / r.dur;
      if (r.t >= 1) { r.m.visible = false; continue; }
      const s = 0.2 + r.t * r.size; r.m.scale.set(s, s, s); r.m.material.opacity = (1 - r.t) * 0.85;
    }
    for (const s of this.sparkArr) {
      if (s.life <= 0) continue;
      s.life -= dt;
      if (s.life <= 0) { s.s.visible = false; continue; }
      s.s.position.addScaledVector(s.v, dt); s.v.y -= dt * 0.0012; s.v.multiplyScalar(0.96);
      s.s.material.opacity = s.life / s.max;
    }
    for (const t of this.texts) {
      if (t.life <= 0) continue;
      t.life -= dt;
      if (t.life <= 0) { t.s.visible = false; continue; }
      t.s.position.y += dt * 0.035; t.s.material.opacity = Math.min(1, t.life / 400);
    }
    this.flashA = Math.max(0, this.flashA - dt / 260); this.flashEl.style.opacity = this.flashA.toFixed(3);
    this.darkA = Math.max(0, this.darkA - dt / 220); this.darkEl.style.opacity = this.darkA.toFixed(3);

    this.render(now);
  }

  updateCamera(dt) {
    const g = this.g, cam = this.camera, base = this.camBase;
    const wantAttract = g.mode === 'attract' ? 1 : 0;
    this.attract += (wantAttract - this.attract) * Math.min(1, dt / 900);
    // play camera: base framing with a gentle drift toward the ball(s)
    let bx = 0, bz = 0, n = 0;
    for (const b of g.balls) if (b.state === 'table' || b.state === 'ramp') { bx += b.body.position.x - 225; bz += b.body.position.y - 400; n++; }
    if (n) { bx /= n; bz /= n; }
    const fz = this.portrait ? 0.05 : 0.11;
    this.follow.x += ((n ? bx * 0.05 : 0) - this.follow.x) * Math.min(1, dt / 600);
    this.follow.y += ((n ? bz * fz : 0) - this.follow.y) * Math.min(1, dt / 600);
    const pPos = this.tmpA || (this.tmpA = new THREE.Vector3()), pTgt = this.tmpB || (this.tmpB = new THREE.Vector3());
    pPos.copy(base.pos); pTgt.copy(base.target);
    pPos.x += this.follow.x; pPos.z += this.follow.y; pTgt.x += this.follow.x; pTgt.z += this.follow.y;
    // event push-in
    const F = this.focusFx;
    if (F) {
      F.t += dt;
      const w = F.t < 300 ? F.t / 300 : F.t > F.dur - 450 ? Math.max(0, (F.dur - F.t) / 450) : 1;
      const e = w * w * (3 - 2 * w) * F.amt;
      const ft = V3(F.x, F.y, 0);
      pTgt.lerp(ft, 0.6 * e);
      const off = pPos.clone().sub(base.target); off.multiplyScalar(1 - 0.42 * e);
      pPos.copy(pTgt).add(off);
      if (F.t >= F.dur) this.focusFx = null;
    }
    if (this.debugCam) {                                       // screenshots / tuning
      const d = this.debugCam, tilt = base.tilt;
      pTgt.copy(V3(d.x, d.y, 0)); pPos.set(pTgt.x, d.dist * Math.cos(tilt), pTgt.z + d.dist * Math.sin(tilt));
    }
    // attract camera: a slow hero sweep across the front of the machine
    const az = Math.sin(this.t * 0.00011) * 0.62;
    const pol = this.portrait ? 0.62 : 0.98 + Math.sin(this.t * 0.00007) * 0.08;
    const rad = base.dist * (this.portrait ? 1.0 : 0.88);
    const aTgt = this.tmpD || (this.tmpD = new THREE.Vector3());
    aTgt.set(Math.sin(this.t * 0.00009) * 30, 30, this.portrait ? -20 : -60);
    const aPos = this.tmpC || (this.tmpC = new THREE.Vector3());
    aPos.set(aTgt.x + Math.sin(az) * Math.sin(pol) * rad, aTgt.y + Math.cos(pol) * rad, aTgt.z + Math.cos(az) * Math.sin(pol) * rad);
    const k = this.attract * this.attract * (3 - 2 * this.attract);
    cam.position.lerpVectors(pPos, aPos, k);
    const tgt = pTgt.lerp(aTgt, k);
    if (this.shakeT > 0) {
      this.shakeT -= dt;
      const m = this.shakeMag * Math.max(0, this.shakeT / this.shakeDur);
      cam.position.x += rand(-m, m); cam.position.y += rand(-m, m) * 0.5; tgt.x += rand(-m, m) * 0.4;
    }
    this.punch = Math.max(0, this.punch - dt / 500);
    cam.fov = base.fov - this.punch * 2.4 + k * 4;
    cam.updateProjectionMatrix();
    cam.lookAt(tgt);
  }

  updateBalls(dt) {
    const g = this.g;
    this.ballMeshes.forEach((bm, i) => {
      const b = g.balls[i];
      if (!b) { bm.m.visible = false; bm.blob.visible = false; return; }
      const p = b.body.position;
      let h = BALL_R, elev = 0;
      if (b.state === 'ramp') {
        const t = Math.min(1, b.rampT), d = RAMP_PATH.total * (0.62 * t + 0.38 * t * t);
        elev = rampHeight(d / RAMP_PATH.total);
        h = BALL_R + elev + 1.5;
      }
      const prev = bm.m.position.clone();
      bm.m.position.copy(V3(p.x, p.y, h));
      bm.m.visible = true;
      // rolling: rotate about the axis perpendicular to travel
      const dx = bm.m.position.x - prev.x, dz = bm.m.position.z - prev.z, dist = Math.hypot(dx, dz);
      if (dist > 0.01 && dist < 60) {
        this.tmpV.set(dz, 0, -dx).normalize();
        this.tmpQ.setFromAxisAngle(this.tmpV, dist / BALL_R);
        bm.m.quaternion.premultiply(this.tmpQ);
      }
      bm.blob.visible = b.state !== 'lock';
      bm.blob.position.set(bm.m.position.x + 2 + elev * 0.2, 0.25 + (b.state === 'ramp' ? elev : 0), bm.m.position.z + 3);
      bm.blob.material.opacity = b.state === 'ramp' ? 0.35 : 0.5;
    });
  }

  updateLamps(now) {
    const g = this.g;
    const blink = Math.floor(now / 230) % 2 === 0, fast = Math.floor(now / 105) % 2 === 0;
    const states = {};
    const set = (k, st) => { states[k] = st; };
    const play = g.mode === 'play', mb = g.multiball;
    if (g.mode === 'attract') {
      const keys = ['launch1', 'launch2', 'orbitR', 'ramp', 'jackpot', 'lockArrow', 'orbitL', 'skill'];
      set(keys[Math.floor(now / 160) % keys.length], 1);
    } else {
      set('orbitL', !play ? 0 : mb ? 1 : g.orbitDone ? 1 : 2);
      set('orbitR', !play ? 0 : mb ? 1 : g.orbitDone ? 1 : 2);
      set('ramp', !play ? 0 : mb ? 1 : g.rampDone ? 1 : 2);
      set('lockArrow', g.lockLit && !mb ? 3 : 0);
      for (let i = 1; i <= 3; i++) set('lock' + i, i <= g.lockCount ? 1 : (g.lockLit && i === g.lockCount + 1 ? 2 : 0));
      set('jackpot', g.jackpotLit ? 3 : 0);
      g.sonars.forEach((s, i) => set('sonar' + (i + 1), s.lit ? 1 : (!g.lockLit && !mb && play ? 2 : 0)));
      set('inL', g.inlanes.L ? 1 : 0);
      set('inR', g.inlanes.R ? 1 : 0);
      set('kick', g.kickbackLit && play ? 1 : 0);
      const save = g.ballSaveUntil - now;
      set('save', save > 0 ? (save < 2000 ? 3 : 2) : 0);
      set('skill', g.skillLive ? 3 : 0);
      const wait = g.awaitingPlunge && play;
      set('launch1', wait ? (Math.floor(now / 260) % 2 ? 1 : 0) : 0);
      set('launch2', wait ? (Math.floor(now / 260) % 2 ? 0 : 1) : 0);
    }
    const touched = { arrow: false, round: false, rect: false };
    LAMPS.forEach(l => {
      const key = l[0], li = this.lampIdx[key], st = states[key] || 0;
      const a = st === 1 ? 1 : st === 2 ? (blink ? 1 : 0.1) : st === 3 ? (fast ? 1 : 0.06) : 0;
      if (li.a === a) return;
      li.a = a;
      const im = this.insertMeshes[li.shape];
      im.setColorAt(li.i, this.tmpCol || (this.tmpCol = new THREE.Color()));
      im.instanceColor.setXYZ(li.i, li.col.r * a * 2.6, li.col.g * a * 2.6, li.col.b * a * 2.6);
      this.haloMesh.instanceColor.setXYZ(li.halo, li.col.r * a * 0.9, li.col.g * a * 0.9, li.col.b * a * 0.9);
      touched[li.shape] = true; touched.halo = true;
    });
    ['arrow', 'round', 'rect'].forEach(s => { if (touched[s]) this.insertMeshes[s].instanceColor.needsUpdate = true; });
    if (touched.halo) this.haloMesh.instanceColor.needsUpdate = true;
  }

  updateTentacles(dt, now) {
    const g = this.g;
    const open = !g.multiball && (g.lockLit || g.balls.some(b => b.state === 'lock') || now < g.ejectGraceUntil);
    g.tentOpen = g.tentOpen || 0;
    g.tentOpen += ((open ? 1 : 0) - g.tentOpen) * Math.min(1, dt / 260);
    g.tentTwitch = Math.max(0, g.tentTwitch - dt / 400);
    g.tentFlashRed = Math.max(0, g.tentFlashRed - dt / 600);
    g.thrash = Math.max(0, g.thrash - dt / 2600);
    const o = g.tentOpen;
    const red = g.thrash > 0 || g.tentFlashRed > 0;
    this.tentRingMat.color.copy(red ? lin(0xff4a36, 1.8) : lin(0x54e6de, o > 0.5 ? 1.9 : 0.9));
    const m4 = this.tmpM, q = this.tmpQ, sc = this.tmpS;
    const ringQ = new THREE.Quaternion(), zAxis = new THREE.Vector3(0, 0, 1), xAxis = new THREE.Vector3(1, 0, 0);
    let idx = 0;
    for (const t of this.tentDefs) {
      let a = t.closed[0] + (t.open[0] - t.closed[0]) * o;
      const k = t.closed[1] + (t.open[1] - t.closed[1]) * o;
      let x = t.base[0], y = t.base[1];
      let prev = V3(x, y, 3);
      for (let i = 0; i < t.n; i++) {
        const f = i / (t.n - 1);
        a += k + Math.sin(now / 650 + i * 0.6 + t.ph) * 0.045 * f
          + g.tentTwitch * Math.sin(now / 40 + i) * 0.08 * f
          + g.thrash * Math.sin(now / 55 + i * 0.9 + t.ph) * 0.22 * f;
        const s = 1 - 0.62 * f, len = t.len * (0.7 + 0.4 * s);
        const nx = x + Math.cos(a) * len, ny = y + Math.sin(a) * len;
        // height: arch over the lock mouth when closed, rear up when open
        const hClosed = 4 + 24 * Math.sin(Math.PI * Math.min(1, (i + 1) / t.n * 1.02));
        const hOpen = 4 + 72 * Math.pow((i + 1) / t.n, 1.15) + g.thrash * 10 * Math.sin(now / 70 + i);
        const h = hClosed + (hOpen - hClosed) * o;
        const cur = V3(nx, ny, h);
        const dir = cur.clone().sub(prev); const dl = dir.length() || 1; dir.divideScalar(dl);
        const mid = prev.clone().add(cur).multiplyScalar(0.5);
        q.setFromUnitVectors(xAxis, dir);
        const r = 6.4 * s;
        sc.set(dl * 0.75 + r * 0.6, r, r * 0.92);
        m4.compose(mid, q, sc);
        this.tentPlates.setMatrixAt(idx, m4);
        ringQ.setFromUnitVectors(zAxis, dir);
        sc.set(r * 1.04, r * 1.04, r * 1.04);
        m4.compose(mid.clone().addScaledVector(dir, dl * 0.28), ringQ, sc);
        this.tentRings.setMatrixAt(idx, m4);
        idx++;
        x = nx; y = ny; prev = cur;
      }
    }
    this.tentPlates.instanceMatrix.needsUpdate = true;
    this.tentRings.instanceMatrix.needsUpdate = true;
  }

  updateLeviathan(dt) {
    const L = this.leviState, m = this.levi;
    if (L.t < 0) {
      L.next -= dt;
      if (L.next <= 0) { L.t = 0; L.dir = Math.random() < 0.5 ? 1 : -1; L.y = rand(380, 660); m.scale.x = L.dir > 0 ? -1 : 1; }
      return;
    }
    L.t += dt / L.dur;
    if (L.t >= 1) { L.t = -1; L.next = rand(35000, 55000); m.material.opacity = 0; return; }
    const x = L.dir > 0 ? -300 + (W + 600) * L.t : W + 300 - (W + 600) * L.t;
    m.position.copy(V3(x, L.y + Math.sin(L.t * 6) * 10, 0.6));
    m.material.opacity = 0.5 * Math.sin(Math.PI * L.t);
  }

  render(now) {
    if (this.noRender) return;
    this.renderer.shadowMap.needsUpdate = true;
    if (this.quality === 'high' && this.refl.rt) this.renderReflection();
    if (this.useComposer && this.composer) {
      this.finalPass.uniforms.time.value = (now % 10000) / 1000;
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

/* ================================= DMD ====================================
   The dot-matrix scoreboard above the table: its own 2D canvas, redrawn only
   when what it shows changes. Logical size 450 x 100.                       */

const DMD_W = 450, DMD_H = 100;

class DMD {
  constructor(game, canvas) {
    this.g = game;
    this.cv = canvas;
    this.c = canvas.getContext('2d');
    this.key = '';
    this.shown = 0;
    this.call = { text: '', sub: '', color: 'cyan', until: 0, prio: 0, start: 0 };
    this.frameArt = makeCanvas(DMD_W, DMD_H, c => {
      const g = c.createLinearGradient(0, 0, 0, DMD_H);
      g.addColorStop(0, '#1d2729'); g.addColorStop(0.5, '#0c1214'); g.addColorStop(1, '#050909');
      c.fillStyle = g; c.fillRect(0, 0, DMD_W, DMD_H);
      c.strokeStyle = 'rgba(216,247,242,0.035)'; c.lineWidth = 1;
      for (let y = 2; y < DMD_H; y += 2) { c.beginPath(); c.moveTo(0, y + Math.random()); c.lineTo(DMD_W, y + Math.random()); c.stroke(); }
      c.fillStyle = '#000'; c.beginPath(); roundRect(c, 12, 10, DMD_W - 24, DMD_H - 20, 3); c.fill();
      c.strokeStyle = 'rgba(84,230,222,0.25)'; c.lineWidth = 1; c.beginPath(); roundRect(c, 11.5, 9.5, DMD_W - 23, DMD_H - 19, 3.5); c.stroke();
      [[6, 6], [DMD_W - 6, 6], [6, DMD_H - 6], [DMD_W - 6, DMD_H - 6]].forEach(([x, y]) => bolt(c, x, y, 2.6));
    }, 3);
  }

  /* fit the HUD strip: the scoreboard keeps its 4.5:1 shape */
  resize() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const h = Math.round(clamp(Math.min(vw / 4.5, vh * 0.13), 58, 124));
    document.documentElement.style.setProperty('--hud-h', h + 'px');
    const cssW = Math.min(vw, h * 4.5), cssH = cssW / 4.5;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.cv.style.width = cssW + 'px';
    this.cv.style.height = cssH + 'px';
    this.cv.style.marginTop = ((h - cssH) / 2) + 'px';
    this.cv.width = Math.round(cssW * dpr);
    this.cv.height = Math.round(cssH * dpr);
    this.k = this.cv.width / DMD_W;          // device px per logical px
    // dot mask: one 3-unit cell per LED, cut at device resolution
    const cell = Math.max(2, Math.round(3 * this.k));
    const m = document.createElement('canvas'); m.width = m.height = cell;
    const mc = m.getContext('2d');
    mc.fillStyle = 'rgba(0,0,0,0.86)'; mc.fillRect(0, 0, cell, cell);
    mc.globalCompositeOperation = 'destination-out';
    mc.beginPath(); mc.arc(cell / 2, cell / 2, cell * 0.36, 0, Math.PI * 2); mc.fill();
    this.mask = this.c.createPattern(m, 'repeat');
    this.key = '';
  }

  callout(text, sub, color, ms, prio, now) {
    prio = prio || 1;
    if (now < this.call.until && prio < this.call.prio) return;
    Object.assign(this.call, { text, sub: sub || '', color: color || 'cyan', until: now + (ms || 1500), prio, start: now });
  }

  update(now) {
    const g = this.g, call = this.call;
    const inCall = now < call.until;
    let vis = false;
    if (inCall) { const e = now - call.start; vis = e > 450 || Math.floor(e / 75) % 2 === 0; }   // a few hard blinks
    let main;
    if (g.mode === 'attract' && !inCall) {
      const msgs = ['WATERJON', 'ABYSS PINBALL', 'DEPTH RANKINGS', 'BEST ' + fmt(g.best)];
      main = msgs[Math.floor(now / 2400) % msgs.length];
    } else {
      const d = g.score - this.shown;
      this.shown = Math.abs(d) < 4 ? g.score : this.shown + Math.ceil(d * 0.25);
      main = fmt(this.shown);
    }
    const sup = now < g.superUntil;
    const ballNo = Math.min(BALLS_PER_GAME, BALLS_PER_GAME - g.ballsLeft + 1);
    const st = {
      ball: g.mode === 'attract' ? 'INSERT DIVER' : 'BALL ' + ballNo + '/' + BALLS_PER_GAME,
      best: 'BEST ' + fmt(g.best),
      top: g.multiball ? 'KRAKEN MULTIBALL' : '',
      mult: 'x' + g.mult + (g.combo > 1 ? '  COMBO ' + g.combo : ''),
      multHot: g.mult > 1,
      segs: sup ? 10 : Math.round(g.pressure / 10), sup,
      lock: g.lockCount, lockLit: g.lockLit,
      main, inCall, vis,
    };
    const key = JSON.stringify(st) + (inCall ? call.text + call.sub + call.color : '');
    if (key === this.key) return;
    this.key = key;
    this.draw(st);
  }

  draw(st) {
    const c = this.c, k = this.k, call = this.call;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.drawImage(this.frameArt, 0, 0, this.cv.width, this.cv.height);
    c.setTransform(k, 0, 0, k, 0, 0);
    c.save();
    c.beginPath(); c.rect(12, 10, DMD_W - 24, DMD_H - 20); c.clip();
    const txt = (s, x, y, size, align, base, color) => {
      if (!s) return;
      c.font = size + 'px ' + F.num; c.textAlign = align; c.textBaseline = base;
      c.fillStyle = color; c.shadowColor = color; c.shadowBlur = 6 * k / 2;
      c.fillText(s, x, y);
    };
    txt(st.ball, 22, 13, 22, 'left', 'top', HEX.cyan);
    txt(st.best, 428, 13, 22, 'right', 'top', HEX.cyan);
    txt(st.top, 225, 13, 22, 'center', 'top', HEX.red);
    if (st.inCall) {
      if (st.vis) {
        const hex = HEX[call.color] || HEX.cyan;
        c.save(); c.shadowBlur = 9 * k / 2;
        txt(call.text, 225, 47, 44, 'center', 'middle', hex);
        c.restore();
        txt(call.sub, 225, 80, 22, 'center', 'middle', hex);
      }
    } else {
      txt(st.main, 225, 53, 52, 'center', 'middle', HEX.cyan);
    }
    txt(st.mult, 22, 89, 24, 'left', 'bottom', st.multHot ? HEX.amber : HEX.cyan);
    if (!st.inCall || !call.sub) {
      txt('PSI', 270, 89, 20, 'right', 'bottom', HEX.cyan);
      txt('LOCK', 362, 89, 20, 'left', 'bottom', HEX.cyan);
      c.shadowBlur = 0;
      for (let i = 0; i < 10; i++) {
        c.fillStyle = i < st.segs ? (st.sup ? HEX.amber : (i >= 8 ? HEX.red : HEX.cyan)) : '#0b2a2c';
        c.fillRect(276 + i * 8, 74, 6, 11);
      }
      for (let i = 0; i < 3; i++) {
        c.fillStyle = i < st.lock ? HEX.sea : (st.lockLit && i === st.lock ? '#2f6f66' : '#0b2a2c');
        c.fillRect(407 + i * 9, 74, 7, 11);
      }
    }
    c.restore();
    // LED dot mask + a little glass glare
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.fillStyle = this.mask;
    c.fillRect(Math.round(12 * k), Math.round(10 * k), Math.round((DMD_W - 24) * k), Math.round((DMD_H - 20) * k));
    c.setTransform(k, 0, 0, k, 0, 0);
    c.fillStyle = 'rgba(255,255,255,0.025)';
    c.beginPath(); c.moveTo(12, 10); c.lineTo(200, 10); c.lineTo(12, 60); c.closePath(); c.fill();
  }
}

/* ================================= GAME ===================================
   Rules, physics and input. Same Matter build, geometry and tuning as the 2D
   table; the 3D view only reads this state.                                 */

class Game {
  constructor() {
    window.__abyss = this;                       // debugging / automated tests
    this.now = 0;                                // game clock (ms): stops while paused
    this.timers = [];
    this.engine = M.Engine.create({ enableSleeping: false, positionIterations: 6, velocityIterations: 4 });
    this.world = this.engine.world;
    this.world.gravity.x = 0; this.world.gravity.y = GRAVITY; this.world.gravity.scale = 0.001;

    this.mode = 'attract';                       // attract | play | over
    this.paused = false;
    this.halt = false;                           // tests drive tick() by hand when set
    this.acc = 0;
    this.balls = []; this.kicks = [];
    this.flippers = []; this.bumpers = []; this.sonars = []; this.slings = [];
    this.keys = { L: false, R: false };
    this.ptrs = new Map();
    this.pull = 0; this.charging = null; this.plungerPtr = null;
    this.best = 0;
    this.lastGood = new WeakMap();
    this.resetRun();

    this.buildPhysics();
    this.buildToys();
    this.bindCollisions();
    this.dmdC = new DMD(this, document.getElementById('dmd'));
    this.view = new TableView(this, document.getElementById('view'));
    this.serveBall(false);                       // a ball waits in the shooter lane behind the menu
    this.awaitingPlunge = false;
    this.bindInput();
    this.bindButtons();
    this.perfLog = { t: 0, n: 0, slow: 0, warm: 0 };
    this.autoLow = false;
    this.applyGfx();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 250));
    UI.attach(this);
    this.last = performance.now();
    requestAnimationFrame((t) => this.frame(t));
  }

  resetRun() {
    this.score = 0;
    this.ballsLeft = BALLS_PER_GAME;
    this.combo = 0; this.mult = 1; this.lastShot = -1e9;
    this.pressure = 0; this.pressureShown = 0; this.superUntil = 0;
    this.lockLit = false; this.lockCount = 0;
    this.multiball = false; this.mbJackpots = 0; this.jackpotAdd = 0;
    this.jackpotLit = false; this.jackpotsWon = 0; this.jackLast = 0; this.jackFlash = 0;
    this.rampDone = false; this.orbitDone = false; this.orbitArm = null;
    this.inlanes = { L: false, R: false };
    this.kickbackLit = true;
    this.ballSaveUntil = 0; this.saveArmed = false;
    this.skillUntil = 0; this.skillLive = false;
    this.awaitingPlunge = false; this.serveQueue = 0;
    this.recordShown = false; this.ejectGraceUntil = 0;
    this.thrash = 0; this.tentTwitch = 0; this.tentFlashRed = 0; this.tentOpen = this.tentOpen || 0;
    this.firstLaunchDone = false;
    if (this.sonars) this.sonars.forEach(s => { s.lit = false; });
  }

  /* timers on the game clock (they freeze with the pause menu) */
  after(ms, fn) { this.timers.push({ at: this.now + ms, fn }); }
  runTimers() {
    if (!this.timers.length) return;
    const due = this.timers.filter(t => t.at <= this.now);
    if (!due.length) return;
    this.timers = this.timers.filter(t => t.at > this.now);
    due.forEach(t => t.fn());
  }

  /* ============================== PHYSICS ================================= */
  add(body) { M.Composite.add(this.world, body); return body; }
  rail(x1, y1, x2, y2, th, label, extra) {
    const len = Math.hypot(x2 - x1, y2 - y1) + (extra || 0);
    return this.add(M.Bodies.rectangle((x1 + x2) / 2, (y1 + y2) / 2, len, th, {
      isStatic: true, angle: Math.atan2(y2 - y1, x2 - x1), friction: 0.02, frictionStatic: 0.05, restitution: 0.3, label: label || 'wall',
    }));
  }
  cap(x, y, r) { return this.add(M.Bodies.circle(x, y, r, { isStatic: true, label: 'wall', friction: 0.02, frictionStatic: 0.05, restitution: 0.3 })); }
  polyRail(pts, th) {
    for (let i = 0; i < pts.length - 1; i++) this.rail(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], th);
    pts.forEach(p => this.cap(p[0], p[1], th / 2));
  }
  sensor(shape, x, y, a, b, label, ud) {
    const o = { isStatic: true, isSensor: true, label };
    const body = this.add(shape === 'circle' ? M.Bodies.circle(x, y, a, o) : M.Bodies.rectangle(x, y, a, b, o));
    body.ud = ud || {};
    return body;
  }

  buildPhysics() {
    const { cx, cy, R, wall } = T;
    const rc = R + wall / 2, N = 40;
    for (let i = 0; i < N; i++) {
      const a0 = Math.PI + Math.PI * i / N, a1 = Math.PI + Math.PI * (i + 1) / N;
      this.rail(cx + rc * Math.cos(a0), cy + rc * Math.sin(a0), cx + rc * Math.cos(a1), cy + rc * Math.sin(a1), wall, 'wall', 3);
    }
    this.rail(3, cy, 3, TH + 90, wall);
    this.rail(447, cy, 447, TH + 90, wall);
    this.rail(405, 262, 405, TH + 20, 14);
    this.gate = this.rail(T.gateA[0], T.gateA[1], T.gateB[0], T.gateB[1], 6, 'gate', 6);
    this.gateCap = this.cap(T.gateA[0], T.gateA[1], 3);
    this.laneFloor = this.add(M.Bodies.rectangle(T.laneX, 788, 28, 16, { isStatic: true, label: 'wall', friction: 0.02, restitution: 0.08 }));
    this.polyRail(T.chanL, 6); this.polyRail(T.chanR, 6);
    this.polyRail(T.guideL, 6); this.polyRail(T.guideR, 6);
    this.polyRail(T.sepL, 6); this.polyRail(T.sepR, 6);
    this.polyRail(T.lockBox, 6);
    this.polyRail(T.mouthL, 5); this.polyRail(T.mouthR, 5);
    this.bar = this.add(M.Bodies.rectangle(126, 247, 52, 8, { isStatic: true, label: 'tentacle', restitution: 0.35, friction: 0 }));

    // slingshots
    [[T.slingL, { x: 0.894, y: -0.447 }], [T.slingR, { x: -0.894, y: -0.447 }]].forEach(([v, n], i) => {
      const gx = (v[0][0] + v[1][0] + v[2][0]) / 3, gy = (v[0][1] + v[1][1] + v[2][1]) / 3;
      const body = this.add(M.Bodies.fromVertices(gx, gy, v.map(p => ({ x: p[0], y: p[1] })), { isStatic: true, label: 'sling', restitution: 0.2, friction: 0 }, true));
      body.ud = { i, n };
    });
    // pop bumpers
    T.bumpers.forEach(([x, y], i) => {
      const body = this.add(M.Bodies.circle(x, y, T.bumperR, { isStatic: true, label: 'bumper', restitution: 0.2, friction: 0 }));
      body.ud = { i };
    });
    // sonar stand-ups (rounded ends: no ledge to rest on)
    T.sonar.forEach(([x, y], i) => {
      const body = this.add(M.Bodies.rectangle(x, y, 18, 6, { isStatic: true, angle: T.sonarAng, chamfer: { radius: 2.9 }, label: 'sonar', restitution: 0.4, friction: 0 }));
      body.ud = { i };
    });
    // abyss jackpot (arrowhead: no flat top)
    const [jx, jy] = T.jackpot;
    const jb = this.add(M.Bodies.fromVertices(jx, jy, [[-13, 6], [13, 6], [13, -1], [0, -11], [-13, -1]].map(p => ({ x: jx + p[0], y: jy + p[1] })), { isStatic: true, label: 'jackpot', restitution: 0.45, friction: 0 }, true));
    jb.ud = {};
    T.jackPosts.forEach(([x, y]) => this.add(M.Bodies.circle(x, y, 5, { isStatic: true, label: 'wall', restitution: 0.55, friction: 0 })));

    // switches
    this.sensor('circle', T.lockHold[0], 208, 10, 0, 'lockS');
    this.sensor('circle', T.mouth[0], T.mouth[1], 11, 0, 'rampS');
    this.sensor('rect', T.orbitL[0], T.orbitL[1], 34, 14, 'orbit', { side: 'L' });
    this.sensor('rect', T.orbitR[0], T.orbitR[1], 32, 14, 'orbit', { side: 'R' });
    this.sensor('rect', T.inlaneL[0], T.inlaneL[1], 14, 14, 'inlane', { side: 'L' });
    this.sensor('rect', T.inlaneR[0], T.inlaneR[1], 14, 14, 'inlane', { side: 'R' });
    this.sensor('rect', T.kick[0], T.kick[1], 22, 18, 'kick');

    this.addFlipper('L', T.flipL[0], T.flipL[1]);
    this.addFlipper('R', T.flipR[0], T.flipR[1]);
  }

  addFlipper(side, px, py) {
    const sgn = side === 'L' ? 1 : -1;
    const rest = side === 'L' ? FLIP.rest : -FLIP.rest;
    const up = side === 'L' ? -FLIP.up : FLIP.up;
    const off = FLIP.len / 2 + 1;
    const bx = px + sgn * off * Math.cos(rest), by = py + sgn * off * Math.sin(rest);
    const body = this.add(M.Bodies.rectangle(bx, by, FLIP.len + 10, FLIP.thick, {
      angle: rest, chamfer: { radius: 5 }, density: 0.02, friction: 0.05, frictionAir: 0, restitution: 0.18, label: 'flipper',
      collisionFilter: { category: 0x0002, mask: 0xFFFFFFFF, group: 0 },
    }));
    // pivot post: seals the gap between the flipper base and the inlane guide (balls only, never the flipper)
    this.add(M.Bodies.circle(px, py, 8, { isStatic: true, label: 'wall', friction: 0.02, frictionStatic: 0.05, restitution: 0.2,
      collisionFilter: { category: 0x0004, mask: 0x0001, group: 0 } }));
    M.Composite.add(this.world, M.Constraint.create({ pointA: { x: px, y: py }, bodyB: body, pointB: { x: px - bx, y: py - by }, length: 0, stiffness: 1 }));
    this.flippers.push({ side, body, rest, up, pressed: false });
  }

  /* toggle a body solid/pass-through, fixing up live contact pairs too */
  setSolid(body, solid) {
    if (body.isSensor === !solid) return;
    body.isSensor = !solid;
    const list = this.engine.pairs.list;
    for (let i = 0; i < list.length; i++) {
      const p = list[i];
      if (p.bodyA === body || p.bodyB === body) p.isSensor = p.bodyA.isSensor || p.bodyB.isSensor;
    }
  }

  /* per-toy state the 3D view animates */
  buildToys() {
    T.bumpers.forEach(([x, y]) => this.bumpers.push({ x, y, last: 0, flash: 0, press: 0 }));
    T.sonar.forEach(([x, y]) => this.sonars.push({ x, y, flash: 0, last: 0, lit: false }));
    [T.slingL, T.slingR].forEach(() => this.slings.push({ flash: 0, last: 0 }));
  }

  /* ============================== FX + DMD ================================ */
  ring(x, y, color, size, dur) { this.view.ring(x, y, color, size, dur); }
  sparks(x, y, n, color) { this.view.sparks(x, y, n, color); }
  floatText(x, y, str, color) { this.view.floatText(x, y, str, color); }
  impact(x, y, level, color) { this.view.impact(x, y, level, color); }
  shake(ms, mag) { this.view.shake(ms, mag); }
  dmd(text, sub, color, ms, prio) { this.dmdC.callout(text, sub, color, ms, prio, this.now); }

  /* ============================== BUTTONS ================================= */
  bindButtons() {
    const on = (id, fn) => {
      const el = document.getElementById(id);
      el.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); Sound.ensure(); fn(); });
      el.addEventListener('pointerdown', (e) => e.stopPropagation());
    };
    on('hb-pause', () => this.setPaused(true));
    on('hb-help', () => { this.setPaused(true, true); UI.sub('help', this.mode === 'play' ? 'pause' : 'start'); });
    on('hb-sound', () => { Sound.toggleMute(); this.refreshButtons(); });
    on('hb-music', () => { this.setPaused(true, true); UI.sub('settings', this.mode === 'play' ? 'pause' : 'start'); });
    this.refreshButtons();
  }
  refreshButtons() {
    const b = document.getElementById('hb-sound');
    if (!b) return;
    b.textContent = Sound.muted ? '×' : '♪';
    b.classList.toggle('muted', Sound.muted);
    b.setAttribute('aria-label', Sound.muted ? 'Unmute' : 'Mute');
  }
  refreshBest() { Leaderboard.best().then(v => { this.best = v; }); }

  /* graphics quality: AUTO starts HIGH and drops to LOW if frames run slow */
  applyGfx() {
    const m = Gfx.mode;
    const q = m === 'low' ? 'low' : m === 'high' ? 'high' : (this.autoLow ? 'low' : 'high');
    this.view.setQuality(q);
  }
  watchPerf(dt) {
    const P = this.perfLog;
    if (Gfx.mode !== 'auto' || this.autoLow || document.hidden || this.paused) { P.t = P.n = 0; return; }
    P.warm += dt;
    if (P.warm < 2500) return;                    // let shaders compile first
    P.t += dt; P.n++;
    if (P.t < 1000) return;
    const avg = P.t / P.n;
    P.slow = avg > 24 ? P.slow + 1 : Math.max(0, P.slow - 1);
    P.t = P.n = 0;
    if (P.slow >= 3) { this.autoLow = true; this.applyGfx(); UI.refreshGfx(); }
  }

  resize() {
    this.dmdC.resize();
    this.view.resize();
  }

  /* ============================== INPUT =================================== */
  bindInput() {
    const stage = document.getElementById('stage');
    const down = (e) => {
      Sound.ensure();
      if (UI.isOpen() || this.paused) return;
      e.preventDefault();
      try { stage.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
      const p = this.view.screenToTable(e.clientX, e.clientY);
      if (p && p.x >= 396 && p.y > 520) {                 // shooter lane = plunger
        this.ptrs.set(e.pointerId, 'plunger');
        if (this.canPlunge() && !this.charging) { this.charging = 'ptr'; this.plungerPtr = e.pointerId; this.plungerY0 = e.clientY; this.pull = 0; }
        return;
      }
      const rect = stage.getBoundingClientRect();
      this.ptrs.set(e.pointerId, e.clientX < rect.left + rect.width / 2 ? 'L' : 'R');
      this.syncFlippers();
    };
    const move = (e) => {
      if (this.plungerPtr === e.pointerId) {
        const span = Math.max(60, window.innerHeight * 0.12);
        this.pull = clamp((e.clientY - this.plungerY0) / span, 0, 1);
      }
    };
    const up = (e) => {
      const role = this.ptrs.get(e.pointerId);
      this.ptrs.delete(e.pointerId);
      if (role === 'plunger') { if (this.plungerPtr === e.pointerId) this.releasePlunger(); }
      else this.syncFlippers();
    };
    stage.addEventListener('pointerdown', down);
    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerup', up);
    stage.addEventListener('pointercancel', up);
    stage.addEventListener('lostpointercapture', (e) => { if (this.ptrs.has(e.pointerId)) up(e); });

    window.addEventListener('keydown', (e) => {
      const tag = e.target && e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      Sound.ensure();
      if (UI.isOpen()) {
        if (e.code === 'Enter') { e.preventDefault(); UI.primary(); }
        else if (e.code === 'Escape' || (e.code === 'KeyP' && UI.current === 'pause')) { e.preventDefault(); UI.escape(); }
        return;
      }
      switch (e.code) {
        case 'ArrowLeft': case 'KeyA': case 'ShiftLeft': e.preventDefault(); this.keys.L = true; this.syncFlippers(); break;
        case 'ArrowRight': case 'KeyD': case 'ShiftRight': e.preventDefault(); this.keys.R = true; this.syncFlippers(); break;
        case 'Space': case 'ArrowDown': case 'Enter':
          e.preventDefault();
          if (!e.repeat && !this.paused && this.canPlunge() && !this.charging) { this.charging = 'key'; this.pull = 0; }
          break;
        case 'KeyP': case 'Escape': e.preventDefault(); this.setPaused(true); break;
        case 'KeyM': Sound.toggleMute(); this.refreshButtons(); break;
        default: break;
      }
    });
    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'ArrowLeft': case 'KeyA': case 'ShiftLeft': this.keys.L = false; this.syncFlippers(); break;
        case 'ArrowRight': case 'KeyD': case 'ShiftRight': this.keys.R = false; this.syncFlippers(); break;
        case 'Space': case 'ArrowDown': case 'Enter': if (this.charging === 'key') this.releasePlunger(); break;
        default: break;
      }
    });
    const autoPause = () => { this.keys.L = this.keys.R = false; this.ptrs.clear(); this.syncFlippers(); if (this.mode === 'play' && !this.paused) this.setPaused(true); };
    window.addEventListener('blur', autoPause);
    document.addEventListener('visibilitychange', () => { if (document.hidden) autoPause(); });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  syncFlippers() {
    const v = { L: this.keys.L, R: this.keys.R };
    this.ptrs.forEach(r => { if (r === 'L' || r === 'R') v[r] = true; });
    for (const f of this.flippers) {
      const was = f.pressed;
      f.pressed = !!v[f.side] && !this.paused && this.mode === 'play';
      if (f.pressed && !was) Sound.sfx('flip');
    }
  }

  setPaused(p, silent) {
    if (p === this.paused) { if (p && !silent && !UI.isOpen()) UI.pauseMenu(); return; }
    if (p && this.mode !== 'play') return;
    this.paused = p;
    if (p) {
      this.flippers.forEach(f => { f.pressed = false; });
      this.charging = null; this.pull = 0;
      Sound.pause();
      if (!silent) UI.pauseMenu();
    } else {
      this.acc = 0;
      Sound.resume();
      this.syncFlippers();
    }
  }

  /* ============================== GAME FLOW =============================== */
  newGame() {
    this.balls.slice().forEach(b => this.removeBall(b));
    this.timers = [];
    this.resetRun();
    this.mode = 'play';
    this.paused = false;
    Sound.stopMusic();
    this.refreshBest();
    this.serveBall(false);
    this.dmd('BALL 1', 'PULL INTO THE SKILL ZONE', 'cyan', 2400, 1);
  }

  endRun() {                                    // "END RUN" from the pause menu
    this.balls.slice().forEach(b => this.removeBall(b));
    this.serveQueue = 0; this.ballsLeft = 0; this.paused = false;
    Sound.resume();
    this.gameOver();
  }

  canPlunge() { return this.mode === 'play' && this.awaitingPlunge && this.balls.some(b => b.state === 'lane'); }

  makeBall(x, y) {
    const body = this.add(M.Bodies.circle(x, y, BALL_R, BALL_OPTS));
    const b = { body, state: 'table', still: 0, autoAt: 0, holdUntil: 0, rampT: 0, release: false };
    body.ballRef = b;
    this.balls.push(b);
    return b;
  }
  removeBall(b) {
    const i = this.balls.indexOf(b);
    if (i >= 0) this.balls.splice(i, 1);
    M.Composite.remove(this.world, b.body);
  }

  serveBall(auto) {
    const b = this.makeBall(T.laneX, T.laneRest);
    b.state = 'lane';
    if (auto) b.autoAt = this.now + 650;
    else { this.awaitingPlunge = true; this.saveArmed = true; }
    return b;
  }

  releasePlunger() {
    const pull = this.pull, dragged = this.charging === 'key' || pull > 0.08;
    const power = dragged ? 0.32 + 0.68 * pull : 0.82;           // a plain tap = firm plunge
    const zone = dragged && pull >= SKILL_ZONE[0] && pull <= SKILL_ZONE[1];
    this.charging = null; this.plungerPtr = null; this.pull = 0;
    if (!this.canPlunge()) return;
    const b = this.balls.find(x => x.state === 'lane');
    if (b) this.launch(b, power, true, zone);
  }

  launch(b, power, manual, zone) {
    if (b.state !== 'lane') return;
    const v = LAUNCH[0] + (LAUNCH[1] - LAUNCH[0]) * clamp(power, 0, 1);
    b.state = 'table'; b.autoAt = 0;
    M.Body.setVelocity(b.body, { x: 0, y: -pxs(v) });
    Sound.sfx('launch');
    Sound.startMusic();                         // the track starts on launch and loops all run
    Sound.rumbleStart();
    if (manual) {
      this.awaitingPlunge = false;
      if (this.saveArmed) {
        this.saveArmed = false;
        this.ballSaveUntil = this.now + BALL_SAVE_MS;
        this.skillUntil = this.now + SKILL_MS; this.skillLive = !!zone;
      }
      if (!this.firstLaunchDone) { this.firstLaunchDone = true; this.dmd('DESCEND', zone ? 'SKILL ARMED: MAKE THE TRENCH' : 'THREE BALLS. NO SURFACE.', 'sea', 1800, 2); }
    }
  }

  toLane(b) {                                   // a weak plunge rolled back, or a ball fell through the gate
    b.state = 'lane';
    M.Body.setVelocity(b.body, { x: 0, y: 0 });
    if (this.mode !== 'play') return;
    if (this.balls.length === 1 && !this.multiball && this.serveQueue === 0) { this.awaitingPlunge = true; this.saveArmed = true; }
    else b.autoAt = this.now + 500;
  }

  drain(b) {
    this.view.bubble(clamp(b.body.position.x, 40, 400), TH - 20, 6, 20);
    this.removeBall(b);
    if (this.mode !== 'play') return;
    if (this.now < this.ballSaveUntil) {
      this.serveQueue++;
      this.dmd('BALL SAVED', 'DIVE GATE HOLDING', 'amber', 1500, 3);
      Sound.sfx('save');
      return;
    }
    const live = this.balls.length + this.serveQueue;
    if (live >= 1) {
      if (this.multiball && live <= 1) this.endMultiball();
      return;
    }
    this.loseBall();
  }

  loseBall() {
    this.ballsLeft--;
    this.combo = 0; this.mult = 1; this.superUntil = 0; this.orbitArm = null;
    this.multiball = false;
    Sound.sfx('drain');
    this.shake(200, 0.005);
    if (this.ballsLeft > 0) {
      this.dmd('PRESSURE LOST', this.ballsLeft + (this.ballsLeft === 1 ? ' BALL LEFT' : ' BALLS LEFT'), 'red', 1700, 3);
      this.after(1800, () => {
        if (this.mode !== 'play' || this.balls.length) return;
        this.serveBall(false);
        this.dmd('BALL ' + (BALLS_PER_GAME - this.ballsLeft + 1), 'PULL THE PLUNGER', 'cyan', 1800, 1);
      });
    } else this.gameOver();
  }

  gameOver() {
    this.mode = 'over';
    this.awaitingPlunge = false;
    this.flippers.forEach(f => { f.pressed = false; });
    Sound.fadeOut(2200);                        // the track fades out
    Sound.rumbleStop();
    this.dmd('SIGNAL LOST', 'FINAL ' + fmt(this.score), 'red', 4000, 4);
    this.after(2300, () => { if (this.mode === 'over') UI.showGameOver(this.score); });
  }

  /* ---- scoring ---- */
  shot() {                                       // major shots chain into combos
    this.combo = this.now - this.lastShot < COMBO_MS ? this.combo + 1 : 1;
    this.lastShot = this.now;
    this.mult = Math.min(MAX_MULT, this.combo);
  }
  award(base, x, y, show) {
    const pts = base * this.mult;
    this.score += pts;
    if (show) this.floatText(x, y, '+' + fmt(pts));
    if (!this.recordShown && this.best > 0 && this.score > this.best) {
      this.recordShown = true;
      this.dmd('DEPTH RECORD', 'NEW BEST · KEEP DIVING', 'amber', 1800, 2);
      Sound.sfx('alarm');
    }
    return pts;
  }

  /* ============================== COLLISIONS ============================== */
  bindCollisions() {
    M.Events.on(this.engine, 'collisionStart', (ev) => {
      const pairs = ev.pairs;
      for (let i = 0; i < pairs.length; i++) {
        const a = pairs[i].bodyA, b = pairs[i].bodyB;
        if (a.ballRef) this.onHit(b, a.ballRef);
        if (b.ballRef) this.onHit(a, b.ballRef);
      }
    });
  }

  onHit(o, b) {
    if (b.state !== 'table' || this.mode !== 'play') return;
    const now = this.now;
    switch (o.label) {
      case 'bumper': this.skillLive = false; this.hitBumper(o.ud.i, b); break;
      case 'sling': this.hitSling(o, b); break;
      case 'sonar': this.skillLive = false; this.hitSonar(o.ud.i, b); break;
      case 'jackpot': this.skillLive = false; this.hitJackpot(b); break;
      case 'tentacle': this.skillLive = false; this.hitTentacle(); break;
      case 'lockS': if (this.lockLit && !this.multiball) this.captureLock(b); break;
      case 'rampS': this.enterRamp(b); break;
      case 'orbit': this.hitOrbit(o.ud.side, b); break;
      case 'inlane': this.hitInlane(o.ud.side); break;
      case 'kick': this.hitKickback(b); break;
      case 'ball': case 'wall': case 'flipper': case 'gate': {
        const sp = this.speedOf(b);
        if (sp > 500 && now - (b.lastTick || 0) > 60) { b.lastTick = now; Sound.sfx('tick', sp / 1600); }
        break;
      }
      default: break;
    }
  }

  speedOf(b) { const v = b.body.velocity; return Math.hypot(v.x, v.y) * 1000 / STEP_MS; }

  hitBumper(i, b) {
    const bp = this.bumpers[i], now = this.now;
    if (now - bp.last < 70) return;
    bp.last = now;
    const p = b.body.position, dx = p.x - bp.x, dy = p.y - bp.y, d = Math.hypot(dx, dy) || 1;
    const sp = this.speedOf(b);
    const k = clamp(sp * 0.45 + BUMPER_KICK[0], BUMPER_KICK[0], BUMPER_KICK[1]);
    this.kicks.push({ ball: b, vx: dx / d * k, vy: dy / d * k });
    const sup = now < this.superUntil;
    this.award(sup ? SCORE.superBumper : SCORE.bumper, bp.x, bp.y - 30, sup);
    bp.flash = 1; bp.press = 1;
    this.sparks(bp.x + dx / d * T.bumperR, bp.y + dy / d * T.bumperR, 4, sup ? COL.amber : COL.cyan);
    this.view.bubble(bp.x, bp.y, 2, 14);
    Sound.sfx('bumper', 0.45 + sp / 1600);
    this.shake(45, 0.002);
    if (!sup) {
      this.pressure = Math.min(100, this.pressure + PRESSURE_PER_HIT);
      if (this.pressure >= 100) {
        this.pressure = 0;
        this.superUntil = now + SUPER_POPS_MS;
        this.award(SCORE.pressure, 276, 150, true);
        this.dmd('PRESSURE RISING', 'BUMPERS 500 FOR 15 SEC', 'amber', 1800, 2);
        this.impact(276, 200, 2, COL.amber);
        Sound.sfx('alarm');
      }
    }
  }

  hitSling(o, b) {
    const s = this.slings[o.ud.i], now = this.now;
    if (now - s.last < 110) return;
    s.last = now;
    this.kicks.push({ ball: b, vx: o.ud.n.x * SLING_KICK, vy: o.ud.n.y * SLING_KICK });
    this.award(SCORE.sling, 0, 0, false);
    s.flash = 1;
    Sound.sfx('sling');
  }

  hitSonar(i, b) {
    const s = this.sonars[i], now = this.now;
    if (now - s.last < 200) return;
    s.last = now; s.flash = 1;
    Sound.sfx('target');
    this.sparks(s.x, s.y, 3, COL.cyan);
    if (this.multiball) {
      this.jackpotAdd += 2500;
      this.award(SCORE.target, s.x, s.y - 16, true);
      this.dmd('JACKPOT BUILDS', 'NOW ' + fmt(SCORE.jackpot + this.mbJackpots * SCORE.mbJackpotStep + this.jackpotAdd), 'red', 1200, 1);
      return;
    }
    if (this.lockLit || s.lit) { this.award(s.lit ? 150 : SCORE.target, s.x, s.y - 16, true); return; }
    s.lit = true;
    this.award(SCORE.target, s.x, s.y - 16, true);
    const n = this.sonars.filter(x => x.lit).length;
    if (n === 3) {
      this.lockLit = true;
      this.sonars.forEach(x => { x.lit = false; });
      this.dmd('SONAR LOCK', 'KRAKEN LOCK IS OPEN', 'sea', 1800, 2);
      this.ring(T.station[0], T.station[1], COL.cyan, 5, 1200);
      Sound.sfx('ping');
    } else this.dmd('SONAR ' + n + '/3', 'HIT ALL THREE TO OPEN THE LOCK', 'cyan', 1100, 1);
  }

  hitJackpot(b) {
    const now = this.now;
    if (now - this.jackLast < 400) return;
    this.jackLast = now;
    if (!this.jackpotLit) {
      this.award(SCORE.target, T.jackpot[0], T.jackpot[1] - 22, true);
      this.jackFlash = 1;
      Sound.sfx('target');
      return;
    }
    this.shot();
    let base;
    if (this.multiball) { base = SCORE.jackpot + this.mbJackpots * SCORE.mbJackpotStep + this.jackpotAdd; this.mbJackpots++; }
    else {
      base = SCORE.jackpot + this.jackpotsWon * SCORE.jackpotStep;
      this.jackpotsWon++; this.jackpotLit = false; this.rampDone = false; this.orbitDone = false;
    }
    const pts = this.award(base, T.jackpot[0], T.jackpot[1] - 30, true);
    this.dmd('ABYSS JACKPOT', fmt(pts), 'red', 2200, 3);
    this.impact(T.jackpot[0], T.jackpot[1], 3, COL.red);
    Sound.sfx('jackpot');
  }

  hitTentacle() {
    const now = this.now;
    if (now - (this.tentLast || 0) < 300) return;
    this.tentLast = now;
    this.award(SCORE.tentacle, 126, 236, false);
    this.tentTwitch = 1;
    Sound.sfx('tentacle');
  }

  captureLock(b) {
    const now = this.now;
    b.state = 'lock';
    M.Body.setVelocity(b.body, { x: 0, y: 0 });
    M.Body.setStatic(b.body, true);
    M.Body.setPosition(b.body, { x: T.lockHold[0], y: T.lockHold[1] });
    b.body.collisionFilter.mask = 0;
    this.lockLit = false;
    this.lockCount++;
    this.shot();
    this.award(SCORE.lock, 126, 186, true);
    this.skillLive = false;
    if (!this.balls.some(x => x !== b && x.state === 'table')) this.view.focus(T.lockHold[0], T.lockHold[1] + 10, this.lockCount >= 3 ? 2450 : 1400, 1);
    if (this.lockCount >= 3) {
      b.holdUntil = now + 2600; b.release = true;
      this.dmd('KRAKEN RELEASED', '3-BALL MULTIBALL', 'red', 2600, 3);
      Sound.sfx('release');
      this.impact(126, 206, 3, COL.red);
      this.thrash = 1;
    } else {
      b.holdUntil = now + 1500;
      this.dmd('KRAKEN LOCKED', 'LOCK ' + this.lockCount + ' OF 3', 'sea', 1700, 2);
      Sound.sfx('lock');
      this.impact(126, 206, 2, COL.sea);
      this.tentFlashRed = 1;
    }
  }

  ejectLock(b) {
    M.Body.setStatic(b.body, false);
    b.body.collisionFilter.mask = 0xFFFFFFFF;
    M.Body.setPosition(b.body, { x: T.lockHold[0], y: 214 });
    M.Body.setVelocity(b.body, { x: pxs(rand(-70, 70)), y: pxs(480) });
    b.state = 'table';
    this.ejectGraceUntil = this.now + 450;
    if (b.release) {
      b.release = false;
      this.multiball = true; this.lockCount = 0; this.mbJackpots = 0; this.jackpotAdd = 0;
      this.jackpotLit = true;
      this.serveQueue += 2;
      this.ballSaveUntil = this.now + MB_SAVE_MS;
    }
  }

  endMultiball() {
    this.multiball = false;
    this.jackpotLit = false; this.rampDone = false; this.orbitDone = false;
    this.dmd('PRESSURE HOLDING', this.mbJackpots + (this.mbJackpots === 1 ? ' JACKPOT' : ' JACKPOTS'), 'sea', 1800, 2);
  }

  enterRamp(b) {
    if (b.body.velocity.y > -pxs(150)) return;  // only a ball moving up the ramp mouth
    b.state = 'ramp'; b.rampT = 0;
    M.Body.setVelocity(b.body, { x: 0, y: 0 });
    M.Body.setStatic(b.body, true);
    b.body.collisionFilter.mask = 0;
    this.skillLive = false;
    Sound.sfx('ramp');
  }
  exitRamp(b) {
    M.Body.setStatic(b.body, false);
    b.body.collisionFilter.mask = 0xFFFFFFFF;
    M.Body.setVelocity(b.body, { x: 0, y: pxs(240) });
    b.state = 'table';
    this.shot();
    this.award(SCORE.ramp, 330, 540, true);
    this.rampDone = true;
    this.dmd('TEMPEST RAMP', '+' + fmt(SCORE.ramp * this.mult), 'cyan', 1300, 1);
    this.impact(T.ramp[T.ramp.length - 1][0], T.ramp[T.ramp.length - 1][1], 1, COL.cyan);
    this.checkAbyssOpen();
  }

  hitOrbit(side, b) {
    const now = this.now, vy = b.body.velocity.y;
    if (vy < 0) { this.orbitArm = { side, t: now, ball: b }; return; }
    if (side === 'L' && this.skillLive) {
      this.skillLive = false;
      this.shot();
      this.award(SCORE.skill, 60, 300, true);
      this.dmd('SKILL SHOT', 'TRENCH LANE +' + fmt(SCORE.skill * this.mult), 'sea', 1700, 2);
      this.ring(T.orbitL[0], T.orbitL[1], COL.sea, 2, 600);
      Sound.sfx('ping');
      return;
    }
    const arm = this.orbitArm;
    if (arm && arm.side !== side && arm.ball === b && now - arm.t < 3500) {
      this.orbitArm = null;
      this.shot();
      this.award(SCORE.orbit, side === 'L' ? 70 : 340, 330, true);
      this.orbitDone = true;
      this.dmd('SONAR ORBIT', '+' + fmt(SCORE.orbit * this.mult), 'cyan', 1300, 1);
      this.ring(T.station[0], T.station[1], COL.cyan, 4, 1000);
      Sound.sfx('ping');
      this.checkAbyssOpen();
    }
  }

  checkAbyssOpen() {
    if (this.multiball || this.jackpotLit || !this.rampDone || !this.orbitDone) return;
    this.jackpotLit = true;
    this.dmd('ABYSS OPEN', 'SHOOT THE CENTER TARGET', 'red', 1900, 2);
    Sound.sfx('alarm');
  }

  hitInlane(side) {
    this.inlanes[side] = true;
    this.award(SCORE.rollover, 0, 0, false);
    Sound.sfx('rollover');
    if (this.inlanes.L && this.inlanes.R) {
      this.inlanes.L = this.inlanes.R = false;
      this.award(SCORE.laneComplete, 204, 640, true);
      if (!this.kickbackLit) { this.kickbackLit = true; this.dmd('DIVE GATE LIT', 'LEFT OUTLANE SAVE ARMED', 'amber', 1500, 1); }
      else this.dmd('RETURN LANES', '+' + fmt(SCORE.laneComplete * this.mult), 'cyan', 1100, 1);
    }
  }

  hitKickback(b) {
    if (!this.kickbackLit || b.body.velocity.y <= 0) return;
    this.kickbackLit = false;
    this.kicks.push({ ball: b, vx: 40, vy: -KICKBACK });
    this.dmd('BALL SAVED', 'DIVE GATE KICKBACK', 'amber', 1600, 3);
    this.impact(T.kick[0], T.kick[1], 2, COL.amber);
    Sound.sfx('kick');
  }

  /* ============================== MAIN LOOP =============================== */
  frame(t) {
    requestAnimationFrame((tt) => this.frame(tt));
    let dt = t - this.last;
    this.last = t;
    if (!(dt >= 0)) dt = 16.7;
    dt = Math.min(dt, 100);
    if (this.halt) return;
    this.tick(dt);
    this.watchPerf(dt);
    if (!this.booted) { this.booted = true; const b = document.getElementById('boot'); if (b) b.classList.add('hidden'); }
  }

  tick(dt) {
    if (!this.paused) {
      this.now += dt;
      if (this.charging === 'key') this.pull = Math.min(1, this.pull + dt / 850);
      M.Body.setPosition(this.laneFloor, { x: T.laneX, y: 788 + this.pull * 18 });
      this.acc += dt;
      let n = 0;
      while (this.acc >= STEP_MS && n < 14) { this.physicsStep(); this.acc -= STEP_MS; n++; }
      if (n >= 14) this.acc = 0;
      this.rules(dt);
      this.runTimers();
    }
    let fastest = 0;
    for (const b of this.balls) if (b.state === 'table') fastest = Math.max(fastest, this.speedOf(b));
    Sound.rumbleSet(this.mode === 'play' && !this.paused ? Math.min(0.11, fastest / MAX_SPEED * 0.11) : 0);
    this.view.update(this.paused ? 0 : dt, this.now);
    this.dmdC.update(this.now);
  }

  physicsStep() {
    // one-way gate: pass-through while a ball is below it in the shooter lane
    let pass = false;
    for (let i = 0; i < this.balls.length; i++) {
      const b = this.balls[i];
      if (b.state !== 'table' && b.state !== 'lane') continue;
      const p = b.body.position;
      if (p.x > 409 && p.y > 254 - 0.694 * (p.x - 398) - 2) { pass = true; break; }
    }
    this.setSolid(this.gate, !pass);
    // tentacle bar over the lock
    const open = !this.multiball && (this.lockLit || this.now < this.ejectGraceUntil || this.balls.some(b => b.state === 'lock'));
    this.setSolid(this.bar, !open);

    for (const f of this.flippers) {
      const target = f.pressed ? f.up : f.rest;
      const maxStep = (f.pressed ? FLIP.upSpeed : FLIP.downSpeed) * STEP_MS / 1000;
      M.Body.setAngularVelocity(f.body, clamp(target - f.body.angle, -maxStep, maxStep));
    }
    if (this.kicks.length) {
      for (const k of this.kicks) if (k.ball.state === 'table' && this.balls.includes(k.ball)) M.Body.setVelocity(k.ball.body, { x: pxs(k.vx), y: pxs(k.vy) });
      this.kicks.length = 0;
    }
    M.Engine.update(this.engine, STEP_MS);
    for (const f of this.flippers) {
      const lo = Math.min(f.rest, f.up), hi = Math.max(f.rest, f.up);
      if (f.body.angle < lo - 0.001) { M.Body.setAngle(f.body, lo); M.Body.setAngularVelocity(f.body, 0); }
      else if (f.body.angle > hi + 0.001) { M.Body.setAngle(f.body, hi); M.Body.setAngularVelocity(f.body, 0); }
    }
    const cap = pxs(MAX_SPEED);
    for (const b of this.balls) {
      if (b.state !== 'table') continue;
      let bd = b.body;
      if (!isFinite(bd.velocity.x + bd.velocity.y + bd.position.x + bd.position.y + bd.angularVelocity)) { this.repairBall(b); bd = b.body; }
      else this.lastGood.set(b, { x: bd.position.x, y: bd.position.y, vx: bd.velocity.x, vy: bd.velocity.y });
      const v = bd.velocity, sp = Math.hypot(v.x, v.y);
      if (sp > cap) M.Body.setVelocity(bd, { x: v.x * cap / sp, y: v.y * cap / sp });
    }
  }

  // failsafe: a rare solver hiccup can leave NaN in a body; rebuild the ball in place instead of losing it
  repairBall(b) {
    this.repairs = (this.repairs || 0) + 1;
    const old = b.body;
    const ok = isFinite(old.position.x + old.position.y);
    const lv = this.lastGood.get(b);
    const x = ok ? old.position.x : lv ? lv.x : T.laneX, y = ok ? old.position.y : lv ? lv.y : T.laneRest;
    M.Composite.remove(this.world, old);
    const body = this.add(M.Bodies.circle(x, y, BALL_R, BALL_OPTS));
    body.ballRef = b;
    b.body = body;
    if (lv) M.Body.setVelocity(body, { x: clamp(lv.vx, -3, 3), y: clamp(lv.vy, -3, 3) });
  }

  rules(dt) {
    const now = this.now;
    if (this.mode === 'play' && this.serveQueue > 0 && !this.balls.some(b => b.state === 'lane')) { this.serveQueue--; this.serveBall(true); }
    for (const b of this.balls.slice()) {
      const p = b.body.position;
      if (b.state === 'table') {
        if (p.y > TH + 24) { this.drain(b); continue; }
        if (p.x < -40 || p.x > W + 40 || p.y < -60) { this.removeBall(b); if (this.mode === 'play') this.serveQueue++; continue; }
        const sp = this.speedOf(b);
        if (p.x > 412 && p.y > 730 && sp < 40) { this.toLane(b); continue; }
        b.still = sp < 14 ? b.still + dt : 0;
        // real balls never balance on a post: a tiny, invisible jitter breaks perfect equilibria
        if (b.still > 700 && Math.floor(b.still / 350) !== Math.floor((b.still - dt) / 350)) {
          M.Body.setVelocity(b.body, { x: b.body.velocity.x + pxs(rand(-14, 14)), y: b.body.velocity.y });
        }
        if (b.still > 3000 && !this.flippers.some(f => f.pressed)) {
          M.Body.setVelocity(b.body, { x: pxs(rand(-150, 150)), y: pxs(-420) });
          b.still = 0;
        }
      } else if (b.state === 'ramp') {
        b.rampT += dt / RAMP_MS;
        const t = Math.min(1, b.rampT);
        M.Body.setPosition(b.body, pathAt(RAMP_PATH, RAMP_PATH.total * (0.62 * t + 0.38 * t * t)));
        if (t >= 1) this.exitRamp(b);
      } else if (b.state === 'lock') {
        if (now >= b.holdUntil) this.ejectLock(b);
      } else if (b.state === 'lane') {
        if (b.autoAt && now >= b.autoAt && this.mode === 'play') this.launch(b, 0.9, false);
      }
    }
    if (this.combo > 0 && now - this.lastShot > COMBO_MS) { this.combo = 0; this.mult = 1; }
    if (this.superUntil && now > this.superUntil) this.superUntil = 0;
    if (this.skillLive && now > this.skillUntil) this.skillLive = false;
  }
}

/* ================================= BOOT =================================== */

Sound.init();
UI.init();
UI.show('start');

function webglOK() {
  try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); }
  catch (e) { return false; }
}

function boot() {
  if (window.__abyssBooted) return;
  window.__abyssBooted = true;
  const bootEl = document.getElementById('boot');
  if (!window.THREE || !window.Matter || !webglOK()) {
    bootEl.innerHTML = '<p>3D GRAPHICS UNAVAILABLE ON THIS DEVICE</p>';
    return;
  }
  try { new Game(); } catch (e) {
    console.error(e);
    bootEl.classList.remove('hidden');
    bootEl.innerHTML = '<p>COULD NOT START THE TABLE</p>';
  }
}
// wait (briefly) for the fonts so canvas-drawn labels use them
const fontsReady = document.fonts && document.fonts.load
  ? Promise.all([document.fonts.load('40px VT323'), document.fonts.load('700 12px "Barlow Condensed"'), document.fonts.load('600 12px "Barlow Condensed"'), document.fonts.load('12px Michroma')]).catch(() => {})
  : Promise.resolve();
Promise.race([fontsReady, new Promise(r => setTimeout(r, 2500))]).then(boot);
