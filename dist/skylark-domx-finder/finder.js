/**
 * skylark-domx-finder - The skylark finder library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder"],function(e,r,n,t){var u={},s=Array.prototype.filter,o=Array.prototype.slice,a=n.matchesSelector;(function(){var e,r,n,t,i,u={},s={},o=/\\/g,a=function(n,i){if(null==n)return null;if(!0===n.Slick)return n;n=(""+n).replace(/^\s+|\s+$/g,"");var o=(t=!!i)?s:u;if(o[n])return o[n];for(e={Slick:!0,expressions:[],raw:n,reverse:function(){return a(this.raw,!0)}},r=-1;n!=(n=n.replace(p,d)););return e.length=e.expressions.length,o[e.raw]=t?l(e):e},c=function(e){return"!"===e?" ":" "===e?"!":/^!/.test(e)?e.replace(/^!/,""):"!"+e},l=function(e){for(var r=e.expressions,n=0;n<r.length;n++){for(var t=r[n],i={parts:[],tag:"*",combinator:c(t[0].combinator)},u=0;u<t.length;u++){var s=t[u];s.reverseCombinator||(s.reverseCombinator=" "),s.combinator=s.reverseCombinator,delete s.reverseCombinator}t.reverse().push(i)}return e},f=(i=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(i,"\\")}),p=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+f(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));function d(i,u,s,a,l,p,d,b,h,v,g,k,y,m,x,S){if((u||-1===r)&&(e.expressions[++r]=[],n=-1,u))return"";if(s||a||-1===n){s=s||" ";var w=e.expressions[r];t&&w[n]&&(w[n].reverseCombinator=c(s)),w[++n]={combinator:s,tag:"*"}}var E=e.expressions[r][n];if(l)E.tag=l.replace(o,"");else if(p)E.id=p.replace(o,"");else if(d)d=d.replace(o,""),E.classList||(E.classList=[]),E.classes||(E.classes=[]),E.classList.push(d),E.classes.push({value:d,regexp:new RegExp("(^|\\s)"+f(d)+"(\\s|$)")});else if(y)S=(S=S||x)?S.replace(o,""):null,E.pseudos||(E.pseudos=[]),E.pseudos.push({key:y.replace(o,""),value:S,type:1==k.length?"class":"element"});else if(b){var A,$;switch(b=b.replace(o,""),g=(g||"").replace(o,""),h){case"^=":$=new RegExp("^"+f(g));break;case"$=":$=new RegExp(f(g)+"$");break;case"~=":$=new RegExp("(^|\\s)"+f(g)+"(\\s|$)");break;case"|=":$=new RegExp("^"+f(g)+"(-|$)");break;case"=":A=function(e){return g==e};break;case"*=":A=function(e){return e&&e.indexOf(g)>-1};break;case"!=":A=function(e){return g!=e};break;default:A=function(e){return!!e}}""==g&&/^[*$^]=$/.test(h)&&(A=function(){return!1}),A||(A=function(e){return e&&$.test(e)}),E.attributes||(E.attributes=[]),E.attributes.push({key:b,operator:h,value:g,test:A})}return""}var b=this.Slick||{};b.parse=function(e){return a(e)},b.escapeRegExp=f,this.Slick||(this.Slick=b)}).apply(u);var c=/^(?:input|select|textarea|button)$/i,l=/^h\d$/i;o=Array.prototype.slice;u.parseSelector=u.Slick.parse;var f=u.pseudos={button:function(e){var r=e.nodeName.toLowerCase();return"input"===r&&"button"===e.type||"button"===r},checked:function(e){return!!e.checked},contains:function(e,r,n,t){if($(this).text().indexOf(t)>-1)return this},disabled:function(e){return!!e.disabled},enabled:function(e){return!e.disabled},eq:function(e,r,n,t){return r==t},even:function(e,r,n,t){return r%2==0},focus:function(e){return document.activeElement===e&&(e.href||e.type||e.tabindex)},focusable:function(e){return t.focusable(e,null!=e.tabindex)},first:function(e,r){return 0===r},gt:function(e,r,n,t){return r>t},has:function(e,r,n,t){return k(e,t)},header:function(e){return l.test(e.nodeName)},hidden:function(e){return!u.pseudos.visible(e)},input:function(e){return c.test(e.nodeName)},last:function(e,r,n){return r===n.length-1},lt:function(e,r,n,t){return r<t},not:function(e,r,n,t){return!x(e,t)},odd:function(e,r,n,t){return r%2==1},parent:function(e){return!!e.parentElement},selected:function(e){return!!e.selected},tabbable:function(e){var r=e.tabindex,n=null!=r;return(!n||r>=0)&&t.focusable(element,n)},text:function(e){return"text"===e.type},visible:function(e){return e.offsetWidth&&e.offsetWidth},empty:function(e){return!e.hasChildNodes()}};function p(e){return function(r){return"input"===r.nodeName.toLowerCase()&&r.type===e}}function d(e){return function(r){var n=r.nodeName.toLowerCase();return("input"===n||"button"===n)&&r.type===e}}for(i in["first","eq","last"].forEach(function(e){f[e].isArrayFilter=!0}),f.nth=f.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})f[i]=p(i);for(i in{submit:!0,reset:!0})f[i]=d(i);function b(e,n,t){for(var i=[],u=t&&r.isString(t);(e=e.parentElement)&&9!==e.nodeType;){if(t)if(u){if(x(e,t))break}else if(r.isArrayLike(t)){if(r.inArray(e,t)>-1)break}else if(e==t)break;n&&!x(e,n)||i.push(e)}return i}function h(e,r){for(var n=e.childNodes,t=[],i=0;i<n.length;i++){1==(e=n[i]).nodeType&&t.push(e)}return r&&(t=u.filter(t,r)),t}function v(e,r){try{return o.call(e.querySelectorAll(r))}catch(e){}return u.query(e,r)}function g(e,r){try{return e.querySelector(r)}catch(e){}var n=u.query(e,r);return n.length>0?n[0]:null}function k(e,r){return r||(r=e,e=document.body),x(e,r)?e:g(e,r)}function y(e,r,n){for(var t=e.childNodes[0];t;){if(1==t.nodeType){if(!r||x(t,r))return t;if(n)break}t=t.nextSibling}return null}function m(e,r,n){for(var t=e.childNodes,i=t[t.length-1];i;){if(1==i.nodeType){if(!r||x(i,r))return i;if(n)break}i=i.previousSibling}return null}function x(e,n){if(!n||!e||1!==e.nodeType)return!1;if(r.isString(n)){try{return a.call(e,n.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'))}catch(e){}return u.match(e,n)}return r.isArrayLike(n)?r.inArray(e,n)>-1:r.isPlainObject(n)?u.check(e,n):e===n}function S(e,r,n){for(var t=e.nextSibling;t;){if(1==t.nodeType){if(!r||x(t,r))return t;if(n)break}t=t.nextSibling}return null}function w(e,r){for(var n=e.nextSibling,t=[];n;)1==n.nodeType&&(r&&!x(n,r)||t.push(n)),n=n.nextSibling;return t}function E(e,r){var n=e.parentElement;return!n||r&&!x(n,r)?null:n}function A(e,r,n){for(var t=e.previousSibling;t;){if(1==t.nodeType){if(!r||x(t,r))return t;if(n)break}t=t.previousSibling}return null}function C(e,r){for(var n=e.previousSibling,t=[];n;)1==n.nodeType&&(r&&!x(n,r)||t.push(n)),n=n.previousSibling;return t}function N(e,r){for(var n=e.parentElement.firstChild,t=[];n;)1==n.nodeType&&n!==e&&(r&&!x(n,r)||t.push(n)),n=n.nextSibling;return t}u.divide=function(e){var r,n,t,i,u,s="",o=[];if((n=e.id)&&(s+="#"+n),t=e.classes)for(var a=t.length;a--;)s+="."+t[a].value;if(i=e.attributes)for(a=0;a<i.length;a++)i[a].operator?s+="["+i[a].key+i[a].operator+JSON.stringify(i[a].value)+"]":s+="["+i[a].key+"]";if(u=e.pseudos)for(a=u.length;a--;)part=u[a],this.pseudos[part.key]?o.push(part):void 0!==part.value&&(s+=":"+part.key+"("+JSON.stringify(part));return(r=e.tag)&&"*"!==r&&(s=r.toUpperCase()+s),s||(s="*"),{nativeSelector:s,customPseudos:o}},u.check=function(e,r,n,t,i){var u,s,o,c,l,f,p,d,b;if(!i){if(u=r.tag){var h=e.nodeName.toUpperCase();if("*"==u){if(h<"@")return!1}else if(h!=(u||"").toUpperCase())return!1}if((s=r.id)&&e.getAttribute("id")!=s)return!1;if(o=r.classes)for(f=o.length;f--;)if(!(d=e.getAttribute("class"))||!o[f].regexp.test(d))return!1;if(c=r.attributes)for(f=c.length;f--;)if((p=c[f]).operator?!p.test(e.getAttribute(p.key)):!e.hasAttribute(p.key))return!1}if(l=r.pseudos)for(f=l.length;f--;)if(p=l[f],b=this.pseudos[p.key]){if((i&&b.isArrayFilter||!i&&!b.isArrayFilter)&&!b(e,n,t,p.value))return!1}else if(!i&&!a.call(e,p.key))return!1;return!0},u.match=function(e,n){var t;if(!(t=r.isString(n)?u.Slick.parse(n):n))return!0;var i,s,o=t.expressions,a=0;for(i=0;s=o[i];i++)if(1==s.length){var c=s[0];if(this.check(e,c))return!0;a++}if(a==t.length)return!1;var l,f=this.query(document,t);for(i=0;l=f[i++];)if(l===e)return!0;return!1},u.filterSingle=function(e,r){var n=s.call(e,function(n,t){return u.check(n,r,t,e,!1)});return n=s.call(n,function(e,t){return u.check(e,r,t,n,!0)})},u.filter=function(e,n){if(!r.isString(n))return u.filterSingle(e,n);var t,i,s=u.Slick.parse(n).expressions,o=[];for(t=0;i=s[t];t++){if(1!=i.length)throw new Error("not supported selector:"+n);var a=i[0],c=u.filterSingle(e,a);o=r.uniq(o.concat(c))}return o},u.combine=function(e,r){var n,t=r,i=[];switch(r.combinator){case">":i=h(e,t);break;case"+":(n=S(e,t,!0))&&i.push(n);break;case"^":(n=y(e,t,!0))&&i.push(n);break;case"~":i=w(e,t);break;case"++":var a=A(e,t,!0),c=S(e,t,!0);a&&i.push(a),c&&i.push(c);break;case"~~":i=N(e,t);break;case"!":i=b(e,t);break;case"!>":(n=E(e,t))&&i.push(n);break;case"!+":i=A(e,t,!0);break;case"!^":(n=m(e,t,!0))&&i.push(n);break;case"!~":i=C(e,t);break;default:var l=this.divide(r);if(i=o.call(e.querySelectorAll(l.nativeSelector)),l.customPseudos)for(var f=l.customPseudos.length-1;f>=0;f--)i=s.call(i,function(e,r){return u.check(e,{pseudos:[l.customPseudos[f]]},r,i,!1)}),i=s.call(i,function(e,r){return u.check(e,{pseudos:[l.customPseudos[f]]},r,i,!0)})}return i},u.query=function(e,n,t){for(var i,s,o=[],a=this.Slick.parse(n).expressions,c=0;i=a[c];c++){for(var l,f=[e],p=0;s=i[p];p++)(l=r.map(f,function(e,r){return u.combine(e,s)}))&&(f=l);l&&(o=o.concat(l))}return o};var F=function(){return F};return r.mixin(F,{ancestor:function(e,n,t){for(var i=t&&r.isString(t);e=e.parentElement;){if(x(e,n))return e;if(t)if(i){if(x(e,t))break}else if(e==t)break}return null},ancestors:b,byId:function(e,r){return(r=r||t.doc()).getElementById(e)},children:h,closest:function(e,r){for(;e&&!x(e,r);)e=e.parentElement;return e},descendant:g,descendants:v,find:k,findAll:function(e,r){return r||(r=e,e=document.body),v(e,r)},firstChild:y,index:function(e,n){var t=0;if(!e||!e.parentNode)return-1;for(;e&&(e=e.previousElementSibling);)r.isString(selectors)?x(e,n)&&t++:r.isFunction(selectors)&&selectors(e)&&t++,t++;return t},lastChild:m,matches:x,nextSibling:S,nextSiblings:w,parent:E,previousSibling:A,previousSiblings:C,pseudos:u.pseudos,siblings:N}),e.attach("domx.finder",F)});
//# sourceMappingURL=sourcemaps/finder.js.map
