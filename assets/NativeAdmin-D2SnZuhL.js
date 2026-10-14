import{r as e,t}from"./public-url-bwu49aTW.js";import{S as n,_ as r,a as i,b as a,c as o,d as s,f as c,g as l,h as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b,v as x,x as S,y as C}from"./main-WaAV8TjA.js";var ee=C(`CircleAlert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),te=C(`LogOut`,[[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}],[`polyline`,{points:`16 17 21 12 16 7`,key:`1gabdz`}],[`line`,{x1:`21`,x2:`9`,y1:`12`,y2:`12`,key:`1uyos4`}]]),ne=C(`Save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),re=C(`Trash2`,[[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6`,key:`4alrt4`}],[`path`,{d:`M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2`,key:`v07s0e`}],[`line`,{x1:`10`,x2:`10`,y1:`11`,y2:`17`,key:`1uufr5`}],[`line`,{x1:`14`,x2:`14`,y1:`11`,y2:`17`,key:`xtxkd`}]]),ie=C(`Upload`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`17 8 12 3 7 8`,key:`t8dd8p`}],[`line`,{x1:`12`,x2:`12`,y1:`3`,y2:`15`,key:`widbto`}]]),w=n(S(),1),T=Symbol.for(`yaml.alias`),E=Symbol.for(`yaml.document`),D=Symbol.for(`yaml.map`),ae=Symbol.for(`yaml.pair`),O=Symbol.for(`yaml.scalar`),k=Symbol.for(`yaml.seq`),A=Symbol.for(`yaml.node.type`),oe=e=>!!e&&typeof e==`object`&&e[A]===T,se=e=>!!e&&typeof e==`object`&&e[A]===E,j=e=>!!e&&typeof e==`object`&&e[A]===D,M=e=>!!e&&typeof e==`object`&&e[A]===ae,N=e=>!!e&&typeof e==`object`&&e[A]===O,P=e=>!!e&&typeof e==`object`&&e[A]===k;function F(e){if(e&&typeof e==`object`)switch(e[A]){case D:case k:return!0}return!1}function I(e){if(e&&typeof e==`object`)switch(e[A]){case T:case D:case O:case k:return!0}return!1}var L=e=>(N(e)||F(e))&&!!e.anchor,R=Symbol(`break visit`),ce=Symbol(`skip children`),le=Symbol(`remove node`);function z(e,t){let n=ue(t);se(e)?B(null,e.contents,n,Object.freeze([e]))===le&&(e.contents=null):B(null,e,n,Object.freeze([]))}z.BREAK=R,z.SKIP=ce,z.REMOVE=le;function B(e,t,n,r){let i=de(e,t,n,r);if(I(i)||M(i))return fe(e,r,i),B(e,i,n,r);if(typeof i!=`symbol`){if(F(t)){r=Object.freeze(r.concat(t));for(let e=0;e<t.items.length;++e){let i=B(e,t.items[e],n,r);if(typeof i==`number`)e=i-1;else if(i===R)return R;else i===le&&(t.items.splice(e,1),--e)}}else if(M(t)){r=Object.freeze(r.concat(t));let e=B(`key`,t.key,n,r);if(e===R)return R;e===le&&(t.key=null);let i=B(`value`,t.value,n,r);if(i===R)return R;i===le&&(t.value=null)}}return i}function ue(e){return typeof e==`object`&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function de(e,t,n,r){if(typeof n==`function`)return n(e,t,r);if(j(t))return n.Map?.(e,t,r);if(P(t))return n.Seq?.(e,t,r);if(M(t))return n.Pair?.(e,t,r);if(N(t))return n.Scalar?.(e,t,r);if(oe(t))return n.Alias?.(e,t,r)}function fe(e,t,n){let r=t[t.length-1];if(F(r))r.items[e]=n;else if(M(r))e===`key`?r.key=n:r.value=n;else if(se(r))r.contents=n;else{let e=oe(r)?`alias`:`scalar`;throw Error(`Cannot replace node with ${e} parent`)}}var pe={"!":`%21`,",":`%2C`,"[":`%5B`,"]":`%5D`,"{":`%7B`,"}":`%7D`},me=e=>e.replace(/[!,[\]{}]/g,e=>pe[e]),he=class e{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},e.defaultYaml,t),this.tags=Object.assign({},e.defaultTags,n)}clone(){let t=new e(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){let t=new e(this.yaml,this.tags);switch(this.yaml.version){case`1.1`:this.atNextDocument=!0;break;case`1.2`:this.atNextDocument=!1,this.yaml={explicit:e.defaultYaml.explicit,version:`1.2`},this.tags=Object.assign({},e.defaultTags)}return t}add(t,n){this.atNextDocument&&=(this.yaml={explicit:e.defaultYaml.explicit,version:`1.1`},this.tags=Object.assign({},e.defaultTags),!1);let r=t.trim().split(/[ \t]+/),i=r.shift();switch(i){case`%TAG`:{if(r.length!==2&&(n(0,`%TAG directive should contain exactly two parts`),r.length<2))return!1;let[e,t]=r;return this.tags[e]=t,!0}case`%YAML`:{if(this.yaml.explicit=!0,r.length!==1)return n(0,`%YAML directive should contain exactly one part`),!1;let[e]=r;if(e===`1.1`||e===`1.2`)return this.yaml.version=e,!0;{let t=/^\d+\.\d+$/.test(e);return n(6,`Unsupported YAML version ${e}`,t),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e===`!`)return`!`;if(e[0]!==`!`)return t(`Not a valid tag: ${e}`),null;if(e[1]===`<`){let n=e.slice(2,-1);return n===`!`||n===`!!`?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==`>`&&t(`Verbatim tags must end with a >`),n)}let[,n,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);let i=this.tags[n];if(i)try{return i+decodeURIComponent(r)}catch(e){return t(String(e)),null}return n===`!`?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+me(e.substring(n.length));return e[0]===`!`?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||`1.2`}`]:[],n=Object.entries(this.tags),r;if(e&&n.length>0&&I(e.contents)){let t={};z(e.contents,(e,n)=>{I(n)&&n.tag&&(t[n.tag]=!0)}),r=Object.keys(t)}else r=[];for(let[i,a]of n)(i!==`!!`||a!==`tag:yaml.org,2002:`)&&(!e||r.some(e=>e.startsWith(a)))&&t.push(`%TAG ${i} ${a}`);return t.join(`
`)}};he.defaultYaml={explicit:!1,version:`1.2`},he.defaultTags={"!!":`tag:yaml.org,2002:`};function ge(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw Error(t)}return!0}function _e(e){let t=new Set;return z(e,{Value(e,n){n.anchor&&t.add(n.anchor)}}),t}function V(e,t){for(let n=1;;++n){let r=`${e}${n}`;if(!t.has(r))return r}}function ve(e,t){let n=[],r=new Map,i=null;return{onAnchor:r=>{n.push(r),i??=_e(e);let a=V(t,i);return i.add(a),a},setAnchors:()=>{for(let e of n){let t=r.get(e);if(typeof t==`object`&&t.anchor&&(N(t.node)||F(t.node)))t.node.anchor=t.anchor;else{let t=Error(`Failed to resolve repeated object (this should not happen)`);throw t.source=e,t}}},sourceObjects:r}}function H(e,t,n,r){if(r&&typeof r==`object`){if(Array.isArray(r))for(let t=0,n=r.length;t<n;++t){let n=r[t],i=H(e,r,String(t),n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}else if(r instanceof Map)for(let t of Array.from(r.keys())){let n=r.get(t),i=H(e,r,t,n);i===void 0?r.delete(t):i!==n&&r.set(t,i)}else if(r instanceof Set)for(let t of Array.from(r)){let n=H(e,r,t,t);n===void 0?r.delete(t):n!==t&&(r.delete(t),r.add(n))}else for(let[t,n]of Object.entries(r)){let i=H(e,r,t,n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}}return e.call(t,n,r)}function U(e,t,n){if(Array.isArray(e))return e.map((e,t)=>U(e,String(t),n));if(e&&typeof e.toJSON==`function`){if(!n||!L(e))return e.toJSON(t,n);let r={aliasCount:0,count:1,res:void 0};n.anchors.set(e,r),n.onCreate=e=>{r.res=e,delete n.onCreate};let i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e==`bigint`&&!n?.keep?Number(e):e}var ye=class{constructor(e){Object.defineProperty(this,A,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:r,reviver:i}={}){if(!se(e))throw TypeError(`A document argument is required`);let a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n==`number`?n:100},o=U(this,``,a);if(typeof r==`function`)for(let{count:e,res:t}of a.anchors.values())r(t,e);return typeof i==`function`?H(i,{"":o},``,o):o}},be=class extends ye{constructor(e){super(T),this.source=e,Object.defineProperty(this,"tag",{set(){throw Error(`Alias nodes cannot have tags`)}})}resolve(e,t){if(t?.maxAliasCount===0)throw ReferenceError(`Alias resolution is disabled`);let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],z(e,{Node:(e,t)=>{(oe(t)||L(t))&&n.push(t)}}),t&&(t.aliasResolveCache=n));let r;for(let e of n){if(e===this)break;e.anchor===this.source&&(r=e)}return r}toJSON(e,t){if(!t)return{source:this.source};let{anchors:n,doc:r,maxAliasCount:i}=t,a=this.resolve(r,t);if(!a){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw ReferenceError(e)}let o=n.get(a);if(o||=(U(a,null,t),n.get(a)),o?.res===void 0)throw ReferenceError(`This should not happen: Alias anchor was not resolved?`);if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=xe(r,a,n)),o.count*o.aliasCount>i))throw ReferenceError(`Excessive alias count indicates a resource exhaustion attack`);return o.res}toString(e,t,n){let r=`*${this.source}`;if(e){if(ge(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw Error(e)}if(e.implicitKey)return`${r} `}return r}};function xe(e,t,n){if(oe(t)){let r=t.resolve(e),i=n&&r&&n.get(r);return i?i.count*i.aliasCount:0}if(F(t)){let r=0;for(let i of t.items){let t=xe(e,i,n);t>r&&(r=t)}return r}if(M(t)){let r=xe(e,t.key,n),i=xe(e,t.value,n);return Math.max(r,i)}return 1}var Se=e=>!e||typeof e!=`function`&&typeof e!=`object`,W=class extends ye{constructor(e){super(O),this.value=e}toJSON(e,t){return t?.keep?this.value:U(this.value,e,t)}toString(){return String(this.value)}};W.BLOCK_FOLDED=`BLOCK_FOLDED`,W.BLOCK_LITERAL=`BLOCK_LITERAL`,W.PLAIN=`PLAIN`,W.QUOTE_DOUBLE=`QUOTE_DOUBLE`,W.QUOTE_SINGLE=`QUOTE_SINGLE`;var Ce=`tag:yaml.org,2002:`;function we(e,t,n){if(t){let e=n.filter(e=>e.tag===t),r=e.find(e=>!e.format)??e[0];if(!r)throw Error(`Tag ${t} not found`);return r}return n.find(t=>t.identify?.(e)&&!t.format)}function Te(e,t,n){if(se(e)&&(e=e.contents),I(e))return e;if(M(e)){let t=n.schema[D].createNode?.(n.schema,null,n);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<`u`&&e instanceof BigInt)&&(e=e.valueOf());let{aliasDuplicateObjects:r,onAnchor:i,onTagObj:a,schema:o,sourceObjects:s}=n,c;if(r&&e&&typeof e==`object`){if(c=s.get(e),c)return c.anchor??(c.anchor=i(e)),new be(c.anchor);c={anchor:null,node:null},s.set(e,c)}t?.startsWith(`!!`)&&(t=Ce+t.slice(2));let l=we(e,t,o.tags);if(!l){if(e&&typeof e.toJSON==`function`&&(e=e.toJSON()),!e||typeof e!=`object`){let t=new W(e);return c&&(c.node=t),t}l=e instanceof Map?o[D]:Symbol.iterator in Object(e)?o[k]:o[D]}a&&(a(l),delete n.onTagObj);let u=l?.createNode?l.createNode(n.schema,e,n):typeof l?.nodeClass?.from==`function`?l.nodeClass.from(n.schema,e,n):new W(e);return t?u.tag=t:l.default||(u.tag=l.tag),c&&(c.node=u),u}function Ee(e,t,n){let r=n;for(let e=t.length-1;e>=0;--e){let n=t[e];if(typeof n==`number`&&Number.isInteger(n)&&n>=0){let e=[];e[n]=r,r=e}else r=new Map([[n,r]])}return Te(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw Error(`This should not happen, please report a bug.`)},schema:e,sourceObjects:new Map})}var De=e=>e==null||typeof e==`object`&&!!e[Symbol.iterator]().next().done,Oe=class extends ye{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>I(t)||M(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(De(e))this.add(t);else{let[n,...r]=e,i=this.get(n,!0);if(F(i))i.addIn(r,t);else if(i===void 0&&this.schema)this.set(n,Ee(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let r=this.get(t,!0);if(F(r))return r.deleteIn(n);throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...r]=e,i=this.get(n,!0);return r.length===0?!t&&N(i)?i.value:i:F(i)?i.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!M(t))return!1;let n=t.value;return n==null||e&&N(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let r=this.get(t,!0);return F(r)?r.hasIn(n):!1}setIn(e,t){let[n,...r]=e;if(r.length===0)this.set(n,t);else{let e=this.get(n,!0);if(F(e))e.setIn(r,t);else if(e===void 0&&this.schema)this.set(n,Ee(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}},ke=e=>e.replace(/^(?!$)(?: $)?/gm,`#`);function G(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}var Ae=(e,t,n)=>e.endsWith(`
`)?G(n,t):n.includes(`
`)?`
`+G(n,t):(e.endsWith(` `)?``:` `)+n,je=`flow`,Me=`block`,Ne=`quoted`;function Pe(e,t,n=`flow`,{indentAtStart:r,lineWidth:i=80,minContentWidth:a=20,onFold:o,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);let c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;let l=[],u={},d=i-t.length;typeof r==`number`&&(r>i-Math.max(2,a)?l.push(0):d=i-r);let f,p,m=!1,h=-1,g=-1,_=-1;n===`block`&&(h=Fe(e,h,t.length),h!==-1&&(d=h+c));for(let r;r=e[h+=1];){if(n===`quoted`&&r===`\\`){switch(g=h,e[h+1]){case`x`:h+=3;break;case`u`:h+=5;break;case`U`:h+=9;break;default:h+=1}_=h}if(r===`
`)n===`block`&&(h=Fe(e,h,t.length)),d=h+t.length+c,f=void 0;else{if(r===` `&&p&&p!==` `&&p!==`
`&&p!==`	`){let t=e[h+1];t&&t!==` `&&t!==`
`&&t!==`	`&&(f=h)}if(h>=d){if(f)l.push(f),d=f+c,f=void 0;else if(n===`quoted`){for(;p===` `||p===`	`;)p=r,r=e[h+=1],m=!0;let t=h>_+1?h-2:g-1;if(u[t])return e;l.push(t),u[t]=!0,d=t+c,f=void 0}else m=!0}}p=r}if(m&&s&&s(),l.length===0)return e;o&&o();let v=e.slice(0,l[0]);for(let r=0;r<l.length;++r){let i=l[r],a=l[r+1]||e.length;i===0?v=`\n${t}${e.slice(0,a)}`:(n===`quoted`&&u[i]&&(v+=`${e[i]}\\`),v+=`\n${t}${e.slice(i+1,a)}`)}return v}function Fe(e,t,n){let r=t,i=t+1,a=e[i];for(;a===` `||a===`	`;)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);r=t,i=t+1,a=e[i]}return r}var Ie=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Le=e=>/^(%|---|\.\.\.)/m.test(e);function Re(e,t,n){if(!t||t<0)return!1;let r=t-n,i=e.length;if(i<=r)return!1;for(let t=0,n=0;t<i;++t)if(e[t]===`
`){if(t-n>r)return!0;if(n=t+1,i-n<=r)return!1}return!0}function ze(e,t){let n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;let{implicitKey:r}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(Le(e)?`  `:``),o=``,s=0;for(let e=0,t=n[e];t;t=n[++e])if(t===` `&&n[e+1]===`\\`&&n[e+2]===`n`&&(o+=n.slice(s,e)+`\\ `,e+=1,s=e,t=`\\`),t===`\\`)switch(n[e+1]){case`u`:{o+=n.slice(s,e);let t=n.substr(e+2,4);switch(t){case`0000`:o+=`\\0`;break;case`0007`:o+=`\\a`;break;case`000b`:o+=`\\v`;break;case`001b`:o+=`\\e`;break;case`0085`:o+=`\\N`;break;case`00a0`:o+=`\\_`;break;case`2028`:o+=`\\L`;break;case`2029`:o+=`\\P`;break;default:t.substr(0,2)===`00`?o+=`\\x`+t.substr(2):o+=n.substr(e,6)}e+=5,s=e+1}break;case`n`:if(r||n[e+2]===`"`||n.length<i)e+=1;else{for(o+=n.slice(s,e)+`

`;n[e+2]===`\\`&&n[e+3]===`n`&&n[e+4]!==`"`;)o+=`
`,e+=2;o+=a,n[e+2]===` `&&(o+=`\\`),e+=1,s=e+1}break;default:e+=1}return o=s?o+n.slice(s):n,r?o:Pe(o,a,Ne,Ie(t,!1))}function Be(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return ze(e,t);let n=t.indent||(Le(e)?`  `:``),r=`'`+e.replace(/'/g,`''`).replace(/\n+/g,`$&\n${n}`)+`'`;return t.implicitKey?r:Pe(r,n,je,Ie(t,!1))}function Ve(e,t){let{singleQuote:n}=t.options,r;if(n===!1)r=ze;else{let t=e.includes(`"`),i=e.includes(`'`);r=t&&!i?Be:i&&!t?ze:n?Be:ze}return r(e,t)}var He;try{He=RegExp(`(^|(?<!
))
+(?!
|$)`,`g`)}catch{He=/\n+(?!\n|$)/g}function Ue({comment:e,type:t,value:n},r,i,a){let{blockQuote:o,commentString:s,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(n))return Ve(n,r);let l=r.indent||(r.forceBlockIndent||Le(n)?`  `:``),u=o===`literal`?!0:o===`folded`||t===W.BLOCK_FOLDED?!1:t===W.BLOCK_LITERAL||!Re(n,c,l.length);if(!n)return u?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){let e=n[f-1];if(e!==`
`&&e!==`	`&&e!==` `)break}let p=n.substring(f),m=p.indexOf(`
`);m===-1?d=`-`:n===p||m!==p.length-1?(d=`+`,a&&a()):d=``,p&&=(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p.replace(He,`$&${l}`));let h=!1,g,_=-1;for(g=0;g<n.length;++g){let e=n[g];if(e===` `)h=!0;else if(e===`
`)_=g;else break}let v=n.substring(0,_<g?_+1:g);v&&=(n=n.substring(v.length),v.replace(/\n+/g,`$&${l}`));let y=(h?l?`2`:`1`:``)+d;if(e&&(y+=` `+s(e.replace(/ ?[\r\n]+/g,` `)),i&&i()),!u){let e=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,`$1$2`).replace(/\n+/g,`$&${l}`),i=!1,a=Ie(r,!0);o!==`folded`&&t!==W.BLOCK_FOLDED&&(a.onOverflow=()=>{i=!0});let s=Pe(`${v}${e}${p}`,l,Me,a);if(!i)return`>${y}\n${l}${s}`}return n=n.replace(/\n+/g,`$&${l}`),`|${y}\n${l}${v}${n}${p}`}function We(e,t,n,r){let{type:i,value:a}=e,{actualString:o,implicitKey:s,indent:c,indentStep:l,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return Ve(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?Ve(a,t):Ue(e,t,n,r);if(!s&&!u&&i!==W.PLAIN&&a.includes(`
`))return Ue(e,t,n,r);if(Le(a)){if(c===``)return t.forceBlockIndent=!0,Ue(e,t,n,r);if(s&&c===l)return Ve(a,t)}let d=a.replace(/\n+/g,`$&\n${c}`);if(o){let e=e=>e.default&&e.tag!==`tag:yaml.org,2002:str`&&e.test?.test(d),{compat:n,tags:r}=t.doc.schema;if(r.some(e)||n?.some(e))return Ve(a,t)}return s?d:Pe(d,c,je,Ie(t,!1))}function Ge(e,t,n,r){let{implicitKey:i,inFlow:a}=t,o=typeof e.value==`string`?e:Object.assign({},e,{value:String(e.value)}),{type:s}=e;s!==W.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(s=W.QUOTE_DOUBLE);let c=e=>{switch(e){case W.BLOCK_FOLDED:case W.BLOCK_LITERAL:return i||a?Ve(o.value,t):Ue(o,t,n,r);case W.QUOTE_DOUBLE:return ze(o.value,t);case W.QUOTE_SINGLE:return Be(o.value,t);case W.PLAIN:return We(o,t,n,r);default:return null}},l=c(s);if(l===null){let{defaultKeyType:e,defaultStringType:n}=t.options,r=i&&e||n;if(l=c(r),l===null)throw Error(`Unsupported default string type ${r}`)}return l}function Ke(e,t){let n=Object.assign({blockQuote:!0,commentString:ke,defaultKeyType:null,defaultStringType:`PLAIN`,directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:`false`,flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:`null`,simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:`true`,verifyAliasOrder:!0},e.schema.toStringOptions,t),r;switch(n.collectionStyle){case`block`:r=!1;break;case`flow`:r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?` `:``,indent:``,indentStep:typeof n.indent==`number`?` `.repeat(n.indent):`  `,inFlow:r,options:n}}function qe(e,t){if(t.tag){let n=e.filter(e=>e.tag===t.tag);if(n.length>0)return n.find(e=>e.format===t.format)??n[0]}let n,r;if(N(t)){r=t.value;let i=e.filter(e=>e.identify?.(r));if(i.length>1){let e=i.filter(e=>e.test);e.length>0&&(i=e)}n=i.find(e=>e.format===t.format)??i.find(e=>!e.format)}else r=t,n=e.find(e=>e.nodeClass&&r instanceof e.nodeClass);if(!n){let e=r?.constructor?.name??(r===null?`null`:typeof r);throw Error(`Tag not resolved for ${e} value`)}return n}function Je(e,t,{anchors:n,doc:r}){if(!r.directives)return``;let i=[],a=(N(e)||F(e))&&e.anchor;a&&ge(a)&&(n.add(a),i.push(`&${a}`));let o=e.tag??(t.default?null:t.tag);return o&&i.push(r.directives.tagString(o)),i.join(` `)}function Ye(e,t,n,r){if(M(e))return e.toString(t,n,r);if(oe(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw TypeError(`Cannot stringify circular structure without alias nodes`);t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i,a=I(e)?e:t.doc.createNode(e,{onTagObj:e=>i=e});i??=qe(t.doc.schema.tags,a);let o=Je(a,i,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);let s=typeof i.stringify==`function`?i.stringify(a,t,n,r):N(a)?Ge(a,t,n,r):a.toString(t,n,r);return o?N(a)||s[0]===`{`||s[0]===`[`?`${o} ${s}`:`${o}\n${t.indent}${s}`:s}function Xe({key:e,value:t},n,r,i){let{allNullValues:a,doc:o,indent:s,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=n,f=I(e)&&e.comment||null;if(d){if(f)throw Error(`With simple keys, key nodes cannot have comments`);if(F(e)||!I(e)&&typeof e==`object`)throw Error(`With simple keys, collection cannot be used as a key value`)}let p=!d&&(!e||f&&t==null&&!n.inFlow||F(e)||(N(e)?e.type===W.BLOCK_FOLDED||e.type===W.BLOCK_LITERAL:typeof e==`object`));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(d||!a),indent:s+c});let m=!1,h=!1,g=Ye(e,n,()=>m=!0,()=>h=!0);if(!p&&!n.inFlow&&g.length>1024){if(d)throw Error(`With simple keys, single line scalar must not span more than 1024 characters`);p=!0}if(n.inFlow){if(a||t==null)return m&&r&&r(),g===``?`?`:p?`? ${g}`:g}else if(a&&!d||t==null&&p)return g=`? ${g}`,f&&!m?g+=Ae(g,n.indent,l(f)):h&&i&&i(),g;m&&(f=null),p?(f&&(g+=Ae(g,n.indent,l(f))),g=`? ${g}\n${s}:`):(g=`${g}:`,f&&(g+=Ae(g,n.indent,l(f))));let _,v,y;I(t)?(_=!!t.spaceBefore,v=t.commentBefore,y=t.comment):(_=!1,v=null,y=null,t&&typeof t==`object`&&(t=o.createNode(t))),n.implicitKey=!1,!p&&!f&&N(t)&&(n.indentAtStart=g.length+1),h=!1,!u&&c.length>=2&&!n.inFlow&&!p&&P(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let b=!1,x=Ye(t,n,()=>b=!0,()=>h=!0),S=` `;if(f||_||v){if(S=_?`
`:``,v){let e=l(v);S+=`\n${G(e,n.indent)}`}x===``&&!n.inFlow?S===`
`&&y&&(S=`

`):S+=`\n${n.indent}`}else if(!p&&F(t)){let e=x[0],r=x.indexOf(`
`),i=r!==-1,a=n.inFlow??t.flow??t.items.length===0;if(i||!a){let t=!1;if(i&&(e===`&`||e===`!`)){let n=x.indexOf(` `);e===`&`&&n!==-1&&n<r&&x[n+1]===`!`&&(n=x.indexOf(` `,n+1)),(n===-1||r<n)&&(t=!0)}t||(S=`\n${n.indent}`)}}else(x===``||x[0]===`
`)&&(S=``);return g+=S+x,n.inFlow?b&&r&&r():y&&!b?g+=Ae(g,n.indent,l(y)):h&&i&&i(),g}function Ze(e,t){(e===`debug`||e===`warn`)&&console.warn(t)}var Qe=`<<`,K={identify:e=>e===Qe||typeof e==`symbol`&&e.description===Qe,default:`key`,tag:`tag:yaml.org,2002:merge`,test:/^<<$/,resolve:()=>Object.assign(new W(Symbol(Qe)),{addToJSMap:et}),stringify:()=>Qe},$e=(e,t)=>(K.identify(t)||N(t)&&(!t.type||t.type===W.PLAIN)&&K.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===K.tag&&e.default);function et(e,t,n){let r=nt(e,n);if(P(r))for(let n of r.items)tt(e,t,n);else if(Array.isArray(r))for(let n of r)tt(e,t,n);else tt(e,t,r)}function tt(e,t,n){let r=nt(e,n);if(!j(r))throw Error(`Merge sources must be maps or map aliases`);let i=r.toJSON(null,e,Map);for(let[e,n]of i)t instanceof Map?t.has(e)||t.set(e,n):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0});return t}function nt(e,t){return e&&oe(t)?t.resolve(e.doc,e):t}function rt(e,t,{key:n,value:r}){if(I(n)&&n.addToJSMap)n.addToJSMap(e,t,r);else if($e(e,n))et(e,t,r);else{let i=U(n,``,e);if(t instanceof Map)t.set(i,U(r,i,e));else if(t instanceof Set)t.add(i);else{let a=it(n,i,e),o=U(r,a,e);a in t?Object.defineProperty(t,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[a]=o}}return t}function it(e,t,n){if(t===null)return``;if(typeof t!=`object`)return String(t);if(I(e)&&n?.doc){let t=Ke(n.doc,{});t.anchors=new Set;for(let e of n.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;let r=e.toString(t);if(!n.mapKeyWarned){let e=JSON.stringify(r);e.length>40&&(e=e.substring(0,36)+`..."`),Ze(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function at(e,t,n){return new q(Te(e,void 0,n),Te(t,void 0,n))}var q=class e{constructor(e,t=null){Object.defineProperty(this,A,{value:ae}),this.key=e,this.value=t}clone(t){let{key:n,value:r}=this;return I(n)&&(n=n.clone(t)),I(r)&&(r=r.clone(t)),new e(n,r)}toJSON(e,t){return rt(t,t?.mapAsMap?new Map:{},this)}toString(e,t,n){return e?.doc?Xe(this,e,t,n):JSON.stringify(this)}};function ot(e,t,n){return(t.inFlow??e.flow?ct:st)(e,t,n)}function st({comment:e,items:t},n,{blockItemPrefix:r,flowChars:i,itemIndent:a,onChompKeep:o,onComment:s}){let{indent:c,options:{commentString:l}}=n,u=Object.assign({},n,{indent:a,type:null}),d=!1,f=[];for(let e=0;e<t.length;++e){let i=t[e],o=null;if(I(i))!d&&i.spaceBefore&&f.push(``),lt(n,f,i.commentBefore,d),i.comment&&(o=i.comment);else if(M(i)){let e=I(i.key)?i.key:null;e&&(!d&&e.spaceBefore&&f.push(``),lt(n,f,e.commentBefore,d))}d=!1;let s=Ye(i,u,()=>o=null,()=>d=!0);o&&(s+=Ae(s,a,l(o))),d&&o&&(d=!1),f.push(r+s)}let p;if(f.length===0)p=i.start+i.end;else{p=f[0];for(let e=1;e<f.length;++e){let t=f[e];p+=t?`\n${c}${t}`:`
`}}return e?(p+=`
`+G(l(e),c),s&&s()):d&&o&&o(),p}function ct({items:e},t,{flowChars:n,itemIndent:r}){let{indent:i,indentStep:a,flowCollectionPadding:o,options:{commentString:s}}=t;r+=a;let c=Object.assign({},t,{indent:r,inFlow:!0,type:null}),l=!1,u=0,d=[];for(let n=0;n<e.length;++n){let i=e[n],a=null;if(I(i))i.spaceBefore&&d.push(``),lt(t,d,i.commentBefore,!1),i.comment&&(a=i.comment);else if(M(i)){let e=I(i.key)?i.key:null;e&&(e.spaceBefore&&d.push(``),lt(t,d,e.commentBefore,!1),e.comment&&(l=!0));let n=I(i.value)?i.value:null;n?(n.comment&&(a=n.comment),n.commentBefore&&(l=!0)):i.value==null&&e?.comment&&(a=e.comment)}a&&(l=!0);let o=Ye(i,c,()=>a=null);l||=d.length>u||o.includes(`
`),n<e.length-1?o+=`,`:t.options.trailingComma&&(t.options.lineWidth>0&&(l||=d.reduce((e,t)=>e+t.length+2,2)+(o.length+2)>t.options.lineWidth),l&&(o+=`,`)),a&&(o+=Ae(o,r,s(a))),d.push(o),u=d.length}let{start:f,end:p}=n;if(d.length===0)return f+p;if(!l){let e=d.reduce((e,t)=>e+t.length+2,2);l=t.options.lineWidth>0&&e>t.options.lineWidth}if(l){let e=f;for(let t of d)e+=t?`\n${a}${i}${t}`:`
`;return`${e}\n${i}${p}`}return`${f}${o}${d.join(` `)}${o}${p}`}function lt({indent:e,options:{commentString:t}},n,r,i){if(r&&i&&(r=r.replace(/^\n+/,``)),r){let i=G(t(r),e);n.push(i.trimStart())}}function ut(e,t){let n=N(t)?t.value:t;for(let r of e)if(M(r)&&(r.key===t||r.key===n||N(r.key)&&r.key.value===n))return r}var J=class extends Oe{static get tagName(){return`tag:yaml.org,2002:map`}constructor(e){super(D,e),this.items=[]}static from(e,t,n){let{keepUndefined:r,replacer:i}=n,a=new this(e),o=(e,o)=>{if(typeof i==`function`)o=i.call(t,e,o);else if(Array.isArray(i)&&!i.includes(e))return;(o!==void 0||r)&&a.items.push(at(e,o,n))};if(t instanceof Map)for(let[e,n]of t)o(e,n);else if(t&&typeof t==`object`)for(let e of Object.keys(t))o(e,t[e]);return typeof e.sortMapEntries==`function`&&a.items.sort(e.sortMapEntries),a}add(e,t){let n;n=M(e)?e:!e||typeof e!=`object`||!(`key`in e)?new q(e,e?.value):new q(e.key,e.value);let r=ut(this.items,n.key),i=this.schema?.sortMapEntries;if(r){if(!t)throw Error(`Key ${n.key} already set`);N(r.value)&&Se(n.value)?r.value.value=n.value:r.value=n.value}else if(i){let e=this.items.findIndex(e=>i(n,e)<0);e===-1?this.items.push(n):this.items.splice(e,0,n)}else this.items.push(n)}delete(e){let t=ut(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let n=ut(this.items,e)?.value;return(!t&&N(n)?n.value:n)??void 0}has(e){return!!ut(this.items,e)}set(e,t){this.add(new q(e,t),!0)}toJSON(e,t,n){let r=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(r);for(let e of this.items)rt(t,r,e);return r}toString(e,t,n){if(!e)return JSON.stringify(this);for(let e of this.items)if(!M(e))throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ot(this,e,{blockItemPrefix:``,flowChars:{start:`{`,end:`}`},itemIndent:e.indent||``,onChompKeep:n,onComment:t})}},dt={collection:`map`,default:!0,nodeClass:J,tag:`tag:yaml.org,2002:map`,resolve(e,t){return j(e)||t(`Expected a mapping for this tag`),e},createNode:(e,t,n)=>J.from(e,t,n)},ft=class extends Oe{static get tagName(){return`tag:yaml.org,2002:seq`}constructor(e){super(k,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=pt(e);return typeof t==`number`&&this.items.splice(t,1).length>0}get(e,t){let n=pt(e);if(typeof n!=`number`)return;let r=this.items[n];return!t&&N(r)?r.value:r}has(e){let t=pt(e);return typeof t==`number`&&t<this.items.length}set(e,t){let n=pt(e);if(typeof n!=`number`)throw Error(`Expected a valid index, not ${e}.`);let r=this.items[n];N(r)&&Se(t)?r.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let r=0;for(let e of this.items)n.push(U(e,String(r++),t));return n}toString(e,t,n){return e?ot(this,e,{blockItemPrefix:`- `,flowChars:{start:`[`,end:`]`},itemIndent:(e.indent||``)+`  `,onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let a of t){if(typeof r==`function`){let n=t instanceof Set?a:String(e++);a=r.call(t,n,a)}i.items.push(Te(a,void 0,n))}}return i}};function pt(e){let t=N(e)?e.value:e;return t&&typeof t==`string`&&(t=Number(t)),typeof t==`number`&&Number.isInteger(t)&&t>=0?t:null}var mt={collection:`seq`,default:!0,nodeClass:ft,tag:`tag:yaml.org,2002:seq`,resolve(e,t){return P(e)||t(`Expected a sequence for this tag`),e},createNode:(e,t,n)=>ft.from(e,t,n)},ht={identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify(e,t,n,r){return t=Object.assign({actualString:!0},t),Ge(e,t,n,r)}},gt={identify:e=>e==null,createNode:()=>new W(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new W(null),stringify:({source:e},t)=>typeof e==`string`&&gt.test.test(e)?e:t.options.nullStr},_t={identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new W(e[0]===`t`||e[0]===`T`),stringify({source:e,value:t},n){return e&&_t.test.test(e)&&t===(e[0]===`t`||e[0]===`T`)?e:t?n.options.trueStr:n.options.falseStr}};function Y({format:e,minFractionDigits:t,tag:n,value:r}){if(typeof r==`bigint`)return String(r);let i=typeof r==`number`?r:Number(r);if(!isFinite(i))return isNaN(i)?`.nan`:i<0?`-.inf`:`.inf`;let a=Object.is(r,-0)?`-0`:JSON.stringify(r);if(!e&&t&&(!n||n===`tag:yaml.org,2002:float`)&&/^-?\d/.test(a)&&!a.includes(`e`)){let e=a.indexOf(`.`);e<0&&(e=a.length,a+=`.`);let n=t-(a.length-e-1);for(;n-->0;)a+=`0`}return a}var vt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:Y},yt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():Y(e)}},bt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){let t=new W(parseFloat(e)),n=e.indexOf(`.`);return n!==-1&&e[e.length-1]===`0`&&(t.minFractionDigits=e.length-n-1),t},stringify:Y},xt=e=>typeof e==`bigint`||Number.isInteger(e),St=(e,t,n,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(t),n);function Ct(e,t,n){let{value:r}=e;return xt(r)&&r>=0?n+r.toString(t):Y(e)}var wt={identify:e=>xt(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^0o[0-7]+$/,resolve:(e,t,n)=>St(e,2,8,n),stringify:e=>Ct(e,8,`0o`)},Tt={identify:xt,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>St(e,0,10,n),stringify:Y},Et={identify:e=>xt(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>St(e,2,16,n),stringify:e=>Ct(e,16,`0x`)},Dt=[dt,mt,ht,gt,_t,wt,Tt,Et,vt,yt,bt];function Ot(e){return typeof e==`bigint`||Number.isInteger(e)}var kt=({value:e})=>JSON.stringify(e),At=[{identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify:kt},{identify:e=>e==null,createNode:()=>new W(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^null$/,resolve:()=>null,stringify:kt},{identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^true$|^false$/,resolve:e=>e===`true`,stringify:kt},{identify:Ot,default:!0,tag:`tag:yaml.org,2002:int`,test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>Ot(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:kt}],jt=[dt,mt].concat(At,{default:!0,tag:``,test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}}),Mt={identify:e=>e instanceof Uint8Array,default:!1,tag:`tag:yaml.org,2002:binary`,resolve(e,t){if(typeof atob==`function`){let t=atob(e.replace(/[\n\r]/g,``)),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}return t(`This environment does not support reading binary tags; either Buffer or atob is required`),e},stringify({comment:e,type:t,value:n},r,i,a){if(!n)return``;let o=n,s;if(typeof btoa==`function`){let e=``;for(let t=0;t<o.length;++t)e+=String.fromCharCode(o[t]);s=btoa(e)}else throw Error(`This environment does not support writing binary tags; either Buffer or btoa is required`);if(t??=W.BLOCK_LITERAL,t!==W.QUOTE_DOUBLE){let e=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),n=Math.ceil(s.length/e),i=Array(n);for(let t=0,r=0;t<n;++t,r+=e)i[t]=s.substr(r,e);s=i.join(t===W.BLOCK_LITERAL?`
`:` `)}return Ge({comment:e,type:t,value:s},r,i,a)}};function Nt(e,t){if(P(e))for(let n=0;n<e.items.length;++n){let r=e.items[n];if(!M(r)){if(j(r)){r.items.length>1&&t(`Each pair must have its own sequence indicator`);let e=r.items[0]||new q(new W(null));if(r.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${r.commentBefore}\n${e.key.commentBefore}`:r.commentBefore),r.comment){let t=e.value??e.key;t.comment=t.comment?`${r.comment}\n${t.comment}`:r.comment}r=e}e.items[n]=M(r)?r:new q(r)}}else t(`Expected a sequence for this tag`);return e}function Pt(e,t,n){let{replacer:r}=n,i=new ft(e);i.tag=`tag:yaml.org,2002:pairs`;let a=0;if(t&&Symbol.iterator in Object(t))for(let e of t){typeof r==`function`&&(e=r.call(t,String(a++),e));let o,s;if(Array.isArray(e)){if(e.length===2)o=e[0],s=e[1];else throw TypeError(`Expected [key, value] tuple: ${e}`)}else if(e&&e instanceof Object){let t=Object.keys(e);if(t.length===1)o=t[0],s=e[o];else throw TypeError(`Expected tuple with one key, not ${t.length} keys`)}else o=e;i.items.push(at(o,s,n))}return i}var Ft={collection:`seq`,default:!1,tag:`tag:yaml.org,2002:pairs`,resolve:Nt,createNode:Pt},It=class e extends ft{constructor(){super(),this.add=J.prototype.add.bind(this),this.delete=J.prototype.delete.bind(this),this.get=J.prototype.get.bind(this),this.has=J.prototype.has.bind(this),this.set=J.prototype.set.bind(this),this.tag=e.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let e of this.items){let r,i;if(M(e)?(r=U(e.key,``,t),i=U(e.value,r,t)):r=U(e,``,t),n.has(r))throw Error(`Ordered maps must not include duplicate keys`);n.set(r,i)}return n}static from(e,t,n){let r=Pt(e,t,n),i=new this;return i.items=r.items,i}};It.tag=`tag:yaml.org,2002:omap`;var Lt={collection:`seq`,identify:e=>e instanceof Map,nodeClass:It,default:!1,tag:`tag:yaml.org,2002:omap`,resolve(e,t){let n=Nt(e,t),r=[];for(let{key:e}of n.items)N(e)&&(r.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):r.push(e.value));return Object.assign(new It,n)},createNode:(e,t,n)=>It.from(e,t,n)};function Rt({value:e,source:t},n){return t&&(e?zt:Bt).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}var zt={identify:e=>e===!0,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new W(!0),stringify:Rt},Bt={identify:e=>e===!1,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new W(!1),stringify:Rt},Vt={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:Y},Ht={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,``)),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():Y(e)}},Ut={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){let t=new W(parseFloat(e.replace(/_/g,``))),n=e.indexOf(`.`);if(n!==-1){let r=e.substring(n+1).replace(/_/g,``);r[r.length-1]===`0`&&(t.minFractionDigits=r.length)}return t},stringify:Y},Wt=e=>typeof e==`bigint`||Number.isInteger(e);function Gt(e,t,n,{intAsBigInt:r}){let i=e[0];if((i===`-`||i===`+`)&&(t+=1),e=e.substring(t).replace(/_/g,``),r){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`}let t=BigInt(e);return i===`-`?BigInt(-1)*t:t}let a=parseInt(e,n);return i===`-`?-1*a:a}function Kt(e,t,n){let{value:r}=e;if(Wt(r)){let e=r.toString(t);return r<0?`-`+n+e.substr(1):n+e}return Y(e)}var qt={identify:Wt,default:!0,tag:`tag:yaml.org,2002:int`,format:`BIN`,test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Gt(e,2,2,n),stringify:e=>Kt(e,2,`0b`)},Jt={identify:Wt,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Gt(e,1,8,n),stringify:e=>Kt(e,8,`0`)},Yt={identify:Wt,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Gt(e,0,10,n),stringify:Y},Xt={identify:Wt,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Gt(e,2,16,n),stringify:e=>Kt(e,16,`0x`)},Zt=class e extends J{constructor(t){super(t),this.tag=e.tag}add(e){let t;t=M(e)?e:e&&typeof e==`object`&&`key`in e&&`value`in e&&e.value===null?new q(e.key,null):new q(e,null),ut(this.items,t.key)||this.items.push(t)}get(e,t){let n=ut(this.items,e);return!t&&M(n)?N(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!=`boolean`)throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=ut(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new q(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw Error(`Set items must all have null values`)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)typeof r==`function`&&(e=r.call(t,e,e)),i.items.push(at(e,null,n));return i}};Zt.tag=`tag:yaml.org,2002:set`;var Qt={collection:`map`,identify:e=>e instanceof Set,nodeClass:Zt,default:!1,tag:`tag:yaml.org,2002:set`,createNode:(e,t,n)=>Zt.from(e,t,n),resolve(e,t){if(j(e)){if(e.hasAllNullValues(!0))return Object.assign(new Zt,e);t(`Set items must all have null values`)}else t(`Expected a mapping for this tag`);return e}};function $t(e,t){let n=e[0],r=n===`-`||n===`+`?e.substring(1):e,i=e=>t?BigInt(e):Number(e),a=r.replace(/_/g,``).split(`:`).reduce((e,t)=>e*i(60)+i(t),i(0));return n===`-`?i(-1)*a:a}function en(e){let{value:t}=e,n=e=>e;if(typeof t==`bigint`)n=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return Y(e);let r=``;t<0&&(r=`-`,t*=n(-1));let i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),r+a.map(e=>String(e).padStart(2,`0`)).join(`:`).replace(/000000\d*$/,``)}var tn={identify:e=>typeof e==`bigint`||Number.isInteger(e),default:!0,tag:`tag:yaml.org,2002:int`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>$t(e,n),stringify:en},nn={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>$t(e,!1),stringify:en},rn={identify:e=>e instanceof Date,default:!0,tag:`tag:yaml.org,2002:timestamp`,test:RegExp(`^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$`),resolve(e){let t=e.match(rn.test);if(!t)throw Error(`!!timestamp expects a date, starting with yyyy-mm-dd`);let[,n,r,i,a,o,s]=t.map(Number),c=t[7]?Number((t[7]+`00`).substr(1,3)):0,l=Date.UTC(n,r-1,i,a||0,o||0,s||0,c),u=t[8];if(u&&u!==`Z`){let e=$t(u,!1);Math.abs(e)<30&&(e*=60),l-=6e4*e}return new Date(l)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,``)??``},an=[dt,mt,ht,gt,zt,Bt,qt,Jt,Yt,Xt,Vt,Ht,Ut,Mt,K,Lt,Ft,Qt,tn,nn,rn],on=new Map([[`core`,Dt],[`failsafe`,[dt,mt,ht]],[`json`,jt],[`yaml11`,an],[`yaml-1.1`,an]]),sn={binary:Mt,bool:_t,float:bt,floatExp:yt,floatNaN:vt,floatTime:nn,int:Tt,intHex:Et,intOct:wt,intTime:tn,map:dt,merge:K,null:gt,omap:Lt,pairs:Ft,seq:mt,set:Qt,timestamp:rn},cn={"tag:yaml.org,2002:binary":Mt,"tag:yaml.org,2002:merge":K,"tag:yaml.org,2002:omap":Lt,"tag:yaml.org,2002:pairs":Ft,"tag:yaml.org,2002:set":Qt,"tag:yaml.org,2002:timestamp":rn};function ln(e,t,n){let r=on.get(t);if(r&&!e)return n&&!r.includes(K)?r.concat(K):r.slice();let i=r;if(!i){if(Array.isArray(e))i=[];else{let e=Array.from(on.keys()).filter(e=>e!==`yaml11`).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}}if(Array.isArray(e))for(let t of e)i=i.concat(t);else typeof e==`function`&&(i=e(i.slice()));return n&&(i=i.concat(K)),i.reduce((e,t)=>{let n=typeof t==`string`?sn[t]:t;if(!n){let e=JSON.stringify(t),n=Object.keys(sn).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown custom tag ${e}; use one of ${n}`)}return e.includes(n)||e.push(n),e},[])}var un=(e,t)=>e.key<t.key?-1:+(e.key>t.key),dn=class e{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:r,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?ln(e,`compat`):e?ln(null,e):null,this.name=typeof i==`string`&&i||`core`,this.knownTags=r?cn:{},this.tags=ln(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,D,{value:dt}),Object.defineProperty(this,O,{value:ht}),Object.defineProperty(this,k,{value:mt}),this.sortMapEntries=typeof a==`function`?a:a===!0?un:null}clone(){let t=Object.create(e.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}};function fn(e,t){let n=[],r=t.directives===!0;if(t.directives!==!1&&e.directives){let t=e.directives.toString(e);t?(n.push(t),r=!0):e.directives.docStart&&(r=!0)}r&&n.push(`---`);let i=Ke(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift(``);let t=a(e.commentBefore);n.unshift(G(t,``))}let o=!1,s=null;if(e.contents){if(I(e.contents)){if(e.contents.spaceBefore&&r&&n.push(``),e.contents.commentBefore){let t=a(e.contents.commentBefore);n.push(G(t,``))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}let t=s?void 0:()=>o=!0,c=Ye(e.contents,i,()=>s=null,t);s&&(c+=Ae(c,``,a(s))),(c[0]===`|`||c[0]===`>`)&&n[n.length-1]===`---`?n[n.length-1]=`--- ${c}`:n.push(c)}else n.push(Ye(e.contents,i));if(e.directives?.docEnd){if(e.comment){let t=a(e.comment);t.includes(`
`)?(n.push(`...`),n.push(G(t,``))):n.push(`... ${t}`)}else n.push(`...`)}else{let t=e.comment;t&&o&&(t=t.replace(/^\n+/,``)),t&&((!o||s)&&n[n.length-1]!==``&&n.push(``),n.push(G(a(t),``)))}return n.join(`
`)+`
`}var pn=class e{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,A,{value:E});let r=null;typeof t==`function`||Array.isArray(t)?r=t:n===void 0&&t&&(n=t,t=void 0);let i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:`warn`,prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:`1.2`},n);this.options=i;let{version:a}=i;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new he({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,r,n)}clone(){let t=Object.create(e.prototype,{[A]:{value:E}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=I(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){mn(this.contents)&&this.contents.add(e)}addIn(e,t){mn(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=_e(this);e.anchor=!t||n.has(t)?V(t||`a`,n):t}return new be(e.anchor)}createNode(e,t,n){let r;if(typeof t==`function`)e=t.call({"":e},``,e),r=t;else if(Array.isArray(t)){let e=t.filter(e=>typeof e==`number`||e instanceof String||e instanceof Number).map(String);e.length>0&&(t=t.concat(e)),r=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:c,tag:l}=n??{},{onAnchor:u,setAnchors:d,sourceObjects:f}=ve(this,a||`a`),p={aliasDuplicateObjects:i??!0,keepUndefined:s??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:f},m=Te(e,l,p);return o&&F(m)&&(m.flow=!0),d(),m}createPair(e,t,n={}){return new q(this.createNode(e,null,n),this.createNode(t,null,n))}delete(e){return mn(this.contents)?this.contents.delete(e):!1}deleteIn(e){return De(e)?this.contents!=null&&(this.contents=null,!0):mn(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return F(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return De(e)?!t&&N(this.contents)?this.contents.value:this.contents:F(this.contents)?this.contents.getIn(e,t):void 0}has(e){return F(this.contents)?this.contents.has(e):!1}hasIn(e){return De(e)?this.contents!==void 0:F(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Ee(this.schema,[e],t):mn(this.contents)&&this.contents.set(e,t)}setIn(e,t){De(e)?this.contents=t:this.contents==null?this.contents=Ee(this.schema,Array.from(e),t):mn(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e==`number`&&(e=String(e));let n;switch(e){case`1.1`:this.directives?this.directives.yaml.version=`1.1`:this.directives=new he({version:`1.1`}),n={resolveKnownTags:!1,schema:`yaml-1.1`};break;case`1.2`:case`next`:this.directives?this.directives.yaml.version=e:this.directives=new he({version:e}),n={resolveKnownTags:!0,schema:`core`};break;case null:this.directives&&delete this.directives,n=null;break;default:{let t=JSON.stringify(e);throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new dn(Object.assign(n,t));else throw Error(`With a null YAML version, the { schema: Schema } option is required`)}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:r,onAnchor:i,reviver:a}={}){let o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof r==`number`?r:100},s=U(this.contents,t??``,o);if(typeof i==`function`)for(let{count:e,res:t}of o.anchors.values())i(t,e);return typeof a==`function`?H(a,{"":s},``,s):s}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw Error(`Document with errors cannot be stringified`);if(`indent`in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw Error(`"indent" option must be a positive integer, not ${t}`)}return fn(this,e)}};function mn(e){if(F(e))return!0;throw Error(`Expected a YAML collection as document contents`)}var hn=class extends Error{constructor(e,t,n,r){super(),this.name=e,this.code=n,this.message=r,this.pos=t}},gn=class extends hn{constructor(e,t,n){super(`YAMLParseError`,e,t,n)}},_n=class extends hn{constructor(e,t,n){super(`YAMLWarning`,e,t,n)}},vn=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(e=>t.linePos(e));let{line:r,col:i}=n.linePos[0];n.message+=` at line ${r}, column ${i}`;let a=i-1,o=e.substring(t.lineStarts[r-1],t.lineStarts[r]).replace(/[\n\r]+$/,``);if(a>=60&&o.length>80){let e=Math.min(a-39,o.length-79);o=`…`+o.substring(e),a-=e-1}if(o.length>80&&(o=o.substring(0,79)+`…`),r>1&&/^ *$/.test(o.substring(0,a))){let n=e.substring(t.lineStarts[r-2],t.lineStarts[r-1]);n.length>80&&(n=n.substring(0,79)+`…
`),o=n+o}if(/[^ ]/.test(o)){let e=1,t=n.linePos[1];t?.line===r&&t.col>i&&(e=Math.max(1,Math.min(t.col-i,80-a)));let s=` `.repeat(a)+`^`.repeat(e);n.message+=`:\n\n${o}\n${s}\n`}};function yn(e,{flow:t,indicator:n,next:r,offset:i,onError:a,parentIndent:o,startOnNewline:s}){let c=!1,l=s,u=s,d=``,f=``,p=!1,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null;for(let i of e)switch(m&&=(i.type!==`space`&&i.type!==`newline`&&i.type!==`comma`&&a(i.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),!1),h&&=(l&&i.type!==`comment`&&i.type!==`newline`&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),null),i.type){case`space`:!t&&(n!==`doc-start`||r?.type!==`flow-collection`)&&i.source.includes(`	`)&&(h=i),u=!0;break;case`comment`:{u||a(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let e=i.source.substring(1)||` `;d?d+=f+e:d=e,f=``,l=!1;break}case`newline`:l?d?d+=i.source:(!b||n!==`seq-item-ind`)&&(c=!0):f+=i.source,l=!0,p=!0,(g||_)&&(v=i),u=!0;break;case`anchor`:g&&a(i,`MULTIPLE_ANCHORS`,`A node can have at most one anchor`),i.source.endsWith(`:`)&&a(i.offset+i.source.length-1,`BAD_ALIAS`,`Anchor ending in : is ambiguous`,!0),g=i,x??=i.offset,l=!1,u=!1,m=!0;break;case`tag`:_&&a(i,`MULTIPLE_TAGS`,`A node can have at most one tag`),_=i,x??=i.offset,l=!1,u=!1,m=!0;break;case n:(g||_)&&a(i,`BAD_PROP_ORDER`,`Anchors and tags must be after the ${i.source} indicator`),b&&a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.source} in ${t??`collection`}`),b=i,l=n===`seq-item-ind`||n===`explicit-key-ind`,u=!1;break;case`comma`:if(t){y&&a(i,`UNEXPECTED_TOKEN`,`Unexpected , in ${t}`),y=i,l=!1,u=!1;break}default:a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.type} token`),l=!1,u=!1}let S=e[e.length-1],C=S?S.offset+S.source.length:i;return m&&r&&r.type!==`space`&&r.type!==`newline`&&r.type!==`comma`&&(r.type!==`scalar`||r.source!==``)&&a(r.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),h&&(l&&h.indent<=o||r?.type===`block-map`||r?.type===`block-seq`)&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),{comma:y,found:b,spaceBefore:c,comment:d,hasNewline:p,anchor:g,tag:_,newlineAfterProp:v,end:C,start:x??C}}function bn(e){if(!e)return null;switch(e.type){case`alias`:case`scalar`:case`double-quoted-scalar`:case`single-quoted-scalar`:if(e.source.includes(`
`))return!0;if(e.end){for(let t of e.end)if(t.type===`newline`)return!0}return!1;case`flow-collection`:for(let t of e.items){for(let e of t.start)if(e.type===`newline`)return!0;if(t.sep){for(let e of t.sep)if(e.type===`newline`)return!0}if(bn(t.key)||bn(t.value))return!0}return!1;default:return!0}}function xn(e,t,n){if(t?.type===`flow-collection`){let r=t.end[0];r.indent===e&&(r.source===`]`||r.source===`}`)&&bn(t)&&n(r,`BAD_INDENT`,`Flow end indicator should be more indented than parent`,!0)}}function Sn(e,t,n){let{uniqueKeys:r}=e.options;if(r===!1)return!1;let i=typeof r==`function`?r:(e,t)=>e===t||N(e)&&N(t)&&e.value===t.value;return t.some(e=>i(e.key,n))}var Cn=`All mapping items must start at the same column`;function wn({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??J)(n.schema);n.atRoot&&=!1;let s=r.offset,c=null;for(let a of r.items){let{start:l,key:u,sep:d,value:f}=a,p=yn(l,{indicator:`explicit-key-ind`,next:u??d?.[0],offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0}),m=!p.found;if(m){if(u&&(u.type===`block-seq`?i(s,`BLOCK_AS_IMPLICIT_KEY`,`A block sequence may not be used as an implicit map key`):`indent`in u&&u.indent!==r.indent&&i(s,`BAD_INDENT`,Cn)),!p.anchor&&!p.tag&&!d){c=p.end,p.comment&&(o.comment?o.comment+=`
`+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||bn(u))&&i(u??l[l.length-1],`MULTILINE_IMPLICIT_KEY`,`Implicit keys need to be on a single line`)}else p.found?.indent!==r.indent&&i(s,`BAD_INDENT`,Cn);n.atKey=!0;let h=p.end,g=u?e(n,u,p,i):t(n,h,l,null,p,i);n.schema.compat&&xn(r.indent,u,i),n.atKey=!1,Sn(n,o.items,g)&&i(h,`DUPLICATE_KEY`,`Map keys must be unique`);let _=yn(d??[],{indicator:`map-value-ind`,next:f,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!u||u.type===`block-scalar`});if(s=_.end,_.found){m&&(f?.type===`block-map`&&!_.hasNewline&&i(s,`BLOCK_AS_IMPLICIT_KEY`,`Nested mappings are not allowed in compact mappings`),n.options.strict&&p.start<_.found.offset-1024&&i(g.range,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit block mapping key`));let c=f?e(n,f,_,i):t(n,s,d,null,_,i);n.schema.compat&&xn(r.indent,f,i),s=c.range[2];let l=new q(g,c);n.options.keepSourceTokens&&(l.srcToken=a),o.items.push(l)}else{m&&i(g.range,`MISSING_CHAR`,`Implicit map keys need to be followed by map values`),_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let e=new q(g);n.options.keepSourceTokens&&(e.srcToken=a),o.items.push(e)}}return c&&c<s&&i(c,`IMPOSSIBLE`,`Map comment with trailing content`),o.range=[r.offset,s,c??s],o}function Tn({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new((a?.nodeClass)??ft)(n.schema);n.atRoot&&=!1,n.atKey&&=!1;let s=r.offset,c=null;for(let{start:a,value:l}of r.items){let u=yn(a,{indicator:`seq-item-ind`,next:l,offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0});if(!u.found){if(u.anchor||u.tag||l)l?.type===`block-seq`?i(u.end,`BAD_INDENT`,`All sequence items must start at the same column`):i(s,`MISSING_CHAR`,`Sequence item without - indicator`);else{c=u.end,u.comment&&(o.comment=u.comment);continue}}let d=l?e(n,l,u,i):t(n,u.end,a,null,u,i);n.schema.compat&&xn(r.indent,l,i),s=d.range[2],o.items.push(d)}return o.range=[r.offset,s,c??s],o}function En(e,t,n,r){let i=``;if(e){let a=!1,o=``;for(let s of e){let{source:e,type:c}=s;switch(c){case`space`:a=!0;break;case`comment`:{n&&!a&&r(s,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let t=e.substring(1)||` `;i?i+=o+t:i=t,o=``;break}case`newline`:i&&(o+=e),a=!0;break;default:r(s,`UNEXPECTED_TOKEN`,`Unexpected ${c} at node end`)}t+=e.length}}return{comment:i,offset:t}}var Dn=`Block collections are not allowed within flow collections`,On=e=>e&&(e.type===`block-map`||e.type===`block-seq`);function kn({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=r.start.source===`{`,s=o?`flow map`:`flow sequence`,c=new((a?.nodeClass)??(o?J:ft))(n.schema);c.flow=!0;let l=n.atRoot;l&&(n.atRoot=!1),n.atKey&&=!1;let u=r.offset+r.start.source.length;for(let a=0;a<r.items.length;++a){let l=r.items[a],{start:d,key:f,sep:p,value:m}=l,h=yn(d,{flow:s,indicator:`explicit-key-ind`,next:f??p?.[0],offset:u,onError:i,parentIndent:r.indent,startOnNewline:!1});if(!h.found){if(!h.anchor&&!h.tag&&!p&&!m){a===0&&h.comma?i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`):a<r.items.length-1&&i(h.start,`UNEXPECTED_TOKEN`,`Unexpected empty item in ${s}`),h.comment&&(c.comment?c.comment+=`
`+h.comment:c.comment=h.comment),u=h.end;continue}!o&&n.options.strict&&bn(f)&&i(f,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`)}if(a===0)h.comma&&i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`);else if(h.comma||i(h.start,`MISSING_CHAR`,`Missing , between ${s} items`),h.comment){let e=``;loop:for(let t of d)switch(t.type){case`comma`:case`space`:break;case`comment`:e=t.source.substring(1);break loop;default:break loop}if(e){let t=c.items[c.items.length-1];M(t)&&(t=t.value??t.key),t.comment?t.comment+=`
`+e:t.comment=e,h.comment=h.comment.substring(e.length+1)}}if(!o&&!p&&!h.found){let r=m?e(n,m,h,i):t(n,h.end,p,null,h,i);c.items.push(r),u=r.range[2],On(m)&&i(r.range,`BLOCK_IN_FLOW`,Dn)}else{n.atKey=!0;let a=h.end,g=f?e(n,f,h,i):t(n,a,d,null,h,i);On(f)&&i(g.range,`BLOCK_IN_FLOW`,Dn),n.atKey=!1;let _=yn(p??[],{flow:s,indicator:`map-value-ind`,next:m,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!1});if(_.found){if(!o&&!h.found&&n.options.strict){if(p)for(let e of p){if(e===_.found)break;if(e.type===`newline`){i(e,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`);break}}h.start<_.found.offset-1024&&i(_.found,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit flow sequence key`)}}else m&&(`source`in m&&m.source?.[0]===`:`?i(m,`MISSING_CHAR`,`Missing space after : in ${s}`):i(_.start,`MISSING_CHAR`,`Missing , or : between ${s} items`));let v=m?e(n,m,_,i):_.found?t(n,_.end,p,null,_,i):null;v?On(m)&&i(v.range,`BLOCK_IN_FLOW`,Dn):_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let y=new q(g,v);if(n.options.keepSourceTokens&&(y.srcToken=l),o){let e=c;Sn(n,e.items,g)&&i(a,`DUPLICATE_KEY`,`Map keys must be unique`),e.items.push(y)}else{let e=new J(n.schema);e.flow=!0,e.items.push(y);let t=(v??g).range;e.range=[g.range[0],t[1],t[2]],c.items.push(e)}u=v?v.range[2]:_.end}}let d=o?`}`:`]`,[f,...p]=r.end,m=u;if(f?.source===d)m=f.offset+f.source.length;else{let e=s[0].toUpperCase()+s.substring(1),t=l?`${e} must end with a ${d}`:`${e} in block collection must be sufficiently indented and end with a ${d}`;i(u,l?`MISSING_CHAR`:`BAD_INDENT`,t),f&&f.source.length!==1&&p.unshift(f)}if(p.length>0){let e=En(p,m,n.options.strict,i);e.comment&&(c.comment?c.comment+=`
`+e.comment:c.comment=e.comment),c.range=[r.offset,m,e.offset]}else c.range=[r.offset,m,m];return c}function An(e,t,n,r,i,a){let o=n.type===`block-map`?wn(e,t,n,r,a):n.type===`block-seq`?Tn(e,t,n,r,a):kn(e,t,n,r,a),s=o.constructor;return i===`!`||i===s.tagName?(o.tag=s.tagName,o):(i&&(o.tag=i),o)}function jn(e,t,n,r,i){let a=r.tag,o=a?t.directives.tagName(a.source,e=>i(a,`TAG_RESOLVE_FAILED`,e)):null;if(n.type===`block-seq`){let{anchor:e,newlineAfterProp:t}=r,n=e&&a?e.offset>a.offset?e:a:e??a;n&&(!t||t.offset<n.offset)&&i(n,`MISSING_CHAR`,`Missing newline after block sequence props`)}let s=n.type===`block-map`?`map`:n.type===`block-seq`?`seq`:n.start.source===`{`?`map`:`seq`;if(!a||!o||o===`!`||o===J.tagName&&s===`map`||o===ft.tagName&&s===`seq`)return An(e,t,n,i,o);let c=t.schema.tags.find(e=>e.tag===o&&e.collection===s);if(!c){let r=t.schema.knownTags[o];if(r?.collection===s)t.schema.tags.push(Object.assign({},r,{default:!1})),c=r;else return r?i(a,`BAD_COLLECTION_TYPE`,`${r.tag} used for ${s} collection, but expects ${r.collection??`scalar`}`,!0):i(a,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${o}`,!0),An(e,t,n,i,o)}let l=An(e,t,n,i,o,c),u=c.resolve?.(l,e=>i(a,`TAG_RESOLVE_FAILED`,e),t.options)??l,d=I(u)?u:new W(u);return d.range=l.range,d.tag=o,c?.format&&(d.format=c.format),d}function Mn(e,t,n){let r=t.offset,i=Nn(t,e.options.strict,n);if(!i)return{value:``,type:null,comment:``,range:[r,r,r]};let a=i.mode===`>`?W.BLOCK_FOLDED:W.BLOCK_LITERAL,o=t.source?Pn(t.source):[],s=o.length;for(let e=o.length-1;e>=0;--e){let t=o[e][1];if(t===``||t===`\r`)s=e;else break}if(s===0){let e=i.chomp===`+`&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):``,n=r+i.length;return t.source&&(n+=t.source.length),{value:e,type:a,comment:i.comment,range:[r,n,n]}}let c=t.indent+i.indent,l=t.offset+i.length,u=0;for(let t=0;t<s;++t){let[r,a]=o[t];if(a===``||a===`\r`)i.indent===0&&r.length>c&&(c=r.length);else{r.length<c&&n(l+r.length,`MISSING_CHAR`,`Block scalars with more-indented leading empty lines must use an explicit indentation indicator`),i.indent===0&&(c=r.length),u=t,c===0&&!e.atRoot&&n(l,`BAD_INDENT`,`Block scalar values in collections must be indented`);break}l+=r.length+a.length+1}for(let e=o.length-1;e>=s;--e)o[e][0].length>c&&(s=e+1);let d=``,f=``,p=!1;for(let e=0;e<u;++e)d+=o[e][0].slice(c)+`
`;for(let e=u;e<s;++e){let[t,r]=o[e];l+=t.length+r.length+1;let s=r[r.length-1]===`\r`;if(s&&(r=r.slice(0,-1)),r&&t.length<c){let e=`Block scalar lines must not be less indented than their ${i.indent?`explicit indentation indicator`:`first line`}`;n(l-r.length-(s?2:1),`BAD_INDENT`,e),t=``}a===W.BLOCK_LITERAL?(d+=f+t.slice(c)+r,f=`
`):t.length>c||r[0]===`	`?(f===` `?f=`
`:!p&&f===`
`&&(f=`

`),d+=f+t.slice(c)+r,f=`
`,p=!0):r===``?f===`
`?d+=`
`:f=`
`:(d+=f+r,f=` `,p=!1)}switch(i.chomp){case`-`:break;case`+`:for(let e=s;e<o.length;++e)d+=`
`+o[e][0].slice(c);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=r+i.length+t.source.length;return{value:d,type:a,comment:i.comment,range:[r,m,m]}}function Nn({offset:e,props:t},n,r){if(t[0].type!==`block-scalar-header`)return r(t[0],`IMPOSSIBLE`,`Block scalar header not found`),null;let{source:i}=t[0],a=i[0],o=0,s=``,c=-1;for(let t=1;t<i.length;++t){let n=i[t];if(!s&&(n===`-`||n===`+`))s=n;else{let r=Number(n);!o&&r?o=r:c===-1&&(c=e+t)}}c!==-1&&r(c,`UNEXPECTED_TOKEN`,`Block scalar header includes extra characters: ${i}`);let l=!1,u=``,d=i.length;for(let e=1;e<t.length;++e){let i=t[e];switch(i.type){case`space`:l=!0;case`newline`:d+=i.source.length;break;case`comment`:n&&!l&&r(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`),d+=i.source.length,u=i.source.substring(1);break;case`error`:r(i,`UNEXPECTED_TOKEN`,i.message),d+=i.source.length;break;default:{r(i,`UNEXPECTED_TOKEN`,`Unexpected token in block scalar header: ${i.type}`);let e=i.source;e&&typeof e==`string`&&(d+=e.length)}}}return{mode:a,indent:o,chomp:s,comment:u,length:d}}function Pn(e){let t=e.split(/\n( *)/),n=t[0],r=n.match(/^( *)/),i=[r?.[1]?[r[1],n.slice(r[1].length)]:[``,n]];for(let e=1;e<t.length;e+=2)i.push([t[e],t[e+1]]);return i}function Fn(e,t,n){let{offset:r,type:i,source:a,end:o}=e,s,c,l=(e,t,i)=>n(r+e,t,i);switch(i){case`scalar`:s=W.PLAIN,c=In(a,l);break;case`single-quoted-scalar`:s=W.QUOTE_SINGLE,c=Ln(a,l);break;case`double-quoted-scalar`:s=W.QUOTE_DOUBLE,c=zn(a,l);break;default:return n(e,`UNEXPECTED_TOKEN`,`Expected a flow scalar value, but found: ${i}`),{value:``,type:null,comment:``,range:[r,r+a.length,r+a.length]}}let u=r+a.length,d=En(o,u,t,n);return{value:c,type:s,comment:d.comment,range:[r,u,d.offset]}}function In(e,t){let n=``;switch(e[0]){case`	`:n=`a tab character`;break;case`,`:n=`flow indicator character ,`;break;case`%`:n=`directive indicator character %`;break;case`|`:case`>`:n=`block scalar indicator ${e[0]}`;break;case`@`:case"`":n=`reserved character ${e[0]}`}return n&&t(0,`BAD_SCALAR_START`,`Plain value cannot start with ${n}`),Rn(e)}function Ln(e,t){return(e[e.length-1]!==`'`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing 'quote`),Rn(e.slice(1,-1)).replace(/''/g,`'`)}function Rn(e){let t,n;try{t=RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,`sy`),n=RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,`sy`)}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=t.exec(e);if(!r)return e;let i=r[1],a=` `,o=t.lastIndex;for(n.lastIndex=o;r=n.exec(e);)r[1]===``?a===`
`?i+=a:a=`
`:(i+=a+r[1],a=` `),o=n.lastIndex;let s=/[ \t]*(.*)/sy;return s.lastIndex=o,r=s.exec(e),i+a+(r?.[1]??``)}function zn(e,t){let n=``;for(let r=1;r<e.length-1;++r){let i=e[r];if(i!==`\r`||e[r+1]!==`
`){if(i===`
`){let{fold:t,offset:i}=Bn(e,r);n+=t,r=i}else if(i===`\\`){let i=e[++r],a=Vn[i];if(a)n+=a;else if(i===`
`)for(i=e[r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`\r`&&e[r+1]===`
`)for(i=e[++r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`x`||i===`u`||i===`U`){let a=i===`x`?2:i===`u`?4:8;n+=Hn(e,r+1,a,t),r+=a}else{let i=e.substr(r-1,2);t(r-1,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),n+=i}}else if(i===` `||i===`	`){let t=r,a=e[r+1];for(;a===` `||a===`	`;)a=e[++r+1];a!==`
`&&(a!==`\r`||e[r+2]!==`
`)&&(n+=r>t?e.slice(t,r+1):i)}else n+=i}}return(e[e.length-1]!==`"`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing "quote`),n}function Bn(e,t){let n=``,r=e[t+1];for(;(r===` `||r===`	`||r===`
`||r===`\r`)&&(r!==`\r`||e[t+2]===`
`);)r===`
`&&(n+=`
`),t+=1,r=e[t+1];return n||=` `,{fold:n,offset:t}}var Vn={0:`\0`,a:`\x07`,b:`\b`,e:`\x1B`,f:`\f`,n:`
`,r:`\r`,t:`	`,v:`\v`,N:``,_:`\xA0`,L:`\u2028`,P:`\u2029`," ":` `,'"':`"`,"/":`/`,"\\":`\\`,"	":`	`};function Hn(e,t,n,r){let i=e.substr(t,n),a=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;try{return String.fromCodePoint(a)}catch{let i=e.substr(t-2,n+2);return r(t-2,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),i}}function Un(e,t,n,r){let{value:i,type:a,comment:o,range:s}=t.type===`block-scalar`?Mn(e,t,r):Fn(t,e.options.strict,r),c=n?e.directives.tagName(n.source,e=>r(n,`TAG_RESOLVE_FAILED`,e)):null,l;l=e.options.stringKeys&&e.atKey?e.schema[O]:c?Wn(e.schema,i,c,n,r):t.type===`scalar`?Gn(e,i,t,r):e.schema[O];let u;try{let a=l.resolve(i,e=>r(n??t,`TAG_RESOLVE_FAILED`,e),e.options);u=N(a)?a:new W(a)}catch(e){let a=e instanceof Error?e.message:String(e);r(n??t,`TAG_RESOLVE_FAILED`,a),u=new W(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function Wn(e,t,n,r,i){if(n===`!`)return e[O];let a=[];for(let t of e.tags)if(!t.collection&&t.tag===n){if(t.default&&t.test)a.push(t);else return t}for(let e of a)if(e.test?.test(t))return e;let o=e.knownTags[n];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(r,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${n}`,n!==`tag:yaml.org,2002:str`),e[O])}function Gn({atKey:e,directives:t,schema:n},r,i,a){let o=n.tags.find(t=>(t.default===!0||e&&t.default===`key`)&&t.test?.test(r))||n[O];if(n.compat){let e=n.compat.find(e=>e.default&&e.test?.test(r))??n[O];o.tag!==e.tag&&a(i,`TAG_RESOLVE_FAILED`,`Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`,!0)}return o}function Kn(e,t,n){if(t){n??=t.length;for(let r=n-1;r>=0;--r){let n=t[r];switch(n.type){case`space`:case`comment`:case`newline`:e-=n.source.length;continue}for(n=t[++r];n?.type===`space`;)e+=n.source.length,n=t[++r];break}}return e}var qn={composeNode:Jn,composeEmptyNode:Yn};function Jn(e,t,n,r){let i=e.atKey,{spaceBefore:a,comment:o,anchor:s,tag:c}=n,l,u=!0;switch(t.type){case`alias`:l=Xn(e,t,r),(s||c)&&r(t,`ALIAS_PROPS`,`An alias node must not specify any properties`);break;case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`block-scalar`:l=Un(e,t,c,r),s&&(l.anchor=s.source.substring(1));break;case`block-map`:case`block-seq`:case`flow-collection`:try{l=jn(qn,e,t,n,r),s&&(l.anchor=s.source.substring(1))}catch(e){r(t,`RESOURCE_EXHAUSTION`,e instanceof Error?e.message:String(e))}break;default:r(t,`UNEXPECTED_TOKEN`,t.type===`error`?t.message:`Unsupported token (type: ${t.type})`),u=!1}return l??=Yn(e,t.offset,void 0,null,n,r),s&&l.anchor===``&&r(s,`BAD_ALIAS`,`Anchor cannot be an empty string`),i&&e.options.stringKeys&&(!N(l)||typeof l.value!=`string`||l.tag&&l.tag!==`tag:yaml.org,2002:str`)&&r(c??t,`NON_STRING_KEY`,`With stringKeys, all keys must be strings`),a&&(l.spaceBefore=!0),o&&(t.type===`scalar`&&t.source===``?l.comment=o:l.commentBefore=o),e.options.keepSourceTokens&&u&&(l.srcToken=t),l}function Yn(e,t,n,r,{spaceBefore:i,comment:a,anchor:o,tag:s,end:c},l){let u=Un(e,{type:`scalar`,offset:Kn(t,n,r),indent:-1,source:``},s,l);return o&&(u.anchor=o.source.substring(1),u.anchor===``&&l(o,`BAD_ALIAS`,`Anchor cannot be an empty string`)),i&&(u.spaceBefore=!0),a&&(u.comment=a,u.range[2]=c),u}function Xn({options:e},{offset:t,source:n,end:r},i){let a=new be(n.substring(1));a.source===``&&i(t,`BAD_ALIAS`,`Alias cannot be an empty string`),a.source.endsWith(`:`)&&i(t+n.length-1,`BAD_ALIAS`,`Alias ending in : is ambiguous`,!0);let o=t+n.length,s=En(r,o,e.strict,i);return a.range=[t,o,s.offset],s.comment&&(a.comment=s.comment),a}function Zn(e,t,{offset:n,start:r,value:i,end:a},o){let s=new pn(void 0,Object.assign({_directives:t},e)),c={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},l=yn(r,{indicator:`doc-start`,next:i??a?.[0],offset:n,onError:o,parentIndent:0,startOnNewline:!0});l.found&&(s.directives.docStart=!0,i&&(i.type===`block-map`||i.type===`block-seq`)&&!l.hasNewline&&o(l.end,`MISSING_CHAR`,`Block collection cannot start on same line with directives-end marker`)),s.contents=i?Jn(c,i,l,o):Yn(c,l.end,r,null,l,o);let u=s.contents.range[2],d=En(a,u,!1,o);return d.comment&&(s.comment=d.comment),s.range=[n,u,d.offset],s}function Qn(e){if(typeof e==`number`)return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];let{offset:t,source:n}=e;return[t,t+(typeof n==`string`?n.length:1)]}function $n(e){let t=``,n=!1,r=!1;for(let i=0;i<e.length;++i){let a=e[i];switch(a[0]){case`#`:t+=(t===``?``:r?`

`:`
`)+(a.substring(1)||` `),n=!0,r=!1;break;case`%`:e[i+1]?.[0]!==`#`&&(i+=1),n=!1;break;default:n||(r=!0),n=!1}}return{comment:t,afterEmptyLine:r}}var er=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,n,r)=>{let i=Qn(e);r?this.warnings.push(new _n(i,t,n)):this.errors.push(new gn(i,t,n))},this.directives=new he({version:e.version||`1.2`}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:r}=$n(this.prelude);if(n){let i=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${n}`:n;else if(r||e.directives.docStart||!i)e.commentBefore=n;else if(F(i)&&!i.flow&&i.items.length>0){let e=i.items[0];M(e)&&(e=e.key);let t=e.commentBefore;e.commentBefore=t?`${n}\n${t}`:n}else{let e=i.commentBefore;i.commentBefore=e?`${n}\n${e}`:n}}if(t){for(let t=0;t<this.errors.length;++t)e.errors.push(this.errors[t]);for(let t=0;t<this.warnings.length;++t)e.warnings.push(this.warnings[t])}else e.errors=this.errors,e.warnings=this.warnings;this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:$n(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let t of e)yield*this.next(t);yield*this.end(t,n)}*next(e){switch(e.type){case`directive`:this.directives.add(e.source,(t,n,r)=>{let i=Qn(e);i[0]+=t,this.onError(i,`BAD_DIRECTIVE`,n,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case`document`:{let t=Zn(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,`MISSING_CHAR`,`Missing directives-end/doc-start indicator line`),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case`byte-order-mark`:case`space`:break;case`comment`:case`newline`:this.prelude.push(e.source);break;case`error`:{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new gn(Qn(e),`UNEXPECTED_TOKEN`,t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case`doc-end`:{if(!this.doc){this.errors.push(new gn(Qn(e),`UNEXPECTED_TOKEN`,`Unexpected doc-end without preceding document`));break}this.doc.directives.docEnd=!0;let t=En(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new gn(Qn(e),`UNEXPECTED_TOKEN`,`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let e=new pn(void 0,Object.assign({_directives:this.directives},this.options));this.atDirectives&&this.onError(t,`MISSING_CHAR`,`Missing directives-end indicator line`),e.range=[0,t,t],this.decorate(e,!1),yield e}}},tr=Symbol(`break visit`),nr=Symbol(`skip children`),rr=Symbol(`remove item`);function ir(e,t){`type`in e&&e.type===`document`&&(e={start:e.start,value:e.value}),ar(Object.freeze([]),e,t)}ir.BREAK=tr,ir.SKIP=nr,ir.REMOVE=rr,ir.itemAtPath=(e,t)=>{let n=e;for(let[e,r]of t){let t=n?.[e];if(t&&`items`in t)n=t.items[r];else return}return n},ir.parentCollection=(e,t)=>{let n=ir.itemAtPath(e,t.slice(0,-1)),r=t[t.length-1][0],i=n?.[r];if(i&&`items`in i)return i;throw Error(`Parent collection not found`)};function ar(e,t,n){let r=n(t,e);if(typeof r==`symbol`)return r;for(let i of[`key`,`value`]){let a=t[i];if(a&&`items`in a){for(let t=0;t<a.items.length;++t){let r=ar(Object.freeze(e.concat([[i,t]])),a.items[t],n);if(typeof r==`number`)t=r-1;else if(r===tr)return tr;else r===rr&&(a.items.splice(t,1),--t)}typeof r==`function`&&i===`key`&&(r=r(t,e))}}return typeof r==`function`?r(t,e):r}function or(e){switch(e){case`﻿`:return`byte-order-mark`;case``:return`doc-mode`;case``:return`flow-error-end`;case``:return`scalar`;case`---`:return`doc-start`;case`...`:return`doc-end`;case``:case`
`:case`\r
`:return`newline`;case`-`:return`seq-item-ind`;case`?`:return`explicit-key-ind`;case`:`:return`map-value-ind`;case`{`:return`flow-map-start`;case`}`:return`flow-map-end`;case`[`:return`flow-seq-start`;case`]`:return`flow-seq-end`;case`,`:return`comma`}switch(e[0]){case` `:case`	`:return`space`;case`#`:return`comment`;case`%`:return`directive-line`;case`*`:return`alias`;case`&`:return`anchor`;case`!`:return`tag`;case`'`:return`single-quoted-scalar`;case`"`:return`double-quoted-scalar`;case`|`:case`>`:return`block-scalar-header`}return null}function X(e){switch(e){case void 0:case` `:case`
`:case`\r`:case`	`:return!0;default:return!1}}var sr=new Set(`0123456789ABCDEFabcdef`),cr=new Set(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()`),lr=new Set(`,[]{}`),ur=new Set(` ,[]{}
\r	`),dr=e=>!e||ur.has(e),fr=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer=``,this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!=`string`)throw TypeError(`source is not a string`);this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??`stream`;for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===` `||t===`	`;)t=this.buffer[++e];return!t||t===`#`||t===`
`||t===`\r`&&this.buffer[e+1]===`
`}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===` `;)t=this.buffer[++n+e];if(t===`\r`){let t=this.buffer[n+e+1];if(t===`
`||!t&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t===`-`||t===`.`){let t=this.buffer.substr(e,3);if((t===`---`||t===`...`)&&X(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!=`number`||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]===`\r`&&--e,this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case`stream`:return yield*this.parseStream();case`line-start`:return yield*this.parseLineStart();case`block-start`:return yield*this.parseBlockStart();case`doc`:return yield*this.parseDocument();case`flow`:return yield*this.parseFlowCollection();case`quoted-scalar`:return yield*this.parseQuotedScalar();case`block-scalar`:return yield*this.parseBlockScalar();case`plain-scalar`:return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext(`stream`);if(e[0]===`﻿`&&(yield*this.pushCount(1),e=e.substring(1)),e[0]===`%`){let t=e.length,n=e.indexOf(`#`);for(;n!==-1;){let r=e[n-1];if(r===` `||r===`	`){t=n-1;break}n=e.indexOf(`#`,n+1)}for(;;){let n=e[t-1];if(n===` `||n===`	`)--t;else break}let r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),`stream`}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),`stream`}return yield``,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext(`line-start`);if(e===`-`||e===`.`){if(!this.atEnd&&!this.hasChars(4))return this.setNext(`line-start`);let e=this.peek(3);if((e===`---`||e===`...`)&&X(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,e===`---`?`doc`:`stream`}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!X(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext(`block-start`);if((e===`-`||e===`?`||e===`:`)&&X(t)){let e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,`block-start`}return`doc`}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext(`doc`);let t=yield*this.pushIndicators();switch(e[t]){case`#`:yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),`doc`;case`*`:return yield*this.pushUntil(dr),`doc`;case`"`:case`'`:return yield*this.parseQuotedScalar();case`|`:case`>`:return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let r=this.getLine();if(r===null)return this.setNext(`flow`);if((n!==-1&&n<this.indentNext&&r[0]!==`#`||n===0&&(r.startsWith(`---`)||r.startsWith(`...`))&&X(r[3]))&&(n!==this.indentNext-1||this.flowLevel!==1||r[0]!==`]`&&r[0]!==`}`))return this.flowLevel=0,yield``,yield*this.parseLineStart();let i=0;for(;r[i]===`,`;)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return`flow`;case`#`:return yield*this.pushCount(r.length-i),`flow`;case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),this.flowKey=!0,--this.flowLevel,this.flowLevel?`flow`:`doc`;case`*`:return yield*this.pushUntil(dr),`flow`;case`"`:case`'`:return this.flowKey=!0,yield*this.parseQuotedScalar();case`:`:{let e=this.charAt(1);if(this.flowKey||X(e)||e===`,`)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),`flow`}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e===`'`)for(;t!==-1&&this.buffer[t+1]===`'`;)t=this.buffer.indexOf(`'`,t+2);else for(;t!==-1;){let e=0;for(;this.buffer[t-1-e]===`\\`;)e+=1;if(e%2==0)break;t=this.buffer.indexOf(`"`,t+1)}let n=this.buffer.substring(0,t),r=n.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){let e=this.continueScalar(r+1);if(e===-1)break;r=n.indexOf(`
`,e)}r!==-1&&(t=r-(n[r-1]===`\r`?2:1))}if(t===-1){if(!this.atEnd)return this.setNext(`quoted-scalar`);t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?`flow`:`doc`}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t===`+`)this.blockScalarKeep=!0;else if(t>`0`&&t<=`9`)this.blockScalarIndent=Number(t)-1;else if(t!==`-`)break}return yield*this.pushUntil(e=>X(e)||e===`#`)}*parseBlockScalar(){let e=this.pos-1,t=0,n;loop:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case` `:t+=1;break;case`
`:e=r,t=0;break;case`\r`:{let e=this.buffer[r+1];if(!e&&!this.atEnd)return this.setNext(`block-scalar`);if(e===`
`)break}default:break loop}if(!n&&!this.atEnd)return this.setNext(`block-scalar`);if(t>=this.indentNext){this.indentNext=this.blockScalarIndent===-1?t:this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let t=this.continueScalar(e+1);if(t===-1)break;e=this.buffer.indexOf(`
`,t)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext(`block-scalar`);e=this.buffer.length}}let r=e+1;for(n=this.buffer[r];n===` `;)n=this.buffer[++r];if(n===`	`){for(;n===`	`||n===` `||n===`\r`||n===`
`;)n=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let n=e-1,r=this.buffer[n];r===`\r`&&(r=this.buffer[--n]);let i=n;for(;r===` `;)r=this.buffer[--n];if(r===`
`&&n>=this.pos&&n+1+t>i)e=n;else break}while(1);return yield``,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,r;for(;r=this.buffer[++n];)if(r===`:`){let r=this.buffer[n+1];if(X(r)||e&&lr.has(r))break;t=n}else if(X(r)){let i=this.buffer[n+1];if(r===`\r`&&(i===`
`?(n+=1,r=`
`,i=this.buffer[n+1]):t=n),i===`#`||e&&lr.has(i))break;if(r===`
`){let e=this.continueScalar(n+1);if(e===-1)break;n=Math.max(n,e-2)}}else{if(e&&lr.has(r))break;t=n}return!r&&!this.atEnd?this.setNext(`plain-scalar`):(yield``,yield*this.pushToIndex(t+1,!0),e?`flow`:`doc`)}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield``),0)}*pushIndicators(){let e=0;loop:for(;;){switch(this.charAt(0)){case`!`:e+=yield*this.pushTag(),e+=yield*this.pushSpaces(!0);continue loop;case`&`:e+=yield*this.pushUntil(dr),e+=yield*this.pushSpaces(!0);continue loop;case`-`:case`?`:case`:`:{let t=this.flowLevel>0,n=this.charAt(1);if(X(n)||t&&lr.has(n)){t?this.flowKey&&=!1:this.indentNext=this.indentValue+1,e+=yield*this.pushCount(1),e+=yield*this.pushSpaces(!0);continue loop}}}break loop}return e}*pushTag(){if(this.charAt(1)===`<`){let e=this.pos+2,t=this.buffer[e];for(;!X(t)&&t!==`>`;)t=this.buffer[++e];return yield*this.pushToIndex(t===`>`?e+1:e,!1)}{let e=this.pos+1,t=this.buffer[e];for(;t;)if(cr.has(t))t=this.buffer[++e];else if(t===`%`&&sr.has(this.buffer[e+1])&&sr.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e===`\r`&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===` `||e&&n===`	`);let r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}},pr=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}};function mr(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function hr(e){for(let t=0;t<e.length;++t)switch(e[t].type){case`space`:case`comment`:case`newline`:break;default:return t}return-1}function gr(e){switch(e?.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`flow-collection`:return!0;default:return!1}}function _r(e){switch(e.type){case`document`:return e.start;case`block-map`:{let t=e.items[e.items.length-1];return t.sep??t.start}case`block-seq`:return e.items[e.items.length-1].start;default:return[]}}function vr(e){if(e.length===0)return[];let t=e.length;loop:for(;--t>=0;)switch(e[t].type){case`doc-start`:case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:case`newline`:break loop}for(;e[++t]?.type===`space`;);return e.splice(t,e.length)}function yr(e,t){if(t.length<1e5)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;++n)e.push(t[n])}function br(e){if(e.start.type===`flow-seq-start`)for(let t of e.items)t.sep&&!t.value&&!mr(t.start,`explicit-key-ind`)&&!mr(t.sep,`map-value-ind`)&&(t.key&&(t.value=t.key),delete t.key,gr(t.value)?t.value.end?yr(t.value.end,t.sep):t.value.end=t.sep:yr(t.start,t.sep),delete t.sep)}var xr=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source=``,this.type=``,this.lexer=new fr,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=or(e);if(!t){let t=`Not a YAML token: ${e}`;yield*this.pop({type:`error`,offset:this.offset,message:t,source:e}),this.offset+=e.length}else if(t===`scalar`)this.atNewLine=!1,this.atScalar=!0,this.type=`scalar`;else{switch(this.type=t,yield*this.step(),t){case`newline`:this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case`space`:this.atNewLine&&e[0]===` `&&(this.indent+=e.length);break;case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:this.atNewLine&&(this.indent+=e.length);break;case`doc-mode`:case`flow-error-end`:return;default:this.atNewLine=!1}this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type===`doc-end`&&e?.type!==`doc-end`){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:`doc-end`,offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case`document`:return yield*this.document(e);case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return yield*this.scalar(e);case`block-scalar`:return yield*this.blockScalar(e);case`block-map`:return yield*this.blockMap(e);case`block-seq`:return yield*this.blockSequence(e);case`flow-collection`:return yield*this.flowCollection(e);case`doc-end`:return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:`error`,offset:this.offset,source:``,message:`Tried to pop an empty stack`};else if(this.stack.length===0)yield t;else{let e=this.peek(1);switch(t.type===`block-scalar`?t.indent=`indent`in e?e.indent:0:t.type===`flow-collection`&&e.type===`document`&&(t.indent=0),t.type===`flow-collection`&&br(t),e.type){case`document`:e.value=t;break;case`block-scalar`:e.props.push(t);break;case`block-map`:{let n=e.items[e.items.length-1];if(n.value){e.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}if(n.sep)n.value=t;else{Object.assign(n,{key:t,sep:[]}),this.onKeyLine=!n.explicitKey;return}break}case`block-seq`:{let n=e.items[e.items.length-1];n.value?e.items.push({start:[],value:t}):n.value=t;break}case`flow-collection`:{let n=e.items[e.items.length-1];!n||n.value?e.items.push({start:[],key:t,sep:[]}):n.sep?n.value=t:Object.assign(n,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((e.type===`document`||e.type===`block-map`||e.type===`block-seq`)&&(t.type===`block-map`||t.type===`block-seq`)){let n=t.items[t.items.length-1];n&&!n.sep&&!n.value&&n.start.length>0&&hr(n.start)===-1&&(t.indent===0||n.start.every(e=>e.type!==`comment`||e.indent<t.indent))&&(e.type===`document`?e.end=n.start:e.items.push({start:n.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case`directive-line`:yield{type:`directive`,offset:this.offset,source:this.source};return;case`byte-order-mark`:case`space`:case`comment`:case`newline`:yield this.sourceToken;return;case`doc-mode`:case`doc-start`:{let e={type:`document`,offset:this.offset,start:[]};this.type===`doc-start`&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case`doc-start`:hr(e.start)===-1?e.start.push(this.sourceToken):(yield*this.pop(),yield*this.step());return;case`anchor`:case`tag`:case`space`:case`comment`:case`newline`:e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type===`map-value-ind`){let t=vr(_r(this.peek(2))),n;e.end?(n=e.end,n.push(this.sourceToken),delete e.end):n=[this.sourceToken];let r={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case`space`:case`comment`:case`newline`:e.props.push(this.sourceToken);return;case`scalar`:if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(this.onKeyLine=!1,t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){yr(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,r=n&&(t.sep||t.explicitKey)&&this.type!==`seq-item-ind`,i=[];if(r&&t.sep&&!t.value){let n=[];for(let r=0;r<t.sep.length;++r){let i=t.sep[r];switch(i.type){case`newline`:n.push(r);break;case`space`:break;case`comment`:i.indent>e.indent&&(n.length=0);break;default:n.length=0}}n.length>=2&&(i=t.sep.splice(n[1]))}switch(this.type){case`anchor`:case`tag`:r||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`explicit-key-ind`:!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case`map-value-ind`:if(t.explicitKey){if(!t.sep){if(mr(t.start,`newline`))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let e=vr(t.start);this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}}else if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(mr(t.sep,`map-value-ind`))this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(gr(t.key)&&!mr(t.sep,`newline`)){let e=vr(t.start),n=t.key,r=t.sep;r.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:n,sep:r}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken)}else t.sep?t.value||r?e.items.push({start:i,key:null,sep:[this.sourceToken]}):mr(t.sep,`map-value-ind`)?this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);r||t.value?(e.items.push({start:i,key:n,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(n):(Object.assign(t,{key:n,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type===`block-seq`){if(!t.explicitKey&&t.sep&&!mr(t.sep,`newline`)){yield*this.pop({type:`error`,offset:this.offset,message:`Unexpected block-seq-ind on same line with key`,source:this.source});return}}else n&&e.items.push({start:i});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){yr(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case`anchor`:case`tag`:if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case`seq-item-ind`:if(this.indent!==e.indent)break;t.value||mr(t.start,`seq-item-ind`)?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let t=this.startBlockValue(e);if(t){this.stack.push(t);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type===`flow-error-end`){let e;do yield*this.pop(),e=this.peek(1);while(e?.type===`flow-collection`)}else if(e.end.length===0){switch(this.type){case`comma`:case`explicit-key-ind`:!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case`map-value-ind`:!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case`space`:case`comment`:case`newline`:case`anchor`:case`tag`:!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:n,sep:[]}):t.sep?this.stack.push(n):Object.assign(t,{key:n,sep:[]});return}case`flow-map-end`:case`flow-seq-end`:e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let t=this.peek(2);if(t.type===`block-map`&&(this.type===`map-value-ind`&&t.indent===e.indent||this.type===`newline`&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type===`map-value-ind`&&t.type!==`flow-collection`){let n=vr(_r(t));br(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return this.flowScalar(this.type);case`block-scalar-header`:return{type:`block-scalar`,offset:this.offset,indent:this.indent,props:[this.sourceToken],source:``};case`flow-map-start`:case`flow-seq-start`:return{type:`flow-collection`,offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case`seq-item-ind`:return{type:`block-seq`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case`explicit-key-ind`:{this.onKeyLine=!0;let t=vr(_r(e));return t.push(this.sourceToken),{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case`map-value-ind`:{this.onKeyLine=!0;let t=vr(_r(e));return{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!==`comment`||this.indent<=t?!1:e.every(e=>e.type===`newline`||e.type===`space`)}*documentEnd(e){this.type!==`doc-mode`&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case`comma`:case`doc-start`:case`doc-end`:case`flow-seq-end`:case`flow-map-end`:case`map-value-ind`:yield*this.pop(),yield*this.step();break;case`newline`:this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop())}}};function Sr(e){let t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new pr||null,prettyErrors:t}}function Cr(e,t={}){let{lineCounter:n,prettyErrors:r}=Sr(t),i=new xr(n?.addNewLine),a=new er(t),o=null;for(let t of a.compose(i.parse(e),!0,e.length))if(!o)o=t;else if(o.options.logLevel!==`silent`){o.errors.push(new gn(t.range.slice(0,2),`MULTIPLE_DOCS`,`Source contains multiple documents; please use YAML.parseAllDocuments()`));break}return r&&n&&(o.errors.forEach(vn(e,n)),o.warnings.forEach(vn(e,n))),o}function wr(e,t,n){let r;typeof t==`function`?r=t:n===void 0&&t&&typeof t==`object`&&(n=t);let i=Cr(e,n);if(!i)return null;if(i.warnings.forEach(e=>Ze(i.options.logLevel,e)),i.errors.length>0){if(i.options.logLevel!==`silent`)throw i.errors[0];i.errors=[]}return i.toJS(Object.assign({reviver:r},n))}var Tr=`media:\r
  - name: documents\r
    label: Файлы документов\r
    input: uploads/documents\r
    output: /prometey-demo/uploads/documents\r
    extensions: [pdf, doc, docx, xls, xlsx, odt, ods, txt, csv]\r
    rename: safe\r
  - name: images\r
    label: Фотографии\r
    input: uploads/images\r
    output: /prometey-demo/uploads/images\r
    extensions: [jpg, jpeg, png, webp]\r
    rename: safe\r
\r
content:\r
  - name: parcels\r
    label: Карта и задолженность\r
    type: file\r
    path: content/parcels.json\r
    format: json\r
    fields:\r
      - name: overdueBuildingIds\r
        label: Старые отметки без суммы\r
        type: string\r
        list: true\r
        hidden: true\r
      - name: debts\r
        label: Задолженность\r
        type: object\r
        description: Добавьте дом и сумму в рублях. Номер и сумма будут видны всем посетителям. Чтобы снять отметку, удалите запись и нажмите «Сохранить и опубликовать». Один дом — одна запись.\r
        list:\r
          collapsible:\r
            collapsed: false\r
            summary: 'Задолженность: {amountRub} ₽'\r
        fields:\r
          - name: buildingId\r
            label: Дом\r
            type: select\r
            required: true\r
            options:\r
              placeholder: Выберите номер дома\r
              values:\r
                  - name: "954874845"\r
                    label: "Дом № 1"\r
                  - name: "954874846"\r
                    label: "Дом № 2"\r
                  - name: "954874847"\r
                    label: "Дом № 3 с1"\r
                  - name: "954874852"\r
                    label: "Дом № 4"\r
                  - name: "954874853"\r
                    label: "Дом № 5 с1"\r
                  - name: "954874854"\r
                    label: "Дом № 6"\r
                  - name: "954874855"\r
                    label: "Дом № 7"\r
                  - name: "954874857"\r
                    label: "Дом № 8"\r
                  - name: "954874859"\r
                    label: "Дом № 9"\r
                  - name: "954874860"\r
                    label: "Дом № 10"\r
                  - name: "954874863"\r
                    label: "Дом № 11 с1"\r
                  - name: "954874864"\r
                    label: "Дом № 12"\r
                  - name: "954874866"\r
                    label: "Дом № 13 с1"\r
                  - name: "954874869"\r
                    label: "Дом № 14"\r
                  - name: "954874873"\r
                    label: "Дом № 15"\r
                  - name: "954874874"\r
                    label: "Дом № 16"\r
                  - name: "954874875"\r
                    label: "Дом № 18"\r
                  - name: "954874872"\r
                    label: "Дом № 20"\r
                  - name: "954874871"\r
                    label: "Дом № 21"\r
                  - name: "954874870"\r
                    label: "Дом № 22"\r
                  - name: "954874868"\r
                    label: "Дом № 23"\r
                  - name: "954874867"\r
                    label: "Дом № 23 с2"\r
                  - name: "954874827"\r
                    label: "Дом № 23Б"\r
                  - name: "954874865"\r
                    label: "Дом № 24"\r
                  - name: "954874862"\r
                    label: "Дом № 26"\r
                  - name: "954874861"\r
                    label: "Дом № 27"\r
                  - name: "954874858"\r
                    label: "Дом № 28"\r
                  - name: "954874856"\r
                    label: "Дом № 29"\r
                  - name: "954874851"\r
                    label: "Дом № 31 с1"\r
                  - name: "954874850"\r
                    label: "Дом № 32"\r
                  - name: "954874849"\r
                    label: "Дом № 33"\r
                  - name: "954874848"\r
                    label: "Дом № 34"\r
                  - name: "954874844"\r
                    label: "Дом № 36"\r
                  - name: "954874804"\r
                    label: "Дом № 37"\r
                  - name: "954874807"\r
                    label: "Дом № 38 с1"\r
                  - name: "954874814"\r
                    label: "Дом № 40"\r
                  - name: "954874812"\r
                    label: "Дом № 41 с1"\r
                  - name: "954874815"\r
                    label: "Дом № 42"\r
                  - name: "954874816"\r
                    label: "Дом № 43"\r
                  - name: "954874817"\r
                    label: "Дом № 45"\r
                  - name: "954874822"\r
                    label: "Дом № 46"\r
                  - name: "954874823"\r
                    label: "Дом № 47"\r
                  - name: "954874831"\r
                    label: "Дом № 48"\r
                  - name: "954874830"\r
                    label: "Дом № 49"\r
                  - name: "954874829"\r
                    label: "Дом № 50"\r
                  - name: "954851575"\r
                    label: "Дом № 52"\r
                  - name: "954851574"\r
                    label: "Дом № 53"\r
                  - name: "954874826"\r
                    label: "Дом № 56"\r
                  - name: "954874825"\r
                    label: "Дом № 57"\r
                  - name: "954874824"\r
                    label: "Дом № 58"\r
                  - name: "954874821"\r
                    label: "Дом № 61"\r
                  - name: "954874819"\r
                    label: "Дом № 62"\r
                  - name: "954874820"\r
                    label: "Дом № 62 с2"\r
                  - name: "954874818"\r
                    label: "Дом № 63"\r
                  - name: "954874813"\r
                    label: "Дом № 64"\r
                  - name: "954874811"\r
                    label: "Дом № 65"\r
                  - name: "954874810"\r
                    label: "Дом № 66"\r
                  - name: "954874809"\r
                    label: "Дом № 67"\r
                  - name: "954874808"\r
                    label: "Дом № 68"\r
                  - name: "954874806"\r
                    label: "Дом № 69"\r
                  - name: "954874805"\r
                    label: "Дом № 70"\r
                  - name: "954874835"\r
                    label: "Дом № 71"\r
                  - name: "954874834"\r
                    label: "Дом № 72"\r
                  - name: "954874836"\r
                    label: "Дом № 73"\r
                  - name: "954874837"\r
                    label: "Дом № 74"\r
                  - name: "954874841"\r
                    label: "Дом № 75"\r
                  - name: "954874840"\r
                    label: "Дом № 76"\r
                  - name: "954874839"\r
                    label: "Дом № 77"\r
                  - name: "954874838"\r
                    label: "Дом № 78"\r
                  - name: "954874833"\r
                    label: "Дом № 79"\r
                  - name: "954874832"\r
                    label: "Дом № 80"\r
                  - name: "954851663"\r
                    label: "Дом № 81 с1"\r
                  - name: "954851664"\r
                    label: "Дом № 82"\r
                  - name: "954851665"\r
                    label: "Дом № 83"\r
                  - name: "954851666"\r
                    label: "Дом № 85"\r
                  - name: "954851675"\r
                    label: "Дом № 86"\r
                  - name: "954851676"\r
                    label: "Дом № 87"\r
                  - name: "954851677"\r
                    label: "Дом № 88"\r
                  - name: "954851678"\r
                    label: "Дом № 89"\r
                  - name: "954851679"\r
                    label: "Дом № 90"\r
                  - name: "954851689"\r
                    label: "Дом № 92"\r
                  - name: "954851690"\r
                    label: "Дом № 93 с1"\r
                  - name: "954851688"\r
                    label: "Дом № 94"\r
                  - name: "954851687"\r
                    label: "Дом № 95"\r
                  - name: "954851686"\r
                    label: "Дом № 96"\r
                  - name: "954851685"\r
                    label: "Дом № 99"\r
                  - name: "954851684"\r
                    label: "Дом № 101"\r
                  - name: "954851683"\r
                    label: "Дом № 102"\r
                  - name: "954851682"\r
                    label: "Дом № 103"\r
                  - name: "954851681"\r
                    label: "Дом № 104"\r
                  - name: "954851680"\r
                    label: "Дом № 105"\r
                  - name: "954851673"\r
                    label: "Дом № 107"\r
                  - name: "954851672"\r
                    label: "Дом № 108"\r
                  - name: "954851674"\r
                    label: "Дом № 109"\r
                  - name: "954851667"\r
                    label: "Дом № 110 с1"\r
                  - name: "954851668"\r
                    label: "Дом № 111"\r
                  - name: "954851669"\r
                    label: "Дом № 112 с1"\r
                  - name: "954851670"\r
                    label: "Дом № 113"\r
                  - name: "954851671"\r
                    label: "Дом № 114"\r
                  - name: "954851662"\r
                    label: "Дом № 115"\r
                  - name: "954851661"\r
                    label: "Дом № 116"\r
                  - name: "954851636"\r
                    label: "Дом № 117"\r
                  - name: "954851637"\r
                    label: "Дом № 118"\r
                  - name: "954851638"\r
                    label: "Дом № 119"\r
                  - name: "954851639"\r
                    label: "Дом № 120"\r
                  - name: "954851640"\r
                    label: "Дом № 121"\r
                  - name: "954851641"\r
                    label: "Дом № 122"\r
                  - name: "954851642"\r
                    label: "Дом № 123"\r
                  - name: "954851660"\r
                    label: "Дом № 124"\r
                  - name: "954851659"\r
                    label: "Дом № 126"\r
                  - name: "954851658"\r
                    label: "Дом № 127"\r
                  - name: "954851657"\r
                    label: "Дом № 128"\r
                  - name: "954851656"\r
                    label: "Дом № 129"\r
                  - name: "954851655"\r
                    label: "Дом № 131"\r
                  - name: "954851654"\r
                    label: "Дом № 132"\r
                  - name: "954851653"\r
                    label: "Дом № 133"\r
                  - name: "954851652"\r
                    label: "Дом № 134"\r
                  - name: "954851651"\r
                    label: "Дом № 135"\r
                  - name: "954851650"\r
                    label: "Дом № 136"\r
                  - name: "954851643"\r
                    label: "Дом № 137"\r
                  - name: "954851644"\r
                    label: "Дом № 138"\r
                  - name: "954851649"\r
                    label: "Дом № 139"\r
                  - name: "954851648"\r
                    label: "Дом № 140"\r
                  - name: "954851647"\r
                    label: "Дом № 141"\r
                  - name: "954851646"\r
                    label: "Дом № 142"\r
                  - name: "954851645"\r
                    label: "Дом № 143"\r
                  - name: "954851635"\r
                    label: "Дом № 144 с1"\r
                  - name: "954851634"\r
                    label: "Дом № 145"\r
                  - name: "954851628"\r
                    label: "Дом № 146"\r
                  - name: "954851627"\r
                    label: "Дом № 147"\r
                  - name: "954851626"\r
                    label: "Дом № 148"\r
                  - name: "954851624"\r
                    label: "Дом № 150"\r
                  - name: "954851625"\r
                    label: "Дом № 150 с1"\r
                  - name: "954851623"\r
                    label: "Дом № 151"\r
                  - name: "954851622"\r
                    label: "Дом № 152"\r
                  - name: "954851621"\r
                    label: "Дом № 153"\r
                  - name: "954851620"\r
                    label: "Дом № 154"\r
                  - name: "954851632"\r
                    label: "Дом № 156"\r
                  - name: "954851631"\r
                    label: "Дом № 157"\r
                  - name: "954851630"\r
                    label: "Дом № 158 с1"\r
                  - name: "954851633"\r
                    label: "Дом № 159"\r
                  - name: "954851576"\r
                    label: "Дом № 161"\r
                  - name: "954851618"\r
                    label: "Дом № 162"\r
                  - name: "954851619"\r
                    label: "Дом № 162 с1"\r
                  - name: "954851617"\r
                    label: "Дом № 163"\r
                  - name: "954851616"\r
                    label: "Дом № 164"\r
                  - name: "954851615"\r
                    label: "Дом № 166"\r
                  - name: "954851614"\r
                    label: "Дом № 167"\r
                  - name: "954851613"\r
                    label: "Дом № 168"\r
                  - name: "954851612"\r
                    label: "Дом № 170"\r
                  - name: "954851629"\r
                    label: "Дом № 172"\r
                  - name: "954851611"\r
                    label: "Дом № 173"\r
                  - name: "954851610"\r
                    label: "Дом № 175"\r
                  - name: "954851609"\r
                    label: "Дом № 176"\r
                  - name: "954851608"\r
                    label: "Дом № 177"\r
                  - name: "954851607"\r
                    label: "Дом № 178"\r
                  - name: "954851606"\r
                    label: "Дом № 179"\r
                  - name: "954851605"\r
                    label: "Дом № 181"\r
                  - name: "954851604"\r
                    label: "Дом № 182"\r
                  - name: "954851603"\r
                    label: "Дом № 183"\r
                  - name: "954851602"\r
                    label: "Дом № 184"\r
                  - name: "1253170364"\r
                    label: "Дом № 184 с1"\r
                  - name: "954851592"\r
                    label: "Дом № 186"\r
                  - name: "954851593"\r
                    label: "Дом № 188"\r
                  - name: "954851594"\r
                    label: "Дом № 189"\r
                  - name: "954851595"\r
                    label: "Дом № 190"\r
                  - name: "954851596"\r
                    label: "Дом № 191"\r
                  - name: "954851597"\r
                    label: "Дом № 192"\r
                  - name: "954851598"\r
                    label: "Дом № 193"\r
                  - name: "954851599"\r
                    label: "Дом № 194"\r
                  - name: "954851601"\r
                    label: "Дом № 196"\r
                  - name: "954851600"\r
                    label: "Дом № 197"\r
                  - name: "954851590"\r
                    label: "Дом № 198"\r
                  - name: "954851587"\r
                    label: "Дом № 200"\r
                  - name: "954851586"\r
                    label: "Дом № 201 с1"\r
                  - name: "954851583"\r
                    label: "Дом № 202"\r
                  - name: "954851582"\r
                    label: "Дом № 204"\r
                  - name: "954851581"\r
                    label: "Дом № 205"\r
                  - name: "954851577"\r
                    label: "Дом № 206"\r
                  - name: "954851578"\r
                    label: "Дом № 206 с2"\r
                  - name: "954851579"\r
                    label: "Дом № 207 с1"\r
                  - name: "954851580"\r
                    label: "Дом № 208"\r
                  - name: "954851584"\r
                    label: "Дом № 209"\r
                  - name: "954851585"\r
                    label: "Дом № 210"\r
                  - name: "954851588"\r
                    label: "Дом № 211"\r
                  - name: "954851589"\r
                    label: "Дом № 212"\r
                  - name: "954851591"\r
                    label: "Дом № 213"\r
                  - name: "1253222498"\r
                    label: "Дом № 214"\r
                  - name: "1267457228"\r
                    label: "Дом № 224"\r
                  - name: "1267457229"\r
                    label: "Дом № 225"\r
                  - name: "1267457230"\r
                    label: "Дом № 226"\r
                  - name: "1267457227"\r
                    label: "Дом № 227 с1"\r
                  - name: "1267457226"\r
                    label: "Дом № 228"\r
                  - name: "1267457233"\r
                    label: "Дом № 229"\r
                  - name: "1267457221"\r
                    label: "Дом № 230"\r
                  - name: "1267457223"\r
                    label: "Дом № 232"\r
                  - name: "1267457224"\r
                    label: "Дом № 233"\r
                  - name: "954874842"\r
                    label: "Дом № 234"\r
                  - name: "954874843"\r
                    label: "Дом № 234 с1"\r
                  - name: "954874828"\r
                    label: "Дом № 235"\r
                  - name: "1267457225"\r
                    label: "Дом № 237"\r
                  - name: "1253263708"\r
                    label: "Дом № вл222 с1"\r
                  - name: "1266277257"\r
                    label: "Дом № 246"\r
                  - name: "1267457220"\r
                    label: "Дом № 55"\r
                  - name: "1267457222"\r
                    label: "Дом № 242"\r
          - name: amountRub\r
            label: 'Сумма задолженности, ₽'\r
            type: number\r
            required: true\r
            description: Рубли и копейки, не более двух знаков после запятой. Укажите число больше нуля; погашенную задолженность удалите целиком.\r
            options:\r
              min: 0.01
              max: 90071992547409.9
              step: 0.01
      - name: numberCorrections\r
        label: Уточнить или добавить номер\r
        type: object\r
        description: Здесь можно уточнить номер существующего контура. Используйте подтверждённую схему товарищества. Контуры на сайте обозначают здания, а не кадастровые границы участков.\r
        list:\r
          collapsible:\r
            collapsed: true\r
            summary: 'Номер {number}'\r
        fields:\r
          - name: buildingId\r
            label: Здание на карте\r
            type: select\r
            required: true\r
            options:\r
              values:\r
                  - name: "954874845"\r
                    label: "Дом № 1"\r
                  - name: "954874846"\r
                    label: "Дом № 2"\r
                  - name: "954874847"\r
                    label: "Дом № 3 с1"\r
                  - name: "954874852"\r
                    label: "Дом № 4"\r
                  - name: "954874853"\r
                    label: "Дом № 5 с1"\r
                  - name: "954874854"\r
                    label: "Дом № 6"\r
                  - name: "954874855"\r
                    label: "Дом № 7"\r
                  - name: "954874857"\r
                    label: "Дом № 8"\r
                  - name: "954874859"\r
                    label: "Дом № 9"\r
                  - name: "954874860"\r
                    label: "Дом № 10"\r
                  - name: "954874863"\r
                    label: "Дом № 11 с1"\r
                  - name: "954874864"\r
                    label: "Дом № 12"\r
                  - name: "954874866"\r
                    label: "Дом № 13 с1"\r
                  - name: "954874869"\r
                    label: "Дом № 14"\r
                  - name: "954874873"\r
                    label: "Дом № 15"\r
                  - name: "954874874"\r
                    label: "Дом № 16"\r
                  - name: "954874875"\r
                    label: "Дом № 18"\r
                  - name: "954874872"\r
                    label: "Дом № 20"\r
                  - name: "954874871"\r
                    label: "Дом № 21"\r
                  - name: "954874870"\r
                    label: "Дом № 22"\r
                  - name: "954874868"\r
                    label: "Дом № 23"\r
                  - name: "954874867"\r
                    label: "Дом № 23 с2"\r
                  - name: "954874827"\r
                    label: "Дом № 23Б"\r
                  - name: "954874865"\r
                    label: "Дом № 24"\r
                  - name: "954874862"\r
                    label: "Дом № 26"\r
                  - name: "954874861"\r
                    label: "Дом № 27"\r
                  - name: "954874858"\r
                    label: "Дом № 28"\r
                  - name: "954874856"\r
                    label: "Дом № 29"\r
                  - name: "954874851"\r
                    label: "Дом № 31 с1"\r
                  - name: "954874850"\r
                    label: "Дом № 32"\r
                  - name: "954874849"\r
                    label: "Дом № 33"\r
                  - name: "954874848"\r
                    label: "Дом № 34"\r
                  - name: "954874844"\r
                    label: "Дом № 36"\r
                  - name: "954874804"\r
                    label: "Дом № 37"\r
                  - name: "954874807"\r
                    label: "Дом № 38 с1"\r
                  - name: "954874814"\r
                    label: "Дом № 40"\r
                  - name: "954874812"\r
                    label: "Дом № 41 с1"\r
                  - name: "954874815"\r
                    label: "Дом № 42"\r
                  - name: "954874816"\r
                    label: "Дом № 43"\r
                  - name: "954874817"\r
                    label: "Дом № 45"\r
                  - name: "954874822"\r
                    label: "Дом № 46"\r
                  - name: "954874823"\r
                    label: "Дом № 47"\r
                  - name: "954874831"\r
                    label: "Дом № 48"\r
                  - name: "954874830"\r
                    label: "Дом № 49"\r
                  - name: "954874829"\r
                    label: "Дом № 50"\r
                  - name: "954851575"\r
                    label: "Дом № 52"\r
                  - name: "954851574"\r
                    label: "Дом № 53"\r
                  - name: "954874826"\r
                    label: "Дом № 56"\r
                  - name: "954874825"\r
                    label: "Дом № 57"\r
                  - name: "954874824"\r
                    label: "Дом № 58"\r
                  - name: "954874821"\r
                    label: "Дом № 61"\r
                  - name: "954874819"\r
                    label: "Дом № 62"\r
                  - name: "954874820"\r
                    label: "Дом № 62 с2"\r
                  - name: "954874818"\r
                    label: "Дом № 63"\r
                  - name: "954874813"\r
                    label: "Дом № 64"\r
                  - name: "954874811"\r
                    label: "Дом № 65"\r
                  - name: "954874810"\r
                    label: "Дом № 66"\r
                  - name: "954874809"\r
                    label: "Дом № 67"\r
                  - name: "954874808"\r
                    label: "Дом № 68"\r
                  - name: "954874806"\r
                    label: "Дом № 69"\r
                  - name: "954874805"\r
                    label: "Дом № 70"\r
                  - name: "954874835"\r
                    label: "Дом № 71"\r
                  - name: "954874834"\r
                    label: "Дом № 72"\r
                  - name: "954874836"\r
                    label: "Дом № 73"\r
                  - name: "954874837"\r
                    label: "Дом № 74"\r
                  - name: "954874841"\r
                    label: "Дом № 75"\r
                  - name: "954874840"\r
                    label: "Дом № 76"\r
                  - name: "954874839"\r
                    label: "Дом № 77"\r
                  - name: "954874838"\r
                    label: "Дом № 78"\r
                  - name: "954874833"\r
                    label: "Дом № 79"\r
                  - name: "954874832"\r
                    label: "Дом № 80"\r
                  - name: "954851663"\r
                    label: "Дом № 81 с1"\r
                  - name: "954851664"\r
                    label: "Дом № 82"\r
                  - name: "954851665"\r
                    label: "Дом № 83"\r
                  - name: "954851666"\r
                    label: "Дом № 85"\r
                  - name: "954851675"\r
                    label: "Дом № 86"\r
                  - name: "954851676"\r
                    label: "Дом № 87"\r
                  - name: "954851677"\r
                    label: "Дом № 88"\r
                  - name: "954851678"\r
                    label: "Дом № 89"\r
                  - name: "954851679"\r
                    label: "Дом № 90"\r
                  - name: "954851689"\r
                    label: "Дом № 92"\r
                  - name: "954851690"\r
                    label: "Дом № 93 с1"\r
                  - name: "954851688"\r
                    label: "Дом № 94"\r
                  - name: "954851687"\r
                    label: "Дом № 95"\r
                  - name: "954851686"\r
                    label: "Дом № 96"\r
                  - name: "954851685"\r
                    label: "Дом № 99"\r
                  - name: "954851684"\r
                    label: "Дом № 101"\r
                  - name: "954851683"\r
                    label: "Дом № 102"\r
                  - name: "954851682"\r
                    label: "Дом № 103"\r
                  - name: "954851681"\r
                    label: "Дом № 104"\r
                  - name: "954851680"\r
                    label: "Дом № 105"\r
                  - name: "954851673"\r
                    label: "Дом № 107"\r
                  - name: "954851672"\r
                    label: "Дом № 108"\r
                  - name: "954851674"\r
                    label: "Дом № 109"\r
                  - name: "954851667"\r
                    label: "Дом № 110 с1"\r
                  - name: "954851668"\r
                    label: "Дом № 111"\r
                  - name: "954851669"\r
                    label: "Дом № 112 с1"\r
                  - name: "954851670"\r
                    label: "Дом № 113"\r
                  - name: "954851671"\r
                    label: "Дом № 114"\r
                  - name: "954851662"\r
                    label: "Дом № 115"\r
                  - name: "954851661"\r
                    label: "Дом № 116"\r
                  - name: "954851636"\r
                    label: "Дом № 117"\r
                  - name: "954851637"\r
                    label: "Дом № 118"\r
                  - name: "954851638"\r
                    label: "Дом № 119"\r
                  - name: "954851639"\r
                    label: "Дом № 120"\r
                  - name: "954851640"\r
                    label: "Дом № 121"\r
                  - name: "954851641"\r
                    label: "Дом № 122"\r
                  - name: "954851642"\r
                    label: "Дом № 123"\r
                  - name: "954851660"\r
                    label: "Дом № 124"\r
                  - name: "954851659"\r
                    label: "Дом № 126"\r
                  - name: "954851658"\r
                    label: "Дом № 127"\r
                  - name: "954851657"\r
                    label: "Дом № 128"\r
                  - name: "954851656"\r
                    label: "Дом № 129"\r
                  - name: "954851655"\r
                    label: "Дом № 131"\r
                  - name: "954851654"\r
                    label: "Дом № 132"\r
                  - name: "954851653"\r
                    label: "Дом № 133"\r
                  - name: "954851652"\r
                    label: "Дом № 134"\r
                  - name: "954851651"\r
                    label: "Дом № 135"\r
                  - name: "954851650"\r
                    label: "Дом № 136"\r
                  - name: "954851643"\r
                    label: "Дом № 137"\r
                  - name: "954851644"\r
                    label: "Дом № 138"\r
                  - name: "954851649"\r
                    label: "Дом № 139"\r
                  - name: "954851648"\r
                    label: "Дом № 140"\r
                  - name: "954851647"\r
                    label: "Дом № 141"\r
                  - name: "954851646"\r
                    label: "Дом № 142"\r
                  - name: "954851645"\r
                    label: "Дом № 143"\r
                  - name: "954851635"\r
                    label: "Дом № 144 с1"\r
                  - name: "954851634"\r
                    label: "Дом № 145"\r
                  - name: "954851628"\r
                    label: "Дом № 146"\r
                  - name: "954851627"\r
                    label: "Дом № 147"\r
                  - name: "954851626"\r
                    label: "Дом № 148"\r
                  - name: "954851624"\r
                    label: "Дом № 150"\r
                  - name: "954851625"\r
                    label: "Дом № 150 с1"\r
                  - name: "954851623"\r
                    label: "Дом № 151"\r
                  - name: "954851622"\r
                    label: "Дом № 152"\r
                  - name: "954851621"\r
                    label: "Дом № 153"\r
                  - name: "954851620"\r
                    label: "Дом № 154"\r
                  - name: "954851632"\r
                    label: "Дом № 156"\r
                  - name: "954851631"\r
                    label: "Дом № 157"\r
                  - name: "954851630"\r
                    label: "Дом № 158 с1"\r
                  - name: "954851633"\r
                    label: "Дом № 159"\r
                  - name: "954851576"\r
                    label: "Дом № 161"\r
                  - name: "954851618"\r
                    label: "Дом № 162"\r
                  - name: "954851619"\r
                    label: "Дом № 162 с1"\r
                  - name: "954851617"\r
                    label: "Дом № 163"\r
                  - name: "954851616"\r
                    label: "Дом № 164"\r
                  - name: "954851615"\r
                    label: "Дом № 166"\r
                  - name: "954851614"\r
                    label: "Дом № 167"\r
                  - name: "954851613"\r
                    label: "Дом № 168"\r
                  - name: "954851612"\r
                    label: "Дом № 170"\r
                  - name: "954851629"\r
                    label: "Дом № 172"\r
                  - name: "954851611"\r
                    label: "Дом № 173"\r
                  - name: "954851610"\r
                    label: "Дом № 175"\r
                  - name: "954851609"\r
                    label: "Дом № 176"\r
                  - name: "954851608"\r
                    label: "Дом № 177"\r
                  - name: "954851607"\r
                    label: "Дом № 178"\r
                  - name: "954851606"\r
                    label: "Дом № 179"\r
                  - name: "954851605"\r
                    label: "Дом № 181"\r
                  - name: "954851604"\r
                    label: "Дом № 182"\r
                  - name: "954851603"\r
                    label: "Дом № 183"\r
                  - name: "954851602"\r
                    label: "Дом № 184"\r
                  - name: "1253170364"\r
                    label: "Дом № 184 с1"\r
                  - name: "954851592"\r
                    label: "Дом № 186"\r
                  - name: "954851593"\r
                    label: "Дом № 188"\r
                  - name: "954851594"\r
                    label: "Дом № 189"\r
                  - name: "954851595"\r
                    label: "Дом № 190"\r
                  - name: "954851596"\r
                    label: "Дом № 191"\r
                  - name: "954851597"\r
                    label: "Дом № 192"\r
                  - name: "954851598"\r
                    label: "Дом № 193"\r
                  - name: "954851599"\r
                    label: "Дом № 194"\r
                  - name: "954851601"\r
                    label: "Дом № 196"\r
                  - name: "954851600"\r
                    label: "Дом № 197"\r
                  - name: "954851590"\r
                    label: "Дом № 198"\r
                  - name: "954851587"\r
                    label: "Дом № 200"\r
                  - name: "954851586"\r
                    label: "Дом № 201 с1"\r
                  - name: "954851583"\r
                    label: "Дом № 202"\r
                  - name: "954851582"\r
                    label: "Дом № 204"\r
                  - name: "954851581"\r
                    label: "Дом № 205"\r
                  - name: "954851577"\r
                    label: "Дом № 206"\r
                  - name: "954851578"\r
                    label: "Дом № 206 с2"\r
                  - name: "954851579"\r
                    label: "Дом № 207 с1"\r
                  - name: "954851580"\r
                    label: "Дом № 208"\r
                  - name: "954851584"\r
                    label: "Дом № 209"\r
                  - name: "954851585"\r
                    label: "Дом № 210"\r
                  - name: "954851588"\r
                    label: "Дом № 211"\r
                  - name: "954851589"\r
                    label: "Дом № 212"\r
                  - name: "954851591"\r
                    label: "Дом № 213"\r
                  - name: "1253222498"\r
                    label: "Дом № 214"\r
                  - name: "1267457228"\r
                    label: "Дом № 224"\r
                  - name: "1267457229"\r
                    label: "Дом № 225"\r
                  - name: "1267457230"\r
                    label: "Дом № 226"\r
                  - name: "1267457227"\r
                    label: "Дом № 227 с1"\r
                  - name: "1267457226"\r
                    label: "Дом № 228"\r
                  - name: "1267457233"\r
                    label: "Дом № 229"\r
                  - name: "1267457221"\r
                    label: "Дом № 230"\r
                  - name: "1267457223"\r
                    label: "Дом № 232"\r
                  - name: "1267457224"\r
                    label: "Дом № 233"\r
                  - name: "954874842"\r
                    label: "Дом № 234"\r
                  - name: "954874843"\r
                    label: "Дом № 234 с1"\r
                  - name: "954874828"\r
                    label: "Дом № 235"\r
                  - name: "1267457225"\r
                    label: "Дом № 237"\r
                  - name: "1253263708"\r
                    label: "Дом № вл222 с1"\r
                  - name: "1266277257"\r
                    label: "Дом № 246"\r
                  - name: "1267457220"\r
                    label: "Дом № 55"\r
                  - name: "1267457222"\r
                    label: "Дом № 242"\r
          - name: number\r
            label: Подтверждённый номер\r
            type: string\r
            required: true\r
            pattern:\r
              regex: '^[0-9A-Za-zА-Яа-яЁё ./-]{1,24}$'\r
              message: Укажите номер дома длиной до 24 символов.\r
\r
  - name: cameras\r
    label: Камеры\r
    type: file\r
    path: content/cameras.json\r
    format: json\r
    fields:\r
      - name: items\r
        label: Камеры товарищества\r
        type: object\r
        list:\r
          collapsible:\r
            collapsed: true\r
            summary: '{title}'\r
        fields:\r
          - name: id\r
            type: uuid\r
            hidden: true\r
          - name: title\r
            label: Название камеры\r
            type: string\r
            required: true\r
          - name: description\r
            label: Что показывает камера\r
            type: string\r
          - name: streamUrl\r
            label: Публичная ссылка HLS\r
            type: string\r
            description: Только для открытого видео в плеере сайта. HTTPS-ссылка с окончанием .m3u8, без пароля и параметров. Заполните либо это поле, либо «Защищённая страница просмотра». Если оба поля пусты, камера ожидает подключения. RTSP, облачный ID и данные входа сюда не добавляйте. Все поля хранятся публично.\r
          - name: viewerUrl\r
            label: Защищённая страница просмотра\r
            type: string\r
            description: HTTPS-ссылка на отдельную страницу плеера, которая запросит логин и пароль. Откроется в новой вкладке. Защита настраивается на видеосервере — само это поле пароль не устанавливает. Без учётных данных и параметров в ссылке. При заполнении оставьте «Публичная ссылка HLS» пустой.\r
          - name: published\r
            label: Показывать камеру на сайте\r
            type: boolean\r
            default: false\r
            description: Скрывает карточку, но не закрывает сам видеопоток. Ограничения просмотра настраиваются на видеосервере.\r
\r
  - name: news\r
    label: Новости и объявления\r
    type: file\r
    path: content/news.json\r
    format: json\r
    fields:\r
      - name: items\r
        label: Новости\r
        type: object\r
        list:\r
          collapsible:\r
            collapsed: true\r
            summary: '{title}'\r
        fields:\r
          - name: id\r
            type: uuid\r
            hidden: true\r
          - name: title\r
            label: Заголовок\r
            type: string\r
            required: true\r
          - name: date\r
            label: Дата публикации\r
            type: date\r
            options:\r
              format: yyyy-MM-dd\r
          - name: published\r
            label: Показывать на сайте\r
            type: boolean\r
            default: false\r
            description: Включите и сохраните, чтобы новость появилась на сайте. Выключение убирает её из ленты; содержимое остаётся в публичном хранилище.\r
          - name: pinned\r
            label: Важное — показывать первым\r
            type: boolean\r
            default: false\r
          - name: image\r
            label: Фотография обложки\r
            type: image\r
            options:\r
              media: images\r
          - name: body\r
            label: Текст новости\r
            type: rich-text\r
            required: true\r
            options:\r
              format: markdown\r
              media: images\r
              switcher: false\r
\r
  - name: documents\r
    label: Документы\r
    type: file\r
    path: content/documents.json\r
    format: json\r
    fields:\r
      - name: items\r
        label: Документы для жителей\r
        type: object\r
        list:\r
          collapsible:\r
            collapsed: true\r
            summary: '{title}'\r
        fields:\r
          - name: id\r
            type: uuid\r
            hidden: true\r
          - name: title\r
            label: Название документа\r
            type: string\r
            required: true\r
          - name: category\r
            label: Категория\r
            type: select\r
            required: true\r
            default: Бланки\r
            options:\r
              values: [Устав, Собрания, Финансы, Бланки, Другое]\r
          - name: date\r
            label: Дата документа\r
            type: date\r
            options:\r
              format: yyyy-MM-dd\r
          - name: description\r
            label: Краткое пояснение\r
            type: text\r
          - name: url\r
            label: Загрузить или выбрать файл\r
            type: file\r
            required: true\r
            options:\r
              media: documents\r
            description: "PDF, Word или таблица — до 20 МБ. Загрузите новый файл или выберите его из библиотеки. Публикуйте только документы для открытого доступа."\r
          - name: published\r
            label: Показывать на сайте\r
            type: boolean\r
            default: false\r
            description: Выключение убирает документ из раздела. Неиспользуемый файл можно переместить в корзину в «Фотографии и файлы».\r
\r
  - name: meetings\r
    label: Собрания\r
    type: file\r
    path: content/meetings.json\r
    format: json\r
    fields:\r
      - name: items\r
        label: Собрания товарищества\r
        type: object\r
        list:\r
          collapsible:\r
            collapsed: true\r
            summary: '{title}'\r
        fields:\r
          - name: id\r
            type: uuid\r
            hidden: true\r
          - name: title\r
            label: Название\r
            type: string\r
            required: true\r
          - name: date\r
            label: Дата собрания\r
            type: date\r
            options:\r
              format: yyyy-MM-dd\r
          - name: place\r
            label: Время и место\r
            type: string\r
          - name: agenda\r
            label: Повестка и пояснения\r
            type: text\r
          - name: published\r
            label: Показывать на сайте\r
            type: boolean\r
            default: false\r
\r
  - name: organization\r
    label: Контакты и правление\r
    type: file\r
    path: content/organization.json\r
    format: json\r
    fields:\r
      - name: address\r
        label: Адрес\r
        type: string\r
        required: true\r
      - name: locationShort\r
        label: Короткое название расположения\r
        type: string\r
        required: true\r
      - name: about\r
        label: О товариществе\r
        type: text\r
        required: true\r
      - name: phone\r
        label: Телефон правления\r
        type: string\r
      - name: email\r
        label: Электронная почта\r
        type: string\r
      - name: reception\r
        label: Время и место приёма\r
        type: text\r
      - name: board\r
        label: Состав правления\r
        type: object\r
        list:\r
          collapsible:\r
            collapsed: true\r
            summary: '{name}'\r
        fields:\r
          - name: name\r
            label: Имя\r
            type: string\r
            required: true\r
          - name: role\r
            label: Должность\r
            type: string\r
            required: true\r
\r
  - name: payments\r
    label: Взносы и реквизиты\r
    type: file\r
    path: content/payments.json\r
    format: json\r
    fields:\r
      - name: published\r
        label: Показывать реквизиты на сайте\r
        type: boolean\r
        default: false\r
        description: Перед включением заполните получателя, ИНН, банк, БИК и расчётный счёт. Проверьте реквизиты с правлением.\r
      - name: details\r
        label: Размер взносов, сроки и пояснения\r
        type: rich-text\r
        options:\r
          format: markdown\r
          media: false\r
          switcher: false\r
      - name: recipient\r
        label: Получатель\r
        type: string\r
      - name: inn\r
        label: ИНН\r
        type: string\r
        pattern:\r
          regex: '^$|^([0-9]{10}|[0-9]{12})$'\r
          message: ИНН должен содержать 10 или 12 цифр.\r
      - name: kpp\r
        label: КПП\r
        type: string\r
        pattern: '^$|^[0-9]{9}$'\r
      - name: bank\r
        label: Банк\r
        type: string\r
      - name: bik\r
        label: БИК\r
        type: string\r
        pattern: '^$|^[0-9]{9}$'\r
      - name: account\r
        label: Расчётный счёт\r
        type: string\r
        pattern: '^$|^[0-9]{20}$'\r
      - name: correspondent\r
        label: Корреспондентский счёт\r
        type: string\r
        pattern: '^$|^[0-9]{20}$'\r
\r
  - name: questions\r
    label: Вопросы и ответы\r
    type: file\r
    path: content/questions.json\r
    format: json\r
    fields:\r
      - name: items\r
        label: Ответы для жителей\r
        type: object\r
        list:\r
          collapsible:\r
            collapsed: true\r
            summary: '{question}'\r
        fields:
          - name: published
            label: Показывать на сайте
            type: boolean
            default: true
            description: Выключите и сохраните, чтобы скрыть ответ. Существующие ответы без этого поля остаются видимыми.
          - name: question
            label: Вопрос\r
            type: string\r
            required: true\r
          - name: answer
            label: Ответ
            type: text
            required: true

  - name: "homepage"
    label: "Главная страница и фотоальбом"
    type: "file"
    path: "content/homepage.json"
    format: "json"
    fields:
      - name: "hero"
        label: "Тексты пролёта"
        type: "object"
        description: "Редактируются надписи на трёх этапах. Сам видеопролёт и движение камеры настроены разработчиком."
        fields:
          - name: "intro"
            label: "Начало — у берега"
            type: "object"
            fields:
              - name: "eyebrow"
                label: "Надпись над заголовком"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,70}$"
                  message: "Не более 70 символов, без переноса строки."
              - name: "titleLine1"
                label: "Заголовок — первая строка"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,32}$"
                  message: "Не более 32 символов, без переноса строки."
              - name: "titleLine2"
                label: "Заголовок — вторая строка"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,32}$"
                  message: "Не более 32 символов, без переноса строки."
              - name: "description"
                label: "Описание"
                type: "text"
                required: true
                pattern:
                  regex: "^[\\\\s\\\\S]{1,240}$"
                  message: "Не более 240 символов."
                description: "Перенос строки создаёт новую строку на сайте. Короткий текст лучше читается поверх пейзажа."
          - name: "river"
            label: "Середина — вдоль реки"
            type: "object"
            fields:
              - name: "eyebrow"
                label: "Надпись над заголовком"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,70}$"
                  message: "Не более 70 символов, без переноса строки."
              - name: "titleLine1"
                label: "Заголовок — первая строка"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,32}$"
                  message: "Не более 32 символов, без переноса строки."
              - name: "titleLine2"
                label: "Заголовок — вторая строка"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,32}$"
                  message: "Не более 32 символов, без переноса строки."
              - name: "description"
                label: "Описание"
                type: "text"
                required: true
                pattern:
                  regex: "^[\\\\s\\\\S]{1,240}$"
                  message: "Не более 240 символов."
                description: "Перенос строки создаёт новую строку на сайте. Короткий текст лучше читается поверх пейзажа."
          - name: "home"
            label: "Финал — своё место"
            type: "object"
            fields:
              - name: "eyebrow"
                label: "Надпись над заголовком"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,70}$"
                  message: "Не более 70 символов, без переноса строки."
              - name: "titleLine1"
                label: "Заголовок — первая строка"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,32}$"
                  message: "Не более 32 символов, без переноса строки."
              - name: "titleLine2"
                label: "Заголовок — вторая строка"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,32}$"
                  message: "Не более 32 символов, без переноса строки."
              - name: "description"
                label: "Описание"
                type: "text"
                required: true
                pattern:
                  regex: "^[\\\\s\\\\S]{1,240}$"
                  message: "Не более 240 символов."
                description: "Перенос строки создаёт новую строку на сайте. Короткий текст лучше читается поверх пейзажа."
      - name: "album"
        label: "Фотоальбом"
        type: "object"
        fields:
          - name: "label"
            label: "Метка над заголовком"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,40}$"
              message: "Не более 40 символов, без переноса строки."
          - name: "title"
            label: "Заголовок альбома"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,60}$"
              message: "Не более 60 символов, без переноса строки."
          - name: "intro"
            label: "Вступление"
            type: "text"
            required: true
            pattern:
              regex: "^[\\\\s\\\\S]{1,320}$"
              message: "Не более 320 символов."
          - name: "fullAlbumUrl"
            label: "Ссылка на полный альбом"
            type: "string"
            description: "Необязательная HTTPS-ссылка, например на Облако Mail. Очистите поле, чтобы скрыть ссылку."
            pattern:
              regex: "^$|^https://[^\\\\s]{1,2040}$"
              message: "Укажите HTTPS-ссылку или оставьте поле пустым."
          - name: "items"
            label: "Фотографии и порядок"
            type: "object"
            description: "До 60 фотографий. Перетаскивайте записи, чтобы менять порядок. Загрузите свою фотографию или выберите готовую. Загруженная фотография имеет приоритет. После удаления всех записей альбом останется пустым."
            list:
              max: 60
              collapsible:
                collapsed: true
                summary: "{title}"
            fields:
              - name: "published"
                label: "Показывать в альбоме"
                type: "boolean"
                default: false
                description: "Включите после заполнения записи. Скрытая запись и файл остаются в публичном хранилище; используйте только фотографии для открытого сайта."
              - name: "builtinPhoto"
                label: "Готовая фотография Прометея"
                type: "select"
                default: "custom"
                options:
                  values:
                    - name: "custom"
                      label: "Своя загруженная фотография"
                    - name: "blue-river"
                      label: "Десна"
                    - name: "river-evening"
                      label: "Вечер у реки"
                    - name: "birch-walk"
                      label: "Берёзовая тропа"
                    - name: "evening-reeds"
                      label: "Тихий берег"
                    - name: "willow-bank"
                      label: "Ивы у воды"
                    - name: "golden-shore"
                      label: "Золотой свет"
                    - name: "autumn-river"
                      label: "Осенние берега"
                    - name: "summer-meadow"
                      label: "Летний луг"
                    - name: "winter-light"
                      label: "Зимний день"
                    - name: "green-river"
                      label: "Зелёный берег"
                    - name: "misty-river"
                      label: "Туман над водой"
                    - name: "sunset-meadow"
                      label: "Вечерний луг"
              - name: "image"
                label: "Загрузить свою фотографию"
                type: "image"
                options:
                  media: "images"
                description: "JPG, PNG или WebP. Рекомендуется до 2 МБ и ширина 1600–2400 пикселей. Если это поле заполнено, оно заменяет выбранную готовую фотографию."
              - name: "title"
                label: "Название фотографии"
                type: "string"
                required: true
                pattern:
                  regex: "^[^\\\\r\\\\n]{1,80}$"
                  message: "Не более 80 символов, без переноса строки."
              - name: "alt"
                label: "Описание изображения"
                type: "text"
                required: true
                pattern:
                  regex: "^[\\\\s\\\\S]{1,240}$"
                  message: "Не более 240 символов."
                description: "Что изображено на снимке. Этот текст доступен посетителям, использующим экранный диктор."
              - name: "note"
                label: "Короткая подпись"
                type: "string"
                pattern:
                  regex: "^[\\\\s\\\\S]{0,120}$"
                  message: "Не более 120 символов, без переноса строки."
      - name: "territory"
        label: "Заголовок карты домов"
        type: "object"
        fields:
          - name: "eyebrow"
            label: "Надпись над заголовком"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,70}$"
              message: "Не более 70 символов, без переноса строки."
          - name: "titleLine1"
            label: "Заголовок — первая строка"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,32}$"
              message: "Не более 32 символов, без переноса строки."
          - name: "titleLine2"
            label: "Заголовок — вторая строка"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,32}$"
              message: "Не более 32 символов, без переноса строки."
          - name: "description"
            label: "Описание"
            type: "text"
            required: true
            pattern:
              regex: "^[\\\\s\\\\S]{1,240}$"
              message: "Не более 240 символов."
            description: "Перенос строки создаёт новую строку на сайте. Короткий текст лучше читается поверх пейзажа."
      - name: "contacts"
        label: "Пейзаж перед контактами"
        type: "object"
        fields:
          - name: "eyebrow"
            label: "Надпись над заголовком"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,70}$"
              message: "Не более 70 символов, без переноса строки."
          - name: "titleLine1"
            label: "Заголовок — первая строка"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,32}$"
              message: "Не более 32 символов, без переноса строки."
          - name: "titleLine2"
            label: "Заголовок — вторая строка"
            type: "string"
            required: true
            pattern:
              regex: "^[^\\\\r\\\\n]{1,32}$"
              message: "Не более 32 символов, без переноса строки."
          - name: "note"
            label: "Подпись фотографии"
            type: "string"
            pattern:
              regex: "^[\\\\s\\\\S]{0,120}$"
              message: "Не более 120 символов, без переноса строки."
`,Z=class extends Error{status;code;constructor(e,t,n){super(e),this.status=t,this.code=n,this.name=`AdminApiError`}};async function Q(t,n={}){let r=new URLSearchParams({action:t});n.section&&r.set(`section`,n.section);let i=new AbortController,a=()=>i.abort();n.signal?.addEventListener(`abort`,a,{once:!0}),n.signal?.aborted&&i.abort();let o=setTimeout(a,n.form?12e4:3e4);try{let t={};n.csrf&&(t[`X-CSRF-Token`]=n.csrf),n.data!==void 0&&(t[`Content-Type`]=`application/json`);let a=await fetch(`${e(`api/admin.php`)}?${r}`,{method:n.method||`GET`,credentials:`same-origin`,cache:`no-store`,headers:t,body:n.form||(n.data===void 0?void 0:JSON.stringify(n.data)),signal:i.signal}),o;try{o=await a.json()}catch{throw new Z(`Сервер управления пока недоступен. Повторите подключение.`,a.status,`invalid_response`)}if(!a.ok){let e=o;throw new Z(e.error||`Не удалось выполнить действие. Повторите попытку.`,a.status,e.code||`request_failed`)}return o}finally{clearTimeout(o),n.signal?.removeEventListener(`abort`,a)}}var Er=e=>e&&typeof e==`object`&&!Array.isArray(e)?e:{};function Dr(e){return Object.hasOwn(e,`default`)?structuredClone(e.default):e.list?[]:e.type===`uuid`?crypto.randomUUID():e.type===`object`?Object.fromEntries((e.fields||[]).map(e=>[e.name,Dr(e)])):e.type!==`boolean`&&``}function Or(e){return Dr({...e,list:!1})}var kr=(e,t,n)=>({...e,[t]:n});function Ar(e,t){let n=t.map(e=>({name:e.buildingId,label:e.number?`Дом № ${e.number}`:`Без номера · ${e.buildingId}`}));return e.map(e=>({...e,...e.fields?{fields:Ar(e.fields,t)}:{},...e.name===`buildingId`&&e.type===`select`?{options:{...e.options,values:n}}:{}}))}function jr(e,t,n){if(!Number.isInteger(t)||!Number.isInteger(n)||t<0||n<0||t>=e.length||n>=e.length)return[...e];let r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function Mr(e,t,n=!0){let r=typeof t==`string`||typeof t==`number`?String(t):``;if(!r.trim())return e.required&&n?`Заполните поле «${e.label||e.name}».`:``;if(e.pattern){let t=typeof e.pattern==`string`?e.pattern:e.pattern.regex;try{if(!RegExp(`^(?:${t})$`,`u`).test(r))return typeof e.pattern==`object`&&e.pattern.message?e.pattern.message:`Проверьте формат поля «${e.label||e.name}».`}catch{return`Не удалось проверить формат поля «${e.label||e.name}». Обратитесь к владельцу сайта.`}}if(e.type===`number`){let n=Number(t);if(!Number.isFinite(n))return`Введите число.`;if(e.options?.min!==void 0&&n<e.options.min)return`Минимальное значение: ${e.options.min}.`;if(e.options?.max!==void 0&&n>e.options.max)return`Максимальное значение: ${e.options.max}.`}return``}function Nr(e,t,n){let r=Er(t);if(typeof r.buildingId==`string`){let t=(e.fields?.find(e=>e.name===`buildingId`)?.options?.values||[]).find(e=>typeof e==`object`&&String(e.name)===r.buildingId),n=typeof t==`object`?t.label||String(t.name):``;if(n)return r.amountRub?`${n} · ${new Intl.NumberFormat(`ru-RU`,{maximumFractionDigits:2}).format(Number(r.amountRub))} ₽`:n}for(let e of[`title`,`question`,`name`,`number`])if(typeof r[e]==`string`&&r[e].trim())return r[e].trim();return typeof t==`string`&&t.trim()?t.trim():`Запись ${n+1}`}var Pr=[`jpg`,`jpeg`,`png`,`webp`],Fr=[`pdf`,`doc`,`docx`,`xls`,`xlsx`,`odt`,`ods`,`txt`,`csv`],Ir=2e7,Lr=2e6,Rr=2048,zr=.85,Br=e=>e.split(/[\\/]/u).pop()||``,Vr=e=>{let t=Br(e).normalize(`NFKC`),n=t.lastIndexOf(`.`);return n<0?``:t.slice(n+1).toLowerCase()};function Hr(e){let t=Vr(e.name);if([`heic`,`heif`].includes(t)||/^image\/hei[cf]/iu.test(e.type||``))throw Error(`Фото HEIC нужно сначала экспортировать в JPG. На телефоне выберите «Сохранить как JPG» или отправьте фотографию в совместимом формате, затем выберите её здесь.`);if(!Number.isSafeInteger(e.size)||e.size<=0)throw Error(`Этот файл пустой или повреждён. Выберите другой файл.`);if(Pr.includes(t))return`image`;if(Fr.includes(t))return`document`;throw Error(`Этот формат не поддерживается. Для фото используйте JPG, PNG или WebP; для документов — PDF, Word, Excel, ODT, ODS, TXT или CSV.`)}function Ur(e,t){let n=Br(e).normalize(`NFKC`),r=(t||Vr(n)).toLowerCase();if(![...Pr,...Fr].includes(r))throw Error(`Недопустимый формат подготовленного файла.`);let i=n.lastIndexOf(`.`),a=(i>0?n.slice(0,i):n).replace(/[\p{Cc}\p{Cf}]/gu,``).replace(/[^\p{L}\p{N}_-]+/gu,`-`).replace(/-+/gu,`-`).replace(/^[-_]+|[-_]+$/gu,``),o=Array.from(a).slice(0,96).join(``).replace(/-+$/gu,``)||`prometey-file`;return/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])$/iu.test(o)&&(o=`prometey-${o}`),`${o}.${r===`jpeg`?`jpg`:r}`}function Wr(e,t,n=Rr){if(![e,t,n].every(e=>Number.isFinite(e)&&e>=1))throw Error(`Не удалось определить размер фотографии.`);let r=Math.min(1,n/Math.max(e,t));return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(t*r))}}function Gr(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength);if(e.length>=24&&e[0]===137&&e[1]===80&&e[2]===78&&e[3]===71)return{width:t.getUint32(16),height:t.getUint32(20)};if(e.length>=2&&e[0]===255&&e[1]===216){let n=2;for(;n+3<e.length;){if(e[n]!==255)return null;for(;n<e.length&&e[n]===255;)n+=1;let r=e[n++];if(r===217||r===218)return null;if(r===1||r>=208&&r<=215)continue;if(n+2>e.length)return null;let i=t.getUint16(n);if(i<2||n+i>e.length)return null;if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(r)&&i>=7)return{height:t.getUint16(n+3),width:t.getUint16(n+5)};n+=i}}if(e.length>=30&&String.fromCharCode(...e.subarray(0,4))===`RIFF`&&String.fromCharCode(...e.subarray(8,12))===`WEBP`){let n=String.fromCharCode(...e.subarray(12,16));if(n===`VP8X`)return{width:1+e[24]+(e[25]<<8)+(e[26]<<16),height:1+e[27]+(e[28]<<8)+(e[29]<<16)};if(n===`VP8 `&&e[23]===157&&e[24]===1&&e[25]===42)return{width:t.getUint16(26,!0)&16383,height:t.getUint16(28,!0)&16383};if(n===`VP8L`&&e[20]===47)return{width:1+e[21]+((e[22]&63)<<8),height:1+(e[22]>>6)+(e[23]<<2)+((e[24]&15)<<10)}}return null}function Kr(e,t){if(e<1||t<1||e*t>32e6)throw Error(`Фото слишком большое для подготовки в браузере. Экспортируйте копию до 32 мегапикселей или уменьшите её размер и выберите снова.`)}function qr(e){if(e?.aborted)throw new DOMException(`Подготовка отменена`,`AbortError`)}async function Jr(e,t){if(qr(t),typeof createImageBitmap==`function`)try{let n=await createImageBitmap(e,{imageOrientation:`from-image`});return t?.aborted&&(n.close(),qr(t)),{source:n,width:n.width,height:n.height,close:()=>n.close()}}catch(e){if(t?.aborted||e instanceof DOMException&&e.name===`AbortError`)throw e}let n=URL.createObjectURL(e),r=new Image;try{return r.src=n,await r.decode(),qr(t),{source:r,width:r.naturalWidth,height:r.naturalHeight,close:()=>{r.src=``,URL.revokeObjectURL(n)}}}catch{throw r.src=``,URL.revokeObjectURL(n),qr(t),Error(`Браузер не смог открыть фотографию. Попробуйте экспортировать её в JPG и выбрать снова.`)}}async function Yr(e,t){let n=Hr(e);qr(t);let r={kind:n,originalName:e.name,originalSize:e.size};if(n===`document`)return{...r,filename:Ur(e.name),blob:e,withinUploadRecommendation:e.size<=Ir};if(e.size>32e6)throw Error(`Фотография больше 32 МБ. Экспортируйте копию меньшего размера и выберите снова.`);let i=Gr(new Uint8Array(await e.slice(0,1e6).arrayBuffer()));qr(t),i&&Kr(i.width,i.height);let a=await Jr(e,t),o=document.createElement(`canvas`);try{Kr(a.width,a.height);let n=Wr(a.width,a.height);for(let i=0;i<8;i+=1){qr(t),o.width=n.width,o.height=n.height;let i=o.getContext(`2d`);if(!i)throw Error(`В этом браузере недоступна подготовка фото. Откройте панель в современном Chrome, Edge, Safari или Firefox.`);i.drawImage(a.source,0,0,n.width,n.height);let s=await new Promise((e,t)=>o.toBlob(n=>n?e(n):t(Error(`Не удалось подготовить фотографию. Попробуйте другой файл.`)),`image/webp`,zr));if(qr(t),s.type!==`image/webp`)throw Error(`Этот браузер не умеет сохранять фото в WebP. Подготовьте фотографию в другом современном браузере.`);if(s.size<=2e6)return{...r,filename:Ur(e.name,`webp`),blob:s,dimensions:n,withinUploadRecommendation:!0};let c=Math.min(.8,Math.sqrt(Lr/s.size)*.94);n=Wr(n.width,n.height,Math.max(1,Math.floor(Math.max(n.width,n.height)*c)))}throw Error(`Не удалось уменьшить фотографию до 2 МБ. Попробуйте сохранить её в меньшем размере и выбрать снова.`)}finally{a.close(),o.width=1,o.height=1}}var $=a();function Xr({fields:e,value:t,onChange:n,...r}){return(0,$.jsx)(`div`,{className:`admin-fields`,children:(0,$.jsx)(Zr,{fields:e,value:t,onChange:n,...r,requiredEnabled:t.published!==!1})})}function Zr({fields:e,value:t,onChange:n,...r}){return(0,$.jsx)($.Fragment,{children:e.filter(e=>!e.hidden).map(e=>(0,$.jsx)(Qr,{field:e,value:t[e.name],onChange:r=>n(kr(t,e.name,r)),...r},e.name))})}function Qr(e){let{field:t,value:n,onChange:r,...i}=e;if(t.list)return(0,$.jsx)(ei,{...e});if(t.type===`object`){let a=Er(n);return(0,$.jsxs)(`fieldset`,{className:`admin-object-field`,disabled:e.busy,children:[(0,$.jsx)(`legend`,{children:t.label||t.name}),t.description&&(0,$.jsx)(`p`,{className:`admin-field-description`,children:t.description}),(0,$.jsx)(Zr,{fields:t.fields||[],value:a,onChange:r,...i,requiredEnabled:e.requiredEnabled&&a.published!==!1})]})}return t.type===`image`||t.type===`file`?(0,$.jsx)(ti,{...e}):(0,$.jsx)($r,{...e})}function $r({field:e,value:t,onChange:n,busy:r,requiredEnabled:i}){let a=(0,w.useId)(),o=(0,w.useRef)(null),s=typeof t==`string`||typeof t==`number`?String(t):``,c=e.label||e.name,l=e.required===!0&&i;if((0,w.useEffect)(()=>{o.current?.setCustomValidity(e.type===`boolean`?``:Mr(e,t,i))},[e,t,i]),e.type===`boolean`)return(0,$.jsxs)(`label`,{className:`admin-boolean-field`,htmlFor:a,children:[(0,$.jsx)(`input`,{id:a,type:`checkbox`,checked:t===!0||t===void 0&&e.default===!0,onChange:e=>n(e.target.checked),disabled:r}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:c}),e.description&&(0,$.jsx)(`small`,{children:e.description})]})]});let u={id:a,required:l,disabled:r,"aria-describedby":e.description?`${a}-help`:void 0},d;if(e.type===`select`){let t=e.options?.values||[],r=!s||t.some(e=>String(typeof e==`object`?e.name:e)===s);d=(0,$.jsxs)(`select`,{...u,ref:e=>{o.current=e},value:s,onChange:e=>n(e.target.value),children:[(0,$.jsx)(`option`,{value:``,children:e.options?.placeholder||`Выберите значение`}),!r&&(0,$.jsxs)(`option`,{value:s,children:[s,` — текущее значение`]}),t.map(e=>(0,$.jsx)(`option`,{value:String(typeof e==`object`?e.name:e),children:typeof e==`object`?e.label||String(e.name):String(e)},String(typeof e==`object`?e.name:e)))]})}else d=e.type===`text`||e.type===`rich-text`?(0,$.jsx)(`textarea`,{...u,ref:e=>{o.current=e},rows:e.type===`rich-text`?7:3,value:s,onChange:e=>n(e.target.value)}):(0,$.jsx)(`input`,{...u,ref:e=>{o.current=e},type:e.type===`date`?`date`:e.type===`number`?`number`:`text`,inputMode:e.type===`number`?`decimal`:void 0,min:e.options?.min,max:e.options?.max,step:e.type===`number`?e.options?.step??`any`:void 0,value:s,onChange:t=>n(e.type===`number`&&t.target.value!==``?Number(t.target.value):t.target.value)});return(0,$.jsxs)(`div`,{className:`admin-scalar-field`,children:[(0,$.jsxs)(`label`,{htmlFor:a,children:[c,l&&(0,$.jsx)(`span`,{className:`admin-required`,"aria-hidden":`true`,children:`*`})]}),d,e.description&&(0,$.jsx)(`p`,{id:`${a}-help`,className:`admin-field-description`,children:e.description}),e.type===`rich-text`&&(0,$.jsx)(`p`,{className:`admin-field-format`,children:`Можно писать обычный текст. Для подзаголовка: ## Название; для списка: строки с «-».`})]})}function ei({field:e,value:t,onChange:n,...r}){let i=(0,w.useId)(),a=Array.isArray(t)?t:[],o=typeof e.list==`object`?e.list:{},s=typeof o.collapsible==`object`?o.collapsible.collapsed===!0:o.collapsible===!0,c=(0,w.useRef)([]),l=(0,w.useRef)([]);if(a!==l.current){let e=c.current,t=l.current,n=new Set;c.current=a.map((r,i)=>{let a=Er(r),o=typeof a.id==`string`?t.findIndex(e=>Er(e).id===a.id):-1,s=t.indexOf(r),c=e[o>=0?o:s>=0?s:i],l=c&&!n.has(c)?c:crypto.randomUUID();return n.add(l),l}),l.current=a}let[d,p]=(0,w.useState)(()=>new Set(s?[]:c.current)),m=(0,w.useRef)({}),h=(0,w.useRef)(null),_=(e,t)=>{let r=jr(a,e,e+t);c.current=jr(c.current,e,e+t),l.current=r,n(r)},v=e=>{let t=a.filter((t,n)=>n!==e),r=c.current[e];c.current=c.current.filter((t,n)=>n!==e);let i=c.current[Math.min(e,c.current.length-1)];l.current=t,p(e=>{let t=new Set(e);return t.delete(r),t}),n(t),requestAnimationFrame(()=>{i?m.current[i]?.focus():h.current?.focus()})};return(0,$.jsxs)(`section`,{className:`admin-list-field`,"aria-labelledby":`${i}-title`,children:[(0,$.jsxs)(`div`,{className:`admin-list-heading`,children:[(0,$.jsx)(`h3`,{id:`${i}-title`,children:e.label||e.name}),(0,$.jsxs)(`span`,{children:[a.length,o.max===void 0?``:` / ${o.max}`]})]}),e.description&&(0,$.jsx)(`p`,{className:`admin-field-description`,children:e.description.replace(`Перетаскивайте записи, чтобы менять порядок.`,`Меняйте порядок кнопками со стрелками.`)}),a.length===0&&(0,$.jsx)(`p`,{className:`admin-list-empty`,children:`Записей пока нет. Добавьте первую, когда будете готовы.`}),(0,$.jsx)(`div`,{className:`admin-list-items`,children:a.map((t,s)=>{let f=c.current[s],h=Er(t).published===!1,y=d.has(f),b=Nr(e,t,s),S={...e,label:e.type===`object`?void 0:`Запись ${s+1}`,list:!1,description:void 0};return(0,$.jsxs)(`div`,{className:`admin-list-item ${y?`is-open`:``}`,children:[(0,$.jsxs)(`div`,{className:`admin-list-item-header`,children:[(0,$.jsxs)(`button`,{type:`button`,className:`admin-list-item-toggle`,ref:e=>{m.current[f]=e},"aria-expanded":y,"aria-controls":`${i}-${f}`,onClick:()=>p(e=>{let t=new Set(e);return t.has(f)?t.delete(f):t.add(f),t}),children:[(0,$.jsx)(g,{size:17,"aria-hidden":`true`}),(0,$.jsx)(`span`,{children:b}),h&&(0,$.jsx)(`small`,{children:`Черновик`})]}),(0,$.jsxs)(`div`,{className:`admin-list-item-actions`,children:[(0,$.jsx)(`button`,{type:`button`,disabled:r.busy||s===0,onClick:()=>_(s,-1),"aria-label":`Поднять запись: ${b}`,children:(0,$.jsx)(u,{size:17,"aria-hidden":`true`})}),(0,$.jsx)(`button`,{type:`button`,disabled:r.busy||s===a.length-1,onClick:()=>_(s,1),"aria-label":`Опустить запись: ${b}`,children:(0,$.jsx)(x,{size:17,"aria-hidden":`true`})}),(0,$.jsx)(`button`,{type:`button`,disabled:r.busy||o.min!==void 0&&a.length<=o.min,onClick:()=>v(s),className:`admin-list-remove`,"aria-label":`Удалить запись: ${b}`,children:(0,$.jsx)(re,{size:17,"aria-hidden":`true`})})]})]}),(0,$.jsxs)(`div`,{id:`${i}-${f}`,className:`admin-list-item-body`,hidden:!y,onInvalidCapture:e=>{let t=e.target;p(e=>new Set([...e,f])),requestAnimationFrame(()=>{(t.closest(`form`)?.querySelector(`input:invalid, textarea:invalid, select:invalid`)||t).focus()})},children:[h&&(0,$.jsx)(`p`,{className:`admin-draft-note`,children:`Черновик можно сохранить и закончить позже. Включите показ после заполнения записи.`}),(0,$.jsx)(Qr,{field:S,value:t,onChange:e=>{let t=[...a];t[s]=e,l.current=t,n(t)},...r,requiredEnabled:r.requiredEnabled&&!h})]})]},f)})}),(0,$.jsxs)(`button`,{ref:h,type:`button`,className:`admin-add-item`,onClick:()=>{if(o.max!==void 0&&a.length>=o.max)return;let t=crypto.randomUUID(),r=[...a,Or(e)];c.current=[...c.current,t],l.current=r,p(e=>new Set([...e,t])),n(r),requestAnimationFrame(()=>m.current[t]?.focus())},disabled:r.busy||o.max!==void 0&&a.length>=o.max,children:[(0,$.jsx)(f,{size:17,"aria-hidden":`true`}),o.max!==void 0&&a.length>=o.max?`Достигнут предел: ${o.max}`:`Добавить запись`]})]})}function ti({field:e,value:t,onChange:n,onUpload:r,files:i=[],busy:a,onUploadBusyChange:o,requiredEnabled:s}){let c=(0,w.useId)(),l=typeof t==`string`?t:``,u=e.type===`image`?`image`:`document`,[d,f]=(0,w.useState)(!1),[m,g]=(0,w.useState)(``),[_,v]=(0,w.useState)(``),x=(0,w.useRef)(0),S=(0,w.useRef)(!0),C=(0,w.useRef)(null),te=(0,w.useRef)(null),ne=i.filter(e=>e.kind===u),re=(u===`image`?[...Pr,`heic`,`heif`]:Fr).map(e=>`.${e}`).join(`,`);(0,w.useEffect)(()=>(S.current=!0,()=>{S.current=!1,x.current+=1,C.current?.abort()}),[]),(0,w.useEffect)(()=>{te.current?.setCustomValidity(Mr(e,l,s))},[e,l,s]);let T=e=>{x.current+=1,C.current?.abort(),g(``),v(``),n(e)},E=async e=>{let t=e.target.files?.[0];if(e.target.value=``,!t)return;let i=++x.current;C.current?.abort();let a=new AbortController;C.current=a,g(``),v(``),f(!0),o?.(!0);try{let e=await Yr(t,a.signal);if(e.kind!==u)throw Error(u===`image`?`Для этого поля выберите фотографию JPG, PNG или WebP.`:`Для этого поля выберите документ.`);if(!e.withinUploadRecommendation||u===`document`&&e.blob.size>2e7)throw Error(`Документ превышает 20 МБ. Сожмите PDF или выберите файл меньшего размера.`);if(!S.current||i!==x.current||a.signal.aborted)return;let o=await r(new File([e.blob],e.filename,{type:e.blob.type,lastModified:t.lastModified}),u);if(!S.current||i!==x.current||a.signal.aborted)return;n(o),v(`Файл загружен. Сохраните изменения страницы, чтобы опубликовать его.`)}catch(e){if(!S.current||i!==x.current||a.signal.aborted)return;g(e instanceof Error?e.message:`Не удалось загрузить файл. Повторите попытку.`)}finally{o?.(!1),S.current&&i===x.current&&f(!1)}},D=u===`image`&&l?y(l):``;return(0,$.jsxs)(`div`,{className:`admin-asset-field`,children:[(0,$.jsxs)(`label`,{htmlFor:c,children:[e.label||e.name,e.required&&s&&(0,$.jsx)(`span`,{className:`admin-required`,"aria-hidden":`true`,children:`*`})]}),D&&(0,$.jsx)(`img`,{className:`admin-asset-preview`,src:D,alt:`Предпросмотр выбранной фотографии`,loading:`lazy`,onError:e=>{e.currentTarget.alt=`Предпросмотр недоступен. Проверьте файл перед публикацией.`}}),(0,$.jsxs)(`div`,{className:`admin-asset-actions`,children:[(0,$.jsxs)(`label`,{className:`admin-file-picker ${d?`is-busy`:``}`,children:[d?(0,$.jsx)(b,{size:17,"aria-hidden":`true`}):(0,$.jsx)(ie,{size:17,"aria-hidden":`true`}),(0,$.jsx)(`span`,{children:d?`Подготовка и загрузка…`:`Загрузить файл`}),(0,$.jsx)(`input`,{id:c,type:`file`,accept:re,"aria-label":`Загрузить файл: ${e.label||e.name}`,onChange:E,disabled:a||d})]}),l&&(0,$.jsxs)(`button`,{type:`button`,className:`admin-asset-clear`,onClick:()=>T(``),disabled:a||d,children:[(0,$.jsx)(h,{size:16,"aria-hidden":`true`}),`Убрать из записи`]})]}),ne.length>0&&(0,$.jsxs)(`label`,{className:`admin-asset-library`,children:[`Выбрать уже загруженный файл`,(0,$.jsxs)(`select`,{value:ne.some(e=>e.path===l)?l:``,disabled:a||d,onChange:e=>{e.target.value&&T(e.target.value)},children:[(0,$.jsx)(`option`,{value:``,children:`Выберите файл из библиотеки`}),ne.map(e=>(0,$.jsx)(`option`,{value:e.path,children:e.name},e.path))]})]}),(0,$.jsx)(`label`,{className:`admin-asset-path-label`,htmlFor:`${c}-path`,children:`Ссылка или путь к файлу`}),(0,$.jsx)(`input`,{id:`${c}-path`,ref:te,type:`text`,value:l,required:e.required&&s,disabled:a||d,onChange:e=>T(e.target.value),"aria-label":`Ссылка на файл: ${e.label||e.name}`}),(0,$.jsx)(`p`,{className:`admin-field-description`,children:u===`image`?`Фото подготовится в браузере: WebP, до 2048 пикселей и 2 МБ. Оригинал останется прежним.`:`PDF, Word, Excel, ODT, ODS, TXT или CSV, до 20 МБ. Содержимое документа не меняется.`}),(0,$.jsxs)(`div`,{className:`admin-asset-feedback`,role:`status`,"aria-live":`polite`,children:[m&&(0,$.jsxs)(`p`,{className:`admin-asset-error`,children:[(0,$.jsx)(ee,{size:17,"aria-hidden":`true`}),m]}),_&&(0,$.jsxs)(`p`,{className:`admin-asset-success`,children:[(0,$.jsx)(p,{size:17,"aria-hidden":`true`}),_]})]})]})}var ni=e=>e instanceof Error?e.message:`Не удалось выполнить действие.`;function ri({files:e,csrf:n,busy:r,onUpload:i,onFiles:a,onBusy:s,onMessage:l,onError:u,onAuthExpired:d}){let[f,p]=(0,w.useState)(`document`),[m,h]=(0,w.useState)(null),[g,y]=(0,w.useState)([]),[b,x]=(0,w.useState)(!1),S=(0,w.useRef)(null),C=e=>{e instanceof Z&&e.status===401&&d(),u(ni(e))},ee=async()=>{let[e,t]=await Promise.all([Q(`media`),Q(`trash`)]);a(e.files),y(t.files)};(0,w.useEffect)(()=>{let e=!0;return Q(`trash`).then(t=>{e&&y(t.files)}).catch(t=>{e&&C(t)}),()=>{e=!1}},[]);let te=async e=>{x(!0),s(!0),u(``);try{let t=await Yr(e);if(t.kind!==f)throw Error(f===`document`?`Для фотографии выберите раздел «Фотографии».`:`Для документа выберите раздел «Документы».`);if(!t.withinUploadRecommendation)throw Error(`Документ больше 20 МБ. Уменьшите файл перед загрузкой.`);await i(new File([t.blob],t.filename,{type:t.blob.type||e.type}),t.kind),l(`Файл добавлен в библиотеку. Выберите его в нужной записи и сохраните публикацию.`)}catch(e){C(e)}finally{x(!1),s(!1),S.current&&(S.current.value=``)}},ne=async()=>{if(m){x(!0),s(!0),u(``);try{await Q(`media-delete`,{method:`POST`,csrf:n,data:{path:m.path}}),await ee(),h(null),l(`Файл перемещён в корзину. Его можно восстановить.`)}catch(e){C(e)}finally{x(!1),s(!1)}}},T=async e=>{x(!0),s(!0),u(``);try{await Q(`media-restore`,{method:`POST`,csrf:n,data:{trashId:e.trashId}}),await ee(),l(`Файл восстановлен в библиотеке.`)}catch(e){C(e)}finally{x(!1),s(!1)}},E=r||b,D=e.filter(e=>e.kind===f);return(0,$.jsxs)(`section`,{className:`admin-media-library`,"aria-labelledby":`admin-media-title`,children:[(0,$.jsxs)(`header`,{children:[(0,$.jsx)(`h3`,{id:`admin-media-title`,children:`Библиотека материалов`}),(0,$.jsx)(`p`,{children:`Загрузите файл один раз, затем выберите его в документе, новости или фотоальбоме.`})]}),(0,$.jsxs)(`div`,{className:`admin-media-toolbar`,children:[(0,$.jsxs)(`div`,{role:`group`,"aria-label":`Тип материалов`,children:[(0,$.jsx)(`button`,{"aria-pressed":f===`document`,onClick:()=>p(`document`),disabled:E,children:`Документы`}),(0,$.jsx)(`button`,{"aria-pressed":f===`image`,onClick:()=>p(`image`),disabled:E,children:`Фотографии`})]}),(0,$.jsx)(`button`,{onClick:()=>void ee().catch(C),disabled:E,"aria-label":`Обновить библиотеку`,children:(0,$.jsx)(o,{size:17})})]}),(0,$.jsxs)(`label`,{className:`admin-media-upload`,children:[(0,$.jsx)(ie,{size:22}),(0,$.jsxs)(`span`,{children:[(0,$.jsx)(`strong`,{children:b?`Подготавливаем материал…`:f===`document`?`Добавить документ`:`Добавить фотографию`}),(0,$.jsx)(`small`,{children:f===`document`?`PDF, Word, Excel, ODT, ODS, TXT или CSV — до 20 МБ`:`JPG, PNG или WebP. Фотографию подготовим для сайта.`})]}),(0,$.jsx)(`input`,{ref:S,type:`file`,disabled:E,accept:f===`document`?`.pdf,.doc,.docx,.xls,.xlsx,.odt,.ods,.txt,.csv`:`.jpg,.jpeg,.png,.webp`,onChange:e=>{let t=e.target.files?.[0];t&&te(t)}})]}),m&&(0,$.jsxs)(`div`,{className:`native-admin-unsaved`,role:`alert`,children:[(0,$.jsxs)(`strong`,{children:[`Переместить «`,m.name,`» в корзину?`]}),(0,$.jsx)(`p`,{children:`Файл, который используется в публикации, останется на месте. Сначала уберите его из записи.`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`button`,{onClick:()=>h(null),disabled:E,children:`Оставить файл`}),(0,$.jsx)(`button`,{onClick:()=>void ne(),disabled:E,children:`В корзину`})]})]}),(0,$.jsx)(`ul`,{className:`admin-media-files`,children:D.map(e=>(0,$.jsxs)(`li`,{children:[e.kind===`image`&&(0,$.jsx)(`img`,{src:_(e.path,`/prometey-demo/`),alt:``,loading:`lazy`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`strong`,{children:e.name}),(0,$.jsxs)(`small`,{children:[new Intl.NumberFormat(`ru-RU`,{maximumFractionDigits:2}).format(e.bytes/1e6),` МБ`]})]}),(0,$.jsx)(`a`,{href:_(e.path,t),target:`_blank`,rel:`noreferrer`,"aria-label":`Открыть ${e.name}`,children:(0,$.jsx)(c,{size:18})}),(0,$.jsx)(`button`,{onClick:()=>h(e),disabled:E,"aria-label":`Переместить ${e.name} в корзину`,children:(0,$.jsx)(re,{size:17})})]},e.path))}),!D.length&&(0,$.jsx)(`p`,{className:`admin-media-empty`,children:`Здесь пока нет файлов этого типа.`}),(0,$.jsxs)(`details`,{className:`admin-media-trash`,children:[(0,$.jsxs)(`summary`,{children:[`Корзина · `,g.length]}),g.length?(0,$.jsx)(`ul`,{children:g.map(e=>(0,$.jsxs)(`li`,{children:[(0,$.jsx)(`span`,{children:e.name}),(0,$.jsxs)(`button`,{onClick:()=>void T(e),disabled:E,children:[(0,$.jsx)(v,{size:15}),`Восстановить`]})]},e.trashId))}):(0,$.jsx)(`p`,{children:`Корзина пуста.`})]})]})}var ii=wr(Tr),ai=[`parcels`,`homepage`,`news`,`documents`,`meetings`,`organization`,`payments`,`questions`,`cameras`].map(e=>ii.content.find(t=>t.name===e)),oi={parcels:`Выберите дом и сумму. Сохранение сразу обновит красную отметку и реестр.`,homepage:`Тексты пролёта, фотографии, подписи и порядок альбома.`,news:`Объявления, фотографии и важные сообщения для собственников.`,documents:`Документы для открытого доступа. Добавьте файл и включите публикацию.`,meetings:`Дата, место и повестка собрания.`,organization:`Официальные контакты, часы приёма и состав правления.`,payments:`Проверенные суммы взносов и банковские реквизиты.`,questions:`Короткие ответы на вопросы собственников.`,cameras:`Карточки камер и согласованные источники видео.`},si=[`localhost`,`127.0.0.1`,`[::1]`].includes(window.location.hostname),ci=window.location.protocol===`https:`||si,li=si,ui={authenticated:!1,needsSetup:!1,csrf:``,username:``,limits:{documentBytes:2e7,imageBytes:8e6}},di=e=>e instanceof Error?e.message:`Не удалось выполнить действие. Повторите попытку.`;function fi(){let{refresh:t,data:{parcels:n}}=m(),[a,u]=(0,w.useState)(null),[f,h]=(0,w.useState)(!1),[g,_]=(0,w.useState)(`parcels`),[v,y]=(0,w.useState)(null),[b,x]=(0,w.useState)({}),[S,C]=(0,w.useState)([]),[ee,re]=(0,w.useState)(!1),[ie,T]=(0,w.useState)(!1),[E,D]=(0,w.useState)(!1),[ae,O]=(0,w.useState)(!1),[k,A]=(0,w.useState)(0),[oe,se]=(0,w.useState)(!1),[j,M]=(0,w.useState)(``),[N,P]=(0,w.useState)(``),[F,I]=(0,w.useState)(null),[L,R]=(0,w.useState)(!1),[ce,le]=(0,w.useState)(0),[z,B]=(0,w.useState)(``),[ue,de]=(0,w.useState)(``),[fe,pe]=(0,w.useState)(``),[me,he]=(0,w.useState)(``),[ge,_e]=(0,w.useState)(!1),V=(0,w.useRef)(!0),ve=(0,w.useRef)(g);ve.current=g;let H=v!==null&&JSON.stringify(b)!==JSON.stringify(v.data),U=ie||ee||k>0||oe,ye=ai.find(e=>e.name===g),be=(0,w.useMemo)(()=>{if(g!==`parcels`)return ye.fields;let e=n;try{e=i({numberCorrections:b.numberCorrections??[]})}catch{if(v)try{e=i(v.data)}catch{}}return Ar(ye.fields,e)},[g,ye,b.numberCorrections,v,n]);(0,w.useEffect)(()=>(V.current=!0,()=>{V.current=!1}),[]),(0,w.useEffect)(()=>{let e=e=>{(H||U)&&(e.preventDefault(),e.returnValue=``)};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[H,U]);let xe=(0,w.useCallback)(async()=>{if(li&&ci){h(!0),M(``);try{let e=await Q(`session`);V.current&&u(e)}catch(e){V.current&&(u(null),M(di(e)))}finally{V.current&&h(!1)}}},[]);(0,w.useEffect)(()=>{xe()},[xe]),(0,w.useEffect)(()=>{if(!a?.authenticated)return;let e=new AbortController;return re(!0),M(``),P(``),y(null),x({}),Q(`section`,{section:g,signal:e.signal}).then(t=>{e.signal.aborted||(y(t),x(structuredClone(t.data)))}).catch(t=>{e.signal.aborted||(M(di(t)),t instanceof Z&&t.status===401&&u(ui))}).finally(()=>{e.signal.aborted||re(!1)}),()=>e.abort()},[a?.authenticated,g,ce]),(0,w.useEffect)(()=>{if(!a?.authenticated){C([]);return}let e=new AbortController;return Q(`media`,{signal:e.signal}).then(t=>{e.signal.aborted||C(t.files)}).catch(t=>{e.signal.aborted||M(`Не удалось открыть библиотеку: ${di(t)}`)}),()=>e.abort()},[a?.authenticated]);let Se=async e=>{e.preventDefault(),M(``),D(!0);try{if(a?.needsSetup&&ue!==fe)throw Error(`Повтор пароля не совпадает.`);await Q(a?.needsSetup?`bootstrap`:`login`,{method:`POST`,data:a?.needsSetup?{token:me,username:z.trim(),password:ue}:{username:z.trim(),password:ue}});let e=await Q(`session`);if(!e.authenticated)throw Error(`Не удалось подтвердить вход. Повторите попытку.`);u(e),_e(!1),de(``),pe(``),he(``)}catch(e){M(di(e))}finally{D(!1)}},W=async()=>{if(a){try{await Q(`logout`,{method:`POST`,csrf:a.csrf})}catch(e){if(!(e instanceof Z&&e.status===401)){M(di(e));return}}u(ui),_e(!1),y(null),x({}),C([]),M(``),P(`Вы вышли из управления.`)}},Ce=()=>{a&&B(a.username),_e(!0)},we=e=>{if(!U){if(H){I(e);return}Te(e)}},Te=e=>{I(null),e===`reload`?le(e=>e+1):e===`logout`?W():e===`media`?(R(!0),v&&x(structuredClone(v.data))):(R(!1),_(e))},Ee=async e=>{if(e.preventDefault(),a&&v&&!U){M(``),P(``);try{d(g,b)}catch(e){M(di(e));return}T(!0);try{let e=await Q(`section`,{method:`POST`,csrf:a.csrf,data:{section:g,data:b,revision:v.revision}});y(e),x(structuredClone(e.data)),P(`Изменения опубликованы. Откройте сайт и проверьте результат.`),t()}catch(e){e instanceof Z&&e.status===401&&(B(a.username),_e(!0)),M(e instanceof Z&&e.status===409?`Этот раздел уже изменили в другом окне. Ваша правка сохранена в форме. Скопируйте её, затем загрузите актуальную версию.`:di(e))}finally{T(!1)}}},De=async(e,t)=>{if(!a?.authenticated)throw Error(`Войдите в управление, чтобы добавить файл.`);let n=g,r=t===`image`?a.limits.imageBytes:a.limits.documentBytes;if(e.size>r)throw Error(`Файл больше допустимых ${Math.floor(r/1e6)} МБ. Уменьшите его перед загрузкой.`);let i=new FormData;i.append(`file`,e),i.append(`kind`,t),A(e=>e+1);try{let e=await Q(`upload`,{method:`POST`,form:i,csrf:a.csrf});if(!V.current||ve.current!==n)throw Error(`Раздел сменился. Загруженный файл доступен в библиотеке.`);return C(t=>[...t.filter(t=>t.path!==e.file.path),e.file]),e.file.path}catch(e){throw e instanceof Z&&e.status===401&&(B(a.username),_e(!0)),e}finally{V.current&&A(e=>Math.max(0,e-1))}},Oe=async()=>{O(!0),M(``);try{let e=await Q(`export`),t=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:`application/json`})),n=document.createElement(`a`);n.href=t,n.download=`prometey-materials-${new Date().toISOString().slice(0,10)}.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),P(`Тексты, настройки и список файлов сохранены. Сами вложения находятся на хостинге.`)}catch(e){e instanceof Z&&e.status===401&&Ce(),M(di(e))}finally{O(!1)}};return(0,$.jsxs)(`section`,{className:`native-admin estate-shell`,"aria-labelledby":`native-admin-title`,children:[(0,$.jsxs)(`div`,{className:`native-admin-top`,children:[(0,$.jsxs)(`a`,{href:`./#top`,children:[(0,$.jsx)(r,{size:16}),`Вернуться на сайт`]}),(0,$.jsx)(`span`,{children:`Прометей / Управление`})]}),(0,$.jsxs)(`header`,{className:`native-admin-heading`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:`native-admin-kicker`,children:`Своё место. Свой порядок.`}),(0,$.jsx)(`h1`,{id:`native-admin-title`,children:`Управление сайтом`}),(0,$.jsx)(`p`,{children:`Материалы, фотографии и сведения товарищества — в одном месте.`})]}),a?.authenticated&&(0,$.jsxs)(`div`,{className:`native-admin-account`,children:[(0,$.jsx)(`span`,{children:a.username}),(0,$.jsxs)(`button`,{onClick:()=>we(`logout`),disabled:U,children:[(0,$.jsx)(te,{size:16}),`Выйти`]})]})]}),li?ci?a?.authenticated?(0,$.jsxs)(`div`,{className:`native-admin-workspace`,children:[(0,$.jsxs)(`nav`,{className:`native-admin-sections`,"aria-label":`Разделы управления`,children:[ai.map(e=>(0,$.jsxs)(`button`,{"aria-current":!L&&g===e.name?`page`:void 0,onClick:()=>{(L||g!==e.name)&&we(e.name)},disabled:U,children:[e.label,(0,$.jsx)(l,{size:15})]},e.name)),(0,$.jsxs)(`button`,{"aria-current":L?`page`:void 0,onClick:()=>we(`media`),disabled:U,children:[`Фотографии и файлы`,(0,$.jsx)(l,{size:15})]}),(0,$.jsxs)(`button`,{className:`native-admin-export`,onClick:()=>void Oe(),disabled:ae,children:[ae?`Готовим копию…`:`Скачать материалы`,(0,$.jsx)(c,{size:16})]}),(0,$.jsxs)(`a`,{href:e(`uploads/documents/prometey-admin-guide.pdf`),target:`_blank`,rel:`noreferrer`,children:[(0,$.jsx)(s,{size:16}),`Инструкция`]})]}),(0,$.jsxs)(`div`,{className:`native-admin-editor`,children:[(0,$.jsxs)(`div`,{className:`native-admin-section-heading`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h2`,{children:L?`Фотографии и файлы`:ye.label}),(0,$.jsx)(`p`,{children:L?`Материалы для сайта хранятся на хостинге товарищества.`:oi[g]})]}),!L&&(0,$.jsxs)(`div`,{className:`native-admin-heading-actions`,children:[(0,$.jsx)(`button`,{onClick:()=>we(`reload`),disabled:U,"aria-label":`Загрузить актуальную версию раздела`,children:(0,$.jsx)(o,{size:18})}),(0,$.jsxs)(`button`,{className:`native-admin-primary`,type:`submit`,form:`native-editor-form`,disabled:!H||U,children:[`Сохранить`,(0,$.jsx)(ne,{size:16})]})]})]}),j&&(0,$.jsx)(`div`,{className:`native-admin-feedback is-error native-admin-editor-feedback`,role:`alert`,children:j}),N&&(0,$.jsxs)(`div`,{className:`native-admin-feedback native-admin-editor-feedback`,role:`status`,children:[(0,$.jsx)(p,{size:18}),N]}),ge&&(0,$.jsxs)(`form`,{className:`native-admin-login native-admin-reauth`,onSubmit:Se,children:[(0,$.jsx)(`h3`,{children:`Подтвердите вход`}),(0,$.jsx)(`p`,{children:`Сессия завершилась. Правки остались в форме — войдите ещё раз, затем сохраните их.`}),(0,$.jsxs)(`label`,{children:[`Логин`,(0,$.jsx)(`input`,{value:z,onChange:e=>B(e.target.value),autoComplete:`username`,required:!0})]}),(0,$.jsxs)(`label`,{children:[`Пароль`,(0,$.jsx)(`input`,{type:`password`,value:ue,onChange:e=>de(e.target.value),autoComplete:`current-password`,required:!0})]}),(0,$.jsx)(`button`,{className:`native-admin-primary`,disabled:E,children:E?`Проверяем…`:`Войти и продолжить`})]}),F&&(0,$.jsxs)(`div`,{className:`native-admin-unsaved`,role:`alert`,children:[(0,$.jsx)(`strong`,{children:`В форме есть несохранённые изменения.`}),(0,$.jsx)(`p`,{children:`Сохраните их или продолжите без сохранения.`}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`button`,{onClick:()=>I(null),children:`Остаться в форме`}),(0,$.jsx)(`button`,{onClick:()=>Te(F),children:`Продолжить без сохранения`})]})]}),ee?(0,$.jsx)(`p`,{className:`native-admin-loading`,role:`status`,children:`Загружаем раздел…`}):v&&!L&&(0,$.jsxs)(`form`,{id:`native-editor-form`,onSubmit:Ee,className:`native-admin-form`,children:[(0,$.jsx)(Xr,{fields:be,value:b,onChange:x,onUpload:De,files:S,onUploadBusyChange:se,busy:U}),(0,$.jsxs)(`div`,{className:`native-admin-savebar`,children:[(0,$.jsx)(`span`,{children:k?`Загружаем файл…`:oe?`Подготавливаем файл…`:H?`Есть несохранённые изменения`:`Опубликованная версия`}),(0,$.jsxs)(`a`,{href:g===`parcels`?`./#debtors`:g===`homepage`?`./#top`:g===`organization`?`./#contacts`:`./#residents`,target:`_blank`,rel:`noreferrer`,children:[`Проверить на сайте `,(0,$.jsx)(l,{size:16})]}),(0,$.jsxs)(`button`,{className:`native-admin-primary`,type:`submit`,disabled:!H||U,children:[ie?`Сохраняем…`:`Сохранить и опубликовать`,(0,$.jsx)(ne,{size:17})]})]})]}),L&&(0,$.jsx)(ri,{files:S,csrf:a.csrf,busy:U,onUpload:De,onFiles:C,onBusy:se,onMessage:P,onError:M,onAuthExpired:Ce})]})]}):(0,$.jsx)(`div`,{className:`native-admin-entry`,children:f?(0,$.jsx)(`p`,{role:`status`,children:`Подключаем управление…`}):a?(0,$.jsxs)(`form`,{onSubmit:Se,className:`native-admin-login`,children:[(0,$.jsx)(`h2`,{children:a.needsSetup?`Первое включение`:`Войти в управление`}),(0,$.jsx)(`p`,{children:a.needsSetup?`Владелец активирует управление один раз и задаёт отдельный пароль сайта.`:`Используйте отдельный логин и пароль администратора сайта.`}),a.needsSetup&&(0,$.jsxs)(`label`,{children:[`Код активации`,(0,$.jsx)(`input`,{type:`password`,value:me,onChange:e=>he(e.target.value),autoComplete:`off`,required:!0})]}),(0,$.jsxs)(`label`,{children:[`Логин`,(0,$.jsx)(`input`,{value:z,onChange:e=>B(e.target.value),autoComplete:`username`,minLength:3,maxLength:64,pattern:`[A-Za-z0-9._\\-]{3,64}`,required:!0})]}),(0,$.jsxs)(`label`,{children:[`Пароль`,(0,$.jsx)(`input`,{type:`password`,value:ue,onChange:e=>de(e.target.value),autoComplete:a.needsSetup?`new-password`:`current-password`,minLength:a.needsSetup?12:void 0,required:!0})]}),a.needsSetup&&(0,$.jsxs)(`label`,{children:[`Повторите пароль`,(0,$.jsx)(`input`,{type:`password`,value:fe,onChange:e=>pe(e.target.value),autoComplete:`new-password`,minLength:12,required:!0})]}),(0,$.jsxs)(`button`,{className:`native-admin-primary`,disabled:E,children:[E?`Проверяем…`:a.needsSetup?`Активировать управление`:`Войти`,(0,$.jsx)(l,{size:18})]})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`h2`,{children:`Не удалось подключить управление`}),(0,$.jsx)(`p`,{children:`Проверьте соединение и повторите подключение.`}),(0,$.jsxs)(`button`,{className:`native-admin-primary`,onClick:()=>void xe(),children:[(0,$.jsx)(o,{size:17}),`Повторить`]})]})}):(0,$.jsxs)(`div`,{className:`native-admin-entry`,role:`status`,children:[(0,$.jsx)(`h2`,{children:`Вход по защищённому соединению`}),(0,$.jsx)(`p`,{children:`Для входа откройте эту страницу через HTTPS. Если браузер сообщает об ошибке сертификата, владельцу нужно настроить SSL в SpaceWeb.`}),(0,$.jsxs)(`a`,{className:`native-admin-primary`,href:`https://${window.location.host}${window.location.pathname}?page=manage`,children:[`Открыть HTTPS `,(0,$.jsx)(l,{size:18})]})]}):(0,$.jsxs)(`div`,{className:`native-admin-entry`,children:[(0,$.jsx)(`h2`,{children:`Управление на сайте товарищества`}),(0,$.jsx)(`p`,{children:`Откройте админку на основном домене. Материалы сохраняются на хостинге «Прометея».`}),(0,$.jsxs)(`a`,{className:`native-admin-primary`,href:`https://tsnprometey.ru/?page=manage`,children:[`Открыть управление `,(0,$.jsx)(l,{size:18})]})]}),!a?.authenticated&&j&&(0,$.jsx)(`div`,{className:`native-admin-feedback is-error`,role:`alert`,children:j}),!a?.authenticated&&N&&(0,$.jsxs)(`div`,{className:`native-admin-feedback`,role:`status`,children:[(0,$.jsx)(p,{size:18}),N]}),(0,$.jsx)(`p`,{className:`native-admin-footnote`,children:`Материалы размещаются на открытом сайте. Публикуйте только сведения и документы для собственников.`})]})}export{fi as default};