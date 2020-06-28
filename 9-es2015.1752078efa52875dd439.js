(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{sHuI:function(e,b,t){"use strict";t.r(b),t.d(b,"ApiModule",(function(){return i}));var o=t("PCNd"),c=t("sEIs"),n=t("EM62"),u=t("Meci");const a=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(b){return new(b||e)},e.\u0275cmp=n.Fb({type:e,selectors:[["demo-api"]],decls:778,vars:0,consts:[["color","accent"],["routerLink","../../../examples/testing"]],template:function(e,b){if(1&e){n.Rb(0,"h1"),n.uc(1,"API"),n.Qb(),n.Rb(2,"section"),n.Rb(3,"h2"),n.uc(4,"LazyElementDirective"),n.Qb(),n.Rb(5,"code",0),n.uc(6,"Directive"),n.Qb(),n.Mb(7,"br"),n.Rb(8,"p"),n.uc(9," A structural directive which lazy loads desired Angular element (or any other webcomponent) "),n.Qb(),n.Rb(10,"mat-card"),n.Rb(11,"table"),n.Rb(12,"thead"),n.Rb(13,"th"),n.uc(14,"Property"),n.Qb(),n.Rb(15,"th"),n.uc(16,"Description"),n.Qb(),n.Qb(),n.Rb(17,"tbody"),n.Rb(18,"tr"),n.Rb(19,"td"),n.Rb(20,"pre"),n.uc(21,"selector"),n.Qb(),n.Qb(),n.Rb(22,"td"),n.Rb(23,"p"),n.uc(24," The selector is "),n.Rb(25,"code"),n.uc(26,"axLazyElement"),n.Qb(),n.uc(27," which should be used with "),n.Rb(28,"code"),n.uc(29,"*"),n.Qb(),n.uc(30," as in "),n.Rb(31,"code"),n.uc(32,"*axLazyElement"),n.Qb(),n.uc(33," because it is a structural directive. "),n.Qb(),n.Qb(),n.Qb(),n.Rb(34,"tr"),n.Rb(35,"td"),n.Rb(36,"pre"),n.uc(37,"@Input('axLazyElement')\nurl: string;"),n.Qb(),n.Qb(),n.Rb(38,"td"),n.Rb(39,"p"),n.uc(40," The url of the element bundle (or module). This is the main property which corresponds to the main directive selector. "),n.Qb(),n.Rb(41,"ul"),n.Rb(42,"li"),n.uc(43," Inline string value - "),n.Rb(44,"code"),n.uc(45,"<some-element *axLazyElement=\"'https://elements.com/some-element'\"></some-element>"),n.Qb(),n.Qb(),n.Rb(46,"li"),n.uc(47," Component property reference - "),n.Rb(48,"code"),n.uc(49,'<some-element *axLazyElement="url"></some-element>'),n.Qb(),n.Qb(),n.Rb(50,"code",0),n.uc(51,"Pre-configurable"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(52,"tr"),n.Rb(53,"td"),n.Rb(54,"pre"),n.uc(55,"@Input('axLazyElementLoadingTemplate')\nloadingTemplateRef: TemplateRef<any>;"),n.Qb(),n.Qb(),n.Rb(56,"td"),n.Rb(57,"p"),n.uc(58," Reference to Angular template which will be displayed before the element bundle (or module) was loaded. To show loader we can create following template "),n.Rb(59,"code"),n.uc(60,"<ng-template #loading>Loading...</ng-template>"),n.Qb(),n.uc(61," and then we have to reference it "),n.Rb(62,"code"),n.uc(63,'<some-element *axLazyElement="url; loadingTemplate: loading"></some-element>'),n.Qb(),n.Qb(),n.Rb(64,"code",0),n.uc(65,"Optional"),n.Qb(),n.uc(66,"\xa0"),n.Rb(67,"code",0),n.uc(68,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(69,"tr"),n.Rb(70,"td"),n.Rb(71,"pre"),n.uc(72,"@Input('axLazyElementErrorTemplate')\nerrorTemplateRef: TemplateRef<any>;"),n.Qb(),n.Qb(),n.Rb(73,"td"),n.Rb(74,"p"),n.uc(75," Reference to Angular template which will be hich will be displayed before the element bundle (or module) loading failed. To show error message we can create following template "),n.Rb(76,"code"),n.uc(77,"<ng-template #error>Loading failed...</ng-template>"),n.Qb(),n.uc(78," and then we have to reference it "),n.Rb(79,"code"),n.uc(80,'<some-element *axLazyElement="url; errorTemplate: error"></some-element>'),n.Qb(),n.Qb(),n.Rb(81,"code",0),n.uc(82,"Optional"),n.Qb(),n.uc(83,"\xa0"),n.Rb(84,"code",0),n.uc(85,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(86,"tr"),n.Rb(87,"td"),n.Rb(88,"pre"),n.uc(89,"@Input('axLazyElementModule')\nisModule: boolean;"),n.Qb(),n.Qb(),n.Rb(90,"td"),n.Rb(91,"p"),n.uc(92," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),n.Rb(93,"code"),n.uc(94,"<script>"),n.Qb(),n.uc(95," tag which will get "),n.Rb(96,"code"),n.uc(97,'type="module"'),n.Qb(),n.uc(98," in case this flag was set to true. The flag can be set using "),n.Rb(99,"code"),n.uc(100,'<some-element *axLazyElement="url; module: true"></some-element>'),n.Qb(),n.Qb(),n.Rb(101,"code",0),n.uc(102,"Optional"),n.Qb(),n.uc(103,"\xa0"),n.Rb(104,"code",0),n.uc(105,"Default: false"),n.Qb(),n.Rb(106,"code",0),n.uc(107,"Pre-configurable"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(108,"mat-card"),n.Rb(109,"table"),n.Rb(110,"thead"),n.Rb(111,"th"),n.uc(112,"Function"),n.Qb(),n.Rb(113,"th"),n.uc(114,"Description"),n.Qb(),n.Qb(),n.Rb(115,"tbody"),n.Rb(116,"tr"),n.Rb(117,"td"),n.Rb(118,"pre"),n.uc(119,"destroyEmbeddedView()"),n.Qb(),n.Qb(),n.Rb(120,"td"),n.Rb(121,"p"),n.uc(122," The "),n.Rb(123,"code"),n.uc(124,"destroyEmbeddedView"),n.Qb(),n.uc(125," is a public method which can be called by parent component to destroy element's embedded view on demand. "),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(126,"section"),n.Rb(127,"h2"),n.uc(128,"LazyElementModule"),n.Qb(),n.Rb(129,"code",0),n.uc(130,"Module"),n.Qb(),n.Mb(131,"br"),n.Rb(132,"p"),n.uc(133," An Angular module which exports "),n.Rb(134,"code"),n.uc(135,"*axLazyElement"),n.Qb(),n.uc(136," and "),n.Rb(137,"code"),n.uc(138,"*axLazyElementDynamic"),n.Qb(),n.uc(139," directives so it has to be imported in other Angular modules which want to use these directives in the templates of their components. Module can be also pre-configured using "),n.Rb(140,"code"),n.uc(141,"forRoot()"),n.Qb(),n.uc(142," and "),n.Rb(143,"code"),n.uc(144,"forFeature()"),n.Qb(),n.uc(145," static methods. "),n.Qb(),n.Rb(146,"mat-card"),n.Rb(147,"table"),n.Rb(148,"thead"),n.Rb(149,"th"),n.uc(150,"Function"),n.Qb(),n.Rb(151,"th"),n.uc(152,"Description"),n.Qb(),n.Qb(),n.Rb(153,"tbody"),n.Rb(154,"tr"),n.Rb(155,"td"),n.Rb(156,"pre"),n.uc(157,"forRoot(options: LazyElementModuleRootOptions)"),n.Qb(),n.Qb(),n.Rb(158,"td"),n.Rb(159,"p"),n.uc(160," The "),n.Rb(161,"code"),n.uc(162,"forRoot()"),n.Qb(),n.uc(163," static method which accepts options of "),n.Rb(164,"code"),n.uc(165,"LazyElementModuleRootOptions"),n.Qb(),n.uc(166," type "),n.Mb(167,"br"),n.Rb(168,"code",0),n.uc(169,"Optional"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(170,"tr"),n.Rb(171,"td"),n.Rb(172,"pre"),n.uc(173,"forFeature(options: LazyElementModuleOptions)"),n.Qb(),n.Qb(),n.Rb(174,"td"),n.Rb(175,"p"),n.uc(176," The "),n.Rb(177,"code"),n.uc(178,"forFeature()"),n.Qb(),n.uc(179," static method which accepts options of "),n.Rb(180,"code"),n.uc(181,"LazyElementModuleOptions"),n.Qb(),n.uc(182," type "),n.Mb(183,"br"),n.Rb(184,"code",0),n.uc(185,"Optional"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(186,"section"),n.Rb(187,"h2"),n.uc(188,"LazyElementModuleRootOptions"),n.Qb(),n.Rb(189,"code",0),n.uc(190,"Interface"),n.Qb(),n.Mb(191,"br"),n.Rb(192,"p"),n.uc(193," Type of an option object that can be passed to static "),n.Rb(194,"code"),n.uc(195,"forRoot()"),n.Qb(),n.uc(196," method of "),n.Rb(197,"code"),n.uc(198,"LazyElementModule"),n.Qb(),n.uc(199,". "),n.Qb(),n.Rb(200,"mat-card"),n.Rb(201,"table"),n.Rb(202,"thead"),n.Rb(203,"th"),n.uc(204,"Property"),n.Qb(),n.Rb(205,"th"),n.uc(206,"Description"),n.Qb(),n.Qb(),n.Rb(207,"tbody"),n.Rb(208,"tr"),n.Rb(209,"td"),n.Rb(210,"pre"),n.uc(211,"elementConfigs: ElementConfig[]"),n.Qb(),n.Qb(),n.Rb(212,"td"),n.Rb(213,"p"),n.uc(214," Optional array of "),n.Rb(215,"code"),n.uc(216,"ElementConfig"),n.Qb(),n.uc(217,"... "),n.Mb(218,"br"),n.Rb(219,"code",0),n.uc(220,"Optional"),n.Qb(),n.uc(221,"\xa0"),n.Rb(222,"code",0),n.uc(223,"Default: []"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(224,"tr"),n.Rb(225,"td"),n.Rb(226,"pre"),n.uc(227,"rootOptions: LazyElementRootOptions"),n.Qb(),n.Qb(),n.Rb(228,"td"),n.Rb(229,"p"),n.uc(230," Optional object of "),n.Rb(231,"code"),n.uc(232,"LazyElementRootOptions"),n.Qb(),n.uc(233,"... "),n.Mb(234,"br"),n.Rb(235,"code",0),n.uc(236,"Optional"),n.Qb(),n.uc(237,"\xa0"),n.Rb(238,"code",0),n.uc(239,"Default: { }"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(240,"section"),n.Rb(241,"h2"),n.uc(242,"LazyElementRootOptions"),n.Qb(),n.Rb(243,"code",0),n.uc(244,"Interface"),n.Qb(),n.Mb(245,"br"),n.Rb(246,"p"),n.uc(247," Type of an option object that can be passed as the "),n.Rb(248,"code"),n.uc(249,"rootOptions"),n.Qb(),n.uc(250," of the "),n.Rb(251,"code"),n.uc(252,"LazyElementModuleRootOptions"),n.Qb(),n.uc(253," into the "),n.Rb(254,"code"),n.uc(255,"forRoot()"),n.Qb(),n.uc(256," method of "),n.Rb(257,"code"),n.uc(258,"LazyElementModule"),n.Qb(),n.uc(259,". These options will be applied to every element loaded using "),n.Rb(260,"code"),n.uc(261,"*axLazyElement"),n.Qb(),n.uc(262," or "),n.Rb(263,"code"),n.uc(264,"*axLazyElementDynamic"),n.Qb(),n.uc(265," directives. These options can be overridden by the element configuration in "),n.Rb(266,"code"),n.uc(267,"forFeature()"),n.Qb(),n.uc(268," and lastly by the inline configuration of "),n.Rb(269,"code"),n.uc(270,"*axLazyElement"),n.Qb(),n.uc(271," directive. "),n.Qb(),n.Rb(272,"mat-card"),n.Rb(273,"table"),n.Rb(274,"thead"),n.Rb(275,"th"),n.uc(276,"Property"),n.Qb(),n.Rb(277,"th"),n.uc(278,"Description"),n.Qb(),n.Qb(),n.Rb(279,"tbody"),n.Rb(280,"tr"),n.Rb(281,"td"),n.Rb(282,"pre"),n.uc(283,"loadingComponent: Type<any>"),n.Qb(),n.Qb(),n.Rb(284,"td"),n.Rb(285,"p"),n.uc(286," Component class to be displayed during element loading (similar to "),n.Rb(287,"code"),n.uc(288,"loadingTemplate"),n.Qb(),n.uc(289," that can be specified inline in the template, eg "),n.Rb(290,"code"),n.uc(291,'*axLazyElement="url; loadingTemplate: loading;"'),n.Qb(),n.uc(292,") "),n.Qb(),n.Rb(293,"code",0),n.uc(294,"Optional"),n.Qb(),n.uc(295,"\xa0"),n.Rb(296,"code",0),n.uc(297,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(298,"tr"),n.Rb(299,"td"),n.Rb(300,"pre"),n.uc(301,"errorComponent: Type<any>"),n.Qb(),n.Qb(),n.Rb(302,"td"),n.Rb(303,"p"),n.uc(304," Component class to be displayed after element loading failed (similar to "),n.Rb(305,"code"),n.uc(306,"errorTemplate"),n.Qb(),n.uc(307," that can be specified inline in the template, eg "),n.Rb(308,"code"),n.uc(309,'*axLazyElement="url; errorTemplate: error;"'),n.Qb(),n.uc(310,") "),n.Qb(),n.Rb(311,"code",0),n.uc(312,"Optional"),n.Qb(),n.uc(313,"\xa0"),n.Rb(314,"code",0),n.uc(315,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(316,"tr"),n.Rb(317,"td"),n.Rb(318,"pre"),n.uc(319,"isModule: boolean"),n.Qb(),n.Qb(),n.Rb(320,"td"),n.Rb(321,"p"),n.uc(322," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),n.Rb(323,"code"),n.uc(324,"<script>"),n.Qb(),n.uc(325," tag which will get "),n.Rb(326,"code"),n.uc(327,'type="module"'),n.Qb(),n.uc(328," in case this flag was set to true. "),n.Qb(),n.Rb(329,"code",0),n.uc(330,"Optional"),n.Qb(),n.uc(331,"\xa0"),n.Rb(332,"code",0),n.uc(333,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(334,"tr"),n.Rb(335,"td"),n.Rb(336,"pre"),n.uc(337,"preload: boolean"),n.Qb(),n.Qb(),n.Rb(338,"td"),n.Rb(339,"p"),n.uc(340," Flag that specifies if the all the modules should be preloaded "),n.Qb(),n.Rb(341,"code",0),n.uc(342,"Optional"),n.Qb(),n.uc(343,"\xa0"),n.Rb(344,"code",0),n.uc(345,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(346,"tr"),n.Rb(347,"td"),n.Rb(348,"pre"),n.uc(349,"hooksConfig: HooksConfig"),n.Qb(),n.Qb(),n.Rb(350,"td"),n.Rb(351,"p"),n.uc(352," Global hooks configuration for all elements. Any loaded element will run hooks configured here unless some of them were overriden in "),n.Rb(353,"code"),n.uc(354,"ElementConfig"),n.Qb(),n.uc(355,". "),n.Qb(),n.Rb(356,"code",0),n.uc(357,"Optional"),n.Qb(),n.uc(358,"\xa0"),n.Rb(359,"code",0),n.uc(360,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(361,"section"),n.Rb(362,"h2"),n.uc(363,"LazyElementModuleOptions"),n.Qb(),n.Rb(364,"code",0),n.uc(365,"Interface"),n.Qb(),n.Mb(366,"br"),n.Rb(367,"p"),n.uc(368," Type of an option object that can be passed to static "),n.Rb(369,"code"),n.uc(370,"forFeature()"),n.Qb(),n.uc(371," method of "),n.Rb(372,"code"),n.uc(373,"LazyElementModule"),n.Qb(),n.uc(374,". "),n.Qb(),n.Rb(375,"mat-card"),n.Rb(376,"table"),n.Rb(377,"thead"),n.Rb(378,"th"),n.uc(379,"Property"),n.Qb(),n.Rb(380,"th"),n.uc(381,"Description"),n.Qb(),n.Qb(),n.Rb(382,"tbody"),n.Rb(383,"tr"),n.Rb(384,"td"),n.Rb(385,"pre"),n.uc(386,"elementConfigs: ElementConfig[]"),n.Qb(),n.Qb(),n.Rb(387,"td"),n.Rb(388,"p"),n.uc(389," Optional array of "),n.Rb(390,"code"),n.uc(391,"ElementConfig"),n.Qb(),n.uc(392,"... "),n.Mb(393,"br"),n.Rb(394,"code",0),n.uc(395,"Optional"),n.Qb(),n.uc(396,"\xa0"),n.Rb(397,"code",0),n.uc(398,"Default: []"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(399,"section"),n.Rb(400,"h2"),n.uc(401,"ElementConfig"),n.Qb(),n.Rb(402,"code",0),n.uc(403,"Interface"),n.Qb(),n.Mb(404,"br"),n.Rb(405,"p"),n.uc(406," The element config used to pre-configure "),n.Rb(407,"code"),n.uc(408,"LazyElementModule"),n.Qb(),n.uc(409," so that we do not have to specify url (and other supported options) inline inside of the "),n.Rb(410,"code"),n.uc(411,"*axLazyElement"),n.Qb(),n.uc(412," and "),n.Rb(413,"code"),n.uc(414,"*axLazyElementDynamic"),n.Qb(),n.uc(415," directives. The configs are matched to particular elements by the tag. The elements are still loaded lazily even though they are preconfigured in the module during application startup... "),n.Qb(),n.Rb(416,"mat-card"),n.Rb(417,"table"),n.Rb(418,"thead"),n.Rb(419,"th"),n.uc(420,"Property"),n.Qb(),n.Rb(421,"th"),n.uc(422,"Description"),n.Qb(),n.Qb(),n.Rb(423,"tbody"),n.Rb(424,"tr"),n.Rb(425,"td"),n.Rb(426,"pre"),n.uc(427,"tag: string"),n.Qb(),n.Qb(),n.Rb(428,"td"),n.Rb(429,"p"),n.uc(430,"Tag of an element (eg: "),n.Rb(431,"code"),n.uc(432,"some-element"),n.Qb(),n.uc(433,")"),n.Qb(),n.Qb(),n.Qb(),n.Rb(434,"tr"),n.Rb(435,"td"),n.Rb(436,"pre"),n.uc(437,"url: string"),n.Qb(),n.Qb(),n.Rb(438,"td"),n.Rb(439,"p"),n.uc(440," The url of an element bundle or ES module (eg: "),n.Rb(441,"code"),n.uc(442,"https://my-org.com/elements/some-element.js"),n.Qb(),n.uc(443,") "),n.Qb(),n.Qb(),n.Qb(),n.Rb(444,"tr"),n.Rb(445,"td"),n.Rb(446,"pre"),n.uc(447,"isModule: boolean"),n.Qb(),n.Qb(),n.Rb(448,"td"),n.Rb(449,"p"),n.uc(450," Flag that specifies if the element is loaded as bundle (default) or as module. This will influence the generated "),n.Rb(451,"code"),n.uc(452,"<script>"),n.Qb(),n.uc(453," tag which will get "),n.Rb(454,"code"),n.uc(455,'type="module"'),n.Qb(),n.uc(456," in case this flag was set to true. "),n.Qb(),n.Rb(457,"code",0),n.uc(458,"Optional"),n.Qb(),n.uc(459,"\xa0"),n.Rb(460,"code",0),n.uc(461,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(462,"tr"),n.Rb(463,"td"),n.Rb(464,"pre"),n.uc(465,"loadingComponent: Type<any>"),n.Qb(),n.Qb(),n.Rb(466,"td"),n.Rb(467,"p"),n.uc(468," Component class to be displayed during element loading (similar to "),n.Rb(469,"code"),n.uc(470,"loadingTemplate"),n.Qb(),n.uc(471," that can be specified inline in the template, eg "),n.Rb(472,"code"),n.uc(473,'*axLazyElement="url; loadingTemplate: loading;"'),n.Qb(),n.uc(474,") "),n.Qb(),n.Rb(475,"code",0),n.uc(476,"Optional"),n.Qb(),n.uc(477,"\xa0"),n.Rb(478,"code",0),n.uc(479,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(480,"tr"),n.Rb(481,"td"),n.Rb(482,"pre"),n.uc(483,"errorComponent: Type<any>"),n.Qb(),n.Qb(),n.Rb(484,"td"),n.Rb(485,"p"),n.uc(486," Component class to be displayed after element loading failed (similar to "),n.Rb(487,"code"),n.uc(488,"errorTemplate"),n.Qb(),n.uc(489," that can be specified inline in the template, eg "),n.Rb(490,"code"),n.uc(491,'*axLazyElement="url; errorTemplate: error;"'),n.Qb(),n.uc(492,") "),n.Qb(),n.Rb(493,"code",0),n.uc(494,"Optional"),n.Qb(),n.uc(495,"\xa0"),n.Rb(496,"code",0),n.uc(497,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(498,"tr"),n.Rb(499,"td"),n.Rb(500,"pre"),n.uc(501,"preload: boolean"),n.Qb(),n.Qb(),n.Rb(502,"td"),n.Rb(503,"p"),n.uc(504," Flag that specifies if the element is preloaded. "),n.Qb(),n.Rb(505,"code",0),n.uc(506,"Optional"),n.Qb(),n.uc(507,"\xa0"),n.Rb(508,"code",0),n.uc(509,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(510,"tr"),n.Rb(511,"td"),n.Rb(512,"pre"),n.uc(513,"hooks: HooksConfig"),n.Qb(),n.Qb(),n.Rb(514,"td"),n.Rb(515,"p"),n.uc(516," Hooks configuration for the element. Any hook specified here will overwrite corresponding root hook for the element. See "),n.Rb(517,"code"),n.uc(518,"HooksConfig"),n.Qb(),n.uc(519,". "),n.Qb(),n.Rb(520,"code",0),n.uc(521,"Optional"),n.Qb(),n.uc(522,"\xa0"),n.Rb(523,"code",0),n.uc(524,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb();n.Qb(),n.Rb(525,"section"),n.Rb(526,"h2"),n.uc(527,"HooksConfig"),n.Qb(),n.Rb(528,"code",0),n.uc(529,"Interface"),n.Qb(),n.Mb(530,"br"),n.Rb(531,"p"),n.uc(532," Hooks for running custom logic as part of the element's lifecycle. See "),n.Rb(533,"code"),n.uc(534,"ElementConfig"),n.Qb(),n.uc(535," and "),n.Rb(536,"code"),n.uc(537,"LazyElementRootOptions"),n.Qb(),n.uc(538,". "),n.Qb(),n.Rb(539,"mat-card"),n.Rb(540,"table"),n.Rb(541,"thead"),n.Rb(542,"th"),n.uc(543,"Property"),n.Qb(),n.Rb(544,"th"),n.uc(545,"Description"),n.Qb(),n.Qb(),n.Rb(546,"tbody"),n.Rb(547,"tr"),n.Rb(548,"td"),n.Rb(549,"pre"),n.uc(550,"beforeLoad: Hook"),n.Qb(),n.Qb(),n.Rb(551,"td"),n.Rb(552,"p"),n.uc(553," This hook will run before the browser starts the element's download. If the provided hook returns a "),n.Rb(554,"code"),n.uc(555,"Promise"),n.Qb(),n.uc(556," the element's download will be postponed until the Promise is resolved. "),n.Qb(),n.Rb(557,"code",0),n.uc(558,"Optional"),n.Qb(),n.uc(559,"\xa0"),n.Rb(560,"code",0),n.uc(561,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Rb(562,"tr"),n.Rb(563,"td"),n.Rb(564,"pre"),n.uc(565,"afterLoad: Hook"),n.Qb(),n.Qb(),n.Rb(566,"td"),n.Rb(567,"p"),n.uc(568," This hook will run after the element's download has been completed. If the provided hook returns a "),n.Rb(569,"code"),n.uc(570,"Promise"),n.Qb(),n.uc(571," the element's insertion into the corresponding Angular's view will be postponed until the Promise is resolved. "),n.Qb(),n.Rb(572,"code",0),n.uc(573,"Optional"),n.Qb(),n.uc(574,"\xa0"),n.Rb(575,"code",0),n.uc(576,"Default: undefined"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(577,"section"),n.Rb(578,"h2"),n.uc(579,"Hook"),n.Qb(),n.Rb(580,"code",0),n.uc(581,"Type"),n.Qb(),n.Mb(582,"br"),n.Rb(583,"p"),n.uc(584,"Hook that can be run as part of "),n.Rb(585,"code"),n.uc(586,"HooksConfig"),n.Qb(),n.uc(587,"."),n.Qb(),n.Rb(588,"mat-card"),n.Rb(589,"table"),n.Rb(590,"thead"),n.Rb(591,"th"),n.uc(592,"Value"),n.Qb(),n.Rb(593,"th"),n.uc(594,"Description"),n.Qb(),n.Qb(),n.Rb(595,"tbody"),n.Rb(596,"tr"),n.Rb(597,"td"),n.Rb(598,"pre"),n.uc(599,"(tag: string) => Promise<void> \u2758 <void>"),n.Qb(),n.Qb(),n.Rb(600,"td"),n.Rb(601,"p"),n.uc(602," Provided function will be called at the appropriate time in the element's lifecycle. If the function returns a "),n.Rb(603,"code"),n.uc(604,"Promise"),n.Qb(),n.uc(605," the library will wait for its' resolution before proceeding. "),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(606,"section"),n.Rb(607,"h2"),n.uc(608,"LazyElementsLoaderService"),n.Qb(),n.Rb(609,"code",0),n.uc(610,"Service"),n.Qb(),n.Mb(611,"br"),n.Rb(612,"p"),n.uc(613," A service used for loading the Angular element (or any other webcomponent) "),n.Qb(),n.Rb(614,"mat-card"),n.Rb(615,"table"),n.Rb(616,"thead"),n.Rb(617,"th"),n.uc(618,"Method"),n.Qb(),n.Rb(619,"th"),n.uc(620,"Description"),n.Qb(),n.Qb(),n.Rb(621,"tbody"),n.Rb(622,"tr"),n.Rb(623,"td"),n.Rb(624,"pre"),n.uc(625,"preload(tags? : string[]): void"),n.Qb(),n.Qb(),n.Rb(626,"td"),n.Rb(627,"p"),n.uc(628," Preloads the specified tags which are preconfigured using "),n.Rb(629,"code"),n.uc(630,"forRoot"),n.Qb(),n.uc(631," and "),n.Rb(632,"code"),n.uc(633,"forFeature"),n.Qb(),n.uc(634,". If "),n.Rb(635,"code"),n.uc(636,"tags"),n.Qb(),n.uc(637," is "),n.Rb(638,"code"),n.uc(639,"undefined|null"),n.Qb(),n.uc(640," preload all the configured tags. "),n.Mb(641,"br"),n.uc(642," Parameters: "),n.Mb(643,"br"),n.uc(644," tags "),n.Rb(645,"code",0),n.uc(646,"Optional"),n.Qb(),n.uc(647,"\xa0"),n.Rb(648,"code",0),n.uc(649,"Default: undefined"),n.Qb(),n.Mb(650,"br"),n.uc(651," returns: "),n.Rb(652,"code",0),n.uc(653,"void"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(654,"section"),n.Rb(655,"h2"),n.uc(656,"LAZY_ELEMENTS_REGISTRY"),n.Qb(),n.Rb(657,"code",0),n.uc(658,"Token"),n.Qb(),n.Mb(659,"br"),n.Rb(660,"p"),n.uc(661," A token used to override default lazy elements registry which is used to prevent multiple downloads of the same element Javascript bundle... "),n.Qb(),n.Rb(662,"mat-card"),n.Rb(663,"table"),n.Rb(664,"thead"),n.Rb(665,"th"),n.uc(666,"Value"),n.Qb(),n.Rb(667,"th"),n.uc(668,"Description"),n.Qb(),n.Qb(),n.Rb(669,"tbody"),n.Rb(670,"tr"),n.Rb(671,"td"),n.Rb(672,"pre"),n.uc(673,"{\n  provide: LAZY_ELEMENTS_REGISTRY,\n  useClass: YourRegistryImplementation\n}"),n.Qb(),n.Qb(),n.Rb(674,"td"),n.Rb(675,"p"),n.uc(676," Overrides default lazy elements registry implementation which can be useful when using library in the multiple apps (or elements) on a single page to prevent multiple downloads of the same element Javascript bundle. The new implementation has to implement "),n.Rb(677,"code"),n.uc(678,"LazyElementsRegistry"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(679,"section"),n.Rb(680,"h2"),n.uc(681,"LazyElementsRegistry"),n.Qb(),n.Rb(682,"code",0),n.uc(683,"Interface"),n.Qb(),n.Mb(684,"br"),n.Rb(685,"p"),n.uc(686," An interface which has to be implemented by custom lazy elements registry. The default lazy element registry used by the library out of the box is "),n.Rb(687,"code"),n.uc(688,"Map<string, Promise<void>"),n.Qb(),n.Qb(),n.Rb(689,"mat-card"),n.Rb(690,"table"),n.Rb(691,"thead"),n.Rb(692,"th"),n.uc(693,"Property"),n.Qb(),n.Rb(694,"th"),n.uc(695,"Description"),n.Qb(),n.Qb(),n.Rb(696,"tbody"),n.Rb(697,"tr"),n.Rb(698,"td"),n.Rb(699,"pre"),n.uc(700,"get: (url: string) => Promise<void>"),n.Qb(),n.Qb(),n.Rb(701,"td"),n.Rb(702,"p"),n.uc(703," Retrieve loading state ("),n.Rb(704,"code"),n.uc(705,"Promise"),n.Qb(),n.uc(706,") of an element bundle identified by the "),n.Rb(707,"code"),n.uc(708,"url"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(709,"tr"),n.Rb(710,"td"),n.Rb(711,"pre"),n.uc(712,"set: (url: string, notifier: Promise<void>) => void"),n.Qb(),n.Qb(),n.Rb(713,"td"),n.Rb(714,"p"),n.uc(715," Store loading state ("),n.Rb(716,"code"),n.uc(717,"Promise"),n.Qb(),n.uc(718,") of an element bundle identified by the "),n.Rb(719,"code"),n.uc(720,"url"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(721,"tr"),n.Rb(722,"td"),n.Rb(723,"pre"),n.uc(724,"has: (url: string) => boolean"),n.Qb(),n.Qb(),n.Rb(725,"td"),n.Rb(726,"p"),n.uc(727," Check if registry already contains loading state ("),n.Rb(728,"code"),n.uc(729,"Promise"),n.Qb(),n.uc(730,") of an element bundle identified by the "),n.Rb(731,"code"),n.uc(732,"url"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(733,"section"),n.Rb(734,"h2"),n.uc(735,"LazyElementTestingModule"),n.Qb(),n.Rb(736,"code",0),n.uc(737,"Module"),n.Qb(),n.Rb(738,"code"),n.uc(739,"@angular-extensions/elements/testing"),n.Qb(),n.Mb(740,"br"),n.Rb(741,"p"),n.uc(742," The testing module is used in Angular unit-tests to help mock lazy-loaded elements with mock components provided by the test. Check out how to use it in the "),n.Rb(743,"a",1),n.uc(744,"testing example"),n.Qb(),n.uc(745,". "),n.Qb(),n.Rb(746,"mat-card"),n.Rb(747,"table"),n.Rb(748,"thead"),n.Rb(749,"th"),n.uc(750,"Declarable"),n.Qb(),n.Rb(751,"th"),n.uc(752,"Description"),n.Qb(),n.Qb(),n.Rb(753,"tbody"),n.Rb(754,"tr"),n.Rb(755,"td"),n.Rb(756,"pre"),n.uc(757,"LazyElementTestingDirective "),n.Rb(758,"code"),n.uc(759,"*axLazyElement"),n.Qb(),n.Qb(),n.Qb(),n.Rb(760,"td"),n.Rb(761,"p"),n.uc(762," Overrides default behavior of "),n.Rb(763,"code"),n.uc(764,"*axLazyElement"),n.Qb(),n.uc(765," by displaying element immediately without trying to lazy load it, display loading or error... "),n.Qb(),n.Qb(),n.Qb(),n.Rb(766,"tr"),n.Rb(767,"td"),n.Rb(768,"pre"),n.uc(769,"LazyElementDynamicTestingDirective "),n.Rb(770,"code"),n.uc(771,"*axLazyElementDynamic"),n.Qb(),n.Qb(),n.Qb(),n.Rb(772,"td"),n.Rb(773,"p"),n.uc(774," Overrides default behavior of "),n.Rb(775,"code"),n.uc(776,"*axLazyElementDynamic"),n.Qb(),n.uc(777," by displaying element immediately without trying to lazy load it, display loading or error... "),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()}},directives:[u.a,c.c],styles:["h2[_ngcontent-%COMP%]{display:inline-block;font-weight:700;margin:0 10px 10px 0}mat-card[_ngcontent-%COMP%]{padding:0;margin-bottom:80px;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:15px 20px}table[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{opacity:.8}"]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(b){return new(b||e)},imports:[[c.d.forChild(a)],c.d]}),e})(),i=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(b){return new(b||e)},imports:[[o.a,d]]}),e})()}}]);