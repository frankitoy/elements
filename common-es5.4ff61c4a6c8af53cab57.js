function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,a){return n&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+8uX":function(e,n){e.exports=function(e){var n={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},t=e.inherit(a,{begin:"\\(",end:"\\)"}),r=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),s=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),i={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[a,s,r,t,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[a,t,s,r]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[i],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[i],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},i]}]}}},H05P:function(e,n){var a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);e.exports=function(e){var n={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:a.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),literal:t.join(" "),built_in:r.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")},s={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},i={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},l={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},c={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"css"}},d={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]};o.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,d,i,e.REGEXP_MODE];var m={begin:"\\(",end:/\)/,keywords:n,contains:["self",e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.NUMBER_MODE]},u={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,m]};return{name:"TypeScript",aliases:["ts"],keywords:n,contains:[e.SHEBANG(),{className:"meta",begin:/^\s*['"]use strict['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,d,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:m.contains}]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[\{;]/,excludeEnd:!0,keywords:n,contains:["self",e.inherit(e.TITLE_MODE,{begin:"[A-Za-z$_][0-9A-Za-z$_]*"}),u],illegal:/%/,relevance:0},{beginKeywords:"constructor",end:/[\{;]/,excludeEnd:!0,contains:["self",u]},{begin:/module\./,keywords:{built_in:"module"},relevance:0},{beginKeywords:"module",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},{begin:/\$[(.]/},{begin:"\\."+e.IDENT_RE,relevance:0},s,m]}}},wIh0:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a("jrat"),r=a("EM62"),s=function(){var e=function(){function e(n,a,t,r,s){_classCallCheck(this,e),this.vcr=n,this.template=a,this.elementsLoaderService=t,this.cfr=r,this.cdr=s,this.viewRef=null}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,n=this.template,a=n._declarationTContainer?n._declarationTContainer.tagName:n._def.element.template.nodes[0].element.name,t=this.elementsLoaderService.getElementConfig(a)||{},r=this.elementsLoaderService.options,s=t.loadingComponent||r.loadingComponent;if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(s){var i=this.cfr.resolveComponentFactory(s);this.vcr.createComponent(i)}this.elementsLoaderService.loadElement(this.url,a,this.isModule,null==t?void 0:t.hooks).then((function(){return customElements.whenDefined(a)})).then((function(){e.vcr.clear(),e.viewRef=e.vcr.createEmbeddedView(e.template),e.cdr.markForCheck()})).catch((function(){e.vcr.clear();var n=t.errorComponent||r.errorComponent;if(e.errorTemplateRef)e.vcr.createEmbeddedView(e.errorTemplateRef),e.cdr.markForCheck();else if(n){var s=e.cfr.resolveComponentFactory(n);e.vcr.createComponent(s),e.cdr.markForCheck()}else console.error("@angular-extensions/elements - Loading of element <".concat(a,'> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element'))}))}},{key:"destroyEmbeddedView",value:function(){this.viewRef&&!this.viewRef.destroyed&&(this.viewRef.detach(),this.viewRef.destroy(),this.viewRef=null)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Lb(r.P),r.Lb(r.L),r.Lb(t.a),r.Lb(r.j),r.Lb(r.h))},e.\u0275dir=r.Gb({type:e,selectors:[["","axLazyElement",""]],inputs:{url:["axLazyElement","url"],loadingTemplateRef:["axLazyElementLoadingTemplate","loadingTemplateRef"],errorTemplateRef:["axLazyElementErrorTemplate","errorTemplateRef"],isModule:["axLazyElementModule","isModule"]}}),e}()}}]);