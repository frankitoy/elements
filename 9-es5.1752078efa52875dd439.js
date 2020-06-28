function _classCallCheck(e,b){if(!(e instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,b){for(var t=0;t<b.length;t++){var o=b[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,b,t){return b&&_defineProperties(e.prototype,b),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{sHuI:function(e,b,t){"use strict";t.r(b),t.d(b,"ApiModule",(function(){return R}));var o,c,n,a=t("PCNd"),u=t("sEIs"),i=t("EM62"),d=t("Meci"),l=[{path:"",component:(o=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=i.Fb({type:o,selectors:[["demo-api"]],decls:778,vars:0,consts:[["color","accent"],["routerLink","../../../examples/testing"]],template:function(e,b){if(1&e){i.Rb(0,"h1"),i.uc(1,"API"),i.Qb(),i.Rb(2,"section"),i.Rb(3,"h2"),i.uc(4,"LazyElementDirective"),i.Qb(),i.Rb(5,"code",0),i.uc(6,"Directive"),i.Qb(),i.Mb(7,"br"),i.Rb(8,"p"),i.uc(9," A structural directive which lazy loads desired Angular element (or any other webcomponent) "),i.Qb(),i.Rb(10,"mat-card"),i.Rb(11,"table"),i.Rb(12,"thead"),i.Rb(13,"th"),i.uc(14,"Property"),i.Qb(),i.Rb(15,"th"),i.uc(16,"Description"),i.Qb(),i.Qb(),i.Rb(17,"tbody"),i.Rb(18,"tr"),i.Rb(19,"td"),i.Rb(20,"pre"),i.uc(21,"selector"),i.Qb(),i.Qb(),i.Rb(22,"td"),i.Rb(23,"p"),i.uc(24," The selector is "),i.Rb(25,"code"),i.uc(26,"axLazyElement"),i.Qb(),i.uc(27," which should be used with "),i.Rb(28,"code"),i.uc(29,"*"),i.Qb(),i.uc(30," as in "),i.Rb(31,"code"),i.uc(32,"*axLazyElement"),i.Qb(),i.uc(33," because it is a structural directive. "),i.Qb(),i.Qb(),i.Qb(),i.Rb(34,"tr"),i.Rb(35,"td"),i.Rb(36,"pre"),i.uc(37,"@Input('axLazyElement')\nurl: string;"),i.Qb(),i.Qb(),i.Rb(38,"td"),i.Rb(39,"p"),i.uc(40," The url of the element bundle (or module). This is the main property which corresponds to the main directive selector. "),i.Qb(),i.Rb(41,"ul"),i.Rb(42,"li"),i.uc(43," Inline string value - "),i.Rb(44,"code"),i.uc(45,"<some-element *axLazyElement=\"'https://elements.com/some-element'\"></some-element>"),i.Qb(),i.Qb(),i.Rb(46,"li"),i.uc(47," Component property reference - "),i.Rb(48,"code"),i.uc(49,'<some-element *axLazyElement="url"></some-element>'),i.Qb(),i.Qb(),i.Rb(50,"code",0),i.uc(51,"Pre-configurable"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(52,"tr"),i.Rb(53,"td"),i.Rb(54,"pre"),i.uc(55,"@Input('axLazyElementLoadingTemplate')\nloadingTemplateRef: TemplateRef<any>;"),i.Qb(),i.Qb(),i.Rb(56,"td"),i.Rb(57,"p"),i.uc(58," Reference to Angular template which will be displayed before the element bundle (or module) was loaded. To show loader we can create following template "),i.Rb(59,"code"),i.uc(60,"<ng-template #loading>Loading...</ng-template>"),i.Qb(),i.uc(61," and then we have to reference it "),i.Rb(62,"code"),i.uc(63,'<some-element *axLazyElement="url; loadingTemplate: loading"></some-element>'),i.Qb(),i.Qb(),i.Rb(64,"code",0),i.uc(65,"Optional"),i.Qb(),i.uc(66,"\xa0"),i.Rb(67,"code",0),i.uc(68,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(69,"tr"),i.Rb(70,"td"),i.Rb(71,"pre"),i.uc(72,"@Input('axLazyElementErrorTemplate')\nerrorTemplateRef: TemplateRef<any>;"),i.Qb(),i.Qb(),i.Rb(73,"td"),i.Rb(74,"p"),i.uc(75," Reference to Angular template which will be hich will be displayed before the element bundle (or module) loading failed. To show error message we can create following template "),i.Rb(76,"code"),i.uc(77,"<ng-template #error>Loading failed...</ng-template>"),i.Qb(),i.uc(78," and then we have to reference it "),i.Rb(79,"code"),i.uc(80,'<some-element *axLazyElement="url; errorTemplate: error"></some-element>'),i.Qb(),i.Qb(),i.Rb(81,"code",0),i.uc(82,"Optional"),i.Qb(),i.uc(83,"\xa0"),i.Rb(84,"code",0),i.uc(85,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(86,"tr"),i.Rb(87,"td"),i.Rb(88,"pre"),i.uc(89,"@Input('axLazyElementModule')\nisModule: boolean;"),i.Qb(),i.Qb(),i.Rb(90,"td"),i.Rb(91,"p"),i.uc(92," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),i.Rb(93,"code"),i.uc(94,"<script>"),i.Qb(),i.uc(95," tag which will get "),i.Rb(96,"code"),i.uc(97,'type="module"'),i.Qb(),i.uc(98," in case this flag was set to true. The flag can be set using "),i.Rb(99,"code"),i.uc(100,'<some-element *axLazyElement="url; module: true"></some-element>'),i.Qb(),i.Qb(),i.Rb(101,"code",0),i.uc(102,"Optional"),i.Qb(),i.uc(103,"\xa0"),i.Rb(104,"code",0),i.uc(105,"Default: false"),i.Qb(),i.Rb(106,"code",0),i.uc(107,"Pre-configurable"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(108,"mat-card"),i.Rb(109,"table"),i.Rb(110,"thead"),i.Rb(111,"th"),i.uc(112,"Function"),i.Qb(),i.Rb(113,"th"),i.uc(114,"Description"),i.Qb(),i.Qb(),i.Rb(115,"tbody"),i.Rb(116,"tr"),i.Rb(117,"td"),i.Rb(118,"pre"),i.uc(119,"destroyEmbeddedView()"),i.Qb(),i.Qb(),i.Rb(120,"td"),i.Rb(121,"p"),i.uc(122," The "),i.Rb(123,"code"),i.uc(124,"destroyEmbeddedView"),i.Qb(),i.uc(125," is a public method which can be called by parent component to destroy element's embedded view on demand. "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(126,"section"),i.Rb(127,"h2"),i.uc(128,"LazyElementModule"),i.Qb(),i.Rb(129,"code",0),i.uc(130,"Module"),i.Qb(),i.Mb(131,"br"),i.Rb(132,"p"),i.uc(133," An Angular module which exports "),i.Rb(134,"code"),i.uc(135,"*axLazyElement"),i.Qb(),i.uc(136," and "),i.Rb(137,"code"),i.uc(138,"*axLazyElementDynamic"),i.Qb(),i.uc(139," directives so it has to be imported in other Angular modules which want to use these directives in the templates of their components. Module can be also pre-configured using "),i.Rb(140,"code"),i.uc(141,"forRoot()"),i.Qb(),i.uc(142," and "),i.Rb(143,"code"),i.uc(144,"forFeature()"),i.Qb(),i.uc(145," static methods. "),i.Qb(),i.Rb(146,"mat-card"),i.Rb(147,"table"),i.Rb(148,"thead"),i.Rb(149,"th"),i.uc(150,"Function"),i.Qb(),i.Rb(151,"th"),i.uc(152,"Description"),i.Qb(),i.Qb(),i.Rb(153,"tbody"),i.Rb(154,"tr"),i.Rb(155,"td"),i.Rb(156,"pre"),i.uc(157,"forRoot(options: LazyElementModuleRootOptions)"),i.Qb(),i.Qb(),i.Rb(158,"td"),i.Rb(159,"p"),i.uc(160," The "),i.Rb(161,"code"),i.uc(162,"forRoot()"),i.Qb(),i.uc(163," static method which accepts options of "),i.Rb(164,"code"),i.uc(165,"LazyElementModuleRootOptions"),i.Qb(),i.uc(166," type "),i.Mb(167,"br"),i.Rb(168,"code",0),i.uc(169,"Optional"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(170,"tr"),i.Rb(171,"td"),i.Rb(172,"pre"),i.uc(173,"forFeature(options: LazyElementModuleOptions)"),i.Qb(),i.Qb(),i.Rb(174,"td"),i.Rb(175,"p"),i.uc(176," The "),i.Rb(177,"code"),i.uc(178,"forFeature()"),i.Qb(),i.uc(179," static method which accepts options of "),i.Rb(180,"code"),i.uc(181,"LazyElementModuleOptions"),i.Qb(),i.uc(182," type "),i.Mb(183,"br"),i.Rb(184,"code",0),i.uc(185,"Optional"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(186,"section"),i.Rb(187,"h2"),i.uc(188,"LazyElementModuleRootOptions"),i.Qb(),i.Rb(189,"code",0),i.uc(190,"Interface"),i.Qb(),i.Mb(191,"br"),i.Rb(192,"p"),i.uc(193," Type of an option object that can be passed to static "),i.Rb(194,"code"),i.uc(195,"forRoot()"),i.Qb(),i.uc(196," method of "),i.Rb(197,"code"),i.uc(198,"LazyElementModule"),i.Qb(),i.uc(199,". "),i.Qb(),i.Rb(200,"mat-card"),i.Rb(201,"table"),i.Rb(202,"thead"),i.Rb(203,"th"),i.uc(204,"Property"),i.Qb(),i.Rb(205,"th"),i.uc(206,"Description"),i.Qb(),i.Qb(),i.Rb(207,"tbody"),i.Rb(208,"tr"),i.Rb(209,"td"),i.Rb(210,"pre"),i.uc(211,"elementConfigs: ElementConfig[]"),i.Qb(),i.Qb(),i.Rb(212,"td"),i.Rb(213,"p"),i.uc(214," Optional array of "),i.Rb(215,"code"),i.uc(216,"ElementConfig"),i.Qb(),i.uc(217,"... "),i.Mb(218,"br"),i.Rb(219,"code",0),i.uc(220,"Optional"),i.Qb(),i.uc(221,"\xa0"),i.Rb(222,"code",0),i.uc(223,"Default: []"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(224,"tr"),i.Rb(225,"td"),i.Rb(226,"pre"),i.uc(227,"rootOptions: LazyElementRootOptions"),i.Qb(),i.Qb(),i.Rb(228,"td"),i.Rb(229,"p"),i.uc(230," Optional object of "),i.Rb(231,"code"),i.uc(232,"LazyElementRootOptions"),i.Qb(),i.uc(233,"... "),i.Mb(234,"br"),i.Rb(235,"code",0),i.uc(236,"Optional"),i.Qb(),i.uc(237,"\xa0"),i.Rb(238,"code",0),i.uc(239,"Default: { }"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(240,"section"),i.Rb(241,"h2"),i.uc(242,"LazyElementRootOptions"),i.Qb(),i.Rb(243,"code",0),i.uc(244,"Interface"),i.Qb(),i.Mb(245,"br"),i.Rb(246,"p"),i.uc(247," Type of an option object that can be passed as the "),i.Rb(248,"code"),i.uc(249,"rootOptions"),i.Qb(),i.uc(250," of the "),i.Rb(251,"code"),i.uc(252,"LazyElementModuleRootOptions"),i.Qb(),i.uc(253," into the "),i.Rb(254,"code"),i.uc(255,"forRoot()"),i.Qb(),i.uc(256," method of "),i.Rb(257,"code"),i.uc(258,"LazyElementModule"),i.Qb(),i.uc(259,". These options will be applied to every element loaded using "),i.Rb(260,"code"),i.uc(261,"*axLazyElement"),i.Qb(),i.uc(262," or "),i.Rb(263,"code"),i.uc(264,"*axLazyElementDynamic"),i.Qb(),i.uc(265," directives. These options can be overridden by the element configuration in "),i.Rb(266,"code"),i.uc(267,"forFeature()"),i.Qb(),i.uc(268," and lastly by the inline configuration of "),i.Rb(269,"code"),i.uc(270,"*axLazyElement"),i.Qb(),i.uc(271," directive. "),i.Qb(),i.Rb(272,"mat-card"),i.Rb(273,"table"),i.Rb(274,"thead"),i.Rb(275,"th"),i.uc(276,"Property"),i.Qb(),i.Rb(277,"th"),i.uc(278,"Description"),i.Qb(),i.Qb(),i.Rb(279,"tbody"),i.Rb(280,"tr"),i.Rb(281,"td"),i.Rb(282,"pre"),i.uc(283,"loadingComponent: Type<any>"),i.Qb(),i.Qb(),i.Rb(284,"td"),i.Rb(285,"p"),i.uc(286," Component class to be displayed during element loading (similar to "),i.Rb(287,"code"),i.uc(288,"loadingTemplate"),i.Qb(),i.uc(289," that can be specified inline in the template, eg "),i.Rb(290,"code"),i.uc(291,'*axLazyElement="url; loadingTemplate: loading;"'),i.Qb(),i.uc(292,") "),i.Qb(),i.Rb(293,"code",0),i.uc(294,"Optional"),i.Qb(),i.uc(295,"\xa0"),i.Rb(296,"code",0),i.uc(297,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(298,"tr"),i.Rb(299,"td"),i.Rb(300,"pre"),i.uc(301,"errorComponent: Type<any>"),i.Qb(),i.Qb(),i.Rb(302,"td"),i.Rb(303,"p"),i.uc(304," Component class to be displayed after element loading failed (similar to "),i.Rb(305,"code"),i.uc(306,"errorTemplate"),i.Qb(),i.uc(307," that can be specified inline in the template, eg "),i.Rb(308,"code"),i.uc(309,'*axLazyElement="url; errorTemplate: error;"'),i.Qb(),i.uc(310,") "),i.Qb(),i.Rb(311,"code",0),i.uc(312,"Optional"),i.Qb(),i.uc(313,"\xa0"),i.Rb(314,"code",0),i.uc(315,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(316,"tr"),i.Rb(317,"td"),i.Rb(318,"pre"),i.uc(319,"isModule: boolean"),i.Qb(),i.Qb(),i.Rb(320,"td"),i.Rb(321,"p"),i.uc(322," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),i.Rb(323,"code"),i.uc(324,"<script>"),i.Qb(),i.uc(325," tag which will get "),i.Rb(326,"code"),i.uc(327,'type="module"'),i.Qb(),i.uc(328," in case this flag was set to true. "),i.Qb(),i.Rb(329,"code",0),i.uc(330,"Optional"),i.Qb(),i.uc(331,"\xa0"),i.Rb(332,"code",0),i.uc(333,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(334,"tr"),i.Rb(335,"td"),i.Rb(336,"pre"),i.uc(337,"preload: boolean"),i.Qb(),i.Qb(),i.Rb(338,"td"),i.Rb(339,"p"),i.uc(340," Flag that specifies if the all the modules should be preloaded "),i.Qb(),i.Rb(341,"code",0),i.uc(342,"Optional"),i.Qb(),i.uc(343,"\xa0"),i.Rb(344,"code",0),i.uc(345,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(346,"tr"),i.Rb(347,"td"),i.Rb(348,"pre"),i.uc(349,"hooksConfig: HooksConfig"),i.Qb(),i.Qb(),i.Rb(350,"td"),i.Rb(351,"p"),i.uc(352," Global hooks configuration for all elements. Any loaded element will run hooks configured here unless some of them were overriden in "),i.Rb(353,"code"),i.uc(354,"ElementConfig"),i.Qb(),i.uc(355,". "),i.Qb(),i.Rb(356,"code",0),i.uc(357,"Optional"),i.Qb(),i.uc(358,"\xa0"),i.Rb(359,"code",0),i.uc(360,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(361,"section"),i.Rb(362,"h2"),i.uc(363,"LazyElementModuleOptions"),i.Qb(),i.Rb(364,"code",0),i.uc(365,"Interface"),i.Qb(),i.Mb(366,"br"),i.Rb(367,"p"),i.uc(368," Type of an option object that can be passed to static "),i.Rb(369,"code"),i.uc(370,"forFeature()"),i.Qb(),i.uc(371," method of "),i.Rb(372,"code"),i.uc(373,"LazyElementModule"),i.Qb(),i.uc(374,". "),i.Qb(),i.Rb(375,"mat-card"),i.Rb(376,"table"),i.Rb(377,"thead"),i.Rb(378,"th"),i.uc(379,"Property"),i.Qb(),i.Rb(380,"th"),i.uc(381,"Description"),i.Qb(),i.Qb(),i.Rb(382,"tbody"),i.Rb(383,"tr"),i.Rb(384,"td"),i.Rb(385,"pre"),i.uc(386,"elementConfigs: ElementConfig[]"),i.Qb(),i.Qb(),i.Rb(387,"td"),i.Rb(388,"p"),i.uc(389," Optional array of "),i.Rb(390,"code"),i.uc(391,"ElementConfig"),i.Qb(),i.uc(392,"... "),i.Mb(393,"br"),i.Rb(394,"code",0),i.uc(395,"Optional"),i.Qb(),i.uc(396,"\xa0"),i.Rb(397,"code",0),i.uc(398,"Default: []"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(399,"section"),i.Rb(400,"h2"),i.uc(401,"ElementConfig"),i.Qb(),i.Rb(402,"code",0),i.uc(403,"Interface"),i.Qb(),i.Mb(404,"br"),i.Rb(405,"p"),i.uc(406," The element config used to pre-configure "),i.Rb(407,"code"),i.uc(408,"LazyElementModule"),i.Qb(),i.uc(409," so that we do not have to specify url (and other supported options) inline inside of the "),i.Rb(410,"code"),i.uc(411,"*axLazyElement"),i.Qb(),i.uc(412," and "),i.Rb(413,"code"),i.uc(414,"*axLazyElementDynamic"),i.Qb(),i.uc(415," directives. The configs are matched to particular elements by the tag. The elements are still loaded lazily even though they are preconfigured in the module during application startup... "),i.Qb(),i.Rb(416,"mat-card"),i.Rb(417,"table"),i.Rb(418,"thead"),i.Rb(419,"th"),i.uc(420,"Property"),i.Qb(),i.Rb(421,"th"),i.uc(422,"Description"),i.Qb(),i.Qb(),i.Rb(423,"tbody"),i.Rb(424,"tr"),i.Rb(425,"td"),i.Rb(426,"pre"),i.uc(427,"tag: string"),i.Qb(),i.Qb(),i.Rb(428,"td"),i.Rb(429,"p"),i.uc(430,"Tag of an element (eg: "),i.Rb(431,"code"),i.uc(432,"some-element"),i.Qb(),i.uc(433,")"),i.Qb(),i.Qb(),i.Qb(),i.Rb(434,"tr"),i.Rb(435,"td"),i.Rb(436,"pre"),i.uc(437,"url: string"),i.Qb(),i.Qb(),i.Rb(438,"td"),i.Rb(439,"p"),i.uc(440," The url of an element bundle or ES module (eg: "),i.Rb(441,"code"),i.uc(442,"https://my-org.com/elements/some-element.js"),i.Qb(),i.uc(443,") "),i.Qb(),i.Qb(),i.Qb(),i.Rb(444,"tr"),i.Rb(445,"td"),i.Rb(446,"pre"),i.uc(447,"isModule: boolean"),i.Qb(),i.Qb(),i.Rb(448,"td"),i.Rb(449,"p"),i.uc(450," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),i.Rb(451,"code"),i.uc(452,"<script>"),i.Qb(),i.uc(453," tag which will get "),i.Rb(454,"code"),i.uc(455,'type="module"'),i.Qb(),i.uc(456," in case this flag was set to true. "),i.Qb(),i.Rb(457,"code",0),i.uc(458,"Optional"),i.Qb(),i.uc(459,"\xa0"),i.Rb(460,"code",0),i.uc(461,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(462,"tr"),i.Rb(463,"td"),i.Rb(464,"pre"),i.uc(465,"loadingComponent: Type<any>"),i.Qb(),i.Qb(),i.Rb(466,"td"),i.Rb(467,"p"),i.uc(468," Component class to be displayed during element loading (similar to "),i.Rb(469,"code"),i.uc(470,"loadingTemplate"),i.Qb(),i.uc(471," that can be specified inline in the template, eg "),i.Rb(472,"code"),i.uc(473,'*axLazyElement="url; loadingTemplate: loading;"'),i.Qb(),i.uc(474,") "),i.Qb(),i.Rb(475,"code",0),i.uc(476,"Optional"),i.Qb(),i.uc(477,"\xa0"),i.Rb(478,"code",0),i.uc(479,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(480,"tr"),i.Rb(481,"td"),i.Rb(482,"pre"),i.uc(483,"errorComponent: Type<any>"),i.Qb(),i.Qb(),i.Rb(484,"td"),i.Rb(485,"p"),i.uc(486," Component class to be displayed after element loading failed (similar to "),i.Rb(487,"code"),i.uc(488,"errorTemplate"),i.Qb(),i.uc(489," that can be specified inline in the template, eg "),i.Rb(490,"code"),i.uc(491,'*axLazyElement="url; errorTemplate: error;"'),i.Qb(),i.uc(492,") "),i.Qb(),i.Rb(493,"code",0),i.uc(494,"Optional"),i.Qb(),i.uc(495,"\xa0"),i.Rb(496,"code",0),i.uc(497,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(498,"tr"),i.Rb(499,"td"),i.Rb(500,"pre"),i.uc(501,"preload: boolean"),i.Qb(),i.Qb(),i.Rb(502,"td"),i.Rb(503,"p"),i.uc(504," Flag that specifies if the element is preloaded. "),i.Qb(),i.Rb(505,"code",0),i.uc(506,"Optional"),i.Qb(),i.uc(507,"\xa0"),i.Rb(508,"code",0),i.uc(509,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(510,"tr"),i.Rb(511,"td"),i.Rb(512,"pre"),i.uc(513,"hooks: HooksConfig"),i.Qb(),i.Qb(),i.Rb(514,"td"),i.Rb(515,"p"),i.uc(516," Hooks configuration for the element. Any hook specified here will overwrite corresponding root hook for the element. See "),i.Rb(517,"code"),i.uc(518,"HooksConfig"),i.Qb(),i.uc(519,". "),i.Qb(),i.Rb(520,"code",0),i.uc(521,"Optional"),i.Qb(),i.uc(522,"\xa0"),i.Rb(523,"code",0),i.uc(524,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb();i.Qb(),i.Rb(525,"section"),i.Rb(526,"h2"),i.uc(527,"HooksConfig"),i.Qb(),i.Rb(528,"code",0),i.uc(529,"Interface"),i.Qb(),i.Mb(530,"br"),i.Rb(531,"p"),i.uc(532," Hooks for running custom logic as part of the element's lifecycle. See "),i.Rb(533,"code"),i.uc(534,"ElementConfig"),i.Qb(),i.uc(535," and "),i.Rb(536,"code"),i.uc(537,"LazyElementRootOptions"),i.Qb(),i.uc(538,". "),i.Qb(),i.Rb(539,"mat-card"),i.Rb(540,"table"),i.Rb(541,"thead"),i.Rb(542,"th"),i.uc(543,"Property"),i.Qb(),i.Rb(544,"th"),i.uc(545,"Description"),i.Qb(),i.Qb(),i.Rb(546,"tbody"),i.Rb(547,"tr"),i.Rb(548,"td"),i.Rb(549,"pre"),i.uc(550,"beforeLoad: Hook"),i.Qb(),i.Qb(),i.Rb(551,"td"),i.Rb(552,"p"),i.uc(553," This hook will run before the browser starts the element's download. If the provided hook returns a "),i.Rb(554,"code"),i.uc(555,"Promise"),i.Qb(),i.uc(556," the element's download will be postponed until the Promise is resolved. "),i.Qb(),i.Rb(557,"code",0),i.uc(558,"Optional"),i.Qb(),i.uc(559,"\xa0"),i.Rb(560,"code",0),i.uc(561,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Rb(562,"tr"),i.Rb(563,"td"),i.Rb(564,"pre"),i.uc(565,"afterLoad: Hook"),i.Qb(),i.Qb(),i.Rb(566,"td"),i.Rb(567,"p"),i.uc(568," This hook will run after the element's download has been completed. If the provided hook returns a "),i.Rb(569,"code"),i.uc(570,"Promise"),i.Qb(),i.uc(571," the element's insertion into the corresponding Angular's view will be postponed until the Promise is resolved. "),i.Qb(),i.Rb(572,"code",0),i.uc(573,"Optional"),i.Qb(),i.uc(574,"\xa0"),i.Rb(575,"code",0),i.uc(576,"Default: undefined"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(577,"section"),i.Rb(578,"h2"),i.uc(579,"Hook"),i.Qb(),i.Rb(580,"code",0),i.uc(581,"Type"),i.Qb(),i.Mb(582,"br"),i.Rb(583,"p"),i.uc(584,"Hook that can be run as part of "),i.Rb(585,"code"),i.uc(586,"HooksConfig"),i.Qb(),i.uc(587,"."),i.Qb(),i.Rb(588,"mat-card"),i.Rb(589,"table"),i.Rb(590,"thead"),i.Rb(591,"th"),i.uc(592,"Value"),i.Qb(),i.Rb(593,"th"),i.uc(594,"Description"),i.Qb(),i.Qb(),i.Rb(595,"tbody"),i.Rb(596,"tr"),i.Rb(597,"td"),i.Rb(598,"pre"),i.uc(599,"(tag: string) => Promise<void> \u2758 <void>"),i.Qb(),i.Qb(),i.Rb(600,"td"),i.Rb(601,"p"),i.uc(602," Provided function will be called at the appropriate time in the element's lifecycle. If the function returns a "),i.Rb(603,"code"),i.uc(604,"Promise"),i.Qb(),i.uc(605," the library will wait for its' resolution before proceeding. "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(606,"section"),i.Rb(607,"h2"),i.uc(608,"LazyElementsLoaderService"),i.Qb(),i.Rb(609,"code",0),i.uc(610,"Service"),i.Qb(),i.Mb(611,"br"),i.Rb(612,"p"),i.uc(613," A service used for loading the Angular element (or any other webcomponent) "),i.Qb(),i.Rb(614,"mat-card"),i.Rb(615,"table"),i.Rb(616,"thead"),i.Rb(617,"th"),i.uc(618,"Method"),i.Qb(),i.Rb(619,"th"),i.uc(620,"Description"),i.Qb(),i.Qb(),i.Rb(621,"tbody"),i.Rb(622,"tr"),i.Rb(623,"td"),i.Rb(624,"pre"),i.uc(625,"preload(tags? : string[]): void"),i.Qb(),i.Qb(),i.Rb(626,"td"),i.Rb(627,"p"),i.uc(628," Preloads the specified tags which are preconfigured using "),i.Rb(629,"code"),i.uc(630,"forRoot"),i.Qb(),i.uc(631," and "),i.Rb(632,"code"),i.uc(633,"forFeature"),i.Qb(),i.uc(634,". If "),i.Rb(635,"code"),i.uc(636,"tags"),i.Qb(),i.uc(637," is "),i.Rb(638,"code"),i.uc(639,"undefined|null"),i.Qb(),i.uc(640," preload all the configured tags. "),i.Mb(641,"br"),i.uc(642," Parameters: "),i.Mb(643,"br"),i.uc(644," tags "),i.Rb(645,"code",0),i.uc(646,"Optional"),i.Qb(),i.uc(647,"\xa0"),i.Rb(648,"code",0),i.uc(649,"Default: undefined"),i.Qb(),i.Mb(650,"br"),i.uc(651," returns: "),i.Rb(652,"code",0),i.uc(653,"void"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(654,"section"),i.Rb(655,"h2"),i.uc(656,"LAZY_ELEMENTS_REGISTRY"),i.Qb(),i.Rb(657,"code",0),i.uc(658,"Token"),i.Qb(),i.Mb(659,"br"),i.Rb(660,"p"),i.uc(661," A token used to override default lazy elements registry which is used to prevent multiple downloads of the same element Javascript bundle... "),i.Qb(),i.Rb(662,"mat-card"),i.Rb(663,"table"),i.Rb(664,"thead"),i.Rb(665,"th"),i.uc(666,"Value"),i.Qb(),i.Rb(667,"th"),i.uc(668,"Description"),i.Qb(),i.Qb(),i.Rb(669,"tbody"),i.Rb(670,"tr"),i.Rb(671,"td"),i.Rb(672,"pre"),i.uc(673,"{\n  provide: LAZY_ELEMENTS_REGISTRY,\n  useClass: YourRegistryImplementation\n}"),i.Qb(),i.Qb(),i.Rb(674,"td"),i.Rb(675,"p"),i.uc(676," Overrides default lazy elements registry implementation which can be useful when using library in the multiple apps (or elements) on a single page to prevent multiple downloads of the same element Javascript bundle. The new implementation has to implement "),i.Rb(677,"code"),i.uc(678,"LazyElementsRegistry"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(679,"section"),i.Rb(680,"h2"),i.uc(681,"LazyElementsRegistry"),i.Qb(),i.Rb(682,"code",0),i.uc(683,"Interface"),i.Qb(),i.Mb(684,"br"),i.Rb(685,"p"),i.uc(686," An interface which has to be implemented by custom lazy elements registry. The default lazy element registry used by the library out of the box is "),i.Rb(687,"code"),i.uc(688,"Map<string, Promise<void>"),i.Qb(),i.Qb(),i.Rb(689,"mat-card"),i.Rb(690,"table"),i.Rb(691,"thead"),i.Rb(692,"th"),i.uc(693,"Property"),i.Qb(),i.Rb(694,"th"),i.uc(695,"Description"),i.Qb(),i.Qb(),i.Rb(696,"tbody"),i.Rb(697,"tr"),i.Rb(698,"td"),i.Rb(699,"pre"),i.uc(700,"get: (url: string) => Promise<void>"),i.Qb(),i.Qb(),i.Rb(701,"td"),i.Rb(702,"p"),i.uc(703," Retrieve loading state ("),i.Rb(704,"code"),i.uc(705,"Promise"),i.Qb(),i.uc(706,") of an element bundle identified by the "),i.Rb(707,"code"),i.uc(708,"url"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(709,"tr"),i.Rb(710,"td"),i.Rb(711,"pre"),i.uc(712,"set: (url: string, notifier: Promise<void>) => void"),i.Qb(),i.Qb(),i.Rb(713,"td"),i.Rb(714,"p"),i.uc(715," Store loading state ("),i.Rb(716,"code"),i.uc(717,"Promise"),i.Qb(),i.uc(718,") of an element bundle identified by the "),i.Rb(719,"code"),i.uc(720,"url"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(721,"tr"),i.Rb(722,"td"),i.Rb(723,"pre"),i.uc(724,"has: (url: string) => boolean"),i.Qb(),i.Qb(),i.Rb(725,"td"),i.Rb(726,"p"),i.uc(727," Check if registry already contains loading state ("),i.Rb(728,"code"),i.uc(729,"Promise"),i.Qb(),i.uc(730,") of an element bundle identified by the "),i.Rb(731,"code"),i.uc(732,"url"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(733,"section"),i.Rb(734,"h2"),i.uc(735,"LazyElementTestingModule"),i.Qb(),i.Rb(736,"code",0),i.uc(737,"Module"),i.Qb(),i.Rb(738,"code"),i.uc(739,"@angular-extensions/elements/testing"),i.Qb(),i.Mb(740,"br"),i.Rb(741,"p"),i.uc(742," The testing module is used in Angular unit-tests to help mock lazy-loaded elements with mock components provided by the test. Check out how to use it in the "),i.Rb(743,"a",1),i.uc(744,"testing example"),i.Qb(),i.uc(745,". "),i.Qb(),i.Rb(746,"mat-card"),i.Rb(747,"table"),i.Rb(748,"thead"),i.Rb(749,"th"),i.uc(750,"Declarable"),i.Qb(),i.Rb(751,"th"),i.uc(752,"Description"),i.Qb(),i.Qb(),i.Rb(753,"tbody"),i.Rb(754,"tr"),i.Rb(755,"td"),i.Rb(756,"pre"),i.uc(757,"LazyElementTestingDirective "),i.Rb(758,"code"),i.uc(759,"*axLazyElement"),i.Qb(),i.Qb(),i.Qb(),i.Rb(760,"td"),i.Rb(761,"p"),i.uc(762," Overrides default behavior of "),i.Rb(763,"code"),i.uc(764,"*axLazyElement"),i.Qb(),i.uc(765," by displaying element immediately without trying to lazy load it, display loading or error... "),i.Qb(),i.Qb(),i.Qb(),i.Rb(766,"tr"),i.Rb(767,"td"),i.Rb(768,"pre"),i.uc(769,"LazyElementDynamicTestingDirective "),i.Rb(770,"code"),i.uc(771,"*axLazyElementDynamic"),i.Qb(),i.Qb(),i.Qb(),i.Rb(772,"td"),i.Rb(773,"p"),i.uc(774," Overrides default behavior of "),i.Rb(775,"code"),i.uc(776,"*axLazyElementDynamic"),i.Qb(),i.uc(777," by displaying element immediately without trying to lazy load it, display loading or error... "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()}},directives:[d.a,u.c],styles:["h2[_ngcontent-%COMP%]{display:inline-block;font-weight:700;margin:0 10px 10px 0}mat-card[_ngcontent-%COMP%]{padding:0;margin-bottom:80px;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:15px 20px}table[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{opacity:.8}"]}),o)}],r=((n=function e(){_classCallCheck(this,e)}).\u0275mod=i.Jb({type:n}),n.\u0275inj=i.Ib({factory:function(e){return new(e||n)},imports:[[u.d.forChild(l)],u.d]}),n),R=((c=function e(){_classCallCheck(this,e)}).\u0275mod=i.Jb({type:c}),c.\u0275inj=i.Ib({factory:function(e){return new(e||c)},imports:[[a.a,r]]}),c)}}]);