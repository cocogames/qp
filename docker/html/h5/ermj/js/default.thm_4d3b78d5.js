
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/pages/ERMJ/alert/ERMJXYButtonSkin.exml'] = window.ERMJXYButtonSkin = (function (_super) {
	__extends(ERMJXYButtonSkin, _super);
	function ERMJXYButtonSkin() {
		_super.call(this);
		this.skinParts = ["bg","tf"];
		
		this.height = 66;
		this.width = 166;
		this.elementsContent = [this.bg_i(),this.tf_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelSize"],[0],this.tf,"size");
		eui.Binding.$bindProperties(this, ["hostComponent.a_label"],[0],this.tf,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelColor"],[0],this.tf,"textColor");
	}
	var _proto = ERMJXYButtonSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,126,28);
		t.source = "ERMJ_btn_tb2_png";
		t.top = 0;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return ERMJXYButtonSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/alert/ERMJAlertSkin.exml'] = window.ERMJAlertSkin = (function (_super) {
	__extends(ERMJAlertSkin, _super);
	function ERMJAlertSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","tf","okBtn","cancelBtn","btnGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = ERMJAlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ERMJ_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 416;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 660;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.closeBtn_i(),this.tf_i(),this.btnGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(94,88,567,76);
		t.source = "ERMJ_bg_history_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "ERMJ_title_prompt_png";
		t.x = 277;
		t.y = 8;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 27;
		t.source = "ERMJ_btn_guanbi_png";
		t.visible = false;
		t.x = 627;
		t.y = 36;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 193;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 418;
		t.x = 120;
		t.y = 86;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.horizontalCenter = 0;
		t.y = 303;
		t.elementsContent = [this.okBtn_i(),this.cancelBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new ERMJ.XYButton();
		this.okBtn = t;
		t.a_label = "确认";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.height = 69;
		t.skinName = "ERMJXYButtonSkin";
		t.width = 166;
		t.x = 248;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new ERMJ.XYButton();
		this.cancelBtn = t;
		t.a_label = "取消";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.height = 69;
		t.skinName = "ERMJXYButtonSkin";
		t.width = 166;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ERMJAlertSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_handSkin.exml'] = window.ERMJ_handSkin = (function (_super) {
	__extends(ERMJ_handSkin, _super);
	function ERMJ_handSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 113;
		this.width = 81;
		this.elementsContent = [this._Image1_i(),this.bg_i(),this.pai_i()];
	}
	var _proto = ERMJ_handSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.left = 0;
		t.right = 0;
		t.source = "ERMJ_alpha_mask_png";
		t.width = 81;
		t.y = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "ERMJ_C3_png";
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.source = "ERMJ_card_21_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	return ERMJ_handSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_ChiChoosePanelSkin.exml'] = window.ERMJ_ChiChoosePanelSkin = (function (_super) {
	__extends(ERMJ_ChiChoosePanelSkin, _super);
	function ERMJ_ChiChoosePanelSkin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","light0","grp0","card3","card4","card5","light1","grp1","card6","card7","card8","light2","grp2"];
		
		this.height = 180;
		this.width = 580;
		this.elementsContent = [this._Image1_i(),this.grp0_i(),this.grp1_i(),this.grp2_i()];
	}
	var _proto = ERMJ_ChiChoosePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(33,47,22,144);
		t.source = "ERMJ_bg_hupai_png";
		t.top = 0;
		return t;
	};
	_proto.grp0_i = function () {
		var t = new eui.Group();
		this.grp0 = t;
		t.x = 31;
		t.y = 48;
		t.elementsContent = [this._Image2_i(),this.card0_i(),this.card1_i(),this.card2_i(),this.light0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 91;
		t.scale9Grid = new egret.Rectangle(14,15,12,107);
		t.source = "ERMJ_bg_hupai2_png";
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 11.8;
		t.y = 18.2;
		return t;
	};
	_proto.card1_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 64.8;
		t.y = 18.2;
		return t;
	};
	_proto.card2_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 116.8;
		t.y = 18.2;
		return t;
	};
	_proto.light0_i = function () {
		var t = new eui.Image();
		this.light0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "ERMJ_light_png";
		t.width = 40;
		t.x = 65;
		t.y = 18.4;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.x = 204;
		t.y = 48;
		t.elementsContent = [this._Image3_i(),this.card3_i(),this.card4_i(),this.card5_i(),this.light1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 91;
		t.scale9Grid = new egret.Rectangle(14,15,12,107);
		t.source = "ERMJ_bg_hupai2_png";
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card3_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 11.8;
		t.y = 18.2;
		return t;
	};
	_proto.card4_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 64.8;
		t.y = 18.2;
		return t;
	};
	_proto.card5_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 116.8;
		t.y = 18.2;
		return t;
	};
	_proto.light1_i = function () {
		var t = new eui.Image();
		this.light1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "ERMJ_light_png";
		t.width = 40;
		t.x = 65;
		t.y = 18.4;
		return t;
	};
	_proto.grp2_i = function () {
		var t = new eui.Group();
		this.grp2 = t;
		t.x = 376;
		t.y = 48;
		t.elementsContent = [this._Image4_i(),this.card6_i(),this.card7_i(),this.card8_i(),this.light2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 91;
		t.scale9Grid = new egret.Rectangle(14,15,12,107);
		t.source = "ERMJ_bg_hupai2_png";
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card6_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card6 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 11.8;
		t.y = 18.2;
		return t;
	};
	_proto.card7_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card7 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 64.8;
		t.y = 18.2;
		return t;
	};
	_proto.card8_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card8 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 116.8;
		t.y = 18.2;
		return t;
	};
	_proto.light2_i = function () {
		var t = new eui.Image();
		this.light2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "ERMJ_light_png";
		t.width = 40;
		t.x = 65;
		t.y = 18;
		return t;
	};
	return ERMJ_ChiChoosePanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_ControllPanelSkin.exml'] = window.ERMJ_ControllPanelSkin = (function (_super) {
	__extends(ERMJ_ControllPanelSkin, _super);
	function ERMJ_ControllPanelSkin() {
		_super.call(this);
		this.skinParts = ["chi","peng","gang","ting","hu","pass"];
		
		this.height = 260;
		this.width = 1271;
		this.elementsContent = [this.chi_i(),this.peng_i(),this.gang_i(),this.ting_i(),this.hu_i(),this.pass_i()];
	}
	var _proto = ERMJ_ControllPanelSkin.prototype;

	_proto.chi_i = function () {
		var t = new eui.Image();
		this.chi = t;
		t.anchorOffsetX = 98;
		t.anchorOffsetY = 74;
		t.source = "ERMJ_btn_chi_png";
		t.width = 197;
		t.x = 340;
		t.y = 129;
		return t;
	};
	_proto.peng_i = function () {
		var t = new eui.Image();
		this.peng = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 76;
		t.source = "ERMJ_btn_peng_png";
		t.width = 197;
		t.x = 553;
		t.y = 131;
		return t;
	};
	_proto.gang_i = function () {
		var t = new eui.Image();
		this.gang = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 75;
		t.source = "ERMJ_btn_gang_png";
		t.width = 197;
		t.x = 762;
		t.y = 130;
		return t;
	};
	_proto.ting_i = function () {
		var t = new eui.Image();
		this.ting = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 75;
		t.source = "ERMJ_btn_ting_png";
		t.width = 197;
		t.x = 983.91;
		t.y = 130;
		return t;
	};
	_proto.hu_i = function () {
		var t = new eui.Image();
		this.hu = t;
		t.anchorOffsetX = 99.91;
		t.anchorOffsetY = 78.61;
		t.source = "ERMJ_btn_hu_png";
		t.width = 197;
		t.x = 123.91;
		t.y = 133.61;
		return t;
	};
	_proto.pass_i = function () {
		var t = new eui.Image();
		this.pass = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 57;
		t.source = "ERMJ_btn_guo_png";
		t.x = 1151.91;
		t.y = 134;
		return t;
	};
	return ERMJ_ControllPanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_GameTimerSkin.exml'] = window.ERMJ_GameTimerSkin = (function (_super) {
	__extends(ERMJ_GameTimerSkin, _super);
	function ERMJ_GameTimerSkin() {
		_super.call(this);
		this.skinParts = ["light_1","light_3","dir_1","dir_0","dir_2","dir_3","timeTf","gif","point_0","point_1","difenTf"];
		
		this.height = 157;
		this.width = 186;
		this.elementsContent = [this._Image1_i(),this.light_1_i(),this.light_3_i(),this.dir_1_i(),this.dir_0_i(),this.dir_2_i(),this.dir_3_i(),this.timeTf_i(),this.gif_i(),this.point_0_i(),this.point_1_i(),this._Image2_i(),this.difenTf_i()];
	}
	var _proto = ERMJ_GameTimerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ERMJ_bt_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.light_1_i = function () {
		var t = new eui.Image();
		this.light_1 = t;
		t.source = "ERMJ_light_bottom_png";
		t.x = 9;
		t.y = 61.69;
		return t;
	};
	_proto.light_3_i = function () {
		var t = new eui.Image();
		this.light_3 = t;
		t.source = "ERMJ_light_top_png";
		t.x = 25.36;
		t.y = 1.5;
		return t;
	};
	_proto.dir_1_i = function () {
		var t = new eui.Image();
		this.dir_1 = t;
		t.source = "ERMJ_east_light_png";
		t.x = 79.16;
		t.y = 66.01;
		return t;
	};
	_proto.dir_0_i = function () {
		var t = new eui.Image();
		this.dir_0 = t;
		t.rotation = -90;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_north_light_png";
		t.x = 30.64;
		t.y = 58.37;
		return t;
	};
	_proto.dir_2_i = function () {
		var t = new eui.Image();
		this.dir_2 = t;
		t.rotation = 90;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_south_light_png";
		t.x = 160.37;
		t.y = 32.63;
		return t;
	};
	_proto.dir_3_i = function () {
		var t = new eui.Image();
		this.dir_3 = t;
		t.scaleX = 0.7;
		t.scaleY = -0.7;
		t.source = "ERMJ_west_light_png";
		t.x = 84.34;
		t.y = 24;
		return t;
	};
	_proto.timeTf_i = function () {
		var t = new eui.BitmapLabel();
		this.timeTf = t;
		t.font = "ERMJ_time_fnt";
		t.horizontalCenter = 0;
		t.text = "99";
		t.y = 33.34;
		return t;
	};
	_proto.gif_i = function () {
		var t = new eui.Image();
		this.gif = t;
		t.source = "ERMJ_sezi_0_png";
		t.x = 45.21;
		t.y = 11.51;
		return t;
	};
	_proto.point_0_i = function () {
		var t = new eui.Image();
		this.point_0 = t;
		t.source = "ERMJ_sezi_value1_png";
		t.x = 57.49;
		t.y = 28.86;
		return t;
	};
	_proto.point_1_i = function () {
		var t = new eui.Image();
		this.point_1 = t;
		t.source = "ERMJ_sezi_value2_png";
		t.x = 100.86;
		t.y = 26.18;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(18,5,36,31);
		t.source = "ERMJ_sheng_bg_png";
		t.width = 179;
		t.x = 4;
		t.y = 112.04;
		return t;
	};
	_proto.difenTf_i = function () {
		var t = new eui.Label();
		this.difenTf = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "底分：110.01";
		t.y = 121.99;
		return t;
	};
	return ERMJ_GameTimerSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_GangChoosePanelSkin.exml'] = window.ERMJ_GangChoosePanelSkin = (function (_super) {
	__extends(ERMJ_GangChoosePanelSkin, _super);
	function ERMJ_GangChoosePanelSkin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","grp0","card4","card5","card6","card7","grp1","card8","card9","card10","card11","grp2"];
		
		this.height = 194;
		this.width = 839;
		this.elementsContent = [this._Image1_i(),this.grp0_i(),this.grp1_i(),this.grp2_i()];
	}
	var _proto = ERMJ_GangChoosePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(33,47,22,144);
		t.source = "ERMJ_bg_hupai_png";
		t.top = 0;
		return t;
	};
	_proto.grp0_i = function () {
		var t = new eui.Group();
		this.grp0 = t;
		t.x = 45;
		t.y = 50;
		t.elementsContent = [this._Image2_i(),this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.scale9Grid = new egret.Rectangle(14,26,12,90);
		t.source = "ERMJ_bg_hupai2_png";
		t.width = 231;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 13;
		t.y = 24;
		return t;
	};
	_proto.card1_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 69;
		t.y = 24;
		return t;
	};
	_proto.card2_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto.card3_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 180;
		t.y = 24;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.x = 302;
		t.y = 50;
		t.elementsContent = [this._Image3_i(),this.card4_i(),this.card5_i(),this.card6_i(),this.card7_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.scale9Grid = new egret.Rectangle(14,26,12,90);
		t.source = "ERMJ_bg_hupai2_png";
		t.width = 231;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card4_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 13;
		t.y = 24;
		return t;
	};
	_proto.card5_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 69;
		t.y = 24;
		return t;
	};
	_proto.card6_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card6 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto.card7_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card7 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 180;
		t.y = 24;
		return t;
	};
	_proto.grp2_i = function () {
		var t = new eui.Group();
		this.grp2 = t;
		t.x = 558;
		t.y = 50;
		t.elementsContent = [this._Image4_i(),this.card8_i(),this.card9_i(),this.card10_i(),this.card11_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 101;
		t.scale9Grid = new egret.Rectangle(14,26,12,90);
		t.source = "ERMJ_bg_hupai2_png";
		t.width = 231;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card8_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card8 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 13;
		t.y = 24;
		return t;
	};
	_proto.card9_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card9 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 69;
		t.y = 24;
		return t;
	};
	_proto.card10_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card10 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto.card11_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card11 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 179;
		t.y = 24;
		return t;
	};
	return ERMJ_GangChoosePanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_HeadSkin.exml'] = window.ERMJ_HeadSkin = (function (_super) {
	__extends(ERMJ_HeadSkin, _super);
	function ERMJ_HeadSkin() {
		_super.call(this);
		this.skinParts = ["headImg"];
		
		this.height = 70;
		this.width = 70;
		this.elementsContent = [this.headImg_i()];
	}
	var _proto = ERMJ_HeadSkin.prototype;

	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ERMJ_head_png";
		t.top = 0;
		return t;
	};
	return ERMJ_HeadSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_HuItemSkin.exml'] = window.ERMJ_HuItemSkin = (function (_super) {
	__extends(ERMJ_HuItemSkin, _super);
	function ERMJ_HuItemSkin() {
		_super.call(this);
		this.skinParts = ["card","tf"];
		
		this.height = 80;
		this.width = 129;
		this.elementsContent = [this._Image1_i(),this.card_i(),this.tf_i()];
	}
	var _proto = ERMJ_HuItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(14,26,12,90);
		t.source = "ERMJ_bg_hupai2_png";
		t.top = 0;
		return t;
	};
	_proto.card_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.card = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "ERMJ_handSkin";
		t.x = 6;
		t.y = 8;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 10;
		t.size = 22;
		t.text = "999张2倍";
		t.textAlign = "left";
		t.textColor = 0x7e583c;
		t.x = 54;
		t.y = 12;
		return t;
	};
	return ERMJ_HuItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_HuPanelSkin.exml'] = window.ERMJ_HuPanelSkin = (function (_super) {
	__extends(ERMJ_HuPanelSkin, _super);
	function ERMJ_HuPanelSkin() {
		_super.call(this);
		this.skinParts = ["huImg","allHuImg","tf"];
		
		this.height = 300;
		this.width = 800;
		this.elementsContent = [this._Image1_i(),this.huImg_i(),this.allHuImg_i(),this.tf_i()];
	}
	var _proto = ERMJ_HuPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(34,32,22,198);
		t.source = "ERMJ_bg_hupai_png";
		t.top = 0;
		return t;
	};
	_proto.huImg_i = function () {
		var t = new eui.Image();
		this.huImg = t;
		t.source = "ERMJ_img_hu2_png";
		t.x = 35;
		t.y = 35;
		return t;
	};
	_proto.allHuImg_i = function () {
		var t = new eui.Image();
		this.allHuImg = t;
		t.horizontalCenter = 0;
		t.source = "ERMJ_img_jzh_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 20;
		t.size = 26;
		t.text = "(共2张)";
		t.textAlign = "center";
		t.textColor = 0x7E583C;
		t.x = 22;
		t.y = 99;
		return t;
	};
	return ERMJ_HuPanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_PlayerHeadSkin.exml'] = window.ERMJ_PlayerHeadSkin = (function (_super) {
	__extends(ERMJ_PlayerHeadSkin, _super);
	function ERMJ_PlayerHeadSkin() {
		_super.call(this);
		this.skinParts = ["bg","head","nickTf","coinTf","dealer"];
		
		this.height = 182;
		this.width = 136;
		this.elementsContent = [this.bg_i(),this.head_i(),this.nickTf_i(),this.coinTf_i(),this.dealer_i()];
	}
	var _proto = ERMJ_PlayerHeadSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 163;
		t.source = "ERMJ_face_bg_png";
		t.width = 117;
		t.x = 0;
		t.y = 19;
		return t;
	};
	_proto.head_i = function () {
		var t = new ERMJ.ERMJ_Head();
		this.head = t;
		t.height = 100;
		t.skinName = "ERMJ_HeadSkin";
		t.width = 100;
		t.x = 9;
		t.y = 27.4;
		return t;
	};
	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.horizontalCenter = -9.5;
		t.size = 19;
		t.text = "12345678901111";
		t.y = 130;
		return t;
	};
	_proto.coinTf_i = function () {
		var t = new eui.Label();
		this.coinTf = t;
		t.size = 18;
		t.text = "1234567";
		t.textColor = 0xb0b302;
		t.x = 28;
		t.y = 154;
		return t;
	};
	_proto.dealer_i = function () {
		var t = new eui.Image();
		this.dealer = t;
		t.source = "ERMJ_banker_png";
		t.x = 79;
		t.y = 0;
		return t;
	};
	return ERMJ_PlayerHeadSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/componet/ERMJ_ReadySkin.exml'] = window.ERMJ_ReadySkin = (function (_super) {
	__extends(ERMJ_ReadySkin, _super);
	function ERMJ_ReadySkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = ERMJ_ReadySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ERMJ_game_ok_png";
		return t;
	};
	return ERMJ_ReadySkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_hua_3Skin.exml'] = window.ERMJ_hua_3Skin = (function (_super) {
	__extends(ERMJ_hua_3Skin, _super);
	function ERMJ_hua_3Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 55;
		this.width = 55;
		this.elementsContent = [this.bg_i(),this.pai_i()];
	}
	var _proto = ERMJ_hua_3Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "ERMJ_hu_3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.3;
		t.scaleY = -0.3;
		t.skewX = 10;
		t.source = "ERMJ_card_1_png";
		t.x = 24.5;
		t.y = 21;
		return t;
	};
	return ERMJ_hua_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Huapai_3Skin.exml'] = window.ERMJ_Huapai_3Skin = (function (_super) {
	__extends(ERMJ_Huapai_3Skin, _super);
	function ERMJ_Huapai_3Skin() {
		_super.call(this);
		this.skinParts = ["hua_4","hua_3","hua_2","hua_1","hua_0","hua_9","hua_8","hua_7","hua_6","hua_5"];
		
		this.height = 85;
		this.width = 187;
		this.elementsContent = [this.hua_4_i(),this.hua_3_i(),this.hua_2_i(),this.hua_1_i(),this.hua_0_i(),this.hua_9_i(),this.hua_8_i(),this.hua_7_i(),this.hua_6_i(),this.hua_5_i()];
	}
	var _proto = ERMJ_Huapai_3Skin.prototype;

	_proto.hua_4_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_4 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 7;
		t.y = 0;
		return t;
	};
	_proto.hua_3_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_3 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 39;
		t.y = 0;
		return t;
	};
	_proto.hua_2_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_2 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.hua_1_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_1 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 101;
		t.y = 0;
		return t;
	};
	_proto.hua_0_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_0 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 132;
		t.y = 0;
		return t;
	};
	_proto.hua_9_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_9 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.hua_8_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_8 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 32;
		t.y = 30;
		return t;
	};
	_proto.hua_7_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_7 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 63;
		t.y = 30;
		return t;
	};
	_proto.hua_6_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_6 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 94;
		t.y = 30;
		return t;
	};
	_proto.hua_5_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_5 = t;
		t.skinName = "ERMJ_hua_3Skin";
		t.x = 125;
		t.y = 30;
		return t;
	};
	return ERMJ_Huapai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_hua_1Skin.exml'] = window.ERMJ_hua_1Skin = (function (_super) {
	__extends(ERMJ_hua_1Skin, _super);
	function ERMJ_hua_1Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 80;
		this.width = 70;
		this.elementsContent = [this.bg_i(),this.pai_i()];
	}
	var _proto = ERMJ_hua_1Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "ERMJ_hu_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = -10;
		t.source = "ERMJ_card_1_png";
		t.x = 36;
		t.y = 28;
		return t;
	};
	return ERMJ_hua_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Huapai_1Skin.exml'] = window.ERMJ_Huapai_1Skin = (function (_super) {
	__extends(ERMJ_Huapai_1Skin, _super);
	function ERMJ_Huapai_1Skin() {
		_super.call(this);
		this.skinParts = ["hua_9","hua_8","hua_7","hua_6","hua_5","hua_4","hua_3","hua_2","hua_1","hua_0"];
		
		this.height = 137;
		this.width = 268;
		this.elementsContent = [this.hua_9_i(),this.hua_8_i(),this.hua_7_i(),this.hua_6_i(),this.hua_5_i(),this.hua_4_i(),this.hua_3_i(),this.hua_2_i(),this.hua_1_i(),this.hua_0_i()];
	}
	var _proto = ERMJ_Huapai_1Skin.prototype;

	_proto.hua_9_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_9 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 184;
		t.y = 0;
		return t;
	};
	_proto.hua_8_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_8 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 138;
		t.y = 0;
		return t;
	};
	_proto.hua_7_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_7 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 92;
		t.y = 0;
		return t;
	};
	_proto.hua_6_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_6 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 46;
		t.y = 0;
		return t;
	};
	_proto.hua_5_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_5 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hua_4_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_4 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 198;
		t.y = 57;
		return t;
	};
	_proto.hua_3_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_3 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 152;
		t.y = 57;
		return t;
	};
	_proto.hua_2_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_2 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 106;
		t.y = 57;
		return t;
	};
	_proto.hua_1_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_1 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 60;
		t.y = 57;
		return t;
	};
	_proto.hua_0_i = function () {
		var t = new ERMJ.ERMJ_hua();
		this.hua_0 = t;
		t.skinName = "ERMJ_hua_1Skin";
		t.x = 14;
		t.y = 57;
		return t;
	};
	return ERMJ_Huapai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Shoupai_3Skin.exml'] = window.ERMJ_Shoupai_3Skin = (function (_super) {
	__extends(ERMJ_Shoupai_3Skin, _super);
	function ERMJ_Shoupai_3Skin() {
		_super.call(this);
		this.skinParts = ["pai_13","pai_12","pai_11","pai_10","pai_9","pai_8","pai_7","pai_6","pai_0","pai_1","pai_2","pai_3","pai_4","pai_5"];
		
		this.height = 47;
		this.width = 452;
		this.elementsContent = [this.pai_13_i(),this.pai_12_i(),this.pai_11_i(),this.pai_10_i(),this.pai_9_i(),this.pai_8_i(),this.pai_7_i(),this.pai_6_i(),this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i()];
	}
	var _proto = ERMJ_Shoupai_3Skin.prototype;

	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.height = 46;
		t.source = "ERMJ_b_3_14_png";
		t.width = 39;
		t.x = 0;
		t.y = 0.5;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "ERMJ_b_3_13_png";
		t.x = 53;
		t.y = 0;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "ERMJ_b_3_12_png";
		t.x = 83.83;
		t.y = 0;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "ERMJ_b_3_11_png";
		t.x = 113.32;
		t.y = 0;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "ERMJ_b_3_10_png";
		t.x = 144.32;
		t.y = 0;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "ERMJ_b_3_9_png";
		t.x = 175.32;
		t.y = 0;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "ERMJ_b_3_8_png";
		t.x = 206.32;
		t.y = 0;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "ERMJ_b_3_7_png";
		t.x = 235.98;
		t.y = 0;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "ERMJ_b_3_1_png";
		t.x = 413.13;
		t.y = 0.5;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "ERMJ_b_3_2_png";
		t.x = 383.63;
		t.y = 1;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "ERMJ_b_3_3_png";
		t.x = 354.97;
		t.y = 1;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "ERMJ_b_3_4_png";
		t.x = 325.63;
		t.y = 0;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "ERMJ_b_3_5_png";
		t.x = 295.97;
		t.y = 0;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "ERMJ_b_3_6_png";
		t.x = 265.95;
		t.y = 0;
		return t;
	};
	return ERMJ_Shoupai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Hupai_3Skin.exml'] = window.ERMJ_Hupai_3Skin = (function (_super) {
	__extends(ERMJ_Hupai_3Skin, _super);
	function ERMJ_Hupai_3Skin() {
		_super.call(this);
		this.skinParts = ["bg_13","bg_12","bg_11","bg_10","bg_9","bg_8","bg_7","bg_6","bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","pai_12","pai_13","pai_11","pai_10","pai_9","pai_8","pai_7","pai_6","pai_5","pai_4","pai_3","pai_2","pai_1","pai_0"];
		
		this.height = 44;
		this.width = 404;
		this.elementsContent = [this.bg_13_i(),this.bg_12_i(),this.bg_11_i(),this.bg_10_i(),this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.bg_6_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.pai_12_i(),this.pai_13_i(),this.pai_11_i(),this.pai_10_i(),this.pai_9_i(),this.pai_8_i(),this.pai_7_i(),this.pai_6_i(),this.pai_5_i(),this.pai_4_i(),this.pai_3_i(),this.pai_2_i(),this.pai_1_i(),this.pai_0_i()];
	}
	var _proto = ERMJ_Hupai_3Skin.prototype;

	_proto.bg_13_i = function () {
		var t = new eui.Image();
		this.bg_13 = t;
		t.source = "ERMJ_j_3_14_png";
		t.x = -48;
		t.y = 0.1;
		return t;
	};
	_proto.bg_12_i = function () {
		var t = new eui.Image();
		this.bg_12 = t;
		t.source = "ERMJ_j_3_14_png";
		t.x = 0;
		t.y = 0.5;
		return t;
	};
	_proto.bg_11_i = function () {
		var t = new eui.Image();
		this.bg_11 = t;
		t.source = "ERMJ_j_3_13_png";
		t.x = 30.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_10_i = function () {
		var t = new eui.Image();
		this.bg_10 = t;
		t.source = "ERMJ_j_3_12_png";
		t.x = 61.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.source = "ERMJ_j_3_11_png";
		t.x = 92.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.source = "ERMJ_j_3_10_png";
		t.x = 123.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "ERMJ_j_3_9_png";
		t.x = 155;
		t.y = 0.5;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "ERMJ_j_3_8_png";
		t.x = 186;
		t.y = 0.5;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "ERMJ_j_3_2_png";
		t.x = 367;
		t.y = 1.5;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "ERMJ_j_3_3_png";
		t.x = 336.5;
		t.y = 1.5;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "ERMJ_j_3_4_png";
		t.x = 306.5;
		t.y = 1.5;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "ERMJ_j_3_5_png";
		t.x = 276;
		t.y = 1.5;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "ERMJ_j_3_6_png";
		t.x = 246;
		t.y = 1.67;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "ERMJ_j_3_7_png";
		t.x = 216;
		t.y = 0.67;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 10;
		t.source = "ERMJ_card_1_png";
		t.x = 17.21;
		t.y = 16;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 10;
		t.source = "ERMJ_card_1_png";
		t.x = -30.79;
		t.y = 15.6;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 8;
		t.source = "ERMJ_card_1_png";
		t.x = 48;
		t.y = 16.5;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 6;
		t.source = "ERMJ_card_1_png";
		t.x = 78;
		t.y = 16;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 4;
		t.source = "ERMJ_card_1_png";
		t.x = 109;
		t.y = 16.5;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 2;
		t.source = "ERMJ_card_1_png";
		t.x = 140;
		t.y = 16.5;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 0;
		t.source = "ERMJ_card_1_png";
		t.x = 171;
		t.y = 16.5;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 0;
		t.source = "ERMJ_card_1_png";
		t.x = 202;
		t.y = 16.5;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = 0;
		t.source = "ERMJ_card_1_png";
		t.x = 232;
		t.y = 16.5;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = -2;
		t.source = "ERMJ_card_1_png";
		t.x = 263;
		t.y = 16.5;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = -4;
		t.source = "ERMJ_card_1_png";
		t.x = 294;
		t.y = 16.5;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = -6;
		t.source = "ERMJ_card_1_png";
		t.x = 325;
		t.y = 16.5;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = -8;
		t.source = "ERMJ_card_1_png";
		t.x = 356;
		t.y = 16.5;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.25;
		t.scaleY = -0.25;
		t.skewX = -10;
		t.source = "ERMJ_card_11_png";
		t.x = 386.71;
		t.y = 17;
		return t;
	};
	return ERMJ_Hupai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_liang_3Skin.exml'] = window.ERMJ_liang_3Skin = (function (_super) {
	__extends(ERMJ_liang_3Skin, _super);
	function ERMJ_liang_3Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 42;
		this.width = 37;
		this.elementsContent = [this.bg_i(),this.pai_i()];
	}
	var _proto = ERMJ_liang_3Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 42;
		t.source = "ERMJ_j_3_1_png";
		t.width = 37;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.3;
		t.scaleY = -0.3;
		t.skewX = -10;
		t.source = "ERMJ_card_11_png";
		t.x = 20.36;
		t.y = 14.28;
		return t;
	};
	return ERMJ_liang_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_chi_3Skin.exml'] = window.ERMJ_chi_3Skin = (function (_super) {
	__extends(ERMJ_chi_3Skin, _super);
	function ERMJ_chi_3Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3"];
		
		this.height = 59;
		this.width = 99;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i()];
	}
	var _proto = ERMJ_chi_3Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_0 = t;
		t.skinName = "ERMJ_liang_3Skin";
		t.x = 61.79;
		t.y = 16.5;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_1 = t;
		t.skinName = "ERMJ_liang_3Skin";
		t.x = 30.91;
		t.y = 16.5;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_2 = t;
		t.skinName = "ERMJ_liang_3Skin";
		t.x = 0;
		t.y = 16.5;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_3 = t;
		t.skinName = "ERMJ_liang_3Skin";
		t.x = 33.29;
		t.y = 0;
		return t;
	};
	return ERMJ_chi_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Chipenggang_3Skin.exml'] = window.ERMJ_Chipenggang_3Skin = (function (_super) {
	__extends(ERMJ_Chipenggang_3Skin, _super);
	function ERMJ_Chipenggang_3Skin() {
		_super.call(this);
		this.skinParts = ["chi_0","chi_1","chi_2","chi_3"];
		
		this.height = 59;
		this.width = 403;
		this.elementsContent = [this.chi_0_i(),this.chi_1_i(),this.chi_2_i(),this.chi_3_i()];
	}
	var _proto = ERMJ_Chipenggang_3Skin.prototype;

	_proto.chi_0_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_0 = t;
		t.skinName = "ERMJ_chi_3Skin";
		t.x = 304;
		t.y = 0;
		return t;
	};
	_proto.chi_1_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_1 = t;
		t.skinName = "ERMJ_chi_3Skin";
		t.x = 203;
		t.y = 0;
		return t;
	};
	_proto.chi_2_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_2 = t;
		t.skinName = "ERMJ_chi_3Skin";
		t.x = 102;
		t.y = 0;
		return t;
	};
	_proto.chi_3_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_3 = t;
		t.skinName = "ERMJ_chi_3Skin";
		t.y = 0;
		return t;
	};
	return ERMJ_Chipenggang_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_da_3Skin.exml'] = window.ERMJ_da_3Skin = (function (_super) {
	__extends(ERMJ_da_3Skin, _super);
	function ERMJ_da_3Skin() {
		_super.call(this);
		this.skinParts = ["bg_5","bg_4","bg_3","bg_0","bg_1","bg_2","pai_5","pai_4","pai_3","pai_2","pai_1","pai_0"];
		
		this.height = 52;
		this.width = 224;
		this.elementsContent = [this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.pai_5_i(),this.pai_4_i(),this.pai_3_i(),this.pai_2_i(),this.pai_1_i(),this.pai_0_i()];
	}
	var _proto = ERMJ_da_3Skin.prototype;

	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "ERMJ_d_3_15_png";
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "ERMJ_d_3_14_png";
		t.x = 37.16;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "ERMJ_d_3_13_png";
		t.x = 74.61;
		t.y = 0;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "ERMJ_d_3_10_png";
		t.x = 183.97;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "ERMJ_d_3_11_png";
		t.x = 147.42;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "ERMJ_d_3_12_png";
		t.x = 111.76;
		t.y = 0;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 2.2;
		t.scaleX = 0.35;
		t.scaleY = -0.35;
		t.source = "ERMJ_card_33_png";
		t.x = 18.88;
		t.y = 21;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.94;
		t.scaleX = 0.35;
		t.scaleY = -0.35;
		t.source = "ERMJ_card_33_png";
		t.x = 57;
		t.y = 21;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.35;
		t.scaleY = -0.35;
		t.source = "ERMJ_card_33_png";
		t.x = 94;
		t.y = 21;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.35;
		t.scaleY = -0.35;
		t.source = "ERMJ_card_33_png";
		t.x = 130.32;
		t.y = 21;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.78;
		t.scaleX = 0.35;
		t.scaleY = -0.35;
		t.source = "ERMJ_card_33_png";
		t.x = 167.64;
		t.y = 21;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.55;
		t.scaleX = 0.35;
		t.scaleY = -0.35;
		t.source = "ERMJ_card_33_png";
		t.x = 205.24;
		t.y = 21;
		return t;
	};
	return ERMJ_da_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Dapai_3Skin.exml'] = window.ERMJ_Dapai_3Skin = (function (_super) {
	__extends(ERMJ_Dapai_3Skin, _super);
	function ERMJ_Dapai_3Skin() {
		_super.call(this);
		this.skinParts = ["da_3","da_2","da_1","da_0","focusImg"];
		
		this.height = 151;
		this.width = 224;
		this.elementsContent = [this.da_3_i(),this.da_2_i(),this.da_1_i(),this.da_0_i(),this.focusImg_i()];
	}
	var _proto = ERMJ_Dapai_3Skin.prototype;

	_proto.da_3_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_3 = t;
		t.scaleX = 0.91;
		t.scaleY = 0.91;
		t.skinName = "ERMJ_da_3Skin";
		t.x = 11.33;
		t.y = 0;
		return t;
	};
	_proto.da_2_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_2 = t;
		t.scaleX = 0.94;
		t.scaleY = 0.94;
		t.skinName = "ERMJ_da_3Skin";
		t.x = 7.33;
		t.y = 31.33;
		return t;
	};
	_proto.da_1_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_1 = t;
		t.scaleX = 0.97;
		t.scaleY = 0.97;
		t.skinName = "ERMJ_da_3Skin";
		t.x = 3.99;
		t.y = 64.66;
		return t;
	};
	_proto.da_0_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_0 = t;
		t.skinName = "ERMJ_da_3Skin";
		t.x = 0;
		t.y = 98.65;
		return t;
	};
	_proto.focusImg_i = function () {
		var t = new eui.Image();
		this.focusImg = t;
		t.anchorOffsetX = 30.8;
		t.anchorOffsetY = 48.8;
		t.source = "ERMJ_logo_tishi_png";
		t.x = 146.8;
		t.y = 103.8;
		return t;
	};
	return ERMJ_Dapai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_da_1Skin.exml'] = window.ERMJ_da_1Skin = (function (_super) {
	__extends(ERMJ_da_1Skin, _super);
	function ERMJ_da_1Skin() {
		_super.call(this);
		this.skinParts = ["bg_0","bg_1","bg_2","bg_5","bg_4","bg_3","pai_0","pai_1","pai_2","pai_3","pai_4","pai_5"];
		
		this.height = 56;
		this.width = 235;
		this.elementsContent = [this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i()];
	}
	var _proto = ERMJ_da_1Skin.prototype;

	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_d_1_10_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_d_1_11_png";
		t.x = 39;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_d_1_12_png";
		t.x = 77.6;
		t.y = 0;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_d_1_15_png";
		t.x = 189.95;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_d_1_14_png";
		t.x = 153.2;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ERMJ_d_1_13_png";
		t.x = 115.2;
		t.y = 0;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "ERMJ_card_33_png";
		t.x = 21.02;
		t.y = 18;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.43;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "ERMJ_card_33_png";
		t.x = 58.8;
		t.y = 18;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "ERMJ_card_33_png";
		t.x = 97.2;
		t.y = 18;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "ERMJ_card_33_png";
		t.x = 135.8;
		t.y = 18;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.37;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "ERMJ_card_33_png";
		t.x = 173.8;
		t.y = 18;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 357.59;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "ERMJ_card_33_png";
		t.x = 213.25;
		t.y = 18;
		return t;
	};
	return ERMJ_da_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Dapai_1Skin.exml'] = window.ERMJ_Dapai_1Skin = (function (_super) {
	__extends(ERMJ_Dapai_1Skin, _super);
	function ERMJ_Dapai_1Skin() {
		_super.call(this);
		this.skinParts = ["da_0","da_1","da_2","da_3","focusImg"];
		
		this.height = 188;
		this.width = 257;
		this.elementsContent = [this.da_0_i(),this.da_1_i(),this.da_2_i(),this.da_3_i(),this.focusImg_i()];
	}
	var _proto = ERMJ_Dapai_1Skin.prototype;

	_proto.da_0_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_0 = t;
		t.skinName = "ERMJ_da_1Skin";
		t.x = 10.43;
		t.y = 0;
		return t;
	};
	_proto.da_1_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_1 = t;
		t.scaleX = 1.03;
		t.skinName = "ERMJ_da_1Skin";
		t.x = 7.05;
		t.y = 42.99;
		return t;
	};
	_proto.da_2_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_2 = t;
		t.scaleX = 1.06;
		t.skinName = "ERMJ_da_1Skin";
		t.x = 3.53;
		t.y = 86.97;
		return t;
	};
	_proto.da_3_i = function () {
		var t = new ERMJ.ERMJ_da();
		this.da_3 = t;
		t.scaleX = 1.09;
		t.skinName = "ERMJ_da_1Skin";
		t.x = 0;
		t.y = 131.58;
		return t;
	};
	_proto.focusImg_i = function () {
		var t = new eui.Image();
		this.focusImg = t;
		t.anchorOffsetX = 30.8;
		t.anchorOffsetY = 48.8;
		t.source = "ERMJ_logo_tishi_png";
		t.x = 146.8;
		t.y = 103.8;
		return t;
	};
	return ERMJ_Dapai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Paidun_0Skin.exml'] = window.ERMJ_Paidun_0Skin = (function (_super) {
	__extends(ERMJ_Paidun_0Skin, _super);
	function ERMJ_Paidun_0Skin() {
		_super.call(this);
		this.skinParts = ["pai_35","pai_33","pai_31","pai_29","pai_27","pai_25","pai_23","pai_21","pai_19","pai_17","pai_15","pai_13","pai_11","pai_9","pai_7","pai_5","pai_3","pai_1","pai_34","pai_32","pai_30","pai_28","pai_26","pai_24","pai_22","pai_20","pai_18","pai_16","pai_14","pai_12","pai_10","pai_8","pai_6","pai_4","pai_2","pai_0"];
		
		this.height = 477;
		this.width = 166;
		this.elementsContent = [this.pai_35_i(),this.pai_33_i(),this.pai_31_i(),this.pai_29_i(),this.pai_27_i(),this.pai_25_i(),this.pai_23_i(),this.pai_21_i(),this.pai_19_i(),this.pai_17_i(),this.pai_15_i(),this.pai_13_i(),this.pai_11_i(),this.pai_9_i(),this.pai_7_i(),this.pai_5_i(),this.pai_3_i(),this.pai_1_i(),this.pai_34_i(),this.pai_32_i(),this.pai_30_i(),this.pai_28_i(),this.pai_26_i(),this.pai_24_i(),this.pai_22_i(),this.pai_20_i(),this.pai_18_i(),this.pai_16_i(),this.pai_14_i(),this.pai_12_i(),this.pai_10_i(),this.pai_8_i(),this.pai_6_i(),this.pai_4_i(),this.pai_2_i(),this.pai_0_i()];
	}
	var _proto = ERMJ_Paidun_0Skin.prototype;

	_proto.pai_35_i = function () {
		var t = new eui.Image();
		this.pai_35 = t;
		t.source = "ERMJ_r_0_2_png";
		t.x = 120.99;
		t.y = 14.49;
		return t;
	};
	_proto.pai_33_i = function () {
		var t = new eui.Image();
		this.pai_33 = t;
		t.source = "ERMJ_r_0_4_png";
		t.x = 115.99;
		t.y = 32.99;
		return t;
	};
	_proto.pai_31_i = function () {
		var t = new eui.Image();
		this.pai_31 = t;
		t.source = "ERMJ_r_0_6_png";
		t.x = 110.99;
		t.y = 51.99;
		return t;
	};
	_proto.pai_29_i = function () {
		var t = new eui.Image();
		this.pai_29 = t;
		t.source = "ERMJ_r_0_8_png";
		t.x = 105.99;
		t.y = 70.99;
		return t;
	};
	_proto.pai_27_i = function () {
		var t = new eui.Image();
		this.pai_27 = t;
		t.source = "ERMJ_r_0_10_png";
		t.x = 99.99;
		t.y = 91.99;
		return t;
	};
	_proto.pai_25_i = function () {
		var t = new eui.Image();
		this.pai_25 = t;
		t.source = "ERMJ_r_0_12_png";
		t.x = 94.99;
		t.y = 112.49;
		return t;
	};
	_proto.pai_23_i = function () {
		var t = new eui.Image();
		this.pai_23 = t;
		t.source = "ERMJ_r_0_14_png";
		t.x = 88.49;
		t.y = 134.99;
		return t;
	};
	_proto.pai_21_i = function () {
		var t = new eui.Image();
		this.pai_21 = t;
		t.source = "ERMJ_r_0_16_png";
		t.x = 82.49;
		t.y = 156.99;
		return t;
	};
	_proto.pai_19_i = function () {
		var t = new eui.Image();
		this.pai_19 = t;
		t.source = "ERMJ_r_0_18_png";
		t.x = 75.49;
		t.y = 179.99;
		return t;
	};
	_proto.pai_17_i = function () {
		var t = new eui.Image();
		this.pai_17 = t;
		t.source = "ERMJ_r_0_20_png";
		t.x = 69.49;
		t.y = 203.49;
		return t;
	};
	_proto.pai_15_i = function () {
		var t = new eui.Image();
		this.pai_15 = t;
		t.source = "ERMJ_r_0_22_png";
		t.x = 62.49;
		t.y = 228.49;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "ERMJ_r_0_24_png";
		t.x = 55.49;
		t.y = 254.49;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "ERMJ_r_0_26_png";
		t.x = 48.49;
		t.y = 280.99;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "ERMJ_r_0_28_png";
		t.x = 40.49;
		t.y = 308.49;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "ERMJ_r_0_30_png";
		t.x = 32.49;
		t.y = 336.99;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "ERMJ_r_0_32_png";
		t.x = 24.49;
		t.y = 366.99;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "ERMJ_r_0_34_png";
		t.x = 16.49;
		t.y = 397.99;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "ERMJ_r_0_36_png";
		t.x = 7.49;
		t.y = 430.49;
		return t;
	};
	_proto.pai_34_i = function () {
		var t = new eui.Image();
		this.pai_34 = t;
		t.source = "ERMJ_r_0_1_png";
		t.x = 116.68;
		t.y = 0;
		return t;
	};
	_proto.pai_32_i = function () {
		var t = new eui.Image();
		this.pai_32 = t;
		t.source = "ERMJ_r_0_3_png";
		t.x = 111.51;
		t.y = 18.5;
		return t;
	};
	_proto.pai_30_i = function () {
		var t = new eui.Image();
		this.pai_30 = t;
		t.source = "ERMJ_r_0_5_png";
		t.x = 105.51;
		t.y = 37.5;
		return t;
	};
	_proto.pai_28_i = function () {
		var t = new eui.Image();
		this.pai_28 = t;
		t.source = "ERMJ_r_0_7_png";
		t.x = 100.34;
		t.y = 56.5;
		return t;
	};
	_proto.pai_26_i = function () {
		var t = new eui.Image();
		this.pai_26 = t;
		t.source = "ERMJ_r_0_9_png";
		t.x = 94.34;
		t.y = 77;
		return t;
	};
	_proto.pai_24_i = function () {
		var t = new eui.Image();
		this.pai_24 = t;
		t.source = "ERMJ_r_0_11_png";
		t.x = 88.17;
		t.y = 98;
		return t;
	};
	_proto.pai_22_i = function () {
		var t = new eui.Image();
		this.pai_22 = t;
		t.source = "ERMJ_r_0_13_png";
		t.x = 82.17;
		t.y = 120.5;
		return t;
	};
	_proto.pai_20_i = function () {
		var t = new eui.Image();
		this.pai_20 = t;
		t.source = "ERMJ_r_0_15_png";
		t.x = 76.17;
		t.y = 142.5;
		return t;
	};
	_proto.pai_18_i = function () {
		var t = new eui.Image();
		this.pai_18 = t;
		t.source = "ERMJ_r_0_17_png";
		t.x = 70.17;
		t.y = 165.5;
		return t;
	};
	_proto.pai_16_i = function () {
		var t = new eui.Image();
		this.pai_16 = t;
		t.source = "ERMJ_r_0_19_png";
		t.x = 63.67;
		t.y = 189;
		return t;
	};
	_proto.pai_14_i = function () {
		var t = new eui.Image();
		this.pai_14 = t;
		t.source = "ERMJ_r_0_21_png";
		t.x = 56.67;
		t.y = 214;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "ERMJ_r_0_23_png";
		t.x = 49.67;
		t.y = 240;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "ERMJ_r_0_25_png";
		t.x = 42.17;
		t.y = 266.5;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "ERMJ_r_0_27_png";
		t.x = 34.17;
		t.y = 294;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "ERMJ_r_0_29_png";
		t.x = 26.17;
		t.y = 322.5;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "ERMJ_r_0_31_png";
		t.x = 18.17;
		t.y = 352.5;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "ERMJ_r_0_33_png";
		t.x = 9;
		t.y = 383.5;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "ERMJ_r_0_35_png";
		t.x = 0;
		t.y = 416;
		return t;
	};
	return ERMJ_Paidun_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Paidun_2Skin.exml'] = window.ERMJ_Paidun_2Skin = (function (_super) {
	__extends(ERMJ_Paidun_2Skin, _super);
	function ERMJ_Paidun_2Skin() {
		_super.call(this);
		this.skinParts = ["pai_1","pai_3","pai_5","pai_7","pai_9","pai_11","pai_13","pai_15","pai_17","pai_19","pai_21","pai_23","pai_25","pai_27","pai_29","pai_31","pai_33","pai_35","pai_0","pai_2","pai_4","pai_6","pai_8","pai_10","pai_12","pai_14","pai_16","pai_18","pai_20","pai_22","pai_24","pai_26","pai_28","pai_30","pai_32","pai_34"];
		
		this.height = 476;
		this.width = 165;
		this.elementsContent = [this.pai_1_i(),this.pai_3_i(),this.pai_5_i(),this.pai_7_i(),this.pai_9_i(),this.pai_11_i(),this.pai_13_i(),this.pai_15_i(),this.pai_17_i(),this.pai_19_i(),this.pai_21_i(),this.pai_23_i(),this.pai_25_i(),this.pai_27_i(),this.pai_29_i(),this.pai_31_i(),this.pai_33_i(),this.pai_35_i(),this.pai_0_i(),this.pai_2_i(),this.pai_4_i(),this.pai_6_i(),this.pai_8_i(),this.pai_10_i(),this.pai_12_i(),this.pai_14_i(),this.pai_16_i(),this.pai_18_i(),this.pai_20_i(),this.pai_22_i(),this.pai_24_i(),this.pai_26_i(),this.pai_28_i(),this.pai_30_i(),this.pai_32_i(),this.pai_34_i()];
	}
	var _proto = ERMJ_Paidun_2Skin.prototype;

	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "ERMJ_r_2_36_png";
		t.x = 0;
		t.y = 13.67;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "ERMJ_r_2_34_png";
		t.x = 5.16;
		t.y = 32.01;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "ERMJ_r_2_32_png";
		t.x = 9.5;
		t.y = 50.67;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "ERMJ_r_2_30_png";
		t.x = 13;
		t.y = 70.67;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "ERMJ_r_2_28_png";
		t.x = 18;
		t.y = 89.67;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "ERMJ_r_2_26_png";
		t.x = 23;
		t.y = 111.17;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "ERMJ_r_2_24_png";
		t.x = 28;
		t.y = 132.67;
		return t;
	};
	_proto.pai_15_i = function () {
		var t = new eui.Image();
		this.pai_15 = t;
		t.source = "ERMJ_r_2_22_png";
		t.x = 33;
		t.y = 155.67;
		return t;
	};
	_proto.pai_17_i = function () {
		var t = new eui.Image();
		this.pai_17 = t;
		t.source = "ERMJ_r_2_20_png";
		t.x = 37.5;
		t.y = 179.17;
		return t;
	};
	_proto.pai_19_i = function () {
		var t = new eui.Image();
		this.pai_19 = t;
		t.source = "ERMJ_r_2_18_png";
		t.x = 43.5;
		t.y = 202.67;
		return t;
	};
	_proto.pai_21_i = function () {
		var t = new eui.Image();
		this.pai_21 = t;
		t.source = "ERMJ_r_2_16_png";
		t.x = 48;
		t.y = 227.67;
		return t;
	};
	_proto.pai_23_i = function () {
		var t = new eui.Image();
		this.pai_23 = t;
		t.source = "ERMJ_r_2_14_png";
		t.x = 54;
		t.y = 253.17;
		return t;
	};
	_proto.pai_25_i = function () {
		var t = new eui.Image();
		this.pai_25 = t;
		t.source = "ERMJ_r_2_12_png";
		t.x = 60;
		t.y = 279.67;
		return t;
	};
	_proto.pai_27_i = function () {
		var t = new eui.Image();
		this.pai_27 = t;
		t.source = "ERMJ_r_2_10_png";
		t.x = 66;
		t.y = 307.67;
		return t;
	};
	_proto.pai_29_i = function () {
		var t = new eui.Image();
		this.pai_29 = t;
		t.source = "ERMJ_r_2_8_png";
		t.x = 72.5;
		t.y = 336.17;
		return t;
	};
	_proto.pai_31_i = function () {
		var t = new eui.Image();
		this.pai_31 = t;
		t.source = "ERMJ_r_2_6_png";
		t.x = 79;
		t.y = 366.17;
		return t;
	};
	_proto.pai_33_i = function () {
		var t = new eui.Image();
		this.pai_33 = t;
		t.source = "ERMJ_r_2_4_png";
		t.x = 85.5;
		t.y = 396.67;
		return t;
	};
	_proto.pai_35_i = function () {
		var t = new eui.Image();
		this.pai_35 = t;
		t.source = "ERMJ_r_2_2_png";
		t.x = 92.5;
		t.y = 429.17;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "ERMJ_r_2_35_png";
		t.x = 6.33;
		t.y = 0;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "ERMJ_r_2_33_png";
		t.x = 11.49;
		t.y = 18.34;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "ERMJ_r_2_31_png";
		t.x = 15.16;
		t.y = 37;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "ERMJ_r_2_29_png";
		t.x = 20.67;
		t.y = 56.33;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "ERMJ_r_2_27_png";
		t.x = 24.33;
		t.y = 76;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "ERMJ_r_2_25_png";
		t.x = 29.33;
		t.y = 97.5;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "ERMJ_r_2_23_png";
		t.x = 34.33;
		t.y = 119;
		return t;
	};
	_proto.pai_14_i = function () {
		var t = new eui.Image();
		this.pai_14 = t;
		t.source = "ERMJ_r_2_21_png";
		t.x = 40.67;
		t.y = 142;
		return t;
	};
	_proto.pai_16_i = function () {
		var t = new eui.Image();
		this.pai_16 = t;
		t.source = "ERMJ_r_2_19_png";
		t.x = 45.17;
		t.y = 165.5;
		return t;
	};
	_proto.pai_18_i = function () {
		var t = new eui.Image();
		this.pai_18 = t;
		t.source = "ERMJ_r_2_17_png";
		t.x = 51.17;
		t.y = 189;
		return t;
	};
	_proto.pai_20_i = function () {
		var t = new eui.Image();
		this.pai_20 = t;
		t.source = "ERMJ_r_2_15_png";
		t.x = 55.67;
		t.y = 214;
		return t;
	};
	_proto.pai_22_i = function () {
		var t = new eui.Image();
		this.pai_22 = t;
		t.source = "ERMJ_r_2_13_png";
		t.x = 61.67;
		t.y = 239.5;
		return t;
	};
	_proto.pai_24_i = function () {
		var t = new eui.Image();
		this.pai_24 = t;
		t.source = "ERMJ_r_2_11_png";
		t.x = 68.34;
		t.y = 266;
		return t;
	};
	_proto.pai_26_i = function () {
		var t = new eui.Image();
		this.pai_26 = t;
		t.source = "ERMJ_r_2_9_png";
		t.x = 74.34;
		t.y = 294;
		return t;
	};
	_proto.pai_28_i = function () {
		var t = new eui.Image();
		this.pai_28 = t;
		t.source = "ERMJ_r_2_7_png";
		t.x = 80.84;
		t.y = 322.5;
		return t;
	};
	_proto.pai_30_i = function () {
		var t = new eui.Image();
		this.pai_30 = t;
		t.source = "ERMJ_r_2_5_png";
		t.x = 87.34;
		t.y = 352.5;
		return t;
	};
	_proto.pai_32_i = function () {
		var t = new eui.Image();
		this.pai_32 = t;
		t.source = "ERMJ_r_2_3_png";
		t.x = 93.84;
		t.y = 383;
		return t;
	};
	_proto.pai_34_i = function () {
		var t = new eui.Image();
		this.pai_34 = t;
		t.source = "ERMJ_r_2_1_png";
		t.x = 100.84;
		t.y = 415.5;
		return t;
	};
	return ERMJ_Paidun_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Shoupai_1Skin.exml'] = window.ERMJ_Shoupai_1Skin = (function (_super) {
	__extends(ERMJ_Shoupai_1Skin, _super);
	function ERMJ_Shoupai_1Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3","pai_4","pai_5","pai_6","pai_7","pai_8","pai_9","pai_10","pai_11","pai_12","pai_13"];
		
		this.height = 113;
		this.width = 1154;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i(),this.pai_6_i(),this.pai_7_i(),this.pai_8_i(),this.pai_9_i(),this.pai_10_i(),this.pai_11_i(),this.pai_12_i(),this.pai_13_i()];
	}
	var _proto = ERMJ_Shoupai_1Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_0 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_1 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 81;
		t.y = 0;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_2 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 161;
		t.y = 0;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_3 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 241;
		t.y = 0;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_4 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 321;
		t.y = 0;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_5 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 401;
		t.y = 0;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_6 = t;
		t.height = 113;
		t.skinName = "ERMJ_handSkin";
		t.width = 81;
		t.x = 481;
		t.y = 0;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_7 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 561;
		t.y = 0;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_8 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 641;
		t.y = 0;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_9 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 721;
		t.y = 0;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_10 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 801;
		t.y = 0;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_11 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 881;
		t.y = 0;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_12 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 960;
		t.y = 0;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.pai_13 = t;
		t.skinName = "ERMJ_handSkin";
		t.x = 1073;
		t.y = 0;
		return t;
	};
	return ERMJ_Shoupai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_liang_1Skin.exml'] = window.ERMJ_liang_1Skin = (function (_super) {
	__extends(ERMJ_liang_1Skin, _super);
	function ERMJ_liang_1Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 66;
		this.width = 66;
		this.elementsContent = [this.bg_i(),this.pai_i()];
	}
	var _proto = ERMJ_liang_1Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 66;
		t.source = "ERMJ_j_1_1_png";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 10;
		t.source = "ERMJ_card_21_png";
		t.x = 28;
		t.y = 23;
		return t;
	};
	return ERMJ_liang_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/card/ERMJ_chi_1Skin.exml'] = window.ERMJ_chi_1Skin = (function (_super) {
	__extends(ERMJ_chi_1Skin, _super);
	function ERMJ_chi_1Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3"];
		
		this.height = 75;
		this.width = 155;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i()];
	}
	var _proto = ERMJ_chi_1Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_0 = t;
		t.skinName = "ERMJ_liang_1Skin";
		t.x = 0;
		t.y = 8.46;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_1 = t;
		t.skinName = "ERMJ_liang_1Skin";
		t.x = 43.69;
		t.y = 8.46;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_2 = t;
		t.skinName = "ERMJ_liang_1Skin";
		t.x = 88.01;
		t.y = 8.46;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new ERMJ.ERMJ_liang();
		this.pai_3 = t;
		t.skinName = "ERMJ_liang_1Skin";
		t.x = 38.33;
		t.y = 0;
		return t;
	};
	return ERMJ_chi_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Chipenggang_1Skin.exml'] = window.ERMJ_Chipenggang_1Skin = (function (_super) {
	__extends(ERMJ_Chipenggang_1Skin, _super);
	function ERMJ_Chipenggang_1Skin() {
		_super.call(this);
		this.skinParts = ["chi_0","chi_1","chi_2","chi_3"];
		
		this.height = 75;
		this.width = 589;
		this.elementsContent = [this.chi_0_i(),this.chi_1_i(),this.chi_2_i(),this.chi_3_i()];
	}
	var _proto = ERMJ_Chipenggang_1Skin.prototype;

	_proto.chi_0_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_0 = t;
		t.skinName = "ERMJ_chi_1Skin";
		t.y = 0;
		return t;
	};
	_proto.chi_1_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_1 = t;
		t.skinName = "ERMJ_chi_1Skin";
		t.x = 145;
		t.y = 0;
		return t;
	};
	_proto.chi_2_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_2 = t;
		t.skinName = "ERMJ_chi_1Skin";
		t.x = 290;
		t.y = 0;
		return t;
	};
	_proto.chi_3_i = function () {
		var t = new ERMJ.ERMJ_chi();
		this.chi_3 = t;
		t.skinName = "ERMJ_chi_1Skin";
		t.x = 434;
		t.y = 0;
		return t;
	};
	return ERMJ_Chipenggang_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/group/ERMJ_Hupai_1Skin.exml'] = window.ERMJ_Hupai_1Skin = (function (_super) {
	__extends(ERMJ_Hupai_1Skin, _super);
	function ERMJ_Hupai_1Skin() {
		_super.call(this);
		this.skinParts = ["bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_12","bg_11","bg_10","bg_9","bg_8","bg_7","pai_0","pai_1","pai_2","pai_3","pai_4","pai_5","pai_6","pai_7","pai_8","pai_9","pai_10","pai_11","pai_12"];
		
		this.height = 76;
		this.width = 592;
		this.elementsContent = [this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.bg_6_i(),this.bg_12_i(),this.bg_11_i(),this.bg_10_i(),this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i(),this.pai_6_i(),this.pai_7_i(),this.pai_8_i(),this.pai_9_i(),this.pai_10_i(),this.pai_11_i(),this.pai_12_i()];
	}
	var _proto = ERMJ_Hupai_1Skin.prototype;

	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "ERMJ_j_1_2_png";
		t.x = 0;
		t.y = 9.47;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "ERMJ_j_1_3_png";
		t.x = 44.99;
		t.y = 9.47;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "ERMJ_j_1_4_png";
		t.x = 89.98;
		t.y = 9.47;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "ERMJ_j_1_5_png";
		t.x = 134.97;
		t.y = 9.47;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "ERMJ_j_1_6_png";
		t.x = 180;
		t.y = 9.47;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "ERMJ_j_1_7_png";
		t.x = 225.67;
		t.y = 9.47;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "ERMJ_j_1_8_png";
		t.x = 271.32;
		t.y = 9.47;
		return t;
	};
	_proto.bg_12_i = function () {
		var t = new eui.Image();
		this.bg_12 = t;
		t.source = "ERMJ_j_1_14_png";
		t.x = 532.67;
		t.y = 9.47;
		return t;
	};
	_proto.bg_11_i = function () {
		var t = new eui.Image();
		this.bg_11 = t;
		t.source = "ERMJ_j_1_13_png";
		t.x = 488.98;
		t.y = 9.47;
		return t;
	};
	_proto.bg_10_i = function () {
		var t = new eui.Image();
		this.bg_10 = t;
		t.source = "ERMJ_j_1_12_png";
		t.x = 445.34;
		t.y = 9.47;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.source = "ERMJ_j_1_11_png";
		t.x = 402.31;
		t.y = 9.47;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.source = "ERMJ_j_1_10_png";
		t.x = 359.32;
		t.y = 9.47;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "ERMJ_j_1_9_png";
		t.x = 315.64;
		t.y = 9.47;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 10;
		t.source = "ERMJ_card_11_png";
		t.x = 26.74;
		t.y = 32.33;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 8;
		t.source = "ERMJ_card_1_png";
		t.x = 72;
		t.y = 32.33;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 6;
		t.source = "ERMJ_card_1_png";
		t.x = 116;
		t.y = 32.33;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 4;
		t.source = "ERMJ_card_1_png";
		t.x = 161;
		t.y = 32.33;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 2;
		t.source = "ERMJ_card_1_png";
		t.x = 205;
		t.y = 32.33;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 0;
		t.source = "ERMJ_card_1_png";
		t.x = 250;
		t.y = 32.33;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 0;
		t.source = "ERMJ_card_1_png";
		t.x = 295;
		t.y = 32.33;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 0;
		t.source = "ERMJ_card_1_png";
		t.x = 339;
		t.y = 32.33;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = -2;
		t.source = "ERMJ_card_1_png";
		t.x = 384;
		t.y = 32.33;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = -4;
		t.source = "ERMJ_card_1_png";
		t.x = 429;
		t.y = 32.33;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = -6;
		t.source = "ERMJ_card_1_png";
		t.x = 473;
		t.y = 32.33;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = -8;
		t.source = "ERMJ_card_1_png";
		t.x = 518;
		t.y = 32.33;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = -10;
		t.source = "ERMJ_card_1_png";
		t.x = 562.7;
		t.y = 32.33;
		return t;
	};
	return ERMJ_Hupai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/gameRoom/ERMJGameSceneSkin.exml'] = window.ERMJGameSceneSkin = (function (_super) {
	__extends(ERMJGameSceneSkin, _super);
	function ERMJGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["gameTimer","huapai3","huapai1","shoupai3","hupai3","chipenggang3","dapai3","dapai1","paidun0","paidun2","shoupai1","chipenggang1","hupai1","playerHead_1","playerHead_3","tingState1","tingState3","chiChoosePanel","huPanel","gangChoosePanel","ctrlUI","waitingImage","effect3","effect1","readyState3","readyState1","readyBtn","aiBtn","soundBtn","helpBtn","exitBtn","leftCardImage","leftCardsTf","copyRoomInfoBtn","tableIdTf","roomNoTf","quxiaoTuoguanBtn","tf_0_i18n","tuoguanGrp","chatCtx3","chatCtx1","chatBtn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.gameTimer_i(),this.huapai3_i(),this.huapai1_i(),this.shoupai3_i(),this.hupai3_i(),this.chipenggang3_i(),this.dapai3_i(),this.dapai1_i(),this.paidun0_i(),this.paidun2_i(),this.shoupai1_i(),this.chipenggang1_i(),this.hupai1_i(),this.playerHead_1_i(),this.playerHead_3_i(),this.tingState1_i(),this.tingState3_i(),this.chiChoosePanel_i(),this.huPanel_i(),this.gangChoosePanel_i(),this.ctrlUI_i(),this.waitingImage_i(),this.effect3_i(),this.effect1_i(),this.readyState3_i(),this.readyState1_i(),this.readyBtn_i(),this._Group1_i(),this._Group2_i(),this.tuoguanGrp_i(),this.chatCtx3_i(),this.chatCtx1_i(),this.chatBtn_i()];
	}
	var _proto = ERMJGameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(307,144,687,522);
		t.source = "ERMJ_bg_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.gameTimer_i = function () {
		var t = new ERMJ.ERMJ_GameTimer();
		this.gameTimer = t;
		t.horizontalCenter = -21;
		t.skinName = "ERMJ_GameTimerSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -3.5;
		return t;
	};
	_proto.huapai3_i = function () {
		var t = new ERMJ.ERMJ_Huapai();
		this.huapai3 = t;
		t.horizontalCenter = -399.5;
		t.skinName = "ERMJ_Huapai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 94;
		return t;
	};
	_proto.huapai1_i = function () {
		var t = new ERMJ.ERMJ_Huapai();
		this.huapai1 = t;
		t.bottom = 139;
		t.horizontalCenter = 519;
		t.skinName = "ERMJ_Huapai_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.shoupai3_i = function () {
		var t = new ERMJ.ERMJ_Shoupai();
		this.shoupai3 = t;
		t.horizontalCenter = -55;
		t.skinName = "ERMJ_Shoupai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 77;
		return t;
	};
	_proto.hupai3_i = function () {
		var t = new ERMJ.ERMJ_Hupai();
		this.hupai3 = t;
		t.horizontalCenter = -8.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "ERMJ_Hupai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 80;
		return t;
	};
	_proto.chipenggang3_i = function () {
		var t = new ERMJ.ERMJ_Chipenggang();
		this.chipenggang3 = t;
		t.horizontalCenter = 62.5;
		t.skinName = "ERMJ_Chipenggang_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 76;
		return t;
	};
	_proto.dapai3_i = function () {
		var t = new ERMJ.ERMJ_Dapai();
		this.dapai3 = t;
		t.horizontalCenter = -23;
		t.scaleX = 1.2;
		t.skinName = "ERMJ_Dapai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -159.5;
		return t;
	};
	_proto.dapai1_i = function () {
		var t = new ERMJ.ERMJ_Dapai();
		this.dapai1 = t;
		t.horizontalCenter = -18.5;
		t.scaleX = 1.2;
		t.skinName = "ERMJ_Dapai_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 127;
		return t;
	};
	_proto.paidun0_i = function () {
		var t = new ERMJ.ERMJ_Paidun();
		this.paidun0 = t;
		t.horizontalCenter = -314;
		t.skinName = "ERMJ_Paidun_0Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -5.5;
		return t;
	};
	_proto.paidun2_i = function () {
		var t = new ERMJ.ERMJ_Paidun();
		this.paidun2 = t;
		t.horizontalCenter = 278.5;
		t.skinName = "ERMJ_Paidun_2Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -8;
		return t;
	};
	_proto.shoupai1_i = function () {
		var t = new ERMJ.ERMJ_Shoupai();
		this.shoupai1 = t;
		t.bottom = 5;
		t.horizontalCenter = 48;
		t.skinName = "ERMJ_Shoupai_1Skin";
		return t;
	};
	_proto.chipenggang1_i = function () {
		var t = new ERMJ.ERMJ_Chipenggang();
		this.chipenggang1 = t;
		t.bottom = 30;
		t.horizontalCenter = -236.5;
		t.skinName = "ERMJ_Chipenggang_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.hupai1_i = function () {
		var t = new ERMJ.ERMJ_Hupai();
		this.hupai1 = t;
		t.bottom = 23;
		t.horizontalCenter = -32;
		t.skinName = "ERMJ_Hupai_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.playerHead_1_i = function () {
		var t = new ERMJ.ERMJ_PlayerHead();
		this.playerHead_1 = t;
		t.bottom = 71;
		t.horizontalCenter = -584;
		t.skinName = "ERMJ_PlayerHeadSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.playerHead_3_i = function () {
		var t = new ERMJ.ERMJ_PlayerHead();
		this.playerHead_3 = t;
		t.horizontalCenter = 347;
		t.skinName = "ERMJ_PlayerHeadSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 24.5;
		return t;
	};
	_proto.tingState1_i = function () {
		var t = new eui.Image();
		this.tingState1 = t;
		t.bottom = 132;
		t.horizontalCenter = -510.5;
		t.source = "ERMJ_listen_sign_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.tingState3_i = function () {
		var t = new eui.Image();
		this.tingState3 = t;
		t.horizontalCenter = 415.5;
		t.source = "ERMJ_listen_sign_png";
		t.touchEnabled = false;
		t.y = 132;
		return t;
	};
	_proto.chiChoosePanel_i = function () {
		var t = new ERMJ.ERMJ_ChiChoosePanel();
		this.chiChoosePanel = t;
		t.bottom = 167;
		t.horizontalCenter = 0;
		t.skinName = "ERMJ_ChiChoosePanelSkin";
		return t;
	};
	_proto.huPanel_i = function () {
		var t = new ERMJ.ERMJ_HuPanel();
		this.huPanel = t;
		t.bottom = 167;
		t.horizontalCenter = 0;
		t.skinName = "ERMJ_HuPanelSkin";
		return t;
	};
	_proto.gangChoosePanel_i = function () {
		var t = new ERMJ.ERMJ_GangChoosePanel();
		this.gangChoosePanel = t;
		t.bottom = 167;
		t.horizontalCenter = 0;
		t.skinName = "ERMJ_GangChoosePanelSkin";
		return t;
	};
	_proto.ctrlUI_i = function () {
		var t = new ERMJ.ERMJ_ControllPanel();
		this.ctrlUI = t;
		t.bottom = 80;
		t.right = 0;
		t.skinName = "ERMJ_ControllPanelSkin";
		return t;
	};
	_proto.waitingImage_i = function () {
		var t = new eui.Image();
		this.waitingImage = t;
		t.horizontalCenter = 0;
		t.source = "ERMJ_wait_others_png";
		t.touchEnabled = false;
		t.verticalCenter = 137;
		return t;
	};
	_proto.effect3_i = function () {
		var t = new eui.Image();
		this.effect3 = t;
		t.anchorOffsetX = 98.78;
		t.anchorOffsetY = 76.73;
		t.horizontalCenter = 0.5;
		t.source = "ERMJ_btn_chi_png";
		t.touchEnabled = false;
		t.y = 119.73;
		return t;
	};
	_proto.effect1_i = function () {
		var t = new eui.Image();
		this.effect1 = t;
		t.anchorOffsetX = 101.45;
		t.anchorOffsetY = 80.73;
		t.bottom = 184;
		t.horizontalCenter = 0.5;
		t.source = "ERMJ_btn_chi_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.readyState3_i = function () {
		var t = new ERMJ.ERMJ_Ready();
		this.readyState3 = t;
		t.horizontalCenter = -21;
		t.skinName = "ERMJ_ReadySkin";
		t.y = 81.92;
		return t;
	};
	_proto.readyState1_i = function () {
		var t = new ERMJ.ERMJ_Ready();
		this.readyState1 = t;
		t.horizontalCenter = -21;
		t.skinName = "ERMJ_ReadySkin";
		t.verticalCenter = 266;
		return t;
	};
	_proto.readyBtn_i = function () {
		var t = new eui.Image();
		this.readyBtn = t;
		t.anchorOffsetX = 65.15;
		t.anchorOffsetY = 22.73;
		t.horizontalCenter = -21;
		t.source = "ERMJ_ready0_png";
		t.verticalCenter = 266;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.right = 7;
		t.y = 10;
		t.elementsContent = [this.aiBtn_i(),this.soundBtn_i(),this.helpBtn_i()];
		return t;
	};
	_proto.aiBtn_i = function () {
		var t = new eui.Image();
		this.aiBtn = t;
		t.source = "ERMJ_tuoguan1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.soundBtn_i = function () {
		var t = new eui.Image();
		this.soundBtn = t;
		t.source = "ERMJ_yinliang1_png";
		t.x = 83;
		t.y = 0;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Image();
		this.helpBtn = t;
		t.source = "ERMJ_wenhao1_png";
		t.x = 165;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.exitBtn_i(),this.leftCardImage_i(),this.leftCardsTf_i(),this.copyRoomInfoBtn_i(),this.tableIdTf_i(),this.roomNoTf_i()];
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Image();
		this.exitBtn = t;
		t.source = "ERMJ_fanhui1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.leftCardImage_i = function () {
		var t = new eui.Image();
		this.leftCardImage = t;
		t.source = "ERMJ_sheng_card_png";
		t.x = 99;
		t.y = 6.99;
		return t;
	};
	_proto.leftCardsTf_i = function () {
		var t = new eui.BitmapLabel();
		this.leftCardsTf = t;
		t.font = "ERMJ_font_rankMoney_fnt";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.text = "99";
		t.x = 124.68;
		t.y = 13.68;
		return t;
	};
	_proto.copyRoomInfoBtn_i = function () {
		var t = new eui.Image();
		this.copyRoomInfoBtn = t;
		t.source = "copy_btn_0_png";
		t.x = 0;
		t.y = 88;
		return t;
	};
	_proto.tableIdTf_i = function () {
		var t = new eui.Label();
		this.tableIdTf = t;
		t.size = 22;
		t.text = "牌局编号:12345567899";
		t.x = 100;
		t.y = 44;
		return t;
	};
	_proto.roomNoTf_i = function () {
		var t = new eui.Label();
		this.roomNoTf = t;
		t.size = 22;
		t.text = "房间号：123456";
		t.x = 192.5;
		t.y = 11;
		return t;
	};
	_proto.tuoguanGrp_i = function () {
		var t = new eui.Group();
		this.tuoguanGrp = t;
		t.bottom = 0;
		t.height = 165;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this.quxiaoTuoguanBtn_i(),this.tf_0_i18n_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ERMJ_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.quxiaoTuoguanBtn_i = function () {
		var t = new eui.Image();
		this.quxiaoTuoguanBtn = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0;
		t.source = "ERMJ_quxiaotuoguan_png";
		t.y = 60;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.horizontalCenter = 19;
		t.size = 26;
		t.text = "系统自动摸打或胡牌，不做其他操作（如吃碰杠等）";
		t.y = 108;
		return t;
	};
	_proto.chatCtx3_i = function () {
		var t = new eui.Group();
		this.chatCtx3 = t;
		t.height = 100;
		t.horizontalCenter = 158;
		t.width = 200;
		t.y = 147.86;
		return t;
	};
	_proto.chatCtx1_i = function () {
		var t = new eui.Group();
		this.chatCtx1 = t;
		t.bottom = 244;
		t.height = 100;
		t.horizontalCenter = -436;
		t.width = 200;
		return t;
	};
	_proto.chatBtn_i = function () {
		var t = new eui.Image();
		this.chatBtn = t;
		t.anchorOffsetX = 40.91;
		t.anchorOffsetY = 37.88;
		t.right = 10;
		t.source = "chat_talk_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	return ERMJGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/hack/ERMJHackSkin.exml'] = window.ERMJHackSkin = (function (_super) {
	__extends(ERMJHackSkin, _super);
	function ERMJHackSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","tf0","tf1","tf2","tf3","tf4","tf5","tf6","tf7","tf8","tf9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","tf10","tf11","tf12","tf13","tf14","tf15","tf16","tf17","tf18","tf19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","tf20","tf21","tf22","tf23","tf24","tf25","tf26","tf27","tf28","tf29","chooseedCard","helpTf"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group4_i()];
	}
	var _proto = ERMJHackSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ERMJ_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 580;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 940;
		t.elementsContent = [this._Image2_i(),this.closeBtn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.chooseedCard_i(),this._Label1_i(),this.helpTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(34,48,21,175);
		t.source = "ERMJ_bg_hupai_png";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 29;
		t.source = "ERMJ_btn_guanbi_png";
		t.x = 900;
		t.y = 41.73;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 69;
		t.y = 96.43;
		t.elementsContent = [this.c0_i(),this.c1_i(),this.c2_i(),this.c3_i(),this.c4_i(),this.c5_i(),this.c6_i(),this.c7_i(),this.c8_i(),this.c9_i(),this.tf0_i(),this.tf1_i(),this.tf2_i(),this.tf3_i(),this.tf4_i(),this.tf5_i(),this.tf6_i(),this.tf7_i(),this.tf8_i(),this.tf9_i()];
		return t;
	};
	_proto.c0_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.c1_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 89;
		t.y = 0;
		return t;
	};
	_proto.c2_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 172;
		t.y = 0;
		return t;
	};
	_proto.c3_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c3 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 254;
		t.y = 0;
		return t;
	};
	_proto.c4_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c4 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 337;
		t.y = 0;
		return t;
	};
	_proto.c5_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c5 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto.c6_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c6 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 503;
		t.y = 0;
		return t;
	};
	_proto.c7_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c7 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 586;
		t.y = 3.03;
		return t;
	};
	_proto.c8_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c8 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 669;
		t.y = 3.03;
		return t;
	};
	_proto.c9_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c9 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 751.33;
		t.y = 3.03;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5b2601;
		t.x = 2.88;
		t.y = 82;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 86;
		t.y = 82;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 168;
		t.y = 82;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 250;
		t.y = 82;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 333;
		t.y = 82;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 415;
		t.y = 82;
		return t;
	};
	_proto.tf6_i = function () {
		var t = new eui.Label();
		this.tf6 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 498;
		t.y = 82;
		return t;
	};
	_proto.tf7_i = function () {
		var t = new eui.Label();
		this.tf7 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 580;
		t.y = 82;
		return t;
	};
	_proto.tf8_i = function () {
		var t = new eui.Label();
		this.tf8 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 662;
		t.y = 82;
		return t;
	};
	_proto.tf9_i = function () {
		var t = new eui.Label();
		this.tf9 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 744.21;
		t.y = 82;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 69;
		t.y = 221;
		t.elementsContent = [this.c10_i(),this.c11_i(),this.c12_i(),this.c13_i(),this.c14_i(),this.c15_i(),this.c16_i(),this.c17_i(),this.c18_i(),this.c19_i(),this.tf10_i(),this.tf11_i(),this.tf12_i(),this.tf13_i(),this.tf14_i(),this.tf15_i(),this.tf16_i(),this.tf17_i(),this.tf18_i(),this.tf19_i()];
		return t;
	};
	_proto.c10_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c10 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.c11_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c11 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 89;
		t.y = 0;
		return t;
	};
	_proto.c12_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c12 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 172;
		t.y = 0;
		return t;
	};
	_proto.c13_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c13 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 254;
		t.y = 0;
		return t;
	};
	_proto.c14_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c14 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 337;
		t.y = 0;
		return t;
	};
	_proto.c15_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c15 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto.c16_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c16 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 503;
		t.y = 0;
		return t;
	};
	_proto.c17_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c17 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 586;
		t.y = 3.03;
		return t;
	};
	_proto.c18_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c18 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 669;
		t.y = 3.03;
		return t;
	};
	_proto.c19_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c19 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 751.33;
		t.y = 3.03;
		return t;
	};
	_proto.tf10_i = function () {
		var t = new eui.Label();
		this.tf10 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 2.88;
		t.y = 82;
		return t;
	};
	_proto.tf11_i = function () {
		var t = new eui.Label();
		this.tf11 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 86;
		t.y = 82;
		return t;
	};
	_proto.tf12_i = function () {
		var t = new eui.Label();
		this.tf12 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 168;
		t.y = 82;
		return t;
	};
	_proto.tf13_i = function () {
		var t = new eui.Label();
		this.tf13 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 250;
		t.y = 82;
		return t;
	};
	_proto.tf14_i = function () {
		var t = new eui.Label();
		this.tf14 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 333;
		t.y = 82;
		return t;
	};
	_proto.tf15_i = function () {
		var t = new eui.Label();
		this.tf15 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 415;
		t.y = 82;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 498;
		t.y = 82;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 580;
		t.y = 82;
		return t;
	};
	_proto.tf18_i = function () {
		var t = new eui.Label();
		this.tf18 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 662;
		t.y = 82;
		return t;
	};
	_proto.tf19_i = function () {
		var t = new eui.Label();
		this.tf19 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 744.21;
		t.y = 82;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 69;
		t.y = 345.43;
		t.elementsContent = [this.c20_i(),this.c21_i(),this.c22_i(),this.c23_i(),this.c24_i(),this.c25_i(),this.c26_i(),this.c27_i(),this.c28_i(),this.c29_i(),this.tf20_i(),this.tf21_i(),this.tf22_i(),this.tf23_i(),this.tf24_i(),this.tf25_i(),this.tf26_i(),this.tf27_i(),this.tf28_i(),this.tf29_i()];
		return t;
	};
	_proto.c20_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c20 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.c21_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c21 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 89;
		t.y = 0;
		return t;
	};
	_proto.c22_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c22 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 172;
		t.y = 0;
		return t;
	};
	_proto.c23_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c23 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 254;
		t.y = 0;
		return t;
	};
	_proto.c24_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c24 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 337;
		t.y = 0;
		return t;
	};
	_proto.c25_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c25 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto.c26_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c26 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 503;
		t.y = 0;
		return t;
	};
	_proto.c27_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c27 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 586;
		t.y = 3.03;
		return t;
	};
	_proto.c28_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c28 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 669;
		t.y = 3.03;
		return t;
	};
	_proto.c29_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.c29 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 751.33;
		t.y = 3.03;
		return t;
	};
	_proto.tf20_i = function () {
		var t = new eui.Label();
		this.tf20 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 2.88;
		t.y = 82;
		return t;
	};
	_proto.tf21_i = function () {
		var t = new eui.Label();
		this.tf21 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 86;
		t.y = 82;
		return t;
	};
	_proto.tf22_i = function () {
		var t = new eui.Label();
		this.tf22 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 168;
		t.y = 82;
		return t;
	};
	_proto.tf23_i = function () {
		var t = new eui.Label();
		this.tf23 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 250;
		t.y = 82;
		return t;
	};
	_proto.tf24_i = function () {
		var t = new eui.Label();
		this.tf24 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 333;
		t.y = 82;
		return t;
	};
	_proto.tf25_i = function () {
		var t = new eui.Label();
		this.tf25 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 415;
		t.y = 82;
		return t;
	};
	_proto.tf26_i = function () {
		var t = new eui.Label();
		this.tf26 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 498;
		t.y = 82;
		return t;
	};
	_proto.tf27_i = function () {
		var t = new eui.Label();
		this.tf27 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 580;
		t.y = 82;
		return t;
	};
	_proto.tf28_i = function () {
		var t = new eui.Label();
		this.tf28 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 662;
		t.y = 82;
		return t;
	};
	_proto.tf29_i = function () {
		var t = new eui.Label();
		this.tf29 = t;
		t.size = 22;
		t.text = "剩4张";
		t.textColor = 0x5B2601;
		t.x = 744.21;
		t.y = 82;
		return t;
	};
	_proto.chooseedCard_i = function () {
		var t = new ERMJ.ERMJ_hand();
		this.chooseedCard = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "ERMJ_handSkin";
		t.x = 477;
		t.y = 474.09;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "选择下一张摸的牌";
		t.textColor = 0x5b2601;
		t.y = 43.73;
		return t;
	};
	_proto.helpTf_i = function () {
		var t = new eui.Label();
		this.helpTf = t;
		t.size = 40;
		t.text = "已经选中：";
		t.textColor = 0x5B2601;
		t.x = 268;
		t.y = 485.52;
		return t;
	};
	return ERMJHackSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/readme/ERMJReadMeSkin.exml'] = window.ERMJReadMeSkin = (function (_super) {
	__extends(ERMJReadMeSkin, _super);
	var ERMJReadMeSkin$Skin1 = 	(function (_super) {
		__extends(ERMJReadMeSkin$Skin1, _super);
		var ERMJReadMeSkin$Skin1$Skin2 = 		(function (_super) {
			__extends(ERMJReadMeSkin$Skin1$Skin2, _super);
			function ERMJReadMeSkin$Skin1$Skin2() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = ERMJReadMeSkin$Skin1$Skin2.prototype;

			_proto._Rect1_i = function () {
				var t = new eui.Rect();
				t.ellipseHeight = 15;
				t.ellipseWidth = 15;
				t.fillAlpha = 0.2;
				t.fillColor = 0xffffff;
				t.percentHeight = 100;
				t.width = 6;
				return t;
			};
			_proto.thumb_i = function () {
				var t = new eui.Rect();
				this.thumb = t;
				t.ellipseHeight = 15;
				t.ellipseWidth = 15;
				t.fillAlpha = 0.5;
				t.fillColor = 0xffffff;
				t.percentHeight = 50;
				t.width = 6;
				return t;
			};
			return ERMJReadMeSkin$Skin1$Skin2;
		})(eui.Skin);

		function ERMJReadMeSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = ERMJReadMeSkin$Skin1.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = -15;
			t.visible = true;
			t.skinName = ERMJReadMeSkin$Skin1$Skin2;
			return t;
		};
		return ERMJReadMeSkin$Skin1;
	})(eui.Skin);

	function ERMJReadMeSkin() {
		_super.call(this);
		this.skinParts = ["bg","btn0","btn1","txt0","txt1","ctxGrp","scl","grp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.grp_i()];
	}
	var _proto = ERMJReadMeSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ERMJ_alpha_mask_png";
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.bottom = 0;
		t.top = 0;
		t.width = 668;
		t.x = 666;
		t.elementsContent = [this._Image1_i(),this.btn0_i(),this.btn1_i(),this.txt0_i(),this.txt1_i(),this.scl_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(83,103,504,24);
		t.source = "ERMJ_rule_rulebg2_png";
		t.top = 0;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.height = 82;
		t.source = "ERMJ_rule_rulebt1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.height = 82;
		t.source = "ERMJ_rule_rulebt1_png";
		t.x = 332;
		t.y = 0;
		return t;
	};
	_proto.txt0_i = function () {
		var t = new eui.Image();
		this.txt0 = t;
		t.source = "ERMJ_rule_yxgz1_png";
		t.touchEnabled = false;
		t.x = 93;
		t.y = 24;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Image();
		this.txt1 = t;
		t.source = "ERMJ_rule_fan1_png";
		t.touchEnabled = false;
		t.x = 423;
		t.y = 23;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.top = 82;
		t.width = 668;
		t.x = 0;
		t.skinName = ERMJReadMeSkin$Skin1;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		return t;
	};
	return ERMJReadMeSkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/replay/ERMJReplaySkin.exml'] = window.ERMJReplaySkin = (function (_super) {
	__extends(ERMJReplaySkin, _super);
	function ERMJReplaySkin() {
		_super.call(this);
		this.skinParts = ["bg","spdBtn0","spdBtn1","spdBtn2","spdBtn3","bgmBtn","musicBtn","prevBtn","playBtn","nextBtn","progressTf","exitBtn","ctrlGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.ctrlGrp_i()];
	}
	var _proto = ERMJReplaySkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.ctrlGrp_i = function () {
		var t = new eui.Group();
		this.ctrlGrp = t;
		t.height = 178;
		t.left = 0;
		t.right = 0;
		t.y = 573;
		t.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this.exitBtn_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 145;
		t.horizontalCenter = 161;
		t.width = 386;
		t.y = 22;
		t.elementsContent = [this.spdBtn0_i(),this.spdBtn1_i(),this.spdBtn2_i(),this.spdBtn3_i(),this.bgmBtn_i(),this.musicBtn_i()];
		return t;
	};
	_proto.spdBtn0_i = function () {
		var t = new eui.Label();
		this.spdBtn0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 33.33;
		t.background = true;
		t.backgroundColor = 0x7a7a7a;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "0.5x";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 84.01;
		t.x = 40;
		t.y = 33.33;
		return t;
	};
	_proto.spdBtn1_i = function () {
		var t = new eui.Label();
		this.spdBtn1 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 30.67;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "1.0x";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 84.01;
		t.x = 140;
		t.y = 30.67;
		return t;
	};
	_proto.spdBtn2_i = function () {
		var t = new eui.Label();
		this.spdBtn2 = t;
		t.anchorOffsetX = 41.33;
		t.anchorOffsetY = 32;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "2.0x";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 84.01;
		t.x = 242.33;
		t.y = 32;
		return t;
	};
	_proto.spdBtn3_i = function () {
		var t = new eui.Label();
		this.spdBtn3 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 33.33;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "3.0x";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 84.01;
		t.x = 345.34;
		t.y = 33.33;
		return t;
	};
	_proto.bgmBtn_i = function () {
		var t = new eui.Label();
		this.bgmBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 33.33;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "音乐";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 84.01;
		t.x = 144;
		t.y = 114.31;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new eui.Label();
		this.musicBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 33.33;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "音效";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 84.01;
		t.x = 245;
		t.y = 114.31;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.horizontalCenter = -350;
		t.width = 460;
		t.y = 29;
		t.elementsContent = [this.prevBtn_i(),this.playBtn_i(),this.nextBtn_i(),this.progressTf_i()];
		return t;
	};
	_proto.prevBtn_i = function () {
		var t = new eui.Label();
		this.prevBtn = t;
		t.anchorOffsetX = 69.33;
		t.anchorOffsetY = 30.67;
		t.background = true;
		t.backgroundColor = 0x2b2b2b;
		t.border = true;
		t.borderColor = 0xa8a8a8;
		t.height = 63.33;
		t.text = "<上一帧";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 142.67;
		t.x = 69.33;
		t.y = 86.64;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new eui.Label();
		this.playBtn = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 32;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "播放";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 142.67;
		t.x = 231.33;
		t.y = 87.97;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Label();
		this.nextBtn = t;
		t.anchorOffsetX = 70.67;
		t.anchorOffsetY = 32;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.text = "下一帧>";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 142.67;
		t.x = 387.35;
		t.y = 87.97;
		return t;
	};
	_proto.progressTf_i = function () {
		var t = new eui.Label();
		this.progressTf = t;
		t.horizontalCenter = 0;
		t.text = "进度:1/10000";
		t.y = 0;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Label();
		this.exitBtn = t;
		t.anchorOffsetX = 69.33;
		t.anchorOffsetY = 34.67;
		t.background = true;
		t.backgroundColor = 0x2B2B2B;
		t.border = true;
		t.borderColor = 0xA8A8A8;
		t.height = 63.33;
		t.horizontalCenter = 517.5;
		t.text = "退出回放";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 142.67;
		t.y = 91.67;
		return t;
	};
	return ERMJReplaySkin;
})(eui.Skin);generateEUI.paths['resource/pages/ERMJ/result/ERMJResultSkin.exml'] = window.ERMJResultSkin = (function (_super) {
	__extends(ERMJResultSkin, _super);
	function ERMJResultSkin() {
		_super.call(this);
		this.skinParts = ["bg","ctxBg","shoupai1","chipenggang1","allFanTf","totalTf","exitBtn","timeTf","nextBtn","fanTf0","fanTf1","fanTf2","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.uiGrp_i()];
	}
	var _proto = ERMJResultSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ERMJ_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1172;
		t.elementsContent = [this.ctxBg_i(),this.shoupai1_i(),this.chipenggang1_i(),this.allFanTf_i(),this.totalTf_i(),this.exitBtn_i(),this.nextBtn_i(),this.fanTf0_i(),this.fanTf1_i(),this.fanTf2_i()];
		return t;
	};
	_proto.ctxBg_i = function () {
		var t = new eui.Image();
		this.ctxBg = t;
		t.source = "ERMJ_result_win_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shoupai1_i = function () {
		var t = new ERMJ.ERMJ_Shoupai();
		this.shoupai1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "ERMJ_Shoupai_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 124;
		t.y = 430.3;
		return t;
	};
	_proto.chipenggang1_i = function () {
		var t = new ERMJ.ERMJ_Chipenggang();
		this.chipenggang1 = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "ERMJ_Chipenggang_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 65;
		t.y = 431;
		return t;
	};
	_proto.allFanTf_i = function () {
		var t = new eui.BitmapLabel();
		this.allFanTf = t;
		t.anchorOffsetX = 0;
		t.font = "ERMJ_time_num_fnt";
		t.text = "10";
		t.textAlign = "center";
		t.width = 65;
		t.x = 225;
		t.y = 191;
		return t;
	};
	_proto.totalTf_i = function () {
		var t = new eui.BitmapLabel();
		this.totalTf = t;
		t.anchorOffsetX = 0;
		t.font = "ERMJ_result_num_fnt";
		t.text = "+0.11";
		t.x = 927;
		t.y = 191;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Image();
		this.exitBtn = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 43;
		t.source = "ERMJ_result_btn_swich_png";
		t.x = 366;
		t.y = 626;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Group();
		this.nextBtn = t;
		t.anchorOffsetX = 124;
		t.anchorOffsetY = 41;
		t.x = 801;
		t.y = 624;
		t.elementsContent = [this._Image1_i(),this.timeTf_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ERMJ_result_btn_continiu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.timeTf_i = function () {
		var t = new eui.BitmapLabel();
		this.timeTf = t;
		t.font = "ERMJ_time_num_fnt";
		t.text = "10";
		t.touchEnabled = false;
		t.x = 181;
		t.y = 21;
		return t;
	};
	_proto.fanTf0_i = function () {
		var t = new eui.Label();
		this.fanTf0 = t;
		t.lineSpacing = 20;
		t.text = "清一色 1番";
		t.x = 133;
		t.y = 265;
		return t;
	};
	_proto.fanTf1_i = function () {
		var t = new eui.Label();
		this.fanTf1 = t;
		t.lineSpacing = 20;
		t.text = "清一色 1番";
		t.x = 485;
		t.y = 265;
		return t;
	};
	_proto.fanTf2_i = function () {
		var t = new eui.Label();
		this.fanTf2 = t;
		t.lineSpacing = 20;
		t.text = "清一色 1番";
		t.x = 806;
		t.y = 265;
		return t;
	};
	return ERMJResultSkin;
})(eui.Skin);