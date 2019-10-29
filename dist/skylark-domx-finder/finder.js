/**
 * skylark-domx-finder - The skylark finder library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder"],function(e,r,t,n){var u={},s=Array.prototype.filter,o=Array.prototype.slice,a=t.matchesSelector;(function(){var e,r,t,n,i,u={},s={},o=/\\/g,a=function(t,i){if(null==t)return null;if(!0===t.Slick)return t;t=(""+t).replace(/^\s+|\s+$/g,"");var o=(n=!!i)?s:u;if(o[t])return o[t];for(e={Slick:!0,expressions:[],raw:t,reverse:function(){return a(this.raw,!0)}},r=-1;t!=(t=t.replace(p,d)););return e.length=e.expressions.length,o[e.raw]=n?f(e):e},c=function(e){return"!"===e?" ":" "===e?"!":/^!/.test(e)?e.replace(/^!/,""):"!"+e},f=function(e){for(var r=e.expressions,t=0;t<r.length;t++){for(var n=r[t],i={parts:[],tag:"*",combinator:c(n[0].combinator)},u=0;u<n.length;u++){var s=n[u];s.reverseCombinator||(s.reverseCombinator=" "),s.combinator=s.reverseCombinator,delete s.reverseCombinator}n.reverse().push(i)}return e},l=(i=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(i,"\\")}),p=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+l(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));function d(i,u,s,a,f,p,d,b,h,v,g,k,y,m,x,S){if((u||-1===r)&&(e.expressions[++r]=[],t=-1,u))return"";if(s||a||-1===t){s=s||" ";var w=e.expressions[r];n&&w[t]&&(w[t].reverseCombinator=c(s)),w[++t]={combinator:s,tag:"*"}}var A=e.expressions[r][t];if(f)A.tag=f.replace(o,"");else if(p)A.id=p.replace(o,"");else if(d)d=d.replace(o,""),A.classList||(A.classList=[]),A.classes||(A.classes=[]),A.classList.push(d),A.classes.push({value:d,regexp:new RegExp("(^|\\s)"+l(d)+"(\\s|$)")});else if(y)S=(S=S||x)?S.replace(o,""):null,A.pseudos||(A.pseudos=[]),A.pseudos.push({key:y.replace(o,""),value:S,type:1==k.length?"class":"element"});else if(b){var N,$;switch(b=b.replace(o,""),g=(g||"").replace(o,""),h){case"^=":$=new RegExp("^"+l(g));break;case"$=":$=new RegExp(l(g)+"$");break;case"~=":$=new RegExp("(^|\\s)"+l(g)+"(\\s|$)");break;case"|=":$=new RegExp("^"+l(g)+"(-|$)");break;case"=":N=function(e){return g==e};break;case"*=":N=function(e){return e&&e.indexOf(g)>-1};break;case"!=":N=function(e){return g!=e};break;default:N=function(e){return!!e}}""==g&&/^[*$^]=$/.test(h)&&(N=function(){return!1}),N||(N=function(e){return e&&$.test(e)}),A.attributes||(A.attributes=[]),A.attributes.push({key:b,operator:h,value:g,test:N})}return""}var b=this.Slick||{};b.parse=function(e){return a(e)},b.escapeRegExp=l,this.Slick||(this.Slick=b)}).apply(u);var c=/^(?:input|select|textarea|button)$/i,f=/^h\d$/i;o=Array.prototype.slice;u.parseSelector=u.Slick.parse;var l=u.pseudos={button:function(e){var r=e.nodeName.toLowerCase();return"input"===r&&"button"===e.type||"button"===r},checked:function(e){return!!e.checked},contains:function(e,r,t,n){if($(this).text().indexOf(n)>-1)return this},disabled:function(e){return!!e.disabled},enabled:function(e){return!e.disabled},eq:function(e,r,t,n){return r==n},even:function(e,r,t,n){return r%2==0},focus:function(e){return document.activeElement===e&&(e.href||e.type||e.tabindex)},focusable:function(e){return n.focusable(e,null!=e.tabindex)},first:function(e,r){return 0===r},gt:function(e,r,t,n){return r>n},has:function(e,r,t,n){return k(e,n)},header:function(e){return f.test(e.nodeName)},hidden:function(e){return!u.pseudos.visible(e)},input:function(e){return c.test(e.nodeName)},last:function(e,r,t){return r===t.length-1},lt:function(e,r,t,n){return r<n},not:function(e,r,t,n){return!x(e,n)},odd:function(e,r,t,n){return r%2==1},parent:function(e){return!!e.parentNode},selected:function(e){return!!e.selected},tabbable:function(e){var r=e.tabindex,t=null!=r;return(!t||r>=0)&&n.focusable(element,t)},text:function(e){return"text"===e.type},visible:function(e){return e.offsetWidth&&e.offsetWidth}};function p(e){return function(r){return"input"===r.nodeName.toLowerCase()&&r.type===e}}function d(e){return function(r){var t=r.nodeName.toLowerCase();return("input"===t||"button"===t)&&r.type===e}}for(i in["first","eq","last"].forEach(function(e){l[e].isArrayFilter=!0}),l.nth=l.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})l[i]=p(i);for(i in{submit:!0,reset:!0})l[i]=d(i);function b(e,t,n){for(var i=[],s=n&&r.isString(n);(e=e.parentNode)&&9!==e.nodeType;){if(n)if(s){if(x(e,n))break}else if(r.isArrayLike(n)){if(r.inArray(e,n)>-1)break}else if(e==n)break;i.push(e)}return t&&(i=u.filter(i,t)),i}function h(e,r){for(var t=e.childNodes,n=[],i=0;i<t.length;i++){1==(e=t[i]).nodeType&&n.push(e)}return r&&(n=u.filter(n,r)),n}function v(e,r){try{return o.call(e.querySelectorAll(r))}catch(e){}return u.query(e,r)}function g(e,r){try{return e.querySelector(r)}catch(e){}var t=u.query(e,r);return t.length>0?t[0]:null}function k(e,r){return r||(r=e,e=document.body),x(e,r)?e:g(e,r)}function y(e,r,t){for(var n=e.childNodes[0];n;){if(1==n.nodeType){if(!r||x(n,r))return n;if(t)break}n=n.nextSibling}return null}function m(e,r,t){for(var n=e.childNodes,i=n[n.length-1];i;){if(1==i.nodeType){if(!r||x(i,r))return i;if(t)break}i=i.previousSibling}return null}function x(e,t){if(!t||!e||1!==e.nodeType)return!1;if(r.isString(t)){try{return a.call(e,t.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'))}catch(e){}return u.match(e,t)}return r.isArrayLike(t)?r.inArray(e,t)>-1:r.isPlainObject(t)?u.check(e,t):e===t}function S(e,r,t){for(var n=e.nextSibling;n;){if(1==n.nodeType){if(!r||x(n,r))return n;if(t)break}n=n.nextSibling}return null}function w(e,r){for(var t=e.nextSibling,n=[];t;)1==t.nodeType&&(r&&!x(t,r)||n.push(t)),t=t.nextSibling;return n}function A(e,r){var t=e.parentNode;return!t||r&&!x(t,r)?null:t}function N(e,r,t){for(var n=e.previousSibling;n;){if(1==n.nodeType){if(!r||x(n,r))return n;if(t)break}n=n.previousSibling}return null}function C(e,r){for(var t=e.previousSibling,n=[];t;)1==t.nodeType&&(r&&!x(t,r)||n.push(t)),t=t.previousSibling;return n}function q(e,r){for(var t=e.parentNode.firstChild,n=[];t;)1==t.nodeType&&t!==e&&(r&&!x(t,r)||n.push(t)),t=t.nextSibling;return n}u.divide=function(e){var r,t,n,i,u,s="",o=[];if((t=e.id)&&(s+="#"+t),n=e.classes)for(var a=n.length;a--;)s+="."+n[a].value;if(i=e.attributes)for(a=0;a<i.length;a++)i[a].operator?s+="["+i[a].key+i[a].operator+JSON.stringify(i[a].value)+"]":s+="["+i[a].key+"]";if(u=e.pseudos)for(a=u.length;a--;)part=u[a],this.pseudos[part.key]?o.push(part):void 0!==part.value&&(s+=":"+part.key+"("+JSON.stringify(part));return(r=e.tag)&&"*"!==r&&(s=r.toUpperCase()+s),s||(s="*"),{nativeSelector:s,customPseudos:o}},u.check=function(e,r,t,n,i){var u,s,o,c,f,l,p,d,b;if(!i){if(u=r.tag){var h=e.nodeName.toUpperCase();if("*"==u){if(h<"@")return!1}else if(h!=(u||"").toUpperCase())return!1}if((s=r.id)&&e.getAttribute("id")!=s)return!1;if(o=r.classes)for(l=o.length;l--;)if(!(d=e.getAttribute("class"))||!o[l].regexp.test(d))return!1;if(c=r.attributes)for(l=c.length;l--;)if((p=c[l]).operator?!p.test(e.getAttribute(p.key)):!e.hasAttribute(p.key))return!1}if(f=r.pseudos)for(l=f.length;l--;)if(p=f[l],b=this.pseudos[p.key]){if((i&&b.isArrayFilter||!i&&!b.isArrayFilter)&&!b(e,t,n,p.value))return!1}else if(!i&&!a.call(e,p.key))return!1;return!0},u.match=function(e,t){var n;if(!(n=r.isString(t)?u.Slick.parse(t):t))return!0;var i,s,o=n.expressions,a=0;for(i=0;s=o[i];i++)if(1==s.length){var c=s[0];if(this.check(e,c))return!0;a++}if(a==n.length)return!1;var f,l=this.query(document,n);for(i=0;f=l[i++];)if(f===e)return!0;return!1},u.filterSingle=function(e,r){var t=s.call(e,function(t,n){return u.check(t,r,n,e,!1)});return t=s.call(t,function(e,n){return u.check(e,r,n,t,!0)})},u.filter=function(e,t){if(!r.isString(t))return u.filterSingle(e,t);var n,i,s=u.Slick.parse(t).expressions,o=[];for(n=0;i=s[n];n++){if(1!=i.length)throw new Error("not supported selector:"+t);var a=i[0],c=u.filterSingle(e,a);o=r.uniq(o.concat(c))}return o},u.combine=function(e,r){var t,n=r,i=[];switch(r.combinator){case">":i=h(e,n);break;case"+":(t=S(e,n,!0))&&i.push(t);break;case"^":(t=y(e,n,!0))&&i.push(t);break;case"~":i=w(e,n);break;case"++":var a=N(e,n,!0),c=S(e,n,!0);a&&i.push(a),c&&i.push(c);break;case"~~":i=q(e,n);break;case"!":i=b(e,n);break;case"!>":(t=A(e,n))&&i.push(t);break;case"!+":i=N(e,n,!0);break;case"!^":(t=m(e,n,!0))&&i.push(t);break;case"!~":i=C(e,n);break;default:var f=this.divide(r);if(i=o.call(e.querySelectorAll(f.nativeSelector)),f.customPseudos)for(var l=f.customPseudos.length-1;l>=0;l--)i=s.call(i,function(e,r){return u.check(e,{pseudos:[f.customPseudos[l]]},r,i,!1)}),i=s.call(i,function(e,r){return u.check(e,{pseudos:[f.customPseudos[l]]},r,i,!0)})}return i},u.query=function(e,t,n){for(var i,s,o=[],a=this.Slick.parse(t).expressions,c=0;i=a[c];c++){for(var f,l=[e],p=0;s=i[p];p++)(f=r.map(l,function(e,r){return u.combine(e,s)}))&&(l=f);f&&(o=o.concat(f))}return o};var E=function(){return E};return r.mixin(E,{ancestor:function(e,t,n){for(var i=n&&r.isString(n);e=e.parentNode;){if(x(e,t))return e;if(n)if(i){if(x(e,n))break}else if(e==n)break}return null},ancestors:b,byId:function(e,r){return(r=r||n.doc()).getElementById(e)},children:h,closest:function(e,r){for(;e&&!x(e,r);)e=e.parentNode;return e},descendant:g,descendants:v,find:k,findAll:function(e,r){return r||(r=e,e=document.body),v(e,r)},firstChild:y,lastChild:m,matches:x,nextSibling:S,nextSiblings:w,parent:A,previousSibling:N,previousSiblings:C,pseudos:u.pseudos,siblings:q}),e.attach("domx.finder",E)});
//# sourceMappingURL=sourcemaps/finder.js.map
