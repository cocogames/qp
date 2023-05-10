
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
                generateEUI.skins = {};generateEUI.paths['resource/pages/DDZ/component/DDZBtnSkin.exml'] = window.DDZBtnSkin = (function (_super) {
	__extends(DDZBtnSkin, _super);
	function DDZBtnSkin() {
		_super.call(this);
		this.skinParts = ["bg","tf"];
		
		this.height = 66;
		this.width = 166;
		this.elementsContent = [this.bg_i(),this.tf_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelSize"],[0],this.tf,"size");
		eui.Binding.$bindProperties(this, ["hostComponent.a_label"],[0],this.tf,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelColor"],[0],this.tf,"textColor");
	}
	var _proto = DDZBtnSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,126,28);
		t.source = "DDZ_btn_tb2_png";
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
	return DDZBtnSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/alert/DDZAlertSkin.exml'] = window.DDZAlertSkin = (function (_super) {
	__extends(DDZAlertSkin, _super);
	function DDZAlertSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","tf","okBtn","cancelBtn","btnGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = DDZAlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(1,1,9,9);
		t.source = "DDZ_black_mask_png";
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
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(41,76,673,106);
		t.source = "DDZ_bg_history_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_club_bg_prompt_png";
		t.x = 277;
		t.y = 8;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scale9Grid = new egret.Rectangle(41,76,673,106);
		t.source = "DDZ_btn_guanbi_png";
		t.visible = false;
		t.x = 600;
		t.y = 8;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 197.33;
		t.lineSpacing = 10;
		t.size = 32;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 424;
		t.x = 118;
		t.y = 74.88;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.horizontalCenter = 0;
		t.y = 303.34;
		t.elementsContent = [this.okBtn_i(),this.cancelBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new DDZ.XYButton();
		this.okBtn = t;
		t.a_label = "确认";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.skinName = "DDZBtnSkin";
		t.x = 248;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new DDZ.XYButton();
		this.cancelBtn = t;
		t.a_label = "取消";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.skinName = "DDZBtnSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DDZAlertSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZ_PlayerReadySkin.exml'] = window.DDZ_PlayerReadySkin = (function (_super) {
	__extends(DDZ_PlayerReadySkin, _super);
	function DDZ_PlayerReadySkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = DDZ_PlayerReadySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_game_ok_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return DDZ_PlayerReadySkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZBaseLargeCardSkin.exml'] = window.DDZBaseLargeCardSkin = (function (_super) {
	__extends(DDZBaseLargeCardSkin, _super);
	function DDZBaseLargeCardSkin() {
		_super.call(this);
		this.skinParts = ["image_bg","image_white","image_num","image_smallType","image_bigType","image_highType","image_highKing","image6","image10","grp"];
		
		this.height = 228;
		this.width = 166;
		this.elementsContent = [this.image_bg_i(),this.grp_i()];
	}
	var _proto = DDZBaseLargeCardSkin.prototype;

	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.source = "DDZ_icon_pai_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image_white_i(),this._Group1_i(),this.image_bigType_i(),this.image_highType_i(),this.image_highKing_i(),this.image6_i(),this.image10_i()];
		return t;
	};
	_proto.image_white_i = function () {
		var t = new eui.Image();
		this.image_white = t;
		t.source = "DDZ_poker_zmbj_png";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7;
		t.y = 13;
		t.elementsContent = [this.image_num_i(),this.image_smallType_i()];
		return t;
	};
	_proto.image_num_i = function () {
		var t = new eui.Image();
		this.image_num = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_poker_102_png";
		t.y = 0;
		return t;
	};
	_proto.image_smallType_i = function () {
		var t = new eui.Image();
		this.image_smallType = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_poker_mht_png";
		t.y = 61;
		return t;
	};
	_proto.image_bigType_i = function () {
		var t = new eui.Image();
		this.image_bigType = t;
		t.bottom = 54;
		t.right = 22;
		t.source = "DDZ_color_spade_png";
		return t;
	};
	_proto.image_highType_i = function () {
		var t = new eui.Image();
		this.image_highType = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_poker_1214_bk_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_highKing_i = function () {
		var t = new eui.Image();
		this.image_highKing = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_poker_141_bk_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.source = "DDZ_biaoqian_png";
		t.x = 96;
		t.y = 0;
		return t;
	};
	_proto.image10_i = function () {
		var t = new eui.Image();
		this.image10 = t;
		t.source = "DDZ_mengban_card_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	return DDZBaseLargeCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZBaseMiddleCardSkin.exml'] = window.DDZBaseMiddleCardSkin = (function (_super) {
	__extends(DDZBaseMiddleCardSkin, _super);
	function DDZBaseMiddleCardSkin() {
		_super.call(this);
		this.skinParts = ["image_bg","image_white","image_num","image_smallType","image_bigType","image_highType","image_highKing","image6","grp"];
		
		this.height = 140;
		this.width = 101;
		this.elementsContent = [this.image_bg_i(),this.grp_i()];
	}
	var _proto = DDZBaseMiddleCardSkin.prototype;

	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "DDZ_icon_pai_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image_white_i(),this._Group1_i(),this.image_bigType_i(),this.image_highType_i(),this.image_highKing_i(),this.image6_i()];
		return t;
	};
	_proto.image_white_i = function () {
		var t = new eui.Image();
		this.image_white = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "DDZ_poker_zmbj_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 4;
		t.y = 12;
		t.elementsContent = [this.image_num_i(),this.image_smallType_i()];
		return t;
	};
	_proto.image_num_i = function () {
		var t = new eui.Image();
		this.image_num = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "DDZ_poker_101_png";
		t.y = 0;
		return t;
	};
	_proto.image_smallType_i = function () {
		var t = new eui.Image();
		this.image_smallType = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "DDZ_poker_mht_png";
		t.y = 37;
		return t;
	};
	_proto.image_bigType_i = function () {
		var t = new eui.Image();
		this.image_bigType = t;
		t.bottom = 18;
		t.right = 17;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "DDZ_color_spade_png";
		return t;
	};
	_proto.image_highType_i = function () {
		var t = new eui.Image();
		this.image_highType = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "DDZ_poker_1111_bk_png";
		t.x = 15;
		t.y = 17;
		return t;
	};
	_proto.image_highKing_i = function () {
		var t = new eui.Image();
		this.image_highKing = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "DDZ_poker_141_bk_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.source = "DDZ_biaoqian_png";
		t.x = 31;
		t.y = 0;
		return t;
	};
	return DDZBaseMiddleCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZBaseSmallCardSkin.exml'] = window.DDZBaseSmallCardSkin = (function (_super) {
	__extends(DDZBaseSmallCardSkin, _super);
	function DDZBaseSmallCardSkin() {
		_super.call(this);
		this.skinParts = ["image_bg","image_white","image_num","image_smallType","image_bigType","image_highType","image_highKing","grp"];
		
		this.height = 111;
		this.width = 80;
		this.elementsContent = [this.image_bg_i(),this.grp_i()];
	}
	var _proto = DDZBaseSmallCardSkin.prototype;

	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "DDZ_icon_pai_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image_white_i(),this._Group1_i(),this.image_bigType_i(),this.image_highType_i(),this.image_highKing_i()];
		return t;
	};
	_proto.image_white_i = function () {
		var t = new eui.Image();
		this.image_white = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "DDZ_poker_zmbj_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 4;
		t.y = 5;
		t.elementsContent = [this.image_num_i(),this.image_smallType_i()];
		return t;
	};
	_proto.image_num_i = function () {
		var t = new eui.Image();
		this.image_num = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "DDZ_poker_101_png";
		t.y = 0;
		return t;
	};
	_proto.image_smallType_i = function () {
		var t = new eui.Image();
		this.image_smallType = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "DDZ_poker_mht_png";
		t.y = 32.33;
		return t;
	};
	_proto.image_bigType_i = function () {
		var t = new eui.Image();
		this.image_bigType = t;
		t.bottom = 15;
		t.right = 9;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "DDZ_color_spade_png";
		return t;
	};
	_proto.image_highType_i = function () {
		var t = new eui.Image();
		this.image_highType = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "DDZ_poker_1111_bk_png";
		t.x = 11;
		t.y = 8;
		return t;
	};
	_proto.image_highKing_i = function () {
		var t = new eui.Image();
		this.image_highKing = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "DDZ_poker_141_bk_png";
		t.verticalCenter = 0;
		return t;
	};
	return DDZBaseSmallCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZCheatSkin.exml'] = window.DDZCheatSkin = (function (_super) {
	__extends(DDZCheatSkin, _super);
	function DDZCheatSkin() {
		_super.call(this);
		this.skinParts = ["infoSelect","list","scroller","startGame"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.scroller_i(),this.startGame_i()];
	}
	var _proto = DDZCheatSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "DDZ_tishidiban_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 0;
		t.elementsContent = [this.infoSelect_i()];
		return t;
	};
	_proto.infoSelect_i = function () {
		var t = new eui.Label();
		this.infoSelect = t;
		t.text = "请选择17张手牌";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new XYScroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 35;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 624;
		t.width = 710;
		t.x = 12;
		t.y = 6.5;
		return t;
	};
	_proto.startGame_i = function () {
		var t = new eui.Group();
		this.startGame = t;
		t.horizontalCenter = 0.5;
		t.y = 668;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_liaotian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.source = "DDZ_gamestart01_png";
		t.width = 102;
		t.x = 7;
		t.y = 7;
		return t;
	};
	return DDZCheatSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZConfirmViewSkin.exml'] = window.DDZConfirmViewSkin = (function (_super) {
	__extends(DDZConfirmViewSkin, _super);
	var DDZConfirmViewSkin$Skin1 = 	(function (_super) {
		__extends(DDZConfirmViewSkin$Skin1, _super);
		function DDZConfirmViewSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_lanxiaodi01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZConfirmViewSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_lanxiaodi01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZConfirmViewSkin$Skin1;
	})(eui.Skin);

	var DDZConfirmViewSkin$Skin2 = 	(function (_super) {
		__extends(DDZConfirmViewSkin$Skin2, _super);
		function DDZConfirmViewSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_lanxiaodi01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZConfirmViewSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_lanxiaodi01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZConfirmViewSkin$Skin2;
	})(eui.Skin);

	function DDZConfirmViewSkin() {
		_super.call(this);
		this.skinParts = ["sureBtn","cancelBtn","tf_0_i18n"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = DDZConfirmViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "DDZ_tishidiban_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.sureBtn_i(),this.cancelBtn_i(),this.tf_0_i18n_i()];
		return t;
	};
	_proto.sureBtn_i = function () {
		var t = new eui.Button();
		this.sureBtn = t;
		t.label = "确定";
		t.x = 0;
		t.y = 191;
		t.skinName = DDZConfirmViewSkin$Skin1;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.label = "取消";
		t.x = 273.67;
		t.y = 191;
		t.skinName = DDZConfirmViewSkin$Skin2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.text = "是否选择作牌模式?";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 379.33;
		t.x = 37.01;
		t.y = 0;
		return t;
	};
	return DDZConfirmViewSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZCountSkin.exml'] = window.DDZCountSkin = (function (_super) {
	__extends(DDZCountSkin, _super);
	function DDZCountSkin() {
		_super.call(this);
		this.skinParts = ["rectImage","imageIcon","tf_0_i18n","tf_1_i18n","tf0","tf1","tf2","tf3","tf4","tf5","tf6","tf7","tf8","tf9","tf10","tf11","tf12","tf13","tf14","infoGrp"];
		
		this.elementsContent = [this.rectImage_i(),this.imageIcon_i(),this.infoGrp_i()];
	}
	var _proto = DDZCountSkin.prototype;

	_proto.rectImage_i = function () {
		var t = new eui.Rect();
		this.rectImage = t;
		t.fillAlpha = 0.7;
		t.height = 105;
		t.width = 999;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imageIcon_i = function () {
		var t = new eui.Image();
		this.imageIcon = t;
		t.source = "DDZ_notes_png";
		t.x = -7;
		t.y = 9;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.x = 99;
		t.y = 22;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf0_i(),this.tf1_i(),this.tf2_i(),this.tf3_i(),this.tf4_i(),this.tf5_i(),this.tf6_i(),this.tf7_i(),this.tf8_i(),this.tf9_i(),this.tf10_i(),this.tf11_i(),this.tf12_i(),this.tf13_i(),this.tf14_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_3_png";
		t.x = 60;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_4_png";
		t.x = 122;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_5_png";
		t.x = 183;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_6_png";
		t.x = 244;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_7_png";
		t.x = 305;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_8_png";
		t.x = 366;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_9_png";
		t.x = 427;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_10_png";
		t.x = 488;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_11_png";
		t.x = 549;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_12_png";
		t.x = 610;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_13_png";
		t.x = 671;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_SmallCard_commom_shuzi_hong_1_png";
		t.x = 732;
		t.y = 0;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 25;
		t.text = "小王";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 63;
		t.x = 777;
		t.y = 3;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 25;
		t.text = "大王";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 63;
		t.x = 837;
		t.y = 3;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 1;
		t.y = 42;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 62;
		t.y = 44;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 123;
		t.y = 42;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 184;
		t.y = 42;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 245;
		t.y = 42;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 306;
		t.y = 42;
		return t;
	};
	_proto.tf6_i = function () {
		var t = new eui.Label();
		this.tf6 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 367;
		t.y = 42;
		return t;
	};
	_proto.tf7_i = function () {
		var t = new eui.Label();
		this.tf7 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 36;
		t.x = 423;
		t.y = 42;
		return t;
	};
	_proto.tf8_i = function () {
		var t = new eui.Label();
		this.tf8 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 489;
		t.y = 42;
		return t;
	};
	_proto.tf9_i = function () {
		var t = new eui.Label();
		this.tf9 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 550;
		t.y = 42;
		return t;
	};
	_proto.tf10_i = function () {
		var t = new eui.Label();
		this.tf10 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 611;
		t.y = 42;
		return t;
	};
	_proto.tf11_i = function () {
		var t = new eui.Label();
		this.tf11 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 672;
		t.y = 42;
		return t;
	};
	_proto.tf12_i = function () {
		var t = new eui.Label();
		this.tf12 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 27;
		t.x = 733;
		t.y = 42;
		return t;
	};
	_proto.tf13_i = function () {
		var t = new eui.Label();
		this.tf13 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 63;
		t.x = 776;
		t.y = 42;
		return t;
	};
	_proto.tf14_i = function () {
		var t = new eui.Label();
		this.tf14 = t;
		t.anchorOffsetX = 0;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 63;
		t.x = 836;
		t.y = 42;
		return t;
	};
	return DDZCountSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZDealCardSkin.exml'] = window.DDZDealCardSkin = (function (_super) {
	__extends(DDZDealCardSkin, _super);
	function DDZDealCardSkin() {
		_super.call(this);
		this.skinParts = ["passBg","btnPass","noticeBg","btnNotice","dealCardBg","btnDealCard"];
		
		this.elementsContent = [this.btnPass_i(),this.btnNotice_i(),this.btnDealCard_i()];
	}
	var _proto = DDZDealCardSkin.prototype;

	_proto.btnPass_i = function () {
		var t = new eui.Group();
		this.btnPass = t;
		t.x = 2.34;
		t.y = 2.67;
		t.elementsContent = [this.passBg_i(),this._Image1_i()];
		return t;
	};
	_proto.passBg_i = function () {
		var t = new eui.Image();
		this.passBg = t;
		t.source = "DDZ_lvanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_buyao_png";
		t.touchEnabled = false;
		t.x = 37.32;
		t.y = 14.67;
		return t;
	};
	_proto.btnNotice_i = function () {
		var t = new eui.Group();
		this.btnNotice = t;
		t.x = 293;
		t.y = 2.67;
		t.elementsContent = [this.noticeBg_i(),this._Image2_i()];
		return t;
	};
	_proto.noticeBg_i = function () {
		var t = new eui.Image();
		this.noticeBg = t;
		t.source = "DDZ_jinanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_tishi_png";
		t.touchEnabled = false;
		t.x = 47.34;
		t.y = 14.67;
		return t;
	};
	_proto.btnDealCard_i = function () {
		var t = new eui.Group();
		this.btnDealCard = t;
		t.x = 476.01;
		t.y = 2.67;
		t.elementsContent = [this.dealCardBg_i(),this._Image3_i()];
		return t;
	};
	_proto.dealCardBg_i = function () {
		var t = new eui.Image();
		this.dealCardBg = t;
		t.source = "DDZ_jinanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_chupai_png";
		t.touchEnabled = false;
		t.x = 45;
		t.y = 16;
		return t;
	};
	return DDZDealCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZGameResultSkin.exml'] = window.DDZGameResultSkin = (function (_super) {
	__extends(DDZGameResultSkin, _super);
	function DDZGameResultSkin() {
		_super.call(this);
		this.skinParts = ["nameTf0","baseScore0","rateTf0","scoreOffTf0","image_lord0","imageDetail0","nameTf1","baseScore1","rateTf1","scoreOffTf1","image_lord1","imageDetail1","nameTf2","baseScore2","rateTf2","scoreOffTf2","image_lord2","imageDetail2","infoText1","infoText2","infoText3","infoText4","tf_0_i18n","tf_1_i18n","tf_2_i18n","tf_3_i18n","infoText5","infoText6","infoText7","infoText8","topTf","detailGrp","quitBtn","image_continue","timeTf","continueBtn","aniCon"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.aniCon_i()];
	}
	var _proto = DDZGameResultSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "DDZ_alpha_mask_png";
		t.top = 0;
		return t;
	};
	_proto.aniCon_i = function () {
		var t = new eui.Group();
		this.aniCon = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Group4_i(),this.quitBtn_i(),this.continueBtn_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.detailGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_losebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_nickicon_png";
		t.x = 117;
		t.y = 41;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_baseicon_png";
		t.x = 345;
		t.y = 41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_mulipleicon_png";
		t.x = 607;
		t.y = 41;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_goldicon_png";
		t.x = 839.23;
		t.y = 41;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 1005;
		t.x = 8;
		t.y = 102;
		t.elementsContent = [this.nameTf0_i(),this.baseScore0_i(),this.rateTf0_i(),this.scoreOffTf0_i(),this.image_lord0_i(),this.imageDetail0_i()];
		return t;
	};
	_proto.nameTf0_i = function () {
		var t = new eui.Label();
		this.nameTf0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "243242424242";
		t.verticalAlign = "middle";
		t.x = 45;
		t.y = 9;
		return t;
	};
	_proto.baseScore0_i = function () {
		var t = new eui.Label();
		this.baseScore0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 267;
		t.y = 9;
		return t;
	};
	_proto.rateTf0_i = function () {
		var t = new eui.Label();
		this.rateTf0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 529;
		t.y = 9;
		return t;
	};
	_proto.scoreOffTf0_i = function () {
		var t = new eui.Label();
		this.scoreOffTf0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 209;
		t.x = 769;
		t.y = 9;
		return t;
	};
	_proto.image_lord0_i = function () {
		var t = new eui.Image();
		this.image_lord0 = t;
		t.source = "DDZ_dizhuflag_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imageDetail0_i = function () {
		var t = new eui.Image();
		this.imageDetail0 = t;
		t.source = "DDZ_Exclamation_png";
		t.x = 710;
		t.y = 14;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.width = 1005;
		t.x = 8;
		t.y = 184.67;
		t.elementsContent = [this.nameTf1_i(),this.baseScore1_i(),this.rateTf1_i(),this.scoreOffTf1_i(),this.image_lord1_i(),this.imageDetail1_i()];
		return t;
	};
	_proto.nameTf1_i = function () {
		var t = new eui.Label();
		this.nameTf1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "24342222222322";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 45;
		t.y = 9;
		return t;
	};
	_proto.baseScore1_i = function () {
		var t = new eui.Label();
		this.baseScore1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 267;
		t.y = 9;
		return t;
	};
	_proto.rateTf1_i = function () {
		var t = new eui.Label();
		this.rateTf1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 529;
		t.y = 9;
		return t;
	};
	_proto.scoreOffTf1_i = function () {
		var t = new eui.Label();
		this.scoreOffTf1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 209;
		t.x = 769;
		t.y = 9;
		return t;
	};
	_proto.image_lord1_i = function () {
		var t = new eui.Image();
		this.image_lord1 = t;
		t.source = "DDZ_dizhuflag_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imageDetail1_i = function () {
		var t = new eui.Image();
		this.imageDetail1 = t;
		t.source = "DDZ_Exclamation_png";
		t.x = 710;
		t.y = 14;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 1005;
		t.x = 8;
		t.y = 268;
		t.elementsContent = [this.nameTf2_i(),this.baseScore2_i(),this.rateTf2_i(),this.scoreOffTf2_i(),this.image_lord2_i(),this.imageDetail2_i()];
		return t;
	};
	_proto.nameTf2_i = function () {
		var t = new eui.Label();
		this.nameTf2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "3422222222442432";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 45;
		t.y = 9;
		return t;
	};
	_proto.baseScore2_i = function () {
		var t = new eui.Label();
		this.baseScore2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 267;
		t.y = 9;
		return t;
	};
	_proto.rateTf2_i = function () {
		var t = new eui.Label();
		this.rateTf2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 529;
		t.y = 9;
		return t;
	};
	_proto.scoreOffTf2_i = function () {
		var t = new eui.Label();
		this.scoreOffTf2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 209;
		t.x = 769;
		t.y = 9;
		return t;
	};
	_proto.image_lord2_i = function () {
		var t = new eui.Image();
		this.image_lord2 = t;
		t.source = "DDZ_dizhuflag_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imageDetail2_i = function () {
		var t = new eui.Image();
		this.imageDetail2 = t;
		t.source = "DDZ_Exclamation_png";
		t.x = 710;
		t.y = 14;
		return t;
	};
	_proto.detailGrp_i = function () {
		var t = new eui.Group();
		this.detailGrp = t;
		t.x = 102.99;
		t.y = 56.66;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.infoText1_i(),this.infoText2_i(),this.infoText3_i(),this.infoText4_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i(),this.tf_3_i18n_i(),this.infoText5_i(),this.infoText6_i(),this.infoText7_i(),this.infoText8_i(),this.topTf_i(),this._Label1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_result9_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_txt_png";
		t.x = 248;
		t.y = 14.33;
		return t;
	};
	_proto.infoText1_i = function () {
		var t = new eui.Label();
		this.infoText1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 32;
		t.text = "初始 --";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 145.33;
		t.wordWrap = true;
		t.x = 32;
		t.y = 66;
		return t;
	};
	_proto.infoText2_i = function () {
		var t = new eui.Label();
		this.infoText2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 32;
		t.text = "抢地主 --";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 196;
		t.wordWrap = true;
		t.x = 235.36;
		t.y = 66;
		return t;
	};
	_proto.infoText3_i = function () {
		var t = new eui.Label();
		this.infoText3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 32;
		t.text = "炸弹 --";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 138.66;
		t.wordWrap = true;
		t.x = 438.02;
		t.y = 66;
		return t;
	};
	_proto.infoText4_i = function () {
		var t = new eui.Label();
		this.infoText4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 32;
		t.text = "春天 --";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 188;
		t.wordWrap = true;
		t.x = 32;
		t.y = 145.67;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.size = 32;
		t.text = "公共倍数";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 168;
		t.wordWrap = true;
		t.x = 24.67;
		t.y = 214;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.size = 32;
		t.text = "地主加倍";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 162.67;
		t.wordWrap = true;
		t.x = 182.66;
		t.y = 214;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.size = 32;
		t.text = "农民加倍";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 193.33;
		t.wordWrap = true;
		t.x = 307.33;
		t.y = 214;
		return t;
	};
	_proto.tf_3_i18n_i = function () {
		var t = new eui.Label();
		this.tf_3_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.size = 32;
		t.text = "总倍数";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 114;
		t.wordWrap = true;
		t.x = 479.99;
		t.y = 214;
		return t;
	};
	_proto.infoText5_i = function () {
		var t = new eui.Label();
		this.infoText5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.rotation = 359.82;
		t.size = 32;
		t.text = "60";
		t.textAlign = "center";
		t.textColor = 0xe7d181;
		t.verticalAlign = "middle";
		t.width = 108;
		t.wordWrap = true;
		t.x = 50.64;
		t.y = 250;
		return t;
	};
	_proto.infoText6_i = function () {
		var t = new eui.Label();
		this.infoText6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.rotation = 359.82;
		t.size = 32;
		t.text = "x1";
		t.textAlign = "center";
		t.textColor = 0xe7d181;
		t.verticalAlign = "middle";
		t.width = 109.33;
		t.wordWrap = true;
		t.x = 204.66;
		t.y = 250;
		return t;
	};
	_proto.infoText7_i = function () {
		var t = new eui.Label();
		this.infoText7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.33;
		t.rotation = 359.82;
		t.size = 32;
		t.text = "x(2+1)";
		t.textAlign = "center";
		t.textColor = 0xe7d181;
		t.verticalAlign = "middle";
		t.width = 122.67;
		t.wordWrap = true;
		t.x = 344;
		t.y = 248.67;
		return t;
	};
	_proto.infoText8_i = function () {
		var t = new eui.Label();
		this.infoText8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.33;
		t.rotation = 359.82;
		t.size = 32;
		t.text = "60";
		t.textAlign = "center";
		t.textColor = 0xe7d181;
		t.verticalAlign = "middle";
		t.width = 90;
		t.wordWrap = true;
		t.x = 495.33;
		t.y = 248.67;
		return t;
	};
	_proto.topTf_i = function () {
		var t = new eui.Label();
		this.topTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.26;
		t.rotation = 359.82;
		t.size = 25;
		t.text = "封顶";
		t.textAlign = "center";
		t.textColor = 0xE7D181;
		t.verticalAlign = "middle";
		t.width = 112;
		t.wordWrap = true;
		t.x = 485.35;
		t.y = 286.74;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.size = 32;
		t.text = "=";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 50;
		t.wordWrap = true;
		t.x = 452.67;
		t.y = 254.33;
		return t;
	};
	_proto.quitBtn_i = function () {
		var t = new eui.Group();
		this.quitBtn = t;
		t.x = 151;
		t.y = 405;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_a1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_likai_png";
		t.touchEnabled = false;
		t.x = 38;
		t.y = 22;
		return t;
	};
	_proto.continueBtn_i = function () {
		var t = new eui.Group();
		this.continueBtn = t;
		t.x = 737;
		t.y = 403;
		t.elementsContent = [this._Image11_i(),this.image_continue_i(),this.timeTf_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_a2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_continue_i = function () {
		var t = new eui.Image();
		this.image_continue = t;
		t.source = "DDZ_jixu_png";
		t.touchEnabled = false;
		t.x = 24;
		t.y = 26;
		return t;
	};
	_proto.timeTf_i = function () {
		var t = new eui.Label();
		this.timeTf = t;
		t.size = 40;
		t.text = "7";
		t.touchEnabled = false;
		t.x = 156;
		t.y = 22;
		return t;
	};
	return DDZGameResultSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZHandCardsSkin.exml'] = window.DDZHandCardsSkin = (function (_super) {
	__extends(DDZHandCardsSkin, _super);
	function DDZHandCardsSkin() {
		_super.call(this);
		this.skinParts = ["hand1","hand2","hand3","hand4","hand5","hand6","hand7","hand8","hand9","hand10","hand11","hand12","hand13","hand14","hand15","hand16","hand17","hand18","hand19","hand20","transparent"];
		
		this.elementsContent = [this.hand1_i(),this.hand2_i(),this.hand3_i(),this.hand4_i(),this.hand5_i(),this.hand6_i(),this.hand7_i(),this.hand8_i(),this.hand9_i(),this.hand10_i(),this.hand11_i(),this.hand12_i(),this.hand13_i(),this.hand14_i(),this.hand15_i(),this.hand16_i(),this.hand17_i(),this.hand18_i(),this.hand19_i(),this.hand20_i(),this.transparent_i()];
	}
	var _proto = DDZHandCardsSkin.prototype;

	_proto.hand1_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 45;
		t.y = 0;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 90;
		t.y = 0;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 135;
		t.y = 0;
		return t;
	};
	_proto.hand5_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto.hand6_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand6 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 225;
		t.y = 0;
		return t;
	};
	_proto.hand7_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand7 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 270;
		t.y = 0;
		return t;
	};
	_proto.hand8_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand8 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 315;
		t.y = 0;
		return t;
	};
	_proto.hand9_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand9 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 360;
		t.y = 0;
		return t;
	};
	_proto.hand10_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand10 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 405;
		t.y = 0;
		return t;
	};
	_proto.hand11_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand11 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 450;
		t.y = 0;
		return t;
	};
	_proto.hand12_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand12 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 495;
		t.y = 0;
		return t;
	};
	_proto.hand13_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand13 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 540;
		t.y = 0;
		return t;
	};
	_proto.hand14_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand14 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 585;
		t.y = 0;
		return t;
	};
	_proto.hand15_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand15 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 630;
		t.y = 0;
		return t;
	};
	_proto.hand16_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand16 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 675;
		t.y = 0;
		return t;
	};
	_proto.hand17_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand17 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 720;
		t.y = 0;
		return t;
	};
	_proto.hand18_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand18 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 765;
		t.y = 0;
		return t;
	};
	_proto.hand19_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand19 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 810;
		t.y = 0;
		return t;
	};
	_proto.hand20_i = function () {
		var t = new DDZ.DDZLargeCard();
		this.hand20 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "DDZBaseLargeCardSkin";
		t.x = 855;
		t.y = 0;
		return t;
	};
	_proto.transparent_i = function () {
		var t = new eui.Image();
		this.transparent = t;
		t.height = 20;
		t.source = "DDZ_alpha_mask_png";
		t.touchEnabled = false;
		t.width = 20;
		t.x = 5;
		t.y = 160;
		return t;
	};
	return DDZHandCardsSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZHeadGroupSkin.exml'] = window.DDZHeadGroupSkin = (function (_super) {
	__extends(DDZHeadGroupSkin, _super);
	function DDZHeadGroupSkin() {
		_super.call(this);
		this.skinParts = ["image_lord","image_head","image_robot","nameTf","moneyTf","image_double","infoGrp","image_card","lastCount","countGrp"];
		
		this.height = 288;
		this.width = 117;
		this.elementsContent = [this.image_lord_i(),this.infoGrp_i(),this.countGrp_i()];
	}
	var _proto = DDZHeadGroupSkin.prototype;

	_proto.image_lord_i = function () {
		var t = new eui.Image();
		this.image_lord = t;
		t.source = "DDZ_dizhuhat_png";
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.height = 163;
		t.width = 117;
		t.x = 0;
		t.y = 61;
		t.elementsContent = [this._Image1_i(),this.image_head_i(),this.image_robot_i(),this.nameTf_i(),this.moneyTf_i(),this.image_double_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_touxiankuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.source = "DDZ_head_png";
		t.x = 10;
		t.y = 8;
		return t;
	};
	_proto.image_robot_i = function () {
		var t = new eui.Image();
		this.image_robot = t;
		t.source = "DDZ_xiaojiqiren_png";
		t.x = 71.33;
		t.y = 68.01;
		return t;
	};
	_proto.nameTf_i = function () {
		var t = new eui.Label();
		this.nameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.33;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "34324242324223422";
		t.y = 113;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.size = 20;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xe2b13b;
		t.verticalAlign = "middle";
		t.x = 29;
		t.y = 133;
		return t;
	};
	_proto.image_double_i = function () {
		var t = new eui.Image();
		this.image_double = t;
		t.height = 20;
		t.source = "DDZ_bei_png";
		t.width = 20;
		t.x = 88;
		t.y = 9;
		return t;
	};
	_proto.countGrp_i = function () {
		var t = new eui.Group();
		this.countGrp = t;
		t.width = 102;
		t.x = 8;
		t.y = 221;
		t.elementsContent = [this.image_card_i(),this.lastCount_i()];
		return t;
	};
	_proto.image_card_i = function () {
		var t = new eui.Image();
		this.image_card = t;
		t.left = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "DDZ_icon_pai_png";
		t.y = 0;
		return t;
	};
	_proto.lastCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lastCount = t;
		t.font = "DDZ_game_cardnum_fnt";
		t.right = 0;
		t.text = "0";
		t.y = 11;
		return t;
	};
	return DDZHeadGroupSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZHeadGroupSkin1.exml'] = window.DDZHeadGroupSkin1 = (function (_super) {
	__extends(DDZHeadGroupSkin1, _super);
	function DDZHeadGroupSkin1() {
		_super.call(this);
		this.skinParts = ["image_lord","image_head","image_robot","nameTf","moneyTf","image_double","infoGrp","image_card","lastCount","countGrp"];
		
		this.height = 288;
		this.width = 117;
		this.elementsContent = [this.image_lord_i(),this.infoGrp_i(),this.countGrp_i()];
	}
	var _proto = DDZHeadGroupSkin1.prototype;

	_proto.image_lord_i = function () {
		var t = new eui.Image();
		this.image_lord = t;
		t.source = "DDZ_dizhuhat_png";
		t.x = 3;
		t.y = 0;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.height = 163;
		t.width = 117;
		t.x = 0;
		t.y = 61;
		t.elementsContent = [this._Image1_i(),this.image_head_i(),this.image_robot_i(),this.nameTf_i(),this.moneyTf_i(),this.image_double_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_touxiankuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.source = "DDZ_head_png";
		t.x = 10;
		t.y = 8;
		return t;
	};
	_proto.image_robot_i = function () {
		var t = new eui.Image();
		this.image_robot = t;
		t.source = "DDZ_xiaojiqiren_png";
		t.x = 71.33;
		t.y = 68.01;
		return t;
	};
	_proto.nameTf_i = function () {
		var t = new eui.Label();
		this.nameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.33;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "2342342424242";
		t.y = 113;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.size = 20;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xe2b13b;
		t.verticalAlign = "middle";
		t.x = 29;
		t.y = 133;
		return t;
	};
	_proto.image_double_i = function () {
		var t = new eui.Image();
		this.image_double = t;
		t.height = 20;
		t.source = "DDZ_bei_png";
		t.width = 20;
		t.x = 10;
		t.y = 9;
		return t;
	};
	_proto.countGrp_i = function () {
		var t = new eui.Group();
		this.countGrp = t;
		t.width = 102;
		t.x = 8;
		t.y = 221;
		t.elementsContent = [this.image_card_i(),this.lastCount_i()];
		return t;
	};
	_proto.image_card_i = function () {
		var t = new eui.Image();
		this.image_card = t;
		t.right = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "DDZ_icon_pai_png";
		t.y = 0;
		return t;
	};
	_proto.lastCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lastCount = t;
		t.font = "DDZ_game_cardnum_fnt";
		t.left = 0;
		t.text = "0";
		t.y = 11;
		return t;
	};
	return DDZHeadGroupSkin1;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZIntroductionSkin.exml'] = window.DDZIntroductionSkin = (function (_super) {
	__extends(DDZIntroductionSkin, _super);
	var DDZIntroductionSkin$Skin3 = 	(function (_super) {
		__extends(DDZIntroductionSkin$Skin3, _super);
		var DDZIntroductionSkin$Skin3$Skin4 = 		(function (_super) {
			__extends(DDZIntroductionSkin$Skin3$Skin4, _super);
			function DDZIntroductionSkin$Skin3$Skin4() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = DDZIntroductionSkin$Skin3$Skin4.prototype;

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
			return DDZIntroductionSkin$Skin3$Skin4;
		})(eui.Skin);

		function DDZIntroductionSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = DDZIntroductionSkin$Skin3.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 0;
			t.visible = true;
			t.skinName = DDZIntroductionSkin$Skin3$Skin4;
			return t;
		};
		return DDZIntroductionSkin$Skin3;
	})(eui.Skin);

	function DDZIntroductionSkin() {
		_super.call(this);
		this.skinParts = ["imageBg","image_rule","tableGroup","scl","grp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.imageBg_i(),this.grp_i()];
	}
	var _proto = DDZIntroductionSkin.prototype;

	_proto.imageBg_i = function () {
		var t = new eui.Image();
		this.imageBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "DDZ_alpha_mask_png";
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.top = 0;
		t.x = 832;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.scl_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 750;
		t.scale9Grid = new egret.Rectangle(83,12,504,62);
		t.source = "DDZ_rulebg2_png";
		t.top = 0;
		t.width = 502;
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.top = 22;
		t.x = 176;
		t.elementsContent = [this.image_rule_i()];
		return t;
	};
	_proto.image_rule_i = function () {
		var t = new eui.Image();
		this.image_rule = t;
		t.source = "DDZ_gamename_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.top = 86;
		t.width = 500;
		t.x = 2;
		t.skinName = DDZIntroductionSkin$Skin3;
		t.viewport = this.tableGroup_i();
		return t;
	};
	_proto.tableGroup_i = function () {
		var t = new eui.Group();
		this.tableGroup = t;
		return t;
	};
	return DDZIntroductionSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZLeftDiscardSkin.exml'] = window.DDZLeftDiscardSkin = (function (_super) {
	__extends(DDZLeftDiscardSkin, _super);
	function DDZLeftDiscardSkin() {
		_super.call(this);
		this.skinParts = ["hand11","hand12","hand13","hand14","hand15","hand16","hand17","hand18","hand19","hand20","hand1","hand2","hand3","hand4","hand5","hand6","hand7","hand8","hand9","hand10"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DDZLeftDiscardSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 4;
		t.y = 0;
		t.elementsContent = [this.hand11_i(),this.hand12_i(),this.hand13_i(),this.hand14_i(),this.hand15_i(),this.hand16_i(),this.hand17_i(),this.hand18_i(),this.hand19_i(),this.hand20_i(),this.hand1_i(),this.hand2_i(),this.hand3_i(),this.hand4_i(),this.hand5_i(),this.hand6_i(),this.hand7_i(),this.hand8_i(),this.hand9_i(),this.hand10_i()];
		return t;
	};
	_proto.hand11_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hand12_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.hand13_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand13 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.hand14_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand14 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.hand15_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand15 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.hand16_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand16 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.hand17_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand17 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 210;
		t.y = 0;
		return t;
	};
	_proto.hand18_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand18 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 245;
		t.y = 0;
		return t;
	};
	_proto.hand19_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand19 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.hand20_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 315;
		t.y = 0;
		return t;
	};
	_proto.hand1_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 0;
		t.y = 63;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 35;
		t.y = 63;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 70;
		t.y = 63;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 105;
		t.y = 63;
		return t;
	};
	_proto.hand5_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 140;
		t.y = 63;
		return t;
	};
	_proto.hand6_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 175;
		t.y = 63;
		return t;
	};
	_proto.hand7_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 210;
		t.y = 63;
		return t;
	};
	_proto.hand8_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 245;
		t.y = 63;
		return t;
	};
	_proto.hand9_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 280;
		t.y = 63;
		return t;
	};
	_proto.hand10_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 315;
		t.y = 63;
		return t;
	};
	return DDZLeftDiscardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZLordThreeCardSkin.exml'] = window.DDZLordThreeCardSkin = (function (_super) {
	__extends(DDZLordThreeCardSkin, _super);
	function DDZLordThreeCardSkin() {
		_super.call(this);
		this.skinParts = ["handCard0","handCard1","handCard2"];
		
		this.elementsContent = [this.handCard0_i(),this.handCard1_i(),this.handCard2_i()];
	}
	var _proto = DDZLordThreeCardSkin.prototype;

	_proto.handCard0_i = function () {
		var t = new DDZ.DDZSmallCard();
		this.handCard0 = t;
		t.skinName = "DDZBaseSmallCardSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.handCard1_i = function () {
		var t = new DDZ.DDZSmallCard();
		this.handCard1 = t;
		t.skinName = "DDZBaseSmallCardSkin";
		t.x = 85;
		t.y = 0;
		return t;
	};
	_proto.handCard2_i = function () {
		var t = new DDZ.DDZSmallCard();
		this.handCard2 = t;
		t.skinName = "DDZBaseSmallCardSkin";
		t.x = 170;
		t.y = 0;
		return t;
	};
	return DDZLordThreeCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZMiddleDiscardSkin.exml'] = window.DDZMiddleDiscardSkin = (function (_super) {
	__extends(DDZMiddleDiscardSkin, _super);
	function DDZMiddleDiscardSkin() {
		_super.call(this);
		this.skinParts = ["hand1","hand2","hand3","hand4","hand5","hand6","hand7","hand8","hand9","hand10","hand11","hand12","hand13","hand14","hand15","hand16","hand17","hand18","hand19","hand20"];
		
		this.elementsContent = [this.hand1_i(),this.hand2_i(),this.hand3_i(),this.hand4_i(),this.hand5_i(),this.hand6_i(),this.hand7_i(),this.hand8_i(),this.hand9_i(),this.hand10_i(),this.hand11_i(),this.hand12_i(),this.hand13_i(),this.hand14_i(),this.hand15_i(),this.hand16_i(),this.hand17_i(),this.hand18_i(),this.hand19_i(),this.hand20_i()];
	}
	var _proto = DDZMiddleDiscardSkin.prototype;

	_proto.hand1_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.hand5_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.hand6_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.hand7_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 210;
		t.y = 0;
		return t;
	};
	_proto.hand8_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 245;
		t.y = 0;
		return t;
	};
	_proto.hand9_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.hand10_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 315;
		t.y = 0;
		return t;
	};
	_proto.hand11_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 350;
		t.y = 0;
		return t;
	};
	_proto.hand12_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.hand13_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand13 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	_proto.hand14_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand14 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 455;
		t.y = 0;
		return t;
	};
	_proto.hand15_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand15 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 490;
		t.y = 0;
		return t;
	};
	_proto.hand16_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand16 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 525;
		t.y = 0;
		return t;
	};
	_proto.hand17_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand17 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 560;
		t.y = 0;
		return t;
	};
	_proto.hand18_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand18 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 595;
		t.y = 0;
		return t;
	};
	_proto.hand19_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand19 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 630;
		t.y = 0;
		return t;
	};
	_proto.hand20_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 665;
		t.y = 0;
		return t;
	};
	return DDZMiddleDiscardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZMyInfoSkin.exml'] = window.DDZMyInfoSkin = (function (_super) {
	__extends(DDZMyInfoSkin, _super);
	function DDZMyInfoSkin() {
		_super.call(this);
		this.skinParts = ["image_lord","image_head","myNameTf","image_double","topHeadGrp","myMoneyTf","myRateTf"];
		
		this.elementsContent = [this._Image1_i(),this.topHeadGrp_i(),this._Group1_i()];
	}
	var _proto = DDZMyInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "DDZ_di_png";
		return t;
	};
	_proto.topHeadGrp_i = function () {
		var t = new eui.Group();
		this.topHeadGrp = t;
		t.left = 32;
		t.top = 59;
		t.elementsContent = [this._Image2_i(),this.image_lord_i(),this.image_head_i(),this.myNameTf_i(),this.image_double_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_touxiangkuangxiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_lord_i = function () {
		var t = new eui.Image();
		this.image_lord = t;
		t.source = "DDZ_dizhuhat_png";
		t.x = 0;
		t.y = -56.66;
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.height = 100;
		t.source = "DDZ_head_png";
		t.width = 100;
		t.x = 6;
		t.y = 6;
		return t;
	};
	_proto.myNameTf_i = function () {
		var t = new eui.Label();
		this.myNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.97;
		t.text = "234243242424242";
		t.textColor = 0xffffff;
		t.x = 132;
		t.y = 90.47;
		return t;
	};
	_proto.image_double_i = function () {
		var t = new eui.Image();
		this.image_double = t;
		t.height = 20;
		t.source = "DDZ_bei_png";
		t.width = 20;
		t.x = 88;
		t.y = 9;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 132.05;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.myMoneyTf_i(),this._Image5_i(),this._Image6_i(),this.myRateTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_jinbidi_png";
		t.x = 27.33;
		t.y = 7;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_qian_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myMoneyTf_i = function () {
		var t = new eui.Label();
		this.myMoneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.59;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xe2b13b;
		t.verticalAlign = "middle";
		t.x = 54.38;
		t.y = 5.45;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_jinbidi_png";
		t.x = 302.33;
		t.y = 7;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_bei_png";
		t.x = 275;
		t.y = 3.99;
		return t;
	};
	_proto.myRateTf_i = function () {
		var t = new eui.Label();
		this.myRateTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.52;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0xE2B13B;
		t.width = 151.27;
		t.x = 326.72;
		t.y = 10;
		return t;
	};
	return DDZMyInfoSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZNoticeInfoSkin.exml'] = window.DDZNoticeInfoSkin = (function (_super) {
	__extends(DDZNoticeInfoSkin, _super);
	function DDZNoticeInfoSkin() {
		_super.call(this);
		this.skinParts = ["image0","image1","image2","image3","image4","image5","image6","image_clock_bg","countTf","countGrp"];
		
		this.elementsContent = [this.image0_i(),this.image1_i(),this.image2_i(),this.image3_i(),this.image4_i(),this.image5_i(),this.image6_i(),this.countGrp_i()];
	}
	var _proto = DDZNoticeInfoSkin.prototype;

	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_buyao_0_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_nodoubleInfo_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_bujiao_1_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_info2_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_doubleInfo_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image5_i = function () {
		var t = new eui.Image();
		this.image5 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_info0_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_info1_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.countGrp_i = function () {
		var t = new eui.Group();
		this.countGrp = t;
		t.anchorOffsetX = 65.5;
		t.anchorOffsetY = 64.5;
		t.rotation = 0;
		t.x = 81;
		t.y = 68;
		t.elementsContent = [this.image_clock_bg_i(),this.countTf_i()];
		return t;
	};
	_proto.image_clock_bg_i = function () {
		var t = new eui.Image();
		this.image_clock_bg = t;
		t.source = "DDZ_bg_clock_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.countTf_i = function () {
		var t = new eui.BitmapLabel();
		this.countTf = t;
		t.font = "DDZ_game_timenum_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.y = 45;
		return t;
	};
	return DDZNoticeInfoSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZNoticeInfoSkin2.exml'] = window.DDZNoticeInfoSkin2 = (function (_super) {
	__extends(DDZNoticeInfoSkin2, _super);
	function DDZNoticeInfoSkin2() {
		_super.call(this);
		this.skinParts = ["image_clock_bg","countTf","countGrp","image0","image1","image2","image3","image4","image5","image6"];
		
		this.elementsContent = [this.countGrp_i(),this.image0_i(),this.image1_i(),this.image2_i(),this.image3_i(),this.image4_i(),this.image5_i(),this.image6_i()];
	}
	var _proto = DDZNoticeInfoSkin2.prototype;

	_proto.countGrp_i = function () {
		var t = new eui.Group();
		this.countGrp = t;
		t.anchorOffsetX = 65.5;
		t.anchorOffsetY = 64.5;
		t.x = 78;
		t.y = 69;
		t.elementsContent = [this.image_clock_bg_i(),this.countTf_i()];
		return t;
	};
	_proto.image_clock_bg_i = function () {
		var t = new eui.Image();
		this.image_clock_bg = t;
		t.source = "DDZ_bg_clock_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.countTf_i = function () {
		var t = new eui.BitmapLabel();
		this.countTf = t;
		t.font = "DDZ_game_timenum_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.y = 45;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.horizontalCenter = 0.5;
		t.source = "DDZ_buyao_0_png";
		t.verticalCenter = 89;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_nodoubleInfo_png";
		t.verticalCenter = 89.5;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_bujiao_1_png";
		t.verticalCenter = 89.5;
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.horizontalCenter = 0.5;
		t.source = "DDZ_info2_png";
		t.verticalCenter = 89;
		return t;
	};
	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.horizontalCenter = 0.5;
		t.source = "DDZ_doubleInfo_png";
		t.verticalCenter = 89.5;
		return t;
	};
	_proto.image5_i = function () {
		var t = new eui.Image();
		this.image5 = t;
		t.horizontalCenter = 0;
		t.source = "DDZ_info0_png";
		t.verticalCenter = 89;
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.horizontalCenter = 0.5;
		t.source = "DDZ_info1_png";
		t.verticalCenter = 89;
		return t;
	};
	return DDZNoticeInfoSkin2;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZOffsetSkin.exml'] = window.DDZOffsetSkin = (function (_super) {
	__extends(DDZOffsetSkin, _super);
	function DDZOffsetSkin() {
		_super.call(this);
		this.skinParts = ["moneyTf"];
		
		this.elementsContent = [this.moneyTf_i()];
	}
	var _proto = DDZOffsetSkin.prototype;

	_proto.moneyTf_i = function () {
		var t = new eui.BitmapLabel();
		this.moneyTf = t;
		t.font = "DDZ_win_fnt";
		t.text = "";
		t.x = 3;
		t.y = 1;
		return t;
	};
	return DDZOffsetSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZPersonScoreSkin.exml'] = window.DDZPersonScoreSkin = (function (_super) {
	__extends(DDZPersonScoreSkin, _super);
	function DDZPersonScoreSkin() {
		_super.call(this);
		this.skinParts = ["tf0","tf1"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DDZPersonScoreSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.tf0_i(),this.tf1_i()];
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.anchorOffsetX = 0;
		t.text = "+";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 57;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.anchorOffsetX = 0;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.width = 185;
		t.x = 66;
		t.y = 1;
		return t;
	};
	return DDZPersonScoreSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZRightDiscardSkin.exml'] = window.DDZRightDiscardSkin = (function (_super) {
	__extends(DDZRightDiscardSkin, _super);
	function DDZRightDiscardSkin() {
		_super.call(this);
		this.skinParts = ["hand11","hand12","hand13","hand14","hand15","hand16","hand17","hand18","hand19","hand20","hand10","hand9","hand8","hand7","hand6","hand5","hand4","hand3","hand2","hand1"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = DDZRightDiscardSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 4;
		t.y = 0;
		t.elementsContent = [this.hand11_i(),this.hand12_i(),this.hand13_i(),this.hand14_i(),this.hand15_i(),this.hand16_i(),this.hand17_i(),this.hand18_i(),this.hand19_i(),this.hand20_i(),this.hand10_i(),this.hand9_i(),this.hand8_i(),this.hand7_i(),this.hand6_i(),this.hand5_i(),this.hand4_i(),this.hand3_i(),this.hand2_i(),this.hand1_i()];
		return t;
	};
	_proto.hand11_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand11 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = -4;
		t.y = 0;
		return t;
	};
	_proto.hand12_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand12 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 31;
		t.y = 0;
		return t;
	};
	_proto.hand13_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand13 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 66;
		t.y = 0;
		return t;
	};
	_proto.hand14_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand14 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 101;
		t.y = 0;
		return t;
	};
	_proto.hand15_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand15 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 136;
		t.y = 0;
		return t;
	};
	_proto.hand16_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand16 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 171;
		t.y = 0;
		return t;
	};
	_proto.hand17_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand17 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 206;
		t.y = 0;
		return t;
	};
	_proto.hand18_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand18 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 241;
		t.y = 0;
		return t;
	};
	_proto.hand19_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand19 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 276;
		t.y = 0;
		return t;
	};
	_proto.hand20_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 311;
		t.y = 0;
		return t;
	};
	_proto.hand10_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = -4;
		t.y = 63;
		return t;
	};
	_proto.hand9_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 31;
		t.y = 63;
		return t;
	};
	_proto.hand8_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 66;
		t.y = 63;
		return t;
	};
	_proto.hand7_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 101;
		t.y = 63;
		return t;
	};
	_proto.hand6_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 136;
		t.y = 63;
		return t;
	};
	_proto.hand5_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 171;
		t.y = 63;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 206;
		t.y = 63;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 241;
		t.y = 63;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 276;
		t.y = 63;
		return t;
	};
	_proto.hand1_i = function () {
		var t = new DDZ.DDZMiddleCard();
		this.hand1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZBaseMiddleCardSkin";
		t.x = 311;
		t.y = 63;
		return t;
	};
	return DDZRightDiscardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/component/DDZTrusteeshipSkin.exml'] = window.DDZTrusteeshipSkin = (function (_super) {
	__extends(DDZTrusteeshipSkin, _super);
	function DDZTrusteeshipSkin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","btnTrusteeShip"];
		
		this.elementsContent = [this._Rect1_i(),this.btnTrusteeShip_i()];
	}
	var _proto = DDZTrusteeshipSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.height = 200;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.width = 1334;
		return t;
	};
	_proto.btnTrusteeShip_i = function () {
		var t = new eui.Group();
		this.btnTrusteeShip = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.x = 545;
		t.y = 60;
		t.elementsContent = [this._Image1_i(),this.tf_0_i18n_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_quxiaotuoguananniu_png";
		t.x = 3;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.size = 28;
		t.text = "取消托管";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 190;
		t.x = 7;
		t.y = 4;
		return t;
	};
	return DDZTrusteeshipSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/DDZGameSceneSkin.exml'] = window.DDZGameSceneSkin = (function (_super) {
	__extends(DDZGameSceneSkin, _super);
	var DDZGameSceneSkin$Skin5 = 	(function (_super) {
		__extends(DDZGameSceneSkin$Skin5, _super);
		function DDZGameSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_wenhao_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGameSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_wenhao1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameSceneSkin$Skin5;
	})(eui.Skin);

	var DDZGameSceneSkin$Skin6 = 	(function (_super) {
		__extends(DDZGameSceneSkin$Skin6, _super);
		function DDZGameSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_yinliang_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGameSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_yinliang1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameSceneSkin$Skin6;
	})(eui.Skin);

	var DDZGameSceneSkin$Skin7 = 	(function (_super) {
		__extends(DDZGameSceneSkin$Skin7, _super);
		function DDZGameSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_jinyin_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGameSceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_jinyin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameSceneSkin$Skin7;
	})(eui.Skin);

	var DDZGameSceneSkin$Skin8 = 	(function (_super) {
		__extends(DDZGameSceneSkin$Skin8, _super);
		function DDZGameSceneSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_tuoguan1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGameSceneSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_tuoguan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameSceneSkin$Skin8;
	})(eui.Skin);

	var DDZGameSceneSkin$Skin9 = 	(function (_super) {
		__extends(DDZGameSceneSkin$Skin9, _super);
		function DDZGameSceneSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_tuoguanzhong1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","DDZ_tuoguan2_png")
					])
			];
		}
		var _proto = DDZGameSceneSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_tuoguanzhong_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameSceneSkin$Skin9;
	})(eui.Skin);

	var DDZGameSceneSkin$Skin10 = 	(function (_super) {
		__extends(DDZGameSceneSkin$Skin10, _super);
		function DDZGameSceneSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","DDZ_fanhui_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DDZGameSceneSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "DDZ_fanhui1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return DDZGameSceneSkin$Skin10;
	})(eui.Skin);

	function DDZGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["imagedesk","myHandleCard","openDeal1","openDeal0","discard1","discard2","discard0","headGrp2","headGrp0","noCallLord","btn_callLord","callLandlordGrp","noRobLord","robLord","robLandlordGrp","btnNoDouble","btnDouble","doubleGrp","grpOption","notice0","notice2","notice4","notice1","lordThreeGrp","noBigInfoGrp","cardContainier","myInfo","trustShip","warningGrp0","warningGrp1","warningGrp2","effectGrp0","effectGrp1","effectGrp2","maskHandler","gameResult","waitGrp","willStartLabel","offset2","offset0","offset1","chatCtx2","chatCtx1","chatCtx0","playerReady0","playerReady1","playerReady2","readyBtnGrp","chatBtn","copyRoomInfoBtn","introBtn","volumeOpen","volumeClose","tuoguanZhong","tuoguan","menuGrp","backBtn","menuGrp1","introView","roomLabel","friendGrp","replayTf","dizhuTf","replayGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.imagedesk_i(),this.myHandleCard_i(),this.openDeal1_i(),this.openDeal0_i(),this.discard1_i(),this.discard2_i(),this.discard0_i(),this.headGrp2_i(),this.headGrp0_i(),this.callLandlordGrp_i(),this.robLandlordGrp_i(),this.doubleGrp_i(),this.grpOption_i(),this.notice0_i(),this.notice2_i(),this.notice4_i(),this.notice1_i(),this.lordThreeGrp_i(),this.noBigInfoGrp_i(),this._Group1_i(),this.myInfo_i(),this.trustShip_i(),this.warningGrp0_i(),this.warningGrp1_i(),this.warningGrp2_i(),this.effectGrp0_i(),this.effectGrp1_i(),this.effectGrp2_i(),this.maskHandler_i(),this.gameResult_i(),this.waitGrp_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.chatCtx2_i(),this.chatCtx1_i(),this.chatCtx0_i(),this.playerReady0_i(),this.playerReady1_i(),this.playerReady2_i(),this.readyBtnGrp_i(),this.chatBtn_i(),this.menuGrp_i(),this.menuGrp1_i(),this.introView_i(),this.friendGrp_i(),this.replayGrp_i()];
	}
	var _proto = DDZGameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "DDZ_beijing_png";
		t.top = 0;
		return t;
	};
	_proto.imagedesk_i = function () {
		var t = new eui.Image();
		this.imagedesk = t;
		t.left = 0;
		t.right = 0;
		t.source = "DDZ_zhuozi_png";
		t.top = 0;
		t.touchEnabled = true;
		return t;
	};
	_proto.myHandleCard_i = function () {
		var t = new DDZ.DDZHandCards();
		this.myHandleCard = t;
		t.bottom = 58;
		t.horizontalCenter = 0.5;
		t.skinName = "DDZHandCardsSkin";
		return t;
	};
	_proto.openDeal1_i = function () {
		var t = new DDZ.DDZOtherPlayersLeftHandleCards();
		this.openDeal1 = t;
		t.left = 134;
		t.skinName = "DDZLeftDiscardSkin";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.openDeal0_i = function () {
		var t = new DDZ.DDZOtherPlayersRightHandleCards();
		this.openDeal0 = t;
		t.right = 134;
		t.skinName = "DDZRightDiscardSkin";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.discard1_i = function () {
		var t = new DDZ.DDZMiddleDiscard();
		this.discard1 = t;
		t.bottom = 274;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.skinName = "DDZMiddleDiscardSkin";
		t.visible = false;
		return t;
	};
	_proto.discard2_i = function () {
		var t = new DDZ.DDZLeftDiscard();
		this.discard2 = t;
		t.anchorOffsetX = 0;
		t.left = 117;
		t.scaleX = 1;
		t.skinName = "DDZLeftDiscardSkin";
		t.verticalCenter = -139.5;
		t.visible = false;
		return t;
	};
	_proto.discard0_i = function () {
		var t = new DDZ.DDZRightDiscard();
		this.discard0 = t;
		t.anchorOffsetX = 416;
		t.right = 114;
		t.scaleX = 1;
		t.skinName = "DDZRightDiscardSkin";
		t.verticalCenter = -139.5;
		t.visible = false;
		return t;
	};
	_proto.headGrp2_i = function () {
		var t = new DDZ.DDZHeadGroup();
		this.headGrp2 = t;
		t.left = 0;
		t.skinName = "DDZHeadGroupSkin";
		t.verticalCenter = -112;
		return t;
	};
	_proto.headGrp0_i = function () {
		var t = new DDZ.DDZHeadGroup();
		this.headGrp0 = t;
		t.right = 0;
		t.skinName = "DDZHeadGroupSkin1";
		t.verticalCenter = -112;
		return t;
	};
	_proto.callLandlordGrp_i = function () {
		var t = new eui.Group();
		this.callLandlordGrp = t;
		t.bottom = 250;
		t.horizontalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.noCallLord_i(),this.btn_callLord_i()];
		return t;
	};
	_proto.noCallLord_i = function () {
		var t = new eui.Group();
		this.noCallLord = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_lvanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_bujiao_png";
		t.x = 45;
		t.y = 14;
		return t;
	};
	_proto.btn_callLord_i = function () {
		var t = new eui.Group();
		this.btn_callLord = t;
		t.x = 362;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_jinanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_call1_png";
		t.x = 30;
		t.y = 13;
		return t;
	};
	_proto.robLandlordGrp_i = function () {
		var t = new eui.Group();
		this.robLandlordGrp = t;
		t.bottom = 250;
		t.horizontalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.noRobLord_i(),this.robLord_i()];
		return t;
	};
	_proto.noRobLord_i = function () {
		var t = new eui.Group();
		this.noRobLord = t;
		t.x = -12;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_lvanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_info4_png";
		t.x = 43;
		t.y = 16;
		return t;
	};
	_proto.robLord_i = function () {
		var t = new eui.Group();
		this.robLord = t;
		t.x = 290;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_jinanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_info5_png";
		t.x = 30;
		t.y = 17;
		return t;
	};
	_proto.doubleGrp_i = function () {
		var t = new eui.Group();
		this.doubleGrp = t;
		t.bottom = 250;
		t.horizontalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.btnNoDouble_i(),this.btnDouble_i()];
		return t;
	};
	_proto.btnNoDouble_i = function () {
		var t = new eui.Group();
		this.btnNoDouble = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_lvanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "DDZ_bujia_png";
		t.verticalCenter = -3.5;
		return t;
	};
	_proto.btnDouble_i = function () {
		var t = new eui.Group();
		this.btnDouble = t;
		t.x = 336;
		t.y = 4;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_jinanniu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "DDZ_jiabei_bt_png";
		t.x = 44;
		t.y = 16;
		return t;
	};
	_proto.grpOption_i = function () {
		var t = new DDZ.DDZDealCard();
		this.grpOption = t;
		t.bottom = 277;
		t.horizontalCenter = 0;
		t.skinName = "DDZDealCardSkin";
		t.visible = false;
		return t;
	};
	_proto.notice0_i = function () {
		var t = new DDZ.DDZNoticeInfo();
		this.notice0 = t;
		t.right = 136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZNoticeInfoSkin";
		t.verticalCenter = -114;
		t.visible = false;
		return t;
	};
	_proto.notice2_i = function () {
		var t = new DDZ.DDZNoticeInfo();
		this.notice2 = t;
		t.left = 136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZNoticeInfoSkin";
		t.verticalCenter = -114;
		t.visible = false;
		return t;
	};
	_proto.notice4_i = function () {
		var t = new DDZ.DDZNoticeInfo();
		this.notice4 = t;
		t.bottom = 249;
		t.horizontalCenter = -89.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZNoticeInfoSkin";
		t.visible = false;
		return t;
	};
	_proto.notice1_i = function () {
		var t = new DDZ.DDZNoticeInfo2();
		this.notice1 = t;
		t.bottom = 258;
		t.horizontalCenter = 0;
		t.skinName = "DDZNoticeInfoSkin2";
		t.visible = false;
		return t;
	};
	_proto.lordThreeGrp_i = function () {
		var t = new DDZ.DDZ_LORD_THREE();
		this.lordThreeGrp = t;
		t.horizontalCenter = 0;
		t.skinName = "DDZLordThreeCardSkin";
		t.top = 0;
		return t;
	};
	_proto.noBigInfoGrp_i = function () {
		var t = new eui.Group();
		this.noBigInfoGrp = t;
		t.bottom = 118;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this._Image14_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_game_tips_00_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this.cardContainier_i()];
		return t;
	};
	_proto.cardContainier_i = function () {
		var t = new eui.Group();
		this.cardContainier = t;
		t.height = 750;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myInfo_i = function () {
		var t = new DDZ.DDZMyInfo();
		this.myInfo = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "DDZMyInfoSkin";
		return t;
	};
	_proto.trustShip_i = function () {
		var t = new DDZ.DDZTrusteeShip();
		this.trustShip = t;
		t.bottom = 0;
		t.height = 200;
		t.left = 0;
		t.right = 0;
		t.skinName = "DDZTrusteeshipSkin";
		return t;
	};
	_proto.warningGrp0_i = function () {
		var t = new eui.Group();
		this.warningGrp0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.right = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 17;
		t.width = 111;
		return t;
	};
	_proto.warningGrp1_i = function () {
		var t = new eui.Group();
		this.warningGrp1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 203;
		t.height = 123;
		t.left = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 111;
		return t;
	};
	_proto.warningGrp2_i = function () {
		var t = new eui.Group();
		this.warningGrp2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123;
		t.left = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 17;
		t.width = 111;
		return t;
	};
	_proto.effectGrp0_i = function () {
		var t = new eui.Group();
		this.effectGrp0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.right = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -135;
		t.width = 370;
		return t;
	};
	_proto.effectGrp1_i = function () {
		var t = new eui.Group();
		this.effectGrp1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 265;
		t.height = 180;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 370;
		t.y = 10;
		return t;
	};
	_proto.effectGrp2_i = function () {
		var t = new eui.Group();
		this.effectGrp2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.left = 140;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -135;
		t.width = 370;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.maskHandler_i = function () {
		var t = new eui.Group();
		this.maskHandler = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 403;
		t.horizontalCenter = 0.5;
		t.width = 1119;
		t.elementsContent = [this._Image15_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 403;
		t.source = "DDZ_alpha_mask_png";
		t.touchEnabled = false;
		t.width = 1119;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameResult_i = function () {
		var t = new DDZ.DDZGameResult();
		this.gameResult = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "DDZGameResultSkin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1334;
		t.x = -140;
		t.y = -331;
		return t;
	};
	_proto.waitGrp_i = function () {
		var t = new eui.Group();
		this.waitGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 2;
		t.left = -2;
		t.right = 2;
		t.source = "DDZ_alpha_mask_png";
		t.top = -2;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "DDZ_wait_others_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 210;
		t.elementsContent = [this.willStartLabel_i()];
		return t;
	};
	_proto.willStartLabel_i = function () {
		var t = new eui.Label();
		this.willStartLabel = t;
		t.text = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.verticalCenter = -145;
		t.elementsContent = [this.offset2_i()];
		return t;
	};
	_proto.offset2_i = function () {
		var t = new DDZ.DDZOffsetUi();
		this.offset2 = t;
		t.skinName = "DDZOffsetSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.right = 134;
		t.verticalCenter = -145;
		t.elementsContent = [this.offset0_i()];
		return t;
	};
	_proto.offset0_i = function () {
		var t = new DDZ.DDZOffsetUi();
		this.offset0 = t;
		t.height = 0;
		t.skinName = "DDZOffsetSkin";
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 70;
		t.left = 32;
		t.elementsContent = [this.offset1_i()];
		return t;
	};
	_proto.offset1_i = function () {
		var t = new DDZ.DDZOffsetUi();
		this.offset1 = t;
		t.skinName = "DDZOffsetSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chatCtx2_i = function () {
		var t = new eui.Group();
		this.chatCtx2 = t;
		t.height = 100;
		t.left = 166;
		t.verticalCenter = -220;
		t.width = 200;
		return t;
	};
	_proto.chatCtx1_i = function () {
		var t = new eui.Group();
		this.chatCtx1 = t;
		t.bottom = 245;
		t.height = 100;
		t.left = 166;
		t.width = 200;
		return t;
	};
	_proto.chatCtx0_i = function () {
		var t = new eui.Group();
		this.chatCtx0 = t;
		t.height = 100;
		t.right = 170;
		t.verticalCenter = -220;
		t.width = 200;
		return t;
	};
	_proto.playerReady0_i = function () {
		var t = new DDZ.DDZ_PlayerReady();
		this.playerReady0 = t;
		t.left = 200;
		t.skinName = "DDZ_PlayerReadySkin";
		t.verticalCenter = -121;
		return t;
	};
	_proto.playerReady1_i = function () {
		var t = new DDZ.DDZ_PlayerReady();
		this.playerReady1 = t;
		t.bottom = 244;
		t.horizontalCenter = 0;
		t.skinName = "DDZ_PlayerReadySkin";
		return t;
	};
	_proto.playerReady2_i = function () {
		var t = new DDZ.DDZ_PlayerReady();
		this.playerReady2 = t;
		t.right = 200;
		t.skinName = "DDZ_PlayerReadySkin";
		t.verticalCenter = -121;
		return t;
	};
	_proto.readyBtnGrp_i = function () {
		var t = new eui.Group();
		this.readyBtnGrp = t;
		t.anchorOffsetX = 66.5;
		t.anchorOffsetY = 25;
		t.bottom = 240;
		t.height = 50;
		t.horizontalCenter = 0.5;
		t.width = 133;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_ready0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chatBtn_i = function () {
		var t = new eui.Image();
		this.chatBtn = t;
		t.anchorOffsetX = 40.91;
		t.anchorOffsetY = 37.88;
		t.bottom = 152;
		t.right = 10;
		t.source = "chat_talk_icon_png";
		return t;
	};
	_proto.menuGrp_i = function () {
		var t = new eui.Group();
		this.menuGrp = t;
		t.right = 1;
		t.top = 0;
		t.width = 339;
		t.elementsContent = [this.copyRoomInfoBtn_i(),this.introBtn_i(),this.volumeOpen_i(),this.volumeClose_i(),this.tuoguanZhong_i(),this.tuoguan_i()];
		return t;
	};
	_proto.copyRoomInfoBtn_i = function () {
		var t = new eui.Image();
		this.copyRoomInfoBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "copy_btn_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.introBtn_i = function () {
		var t = new eui.Button();
		this.introBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 83.31;
		t.y = 0;
		t.skinName = DDZGameSceneSkin$Skin5;
		return t;
	};
	_proto.volumeOpen_i = function () {
		var t = new eui.Button();
		this.volumeOpen = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 169.31;
		t.y = 0;
		t.skinName = DDZGameSceneSkin$Skin6;
		return t;
	};
	_proto.volumeClose_i = function () {
		var t = new eui.Button();
		this.volumeClose = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 169.31;
		t.y = 0;
		t.skinName = DDZGameSceneSkin$Skin7;
		return t;
	};
	_proto.tuoguanZhong_i = function () {
		var t = new eui.Button();
		this.tuoguanZhong = t;
		t.label = "";
		t.x = 255.31;
		t.y = 0;
		t.skinName = DDZGameSceneSkin$Skin8;
		return t;
	};
	_proto.tuoguan_i = function () {
		var t = new eui.Button();
		this.tuoguan = t;
		t.label = "";
		t.x = 255.31;
		t.y = 0;
		t.skinName = DDZGameSceneSkin$Skin9;
		return t;
	};
	_proto.menuGrp1_i = function () {
		var t = new eui.Group();
		this.menuGrp1 = t;
		t.left = 0;
		t.top = 0;
		t.elementsContent = [this.backBtn_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = DDZGameSceneSkin$Skin10;
		return t;
	};
	_proto.introView_i = function () {
		var t = new DDZ.DDZInstroduction();
		this.introView = t;
		t.bottom = 0;
		t.skinName = "DDZIntroductionSkin";
		t.top = 0;
		t.visible = false;
		t.x = 0;
		return t;
	};
	_proto.friendGrp_i = function () {
		var t = new eui.Group();
		this.friendGrp = t;
		t.left = 0;
		t.top = 90;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.elementsContent = [this._Image19_i(),this.roomLabel_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "DDZ_dizhu_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomLabel_i = function () {
		var t = new eui.Label();
		this.roomLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "";
		t.textColor = 0xBFB5B5;
		t.touchEnabled = false;
		t.y = 10;
		return t;
	};
	_proto.replayGrp_i = function () {
		var t = new eui.Group();
		this.replayGrp = t;
		t.left = 124;
		t.top = 18;
		t.elementsContent = [this.replayTf_i(),this.dizhuTf_i()];
		return t;
	};
	_proto.replayTf_i = function () {
		var t = new eui.Label();
		this.replayTf = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0xb5b5b5;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dizhuTf_i = function () {
		var t = new eui.Label();
		this.dizhuTf = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "";
		t.textColor = 0xb5b5b5;
		t.x = 0;
		t.y = 30;
		return t;
	};
	return DDZGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/pages/DDZ/replay/DDZReplaySkin.exml'] = window.DDZReplaySkin = (function (_super) {
	__extends(DDZReplaySkin, _super);
	function DDZReplaySkin() {
		_super.call(this);
		this.skinParts = ["bg","spdBtn0","spdBtn1","spdBtn2","spdBtn3","bgmBtn","musicBtn","prevBtn","playBtn","nextBtn","progressTf","exitBtn","ctrlGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.ctrlGrp_i()];
	}
	var _proto = DDZReplaySkin.prototype;

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
		t.height = 64;
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
		t.horizontalCenter = 0.5;
		t.text = "进度:";
		t.y = 4;
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
	return DDZReplaySkin;
})(eui.Skin);