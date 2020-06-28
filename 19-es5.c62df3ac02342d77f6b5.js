function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6J83":function(e,n,t){"use strict";t.r(n),t.d(n,"DynamicModule",(function(){return q}));var c,i=t("uHuC"),a=t("nIj0"),o=t("j7lP"),l=t("PCNd"),r=t("sEIs"),m=t("EM62"),u=t("2kYt"),s=t("PBFl"),d=t("bFHC"),b=t("jrat"),p=((c=function(){function e(n,t,c,i,a,o,l){_classCallCheck(this,e),this.document=n,this.renderer=t,this.vcr=c,this.cfr=i,this.cdr=a,this.template=o,this.elementsLoaderService=l,this.viewRef=null}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;if(!this.tag||0===this.tag.length||!this.tag.includes("-"))throw new Error('@angular-extensions/elements - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="\'some-tag\'"), got: "'.concat(this.tag,'"'));var n=this.elementsLoaderService.getElementConfig(this.tag)||{},t=this.elementsLoaderService.options,c=n.loadingComponent||t.loadingComponent;if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(c){var i=this.cfr.resolveComponentFactory(c);this.vcr.createComponent(i)}this.elementsLoaderService.loadElement(this.url,this.tag,this.isModule,null==n?void 0:n.hooks).then((function(){return customElements.whenDefined(e.tag)})).then((function(){e.vcr.clear();var n=e.renderer.createElement;e.renderer.createElement=function(n,t){return"ax-lazy-element"===n&&(n=e.tag),e.document.createElement(n)},e.viewRef=e.vcr.createEmbeddedView(e.template),e.renderer.createElement=n,e.cdr.markForCheck()})).catch((function(c){var i=n.errorComponent||t.errorComponent;if(e.vcr.clear(),e.errorTemplateRef)e.vcr.createEmbeddedView(e.errorTemplateRef),e.cdr.markForCheck();else if(i){var a=e.cfr.resolveComponentFactory(i);e.vcr.createComponent(a),e.cdr.markForCheck()}else console.error("@angular-extensions/elements - Loading of element <".concat(e.tag,'> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element\n\n'),c)}))}},{key:"destroyEmbeddedView",value:function(){this.viewRef&&!this.viewRef.destroyed&&(this.viewRef.detach(),this.viewRef.destroy(),this.viewRef=null)}}]),e}()).\u0275fac=function(e){return new(e||c)(m.Lb(u.d),m.Lb(m.E),m.Lb(m.P),m.Lb(m.j),m.Lb(m.h),m.Lb(m.L),m.Lb(b.a))},c.\u0275dir=m.Gb({type:c,selectors:[["","axLazyElementDynamic",""]],inputs:{tag:["axLazyElementDynamic","tag"],url:["axLazyElementDynamicUrl","url"],loadingTemplateRef:["axLazyElementDynamicLoadingTemplate","loadingTemplateRef"],errorTemplateRef:["axLazyElementDynamicErrorTemplate","errorTemplateRef"],isModule:["axLazyElementDynamicModule","isModule"]}}),c),g=t("k8N0");function f(e,n){if(1&e){var t=m.Sb();m.Rb(0,"div",12),m.Rb(1,"button",13),m.Yb("click",(function(){return m.lc(t),m.cc().example1=!0})),m.Rb(2,"mat-icon"),m.uc(3,"play_arrow"),m.Qb(),m.uc(4," Run "),m.Qb(),m.Qb()}}function h(e,n){1&e&&m.uc(0,"Loading...")}function y(e,n){if(1&e){var t=m.Sb();m.Rb(0,"ax-lazy-element",18),m.Yb("click",(function(){return m.lc(t),m.cc(2).increment1()})),m.uc(1," Increment "),m.Qb()}if(2&e){var c=m.cc(2);m.hc("outlined",c.buttonTypeIsOutlined)("raised",!c.buttonTypeIsOutlined)}}function w(e,n){if(1&e){var t=m.Sb();m.Rb(0,"div",12),m.sc(1,h,1,0,"ng-template",null,14,m.tc),m.sc(3,y,2,2,"ax-lazy-element",15),m.Rb(4,"p"),m.uc(5),m.Qb(),m.Rb(6,"div",16),m.Rb(7,"span"),m.uc(8,"Raised button"),m.Qb(),m.Rb(9,"mat-slide-toggle",17),m.Yb("ngModelChange",(function(e){return m.lc(t),m.cc().buttonTypeIsOutlined=e})),m.Qb(),m.Rb(10,"span"),m.uc(11,"Outline button"),m.Qb(),m.Qb(),m.Qb()}if(2&e){var c=m.kc(2),i=m.cc();m.zb(3),m.hc("axLazyElementDynamic","mwc-button")("axLazyElementDynamicUrl","https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module")("axLazyElementDynamicLoadingTemplate",c)("axLazyElementDynamicModule",!0),m.zb(2),m.wc("Counter: ",i.counter1,""),m.zb(4),m.hc("ngModel",i.buttonTypeIsOutlined)}}function v(e,n){if(1&e){var t=m.Sb();m.Rb(0,"div",12),m.Rb(1,"button",13),m.Yb("click",(function(){return m.lc(t),m.cc().example2=!0})),m.Rb(2,"mat-icon"),m.uc(3,"play_arrow"),m.Qb(),m.uc(4," Run "),m.Qb(),m.Qb()}}function x(e,n){1&e&&m.uc(0,"Loading...")}function C(e,n){if(1&e){var t=m.Sb();m.Rb(0,"ax-lazy-element",20),m.Yb("click",(function(){return m.lc(t),m.cc(2).increment2()})),m.uc(1," Increment "),m.Qb()}}function M(e,n){if(1&e&&(m.Rb(0,"div",12),m.sc(1,x,1,0,"ng-template",null,14,m.tc),m.sc(3,C,2,0,"ax-lazy-element",19),m.Rb(4,"p"),m.uc(5),m.Qb(),m.Qb()),2&e){var t=m.kc(2),c=m.cc();m.zb(3),m.hc("axLazyElementDynamic","wired-button")("axLazyElementDynamicLoadingTemplate",t),m.zb(2),m.wc("Counter: ",c.counter2,"")}}function R(e,n){if(1&e){var t=m.Sb();m.Rb(0,"div",12),m.Rb(1,"button",13),m.Yb("click",(function(){return m.lc(t),m.cc().example3=!0})),m.Rb(2,"mat-icon"),m.uc(3,"play_arrow"),m.Qb(),m.uc(4," Run "),m.Qb(),m.Qb()}}function z(e,n){if(1&e&&m.uc(0),2&e){var t=m.cc().$implicit;m.wc("Loading <",t.tag,">...\xa0\xa0")}}function k(e,n){if(1&e){var t=m.Sb();m.Rb(0,"ax-lazy-element",24),m.Yb("click",(function(){m.lc(t);var e=m.cc().$implicit;return m.cc(2).performAction(e.actionName)})),m.uc(1),m.Qb()}if(2&e){var c=m.cc().$implicit;m.zb(1),m.wc(" ",c.content," ")}}function _(e,n){if(1&e&&(m.Pb(0),m.sc(1,z,1,1,"ng-template",null,14,m.tc),m.sc(3,k,2,1,"ax-lazy-element",23),m.Ob()),2&e){var t=n.$implicit,c=m.kc(2);m.zb(3),m.hc("axLazyElementDynamic",t.tag)("axLazyElementDynamicUrl",t.url)("axLazyElementDynamicModule",t.isModule)("axLazyElementDynamicLoadingTemplate",c)}}function L(e,n){if(1&e&&(m.Rb(0,"div",12),m.Rb(1,"div",21),m.sc(2,_,4,4,"ng-container",22),m.Qb(),m.Rb(3,"p"),m.uc(4),m.Qb(),m.Qb()),2&e){var t=m.cc();m.zb(2),m.hc("ngForOf",t.dynamicConfigs),m.zb(2),m.wc("Counter: ",t.counter3,"")}}var O,P,E,Q=((O=function(){function e(){_classCallCheck(this,e),this.example1=!1,this.example2=!1,this.example3=!1,this.codeExample1=D,this.codeExample2module=I,this.codeExample2html=T,this.codeExample3html=j,this.buttonTypeIsOutlined=!0,this.counter1=0,this.counter2=0,this.counter3=0,this.dynamicConfigs=[{tag:"mwc-button",url:"https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module",isModule:!0,content:"Increment",actionName:"increment"},{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js",content:"Decrement",actionName:"decrement"},{tag:"mwc-icon",url:"https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module",content:"replay",actionName:"reset"}]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"increment1",value:function(){this.counter1++}},{key:"increment2",value:function(){this.counter2++}},{key:"performAction",value:function(e){"increment"===e&&this.counter3++,"decrement"===e&&this.counter3--,"reset"===e&&(this.counter3=0)}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=m.Fb({type:O,selectors:[["demo-dynamic"]],decls:87,vars:10,consts:[[1,"quick-nav"],["routerLink",".","fragment","dynamic-element-tag"],["routerLink",".","fragment","module-pre-configuration"],["routerLink",".","fragment","multiple-different-dynamic-elements"],[1,"wrapper"],["id","dynamic-element-tag"],[1,"content"],["class","implementation",4,"ngIf"],[1,"description"],[3,"highlight"],["id","module-pre-configuration"],["id","multiple-different-dynamic-elements"],[1,"implementation"],["mat-flat-button","","color","accent",3,"click"],["loading",""],[3,"outlined","raised","click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicLoadingTemplate","axLazyElementDynamicModule"],[1,"controls"],[3,"ngModel","ngModelChange"],[3,"outlined","raised","click"],[3,"click",4,"axLazyElementDynamic","axLazyElementDynamicLoadingTemplate"],[3,"click"],[1,"actions"],[4,"ngFor","ngForOf"],["raised","",3,"click",4,"axLazyElementDynamic","axLazyElementDynamicUrl","axLazyElementDynamicModule","axLazyElementDynamicLoadingTemplate"],["raised","",3,"click"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"h3"),m.uc(2,"Quick navigation"),m.Qb(),m.Rb(3,"ul"),m.Rb(4,"li"),m.Rb(5,"a",1),m.uc(6,"Dynamic element tag"),m.Qb(),m.Qb(),m.Rb(7,"li"),m.Rb(8,"a",2),m.uc(9,"Dynamic element tag with module pre-configuration"),m.Qb(),m.Qb(),m.Rb(10,"li"),m.Rb(11,"a",3),m.uc(12,"Multiple different dynamic elements"),m.Qb(),m.Qb(),m.Qb(),m.Qb(),m.Rb(13,"div",4),m.Rb(14,"h1"),m.uc(15,"Dynamic"),m.Qb(),m.Rb(16,"p"),m.uc(17," These example explain how to configure element tag dynamically using "),m.Rb(18,"code"),m.uc(19,"*axLazyElementDynamic"),m.Qb(),m.uc(20," directive. This can be very useful if we want to retrieve element configuration from somewhere else (for example a backend or a json config file). Such a setup can enable us to develop fully dynamic and configurable microfrontend applications! "),m.Qb(),m.Rb(21,"h2",5),m.uc(22,"Dynamic element tag"),m.Qb(),m.Rb(23,"div",6),m.sc(24,f,5,0,"div",7),m.sc(25,w,12,6,"div",7),m.Rb(26,"div",8),m.Rb(27,"p"),m.uc(28," In this example we're loading "),m.Rb(29,"code"),m.uc(30,"<mwc-button>"),m.Qb(),m.uc(31," using the "),m.Rb(32,"code"),m.uc(33,"*axLazyElementDynamic"),m.Qb(),m.uc(34," directive. Please notice that the original HTML element used in the template is "),m.Rb(35,"code"),m.uc(36,"<ax-lazy-element>"),m.Qb(),m.uc(37," and we're specifying the desired tag as the first parameter of "),m.Rb(38,"code"),m.uc(39,"*axLazyElementDynamic='mwc-button'"),m.Qb(),m.uc(40,". Please, feel free to open your browsers dev tools to check resulting element tag! "),m.Qb(),m.Mb(41,"pre",9),m.Rb(42,"p"),m.uc(43," You might be asking why do we use "),m.Rb(44,"code"),m.uc(45,"<ax-lazy-element>"),m.Qb(),m.uc(46,". This is not a real custom element and that's exactly the point. We can provide any valid and unused custom element name. That way Angular won't complain if we use custom property and event binding which would be the case if we tried to bind "),m.Rb(47,"code"),m.uc(48,'<div [custom]="value">'),m.Qb(),m.uc(49,"... "),m.Qb(),m.Qb(),m.Qb(),m.Rb(50,"h2",10),m.uc(51," Dynamic element tag with module pre-configuration "),m.Qb(),m.Rb(52,"div",6),m.sc(53,v,5,0,"div",7),m.sc(54,M,6,3,"div",7),m.Rb(55,"div",8),m.Rb(56,"p"),m.uc(57," The "),m.Rb(58,"code"),m.uc(59,"*axLazyElementDynamic"),m.Qb(),m.uc(60," directive works also with the pre-configured "),m.Rb(61,"code"),m.uc(62,"LazyElementsModule"),m.Qb(),m.uc(63,". That way we don't have to specify url of the element in the template. Please notice that the original HTML element used in the template is "),m.Rb(64,"code"),m.uc(65,"<div>"),m.Qb(),m.uc(66," and we're specifying the desired tag as the first parameter of "),m.Rb(67,"code"),m.uc(68,"*axLazyElementDynamic='wired-button'"),m.Qb(),m.uc(69,". Please, feel free to open your browsers dev tools to check resulting element tag! "),m.Qb(),m.Mb(70,"pre",9),m.Mb(71,"pre",9),m.Qb(),m.Qb(),m.Rb(72,"h2",11),m.uc(73," Multiple different dynamic elements "),m.Qb(),m.Rb(74,"div",6),m.sc(75,R,5,0,"div",7),m.sc(76,L,5,2,"div",7),m.Rb(77,"div",8),m.Rb(78,"p"),m.uc(79," The "),m.Rb(80,"code"),m.uc(81,"*axLazyElementDynamic"),m.Qb(),m.uc(82," directive works also with "),m.Rb(83,"code"),m.uc(84,"*ngFor"),m.Qb(),m.uc(85," directive to render fully dynamic configuration which could have been retrieved from backend during the runtime in comparison to hard-coded into the template during build time! Please, feel free to open your browsers dev tools to check resulting element tags! "),m.Qb(),m.Mb(86,"pre",9),m.Qb(),m.Qb(),m.Qb()),2&e&&(m.zb(24),m.hc("ngIf",!n.example1),m.zb(1),m.hc("ngIf",n.example1),m.zb(16),m.hc("highlight",n.codeExample1),m.zb(12),m.hc("ngIf",!n.example2),m.zb(1),m.hc("ngIf",n.example2),m.zb(16),m.hc("highlight",n.codeExample2html),m.zb(1),m.hc("highlight",n.codeExample2module),m.zb(4),m.hc("ngIf",!n.example3),m.zb(1),m.hc("ngIf",n.example3),m.zb(10),m.hc("highlight",n.codeExample3html))},directives:[r.c,u.k,i.b,s.b,d.a,p,g.a,a.e,a.f,u.j],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#d32f2f}.wrapper[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin:0 20px 20px 0;border:2px solid #eee;padding:20px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   wired-button[_ngcontent-%COMP%]{padding:10px 15px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .implementation[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;align-items:center}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:20px}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]}),O),D='\x3c!-- url = \'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module\' --\x3e;\n<ax-lazy-element *axLazyElementDynamic="\'mwc-button\', url: url; module: true"\n     [outlined]="true"\n     (click)="increment()">\n  Increment\n</ax-lazy-element>\n\n\x3c!-- will be rendered as ...\n  <mwc-button outlined (click)="increment()">Increment</mwc-button>\n--\x3e',T='<ax-lazy-element *axLazyElementDynamic="\'wired-button\'" (click)="increment()">\n  Increment\n</ax-lazy-element>\n\n\x3c!-- will be rendered as ...\n  <wired-button (click)="increment()">Increment</wired-button>\n--\x3e',I="// pre-configured LazyElementsModule\nconst options: LazyElementModuleOptions = {\n  elementConfigs: [\n    { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js' }\n  ]\n};\n\n@NgModule({\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n  declarations: [FeatureComponent],\n  imports: [\n    LazyElementsModule.forFeature(options),\n  ]\n})\nexport class FeatureModule {}",j="<ng-container *ngFor=\"let c of dynamicConfigs\">\n  <ax-lazy-element\n    *axLazyElementDynamic=\"c.tag; url: c.url; module: c.isModule\"\n    (click)=\"performAction(c.actionName)\"\n    raised\n  >\n    {{ c.content }}\n  </ax-lazy-element>\n</ng-container>\n\n\x3c!--\ndynamicConfigs = [\n  {\n    tag: 'mwc-button',\n    url: 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module',\n    isModule: true,\n    content: 'Increment',\n    actionName: 'increment'\n  },\n  {\n    tag: 'wired-button',\n    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',\n    content: 'Decrement',\n    actionName: 'decrement'\n  },\n  {\n    tag: 'mwc-icon',\n    url: 'https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module',\n    content: 'replay',\n    actionName: 'reset'\n  }\n];\n--\x3e\n",F=[{path:"",component:Q}],S=((P=function e(){_classCallCheck(this,e)}).\u0275mod=m.Jb({type:P}),P.\u0275inj=m.Ib({factory:function(e){return new(e||P)},imports:[[r.d.forChild(F)],r.d]}),P),N={elementConfigs:[{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js"}]},q=((E=function e(){_classCallCheck(this,e)}).\u0275mod=m.Jb({type:E}),E.\u0275inj=m.Ib({factory:function(e){return new(e||E)},imports:[[i.c,a.b,o.a.forFeature(N),l.a,S]]}),E)}}]);