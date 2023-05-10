
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
                generateEUI.skins = {};generateEUI.paths['resource/pages/HALL/main/component/HALLDeviceInfoSkin.exml'] = window.HALLDeviceInfoSkin = (function (_super) {
	__extends(HALLDeviceInfoSkin, _super);
	function HALLDeviceInfoSkin() {
		_super.call(this);
		this.skinParts = ["fullscreenBVtn","addToDeskTop","replayBtn","luckyBtn","serviceBtn","signalBtn","powerBtn","img","tf","tipGrp","tf0","iosTip","backBtn","settingBtn","i18nBtn","agentBtn"];
		
		this.height = 100;
		this.width = 611;
		this.elementsContent = [this.fullscreenBVtn_i(),this.addToDeskTop_i(),this.replayBtn_i(),this.luckyBtn_i(),this.serviceBtn_i(),this.signalBtn_i(),this.powerBtn_i(),this.tipGrp_i(),this.iosTip_i(),this.backBtn_i(),this.settingBtn_i(),this.i18nBtn_i(),this.agentBtn_i()];
	}
	var _proto = HALLDeviceInfoSkin.prototype;

	_proto.fullscreenBVtn_i = function () {
		var t = new eui.Image();
		this.fullscreenBVtn = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 23;
		t.source = "HALL_fullscreen_1_png";
		t.width = 48;
		t.x = 407;
		t.y = 23;
		return t;
	};
	_proto.addToDeskTop_i = function () {
		var t = new eui.Image();
		this.addToDeskTop = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 23;
		t.source = "HALL_add_to_desktop_png";
		t.width = 48;
		t.x = 345;
		t.y = 23;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Image();
		this.replayBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 22;
		t.source = "HALL_history_png";
		t.width = 48;
		t.x = 241;
		t.y = 22;
		return t;
	};
	_proto.luckyBtn_i = function () {
		var t = new eui.Group();
		this.luckyBtn = t;
		t.height = 48;
		t.width = 64;
		t.x = 265.34;
		t.y = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 69;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "HALL_lucky_wheel_btn_tex_png";
		t.width = 59;
		t.x = 10.64;
		t.y = -6;
		return t;
	};
	_proto.serviceBtn_i = function () {
		var t = new eui.Image();
		this.serviceBtn = t;
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 23;
		t.source = "HALL_icon_service_png";
		t.width = 43;
		t.x = 468;
		t.y = 25;
		return t;
	};
	_proto.signalBtn_i = function () {
		var t = new eui.Image();
		this.signalBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 25;
		t.height = 48;
		t.source = "HALL_signal_4_png";
		t.width = 48;
		t.x = 527;
		t.y = 25;
		return t;
	};
	_proto.powerBtn_i = function () {
		var t = new eui.Image();
		this.powerBtn = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 22;
		t.height = 48;
		t.source = "HALL_power_4_png";
		t.width = 48;
		t.x = 586;
		t.y = 22;
		return t;
	};
	_proto.tipGrp_i = function () {
		var t = new eui.Group();
		this.tipGrp = t;
		t.anchorOffsetX = 43;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 586;
		t.y = 57;
		t.elementsContent = [this._Image2_i(),this.img_i(),this.tf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_tip_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 24;
		t.source = "HALL_power_s_4_png";
		t.width = 24;
		t.x = 7;
		t.y = 13.5;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.size = 14;
		t.text = "123ms";
		t.x = 37;
		t.y = 18.5;
		return t;
	};
	_proto.iosTip_i = function () {
		var t = new eui.Group();
		this.iosTip = t;
		t.anchorOffsetX = 43;
		t.x = 345;
		t.y = 57;
		t.elementsContent = [this._Image3_i(),this.tf0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "HALL_tip_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.bold = true;
		t.size = 14;
		t.text = "保存到桌面";
		t.textColor = 0x00ff00;
		t.x = 5;
		t.y = 17.5;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Image();
		this.backBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 23;
		t.source = "HALL_main_json.HALL_icon_main_png";
		t.width = 51;
		t.x = 586;
		t.y = 23;
		return t;
	};
	_proto.settingBtn_i = function () {
		var t = new eui.Image();
		this.settingBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 23;
		t.source = "HALL_main_json.HALL_icon_setting2_png";
		t.width = 51;
		t.x = 127;
		t.y = 23;
		return t;
	};
	_proto.i18nBtn_i = function () {
		var t = new eui.Image();
		this.i18nBtn = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 24;
		t.source = "HALL_main_json.HALL_icon_wold_png";
		t.visible = false;
		t.width = 51;
		t.x = 182;
		t.y = 24;
		return t;
	};
	_proto.agentBtn_i = function () {
		var t = new eui.Image();
		this.agentBtn = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 26;
		t.height = 56;
		t.source = "HALL_icon_concat_agent_png";
		t.width = 70;
		t.x = 95;
		t.y = 23;
		return t;
	};
	return HALLDeviceInfoSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/activity/HALLActivitySkin.exml'] = window.HALLActivitySkin = (function (_super) {
	__extends(HALLActivitySkin, _super);
	function HALLActivitySkin() {
		_super.call(this);
		this.skinParts = ["back_i18n","backBtn","title_i18n","deviceInfo","itemContainer","scl","titleTf","actImage","imageCon","noData_i18n","infoGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = HALLActivitySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_bg2_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(564,2,753,12);
		t.source = "HALL_common_top_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(821,81,361,486);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "HALL_activity_bg_png";
		t.top = 102;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.backBtn_i(),this.title_i18n_i(),this.deviceInfo_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Group();
		this.backBtn = t;
		t.left = 28;
		t.top = 21;
		t.elementsContent = [this._Image4_i(),this.back_i18n_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.source = "HALL_act_back_png";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.back_i18n_i = function () {
		var t = new eui.Label();
		this.back_i18n = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 47;
		t.lineSpacing = 0;
		t.size = 36;
		t.text = "返 回";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 83;
		t.y = 6;
		return t;
	};
	_proto.title_i18n_i = function () {
		var t = new eui.Label();
		this.title_i18n = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "活 动";
		t.verticalCenter = -12;
		return t;
	};
	_proto.deviceInfo_i = function () {
		var t = new HALL.HALLDeviceInfo();
		this.deviceInfo = t;
		t.right = 0;
		t.skinName = "HALLDeviceInfoSkin";
		t.top = 22;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 102;
		t.touchEnabled = false;
		t.elementsContent = [this.scl_i(),this.titleTf_i(),this._XYScroller1_i(),this.infoGrp_i()];
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 597;
		t.touchEnabled = false;
		t.width = 274;
		t.x = 20;
		t.y = 20;
		t.viewport = this.itemContainer_i();
		return t;
	};
	_proto.itemContainer_i = function () {
		var t = new eui.Group();
		this.itemContainer = t;
		t.touchEnabled = false;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 47;
		t.lineSpacing = 0;
		t.size = 30;
		t.text = "";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 624.06;
		t.x = 308.88;
		t.y = 38.28;
		return t;
	};
	_proto._XYScroller1_i = function () {
		var t = new XYScroller();
		t.height = 533;
		t.left = 310;
		t.right = 4;
		t.y = 24;
		t.viewport = this.imageCon_i();
		return t;
	};
	_proto.imageCon_i = function () {
		var t = new eui.Group();
		this.imageCon = t;
		t.elementsContent = [this.actImage_i()];
		return t;
	};
	_proto.actImage_i = function () {
		var t = new eui.Image();
		this.actImage = t;
		t.height = 530;
		t.source = "";
		t.width = 1020;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.left = 295;
		t.right = 5;
		t.y = 224.58;
		t.elementsContent = [this.noData_i18n_i()];
		return t;
	};
	_proto.noData_i18n_i = function () {
		var t = new eui.Label();
		this.noData_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 139;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 983;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALLActivitySkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/common/XYButtonSkin.exml'] = window.XYButtonSkin = (function (_super) {
	__extends(XYButtonSkin, _super);
	function XYButtonSkin() {
		_super.call(this);
		this.skinParts = ["bg","tf"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.bg_i(),this.tf_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.a_labelSize"],[0],this.tf,"size");
		eui.Binding.$bindProperties(this, ["hostComponent.a_label"],[0],this.tf,"text");
	}
	var _proto = XYButtonSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,19,126,28);
		t.source = "HALL_all_btn_bg_png";
		t.top = 0;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.horizontalCenter = 0;
		t.stroke = 1;
		t.strokeColor = 0x898989;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	return XYButtonSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/alert/HALL_NoMoneyWarnSkin.exml'] = window.HALL_NoMoneyWarnSkin = (function (_super) {
	__extends(HALL_NoMoneyWarnSkin, _super);
	function HALL_NoMoneyWarnSkin() {
		_super.call(this);
		this.skinParts = ["img","closeBtn","tf","buyBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_NoMoneyWarnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 402;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.img_i(),this.closeBtn_i(),this.tf_i(),this.buyBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,54,10,327);
		t.source = "HALL_alert_bg_620_png";
		t.top = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "HALL_common_face1_png";
		t.x = 238;
		t.y = 31;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 31;
		t.source = "HALL_close_btn_png";
		t.x = 617;
		t.y = 1;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.lineSpacing = 6;
		t.size = 26;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 489;
		t.x = 66;
		t.y = 189;
		return t;
	};
	_proto.buyBtn_i = function () {
		var t = new HALL.XYButton();
		this.buyBtn = t;
		t.a_label = "购买金币";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 25;
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 34;
		t.height = 65;
		t.skinName = "XYButtonSkin";
		t.width = 203;
		t.x = 310;
		t.y = 349;
		return t;
	};
	return HALL_NoMoneyWarnSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/alert/HALLAlertBigSkin.exml'] = window.HALLAlertBigSkin = (function (_super) {
	__extends(HALLAlertBigSkin, _super);
	function HALLAlertBigSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","cancelBtn","btnGrp","titleTf","tf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLAlertBigSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this.btnGrp_i(),this.titleTf_i(),this.tf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(31,54,10,327);
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.horizontalCenter = 0;
		t.width = 525;
		t.y = 405;
		t.elementsContent = [this.okBtn_i(),this.cancelBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.source = "HALL_ok_btn_png";
		t.width = 250;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.source = "HALL_cancel_btn_png";
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "幸运转盘说明";
		t.y = 23;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 306;
		t.horizontalCenter = 0;
		t.lineSpacing = 25;
		t.size = 26;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 735;
		t.y = 79;
		return t;
	};
	return HALLAlertBigSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/alert/HALLAlertHalfSkin.exml'] = window.HALLAlertHalfSkin = (function (_super) {
	__extends(HALLAlertHalfSkin, _super);
	function HALLAlertHalfSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","cancelBtn","btnGrp","titleTf","tf","tf0","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLAlertHalfSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this.btnGrp_i(),this.titleTf_i(),this.tf_i(),this.tf0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(31,54,10,327);
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.horizontalCenter = 0;
		t.width = 525;
		t.y = 405;
		t.elementsContent = [this.okBtn_i(),this.cancelBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.source = "HALL_ok_btn_png";
		t.width = 250;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.source = "HALL_cancel_btn_png";
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "幸运转盘说明";
		t.y = 23;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 306;
		t.lineSpacing = 25;
		t.size = 26;
		t.text = "--";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 367;
		t.x = 37;
		t.y = 79;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 306;
		t.lineSpacing = 25;
		t.size = 26;
		t.text = "--";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 367;
		t.x = 404;
		t.y = 79;
		return t;
	};
	return HALLAlertHalfSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/alert/HALLAlertSkin.exml'] = window.HALLAlertSkin = (function (_super) {
	__extends(HALLAlertSkin, _super);
	function HALLAlertSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","cancelBtn","btnGrp","titleTf","tf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLAlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 402;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.btnGrp_i(),this.titleTf_i(),this.tf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,54,10,327);
		t.source = "HALL_alert_bg_600_png";
		t.top = 0;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.horizontalCenter = 0;
		t.width = 525;
		t.y = 307;
		t.elementsContent = [this.okBtn_i(),this.cancelBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.source = "HALL_ok_btn_png";
		t.width = 250;
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.source = "HALL_cancel_btn_png";
		t.width = 250;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "--";
		t.y = 14;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 213;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 489;
		t.x = 66;
		t.y = 77;
		return t;
	};
	return HALLAlertSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/alert/HALLChargeBackSkin.exml'] = window.HALLChargeBackSkin = (function (_super) {
	__extends(HALLChargeBackSkin, _super);
	function HALLChargeBackSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","cancelBtn","btnGrp","titleTf","tf","btn_close","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLChargeBackSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 402;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.btnGrp_i(),this.titleTf_i(),this.tf_i(),this.btn_close_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,54,10,327);
		t.source = "HALL_alert_bg_600_png";
		t.top = 0;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.horizontalCenter = 0;
		t.width = 525;
		t.y = 307;
		t.elementsContent = [this.okBtn_i(),this.cancelBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new HALL.XYButton();
		this.okBtn = t;
		t.a_label = "充值成功";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 25;
		t.height = 65;
		t.skinName = "XYButtonSkin";
		t.width = 150;
		t.x = 365;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new HALL.XYButton();
		this.cancelBtn = t;
		t.a_label = "遇到问题";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 25;
		t.height = 65;
		t.skinName = "XYButtonSkin";
		t.width = 150;
		t.x = 27;
		t.y = 0;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "充值";
		t.y = 14;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 213;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 489;
		t.x = 66;
		t.y = 77;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.source = "HALL_close_btn_png";
		t.x = 589;
		t.y = -30;
		return t;
	};
	return HALLChargeBackSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/alert/HALLGuestWarnSkin.exml'] = window.HALLGuestWarnSkin = (function (_super) {
	__extends(HALLGuestWarnSkin, _super);
	function HALLGuestWarnSkin() {
		_super.call(this);
		this.skinParts = ["img","closeBtn","okBtn","cancelBtn","btnGrp","tf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLGuestWarnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 402;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this.img_i(),this.closeBtn_i(),this.btnGrp_i(),this.tf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,54,10,327);
		t.source = "HALL_alert_bg_620_png";
		t.top = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "HALL_common_face1_png";
		t.x = 238;
		t.y = 31;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 31;
		t.source = "HALL_close_btn_png";
		t.x = 617;
		t.y = 1;
		return t;
	};
	_proto.btnGrp_i = function () {
		var t = new eui.Group();
		this.btnGrp = t;
		t.horizontalCenter = 0;
		t.y = 307;
		t.elementsContent = [this.okBtn_i(),this.cancelBtn_i()];
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.source = "HALL_reg_btn_png";
		t.x = 275;
		t.y = 0;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.source = "HALL_try_btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.lineSpacing = 6;
		t.size = 26;
		t.text = "--";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 489;
		t.x = 66;
		t.y = 189;
		return t;
	};
	return HALLGuestWarnSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/alert/HALLSimpleAlert400Skin.exml'] = window.HALLSimpleAlert400Skin = (function (_super) {
	__extends(HALLSimpleAlert400Skin, _super);
	function HALLSimpleAlert400Skin() {
		_super.call(this);
		this.skinParts = ["img","tf","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLSimpleAlert400Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 350;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 400;
		t.elementsContent = [this._Image2_i(),this.img_i(),this.tf_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 0;
		t.source = "HALL_alert_bg_400_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "HALL_common_face0_png";
		t.x = 128;
		t.y = 60;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "--";
		t.y = 248;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29;
		t.anchorOffsetY = 31;
		t.source = "HALL_close_btn_png";
		t.x = 397;
		t.y = 1;
		return t;
	};
	return HALLSimpleAlert400Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/charge/component/HALL_LuckySkin.exml'] = window.HALL_LuckySkin = (function (_super) {
	__extends(HALL_LuckySkin, _super);
	var HALL_LuckySkin$Skin1 = 	(function (_super) {
		__extends(HALL_LuckySkin$Skin1, _super);
		var HALL_LuckySkin$Skin1$Skin2 = 		(function (_super) {
			__extends(HALL_LuckySkin$Skin1$Skin2, _super);
			function HALL_LuckySkin$Skin1$Skin2() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_LuckySkin$Skin1$Skin2.prototype;

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
			return HALL_LuckySkin$Skin1$Skin2;
		})(eui.Skin);

		function HALL_LuckySkin$Skin1() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_LuckySkin$Skin1.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_LuckySkin$Skin1$Skin2;
			return t;
		};
		return HALL_LuckySkin$Skin1;
	})(eui.Skin);

	function HALL_LuckySkin() {
		_super.call(this);
		this.skinParts = ["wheelImg","coinTf0","coinTf1","coinTf2","coinTf3","wheel","startBtn","poolEffectImg","poolTf","tab0","tab1","tab2","historyTf","grp","scl","coinTf","creditTf","creditRunBtn","coinRunBtn","helpBtn","ifoTf","infoGrp"];
		
		this.height = 608;
		this.width = 996;
		this.elementsContent = [this._Image1_i(),this.wheel_i(),this._Image2_i(),this.startBtn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.helpBtn_i(),this.infoGrp_i()];
	}
	var _proto = HALL_LuckySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 608;
		t.source = "TXFFC_lucky_bg_png";
		t.width = 1019;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wheel_i = function () {
		var t = new eui.Group();
		this.wheel = t;
		t.anchorOffsetX = 267;
		t.anchorOffsetY = 267;
		t.x = 271;
		t.y = 303;
		t.elementsContent = [this.wheelImg_i(),this.coinTf0_i(),this.coinTf1_i(),this.coinTf2_i(),this.coinTf3_i()];
		return t;
	};
	_proto.wheelImg_i = function () {
		var t = new eui.Image();
		this.wheelImg = t;
		t.anchorOffsetX = 267;
		t.anchorOffsetY = 267;
		t.height = 534;
		t.rotation = 350.31;
		t.source = "TXFFC_lucky_pan_png";
		t.width = 534;
		t.x = 267;
		t.y = 267;
		return t;
	};
	_proto.coinTf0_i = function () {
		var t = new eui.BitmapLabel();
		this.coinTf0 = t;
		t.font = "TXFFC_lucky_item_number_fnt";
		t.rotation = 262.51;
		t.text = "1金";
		t.x = 145.5;
		t.y = 311.17;
		return t;
	};
	_proto.coinTf1_i = function () {
		var t = new eui.BitmapLabel();
		this.coinTf1 = t;
		t.font = "TXFFC_lucky_item_number_fnt";
		t.rotation = 21.39;
		t.text = "2金";
		t.x = 289.5;
		t.y = 140.06;
		return t;
	};
	_proto.coinTf2_i = function () {
		var t = new eui.BitmapLabel();
		this.coinTf2 = t;
		t.font = "TXFFC_lucky_item_number_fnt";
		t.rotation = 102.29;
		t.text = "5金";
		t.x = 394.26;
		t.y = 266.83;
		return t;
	};
	_proto.coinTf3_i = function () {
		var t = new eui.BitmapLabel();
		this.coinTf3 = t;
		t.font = "TXFFC_lucky_item_number_fnt";
		t.rotation = 182.53;
		t.text = "10金";
		t.x = 296.5;
		t.y = 393.83;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "TXFFC_lucky_lunpan_2_png";
		t.touchEnabled = false;
		t.x = 121;
		t.y = 36;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Image();
		this.startBtn = t;
		t.anchorOffsetX = 87;
		t.anchorOffsetY = 131;
		t.source = "TXFFC_lucky_lunpan_10_png";
		t.x = 271.5;
		t.y = 305;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 545;
		t.y = 17;
		t.elementsContent = [this._Image3_i(),this.poolEffectImg_i(),this.poolTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "TXFFC_lucky_jiangchi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.poolEffectImg_i = function () {
		var t = new eui.Image();
		this.poolEffectImg = t;
		t.source = "TXFFC_lucky_jiangchi_light1_png";
		t.x = 2;
		t.y = 65;
		return t;
	};
	_proto.poolTf_i = function () {
		var t = new eui.BitmapLabel();
		this.poolTf = t;
		t.font = "TXFFC_luck_score_number_fnt";
		t.letterSpacing = 4.8;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.text = "0000000.00";
		t.x = 116;
		t.y = 93;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 243;
		t.width = 441;
		t.x = 545;
		t.y = 181;
		t.elementsContent = [this._Image4_i(),this.tab0_i(),this.tab1_i(),this.tab2_i(),this.scl_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(11,9,20,25);
		t.source = "TXFFC_lucky_bg_2_png";
		t.top = 0;
		return t;
	};
	_proto.tab0_i = function () {
		var t = new eui.Image();
		this.tab0 = t;
		t.source = "TXFFC_lucky_record_qf_png";
		t.width = 145;
		t.x = 2;
		t.y = 2;
		return t;
	};
	_proto.tab1_i = function () {
		var t = new eui.Image();
		this.tab1 = t;
		t.source = "TXFFC_lucky_record_dj_png";
		t.width = 145;
		t.x = 148;
		t.y = 2;
		return t;
	};
	_proto.tab2_i = function () {
		var t = new eui.Image();
		this.tab2 = t;
		t.source = "TXFFC_lucky_record_gr_png";
		t.width = 145;
		t.x = 294;
		t.y = 2;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 197;
		t.width = 436;
		t.x = 2.5;
		t.y = 43;
		t.skinName = HALL_LuckySkin$Skin1;
		t.viewport = this.grp_i();
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.elementsContent = [this.historyTf_i()];
		return t;
	};
	_proto.historyTf_i = function () {
		var t = new eui.Label();
		this.historyTf = t;
		t.lineSpacing = 5;
		t.size = 16;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.textColor = 0x827c7b;
		t.width = 419;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 551;
		t.y = 441;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.coinTf_i(),this.creditTf_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(40,6,123,40);
		t.source = "TXFFC_lucky_fen_di_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "TXFFC_lucky_fen_di_png";
		t.x = 232;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "HALL_coin_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "TXFFC_lucky_txt_jifen_png";
		t.x = 249;
		t.y = 13;
		return t;
	};
	_proto.coinTf_i = function () {
		var t = new eui.Label();
		this.coinTf = t;
		t.horizontalCenter = -95.5;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x987b45;
		t.y = 14;
		return t;
	};
	_proto.creditTf_i = function () {
		var t = new eui.Label();
		this.creditTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 143;
		t.size = 26;
		t.text = "0";
		t.textColor = 0x987B45;
		t.y = 14;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 507;
		t.y = 510;
		t.elementsContent = [this.creditRunBtn_i(),this.coinRunBtn_i()];
		return t;
	};
	_proto.creditRunBtn_i = function () {
		var t = new eui.Image();
		this.creditRunBtn = t;
		t.source = "TXFFC_lucky_btn_choujiang_2_png";
		t.x = 253;
		t.y = 1;
		return t;
	};
	_proto.coinRunBtn_i = function () {
		var t = new eui.Image();
		this.coinRunBtn = t;
		t.source = "TXFFC_lucky_use5gold1_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Image();
		this.helpBtn = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 24;
		t.source = "TXFFC_lucky_btn_wenhao_png";
		t.x = 55;
		t.y = 60;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.anchorOffsetX = 99;
		t.anchorOffsetY = 135;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.x = 249;
		t.y = 477;
		t.elementsContent = [this._Image9_i(),this.ifoTf_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "TXFFC_lucky_tip1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ifoTf_i = function () {
		var t = new eui.Label();
		this.ifoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.size = 26;
		t.text = "大奖";
		t.textColor = 0xeeb53b;
		t.width = 304;
		t.x = 18;
		t.y = 14;
		return t;
	};
	return HALL_LuckySkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/charge/HALLChargeSkin.exml'] = window.HALLChargeSkin = (function (_super) {
	__extends(HALLChargeSkin, _super);
	function HALLChargeSkin() {
		_super.call(this);
		this.skinParts = ["back_i18n","backBtn","titleTf","deviceInfo","itemCon","bankCharge","maYunCharge","agentCharge","maHuaTengCharge","yunCharge","uiCon"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = HALLChargeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_bg2_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(564,2,753,12);
		t.source = "HALL_common_top_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(821,81,361,486);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "HALL_charge_bg_png";
		t.top = 102;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.backBtn_i(),this.titleTf_i(),this.deviceInfo_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Group();
		this.backBtn = t;
		t.left = 28;
		t.top = 21;
		t.elementsContent = [this._Image4_i(),this.back_i18n_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.source = "HALL_act_back_png";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.back_i18n_i = function () {
		var t = new eui.Label();
		this.back_i18n = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 47;
		t.lineSpacing = 0;
		t.size = 36;
		t.text = "返 回";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 83;
		t.y = 6;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "充 值";
		t.verticalCenter = -12;
		return t;
	};
	_proto.deviceInfo_i = function () {
		var t = new HALL.HALLDeviceInfo();
		this.deviceInfo = t;
		t.right = 0;
		t.skinName = "HALLDeviceInfoSkin";
		t.top = 22;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 102;
		t.elementsContent = [this._XYScroller1_i(),this.uiCon_i()];
		return t;
	};
	_proto._XYScroller1_i = function () {
		var t = new XYScroller();
		t.height = 597;
		t.width = 274;
		t.x = 20;
		t.y = 20;
		t.viewport = this.itemCon_i();
		return t;
	};
	_proto.itemCon_i = function () {
		var t = new eui.Group();
		this.itemCon = t;
		return t;
	};
	_proto.uiCon_i = function () {
		var t = new eui.Group();
		this.uiCon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 608;
		t.left = 294;
		t.right = 4;
		t.touchEnabled = false;
		t.y = 20;
		t.elementsContent = [this.bankCharge_i(),this.maYunCharge_i(),this.agentCharge_i(),this.maHuaTengCharge_i(),this.yunCharge_i()];
		return t;
	};
	_proto.bankCharge_i = function () {
		var t = new HALL.HALLBankCharge();
		this.bankCharge = t;
		t.left = 0;
		t.right = 0;
		t.skinName = "HALLBankChargeSkin";
		t.y = 0;
		return t;
	};
	_proto.maYunCharge_i = function () {
		var t = new HALL.HALLMaYunCharge();
		this.maYunCharge = t;
		t.left = 0;
		t.right = 0;
		t.skinName = "HALLMaYunChargeSkin";
		t.y = 0;
		return t;
	};
	_proto.agentCharge_i = function () {
		var t = new HALL.HALLAgentCharge();
		this.agentCharge = t;
		t.left = 0;
		t.right = 0;
		t.skinName = "HALLAgenChargeSkin";
		t.y = 0;
		return t;
	};
	_proto.maHuaTengCharge_i = function () {
		var t = new HALL.HALLMaHuaTengCharge();
		this.maHuaTengCharge = t;
		t.left = 0;
		t.right = 0;
		t.skinName = "HALLMaHuaTengChargeSkin";
		t.y = 0;
		return t;
	};
	_proto.yunCharge_i = function () {
		var t = new HALL.HALLYunChange();
		this.yunCharge = t;
		t.left = 0;
		t.right = 0;
		t.skinName = "HALLYunChargeSkin";
		t.y = 0;
		return t;
	};
	return HALLChargeSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/common/HALLCommonBtnSkin.exml'] = window.HALLCommonBtnSkin = (function (_super) {
	__extends(HALLCommonBtnSkin, _super);
	function HALLCommonBtnSkin() {
		_super.call(this);
		this.skinParts = ["image_common","image_select","image_icon","infoTf"];
		
		this.height = 90;
		this.width = 273;
		this.elementsContent = [this.image_common_i(),this.image_select_i(),this.image_icon_i(),this.infoTf_i()];
	}
	var _proto = HALLCommonBtnSkin.prototype;

	_proto.image_common_i = function () {
		var t = new eui.Image();
		this.image_common = t;
		t.source = "HALL_btn1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_select_i = function () {
		var t = new eui.Image();
		this.image_select = t;
		t.source = "HALL_btn2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_icon_i = function () {
		var t = new eui.Image();
		this.image_icon = t;
		t.source = "";
		t.touchEnabled = false;
		t.x = 21;
		t.y = 18;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 28;
		t.text = "活动一";
		t.touchEnabled = false;
		t.width = 154;
		t.x = 90;
		t.y = 31;
		return t;
	};
	return HALLCommonBtnSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/contactAgent/HALLContactAgentRenderSkin.exml'] = window.HALLContactAgentRenderSkin = (function (_super) {
	__extends(HALLContactAgentRenderSkin, _super);
	function HALLContactAgentRenderSkin() {
		_super.call(this);
		this.skinParts = ["iconImage","textInfo","btn"];
		
		this.height = 80;
		this.width = 694;
		this.elementsContent = [this.iconImage_i(),this.textInfo_i(),this.btn_i()];
	}
	var _proto = HALLContactAgentRenderSkin.prototype;

	_proto.iconImage_i = function () {
		var t = new eui.Image();
		this.iconImage = t;
		t.source = "HALL_qqdl_png";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.textInfo_i = function () {
		var t = new eui.Label();
		this.textInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xe8ce9b;
		t.verticalAlign = "middle";
		t.width = 310;
		t.x = 70;
		t.y = 10.5;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Image();
		this.btn = t;
		t.source = "HALL_openwx_png";
		t.verticalCenter = 0;
		t.x = 382;
		return t;
	};
	return HALLContactAgentRenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/contactAgent/HallContactAgentSkin.exml'] = window.HallContactAgentSkin = (function (_super) {
	__extends(HallContactAgentSkin, _super);
	function HallContactAgentSkin() {
		_super.call(this);
		this.skinParts = ["textBg","btn_close","textInfo","list","scl"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group2_i()];
	}
	var _proto = HallContactAgentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 516;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 845;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.textBg_i(),this.btn_close_i(),this.textInfo_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 120;
		t.scale9Grid = new egret.Rectangle(2,2,16,16);
		t.source = "HALL_subbg_vippay_png";
		t.width = 740.94;
		t.x = 39.29;
		t.y = 365.15;
		return t;
	};
	_proto.textBg_i = function () {
		var t = new eui.Image();
		this.textBg = t;
		t.height = 516;
		t.source = "HALL_angentbg_TW_png";
		t.width = 845;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.source = "HALL_close_btn_png";
		t.x = 795.98;
		t.y = 5.22;
		return t;
	};
	_proto.textInfo_i = function () {
		var t = new eui.Label();
		this.textInfo = t;
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf2d28e;
		t.top = 102;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 42.31;
		t.y = 155;
		t.elementsContent = [this.scl_i()];
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 178;
		t.width = 694;
		t.x = 0;
		t.y = 0;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		return t;
	};
	return HallContactAgentSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/config/HALL_BasicConfigSkin.exml'] = window.HALL_BasicConfigSkin = (function (_super) {
	__extends(HALL_BasicConfigSkin, _super);
	function HALL_BasicConfigSkin() {
		_super.call(this);
		this.skinParts = ["item2","btn2","item3","btn3","item16","btn16","item17","btn17","tfInfo","tf2","tf3","tf16","tf17","item0","btn0","item1","btn1","item4","btn4","item5","btn5","tf0","tf1","tf4","tf5","freeRoundTf","tf_5_i18n","limitTf","tf_13_i18n","item40","btn40","tf_40_i18n","tf_41_i18n"];
		
		this.height = 440;
		this.width = 1110;
		this.elementsContent = [this.item2_i(),this.btn2_i(),this.item3_i(),this.btn3_i(),this.item16_i(),this.btn16_i(),this.item17_i(),this.btn17_i(),this.tfInfo_i(),this.tf2_i(),this.tf3_i(),this.tf16_i(),this.tf17_i(),this.item0_i(),this.btn0_i(),this.item1_i(),this.btn1_i(),this.item4_i(),this.btn4_i(),this.item5_i(),this.btn5_i(),this.tf0_i(),this.tf1_i(),this.tf4_i(),this.tf5_i(),this.freeRoundTf_i(),this.tf_5_i18n_i(),this.limitTf_i(),this.tf_13_i18n_i(),this.item40_i(),this.btn40_i(),this.tf_40_i18n_i(),this.tf_41_i18n_i()];
	}
	var _proto = HALL_BasicConfigSkin.prototype;

	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 47;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 31;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 48;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 31;
		return t;
	};
	_proto.item16_i = function () {
		var t = new eui.Image();
		this.item16 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 48;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Image();
		this.btn16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 31;
		return t;
	};
	_proto.item17_i = function () {
		var t = new eui.Image();
		this.item17 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 48;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Image();
		this.btn17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 31;
		return t;
	};
	_proto.tfInfo_i = function () {
		var t = new eui.Label();
		this.tfInfo = t;
		t.size = 27;
		t.text = "底分选择";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 48;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 48;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 27;
		t.text = "1金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 48;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 27;
		t.text = "5金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 48;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 27;
		t.text = "10金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 48;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Image();
		this.item0 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 233.14;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 217.14;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 234.14;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 217.14;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Image();
		this.item4 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 235.47;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Image();
		this.btn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 218.47;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Image();
		this.item5 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 235.48;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Image();
		this.btn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 217.14;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.size = 27;
		t.text = "4局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 234.14;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.size = 27;
		t.text = "8局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 234.14;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.size = 27;
		t.text = "16局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 234.14;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.size = 27;
		t.text = "自定义";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 234.14;
		return t;
	};
	_proto.freeRoundTf_i = function () {
		var t = new eui.Label();
		this.freeRoundTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xffffff;
		t.height = 50;
		t.size = 27;
		t.text = "不限制";
		t.textAlign = "center";
		t.textColor = 0x1e1e1e;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 135;
		t.x = 858.36;
		t.y = 223.22;
		return t;
	};
	_proto.tf_5_i18n_i = function () {
		var t = new eui.Label();
		this.tf_5_i18n = t;
		t.size = 27;
		t.text = "总局数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 232.14;
		return t;
	};
	_proto.limitTf_i = function () {
		var t = new eui.Label();
		this.limitTf = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 257;
		t.y = 112.36;
		return t;
	};
	_proto.tf_13_i18n_i = function () {
		var t = new eui.Label();
		this.tf_13_i18n = t;
		t.size = 27;
		t.text = "最低入场";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 114.36;
		return t;
	};
	_proto.item40_i = function () {
		var t = new eui.Image();
		this.item40 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 257;
		t.y = 170.33;
		return t;
	};
	_proto.btn40_i = function () {
		var t = new eui.Image();
		this.btn40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 221;
		t.y = 155.33;
		return t;
	};
	_proto.tf_40_i18n_i = function () {
		var t = new eui.Label();
		this.tf_40_i18n = t;
		t.size = 27;
		t.text = "房间公开";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 172.33;
		return t;
	};
	_proto.tf_41_i18n_i = function () {
		var t = new eui.Label();
		this.tf_41_i18n = t;
		t.size = 27;
		t.text = "私密";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 300;
		t.y = 172.33;
		return t;
	};
	return HALL_BasicConfigSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/config/HALLDDZConfigSkin.exml'] = window.HALLDDZConfigSkin = (function (_super) {
	__extends(HALLDDZConfigSkin, _super);
	function HALLDDZConfigSkin() {
		_super.call(this);
		this.skinParts = ["item2","item3","btn2","btn3","item4","btn4","item5","btn5","tf2","tf3","tf4","tf5","xipaiGrp","item12","btn12","tf_2_i18n","tf_3_i18n","item22","btn22","item23","btn23","item24","btn24","item6","btn6","item0","btn0","item1","btn1","item16","btn16","item17","btn17","tf_4_i18n","tf22","tf23","tf24","tf6","tf_8_i18n","tf0","limitTf","tf1","tf16","tf17","tf_13_i18n","item7","btn7","item8","btn8","item9","btn9","item10","btn10","tf7","tf8","tf9","tf10","freeRoundTf","tf_5_i18n","item40","btn40","tf_40_i18n","tf_41_i18n"];
		
		this.height = 440;
		this.width = 1110;
		this.elementsContent = [this.xipaiGrp_i(),this.item12_i(),this.btn12_i(),this.tf_2_i18n_i(),this.tf_3_i18n_i(),this.item22_i(),this.btn22_i(),this.item23_i(),this.btn23_i(),this.item24_i(),this.btn24_i(),this.item6_i(),this.btn6_i(),this.item0_i(),this.btn0_i(),this.item1_i(),this.btn1_i(),this.item16_i(),this.btn16_i(),this.item17_i(),this.btn17_i(),this.tf_4_i18n_i(),this.tf22_i(),this.tf23_i(),this.tf24_i(),this.tf6_i(),this.tf_8_i18n_i(),this.tf0_i(),this.limitTf_i(),this.tf1_i(),this.tf16_i(),this.tf17_i(),this.tf_13_i18n_i(),this.item7_i(),this.btn7_i(),this.item8_i(),this.btn8_i(),this.item9_i(),this.btn9_i(),this.item10_i(),this.btn10_i(),this.tf7_i(),this.tf8_i(),this.tf9_i(),this.tf10_i(),this.freeRoundTf_i(),this.tf_5_i18n_i(),this.item40_i(),this.btn40_i(),this.tf_40_i18n_i(),this.tf_41_i18n_i()];
	}
	var _proto = HALLDDZConfigSkin.prototype;

	_proto.xipaiGrp_i = function () {
		var t = new eui.Group();
		this.xipaiGrp = t;
		t.x = 446;
		t.y = 159;
		t.elementsContent = [this.item2_i(),this.item3_i(),this.btn2_i(),this.btn3_i(),this.item4_i(),this.btn4_i(),this.item5_i(),this.btn5_i(),this.tf2_i(),this.tf3_i(),this.tf4_i(),this.tf5_i()];
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 32.8;
		t.y = 15;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "HALL_friend_select_png";
		t.x = 205.89;
		t.y = 15;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 175;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 159.33;
		t.x = 170.89;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Image();
		this.item4 = t;
		t.source = "HALL_friend_select_png";
		t.x = 379.89;
		t.y = 15;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Image();
		this.btn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 159.33;
		t.x = 344.89;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Image();
		this.item5 = t;
		t.source = "HALL_friend_select_png";
		t.x = 535.89;
		t.y = 15;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Image();
		this.btn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 159.33;
		t.x = 500.89;
		t.y = 0;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 27;
		t.text = "3张";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 80;
		t.y = 17;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 27;
		t.text = "6张";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 249.89;
		t.y = 17;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.size = 27;
		t.text = "6张";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 423.89;
		t.y = 17;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.size = 27;
		t.text = "6张";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 579.89;
		t.y = 17;
		return t;
	};
	_proto.item12_i = function () {
		var t = new eui.Image();
		this.item12 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 257;
		t.y = 173;
		return t;
	};
	_proto.btn12_i = function () {
		var t = new eui.Image();
		this.btn12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 221;
		t.y = 158;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.size = 27;
		t.text = "玩法";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 175;
		return t;
	};
	_proto.tf_3_i18n_i = function () {
		var t = new eui.Label();
		this.tf_3_i18n = t;
		t.size = 27;
		t.text = "不洗牌模式";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 300;
		t.y = 175;
		return t;
	};
	_proto.item22_i = function () {
		var t = new eui.Image();
		this.item22 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 247;
		return t;
	};
	_proto.btn22_i = function () {
		var t = new eui.Image();
		this.btn22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 221;
		t.y = 231;
		return t;
	};
	_proto.item23_i = function () {
		var t = new eui.Image();
		this.item23 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 248;
		return t;
	};
	_proto.btn23_i = function () {
		var t = new eui.Image();
		this.btn23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 377;
		t.y = 231;
		return t;
	};
	_proto.item24_i = function () {
		var t = new eui.Image();
		this.item24 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 248;
		return t;
	};
	_proto.btn24_i = function () {
		var t = new eui.Image();
		this.btn24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 547;
		t.y = 231;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Image();
		this.item6 = t;
		t.source = "HALL_friend_select_png";
		t.x = 733;
		t.y = 248;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Image();
		this.btn6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 713;
		t.y = 231;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Image();
		this.item0 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 47;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 31;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 48;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 31;
		return t;
	};
	_proto.item16_i = function () {
		var t = new eui.Image();
		this.item16 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 48;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Image();
		this.btn16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 31;
		return t;
	};
	_proto.item17_i = function () {
		var t = new eui.Image();
		this.item17 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 48;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Image();
		this.btn17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 31;
		return t;
	};
	_proto.tf_4_i18n_i = function () {
		var t = new eui.Label();
		this.tf_4_i18n = t;
		t.size = 27;
		t.text = "最大倍数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 248;
		return t;
	};
	_proto.tf22_i = function () {
		var t = new eui.Label();
		this.tf22 = t;
		t.size = 27;
		t.text = "32倍";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 248;
		return t;
	};
	_proto.tf23_i = function () {
		var t = new eui.Label();
		this.tf23 = t;
		t.size = 27;
		t.text = "64倍";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 449;
		t.y = 248;
		return t;
	};
	_proto.tf24_i = function () {
		var t = new eui.Label();
		this.tf24 = t;
		t.size = 27;
		t.text = "128倍";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 604;
		t.y = 248;
		return t;
	};
	_proto.tf6_i = function () {
		var t = new eui.Label();
		this.tf6 = t;
		t.size = 27;
		t.text = "128倍";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 770;
		t.y = 248;
		return t;
	};
	_proto.tf_8_i18n_i = function () {
		var t = new eui.Label();
		this.tf_8_i18n = t;
		t.size = 27;
		t.text = "底分选择";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 48;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 48;
		return t;
	};
	_proto.limitTf_i = function () {
		var t = new eui.Label();
		this.limitTf = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 257;
		t.y = 111;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.size = 27;
		t.text = "1金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 48;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 27;
		t.text = "5金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 48;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 27;
		t.text = "10金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 48;
		return t;
	};
	_proto.tf_13_i18n_i = function () {
		var t = new eui.Label();
		this.tf_13_i18n = t;
		t.size = 27;
		t.text = "最低入场";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 111;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Image();
		this.item7 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 369.17;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Image();
		this.btn7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 353.17;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Image();
		this.item8 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 370.17;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Image();
		this.btn8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 353.17;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Image();
		this.item9 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 370.17;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Image();
		this.btn9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 353.17;
		return t;
	};
	_proto.item10_i = function () {
		var t = new eui.Image();
		this.item10 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 370.17;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Image();
		this.btn10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 353.17;
		return t;
	};
	_proto.tf7_i = function () {
		var t = new eui.Label();
		this.tf7 = t;
		t.size = 27;
		t.text = "4局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 370.17;
		return t;
	};
	_proto.tf8_i = function () {
		var t = new eui.Label();
		this.tf8 = t;
		t.size = 27;
		t.text = "8局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 370.17;
		return t;
	};
	_proto.tf9_i = function () {
		var t = new eui.Label();
		this.tf9 = t;
		t.size = 27;
		t.text = "16局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 370.17;
		return t;
	};
	_proto.tf10_i = function () {
		var t = new eui.Label();
		this.tf10 = t;
		t.size = 27;
		t.text = "自定义";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 370.17;
		return t;
	};
	_proto.freeRoundTf_i = function () {
		var t = new eui.Label();
		this.freeRoundTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xFFFFFF;
		t.height = 50;
		t.size = 27;
		t.text = "不限制";
		t.textAlign = "center";
		t.textColor = 0x1E1E1E;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 135;
		t.x = 858.36;
		t.y = 359.25;
		return t;
	};
	_proto.tf_5_i18n_i = function () {
		var t = new eui.Label();
		this.tf_5_i18n = t;
		t.size = 27;
		t.text = "总局数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 368.17;
		return t;
	};
	_proto.item40_i = function () {
		var t = new eui.Image();
		this.item40 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 257;
		t.y = 310.68;
		return t;
	};
	_proto.btn40_i = function () {
		var t = new eui.Image();
		this.btn40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 221;
		t.y = 295.68;
		return t;
	};
	_proto.tf_40_i18n_i = function () {
		var t = new eui.Label();
		this.tf_40_i18n = t;
		t.size = 27;
		t.text = "房间公开";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 312.68;
		return t;
	};
	_proto.tf_41_i18n_i = function () {
		var t = new eui.Label();
		this.tf_41_i18n = t;
		t.size = 27;
		t.text = "私密";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 300;
		t.y = 312.68;
		return t;
	};
	return HALLDDZConfigSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/config/HALLEBGConfigSkin.exml'] = window.HALLEBGConfigSkin = (function (_super) {
	__extends(HALLEBGConfigSkin, _super);
	function HALLEBGConfigSkin() {
		_super.call(this);
		this.skinParts = ["item2","btn2","item3","btn3","item16","btn16","item17","btn17","item22","btn22","item23","btn23","item24","btn24","item25","btn25","tf_0_i18n","tf2","tf3","tf16","tf17","limitTf","tf_5_i18n","tf_6_i18n","tf22","tf23","tf24","tf25","item40","btn40","tf_40_i18n","tf_41_i18n"];
		
		this.height = 440;
		this.width = 1110;
		this.elementsContent = [this.item2_i(),this.btn2_i(),this.item3_i(),this.btn3_i(),this.item16_i(),this.btn16_i(),this.item17_i(),this.btn17_i(),this.item22_i(),this.btn22_i(),this.item23_i(),this.btn23_i(),this.item24_i(),this.btn24_i(),this.item25_i(),this.btn25_i(),this.tf_0_i18n_i(),this.tf2_i(),this.tf3_i(),this.tf16_i(),this.tf17_i(),this.limitTf_i(),this.tf_5_i18n_i(),this.tf_6_i18n_i(),this.tf22_i(),this.tf23_i(),this.tf24_i(),this.tf25_i(),this.item40_i(),this.btn40_i(),this.tf_40_i18n_i(),this.tf_41_i18n_i()];
	}
	var _proto = HALLEBGConfigSkin.prototype;

	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 47;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 31;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 48;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 31;
		return t;
	};
	_proto.item16_i = function () {
		var t = new eui.Image();
		this.item16 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 48;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Image();
		this.btn16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 31;
		return t;
	};
	_proto.item17_i = function () {
		var t = new eui.Image();
		this.item17 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 48;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Image();
		this.btn17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 31;
		return t;
	};
	_proto.item22_i = function () {
		var t = new eui.Image();
		this.item22 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 114.35;
		return t;
	};
	_proto.btn22_i = function () {
		var t = new eui.Image();
		this.btn22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 221;
		t.y = 98.35;
		return t;
	};
	_proto.item23_i = function () {
		var t = new eui.Image();
		this.item23 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 115.35;
		return t;
	};
	_proto.btn23_i = function () {
		var t = new eui.Image();
		this.btn23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 377;
		t.y = 98.35;
		return t;
	};
	_proto.item24_i = function () {
		var t = new eui.Image();
		this.item24 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 115.35;
		return t;
	};
	_proto.btn24_i = function () {
		var t = new eui.Image();
		this.btn24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 547;
		t.y = 98.35;
		return t;
	};
	_proto.item25_i = function () {
		var t = new eui.Image();
		this.item25 = t;
		t.source = "HALL_friend_select_png";
		t.x = 725.01;
		t.y = 114.71;
		return t;
	};
	_proto.btn25_i = function () {
		var t = new eui.Image();
		this.btn25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 705.01;
		t.y = 97.71;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.size = 27;
		t.text = "底分选择";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 48;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 27;
		t.text = "1金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 48;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 27;
		t.text = "5金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 48;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 27;
		t.text = "20金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 48;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 27;
		t.text = "50金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 48;
		return t;
	};
	_proto.limitTf_i = function () {
		var t = new eui.Label();
		this.limitTf = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 257;
		t.y = 186.69;
		return t;
	};
	_proto.tf_5_i18n_i = function () {
		var t = new eui.Label();
		this.tf_5_i18n = t;
		t.size = 27;
		t.text = "最低入场";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 186.69;
		return t;
	};
	_proto.tf_6_i18n_i = function () {
		var t = new eui.Label();
		this.tf_6_i18n = t;
		t.size = 27;
		t.text = "总局数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 115.35;
		return t;
	};
	_proto.tf22_i = function () {
		var t = new eui.Label();
		this.tf22 = t;
		t.size = 27;
		t.text = "2局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 115.35;
		return t;
	};
	_proto.tf23_i = function () {
		var t = new eui.Label();
		this.tf23 = t;
		t.size = 27;
		t.text = "3局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 449;
		t.y = 115.35;
		return t;
	};
	_proto.tf24_i = function () {
		var t = new eui.Label();
		this.tf24 = t;
		t.size = 27;
		t.text = "4局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 604;
		t.y = 115.35;
		return t;
	};
	_proto.tf25_i = function () {
		var t = new eui.Label();
		this.tf25 = t;
		t.size = 27;
		t.text = "5局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 762.01;
		t.y = 114.71;
		return t;
	};
	_proto.item40_i = function () {
		var t = new eui.Image();
		this.item40 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 257;
		t.y = 249;
		return t;
	};
	_proto.btn40_i = function () {
		var t = new eui.Image();
		this.btn40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 221;
		t.y = 234;
		return t;
	};
	_proto.tf_40_i18n_i = function () {
		var t = new eui.Label();
		this.tf_40_i18n = t;
		t.size = 27;
		t.text = "房间公开";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 251;
		return t;
	};
	_proto.tf_41_i18n_i = function () {
		var t = new eui.Label();
		this.tf_41_i18n = t;
		t.size = 27;
		t.text = "私密";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 300;
		t.y = 251;
		return t;
	};
	return HALLEBGConfigSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/config/HALLPGPConfigSkin.exml'] = window.HALLPGPConfigSkin = (function (_super) {
	__extends(HALLPGPConfigSkin, _super);
	function HALLPGPConfigSkin() {
		_super.call(this);
		this.skinParts = ["item2","btn2","item3","btn3","item16","btn16","item17","btn17","item22","btn22","item23","btn23","item24","btn24","item25","btn25","tf_0_i18n","tf2","tf3","tf16","tf17","limitTf","tf_7_i18n","tf_6_i18n","tf22","tf23","tf24","tf25","item7","btn7","item8","btn8","item9","btn9","item10","btn10","tf7","tf8","tf9","tf10","freeRoundTf","tf_5_i18n","item40","btn40","tf_40_i18n","tf_41_i18n"];
		
		this.height = 440;
		this.width = 1110;
		this.elementsContent = [this.item2_i(),this.btn2_i(),this.item3_i(),this.btn3_i(),this.item16_i(),this.btn16_i(),this.item17_i(),this.btn17_i(),this.item22_i(),this.btn22_i(),this.item23_i(),this.btn23_i(),this.item24_i(),this.btn24_i(),this.item25_i(),this.btn25_i(),this.tf_0_i18n_i(),this.tf2_i(),this.tf3_i(),this.tf16_i(),this.tf17_i(),this.limitTf_i(),this.tf_7_i18n_i(),this.tf_6_i18n_i(),this.tf22_i(),this.tf23_i(),this.tf24_i(),this.tf25_i(),this.item7_i(),this.btn7_i(),this.item8_i(),this.btn8_i(),this.item9_i(),this.btn9_i(),this.item10_i(),this.btn10_i(),this.tf7_i(),this.tf8_i(),this.tf9_i(),this.tf10_i(),this.freeRoundTf_i(),this.tf_5_i18n_i(),this.item40_i(),this.btn40_i(),this.tf_40_i18n_i(),this.tf_41_i18n_i()];
	}
	var _proto = HALLPGPConfigSkin.prototype;

	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 234;
		t.y = 47;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 199;
		t.y = 31;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "HALL_friend_select_png";
		t.x = 462.64;
		t.y = 48;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 444.64;
		t.y = 31;
		return t;
	};
	_proto.item16_i = function () {
		var t = new eui.Image();
		this.item16 = t;
		t.source = "HALL_friend_select_png";
		t.x = 683.65;
		t.y = 48;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Image();
		this.btn16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 664.65;
		t.y = 31;
		return t;
	};
	_proto.item17_i = function () {
		var t = new eui.Image();
		this.item17 = t;
		t.source = "HALL_friend_select_png";
		t.x = 898.33;
		t.y = 48;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Image();
		this.btn17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 883.33;
		t.y = 31;
		return t;
	};
	_proto.item22_i = function () {
		var t = new eui.Image();
		this.item22 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 234;
		t.y = 114.35;
		return t;
	};
	_proto.btn22_i = function () {
		var t = new eui.Image();
		this.btn22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 199;
		t.y = 98.35;
		return t;
	};
	_proto.item23_i = function () {
		var t = new eui.Image();
		this.item23 = t;
		t.source = "HALL_friend_select_png";
		t.x = 390;
		t.y = 115.35;
		return t;
	};
	_proto.btn23_i = function () {
		var t = new eui.Image();
		this.btn23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 355;
		t.y = 98.35;
		return t;
	};
	_proto.item24_i = function () {
		var t = new eui.Image();
		this.item24 = t;
		t.source = "HALL_friend_select_png";
		t.x = 545;
		t.y = 115.35;
		return t;
	};
	_proto.btn24_i = function () {
		var t = new eui.Image();
		this.btn24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 525;
		t.y = 98.35;
		return t;
	};
	_proto.item25_i = function () {
		var t = new eui.Image();
		this.item25 = t;
		t.source = "HALL_friend_select_png";
		t.x = 703.01;
		t.y = 114.71;
		return t;
	};
	_proto.btn25_i = function () {
		var t = new eui.Image();
		this.btn25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 683.01;
		t.y = 97.71;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.size = 27;
		t.text = "底分选择";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 48;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 27;
		t.text = "0.01/0.02金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 278;
		t.y = 48;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 27;
		t.text = "0.01/0.02金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 495.64;
		t.y = 48;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 27;
		t.text = "0.01/0.02金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 717.65;
		t.y = 48;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 27;
		t.text = "0.01/0.02金币";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 934.33;
		t.y = 48;
		return t;
	};
	_proto.limitTf_i = function () {
		var t = new eui.Label();
		this.limitTf = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 233;
		t.y = 186.69;
		return t;
	};
	_proto.tf_7_i18n_i = function () {
		var t = new eui.Label();
		this.tf_7_i18n = t;
		t.size = 27;
		t.text = "最低入场";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 186.69;
		return t;
	};
	_proto.tf_6_i18n_i = function () {
		var t = new eui.Label();
		this.tf_6_i18n = t;
		t.size = 27;
		t.text = "奖马数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 115.35;
		return t;
	};
	_proto.tf22_i = function () {
		var t = new eui.Label();
		this.tf22 = t;
		t.size = 27;
		t.text = "1次";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 272;
		t.y = 115.35;
		return t;
	};
	_proto.tf23_i = function () {
		var t = new eui.Label();
		this.tf23 = t;
		t.size = 27;
		t.text = "2次";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 423;
		t.y = 115.35;
		return t;
	};
	_proto.tf24_i = function () {
		var t = new eui.Label();
		this.tf24 = t;
		t.size = 27;
		t.text = "3次";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 578;
		t.y = 115.35;
		return t;
	};
	_proto.tf25_i = function () {
		var t = new eui.Label();
		this.tf25 = t;
		t.size = 27;
		t.text = "4次";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 734.01;
		t.y = 114.71;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Image();
		this.item7 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 235;
		t.y = 313.14;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Image();
		this.btn7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 200;
		t.y = 295.81;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Image();
		this.item8 = t;
		t.source = "HALL_friend_select_png";
		t.x = 391;
		t.y = 312.81;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Image();
		this.btn8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 374;
		t.y = 297.15;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Image();
		this.item9 = t;
		t.source = "HALL_friend_select_png";
		t.x = 547;
		t.y = 314.15;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Image();
		this.btn9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 530;
		t.y = 297.15;
		return t;
	};
	_proto.item10_i = function () {
		var t = new eui.Image();
		this.item10 = t;
		t.source = "HALL_friend_select_png";
		t.x = 703;
		t.y = 314.15;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Image();
		this.btn10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 687;
		t.y = 297.15;
		return t;
	};
	_proto.tf7_i = function () {
		var t = new eui.Label();
		this.tf7 = t;
		t.size = 27;
		t.text = "4局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 275;
		t.y = 314.15;
		return t;
	};
	_proto.tf8_i = function () {
		var t = new eui.Label();
		this.tf8 = t;
		t.size = 27;
		t.text = "8局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 426;
		t.y = 314.15;
		return t;
	};
	_proto.tf9_i = function () {
		var t = new eui.Label();
		this.tf9 = t;
		t.size = 27;
		t.text = "16局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 584;
		t.y = 312.81;
		return t;
	};
	_proto.tf10_i = function () {
		var t = new eui.Label();
		this.tf10 = t;
		t.size = 27;
		t.text = "自定义";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 740;
		t.y = 312.81;
		return t;
	};
	_proto.freeRoundTf_i = function () {
		var t = new eui.Label();
		this.freeRoundTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xFFFFFF;
		t.height = 50;
		t.size = 27;
		t.text = "不限制";
		t.textAlign = "center";
		t.textColor = 0x1E1E1E;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 135;
		t.x = 837.36;
		t.y = 301.89;
		return t;
	};
	_proto.tf_5_i18n_i = function () {
		var t = new eui.Label();
		this.tf_5_i18n = t;
		t.size = 27;
		t.text = "总局数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 312.15;
		return t;
	};
	_proto.item40_i = function () {
		var t = new eui.Image();
		this.item40 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 235.72;
		t.y = 249.99;
		return t;
	};
	_proto.btn40_i = function () {
		var t = new eui.Image();
		this.btn40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 199.72;
		t.y = 234.99;
		return t;
	};
	_proto.tf_40_i18n_i = function () {
		var t = new eui.Label();
		this.tf_40_i18n = t;
		t.size = 27;
		t.text = "房间公开";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 251.99;
		return t;
	};
	_proto.tf_41_i18n_i = function () {
		var t = new eui.Label();
		this.tf_41_i18n = t;
		t.size = 27;
		t.text = "私密";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 278.72;
		t.y = 251.99;
		return t;
	};
	return HALLPGPConfigSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/config/HALLXLCHConfigSkin.exml'] = window.HALLXLCHConfigSkin = (function (_super) {
	__extends(HALLXLCHConfigSkin, _super);
	function HALLXLCHConfigSkin() {
		_super.call(this);
		this.skinParts = ["item12","btn12","item0","btn0","item1","btn1","item16","btn16","item17","btn17","tf_2_i18n","tf_3_i18n","tf_4_i18n","tf0","limitTf","tf1","tf16","tf17","tf_9_i18n","item6","item7","btn6","btn7","item8","btn8","item4","btn4","tf6","tf7","tf8","tf4","xipaiGrp","item2","btn2","item3","btn3","item5","btn5","item9","btn9","tf2","tf3","tf5","tf9","freeRoundTf","tf_5_i18n","item40","btn40","tf_40_i18n","tf_41_i18n"];
		
		this.height = 440;
		this.width = 1110;
		this.elementsContent = [this.item12_i(),this.btn12_i(),this.item0_i(),this.btn0_i(),this.item1_i(),this.btn1_i(),this.item16_i(),this.btn16_i(),this.item17_i(),this.btn17_i(),this.tf_2_i18n_i(),this.tf_3_i18n_i(),this.tf_4_i18n_i(),this.tf0_i(),this.limitTf_i(),this.tf1_i(),this.tf16_i(),this.tf17_i(),this.tf_9_i18n_i(),this.xipaiGrp_i(),this.item2_i(),this.btn2_i(),this.item3_i(),this.btn3_i(),this.item5_i(),this.btn5_i(),this.item9_i(),this.btn9_i(),this.tf2_i(),this.tf3_i(),this.tf5_i(),this.tf9_i(),this.freeRoundTf_i(),this.tf_5_i18n_i(),this.item40_i(),this.btn40_i(),this.tf_40_i18n_i(),this.tf_41_i18n_i()];
	}
	var _proto = HALLXLCHConfigSkin.prototype;

	_proto.item12_i = function () {
		var t = new eui.Image();
		this.item12 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 257;
		t.y = 173;
		return t;
	};
	_proto.btn12_i = function () {
		var t = new eui.Image();
		this.btn12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 221;
		t.y = 158;
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Image();
		this.item0 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 47;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 31;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 48;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 31;
		return t;
	};
	_proto.item16_i = function () {
		var t = new eui.Image();
		this.item16 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 48;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Image();
		this.btn16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 31;
		return t;
	};
	_proto.item17_i = function () {
		var t = new eui.Image();
		this.item17 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 48;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Image();
		this.btn17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 31;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.size = 27;
		t.text = "玩法";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 175;
		return t;
	};
	_proto.tf_3_i18n_i = function () {
		var t = new eui.Label();
		this.tf_3_i18n = t;
		t.size = 27;
		t.text = "换三张模式";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 300;
		t.y = 175;
		return t;
	};
	_proto.tf_4_i18n_i = function () {
		var t = new eui.Label();
		this.tf_4_i18n = t;
		t.size = 27;
		t.text = "底分选择";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 48;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 48;
		return t;
	};
	_proto.limitTf_i = function () {
		var t = new eui.Label();
		this.limitTf = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 257;
		t.y = 111;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.size = 27;
		t.text = "1金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 48;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 27;
		t.text = "5金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 48;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 27;
		t.text = "10金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 48;
		return t;
	};
	_proto.tf_9_i18n_i = function () {
		var t = new eui.Label();
		this.tf_9_i18n = t;
		t.size = 27;
		t.text = "最低入场";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 111;
		return t;
	};
	_proto.xipaiGrp_i = function () {
		var t = new eui.Group();
		this.xipaiGrp = t;
		t.x = 446;
		t.y = 159;
		t.elementsContent = [this.item6_i(),this.item7_i(),this.btn6_i(),this.btn7_i(),this.item8_i(),this.btn8_i(),this.item4_i(),this.btn4_i(),this.tf6_i(),this.tf7_i(),this.tf8_i(),this.tf4_i()];
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Image();
		this.item6 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 32.8;
		t.y = 15;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Image();
		this.item7 = t;
		t.source = "HALL_friend_select_png";
		t.x = 205.89;
		t.y = 15;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Image();
		this.btn6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 175;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Image();
		this.btn7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 159.33;
		t.x = 170.89;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Image();
		this.item8 = t;
		t.source = "HALL_friend_select_png";
		t.x = 379.89;
		t.y = 15;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Image();
		this.btn8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 159.33;
		t.x = 344.89;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Image();
		this.item4 = t;
		t.source = "HALL_friend_select_png";
		t.x = 535.89;
		t.y = 15;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Image();
		this.btn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 159.33;
		t.x = 500.89;
		t.y = 0;
		return t;
	};
	_proto.tf6_i = function () {
		var t = new eui.Label();
		this.tf6 = t;
		t.size = 27;
		t.text = "3张";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 80;
		t.y = 17;
		return t;
	};
	_proto.tf7_i = function () {
		var t = new eui.Label();
		this.tf7 = t;
		t.size = 27;
		t.text = "6张";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 249.89;
		t.y = 17;
		return t;
	};
	_proto.tf8_i = function () {
		var t = new eui.Label();
		this.tf8 = t;
		t.size = 27;
		t.text = "6张";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 423.89;
		t.y = 17;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.size = 27;
		t.text = "6张";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 579.89;
		t.y = 17;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 297.17;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 281.17;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 298.17;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 281.17;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Image();
		this.item5 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 298.17;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Image();
		this.btn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 281.17;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Image();
		this.item9 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 298.17;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Image();
		this.btn9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 281.17;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 27;
		t.text = "4局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 298.17;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 27;
		t.text = "8局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 298.17;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.size = 27;
		t.text = "16局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 298.17;
		return t;
	};
	_proto.tf9_i = function () {
		var t = new eui.Label();
		this.tf9 = t;
		t.size = 27;
		t.text = "自定义";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 298.17;
		return t;
	};
	_proto.freeRoundTf_i = function () {
		var t = new eui.Label();
		this.freeRoundTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xFFFFFF;
		t.height = 50;
		t.size = 27;
		t.text = "不限制";
		t.textAlign = "center";
		t.textColor = 0x1E1E1E;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 135;
		t.x = 858.36;
		t.y = 287.25;
		return t;
	};
	_proto.tf_5_i18n_i = function () {
		var t = new eui.Label();
		this.tf_5_i18n = t;
		t.size = 27;
		t.text = "总局数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 296.17;
		return t;
	};
	_proto.item40_i = function () {
		var t = new eui.Image();
		this.item40 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 257;
		t.y = 234.34;
		return t;
	};
	_proto.btn40_i = function () {
		var t = new eui.Image();
		this.btn40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 221;
		t.y = 219.34;
		return t;
	};
	_proto.tf_40_i18n_i = function () {
		var t = new eui.Label();
		this.tf_40_i18n = t;
		t.size = 27;
		t.text = "房间公开";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 236.34;
		return t;
	};
	_proto.tf_41_i18n_i = function () {
		var t = new eui.Label();
		this.tf_41_i18n = t;
		t.size = 27;
		t.text = "私密";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 300;
		t.y = 236.34;
		return t;
	};
	return HALLXLCHConfigSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/config/HALLZJHConfigSkin.exml'] = window.HALLZJHConfigSkin = (function (_super) {
	__extends(HALLZJHConfigSkin, _super);
	function HALLZJHConfigSkin() {
		_super.call(this);
		this.skinParts = ["item2","btn2","item3","btn3","item16","btn16","item17","btn17","item4","btn4","item5","btn5","item6","btn6","item9","btn9","item10","btn10","item11","btn11","item14","btn14","item15","btn15","item19","btn19","item22","btn22","item23","btn23","item24","btn24","item25","btn25","tf25","tf_10_i18n","tf2","tf3","tf16","tf17","limitTf","tf_15_i18n","tf_0_i18n","tf_1_i18n","tf_2_i18n","tf_3_i18n","tf_4_i18n","tf0","tf1","tf112","tf_7_i18n","tf113","tf4","tf5","tf_6_i18n","tf22","tf23","tf24","item26","btn26","item27","btn27","item28","btn28","item29","btn29","tf26","tf27","tf28","tf29","freeRoundTf","tf_5_i18n","item40","btn40","tf_40_i18n","tf_41_i18n"];
		
		this.height = 440;
		this.width = 1110;
		this.elementsContent = [this.item2_i(),this.btn2_i(),this.item3_i(),this.btn3_i(),this.item16_i(),this.btn16_i(),this.item17_i(),this.btn17_i(),this.item4_i(),this.btn4_i(),this.item5_i(),this.btn5_i(),this.item6_i(),this.btn6_i(),this.item9_i(),this.btn9_i(),this.item10_i(),this.btn10_i(),this.item11_i(),this.btn11_i(),this.item14_i(),this.btn14_i(),this.item15_i(),this.btn15_i(),this.item19_i(),this.btn19_i(),this.item22_i(),this.btn22_i(),this.item23_i(),this.btn23_i(),this.item24_i(),this.btn24_i(),this.item25_i(),this.btn25_i(),this.tf25_i(),this.tf_10_i18n_i(),this.tf2_i(),this.tf3_i(),this.tf16_i(),this.tf17_i(),this.limitTf_i(),this.tf_15_i18n_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i(),this.tf_3_i18n_i(),this.tf_4_i18n_i(),this.tf0_i(),this.tf1_i(),this.tf112_i(),this.tf_7_i18n_i(),this.tf113_i(),this.tf4_i(),this.tf5_i(),this.tf_6_i18n_i(),this.tf22_i(),this.tf23_i(),this.tf24_i(),this.item26_i(),this.btn26_i(),this.item27_i(),this.btn27_i(),this.item28_i(),this.btn28_i(),this.item29_i(),this.btn29_i(),this.tf26_i(),this.tf27_i(),this.tf28_i(),this.tf29_i(),this.freeRoundTf_i(),this.tf_5_i18n_i(),this.item40_i(),this.btn40_i(),this.tf_40_i18n_i(),this.tf_41_i18n_i()];
	}
	var _proto = HALLZJHConfigSkin.prototype;

	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 19;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = -1;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 19;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = -1;
		return t;
	};
	_proto.item16_i = function () {
		var t = new eui.Image();
		this.item16 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 19;
		return t;
	};
	_proto.btn16_i = function () {
		var t = new eui.Image();
		this.btn16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 1;
		return t;
	};
	_proto.item17_i = function () {
		var t = new eui.Image();
		this.item17 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 19;
		return t;
	};
	_proto.btn17_i = function () {
		var t = new eui.Image();
		this.btn17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 1;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Image();
		this.item4 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 116;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Image();
		this.btn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 221;
		t.y = 89;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Image();
		this.item5 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 112;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Image();
		this.btn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 377;
		t.y = 89;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Image();
		this.item6 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 112;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Image();
		this.btn6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 533;
		t.y = 89;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Image();
		this.item9 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 213;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Image();
		this.btn9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 221;
		t.y = 191;
		return t;
	};
	_proto.item10_i = function () {
		var t = new eui.Image();
		this.item10 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 216;
		return t;
	};
	_proto.btn10_i = function () {
		var t = new eui.Image();
		this.btn10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 377;
		t.y = 192;
		return t;
	};
	_proto.item11_i = function () {
		var t = new eui.Image();
		this.item11 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 214;
		return t;
	};
	_proto.btn11_i = function () {
		var t = new eui.Image();
		this.btn11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 533;
		t.y = 191;
		return t;
	};
	_proto.item14_i = function () {
		var t = new eui.Image();
		this.item14 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 164;
		return t;
	};
	_proto.btn14_i = function () {
		var t = new eui.Image();
		this.btn14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 221;
		t.y = 144;
		return t;
	};
	_proto.item15_i = function () {
		var t = new eui.Image();
		this.item15 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 165;
		return t;
	};
	_proto.btn15_i = function () {
		var t = new eui.Image();
		this.btn15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 377;
		t.y = 146;
		return t;
	};
	_proto.item19_i = function () {
		var t = new eui.Image();
		this.item19 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 163;
		return t;
	};
	_proto.btn19_i = function () {
		var t = new eui.Image();
		this.btn19 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 533;
		t.y = 146;
		return t;
	};
	_proto.item22_i = function () {
		var t = new eui.Image();
		this.item22 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 261;
		return t;
	};
	_proto.btn22_i = function () {
		var t = new eui.Image();
		this.btn22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 221;
		t.y = 246;
		return t;
	};
	_proto.item23_i = function () {
		var t = new eui.Image();
		this.item23 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 262;
		return t;
	};
	_proto.btn23_i = function () {
		var t = new eui.Image();
		this.btn23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 377;
		t.y = 245;
		return t;
	};
	_proto.item24_i = function () {
		var t = new eui.Image();
		this.item24 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 261;
		return t;
	};
	_proto.btn24_i = function () {
		var t = new eui.Image();
		this.btn24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 533;
		t.y = 246;
		return t;
	};
	_proto.item25_i = function () {
		var t = new eui.Image();
		this.item25 = t;
		t.source = "HALL_friend_select_png";
		t.x = 717;
		t.y = 263;
		return t;
	};
	_proto.btn25_i = function () {
		var t = new eui.Image();
		this.btn25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 683;
		t.y = 245;
		return t;
	};
	_proto.tf25_i = function () {
		var t = new eui.Label();
		this.tf25 = t;
		t.size = 27;
		t.text = "20轮";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 755;
		t.y = 262;
		return t;
	};
	_proto.tf_10_i18n_i = function () {
		var t = new eui.Label();
		this.tf_10_i18n = t;
		t.size = 27;
		t.text = "底分选择";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 21;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 21;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.size = 27;
		t.text = "1金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 21;
		return t;
	};
	_proto.tf16_i = function () {
		var t = new eui.Label();
		this.tf16 = t;
		t.size = 27;
		t.text = "5金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 20;
		return t;
	};
	_proto.tf17_i = function () {
		var t = new eui.Label();
		this.tf17 = t;
		t.size = 27;
		t.text = "10金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 20;
		return t;
	};
	_proto.limitTf_i = function () {
		var t = new eui.Label();
		this.limitTf = t;
		t.size = 27;
		t.text = "0.01金币";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 257;
		t.y = 68;
		return t;
	};
	_proto.tf_15_i18n_i = function () {
		var t = new eui.Label();
		this.tf_15_i18n = t;
		t.size = 27;
		t.text = "最低入场";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 69;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.size = 27;
		t.text = "必闷轮数";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 116;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.size = 27;
		t.text = "不闷";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 116;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.size = 27;
		t.text = "2轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 116;
		return t;
	};
	_proto.tf_3_i18n_i = function () {
		var t = new eui.Label();
		this.tf_3_i18n = t;
		t.size = 27;
		t.text = "5轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 115;
		return t;
	};
	_proto.tf_4_i18n_i = function () {
		var t = new eui.Label();
		this.tf_4_i18n = t;
		t.size = 27;
		t.text = "比牌轮数";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 215;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.size = 27;
		t.text = "1轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 214;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.size = 27;
		t.text = "2轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 215;
		return t;
	};
	_proto.tf112_i = function () {
		var t = new eui.Label();
		this.tf112 = t;
		t.size = 27;
		t.text = "5轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 218;
		return t;
	};
	_proto.tf_7_i18n_i = function () {
		var t = new eui.Label();
		this.tf_7_i18n = t;
		t.size = 27;
		t.text = "必跟轮数";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 167;
		return t;
	};
	_proto.tf113_i = function () {
		var t = new eui.Label();
		this.tf113 = t;
		t.size = 27;
		t.text = "不跟";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 166;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.size = 27;
		t.text = "2轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 167;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.size = 27;
		t.text = "5轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 166;
		return t;
	};
	_proto.tf_6_i18n_i = function () {
		var t = new eui.Label();
		this.tf_6_i18n = t;
		t.size = 27;
		t.text = "开牌轮数";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 262;
		return t;
	};
	_proto.tf22_i = function () {
		var t = new eui.Label();
		this.tf22 = t;
		t.size = 27;
		t.text = "10轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 264;
		return t;
	};
	_proto.tf23_i = function () {
		var t = new eui.Label();
		this.tf23 = t;
		t.size = 27;
		t.text = "15轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 265;
		return t;
	};
	_proto.tf24_i = function () {
		var t = new eui.Label();
		this.tf24 = t;
		t.size = 27;
		t.text = "20轮";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 264;
		return t;
	};
	_proto.item26_i = function () {
		var t = new eui.Image();
		this.item26 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 256;
		t.y = 360.16;
		return t;
	};
	_proto.btn26_i = function () {
		var t = new eui.Image();
		this.btn26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 221;
		t.y = 347.16;
		return t;
	};
	_proto.item27_i = function () {
		var t = new eui.Image();
		this.item27 = t;
		t.source = "HALL_friend_select_png";
		t.x = 412;
		t.y = 362.16;
		return t;
	};
	_proto.btn27_i = function () {
		var t = new eui.Image();
		this.btn27 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 394;
		t.y = 346.16;
		return t;
	};
	_proto.item28_i = function () {
		var t = new eui.Image();
		this.item28 = t;
		t.source = "HALL_friend_select_png";
		t.x = 567;
		t.y = 365.16;
		return t;
	};
	_proto.btn28_i = function () {
		var t = new eui.Image();
		this.btn28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 550;
		t.y = 350.16;
		return t;
	};
	_proto.item29_i = function () {
		var t = new eui.Image();
		this.item29 = t;
		t.source = "HALL_friend_select_png";
		t.x = 723;
		t.y = 365.16;
		return t;
	};
	_proto.btn29_i = function () {
		var t = new eui.Image();
		this.btn29 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 152;
		t.x = 708;
		t.y = 345.16;
		return t;
	};
	_proto.tf26_i = function () {
		var t = new eui.Label();
		this.tf26 = t;
		t.size = 27;
		t.text = "4局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 296;
		t.y = 362.16;
		return t;
	};
	_proto.tf27_i = function () {
		var t = new eui.Label();
		this.tf27 = t;
		t.size = 27;
		t.text = "8局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 447;
		t.y = 358.16;
		return t;
	};
	_proto.tf28_i = function () {
		var t = new eui.Label();
		this.tf28 = t;
		t.size = 27;
		t.text = "16局";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 605;
		t.y = 359.16;
		return t;
	};
	_proto.tf29_i = function () {
		var t = new eui.Label();
		this.tf29 = t;
		t.size = 27;
		t.text = "自定义";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 761;
		t.y = 359.16;
		return t;
	};
	_proto.freeRoundTf_i = function () {
		var t = new eui.Label();
		this.freeRoundTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xFFFFFF;
		t.height = 50;
		t.size = 27;
		t.text = "不限制";
		t.textAlign = "center";
		t.textColor = 0x1E1E1E;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		t.width = 135;
		t.x = 858.36;
		t.y = 346.24;
		return t;
	};
	_proto.tf_5_i18n_i = function () {
		var t = new eui.Label();
		this.tf_5_i18n = t;
		t.size = 27;
		t.text = "总局数";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 359.16;
		return t;
	};
	_proto.item40_i = function () {
		var t = new eui.Image();
		this.item40 = t;
		t.source = "HALL_friend_select4_png";
		t.x = 257;
		t.y = 307;
		return t;
	};
	_proto.btn40_i = function () {
		var t = new eui.Image();
		this.btn40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 214;
		t.x = 221;
		t.y = 292;
		return t;
	};
	_proto.tf_40_i18n_i = function () {
		var t = new eui.Label();
		this.tf_40_i18n = t;
		t.size = 27;
		t.text = "房间公开";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 50;
		t.y = 309;
		return t;
	};
	_proto.tf_41_i18n_i = function () {
		var t = new eui.Label();
		this.tf_41_i18n = t;
		t.size = 27;
		t.text = "私密";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 300;
		t.y = 309;
		return t;
	};
	return HALLZJHConfigSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/HALLCreateRoomSkin.exml'] = window.HALLCreateRoomSkin = (function (_super) {
	__extends(HALLCreateRoomSkin, _super);
	function HALLCreateRoomSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","tf","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLCreateRoomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1200;
		t.elementsContent = [this._Image2_i(),this.okBtn_i(),this.tf_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new HALL.XYButton();
		this.okBtn = t;
		t.a_label = "创建房间";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 25;
		t.anchorOffsetX = 131;
		t.anchorOffsetY = 33;
		t.height = 65;
		t.horizontalCenter = 0;
		t.skinName = "XYButtonSkin";
		t.width = 266;
		t.y = 553;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "创建房间-斗地主";
		t.y = 16.04;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 30;
		t.source = "HALL_close_btn_png";
		t.x = 1200;
		t.y = -2;
		return t;
	};
	return HALLCreateRoomSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/HALLFriendGameListSkin.exml'] = window.HALLFriendGameListSkin = (function (_super) {
	__extends(HALLFriendGameListSkin, _super);
	function HALLFriendGameListSkin() {
		_super.call(this);
		this.skinParts = ["tmp0","tmp1","tmp2","ctx","scl"];
		
		this.height = 516;
		this.width = 1334;
		this.elementsContent = [this.scl_i()];
	}
	var _proto = HALLFriendGameListSkin.prototype;

	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 516;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1294;
		t.x = 20;
		t.y = 0;
		t.viewport = this.ctx_i();
		return t;
	};
	_proto.ctx_i = function () {
		var t = new eui.Group();
		this.ctx = t;
		t.elementsContent = [this.tmp0_i(),this.tmp1_i(),this.tmp2_i()];
		return t;
	};
	_proto.tmp0_i = function () {
		var t = new eui.Image();
		this.tmp0 = t;
		t.source = "HALL_icon_DDZ_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tmp1_i = function () {
		var t = new eui.Image();
		this.tmp1 = t;
		t.source = "HALL_icon_DDZ_png";
		t.x = 243;
		t.y = 0;
		return t;
	};
	_proto.tmp2_i = function () {
		var t = new eui.Image();
		this.tmp2 = t;
		t.source = "HALL_icon_DDZ_png";
		t.x = 0;
		t.y = 268;
		return t;
	};
	return HALLFriendGameListSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/HALLFriendJoinSkin.exml'] = window.HALLFriendJoinSkin = (function (_super) {
	__extends(HALLFriendJoinSkin, _super);
	function HALLFriendJoinSkin() {
		_super.call(this);
		this.skinParts = ["num1","num2","num3","num4","num5","num6","num7","num8","num9","num10","num11","num12","okBtn","closeBtn","joinTf_i18n","enterTf_i18n","tf0","tf1","tf2","tf3","tf4","tf5","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLFriendJoinSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1200;
		t.elementsContent = [this._Image2_i(),this.num1_i(),this.num2_i(),this.num3_i(),this.num4_i(),this.num5_i(),this.num6_i(),this.num7_i(),this.num8_i(),this.num9_i(),this.num10_i(),this.num11_i(),this.num12_i(),this._BitmapLabel1_i(),this._BitmapLabel2_i(),this._BitmapLabel3_i(),this._BitmapLabel4_i(),this._BitmapLabel5_i(),this._BitmapLabel6_i(),this._BitmapLabel7_i(),this._BitmapLabel8_i(),this._BitmapLabel9_i(),this._BitmapLabel10_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.okBtn_i(),this.closeBtn_i(),this.joinTf_i18n_i(),this.enterTf_i18n_i(),this.tf0_i(),this.tf1_i(),this.tf2_i(),this.tf3_i(),this.tf4_i(),this.tf5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.num1_i = function () {
		var t = new eui.Image();
		this.num1 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 50;
		t.y = 127;
		return t;
	};
	_proto.num2_i = function () {
		var t = new eui.Image();
		this.num2 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 234;
		t.y = 127;
		return t;
	};
	_proto.num3_i = function () {
		var t = new eui.Image();
		this.num3 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 421;
		t.y = 127;
		return t;
	};
	_proto.num4_i = function () {
		var t = new eui.Image();
		this.num4 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 50;
		t.y = 246;
		return t;
	};
	_proto.num5_i = function () {
		var t = new eui.Image();
		this.num5 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 234;
		t.y = 246;
		return t;
	};
	_proto.num6_i = function () {
		var t = new eui.Image();
		this.num6 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 421;
		t.y = 246;
		return t;
	};
	_proto.num7_i = function () {
		var t = new eui.Image();
		this.num7 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 50;
		t.y = 364;
		return t;
	};
	_proto.num8_i = function () {
		var t = new eui.Image();
		this.num8 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 234;
		t.y = 364;
		return t;
	};
	_proto.num9_i = function () {
		var t = new eui.Image();
		this.num9 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 421;
		t.y = 364;
		return t;
	};
	_proto.num10_i = function () {
		var t = new eui.Image();
		this.num10 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 50;
		t.y = 483;
		return t;
	};
	_proto.num11_i = function () {
		var t = new eui.Image();
		this.num11 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 234;
		t.y = 483;
		return t;
	};
	_proto.num12_i = function () {
		var t = new eui.Image();
		this.num12 = t;
		t.source = "HALL_friend_input_btn1_png";
		t.x = 421;
		t.y = 483;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "1";
		t.touchEnabled = false;
		t.x = 106;
		t.y = 151;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "2";
		t.touchEnabled = false;
		t.x = 290;
		t.y = 151;
		return t;
	};
	_proto._BitmapLabel3_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "3";
		t.touchEnabled = false;
		t.x = 477;
		t.y = 151;
		return t;
	};
	_proto._BitmapLabel4_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "4";
		t.touchEnabled = false;
		t.x = 106;
		t.y = 270;
		return t;
	};
	_proto._BitmapLabel5_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "5";
		t.touchEnabled = false;
		t.x = 290;
		t.y = 270;
		return t;
	};
	_proto._BitmapLabel6_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "6";
		t.touchEnabled = false;
		t.x = 477;
		t.y = 270;
		return t;
	};
	_proto._BitmapLabel7_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "7";
		t.touchEnabled = false;
		t.x = 106;
		t.y = 388;
		return t;
	};
	_proto._BitmapLabel8_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "8";
		t.touchEnabled = false;
		t.x = 290;
		t.y = 388;
		return t;
	};
	_proto._BitmapLabel9_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "0";
		t.touchEnabled = false;
		t.x = 290;
		t.y = 507;
		return t;
	};
	_proto._BitmapLabel10_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "HALL_friend_num_fnt";
		t.text = "9";
		t.touchEnabled = false;
		t.x = 477;
		t.y = 388;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_delete_png";
		t.touchEnabled = false;
		t.x = 445;
		t.y = 500;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_clear_png";
		t.touchEnabled = false;
		t.x = 74;
		t.y = 500;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_circle_bg_png";
		t.x = 635;
		t.y = 238;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_circle_bg_png";
		t.x = 721;
		t.y = 238;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_circle_bg_png";
		t.x = 806;
		t.y = 238;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_circle_bg_png";
		t.x = 891;
		t.y = 238;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_circle_bg_png";
		t.x = 976;
		t.y = 238;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "HALL_friend_circle_bg_png";
		t.x = 1060;
		t.y = 238;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.source = "HALL_ok_btn_png";
		t.x = 758;
		t.y = 434;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 30;
		t.source = "HALL_close_btn_png";
		t.x = 1191;
		t.y = 6;
		return t;
	};
	_proto.joinTf_i18n_i = function () {
		var t = new eui.Label();
		this.joinTf_i18n = t;
		t.bold = true;
		t.size = 40;
		t.text = "加入房间";
		t.x = 518;
		t.y = 16.04;
		return t;
	};
	_proto.enterTf_i18n_i = function () {
		var t = new eui.Label();
		this.enterTf_i18n = t;
		t.bold = true;
		t.horizontalCenter = 284;
		t.text = "请输入房间号";
		t.y = 159;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xffbe00;
		t.width = 45;
		t.x = 651;
		t.y = 258;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFBE00;
		t.width = 45;
		t.x = 737;
		t.y = 258;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFBE00;
		t.width = 45;
		t.x = 822;
		t.y = 258;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new eui.Label();
		this.tf3 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFBE00;
		t.width = 45;
		t.x = 907;
		t.y = 258;
		return t;
	};
	_proto.tf4_i = function () {
		var t = new eui.Label();
		this.tf4 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFBE00;
		t.width = 45;
		t.x = 992;
		t.y = 258;
		return t;
	};
	_proto.tf5_i = function () {
		var t = new eui.Label();
		this.tf5 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFBE00;
		t.width = 45;
		t.x = 1076;
		t.y = 258;
		return t;
	};
	return HALLFriendJoinSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/friend/HALLFriendMainSkin.exml'] = window.HALLFriendMainSkin = (function (_super) {
	__extends(HALLFriendMainSkin, _super);
	function HALLFriendMainSkin() {
		_super.call(this);
		this.skinParts = ["createBtn","joinBtn","roomListBtn"];
		
		this.height = 516;
		this.width = 1334;
		this.elementsContent = [this.createBtn_i(),this.joinBtn_i(),this.roomListBtn_i()];
	}
	var _proto = HALLFriendMainSkin.prototype;

	_proto.createBtn_i = function () {
		var t = new eui.Image();
		this.createBtn = t;
		t.height = 511;
		t.source = "HALL_alpha_mask_png";
		t.width = 637;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.joinBtn_i = function () {
		var t = new eui.Image();
		this.joinBtn = t;
		t.height = 255;
		t.source = "HALL_alpha_mask_png";
		t.width = 637;
		t.x = 675;
		t.y = 0;
		return t;
	};
	_proto.roomListBtn_i = function () {
		var t = new eui.Image();
		this.roomListBtn = t;
		t.height = 255;
		t.source = "HALL_alpha_mask_png";
		t.width = 637;
		t.x = 675;
		t.y = 256;
		return t;
	};
	return HALLFriendMainSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BJL_ItemSkin.exml'] = window.HALL_History_BJL_ItemSkin = (function (_super) {
	__extends(HALL_History_BJL_ItemSkin, _super);
	function HALL_History_BJL_ItemSkin() {
		_super.call(this);
		this.skinParts = ["image_source"];
		
		this.elementsContent = [this.image_source_i()];
	}
	var _proto = HALL_History_BJL_ItemSkin.prototype;

	_proto.image_source_i = function () {
		var t = new eui.Image();
		this.image_source = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "poker_card_1a_png";
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALL_History_BJL_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BJL_Skin.exml'] = window.HALL_History_BJL_Skin = (function (_super) {
	__extends(HALL_History_BJL_Skin, _super);
	function HALL_History_BJL_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","item0","item1","item2","item3","item4","item5","tf_1_i18n","titleTf","closeGrp","infoTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_BJL_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this.tf_0_i18n_i(),this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.tf_1_i18n_i(),this.titleTf_i(),this.closeGrp_i(),this.infoTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.text = "闲";
		t.textAlign = "center";
		t.width = 66;
		t.x = 337.46;
		t.y = 314;
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_BJL_Item();
		this.item0 = t;
		t.skinName = "HALL_History_BJL_ItemSkin";
		t.x = 203.97;
		t.y = 145;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_BJL_Item();
		this.item1 = t;
		t.skinName = "HALL_History_BJL_ItemSkin";
		t.x = 319.97;
		t.y = 145;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_BJL_Item();
		this.item2 = t;
		t.skinName = "HALL_History_BJL_ItemSkin";
		t.x = 441.97;
		t.y = 145;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_BJL_Item();
		this.item3 = t;
		t.skinName = "HALL_History_BJL_ItemSkin";
		t.x = 707.91;
		t.y = 145;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_BJL_Item();
		this.item4 = t;
		t.skinName = "HALL_History_BJL_ItemSkin";
		t.x = 823.91;
		t.y = 145;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_BJL_Item();
		this.item5 = t;
		t.skinName = "HALL_History_BJL_ItemSkin";
		t.x = 945.91;
		t.y = 145;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.text = "庄";
		t.textAlign = "center";
		t.width = 66;
		t.x = 839.64;
		t.y = 314;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 263.99;
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "";
		t.textAlign = "center";
		t.width = 920.72;
		t.y = 349.04;
		return t;
	};
	return HALL_History_BJL_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BRNN_GINAR_Skin.exml'] = window.HALL_History_BRNN_GINAR_Skin = (function (_super) {
	__extends(HALL_History_BRNN_GINAR_Skin, _super);
	var HALL_History_BRNN_GINAR_Skin$Skin3 = 	(function (_super) {
		__extends(HALL_History_BRNN_GINAR_Skin$Skin3, _super);
		var HALL_History_BRNN_GINAR_Skin$Skin3$Skin4 = 		(function (_super) {
			__extends(HALL_History_BRNN_GINAR_Skin$Skin3$Skin4, _super);
			function HALL_History_BRNN_GINAR_Skin$Skin3$Skin4() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_BRNN_GINAR_Skin$Skin3$Skin4.prototype;

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
			return HALL_History_BRNN_GINAR_Skin$Skin3$Skin4;
		})(eui.Skin);

		function HALL_History_BRNN_GINAR_Skin$Skin3() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_BRNN_GINAR_Skin$Skin3.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_BRNN_GINAR_Skin$Skin3$Skin4;
			return t;
		};
		return HALL_History_BRNN_GINAR_Skin$Skin3;
	})(eui.Skin);

	function HALL_History_BRNN_GINAR_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","blockTf","titleTf","tf_1_i18n0","verifyBtn","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_BRNN_GINAR_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.noMoreTf_i(),this.blockTf_i(),this.titleTf_i(),this.verifyBtn_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 75.35;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "区域";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 134;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 586;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1028;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 123.35;
		t.skinName = HALL_History_BRNN_GINAR_Skin$Skin3;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 300;
		return t;
	};
	_proto.blockTf_i = function () {
		var t = new eui.Label();
		this.blockTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 24;
		t.text = "区块:0xa205cac931ff7e4a90810aeda765ce23ceac26f67755e0d5e2bf0c012045ea65";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 133.69;
		t.y = 574.73;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.verifyBtn_i = function () {
		var t = new eui.Group();
		this.verifyBtn = t;
		t.height = 155;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 155;
		t.x = 1113;
		t.y = 543.35;
		t.elementsContent = [this._Image4_i(),this.tf_1_i18n0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sgj_verify_btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_1_i18n0_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n0 = t;
		t.bold = true;
		t.horizontalCenter = -2.5;
		t.italic = true;
		t.size = 34;
		t.text = "区块链";
		t.y = 81.92;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_BRNN_GINAR_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BRNN_RenderSkin.exml'] = window.HALL_History_BRNN_RenderSkin = (function (_super) {
	__extends(HALL_History_BRNN_RenderSkin, _super);
	function HALL_History_BRNN_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickTf","scoreTf","card0","card1","card2","card3","card4"];
		
		this.height = 88;
		this.width = 1200;
		this.elementsContent = [this.nickTf_i(),this.scoreTf_i(),this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i()];
	}
	var _proto = HALL_History_BRNN_RenderSkin.prototype;

	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -446;
		t.size = 28;
		t.text = "1234567890abc";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 444;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "+123456,78";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 482.43;
		t.y = 9;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 532.43;
		t.y = 9;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 582.43;
		t.y = 9;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Image();
		this.card3 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 632.43;
		t.y = 9;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Image();
		this.card4 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 682.43;
		t.y = 9;
		return t;
	};
	return HALL_History_BRNN_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BRNN_Skin.exml'] = window.HALL_History_BRNN_Skin = (function (_super) {
	__extends(HALL_History_BRNN_Skin, _super);
	var HALL_History_BRNN_Skin$Skin5 = 	(function (_super) {
		__extends(HALL_History_BRNN_Skin$Skin5, _super);
		var HALL_History_BRNN_Skin$Skin5$Skin6 = 		(function (_super) {
			__extends(HALL_History_BRNN_Skin$Skin5$Skin6, _super);
			function HALL_History_BRNN_Skin$Skin5$Skin6() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_BRNN_Skin$Skin5$Skin6.prototype;

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
			return HALL_History_BRNN_Skin$Skin5$Skin6;
		})(eui.Skin);

		function HALL_History_BRNN_Skin$Skin5() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_BRNN_Skin$Skin5.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_BRNN_Skin$Skin5$Skin6;
			return t;
		};
		return HALL_History_BRNN_Skin$Skin5;
	})(eui.Skin);

	function HALL_History_BRNN_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_BRNN_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.noMoreTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "区域";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 134;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 586;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1028;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_BRNN_Skin$Skin5;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 300;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_BRNN_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BRSB_Skin.exml'] = window.HALL_History_BRSB_Skin = (function (_super) {
	__extends(HALL_History_BRSB_Skin, _super);
	function HALL_History_BRSB_Skin() {
		_super.call(this);
		this.skinParts = ["image_0","image_1","image_2","infoTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_BRSB_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.infoTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 126;
		t.elementsContent = [this.image_0_i(),this.image_1_i(),this.image_2_i()];
		return t;
	};
	_proto.image_0_i = function () {
		var t = new eui.Image();
		this.image_0 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "BRSB_pic_2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_1_i = function () {
		var t = new eui.Image();
		this.image_1 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "BRSB_pic_2_png";
		t.x = 102;
		t.y = 0;
		return t;
	};
	_proto.image_2_i = function () {
		var t = new eui.Image();
		this.image_2 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "BRSB_pic_2_png";
		t.x = 204;
		t.y = 0;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.y = 237.55;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_BRSB_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BY3D_RenderSkin.exml'] = window.HALL_History_BY3D_RenderSkin = (function (_super) {
	__extends(HALL_History_BY3D_RenderSkin, _super);
	function HALL_History_BY3D_RenderSkin() {
		_super.call(this);
		this.skinParts = ["iconImg","tf"];
		
		this.width = 260;
		this.elementsContent = [this.iconImg_i(),this.tf_i()];
	}
	var _proto = HALL_History_BY3D_RenderSkin.prototype;

	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.height = 132;
		t.source = "fish_1_png";
		t.width = 130;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.text = "x123456";
		t.x = 134;
		t.y = 51;
		return t;
	};
	return HALL_History_BY3D_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_BY3D_Skin.exml'] = window.HALL_History_BY3D_Skin = (function (_super) {
	__extends(HALL_History_BY3D_Skin, _super);
	var HALL_History_BY3D_Skin$Skin7 = 	(function (_super) {
		__extends(HALL_History_BY3D_Skin$Skin7, _super);
		var HALL_History_BY3D_Skin$Skin7$Skin8 = 		(function (_super) {
			__extends(HALL_History_BY3D_Skin$Skin7$Skin8, _super);
			function HALL_History_BY3D_Skin$Skin7$Skin8() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_BY3D_Skin$Skin7$Skin8.prototype;

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
			return HALL_History_BY3D_Skin$Skin7$Skin8;
		})(eui.Skin);

		function HALL_History_BY3D_Skin$Skin7() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_BY3D_Skin$Skin7.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_BY3D_Skin$Skin7$Skin8;
			return t;
		};
		return HALL_History_BY3D_Skin$Skin7;
	})(eui.Skin);

	function HALL_History_BY3D_Skin() {
		_super.call(this);
		this.skinParts = ["fireCountTf","hitCountTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_BY3D_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.fireCountTf_i(),this.hitCountTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.fireCountTf_i = function () {
		var t = new eui.Label();
		this.fireCountTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "开炮数：12346";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.hitCountTf_i = function () {
		var t = new eui.Label();
		this.hitCountTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "命中鱼数：12345";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "总输赢：-1234.56";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 149.16;
		t.skinName = HALL_History_BY3D_Skin$Skin7;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_BY3D_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_CDD_ItemSkin.exml'] = window.HALL_History_CDD_ItemSkin = (function (_super) {
	__extends(HALL_History_CDD_ItemSkin, _super);
	function HALL_History_CDD_ItemSkin() {
		_super.call(this);
		this.skinParts = ["image_source"];
		
		this.height = 80;
		this.width = 60;
		this.elementsContent = [this.image_source_i()];
	}
	var _proto = HALL_History_CDD_ItemSkin.prototype;

	_proto.image_source_i = function () {
		var t = new eui.Image();
		this.image_source = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.source = "poker_card_1a_png";
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALL_History_CDD_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_DDZ_ItemSkin.exml'] = window.HALL_History_DDZ_ItemSkin = (function (_super) {
	__extends(HALL_History_DDZ_ItemSkin, _super);
	function HALL_History_DDZ_ItemSkin() {
		_super.call(this);
		this.skinParts = ["image_source"];
		
		this.height = 80;
		this.width = 60;
		this.elementsContent = [this.image_source_i()];
	}
	var _proto = HALL_History_DDZ_ItemSkin.prototype;

	_proto.image_source_i = function () {
		var t = new eui.Image();
		this.image_source = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.source = "poker_card_1a_png";
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALL_History_DDZ_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_CDD_RenderSkin.exml'] = window.HALL_History_CDD_RenderSkin = (function (_super) {
	__extends(HALL_History_CDD_RenderSkin, _super);
	function HALL_History_CDD_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","conContainer","moneyTf"];
		
		this.height = 115;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_CDD_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 4;
		t.y = 44.34;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item0 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item1 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item2 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item3 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 117;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item4 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item5 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 194;
		t.y = 0;
		return t;
	};
	_proto.item6_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item6 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 234;
		t.y = 0;
		return t;
	};
	_proto.item7_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item7 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 273;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item8 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 312;
		t.y = 0;
		return t;
	};
	_proto.item9_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item9 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 352;
		t.y = 0;
		return t;
	};
	_proto.item10_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item10 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 393;
		t.y = 0;
		return t;
	};
	_proto.item11_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item11 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 433;
		t.y = 0;
		return t;
	};
	_proto.item12_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item12 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 472;
		t.y = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 1082.67;
		t.y = 57;
		return t;
	};
	return HALL_History_CDD_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_CDD_Skin.exml'] = window.HALL_History_CDD_Skin = (function (_super) {
	__extends(HALL_History_CDD_Skin, _super);
	var HALL_History_CDD_Skin$Skin9 = 	(function (_super) {
		__extends(HALL_History_CDD_Skin$Skin9, _super);
		var HALL_History_CDD_Skin$Skin9$Skin10 = 		(function (_super) {
			__extends(HALL_History_CDD_Skin$Skin9$Skin10, _super);
			function HALL_History_CDD_Skin$Skin9$Skin10() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_CDD_Skin$Skin9$Skin10.prototype;

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
			return HALL_History_CDD_Skin$Skin9$Skin10;
		})(eui.Skin);

		function HALL_History_CDD_Skin$Skin9() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_CDD_Skin$Skin9.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_CDD_Skin$Skin9$Skin10;
			return t;
		};
		return HALL_History_CDD_Skin$Skin9;
	})(eui.Skin);

	function HALL_History_CDD_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_CDD_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_CDD_Skin$Skin9;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_CDD_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_DDZ_RenderSkin.exml'] = window.HALL_History_DDZ_RenderSkin = (function (_super) {
	__extends(HALL_History_DDZ_RenderSkin, _super);
	function HALL_History_DDZ_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","item15","item16","item17","item18","item19","conContainer","moneyTf"];
		
		this.height = 115;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_DDZ_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136.34;
		t.x = 4;
		t.y = 44.34;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i(),this.item13_i(),this.item14_i(),this.item15_i(),this.item16_i(),this.item17_i(),this.item18_i(),this.item19_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item0 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item1 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item2 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item3 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 117;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item4 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 155;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item5 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 194;
		t.y = 0;
		return t;
	};
	_proto.item6_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item6 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 234;
		t.y = 0;
		return t;
	};
	_proto.item7_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item7 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 273;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item8 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 312;
		t.y = 0;
		return t;
	};
	_proto.item9_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item9 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 352;
		t.y = 0;
		return t;
	};
	_proto.item10_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item10 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 393;
		t.y = 0;
		return t;
	};
	_proto.item11_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item11 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 433;
		t.y = 0;
		return t;
	};
	_proto.item12_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item12 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 472;
		t.y = 0;
		return t;
	};
	_proto.item13_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item13 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 510;
		t.y = 0;
		return t;
	};
	_proto.item14_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item14 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 549;
		t.y = 0;
		return t;
	};
	_proto.item15_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item15 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 588;
		t.y = 0;
		return t;
	};
	_proto.item16_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item16 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 628;
		t.y = 0;
		return t;
	};
	_proto.item17_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item17 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 669;
		t.y = 0;
		return t;
	};
	_proto.item18_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item18 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 709;
		t.y = 0;
		return t;
	};
	_proto.item19_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.item19 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 746.09;
		t.y = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 1082.67;
		t.y = 57;
		return t;
	};
	return HALL_History_DDZ_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_DDZ_Skin.exml'] = window.HALL_History_DDZ_Skin = (function (_super) {
	__extends(HALL_History_DDZ_Skin, _super);
	var HALL_History_DDZ_Skin$Skin11 = 	(function (_super) {
		__extends(HALL_History_DDZ_Skin$Skin11, _super);
		var HALL_History_DDZ_Skin$Skin11$Skin12 = 		(function (_super) {
			__extends(HALL_History_DDZ_Skin$Skin11$Skin12, _super);
			function HALL_History_DDZ_Skin$Skin11$Skin12() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_DDZ_Skin$Skin11$Skin12.prototype;

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
			return HALL_History_DDZ_Skin$Skin11$Skin12;
		})(eui.Skin);

		function HALL_History_DDZ_Skin$Skin11() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_DDZ_Skin$Skin11.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_DDZ_Skin$Skin11$Skin12;
			return t;
		};
		return HALL_History_DDZ_Skin$Skin11;
	})(eui.Skin);

	function HALL_History_DDZ_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","tf_0_i18n","dealItem0","dealItem1","dealItem2","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_DDZ_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i(),this.tf_0_i18n_i(),this.dealItem0_i(),this.dealItem1_i(),this.dealItem2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 193.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 350;
		t.width = 1200;
		t.x = 0;
		t.y = 274;
		t.skinName = HALL_History_DDZ_Skin$Skin11;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.text = "地主牌";
		t.textAlign = "center";
		t.width = 110;
		t.x = 36;
		t.y = 120.78;
		return t;
	};
	_proto.dealItem0_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.dealItem0 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 523.01;
		t.y = 96.24;
		return t;
	};
	_proto.dealItem1_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.dealItem1 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 584.53;
		t.y = 96.24;
		return t;
	};
	_proto.dealItem2_i = function () {
		var t = new HALL.HALL_History_DDZ_Item();
		this.dealItem2 = t;
		t.skinName = "HALL_History_DDZ_ItemSkin";
		t.x = 646.03;
		t.y = 96.24;
		return t;
	};
	return HALL_History_DDZ_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_DZPK_RenderSkin.exml'] = window.HALL_History_DZPK_RenderSkin = (function (_super) {
	__extends(HALL_History_DZPK_RenderSkin, _super);
	function HALL_History_DZPK_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickTf","scoreTf","card0","card1"];
		
		this.height = 88;
		this.width = 1200;
		this.elementsContent = [this.nickTf_i(),this.scoreTf_i(),this.card0_i(),this.card1_i()];
	}
	var _proto = HALL_History_DZPK_RenderSkin.prototype;

	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -418.5;
		t.size = 28;
		t.text = "1234567890abc";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 444;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "+123456,78";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 566.43;
		t.y = 9;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 616.43;
		t.y = 9;
		return t;
	};
	return HALL_History_DZPK_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_DZPK_Skin.exml'] = window.HALL_History_DZPK_Skin = (function (_super) {
	__extends(HALL_History_DZPK_Skin, _super);
	var HALL_History_DZPK_Skin$Skin13 = 	(function (_super) {
		__extends(HALL_History_DZPK_Skin$Skin13, _super);
		var HALL_History_DZPK_Skin$Skin13$Skin14 = 		(function (_super) {
			__extends(HALL_History_DZPK_Skin$Skin13$Skin14, _super);
			function HALL_History_DZPK_Skin$Skin13$Skin14() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_DZPK_Skin$Skin13$Skin14.prototype;

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
			return HALL_History_DZPK_Skin$Skin13$Skin14;
		})(eui.Skin);

		function HALL_History_DZPK_Skin$Skin13() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_DZPK_Skin$Skin13.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_DZPK_Skin$Skin13$Skin14;
			return t;
		};
		return HALL_History_DZPK_Skin$Skin13;
	})(eui.Skin);

	function HALL_History_DZPK_Skin() {
		_super.call(this);
		this.skinParts = ["publicCards","p0","p1","p2","p3","p4","tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_DZPK_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Group2_i(),this.scl_i(),this.noMoreTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 1200;
		t.x = 0;
		t.y = 97;
		t.elementsContent = [this.publicCards_i(),this.p0_i(),this.p1_i(),this.p2_i(),this.p3_i(),this.p4_i()];
		return t;
	};
	_proto.publicCards_i = function () {
		var t = new eui.Label();
		this.publicCards = t;
		t.text = "公共牌";
		t.x = 128;
		t.y = 19;
		return t;
	};
	_proto.p0_i = function () {
		var t = new eui.Image();
		this.p0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 493.09;
		t.y = 0;
		return t;
	};
	_proto.p1_i = function () {
		var t = new eui.Image();
		this.p1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 543.09;
		t.y = 0;
		return t;
	};
	_proto.p2_i = function () {
		var t = new eui.Image();
		this.p2 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 593.76;
		t.y = 0;
		return t;
	};
	_proto.p3_i = function () {
		var t = new eui.Image();
		this.p3 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 643.09;
		t.y = 0;
		return t;
	};
	_proto.p4_i = function () {
		var t = new eui.Image();
		this.p4 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 693.42;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 176;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 137;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 586;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1028;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 362;
		t.width = 1200;
		t.x = 0;
		t.y = 234;
		t.skinName = HALL_History_DZPK_Skin$Skin13;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 412;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_DZPK_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_EBG_ItemSkin.exml'] = window.HALL_History_EBG_ItemSkin = (function (_super) {
	__extends(HALL_History_EBG_ItemSkin, _super);
	function HALL_History_EBG_ItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HALL_History_EBG_ItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.pai_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "mahjong_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mahjong_card_6_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	return HALL_History_EBG_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_EBG_RenderSkin.exml'] = window.HALL_History_EBG_RenderSkin = (function (_super) {
	__extends(HALL_History_EBG_RenderSkin, _super);
	function HALL_History_EBG_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","conContainer","moneyTf"];
		
		this.height = 115;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_EBG_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 204.34;
		t.x = 4;
		t.y = 22;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.item0_i(),this.item1_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_EBG_Item();
		this.item0 = t;
		t.skinName = "HALL_History_EBG_ItemSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_EBG_Item();
		this.item1 = t;
		t.skinName = "HALL_History_EBG_ItemSkin";
		t.x = 96.15;
		t.y = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.size = 30;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.width = 97.69;
		t.x = 1059.4;
		t.y = 20;
		return t;
	};
	return HALL_History_EBG_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_EBG_Skin.exml'] = window.HALL_History_EBG_Skin = (function (_super) {
	__extends(HALL_History_EBG_Skin, _super);
	var HALL_History_EBG_Skin$Skin15 = 	(function (_super) {
		__extends(HALL_History_EBG_Skin$Skin15, _super);
		var HALL_History_EBG_Skin$Skin15$Skin16 = 		(function (_super) {
			__extends(HALL_History_EBG_Skin$Skin15$Skin16, _super);
			function HALL_History_EBG_Skin$Skin15$Skin16() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_EBG_Skin$Skin15$Skin16.prototype;

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
			return HALL_History_EBG_Skin$Skin15$Skin16;
		})(eui.Skin);

		function HALL_History_EBG_Skin$Skin15() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_EBG_Skin$Skin15.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_EBG_Skin$Skin15$Skin16;
			return t;
		};
		return HALL_History_EBG_Skin$Skin15;
	})(eui.Skin);

	function HALL_History_EBG_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_EBG_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_EBG_Skin$Skin15;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_EBG_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_ERMJ_RenderSkin.exml'] = window.HALL_History_ERMJ_RenderSkin = (function (_super) {
	__extends(HALL_History_ERMJ_RenderSkin, _super);
	function HALL_History_ERMJ_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickTf","scoreTf","ctx"];
		
		this.height = 88;
		this.width = 1200;
		this.elementsContent = [this.nickTf_i(),this.scoreTf_i(),this.ctx_i()];
	}
	var _proto = HALL_History_ERMJ_RenderSkin.prototype;

	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -473.5;
		t.size = 28;
		t.text = "1234567890abc";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 510;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "+123456,78";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ctx_i = function () {
		var t = new eui.Group();
		this.ctx = t;
		t.horizontalCenter = 20;
		t.verticalCenter = 0;
		return t;
	};
	return HALL_History_ERMJ_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_ERMJ_Skin.exml'] = window.HALL_History_ERMJ_Skin = (function (_super) {
	__extends(HALL_History_ERMJ_Skin, _super);
	var HALL_History_ERMJ_Skin$Skin17 = 	(function (_super) {
		__extends(HALL_History_ERMJ_Skin$Skin17, _super);
		var HALL_History_ERMJ_Skin$Skin17$Skin18 = 		(function (_super) {
			__extends(HALL_History_ERMJ_Skin$Skin17$Skin18, _super);
			function HALL_History_ERMJ_Skin$Skin17$Skin18() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_ERMJ_Skin$Skin17$Skin18.prototype;

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
			return HALL_History_ERMJ_Skin$Skin17$Skin18;
		})(eui.Skin);

		function HALL_History_ERMJ_Skin$Skin17() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_ERMJ_Skin$Skin17.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_ERMJ_Skin$Skin17$Skin18;
			return t;
		};
		return HALL_History_ERMJ_Skin$Skin17;
	})(eui.Skin);

	function HALL_History_ERMJ_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_ERMJ_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.noMoreTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 83.96;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 600;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1090;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_ERMJ_Skin$Skin17;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 300;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_ERMJ_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_ESYD_ItemSkin.exml'] = window.HALL_History_ESYD_ItemSkin = (function (_super) {
	__extends(HALL_History_ESYD_ItemSkin, _super);
	function HALL_History_ESYD_ItemSkin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3","card4"];
		
		this.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i()];
	}
	var _proto = HALL_History_ESYD_ItemSkin.prototype;

	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 70;
		t.rotation = 0;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 70;
		t.rotation = 0;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 70;
		t.rotation = 0;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 50;
		t.y = 0;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Image();
		this.card3 = t;
		t.height = 70;
		t.rotation = 0;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Image();
		this.card4 = t;
		t.height = 70;
		t.rotation = 0;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 100;
		t.y = 0;
		return t;
	};
	return HALL_History_ESYD_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_ESYD_RenderSkin.exml'] = window.HALL_History_ESYD_RenderSkin = (function (_super) {
	__extends(HALL_History_ESYD_RenderSkin, _super);
	function HALL_History_ESYD_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","conContainer","moneyTf"];
		
		this.height = 95;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_ESYD_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 136.34;
		t.x = 4;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 105.33;
		t.x = 1082.67;
		return t;
	};
	return HALL_History_ESYD_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_ESYD_Skin.exml'] = window.HALL_History_ESYD_Skin = (function (_super) {
	__extends(HALL_History_ESYD_Skin, _super);
	var HALL_History_ESYD_Skin$Skin19 = 	(function (_super) {
		__extends(HALL_History_ESYD_Skin$Skin19, _super);
		var HALL_History_ESYD_Skin$Skin19$Skin20 = 		(function (_super) {
			__extends(HALL_History_ESYD_Skin$Skin19$Skin20, _super);
			function HALL_History_ESYD_Skin$Skin19$Skin20() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_ESYD_Skin$Skin19$Skin20.prototype;

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
			return HALL_History_ESYD_Skin$Skin19$Skin20;
		})(eui.Skin);

		function HALL_History_ESYD_Skin$Skin19() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_ESYD_Skin$Skin19.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_ESYD_Skin$Skin19$Skin20;
			return t;
		};
		return HALL_History_ESYD_Skin$Skin19;
	})(eui.Skin);

	function HALL_History_ESYD_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","tf_0_i18n","dealUi","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_ESYD_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i(),this.tf_0_i18n_i(),this.dealUi_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 183.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 350;
		t.width = 1200;
		t.x = 0;
		t.y = 256;
		t.skinName = HALL_History_ESYD_Skin$Skin19;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.text = "庄家牌型";
		t.x = 28.79;
		t.y = 115.71;
		return t;
	};
	_proto.dealUi_i = function () {
		var t = new HALL.HALL_History_ESYD_Item();
		this.dealUi = t;
		t.horizontalCenter = 0;
		t.skinName = "HALL_History_ESYD_ItemSkin";
		t.y = 86.76;
		return t;
	};
	return HALL_History_ESYD_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_HBSL_Skin.exml'] = window.HALL_History_HBSL_Skin = (function (_super) {
	__extends(HALL_History_HBSL_Skin, _super);
	function HALL_History_HBSL_Skin() {
		_super.call(this);
		this.skinParts = ["infoTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_HBSL_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this.infoTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.y = 143.55;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_HBSL_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_LHH_ItemSkin.exml'] = window.HALL_History_LHH_ItemSkin = (function (_super) {
	__extends(HALL_History_LHH_ItemSkin, _super);
	function HALL_History_LHH_ItemSkin() {
		_super.call(this);
		this.skinParts = ["image_source"];
		
		this.elementsContent = [this.image_source_i()];
	}
	var _proto = HALL_History_LHH_ItemSkin.prototype;

	_proto.image_source_i = function () {
		var t = new eui.Image();
		this.image_source = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "poker_card_1a_png";
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALL_History_LHH_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_LHH_Skin.exml'] = window.HALL_History_LHH_Skin = (function (_super) {
	__extends(HALL_History_LHH_Skin, _super);
	function HALL_History_LHH_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","item0","tf_1_i18n","item1","titleTf","closeGrp","infoTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_LHH_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this.tf_0_i18n_i(),this.item0_i(),this.tf_1_i18n_i(),this.item1_i(),this.titleTf_i(),this.closeGrp_i(),this.infoTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.text = "龙";
		t.textAlign = "center";
		t.width = 66;
		t.x = 404;
		t.y = 196;
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_LHH_Item();
		this.item0 = t;
		t.skinName = "HALL_History_LHH_ItemSkin";
		t.x = 519;
		t.y = 150;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.text = "虎";
		t.textAlign = "center";
		t.width = 66;
		t.x = 776;
		t.y = 196;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_LHH_Item();
		this.item1 = t;
		t.skinName = "HALL_History_LHH_ItemSkin";
		t.x = 651;
		t.y = 150;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 324.61;
		t.horizontalCenter = 0;
		t.text = "本局压龙　获胜";
		t.textAlign = "center";
		t.width = 741.94;
		t.y = 294.48;
		return t;
	};
	return HALL_History_LHH_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_PDK_ItemSkin.exml'] = window.HALL_History_PDK_ItemSkin = (function (_super) {
	__extends(HALL_History_PDK_ItemSkin, _super);
	function HALL_History_PDK_ItemSkin() {
		_super.call(this);
		this.skinParts = ["image_source"];
		
		this.height = 80;
		this.width = 60;
		this.elementsContent = [this.image_source_i()];
	}
	var _proto = HALL_History_PDK_ItemSkin.prototype;

	_proto.image_source_i = function () {
		var t = new eui.Image();
		this.image_source = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.source = "poker_card_1a_png";
		t.width = 58;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALL_History_PDK_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_PDK_RenderSkin.exml'] = window.HALL_History_PDK_RenderSkin = (function (_super) {
	__extends(HALL_History_PDK_RenderSkin, _super);
	function HALL_History_PDK_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","item15","conContainer","moneyTf"];
		
		this.height = 115;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_PDK_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136.34;
		t.x = 4;
		t.y = 44.34;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i(),this.item13_i(),this.item14_i(),this.item15_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item0 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item1 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item2 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item3 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 117;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item4 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 159;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item5 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 198;
		t.y = 0;
		return t;
	};
	_proto.item6_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item6 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 238;
		t.y = 0;
		return t;
	};
	_proto.item7_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item7 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 277;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item8 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 316;
		t.y = 0;
		return t;
	};
	_proto.item9_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item9 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 356;
		t.y = 0;
		return t;
	};
	_proto.item10_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item10 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 395;
		t.y = 0;
		return t;
	};
	_proto.item11_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item11 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 435;
		t.y = 0;
		return t;
	};
	_proto.item12_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item12 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 474;
		t.y = 0;
		return t;
	};
	_proto.item13_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item13 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 516;
		t.y = 0;
		return t;
	};
	_proto.item14_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item14 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 555;
		t.y = 0;
		return t;
	};
	_proto.item15_i = function () {
		var t = new HALL.HALL_History_PDK_Item();
		this.item15 = t;
		t.skinName = "HALL_History_PDK_ItemSkin";
		t.x = 594;
		t.y = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.width = 105.33;
		t.x = 1082.67;
		t.y = 57;
		return t;
	};
	return HALL_History_PDK_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_PDK_Skin.exml'] = window.HALL_History_PDK_Skin = (function (_super) {
	__extends(HALL_History_PDK_Skin, _super);
	var HALL_History_PDK_Skin$Skin21 = 	(function (_super) {
		__extends(HALL_History_PDK_Skin$Skin21, _super);
		var HALL_History_PDK_Skin$Skin21$Skin22 = 		(function (_super) {
			__extends(HALL_History_PDK_Skin$Skin21$Skin22, _super);
			function HALL_History_PDK_Skin$Skin21$Skin22() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_PDK_Skin$Skin21$Skin22.prototype;

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
			return HALL_History_PDK_Skin$Skin21$Skin22;
		})(eui.Skin);

		function HALL_History_PDK_Skin$Skin21() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_PDK_Skin$Skin21.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_PDK_Skin$Skin21$Skin22;
			return t;
		};
		return HALL_History_PDK_Skin$Skin21;
	})(eui.Skin);

	function HALL_History_PDK_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_PDK_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_PDK_Skin$Skin21;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_PDK_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_PGP_ItemSkin.exml'] = window.HALL_History_PGP_ItemSkin = (function (_super) {
	__extends(HALL_History_PGP_ItemSkin, _super);
	function HALL_History_PGP_ItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 73;
		this.width = 56;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HALL_History_PGP_ItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.pai_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.78;
		t.source = "mahjong_bg_png";
		t.width = 68.78;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mahjong_card_6_png";
		t.width = 64.78;
		t.x = 1;
		t.y = 1;
		return t;
	};
	return HALL_History_PGP_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_PGP_RenderSkin.exml'] = window.HALL_History_PGP_RenderSkin = (function (_super) {
	__extends(HALL_History_PGP_RenderSkin, _super);
	function HALL_History_PGP_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","item15","item16","item17","conContainer","moneyTf"];
		
		this.height = 115;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_PGP_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 136.34;
		t.x = 4;
		t.y = 22;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 20;
		t.verticalCenter = 0.5;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i(),this.item13_i(),this.item14_i(),this.item15_i(),this.item16_i(),this.item17_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item0 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = -2.08;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item1 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 50.41823529411764;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item2 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 103.3864705882353;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item3 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 155.36470588235295;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item4 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 208.3329411764706;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item5 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 261.29117647058825;
		t.y = 0;
		return t;
	};
	_proto.item6_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item6 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 313.26941176470586;
		t.y = 0;
		return t;
	};
	_proto.item7_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item7 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 365.6176470588235;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item8 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 418.5458823529411;
		t.y = 0;
		return t;
	};
	_proto.item9_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item9 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 471.6841176470587;
		t.y = 0;
		return t;
	};
	_proto.item10_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item10 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 523.5223529411765;
		t.y = 0;
		return t;
	};
	_proto.item11_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item11 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 576.1605882352942;
		t.y = 0;
		return t;
	};
	_proto.item12_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item12 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 628.8088235294118;
		t.y = 0;
		return t;
	};
	_proto.item13_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item13 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 681.8970588235295;
		t.y = 0;
		return t;
	};
	_proto.item14_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item14 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 734.0652941176472;
		t.y = 0;
		return t;
	};
	_proto.item15_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item15 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 786.7135294117649;
		t.y = 0;
		return t;
	};
	_proto.item16_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item16 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 839.3617647058826;
		t.y = 0;
		return t;
	};
	_proto.item17_i = function () {
		var t = new HALL.HALL_History_PGP_Item();
		this.item17 = t;
		t.skinName = "HALL_History_PGP_ItemSkin";
		t.x = 891.72;
		t.y = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.size = 30;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.width = 97.69;
		t.x = 1099.4;
		t.y = 20;
		return t;
	};
	return HALL_History_PGP_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_PGP_Skin.exml'] = window.HALL_History_PGP_Skin = (function (_super) {
	__extends(HALL_History_PGP_Skin, _super);
	var HALL_History_PGP_Skin$Skin23 = 	(function (_super) {
		__extends(HALL_History_PGP_Skin$Skin23, _super);
		var HALL_History_PGP_Skin$Skin23$Skin24 = 		(function (_super) {
			__extends(HALL_History_PGP_Skin$Skin23$Skin24, _super);
			function HALL_History_PGP_Skin$Skin23$Skin24() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_PGP_Skin$Skin23$Skin24.prototype;

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
			return HALL_History_PGP_Skin$Skin23$Skin24;
		})(eui.Skin);

		function HALL_History_PGP_Skin$Skin23() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_PGP_Skin$Skin23.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_PGP_Skin$Skin23$Skin24;
			return t;
		};
		return HALL_History_PGP_Skin$Skin23;
	})(eui.Skin);

	function HALL_History_PGP_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_PGP_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_PGP_Skin$Skin23;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_PGP_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_Q9_ItemSkin.exml'] = window.HALL_History_Q9_ItemSkin = (function (_super) {
	__extends(HALL_History_Q9_ItemSkin, _super);
	function HALL_History_Q9_ItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HALL_History_Q9_ItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.pai_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "mahjong_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "mahjong_card_6_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	return HALL_History_Q9_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_Q9_RenderSkin.exml'] = window.HALL_History_Q9_RenderSkin = (function (_super) {
	__extends(HALL_History_Q9_RenderSkin, _super);
	function HALL_History_Q9_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","conContainer","moneyTf"];
		
		this.height = 90;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_Q9_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 204.34;
		t.x = 4;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.item0_i(),this.item1_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_Q9_Item();
		this.item0 = t;
		t.skinName = "HALL_History_Q9_ItemSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_Q9_Item();
		this.item1 = t;
		t.skinName = "HALL_History_Q9_ItemSkin";
		t.x = 96.15;
		t.y = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.size = 30;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.width = 97.69;
		t.x = 1059.4;
		t.y = 8;
		return t;
	};
	return HALL_History_Q9_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_Q9_Skin.exml'] = window.HALL_History_Q9_Skin = (function (_super) {
	__extends(HALL_History_Q9_Skin, _super);
	var HALL_History_Q9_Skin$Skin25 = 	(function (_super) {
		__extends(HALL_History_Q9_Skin$Skin25, _super);
		var HALL_History_Q9_Skin$Skin25$Skin26 = 		(function (_super) {
			__extends(HALL_History_Q9_Skin$Skin25$Skin26, _super);
			function HALL_History_Q9_Skin$Skin25$Skin26() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_Q9_Skin$Skin25$Skin26.prototype;

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
			return HALL_History_Q9_Skin$Skin25$Skin26;
		})(eui.Skin);

		function HALL_History_Q9_Skin$Skin25() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_Q9_Skin$Skin25.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_Q9_Skin$Skin25$Skin26;
			return t;
		};
		return HALL_History_Q9_Skin$Skin25;
	})(eui.Skin);

	function HALL_History_Q9_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_Q9_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_Q9_Skin$Skin25;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_Q9_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_QZNN_RenderSkin.exml'] = window.HALL_History_QZNN_RenderSkin = (function (_super) {
	__extends(HALL_History_QZNN_RenderSkin, _super);
	function HALL_History_QZNN_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickTf","scoreTf","card0","card1","card2","card3","card4"];
		
		this.height = 88;
		this.width = 1200;
		this.elementsContent = [this.nickTf_i(),this.scoreTf_i(),this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i()];
	}
	var _proto = HALL_History_QZNN_RenderSkin.prototype;

	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -418.5;
		t.size = 28;
		t.text = "1234567890abc";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 444;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "+123456,78";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 482.43;
		t.y = 9;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 532.43;
		t.y = 9;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 582.43;
		t.y = 9;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Image();
		this.card3 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 632.43;
		t.y = 9;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Image();
		this.card4 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 682.43;
		t.y = 9;
		return t;
	};
	return HALL_History_QZNN_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_QZNN_Skin.exml'] = window.HALL_History_QZNN_Skin = (function (_super) {
	__extends(HALL_History_QZNN_Skin, _super);
	var HALL_History_QZNN_Skin$Skin27 = 	(function (_super) {
		__extends(HALL_History_QZNN_Skin$Skin27, _super);
		var HALL_History_QZNN_Skin$Skin27$Skin28 = 		(function (_super) {
			__extends(HALL_History_QZNN_Skin$Skin27$Skin28, _super);
			function HALL_History_QZNN_Skin$Skin27$Skin28() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_QZNN_Skin$Skin27$Skin28.prototype;

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
			return HALL_History_QZNN_Skin$Skin27$Skin28;
		})(eui.Skin);

		function HALL_History_QZNN_Skin$Skin27() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_QZNN_Skin$Skin27.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_QZNN_Skin$Skin27$Skin28;
			return t;
		};
		return HALL_History_QZNN_Skin$Skin27;
	})(eui.Skin);

	function HALL_History_QZNN_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_QZNN_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.noMoreTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 137;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 586;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1028;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_QZNN_Skin$Skin27;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 300;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_QZNN_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SG_RenderSkin.exml'] = window.HALL_History_SG_RenderSkin = (function (_super) {
	__extends(HALL_History_SG_RenderSkin, _super);
	function HALL_History_SG_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickTf","scoreTf","card0","card1","card2"];
		
		this.height = 88;
		this.width = 1200;
		this.elementsContent = [this.nickTf_i(),this.scoreTf_i(),this.card0_i(),this.card1_i(),this.card2_i()];
	}
	var _proto = HALL_History_SG_RenderSkin.prototype;

	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -418.5;
		t.size = 28;
		t.text = "1234567890abc";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 444;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "+123456,78";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 532.43;
		t.y = 9;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 582.43;
		t.y = 9;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 632.43;
		t.y = 9;
		return t;
	};
	return HALL_History_SG_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SG_Skin.exml'] = window.HALL_History_SG_Skin = (function (_super) {
	__extends(HALL_History_SG_Skin, _super);
	var HALL_History_SG_Skin$Skin29 = 	(function (_super) {
		__extends(HALL_History_SG_Skin$Skin29, _super);
		var HALL_History_SG_Skin$Skin29$Skin30 = 		(function (_super) {
			__extends(HALL_History_SG_Skin$Skin29$Skin30, _super);
			function HALL_History_SG_Skin$Skin29$Skin30() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_SG_Skin$Skin29$Skin30.prototype;

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
			return HALL_History_SG_Skin$Skin29$Skin30;
		})(eui.Skin);

		function HALL_History_SG_Skin$Skin29() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_SG_Skin$Skin29.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_SG_Skin$Skin29$Skin30;
			return t;
		};
		return HALL_History_SG_Skin$Skin29;
	})(eui.Skin);

	function HALL_History_SG_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_SG_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.noMoreTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 137;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 586;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1028;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_SG_Skin$Skin29;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 300;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_SG_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SGJ_GINAR_ItemSkin.exml'] = window.HALL_History_SGJ_GINAR_ItemSkin = (function (_super) {
	__extends(HALL_History_SGJ_GINAR_ItemSkin, _super);
	function HALL_History_SGJ_GINAR_ItemSkin() {
		_super.call(this);
		this.skinParts = ["img","factorTf","pointTf"];
		
		this.height = 56;
		this.width = 186;
		this.elementsContent = [this._Group1_i(),this.pointTf_i()];
	}
	var _proto = HALL_History_SGJ_GINAR_ItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 56;
		t.width = 56;
		t.y = 0;
		t.elementsContent = [this.img_i(),this.factorTf_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 56;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sgj_room_sgys_pg_png";
		t.width = 56;
		t.y = 0;
		return t;
	};
	_proto.factorTf_i = function () {
		var t = new eui.BitmapLabel();
		this.factorTf = t;
		t.font = "sgj_game_number10_fnt";
		t.horizontalCenter = 0;
		t.text = "x2";
		t.y = 35;
		return t;
	};
	_proto.pointTf_i = function () {
		var t = new eui.Label();
		this.pointTf = t;
		t.size = 22;
		t.text = "13(12-13)";
		t.x = 65;
		t.y = 15;
		return t;
	};
	return HALL_History_SGJ_GINAR_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SGJ_GINAR_Skin.exml'] = window.HALL_History_SGJ_GINAR_Skin = (function (_super) {
	__extends(HALL_History_SGJ_GINAR_Skin, _super);
	function HALL_History_SGJ_GINAR_Skin() {
		_super.call(this);
		this.skinParts = ["titleTf","closeGrp","specialImg","img0","factorTf0","itemIcon","pointTf0","iconGrp","idTf0","tf_2_i18n","verifyBtn0","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","itemsGrp","scl","daManGuanTf","idTf1","tf_1_i18n","verifyBtn1","tf_0_i18n","diceTf","diceGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_SGJ_GINAR_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 560;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 940;
		t.elementsContent = [this._Image2_i(),this.titleTf_i(),this.closeGrp_i(),this.iconGrp_i(),this.idTf0_i(),this.verifyBtn0_i(),this.scl_i(),this.daManGuanTf_i(),this.diceGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(77,115,1049,475);
		t.source = "HALL_common_bg_png";
		t.top = 0;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 936.33;
		t.y = 4.3;
		return t;
	};
	_proto.iconGrp_i = function () {
		var t = new eui.Group();
		this.iconGrp = t;
		t.height = 107;
		t.horizontalCenter = -339.5;
		t.width = 135;
		t.y = 124;
		t.elementsContent = [this._Image3_i(),this.specialImg_i(),this.itemIcon_i(),this.pointTf0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sgj_board_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.specialImg_i = function () {
		var t = new eui.Image();
		this.specialImg = t;
		t.height = 90;
		t.source = "sgj_special_1_png";
		t.width = 90;
		t.x = 23;
		t.y = 7;
		return t;
	};
	_proto.itemIcon_i = function () {
		var t = new eui.Group();
		this.itemIcon = t;
		t.height = 56;
		t.horizontalCenter = 0;
		t.width = 56;
		t.y = 9.14;
		t.elementsContent = [this.img0_i(),this.factorTf0_i()];
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.height = 56;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "sgj_room_sgys_pg_png";
		t.width = 56;
		t.y = 0;
		return t;
	};
	_proto.factorTf0_i = function () {
		var t = new eui.BitmapLabel();
		this.factorTf0 = t;
		t.font = "sgj_game_number10_fnt";
		t.horizontalCenter = 0;
		t.text = "x2";
		t.y = 35;
		return t;
	};
	_proto.pointTf0_i = function () {
		var t = new eui.Label();
		this.pointTf0 = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "13(12-13)";
		t.textColor = 0xffe13c;
		t.y = 78.34;
		return t;
	};
	_proto.idTf0_i = function () {
		var t = new eui.Label();
		this.idTf0 = t;
		t.size = 20;
		t.text = "点击这里验证";
		t.x = 60;
		t.y = 264;
		return t;
	};
	_proto.verifyBtn0_i = function () {
		var t = new eui.Group();
		this.verifyBtn0 = t;
		t.height = 155;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 155;
		t.x = 851;
		t.y = 235;
		t.elementsContent = [this._Image4_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "sgj_verify_btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.bold = true;
		t.horizontalCenter = -2.5;
		t.italic = true;
		t.size = 34;
		t.text = "区块链";
		t.y = 81.92;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 168;
		t.width = 565;
		t.x = 221;
		t.y = 93;
		t.viewport = this.itemsGrp_i();
		return t;
	};
	_proto.itemsGrp_i = function () {
		var t = new eui.Group();
		this.itemsGrp = t;
		t.width = 565;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item0 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item1 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 190;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item2 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 379;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item3 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 0;
		t.y = 56;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item4 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 190;
		t.y = 56;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item5 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 379;
		t.y = 56;
		return t;
	};
	_proto.item6_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item6 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 0;
		t.y = 112;
		return t;
	};
	_proto.item7_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item7 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 190;
		t.y = 112;
		return t;
	};
	_proto.item8_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item8 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 379;
		t.y = 112;
		return t;
	};
	_proto.item9_i = function () {
		var t = new HALL.HALL_History_SGJ_GINAR_Item();
		this.item9 = t;
		t.skinName = "HALL_History_SGJ_GINAR_ItemSkin";
		t.x = 0;
		t.y = 168;
		return t;
	};
	_proto.daManGuanTf_i = function () {
		var t = new eui.Label();
		this.daManGuanTf = t;
		t.size = 59;
		t.text = "大满贯";
		t.textColor = 0xFFE13C;
		t.x = 394;
		t.y = 148;
		return t;
	};
	_proto.diceGrp_i = function () {
		var t = new eui.Group();
		this.diceGrp = t;
		t.left = 0;
		t.right = 0;
		t.y = 312.25;
		t.elementsContent = [this.idTf1_i(),this.verifyBtn1_i(),this._Group1_i(),this.diceTf_i()];
		return t;
	};
	_proto.idTf1_i = function () {
		var t = new eui.Label();
		this.idTf1 = t;
		t.size = 20;
		t.text = "点击这里验证";
		t.x = 60;
		t.y = 179;
		return t;
	};
	_proto.verifyBtn1_i = function () {
		var t = new eui.Group();
		this.verifyBtn1 = t;
		t.height = 155;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 155;
		t.x = 851;
		t.y = 150;
		t.elementsContent = [this._Image5_i(),this.tf_1_i18n_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "sgj_verify_btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.bold = true;
		t.horizontalCenter = -2.5;
		t.italic = true;
		t.size = 34;
		t.text = "区块链";
		t.y = 81.92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this.tf_0_i18n_i()];
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "猜大小";
		t.textColor = 0xa9874c;
		t.y = 0;
		return t;
	};
	_proto.diceTf_i = function () {
		var t = new eui.Label();
		this.diceTf = t;
		t.horizontalCenter = 0;
		t.size = 59;
		t.text = "3(小)";
		t.textColor = 0xffe13c;
		t.y = 79;
		return t;
	};
	return HALL_History_SGJ_GINAR_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SGJ_Skin.exml'] = window.HALL_History_SGJ_Skin = (function (_super) {
	__extends(HALL_History_SGJ_Skin, _super);
	function HALL_History_SGJ_Skin() {
		_super.call(this);
		this.skinParts = ["infoTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_SGJ_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this.infoTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "暂无数据";
		t.verticalAlign = "top";
		t.y = 122.34;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_SGJ_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SHZ_Skin.exml'] = window.HALL_History_SHZ_Skin = (function (_super) {
	__extends(HALL_History_SHZ_Skin, _super);
	function HALL_History_SHZ_Skin() {
		_super.call(this);
		this.skinParts = ["infoTf","titleTf","closeGrp","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_SHZ_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this.infoTf_i(),this.titleTf_i(),this.closeGrp_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "暂无数据";
		t.verticalAlign = "top";
		t.y = 463.34;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 176;
		t.y = 111;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i(),this.item13_i(),this.item14_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Image();
		this.item0 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 185;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 370;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 555;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Image();
		this.item4 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 740;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Image();
		this.item5 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 0;
		t.y = 109;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Image();
		this.item6 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 185;
		t.y = 109;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Image();
		this.item7 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 370;
		t.y = 109;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Image();
		this.item8 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 555;
		t.y = 109;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Image();
		this.item9 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 740;
		t.y = 109;
		return t;
	};
	_proto.item10_i = function () {
		var t = new eui.Image();
		this.item10 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 0;
		t.y = 217;
		return t;
	};
	_proto.item11_i = function () {
		var t = new eui.Image();
		this.item11 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 185;
		t.y = 217;
		return t;
	};
	_proto.item12_i = function () {
		var t = new eui.Image();
		this.item12 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 370;
		t.y = 217;
		return t;
	};
	_proto.item13_i = function () {
		var t = new eui.Image();
		this.item13 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 555;
		t.y = 217;
		return t;
	};
	_proto.item14_i = function () {
		var t = new eui.Image();
		this.item14 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "shz_item04_png";
		t.x = 740;
		t.y = 217;
		return t;
	};
	return HALL_History_SHZ_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SSS_RenderSkin.exml'] = window.HALL_History_SSS_RenderSkin = (function (_super) {
	__extends(HALL_History_SSS_RenderSkin, _super);
	function HALL_History_SSS_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickTf","scoreTf","card0","card1","card2","card3","card4","card5","card6","card7","card8","card9","card10","card11","card12","tf0","tf1","tf2","grp0","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","spTf","grp1"];
		
		this.height = 115;
		this.width = 1200;
		this.elementsContent = [this.nickTf_i(),this.scoreTf_i(),this.grp0_i(),this.grp1_i()];
	}
	var _proto = HALL_History_SSS_RenderSkin.prototype;

	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -418.5;
		t.size = 28;
		t.text = "1234567890abc";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 496.5;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "+123456,78";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.grp0_i = function () {
		var t = new eui.Group();
		this.grp0 = t;
		t.visible = false;
		t.x = 304.43;
		t.y = 9;
		t.elementsContent = [this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i(),this.card4_i(),this.card5_i(),this.card6_i(),this.card7_i(),this.card8_i(),this.card9_i(),this.card10_i(),this.card11_i(),this.card12_i(),this.tf0_i(),this.tf1_i(),this.tf2_i()];
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 50.48;
		t.y = 0;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 102.48;
		t.y = 0;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Image();
		this.card3 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Image();
		this.card4 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 212.48;
		t.y = 0;
		return t;
	};
	_proto.card5_i = function () {
		var t = new eui.Image();
		this.card5 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 264.48;
		t.y = 0;
		return t;
	};
	_proto.card6_i = function () {
		var t = new eui.Image();
		this.card6 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 314.96;
		t.y = 0;
		return t;
	};
	_proto.card7_i = function () {
		var t = new eui.Image();
		this.card7 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 365.44;
		t.y = 0;
		return t;
	};
	_proto.card8_i = function () {
		var t = new eui.Image();
		this.card8 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 428;
		t.y = 0;
		return t;
	};
	_proto.card9_i = function () {
		var t = new eui.Image();
		this.card9 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 478.48;
		t.y = 0;
		return t;
	};
	_proto.card10_i = function () {
		var t = new eui.Image();
		this.card10 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 528.96;
		t.y = 0;
		return t;
	};
	_proto.card11_i = function () {
		var t = new eui.Image();
		this.card11 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 580.96;
		t.y = 0;
		return t;
	};
	_proto.card12_i = function () {
		var t = new eui.Image();
		this.card12 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 632.96;
		t.y = 0;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new eui.Label();
		this.tf0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.48;
		t.rotation = 359.92;
		t.size = 25;
		t.text = "一对";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 143.94;
		t.x = 7.34;
		t.y = 71;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new eui.Label();
		this.tf1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.48;
		t.rotation = 359.92;
		t.size = 25;
		t.text = "一对";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 143.94;
		t.x = 221.34;
		t.y = 71;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new eui.Label();
		this.tf2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.48;
		t.rotation = 359.92;
		t.size = 25;
		t.text = "一对";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 143.94;
		t.x = 483.34;
		t.y = 71;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.x = 304.43;
		t.y = 9;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i(),this.spTf_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Image();
		this.item0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 50.48;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 101.48;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 152;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Image();
		this.item4 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 202.48;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Image();
		this.item5 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 253.48;
		t.y = 0;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Image();
		this.item6 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 303.96;
		t.y = 0;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Image();
		this.item7 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 354.44;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new eui.Image();
		this.item8 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 405;
		t.y = 0;
		return t;
	};
	_proto.item9_i = function () {
		var t = new eui.Image();
		this.item9 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 455.48;
		t.y = 0;
		return t;
	};
	_proto.item10_i = function () {
		var t = new eui.Image();
		this.item10 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 504.96;
		t.y = 0;
		return t;
	};
	_proto.item11_i = function () {
		var t = new eui.Image();
		this.item11 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 554.96;
		t.y = 0;
		return t;
	};
	_proto.item12_i = function () {
		var t = new eui.Image();
		this.item12 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 604.96;
		t.y = 0;
		return t;
	};
	_proto.spTf_i = function () {
		var t = new eui.Label();
		this.spTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.48;
		t.rotation = 359.92;
		t.size = 25;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 143.94;
		t.x = 221.34;
		t.y = 71;
		return t;
	};
	return HALL_History_SSS_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_SSS_Skin.exml'] = window.HALL_History_SSS_Skin = (function (_super) {
	__extends(HALL_History_SSS_Skin, _super);
	var HALL_History_SSS_Skin$Skin31 = 	(function (_super) {
		__extends(HALL_History_SSS_Skin$Skin31, _super);
		var HALL_History_SSS_Skin$Skin31$Skin32 = 		(function (_super) {
			__extends(HALL_History_SSS_Skin$Skin31$Skin32, _super);
			function HALL_History_SSS_Skin$Skin31$Skin32() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_SSS_Skin$Skin31$Skin32.prototype;

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
			return HALL_History_SSS_Skin$Skin31$Skin32;
		})(eui.Skin);

		function HALL_History_SSS_Skin$Skin31() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_SSS_Skin$Skin31.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_SSS_Skin$Skin31$Skin32;
			return t;
		};
		return HALL_History_SSS_Skin$Skin31;
	})(eui.Skin);

	function HALL_History_SSS_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_SSS_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.noMoreTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 137;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 586;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1094;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_SSS_Skin$Skin31;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 300;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_SSS_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_XLCH_ItemSkin.exml'] = window.HALL_History_XLCH_ItemSkin = (function (_super) {
	__extends(HALL_History_XLCH_ItemSkin, _super);
	function HALL_History_XLCH_ItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 73;
		this.width = 56;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HALL_History_XLCH_ItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.pai_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.78;
		t.source = "mahjong_bg_png";
		t.width = 68.78;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mahjong_card_6_png";
		t.width = 64.78;
		t.x = 1;
		t.y = 1;
		return t;
	};
	return HALL_History_XLCH_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_XLCH_RenderSkin.exml'] = window.HALL_History_XLCH_RenderSkin = (function (_super) {
	__extends(HALL_History_XLCH_RenderSkin, _super);
	function HALL_History_XLCH_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","item15","item16","item17","item18","item19","item20","item21","item22","item23","item24","item25","item26","conContainer","moneyTf"];
		
		this.height = 150;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_XLCH_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76.66;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -14.5;
		t.width = 157.55;
		t.x = 4;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 172;
		t.y = 0;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i(),this.item13_i(),this.item14_i(),this.item15_i(),this.item16_i(),this.item17_i(),this.item18_i(),this.item19_i(),this.item20_i(),this.item21_i(),this.item22_i(),this.item23_i(),this.item24_i(),this.item25_i(),this.item26_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item0 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = -2.08;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item1 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 50.41823529411764;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item2 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 103.3864705882353;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item3 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 155.36470588235295;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item4 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 208.3329411764706;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item5 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 261.29117647058825;
		t.y = 0;
		return t;
	};
	_proto.item6_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item6 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 313.26941176470586;
		t.y = 0;
		return t;
	};
	_proto.item7_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item7 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 365.6176470588235;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item8 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 418.5458823529411;
		t.y = 0;
		return t;
	};
	_proto.item9_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item9 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 471.6841176470587;
		t.y = 0;
		return t;
	};
	_proto.item10_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item10 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 523.5223529411765;
		t.y = 0;
		return t;
	};
	_proto.item11_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item11 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 576.1605882352942;
		t.y = 0;
		return t;
	};
	_proto.item12_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item12 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 628.8088235294118;
		t.y = 0;
		return t;
	};
	_proto.item13_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item13 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 681.8970588235295;
		t.y = 0;
		return t;
	};
	_proto.item14_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item14 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 734.0652941176472;
		t.y = 0;
		return t;
	};
	_proto.item15_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item15 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 786.7135294117649;
		t.y = 0;
		return t;
	};
	_proto.item16_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item16 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 839.3617647058826;
		t.y = 0;
		return t;
	};
	_proto.item17_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item17 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 891.72;
		t.y = 0;
		return t;
	};
	_proto.item18_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item18 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 229;
		t.y = 74;
		return t;
	};
	_proto.item19_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item19 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 282.34;
		t.y = 74;
		return t;
	};
	_proto.item20_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item20 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 335.68;
		t.y = 74;
		return t;
	};
	_proto.item21_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item21 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 389.02;
		t.y = 74;
		return t;
	};
	_proto.item22_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item22 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 442.99;
		t.y = 74;
		return t;
	};
	_proto.item23_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item23 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 496.66;
		t.y = 74;
		return t;
	};
	_proto.item24_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item24 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 550.36;
		t.y = 74;
		return t;
	};
	_proto.item25_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item25 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 604.02;
		t.y = 74;
		return t;
	};
	_proto.item26_i = function () {
		var t = new HALL.HALL_History_XLCH_Item();
		this.item26 = t;
		t.skinName = "HALL_History_XLCH_ItemSkin";
		t.x = 659;
		t.y = 74;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.size = 30;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 97.69;
		t.x = 1099.4;
		return t;
	};
	return HALL_History_XLCH_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_XLCH_Skin.exml'] = window.HALL_History_XLCH_Skin = (function (_super) {
	__extends(HALL_History_XLCH_Skin, _super);
	var HALL_History_XLCH_Skin$Skin33 = 	(function (_super) {
		__extends(HALL_History_XLCH_Skin$Skin33, _super);
		var HALL_History_XLCH_Skin$Skin33$Skin34 = 		(function (_super) {
			__extends(HALL_History_XLCH_Skin$Skin33$Skin34, _super);
			function HALL_History_XLCH_Skin$Skin33$Skin34() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_XLCH_Skin$Skin33$Skin34.prototype;

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
			return HALL_History_XLCH_Skin$Skin33$Skin34;
		})(eui.Skin);

		function HALL_History_XLCH_Skin$Skin33() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_XLCH_Skin$Skin33.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_XLCH_Skin$Skin33$Skin34;
			return t;
		};
		return HALL_History_XLCH_Skin$Skin33;
	})(eui.Skin);

	function HALL_History_XLCH_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_XLCH_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_XLCH_Skin$Skin33;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_XLCH_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_XZDD_ItemSkin.exml'] = window.HALL_History_XZDD_ItemSkin = (function (_super) {
	__extends(HALL_History_XZDD_ItemSkin, _super);
	function HALL_History_XZDD_ItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","pai"];
		
		this.height = 73;
		this.width = 56;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HALL_History_XZDD_ItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.pai_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.78;
		t.source = "mahjong_bg_png";
		t.width = 68.78;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pai_i = function () {
		var t = new eui.Image();
		this.pai = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mahjong_card_6_png";
		t.width = 64.78;
		t.x = 1;
		t.y = 1;
		return t;
	};
	return HALL_History_XZDD_ItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_XZDD_RenderSkin.exml'] = window.HALL_History_XZDD_RenderSkin = (function (_super) {
	__extends(HALL_History_XZDD_RenderSkin, _super);
	function HALL_History_XZDD_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickName","item0","item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","item15","item16","item17","conContainer","moneyTf"];
		
		this.height = 115;
		this.width = 1200;
		this.elementsContent = [this.nickName_i(),this.conContainer_i(),this.moneyTf_i()];
	}
	var _proto = HALL_History_XZDD_RenderSkin.prototype;

	_proto.nickName_i = function () {
		var t = new eui.Label();
		this.nickName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113.03;
		t.size = 20;
		t.text = "*****2323232";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 144.27;
		t.x = 0;
		t.y = 2.3;
		return t;
	};
	_proto.conContainer_i = function () {
		var t = new eui.Group();
		this.conContainer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 26;
		t.verticalCenter = 1;
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i(),this.item8_i(),this.item9_i(),this.item10_i(),this.item11_i(),this.item12_i(),this.item13_i(),this.item14_i(),this.item15_i(),this.item16_i(),this.item17_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item0 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = -2.08;
		t.y = 0;
		return t;
	};
	_proto.item1_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item1 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 50.41823529411764;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item2 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 103.3864705882353;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item3 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 155.36470588235295;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item4 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 208.3329411764706;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item5 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 261.29117647058825;
		t.y = 0;
		return t;
	};
	_proto.item6_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item6 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 313.26941176470586;
		t.y = 0;
		return t;
	};
	_proto.item7_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item7 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 365.6176470588235;
		t.y = 0;
		return t;
	};
	_proto.item8_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item8 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 418.5458823529411;
		t.y = 0;
		return t;
	};
	_proto.item9_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item9 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 471.6841176470587;
		t.y = 0;
		return t;
	};
	_proto.item10_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item10 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 523.5223529411765;
		t.y = 0;
		return t;
	};
	_proto.item11_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item11 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 576.1605882352942;
		t.y = 0;
		return t;
	};
	_proto.item12_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item12 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 628.8088235294118;
		t.y = 0;
		return t;
	};
	_proto.item13_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item13 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 681.8970588235295;
		t.y = 0;
		return t;
	};
	_proto.item14_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item14 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 734.0652941176472;
		t.y = 0;
		return t;
	};
	_proto.item15_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item15 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 786.7135294117649;
		t.y = 0;
		return t;
	};
	_proto.item16_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item16 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 839.3617647058826;
		t.y = 0;
		return t;
	};
	_proto.item17_i = function () {
		var t = new HALL.HALL_History_XZDD_Item();
		this.item17 = t;
		t.skinName = "HALL_History_XZDD_ItemSkin";
		t.x = 891.72;
		t.y = 0;
		return t;
	};
	_proto.moneyTf_i = function () {
		var t = new eui.Label();
		this.moneyTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.size = 30;
		t.text = "50";
		t.textAlign = "center";
		t.textColor = 0x68e218;
		t.verticalAlign = "middle";
		t.width = 91.63;
		t.x = 1105.46;
		t.y = 20;
		return t;
	};
	return HALL_History_XZDD_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_XZDD_Skin.exml'] = window.HALL_History_XZDD_Skin = (function (_super) {
	__extends(HALL_History_XZDD_Skin, _super);
	var HALL_History_XZDD_Skin$Skin35 = 	(function (_super) {
		__extends(HALL_History_XZDD_Skin$Skin35, _super);
		var HALL_History_XZDD_Skin$Skin35$Skin36 = 		(function (_super) {
			__extends(HALL_History_XZDD_Skin$Skin35$Skin36, _super);
			function HALL_History_XZDD_Skin$Skin35$Skin36() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_XZDD_Skin$Skin35$Skin36.prototype;

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
			return HALL_History_XZDD_Skin$Skin35$Skin36;
		})(eui.Skin);

		function HALL_History_XZDD_Skin$Skin35() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_XZDD_Skin$Skin35.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_XZDD_Skin$Skin35$Skin36;
			return t;
		};
		return HALL_History_XZDD_Skin$Skin35;
	})(eui.Skin);

	function HALL_History_XZDD_Skin() {
		_super.call(this);
		this.skinParts = ["nickNameTf","cardTypeTf","scoreTf","ctxGrp","scl","closeGrp","titleTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_XZDD_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.closeGrp_i(),this.titleTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 77.68;
		t.elementsContent = [this._Image3_i(),this.nickNameTf_i(),this.cardTypeTf_i(),this.scoreTf_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.nickNameTf_i = function () {
		var t = new eui.Label();
		this.nickNameTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 30;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.cardTypeTf_i = function () {
		var t = new eui.Label();
		this.cardTypeTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 30;
		t.size = 30;
		t.text = "输赢：";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 21;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 464;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_XZDD_Skin$Skin35;
		t.viewport = this.ctxGrp_i();
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	return HALL_History_XZDD_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_ZJH_RenderSkin.exml'] = window.HALL_History_ZJH_RenderSkin = (function (_super) {
	__extends(HALL_History_ZJH_RenderSkin, _super);
	function HALL_History_ZJH_RenderSkin() {
		_super.call(this);
		this.skinParts = ["nickTf","scoreTf","card0","card1","card2"];
		
		this.height = 88;
		this.width = 1200;
		this.elementsContent = [this.nickTf_i(),this.scoreTf_i(),this.card0_i(),this.card1_i(),this.card2_i()];
	}
	var _proto = HALL_History_ZJH_RenderSkin.prototype;

	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -418.5;
		t.size = 28;
		t.text = "1234567890abc";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 444;
		t.lineSpacing = 10;
		t.size = 28;
		t.text = "+123456,78";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.card0_i = function () {
		var t = new eui.Image();
		this.card0 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 532.43;
		t.y = 9;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Image();
		this.card1 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 582.43;
		t.y = 9;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Image();
		this.card2 = t;
		t.height = 70;
		t.source = "poker_card_1a_png";
		t.width = 52;
		t.x = 632.43;
		t.y = 9;
		return t;
	};
	return HALL_History_ZJH_RenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/gameHistory/HALL_History_ZJH_Skin.exml'] = window.HALL_History_ZJH_Skin = (function (_super) {
	__extends(HALL_History_ZJH_Skin, _super);
	var HALL_History_ZJH_Skin$Skin37 = 	(function (_super) {
		__extends(HALL_History_ZJH_Skin$Skin37, _super);
		var HALL_History_ZJH_Skin$Skin37$Skin38 = 		(function (_super) {
			__extends(HALL_History_ZJH_Skin$Skin37$Skin38, _super);
			function HALL_History_ZJH_Skin$Skin37$Skin38() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALL_History_ZJH_Skin$Skin37$Skin38.prototype;

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
			return HALL_History_ZJH_Skin$Skin37$Skin38;
		})(eui.Skin);

		function HALL_History_ZJH_Skin$Skin37() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALL_History_ZJH_Skin$Skin37.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALL_History_ZJH_Skin$Skin37$Skin38;
			return t;
		};
		return HALL_History_ZJH_Skin$Skin37;
	})(eui.Skin);

	function HALL_History_ZJH_Skin() {
		_super.call(this);
		this.skinParts = ["tf_0_i18n","tf_1_i18n","tf_2_i18n","list","scl","noMoreTf","titleTf","closeGrp","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_History_ZJH_Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1226;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.noMoreTf_i(),this.titleTf_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this.tf_0_i18n_i(),this.tf_1_i18n_i(),this.tf_2_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf_0_i18n_i = function () {
		var t = new eui.Label();
		this.tf_0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "玩家昵称";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 137;
		t.y = 14;
		return t;
	};
	_proto.tf_1_i18n_i = function () {
		var t = new eui.Label();
		this.tf_1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "牌型";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 586;
		t.y = 14;
		return t;
	};
	_proto.tf_2_i18n_i = function () {
		var t = new eui.Label();
		this.tf_2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "输赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 1028;
		t.y = 14;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALL_History_ZJH_Skin$Skin37;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.noMoreTf_i = function () {
		var t = new eui.Label();
		this.noMoreTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 300;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "记录详情";
		t.width = 168;
		t.y = 18;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Image();
		this.closeGrp = t;
		t.anchorOffsetX = 33.33;
		t.anchorOffsetY = 30.3;
		t.source = "HALL_close_btn_png";
		t.x = 1199.33;
		t.y = 4.3;
		return t;
	};
	return HALL_History_ZJH_Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/lanuage/HALL_LanuageSkin.exml'] = window.HALL_LanuageSkin = (function (_super) {
	__extends(HALL_LanuageSkin, _super);
	function HALL_LanuageSkin() {
		_super.call(this);
		this.skinParts = ["item0","btn0","item1","btn1","item2","btn2","closeBtn","tf2_i18n","restartBtn","uiGrp"];
		
		this.currentState = "standalone";
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
		this.restartBtn_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("standalone",
				[
					new eui.AddItems("restartBtn","uiGrp",1,"")
				])
		];
	}
	var _proto = HALL_LanuageSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.closeBtn_i(),this.tf2_i18n_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 303;
		t.y = 110;
		t.elementsContent = [this.item0_i(),this.btn0_i(),this._Label1_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Image();
		this.item0 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 35;
		t.y = 16;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new eui.Image();
		this.btn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 27;
		t.text = "简体中文";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 75;
		t.y = 17;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 303;
		t.y = 188;
		t.elementsContent = [this.item1_i(),this.btn1_i(),this._Label2_i()];
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 35;
		t.y = 16;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 27;
		t.text = "繁體中文";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 75;
		t.y = 17;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 303;
		t.y = 265;
		t.elementsContent = [this.item2_i(),this.btn2_i(),this._Label3_i()];
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "HALL_friend_select1_png";
		t.x = 35;
		t.y = 16;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "HALL_alpha_mask_png";
		t.width = 169;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 27;
		t.text = "English";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 75;
		t.y = 17;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "默认语言";
		t.y = 20;
		return t;
	};
	_proto.restartBtn_i = function () {
		var t = new HALL.XYButton();
		this.restartBtn = t;
		t.a_label = "确认";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 24;
		t.anchorOffsetX = 86;
		t.anchorOffsetY = 32;
		t.height = 62;
		t.skinName = "XYButtonSkin";
		t.width = 174;
		t.x = 403;
		t.y = 415.68;
		return t;
	};
	return HALL_LanuageSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/loading/HALLLoadingSkin.exml'] = window.HALLLoadingSkin = (function (_super) {
	__extends(HALLLoadingSkin, _super);
	function HALLLoadingSkin() {
		_super.call(this);
		this.skinParts = ["proImg","tf","info_i18n","backToHallBtn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HALLLoadingSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 174;
		t.horizontalCenter = 0;
		t.verticalCenter = 193;
		t.width = 700;
		t.elementsContent = [this._Image1_i(),this.proImg_i(),this.tf_i(),this._Label1_i(),this.info_i18n_i(),this.backToHallBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HALL_loading_pro_bg_png";
		t.x = 0;
		t.y = 84;
		return t;
	};
	_proto.proImg_i = function () {
		var t = new eui.Image();
		this.proImg = t;
		t.source = "HALL_loading_pro_png";
		t.x = 4;
		t.y = 88;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 1;
		t.strokeColor = 0x000000;
		t.text = "0%";
		t.textColor = 0xffffff;
		t.y = 5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.alpha = 0.7;
		t.size = 20;
		t.text = "Please wait";
		t.x = 299;
		t.y = 51;
		return t;
	};
	_proto.info_i18n_i = function () {
		var t = new eui.Label();
		this.info_i18n = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.lineSpacing = 20;
		t.size = 16;
		t.text = "拒绝不良盗版游戏，保护自我严防受骗，适度游戏训练思考能力\n不应沉迷游戏，享受我们的游戏带给您的乐趣";
		t.textAlign = "center";
		t.x = 126;
		t.y = 122;
		return t;
	};
	_proto.backToHallBtn_i = function () {
		var t = new eui.Label();
		this.backToHallBtn = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 49;
		t.height = 99;
		t.strokeColor = 0x000000;
		t.text = "[返回大厅]";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 782;
		t.y = 90;
		return t;
	};
	return HALLLoadingSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/login/HALLForgetPwd1Skin.exml'] = window.HALLForgetPwd1Skin = (function (_super) {
	__extends(HALLForgetPwd1Skin, _super);
	function HALLForgetPwd1Skin() {
		_super.call(this);
		this.skinParts = ["yzm_i18n","phone_i18n","tf","phoneTf","codeTf","getCodeBtn","okBtn","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLForgetPwd1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.yzm_i18n_i(),this._Label1_i(),this.phone_i18n_i(),this._Label2_i(),this.tf_i(),this.phoneTf_i(),this.codeTf_i(),this.getCodeBtn_i(),this.okBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 340;
		t.x = 234;
		t.y = 231;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 340;
		t.x = 234;
		t.y = 140;
		return t;
	};
	_proto.yzm_i18n_i = function () {
		var t = new eui.Label();
		this.yzm_i18n = t;
		t.bold = true;
		t.text = "验证码";
		t.x = 106;
		t.y = 248.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "*";
		t.textColor = 0xFF5353;
		t.x = 204;
		t.y = 250;
		return t;
	};
	_proto.phone_i18n_i = function () {
		var t = new eui.Label();
		this.phone_i18n = t;
		t.bold = true;
		t.text = "手机号";
		t.x = 106;
		t.y = 161;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "*";
		t.textColor = 0xFF5353;
		t.x = 204;
		t.y = 162.5;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "忘记密码";
		t.y = 20;
		return t;
	};
	_proto.phoneTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.phoneTf = t;
		t.a_defaultColor = 0xffffff;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.inputType = "tel";
		t.text = "请输入手机号";
		t.textColor = 0x8c8c91;
		t.verticalAlign = "middle";
		t.width = 271.33;
		t.x = 279;
		t.y = 144;
		return t;
	};
	_proto.codeTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.codeTf = t;
		t.a_defaultColor = 0xFFFFFF;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.inputType = "tel";
		t.text = "请输入验证码";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 272.33;
		t.x = 279;
		t.y = 236;
		return t;
	};
	_proto.getCodeBtn_i = function () {
		var t = new HALL.XYButton();
		this.getCodeBtn = t;
		t.a_label = "获取验证码";
		t.a_labelColor = 0xffffff;
		t.a_labelSize = 18;
		t.anchorOffsetX = 74;
		t.anchorOffsetY = 33;
		t.height = 65;
		t.skinName = "XYButtonSkin";
		t.width = 150;
		t.x = 656.33;
		t.y = 172;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.horizontalCenter = 0;
		t.source = "HALL_ok_btn_png";
		t.y = 396;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	return HALLForgetPwd1Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/login/HALLForgetPwd2Skin.exml'] = window.HALLForgetPwd2Skin = (function (_super) {
	__extends(HALLForgetPwd2Skin, _super);
	function HALLForgetPwd2Skin() {
		_super.call(this);
		this.skinParts = ["tf0_i18n","tf1_i18n","tf","pwdTf1","pwdTf0","okBtn","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLForgetPwd2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.tf0_i18n_i(),this._Label1_i(),this.tf1_i18n_i(),this._Label2_i(),this.tf_i(),this.pwdTf1_i(),this.pwdTf0_i(),this.okBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 258;
		t.y = 139;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 258;
		t.y = 239;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.text = "再次输入";
		t.x = 96;
		t.y = 256;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "*";
		t.textColor = 0xFF5353;
		t.x = 226;
		t.y = 257.5;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.bold = true;
		t.text = "输入密码";
		t.x = 96;
		t.y = 156.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "*";
		t.textColor = 0xFF5353;
		t.x = 226;
		t.y = 164;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "验证码正确  请重新设定密码";
		t.y = 20;
		return t;
	};
	_proto.pwdTf1_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.pwdTf1 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请确认新密码";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 291;
		t.y = 244.5;
		return t;
	};
	_proto.pwdTf0_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.pwdTf0 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请输入新密码";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 291;
		t.y = 144;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.horizontalCenter = 0;
		t.source = "HALL_save_btn_png";
		t.y = 418;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	return HALLForgetPwd2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/login/HALLLoginSkin.exml'] = window.HALLLoginSkin = (function (_super) {
	__extends(HALLLoginSkin, _super);
	function HALLLoginSkin() {
		_super.call(this);
		this.skinParts = ["idTf","pwdTf","loginBtn","tf0_i18n","tf1_i18n","tf2_i18n","ykLoginBtn","guestGrp","helpBtn","forgetPwd","ctxGrp","tf3_i18n"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i(),this.tf3_i18n_i()];
	}
	var _proto = HALLLoginSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 158;
		t.horizontalCenter = 0;
		t.verticalCenter = 160;
		t.width = 1092;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.idTf_i(),this.pwdTf_i(),this.loginBtn_i(),this.ctxGrp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(12,12,14,76);
		t.source = "HALL_input_bg_png";
		t.width = 1092;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_account_bg_png";
		t.x = 1.05;
		t.y = 17.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "HALL_pwd_bg_png";
		t.x = 466.38;
		t.y = 17.5;
		return t;
	};
	_proto.idTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.idTf = t;
		t.a_defaultColor = 0xffffff;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 30;
		t.text = "请输入账号";
		t.textAlign = "left";
		t.textColor = 0xa08973;
		t.verticalAlign = "middle";
		t.width = 280;
		t.x = 140;
		t.y = 20;
		return t;
	};
	_proto.pwdTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.pwdTf = t;
		t.a_defaultColor = 0xffffff;
		t.a_isPwd = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 30;
		t.text = "请输入密码";
		t.textAlign = "left";
		t.textColor = 0xA08973;
		t.verticalAlign = "middle";
		t.width = 280;
		t.x = 609;
		t.y = 19;
		return t;
	};
	_proto.loginBtn_i = function () {
		var t = new eui.Image();
		this.loginBtn = t;
		t.anchorOffsetX = 82.67;
		t.anchorOffsetY = 33.33;
		t.source = "HALL_login_btn_png";
		t.x = 1003.39;
		t.y = 50.16;
		return t;
	};
	_proto.ctxGrp_i = function () {
		var t = new eui.Group();
		this.ctxGrp = t;
		t.x = 216;
		t.y = 100;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.tf0_i18n_i(),this.tf1_i18n_i(),this.guestGrp_i(),this.helpBtn_i(),this.forgetPwd_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_bl_png";
		t.x = 273;
		t.y = 25;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_bl_png";
		t.x = 502.31;
		t.y = 25;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.size = 24;
		t.text = "联系客服       │";
		t.touchEnabled = false;
		t.x = 301;
		t.y = 25;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.size = 24;
		t.text = "找回密码";
		t.touchEnabled = false;
		t.x = 530.31;
		t.y = 25;
		return t;
	};
	_proto.guestGrp_i = function () {
		var t = new eui.Group();
		this.guestGrp = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.tf2_i18n_i(),this.ykLoginBtn_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_bl_png";
		t.x = 34;
		t.y = 25;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.size = 24;
		t.text = "游客登录       │";
		t.touchEnabled = false;
		t.x = 60;
		t.y = 25;
		return t;
	};
	_proto.ykLoginBtn_i = function () {
		var t = new eui.Image();
		this.ykLoginBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.33;
		t.source = "HALL_alpha_mask_png";
		t.width = 210.67;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Image();
		this.helpBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.33;
		t.source = "HALL_alpha_mask_png";
		t.width = 198.67;
		t.x = 209;
		t.y = 0;
		return t;
	};
	_proto.forgetPwd_i = function () {
		var t = new eui.Image();
		this.forgetPwd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.33;
		t.source = "HALL_alpha_mask_png";
		t.width = 248.67;
		t.x = 411;
		t.y = 0;
		return t;
	};
	_proto.tf3_i18n_i = function () {
		var t = new eui.Label();
		this.tf3_i18n = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 31;
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.size = 16;
		t.text = "拒绝不良盗版游戏，保护自我严防受骗，适度游戏训练思考能力\n不应沉迷游戏，享受我们的游戏带给您的乐趣";
		t.textAlign = "center";
		t.x = 456;
		t.y = 667.33;
		return t;
	};
	return HALLLoginSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/login/HALLNeedPhoneCodeSkin.exml'] = window.HALLNeedPhoneCodeSkin = (function (_super) {
	__extends(HALLNeedPhoneCodeSkin, _super);
	function HALLNeedPhoneCodeSkin() {
		_super.call(this);
		this.skinParts = ["getCodeBtn","tf0_i18n","tf1_i18n","tf2_i18n","codeTf","okBtn","closeBtn","phoneTf","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLNeedPhoneCodeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.getCodeBtn_i(),this.tf0_i18n_i(),this.tf1_i18n_i(),this._Label1_i(),this.tf2_i18n_i(),this.codeTf_i(),this.okBtn_i(),this.closeBtn_i(),this.phoneTf_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 340;
		t.x = 236;
		t.y = 242;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_input_rect0_png";
		t.x = 236;
		t.y = 154;
		return t;
	};
	_proto.getCodeBtn_i = function () {
		var t = new HALL.XYButton();
		this.getCodeBtn = t;
		t.a_label = "获取验证码";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 18;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 35;
		t.height = 65;
		t.skinName = "XYButtonSkin";
		t.width = 150;
		t.x = 661.33;
		t.y = 276;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.size = 40;
		t.text = "短信验证码";
		t.x = 302;
		t.y = 20;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.bold = true;
		t.text = "验证码";
		t.x = 101;
		t.y = 263;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "*";
		t.textColor = 0xFF5353;
		t.x = 199;
		t.y = 264.5;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.bold = true;
		t.text = "手机号";
		t.x = 101;
		t.y = 174;
		return t;
	};
	_proto.codeTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.codeTf = t;
		t.a_defaultColor = 0xFFFFFF;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.inputType = "tel";
		t.text = "请输入验证码";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 281.33;
		t.x = 266;
		t.y = 247;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.source = "HALL_ok_btn_png";
		t.x = 406;
		t.y = 410;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	_proto.phoneTf_i = function () {
		var t = new eui.Label();
		this.phoneTf = t;
		t.text = "--";
		t.textColor = 0x8c8c91;
		t.x = 272;
		t.y = 170;
		return t;
	};
	return HALLNeedPhoneCodeSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/mail/HALLAnnounceRenderSkin.exml'] = window.HALLAnnounceRenderSkin = (function (_super) {
	__extends(HALLAnnounceRenderSkin, _super);
	function HALLAnnounceRenderSkin() {
		_super.call(this);
		this.skinParts = ["image_close","image_open","titleTf","infoTf","dateTf"];
		
		this.height = 148;
		this.width = 1029;
		this.elementsContent = [this._Image1_i(),this.image_close_i(),this.image_open_i(),this.titleTf_i(),this.infoTf_i(),this.dateTf_i()];
	}
	var _proto = HALLAnnounceRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_item_bg_png";
		t.top = 0;
		return t;
	};
	_proto.image_close_i = function () {
		var t = new eui.Image();
		this.image_close = t;
		t.left = 16;
		t.source = "HALL_mail_icon1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_open_i = function () {
		var t = new eui.Image();
		this.image_open = t;
		t.left = 16;
		t.source = "HALL_mail_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 148;
		t.size = 30;
		t.text = "已开启公告标题";
		t.textAlign = "left";
		t.top = 9;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.67;
		t.left = 148;
		t.lineSpacing = 8;
		t.size = 20;
		t.text = "我们是打火的撒大大机开双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方火机开发的符合双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方合双方黑客技术发生的很快就粉红色的";
		t.verticalCenter = 15;
		t.width = 868;
		t.wordWrap = true;
		return t;
	};
	_proto.dateTf_i = function () {
		var t = new eui.Label();
		this.dateTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.right = 9;
		t.size = 20;
		t.text = "2019-04-03";
		t.textAlign = "center";
		t.textColor = 0xffbe00;
		t.top = 11;
		t.verticalAlign = "middle";
		t.width = 230;
		return t;
	};
	return HALLAnnounceRenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/mail/HALLMailAlertSkin.exml'] = window.HALLMailAlertSkin = (function (_super) {
	__extends(HALLMailAlertSkin, _super);
	function HALLMailAlertSkin() {
		_super.call(this);
		this.skinParts = ["btn_close","cententTf","image_title","uiGrp"];
		
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLMailAlertSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 750;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "HALL_black_mask_png";
		t.top = 0;
		t.width = 1334;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 520;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 830;
		t.elementsContent = [this._Image2_i(),this.btn_close_i(),this.cententTf_i(),this.image_title_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 8;
		t.y = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.source = "HALL_close_btn_png";
		t.x = 805.33;
		t.y = 2.69;
		return t;
	};
	_proto.cententTf_i = function () {
		var t = new eui.Label();
		this.cententTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 320;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.size = 26;
		t.text = "公告内容";
		t.width = 756.67;
		t.wordWrap = true;
		t.y = 130;
		return t;
	};
	_proto.image_title_i = function () {
		var t = new eui.Image();
		this.image_title = t;
		t.horizontalCenter = 0;
		t.source = "HALL_self_announce_png";
		t.y = 11;
		return t;
	};
	return HALLMailAlertSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/mail/HALLMailItemSkin.exml'] = window.HALLMailItemSkin = (function (_super) {
	__extends(HALLMailItemSkin, _super);
	function HALLMailItemSkin() {
		_super.call(this);
		this.skinParts = ["image_close","image_open","titleTf","infoTf","dateTf"];
		
		this.height = 148;
		this.width = 1029;
		this.elementsContent = [this._Image1_i(),this.image_close_i(),this.image_open_i(),this.titleTf_i(),this.infoTf_i(),this.dateTf_i()];
	}
	var _proto = HALLMailItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_item_bg_png";
		t.top = 0;
		return t;
	};
	_proto.image_close_i = function () {
		var t = new eui.Image();
		this.image_close = t;
		t.left = 16;
		t.source = "HALL_mail_icon_letter1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image_open_i = function () {
		var t = new eui.Image();
		this.image_open = t;
		t.left = 16;
		t.source = "HALL_mail_icon_letter0_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.left = 148;
		t.size = 30;
		t.text = "已开启邮件标题";
		t.textAlign = "left";
		t.top = 9;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.67;
		t.left = 148;
		t.lineSpacing = 8;
		t.size = 20;
		t.text = "我们是打火的撒大大机开双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方火机开发的符合双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方打火机开发的符合双方合双方黑客技术发生的很快就粉红色的";
		t.verticalCenter = 15;
		t.width = 868;
		t.wordWrap = true;
		return t;
	};
	_proto.dateTf_i = function () {
		var t = new eui.Label();
		this.dateTf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.right = 9;
		t.size = 20;
		t.text = "2019-04-03";
		t.textAlign = "center";
		t.textColor = 0xffbe00;
		t.top = 11;
		t.verticalAlign = "middle";
		t.width = 230;
		return t;
	};
	return HALLMailItemSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/mail/HALLMailSkin.exml'] = window.HALLMailSkin = (function (_super) {
	__extends(HALLMailSkin, _super);
	var HALLMailSkin$Skin39 = 	(function (_super) {
		__extends(HALLMailSkin$Skin39, _super);
		var HALLMailSkin$Skin39$Skin40 = 		(function (_super) {
			__extends(HALLMailSkin$Skin39$Skin40, _super);
			function HALLMailSkin$Skin39$Skin40() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALLMailSkin$Skin39$Skin40.prototype;

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
			return HALLMailSkin$Skin39$Skin40;
		})(eui.Skin);

		function HALLMailSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALLMailSkin$Skin39.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = -10;
			t.visible = true;
			t.skinName = HALLMailSkin$Skin39$Skin40;
			return t;
		};
		return HALLMailSkin$Skin39;
	})(eui.Skin);

	var HALLMailSkin$Skin41 = 	(function (_super) {
		__extends(HALLMailSkin$Skin41, _super);
		var HALLMailSkin$Skin41$Skin42 = 		(function (_super) {
			__extends(HALLMailSkin$Skin41$Skin42, _super);
			function HALLMailSkin$Skin41$Skin42() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALLMailSkin$Skin41$Skin42.prototype;

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
			return HALLMailSkin$Skin41$Skin42;
		})(eui.Skin);

		function HALLMailSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALLMailSkin$Skin41.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = -10;
			t.visible = true;
			t.skinName = HALLMailSkin$Skin41$Skin42;
			return t;
		};
		return HALLMailSkin$Skin41;
	})(eui.Skin);

	function HALLMailSkin() {
		_super.call(this);
		this.skinParts = ["tf0_i18n","backBtn","tf1_i18n","deviceInfo","itemContainer","scl0","list1","scl1","list2","scl2","tf2_i18n","infoGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = HALLMailSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_bg2_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(564,2,753,12);
		t.source = "HALL_common_top_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(821,81,361,486);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "HALL_mail_bg_png";
		t.top = 102;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.backBtn_i(),this.tf1_i18n_i(),this.deviceInfo_i()];
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Group();
		this.backBtn = t;
		t.left = 28;
		t.top = 21;
		t.elementsContent = [this._Image4_i(),this.tf0_i18n_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.source = "HALL_act_back_png";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 47;
		t.lineSpacing = 0;
		t.size = 36;
		t.text = "返 回";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 94;
		t.x = 83;
		t.y = 6;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 52;
		t.text = "邮 件";
		t.verticalCenter = -12;
		return t;
	};
	_proto.deviceInfo_i = function () {
		var t = new HALL.HALLDeviceInfo();
		this.deviceInfo = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "HALLDeviceInfoSkin";
		t.top = 22;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 102;
		t.touchEnabled = false;
		t.elementsContent = [this.scl0_i(),this.scl1_i(),this.scl2_i(),this.infoGrp_i()];
		return t;
	};
	_proto.scl0_i = function () {
		var t = new XYScroller();
		this.scl0 = t;
		t.height = 597;
		t.width = 274;
		t.x = 20;
		t.y = 20;
		t.viewport = this.itemContainer_i();
		return t;
	};
	_proto.itemContainer_i = function () {
		var t = new eui.Group();
		this.itemContainer = t;
		return t;
	};
	_proto.scl1_i = function () {
		var t = new XYScroller();
		this.scl1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 31;
		t.left = 295;
		t.right = 13;
		t.top = 20;
		t.skinName = HALLMailSkin$Skin39;
		t.viewport = this.list1_i();
		return t;
	};
	_proto.list1_i = function () {
		var t = new eui.List();
		this.list1 = t;
		return t;
	};
	_proto.scl2_i = function () {
		var t = new XYScroller();
		this.scl2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 31;
		t.left = 295;
		t.right = 13;
		t.top = 20;
		t.skinName = HALLMailSkin$Skin41;
		t.viewport = this.list2_i();
		return t;
	};
	_proto.list2_i = function () {
		var t = new eui.List();
		this.list2 = t;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.left = 295;
		t.right = 5;
		t.y = 220.58;
		t.elementsContent = [this.tf2_i18n_i()];
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 139;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 983;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALLMailSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/component/HALLGameItemIconSkin.exml'] = window.HALLGameItemIconSkin = (function (_super) {
	__extends(HALLGameItemIconSkin, _super);
	function HALLGameItemIconSkin() {
		_super.call(this);
		this.skinParts = ["img","lightGif","downloadBtn","proImg","loadTf","loadGrp","downloadGrp"];
		
		this.height = 248;
		this.width = 222;
		this.elementsContent = [this.img_i(),this.lightGif_i(),this.downloadGrp_i()];
	}
	var _proto = HALLGameItemIconSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 248;
		t.source = "HALL_icon_DDZ_png";
		t.width = 222;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lightGif_i = function () {
		var t = new eui.Image();
		this.lightGif = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "light3_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.downloadGrp_i = function () {
		var t = new eui.Group();
		this.downloadGrp = t;
		t.height = 248;
		t.width = 222;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.downloadBtn_i(),this.loadGrp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HALL_download_mask_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.downloadBtn_i = function () {
		var t = new eui.Group();
		this.downloadBtn = t;
		t.x = 70;
		t.y = 82;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_download_icon_png";
		t.x = 19;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 14;
		t.text = "DOWNLOAD";
		t.x = 0;
		t.y = 58;
		return t;
	};
	_proto.loadGrp_i = function () {
		var t = new eui.Group();
		this.loadGrp = t;
		t.height = 248;
		t.width = 222;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.proImg_i(),this.loadTf_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "HALL_download_pro_bg_png";
		t.x = 28;
		t.y = 144.6;
		return t;
	};
	_proto.proImg_i = function () {
		var t = new eui.Image();
		this.proImg = t;
		t.scale9Grid = new egret.Rectangle(8,1,147,10);
		t.source = "HALL_download_pro_png";
		t.x = 31;
		t.y = 147.6;
		return t;
	};
	_proto.loadTf_i = function () {
		var t = new eui.Label();
		this.loadTf = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.strokeColor = 0x636363;
		t.text = "100%";
		t.textColor = 0xffffff;
		t.y = 91;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 14;
		t.text = "LOADING...";
		t.y = 122;
		return t;
	};
	return HALLGameItemIconSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/component/HALLNoticeSkin.exml'] = window.HALLNoticeSkin = (function (_super) {
	__extends(HALLNoticeSkin, _super);
	function HALLNoticeSkin() {
		_super.call(this);
		this.skinParts = ["msk","tf","noticeBtn"];
		
		this.height = 49;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.msk_i(),this.tf_i(),this.noticeBtn_i()];
	}
	var _proto = HALLNoticeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HALL_notice_bg_png";
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.msk_i = function () {
		var t = new eui.Image();
		this.msk = t;
		t.height = 49;
		t.source = "HALL_dark_mask_png";
		t.width = 414;
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.height = 49;
		t.size = 20;
		t.text = "";
		t.verticalAlign = "middle";
		t.x = 49;
		t.y = 0;
		return t;
	};
	_proto.noticeBtn_i = function () {
		var t = new eui.Group();
		this.noticeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.width = 49;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_alpha_mask_png";
		t.top = 0;
		return t;
	};
	return HALLNoticeSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/component/HALLRandomGameDetailBtnSkin.exml'] = window.HALLRandomGameDetailBtnSkin = (function (_super) {
	__extends(HALLRandomGameDetailBtnSkin, _super);
	function HALLRandomGameDetailBtnSkin() {
		_super.call(this);
		this.skinParts = ["bg","roomType","difenTf","limitTf","limitTf0"];
		
		this.height = 380;
		this.width = 280;
		this.elementsContent = [this.bg_i()];
		this.roomType_i();
		
		this.difenTf_i();
		
		this.limitTf_i();
		
		this.limitTf0_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.AddItems("roomType","",1,""),
					new eui.AddItems("difenTf","",1,""),
					new eui.AddItems("limitTf","",1,"")
				])
			,
			new eui.State ("dzpk",
				[
					new eui.AddItems("roomType","",1,""),
					new eui.AddItems("difenTf","",1,""),
					new eui.AddItems("limitTf","",1,""),
					new eui.AddItems("limitTf0","",1,"")
				])
			,
			new eui.State ("create",
				[
				])
			,
			new eui.State ("join",
				[
				])
		];
	}
	var _proto = HALLRandomGameDetailBtnSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "HALL_icon_DDZ_s_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.roomType_i = function () {
		var t = new eui.Image();
		this.roomType = t;
		t.source = "HALL_text_djc_png";
		t.x = 17;
		t.y = 285;
		return t;
	};
	_proto.difenTf_i = function () {
		var t = new eui.BitmapLabel();
		this.difenTf = t;
		t.font = "HALL_coin_number_fnt";
		t.height = 46;
		t.horizontalCenter = 0;
		t.letterSpacing = -6;
		t.text = "198f";
		t.verticalAlign = "middle";
		t.y = 18;
		return t;
	};
	_proto.limitTf_i = function () {
		var t = new eui.Label();
		this.limitTf = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "最低入场 50 金币";
		t.y = 77;
		return t;
	};
	_proto.limitTf0_i = function () {
		var t = new eui.Label();
		this.limitTf0 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "最低入场 50 金币";
		t.y = 345;
		return t;
	};
	return HALLRandomGameDetailBtnSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/component/HALLRandomGameDetailSkin.exml'] = window.HALLRandomGameDetailSkin = (function (_super) {
	__extends(HALLRandomGameDetailSkin, _super);
	function HALLRandomGameDetailSkin() {
		_super.call(this);
		this.skinParts = ["typeImg","typeTf","goFriendBtn","tmp0","tmp1","ctx","scl"];
		
		this.height = 516;
		this.width = 1334;
		this.elementsContent = [this.goFriendBtn_i(),this.scl_i()];
	}
	var _proto = HALLRandomGameDetailSkin.prototype;

	_proto.goFriendBtn_i = function () {
		var t = new eui.Group();
		this.goFriendBtn = t;
		t.x = 0;
		t.y = -64;
		t.elementsContent = [this.typeImg_i(),this.typeTf_i()];
		return t;
	};
	_proto.typeImg_i = function () {
		var t = new eui.Image();
		this.typeImg = t;
		t.source = "HALL_icon_DDZ_b_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.typeTf_i = function () {
		var t = new eui.Image();
		this.typeTf = t;
		t.source = "HALL_icon_BJL_text_png";
		t.x = 38;
		t.y = 486;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 380;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 893;
		t.x = 441;
		t.y = 68;
		t.viewport = this.ctx_i();
		return t;
	};
	_proto.ctx_i = function () {
		var t = new eui.Group();
		this.ctx = t;
		t.elementsContent = [this.tmp0_i(),this.tmp1_i()];
		return t;
	};
	_proto.tmp0_i = function () {
		var t = new eui.Image();
		this.tmp0 = t;
		t.source = "HALL_icon_DDZ_s_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.tmp1_i = function () {
		var t = new eui.Image();
		this.tmp1 = t;
		t.source = "HALL_icon_DDZ_s_png";
		t.x = 295;
		t.y = 1;
		return t;
	};
	return HALLRandomGameDetailSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/component/HALLRandomGameListSkin.exml'] = window.HALLRandomGameListSkin = (function (_super) {
	__extends(HALLRandomGameListSkin, _super);
	function HALLRandomGameListSkin() {
		_super.call(this);
		this.skinParts = ["goFriendBtn","tmp0","tmp1","tmp2","ctx","scl"];
		
		this.height = 516;
		this.width = 1334;
		this.elementsContent = [this.goFriendBtn_i(),this.scl_i()];
	}
	var _proto = HALLRandomGameListSkin.prototype;

	_proto.goFriendBtn_i = function () {
		var t = new eui.Image();
		this.goFriendBtn = t;
		t.height = 516;
		t.source = "HALL_alpha_mask_png";
		t.width = 407;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 516;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 866;
		t.x = 448;
		t.y = 0;
		t.viewport = this.ctx_i();
		return t;
	};
	_proto.ctx_i = function () {
		var t = new eui.Group();
		this.ctx = t;
		t.elementsContent = [this.tmp0_i(),this.tmp1_i(),this.tmp2_i()];
		return t;
	};
	_proto.tmp0_i = function () {
		var t = new eui.Image();
		this.tmp0 = t;
		t.source = "HALL_icon_DDZ_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tmp1_i = function () {
		var t = new eui.Image();
		this.tmp1 = t;
		t.source = "HALL_icon_DDZ_png";
		t.x = 243;
		t.y = 0;
		return t;
	};
	_proto.tmp2_i = function () {
		var t = new eui.Image();
		this.tmp2 = t;
		t.source = "HALL_icon_DDZ_png";
		t.x = 0;
		t.y = 268;
		return t;
	};
	return HALLRandomGameListSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/component/HALLTakeCoinToGameSkin.exml'] = window.HALLTakeCoinToGameSkin = (function (_super) {
	__extends(HALLTakeCoinToGameSkin, _super);
	function HALLTakeCoinToGameSkin() {
		_super.call(this);
		this.skinParts = ["rebuyBtn","textInput","tf0_i18n","sliderBg","sliderBar","sliderBtn","maxBtn","okBtn","titleTf","cancelBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLTakeCoinToGameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 402;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 620;
		t.elementsContent = [this._Image2_i(),this._Group3_i(),this.okBtn_i(),this.titleTf_i(),this.cancelBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(31,54,10,327);
		t.source = "HALL_alert_bg_600_png";
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.y = 102;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 30;
		t.right = 28;
		t.y = 16;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.rebuyBtn_i(),this.textInput_i(),this.tf0_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(62,8,903,56);
		t.source = "HALL_input_rect1_png";
		t.width = 318;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_exchange_send_icon_png";
		t.verticalCenter = 0.5;
		t.x = 14;
		return t;
	};
	_proto.rebuyBtn_i = function () {
		var t = new eui.Image();
		this.rebuyBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "HALL_person_open_png";
		t.x = 462.4;
		t.y = 11;
		return t;
	};
	_proto.textInput_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.textInput = t;
		t.anchorOffsetX = 0;
		t.height = 65;
		t.inputType = "tel";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "请输入携带金额";
		t.textAlign = "left";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 249;
		t.x = 68;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.size = 26;
		t.text = "自动买入:";
		t.x = 346;
		t.y = 19.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 30;
		t.right = 28;
		t.y = 108;
		t.elementsContent = [this._Image5_i(),this.sliderBg_i(),this.sliderBar_i(),this.sliderBtn_i(),this.maxBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.left = 0;
		t.right = 169;
		t.scale9Grid = new egret.Rectangle(101,2,610,16);
		t.source = "HALL_common_slider_bg_png";
		t.y = 30;
		return t;
	};
	_proto.sliderBg_i = function () {
		var t = new eui.Image();
		this.sliderBg = t;
		t.height = 60;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "HALL_alpha_mask_png";
		t.width = 420;
		t.x = -10;
		t.y = 0;
		return t;
	};
	_proto.sliderBar_i = function () {
		var t = new eui.Image();
		this.sliderBar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.scale9Grid = new egret.Rectangle(101,2,610,16);
		t.source = "HALL_common_slider_bg_png";
		t.width = 370;
		t.x = 25;
		t.y = 30;
		return t;
	};
	_proto.sliderBtn_i = function () {
		var t = new eui.Image();
		this.sliderBtn = t;
		t.height = 58;
		t.source = "HALL_exchange_slider_png";
		t.width = 58;
		t.x = -4;
		t.y = 6;
		return t;
	};
	_proto.maxBtn_i = function () {
		var t = new eui.Image();
		this.maxBtn = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 30;
		t.right = 4;
		t.source = "HALL_exchange_btn6_png";
		t.y = 30;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.horizontalCenter = 0;
		t.source = "HALL_ok_btn_png";
		t.width = 250;
		t.y = 308;
		return t;
	};
	_proto.titleTf_i = function () {
		var t = new eui.Label();
		this.titleTf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "携带金额";
		t.y = 18;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 612;
		t.y = 2.33;
		return t;
	};
	return HALLTakeCoinToGameSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/component/HALLUserSimpleInfoSkin.exml'] = window.HALLUserSimpleInfoSkin = (function (_super) {
	__extends(HALLUserSimpleInfoSkin, _super);
	function HALLUserSimpleInfoSkin() {
		_super.call(this);
		this.skinParts = ["headMsk","head","nickTf","idTf","coinTf","refreshCoinBtn"];
		
		this.currentState = "player";
		this.height = 66;
		this.width = 425;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.headMsk_i(),this.head_i(),this._Image4_i(),this.nickTf_i(),this.coinTf_i(),this._Image5_i(),this.refreshCoinBtn_i()];
		this.idTf_i();
		
		this.states = [
			new eui.State ("yk",
				[
					new eui.SetProperty("nickTf","y",23)
				])
			,
			new eui.State ("player",
				[
					new eui.AddItems("idTf","",2,"coinTf"),
					new eui.SetProperty("nickTf","y",6)
				])
		];
	}
	var _proto = HALLUserSimpleInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HALL_gap_png";
		t.x = 205;
		t.y = 11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(29,6,127,37);
		t.source = "HALL_coin_bg_png";
		t.width = 204;
		t.x = 220;
		t.y = 9;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "HALL_coin_png";
		t.x = 220;
		t.y = 9;
		return t;
	};
	_proto.headMsk_i = function () {
		var t = new eui.Image();
		this.headMsk = t;
		t.source = "HALL_head_mask_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.height = 66;
		t.width = 66;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_head_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.size = 20;
		t.text = "1234567890a";
		t.textColor = 0xC69C6D;
		t.x = 82;
		return t;
	};
	_proto.idTf_i = function () {
		var t = new eui.Label();
		this.idTf = t;
		t.size = 18;
		t.text = "1234567890a";
		t.textColor = 0xFFFFFF;
		t.x = 82;
		t.y = 37;
		return t;
	};
	_proto.coinTf_i = function () {
		var t = new eui.Label();
		this.coinTf = t;
		t.size = 20;
		t.text = "1234567890a";
		t.textColor = 0xC69C6D;
		t.x = 273;
		t.y = 23;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "HALL_refresh_png";
		t.x = 383;
		t.y = 19;
		return t;
	};
	_proto.refreshCoinBtn_i = function () {
		var t = new eui.Image();
		this.refreshCoinBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.source = "HALL_alpha_mask_png";
		t.width = 51;
		t.x = 374;
		t.y = 0;
		return t;
	};
	return HALLUserSimpleInfoSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/main/HALLMainSkin.exml'] = window.HALLMainSkin = (function (_super) {
	__extends(HALLMainSkin, _super);
	function HALLMainSkin() {
		_super.call(this);
		this.skinParts = ["userInfo","notice","deviceInfo","randomMain","rechargeBtn","mailBtn","activityBtn","safeBtn","untiRechargeBtn","agentBtn","settingBtn","bottomGrp","gap0","gap1","gap2","gap3","gap4","gap5","menuTab0","menuTab1","menuTab2","menuTab3","menuTab4","menuTab5","menuTab6","grp3rd","bottomGrp3rd","tf0_i18n","backBtn"];
		
		this.currentState = "hall";
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.userInfo_i(),this.deviceInfo_i(),this.randomMain_i(),this.bottomGrp_i(),this.bottomGrp3rd_i()];
		this.notice_i();
		
		this._Image19_i();
		
		this.backBtn_i();
		
		this.states = [
			new eui.State ("hall",
				[
					new eui.AddItems("notice","",2,"deviceInfo")
				])
			,
			new eui.State ("game",
				[
					new eui.AddItems("_Image19","",1,""),
					new eui.AddItems("backBtn","",1,""),
					new eui.SetProperty("_Image1","source","HALL_main_bg2_png"),
					new eui.SetProperty("_Image2","source","HALL_Navigationbar2_png"),
					new eui.SetProperty("userInfo","x",287),
					new eui.SetProperty("_Image19","x",244),
					new eui.SetProperty("_Image19","y",24)
				])
			,
			new eui.State ("friendMain",
				[
					new eui.AddItems("_Image19","",1,""),
					new eui.AddItems("backBtn","",1,""),
					new eui.SetProperty("_Image1","source","HALL_main_bg2_png"),
					new eui.SetProperty("_Image2","source","HALL_Navigationbar2_png"),
					new eui.SetProperty("userInfo","x",287),
					new eui.SetProperty("_Image19","x",244),
					new eui.SetProperty("_Image19","y",24)
				])
			,
			new eui.State ("friendCreate",
				[
					new eui.AddItems("_Image19","",1,""),
					new eui.AddItems("backBtn","",1,""),
					new eui.SetProperty("_Image1","source","HALL_main_bg2_png"),
					new eui.SetProperty("_Image2","source","HALL_Navigationbar2_png"),
					new eui.SetProperty("userInfo","x",287),
					new eui.SetProperty("_Image19","x",244),
					new eui.SetProperty("_Image19","y",24)
				])
		];
	}
	var _proto = HALLMainSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(999,11,269,72);
		t.source = "HALL_Navigationbar_png";
		t.y = 0;
		return t;
	};
	_proto.userInfo_i = function () {
		var t = new HALL.HALLUserSimpleInfo();
		this.userInfo = t;
		t.skinName = "HALLUserSimpleInfoSkin";
		t.x = 24;
		t.y = 14;
		return t;
	};
	_proto.notice_i = function () {
		var t = new HALL.HALLNotice();
		this.notice = t;
		t.anchorOffsetX = 0;
		t.skinName = "HALLNoticeSkin";
		t.width = 480;
		t.x = 494;
		t.y = 23;
		return t;
	};
	_proto.deviceInfo_i = function () {
		var t = new HALL.HALLDeviceInfo();
		this.deviceInfo = t;
		t.right = 0;
		t.skinName = "HALLDeviceInfoSkin";
		t.y = 22;
		return t;
	};
	_proto.randomMain_i = function () {
		var t = new HALL.HALLRandomGameList();
		this.randomMain = t;
		t.horizontalCenter = 0;
		t.skinName = "HALLRandomGameListSkin";
		t.verticalCenter = -2;
		t.width = 1334;
		return t;
	};
	_proto.bottomGrp_i = function () {
		var t = new eui.Group();
		this.bottomGrp = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.rechargeBtn_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this.mailBtn_i(),this.activityBtn_i(),this.safeBtn_i(),this.untiRechargeBtn_i(),this.agentBtn_i(),this.settingBtn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "HALL_tab_bar_bg_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_agent_png";
		t.visible = false;
		t.x = 954;
		t.y = 101;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_mail_png";
		t.visible = false;
		t.x = 89;
		t.y = 101;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_activity_png";
		t.visible = false;
		t.x = 260;
		t.y = 97;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_safe_png";
		t.visible = false;
		t.x = 432;
		t.y = 99;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_setting_png";
		t.x = 1130.5;
		t.y = 96;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "HALL_icon_unti_recharge_png";
		t.visible = false;
		t.x = 777;
		t.y = 97;
		return t;
	};
	_proto.rechargeBtn_i = function () {
		var t = new eui.Group();
		this.rechargeBtn = t;
		t.visible = false;
		t.x = 607;
		t.y = 11;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 57;
		t.source = "HALL_icon_recharge_png";
		t.x = 59;
		t.y = 57;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "HALL_recharge_btn_png";
		t.x = 0;
		t.y = 84;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "HALL_gap_png";
		t.visible = false;
		t.x = 219;
		t.y = 96;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "HALL_gap_png";
		t.visible = false;
		t.x = 391;
		t.y = 96;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "HALL_gap_png";
		t.visible = false;
		t.x = 918;
		t.y = 96;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "HALL_gap_png";
		t.visible = false;
		t.x = 1091;
		t.y = 96;
		return t;
	};
	_proto.mailBtn_i = function () {
		var t = new eui.Image();
		this.mailBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "HALL_alpha_mask_png";
		t.visible = false;
		t.width = 164;
		t.x = 55;
		t.y = 77;
		return t;
	};
	_proto.activityBtn_i = function () {
		var t = new eui.Image();
		this.activityBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "HALL_alpha_mask_png";
		t.visible = false;
		t.width = 164;
		t.x = 227;
		t.y = 77;
		return t;
	};
	_proto.safeBtn_i = function () {
		var t = new eui.Image();
		this.safeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "HALL_alpha_mask_png";
		t.visible = false;
		t.width = 164;
		t.x = 399;
		t.y = 77;
		return t;
	};
	_proto.untiRechargeBtn_i = function () {
		var t = new eui.Image();
		this.untiRechargeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "HALL_alpha_mask_png";
		t.visible = false;
		t.width = 164;
		t.x = 758;
		t.y = 77;
		return t;
	};
	_proto.agentBtn_i = function () {
		var t = new eui.Image();
		this.agentBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "HALL_alpha_mask_png";
		t.visible = false;
		t.width = 164;
		t.x = 927;
		t.y = 77;
		return t;
	};
	_proto.settingBtn_i = function () {
		var t = new eui.Image();
		this.settingBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "HALL_alpha_mask_png";
		t.width = 164;
		t.x = 1101;
		t.y = 77;
		return t;
	};
	_proto.bottomGrp3rd_i = function () {
		var t = new eui.Group();
		this.bottomGrp3rd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this.grp3rd_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(5,12,12,76);
		t.source = "HALL_main_json.HALL_tab_bar_bg2_png";
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_json.HALL_tab_bar_bg_line_png";
		t.y = 0;
		return t;
	};
	_proto.grp3rd_i = function () {
		var t = new eui.Group();
		this.grp3rd = t;
		t.horizontalCenter = 0;
		t.y = 23;
		t.elementsContent = [this.gap0_i(),this.gap1_i(),this.gap2_i(),this.gap3_i(),this.gap4_i(),this.gap5_i(),this.menuTab0_i(),this.menuTab1_i(),this.menuTab2_i(),this.menuTab3_i(),this.menuTab4_i(),this.menuTab5_i(),this.menuTab6_i()];
		return t;
	};
	_proto.gap0_i = function () {
		var t = new eui.Image();
		this.gap0 = t;
		t.height = 61;
		t.source = "HALL_gap_png";
		t.x = 221;
		t.y = 0;
		return t;
	};
	_proto.gap1_i = function () {
		var t = new eui.Image();
		this.gap1 = t;
		t.height = 61;
		t.source = "HALL_gap_png";
		t.x = 484;
		t.y = 0;
		return t;
	};
	_proto.gap2_i = function () {
		var t = new eui.Image();
		this.gap2 = t;
		t.height = 61;
		t.source = "HALL_gap_png";
		t.x = 745;
		t.y = 0;
		return t;
	};
	_proto.gap3_i = function () {
		var t = new eui.Image();
		this.gap3 = t;
		t.height = 61;
		t.source = "HALL_gap_png";
		t.x = 1003;
		t.y = 0;
		return t;
	};
	_proto.gap4_i = function () {
		var t = new eui.Image();
		this.gap4 = t;
		t.height = 61;
		t.source = "HALL_gap_png";
		t.x = 1261;
		return t;
	};
	_proto.gap5_i = function () {
		var t = new eui.Image();
		this.gap5 = t;
		t.height = 61;
		t.source = "HALL_gap_png";
		t.x = 1271;
		return t;
	};
	_proto.menuTab0_i = function () {
		var t = new eui.Image();
		this.menuTab0 = t;
		t.source = "HALL_main_json.HALL_tab_0_png";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.menuTab1_i = function () {
		var t = new eui.Image();
		this.menuTab1 = t;
		t.source = "HALL_main_json.HALL_tab_1_png";
		t.x = 260;
		t.y = 4;
		return t;
	};
	_proto.menuTab2_i = function () {
		var t = new eui.Image();
		this.menuTab2 = t;
		t.source = "HALL_main_json.HALL_tab_2_png";
		t.x = 520;
		t.y = 4;
		return t;
	};
	_proto.menuTab3_i = function () {
		var t = new eui.Image();
		this.menuTab3 = t;
		t.source = "HALL_main_json.HALL_tab_3_png";
		t.x = 780;
		t.y = 4;
		return t;
	};
	_proto.menuTab4_i = function () {
		var t = new eui.Image();
		this.menuTab4 = t;
		t.source = "HALL_main_json.HALL_tab_4_png";
		t.x = 1040;
		t.y = 4;
		return t;
	};
	_proto.menuTab5_i = function () {
		var t = new eui.Image();
		this.menuTab5 = t;
		t.source = "HALL_tab_5_png";
		t.x = 1040;
		t.y = 4;
		return t;
	};
	_proto.menuTab6_i = function () {
		var t = new eui.Group();
		this.menuTab6 = t;
		t.height = 50;
		t.width = 194;
		t.x = 1040;
		t.y = 4;
		t.elementsContent = [this._Image18_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.top = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		this._Image19 = t;
		t.source = "HALL_gap_png";
		t.x = 351;
		t.y = 21;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Group();
		this.backBtn = t;
		t.x = 20;
		t.y = 17;
		t.elementsContent = [this._Image20_i(),this.tf0_i18n_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "HALL_back_btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.size = 36;
		t.text = "返 回";
		t.x = 83;
		t.y = 12;
		return t;
	};
	return HALLMainSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/noReg/HALL_NoRegSkin.exml'] = window.HALL_NoRegSkin = (function (_super) {
	__extends(HALL_NoRegSkin, _super);
	function HALL_NoRegSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","regBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALL_NoRegSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 540;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1240;
		t.elementsContent = [this._Image2_i(),this.closeBtn_i(),this.regBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_reg_banner02_png";
		t.x = 0;
		t.y = -74;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "HALL_reg_btn_guanbi01_png";
		t.x = 1191;
		t.y = 0;
		return t;
	};
	_proto.regBtn_i = function () {
		var t = new eui.Image();
		this.regBtn = t;
		t.source = "HALL_reg_btn_zhuce02_png";
		t.x = 478.5;
		t.y = 478;
		return t;
	};
	return HALL_NoRegSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/person/HALLPersonBindAlipaySkin.exml'] = window.HALLPersonBindAlipaySkin = (function (_super) {
	__extends(HALLPersonBindAlipaySkin, _super);
	function HALLPersonBindAlipaySkin() {
		_super.call(this);
		this.skinParts = ["tf0_i18n","tf","tf0","tf1_i18n","tf1","tf2_i18n","okBtn","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLPersonBindAlipaySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.tf0_i18n_i(),this.tf_i(),this.tf0_i(),this.tf1_i18n_i(),this.tf1_i(),this.tf2_i18n_i(),this.okBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 256;
		t.y = 140;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 256;
		t.y = 219;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.right = 568;
		t.text = "支付宝账号";
		t.y = 158.5;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "绑定支付宝";
		t.y = 20;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.tf0 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = false;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请输入支付宝账号";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 289;
		t.y = 145;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.bold = true;
		t.right = 568;
		t.text = "收款人姓名";
		t.y = 237.5;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.tf1 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = false;
		t.a_useSysKeyboard = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请输入收款人姓名";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 289;
		t.y = 224;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.lineSpacing = 10;
		t.size = 18;
		t.text = "温馨提示：绑定支付宝成功后无法自行修改，请仔细填写您的姓名和帐号！";
		t.textColor = 0xFF5353;
		t.x = 107;
		t.y = 330.5;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.source = "HALL_person_bind_btn_png";
		t.x = 406;
		t.y = 423;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	return HALLPersonBindAlipaySkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/person/HALLPersonBindBankSkin.exml'] = window.HALLPersonBindBankSkin = (function (_super) {
	__extends(HALLPersonBindBankSkin, _super);
	function HALLPersonBindBankSkin() {
		_super.call(this);
		this.skinParts = ["sureCodeTf","tf0_i18n","tf","tf0","tf1_i18n","tf1","tf2_i18n","tf2","tf3_i18n","tf3","otherGrp","tf4_i18n","okBtn","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLPersonBindBankSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 560;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.sureCodeTf_i(),this.tf0_i18n_i(),this.tf_i(),this.tf0_i(),this.otherGrp_i(),this.tf4_i18n_i(),this.okBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(101,99,606,346);
		t.source = "HALL_alert_bg_800_png";
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 256;
		t.y = 99;
		return t;
	};
	_proto.sureCodeTf_i = function () {
		var t = new eui.Label();
		this.sureCodeTf = t;
		t.bold = true;
		t.text = "";
		t.x = 289;
		t.y = 173.5;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.right = 568;
		t.text = "银行卡卡号";
		t.y = 117.5;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "绑定银行卡";
		t.y = 20;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.tf0 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = false;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.inputType = "tel";
		t.maxChars = 20;
		t.text = "请输入银行卡卡号";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 289;
		t.y = 104;
		return t;
	};
	_proto.otherGrp_i = function () {
		var t = new eui.Group();
		this.otherGrp = t;
		t.x = 85;
		t.y = 175;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this.tf1_i18n_i(),this.tf1_i(),this.tf2_i18n_i(),this.tf2_i(),this.tf3_i18n_i(),this.tf3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 171;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 171;
		t.y = 77;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 171;
		t.y = 154;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.bold = true;
		t.right = 517;
		t.text = "收款人姓名";
		t.y = 18.5;
		return t;
	};
	_proto.tf1_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.tf1 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = false;
		t.a_useSysKeyboard = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请输入收款人姓名";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 204;
		t.y = 5;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.bold = true;
		t.right = 517;
		t.text = "开户银行";
		t.y = 95.5;
		return t;
	};
	_proto.tf2_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.tf2 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = false;
		t.a_useSysKeyboard = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请选择开户银行";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 204;
		t.y = 82;
		return t;
	};
	_proto.tf3_i18n_i = function () {
		var t = new eui.Label();
		this.tf3_i18n = t;
		t.bold = true;
		t.right = 517;
		t.text = "开户支行";
		t.y = 172.5;
		return t;
	};
	_proto.tf3_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.tf3 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = false;
		t.a_useSysKeyboard = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请输入开户支行";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 204;
		t.y = 159;
		return t;
	};
	_proto.tf4_i18n_i = function () {
		var t = new eui.Label();
		this.tf4_i18n = t;
		t.lineSpacing = 10;
		t.size = 18;
		t.text = "温馨提示：绑定银行卡后无法修改\n请仔细填写您的银行卡信息！";
		t.textColor = 0xFF5353;
		t.width = 390;
		t.x = 79;
		t.y = 470.5;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.source = "HALL_person_bind_btn_png";
		t.x = 641.64;
		t.y = 495;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	return HALLPersonBindBankSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/person/HALLPersonBindPhoneSkin.exml'] = window.HALLPersonBindPhoneSkin = (function (_super) {
	__extends(HALLPersonBindPhoneSkin, _super);
	function HALLPersonBindPhoneSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","cancelBtn","tf0_i18n","tf1_i18n","tf","phoneTf","codeTf","tf2_i18n","pwdTf","tf3_i18n","pwdTf1","getCodeBtn","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLPersonBindPhoneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 550;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this.okBtn_i(),this.cancelBtn_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.tf0_i18n_i(),this.tf1_i18n_i(),this.tf_i(),this.phoneTf_i(),this.codeTf_i(),this.tf2_i18n_i(),this.pwdTf_i(),this.tf3_i18n_i(),this.pwdTf1_i(),this.getCodeBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(101,448,606,18);
		t.source = "HALL_alert_bg_800_png";
		t.top = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.source = "HALL_person_bind_btn_png";
		t.x = 559;
		t.y = 489.98;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.source = "HALL_cancel_btn_png";
		t.x = 264;
		t.y = 489.98;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 234;
		t.y = 191.04;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 234;
		t.y = 110.68;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 234;
		t.y = 270.38;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 234;
		t.y = 351.05;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.right = 584;
		t.text = "输入验证码";
		t.y = 208.54;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.bold = true;
		t.right = 585;
		t.text = "输入手机";
		t.y = 127.68;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "绑定手机";
		t.y = 20;
		return t;
	};
	_proto.phoneTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.phoneTf = t;
		t.a_defaultColor = 0xffffff;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.inputType = "tel";
		t.text = "请输入手机号";
		t.textColor = 0x8c8c91;
		t.verticalAlign = "middle";
		t.width = 271.33;
		t.x = 275;
		t.y = 114.68;
		return t;
	};
	_proto.codeTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.codeTf = t;
		t.a_defaultColor = 0xFFFFFF;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.inputType = "tel";
		t.text = "请输入验证码";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 450;
		t.x = 275;
		t.y = 196.04;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.bold = true;
		t.right = 585;
		t.text = "设置密码";
		t.y = 287.88;
		return t;
	};
	_proto.pwdTf_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.pwdTf = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请设置密码";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 450;
		t.x = 275;
		t.y = 275.38;
		return t;
	};
	_proto.tf3_i18n_i = function () {
		var t = new eui.Label();
		this.tf3_i18n = t;
		t.bold = true;
		t.right = 585;
		t.text = "绑定代理";
		t.y = 368.55;
		return t;
	};
	_proto.pwdTf1_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.pwdTf1 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_isPwd = false;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.inputType = "tel";
		t.text = "请输入代理id";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 450;
		t.x = 275;
		t.y = 356.05;
		return t;
	};
	_proto.getCodeBtn_i = function () {
		var t = new HALL.XYButton();
		this.getCodeBtn = t;
		t.a_label = "获取验证码";
		t.a_labelColor = 0xffffff;
		t.a_labelSize = 18;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 20;
		t.height = 40;
		t.skinName = "XYButtonSkin";
		t.width = 130;
		t.x = 655.33;
		t.y = 142.68;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	return HALLPersonBindPhoneSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/person/HALLPersonEditNickSkin.exml'] = window.HALLPersonEditNickSkin = (function (_super) {
	__extends(HALLPersonEditNickSkin, _super);
	function HALLPersonEditNickSkin() {
		_super.call(this);
		this.skinParts = ["tf0_i18n","tf","tf0","okBtn","cancelBtn","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLPersonEditNickSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.tf0_i18n_i(),this.tf_i(),this.tf0_i(),this.okBtn_i(),this.cancelBtn_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.scale9Grid = new egret.Rectangle(122,17,737,37);
		t.source = "HALL_input_rect1_png";
		t.width = 500;
		t.x = 258;
		t.y = 161;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.text = "输入昵称";
		t.x = 96;
		t.y = 179.5;
		return t;
	};
	_proto.tf_i = function () {
		var t = new eui.Label();
		this.tf = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "修改昵称";
		t.y = 20;
		return t;
	};
	_proto.tf0_i = function () {
		var t = new keyboard.PlaceholdLabel();
		this.tf0 = t;
		t.a_defaultColor = 0xFFFFFF;
		t.a_useSysKeyboard = true;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "请输入新昵称";
		t.textColor = 0x8C8C91;
		t.verticalAlign = "middle";
		t.width = 440;
		t.x = 291;
		t.y = 166;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.source = "HALL_save_btn_png";
		t.x = 559;
		t.y = 418;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.anchorOffsetX = 127;
		t.anchorOffsetY = 37;
		t.source = "HALL_cancel_btn_png";
		t.x = 264;
		t.y = 418;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	return HALLPersonEditNickSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/person/HALLPersonSkin.exml'] = window.HALLPersonSkin = (function (_super) {
	__extends(HALLPersonSkin, _super);
	function HALLPersonSkin() {
		_super.call(this);
		this.skinParts = ["head","changeHeadBtn","sex","tf0_i18n","creditBtn","coinTf","bankTf","creditTf","coinGrp","leftGrp","bindPhoneBtn","bindBankBtn","copyIdBtn","editNickBtn","bgmBtn","musicBtn","logoutBtn","nickTf","idTf","phoneTf","bankIdTf","bindZfbBtn","zfbTf","aliGrp","tf1_i18n","tf2_i18n","versionTf","infoGrp","cancelBtn","okBtn","head0","head1","head2","head3","head4","head5","head6","head7","head8","head9","selectedImg","selectedSexImg","manImg","womanImg","uploadBtn","editHeadGrp","tf3_i18n","closeBtn","uiGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
	}
	var _proto = HALLPersonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_dark_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 630;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1200;
		t.elementsContent = [this._Image2_i(),this.leftGrp_i(),this.infoGrp_i(),this.editHeadGrp_i(),this.tf3_i18n_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.leftGrp_i = function () {
		var t = new eui.Group();
		this.leftGrp = t;
		t.touchEnabled = false;
		t.x = 40;
		t.y = 119;
		t.elementsContent = [this.head_i(),this._Image3_i(),this._Image4_i(),this.changeHeadBtn_i(),this._Group1_i(),this.tf0_i18n_i(),this.coinGrp_i()];
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.height = 210;
		t.source = "tAvatar0_png";
		t.touchEnabled = false;
		t.width = 210;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 55;
		t.source = "HALL_black_mask_png";
		t.touchEnabled = false;
		t.width = 220;
		t.x = 0;
		t.y = 165;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_edit_png";
		t.touchEnabled = false;
		t.x = 51;
		t.y = 182;
		return t;
	};
	_proto.changeHeadBtn_i = function () {
		var t = new eui.Image();
		this.changeHeadBtn = t;
		t.source = "HALL_person_head_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 184;
		t.y = -16;
		t.elementsContent = [this._Image5_i(),this.sex_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_sex_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.sex_i = function () {
		var t = new eui.Image();
		this.sex = t;
		t.horizontalCenter = 0;
		t.source = "HALL_person_man_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.size = 20;
		t.text = "编辑头像";
		t.touchEnabled = false;
		t.x = 84;
		t.y = 181;
		return t;
	};
	_proto.coinGrp_i = function () {
		var t = new eui.Group();
		this.coinGrp = t;
		t.x = 0;
		t.y = 240;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.creditBtn_i(),this.coinTf_i(),this.bankTf_i(),this.creditTf_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(37,22,113,5);
		t.source = "HALL_person_input_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(37,22,113,5);
		t.source = "HALL_person_input_bg_png";
		t.x = 0;
		t.y = 74;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_coin_png";
		t.x = 21;
		t.y = 9;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_safe_png";
		t.x = 21;
		t.y = 84;
		return t;
	};
	_proto.creditBtn_i = function () {
		var t = new eui.Image();
		this.creditBtn = t;
		t.scale9Grid = new egret.Rectangle(37,22,113,5);
		t.source = "HALL_person_input_bg_png";
		t.x = 0;
		t.y = 138;
		return t;
	};
	_proto.coinTf_i = function () {
		var t = new eui.Label();
		this.coinTf = t;
		t.size = 26;
		t.text = "0123456789";
		t.textColor = 0xc69c6d;
		t.x = 67;
		t.y = 14;
		return t;
	};
	_proto.bankTf_i = function () {
		var t = new eui.Label();
		this.bankTf = t;
		t.size = 26;
		t.text = "0123456789";
		t.textColor = 0xC69C6D;
		t.x = 67;
		t.y = 88;
		return t;
	};
	_proto.creditTf_i = function () {
		var t = new eui.Label();
		this.creditTf = t;
		t.size = 26;
		t.text = "积分：1";
		t.textColor = 0xC69C6D;
		t.touchEnabled = false;
		t.x = 64;
		t.y = 152;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.touchEnabled = false;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this.bindPhoneBtn_i(),this.bindBankBtn_i(),this.copyIdBtn_i(),this.editNickBtn_i(),this.bgmBtn_i(),this.musicBtn_i(),this.logoutBtn_i(),this.nickTf_i(),this.idTf_i(),this.phoneTf_i(),this.bankIdTf_i(),this.aliGrp_i(),this.tf1_i18n_i(),this.tf2_i18n_i(),this.versionTf_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 460;
		t.source = "HALL_person_line_png";
		t.x = 298;
		t.y = 119;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 460;
		t.source = "HALL_person_line_png";
		t.x = 900;
		t.y = 119;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_lock_bg_png";
		t.x = 340;
		t.y = 119;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_lock_bg_png";
		t.x = 340;
		t.y = 211;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_lock_bg_png";
		t.x = 340;
		t.y = 303;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_lock_bg_png";
		t.x = 340;
		t.y = 395;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_small_png";
		t.x = 364;
		t.y = 135;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_phone_png";
		t.x = 364;
		t.y = 319;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_id_png";
		t.x = 364;
		t.y = 227;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_bank_png";
		t.x = 364;
		t.y = 411;
		return t;
	};
	_proto.bindPhoneBtn_i = function () {
		var t = new eui.Image();
		this.bindPhoneBtn = t;
		t.anchorOffsetX = 61;
		t.anchorOffsetY = 18;
		t.source = "HALL_person_bd_png";
		t.visible = false;
		t.x = 783;
		t.y = 337;
		return t;
	};
	_proto.bindBankBtn_i = function () {
		var t = new eui.Image();
		this.bindBankBtn = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 20;
		t.source = "HALL_person_bd_png";
		t.visible = false;
		t.x = 778;
		t.y = 431;
		return t;
	};
	_proto.copyIdBtn_i = function () {
		var t = new eui.Image();
		this.copyIdBtn = t;
		t.anchorOffsetX = 59;
		t.anchorOffsetY = 19;
		t.source = "HALL_person_copy_png";
		t.visible = false;
		t.x = 781;
		t.y = 246;
		return t;
	};
	_proto.editNickBtn_i = function () {
		var t = new eui.Image();
		this.editNickBtn = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 21;
		t.source = "HALL_person_edit_btn_png";
		t.visible = false;
		t.x = 782;
		t.y = 156;
		return t;
	};
	_proto.bgmBtn_i = function () {
		var t = new eui.Image();
		this.bgmBtn = t;
		t.source = "HALL_person_open_png";
		t.x = 1042;
		t.y = 130;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new eui.Image();
		this.musicBtn = t;
		t.source = "HALL_person_open_png";
		t.x = 1042;
		t.y = 222;
		return t;
	};
	_proto.logoutBtn_i = function () {
		var t = new eui.Image();
		this.logoutBtn = t;
		t.source = "HALL_person_logout_png";
		t.x = 918;
		t.y = 450;
		return t;
	};
	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.text = "未设置昵称";
		t.textColor = 0x8c8c91;
		t.x = 420;
		t.y = 140;
		return t;
	};
	_proto.idTf_i = function () {
		var t = new eui.Label();
		this.idTf = t;
		t.text = "000";
		t.textColor = 0x8C8C91;
		t.x = 420;
		t.y = 232;
		return t;
	};
	_proto.phoneTf_i = function () {
		var t = new eui.Label();
		this.phoneTf = t;
		t.text = "未绑定手机";
		t.textColor = 0x8C8C91;
		t.x = 420;
		t.y = 324;
		return t;
	};
	_proto.bankIdTf_i = function () {
		var t = new eui.Label();
		this.bankIdTf = t;
		t.text = "未绑定银行卡";
		t.textColor = 0x8C8C91;
		t.x = 420;
		t.y = 416;
		return t;
	};
	_proto.aliGrp_i = function () {
		var t = new eui.Group();
		this.aliGrp = t;
		t.x = 340;
		t.y = 487;
		t.elementsContent = [this._Image20_i(),this._Image21_i(),this.bindZfbBtn_i(),this.zfbTf_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_lock_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "HALL_person_zfb_png";
		t.x = 24;
		t.y = 16;
		return t;
	};
	_proto.bindZfbBtn_i = function () {
		var t = new eui.Image();
		this.bindZfbBtn = t;
		t.anchorOffsetX = 61;
		t.anchorOffsetY = 18;
		t.source = "HALL_person_bd_png";
		t.visible = false;
		t.x = 443;
		t.y = 34;
		return t;
	};
	_proto.zfbTf_i = function () {
		var t = new eui.Label();
		this.zfbTf = t;
		t.text = "未绑定支付宝";
		t.textColor = 0x8C8C91;
		t.x = 80;
		t.y = 21;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.size = 34;
		t.text = "音乐";
		t.x = 930;
		t.y = 141;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.size = 34;
		t.text = "音效";
		t.x = 930;
		t.y = 233;
		return t;
	};
	_proto.versionTf_i = function () {
		var t = new eui.Label();
		this.versionTf = t;
		t.size = 18;
		t.text = "当前版本号";
		t.textAlign = "center";
		t.textColor = 0x8e8e93;
		t.width = 258;
		t.x = 918;
		t.y = 535;
		return t;
	};
	_proto.editHeadGrp_i = function () {
		var t = new eui.Group();
		this.editHeadGrp = t;
		t.x = 366;
		t.y = 136;
		t.elementsContent = [this.cancelBtn_i(),this.okBtn_i(),this.head0_i(),this.head1_i(),this.head2_i(),this.head3_i(),this.head4_i(),this.head5_i(),this.head6_i(),this.head7_i(),this.head8_i(),this.head9_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this.selectedImg_i(),this.selectedSexImg_i(),this.manImg_i(),this.womanImg_i(),this.uploadBtn_i()];
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Image();
		this.cancelBtn = t;
		t.source = "HALL_cancel_btn_png";
		t.x = 60;
		t.y = 345;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new eui.Image();
		this.okBtn = t;
		t.source = "HALL_ok_btn_png";
		t.x = 409;
		t.y = 345;
		return t;
	};
	_proto.head0_i = function () {
		var t = new eui.Image();
		this.head0 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.head1_i = function () {
		var t = new eui.Image();
		this.head1 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 145;
		t.y = 0;
		return t;
	};
	_proto.head2_i = function () {
		var t = new eui.Image();
		this.head2 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 291;
		t.y = 0;
		return t;
	};
	_proto.head3_i = function () {
		var t = new eui.Image();
		this.head3 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 436;
		t.y = 0;
		return t;
	};
	_proto.head4_i = function () {
		var t = new eui.Image();
		this.head4 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 581;
		t.y = 0;
		return t;
	};
	_proto.head5_i = function () {
		var t = new eui.Image();
		this.head5 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 0;
		t.y = 139;
		return t;
	};
	_proto.head6_i = function () {
		var t = new eui.Image();
		this.head6 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 145;
		t.y = 139;
		return t;
	};
	_proto.head7_i = function () {
		var t = new eui.Image();
		this.head7 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 291;
		t.y = 139;
		return t;
	};
	_proto.head8_i = function () {
		var t = new eui.Image();
		this.head8 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 436;
		t.y = 139;
		return t;
	};
	_proto.head9_i = function () {
		var t = new eui.Image();
		this.head9 = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(65,20,390,26);
		t.source = "HALL_person_lock_bg_png";
		t.width = 100;
		t.x = 581;
		t.y = 139;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar0_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar1_png";
		t.touchEnabled = false;
		t.x = 145;
		t.y = 0;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar2_png";
		t.touchEnabled = false;
		t.x = 291;
		t.y = 0;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar3_png";
		t.touchEnabled = false;
		t.x = 436;
		t.y = 0;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar4_png";
		t.touchEnabled = false;
		t.x = 581;
		t.y = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar5_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 139;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar6_png";
		t.touchEnabled = false;
		t.x = 145;
		t.y = 139;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar7_png";
		t.touchEnabled = false;
		t.x = 291;
		t.y = 139;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar8_png";
		t.touchEnabled = false;
		t.x = 436;
		t.y = 139;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "avatar_lib_json.tAvatar9_png";
		t.touchEnabled = false;
		t.x = 581;
		t.y = 139;
		return t;
	};
	_proto.selectedImg_i = function () {
		var t = new eui.Image();
		this.selectedImg = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(5,5,6,6);
		t.source = "HALL_yellow_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = 216;
		t.y = 22;
		return t;
	};
	_proto.selectedSexImg_i = function () {
		var t = new eui.Image();
		this.selectedSexImg = t;
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(5,5,6,6);
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "HALL_yellow_png";
		t.touchEnabled = false;
		t.width = 100;
		t.x = 72;
		t.y = 274;
		return t;
	};
	_proto.manImg_i = function () {
		var t = new eui.Image();
		this.manImg = t;
		t.source = "HALL_person_man_png";
		t.x = 5;
		t.y = 274;
		return t;
	};
	_proto.womanImg_i = function () {
		var t = new eui.Image();
		this.womanImg = t;
		t.anchorOffsetX = 2;
		t.source = "HALL_person_women_png";
		t.x = 75;
		t.y = 275;
		return t;
	};
	_proto.uploadBtn_i = function () {
		var t = new eui.Image();
		this.uploadBtn = t;
		t.anchorOffsetX = 86;
		t.anchorOffsetY = 19;
		t.source = "HALL_person_upload_btn_png";
		t.visible = false;
		t.x = 597;
		t.y = 294;
		return t;
	};
	_proto.tf3_i18n_i = function () {
		var t = new eui.Label();
		this.tf3_i18n = t;
		t.bold = true;
		t.size = 40;
		t.text = "个人信息";
		t.x = 518;
		t.y = 16.04;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 30;
		t.source = "HALL_close_btn_png";
		t.x = 1200;
		t.y = -2;
		return t;
	};
	return HALLPersonSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/replay/HALLReplayRenderSkin.exml'] = window.HALLReplayRenderSkin = (function (_super) {
	__extends(HALLReplayRenderSkin, _super);
	function HALLReplayRenderSkin() {
		_super.call(this);
		this.skinParts = ["replayBtn","detailBtn","label0","label1","label2","label3","label4","label5","label6"];
		
		this.height = 88;
		this.width = 1200;
		this.elementsContent = [this._Image1_i(),this.replayBtn_i(),this.detailBtn_i(),this.label0_i(),this.label1_i(),this.label2_i(),this.label3_i(),this.label4_i(),this.label5_i(),this.label6_i()];
	}
	var _proto = HALLReplayRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 88;
		t.scale9Grid = new egret.Rectangle(127,5,764,27);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Image();
		this.replayBtn = t;
		t.source = "HALL_replayBtn_png";
		t.x = 1026;
		t.y = 24;
		return t;
	};
	_proto.detailBtn_i = function () {
		var t = new HALL.XYButton();
		this.detailBtn = t;
		t.a_label = "查看详情";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 18;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 21;
		t.height = 40;
		t.skinName = "XYButtonSkin";
		t.width = 160;
		t.x = 1108.88;
		t.y = 45;
		return t;
	};
	_proto.label0_i = function () {
		var t = new eui.Label();
		this.label0 = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 44.12;
		return t;
	};
	_proto.label1_i = function () {
		var t = new eui.Label();
		this.label1 = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 115.27;
		return t;
	};
	_proto.label2_i = function () {
		var t = new eui.Label();
		this.label2 = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -128;
		t.lineSpacing = 6;
		t.size = 20;
		t.text = "Niu-niu For Thousands Person";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.label3_i = function () {
		var t = new eui.Label();
		this.label3 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 20;
		t.text = "";
		t.verticalCenter = 0;
		t.x = 615.09;
		return t;
	};
	_proto.label4_i = function () {
		var t = new eui.Label();
		this.label4 = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 10;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 735;
		return t;
	};
	_proto.label5_i = function () {
		var t = new eui.Label();
		this.label5 = t;
		t.anchorOffsetX = 0;
		t.lineSpacing = 10;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.x = 899;
		return t;
	};
	_proto.label6_i = function () {
		var t = new eui.Label();
		this.label6 = t;
		t.anchorOffsetX = 0;
		t.size = 20;
		t.text = "暂不支持查看";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 1056.88;
		return t;
	};
	return HALLReplayRenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/replay/HALLReplaySkin.exml'] = window.HALLReplaySkin = (function (_super) {
	__extends(HALLReplaySkin, _super);
	var HALLReplaySkin$Skin43 = 	(function (_super) {
		__extends(HALLReplaySkin$Skin43, _super);
		var HALLReplaySkin$Skin43$Skin44 = 		(function (_super) {
			__extends(HALLReplaySkin$Skin43$Skin44, _super);
			function HALLReplaySkin$Skin43$Skin44() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this._Rect1_i(),this.thumb_i()];
			}
			var _proto = HALLReplaySkin$Skin43$Skin44.prototype;

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
			return HALLReplaySkin$Skin43$Skin44;
		})(eui.Skin);

		function HALLReplaySkin$Skin43() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HALLReplaySkin$Skin43.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.autoVisibility = false;
			t.percentHeight = 100;
			t.right = 2;
			t.visible = true;
			t.skinName = HALLReplaySkin$Skin43$Skin44;
			return t;
		};
		return HALLReplaySkin$Skin43;
	})(eui.Skin);

	function HALLReplaySkin() {
		_super.call(this);
		this.skinParts = ["tf0_i18n","tf1_i18n","tf2_i18n","tf3_i18n","tf4_i18n","tf5_i18n","tf6_i18n","list","scl","tf7_i18n","infoGrp","tf8_i18n","closeGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group3_i()];
	}
	var _proto = HALLReplaySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.scl_i(),this.infoGrp_i(),this._Group2_i(),this.closeGrp_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(77,69,464,283);
		t.source = "HALL_common_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this.tf0_i18n_i(),this.tf1_i18n_i(),this.tf2_i18n_i(),this.tf3_i18n_i(),this.tf4_i18n_i(),this.tf5_i18n_i(),this.tf6_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(127,34,764,7);
		t.source = "HALL_gold_Bg_png";
		t.width = 1200;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.size = 20;
		t.text = "序号";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.size = 20;
		t.text = "牌局编号";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 176;
		t.x = 147;
		t.y = 0;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.horizontalCenter = -128;
		t.size = 20;
		t.text = "房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 174;
		t.y = 0;
		return t;
	};
	_proto.tf3_i18n_i = function () {
		var t = new eui.Label();
		this.tf3_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.size = 20;
		t.text = "盈利";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 162;
		t.x = 558;
		t.y = 0;
		return t;
	};
	_proto.tf4_i18n_i = function () {
		var t = new eui.Label();
		this.tf4_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.size = 20;
		t.text = "开始时间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 168;
		t.x = 696;
		t.y = 0;
		return t;
	};
	_proto.tf5_i18n_i = function () {
		var t = new eui.Label();
		this.tf5_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.size = 20;
		t.text = "结算时间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 851;
		t.y = 0;
		return t;
	};
	_proto.tf6_i18n_i = function () {
		var t = new eui.Label();
		this.tf6_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.size = 20;
		t.text = "详情";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 116;
		t.x = 1053;
		t.y = 0;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.width = 1200;
		t.x = 0;
		t.y = 150;
		t.skinName = HALLReplaySkin$Skin43;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 526;
		t.width = 1326;
		t.x = 0;
		t.y = -18;
		return t;
	};
	_proto.infoGrp_i = function () {
		var t = new eui.Group();
		this.infoGrp = t;
		t.anchorOffsetX = 0;
		t.verticalCenter = 0;
		t.width = 1196;
		t.x = 0;
		t.elementsContent = [this.tf7_i18n_i()];
		return t;
	};
	_proto.tf7_i18n_i = function () {
		var t = new eui.Label();
		this.tf7_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 139;
		t.horizontalCenter = -1.5;
		t.text = "暂无数据";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 1323;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 18;
		t.elementsContent = [this.tf8_i18n_i()];
		return t;
	};
	_proto.tf8_i18n_i = function () {
		var t = new eui.Label();
		this.tf8_i18n = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 42;
		t.size = 40;
		t.text = "历史记录";
		t.width = 168;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeGrp_i = function () {
		var t = new eui.Group();
		this.closeGrp = t;
		t.height = 60;
		t.x = 1166;
		t.y = -26;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "HALL_close_btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALLReplaySkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/component/HALL_RoomDeskHeadSkin.exml'] = window.HALL_RoomDeskHeadSkin = (function (_super) {
	__extends(HALL_RoomDeskHeadSkin, _super);
	function HALL_RoomDeskHeadSkin() {
		_super.call(this);
		this.skinParts = ["headImg","nickTf","scoreTf"];
		
		this.height = 83;
		this.width = 69;
		this.elementsContent = [this._Image1_i(),this.headImg_i(),this._Image2_i(),this.nickTf_i(),this.scoreTf_i()];
	}
	var _proto = HALL_RoomDeskHeadSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roomDeskHeadBg_png";
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.height = 45;
		t.width = 45;
		t.x = 12;
		t.y = 19;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 10;
		t.source = "HALL_coin_png";
		t.width = 10;
		t.x = 4.4;
		t.y = 68;
		return t;
	};
	_proto.nickTf_i = function () {
		var t = new eui.Label();
		this.nickTf = t;
		t.horizontalCenter = 0.5;
		t.size = 10;
		t.text = "手机_HJJK";
		t.textColor = 0xe2ffe3;
		t.y = 6;
		return t;
	};
	_proto.scoreTf_i = function () {
		var t = new eui.Label();
		this.scoreTf = t;
		t.horizontalCenter = 4.5;
		t.size = 10;
		t.text = "12,345,67";
		t.textColor = 0xe6e768;
		t.y = 68;
		return t;
	};
	return HALL_RoomDeskHeadSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/component/HALL_RoomDeskItem5Skin.exml'] = window.HALL_RoomDeskItem5Skin = (function (_super) {
	__extends(HALL_RoomDeskItem5Skin, _super);
	function HALL_RoomDeskItem5Skin() {
		_super.call(this);
		this.skinParts = ["seatBtn0","seatBtn1","seatBtn2","seatBtn3","seatBtn4","player0","player1","player2","player3","player4","indexTf","rsImg","nameImg"];
		
		this.height = 241;
		this.width = 308;
		this.elementsContent = [this._Image1_i(),this.seatBtn0_i(),this.seatBtn1_i(),this.seatBtn2_i(),this.seatBtn3_i(),this.seatBtn4_i(),this.player0_i(),this.player1_i(),this.player2_i(),this.player3_i(),this.player4_i(),this.indexTf_i(),this.rsImg_i(),this.nameImg_i()];
	}
	var _proto = HALL_RoomDeskItem5Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roomDesk_5_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.seatBtn0_i = function () {
		var t = new eui.Image();
		this.seatBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 10.5;
		t.y = 31;
		return t;
	};
	_proto.seatBtn1_i = function () {
		var t = new eui.Image();
		this.seatBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 84;
		t.x = 25.5;
		t.y = 123;
		return t;
	};
	_proto.seatBtn2_i = function () {
		var t = new eui.Image();
		this.seatBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 89;
		t.x = 193.5;
		t.y = 119;
		return t;
	};
	_proto.seatBtn3_i = function () {
		var t = new eui.Image();
		this.seatBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 222.5;
		t.y = 25;
		return t;
	};
	_proto.seatBtn4_i = function () {
		var t = new eui.Image();
		this.seatBtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 118.5;
		t.y = -19;
		return t;
	};
	_proto.player0_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player0 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 8;
		t.y = 7;
		return t;
	};
	_proto.player1_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player1 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 19;
		t.y = 114;
		return t;
	};
	_proto.player2_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player2 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 206.5;
		t.y = 114;
		return t;
	};
	_proto.player3_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player3 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 227;
		t.y = 7;
		return t;
	};
	_proto.player4_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player4 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 119;
		t.y = -42.5;
		return t;
	};
	_proto.indexTf_i = function () {
		var t = new eui.Label();
		this.indexTf = t;
		t.horizontalCenter = -0.5;
		t.size = 16;
		t.text = "88";
		t.textColor = 0xad0303;
		t.touchEnabled = false;
		t.y = 74;
		return t;
	};
	_proto.rsImg_i = function () {
		var t = new eui.Image();
		this.rsImg = t;
		t.horizontalCenter = 0;
		t.source = "roomDeskState_2_png";
		t.y = 104;
		return t;
	};
	_proto.nameImg_i = function () {
		var t = new eui.Image();
		this.nameImg = t;
		t.source = "small_name_ERMJ_png";
		t.x = 101;
		t.y = 36;
		return t;
	};
	return HALL_RoomDeskItem5Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/component/HALL_RoomDeskFloorSkin.exml'] = window.HALL_RoomDeskFloorSkin = (function (_super) {
	__extends(HALL_RoomDeskFloorSkin, _super);
	function HALL_RoomDeskFloorSkin() {
		_super.call(this);
		this.skinParts = ["prevBtn","nextBtn","pageInfo","desk0","desk1","desk2","desk3","desk4","desk5","desk6","desk7","scl","noData_i18n"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.scl_i(),this.noData_i18n_i()];
	}
	var _proto = HALL_RoomDeskFloorSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "roomDesk_bg_jpg";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 142;
		t.horizontalCenter = -624;
		t.verticalCenter = 0;
		t.width = 50;
		t.elementsContent = [this._Image2_i(),this.prevBtn_i(),this.nextBtn_i(),this.pageInfo_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 142;
		t.source = "HALL_black_mask_png";
		t.width = 50;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.prevBtn_i = function () {
		var t = new eui.Image();
		this.prevBtn = t;
		t.source = "roomDeskUpBtn0_png";
		t.x = -3;
		t.y = -25.2;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Image();
		this.nextBtn = t;
		t.horizontalCenter = 0;
		t.scaleY = -1;
		t.source = "roomDeskUpBtn0_png";
		t.y = 169.47;
		return t;
	};
	_proto.pageInfo_i = function () {
		var t = new eui.BitmapLabel();
		this.pageInfo = t;
		t.font = "roomDeskFont_fnt";
		t.horizontalCenter = 0;
		t.text = "1楼";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.scl_i = function () {
		var t = new XYScroller();
		this.scl = t;
		t.height = 720;
		t.horizontalCenter = 26.5;
		t.verticalCenter = 27;
		t.width = 1232;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.desk0_i(),this.desk1_i(),this.desk2_i(),this.desk3_i(),this.desk4_i(),this.desk5_i(),this.desk6_i(),this.desk7_i()];
		return t;
	};
	_proto.desk0_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk0 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 0;
		t.y = 116.72;
		return t;
	};
	_proto.desk1_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk1 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 308;
		t.y = 116.72;
		return t;
	};
	_proto.desk2_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk2 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 616;
		t.y = 116.72;
		return t;
	};
	_proto.desk3_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk3 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 924;
		t.y = 116.72;
		return t;
	};
	_proto.desk4_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk4 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 0;
		t.y = 378.25;
		return t;
	};
	_proto.desk5_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk5 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 308;
		t.y = 378.25;
		return t;
	};
	_proto.desk6_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk6 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 616;
		t.y = 378.25;
		return t;
	};
	_proto.desk7_i = function () {
		var t = new HALL.HALL_RoomDeskItem();
		this.desk7 = t;
		t.skinName = "HALL_RoomDeskItem5Skin";
		t.x = 924;
		t.y = 378.25;
		return t;
	};
	_proto.noData_i18n_i = function () {
		var t = new eui.Label();
		this.noData_i18n = t;
		t.horizontalCenter = 0;
		t.text = "暂无数据";
		t.verticalCenter = 0;
		return t;
	};
	return HALL_RoomDeskFloorSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/component/HALL_RoomDeskItem2Skin.exml'] = window.HALL_RoomDeskItem2Skin = (function (_super) {
	__extends(HALL_RoomDeskItem2Skin, _super);
	function HALL_RoomDeskItem2Skin() {
		_super.call(this);
		this.skinParts = ["seatBtn0","seatBtn2","player0","player2","indexTf","rsImg","nameImg"];
		
		this.height = 241;
		this.width = 308;
		this.elementsContent = [this._Image1_i(),this.seatBtn0_i(),this.seatBtn2_i(),this.player0_i(),this.player2_i(),this.indexTf_i(),this.rsImg_i(),this.nameImg_i()];
	}
	var _proto = HALL_RoomDeskItem2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roomDesk_2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.seatBtn0_i = function () {
		var t = new eui.Image();
		this.seatBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 33.5;
		t.y = 34;
		return t;
	};
	_proto.seatBtn2_i = function () {
		var t = new eui.Image();
		this.seatBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 190.5;
		t.y = 126;
		return t;
	};
	_proto.player0_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player0 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 39;
		t.y = 5;
		return t;
	};
	_proto.player2_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player2 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 191;
		t.y = 119.5;
		return t;
	};
	_proto.indexTf_i = function () {
		var t = new eui.Label();
		this.indexTf = t;
		t.horizontalCenter = -2.5;
		t.size = 16;
		t.text = "8";
		t.textColor = 0xad0303;
		t.touchEnabled = false;
		t.y = 81;
		return t;
	};
	_proto.rsImg_i = function () {
		var t = new eui.Image();
		this.rsImg = t;
		t.horizontalCenter = 0;
		t.source = "roomDeskState_2_png";
		t.y = 110;
		return t;
	};
	_proto.nameImg_i = function () {
		var t = new eui.Image();
		this.nameImg = t;
		t.source = "small_name_ERMJ_png";
		t.x = 98;
		t.y = 44;
		return t;
	};
	return HALL_RoomDeskItem2Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/component/HALL_RoomDeskItem3Skin.exml'] = window.HALL_RoomDeskItem3Skin = (function (_super) {
	__extends(HALL_RoomDeskItem3Skin, _super);
	function HALL_RoomDeskItem3Skin() {
		_super.call(this);
		this.skinParts = ["seatBtn0","seatBtn1","seatBtn2","player0","player1","player2","indexTf","rsImg","nameImg"];
		
		this.height = 242;
		this.width = 308;
		this.elementsContent = [this._Image1_i(),this.seatBtn0_i(),this.seatBtn1_i(),this.seatBtn2_i(),this.player0_i(),this.player1_i(),this.player2_i(),this.indexTf_i(),this.rsImg_i(),this.nameImg_i()];
	}
	var _proto = HALL_RoomDeskItem3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roomDesk_3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.seatBtn0_i = function () {
		var t = new eui.Image();
		this.seatBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 113.5;
		t.y = -9;
		return t;
	};
	_proto.seatBtn1_i = function () {
		var t = new eui.Image();
		this.seatBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 87;
		t.x = 25.5;
		t.y = 116;
		return t;
	};
	_proto.seatBtn2_i = function () {
		var t = new eui.Image();
		this.seatBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 90;
		t.x = 195.5;
		t.y = 117;
		return t;
	};
	_proto.player0_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player0 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 115;
		t.y = -29;
		return t;
	};
	_proto.player1_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player1 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 28;
		t.y = 114;
		return t;
	};
	_proto.player2_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player2 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 204;
		t.y = 114;
		return t;
	};
	_proto.indexTf_i = function () {
		var t = new eui.Label();
		this.indexTf = t;
		t.horizontalCenter = -1.5;
		t.size = 16;
		t.text = "8";
		t.textColor = 0xad0303;
		t.touchEnabled = false;
		t.y = 92;
		return t;
	};
	_proto.rsImg_i = function () {
		var t = new eui.Image();
		this.rsImg = t;
		t.horizontalCenter = 0;
		t.source = "roomDeskState_2_png";
		t.y = 118;
		return t;
	};
	_proto.nameImg_i = function () {
		var t = new eui.Image();
		this.nameImg = t;
		t.source = "small_name_ERMJ_png";
		t.x = 98;
		t.y = 51;
		return t;
	};
	return HALL_RoomDeskItem3Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/component/HALL_RoomDeskItem4Skin.exml'] = window.HALL_RoomDeskItem4Skin = (function (_super) {
	__extends(HALL_RoomDeskItem4Skin, _super);
	function HALL_RoomDeskItem4Skin() {
		_super.call(this);
		this.skinParts = ["seatBtn0","seatBtn1","seatBtn2","seatBtn3","player0","player1","player2","player3","indexTf","rsImg","nameImg"];
		
		this.height = 241;
		this.width = 308;
		this.elementsContent = [this._Image1_i(),this.seatBtn0_i(),this.seatBtn1_i(),this.seatBtn2_i(),this.seatBtn3_i(),this.player0_i(),this.player1_i(),this.player2_i(),this.player3_i(),this.indexTf_i(),this.rsImg_i(),this.nameImg_i()];
	}
	var _proto = HALL_RoomDeskItem4Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roomDesk_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.seatBtn0_i = function () {
		var t = new eui.Image();
		this.seatBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 29.5;
		t.y = 33;
		return t;
	};
	_proto.seatBtn1_i = function () {
		var t = new eui.Image();
		this.seatBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 89;
		t.x = 31.5;
		t.y = 119;
		return t;
	};
	_proto.seatBtn2_i = function () {
		var t = new eui.Image();
		this.seatBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 75;
		t.x = 189.5;
		t.y = 119;
		return t;
	};
	_proto.seatBtn3_i = function () {
		var t = new eui.Image();
		this.seatBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 202.5;
		t.y = 24;
		return t;
	};
	_proto.player0_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player0 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 31;
		t.y = 1;
		return t;
	};
	_proto.player1_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player1 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 31;
		t.y = 120;
		return t;
	};
	_proto.player2_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player2 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 200;
		t.y = 120;
		return t;
	};
	_proto.player3_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player3 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 200;
		t.y = 1;
		return t;
	};
	_proto.indexTf_i = function () {
		var t = new eui.Label();
		this.indexTf = t;
		t.horizontalCenter = -2.5;
		t.size = 16;
		t.text = "8";
		t.textColor = 0xad0303;
		t.touchEnabled = false;
		t.y = 78;
		return t;
	};
	_proto.rsImg_i = function () {
		var t = new eui.Image();
		this.rsImg = t;
		t.horizontalCenter = 0;
		t.source = "roomDeskState_2_png";
		t.y = 107;
		return t;
	};
	_proto.nameImg_i = function () {
		var t = new eui.Image();
		this.nameImg = t;
		t.source = "small_name_ERMJ_png";
		t.x = 98;
		t.y = 44;
		return t;
	};
	return HALL_RoomDeskItem4Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/component/HALL_RoomDeskItem9Skin.exml'] = window.HALL_RoomDeskItem9Skin = (function (_super) {
	__extends(HALL_RoomDeskItem9Skin, _super);
	function HALL_RoomDeskItem9Skin() {
		_super.call(this);
		this.skinParts = ["seatBtn0","seatBtn1","seatBtn2","seatBtn3","seatBtn4","seatBtn5","seatBtn6","seatBtn7","seatBtn8","player0","player1","player2","player3","player4","player5","player6","player7","player8","indexTf","rsImg","nameImg"];
		
		this.height = 241;
		this.width = 512;
		this.elementsContent = [this._Image1_i(),this.seatBtn0_i(),this.seatBtn1_i(),this.seatBtn2_i(),this.seatBtn3_i(),this.seatBtn4_i(),this.seatBtn5_i(),this.seatBtn6_i(),this.seatBtn7_i(),this.seatBtn8_i(),this.player0_i(),this.player1_i(),this.player2_i(),this.player3_i(),this.player4_i(),this.player5_i(),this.player6_i(),this.player7_i(),this.player8_i(),this.indexTf_i(),this.rsImg_i(),this.nameImg_i()];
	}
	var _proto = HALL_RoomDeskItem9Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roomDesk_9_png";
		t.x = 0;
		t.y = -11;
		return t;
	};
	_proto.seatBtn0_i = function () {
		var t = new eui.Image();
		this.seatBtn0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 6.5;
		t.y = 28;
		return t;
	};
	_proto.seatBtn1_i = function () {
		var t = new eui.Image();
		this.seatBtn1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 84;
		t.x = 7.5;
		t.y = 124;
		return t;
	};
	_proto.seatBtn2_i = function () {
		var t = new eui.Image();
		this.seatBtn2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 80;
		t.x = 118.5;
		t.y = 131;
		return t;
	};
	_proto.seatBtn3_i = function () {
		var t = new eui.Image();
		this.seatBtn3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 67;
		t.x = 219.5;
		t.y = 134;
		return t;
	};
	_proto.seatBtn4_i = function () {
		var t = new eui.Image();
		this.seatBtn4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 318.5;
		t.y = 133;
		return t;
	};
	_proto.seatBtn5_i = function () {
		var t = new eui.Image();
		this.seatBtn5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 418.5;
		t.y = 120;
		return t;
	};
	_proto.seatBtn6_i = function () {
		var t = new eui.Image();
		this.seatBtn6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 428.5;
		t.y = 3;
		return t;
	};
	_proto.seatBtn7_i = function () {
		var t = new eui.Image();
		this.seatBtn7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 332.5;
		t.y = -22;
		return t;
	};
	_proto.seatBtn8_i = function () {
		var t = new eui.Image();
		this.seatBtn8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.source = "HALL_common_json.HALL_alpha_mask_png";
		t.width = 70;
		t.x = 108.5;
		t.y = -22;
		return t;
	};
	_proto.player0_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player0 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 8;
		t.y = 13;
		return t;
	};
	_proto.player1_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player1 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 18;
		t.y = 117;
		return t;
	};
	_proto.player2_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player2 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 122.5;
		t.y = 130;
		return t;
	};
	_proto.player3_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player3 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 220;
		t.y = 130;
		return t;
	};
	_proto.player4_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player4 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 319;
		t.y = 130;
		return t;
	};
	_proto.player5_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player5 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 423;
		t.y = 117;
		return t;
	};
	_proto.player6_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player6 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 429;
		t.y = 17;
		return t;
	};
	_proto.player7_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player7 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 331.5;
		t.y = -35;
		return t;
	};
	_proto.player8_i = function () {
		var t = new HALL.HALL_RoomDeskHead();
		this.player8 = t;
		t.skinName = "HALL_RoomDeskHeadSkin";
		t.x = 109.5;
		t.y = -35;
		return t;
	};
	_proto.indexTf_i = function () {
		var t = new eui.Label();
		this.indexTf = t;
		t.horizontalCenter = -2;
		t.size = 16;
		t.text = "88";
		t.textColor = 0xad0303;
		t.touchEnabled = false;
		t.y = 54;
		return t;
	};
	_proto.rsImg_i = function () {
		var t = new eui.Image();
		this.rsImg = t;
		t.horizontalCenter = 0.5;
		t.source = "roomDeskState_2_png";
		t.y = 87.5;
		return t;
	};
	_proto.nameImg_i = function () {
		var t = new eui.Image();
		this.nameImg = t;
		t.source = "small_name_ERMJ_png";
		t.x = 203;
		t.y = 13;
		return t;
	};
	return HALL_RoomDeskItem9Skin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/roomDesk/HALL_RoomDeskSkin.exml'] = window.HALL_RoomDeskSkin = (function (_super) {
	__extends(HALL_RoomDeskSkin, _super);
	function HALL_RoomDeskSkin() {
		_super.call(this);
		this.skinParts = ["currentFloor","effectFloor","tf0_i18n","backBtn","userInfo","infoTf","fastJoinBtn","bottomGrp"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.currentFloor_i(),this.effectFloor_i(),this._Group1_i(),this.bottomGrp_i()];
	}
	var _proto = HALL_RoomDeskSkin.prototype;

	_proto.currentFloor_i = function () {
		var t = new HALL.HALL_RoomDeskFloor();
		this.currentFloor = t;
		t.skinName = "HALL_RoomDeskFloorSkin";
		return t;
	};
	_proto.effectFloor_i = function () {
		var t = new HALL.HALL_RoomDeskFloor();
		this.effectFloor = t;
		t.skinName = "HALL_RoomDeskFloorSkin";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.backBtn_i(),this.userInfo_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(564,2,753,12);
		t.source = "HALL_common_top_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_gap_png";
		t.x = 244;
		t.y = 24;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Group();
		this.backBtn = t;
		t.x = 20;
		t.y = 17;
		t.elementsContent = [this._Image3_i(),this.tf0_i18n_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.source = "HALL_act_back_png";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.lineSpacing = 0;
		t.size = 36;
		t.text = "返 回";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 83;
		t.y = 12;
		return t;
	};
	_proto.userInfo_i = function () {
		var t = new HALL.HALLUserSimpleInfo();
		this.userInfo = t;
		t.skinName = "HALLUserSimpleInfoSkin";
		t.x = 287;
		t.y = 14;
		return t;
	};
	_proto.bottomGrp_i = function () {
		var t = new eui.Group();
		this.bottomGrp = t;
		t.bottom = 0;
		t.height = 99;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.infoTf_i(),this.fastJoinBtn_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(5,12,12,76);
		t.source = "HALL_main_json.HALL_tab_bar_bg2_png";
		t.y = -1.52;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.fillMode = "repeat";
		t.left = 0;
		t.right = 0;
		t.source = "HALL_main_json.HALL_tab_bar_bg_line_png";
		t.y = 0;
		return t;
	};
	_proto.infoTf_i = function () {
		var t = new eui.Label();
		this.infoTf = t;
		t.lineSpacing = 10;
		t.text = "诈金花";
		t.x = 30;
		t.y = 18.48;
		return t;
	};
	_proto.fastJoinBtn_i = function () {
		var t = new eui.Image();
		this.fastJoinBtn = t;
		t.anchorOffsetX = 113.64;
		t.anchorOffsetY = 43.94;
		t.right = 30;
		t.source = "roomDeskFastJoin_png";
		t.y = 49.46;
		return t;
	};
	return HALL_RoomDeskSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/setting/HALLSettingSkin.exml'] = window.HALLSettingSkin = (function (_super) {
	__extends(HALLSettingSkin, _super);
	function HALLSettingSkin() {
		_super.call(this);
		this.skinParts = ["sliderBg0","sliderUI0","sliderRotation0","sliderBg1","sliderUI1","sliderRotation1","closeBtn","tf0_i18n","tf1_i18n","tf2_i18n","restartBtn","uiGrp"];
		
		this.currentState = "standalone";
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.uiGrp_i()];
		this.restartBtn_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("standalone",
				[
					new eui.AddItems("restartBtn","uiGrp",1,""),
					new eui.SetProperty("_Group1","y",156),
					new eui.SetProperty("_Group2","y",307),
					new eui.SetProperty("_Image5","y",246),
					new eui.SetProperty("_Image6","y",97.5),
					new eui.SetProperty("tf0_i18n","y",255),
					new eui.SetProperty("tf1_i18n","y",103)
				])
		];
	}
	var _proto = HALLSettingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "HALL_black_mask_png";
		t.top = 0;
		return t;
	};
	_proto.uiGrp_i = function () {
		var t = new eui.Group();
		this.uiGrp = t;
		t.height = 508;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 808;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Group2_i(),this.closeBtn_i(),this._Image5_i(),this._Image6_i(),this.tf0_i18n_i(),this.tf1_i18n_i(),this.tf2_i18n_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "HALL_alert_bg_800_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.x = 79;
		t.y = 181;
		t.elementsContent = [this._Image3_i(),this.sliderBg0_i(),this.sliderUI0_i(),this.sliderRotation0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.source = "HALL_common_slider_bg_png";
		t.width = 650;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.sliderBg0_i = function () {
		var t = new eui.Image();
		this.sliderBg0 = t;
		t.height = 64;
		t.source = "HALL_alpha_mask_png";
		t.width = 670;
		t.x = -10;
		t.y = 0;
		return t;
	};
	_proto.sliderUI0_i = function () {
		var t = new eui.Image();
		this.sliderUI0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.source = "HALL_common_slider_bg_png";
		t.width = 650;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.sliderRotation0_i = function () {
		var t = new eui.Image();
		this.sliderRotation0 = t;
		t.height = 58;
		t.source = "HALL_safe_slider_png";
		t.width = 58;
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.x = 79;
		t.y = 351;
		t.elementsContent = [this._Image4_i(),this.sliderBg1_i(),this.sliderUI1_i(),this.sliderRotation1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.source = "HALL_common_slider_bg_png";
		t.width = 650;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.sliderBg1_i = function () {
		var t = new eui.Image();
		this.sliderBg1 = t;
		t.height = 64;
		t.source = "HALL_alpha_mask_png";
		t.width = 670;
		t.x = -10;
		t.y = 0;
		return t;
	};
	_proto.sliderUI1_i = function () {
		var t = new eui.Image();
		this.sliderUI1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.source = "HALL_common_slider_bg_png";
		t.width = 650;
		t.x = 0;
		t.y = 30;
		return t;
	};
	_proto.sliderRotation1_i = function () {
		var t = new eui.Image();
		this.sliderRotation1 = t;
		t.height = 58;
		t.source = "HALL_safe_slider_png";
		t.width = 58;
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 29.33;
		t.anchorOffsetY = 29.33;
		t.source = "HALL_close_btn_png";
		t.x = 791.97;
		t.y = 11.98;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.source = "HALL_bgm_png";
		t.x = 91;
		t.y = 290;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.source = "HALL_music_png";
		t.x = 82;
		t.y = 122.5;
		return t;
	};
	_proto.tf0_i18n_i = function () {
		var t = new eui.Label();
		this.tf0_i18n = t;
		t.bold = true;
		t.text = "音乐";
		t.x = 161;
		t.y = 299;
		return t;
	};
	_proto.tf1_i18n_i = function () {
		var t = new eui.Label();
		this.tf1_i18n = t;
		t.bold = true;
		t.text = "音效";
		t.x = 164;
		t.y = 128;
		return t;
	};
	_proto.tf2_i18n_i = function () {
		var t = new eui.Label();
		this.tf2_i18n = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "设置";
		t.y = 20;
		return t;
	};
	_proto.restartBtn_i = function () {
		var t = new HALL.XYButton();
		this.restartBtn = t;
		t.a_label = "重启";
		t.a_labelColor = 0xFFFFFF;
		t.a_labelSize = 24;
		t.anchorOffsetX = 86;
		t.anchorOffsetY = 32;
		t.height = 62;
		t.skinName = "XYButtonSkin";
		t.width = 174;
		t.x = 403;
		t.y = 429.68;
		return t;
	};
	return HALLSettingSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/spread/component/HALLAchieveRenderSkin.exml'] = window.HALLAchieveRenderSkin = (function (_super) {
	__extends(HALLAchieveRenderSkin, _super);
	function HALLAchieveRenderSkin() {
		_super.call(this);
		this.skinParts = ["info0","info1","info2","info3"];
		
		this.height = 46;
		this.width = 1023;
		this.elementsContent = [this._Image1_i(),this.info0_i(),this.info1_i(),this.info2_i(),this.info3_i()];
	}
	var _proto = HALLAchieveRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HALL_spread_rect0_png";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 161;
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto.info1_i = function () {
		var t = new eui.Label();
		this.info1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 254;
		t.x = 239;
		t.y = 1;
		return t;
	};
	_proto.info2_i = function () {
		var t = new eui.Label();
		this.info2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 219;
		t.x = 530;
		t.y = 1;
		return t;
	};
	_proto.info3_i = function () {
		var t = new eui.Label();
		this.info3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "right";
		t.verticalAlign = "middle";
		t.width = 257;
		t.x = 755;
		t.y = 1;
		return t;
	};
	return HALLAchieveRenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/spread/component/HALLPageSkin.exml'] = window.HALLPageSkin = (function (_super) {
	__extends(HALLPageSkin, _super);
	function HALLPageSkin() {
		_super.call(this);
		this.skinParts = ["image_common","image_select","textInfo"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = HALLPageSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 1;
		t.elementsContent = [this.image_common_i(),this.image_select_i(),this.textInfo_i()];
		return t;
	};
	_proto.image_common_i = function () {
		var t = new eui.Image();
		this.image_common = t;
		t.source = "HALL_page_unSelect_png";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image_select_i = function () {
		var t = new eui.Image();
		this.image_select = t;
		t.source = "HALL_page_select_png";
		t.visible = false;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textInfo_i = function () {
		var t = new eui.Label();
		this.textInfo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.size = 20;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return HALLPageSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/spread/component/HALLPlayerInfoRenderSkin.exml'] = window.HALLPlayerInfoRenderSkin = (function (_super) {
	__extends(HALLPlayerInfoRenderSkin, _super);
	function HALLPlayerInfoRenderSkin() {
		_super.call(this);
		this.skinParts = ["info0","info1","info2","info3","info4"];
		
		this.height = 46;
		this.width = 1023;
		this.elementsContent = [this._Image1_i(),this.info0_i(),this.info1_i(),this.info2_i(),this.info3_i(),this.info4_i()];
	}
	var _proto = HALLPlayerInfoRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HALL_spread_rect0_png";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 174;
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto.info1_i = function () {
		var t = new eui.Label();
		this.info1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 211;
		t.y = 1;
		return t;
	};
	_proto.info2_i = function () {
		var t = new eui.Label();
		this.info2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 141;
		t.x = 451;
		t.y = 1;
		return t;
	};
	_proto.info3_i = function () {
		var t = new eui.Label();
		this.info3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 141;
		t.x = 659;
		t.y = 1;
		return t;
	};
	_proto.info4_i = function () {
		var t = new eui.Label();
		this.info4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 172;
		t.x = 851;
		t.y = 0;
		return t;
	};
	return HALLPlayerInfoRenderSkin;
})(eui.Skin);generateEUI.paths['resource/pages/HALL/spread/component/HallPrizeRenderSkin.exml'] = window.HallPrizeRenderSkin = (function (_super) {
	__extends(HallPrizeRenderSkin, _super);
	function HallPrizeRenderSkin() {
		_super.call(this);
		this.skinParts = ["info0","info1"];
		
		this.height = 46;
		this.width = 1023;
		this.elementsContent = [this._Image1_i(),this.info0_i(),this.info1_i()];
	}
	var _proto = HallPrizeRenderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HALL_spread_rect0_png";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 393;
		t.x = 2;
		t.y = 1;
		return t;
	};
	_proto.info1_i = function () {
		var t = new eui.Label();
		this.info1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 20;
		t.text = "--";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 413;
		t.x = 607;
		t.y = 0;
		return t;
	};
	return HallPrizeRenderSkin;
})(eui.Skin);