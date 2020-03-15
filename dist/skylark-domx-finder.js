/**
 * skylark-domx-finder - The skylark finder library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var n=r.define,require=r.require,t="function"==typeof n&&n.amd,u=!t&&"undefined"!=typeof exports;if(!t&&!n){var o={};n=r.define=function(e,r,n){"function"==typeof n?(o[e]={factory:n,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var n=r.split("/"),t=e.split("/");n.pop();for(var i=0;i<t.length;i++)"."!=t[i]&&(".."==t[i]?n.pop():n.push(t[i]));return n.join("/")}(r,e)}),resolved:!1,exports:null},require(e)):o[e]={factory:null,resolved:!0,exports:n}},require=r.require=function(e){if(!o.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=o[e];if(!module.resolved){var n=[];module.deps.forEach(function(e){n.push(require(e))}),module.exports=module.factory.apply(r,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-domx-finder/finder",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder"],function(e,r,n,t){var u={},o=Array.prototype.filter,s=Array.prototype.slice,a=n.matchesSelector;(function(){var e,r,n,t,i,u={},o={},s=/\\/g,a=function(n,i){if(null==n)return null;if(!0===n.Slick)return n;n=(""+n).replace(/^\s+|\s+$/g,"");var s=(t=!!i)?o:u;if(s[n])return s[n];for(e={Slick:!0,expressions:[],raw:n,reverse:function(){return a(this.raw,!0)}},r=-1;n!=(n=n.replace(p,d)););return e.length=e.expressions.length,s[e.raw]=t?f(e):e},c=function(e){return"!"===e?" ":" "===e?"!":/^!/.test(e)?e.replace(/^!/,""):"!"+e},f=function(e){for(var r=e.expressions,n=0;n<r.length;n++){for(var t=r[n],i={parts:[],tag:"*",combinator:c(t[0].combinator)},u=0;u<t.length;u++){var o=t[u];o.reverseCombinator||(o.reverseCombinator=" "),o.combinator=o.reverseCombinator,delete o.reverseCombinator}t.reverse().push(i)}return e},l=(i=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(i,"\\")}),p=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+l(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));function d(i,u,o,a,f,p,d,h,b,v,k,y,g,m,x,S){if((u||-1===r)&&(e.expressions[++r]=[],n=-1,u))return"";if(o||a||-1===n){o=o||" ";var w=e.expressions[r];t&&w[n]&&(w[n].reverseCombinator=c(o)),w[++n]={combinator:o,tag:"*"}}var N=e.expressions[r][n];if(f)N.tag=f.replace(s,"");else if(p)N.id=p.replace(s,"");else if(d)d=d.replace(s,""),N.classList||(N.classList=[]),N.classes||(N.classes=[]),N.classList.push(d),N.classes.push({value:d,regexp:new RegExp("(^|\\s)"+l(d)+"(\\s|$)")});else if(g)S=(S=S||x)?S.replace(s,""):null,N.pseudos||(N.pseudos=[]),N.pseudos.push({key:g.replace(s,""),value:S,type:1==y.length?"class":"element"});else if(h){var A,$;switch(h=h.replace(s,""),k=(k||"").replace(s,""),b){case"^=":$=new RegExp("^"+l(k));break;case"$=":$=new RegExp(l(k)+"$");break;case"~=":$=new RegExp("(^|\\s)"+l(k)+"(\\s|$)");break;case"|=":$=new RegExp("^"+l(k)+"(-|$)");break;case"=":A=function(e){return k==e};break;case"*=":A=function(e){return e&&e.indexOf(k)>-1};break;case"!=":A=function(e){return k!=e};break;default:A=function(e){return!!e}}""==k&&/^[*$^]=$/.test(b)&&(A=function(){return!1}),A||(A=function(e){return e&&$.test(e)}),N.attributes||(N.attributes=[]),N.attributes.push({key:h,operator:b,value:k,test:A})}return""}var h=this.Slick||{};h.parse=function(e){return a(e)},h.escapeRegExp=l,this.Slick||(this.Slick=h)}).apply(u);var c=/^(?:input|select|textarea|button)$/i,f=/^h\d$/i,s=Array.prototype.slice;u.parseSelector=u.Slick.parse;var l=u.pseudos={button:function(e){var r=e.nodeName.toLowerCase();return"input"===r&&"button"===e.type||"button"===r},checked:function(e){return!!e.checked},contains:function(e,r,n,t){if($(this).text().indexOf(t)>-1)return this},disabled:function(e){return!!e.disabled},enabled:function(e){return!e.disabled},eq:function(e,r,n,t){return r==t},even:function(e,r,n,t){return r%2==0},focus:function(e){return document.activeElement===e&&(e.href||e.type||e.tabindex)},focusable:function(e){return t.focusable(e,null!=e.tabindex)},first:function(e,r){return 0===r},gt:function(e,r,n,t){return r>t},has:function(e,r,n,t){return y(e,t)},header:function(e){return f.test(e.nodeName)},hidden:function(e){return!u.pseudos.visible(e)},input:function(e){return c.test(e.nodeName)},last:function(e,r,n){return r===n.length-1},lt:function(e,r,n,t){return r<t},not:function(e,r,n,t){return!x(e,t)},odd:function(e,r,n,t){return r%2==1},parent:function(e){return!!e.parentNode},selected:function(e){return!!e.selected},tabbable:function(e){var r=e.tabindex,n=null!=r;return(!n||r>=0)&&t.focusable(element,n)},text:function(e){return"text"===e.type},visible:function(e){return e.offsetWidth&&e.offsetWidth},empty:function(e){return!e.hasChildNodes()}};function p(e){return function(r){var n=r.nodeName.toLowerCase();return"input"===n&&r.type===e}}function d(e){return function(r){var n=r.nodeName.toLowerCase();return("input"===n||"button"===n)&&r.type===e}}for(i in["first","eq","last"].forEach(function(e){l[e].isArrayFilter=!0}),l.nth=l.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})l[i]=p(i);for(i in{submit:!0,reset:!0})l[i]=d(i);function h(e,n,t){for(var i=[],u=t&&r.isString(t);(e=e.parentNode)&&9!==e.nodeType;){if(t)if(u){if(x(e,t))break}else if(r.isArrayLike(t)){if(r.inArray(e,t)>-1)break}else if(e==t)break;n&&!x(e,n)||i.push(e)}return i}function b(e,r){for(var n=e.childNodes,t=[],i=0;i<n.length;i++){var e=n[i];1==e.nodeType&&t.push(e)}return r&&(t=u.filter(t,r)),t}function v(e,r){try{return s.call(e.querySelectorAll(r))}catch(e){}return u.query(e,r)}function k(e,r){try{return e.querySelector(r)}catch(e){}var n=u.query(e,r);return n.length>0?n[0]:null}function y(e,r){return r||(r=e,e=document.body),x(e,r)?e:k(e,r)}function g(e,r,n){for(var t=e.childNodes,i=t[0];i;){if(1==i.nodeType){if(!r||x(i,r))return i;if(n)break}i=i.nextSibling}return null}function m(e,r,n){for(var t=e.childNodes,i=t[t.length-1];i;){if(1==i.nodeType){if(!r||x(i,r))return i;if(n)break}i=i.previousSibling}return null}function x(e,n){if(!n||!e||1!==e.nodeType)return!1;if(r.isString(n)){try{return a.call(e,n.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'))}catch(e){}return u.match(e,n)}return r.isArrayLike(n)?r.inArray(e,n)>-1:r.isPlainObject(n)?u.check(e,n):e===n}function S(e,r,n){for(var t=e.nextSibling;t;){if(1==t.nodeType){if(!r||x(t,r))return t;if(n)break}t=t.nextSibling}return null}function w(e,r){for(var n=e.nextSibling,t=[];n;)1==n.nodeType&&(r&&!x(n,r)||t.push(n)),n=n.nextSibling;return t}function N(e,r){var n=e.parentNode;return!n||r&&!x(n,r)?null:n}function A(e,r,n){for(var t=e.previousSibling;t;){if(1==t.nodeType){if(!r||x(t,r))return t;if(n)break}t=t.previousSibling}return null}function C(e,r){for(var n=e.previousSibling,t=[];n;)1==n.nodeType&&(r&&!x(n,r)||t.push(n)),n=n.previousSibling;return t}function q(e,r){for(var n=e.parentNode.firstChild,t=[];n;)1==n.nodeType&&n!==e&&(r&&!x(n,r)||t.push(n)),n=n.nextSibling;return t}u.divide=function(e){var r,n,t,i,u,o="",s=[];if((n=e.id)&&(o+="#"+n),t=e.classes)for(var a=t.length;a--;)o+="."+t[a].value;if(i=e.attributes)for(var a=0;a<i.length;a++)i[a].operator?o+="["+i[a].key+i[a].operator+JSON.stringify(i[a].value)+"]":o+="["+i[a].key+"]";if(u=e.pseudos)for(a=u.length;a--;)part=u[a],this.pseudos[part.key]?s.push(part):void 0!==part.value&&(o+=":"+part.key+"("+JSON.stringify(part));return(r=e.tag)&&"*"!==r&&(o=r.toUpperCase()+o),o||(o="*"),{nativeSelector:o,customPseudos:s}},u.check=function(e,r,n,t,i){var u,o,s,c,f,l,p,d,h;if(!i){if(u=r.tag){var b=e.nodeName.toUpperCase();if("*"==u){if(b<"@")return!1}else if(b!=(u||"").toUpperCase())return!1}if((o=r.id)&&e.getAttribute("id")!=o)return!1;if(s=r.classes)for(l=s.length;l--;)if(!(d=e.getAttribute("class"))||!s[l].regexp.test(d))return!1;if(c=r.attributes)for(l=c.length;l--;)if((p=c[l]).operator?!p.test(e.getAttribute(p.key)):!e.hasAttribute(p.key))return!1}if(f=r.pseudos)for(l=f.length;l--;)if(p=f[l],h=this.pseudos[p.key]){if((i&&h.isArrayFilter||!i&&!h.isArrayFilter)&&!h(e,n,t,p.value))return!1}else if(!i&&!a.call(e,p.key))return!1;return!0},u.match=function(e,n){var t;if(!(t=r.isString(n)?u.Slick.parse(n):n))return!0;var i,o,s=t.expressions,a=0;for(i=0;o=s[i];i++)if(1==o.length){var c=o[0];if(this.check(e,c))return!0;a++}if(a==t.length)return!1;var f,l=this.query(document,t);for(i=0;f=l[i++];)if(f===e)return!0;return!1},u.filterSingle=function(e,r){var n=o.call(e,function(n,t){return u.check(n,r,t,e,!1)});return n=o.call(n,function(e,t){return u.check(e,r,t,n,!0)})},u.filter=function(e,n){if(!r.isString(n))return u.filterSingle(e,n);var t,i,o=u.Slick.parse(n).expressions,s=[];for(t=0;i=o[t];t++){if(1!=i.length)throw new Error("not supported selector:"+n);var a=i[0],c=u.filterSingle(e,a);s=r.uniq(s.concat(c))}return s},u.combine=function(e,r){var n,t=r.combinator,i=r,a=[];switch(t){case">":a=b(e,i);break;case"+":(n=S(e,i,!0))&&a.push(n);break;case"^":(n=g(e,i,!0))&&a.push(n);break;case"~":a=w(e,i);break;case"++":var c=A(e,i,!0),f=S(e,i,!0);c&&a.push(c),f&&a.push(f);break;case"~~":a=q(e,i);break;case"!":a=h(e,i);break;case"!>":(n=N(e,i))&&a.push(n);break;case"!+":a=A(e,i,!0);break;case"!^":(n=m(e,i,!0))&&a.push(n);break;case"!~":a=C(e,i);break;default:var l=this.divide(r);if(a=s.call(e.querySelectorAll(l.nativeSelector)),l.customPseudos)for(var p=l.customPseudos.length-1;p>=0;p--)a=o.call(a,function(e,r){return u.check(e,{pseudos:[l.customPseudos[p]]},r,a,!1)}),a=o.call(a,function(e,r){return u.check(e,{pseudos:[l.customPseudos[p]]},r,a,!0)})}return a},u.query=function(e,n,t){for(var i,o,s=this.Slick.parse(n),a=[],c=s.expressions,f=0;i=c[f];f++){for(var l,p=[e],d=0;o=i[d];d++)(l=r.map(p,function(e,r){return u.combine(e,o)}))&&(p=l);l&&(a=a.concat(l))}return a};var E=function(){return E};return r.mixin(E,{ancestor:function(e,n,t){var i=t&&r.isString(t);for(;e=e.parentNode;){if(x(e,n))return e;if(t)if(i){if(x(e,t))break}else if(e==t)break}return null},ancestors:h,byId:function(e,r){return(r=r||t.doc()).getElementById(e)},children:b,closest:function(e,r){for(;e&&!x(e,r);)e=e.parentNode;return e},descendant:k,descendants:v,find:y,findAll:function(e,r){r||(r=e,e=document.body);return v(e,r)},firstChild:g,lastChild:m,matches:x,nextSibling:S,nextSiblings:w,parent:N,previousSibling:A,previousSiblings:C,pseudos:u.pseudos,siblings:q}),e.attach("domx.finder",E)}),e("skylark-domx-finder/main",["./finder"],function(e){return e}),e("skylark-domx-finder",["skylark-domx-finder/main"],function(e){return e})}(n),!t){var s=require("skylark-langx/skylark");u?module.exports=s:r.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-finder.js.map
