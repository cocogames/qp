
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
                generateEUI.skins = {};generateEUI.paths['resource/pages/CDD/component/CDDBtnSkin.exml'] = window.CDDBtnSkin = (function (_super) {
	__extends(CDDBtnSkin, _super);
	function CDDBtnSkin() {
		_super.call(this);
		this.skinParts = ["bg","tf"];
		
		this.height = 66;
		this.width = 166;
		this.elementsContent = [this.bg_i(),this.tf_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelSize"],[0],this.tf,"size");
		eui.Binding.$bindProperties(this, ["hostComponent.a_label"],[0],this.tf,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelColor"],[0],this.tf,"textColor");
	}
	var _proto = CDDBtnSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,126,28);
		t.source = "CDD_btn_tb2_png";
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
	return CDDBtnSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/alert/CDDAlertSkin.exml'] = window.CDDAlertSkin = (function (_super) {
	__extends(CDDAlertSkin, _super);
	function CDDAlertSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","tf","okBtn","cancelBtn","btnGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = CDDAlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(1,1,9,9);
		t.source = "CDD_black_mask_png";
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
		t.source = "CDD_bg_history_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "CDD_club_bg_prompt_png";
		t.x = 277;
		t.y = 8;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.scale9Grid = new egret.Rectangle(41,76,673,106);
		t.source = "CDD_btn_guanbi_png";
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
		var t = new CDD.XYButton();
		this.okBtn = t;
		t.a_label = "确认";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.skinName = "CDDBtnSkin";
		t.x = 248;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new CDD.XYButton();
		this.cancelBtn = t;
		t.a_label = "取消";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 30;
		t.skinName = "CDDBtnSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CDDAlertSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDBaseCard1Skin.exml'] = window.CDDBaseCard1Skin = (function (_super) {
	__extends(CDDBaseCard1Skin, _super);
	function CDDBaseCard1Skin() {
		_super.call(this);
		this.skinParts = ["image_bg","image_white","image_num","image_smallType","image_bigType","image_highType","image_highKing","image6","image10","grp"];
		
		this.height = 228;
		this.width = 166;
		this.elementsContent = [this.image_bg_i(),this.grp_i()];
	}
	var _proto = CDDBaseCard1Skin.prototype;

	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.source = "CDD_icon_pai_png";
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
		t.source = "CDD_poker_zmbj_png";
		t.x = 0;
		t.y = 5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 7;
		t.y = 18;
		t.elementsContent = [this.image_num_i(),this.image_smallType_i()];
		return t;
	};
	_proto.image_num_i = function () {
		var t = new eui.Image();
		this.image_num = t;
		t.horizontalCenter = 0;
		t.source = "CDD_poker_102_png";
		t.y = 0;
		return t;
	};
	_proto.image_smallType_i = function () {
		var t = new eui.Image();
		this.image_smallType = t;
		t.horizontalCenter = 0;
		t.source = "CDD_poker_mht_png";
		t.y = 61;
		return t;
	};
	_proto.image_bigType_i = function () {
		var t = new eui.Image();
		this.image_bigType = t;
		t.bottom = 54;
		t.right = 22;
		t.source = "CDD_color_spade_png";
		return t;
	};
	_proto.image_highType_i = function () {
		var t = new eui.Image();
		this.image_highType = t;
		t.horizontalCenter = 0;
		t.source = "CDD_poker_1214_bk_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_highKing_i = function () {
		var t = new eui.Image();
		this.image_highKing = t;
		t.horizontalCenter = 0;
		t.source = "CDD_poker_141_bk_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.source = "CDD_biaoqian_png";
		t.x = 96;
		t.y = 0;
		return t;
	};
	_proto.image10_i = function () {
		var t = new eui.Image();
		this.image10 = t;
		t.source = "CDD_mengban_card_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	return CDDBaseCard1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDHandCards1Skin.exml'] = window.CDDHandCards1Skin = (function (_super) {
	__extends(CDDHandCards1Skin, _super);
	function CDDHandCards1Skin() {
		_super.call(this);
		this.skinParts = ["hand1","hand2","hand3","hand4","hand5","hand6","hand7","hand8","hand9","hand10","hand11","hand12","hand13"];
		
		this.elementsContent = [this.hand1_i(),this.hand2_i(),this.hand3_i(),this.hand4_i(),this.hand5_i(),this.hand6_i(),this.hand7_i(),this.hand8_i(),this.hand9_i(),this.hand10_i(),this.hand11_i(),this.hand12_i(),this.hand13_i(),this._Image1_i()];
	}
	var _proto = CDDHandCards1Skin.prototype;

	_proto.hand1_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 81;
		t.y = 0;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 243;
		t.y = 0;
		return t;
	};
	_proto.hand5_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 324;
		t.y = 0;
		return t;
	};
	_proto.hand6_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand6 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 405;
		t.y = 0;
		return t;
	};
	_proto.hand7_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand7 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 486;
		t.y = 0;
		return t;
	};
	_proto.hand8_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand8 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 567;
		t.y = 0;
		return t;
	};
	_proto.hand9_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand9 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto.hand10_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand10 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 729;
		t.y = 0;
		return t;
	};
	_proto.hand11_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand11 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 810;
		t.y = 0;
		return t;
	};
	_proto.hand12_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand12 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 891;
		t.y = 0;
		return t;
	};
	_proto.hand13_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand13 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 972;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "CDD_alpha_mask_png";
		t.touchEnabled = false;
		t.width = 20;
		t.x = 5;
		t.y = 160;
		return t;
	};
	return CDDHandCards1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDNoticeInfoSkin.exml'] = window.CDDNoticeInfoSkin = (function (_super) {
	__extends(CDDNoticeInfoSkin, _super);
	function CDDNoticeInfoSkin() {
		_super.call(this);
		this.skinParts = ["image_clock_bg","countTf","countGrp"];
		
		this.elementsContent = [this.countGrp_i()];
	}
	var _proto = CDDNoticeInfoSkin.prototype;

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
		t.source = "CDD_bg_clock_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.countTf_i = function () {
		var t = new eui.BitmapLabel();
		this.countTf = t;
		t.font = "CDD_game_timenum_fnt";
		t.horizontalCenter = 0;
		t.text = "0";
		t.y = 45;
		return t;
	};
	return CDDNoticeInfoSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDDealCardSkin.exml'] = window.CDDDealCardSkin = (function (_super) {
	__extends(CDDDealCardSkin, _super);
	function CDDDealCardSkin() {
		_super.call(this);
		this.skinParts = ["cancelBg","btnCancel","passBg","btnPass","dealCardBg","btnDealCard","notice"];
		
		this.height = 80;
		this.width = 724;
		this.elementsContent = [this.btnCancel_i(),this.btnPass_i(),this.btnDealCard_i(),this.notice_i()];
	}
	var _proto = CDDDealCardSkin.prototype;

	_proto.btnCancel_i = function () {
		var t = new eui.Group();
		this.btnCancel = t;
		t.anchorOffsetX = 85.5;
		t.anchorOffsetY = 33;
		t.x = 205;
		t.y = 42;
		t.elementsContent = [this.cancelBg_i()];
		return t;
	};
	_proto.cancelBg_i = function () {
		var t = new eui.Image();
		this.cancelBg = t;
		t.source = "CDD_quxiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnPass_i = function () {
		var t = new eui.Group();
		this.btnPass = t;
		t.anchorOffsetX = 85.5;
		t.anchorOffsetY = 33;
		t.x = 422;
		t.y = 42;
		t.elementsContent = [this.passBg_i()];
		return t;
	};
	_proto.passBg_i = function () {
		var t = new eui.Image();
		this.passBg = t;
		t.source = "CDD_buyao_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnDealCard_i = function () {
		var t = new eui.Group();
		this.btnDealCard = t;
		t.anchorOffsetX = 85.5;
		t.anchorOffsetY = 33;
		t.x = 638.01;
		t.y = 42;
		t.elementsContent = [this.dealCardBg_i()];
		return t;
	};
	_proto.dealCardBg_i = function () {
		var t = new eui.Image();
		this.dealCardBg = t;
		t.source = "CDD_chupai_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.notice_i = function () {
		var t = new CDD.CDDNoticeInfo();
		this.notice = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "CDDNoticeInfoSkin";
		t.x = 0;
		t.y = -12;
		return t;
	};
	return CDDDealCardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CCDOpBtnSkin.exml'] = window.CCDOpBtnSkin = (function (_super) {
	__extends(CCDOpBtnSkin, _super);
	var CCDOpBtnSkin$Skin1 = 	(function (_super) {
		__extends(CCDOpBtnSkin$Skin1, _super);
		function CCDOpBtnSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","CDD_btn_tonghuashun2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_btn_tonghuashun3_png")
					])
			];
		}
		var _proto = CCDOpBtnSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_btn_tonghuashun1_png";
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
		return CCDOpBtnSkin$Skin1;
	})(eui.Skin);

	var CCDOpBtnSkin$Skin2 = 	(function (_super) {
		__extends(CCDOpBtnSkin$Skin2, _super);
		function CCDOpBtnSkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","CDD_btn_tiezhi2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_btn_tiezhi3_png")
					])
			];
		}
		var _proto = CCDOpBtnSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_btn_tiezhi1_png";
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
		return CCDOpBtnSkin$Skin2;
	})(eui.Skin);

	var CCDOpBtnSkin$Skin3 = 	(function (_super) {
		__extends(CCDOpBtnSkin$Skin3, _super);
		function CCDOpBtnSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","CDD_btn_hulu2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_btn_hulu3_png")
					])
			];
		}
		var _proto = CCDOpBtnSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_btn_hulu1_png";
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
		return CCDOpBtnSkin$Skin3;
	})(eui.Skin);

	var CCDOpBtnSkin$Skin4 = 	(function (_super) {
		__extends(CCDOpBtnSkin$Skin4, _super);
		function CCDOpBtnSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","CDD_btn_tonghua2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_btn_tonghua3_png")
					])
			];
		}
		var _proto = CCDOpBtnSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_btn_tonghua1_png";
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
		return CCDOpBtnSkin$Skin4;
	})(eui.Skin);

	var CCDOpBtnSkin$Skin5 = 	(function (_super) {
		__extends(CCDOpBtnSkin$Skin5, _super);
		function CCDOpBtnSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","CDD_btn_shunzi2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_btn_shunzi3_png")
					])
			];
		}
		var _proto = CCDOpBtnSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_btn_shunzi1_png";
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
		return CCDOpBtnSkin$Skin5;
	})(eui.Skin);

	var CCDOpBtnSkin$Skin6 = 	(function (_super) {
		__extends(CCDOpBtnSkin$Skin6, _super);
		function CCDOpBtnSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","CDD_btn_santiao2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_btn_santiao3_png")
					])
			];
		}
		var _proto = CCDOpBtnSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_btn_santiao1_png";
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
		return CCDOpBtnSkin$Skin6;
	})(eui.Skin);

	var CCDOpBtnSkin$Skin7 = 	(function (_super) {
		__extends(CCDOpBtnSkin$Skin7, _super);
		function CCDOpBtnSkin$Skin7() {
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
						new eui.SetProperty("_Image1","source","CDD_btn_duizi2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_btn_duizi3_png")
					])
			];
		}
		var _proto = CCDOpBtnSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_btn_duizi1_png";
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
		return CCDOpBtnSkin$Skin7;
	})(eui.Skin);

	function CCDOpBtnSkin() {
		_super.call(this);
		this.skinParts = ["btn7","btn6","btn5","btn4","btn3","btn2","btn1"];
		
		this.height = 76;
		this.elementsContent = [this.btn7_i(),this.btn6_i(),this.btn5_i(),this.btn4_i(),this.btn3_i(),this.btn2_i(),this.btn1_i()];
	}
	var _proto = CCDOpBtnSkin.prototype;

	_proto.btn7_i = function () {
		var t = new eui.Button();
		this.btn7 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = CCDOpBtnSkin$Skin1;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Button();
		this.btn6 = t;
		t.label = "";
		t.x = 158;
		t.y = 0;
		t.skinName = CCDOpBtnSkin$Skin2;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Button();
		this.btn5 = t;
		t.label = "";
		t.x = 317;
		t.y = 0;
		t.skinName = CCDOpBtnSkin$Skin3;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Button();
		this.btn4 = t;
		t.label = "";
		t.x = 474;
		t.y = 0;
		t.skinName = CCDOpBtnSkin$Skin4;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Button();
		this.btn3 = t;
		t.label = "";
		t.x = 634;
		t.y = 0;
		t.skinName = CCDOpBtnSkin$Skin5;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Button();
		this.btn2 = t;
		t.label = "";
		t.x = 793;
		t.y = 0;
		t.skinName = CCDOpBtnSkin$Skin6;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Button();
		this.btn1 = t;
		t.label = "";
		t.x = 953.42;
		t.y = 0;
		t.skinName = CCDOpBtnSkin$Skin7;
		return t;
	};
	return CCDOpBtnSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDResultHandsSkin.exml'] = window.CDDResultHandsSkin = (function (_super) {
	__extends(CDDResultHandsSkin, _super);
	function CDDResultHandsSkin() {
		_super.call(this);
		this.skinParts = ["hand1","hand2","hand3","hand4","hand5","hand6","hand7","hand8","hand9","hand10","hand11","hand12","hand13"];
		
		this.elementsContent = [this.hand1_i(),this.hand2_i(),this.hand3_i(),this.hand4_i(),this.hand5_i(),this.hand6_i(),this.hand7_i(),this.hand8_i(),this.hand9_i(),this.hand10_i(),this.hand11_i(),this.hand12_i(),this.hand13_i()];
	}
	var _proto = CDDResultHandsSkin.prototype;

	_proto.hand1_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand1 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hand2_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand2 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 34.00333333333334;
		t.y = 0;
		return t;
	};
	_proto.hand3_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand3 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 67.67666666666668;
		t.y = 0;
		return t;
	};
	_proto.hand4_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand4 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 100.68000000000004;
		t.y = 0;
		return t;
	};
	_proto.hand5_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand5 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 134.33333333333337;
		t.y = 0;
		return t;
	};
	_proto.hand6_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand6 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 168.34666666666672;
		t.y = 0;
		return t;
	};
	_proto.hand7_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand7 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 202.01000000000008;
		t.y = 0;
		return t;
	};
	_proto.hand8_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand8 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 235.6733333333334;
		t.y = 0;
		return t;
	};
	_proto.hand9_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand9 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 269.67666666666673;
		t.y = 0;
		return t;
	};
	_proto.hand10_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand10 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 303.06000000000006;
		t.y = 0;
		return t;
	};
	_proto.hand11_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand11 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 337.0533333333334;
		t.y = 0;
		return t;
	};
	_proto.hand12_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand12 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 370.48666666666674;
		t.y = 0;
		return t;
	};
	_proto.hand13_i = function () {
		var t = new CDD.CDDLargeCard();
		this.hand13 = t;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 403.99;
		t.y = 0;
		return t;
	};
	return CDDResultHandsSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDArrow0Skin.exml'] = window.CDDArrow0Skin = (function (_super) {
	__extends(CDDArrow0Skin, _super);
	function CDDArrow0Skin() {
		_super.call(this);
		this.skinParts = ["imageUi"];
		
		this.width = 110;
		this.elementsContent = [this.imageUi_i()];
	}
	var _proto = CDDArrow0Skin.prototype;

	_proto.imageUi_i = function () {
		var t = new eui.Image();
		this.imageUi = t;
		t.source = "CDD_game_arrow_0_png";
		t.x = 30;
		t.y = 0;
		return t;
	};
	return CDDArrow0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDArrow1Skin.exml'] = window.CDDArrow1Skin = (function (_super) {
	__extends(CDDArrow1Skin, _super);
	function CDDArrow1Skin() {
		_super.call(this);
		this.skinParts = ["imageUi"];
		
		this.height = 110;
		this.elementsContent = [this.imageUi_i()];
	}
	var _proto = CDDArrow1Skin.prototype;

	_proto.imageUi_i = function () {
		var t = new eui.Image();
		this.imageUi = t;
		t.source = "CDD_game_arrow_1_png";
		t.y = 0;
		return t;
	};
	return CDDArrow1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDArrow2Skin.exml'] = window.CDDArrow2Skin = (function (_super) {
	__extends(CDDArrow2Skin, _super);
	function CDDArrow2Skin() {
		_super.call(this);
		this.skinParts = ["imageUi"];
		
		this.width = 110;
		this.elementsContent = [this.imageUi_i()];
	}
	var _proto = CDDArrow2Skin.prototype;

	_proto.imageUi_i = function () {
		var t = new eui.Image();
		this.imageUi = t;
		t.source = "CDD_game_arrow_2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CDDArrow2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDArrow3Skin.exml'] = window.CDDArrow3Skin = (function (_super) {
	__extends(CDDArrow3Skin, _super);
	function CDDArrow3Skin() {
		_super.call(this);
		this.skinParts = ["imageUi"];
		
		this.height = 110;
		this.elementsContent = [this.imageUi_i()];
	}
	var _proto = CDDArrow3Skin.prototype;

	_proto.imageUi_i = function () {
		var t = new eui.Image();
		this.imageUi = t;
		t.source = "CDD_game_arrow_3_png";
		t.x = 0;
		t.y = 30;
		return t;
	};
	return CDDArrow3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDPassSkin.exml'] = window.CDDPassSkin = (function (_super) {
	__extends(CDDPassSkin, _super);
	function CDDPassSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = CDDPassSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "CDD_yaobuqi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CDDPassSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDHeadGroupSkin.exml'] = window.CDDHeadGroupSkin = (function (_super) {
	__extends(CDDHeadGroupSkin, _super);
	function CDDHeadGroupSkin() {
		_super.call(this);
		this.skinParts = ["image_head","nameTf","moneyTf","image_robot","infoGrp","image_card","lastCount","countGrp","pass","notice"];
		
		this.height = 134;
		this.width = 342;
		this.elementsContent = [this.infoGrp_i(),this.countGrp_i(),this.pass_i(),this.notice_i()];
	}
	var _proto = CDDHeadGroupSkin.prototype;

	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.height = 131;
		t.width = 98;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.image_head_i(),this.nameTf_i(),this.moneyTf_i(),this.image_robot_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "CDD_touxiankuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.height = 75;
		t.horizontalCenter = 0;
		t.source = "CDD_head_png";
		t.verticalCenter = 0;
		t.width = 75;
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
		t.text = "3424242423424242";
		t.y = 105;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xe2b13b;
		t.verticalAlign = "middle";
		t.y = 5;
		return t;
	};
	_proto.image_robot_i = function () {
		var t = new eui.Image();
		this.image_robot = t;
		t.source = "CDD_xiaojiqiren_png";
		t.x = 2.33;
		t.y = 67.01;
		return t;
	};
	_proto.countGrp_i = function () {
		var t = new eui.Group();
		this.countGrp = t;
		t.width = 102;
		t.x = 103;
		t.y = 0;
		t.elementsContent = [this.image_card_i(),this.lastCount_i()];
		return t;
	};
	_proto.image_card_i = function () {
		var t = new eui.Image();
		this.image_card = t;
		t.right = 5;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "CDD_icon_pai_png";
		t.y = 0;
		return t;
	};
	_proto.lastCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lastCount = t;
		t.font = "CDD_card_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.pass_i = function () {
		var t = new CDD.CDDPass();
		this.pass = t;
		t.left = 209;
		t.skinName = "CDDPassSkin";
		t.verticalCenter = 42.5;
		return t;
	};
	_proto.notice_i = function () {
		var t = new CDD.CDDNoticeInfo();
		this.notice = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "CDDNoticeInfoSkin";
		t.x = 219;
		t.y = -1;
		return t;
	};
	return CDDHeadGroupSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDHeadGroupSkin1.exml'] = window.CDDHeadGroupSkin1 = (function (_super) {
	__extends(CDDHeadGroupSkin1, _super);
	function CDDHeadGroupSkin1() {
		_super.call(this);
		this.skinParts = ["image_card","lastCount","countGrp","image_head","nameTf","moneyTf","image_robot","infoGrp","notice","pass"];
		
		this.height = 136;
		this.width = 340;
		this.elementsContent = [this.countGrp_i(),this.infoGrp_i(),this.notice_i(),this.pass_i()];
	}
	var _proto = CDDHeadGroupSkin1.prototype;

	_proto.countGrp_i = function () {
		var t = new eui.Group();
		this.countGrp = t;
		t.x = 135;
		t.y = 2;
		t.elementsContent = [this.image_card_i(),this.lastCount_i()];
		return t;
	};
	_proto.image_card_i = function () {
		var t = new eui.Image();
		this.image_card = t;
		t.left = 0;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "CDD_icon_pai_png";
		t.y = 0;
		return t;
	};
	_proto.lastCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lastCount = t;
		t.font = "CDD_card_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "0";
		t.verticalCenter = 0;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.height = 131;
		t.width = 98;
		t.x = 242;
		t.y = 4;
		t.elementsContent = [this._Image1_i(),this.image_head_i(),this.nameTf_i(),this.moneyTf_i(),this.image_robot_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "CDD_touxiankuang1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.height = 70;
		t.source = "CDD_head_png";
		t.width = 70;
		t.x = 15;
		t.y = 30;
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
		t.text = "2453553535353";
		t.y = 108;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "4324";
		t.textAlign = "left";
		t.textColor = 0xe2b13b;
		t.verticalAlign = "middle";
		t.y = 7;
		return t;
	};
	_proto.image_robot_i = function () {
		var t = new eui.Image();
		this.image_robot = t;
		t.source = "CDD_xiaojiqiren_png";
		t.x = 0.33;
		t.y = 66.01;
		return t;
	};
	_proto.notice_i = function () {
		var t = new CDD.CDDNoticeInfo();
		this.notice = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "CDDNoticeInfoSkin";
		t.x = 7;
		t.y = -5;
		return t;
	};
	_proto.pass_i = function () {
		var t = new CDD.CDDPass();
		this.pass = t;
		t.skinName = "CDDPassSkin";
		t.x = 0;
		t.y = 82;
		return t;
	};
	return CDDHeadGroupSkin1;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDMyInfoSkin.exml'] = window.CDDMyInfoSkin = (function (_super) {
	__extends(CDDMyInfoSkin, _super);
	function CDDMyInfoSkin() {
		_super.call(this);
		this.skinParts = ["image_head","myNameTf","topHeadGrp","myMoneyTf"];
		
		this.height = 170;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.topHeadGrp_i(),this._Group1_i()];
	}
	var _proto = CDDMyInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(167,6,1002,43);
		t.source = "CDD_di_png";
		return t;
	};
	_proto.topHeadGrp_i = function () {
		var t = new eui.Group();
		this.topHeadGrp = t;
		t.height = 141;
		t.left = 24;
		t.top = 5;
		t.width = 130;
		t.elementsContent = [this._Image2_i(),this.image_head_i(),this.myNameTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "CDD_touxiangkuangxiao_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "CDD_head_png";
		t.width = 100;
		t.y = 8;
		return t;
	};
	_proto.myNameTf_i = function () {
		var t = new eui.Label();
		this.myNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.97;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "34343242423242";
		t.textColor = 0xffffff;
		t.y = 111.99;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 180;
		t.top = 120;
		t.width = 279;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.myMoneyTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "CDD_jinbidi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "CDD_qian_png";
		t.x = 13.01;
		t.y = 7.67;
		return t;
	};
	_proto.myMoneyTf_i = function () {
		var t = new eui.Label();
		this.myMoneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.59;
		t.size = 25;
		t.text = "13465654632424242";
		t.textAlign = "left";
		t.textColor = 0xe2b13b;
		t.verticalAlign = "middle";
		t.x = 41.67;
		t.y = 2.41;
		return t;
	};
	return CDDMyInfoSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDTrusteeshipSkin.exml'] = window.CDDTrusteeshipSkin = (function (_super) {
	__extends(CDDTrusteeshipSkin, _super);
	function CDDTrusteeshipSkin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","btnTrusteeShip"];
		
		this.elementsContent = [this._Rect1_i(),this.btnTrusteeShip_i()];
	}
	var _proto = CDDTrusteeshipSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.height = 240;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 1334;
		return t;
	};
	_proto.btnTrusteeShip_i = function () {
		var t = new eui.Group();
		this.btnTrusteeShip = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.x = 545;
		t.elementsContent = [this._Image1_i(),this.tf_0_i18n_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "CDD_quxiaotuoguananniu_png";
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
		t.size = 30;
		t.text = "取消托管";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 190;
		t.x = 7;
		t.y = 4;
		return t;
	};
	return CDDTrusteeshipSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDD_PlayerReadySkin.exml'] = window.CDD_PlayerReadySkin = (function (_super) {
	__extends(CDD_PlayerReadySkin, _super);
	function CDD_PlayerReadySkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = CDD_PlayerReadySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "CDD_game_ok_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CDD_PlayerReadySkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDIntroductionSkin.exml'] = window.CDDIntroductionSkin = (function (_super) {
	__extends(CDDIntroductionSkin, _super);
	var CDDIntroductionSkin$Skin8 = 	(function (_super) {
		__extends(CDDIntroductionSkin$Skin8, _super);
		var CDDIntroductionSkin$Skin8$Skin9 = 		(function (_super) {
			__extends(CDDIntroductionSkin$Skin8$Skin9, _super);
			function CDDIntroductionSkin$Skin8$Skin9() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = CDDIntroductionSkin$Skin8$Skin9.prototype;

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
			return CDDIntroductionSkin$Skin8$Skin9;
		})(eui.Skin);

		function CDDIntroductionSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = CDDIntroductionSkin$Skin8.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 0;
			t.visible = true;
			t.skinName = CDDIntroductionSkin$Skin8$Skin9;
			return t;
		};
		return CDDIntroductionSkin$Skin8;
	})(eui.Skin);

	function CDDIntroductionSkin() {
		_super.call(this);
		this.skinParts = ["imageBg","image_rule","tableGroup","scl","grp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.imageBg_i(),this.grp_i()];
	}
	var _proto = CDDIntroductionSkin.prototype;

	_proto.imageBg_i = function () {
		var t = new eui.Image();
		this.imageBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "CDD_alpha_mask_png";
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.top = 0;
		t.x = 662;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.scl_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 750;
		t.scale9Grid = new egret.Rectangle(83,12,504,62);
		t.source = "CDD_rulebg2_png";
		t.top = 0;
		t.width = 673;
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.top = 22;
		t.x = 262;
		t.elementsContent = [this.image_rule_i()];
		return t;
	};
	_proto.image_rule_i = function () {
		var t = new eui.Image();
		this.image_rule = t;
		t.source = "CDD_gamename_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 4;
		t.top = 86;
		t.width = 673;
		t.x = 0;
		t.skinName = CDDIntroductionSkin$Skin8;
		t.viewport = this.tableGroup_i();
		return t;
	};
	_proto.tableGroup_i = function () {
		var t = new eui.Group();
		this.tableGroup = t;
		return t;
	};
	return CDDIntroductionSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDResultHeadSkin.exml'] = window.CDDResultHeadSkin = (function (_super) {
	__extends(CDDResultHeadSkin, _super);
	function CDDResultHeadSkin() {
		_super.call(this);
		this.skinParts = ["image_head","moneyTf","nameTf"];
		
		this.elementsContent = [this._Image1_i(),this.image_head_i(),this.moneyTf_i(),this.nameTf_i()];
	}
	var _proto = CDDResultHeadSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "CDD_qian_png";
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.image_head_i = function () {
		var t = new eui.Image();
		this.image_head = t;
		t.height = 100;
		t.source = "CDD_head_png";
		t.width = 100;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 20;
		t.text = "324242";
		t.textAlign = "left";
		t.textColor = 0xfdff73;
		t.verticalAlign = "middle";
		t.x = 132;
		t.y = 3;
		return t;
	};
	_proto.nameTf_i = function () {
		var t = new eui.Label();
		this.nameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.size = 20;
		t.text = "13242424242";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 107;
		t.y = 35;
		return t;
	};
	return CDDResultHeadSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDGameResultSkin.exml'] = window.CDDGameResultSkin = (function (_super) {
	__extends(CDDGameResultSkin, _super);
	function CDDGameResultSkin() {
		_super.call(this);
		this.skinParts = ["jiesuanGrp","headInfo0","resultHands0","image_win0","allPay0","rateImage0","scoreInfo0","headInfo2","resultHands2","image_win2","allPay2","rateImage2","scoreInfo2","headInfo3","resultHands3","image_win3","allPay3","rateImage3","scoreInfo3","info0","info1","info2","scoreInfo1","headInfo1","resultHands1","image_win1","allPay1","rateImage1","exitBtn","continueImage","timeTf","nextBtn","aniCon"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group6_i(),this.aniCon_i()];
	}
	var _proto = CDDGameResultSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(1,2,9,7);
		t.source = "CDD_race_black_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.jiesuanGrp_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this.exitBtn_i(),this.nextBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "CDD_bg_result_png";
		t.x = 0;
		t.y = -4.77;
		return t;
	};
	_proto.jiesuanGrp_i = function () {
		var t = new eui.Group();
		this.jiesuanGrp = t;
		t.anchorOffsetY = 0;
		t.height = 51.33;
		t.horizontalCenter = 0;
		t.width = 300;
		t.y = 1.23;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 1314;
		t.x = 12;
		t.y = 51.59;
		t.elementsContent = [this.headInfo0_i(),this.resultHands0_i(),this.image_win0_i(),this.allPay0_i(),this.rateImage0_i(),this.scoreInfo0_i()];
		return t;
	};
	_proto.headInfo0_i = function () {
		var t = new CDD.CDDResultHead();
		this.headInfo0 = t;
		t.left = 60;
		t.skinName = "CDDResultHeadSkin";
		t.verticalCenter = 6;
		return t;
	};
	_proto.resultHands0_i = function () {
		var t = new CDD.CDDResultHands();
		this.resultHands0 = t;
		t.horizontalCenter = 27;
		t.skinName = "CDDResultHandsSkin";
		t.y = 46.96;
		return t;
	};
	_proto.image_win0_i = function () {
		var t = new eui.Image();
		this.image_win0 = t;
		t.left = 372;
		t.source = "CDD_ending_win_png";
		t.verticalCenter = 5;
		return t;
	};
	_proto.allPay0_i = function () {
		var t = new eui.Image();
		this.allPay0 = t;
		t.source = "CDD_balance_w_01_png";
		t.x = 262.23;
		t.y = 111.61;
		return t;
	};
	_proto.rateImage0_i = function () {
		var t = new eui.Image();
		this.rateImage0 = t;
		t.source = "CDD_balance_w_02_png";
		t.x = 167.85;
		t.y = 113.06;
		return t;
	};
	_proto.scoreInfo0_i = function () {
		var t = new eui.Label();
		this.scoreInfo0 = t;
		t.horizontalCenter = 1;
		t.size = 22;
		t.text = "32424242";
		t.y = 109.14;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 1314;
		t.x = 12;
		t.y = 193.38;
		t.elementsContent = [this.headInfo2_i(),this.resultHands2_i(),this.image_win2_i(),this.allPay2_i(),this.rateImage2_i(),this.scoreInfo2_i()];
		return t;
	};
	_proto.headInfo2_i = function () {
		var t = new CDD.CDDResultHead();
		this.headInfo2 = t;
		t.left = 60;
		t.skinName = "CDDResultHeadSkin";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto.resultHands2_i = function () {
		var t = new CDD.CDDResultHands();
		this.resultHands2 = t;
		t.horizontalCenter = 27;
		t.skinName = "CDDResultHandsSkin";
		t.y = 28.77;
		return t;
	};
	_proto.image_win2_i = function () {
		var t = new eui.Image();
		this.image_win2 = t;
		t.left = 372;
		t.source = "CDD_ending_win_png";
		t.verticalCenter = 5;
		return t;
	};
	_proto.allPay2_i = function () {
		var t = new eui.Image();
		this.allPay2 = t;
		t.source = "CDD_balance_w_01_png";
		t.x = 262.23;
		t.y = 91.66;
		return t;
	};
	_proto.rateImage2_i = function () {
		var t = new eui.Image();
		this.rateImage2 = t;
		t.source = "CDD_balance_w_02_png";
		t.x = 167.85;
		t.y = 93.11;
		return t;
	};
	_proto.scoreInfo2_i = function () {
		var t = new eui.Label();
		this.scoreInfo2 = t;
		t.horizontalCenter = 1;
		t.size = 22;
		t.text = "32424242";
		t.y = 88.29;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 1314;
		t.x = 12;
		t.y = 320.08;
		t.elementsContent = [this.headInfo3_i(),this.resultHands3_i(),this.image_win3_i(),this.allPay3_i(),this.rateImage3_i(),this.scoreInfo3_i()];
		return t;
	};
	_proto.headInfo3_i = function () {
		var t = new CDD.CDDResultHead();
		this.headInfo3 = t;
		t.left = 60;
		t.skinName = "CDDResultHeadSkin";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto.resultHands3_i = function () {
		var t = new CDD.CDDResultHands();
		this.resultHands3 = t;
		t.horizontalCenter = 27;
		t.skinName = "CDDResultHandsSkin";
		t.y = 22.7;
		return t;
	};
	_proto.image_win3_i = function () {
		var t = new eui.Image();
		this.image_win3 = t;
		t.left = 372;
		t.source = "CDD_ending_win_png";
		t.verticalCenter = 5;
		return t;
	};
	_proto.allPay3_i = function () {
		var t = new eui.Image();
		this.allPay3 = t;
		t.source = "CDD_balance_w_01_png";
		t.x = 262.23;
		t.y = 87.67;
		return t;
	};
	_proto.rateImage3_i = function () {
		var t = new eui.Image();
		this.rateImage3 = t;
		t.source = "CDD_balance_w_02_png";
		t.x = 167.85;
		t.y = 89.12;
		return t;
	};
	_proto.scoreInfo3_i = function () {
		var t = new eui.Label();
		this.scoreInfo3 = t;
		t.horizontalCenter = 1;
		t.size = 22;
		t.text = "32424242";
		t.y = 84.88;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 423.59;
		t.y = 521.32;
		t.elementsContent = [this.info0_i(),this.info1_i(),this.info2_i(),this.scoreInfo1_i()];
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.58;
		t.size = 22;
		t.text = "2453535353";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 18;
		t.y = 7.57;
		return t;
	};
	_proto.info1_i = function () {
		var t = new eui.Label();
		this.info1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.58;
		t.size = 22;
		t.text = "5433333535";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 179.31;
		t.y = 7.57;
		return t;
	};
	_proto.info2_i = function () {
		var t = new eui.Label();
		this.info2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.58;
		t.size = 22;
		t.text = "5444444356";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 343.73;
		t.y = 8;
		return t;
	};
	_proto.scoreInfo1_i = function () {
		var t = new eui.Label();
		this.scoreInfo1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.58;
		t.size = 22;
		t.text = "254353535353";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 505.63;
		t.y = 8;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 1314;
		t.x = 12;
		t.y = 440.42;
		t.elementsContent = [this.headInfo1_i(),this.resultHands1_i(),this.image_win1_i(),this.allPay1_i(),this.rateImage1_i()];
		return t;
	};
	_proto.headInfo1_i = function () {
		var t = new CDD.CDDResultHead();
		this.headInfo1 = t;
		t.left = 60;
		t.skinName = "CDDResultHeadSkin";
		t.verticalCenter = -1.5;
		return t;
	};
	_proto.resultHands1_i = function () {
		var t = new CDD.CDDResultHands();
		this.resultHands1 = t;
		t.horizontalCenter = 27;
		t.skinName = "CDDResultHandsSkin";
		t.y = 22.74;
		return t;
	};
	_proto.image_win1_i = function () {
		var t = new eui.Image();
		this.image_win1 = t;
		t.left = 372;
		t.source = "CDD_ending_win_png";
		t.verticalCenter = -17.5;
		return t;
	};
	_proto.allPay1_i = function () {
		var t = new eui.Image();
		this.allPay1 = t;
		t.source = "CDD_balance_w_01_png";
		t.x = 262.23;
		t.y = 91.66;
		return t;
	};
	_proto.rateImage1_i = function () {
		var t = new eui.Image();
		this.rateImage1 = t;
		t.source = "CDD_balance_w_02_png";
		t.x = 167.85;
		t.y = 93.11;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Group();
		this.exitBtn = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 42.5;
		t.x = 531.16;
		t.y = 617.1;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "CDD_a1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "CDD_likai_png";
		t.x = 31;
		t.y = 23;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Group();
		this.nextBtn = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 42.5;
		t.x = 788.73;
		t.y = 618.61;
		t.elementsContent = [this._Image5_i(),this.continueImage_i(),this.timeTf_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "CDD_a2_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.continueImage_i = function () {
		var t = new eui.Image();
		this.continueImage = t;
		t.source = "CDD_jixu_png";
		t.touchEnabled = false;
		t.x = 29;
		t.y = 25;
		return t;
	};
	_proto.timeTf_i = function () {
		var t = new eui.Label();
		this.timeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.15;
		t.size = 30;
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 42.79;
		t.x = 143.4;
		t.y = 20.86;
		return t;
	};
	_proto.aniCon_i = function () {
		var t = new eui.Group();
		this.aniCon = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 1334;
		return t;
	};
	return CDDGameResultSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/CDDGameSceneSkin.exml'] = window.CDDGameSceneSkin = (function (_super) {
	__extends(CDDGameSceneSkin, _super);
	var CDDGameSceneSkin$Skin10 = 	(function (_super) {
		__extends(CDDGameSceneSkin$Skin10, _super);
		function CDDGameSceneSkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","CDD_wenhao_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CDDGameSceneSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_wenhao1_png";
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
		return CDDGameSceneSkin$Skin10;
	})(eui.Skin);

	var CDDGameSceneSkin$Skin11 = 	(function (_super) {
		__extends(CDDGameSceneSkin$Skin11, _super);
		function CDDGameSceneSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","CDD_yinliang_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CDDGameSceneSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_yinliang1_png";
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
		return CDDGameSceneSkin$Skin11;
	})(eui.Skin);

	var CDDGameSceneSkin$Skin12 = 	(function (_super) {
		__extends(CDDGameSceneSkin$Skin12, _super);
		function CDDGameSceneSkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","CDD_jinyin_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CDDGameSceneSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_jinyin1_png";
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
		return CDDGameSceneSkin$Skin12;
	})(eui.Skin);

	var CDDGameSceneSkin$Skin13 = 	(function (_super) {
		__extends(CDDGameSceneSkin$Skin13, _super);
		function CDDGameSceneSkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","CDD_tuoguan1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CDDGameSceneSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_tuoguan_png";
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
		return CDDGameSceneSkin$Skin13;
	})(eui.Skin);

	var CDDGameSceneSkin$Skin14 = 	(function (_super) {
		__extends(CDDGameSceneSkin$Skin14, _super);
		function CDDGameSceneSkin$Skin14() {
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
						new eui.SetProperty("_Image1","source","CDD_tuoguanzhong1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","CDD_tuoguan2_png")
					])
			];
		}
		var _proto = CDDGameSceneSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_tuoguanzhong_png";
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
		return CDDGameSceneSkin$Skin14;
	})(eui.Skin);

	var CDDGameSceneSkin$Skin15 = 	(function (_super) {
		__extends(CDDGameSceneSkin$Skin15, _super);
		function CDDGameSceneSkin$Skin15() {
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
						new eui.SetProperty("_Image1","source","CDD_fanhui_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CDDGameSceneSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "CDD_fanhui1_png";
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
		return CDDGameSceneSkin$Skin15;
	})(eui.Skin);

	function CDDGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["imagedesk","handCard1","grpOption","opBtn","replayHand0","replayHand2","replayHand3","image_noRule","noRuleGrp","cardContainier","discardGrp0","discardGrp1","discardGrp2","discardGrp3","arrow0","arrow1","arrow2","arrow3","pass1","headGrp0","headGrp2","headGrp1","headGrp3","trustShip","waitGrp","playerReady0","playerReady1","playerReady2","playerReady3","readyBtnGrp","chatBtn","willStartLabel","copyRoomInfoBtn","introBtn","volumeOpen","volumeClose","tuoguanZhong","tuoguan","menuGrp","backBtn","menuGrp1","chatCtx0","chatCtx1","chatCtx2","chatCtx3","roomLabel","friendGrp","replayTf","dizhuTf","replayGrp","introView","gameResult"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.imagedesk_i(),this.handCard1_i(),this.grpOption_i(),this.opBtn_i(),this.replayHand0_i(),this.replayHand2_i(),this.replayHand3_i(),this.noRuleGrp_i(),this._Group1_i(),this.discardGrp0_i(),this.discardGrp1_i(),this.discardGrp2_i(),this.discardGrp3_i(),this.arrow0_i(),this.arrow1_i(),this.arrow2_i(),this.arrow3_i(),this.pass1_i(),this.headGrp0_i(),this.headGrp2_i(),this.headGrp1_i(),this.headGrp3_i(),this.trustShip_i(),this.waitGrp_i(),this.playerReady0_i(),this.playerReady1_i(),this.playerReady2_i(),this.playerReady3_i(),this.readyBtnGrp_i(),this.chatBtn_i(),this._Group2_i(),this.menuGrp_i(),this.menuGrp1_i(),this.chatCtx0_i(),this.chatCtx1_i(),this.chatCtx2_i(),this.chatCtx3_i(),this.friendGrp_i(),this.replayGrp_i(),this.introView_i(),this.gameResult_i()];
	}
	var _proto = CDDGameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "CDD_zhuozi2_png";
		t.top = 0;
		return t;
	};
	_proto.imagedesk_i = function () {
		var t = new eui.Image();
		this.imagedesk = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "CDD_alpha_mask_png";
		t.top = 0;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.handCard1_i = function () {
		var t = new CDD.CDDHandCards();
		this.handCard1 = t;
		t.bottom = 106;
		t.horizontalCenter = 0;
		t.skinName = "CDDHandCards1Skin";
		t.x = 115;
		t.y = 461;
		return t;
	};
	_proto.grpOption_i = function () {
		var t = new CDD.CDDDealCard();
		this.grpOption = t;
		t.bottom = 296;
		t.horizontalCenter = -61;
		t.skinName = "CDDDealCardSkin";
		t.x = 244;
		t.y = 374;
		return t;
	};
	_proto.opBtn_i = function () {
		var t = new CDD.CCDOpBtn();
		this.opBtn = t;
		t.bottom = 49;
		t.horizontalCenter = 64;
		t.skinName = "CCDOpBtnSkin";
		t.x = 172;
		t.y = 625;
		return t;
	};
	_proto.replayHand0_i = function () {
		var t = new CDD.CDDResultHands();
		this.replayHand0 = t;
		t.left = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CDDResultHandsSkin";
		t.top = 198;
		t.x = 32;
		t.y = 198;
		return t;
	};
	_proto.replayHand2_i = function () {
		var t = new CDD.CDDResultHands();
		this.replayHand2 = t;
		t.right = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CDDResultHandsSkin";
		t.top = 198;
		t.x = 884;
		t.y = 198;
		return t;
	};
	_proto.replayHand3_i = function () {
		var t = new CDD.CDDResultHands();
		this.replayHand3 = t;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CDDResultHandsSkin";
		t.top = 141;
		t.x = 449;
		t.y = 141;
		return t;
	};
	_proto.noRuleGrp_i = function () {
		var t = new eui.Group();
		this.noRuleGrp = t;
		t.bottom = 154;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 594;
		t.y = 564;
		t.elementsContent = [this.image_noRule_i()];
		return t;
	};
	_proto.image_noRule_i = function () {
		var t = new eui.Image();
		this.image_noRule = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "CDD_dizhuhat_png";
		t.x = 73;
		t.y = 16;
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
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "CDD_alpha_mask_png";
		t.x = 4;
		t.y = -2;
		return t;
	};
	_proto.discardGrp0_i = function () {
		var t = new eui.Group();
		this.discardGrp0 = t;
		t.height = 142;
		t.left = 272;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -90;
		t.width = 224;
		return t;
	};
	_proto.discardGrp1_i = function () {
		var t = new eui.Group();
		this.discardGrp1 = t;
		t.bottom = 314;
		t.height = 142;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 224;
		return t;
	};
	_proto.discardGrp2_i = function () {
		var t = new eui.Group();
		this.discardGrp2 = t;
		t.height = 142;
		t.right = 272;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = -90;
		t.width = 224;
		return t;
	};
	_proto.discardGrp3_i = function () {
		var t = new eui.Group();
		this.discardGrp3 = t;
		t.height = 142;
		t.horizontalCenter = 0;
		t.top = 141;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 224;
		return t;
	};
	_proto.arrow0_i = function () {
		var t = new CDD.CDDArrow();
		this.arrow0 = t;
		t.horizontalCenter = -229;
		t.skinName = "CDDArrow0Skin";
		t.verticalCenter = -90;
		return t;
	};
	_proto.arrow1_i = function () {
		var t = new CDD.CDDArrow();
		this.arrow1 = t;
		t.horizontalCenter = 0;
		t.skinName = "CDDArrow1Skin";
		t.verticalCenter = -17;
		return t;
	};
	_proto.arrow2_i = function () {
		var t = new CDD.CDDArrow();
		this.arrow2 = t;
		t.horizontalCenter = 257;
		t.skinName = "CDDArrow2Skin";
		t.verticalCenter = -90;
		return t;
	};
	_proto.arrow3_i = function () {
		var t = new CDD.CDDArrow();
		this.arrow3 = t;
		t.horizontalCenter = 0;
		t.skinName = "CDDArrow3Skin";
		t.verticalCenter = -179;
		return t;
	};
	_proto.pass1_i = function () {
		var t = new CDD.CDDPass();
		this.pass1 = t;
		t.bottom = 370;
		t.horizontalCenter = 0.5;
		t.skinName = "CDDPassSkin";
		return t;
	};
	_proto.headGrp0_i = function () {
		var t = new CDD.CDDHeadGroup();
		this.headGrp0 = t;
		t.left = 26;
		t.skinName = "CDDHeadGroupSkin";
		t.verticalCenter = -61;
		return t;
	};
	_proto.headGrp2_i = function () {
		var t = new CDD.CDDHeadGroup();
		this.headGrp2 = t;
		t.right = 26;
		t.skinName = "CDDHeadGroupSkin1";
		t.verticalCenter = -61;
		return t;
	};
	_proto.headGrp1_i = function () {
		var t = new CDD.CDDMyInfo();
		this.headGrp1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "CDDMyInfoSkin";
		return t;
	};
	_proto.headGrp3_i = function () {
		var t = new CDD.CDDHeadGroup();
		this.headGrp3 = t;
		t.horizontalCenter = 0;
		t.skinName = "CDDHeadGroupSkin1";
		t.top = 6;
		return t;
	};
	_proto.trustShip_i = function () {
		var t = new CDD.CDDTrusteeShip();
		this.trustShip = t;
		t.bottom = 59;
		t.height = 240;
		t.left = 0;
		t.right = 0;
		t.skinName = "CDDTrusteeshipSkin";
		return t;
	};
	_proto.waitGrp_i = function () {
		var t = new eui.Group();
		this.waitGrp = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "CDD_wait_others_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.playerReady0_i = function () {
		var t = new CDD.CDD_PlayerReady();
		this.playerReady0 = t;
		t.left = 200;
		t.skinName = "CDD_PlayerReadySkin";
		t.verticalCenter = -24;
		return t;
	};
	_proto.playerReady1_i = function () {
		var t = new CDD.CDD_PlayerReady();
		this.playerReady1 = t;
		t.bottom = 244;
		t.horizontalCenter = 0;
		t.skinName = "CDD_PlayerReadySkin";
		return t;
	};
	_proto.playerReady2_i = function () {
		var t = new CDD.CDD_PlayerReady();
		this.playerReady2 = t;
		t.right = 200;
		t.skinName = "CDD_PlayerReadySkin";
		t.verticalCenter = -24;
		return t;
	};
	_proto.playerReady3_i = function () {
		var t = new CDD.CDD_PlayerReady();
		this.playerReady3 = t;
		t.horizontalCenter = 0;
		t.skinName = "CDD_PlayerReadySkin";
		t.top = 186;
		return t;
	};
	_proto.readyBtnGrp_i = function () {
		var t = new eui.Group();
		this.readyBtnGrp = t;
		t.anchorOffsetX = 66.5;
		t.anchorOffsetY = 25;
		t.bottom = 240;
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 133;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "CDD_ready0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chatBtn_i = function () {
		var t = new eui.Image();
		this.chatBtn = t;
		t.anchorOffsetX = 40.91;
		t.anchorOffsetY = 37.88;
		t.bottom = 180;
		t.right = 5;
		t.source = "chat_talk_icon_png";
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
	_proto.menuGrp_i = function () {
		var t = new eui.Group();
		this.menuGrp = t;
		t.right = 10;
		t.top = 12;
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
		t.x = 84.46;
		t.y = 0;
		t.skinName = CDDGameSceneSkin$Skin10;
		return t;
	};
	_proto.volumeOpen_i = function () {
		var t = new eui.Button();
		this.volumeOpen = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170.46;
		t.y = 0;
		t.skinName = CDDGameSceneSkin$Skin11;
		return t;
	};
	_proto.volumeClose_i = function () {
		var t = new eui.Button();
		this.volumeClose = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 170.46;
		t.y = 0;
		t.skinName = CDDGameSceneSkin$Skin12;
		return t;
	};
	_proto.tuoguanZhong_i = function () {
		var t = new eui.Button();
		this.tuoguanZhong = t;
		t.label = "";
		t.x = 256.46;
		t.y = 0;
		t.skinName = CDDGameSceneSkin$Skin13;
		return t;
	};
	_proto.tuoguan_i = function () {
		var t = new eui.Button();
		this.tuoguan = t;
		t.label = "";
		t.x = 256.46;
		t.y = 0;
		t.skinName = CDDGameSceneSkin$Skin14;
		return t;
	};
	_proto.menuGrp1_i = function () {
		var t = new eui.Group();
		this.menuGrp1 = t;
		t.left = 17;
		t.top = 12;
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
		t.skinName = CDDGameSceneSkin$Skin15;
		return t;
	};
	_proto.chatCtx0_i = function () {
		var t = new eui.Group();
		this.chatCtx0 = t;
		t.height = 100;
		t.left = 166;
		t.verticalCenter = -199;
		t.width = 200;
		return t;
	};
	_proto.chatCtx1_i = function () {
		var t = new eui.Group();
		this.chatCtx1 = t;
		t.bottom = 197;
		t.height = 100;
		t.left = 166;
		t.width = 200;
		return t;
	};
	_proto.chatCtx2_i = function () {
		var t = new eui.Group();
		this.chatCtx2 = t;
		t.height = 100;
		t.right = 170;
		t.verticalCenter = -199;
		t.width = 200;
		return t;
	};
	_proto.chatCtx3_i = function () {
		var t = new eui.Group();
		this.chatCtx3 = t;
		t.height = 100;
		t.horizontalCenter = 303;
		t.top = 11;
		t.width = 200;
		return t;
	};
	_proto.friendGrp_i = function () {
		var t = new eui.Group();
		this.friendGrp = t;
		t.left = 100;
		t.top = 71;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.elementsContent = [this._Image5_i(),this.roomLabel_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "CDD_dizhu_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomLabel_i = function () {
		var t = new eui.Label();
		this.roomLabel = t;
		t.size = 22;
		t.text = "";
		t.textColor = 0xBFB5B5;
		t.touchEnabled = false;
		t.x = 3;
		t.y = 14;
		return t;
	};
	_proto.replayGrp_i = function () {
		var t = new eui.Group();
		this.replayGrp = t;
		t.left = 106;
		t.top = 20;
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
	_proto.introView_i = function () {
		var t = new CDD.CDDInstroduction();
		this.introView = t;
		t.bottom = 0;
		t.skinName = "CDDIntroductionSkin";
		t.top = 0;
		t.visible = false;
		t.x = 0;
		return t;
	};
	_proto.gameResult_i = function () {
		var t = new CDD.CDDGameResult();
		this.gameResult = t;
		t.height = 750;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CDDGameResultSkin";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1334;
		t.x = -140;
		t.y = -331;
		return t;
	};
	return CDDGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDBaseCard0Skin.exml'] = window.CDDBaseCard0Skin = (function (_super) {
	__extends(CDDBaseCard0Skin, _super);
	function CDDBaseCard0Skin() {
		_super.call(this);
		this.skinParts = ["image_bg","grp"];
		
		this.height = 140;
		this.width = 101;
		this.elementsContent = [this.grp_i()];
	}
	var _proto = CDDBaseCard0Skin.prototype;

	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 67;
		t.scaleX = 1;
		t.skewY = -75;
		t.x = 48;
		t.y = 67;
		t.elementsContent = [this.image_bg_i()];
		return t;
	};
	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 0;
		t.skewY = 25;
		t.source = "CDD_icon_pai_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CDDBaseCard0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDBaseCard2Skin.exml'] = window.CDDBaseCard2Skin = (function (_super) {
	__extends(CDDBaseCard2Skin, _super);
	function CDDBaseCard2Skin() {
		_super.call(this);
		this.skinParts = ["image_bg","grp"];
		
		this.height = 140;
		this.width = 101;
		this.elementsContent = [this.grp_i()];
	}
	var _proto = CDDBaseCard2Skin.prototype;

	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 67;
		t.scaleX = 1;
		t.skewY = 75;
		t.x = 48;
		t.y = 67;
		t.elementsContent = [this.image_bg_i()];
		return t;
	};
	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.skewX = 0;
		t.skewY = -25;
		t.source = "CDD_icon_pai_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CDDBaseCard2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDBaseCard3Skin.exml'] = window.CDDBaseCard3Skin = (function (_super) {
	__extends(CDDBaseCard3Skin, _super);
	function CDDBaseCard3Skin() {
		_super.call(this);
		this.skinParts = ["image_bg","grp"];
		
		this.height = 111;
		this.width = 80;
		this.elementsContent = [this.grp_i()];
	}
	var _proto = CDDBaseCard3Skin.prototype;

	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image_bg_i()];
		return t;
	};
	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "CDD_icon_pai_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CDDBaseCard3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDCardTypeRenderSkin.exml'] = window.CDDCardTypeRenderSkin = (function (_super) {
	__extends(CDDCardTypeRenderSkin, _super);
	function CDDCardTypeRenderSkin() {
		_super.call(this);
		this.skinParts = ["image"];
		
		this.elementsContent = [this.image_i()];
	}
	var _proto = CDDCardTypeRenderSkin.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "CDD_pic_w7_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return CDDCardTypeRenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDDiscardSkin.exml'] = window.CDDDiscardSkin = (function (_super) {
	__extends(CDDDiscardSkin, _super);
	function CDDDiscardSkin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","card4","cardType"];
		
		this.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i(),this.cardType_i()];
	}
	var _proto = CDDDiscardSkin.prototype;

	_proto.card0_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card0 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.rotation = -20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 59;
		t.y = 72;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card1 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.rotation = -10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 82;
		t.y = 64;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card2 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 106;
		t.y = 61;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card3 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.rotation = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 135;
		t.y = 65;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card4 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.rotation = 20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.x = 158;
		t.y = 75;
		return t;
	};
	_proto.cardType_i = function () {
		var t = new CDD.CDDCardTypeRender();
		this.cardType = t;
		t.anchorOffsetX = 82.5;
		t.anchorOffsetY = 33;
		t.horizontalCenter = 0;
		t.skinName = "CDDCardTypeRenderSkin";
		t.verticalCenter = 0;
		return t;
	};
	return CDDDiscardSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDHandCards0Skin.exml'] = window.CDDHandCards0Skin = (function (_super) {
	__extends(CDDHandCards0Skin, _super);
	function CDDHandCards0Skin() {
		_super.call(this);
		this.skinParts = ["card13","card12","card11","card10","card9","card8","card7","card6","card5","card4","card3","card2","card1"];
		
		this.height = 466;
		this.width = 196;
		this.elementsContent = [this.card13_i(),this.card12_i(),this.card11_i(),this.card10_i(),this.card9_i(),this.card8_i(),this.card7_i(),this.card6_i(),this.card5_i(),this.card4_i(),this.card3_i(),this.card2_i(),this.card1_i()];
	}
	var _proto = CDDHandCards0Skin.prototype;

	_proto.card13_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card13 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = -35;
		t.y = 328;
		return t;
	};
	_proto.card12_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card12 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = -19.67;
		t.y = 299.66;
		return t;
	};
	_proto.card11_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card11 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = -4;
		t.y = 270;
		return t;
	};
	_proto.card10_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card10 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 11;
		t.y = 241;
		return t;
	};
	_proto.card9_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card9 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 25;
		t.y = 214;
		return t;
	};
	_proto.card8_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card8 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 38;
		t.y = 190;
		return t;
	};
	_proto.card7_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card7 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 52;
		t.y = 164;
		return t;
	};
	_proto.card6_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card6 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 66;
		t.y = 138;
		return t;
	};
	_proto.card5_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card5 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 81;
		t.y = 110;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card4 = t;
		t.skewY = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 97;
		t.y = 80;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card3 = t;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 110;
		t.y = 55;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card2 = t;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 124;
		t.y = 29;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card1 = t;
		t.rotation = 0;
		t.skinName = "CDDBaseCard0Skin";
		t.x = 137;
		t.y = 5;
		return t;
	};
	return CDDHandCards0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDHandCards2Skin.exml'] = window.CDDHandCards2Skin = (function (_super) {
	__extends(CDDHandCards2Skin, _super);
	function CDDHandCards2Skin() {
		_super.call(this);
		this.skinParts = ["card13","card12","card11","card10","card9","card8","card7","card6","card5","card4","card3","card2","card1"];
		
		this.elementsContent = [this.card13_i(),this.card12_i(),this.card11_i(),this.card10_i(),this.card9_i(),this.card8_i(),this.card7_i(),this.card6_i(),this.card5_i(),this.card4_i(),this.card3_i(),this.card2_i(),this.card1_i()];
	}
	var _proto = CDDHandCards2Skin.prototype;

	_proto.card13_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card13 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = -33;
		t.y = 41;
		return t;
	};
	_proto.card12_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card12 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = -20;
		t.y = 65;
		return t;
	};
	_proto.card11_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card11 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = -8;
		t.y = 87;
		return t;
	};
	_proto.card10_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card10 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 3;
		t.y = 108;
		return t;
	};
	_proto.card9_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card9 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 15;
		t.y = 130;
		return t;
	};
	_proto.card8_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card8 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 25;
		t.y = 150;
		return t;
	};
	_proto.card7_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card7 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 36;
		t.y = 172;
		return t;
	};
	_proto.card6_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card6 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 49;
		t.y = 196;
		return t;
	};
	_proto.card5_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card5 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 62;
		t.y = 218;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card4 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 73.52;
		t.y = 240;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card3 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 86.52;
		t.y = 265;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card2 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 101.52;
		t.y = 292;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card1 = t;
		t.skinName = "CDDBaseCard2Skin";
		t.x = 116.52;
		t.y = 318;
		return t;
	};
	return CDDHandCards2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDHandCards3Skin.exml'] = window.CDDHandCards3Skin = (function (_super) {
	__extends(CDDHandCards3Skin, _super);
	function CDDHandCards3Skin() {
		_super.call(this);
		this.skinParts = ["card13","card12","card11","card10","card9","card8","card7","card6","card5","card4","card3","card2","card1"];
		
		this.elementsContent = [this.card13_i(),this.card12_i(),this.card11_i(),this.card10_i(),this.card9_i(),this.card8_i(),this.card7_i(),this.card6_i(),this.card5_i(),this.card4_i(),this.card3_i(),this.card2_i(),this.card1_i()];
	}
	var _proto = CDDHandCards3Skin.prototype;

	_proto.card13_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card13 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card12_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card12 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 35;
		t.y = 0;
		return t;
	};
	_proto.card11_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card11 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 70;
		t.y = 0;
		return t;
	};
	_proto.card10_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card10 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 105;
		t.y = 0;
		return t;
	};
	_proto.card9_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card9 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 140;
		t.y = 0;
		return t;
	};
	_proto.card8_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card8 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 175;
		t.y = 0;
		return t;
	};
	_proto.card7_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card7 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 210;
		t.y = 0;
		return t;
	};
	_proto.card6_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card6 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 245;
		t.y = 0;
		return t;
	};
	_proto.card5_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card5 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 280;
		t.y = 0;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card4 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 315;
		t.y = 0;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card3 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 350;
		t.y = 0;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card2 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 385;
		t.y = 0;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDMiddleCard();
		this.card1 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "CDDBaseCard3Skin";
		t.x = 420;
		t.y = 0;
		return t;
	};
	return CDDHandCards3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDOffsetSkin.exml'] = window.CDDOffsetSkin = (function (_super) {
	__extends(CDDOffsetSkin, _super);
	function CDDOffsetSkin() {
		_super.call(this);
		this.skinParts = ["moneyTf"];
		
		this.elementsContent = [this.moneyTf_i()];
	}
	var _proto = CDDOffsetSkin.prototype;

	_proto.moneyTf_i = function () {
		var t = new eui.BitmapLabel();
		this.moneyTf = t;
		t.font = "CDD_win_fnt";
		t.text = "";
		t.x = 3;
		t.y = 1;
		return t;
	};
	return CDDOffsetSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDPersonScoreSkin.exml'] = window.CDDPersonScoreSkin = (function (_super) {
	__extends(CDDPersonScoreSkin, _super);
	function CDDPersonScoreSkin() {
		_super.call(this);
		this.skinParts = ["tf0","tf1"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = CDDPersonScoreSkin.prototype;

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
	return CDDPersonScoreSkin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDSmallDiscard0Skin.exml'] = window.CDDSmallDiscard0Skin = (function (_super) {
	__extends(CDDSmallDiscard0Skin, _super);
	function CDDSmallDiscard0Skin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","card4","conGrp"];
		
		this.height = 142;
		this.width = 224;
		this.elementsContent = [this.conGrp_i()];
	}
	var _proto = CDDSmallDiscard0Skin.prototype;

	_proto.conGrp_i = function () {
		var t = new eui.Group();
		this.conGrp = t;
		t.x = 58;
		t.y = 31;
		t.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i()];
		return t;
	};
	_proto.card0_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card0 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 0;
		t.y = 42;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card1 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 25;
		t.y = 31;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card2 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 52;
		t.y = 31;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card3 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 81;
		t.y = 36;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card4 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 107;
		t.y = 44;
		return t;
	};
	return CDDSmallDiscard0Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDSmallDiscard1Skin.exml'] = window.CDDSmallDiscard1Skin = (function (_super) {
	__extends(CDDSmallDiscard1Skin, _super);
	function CDDSmallDiscard1Skin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","card4","conGrp"];
		
		this.height = 142;
		this.width = 224;
		this.elementsContent = [this.conGrp_i()];
	}
	var _proto = CDDSmallDiscard1Skin.prototype;

	_proto.conGrp_i = function () {
		var t = new eui.Group();
		this.conGrp = t;
		t.x = 58;
		t.y = 31;
		t.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i()];
		return t;
	};
	_proto.card0_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card0 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 0;
		t.y = 42;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card1 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 25;
		t.y = 31;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card2 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 52;
		t.y = 31;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card3 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 81;
		t.y = 36;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card4 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 107;
		t.y = 44;
		return t;
	};
	return CDDSmallDiscard1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDSmallDiscard2Skin.exml'] = window.CDDSmallDiscard2Skin = (function (_super) {
	__extends(CDDSmallDiscard2Skin, _super);
	function CDDSmallDiscard2Skin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","card4","conGrp"];
		
		this.height = 142;
		this.width = 224;
		this.elementsContent = [this.conGrp_i()];
	}
	var _proto = CDDSmallDiscard2Skin.prototype;

	_proto.conGrp_i = function () {
		var t = new eui.Group();
		this.conGrp = t;
		t.x = 58;
		t.y = 31;
		t.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i()];
		return t;
	};
	_proto.card0_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card0 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 0;
		t.y = 42;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card1 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 25;
		t.y = 31;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card2 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 52;
		t.y = 31;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card3 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 81;
		t.y = 36;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card4 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 107;
		t.y = 44;
		return t;
	};
	return CDDSmallDiscard2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/component/CDDSmallDiscard3Skin.exml'] = window.CDDSmallDiscard3Skin = (function (_super) {
	__extends(CDDSmallDiscard3Skin, _super);
	function CDDSmallDiscard3Skin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","card4","conGrp"];
		
		this.height = 142;
		this.width = 224;
		this.elementsContent = [this.conGrp_i()];
	}
	var _proto = CDDSmallDiscard3Skin.prototype;

	_proto.conGrp_i = function () {
		var t = new eui.Group();
		this.conGrp = t;
		t.x = 58;
		t.y = 31;
		t.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i()];
		return t;
	};
	_proto.card0_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card0 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 0;
		t.y = 42;
		return t;
	};
	_proto.card1_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card1 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = -10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 25;
		t.y = 31;
		return t;
	};
	_proto.card2_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card2 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 52;
		t.y = 31;
		return t;
	};
	_proto.card3_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card3 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 81;
		t.y = 36;
		return t;
	};
	_proto.card4_i = function () {
		var t = new CDD.CDDLargeCard();
		this.card4 = t;
		t.anchorOffsetX = 83;
		t.anchorOffsetY = 114;
		t.height = 228;
		t.rotation = 20;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.skinName = "CDDBaseCard1Skin";
		t.width = 166;
		t.x = 107;
		t.y = 44;
		return t;
	};
	return CDDSmallDiscard3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/CDD/replay/CDDReplaySkin.exml'] = window.CDDReplaySkin = (function (_super) {
	__extends(CDDReplaySkin, _super);
	function CDDReplaySkin() {
		_super.call(this);
		this.skinParts = ["bg","spdBtn0","spdBtn1","spdBtn2","spdBtn3","bgmBtn","musicBtn","prevBtn","playBtn","nextBtn","progressTf","exitBtn","ctrlGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.ctrlGrp_i()];
	}
	var _proto = CDDReplaySkin.prototype;

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
	return CDDReplaySkin;
})(eui.Skin);