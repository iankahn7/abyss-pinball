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

/* ============================ BRAND ASSETS ================================
   Waterjon wordmark + trident (white on transparent), inlined so the game
   stays three files. Edit assets/*.png and re-run build.py to swap them.   */
const BRAND = { logo: new Image(), trident: new Image(), _tint: {} };
BRAND.logo.src = 'data:image/png;base64,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';
BRAND.trident.src = 'data:image/png;base64,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';
BRAND.ready = Promise.all([BRAND.logo, BRAND.trident].map(im => im.decode ? im.decode().catch(() => {}) : new Promise(r => { im.onload = im.onerror = r; })));
/* a tinted copy of a brand image (the art is white), cached by colour */
function brandTint(name, color) {
  const key = name + color;
  if (BRAND._tint[key]) return BRAND._tint[key];
  const im = BRAND[name], cv = document.createElement('canvas');
  cv.width = im.naturalWidth || 1; cv.height = im.naturalHeight || 1;
  const c = cv.getContext('2d');
  c.drawImage(im, 0, 0); c.globalCompositeOperation = 'source-in'; c.fillStyle = color; c.fillRect(0, 0, cv.width, cv.height);
  return (BRAND._tint[key] = cv);
}
/* draw the wordmark or trident centred at (x, y) with the given height */
function drawBrand(c, name, x, y, h, color, alpha) {
  const im = BRAND[name]; if (!im.naturalWidth) return;
  const w = h * im.naturalWidth / im.naturalHeight;
  c.save(); c.globalAlpha = alpha == null ? 1 : alpha;
  c.drawImage(color ? brandTint(name, color) : im, x - w / 2, y - h / 2, w, h);
  c.restore();
}

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
    // the Waterjon wordmark, flanked by tridents
    c.save(); c.shadowColor = '#54E6DE'; c.shadowBlur = 16;
    drawBrand(c, 'logo', 250, 84, 66, '#c4f8f1', 1);
    drawBrand(c, 'trident', 112, 88, 62, '#8fe8c6', 0.85);
    drawBrand(c, 'trident', 388, 88, 62, '#8fe8c6', 0.85);
    c.restore();
    c.fillStyle = 'rgba(216,247,242,0.7)'; c.font = '600 13px ' + F.ui;
    spaced(c, 'ABYSS PINBALL  //  TABLE 01', 250, 130, 4);
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

    brandPlate(c);

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
    drawBrand(c, 'trident', cx, cy + 2, 26, '#54E6DE', 0.4);
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
/* printed title plate between the slingshots (+ a faint trident watermark mid-field) */
function brandPlate(c) {
  drawBrand(c, 'trident', 140, 452, 130, '#54E6DE', 0.13);
  c.save(); c.shadowColor = 'rgba(84,230,222,0.8)'; c.shadowBlur = 10;
  drawBrand(c, 'logo', 205, 590, 36, '#8fe8c6', 0.8);
  drawBrand(c, 'trident', 128, 592, 32, '#8fe8c6', 0.5);
  drawBrand(c, 'trident', 282, 592, 32, '#8fe8c6', 0.5);
  c.restore();
  c.fillStyle = 'rgba(216,247,242,0.36)'; c.font = '600 7px ' + F.ui;
  spaced(c, 'ABYSS PINBALL  //  TABLE 01', 205, 614, 2.2);
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
      if (st.main === 'WATERJON') {                       // attract mode: the real wordmark
        c.save(); c.shadowColor = HEX.cyan; c.shadowBlur = 6 * k / 2;
        drawBrand(c, 'logo', 225, 50, 60, HEX.cyan, 1);
        c.restore();
      } else txt(st.main, 225, 53, 52, 'center', 'middle', HEX.cyan);
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

/* brand art in the HTML (start screen, favicon) comes from the inlined images */
document.querySelectorAll('img[data-brand]').forEach(im => { im.src = BRAND[im.dataset.brand].src; });
(function () {
  const l = document.querySelector('link[rel~="icon"]') || document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'icon' }));
  l.href = BRAND.trident.src;
})();
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
const brandReady = BRAND.ready;
Promise.race([Promise.all([fontsReady, brandReady]), new Promise(r => setTimeout(r, 2500))]).then(boot);
