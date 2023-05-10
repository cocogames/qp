
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
                generateEUI.skins = {};generateEUI.paths['resource/pages/PGP/alert/PGPXYButtonSkin.exml'] = window.PGPXYButtonSkin = (function (_super) {
	__extends(PGPXYButtonSkin, _super);
	function PGPXYButtonSkin() {
		_super.call(this);
		this.skinParts = ["bg","tf"];
		
		this.height = 66;
		this.width = 166;
		this.elementsContent = [this.bg_i(),this.tf_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelSize"],[0],this.tf,"size");
		eui.Binding.$bindProperties(this, ["hostComponent.a_label"],[0],this.tf,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelColor"],[0],this.tf,"textColor");
	}
	var _proto = PGPXYButtonSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,126,28);
		t.source = "PGP_btn_tb2_png";
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
	return PGPXYButtonSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/alert/PGPAlertSkin.exml'] = window.PGPAlertSkin = (function (_super) {
	__extends(PGPAlertSkin, _super);
	function PGPAlertSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","tf","okBtn","cancelBtn","btnGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = PGPAlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "PGP_black_mask_png";
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
		t.source = "PGP_bg_history_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "PGP_title_prompt_png";
		t.x = 277;
		t.y = 8;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 27;
		t.source = "PGP_btn_guanbi_png";
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
		var t = new PGP.XYButton();
		this.okBtn = t;
		t.a_label = "确认";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.height = 69;
		t.skinName = "PGPXYButtonSkin";
		t.width = 166;
		t.x = 248;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new PGP.XYButton();
		this.cancelBtn = t;
		t.a_label = "取消";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.height = 69;
		t.skinName = "PGPXYButtonSkin";
		t.width = 166;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGPAlertSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_handSkin.exml'] = window.PGP_handSkin = (function (_super) {
	__extends(PGP_handSkin, _super);
	function PGP_handSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 113;
		this.width = 81;
		this.elementsContent = [this._Image1_i(),this.bg_i(),this.pai_i()];
	}
	var _proto = PGP_handSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 153;
		t.left = 0;
		t.right = 0;
		t.source = "PGP_alpha_mask_png";
		t.width = 81;
		t.y = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "PGP_C3_png";
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.source = "PGP_card_6_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	return PGP_handSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_ChiChoosePanelSkin.exml'] = window.PGP_ChiChoosePanelSkin = (function (_super) {
	__extends(PGP_ChiChoosePanelSkin, _super);
	function PGP_ChiChoosePanelSkin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","light0","grp0","card3","card4","card5","light1","grp1","card6","card7","card8","light2","grp2"];
		
		this.height = 180;
		this.width = 580;
		this.elementsContent = [this._Image1_i(),this.grp0_i(),this.grp1_i(),this.grp2_i()];
	}
	var _proto = PGP_ChiChoosePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(33,47,22,144);
		t.source = "PGP_bg_hupai_png";
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
		t.source = "PGP_bg_hupai2_png";
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new PGP.PGP_hand();
		this.card0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 11.8;
		t.y = 18.2;
		return t;
	};
	_proto.card1_i = function () {
		var t = new PGP.PGP_hand();
		this.card1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 64.8;
		t.y = 18.2;
		return t;
	};
	_proto.card2_i = function () {
		var t = new PGP.PGP_hand();
		this.card2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
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
		t.source = "PGP_light_png";
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
		t.source = "PGP_bg_hupai2_png";
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card3_i = function () {
		var t = new PGP.PGP_hand();
		this.card3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 11.8;
		t.y = 18.2;
		return t;
	};
	_proto.card4_i = function () {
		var t = new PGP.PGP_hand();
		this.card4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 64.8;
		t.y = 18.2;
		return t;
	};
	_proto.card5_i = function () {
		var t = new PGP.PGP_hand();
		this.card5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
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
		t.source = "PGP_light_png";
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
		t.source = "PGP_bg_hupai2_png";
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card6_i = function () {
		var t = new PGP.PGP_hand();
		this.card6 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 11.8;
		t.y = 18.2;
		return t;
	};
	_proto.card7_i = function () {
		var t = new PGP.PGP_hand();
		this.card7 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 64.8;
		t.y = 18.2;
		return t;
	};
	_proto.card8_i = function () {
		var t = new PGP.PGP_hand();
		this.card8 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
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
		t.source = "PGP_light_png";
		t.width = 40;
		t.x = 65;
		t.y = 18;
		return t;
	};
	return PGP_ChiChoosePanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_ControllPanelSkin.exml'] = window.PGP_ControllPanelSkin = (function (_super) {
	__extends(PGP_ControllPanelSkin, _super);
	function PGP_ControllPanelSkin() {
		_super.call(this);
		this.skinParts = ["chi","peng","gang","ting","hu","pass"];
		
		this.height = 260;
		this.width = 1271;
		this.elementsContent = [this.chi_i(),this.peng_i(),this.gang_i(),this.ting_i(),this.hu_i(),this.pass_i()];
	}
	var _proto = PGP_ControllPanelSkin.prototype;

	_proto.chi_i = function () {
		var t = new eui.Image();
		this.chi = t;
		t.anchorOffsetX = 98;
		t.anchorOffsetY = 74;
		t.source = "PGP_btn_chi_png";
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
		t.source = "PGP_btn_peng_png";
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
		t.source = "PGP_btn_gang_png";
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
		t.source = "PGP_btn_ting_png";
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
		t.source = "PGP_btn_hu_png";
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
		t.source = "PGP_btn_guo_png";
		t.x = 1151.91;
		t.y = 134;
		return t;
	};
	return PGP_ControllPanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_GameTimerSkin.exml'] = window.PGP_GameTimerSkin = (function (_super) {
	__extends(PGP_GameTimerSkin, _super);
	function PGP_GameTimerSkin() {
		_super.call(this);
		this.skinParts = ["light_0","light_1","light_2","light_3","light_d_0","light_d_1","light_d_2","light_d_3","dir_0","dir_1","dir_2","dir_3","timeTf","gif","point_0","point_1","readyImage","readyTf"];
		
		this.height = 99;
		this.width = 158;
		this.elementsContent = [this._Image1_i(),this.light_0_i(),this.light_1_i(),this.light_2_i(),this.light_3_i(),this.light_d_0_i(),this.light_d_1_i(),this.light_d_2_i(),this.light_d_3_i(),this.dir_0_i(),this.dir_1_i(),this.dir_2_i(),this.dir_3_i(),this.timeTf_i(),this.gif_i(),this.point_0_i(),this.point_1_i(),this.readyImage_i(),this.readyTf_i()];
	}
	var _proto = PGP_GameTimerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "PGP_bt_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.light_0_i = function () {
		var t = new eui.Image();
		this.light_0 = t;
		t.source = "PGP_light_left_png";
		t.x = -97.09;
		t.y = -13.3;
		return t;
	};
	_proto.light_1_i = function () {
		var t = new eui.Image();
		this.light_1 = t;
		t.source = "PGP_light_bottom_png";
		t.x = -43.54;
		t.y = 96.81;
		return t;
	};
	_proto.light_2_i = function () {
		var t = new eui.Image();
		this.light_2 = t;
		t.source = "PGP_light_right_png";
		t.x = 152.92;
		t.y = -13.33;
		return t;
	};
	_proto.light_3_i = function () {
		var t = new eui.Image();
		this.light_3 = t;
		t.source = "PGP_light_top_png";
		t.x = -21.04;
		t.y = -69.07;
		return t;
	};
	_proto.light_d_0_i = function () {
		var t = new eui.Image();
		this.light_d_0 = t;
		t.source = "PGP_b_02_png";
		t.x = 3.91;
		t.y = 12.7;
		return t;
	};
	_proto.light_d_1_i = function () {
		var t = new eui.Image();
		this.light_d_1 = t;
		t.source = "PGP_b_01_png";
		t.x = 22.46;
		t.y = 64.81;
		return t;
	};
	_proto.light_d_2_i = function () {
		var t = new eui.Image();
		this.light_d_2 = t;
		t.source = "PGP_b_04_png";
		t.x = 116.92;
		t.y = 14.67;
		return t;
	};
	_proto.light_d_3_i = function () {
		var t = new eui.Image();
		this.light_d_3 = t;
		t.source = "PGP_b_03_png";
		t.x = 24.96;
		t.y = 5.93;
		return t;
	};
	_proto.dir_0_i = function () {
		var t = new eui.Image();
		this.dir_0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_north_light_png";
		t.x = 13.19;
		t.y = 36.17;
		return t;
	};
	_proto.dir_1_i = function () {
		var t = new eui.Image();
		this.dir_1 = t;
		t.source = "PGP_east_light_png";
		t.x = 66.71;
		t.y = 61.65;
		return t;
	};
	_proto.dir_2_i = function () {
		var t = new eui.Image();
		this.dir_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_south_light_png";
		t.x = 119.44;
		t.y = 31.82;
		return t;
	};
	_proto.dir_3_i = function () {
		var t = new eui.Image();
		this.dir_3 = t;
		t.scaleX = 0.7;
		t.scaleY = -0.7;
		t.source = "PGP_west_light_png";
		t.x = 70.89;
		t.y = 26.77;
		return t;
	};
	_proto.timeTf_i = function () {
		var t = new eui.BitmapLabel();
		this.timeTf = t;
		t.font = "PGP_time_fnt";
		t.horizontalCenter = 0;
		t.text = "10";
		t.y = 33;
		return t;
	};
	_proto.gif_i = function () {
		var t = new eui.Image();
		this.gif = t;
		t.source = "PGP_sezi_0_png";
		t.x = 27.7;
		t.y = 13.78;
		return t;
	};
	_proto.point_0_i = function () {
		var t = new eui.Image();
		this.point_0 = t;
		t.source = "PGP_sezi_value1_png";
		t.x = 48.51;
		t.y = 32.64;
		return t;
	};
	_proto.point_1_i = function () {
		var t = new eui.Image();
		this.point_1 = t;
		t.source = "PGP_sezi_value2_png";
		t.x = 91.88;
		t.y = 29.96;
		return t;
	};
	_proto.readyImage_i = function () {
		var t = new eui.Image();
		this.readyImage = t;
		t.scale9Grid = new egret.Rectangle(18,5,36,31);
		t.source = "PGP_sheng_bg_png";
		t.width = 179;
		t.x = -8;
		t.y = 101.59;
		return t;
	};
	_proto.readyTf_i = function () {
		var t = new eui.Label();
		this.readyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.size = 22;
		t.text = "123244";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 300;
		t.x = -74;
		t.y = 107.46;
		return t;
	};
	return PGP_GameTimerSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_GangChoosePanelSkin.exml'] = window.PGP_GangChoosePanelSkin = (function (_super) {
	__extends(PGP_GangChoosePanelSkin, _super);
	function PGP_GangChoosePanelSkin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","grp0","card4","card5","card6","card7","grp1","card8","card9","card10","card11","grp2"];
		
		this.height = 194;
		this.width = 839;
		this.elementsContent = [this._Image1_i(),this.grp0_i(),this.grp1_i(),this.grp2_i()];
	}
	var _proto = PGP_GangChoosePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(33,47,22,144);
		t.source = "PGP_bg_hupai_png";
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
		t.source = "PGP_bg_hupai2_png";
		t.width = 231;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new PGP.PGP_hand();
		this.card0 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 13;
		t.y = 24;
		return t;
	};
	_proto.card1_i = function () {
		var t = new PGP.PGP_hand();
		this.card1 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 69;
		t.y = 24;
		return t;
	};
	_proto.card2_i = function () {
		var t = new PGP.PGP_hand();
		this.card2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto.card3_i = function () {
		var t = new PGP.PGP_hand();
		this.card3 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
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
		t.source = "PGP_bg_hupai2_png";
		t.width = 231;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card4_i = function () {
		var t = new PGP.PGP_hand();
		this.card4 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 13;
		t.y = 24;
		return t;
	};
	_proto.card5_i = function () {
		var t = new PGP.PGP_hand();
		this.card5 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 69;
		t.y = 24;
		return t;
	};
	_proto.card6_i = function () {
		var t = new PGP.PGP_hand();
		this.card6 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto.card7_i = function () {
		var t = new PGP.PGP_hand();
		this.card7 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
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
		t.source = "PGP_bg_hupai2_png";
		t.width = 231;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card8_i = function () {
		var t = new PGP.PGP_hand();
		this.card8 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 13;
		t.y = 24;
		return t;
	};
	_proto.card9_i = function () {
		var t = new PGP.PGP_hand();
		this.card9 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 69;
		t.y = 24;
		return t;
	};
	_proto.card10_i = function () {
		var t = new PGP.PGP_hand();
		this.card10 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 124;
		t.y = 24;
		return t;
	};
	_proto.card11_i = function () {
		var t = new PGP.PGP_hand();
		this.card11 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 179;
		t.y = 24;
		return t;
	};
	return PGP_GangChoosePanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_HeadSkin.exml'] = window.PGP_HeadSkin = (function (_super) {
	__extends(PGP_HeadSkin, _super);
	function PGP_HeadSkin() {
		_super.call(this);
		this.skinParts = ["bg1","bg","headImg"];
		
		this.height = 103;
		this.width = 103;
		this.elementsContent = [this.bg1_i(),this.bg_i(),this.headImg_i()];
	}
	var _proto = PGP_HeadSkin.prototype;

	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.source = "PGP_head_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 90;
		t.source = "PGP_head_bg_png";
		t.width = 90;
		t.x = 7;
		t.y = 7;
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "PGP_head_png";
		t.width = 90;
		t.x = 7;
		t.y = 7;
		return t;
	};
	return PGP_HeadSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_HuItemSkin.exml'] = window.PGP_HuItemSkin = (function (_super) {
	__extends(PGP_HuItemSkin, _super);
	function PGP_HuItemSkin() {
		_super.call(this);
		this.skinParts = ["card","tf"];
		
		this.height = 80;
		this.width = 129;
		this.elementsContent = [this._Image1_i(),this.card_i(),this.tf_i()];
	}
	var _proto = PGP_HuItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(14,26,12,90);
		t.source = "PGP_bg_hupai2_png";
		t.top = 0;
		return t;
	};
	_proto.card_i = function () {
		var t = new PGP.PGP_hand();
		this.card = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_handSkin";
		t.x = 6;
		t.y = 8;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 10;
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x7e583c;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 72;
		t.x = 54;
		return t;
	};
	return PGP_HuItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_HuPanelSkin.exml'] = window.PGP_HuPanelSkin = (function (_super) {
	__extends(PGP_HuPanelSkin, _super);
	function PGP_HuPanelSkin() {
		_super.call(this);
		this.skinParts = ["huImg","allHuImg","tf"];
		
		this.height = 300;
		this.width = 800;
		this.elementsContent = [this._Image1_i(),this.huImg_i(),this.allHuImg_i(),this.tf_i()];
	}
	var _proto = PGP_HuPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(34,32,22,198);
		t.source = "PGP_bg_hupai_png";
		t.top = 0;
		return t;
	};
	_proto.huImg_i = function () {
		var t = new eui.Image();
		this.huImg = t;
		t.source = "PGP_img_hu2_png";
		t.x = 35;
		t.y = 35;
		return t;
	};
	_proto.allHuImg_i = function () {
		var t = new eui.Image();
		this.allHuImg = t;
		t.horizontalCenter = 0;
		t.source = "PGP_img_jzh_png";
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
	return PGP_HuPanelSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_InfoUISkin.exml'] = window.PGP_InfoUISkin = (function (_super) {
	__extends(PGP_InfoUISkin, _super);
	function PGP_InfoUISkin() {
		_super.call(this);
		this.skinParts = ["money","difenTf","horseNum","leftCardImage","tf_0_i18n","leftCardsTf","tf_1_i18n"];
		
		this.height = 68;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = PGP_InfoUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.source = "PGP_bottom_ui_png";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -287.5;
		t.verticalCenter = 0.5;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.money_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "PGP_gold_bottom_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "PGP_gold_s_png";
		t.x = 8.67;
		t.y = 5;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "12345667";
		t.textColor = 0xfbe489;
		t.verticalCenter = 2.5;
		t.x = 46.75999999999999;
		t.y = 2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.difenTf_i(),this.horseNum_i()];
		return t;
	};
	_proto.difenTf_i = function () {
		var t = new eui.Label();
		this.difenTf = t;
		t.size = 24;
		t.text = "底分:";
		t.textColor = 0xfbe489;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.horseNum_i = function () {
		var t = new eui.Label();
		this.horseNum = t;
		t.size = 24;
		t.text = "奖马数:0";
		t.textColor = 0xfbe489;
		t.x = 175.04;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.right = 120;
		t.verticalCenter = 0;
		t.elementsContent = [this.leftCardImage_i(),this.tf_0_i18n_i(),this.leftCardsTf_i(),this.tf_1_i18n_i()];
		return t;
	};
	_proto.leftCardImage_i = function () {
		var t = new eui.Image();
		this.leftCardImage = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_sheng_card_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.text = "剩牌:";
		t.textColor = 0xfbe489;
		t.x = 38.03;
		t.y = 1;
		return t;
	};
	_proto.leftCardsTf_i = function () {
		var t = new eui.BitmapLabel();
		this.leftCardsTf = t;
		t.font = "PGP_font_rankMoney_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "136";
		t.x = 113.68;
		t.y = 4;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.text = "张";
		t.textColor = 0xfbe489;
		t.x = 168.03;
		t.y = 1;
		return t;
	};
	return PGP_InfoUISkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_MenuSkin.exml'] = window.PGP_MenuSkin = (function (_super) {
	__extends(PGP_MenuSkin, _super);
	function PGP_MenuSkin() {
		_super.call(this);
		this.skinParts = ["image_ting"];
		
		this.elementsContent = [this.image_ting_i()];
	}
	var _proto = PGP_MenuSkin.prototype;

	_proto.image_ting_i = function () {
		var t = new eui.Image();
		this.image_ting = t;
		t.source = "PGP_image_ting_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_MenuSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_OffSetSkin.exml'] = window.PGP_OffSetSkin = (function (_super) {
	__extends(PGP_OffSetSkin, _super);
	function PGP_OffSetSkin() {
		_super.call(this);
		this.skinParts = ["scoreInfo"];
		
		this.elementsContent = [this.scoreInfo_i()];
	}
	var _proto = PGP_OffSetSkin.prototype;

	_proto.scoreInfo_i = function () {
		var t = new eui.BitmapLabel();
		this.scoreInfo = t;
		t.font = "PGP_lose_fnt";
		t.text = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_OffSetSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_PlayerHeadSkin.exml'] = window.PGP_PlayerHeadSkin = (function (_super) {
	__extends(PGP_PlayerHeadSkin, _super);
	function PGP_PlayerHeadSkin() {
		_super.call(this);
		this.skinParts = ["head","nickTf","coinTf","dealer"];
		
		this.height = 149;
		this.width = 275;
		this.elementsContent = [this._Rect1_i(),this.head_i(),this.nickTf_i(),this._Image1_i(),this.coinTf_i(),this.dealer_i()];
	}
	var _proto = PGP_PlayerHeadSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillAlpha = 0.7;
		t.height = 54;
		t.width = 162;
		t.x = 94;
		t.y = 56;
		return t;
	};
	_proto.head_i = function () {
		var t = new PGP.PGP_Head();
		this.head = t;
		t.height = 100;
		t.skinName = "PGP_HeadSkin";
		t.width = 100;
		t.x = 9;
		t.y = 27.4;
		return t;
	};
	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.horizontalCenter = 47.5;
		t.multiline = false;
		t.size = 19;
		t.text = "1233242";
		t.textAlign = "center";
		t.y = 62;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "PGP_gold_s_png";
		t.x = 138;
		t.y = 90;
		return t;
	};
	_proto.coinTf_i = function () {
		var t = new eui.Label();
		this.coinTf = t;
		t.left = 164;
		t.size = 18;
		t.text = "1234567";
		t.textAlign = "center";
		t.textColor = 0xfbe489;
		t.verticalAlign = "middle";
		t.y = 91;
		return t;
	};
	_proto.dealer_i = function () {
		var t = new eui.Image();
		this.dealer = t;
		t.source = "PGP_banker_png";
		t.x = 64;
		t.y = 92;
		return t;
	};
	return PGP_PlayerHeadSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_PlayerHeadSkin1.exml'] = window.PGP_PlayerHeadSkin1 = (function (_super) {
	__extends(PGP_PlayerHeadSkin1, _super);
	function PGP_PlayerHeadSkin1() {
		_super.call(this);
		this.skinParts = ["head","nickTf","coinTf","dealer"];
		
		this.height = 149;
		this.width = 275;
		this.elementsContent = [this._Rect1_i(),this.head_i(),this.nickTf_i(),this._Image1_i(),this.coinTf_i(),this.dealer_i()];
	}
	var _proto = PGP_PlayerHeadSkin1.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 15;
		t.ellipseWidth = 15;
		t.fillAlpha = 0.7;
		t.height = 54;
		t.width = 162;
		t.x = 16;
		t.y = 56;
		return t;
	};
	_proto.head_i = function () {
		var t = new PGP.PGP_Head();
		this.head = t;
		t.height = 100;
		t.skinName = "PGP_HeadSkin";
		t.width = 100;
		t.x = 166;
		t.y = 27.4;
		return t;
	};
	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.horizontalCenter = -40;
		t.multiline = false;
		t.size = 19;
		t.text = "1233242342242422";
		t.textAlign = "center";
		t.y = 62;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "PGP_gold_s_png";
		t.x = 49;
		t.y = 90;
		return t;
	};
	_proto.coinTf_i = function () {
		var t = new eui.Label();
		this.coinTf = t;
		t.left = 75;
		t.size = 18;
		t.text = "1234563";
		t.textAlign = "center";
		t.textColor = 0xfbe489;
		t.verticalAlign = "middle";
		t.y = 91;
		return t;
	};
	_proto.dealer_i = function () {
		var t = new eui.Image();
		this.dealer = t;
		t.source = "PGP_banker_png";
		t.x = 221;
		t.y = 92;
		return t;
	};
	return PGP_PlayerHeadSkin1;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_PlayerHeadSkin2.exml'] = window.PGP_PlayerHeadSkin2 = (function (_super) {
	__extends(PGP_PlayerHeadSkin2, _super);
	function PGP_PlayerHeadSkin2() {
		_super.call(this);
		this.skinParts = ["head","nickTf","dealer"];
		
		this.width = 270;
		this.elementsContent = [this.head_i(),this.nickTf_i(),this.dealer_i()];
	}
	var _proto = PGP_PlayerHeadSkin2.prototype;

	_proto.head_i = function () {
		var t = new PGP.PGP_Head();
		this.head = t;
		t.height = 100;
		t.skinName = "PGP_HeadSkin";
		t.width = 100;
		t.x = 9;
		t.y = 27.4;
		return t;
	};
	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.left = 135;
		t.multiline = false;
		t.size = 19;
		t.text = "12332";
		t.textAlign = "right";
		t.y = 104;
		return t;
	};
	_proto.dealer_i = function () {
		var t = new eui.Image();
		this.dealer = t;
		t.source = "PGP_banker_png";
		t.x = 64;
		t.y = 92;
		return t;
	};
	return PGP_PlayerHeadSkin2;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_PlayerReadySkin.exml'] = window.PGP_PlayerReadySkin = (function (_super) {
	__extends(PGP_PlayerReadySkin, _super);
	function PGP_PlayerReadySkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = PGP_PlayerReadySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "PGP_game_ok_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_PlayerReadySkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_HandHorseCardSkin.exml'] = window.PGP_HandHorseCardSkin = (function (_super) {
	__extends(PGP_HandHorseCardSkin, _super);
	function PGP_HandHorseCardSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai","grp","icon"];
		
		this.elementsContent = [this.grp_i(),this.icon_i()];
	}
	var _proto = PGP_HandHorseCardSkin.prototype;

	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.x = 41;
		t.y = 57;
		t.elementsContent = [this._Image1_i(),this.bg_i(),this.pai_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "PGP_alpha_mask_png";
		t.width = 67;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "PGP_C_result_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.source = "PGP_card_6_png";
		t.x = -5;
		t.y = -23;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 51;
		t.height = 102;
		t.source = "PGP_changeCard_png";
		t.visible = false;
		t.width = 74;
		t.x = 35;
		t.y = 49;
		return t;
	};
	return PGP_HandHorseCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_ShowHorseSkin.exml'] = window.PGP_ShowHorseSkin = (function (_super) {
	__extends(PGP_ShowHorseSkin, _super);
	function PGP_ShowHorseSkin() {
		_super.call(this);
		this.skinParts = ["posInfoTf","hand0","hand1","hand2","hand3","hand4","hand5","hand6","hand7","hand8","hand9","horseCard0","horseCard1","horseCard2","horseCard3","horseCard4","conCon","info0","info1","info2"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = PGP_ShowHorseSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "PGP_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 20;
		t.elementsContent = [this._Image2_i(),this.posInfoTf_i(),this.hand0_i(),this.hand1_i(),this.hand2_i(),this.hand3_i(),this.hand4_i(),this.hand5_i(),this.hand6_i(),this.hand7_i(),this.hand8_i(),this.hand9_i(),this.conCon_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 462;
		t.scale9Grid = new egret.Rectangle(36,32,25,198);
		t.source = "PGP_bg_hupai_png";
		t.width = 844;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.posInfoTf_i = function () {
		var t = new eui.Label();
		this.posInfoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.text = "东位:";
		t.textAlign = "center";
		t.textColor = 0xe01111;
		t.verticalAlign = "middle";
		t.width = 502;
		t.y = 10;
		return t;
	};
	_proto.hand0_i = function () {
		var t = new PGP.PGP_hand();
		this.hand0 = t;
		t.skinName = "PGP_handSkin";
		t.x = 28;
		t.y = 76;
		return t;
	};
	_proto.hand1_i = function () {
		var t = new PGP.PGP_hand();
		this.hand1 = t;
		t.skinName = "PGP_handSkin";
		t.x = 106.89;
		t.y = 76;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new PGP.PGP_hand();
		this.hand2 = t;
		t.skinName = "PGP_handSkin";
		t.x = 185.78;
		t.y = 76;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new PGP.PGP_hand();
		this.hand3 = t;
		t.skinName = "PGP_handSkin";
		t.x = 264.67;
		t.y = 76;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new PGP.PGP_hand();
		this.hand4 = t;
		t.skinName = "PGP_handSkin";
		t.x = 343.56;
		t.y = 76;
		return t;
	};
	_proto.hand5_i = function () {
		var t = new PGP.PGP_hand();
		this.hand5 = t;
		t.skinName = "PGP_handSkin";
		t.x = 422.44;
		t.y = 76;
		return t;
	};
	_proto.hand6_i = function () {
		var t = new PGP.PGP_hand();
		this.hand6 = t;
		t.skinName = "PGP_handSkin";
		t.x = 501.33;
		t.y = 76;
		return t;
	};
	_proto.hand7_i = function () {
		var t = new PGP.PGP_hand();
		this.hand7 = t;
		t.skinName = "PGP_handSkin";
		t.x = 580.22;
		t.y = 76;
		return t;
	};
	_proto.hand8_i = function () {
		var t = new PGP.PGP_hand();
		this.hand8 = t;
		t.skinName = "PGP_handSkin";
		t.x = 659.11;
		t.y = 76;
		return t;
	};
	_proto.hand9_i = function () {
		var t = new PGP.PGP_hand();
		this.hand9 = t;
		t.skinName = "PGP_handSkin";
		t.x = 738;
		t.y = 76;
		return t;
	};
	_proto.conCon_i = function () {
		var t = new eui.Group();
		this.conCon = t;
		t.horizontalCenter = 0;
		t.y = 317;
		t.elementsContent = [this.horseCard0_i(),this.horseCard1_i(),this.horseCard2_i(),this.horseCard3_i(),this.horseCard4_i()];
		return t;
	};
	_proto.horseCard0_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard0 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 42;
		t.y = 57;
		return t;
	};
	_proto.horseCard1_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard1 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 132;
		t.y = 57;
		return t;
	};
	_proto.horseCard2_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard2 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 222;
		t.y = 57;
		return t;
	};
	_proto.horseCard3_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard3 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 311;
		t.y = 57;
		return t;
	};
	_proto.horseCard4_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard4 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 400;
		t.y = 57;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 160;
		t.height = 42;
		t.horizontalCenter = 0;
		t.width = 1322;
		t.elementsContent = [this.info0_i(),this.info1_i(),this.info2_i()];
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 25;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 378;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.info1_i = function () {
		var t = new eui.Label();
		this.info1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 25;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 442;
		t.x = 418;
		t.y = 0;
		return t;
	};
	_proto.info2_i = function () {
		var t = new eui.Label();
		this.info2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 25;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 394;
		t.x = 918;
		t.y = 0;
		return t;
	};
	return PGP_ShowHorseSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/componet/PGP_TouchCardSkin.exml'] = window.PGP_TouchCardSkin = (function (_super) {
	__extends(PGP_TouchCardSkin, _super);
	function PGP_TouchCardSkin() {
		_super.call(this);
		this.skinParts = ["finger0","handUI","finger1"];
		
		this.height = 449;
		this.width = 311;
		this.elementsContent = [this.finger0_i(),this.handUI_i(),this.finger1_i()];
	}
	var _proto = PGP_TouchCardSkin.prototype;

	_proto.finger0_i = function () {
		var t = new eui.Image();
		this.finger0 = t;
		t.source = "PGP_hand_ui0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.handUI_i = function () {
		var t = new PGP.PGP_hand();
		this.handUI = t;
		t.skinName = "PGP_handSkin";
		t.x = 62.39;
		t.y = 36.18;
		return t;
	};
	_proto.finger1_i = function () {
		var t = new eui.Image();
		this.finger1 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 172;
		t.rotation = 0;
		t.source = "PGP_hand_ui1_png";
		t.x = 128.91;
		t.y = 222.86;
		return t;
	};
	return PGP_TouchCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_liang_0Skin.exml'] = window.PGP_liang_0Skin = (function (_super) {
	__extends(PGP_liang_0Skin, _super);
	function PGP_liang_0Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 38;
		this.width = 52;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = PGP_liang_0Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "PGP_j_0_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 26.77;
		t.y = 10.85;
		t.elementsContent = [this.pai_i()];
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38.5;
		t.anchorOffsetY = 53;
		t.rotation = 91;
		t.scaleX = 0.3;
		t.scaleY = 0.35;
		t.source = "PGP_card_8_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_liang_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_chi_0Skin.exml'] = window.PGP_chi_0Skin = (function (_super) {
	__extends(PGP_chi_0Skin, _super);
	function PGP_chi_0Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3"];
		
		this.height = 80;
		this.width = 66;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i()];
	}
	var _proto = PGP_chi_0Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_0Skin";
		t.x = 14;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_0Skin";
		t.x = 8.83;
		t.y = 20;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_0Skin";
		t.x = 3.66;
		t.y = 40.35;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_0Skin";
		t.x = 4.32;
		t.y = 4.33;
		return t;
	};
	return PGP_chi_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_liang_1Skin.exml'] = window.PGP_liang_1Skin = (function (_super) {
	__extends(PGP_liang_1Skin, _super);
	function PGP_liang_1Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 66;
		this.width = 66;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = PGP_liang_1Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 66;
		t.source = "";
		t.width = 60;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = 0;
		t.x = 27.72;
		t.y = 21.68;
		t.elementsContent = [this.pai_i()];
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
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_liang_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_chi_1Skin.exml'] = window.PGP_chi_1Skin = (function (_super) {
	__extends(PGP_chi_1Skin, _super);
	function PGP_chi_1Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3"];
		
		this.height = 75;
		this.width = 155;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i()];
	}
	var _proto = PGP_chi_1Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_0 = t;
		t.skinName = "PGP_liang_1Skin";
		t.x = 0;
		t.y = 8.46;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_1 = t;
		t.skinName = "PGP_liang_1Skin";
		t.x = 43.69;
		t.y = 8.46;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_2 = t;
		t.skinName = "PGP_liang_1Skin";
		t.x = 88.01;
		t.y = 8.46;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_3 = t;
		t.skinName = "PGP_liang_1Skin";
		t.x = 38.33;
		t.y = 0;
		return t;
	};
	return PGP_chi_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_liang_2Skin.exml'] = window.PGP_liang_2Skin = (function (_super) {
	__extends(PGP_liang_2Skin, _super);
	function PGP_liang_2Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = PGP_liang_2Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.scaleY = 1;
		t.source = "PGP_j_2_14_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 21.6;
		t.anchorOffsetY = 10.8;
		t.skewX = -15;
		t.x = 22.6;
		t.y = 10;
		t.elementsContent = [this.pai_i()];
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "PGP_card_6_png";
		t.x = 26;
		t.y = 11;
		return t;
	};
	return PGP_liang_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_chi_2Skin.exml'] = window.PGP_chi_2Skin = (function (_super) {
	__extends(PGP_chi_2Skin, _super);
	function PGP_chi_2Skin() {
		_super.call(this);
		this.skinParts = ["pai_2","pai_1","pai_0","pai_3"];
		
		this.elementsContent = [this.pai_2_i(),this.pai_1_i(),this.pai_0_i(),this.pai_3_i()];
	}
	var _proto = PGP_chi_2Skin.prototype;

	_proto.pai_2_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_2Skin";
		t.x = 3.95;
		t.y = 1.09;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_2Skin";
		t.x = 9.96;
		t.y = 20.66;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_2Skin";
		t.x = 15.52;
		t.y = 42.25;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "PGP_liang_2Skin";
		t.x = 14.06;
		t.y = 7.13;
		return t;
	};
	return PGP_chi_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_liang_3Skin.exml'] = window.PGP_liang_3Skin = (function (_super) {
	__extends(PGP_liang_3Skin, _super);
	function PGP_liang_3Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 42;
		this.width = 37;
		this.elementsContent = [this.bg_i(),this.pai_i()];
	}
	var _proto = PGP_liang_3Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 42;
		t.source = "PGP_j_3_1_png";
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
		t.scaleY = -0.25;
		t.skewX = -10;
		t.source = "PGP_card_6_png";
		t.x = 20.36;
		t.y = 14.28;
		return t;
	};
	return PGP_liang_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_chi_3Skin.exml'] = window.PGP_chi_3Skin = (function (_super) {
	__extends(PGP_chi_3Skin, _super);
	function PGP_chi_3Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3"];
		
		this.height = 58;
		this.width = 94;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i()];
	}
	var _proto = PGP_chi_3Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_0 = t;
		t.skinName = "PGP_liang_3Skin";
		t.x = 56.79;
		t.y = 15.5;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_1 = t;
		t.skinName = "PGP_liang_3Skin";
		t.x = 28.91;
		t.y = 15.5;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_2 = t;
		t.skinName = "PGP_liang_3Skin";
		t.x = 0;
		t.y = 15.5;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new PGP.PGP_liang();
		this.pai_3 = t;
		t.skinName = "PGP_liang_3Skin";
		t.x = 31.29;
		t.y = -2;
		return t;
	};
	return PGP_chi_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_d_0Skin.exml'] = window.PGP_da_d_0Skin = (function (_super) {
	__extends(PGP_da_d_0Skin, _super);
	function PGP_da_d_0Skin() {
		_super.call(this);
		this.skinParts = ["bg_9","bg_8","bg_7","bg_6","bg_5","bg_4","bg_0","bg_1","bg_2","bg_3","pai_0","grp_0","pai_1","grp_1","pai_2","grp_2","pai_3","grp_3","pai_4","grp_4","pai_5","grp_5","pai_6","grp_6","pai_7","grp_7","pai_8","grp_8","pai_9","grp_9"];
		
		this.elementsContent = [this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.bg_6_i(),this.bg_5_i(),this.bg_4_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i(),this.grp_5_i(),this.grp_6_i(),this.grp_7_i(),this.grp_8_i(),this.grp_9_i()];
	}
	var _proto = PGP_da_d_0Skin.prototype;

	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_17_png";
		t.x = 373.92;
		t.y = 0;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_17_png";
		t.x = 331.58;
		t.y = 0;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_17_png";
		t.x = 290.58;
		t.y = 0;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_16_png";
		t.x = 249.93;
		t.y = 0;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_15_png";
		t.x = 209.6;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_14_png";
		t.x = 168.88;
		t.y = 0;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_10_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_11_png";
		t.x = 43.66;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_12_png";
		t.x = 86.27;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_13_png";
		t.x = 127.52;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = 0;
		t.skewY = -2;
		t.x = 24.01;
		t.y = 18;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = 0;
		t.skewY = -2;
		t.x = 66.16;
		t.y = 18.43;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.43;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = 0;
		t.skewY = -1;
		t.x = 107.84;
		t.y = 18.3;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = -2.5;
		t.x = 150.27;
		t.y = 18.63;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = -2;
		t.skewY = 0;
		t.x = 192.5;
		t.y = 18.6;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.37;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = -2;
		t.skewY = 2;
		t.x = 235.86;
		t.y = 19.14;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 357.59;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = -8;
		t.skewY = -1;
		t.x = 277.59;
		t.y = 18.8;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.43;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = -12;
		t.skewY = -2;
		t.x = 319.24;
		t.y = 18.15;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_8_i = function () {
		var t = new eui.Group();
		this.grp_8 = t;
		t.skewX = -12;
		t.skewY = -2;
		t.x = 359.25;
		t.y = 19.33;
		t.elementsContent = [this.pai_8_i()];
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_9_i = function () {
		var t = new eui.Group();
		this.grp_9 = t;
		t.skewX = -12;
		t.skewY = -2;
		t.x = 400.58;
		t.y = 18.33;
		t.elementsContent = [this.pai_9_i()];
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_d_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_d_1Skin.exml'] = window.PGP_da_d_1Skin = (function (_super) {
	__extends(PGP_da_d_1Skin, _super);
	function PGP_da_d_1Skin() {
		_super.call(this);
		this.skinParts = ["bg_7","bg_6","bg_5","bg_4","bg_0","bg_1","bg_2","bg_3","pai_0","grp_0","pai_1","grp_1","pai_2","grp_2","pai_3","grp_3","pai_4","grp_4","pai_5","grp_5","pai_6","grp_6","pai_7","grp_7"];
		
		this.height = 62;
		this.width = 348;
		this.elementsContent = [this.bg_7_i(),this.bg_6_i(),this.bg_5_i(),this.bg_4_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i(),this.grp_5_i(),this.grp_6_i(),this.grp_7_i()];
	}
	var _proto = PGP_da_d_1Skin.prototype;

	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_17_png";
		t.x = 295.92;
		t.y = 0;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_16_png";
		t.x = 253.27;
		t.y = 0;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_15_png";
		t.x = 211.94;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_14_png";
		t.x = 170.55;
		t.y = 0;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_10_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_11_png";
		t.x = 43.66;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_12_png";
		t.x = 86.27;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_13_png";
		t.x = 128.52;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = 0;
		t.skewY = -2;
		t.x = 24.68;
		t.y = 18;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = 0;
		t.skewY = -2;
		t.x = 66.16;
		t.y = 19.1;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.43;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = 0;
		t.skewY = -1;
		t.x = 108.51;
		t.y = 18.3;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = -2;
		t.x = 151.94;
		t.y = 18.63;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = -2;
		t.skewY = 0;
		t.x = 194.17;
		t.y = 19.27;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.37;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = -2;
		t.skewY = 2;
		t.x = 237.53;
		t.y = 19.81;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 357.59;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = -8;
		t.skewY = -2;
		t.x = 279.93;
		t.y = 19.47;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.43;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = -10;
		t.skewY = -2;
		t.x = 323.59;
		t.y = 20.16;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_d_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_d_2Skin.exml'] = window.PGP_da_d_2Skin = (function (_super) {
	__extends(PGP_da_d_2Skin, _super);
	function PGP_da_d_2Skin() {
		_super.call(this);
		this.skinParts = ["bg_5","bg_4","bg_0","bg_1","bg_2","bg_3","pai_0","grp_0","pai_1","grp_1","pai_2","grp_2","pai_3","grp_3","pai_4","grp_4","pai_5","grp_5"];
		
		this.height = 64;
		this.width = 263;
		this.elementsContent = [this.bg_5_i(),this.bg_4_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i(),this.grp_5_i()];
	}
	var _proto = PGP_da_d_2Skin.prototype;

	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_15_png";
		t.x = 210.6;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_14_png";
		t.x = 169.21;
		t.y = 0;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_10_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_11_png";
		t.x = 43.66;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_12_png";
		t.x = 86.27;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_d_1_13_png";
		t.x = 127.85;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = 0;
		t.skewY = -2;
		t.x = 24.01;
		t.y = 18;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.91;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = 0;
		t.skewY = -2;
		t.x = 66.16;
		t.y = 19.1;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 1.43;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = 0;
		t.skewY = -1;
		t.x = 108.51;
		t.y = 18.3;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = -2.5;
		t.x = 151.94;
		t.y = 18.63;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = -3;
		t.skewY = 0;
		t.x = 193.5;
		t.y = 19.27;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.37;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = -2;
		t.skewY = 2;
		t.x = 236.19;
		t.y = 19.81;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 357.59;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_card_9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_d_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_l_0Skin.exml'] = window.PGP_da_l_0Skin = (function (_super) {
	__extends(PGP_da_l_0Skin, _super);
	function PGP_da_l_0Skin() {
		_super.call(this);
		this.skinParts = ["bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_7","bg_8","bg_9","pai_8","grp_0","pai_9","grp_1","pai_0","grp_2","pai_1","grp_3","pai_2","grp_4","pai_3","grp_5","pai_4","grp_6","pai_5","grp_7","pai_6","grp_8","pai_7","grp_9"];
		
		this.height = 293;
		this.width = 86;
		this.elementsContent = [this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.bg_6_i(),this.bg_7_i(),this.bg_8_i(),this.bg_9_i(),this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i(),this.grp_5_i(),this.grp_6_i(),this.grp_7_i(),this.grp_8_i(),this.grp_9_i()];
	}
	var _proto = PGP_da_l_0Skin.prototype;

	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.8;
		t.source = "PGP_d_0_10_png";
		t.x = 28.01;
		t.y = 1.51;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.8;
		t.source = "PGP_d_0_11_png";
		t.x = 25.35;
		t.y = 23.86;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_10_png";
		t.x = 22.5;
		t.y = 46.82;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_11_png";
		t.x = 20;
		t.y = 71.82;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_12_png";
		t.x = 17;
		t.y = 97.82;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_13_png";
		t.x = 15;
		t.y = 124.82;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_14_png";
		t.x = 12;
		t.y = 152.82;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_15_png";
		t.x = 9;
		t.y = 182.42;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_16_png";
		t.x = 6;
		t.y = 211.57;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_17_png";
		t.x = 1;
		t.y = 243.47;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = 8;
		t.x = 58.56;
		t.y = 12.18;
		t.elementsContent = [this.pai_8_i()];
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = 8;
		t.x = 56.19;
		t.y = 34.51;
		t.elementsContent = [this.pai_9_i()];
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = 8;
		t.x = 53.9;
		t.y = 59.18;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = 8;
		t.x = 51.03;
		t.y = 84.68;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = 8;
		t.x = 49.71;
		t.y = 110.72;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = 8;
		t.x = 47.9;
		t.y = 138.52;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = 8;
		t.x = 45.39;
		t.y = 167.02;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.width = 74.14;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = 8;
		t.x = 42.23;
		t.y = 197.02;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_8_i = function () {
		var t = new eui.Group();
		this.grp_8 = t;
		t.skewX = 8;
		t.x = 39.23;
		t.y = 226.52;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_9_i = function () {
		var t = new eui.Group();
		this.grp_9 = t;
		t.skewX = 8;
		t.x = 36.3;
		t.y = 259.19;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.width = 72.01;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_l_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_l_1Skin.exml'] = window.PGP_da_l_1Skin = (function (_super) {
	__extends(PGP_da_l_1Skin, _super);
	function PGP_da_l_1Skin() {
		_super.call(this);
		this.skinParts = ["bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_7","pai_0","grp_0","pai_1","grp_1","pai_2","grp_2","pai_3","grp_3","pai_4","grp_4","pai_5","grp_5","pai_6","grp_6","pai_7","grp_7"];
		
		this.height = 244;
		this.width = 72;
		this.elementsContent = [this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.bg_6_i(),this.bg_7_i(),this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i(),this.grp_5_i(),this.grp_6_i(),this.grp_7_i()];
	}
	var _proto = PGP_da_l_1Skin.prototype;

	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_10_png";
		t.x = 22;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_11_png";
		t.x = 19.5;
		t.y = 25;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_12_png";
		t.x = 16.5;
		t.y = 51;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_13_png";
		t.x = 14.5;
		t.y = 78;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_14_png";
		t.x = 11.5;
		t.y = 106;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_15_png";
		t.x = 8.5;
		t.y = 135.6;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_16_png";
		t.x = 5.5;
		t.y = 164.75;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_17_png";
		t.x = 1.5;
		t.y = 196.65;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = 8;
		t.x = 52.74;
		t.y = 12.36;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = 8;
		t.x = 50.2;
		t.y = 37.86;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = 8;
		t.x = 47.88;
		t.y = 63.9;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = 8;
		t.x = 45.73;
		t.y = 91.7;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = 8;
		t.x = 43.89;
		t.y = 120.2;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 36.59;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.width = 74.14;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = 8;
		t.x = 41.4;
		t.y = 150.2;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = 8;
		t.x = 38.4;
		t.y = 179.7;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = 8;
		t.x = 36.14;
		t.y = 212.37;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 35.54;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.width = 72.01;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_l_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_l_2Skin.exml'] = window.PGP_da_l_2Skin = (function (_super) {
	__extends(PGP_da_l_2Skin, _super);
	function PGP_da_l_2Skin() {
		_super.call(this);
		this.skinParts = ["bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","pai_0","grp_0","pai_1","grp_1","pai_2","grp_2","pai_3","grp_3","pai_4","grp_4","pai_5","grp_5"];
		
		this.height = 182;
		this.width = 78;
		this.elementsContent = [this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.grp_0_i(),this.grp_1_i(),this.grp_2_i(),this.grp_3_i(),this.grp_4_i(),this.grp_5_i()];
	}
	var _proto = PGP_da_l_2Skin.prototype;

	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_10_png";
		t.x = 22;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_11_png";
		t.x = 19.5;
		t.y = 25;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_12_png";
		t.x = 16.5;
		t.y = 51;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_13_png";
		t.x = 14.5;
		t.y = 78;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_14_png";
		t.x = 11.5;
		t.y = 106;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_0_15_png";
		t.x = 8.5;
		t.y = 135.6;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = 8;
		t.x = 53.41;
		t.y = 12.36;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = 8;
		t.x = 50.87;
		t.y = 37.86;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = 8;
		t.x = 48.55;
		t.y = 63.9;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = 8;
		t.x = 46.4;
		t.y = 91.7;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = 8;
		t.x = 44.56;
		t.y = 120.2;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 36.59;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.width = 74.14;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = 8;
		t.x = 40.73;
		t.y = 150.2;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.50;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_l_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_r_0Skin.exml'] = window.PGP_da_r_0Skin = (function (_super) {
	__extends(PGP_da_r_0Skin, _super);
	function PGP_da_r_0Skin() {
		_super.call(this);
		this.skinParts = ["bg_9","bg_8","bg_7","bg_6","bg_5","bg_4","bg_3","bg_2","bg_1","bg_0","pai_9","grp_9","pai_8","grp_8","pai_7","grp_7","pai_6","grp_6","pai_5","grp_5","pai_4","grp_4","pai_3","grp_3","pai_2","grp_2","pai_1","grp_1","pai_0","grp_0"];
		
		this.height = 273;
		this.width = 81;
		this.elementsContent = [this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.bg_6_i(),this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_2_i(),this.bg_1_i(),this.bg_0_i(),this.grp_9_i(),this.grp_8_i(),this.grp_7_i(),this.grp_6_i(),this.grp_5_i(),this.grp_4_i(),this.grp_3_i(),this.grp_2_i(),this.grp_1_i(),this.grp_0_i()];
	}
	var _proto = PGP_da_r_0Skin.prototype;

	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_17_png";
		t.x = 8;
		t.y = 3;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_17_png";
		t.x = 10;
		t.y = 25;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_17_png";
		t.x = 12;
		t.y = 48;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_16_png";
		t.x = 14;
		t.y = 70;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_15_png";
		t.x = 15.5;
		t.y = 94;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_14_png";
		t.x = 17;
		t.y = 119.5;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_13_png";
		t.x = 18.5;
		t.y = 143.5;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_12_png";
		t.x = 21;
		t.y = 169.6;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_11_png";
		t.x = 22.5;
		t.y = 197.75;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_10_png";
		t.x = 25.5;
		t.y = 227.15;
		return t;
	};
	_proto.grp_9_i = function () {
		var t = new eui.Group();
		this.grp_9 = t;
		t.skewX = -4;
		t.x = 27.93;
		t.y = 14.26;
		t.elementsContent = [this.pai_9_i()];
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.grp_8_i = function () {
		var t = new eui.Group();
		this.grp_8 = t;
		t.skewX = -4;
		t.x = 30.26;
		t.y = 36.26;
		t.elementsContent = [this.pai_8_i()];
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = -4;
		t.x = 32.59;
		t.y = 59.26;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = -4;
		t.x = 34.62;
		t.y = 82.36;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = -6;
		t.x = 37.2;
		t.y = 107.4;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = -6;
		t.x = 39.35;
		t.y = 132.7;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = -6;
		t.x = 41.44;
		t.y = 157.5;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 36.59;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.width = 74.14;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = -6;
		t.x = 43.95;
		t.y = 184.8;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = -6;
		t.x = 46.15;
		t.y = 213.2;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = -6;
		t.x = 48.72;
		t.y = 241.87;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 35.54;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.width = 72.01;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_r_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_r_1Skin.exml'] = window.PGP_da_r_1Skin = (function (_super) {
	__extends(PGP_da_r_1Skin, _super);
	function PGP_da_r_1Skin() {
		_super.call(this);
		this.skinParts = ["bg_7","bg_6","bg_5","bg_4","bg_3","bg_2","bg_1","bg_0","pai_7","grp_7","pai_6","grp_6","pai_5","grp_5","pai_4","grp_4","pai_3","grp_3","pai_2","grp_2","pai_1","grp_1","pai_0","grp_0"];
		
		this.height = 224;
		this.width = 67;
		this.elementsContent = [this.bg_7_i(),this.bg_6_i(),this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_2_i(),this.bg_1_i(),this.bg_0_i(),this.grp_7_i(),this.grp_6_i(),this.grp_5_i(),this.grp_4_i(),this.grp_3_i(),this.grp_2_i(),this.grp_1_i(),this.grp_0_i()];
	}
	var _proto = PGP_da_r_1Skin.prototype;

	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_17_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_16_png";
		t.x = 2;
		t.y = 23;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_15_png";
		t.x = 3.5;
		t.y = 47;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_14_png";
		t.x = 5;
		t.y = 72.5;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_13_png";
		t.x = 6.5;
		t.y = 96.5;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_12_png";
		t.x = 9;
		t.y = 122.6;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_11_png";
		t.x = 10.5;
		t.y = 150.75;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_10_png";
		t.x = 13;
		t.y = 179.65;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = -4;
		t.x = 20.59;
		t.y = 12.26;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = -4;
		t.x = 22.62;
		t.y = 35.36;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = -6;
		t.x = 25.2;
		t.y = 60.4;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = -6;
		t.x = 27.35;
		t.y = 85.2;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = -6;
		t.x = 29.44;
		t.y = 110.5;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 36.59;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.width = 74.14;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = -6;
		t.x = 31.45;
		t.y = 137.8;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = -6;
		t.x = 34.15;
		t.y = 166.2;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = -6;
		t.x = 36.72;
		t.y = 194.87;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 35.54;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.width = 72.01;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_r_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_r_2Skin.exml'] = window.PGP_da_r_2Skin = (function (_super) {
	__extends(PGP_da_r_2Skin, _super);
	function PGP_da_r_2Skin() {
		_super.call(this);
		this.skinParts = ["bg_5","bg_4","bg_3","bg_2","bg_1","bg_0","pai_5","grp_5","pai_4","grp_4","pai_3","grp_3","pai_2","grp_2","pai_1","grp_1","pai_0","grp_0"];
		
		this.height = 178;
		this.width = 67;
		this.elementsContent = [this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_2_i(),this.bg_1_i(),this.bg_0_i(),this.grp_5_i(),this.grp_4_i(),this.grp_3_i(),this.grp_2_i(),this.grp_1_i(),this.grp_0_i()];
	}
	var _proto = PGP_da_r_2Skin.prototype;

	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_15_png";
		t.x = 1.5;
		t.y = -1;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_14_png";
		t.x = 3;
		t.y = 24.5;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_13_png";
		t.x = 4.5;
		t.y = 48.5;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_12_png";
		t.x = 7;
		t.y = 74.6;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_11_png";
		t.x = 8.5;
		t.y = 102.75;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "PGP_d_2_10_png";
		t.x = 11;
		t.y = 131.65;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = -6;
		t.x = 22.36;
		t.y = 12.4;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = -6;
		t.x = 25.18;
		t.y = 37.7;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = -6;
		t.x = 27.27;
		t.y = 62.5;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 36.59;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.width = 74.14;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.skewX = -6;
		t.x = 29.28;
		t.y = 89.8;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = -6;
		t.x = 31.81;
		t.y = 118.2;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.40;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = -6;
		t.x = 34.21;
		t.y = 146.87;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 35.54;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_6_png";
		t.width = 72.01;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_r_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_u_0Skin.exml'] = window.PGP_da_u_0Skin = (function (_super) {
	__extends(PGP_da_u_0Skin, _super);
	function PGP_da_u_0Skin() {
		_super.call(this);
		this.skinParts = ["bg_9","bg_8","bg_7","bg_6","bg_5","bg_4","bg_3","bg_0","bg_1","bg_2","pai_9","grp_9","pai_8","grp_8","pai_7","grp_7","pai_6","grp_6","pai_5","grp_5","pai_4","grp_4","pai_3","grp_3","pai_2","grp_2","pai_1","grp_1","pai_0","grp_0"];
		
		this.height = 54;
		this.width = 373;
		this.elementsContent = [this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.bg_6_i(),this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.grp_9_i(),this.grp_8_i(),this.grp_7_i(),this.grp_6_i(),this.grp_5_i(),this.grp_4_i(),this.grp_3_i(),this.grp_2_i(),this.grp_1_i(),this.grp_0_i()];
	}
	var _proto = PGP_da_u_0Skin.prototype;

	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.source = "PGP_d_3_17_png";
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.source = "PGP_d_3_17_png";
		t.x = 39;
		t.y = 0;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "PGP_d_3_17_png";
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "PGP_d_3_16_png";
		t.x = 111;
		t.y = 0;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "PGP_d_3_15_png";
		t.x = 147;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "PGP_d_3_14_png";
		t.x = 184.16;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "PGP_d_3_13_png";
		t.x = 221.61;
		t.y = 0;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "PGP_d_3_10_png";
		t.x = 330.97;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "PGP_d_3_11_png";
		t.x = 294.42;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "PGP_d_3_12_png";
		t.x = 258.76;
		t.y = 0;
		return t;
	};
	_proto.grp_9_i = function () {
		var t = new eui.Group();
		this.grp_9 = t;
		t.skewX = 6;
		t.x = 22.88;
		t.y = 22.18;
		t.elementsContent = [this.pai_9_i()];
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.51;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_8_i = function () {
		var t = new eui.Group();
		this.grp_8 = t;
		t.skewX = 6;
		t.x = 59.22;
		t.y = 23.18;
		t.elementsContent = [this.pai_8_i()];
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.51;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = 6;
		t.x = 96.56;
		t.y = 22.18;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.51;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = 4;
		t.x = 132.07;
		t.y = 22.48;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.75;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = 2;
		t.x = 168.01;
		t.y = 22.51;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 2.02;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = 2;
		t.x = 204.64;
		t.y = 22.52;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.78;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = 1;
		t.x = 241.7;
		t.y = 22.05;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.x = 278.52;
		t.y = 22.55;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = -1;
		t.x = 315.24;
		t.y = 22.83;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.78;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = -3;
		t.x = 352.41;
		t.y = 22.38;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.55;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_u_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_u_1Skin.exml'] = window.PGP_da_u_1Skin = (function (_super) {
	__extends(PGP_da_u_1Skin, _super);
	function PGP_da_u_1Skin() {
		_super.call(this);
		this.skinParts = ["bg_7","bg_6","bg_5","bg_4","bg_3","bg_0","bg_1","bg_2","pai_7","grp_7","pai_6","grp_6","pai_5","grp_5","pai_4","grp_4","pai_3","grp_3","pai_2","grp_2","pai_1","grp_1","pai_0","grp_0"];
		
		this.height = 52;
		this.width = 296;
		this.elementsContent = [this.bg_7_i(),this.bg_6_i(),this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.grp_7_i(),this.grp_6_i(),this.grp_5_i(),this.grp_4_i(),this.grp_3_i(),this.grp_2_i(),this.grp_1_i(),this.grp_0_i()];
	}
	var _proto = PGP_da_u_1Skin.prototype;

	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "PGP_d_3_17_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "PGP_d_3_16_png";
		t.x = 36;
		t.y = 0;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "PGP_d_3_15_png";
		t.x = 72;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "PGP_d_3_14_png";
		t.x = 109.16;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "PGP_d_3_13_png";
		t.x = 146.61;
		t.y = 0;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "PGP_d_3_10_png";
		t.x = 255.97;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "PGP_d_3_11_png";
		t.x = 219.42;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "PGP_d_3_12_png";
		t.x = 183.76;
		t.y = 0;
		return t;
	};
	_proto.grp_7_i = function () {
		var t = new eui.Group();
		this.grp_7 = t;
		t.skewX = 6;
		t.x = 20.56;
		t.y = 21.52;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.51;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_6_i = function () {
		var t = new eui.Group();
		this.grp_6 = t;
		t.skewX = 4;
		t.x = 55.4;
		t.y = 21.82;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.75;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = 2;
		t.x = 92.01;
		t.y = 21.85;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 2.02;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = 2;
		t.x = 128.64;
		t.y = 21.86;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.78;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = 1;
		t.x = 166.37;
		t.y = 22.06;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.x = 203.19;
		t.y = 21.89;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = -1;
		t.x = 239.24;
		t.y = 22.17;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.78;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = -3;
		t.x = 277.08;
		t.y = 21.72;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.55;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_u_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_da_u_2Skin.exml'] = window.PGP_da_u_2Skin = (function (_super) {
	__extends(PGP_da_u_2Skin, _super);
	function PGP_da_u_2Skin() {
		_super.call(this);
		this.skinParts = ["bg_5","bg_4","bg_3","bg_0","bg_1","bg_2","pai_5","grp_5","pai_4","grp_4","pai_3","grp_3","pai_2","grp_2","pai_1","grp_1","pai_0","grp_0"];
		
		this.height = 54;
		this.width = 227;
		this.elementsContent = [this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.grp_5_i(),this.grp_4_i(),this.grp_3_i(),this.grp_2_i(),this.grp_1_i(),this.grp_0_i()];
	}
	var _proto = PGP_da_u_2Skin.prototype;

	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "PGP_d_3_15_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "PGP_d_3_14_png";
		t.x = 38.16;
		t.y = 0;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "PGP_d_3_13_png";
		t.x = 75.61;
		t.y = 0;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "PGP_d_3_10_png";
		t.x = 184.97;
		t.y = 0;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "PGP_d_3_11_png";
		t.x = 148.42;
		t.y = 0;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "PGP_d_3_12_png";
		t.x = 112.76;
		t.y = 0;
		return t;
	};
	_proto.grp_5_i = function () {
		var t = new eui.Group();
		this.grp_5 = t;
		t.skewX = 2;
		t.x = 21.01;
		t.y = 21.85;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 2.02;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_4_i = function () {
		var t = new eui.Group();
		this.grp_4 = t;
		t.skewX = 2;
		t.x = 57.64;
		t.y = 21.86;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 0.78;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_3_i = function () {
		var t = new eui.Group();
		this.grp_3 = t;
		t.skewX = 1;
		t.x = 94.7;
		t.y = 22.06;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_2_i = function () {
		var t = new eui.Group();
		this.grp_2 = t;
		t.x = 131.52;
		t.y = 21.89;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_1_i = function () {
		var t = new eui.Group();
		this.grp_1 = t;
		t.skewX = -1;
		t.x = 168.24;
		t.y = 22.17;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.78;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_0_i = function () {
		var t = new eui.Group();
		this.grp_0 = t;
		t.skewX = -3;
		t.x = 205.41;
		t.y = 21.72;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 358.55;
		t.scaleX = 0.4;
		t.scaleY = -0.38;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_da_u_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_hua_0Skin.exml'] = window.PGP_hua_0Skin = (function (_super) {
	__extends(PGP_hua_0Skin, _super);
	function PGP_hua_0Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 60;
		this.width = 85;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = PGP_hua_0Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "PGP_hu_0_png";
		t.x = 0;
		t.y = -5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = 10;
		t.x = 42.8;
		t.y = 22.2;
		t.elementsContent = [this.pai_i()];
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_hua_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_hua_1Skin.exml'] = window.PGP_hua_1Skin = (function (_super) {
	__extends(PGP_hua_1Skin, _super);
	function PGP_hua_1Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 80;
		this.width = 70;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = PGP_hua_1Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "PGP_hu_1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = -4;
		t.x = 37.68;
		t.y = 29.68;
		t.elementsContent = [this.pai_i()];
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
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_hua_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_hua_2Skin.exml'] = window.PGP_hua_2Skin = (function (_super) {
	__extends(PGP_hua_2Skin, _super);
	function PGP_hua_2Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 45;
		this.width = 60;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = PGP_hua_2Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "PGP_hu_2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = -20;
		t.x = 31.1;
		t.y = 13.4;
		t.elementsContent = [this.pai_i()];
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_hua_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/card/PGP_hua_3Skin.exml'] = window.PGP_hua_3Skin = (function (_super) {
	__extends(PGP_hua_3Skin, _super);
	function PGP_hua_3Skin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 55;
		this.width = 55;
		this.elementsContent = [this.bg_i(),this._Group1_i()];
	}
	var _proto = PGP_hua_3Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "PGP_hu_3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = 4;
		t.x = 24.34;
		t.y = 20.99;
		t.elementsContent = [this.pai_i()];
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.scaleX = 0.29;
		t.scaleY = -0.29;
		t.skewX = 10;
		t.source = "PGP_card_6_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_hua_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Chipenggang_0Skin.exml'] = window.PGP_Chipenggang_0Skin = (function (_super) {
	__extends(PGP_Chipenggang_0Skin, _super);
	function PGP_Chipenggang_0Skin() {
		_super.call(this);
		this.skinParts = ["chi_0","chi_1","chi_2","chi_3"];
		
		this.height = 320;
		this.width = 120;
		this.elementsContent = [this.chi_0_i(),this.chi_1_i(),this.chi_2_i(),this.chi_3_i()];
	}
	var _proto = PGP_Chipenggang_0Skin.prototype;

	_proto.chi_0_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_0 = t;
		t.skinName = "PGP_chi_0Skin";
		t.x = 53;
		t.y = 0;
		return t;
	};
	_proto.chi_1_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_1 = t;
		t.skinName = "PGP_chi_0Skin";
		t.x = 35;
		t.y = 75;
		return t;
	};
	_proto.chi_2_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_2 = t;
		t.skinName = "PGP_chi_0Skin";
		t.x = 19;
		t.y = 152;
		return t;
	};
	_proto.chi_3_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_3 = t;
		t.skinName = "PGP_chi_0Skin";
		t.x = 2;
		t.y = 234;
		return t;
	};
	return PGP_Chipenggang_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Chipenggang_1Skin.exml'] = window.PGP_Chipenggang_1Skin = (function (_super) {
	__extends(PGP_Chipenggang_1Skin, _super);
	function PGP_Chipenggang_1Skin() {
		_super.call(this);
		this.skinParts = ["chi_0","chi_1","chi_2","chi_3"];
		
		this.height = 75;
		this.width = 589;
		this.elementsContent = [this.chi_0_i(),this.chi_1_i(),this.chi_2_i(),this.chi_3_i()];
	}
	var _proto = PGP_Chipenggang_1Skin.prototype;

	_proto.chi_0_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_0 = t;
		t.skinName = "PGP_chi_1Skin";
		t.y = 0;
		return t;
	};
	_proto.chi_1_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_1 = t;
		t.skinName = "PGP_chi_1Skin";
		t.x = 145;
		t.y = 0;
		return t;
	};
	_proto.chi_2_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_2 = t;
		t.skinName = "PGP_chi_1Skin";
		t.x = 290;
		t.y = 0;
		return t;
	};
	_proto.chi_3_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_3 = t;
		t.skinName = "PGP_chi_1Skin";
		t.x = 434;
		t.y = 0;
		return t;
	};
	return PGP_Chipenggang_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Chipenggang_2Skin.exml'] = window.PGP_Chipenggang_2Skin = (function (_super) {
	__extends(PGP_Chipenggang_2Skin, _super);
	function PGP_Chipenggang_2Skin() {
		_super.call(this);
		this.skinParts = ["chi_3","chi_2","chi_1","chi_0"];
		
		this.height = 320;
		this.width = 120;
		this.elementsContent = [this.chi_3_i(),this.chi_2_i(),this.chi_1_i(),this.chi_0_i()];
	}
	var _proto = PGP_Chipenggang_2Skin.prototype;

	_proto.chi_3_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_3 = t;
		t.skinName = "PGP_chi_2Skin";
		t.x = -7;
		t.y = 5;
		return t;
	};
	_proto.chi_2_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_2 = t;
		t.skinName = "PGP_chi_2Skin";
		t.x = 11.99;
		t.y = 83.6;
		return t;
	};
	_proto.chi_1_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_1 = t;
		t.skinName = "PGP_chi_2Skin";
		t.x = 32.12;
		t.y = 161.52;
		return t;
	};
	_proto.chi_0_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_0 = t;
		t.skinName = "PGP_chi_2Skin";
		t.x = 50.76;
		t.y = 240.46;
		return t;
	};
	return PGP_Chipenggang_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Chipenggang_3Skin.exml'] = window.PGP_Chipenggang_3Skin = (function (_super) {
	__extends(PGP_Chipenggang_3Skin, _super);
	function PGP_Chipenggang_3Skin() {
		_super.call(this);
		this.skinParts = ["chi_0","chi_1","chi_2","chi_3"];
		
		this.height = 59;
		this.width = 403;
		this.elementsContent = [this.chi_0_i(),this.chi_1_i(),this.chi_2_i(),this.chi_3_i()];
	}
	var _proto = PGP_Chipenggang_3Skin.prototype;

	_proto.chi_0_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_0 = t;
		t.skinName = "PGP_chi_3Skin";
		t.x = 304;
		t.y = 0;
		return t;
	};
	_proto.chi_1_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_1 = t;
		t.skinName = "PGP_chi_3Skin";
		t.x = 203;
		t.y = 0;
		return t;
	};
	_proto.chi_2_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_2 = t;
		t.skinName = "PGP_chi_3Skin";
		t.x = 102;
		t.y = 0;
		return t;
	};
	_proto.chi_3_i = function () {
		var t = new PGP.PGP_chi();
		this.chi_3 = t;
		t.skinName = "PGP_chi_3Skin";
		t.y = 0;
		return t;
	};
	return PGP_Chipenggang_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Dapai_0Skin.exml'] = window.PGP_Dapai_0Skin = (function (_super) {
	__extends(PGP_Dapai_0Skin, _super);
	function PGP_Dapai_0Skin() {
		_super.call(this);
		this.skinParts = ["da_0","da_1","da_2","focusImg"];
		
		this.height = 297;
		this.width = 175;
		this.elementsContent = [this.da_0_i(),this.da_1_i(),this.da_2_i(),this.focusImg_i()];
	}
	var _proto = PGP_Dapai_0Skin.prototype;

	_proto.da_0_i = function () {
		var t = new PGP.PGP_da_first();
		this.da_0 = t;
		t.scaleX = 1.06;
		t.skinName = "PGP_da_l_0Skin";
		t.x = 0.53;
		t.y = 4;
		return t;
	};
	_proto.da_1_i = function () {
		var t = new PGP.PGP_da_second();
		this.da_1 = t;
		t.scaleX = 1.03;
		t.skinName = "PGP_da_l_1Skin";
		t.x = 52.05;
		t.y = 27;
		return t;
	};
	_proto.da_2_i = function () {
		var t = new PGP.PGP_da_third();
		this.da_2 = t;
		t.skinName = "PGP_da_l_2Skin";
		t.x = 96.43;
		t.y = 56;
		return t;
	};
	_proto.focusImg_i = function () {
		var t = new eui.Image();
		this.focusImg = t;
		t.anchorOffsetX = 30.8;
		t.anchorOffsetY = 48.8;
		t.source = "PGP_logo_tishi_png";
		t.x = 74.8;
		t.y = 107.8;
		return t;
	};
	return PGP_Dapai_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Dapai_1Skin.exml'] = window.PGP_Dapai_1Skin = (function (_super) {
	__extends(PGP_Dapai_1Skin, _super);
	function PGP_Dapai_1Skin() {
		_super.call(this);
		this.skinParts = ["da_2","da_1","da_0","focusImg"];
		
		this.height = 159;
		this.width = 455;
		this.elementsContent = [this.da_2_i(),this.da_1_i(),this.da_0_i(),this.focusImg_i()];
	}
	var _proto = PGP_Dapai_1Skin.prototype;

	_proto.da_2_i = function () {
		var t = new PGP.PGP_da_third();
		this.da_2 = t;
		t.skinName = "PGP_da_d_2Skin";
		t.x = 91;
		t.y = 0;
		return t;
	};
	_proto.da_1_i = function () {
		var t = new PGP.PGP_da_second();
		this.da_1 = t;
		t.scaleX = 1.03;
		t.skinName = "PGP_da_d_1Skin";
		t.x = 46.05;
		t.y = 46.99;
		return t;
	};
	_proto.da_0_i = function () {
		var t = new PGP.PGP_da_first();
		this.da_0 = t;
		t.scaleX = 1.06;
		t.skinName = "PGP_da_d_0Skin";
		t.x = 0.53;
		t.y = 94.97;
		return t;
	};
	_proto.focusImg_i = function () {
		var t = new eui.Image();
		this.focusImg = t;
		t.anchorOffsetX = 30.8;
		t.anchorOffsetY = 48.8;
		t.source = "PGP_logo_tishi_png";
		t.x = 153.8;
		t.y = 92.8;
		return t;
	};
	return PGP_Dapai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Dapai_2Skin.exml'] = window.PGP_Dapai_2Skin = (function (_super) {
	__extends(PGP_Dapai_2Skin, _super);
	function PGP_Dapai_2Skin() {
		_super.call(this);
		this.skinParts = ["da_0","da_1","da_2","focusImg"];
		
		this.height = 273;
		this.width = 166;
		this.elementsContent = [this.da_0_i(),this.da_1_i(),this.da_2_i(),this.focusImg_i()];
	}
	var _proto = PGP_Dapai_2Skin.prototype;

	_proto.da_0_i = function () {
		var t = new PGP.PGP_da_first();
		this.da_0 = t;
		t.skinName = "PGP_da_r_0Skin";
		t.x = 84.39;
		t.y = 0;
		return t;
	};
	_proto.da_1_i = function () {
		var t = new PGP.PGP_da_second();
		this.da_1 = t;
		t.scaleX = 1;
		t.skinName = "PGP_da_r_1Skin";
		t.x = 46.39;
		t.y = 17.65;
		return t;
	};
	_proto.da_2_i = function () {
		var t = new PGP.PGP_da_third();
		this.da_2 = t;
		t.scaleX = 1;
		t.skinName = "PGP_da_r_2Skin";
		t.x = -2.16;
		t.y = 37.32;
		return t;
	};
	_proto.focusImg_i = function () {
		var t = new eui.Image();
		this.focusImg = t;
		t.anchorOffsetX = 30.8;
		t.anchorOffsetY = 48.8;
		t.source = "PGP_logo_tishi_png";
		t.x = 75.8;
		t.y = 103.8;
		return t;
	};
	return PGP_Dapai_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Dapai_3Skin.exml'] = window.PGP_Dapai_3Skin = (function (_super) {
	__extends(PGP_Dapai_3Skin, _super);
	function PGP_Dapai_3Skin() {
		_super.call(this);
		this.skinParts = ["da_0","da_1","da_2","focusImg"];
		
		this.height = 120;
		this.width = 363;
		this.elementsContent = [this.da_0_i(),this.da_1_i(),this.da_2_i(),this.focusImg_i()];
	}
	var _proto = PGP_Dapai_3Skin.prototype;

	_proto.da_0_i = function () {
		var t = new PGP.PGP_da_first();
		this.da_0 = t;
		t.scaleX = 0.94;
		t.scaleY = 0.94;
		t.skinName = "PGP_da_u_0Skin";
		t.x = 12.33;
		t.y = 1.33;
		return t;
	};
	_proto.da_1_i = function () {
		var t = new PGP.PGP_da_second();
		this.da_1 = t;
		t.scaleX = 0.97;
		t.scaleY = 0.97;
		t.skinName = "PGP_da_u_1Skin";
		t.x = 42.99;
		t.y = 33.66;
		return t;
	};
	_proto.da_2_i = function () {
		var t = new PGP.PGP_da_third();
		this.da_2 = t;
		t.skinName = "PGP_da_u_2Skin";
		t.x = 73;
		t.y = 65.65;
		return t;
	};
	_proto.focusImg_i = function () {
		var t = new eui.Image();
		this.focusImg = t;
		t.anchorOffsetX = 30.8;
		t.anchorOffsetY = 48.8;
		t.source = "PGP_logo_tishi_png";
		t.x = 147.8;
		t.y = 73.8;
		return t;
	};
	return PGP_Dapai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Huapai_0Skin.exml'] = window.PGP_Huapai_0Skin = (function (_super) {
	__extends(PGP_Huapai_0Skin, _super);
	function PGP_Huapai_0Skin() {
		_super.call(this);
		this.skinParts = ["hua_5","hua_6","hua_7","hua_8","hua_0","hua_1","hua_2","hua_3","hua_4"];
		
		this.height = 220;
		this.width = 170;
		this.elementsContent = [this.hua_5_i(),this.hua_6_i(),this.hua_7_i(),this.hua_8_i(),this.hua_0_i(),this.hua_1_i(),this.hua_2_i(),this.hua_3_i(),this.hua_4_i()];
	}
	var _proto = PGP_Huapai_0Skin.prototype;

	_proto.hua_5_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_5 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 28;
		t.y = 2;
		return t;
	};
	_proto.hua_6_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_6 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 18;
		t.y = 39;
		return t;
	};
	_proto.hua_7_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_7 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 9;
		t.y = 75;
		return t;
	};
	_proto.hua_8_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_8 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = -1;
		t.y = 116;
		return t;
	};
	_proto.hua_0_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_0 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 87;
		t.y = 2;
		return t;
	};
	_proto.hua_1_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_1 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 78;
		t.y = 39;
		return t;
	};
	_proto.hua_2_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_2 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 69;
		t.y = 77;
		return t;
	};
	_proto.hua_3_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_3 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 60;
		t.y = 119;
		return t;
	};
	_proto.hua_4_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_4 = t;
		t.skinName = "PGP_hua_0Skin";
		t.x = 51;
		t.y = 161;
		return t;
	};
	return PGP_Huapai_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Huapai_1Skin.exml'] = window.PGP_Huapai_1Skin = (function (_super) {
	__extends(PGP_Huapai_1Skin, _super);
	function PGP_Huapai_1Skin() {
		_super.call(this);
		this.skinParts = ["hua_8","hua_7","hua_6","hua_5","hua_4","hua_3","hua_2","hua_1","hua_0"];
		
		this.height = 187;
		this.width = 190;
		this.elementsContent = [this.hua_8_i(),this.hua_7_i(),this.hua_6_i(),this.hua_5_i(),this.hua_4_i(),this.hua_3_i(),this.hua_2_i(),this.hua_1_i(),this.hua_0_i()];
	}
	var _proto = PGP_Huapai_1Skin.prototype;

	_proto.hua_8_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_8 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 90;
		t.y = -5;
		return t;
	};
	_proto.hua_7_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_7 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 46;
		t.y = -5;
		return t;
	};
	_proto.hua_6_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_6 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 2;
		t.y = -4;
		return t;
	};
	_proto.hua_5_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_5 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 106;
		t.y = 50;
		return t;
	};
	_proto.hua_4_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_4 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 60;
		t.y = 50;
		return t;
	};
	_proto.hua_3_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_3 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 14;
		t.y = 50;
		return t;
	};
	_proto.hua_2_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_2 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 120;
		t.y = 107;
		return t;
	};
	_proto.hua_1_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_1 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 74;
		t.y = 107;
		return t;
	};
	_proto.hua_0_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_0 = t;
		t.skinName = "PGP_hua_1Skin";
		t.x = 28;
		t.y = 107;
		return t;
	};
	return PGP_Huapai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Huapai_2Skin.exml'] = window.PGP_Huapai_2Skin = (function (_super) {
	__extends(PGP_Huapai_2Skin, _super);
	function PGP_Huapai_2Skin() {
		_super.call(this);
		this.skinParts = ["hua_8","hua_7","hua_6","hua_5","hua_4","hua_3","hua_2","hua_1","hua_0"];
		
		this.height = 130;
		this.width = 130;
		this.elementsContent = [this.hua_8_i(),this.hua_7_i(),this.hua_6_i(),this.hua_5_i(),this.hua_4_i(),this.hua_3_i(),this.hua_2_i(),this.hua_1_i(),this.hua_0_i()];
	}
	var _proto = PGP_Huapai_2Skin.prototype;

	_proto.hua_8_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_8 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 49;
		t.y = 19;
		return t;
	};
	_proto.hua_7_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_7 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 56;
		t.y = 42.5;
		return t;
	};
	_proto.hua_6_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_6 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 62;
		t.y = 65;
		return t;
	};
	_proto.hua_5_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_5 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 69;
		t.y = 86.5;
		return t;
	};
	_proto.hua_4_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_4 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 0;
		t.y = -2.5;
		return t;
	};
	_proto.hua_3_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_3 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 7;
		t.y = 19;
		return t;
	};
	_proto.hua_2_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_2 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 14;
		t.y = 42.5;
		return t;
	};
	_proto.hua_1_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_1 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 21;
		t.y = 64;
		return t;
	};
	_proto.hua_0_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_0 = t;
		t.skinName = "PGP_hua_2Skin";
		t.x = 26;
		t.y = 86.5;
		return t;
	};
	return PGP_Huapai_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Huapai_3Skin.exml'] = window.PGP_Huapai_3Skin = (function (_super) {
	__extends(PGP_Huapai_3Skin, _super);
	function PGP_Huapai_3Skin() {
		_super.call(this);
		this.skinParts = ["hua_2","hua_1","hua_0","hua_5","hua_4","hua_3","hua_8","hua_7","hua_6"];
		
		this.height = 117;
		this.width = 125;
		this.elementsContent = [this.hua_2_i(),this.hua_1_i(),this.hua_0_i(),this.hua_5_i(),this.hua_4_i(),this.hua_3_i(),this.hua_8_i(),this.hua_7_i(),this.hua_6_i()];
	}
	var _proto = PGP_Huapai_3Skin.prototype;

	_proto.hua_2_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_2 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 8;
		t.y = 1;
		return t;
	};
	_proto.hua_1_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_1 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 39;
		t.y = 1;
		return t;
	};
	_proto.hua_0_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_0 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 70;
		t.y = 1;
		return t;
	};
	_proto.hua_5_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_5 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 1;
		t.y = 31;
		return t;
	};
	_proto.hua_4_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_4 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 32;
		t.y = 31;
		return t;
	};
	_proto.hua_3_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_3 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 63;
		t.y = 31;
		return t;
	};
	_proto.hua_8_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_8 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = -6;
		t.y = 61;
		return t;
	};
	_proto.hua_7_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_7 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 25;
		t.y = 61;
		return t;
	};
	_proto.hua_6_i = function () {
		var t = new PGP.PGP_hua();
		this.hua_6 = t;
		t.skinName = "PGP_hua_3Skin";
		t.x = 57.5;
		t.y = 62;
		return t;
	};
	return PGP_Huapai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Hupai_0Skin.exml'] = window.PGP_Hupai_0Skin = (function (_super) {
	__extends(PGP_Hupai_0Skin, _super);
	function PGP_Hupai_0Skin() {
		_super.call(this);
		this.skinParts = ["bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_7","bg_8","bg_9","bg_10","bg_11","bg_12","bg_13","pai_0","pai_1","pai_2","pai_3","pai_4","pai_5","pai_6","pai_7","pai_8","pai_9","pai_10","pai_11","pai_12","pai_13"];
		
		this.height = 385;
		this.width = 160;
		this.elementsContent = [this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.bg_6_i(),this.bg_7_i(),this.bg_8_i(),this.bg_9_i(),this.bg_10_i(),this.bg_11_i(),this.bg_12_i(),this.bg_13_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
	}
	var _proto = PGP_Hupai_0Skin.prototype;

	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "PGP_j_0_2_png";
		t.x = 104.5;
		t.y = -0.67;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "PGP_j_0_3_png";
		t.x = 97.5;
		t.y = 19.66;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "PGP_j_0_4_png";
		t.x = 90.61;
		t.y = 42.5;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "PGP_j_0_5_png";
		t.x = 84;
		t.y = 65.92;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "PGP_j_0_6_png";
		t.x = 76.64;
		t.y = 88.73;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "PGP_j_0_7_png";
		t.x = 69;
		t.y = 113.92;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "PGP_j_0_8_png";
		t.x = 61.5;
		t.y = 139.42;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "PGP_j_0_9_png";
		t.x = 53.5;
		t.y = 164;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.source = "PGP_j_0_10_png";
		t.x = 45;
		t.y = 190.04;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.source = "PGP_j_0_11_png";
		t.x = 37;
		t.y = 216.85;
		return t;
	};
	_proto.bg_10_i = function () {
		var t = new eui.Image();
		this.bg_10 = t;
		t.source = "PGP_j_0_12_png";
		t.x = 28.63;
		t.y = 244.73;
		return t;
	};
	_proto.bg_11_i = function () {
		var t = new eui.Image();
		this.bg_11 = t;
		t.source = "PGP_j_0_13_png";
		t.x = 19.5;
		t.y = 272.73;
		return t;
	};
	_proto.bg_12_i = function () {
		var t = new eui.Image();
		this.bg_12 = t;
		t.source = "PGP_j_0_14_png";
		t.x = 10;
		t.y = 303.23;
		return t;
	};
	_proto.bg_13_i = function () {
		var t = new eui.Image();
		this.bg_13 = t;
		t.source = "PGP_j_0_14_png";
		t.x = 0.84;
		t.y = 336;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 131.64;
		t.y = 8.49;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.35;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 124.77;
		t.y = 30.94;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.35;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 117.92;
		t.y = 54.27;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.35;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 111.75;
		t.y = 77.61;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.35;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 104.75;
		t.y = 101.11;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.35;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 96.91;
		t.y = 126.78;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.35;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 89.91;
		t.y = 152.11;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 81.57;
		t.y = 178.45;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 74.57;
		t.y = 203.95;
		t.elementsContent = [this.pai_8_i()];
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 68.24;
		t.y = 231.45;
		t.elementsContent = [this.pai_9_i()];
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 60.04;
		t.y = 259;
		t.elementsContent = [this.pai_10_i()];
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 51.77;
		t.y = 288;
		t.elementsContent = [this.pai_11_i()];
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 43.77;
		t.y = 319;
		t.elementsContent = [this.pai_12_i()];
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.skewX = 15;
		t.x = 36.24;
		t.y = 352;
		t.elementsContent = [this.pai_13_i()];
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 53;
		t.rotation = 90;
		t.scaleX = 0.45;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_Hupai_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Hupai_1Skin.exml'] = window.PGP_Hupai_1Skin = (function (_super) {
	__extends(PGP_Hupai_1Skin, _super);
	function PGP_Hupai_1Skin() {
		_super.call(this);
		this.skinParts = ["bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","bg_6","bg_12","bg_11","bg_10","bg_9","bg_8","bg_7","pai_0","pai_1","pai_2","pai_3","pai_4","pai_5","pai_6","pai_7","pai_8","pai_9","pai_10","pai_11","pai_12"];
		
		this.height = 76;
		this.width = 592;
		this.elementsContent = [this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.bg_6_i(),this.bg_12_i(),this.bg_11_i(),this.bg_10_i(),this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i(),this.pai_6_i(),this.pai_7_i(),this.pai_8_i(),this.pai_9_i(),this.pai_10_i(),this.pai_11_i(),this.pai_12_i()];
	}
	var _proto = PGP_Hupai_1Skin.prototype;

	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "PGP_j_1_2_png";
		t.x = 0;
		t.y = 9.47;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "PGP_j_1_3_png";
		t.x = 44.99;
		t.y = 9.47;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "PGP_j_1_4_png";
		t.x = 89.98;
		t.y = 9.47;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "PGP_j_1_5_png";
		t.x = 134.97;
		t.y = 9.47;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "PGP_j_1_6_png";
		t.x = 180;
		t.y = 9.47;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "PGP_j_1_7_png";
		t.x = 225.67;
		t.y = 9.47;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "PGP_j_1_8_png";
		t.x = 271.32;
		t.y = 9.47;
		return t;
	};
	_proto.bg_12_i = function () {
		var t = new eui.Image();
		this.bg_12 = t;
		t.source = "PGP_j_1_14_png";
		t.x = 532.67;
		t.y = 9.47;
		return t;
	};
	_proto.bg_11_i = function () {
		var t = new eui.Image();
		this.bg_11 = t;
		t.source = "PGP_j_1_13_png";
		t.x = 488.98;
		t.y = 9.47;
		return t;
	};
	_proto.bg_10_i = function () {
		var t = new eui.Image();
		this.bg_10 = t;
		t.source = "PGP_j_1_12_png";
		t.x = 445.34;
		t.y = 9.47;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.source = "PGP_j_1_11_png";
		t.x = 402.31;
		t.y = 9.47;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.source = "PGP_j_1_10_png";
		t.x = 359.32;
		t.y = 9.47;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "PGP_j_1_9_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
		t.x = 562.7;
		t.y = 32.33;
		return t;
	};
	return PGP_Hupai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Hupai_2Skin.exml'] = window.PGP_Hupai_2Skin = (function (_super) {
	__extends(PGP_Hupai_2Skin, _super);
	function PGP_Hupai_2Skin() {
		_super.call(this);
		this.skinParts = ["bg_13","bg_12","bg_11","bg_10","bg_9","bg_8","bg_7","bg_6","bg_5","bg_4","bg_3","bg_2","bg_1","bg_0","pai_0","pai_1","pai_2","pai_3","pai_4","pai_5","pai_6","pai_7","pai_8","pai_9","pai_10","pai_11","pai_12","pai_13"];
		
		this.height = 385;
		this.width = 160;
		this.elementsContent = [this.bg_13_i(),this.bg_12_i(),this.bg_11_i(),this.bg_10_i(),this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.bg_6_i(),this.bg_5_i(),this.bg_4_i(),this.bg_3_i(),this.bg_2_i(),this.bg_1_i(),this.bg_0_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i()];
	}
	var _proto = PGP_Hupai_2Skin.prototype;

	_proto.bg_13_i = function () {
		var t = new eui.Image();
		this.bg_13 = t;
		t.source = "PGP_j_2_14_png";
		t.x = 0.01;
		t.y = 0.33;
		return t;
	};
	_proto.bg_12_i = function () {
		var t = new eui.Image();
		this.bg_12 = t;
		t.source = "PGP_j_2_14_png";
		t.x = 5.51;
		t.y = 21;
		return t;
	};
	_proto.bg_11_i = function () {
		var t = new eui.Image();
		this.bg_11 = t;
		t.source = "PGP_j_2_13_png";
		t.x = 11.34;
		t.y = 42.67;
		return t;
	};
	_proto.bg_10_i = function () {
		var t = new eui.Image();
		this.bg_10 = t;
		t.source = "PGP_j_2_12_png";
		t.x = 16.01;
		t.y = 64.69;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.source = "PGP_j_2_11_png";
		t.x = 21.51;
		t.y = 87.02;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.source = "PGP_j_2_10_png";
		t.x = 28.01;
		t.y = 109.71;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "PGP_j_2_9_png";
		t.x = 33.51;
		t.y = 134.17;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "PGP_j_2_8_png";
		t.x = 40.14;
		t.y = 159.17;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "PGP_j_2_7_png";
		t.x = 47.01;
		t.y = 185.34;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "PGP_j_2_6_png";
		t.x = 53.64;
		t.y = 212.69;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "PGP_j_2_5_png";
		t.x = 60.01;
		t.y = 240.38;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "PGP_j_2_4_png";
		t.x = 67.36;
		t.y = 268.57;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "PGP_j_2_3_png";
		t.x = 75.06;
		t.y = 299.02;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "PGP_j_2_2_png";
		t.x = 83.01;
		t.y = 330.34;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 118.64;
		t.y = 343.16;
		t.elementsContent = [this.pai_0_i()];
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.45;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 107.8;
		t.y = 311.49;
		t.elementsContent = [this.pai_1_i()];
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.45;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 100.8;
		t.y = 280.83;
		t.elementsContent = [this.pai_2_i()];
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 92.48;
		t.y = 252.51;
		t.elementsContent = [this.pai_3_i()];
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 84.14;
		t.y = 222.99;
		t.elementsContent = [this.pai_4_i()];
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 76.47;
		t.y = 195.99;
		t.elementsContent = [this.pai_5_i()];
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 68.8;
		t.y = 169.49;
		t.elementsContent = [this.pai_6_i()];
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.5;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 61.33;
		t.y = 144.5;
		t.elementsContent = [this.pai_7_i()];
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.4;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 54.29;
		t.y = 120.49;
		t.elementsContent = [this.pai_8_i()];
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 48.46;
		t.y = 96.66;
		t.elementsContent = [this.pai_9_i()];
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 41.62;
		t.y = 74.17;
		t.elementsContent = [this.pai_10_i()];
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 35.62;
		t.y = 51.67;
		t.elementsContent = [this.pai_11_i()];
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 29.46;
		t.y = 29.5;
		t.elementsContent = [this.pai_12_i()];
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.skewX = -15;
		t.x = 24.13;
		t.y = 8.67;
		t.elementsContent = [this.pai_13_i()];
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.anchorOffsetX = 45.41;
		t.anchorOffsetY = 53;
		t.rotation = -90;
		t.scaleX = 0.35;
		t.scaleY = 0.45;
		t.source = "PGP_card_7_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PGP_Hupai_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Hupai_3Skin.exml'] = window.PGP_Hupai_3Skin = (function (_super) {
	__extends(PGP_Hupai_3Skin, _super);
	function PGP_Hupai_3Skin() {
		_super.call(this);
		this.skinParts = ["bg_13","bg_12","bg_11","bg_10","bg_9","bg_8","bg_7","bg_6","bg_0","bg_1","bg_2","bg_3","bg_4","bg_5","pai_12","pai_13","pai_11","pai_10","pai_9","pai_8","pai_7","pai_6","pai_5","pai_4","pai_3","pai_2","pai_1","pai_0"];
		
		this.height = 44;
		this.width = 404;
		this.elementsContent = [this.bg_13_i(),this.bg_12_i(),this.bg_11_i(),this.bg_10_i(),this.bg_9_i(),this.bg_8_i(),this.bg_7_i(),this.bg_6_i(),this.bg_0_i(),this.bg_1_i(),this.bg_2_i(),this.bg_3_i(),this.bg_4_i(),this.bg_5_i(),this.pai_12_i(),this.pai_13_i(),this.pai_11_i(),this.pai_10_i(),this.pai_9_i(),this.pai_8_i(),this.pai_7_i(),this.pai_6_i(),this.pai_5_i(),this.pai_4_i(),this.pai_3_i(),this.pai_2_i(),this.pai_1_i(),this.pai_0_i()];
	}
	var _proto = PGP_Hupai_3Skin.prototype;

	_proto.bg_13_i = function () {
		var t = new eui.Image();
		this.bg_13 = t;
		t.source = "PGP_j_3_14_png";
		t.x = -48;
		t.y = 0.1;
		return t;
	};
	_proto.bg_12_i = function () {
		var t = new eui.Image();
		this.bg_12 = t;
		t.source = "PGP_j_3_14_png";
		t.x = 0;
		t.y = 0.5;
		return t;
	};
	_proto.bg_11_i = function () {
		var t = new eui.Image();
		this.bg_11 = t;
		t.source = "PGP_j_3_13_png";
		t.x = 30.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_10_i = function () {
		var t = new eui.Image();
		this.bg_10 = t;
		t.source = "PGP_j_3_12_png";
		t.x = 61.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_9_i = function () {
		var t = new eui.Image();
		this.bg_9 = t;
		t.source = "PGP_j_3_11_png";
		t.x = 92.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_8_i = function () {
		var t = new eui.Image();
		this.bg_8 = t;
		t.source = "PGP_j_3_10_png";
		t.x = 123.5;
		t.y = 0.5;
		return t;
	};
	_proto.bg_7_i = function () {
		var t = new eui.Image();
		this.bg_7 = t;
		t.source = "PGP_j_3_9_png";
		t.x = 155;
		t.y = 0.5;
		return t;
	};
	_proto.bg_6_i = function () {
		var t = new eui.Image();
		this.bg_6 = t;
		t.source = "PGP_j_3_8_png";
		t.x = 186;
		t.y = 0.5;
		return t;
	};
	_proto.bg_0_i = function () {
		var t = new eui.Image();
		this.bg_0 = t;
		t.source = "PGP_j_3_2_png";
		t.x = 367;
		t.y = 1.5;
		return t;
	};
	_proto.bg_1_i = function () {
		var t = new eui.Image();
		this.bg_1 = t;
		t.source = "PGP_j_3_3_png";
		t.x = 336.5;
		t.y = 1.5;
		return t;
	};
	_proto.bg_2_i = function () {
		var t = new eui.Image();
		this.bg_2 = t;
		t.source = "PGP_j_3_4_png";
		t.x = 306.5;
		t.y = 1.5;
		return t;
	};
	_proto.bg_3_i = function () {
		var t = new eui.Image();
		this.bg_3 = t;
		t.source = "PGP_j_3_5_png";
		t.x = 276;
		t.y = 1.5;
		return t;
	};
	_proto.bg_4_i = function () {
		var t = new eui.Image();
		this.bg_4 = t;
		t.source = "PGP_j_3_6_png";
		t.x = 246;
		t.y = 1.67;
		return t;
	};
	_proto.bg_5_i = function () {
		var t = new eui.Image();
		this.bg_5 = t;
		t.source = "PGP_j_3_7_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
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
		t.source = "PGP_card_6_png";
		t.x = 386.71;
		t.y = 17;
		return t;
	};
	return PGP_Hupai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Paidun_0Skin.exml'] = window.PGP_Paidun_0Skin = (function (_super) {
	__extends(PGP_Paidun_0Skin, _super);
	function PGP_Paidun_0Skin() {
		_super.call(this);
		this.skinParts = ["pai_33","pai_31","pai_29","pai_27","pai_25","pai_23","pai_21","pai_19","pai_17","pai_15","pai_13","pai_11","pai_9","pai_7","pai_5","pai_3","pai_1","pai_32","pai_30","pai_28","pai_26","pai_24","pai_22","pai_20","pai_18","pai_16","pai_14","pai_12","pai_10","pai_8","pai_6","pai_4","pai_2","pai_0"];
		
		this.height = 480;
		this.width = 165;
		this.elementsContent = [this.pai_33_i(),this.pai_31_i(),this.pai_29_i(),this.pai_27_i(),this.pai_25_i(),this.pai_23_i(),this.pai_21_i(),this.pai_19_i(),this.pai_17_i(),this.pai_15_i(),this.pai_13_i(),this.pai_11_i(),this.pai_9_i(),this.pai_7_i(),this.pai_5_i(),this.pai_3_i(),this.pai_1_i(),this.pai_32_i(),this.pai_30_i(),this.pai_28_i(),this.pai_26_i(),this.pai_24_i(),this.pai_22_i(),this.pai_20_i(),this.pai_18_i(),this.pai_16_i(),this.pai_14_i(),this.pai_12_i(),this.pai_10_i(),this.pai_8_i(),this.pai_6_i(),this.pai_4_i(),this.pai_2_i(),this.pai_0_i()];
	}
	var _proto = PGP_Paidun_0Skin.prototype;

	_proto.pai_33_i = function () {
		var t = new eui.Image();
		this.pai_33 = t;
		t.source = "PGP_r_0_16_png";
		t.x = 112.56;
		t.y = 23.58;
		return t;
	};
	_proto.pai_31_i = function () {
		var t = new eui.Image();
		this.pai_31 = t;
		t.source = "PGP_r_0_14_png";
		t.x = 107.55;
		t.y = 46.25;
		return t;
	};
	_proto.pai_29_i = function () {
		var t = new eui.Image();
		this.pai_29 = t;
		t.source = "PGP_r_0_12_png";
		t.x = 103.59;
		t.y = 67.3;
		return t;
	};
	_proto.pai_27_i = function () {
		var t = new eui.Image();
		this.pai_27 = t;
		t.source = "PGP_r_0_10_png";
		t.x = 99.61;
		t.y = 92.35;
		return t;
	};
	_proto.pai_25_i = function () {
		var t = new eui.Image();
		this.pai_25 = t;
		t.source = "PGP_r_0_12_png";
		t.x = 94.99;
		t.y = 115.94;
		return t;
	};
	_proto.pai_23_i = function () {
		var t = new eui.Image();
		this.pai_23 = t;
		t.source = "PGP_r_0_14_png";
		t.x = 88.49;
		t.y = 137.11;
		return t;
	};
	_proto.pai_21_i = function () {
		var t = new eui.Image();
		this.pai_21 = t;
		t.source = "PGP_r_0_16_png";
		t.x = 82.49;
		t.y = 159.11;
		return t;
	};
	_proto.pai_19_i = function () {
		var t = new eui.Image();
		this.pai_19 = t;
		t.source = "PGP_r_0_18_png";
		t.x = 75.49;
		t.y = 182.11;
		return t;
	};
	_proto.pai_17_i = function () {
		var t = new eui.Image();
		this.pai_17 = t;
		t.source = "PGP_r_0_20_png";
		t.x = 69.49;
		t.y = 205.61;
		return t;
	};
	_proto.pai_15_i = function () {
		var t = new eui.Image();
		this.pai_15 = t;
		t.source = "PGP_r_0_22_png";
		t.x = 62.49;
		t.y = 230.61;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "PGP_r_0_24_png";
		t.x = 55.49;
		t.y = 254.27;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "PGP_r_0_26_png";
		t.x = 48.49;
		t.y = 280.77;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "PGP_r_0_28_png";
		t.x = 40.49;
		t.y = 308.27;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "PGP_r_0_30_png";
		t.x = 32.49;
		t.y = 338.11;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "PGP_r_0_32_png";
		t.x = 24.49;
		t.y = 368.11;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "PGP_r_0_34_png";
		t.x = 16.49;
		t.y = 399.11;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "PGP_r_0_36_png";
		t.x = 7.49;
		t.y = 434.28;
		return t;
	};
	_proto.pai_32_i = function () {
		var t = new eui.Image();
		this.pai_32 = t;
		t.source = "PGP_r_0_15_png";
		t.x = 108.51;
		t.y = 7.35;
		return t;
	};
	_proto.pai_30_i = function () {
		var t = new eui.Image();
		this.pai_30 = t;
		t.source = "PGP_r_0_13_png";
		t.x = 103.85;
		t.y = 31.34;
		return t;
	};
	_proto.pai_28_i = function () {
		var t = new eui.Image();
		this.pai_28 = t;
		t.source = "PGP_r_0_11_png";
		t.x = 98.86;
		t.y = 54.67;
		return t;
	};
	_proto.pai_26_i = function () {
		var t = new eui.Image();
		this.pai_26 = t;
		t.source = "PGP_r_0_9_png";
		t.x = 94.18;
		t.y = 78.2;
		return t;
	};
	_proto.pai_24_i = function () {
		var t = new eui.Image();
		this.pai_24 = t;
		t.source = "PGP_r_0_11_png";
		t.x = 88.17;
		t.y = 101.79;
		return t;
	};
	_proto.pai_22_i = function () {
		var t = new eui.Image();
		this.pai_22 = t;
		t.source = "PGP_r_0_13_png";
		t.x = 82.17;
		t.y = 124.29;
		return t;
	};
	_proto.pai_20_i = function () {
		var t = new eui.Image();
		this.pai_20 = t;
		t.source = "PGP_r_0_15_png";
		t.x = 76.17;
		t.y = 146.29;
		return t;
	};
	_proto.pai_18_i = function () {
		var t = new eui.Image();
		this.pai_18 = t;
		t.source = "PGP_r_0_17_png";
		t.x = 70.17;
		t.y = 169.29;
		return t;
	};
	_proto.pai_16_i = function () {
		var t = new eui.Image();
		this.pai_16 = t;
		t.source = "PGP_r_0_19_png";
		t.x = 63.67;
		t.y = 192.79;
		return t;
	};
	_proto.pai_14_i = function () {
		var t = new eui.Image();
		this.pai_14 = t;
		t.source = "PGP_r_0_21_png";
		t.x = 56.67;
		t.y = 217.79;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "PGP_r_0_23_png";
		t.x = 49.67;
		t.y = 242.46;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "PGP_r_0_25_png";
		t.x = 42.17;
		t.y = 268.96;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "PGP_r_0_27_png";
		t.x = 34.17;
		t.y = 296.46;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "PGP_r_0_29_png";
		t.x = 26.17;
		t.y = 324.96;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "PGP_r_0_31_png";
		t.x = 18.17;
		t.y = 354.96;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "PGP_r_0_33_png";
		t.x = 9;
		t.y = 385.96;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "PGP_r_0_35_png";
		t.x = 0;
		t.y = 418.46;
		return t;
	};
	return PGP_Paidun_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Paidun_1Skin.exml'] = window.PGP_Paidun_1Skin = (function (_super) {
	__extends(PGP_Paidun_1Skin, _super);
	function PGP_Paidun_1Skin() {
		_super.call(this);
		this.skinParts = ["pai_33","pai_31","pai_29","pai_27","pai_25","pai_23","pai_21","pai_19","pai_17","pai_15","pai_1","pai_3","pai_5","pai_7","pai_9","pai_11","pai_13","pai_32","pai_30","pai_28","pai_26","pai_24","pai_22","pai_20","pai_18","pai_16","pai_14","pai_0","pai_2","pai_4","pai_6","pai_8","pai_10","pai_12"];
		
		this.height = 62;
		this.width = 690;
		this.elementsContent = [this.pai_33_i(),this.pai_31_i(),this.pai_29_i(),this.pai_27_i(),this.pai_25_i(),this.pai_23_i(),this.pai_21_i(),this.pai_19_i(),this.pai_17_i(),this.pai_15_i(),this.pai_1_i(),this.pai_3_i(),this.pai_5_i(),this.pai_7_i(),this.pai_9_i(),this.pai_11_i(),this.pai_13_i(),this.pai_32_i(),this.pai_30_i(),this.pai_28_i(),this.pai_26_i(),this.pai_24_i(),this.pai_22_i(),this.pai_20_i(),this.pai_18_i(),this.pai_16_i(),this.pai_14_i(),this.pai_0_i(),this.pai_2_i(),this.pai_4_i(),this.pai_6_i(),this.pai_8_i(),this.pai_10_i(),this.pai_12_i()];
	}
	var _proto = PGP_Paidun_1Skin.prototype;

	_proto.pai_33_i = function () {
		var t = new eui.Image();
		this.pai_33 = t;
		t.source = "PGP_r_1_15_png";
		t.x = 2;
		t.y = 1.16;
		return t;
	};
	_proto.pai_31_i = function () {
		var t = new eui.Image();
		this.pai_31 = t;
		t.source = "PGP_r_1_13_png";
		t.x = 42;
		t.y = 1.16;
		return t;
	};
	_proto.pai_29_i = function () {
		var t = new eui.Image();
		this.pai_29 = t;
		t.source = "PGP_r_1_11_png";
		t.x = 82.48;
		t.y = 1.16;
		return t;
	};
	_proto.pai_27_i = function () {
		var t = new eui.Image();
		this.pai_27 = t;
		t.source = "PGP_r_1_9_png";
		t.x = 121;
		t.y = 1.16;
		return t;
	};
	_proto.pai_25_i = function () {
		var t = new eui.Image();
		this.pai_25 = t;
		t.source = "PGP_r_1_11_png";
		t.x = 161;
		t.y = 1.16;
		return t;
	};
	_proto.pai_23_i = function () {
		var t = new eui.Image();
		this.pai_23 = t;
		t.source = "PGP_r_1_13_png";
		t.x = 202;
		t.y = 1.16;
		return t;
	};
	_proto.pai_21_i = function () {
		var t = new eui.Image();
		this.pai_21 = t;
		t.source = "PGP_r_1_15_png";
		t.x = 242.48;
		t.y = 1.16;
		return t;
	};
	_proto.pai_19_i = function () {
		var t = new eui.Image();
		this.pai_19 = t;
		t.source = "PGP_r_1_17_png";
		t.x = 281.86;
		t.y = 1.16;
		return t;
	};
	_proto.pai_17_i = function () {
		var t = new eui.Image();
		this.pai_17 = t;
		t.source = "PGP_r_1_19_png";
		t.x = 322.29;
		t.y = 1.16;
		return t;
	};
	_proto.pai_15_i = function () {
		var t = new eui.Image();
		this.pai_15 = t;
		t.source = "PGP_r_1_21_png";
		t.x = 360.18;
		t.y = 1.16;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "PGP_r_1_35_png";
		t.x = 635.04;
		t.y = 1.16;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "PGP_r_1_33_png";
		t.x = 595.81;
		t.y = 1.16;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "PGP_r_1_31_png";
		t.x = 555.92;
		t.y = 1.16;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "PGP_r_1_29_png";
		t.x = 517.61;
		t.y = 1.16;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "PGP_r_1_27_png";
		t.x = 478.31;
		t.y = 1.16;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "PGP_r_1_25_png";
		t.x = 438.96;
		t.y = 1.16;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "PGP_r_1_23_png";
		t.x = 398.58;
		t.y = 1.16;
		return t;
	};
	_proto.pai_32_i = function () {
		var t = new eui.Image();
		this.pai_32 = t;
		t.source = "PGP_r_1_15_png";
		t.x = -1;
		t.y = -10.96;
		return t;
	};
	_proto.pai_30_i = function () {
		var t = new eui.Image();
		this.pai_30 = t;
		t.source = "PGP_r_1_13_png";
		t.x = 38;
		t.y = -10.96;
		return t;
	};
	_proto.pai_28_i = function () {
		var t = new eui.Image();
		this.pai_28 = t;
		t.source = "PGP_r_1_11_png";
		t.x = 80;
		t.y = -10.96;
		return t;
	};
	_proto.pai_26_i = function () {
		var t = new eui.Image();
		this.pai_26 = t;
		t.source = "PGP_r_1_9_png";
		t.x = 118;
		t.y = -9.96;
		return t;
	};
	_proto.pai_24_i = function () {
		var t = new eui.Image();
		this.pai_24 = t;
		t.source = "PGP_r_1_11_png";
		t.x = 157;
		t.y = -9.96;
		return t;
	};
	_proto.pai_22_i = function () {
		var t = new eui.Image();
		this.pai_22 = t;
		t.source = "PGP_r_1_13_png";
		t.x = 199;
		t.y = -9.96;
		return t;
	};
	_proto.pai_20_i = function () {
		var t = new eui.Image();
		this.pai_20 = t;
		t.source = "PGP_r_1_15_png";
		t.x = 238.6;
		t.y = -9.96;
		return t;
	};
	_proto.pai_18_i = function () {
		var t = new eui.Image();
		this.pai_18 = t;
		t.source = "PGP_r_1_17_png";
		t.x = 280.31;
		t.y = -9.96;
		return t;
	};
	_proto.pai_16_i = function () {
		var t = new eui.Image();
		this.pai_16 = t;
		t.source = "PGP_r_1_19_png";
		t.x = 319.74;
		t.y = -9.96;
		return t;
	};
	_proto.pai_14_i = function () {
		var t = new eui.Image();
		this.pai_14 = t;
		t.source = "PGP_r_1_21_png";
		t.x = 359.96;
		t.y = -9.96;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "PGP_r_1_35_png";
		t.x = 636.65;
		t.y = -9.96;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "PGP_r_1_33_png";
		t.x = 597.25;
		t.y = -9.96;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "PGP_r_1_31_png";
		t.x = 557.36;
		t.y = -9.96;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "PGP_r_1_29_png";
		t.x = 518.05;
		t.y = -9.96;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "PGP_r_1_27_png";
		t.x = 479.75;
		t.y = -9.96;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "PGP_r_1_25_png";
		t.x = 439.07;
		t.y = -9.96;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "PGP_r_1_23_png";
		t.x = 399.69;
		t.y = -9.96;
		return t;
	};
	return PGP_Paidun_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Paidun_2Skin.exml'] = window.PGP_Paidun_2Skin = (function (_super) {
	__extends(PGP_Paidun_2Skin, _super);
	function PGP_Paidun_2Skin() {
		_super.call(this);
		this.skinParts = ["pai_1","pai_3","pai_5","pai_7","pai_9","pai_11","pai_13","pai_15","pai_17","pai_19","pai_21","pai_23","pai_25","pai_27","pai_29","pai_31","pai_33","pai_0","pai_2","pai_4","pai_6","pai_8","pai_10","pai_12","pai_14","pai_16","pai_18","pai_20","pai_22","pai_24","pai_26","pai_28","pai_30","pai_32"];
		
		this.height = 480;
		this.width = 165;
		this.elementsContent = [this.pai_1_i(),this.pai_3_i(),this.pai_5_i(),this.pai_7_i(),this.pai_9_i(),this.pai_11_i(),this.pai_13_i(),this.pai_15_i(),this.pai_17_i(),this.pai_19_i(),this.pai_21_i(),this.pai_23_i(),this.pai_25_i(),this.pai_27_i(),this.pai_29_i(),this.pai_31_i(),this.pai_33_i(),this.pai_0_i(),this.pai_2_i(),this.pai_4_i(),this.pai_6_i(),this.pai_8_i(),this.pai_10_i(),this.pai_12_i(),this.pai_14_i(),this.pai_16_i(),this.pai_18_i(),this.pai_20_i(),this.pai_22_i(),this.pai_24_i(),this.pai_26_i(),this.pai_28_i(),this.pai_30_i(),this.pai_32_i()];
	}
	var _proto = PGP_Paidun_2Skin.prototype;

	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "PGP_r_2_36_png";
		t.x = 0;
		t.y = 40.67;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "PGP_r_2_34_png";
		t.x = 5.16;
		t.y = 59.01;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "PGP_r_2_32_png";
		t.x = 9.5;
		t.y = 77.67;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "PGP_r_2_30_png";
		t.x = 13;
		t.y = 97.67;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "PGP_r_2_28_png";
		t.x = 18;
		t.y = 116.67;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "PGP_r_2_26_png";
		t.x = 23;
		t.y = 138.17;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "PGP_r_2_24_png";
		t.x = 28;
		t.y = 159.67;
		return t;
	};
	_proto.pai_15_i = function () {
		var t = new eui.Image();
		this.pai_15 = t;
		t.source = "PGP_r_2_22_png";
		t.x = 33;
		t.y = 182.67;
		return t;
	};
	_proto.pai_17_i = function () {
		var t = new eui.Image();
		this.pai_17 = t;
		t.source = "PGP_r_2_20_png";
		t.x = 37.5;
		t.y = 206.17;
		return t;
	};
	_proto.pai_19_i = function () {
		var t = new eui.Image();
		this.pai_19 = t;
		t.source = "PGP_r_2_18_png";
		t.x = 43.5;
		t.y = 229.67;
		return t;
	};
	_proto.pai_21_i = function () {
		var t = new eui.Image();
		this.pai_21 = t;
		t.source = "PGP_r_2_16_png";
		t.x = 48;
		t.y = 254.67;
		return t;
	};
	_proto.pai_23_i = function () {
		var t = new eui.Image();
		this.pai_23 = t;
		t.source = "PGP_r_2_14_png";
		t.x = 54;
		t.y = 280.17;
		return t;
	};
	_proto.pai_25_i = function () {
		var t = new eui.Image();
		this.pai_25 = t;
		t.source = "PGP_r_2_12_png";
		t.x = 60;
		t.y = 304.67;
		return t;
	};
	_proto.pai_27_i = function () {
		var t = new eui.Image();
		this.pai_27 = t;
		t.source = "PGP_r_2_14_png";
		t.x = 67.5;
		t.y = 333.67;
		return t;
	};
	_proto.pai_29_i = function () {
		var t = new eui.Image();
		this.pai_29 = t;
		t.source = "PGP_r_2_16_png";
		t.x = 74;
		t.y = 361.67;
		return t;
	};
	_proto.pai_31_i = function () {
		var t = new eui.Image();
		this.pai_31 = t;
		t.source = "PGP_r_2_18_png";
		t.x = 82;
		t.y = 388.17;
		return t;
	};
	_proto.pai_33_i = function () {
		var t = new eui.Image();
		this.pai_33 = t;
		t.source = "PGP_r_2_20_png";
		t.x = 87;
		t.y = 414.67;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "PGP_r_2_35_png";
		t.x = 6.33;
		t.y = 27;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "PGP_r_2_33_png";
		t.x = 11.49;
		t.y = 45.34;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "PGP_r_2_31_png";
		t.x = 15.16;
		t.y = 64;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "PGP_r_2_29_png";
		t.x = 20.67;
		t.y = 83.33;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "PGP_r_2_27_png";
		t.x = 24.33;
		t.y = 103;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "PGP_r_2_25_png";
		t.x = 29.33;
		t.y = 124.5;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "PGP_r_2_23_png";
		t.x = 34.33;
		t.y = 146;
		return t;
	};
	_proto.pai_14_i = function () {
		var t = new eui.Image();
		this.pai_14 = t;
		t.source = "PGP_r_2_21_png";
		t.x = 40.67;
		t.y = 169;
		return t;
	};
	_proto.pai_16_i = function () {
		var t = new eui.Image();
		this.pai_16 = t;
		t.source = "PGP_r_2_19_png";
		t.x = 45.17;
		t.y = 192.5;
		return t;
	};
	_proto.pai_18_i = function () {
		var t = new eui.Image();
		this.pai_18 = t;
		t.source = "PGP_r_2_17_png";
		t.x = 51.17;
		t.y = 216;
		return t;
	};
	_proto.pai_20_i = function () {
		var t = new eui.Image();
		this.pai_20 = t;
		t.source = "PGP_r_2_15_png";
		t.x = 55.67;
		t.y = 241;
		return t;
	};
	_proto.pai_22_i = function () {
		var t = new eui.Image();
		this.pai_22 = t;
		t.source = "PGP_r_2_13_png";
		t.x = 61.67;
		t.y = 266.5;
		return t;
	};
	_proto.pai_24_i = function () {
		var t = new eui.Image();
		this.pai_24 = t;
		t.source = "PGP_r_2_11_png";
		t.x = 68.34;
		t.y = 293;
		return t;
	};
	_proto.pai_26_i = function () {
		var t = new eui.Image();
		this.pai_26 = t;
		t.source = "PGP_r_2_13_png";
		t.x = 74.51;
		t.y = 319.35;
		return t;
	};
	_proto.pai_28_i = function () {
		var t = new eui.Image();
		this.pai_28 = t;
		t.source = "PGP_r_2_15_png";
		t.x = 81.85;
		t.y = 346.34;
		return t;
	};
	_proto.pai_30_i = function () {
		var t = new eui.Image();
		this.pai_30 = t;
		t.source = "PGP_r_2_17_png";
		t.x = 88.86;
		t.y = 373.67;
		return t;
	};
	_proto.pai_32_i = function () {
		var t = new eui.Image();
		this.pai_32 = t;
		t.source = "PGP_r_2_18_png";
		t.x = 96.18;
		t.y = 401.2;
		return t;
	};
	return PGP_Paidun_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Paidun_3Skin.exml'] = window.PGP_Paidun_3Skin = (function (_super) {
	__extends(PGP_Paidun_3Skin, _super);
	function PGP_Paidun_3Skin() {
		_super.call(this);
		this.skinParts = ["pai_15","pai_17","pai_19","pai_21","pai_23","pai_25","pai_27","pai_29","pai_31","pai_33","pai_1","pai_3","pai_5","pai_7","pai_9","pai_11","pai_13","pai_0","pai_2","pai_4","pai_6","pai_8","pai_10","pai_12","pai_32","pai_30","pai_28","pai_26","pai_24","pai_22","pai_20","pai_18","pai_16","pai_14"];
		
		this.width = 485;
		this.elementsContent = [this.pai_15_i(),this.pai_17_i(),this.pai_19_i(),this.pai_21_i(),this.pai_23_i(),this.pai_25_i(),this.pai_27_i(),this.pai_29_i(),this.pai_31_i(),this.pai_33_i(),this.pai_1_i(),this.pai_3_i(),this.pai_5_i(),this.pai_7_i(),this.pai_9_i(),this.pai_11_i(),this.pai_13_i(),this.pai_0_i(),this.pai_2_i(),this.pai_4_i(),this.pai_6_i(),this.pai_8_i(),this.pai_10_i(),this.pai_12_i(),this.pai_32_i(),this.pai_30_i(),this.pai_28_i(),this.pai_26_i(),this.pai_24_i(),this.pai_22_i(),this.pai_20_i(),this.pai_18_i(),this.pai_16_i(),this.pai_14_i()];
	}
	var _proto = PGP_Paidun_3Skin.prototype;

	_proto.pai_15_i = function () {
		var t = new eui.Image();
		this.pai_15 = t;
		t.source = "PGP_r_3_22_png";
		t.x = 198.66;
		t.y = 15.67;
		return t;
	};
	_proto.pai_17_i = function () {
		var t = new eui.Image();
		this.pai_17 = t;
		t.source = "PGP_r_3_20_png";
		t.x = 227.52;
		t.y = 16.34;
		return t;
	};
	_proto.pai_19_i = function () {
		var t = new eui.Image();
		this.pai_19 = t;
		t.source = "PGP_r_3_18_png";
		t.x = 255.89;
		t.y = 16.34;
		return t;
	};
	_proto.pai_21_i = function () {
		var t = new eui.Image();
		this.pai_21 = t;
		t.source = "PGP_r_3_16_png";
		t.x = 283.98;
		t.y = 16.34;
		return t;
	};
	_proto.pai_23_i = function () {
		var t = new eui.Image();
		this.pai_23 = t;
		t.source = "PGP_r_3_14_png";
		t.x = 311.64;
		t.y = 16.17;
		return t;
	};
	_proto.pai_25_i = function () {
		var t = new eui.Image();
		this.pai_25 = t;
		t.source = "PGP_r_3_12_png";
		t.x = 339.99;
		t.y = 16.17;
		return t;
	};
	_proto.pai_27_i = function () {
		var t = new eui.Image();
		this.pai_27 = t;
		t.source = "PGP_r_3_10_png";
		t.x = 366.21;
		t.y = 15.67;
		return t;
	};
	_proto.pai_29_i = function () {
		var t = new eui.Image();
		this.pai_29 = t;
		t.source = "PGP_r_3_12_png";
		t.x = 395.64;
		t.y = 16.17;
		return t;
	};
	_proto.pai_31_i = function () {
		var t = new eui.Image();
		this.pai_31 = t;
		t.source = "PGP_r_3_14_png";
		t.x = 423.99;
		t.y = 16.17;
		return t;
	};
	_proto.pai_33_i = function () {
		var t = new eui.Image();
		this.pai_33 = t;
		t.source = "PGP_r_3_16_png";
		t.x = 453.21;
		t.y = 15.67;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "PGP_r_3_36_png";
		t.x = 5;
		t.y = 15.67;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "PGP_r_3_34_png";
		t.x = 31.01;
		t.y = 15.67;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "PGP_r_3_32_png";
		t.x = 59.51;
		t.y = 15.67;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "PGP_r_3_30_png";
		t.x = 87.16;
		t.y = 15.67;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "PGP_r_3_28_png";
		t.x = 114.83;
		t.y = 15.67;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "PGP_r_3_26_png";
		t.x = 143.36;
		t.y = 15.67;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "PGP_r_3_24_png";
		t.x = 171.34;
		t.y = 15.67;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "PGP_r_3_35_png";
		t.x = 0.4;
		t.y = 0.69;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "PGP_r_3_33_png";
		t.x = 28.45;
		t.y = 1.36;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "PGP_r_3_31_png";
		t.x = 57.74;
		t.y = 1.69;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "PGP_r_3_29_png";
		t.x = 86;
		t.y = 1.86;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "PGP_r_3_27_png";
		t.x = 114.38;
		t.y = 2.03;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "PGP_r_3_25_png";
		t.x = 142.88;
		t.y = 2.03;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "PGP_r_3_23_png";
		t.x = 171.17;
		t.y = 2.03;
		return t;
	};
	_proto.pai_32_i = function () {
		var t = new eui.Image();
		this.pai_32 = t;
		t.source = "PGP_r_3_15_png";
		t.x = 451.98;
		t.y = 1.03;
		return t;
	};
	_proto.pai_30_i = function () {
		var t = new eui.Image();
		this.pai_30 = t;
		t.source = "PGP_r_3_13_png";
		t.x = 424.13;
		t.y = 1.36;
		return t;
	};
	_proto.pai_28_i = function () {
		var t = new eui.Image();
		this.pai_28 = t;
		t.source = "PGP_r_3_11_png";
		t.x = 396.39;
		t.y = 1.36;
		return t;
	};
	_proto.pai_26_i = function () {
		var t = new eui.Image();
		this.pai_26 = t;
		t.source = "PGP_r_3_9_png";
		t.x = 367.98;
		t.y = 1.03;
		return t;
	};
	_proto.pai_24_i = function () {
		var t = new eui.Image();
		this.pai_24 = t;
		t.source = "PGP_r_3_11_png";
		t.x = 340.13;
		t.y = 1.36;
		return t;
	};
	_proto.pai_22_i = function () {
		var t = new eui.Image();
		this.pai_22 = t;
		t.source = "PGP_r_3_13_png";
		t.x = 312.39;
		t.y = 1.36;
		return t;
	};
	_proto.pai_20_i = function () {
		var t = new eui.Image();
		this.pai_20 = t;
		t.source = "PGP_r_3_15_png";
		t.x = 284.4;
		t.y = 1.36;
		return t;
	};
	_proto.pai_18_i = function () {
		var t = new eui.Image();
		this.pai_18 = t;
		t.source = "PGP_r_3_17_png";
		t.x = 256.57;
		t.y = 1.36;
		return t;
	};
	_proto.pai_16_i = function () {
		var t = new eui.Image();
		this.pai_16 = t;
		t.source = "PGP_r_3_19_png";
		t.x = 228.03;
		t.y = 2.03;
		return t;
	};
	_proto.pai_14_i = function () {
		var t = new eui.Image();
		this.pai_14 = t;
		t.source = "PGP_r_3_21_png";
		t.x = 199.6;
		t.y = 2.03;
		return t;
	};
	return PGP_Paidun_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Shoupai_0Skin.exml'] = window.PGP_Shoupai_0Skin = (function (_super) {
	__extends(PGP_Shoupai_0Skin, _super);
	function PGP_Shoupai_0Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3","pai_4","pai_5","pai_6","pai_7","pai_8","pai_9","pai_10","pai_11","pai_12","pai_13"];
		
		this.height = 430;
		this.width = 150;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i(),this.pai_6_i(),this.pai_7_i(),this.pai_8_i(),this.pai_9_i(),this.pai_10_i(),this.pai_11_i(),this.pai_12_i(),this.pai_13_i()];
	}
	var _proto = PGP_Shoupai_0Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "PGP_b_0_1_png";
		t.x = 108;
		t.y = 0;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "PGP_b_0_2_png";
		t.x = 101;
		t.y = 22;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "PGP_b_0_3_png";
		t.x = 95;
		t.y = 45;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "PGP_b_0_4_png";
		t.x = 88;
		t.y = 67.38;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "PGP_b_0_5_png";
		t.x = 80;
		t.y = 91.54;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "PGP_b_0_6_png";
		t.x = 72;
		t.y = 116.69;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "PGP_b_0_7_png";
		t.x = 64.33;
		t.y = 142.49;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "PGP_b_0_8_png";
		t.x = 57;
		t.y = 169.32;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "PGP_b_0_9_png";
		t.x = 48.68;
		t.y = 197.82;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "PGP_b_0_10_png";
		t.x = 40;
		t.y = 225.64;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "PGP_b_0_11_png";
		t.x = 32;
		t.y = 255.46;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "PGP_b_0_12_png";
		t.x = 22.97;
		t.y = 286;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "PGP_b_0_13_png";
		t.x = 12.67;
		t.y = 317.55;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "PGP_b_0_14_png";
		t.x = 1.97;
		t.y = 364.82;
		return t;
	};
	return PGP_Shoupai_0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Shoupai_1Skin.exml'] = window.PGP_Shoupai_1Skin = (function (_super) {
	__extends(PGP_Shoupai_1Skin, _super);
	function PGP_Shoupai_1Skin() {
		_super.call(this);
		this.skinParts = ["pai_0","pai_1","pai_2","pai_3","pai_4","pai_5","pai_6","pai_7","pai_8","pai_9","pai_10","pai_11","pai_12","pai_13"];
		
		this.height = 113;
		this.width = 1154;
		this.elementsContent = [this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i(),this.pai_6_i(),this.pai_7_i(),this.pai_8_i(),this.pai_9_i(),this.pai_10_i(),this.pai_11_i(),this.pai_12_i(),this.pai_13_i()];
	}
	var _proto = PGP_Shoupai_1Skin.prototype;

	_proto.pai_0_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_0 = t;
		t.skinName = "PGP_handSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_1 = t;
		t.skinName = "PGP_handSkin";
		t.x = 81;
		t.y = 0;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_2 = t;
		t.skinName = "PGP_handSkin";
		t.x = 161;
		t.y = 0;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_3 = t;
		t.skinName = "PGP_handSkin";
		t.x = 241;
		t.y = 0;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_4 = t;
		t.skinName = "PGP_handSkin";
		t.x = 321;
		t.y = 0;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_5 = t;
		t.skinName = "PGP_handSkin";
		t.x = 401;
		t.y = 0;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_6 = t;
		t.height = 113;
		t.skinName = "PGP_handSkin";
		t.width = 81;
		t.x = 481;
		t.y = 0;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_7 = t;
		t.skinName = "PGP_handSkin";
		t.x = 561;
		t.y = 0;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_8 = t;
		t.skinName = "PGP_handSkin";
		t.x = 641;
		t.y = 0;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_9 = t;
		t.skinName = "PGP_handSkin";
		t.x = 721;
		t.y = 0;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_10 = t;
		t.skinName = "PGP_handSkin";
		t.x = 801;
		t.y = 0;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_11 = t;
		t.skinName = "PGP_handSkin";
		t.x = 881;
		t.y = 0;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_12 = t;
		t.skinName = "PGP_handSkin";
		t.x = 960;
		t.y = 0;
		return t;
	};
	_proto.pai_13_i = function () {
		var t = new PGP.PGP_hand();
		this.pai_13 = t;
		t.skinName = "PGP_handSkin";
		t.x = 1073;
		t.y = 0;
		return t;
	};
	return PGP_Shoupai_1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Shoupai_2Skin.exml'] = window.PGP_Shoupai_2Skin = (function (_super) {
	__extends(PGP_Shoupai_2Skin, _super);
	function PGP_Shoupai_2Skin() {
		_super.call(this);
		this.skinParts = ["pai_13","pai_12","pai_11","pai_10","pai_9","pai_8","pai_7","pai_6","pai_5","pai_4","pai_3","pai_2","pai_1","pai_0"];
		
		this.height = 430;
		this.width = 150;
		this.elementsContent = [this.pai_13_i(),this.pai_12_i(),this.pai_11_i(),this.pai_10_i(),this.pai_9_i(),this.pai_8_i(),this.pai_7_i(),this.pai_6_i(),this.pai_5_i(),this.pai_4_i(),this.pai_3_i(),this.pai_2_i(),this.pai_1_i(),this.pai_0_i()];
	}
	var _proto = PGP_Shoupai_2Skin.prototype;

	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.source = "PGP_b_2_14_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "PGP_b_2_13_png";
		t.x = 8;
		t.y = 34;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "PGP_b_2_12_png";
		t.x = 13.5;
		t.y = 55;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "PGP_b_2_11_png";
		t.x = 20;
		t.y = 78.54;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "PGP_b_2_10_png";
		t.x = 25.5;
		t.y = 102.54;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "PGP_b_2_9_png";
		t.x = 33;
		t.y = 127.54;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "PGP_b_2_8_png";
		t.x = 40;
		t.y = 154.54;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "PGP_b_2_7_png";
		t.x = 47;
		t.y = 180.5;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "PGP_b_2_6_png";
		t.x = 54;
		t.y = 210;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "PGP_b_2_5_png";
		t.x = 60.5;
		t.y = 237.54;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "PGP_b_2_4_png";
		t.x = 70;
		t.y = 268.38;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "PGP_b_2_3_png";
		t.x = 77;
		t.y = 299;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "PGP_b_2_2_png";
		t.x = 86;
		t.y = 329.5;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "PGP_b_2_1_png";
		t.x = 96;
		t.y = 365;
		return t;
	};
	return PGP_Shoupai_2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/group/PGP_Shoupai_3Skin.exml'] = window.PGP_Shoupai_3Skin = (function (_super) {
	__extends(PGP_Shoupai_3Skin, _super);
	function PGP_Shoupai_3Skin() {
		_super.call(this);
		this.skinParts = ["pai_13","pai_12","pai_11","pai_10","pai_9","pai_8","pai_7","pai_6","pai_0","pai_1","pai_2","pai_3","pai_4","pai_5"];
		
		this.height = 47;
		this.width = 452;
		this.elementsContent = [this.pai_13_i(),this.pai_12_i(),this.pai_11_i(),this.pai_10_i(),this.pai_9_i(),this.pai_8_i(),this.pai_7_i(),this.pai_6_i(),this.pai_0_i(),this.pai_1_i(),this.pai_2_i(),this.pai_3_i(),this.pai_4_i(),this.pai_5_i()];
	}
	var _proto = PGP_Shoupai_3Skin.prototype;

	_proto.pai_13_i = function () {
		var t = new eui.Image();
		this.pai_13 = t;
		t.height = 46;
		t.source = "PGP_b_3_14_png";
		t.width = 39;
		t.x = 0;
		t.y = 0.5;
		return t;
	};
	_proto.pai_12_i = function () {
		var t = new eui.Image();
		this.pai_12 = t;
		t.source = "PGP_b_3_13_png";
		t.x = 53;
		t.y = 0;
		return t;
	};
	_proto.pai_11_i = function () {
		var t = new eui.Image();
		this.pai_11 = t;
		t.source = "PGP_b_3_12_png";
		t.x = 83.83;
		t.y = 0;
		return t;
	};
	_proto.pai_10_i = function () {
		var t = new eui.Image();
		this.pai_10 = t;
		t.source = "PGP_b_3_11_png";
		t.x = 113.32;
		t.y = 0;
		return t;
	};
	_proto.pai_9_i = function () {
		var t = new eui.Image();
		this.pai_9 = t;
		t.source = "PGP_b_3_10_png";
		t.x = 144.32;
		t.y = 0;
		return t;
	};
	_proto.pai_8_i = function () {
		var t = new eui.Image();
		this.pai_8 = t;
		t.source = "PGP_b_3_9_png";
		t.x = 175.32;
		t.y = 0;
		return t;
	};
	_proto.pai_7_i = function () {
		var t = new eui.Image();
		this.pai_7 = t;
		t.source = "PGP_b_3_8_png";
		t.x = 206.32;
		t.y = 0;
		return t;
	};
	_proto.pai_6_i = function () {
		var t = new eui.Image();
		this.pai_6 = t;
		t.source = "PGP_b_3_7_png";
		t.x = 235.98;
		t.y = 0;
		return t;
	};
	_proto.pai_0_i = function () {
		var t = new eui.Image();
		this.pai_0 = t;
		t.source = "PGP_b_3_1_png";
		t.x = 413.13;
		t.y = 0.5;
		return t;
	};
	_proto.pai_1_i = function () {
		var t = new eui.Image();
		this.pai_1 = t;
		t.source = "PGP_b_3_2_png";
		t.x = 383.63;
		t.y = 1;
		return t;
	};
	_proto.pai_2_i = function () {
		var t = new eui.Image();
		this.pai_2 = t;
		t.source = "PGP_b_3_3_png";
		t.x = 354.97;
		t.y = 1;
		return t;
	};
	_proto.pai_3_i = function () {
		var t = new eui.Image();
		this.pai_3 = t;
		t.source = "PGP_b_3_4_png";
		t.x = 325.63;
		t.y = 0;
		return t;
	};
	_proto.pai_4_i = function () {
		var t = new eui.Image();
		this.pai_4 = t;
		t.source = "PGP_b_3_5_png";
		t.x = 295.97;
		t.y = 0;
		return t;
	};
	_proto.pai_5_i = function () {
		var t = new eui.Image();
		this.pai_5 = t;
		t.source = "PGP_b_3_6_png";
		t.x = 265.95;
		t.y = 0;
		return t;
	};
	return PGP_Shoupai_3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/gameRoom/PGPGameSceneSkin.exml'] = window.PGPGameSceneSkin = (function (_super) {
	__extends(PGPGameSceneSkin, _super);
	function PGPGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["gameTimer","paidun0","paidun2","paidun3","huapai3","huapai0","huapai2","huapai1","shoupai3","hupai3","chipenggang3","chipenggang0","hupai0","shoupai0","dapai3","dapai2","dapai1","dapai0","paidun1","chipenggang1","chipenggang2","shoupai2","shoupai1","hupai1","hupai2","infoUi","playerHead_0","playerHead_1","playerHead_2","playerHead_3","huPanel","gangChoosePanel","ctrlUI","waitingImage","effect3","effect0","effect2","effect1","copyRoomInfoBtn","soundBtn","helpBtn","exitBtn","tableIdTf","roomNoTf","roundTf","quxiaoTuoguanBtn","tf_0_i18n","tuoguanGrp","menuBtn","offset3","offset0","offset1","offset2","playerReady0","playerReady1","playerReady2","playerReady3","chatCtx0","chatCtx1","chatCtx2","chatCtx3","effectGrp","horsePanel","readyBtnGrp","touchHand","chatBtn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.gameTimer_i(),this.paidun0_i(),this.paidun2_i(),this.paidun3_i(),this.huapai3_i(),this.huapai0_i(),this.huapai2_i(),this.huapai1_i(),this.shoupai3_i(),this.hupai3_i(),this.chipenggang3_i(),this.chipenggang0_i(),this.hupai0_i(),this.shoupai0_i(),this.dapai3_i(),this.dapai2_i(),this.dapai1_i(),this.dapai0_i(),this.paidun1_i(),this.chipenggang1_i(),this.chipenggang2_i(),this.shoupai2_i(),this.shoupai1_i(),this.hupai1_i(),this.hupai2_i(),this.infoUi_i(),this.playerHead_0_i(),this.playerHead_1_i(),this.playerHead_2_i(),this.playerHead_3_i(),this.huPanel_i(),this.gangChoosePanel_i(),this.ctrlUI_i(),this.waitingImage_i(),this.effect3_i(),this.effect0_i(),this.effect2_i(),this.effect1_i(),this._Group1_i(),this._Group2_i(),this.tuoguanGrp_i(),this.menuBtn_i(),this.offset3_i(),this.offset0_i(),this.offset1_i(),this.offset2_i(),this.playerReady0_i(),this.playerReady1_i(),this.playerReady2_i(),this.playerReady3_i(),this.chatCtx0_i(),this.chatCtx1_i(),this.chatCtx2_i(),this.chatCtx3_i(),this.effectGrp_i(),this.horsePanel_i(),this.readyBtnGrp_i(),this.touchHand_i(),this.chatBtn_i()];
	}
	var _proto = PGPGameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(307,144,687,522);
		t.source = "PGP_bg_png";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.gameTimer_i = function () {
		var t = new PGP.PGP_GameTimer();
		this.gameTimer = t;
		t.horizontalCenter = 0;
		t.skinName = "PGP_GameTimerSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -34.5;
		return t;
	};
	_proto.paidun0_i = function () {
		var t = new PGP.PGP_Paidun();
		this.paidun0 = t;
		t.horizontalCenter = -346.5;
		t.skinName = "PGP_Paidun_0Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -17;
		t.visible = false;
		return t;
	};
	_proto.paidun2_i = function () {
		var t = new PGP.PGP_Paidun();
		this.paidun2 = t;
		t.horizontalCenter = 340.5;
		t.skinName = "PGP_Paidun_2Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -26;
		t.visible = false;
		return t;
	};
	_proto.paidun3_i = function () {
		var t = new PGP.PGP_Paidun();
		this.paidun3 = t;
		t.horizontalCenter = -0.5;
		t.skinName = "PGP_Paidun_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -227.5;
		t.visible = false;
		return t;
	};
	_proto.huapai3_i = function () {
		var t = new PGP.PGP_Huapai();
		this.huapai3 = t;
		t.horizontalCenter = -377.5;
		t.skinName = "PGP_Huapai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 93.44;
		return t;
	};
	_proto.huapai0_i = function () {
		var t = new PGP.PGP_Huapai();
		this.huapai0 = t;
		t.left = 156;
		t.skinName = "PGP_Huapai_0Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 316.29;
		return t;
	};
	_proto.huapai2_i = function () {
		var t = new PGP.PGP_Huapai();
		this.huapai2 = t;
		t.right = 205;
		t.skinName = "PGP_Huapai_2Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 208.71;
		return t;
	};
	_proto.huapai1_i = function () {
		var t = new PGP.PGP_Huapai();
		this.huapai1 = t;
		t.bottom = 151;
		t.horizontalCenter = 436;
		t.skinName = "PGP_Huapai_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.shoupai3_i = function () {
		var t = new PGP.PGP_Shoupai();
		this.shoupai3 = t;
		t.horizontalCenter = -55;
		t.skinName = "PGP_Shoupai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 120.36;
		return t;
	};
	_proto.hupai3_i = function () {
		var t = new PGP.PGP_Hupai();
		this.hupai3 = t;
		t.horizontalCenter = -8.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "PGP_Hupai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 120.33;
		return t;
	};
	_proto.chipenggang3_i = function () {
		var t = new PGP.PGP_Chipenggang();
		this.chipenggang3 = t;
		t.horizontalCenter = 96.5;
		t.skinName = "PGP_Chipenggang_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = 117.76;
		return t;
	};
	_proto.chipenggang0_i = function () {
		var t = new PGP.PGP_Chipenggang();
		this.chipenggang0 = t;
		t.left = 97;
		t.skinName = "PGP_Chipenggang_0Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -73;
		return t;
	};
	_proto.hupai0_i = function () {
		var t = new PGP.PGP_Hupai();
		this.hupai0 = t;
		t.left = 38;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "PGP_Hupai_0Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -13;
		return t;
	};
	_proto.shoupai0_i = function () {
		var t = new PGP.PGP_Shoupai();
		this.shoupai0 = t;
		t.left = 68;
		t.skinName = "PGP_Shoupai_0Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 20;
		return t;
	};
	_proto.dapai3_i = function () {
		var t = new PGP.PGP_Dapai();
		this.dapai3 = t;
		t.horizontalCenter = 40;
		t.skinName = "PGP_Dapai_3Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -147.5;
		return t;
	};
	_proto.dapai2_i = function () {
		var t = new PGP.PGP_Dapai();
		this.dapai2 = t;
		t.horizontalCenter = 289.5;
		t.skinName = "PGP_Dapai_2Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -32;
		return t;
	};
	_proto.dapai1_i = function () {
		var t = new PGP.PGP_Dapai();
		this.dapai1 = t;
		t.horizontalCenter = -2;
		t.skinName = "PGP_Dapai_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 102.5;
		return t;
	};
	_proto.dapai0_i = function () {
		var t = new PGP.PGP_Dapai();
		this.dapai0 = t;
		t.horizontalCenter = -283;
		t.skinName = "PGP_Dapai_0Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -22;
		return t;
	};
	_proto.paidun1_i = function () {
		var t = new PGP.PGP_Paidun();
		this.paidun1 = t;
		t.horizontalCenter = 0;
		t.skinName = "PGP_Paidun_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 171;
		t.visible = false;
		return t;
	};
	_proto.chipenggang1_i = function () {
		var t = new PGP.PGP_Chipenggang();
		this.chipenggang1 = t;
		t.bottom = 74;
		t.horizontalCenter = -228.5;
		t.skinName = "PGP_Chipenggang_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.chipenggang2_i = function () {
		var t = new PGP.PGP_Chipenggang();
		this.chipenggang2 = t;
		t.right = 55;
		t.skinName = "PGP_Chipenggang_2Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 27;
		return t;
	};
	_proto.shoupai2_i = function () {
		var t = new PGP.PGP_Shoupai();
		this.shoupai2 = t;
		t.right = 86;
		t.skinName = "PGP_Shoupai_2Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -21;
		return t;
	};
	_proto.shoupai1_i = function () {
		var t = new PGP.PGP_Shoupai();
		this.shoupai1 = t;
		t.bottom = 63;
		t.horizontalCenter = 48;
		t.skinName = "PGP_Shoupai_1Skin";
		return t;
	};
	_proto.hupai1_i = function () {
		var t = new PGP.PGP_Hupai();
		this.hupai1 = t;
		t.bottom = 89;
		t.horizontalCenter = -32;
		t.skinName = "PGP_Hupai_1Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.hupai2_i = function () {
		var t = new PGP.PGP_Hupai();
		this.hupai2 = t;
		t.right = 75;
		t.skinName = "PGP_Hupai_2Skin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -15.5;
		return t;
	};
	_proto.infoUi_i = function () {
		var t = new PGP.PGP_InfoUI();
		this.infoUi = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "PGP_InfoUISkin";
		return t;
	};
	_proto.playerHead_0_i = function () {
		var t = new PGP.PGP_PlayerHead();
		this.playerHead_0 = t;
		t.left = 0;
		t.skinName = "PGP_PlayerHeadSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -67.5;
		return t;
	};
	_proto.playerHead_1_i = function () {
		var t = new PGP.PGP_PlayerHead();
		this.playerHead_1 = t;
		t.bottom = 1;
		t.left = 0;
		t.skinName = "PGP_PlayerHeadSkin2";
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.playerHead_2_i = function () {
		var t = new PGP.PGP_PlayerHead();
		this.playerHead_2 = t;
		t.right = 0;
		t.skinName = "PGP_PlayerHeadSkin1";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -68;
		return t;
	};
	_proto.playerHead_3_i = function () {
		var t = new PGP.PGP_PlayerHead();
		this.playerHead_3 = t;
		t.horizontalCenter = 0.5;
		t.skinName = "PGP_PlayerHeadSkin";
		t.touchChildren = false;
		t.touchEnabled = false;
		t.y = -15.17;
		return t;
	};
	_proto.huPanel_i = function () {
		var t = new PGP.PGP_HuPanel();
		this.huPanel = t;
		t.bottom = 167;
		t.horizontalCenter = 0;
		t.skinName = "PGP_HuPanelSkin";
		return t;
	};
	_proto.gangChoosePanel_i = function () {
		var t = new PGP.PGP_GangChoosePanel();
		this.gangChoosePanel = t;
		t.bottom = 203;
		t.horizontalCenter = 0.5;
		t.skinName = "PGP_GangChoosePanelSkin";
		return t;
	};
	_proto.ctrlUI_i = function () {
		var t = new PGP.PGP_ControllPanel();
		this.ctrlUI = t;
		t.bottom = 126;
		t.right = 0;
		t.skinName = "PGP_ControllPanelSkin";
		return t;
	};
	_proto.waitingImage_i = function () {
		var t = new eui.Image();
		this.waitingImage = t;
		t.horizontalCenter = 0;
		t.source = "PGP_wait_others_png";
		t.touchEnabled = false;
		t.verticalCenter = 127;
		return t;
	};
	_proto.effect3_i = function () {
		var t = new eui.Image();
		this.effect3 = t;
		t.anchorOffsetX = 98.78;
		t.anchorOffsetY = 76.73;
		t.horizontalCenter = 0.5;
		t.source = "PGP_btn_chi_png";
		t.touchEnabled = false;
		t.y = 119.73;
		return t;
	};
	_proto.effect0_i = function () {
		var t = new eui.Image();
		this.effect0 = t;
		t.anchorOffsetX = 98.78;
		t.anchorOffsetY = 76.73;
		t.left = 22;
		t.source = "PGP_btn_chi_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.effect2_i = function () {
		var t = new eui.Image();
		this.effect2 = t;
		t.anchorOffsetX = 98.78;
		t.anchorOffsetY = 76.73;
		t.right = 22;
		t.source = "PGP_btn_chi_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.effect1_i = function () {
		var t = new eui.Image();
		this.effect1 = t;
		t.anchorOffsetX = 101.45;
		t.anchorOffsetY = 80.73;
		t.bottom = 184;
		t.horizontalCenter = 0.5;
		t.source = "PGP_btn_chi_png";
		t.touchEnabled = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.right = 7;
		t.top = 10;
		t.elementsContent = [this.copyRoomInfoBtn_i(),this.soundBtn_i(),this.helpBtn_i()];
		return t;
	};
	_proto.copyRoomInfoBtn_i = function () {
		var t = new eui.Image();
		this.copyRoomInfoBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "copy_btn_1_png";
		t.x = -32;
		t.y = 0;
		return t;
	};
	_proto.soundBtn_i = function () {
		var t = new eui.Image();
		this.soundBtn = t;
		t.source = "PGP_yinliang1_png";
		t.x = 66;
		t.y = 0;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Image();
		this.helpBtn = t;
		t.source = "PGP_wenhao1_png";
		t.x = 164;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 10;
		t.top = 10;
		t.elementsContent = [this.exitBtn_i(),this._Image2_i(),this.tableIdTf_i(),this.roomNoTf_i(),this.roundTf_i()];
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Image();
		this.exitBtn = t;
		t.source = "PGP_fanhui1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "PGP_no_bg_png";
		t.x = 98;
		t.y = 10;
		return t;
	};
	_proto.tableIdTf_i = function () {
		var t = new eui.Label();
		this.tableIdTf = t;
		t.size = 20;
		t.text = "牌局编号:";
		t.x = 109.31;
		t.y = 17.52;
		return t;
	};
	_proto.roomNoTf_i = function () {
		var t = new eui.Label();
		this.roomNoTf = t;
		t.size = 22;
		t.text = "房间号:";
		t.touchEnabled = true;
		t.x = 100;
		t.y = 50.59;
		return t;
	};
	_proto.roundTf_i = function () {
		var t = new eui.Label();
		this.roundTf = t;
		t.size = 22;
		t.text = "";
		t.touchEnabled = true;
		t.x = 100;
		t.y = 82.59;
		return t;
	};
	_proto.tuoguanGrp_i = function () {
		var t = new eui.Group();
		this.tuoguanGrp = t;
		t.bottom = 0;
		t.height = 235;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image3_i(),this.quxiaoTuoguanBtn_i(),this.tf_0_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "PGP_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.quxiaoTuoguanBtn_i = function () {
		var t = new eui.Image();
		this.quxiaoTuoguanBtn = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 34;
		t.horizontalCenter = 0.5;
		t.source = "PGP_quxiaotuoguan_png";
		t.y = 60;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.horizontalCenter = 19;
		t.size = 30;
		t.text = "系统自动摸打或胡牌，不做其他操作（如吃碰杠等）";
		t.y = 122;
		return t;
	};
	_proto.menuBtn_i = function () {
		var t = new PGP.PGP_Menu();
		this.menuBtn = t;
		t.bottom = 220;
		t.right = 5;
		t.skinName = "PGP_MenuSkin";
		return t;
	};
	_proto.offset3_i = function () {
		var t = new PGP.PGP_Offset();
		this.offset3 = t;
		t.horizontalCenter = 0.5;
		t.skinName = "PGP_OffSetSkin";
		t.top = 152;
		return t;
	};
	_proto.offset0_i = function () {
		var t = new PGP.PGP_Offset();
		this.offset0 = t;
		t.left = 184;
		t.skinName = "PGP_OffSetSkin";
		t.verticalCenter = -27;
		return t;
	};
	_proto.offset1_i = function () {
		var t = new PGP.PGP_Offset();
		this.offset1 = t;
		t.bottom = 163;
		t.horizontalCenter = 1.5;
		t.skinName = "PGP_OffSetSkin";
		return t;
	};
	_proto.offset2_i = function () {
		var t = new PGP.PGP_Offset();
		this.offset2 = t;
		t.right = 180;
		t.skinName = "PGP_OffSetSkin";
		t.verticalCenter = -27;
		return t;
	};
	_proto.playerReady0_i = function () {
		var t = new PGP.PGP_PlayerReady();
		this.playerReady0 = t;
		t.left = 266;
		t.skinName = "PGP_PlayerReadySkin";
		t.verticalCenter = -60;
		return t;
	};
	_proto.playerReady1_i = function () {
		var t = new PGP.PGP_PlayerReady();
		this.playerReady1 = t;
		t.bottom = 244;
		t.horizontalCenter = 0;
		t.skinName = "PGP_PlayerReadySkin";
		return t;
	};
	_proto.playerReady2_i = function () {
		var t = new PGP.PGP_PlayerReady();
		this.playerReady2 = t;
		t.right = 266;
		t.skinName = "PGP_PlayerReadySkin";
		t.verticalCenter = -60;
		return t;
	};
	_proto.playerReady3_i = function () {
		var t = new PGP.PGP_PlayerReady();
		this.playerReady3 = t;
		t.horizontalCenter = 0;
		t.skinName = "PGP_PlayerReadySkin";
		t.top = 166;
		return t;
	};
	_proto.chatCtx0_i = function () {
		var t = new eui.Group();
		this.chatCtx0 = t;
		t.height = 100;
		t.left = 166;
		t.verticalCenter = -153;
		t.width = 200;
		return t;
	};
	_proto.chatCtx1_i = function () {
		var t = new eui.Group();
		this.chatCtx1 = t;
		t.bottom = 132;
		t.height = 100;
		t.left = 166;
		t.width = 200;
		return t;
	};
	_proto.chatCtx2_i = function () {
		var t = new eui.Group();
		this.chatCtx2 = t;
		t.height = 100;
		t.right = 166;
		t.verticalCenter = -153;
		t.width = 200;
		return t;
	};
	_proto.chatCtx3_i = function () {
		var t = new eui.Group();
		this.chatCtx3 = t;
		t.height = 100;
		t.horizontalCenter = -236;
		t.top = 4;
		t.width = 200;
		return t;
	};
	_proto.effectGrp_i = function () {
		var t = new eui.Group();
		this.effectGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		return t;
	};
	_proto.horsePanel_i = function () {
		var t = new PGP.PGP_ShowHorse();
		this.horsePanel = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "PGP_ShowHorseSkin";
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.readyBtnGrp_i = function () {
		var t = new eui.Group();
		this.readyBtnGrp = t;
		t.anchorOffsetX = 66.5;
		t.anchorOffsetY = 25;
		t.bottom = 260;
		t.height = 50;
		t.horizontalCenter = 0.5;
		t.width = 133;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "PGP_ready0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.touchHand_i = function () {
		var t = new PGP.PGP_TouchCard();
		this.touchHand = t;
		t.horizontalCenter = 0;
		t.skinName = "PGP_TouchCardSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chatBtn_i = function () {
		var t = new eui.Image();
		this.chatBtn = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 25.5;
		t.bottom = 6;
		t.right = 2;
		t.source = "chat_talk_icon_png";
		return t;
	};
	return PGPGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/hack/PGPHackSkin.exml'] = window.PGPHackSkin = (function (_super) {
	__extends(PGPHackSkin, _super);
	function PGPHackSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","tf0","tf1","tf2","tf3","tf4","tf5","tf6","tf7","tf8","tf9","c10","c11","c12","c13","c14","c15","c16","c17","c18","c19","tf10","tf11","tf12","tf13","tf14","tf15","tf16","tf17","tf18","tf19","c20","c21","c22","c23","c24","c25","c26","c27","c28","c29","tf20","tf21","tf22","tf23","tf24","tf25","tf26","tf27","tf28","tf29","chooseedCard","tf_0_i18n","helpTf"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group4_i()];
	}
	var _proto = PGPHackSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "PGP_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 580;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 940;
		t.elementsContent = [this._Image2_i(),this.closeBtn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.chooseedCard_i(),this.tf_0_i18n_i(),this.helpTf_i()];
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
		t.source = "PGP_bg_hupai_png";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 29;
		t.source = "PGP_btn_guanbi_png";
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
		var t = new PGP.PGP_hand();
		this.c0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.c1_i = function () {
		var t = new PGP.PGP_hand();
		this.c1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 89;
		t.y = 0;
		return t;
	};
	_proto.c2_i = function () {
		var t = new PGP.PGP_hand();
		this.c2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 172;
		t.y = 0;
		return t;
	};
	_proto.c3_i = function () {
		var t = new PGP.PGP_hand();
		this.c3 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 254;
		t.y = 0;
		return t;
	};
	_proto.c4_i = function () {
		var t = new PGP.PGP_hand();
		this.c4 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 337;
		t.y = 0;
		return t;
	};
	_proto.c5_i = function () {
		var t = new PGP.PGP_hand();
		this.c5 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto.c6_i = function () {
		var t = new PGP.PGP_hand();
		this.c6 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 503;
		t.y = 0;
		return t;
	};
	_proto.c7_i = function () {
		var t = new PGP.PGP_hand();
		this.c7 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 586;
		t.y = 3.03;
		return t;
	};
	_proto.c8_i = function () {
		var t = new PGP.PGP_hand();
		this.c8 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 669;
		t.y = 3.03;
		return t;
	};
	_proto.c9_i = function () {
		var t = new PGP.PGP_hand();
		this.c9 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 751.33;
		t.y = 3.03;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5b2601;
		t.x = 2.88;
		t.y = 82;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 86;
		t.y = 82;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 168;
		t.y = 82;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 250;
		t.y = 82;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 333;
		t.y = 82;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 415;
		t.y = 82;
		return t;
	};
	_proto.tf6_i = function () {
		var t = new eui.Label();
		this.tf6 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 498;
		t.y = 82;
		return t;
	};
	_proto.tf7_i = function () {
		var t = new eui.Label();
		this.tf7 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 580;
		t.y = 82;
		return t;
	};
	_proto.tf8_i = function () {
		var t = new eui.Label();
		this.tf8 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 662;
		t.y = 82;
		return t;
	};
	_proto.tf9_i = function () {
		var t = new eui.Label();
		this.tf9 = t;
		t.size = 22;
		t.text = "";
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
		var t = new PGP.PGP_hand();
		this.c10 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.c11_i = function () {
		var t = new PGP.PGP_hand();
		this.c11 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 89;
		t.y = 0;
		return t;
	};
	_proto.c12_i = function () {
		var t = new PGP.PGP_hand();
		this.c12 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 172;
		t.y = 0;
		return t;
	};
	_proto.c13_i = function () {
		var t = new PGP.PGP_hand();
		this.c13 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 254;
		t.y = 0;
		return t;
	};
	_proto.c14_i = function () {
		var t = new PGP.PGP_hand();
		this.c14 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 337;
		t.y = 0;
		return t;
	};
	_proto.c15_i = function () {
		var t = new PGP.PGP_hand();
		this.c15 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto.c16_i = function () {
		var t = new PGP.PGP_hand();
		this.c16 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 503;
		t.y = 0;
		return t;
	};
	_proto.c17_i = function () {
		var t = new PGP.PGP_hand();
		this.c17 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 586;
		t.y = 3.03;
		return t;
	};
	_proto.c18_i = function () {
		var t = new PGP.PGP_hand();
		this.c18 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 669;
		t.y = 3.03;
		return t;
	};
	_proto.c19_i = function () {
		var t = new PGP.PGP_hand();
		this.c19 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 751.33;
		t.y = 3.03;
		return t;
	};
	_proto.tf10_i = function () {
		var t = new eui.Label();
		this.tf10 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 2.88;
		t.y = 82;
		return t;
	};
	_proto.tf11_i = function () {
		var t = new eui.Label();
		this.tf11 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 86;
		t.y = 82;
		return t;
	};
	_proto.tf12_i = function () {
		var t = new eui.Label();
		this.tf12 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 168;
		t.y = 82;
		return t;
	};
	_proto.tf13_i = function () {
		var t = new eui.Label();
		this.tf13 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 250;
		t.y = 82;
		return t;
	};
	_proto.tf14_i = function () {
		var t = new eui.Label();
		this.tf14 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 333;
		t.y = 82;
		return t;
	};
	_proto.tf15_i = function () {
		var t = new eui.Label();
		this.tf15 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 415;
		t.y = 82;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 498;
		t.y = 82;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 580;
		t.y = 82;
		return t;
	};
	_proto.tf18_i = function () {
		var t = new eui.Label();
		this.tf18 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 662;
		t.y = 82;
		return t;
	};
	_proto.tf19_i = function () {
		var t = new eui.Label();
		this.tf19 = t;
		t.size = 22;
		t.text = "";
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
		var t = new PGP.PGP_hand();
		this.c20 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.c21_i = function () {
		var t = new PGP.PGP_hand();
		this.c21 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 89;
		t.y = 0;
		return t;
	};
	_proto.c22_i = function () {
		var t = new PGP.PGP_hand();
		this.c22 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 172;
		t.y = 0;
		return t;
	};
	_proto.c23_i = function () {
		var t = new PGP.PGP_hand();
		this.c23 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 254;
		t.y = 0;
		return t;
	};
	_proto.c24_i = function () {
		var t = new PGP.PGP_hand();
		this.c24 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 337;
		t.y = 0;
		return t;
	};
	_proto.c25_i = function () {
		var t = new PGP.PGP_hand();
		this.c25 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto.c26_i = function () {
		var t = new PGP.PGP_hand();
		this.c26 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 503;
		t.y = 0;
		return t;
	};
	_proto.c27_i = function () {
		var t = new PGP.PGP_hand();
		this.c27 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 586;
		t.y = 3.03;
		return t;
	};
	_proto.c28_i = function () {
		var t = new PGP.PGP_hand();
		this.c28 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 669;
		t.y = 3.03;
		return t;
	};
	_proto.c29_i = function () {
		var t = new PGP.PGP_hand();
		this.c29 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 751.33;
		t.y = 3.03;
		return t;
	};
	_proto.tf20_i = function () {
		var t = new eui.Label();
		this.tf20 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 2.88;
		t.y = 82;
		return t;
	};
	_proto.tf21_i = function () {
		var t = new eui.Label();
		this.tf21 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 86;
		t.y = 82;
		return t;
	};
	_proto.tf22_i = function () {
		var t = new eui.Label();
		this.tf22 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 168;
		t.y = 82;
		return t;
	};
	_proto.tf23_i = function () {
		var t = new eui.Label();
		this.tf23 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 250;
		t.y = 82;
		return t;
	};
	_proto.tf24_i = function () {
		var t = new eui.Label();
		this.tf24 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 333;
		t.y = 82;
		return t;
	};
	_proto.tf25_i = function () {
		var t = new eui.Label();
		this.tf25 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 415;
		t.y = 82;
		return t;
	};
	_proto.tf26_i = function () {
		var t = new eui.Label();
		this.tf26 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 498;
		t.y = 82;
		return t;
	};
	_proto.tf27_i = function () {
		var t = new eui.Label();
		this.tf27 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 580;
		t.y = 82;
		return t;
	};
	_proto.tf28_i = function () {
		var t = new eui.Label();
		this.tf28 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 662;
		t.y = 82;
		return t;
	};
	_proto.tf29_i = function () {
		var t = new eui.Label();
		this.tf29 = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5B2601;
		t.x = 744.21;
		t.y = 82;
		return t;
	};
	_proto.chooseedCard_i = function () {
		var t = new PGP.PGP_hand();
		this.chooseedCard = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skinName = "PGP_handSkin";
		t.x = 477;
		t.y = 474.09;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
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
	return PGPHackSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/readme/PGPReadMeSkin.exml'] = window.PGPReadMeSkin = (function (_super) {
	__extends(PGPReadMeSkin, _super);
	var PGPReadMeSkin$Skin1 = 	(function (_super) {
		__extends(PGPReadMeSkin$Skin1, _super);
		var PGPReadMeSkin$Skin1$Skin2 = 		(function (_super) {
			__extends(PGPReadMeSkin$Skin1$Skin2, _super);
			function PGPReadMeSkin$Skin1$Skin2() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = PGPReadMeSkin$Skin1$Skin2.prototype;

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
			return PGPReadMeSkin$Skin1$Skin2;
		})(eui.Skin);

		function PGPReadMeSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = PGPReadMeSkin$Skin1.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = -15;
			t.visible = true;
			t.skinName = PGPReadMeSkin$Skin1$Skin2;
			return t;
		};
		return PGPReadMeSkin$Skin1;
	})(eui.Skin);

	function PGPReadMeSkin() {
		_super.call(this);
		this.skinParts = ["bg","btn0","btn1","txt0","txt1","ctxGrp","scl","grp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.grp_i()];
	}
	var _proto = PGPReadMeSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "PGP_alpha_mask_png";
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
		t.source = "PGP_rule_rulebg2_png";
		t.top = 0;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.height = 82;
		t.source = "PGP_rule_rulebt1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.height = 82;
		t.source = "PGP_rule_rulebt1_png";
		t.x = 332;
		t.y = 0;
		return t;
	};
	_proto.txt0_i = function () {
		var t = new eui.Image();
		this.txt0 = t;
		t.source = "PGP_rule_yxgz1_png";
		t.touchEnabled = false;
		t.x = 93;
		t.y = 24;
		return t;
	};
	_proto.txt1_i = function () {
		var t = new eui.Image();
		this.txt1 = t;
		t.source = "PGP_rule_fan1_png";
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
		t.skinName = PGPReadMeSkin$Skin1;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		return t;
	};
	return PGPReadMeSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/replay/PGPReplaySkin.exml'] = window.PGPReplaySkin = (function (_super) {
	__extends(PGPReplaySkin, _super);
	function PGPReplaySkin() {
		_super.call(this);
		this.skinParts = ["bg","spdBtn0","spdBtn1","spdBtn2","spdBtn3","bgmBtn","musicBtn","prevBtn","playBtn","nextBtn","progressTf","exitBtn","ctrlGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.ctrlGrp_i()];
	}
	var _proto = PGPReplaySkin.prototype;

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
	return PGPReplaySkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/result/PGPReultInfoSkin.exml'] = window.PGPReultInfoSkin = (function (_super) {
	__extends(PGPReultInfoSkin, _super);
	function PGPReultInfoSkin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","tf_3_i18n","tf_4_i18n","tf_5_i18n","tf_6_i18n","tf_7_i18n","tf_8_i18n","info0","info1","info2","info3","info4","info5","info6","info7"];
		
		this.width = 611;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.tf_0_i18n_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = PGPReultInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 131;
		t.scale9Grid = new egret.Rectangle(76,41,459,249);
		t.source = "PGP_result9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.6;
		t.height = 42;
		t.visible = false;
		t.width = 571;
		t.x = 20;
		t.y = 67;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "详情";
		t.y = 10.65;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 39;
		t.y = 43;
		t.elementsContent = [this.tf_1_i18n_i(),this.tf_2_i18n_i(),this.tf_3_i18n_i(),this.tf_4_i18n_i(),this.tf_5_i18n_i(),this.tf_6_i18n_i(),this.tf_7_i18n_i(),this.tf_8_i18n_i()];
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.size = 18;
		t.text = "杠";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.size = 18;
		t.text = "暗杠";
		t.x = 54;
		t.y = 0;
		return t;
	};
	_proto.tf_3_i18n_i = function () {
		var t = new eui.Label();
		this.tf_3_i18n = t;
		t.size = 18;
		t.text = "被杠";
		t.x = 128;
		t.y = 0;
		return t;
	};
	_proto.tf_4_i18n_i = function () {
		var t = new eui.Label();
		this.tf_4_i18n = t;
		t.size = 18;
		t.text = "被暗杠";
		t.x = 202;
		t.y = 0;
		return t;
	};
	_proto.tf_5_i18n_i = function () {
		var t = new eui.Label();
		this.tf_5_i18n = t;
		t.size = 18;
		t.text = "胡";
		t.x = 296;
		t.y = 0;
		return t;
	};
	_proto.tf_6_i18n_i = function () {
		var t = new eui.Label();
		this.tf_6_i18n = t;
		t.size = 18;
		t.text = "被胡";
		t.x = 354;
		t.y = 0;
		return t;
	};
	_proto.tf_7_i18n_i = function () {
		var t = new eui.Label();
		this.tf_7_i18n = t;
		t.size = 18;
		t.text = "自摸";
		t.x = 424;
		t.y = 0;
		return t;
	};
	_proto.tf_8_i18n_i = function () {
		var t = new eui.Label();
		this.tf_8_i18n = t;
		t.size = 18;
		t.text = "放炮";
		t.x = 501;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 39;
		t.y = 80;
		t.elementsContent = [this.info0_i(),this.info1_i(),this.info2_i(),this.info3_i(),this.info4_i(),this.info5_i(),this.info6_i(),this.info7_i()];
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 54;
		t.x = -19;
		t.y = 1;
		return t;
	};
	_proto.info1_i = function () {
		var t = new eui.Label();
		this.info1 = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.width = 52;
		t.x = 43.71;
		t.y = 0;
		return t;
	};
	_proto.info2_i = function () {
		var t = new eui.Label();
		this.info2 = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 54;
		t.x = 117.43;
		t.y = 0;
		return t;
	};
	_proto.info3_i = function () {
		var t = new eui.Label();
		this.info3 = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.width = 55;
		t.x = 202.14;
		t.y = 0;
		return t;
	};
	_proto.info4_i = function () {
		var t = new eui.Label();
		this.info4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.width = 65;
		t.x = 272.86;
		t.y = 1;
		return t;
	};
	_proto.info5_i = function () {
		var t = new eui.Label();
		this.info5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.width = 62;
		t.x = 342.57;
		t.y = 1;
		return t;
	};
	_proto.info6_i = function () {
		var t = new eui.Label();
		this.info6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.width = 56;
		t.x = 416.29;
		t.y = 1;
		return t;
	};
	_proto.info7_i = function () {
		var t = new eui.Label();
		this.info7 = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "--";
		t.textAlign = "center";
		t.width = 66;
		t.x = 489;
		t.y = 0;
		return t;
	};
	return PGPReultInfoSkin;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/result/PGPResultRenderSkin0.exml'] = window.PGPResultRenderSkin0 = (function (_super) {
	__extends(PGPResultRenderSkin0, _super);
	function PGPResultRenderSkin0() {
		_super.call(this);
		this.skinParts = ["chiUi","shouUi","head","dealer","isSelf","nameTf0","offset","image_detail","gangInfo","horseInfo","resultInfo","image_tyoe"];
		
		this.height = 150;
		this.width = 1179;
		this.elementsContent = [this.chiUi_i(),this.shouUi_i(),this.head_i(),this.dealer_i(),this.isSelf_i(),this.nameTf0_i(),this.offset_i(),this.image_detail_i(),this.gangInfo_i(),this.horseInfo_i(),this.resultInfo_i(),this.image_tyoe_i()];
	}
	var _proto = PGPResultRenderSkin0.prototype;

	_proto.chiUi_i = function () {
		var t = new PGP.PGPResultChi();
		this.chiUi = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_Chipenggang_1Skin";
		t.verticalCenter = 0;
		t.x = 143.68;
		return t;
	};
	_proto.shouUi_i = function () {
		var t = new PGP.PGPResultShou();
		this.shouUi = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_Shoupai_1Skin";
		t.verticalCenter = 0;
		t.x = 141.47;
		return t;
	};
	_proto.head_i = function () {
		var t = new PGP.PGP_Head();
		this.head = t;
		t.skinName = "PGP_HeadSkin";
		t.x = 16.16;
		t.y = 0;
		return t;
	};
	_proto.dealer_i = function () {
		var t = new eui.Image();
		this.dealer = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_banker_png";
		t.x = 87;
		t.y = 26;
		return t;
	};
	_proto.isSelf_i = function () {
		var t = new eui.Image();
		this.isSelf = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_ui_self_png";
		t.x = 19.71;
		t.y = 22.380000000000003;
		return t;
	};
	_proto.nameTf0_i = function () {
		var t = new eui.Label();
		this.nameTf0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.12;
		t.size = 25;
		t.text = "324242342424242";
		t.verticalAlign = "middle";
		t.x = 142.98;
		t.y = 6.42;
		return t;
	};
	_proto.offset_i = function () {
		var t = new eui.BitmapLabel();
		this.offset = t;
		t.font = "PGP_win_fnt";
		t.text = "+2000";
		t.verticalCenter = 0;
		t.x = 790;
		return t;
	};
	_proto.image_detail_i = function () {
		var t = new eui.Image();
		this.image_detail = t;
		t.source = "PGP_Exclamation_png";
		t.verticalCenter = 0.5;
		t.x = 955;
		return t;
	};
	_proto.gangInfo_i = function () {
		var t = new eui.Label();
		this.gangInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "杠分:1000000";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.y = 18;
		return t;
	};
	_proto.horseInfo_i = function () {
		var t = new eui.Label();
		this.horseInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 1075;
		t.size = 25;
		t.text = "未中马";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.verticalCenter = -47.5;
		return t;
	};
	_proto.resultInfo_i = function () {
		var t = new PGP.PGPResultInfo();
		this.resultInfo = t;
		t.right = 245;
		t.skinName = "PGPReultInfoSkin";
		t.top = 4;
		t.visible = false;
		return t;
	};
	_proto.image_tyoe_i = function () {
		var t = new eui.Image();
		this.image_tyoe = t;
		t.source = "PGP_chuchong_png";
		t.x = 1061.5;
		t.y = 57;
		return t;
	};
	return PGPResultRenderSkin0;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/result/PGPResultRenderSkin1.exml'] = window.PGPResultRenderSkin1 = (function (_super) {
	__extends(PGPResultRenderSkin1, _super);
	function PGPResultRenderSkin1() {
		_super.call(this);
		this.skinParts = ["chiUi","shouUi","head","dealer","isSelf","nameTf0","offset","image_detail","gangInfo","horseInfo","resultInfo","image_tyoe"];
		
		this.height = 150;
		this.elementsContent = [this.chiUi_i(),this.shouUi_i(),this.head_i(),this.dealer_i(),this.isSelf_i(),this.nameTf0_i(),this.offset_i(),this.image_detail_i(),this.gangInfo_i(),this.horseInfo_i(),this.resultInfo_i(),this.image_tyoe_i()];
	}
	var _proto = PGPResultRenderSkin1.prototype;

	_proto.chiUi_i = function () {
		var t = new PGP.PGPResultChi();
		this.chiUi = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_Chipenggang_1Skin";
		t.verticalCenter = 0;
		t.x = 131.52;
		return t;
	};
	_proto.shouUi_i = function () {
		var t = new PGP.PGPResultShou();
		this.shouUi = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "PGP_Shoupai_1Skin";
		t.verticalCenter = 0;
		t.x = 130.7;
		return t;
	};
	_proto.head_i = function () {
		var t = new PGP.PGP_Head();
		this.head = t;
		t.skinName = "PGP_HeadSkin";
		t.x = 14.83;
		t.y = 0;
		return t;
	};
	_proto.dealer_i = function () {
		var t = new eui.Image();
		this.dealer = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_banker_png";
		t.x = 87;
		t.y = 26;
		return t;
	};
	_proto.isSelf_i = function () {
		var t = new eui.Image();
		this.isSelf = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "PGP_ui_self_png";
		t.x = 19.71;
		t.y = 22.380000000000003;
		return t;
	};
	_proto.nameTf0_i = function () {
		var t = new eui.Label();
		this.nameTf0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.12;
		t.size = 25;
		t.text = "234242424424242";
		t.x = 133.9;
		t.y = 7;
		return t;
	};
	_proto.offset_i = function () {
		var t = new eui.BitmapLabel();
		this.offset = t;
		t.font = "PGP_win_fnt";
		t.text = "+10002";
		t.verticalCenter = 0;
		t.x = 790;
		return t;
	};
	_proto.image_detail_i = function () {
		var t = new eui.Image();
		this.image_detail = t;
		t.source = "PGP_Exclamation_png";
		t.verticalCenter = 0.5;
		t.x = 955.68;
		return t;
	};
	_proto.gangInfo_i = function () {
		var t = new eui.Label();
		this.gangInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "杠分:100000";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.y = 14;
		return t;
	};
	_proto.horseInfo_i = function () {
		var t = new eui.Label();
		this.horseInfo = t;
		t.left = 1173;
		t.size = 25;
		t.text = "";
		t.verticalCenter = 24.5;
		return t;
	};
	_proto.resultInfo_i = function () {
		var t = new PGP.PGPResultInfo();
		this.resultInfo = t;
		t.skinName = "PGPReultInfoSkin";
		t.verticalCenter = 0.5;
		t.visible = false;
		t.x = 331;
		return t;
	};
	_proto.image_tyoe_i = function () {
		var t = new eui.Image();
		this.image_tyoe = t;
		t.source = "PGP_chuchong_png";
		t.x = 1061.5;
		t.y = 57;
		return t;
	};
	return PGPResultRenderSkin1;
})(eui.Skin);generateEUI.paths['resource/pages/PGP/result/PGPResultSkin.exml'] = window.PGPResultSkin = (function (_super) {
	__extends(PGPResultSkin, _super);
	function PGPResultSkin() {
		_super.call(this);
		this.skinParts = ["bg","horseCard0","horseCard1","horseCard2","horseCard3","horseCard4","conCon","render0","render1","render2","render3","exitBtn","continueImage","timeTf","nextBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.uiGrp_i()];
	}
	var _proto = PGPResultSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "PGP_result_bottom_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Image1_i(),this.conCon_i(),this._Group1_i(),this.exitBtn_i(),this.nextBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "PGP_result_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.conCon_i = function () {
		var t = new eui.Group();
		this.conCon = t;
		t.horizontalCenter = 239.5;
		t.top = -9;
		t.elementsContent = [this.horseCard0_i(),this.horseCard1_i(),this.horseCard2_i(),this.horseCard3_i(),this.horseCard4_i()];
		return t;
	};
	_proto.horseCard0_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard0 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 42;
		t.y = 57;
		return t;
	};
	_proto.horseCard1_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard1 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 96.69;
		t.y = 57;
		return t;
	};
	_proto.horseCard2_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard2 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 152.01;
		t.y = 57;
		return t;
	};
	_proto.horseCard3_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard3 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 206.36;
		t.y = 57;
		return t;
	};
	_proto.horseCard4_i = function () {
		var t = new PGP.PGP_HandHorseCard();
		this.horseCard4 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 57;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "PGP_HandHorseCardSkin";
		t.x = 261.36;
		t.y = 57;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 30;
		t.y = 62.71;
		t.elementsContent = [this.render0_i(),this.render1_i(),this.render2_i(),this.render3_i()];
		return t;
	};
	_proto.render0_i = function () {
		var t = new PGP.PGPResultRender();
		this.render0 = t;
		t.skinName = "PGPResultRenderSkin0";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.render1_i = function () {
		var t = new PGP.PGPResultRender();
		this.render1 = t;
		t.skinName = "PGPResultRenderSkin1";
		t.x = 0;
		t.y = 156;
		return t;
	};
	_proto.render2_i = function () {
		var t = new PGP.PGPResultRender();
		this.render2 = t;
		t.skinName = "PGPResultRenderSkin1";
		t.x = 0;
		t.y = 301.64;
		return t;
	};
	_proto.render3_i = function () {
		var t = new PGP.PGPResultRender();
		this.render3 = t;
		t.skinName = "PGPResultRenderSkin1";
		t.x = 0;
		t.y = 449.69;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Group();
		this.exitBtn = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 42.5;
		t.x = 479;
		t.y = 706;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "PGP_a2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "PGP_likai_png";
		t.x = 36;
		t.y = 18.96;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Group();
		this.nextBtn = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 42.5;
		t.x = 801;
		t.y = 706;
		t.elementsContent = [this._Image4_i(),this.continueImage_i(),this.timeTf_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "PGP_a1_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.continueImage_i = function () {
		var t = new eui.Image();
		this.continueImage = t;
		t.source = "PGP_jixu_png";
		t.touchEnabled = false;
		t.x = 30.09;
		t.y = 19.77;
		return t;
	};
	_proto.timeTf_i = function () {
		var t = new eui.BitmapLabel();
		this.timeTf = t;
		t.font = "PGP_time_num_fnt";
		t.text = "9";
		t.touchEnabled = false;
		t.x = 149.87;
		t.y = 22.32;
		return t;
	};
	return PGPResultSkin;
})(eui.Skin);