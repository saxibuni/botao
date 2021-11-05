import { ScreenState } from "./EnumUtils";

export default class Device {
	public isApp: boolean;
	public version: string;
	public webkit: boolean;
	public notchScreen: boolean;
	public phone = {
		iphonex: false,
		iphonexr: false,
		iphonexsmax: false,
	};
	public browser = {
		chrome: false,
		safari: false,
		firefox: false,
		ie: false,
		edge: false,
		opera: false,
		qq: false,
		360: false,
	};

	public mobile = {
		device: false,
		ios: false,
		andriod: false,
		tablet: false,
	};

	constructor() {
		this.isApp = /PKQ$/.test(navigator.userAgent);
		this.mobile = this.initMobileData();
		this.version = this.getVersion();
		this.webkit = this.iosWKWebView();
		this.notchScreen = this.isNotchScreen();
		this.browser = this.initBrowserData();
	}

	private initMobileData() {
		const ua = navigator.userAgent;
		const andriod = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
		const ipadPro =
			!!/macintosh/.test(ua.toLowerCase()) && "ontouchend" in document;
		const ios = !!/iphone|ipad|ipod/.test(ua.toLowerCase()) || ipadPro;
		const tablet =
			/(?:iPad|PlayBook)/.test(ua) ||
			(andriod && !/(?:Mobile)/.test(ua)) ||
			(/(?:Firefox)/.test(ua) && /(?:Tablet)/.test(ua)) ||
			ipadPro;
		const device = andriod || ios || tablet;

		return {
			ios: ios, //true || false
			andriod: andriod,
			tablet: tablet,
			device: device,
		};
	}

	private getVersion() {
		const verData = navigator.userAgent
			.toLocaleLowerCase()
			.match(/os [\d._]*/gi);
		const version = (verData + "")
			.replace(/[^0-9|_.]/gi, "")
			.replace(/_/gi, ".");
		return version;
	}

	private iosWKWebView() {
		return this.mobile.ios && navigator.userAgent.indexOf("Safari") == -1;
	}

	private isNotchScreen(): boolean {
		const ios = this.mobile.ios,
			width = screen.width,
			height = screen.height;
		this.phone.iphonex =
			ios && width == 375 && height == 812 && devicePixelRatio == 3; //iphoneX and iphoneXs
		this.phone.iphonexr =
			ios && width == 414 && height == 896 && devicePixelRatio == 2;
		this.phone.iphonexsmax =
			ios && width == 414 && height == 896 && devicePixelRatio == 3;
		return this.phone.iphonex || this.phone.iphonexr || this.phone.iphonexsmax;
	}

	private initBrowserData() {
		const ua = navigator.userAgent;

		const brower = {
			chrome: ua.indexOf("Chrome") > -1 && ua.indexOf("Safari") > -1,
			safari: ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") == -1,
			firefox: ua.indexOf("Firefox") > -1,
			ie: !!window.ActiveXObject || "ActiveXObject" in window,
			edge: ua.indexOf("Edge") > -1,
			opera: ua.indexOf("Opera") > -1,
			qq: ua.indexOf("qqbrowse") > -1,
			360: ((option: string, value: string) => {
				const mimeTypes = navigator.mimeTypes as any;
				for (const mt in mimeTypes) {
					if (mimeTypes[mt][option] == value) {
						return true;
					}
				}
				return false;
			})("type", "application/vnd.chromium.remoting-viewer"),
		};

		if (this.mobile.ios) {
			brower.chrome = /C\w+OS\//.test(ua);
			brower.firefox = /F\w+OS\//.test(ua);
			brower.safari = !brower.chrome && !brower.firefox;
		}

		return brower;
	}

	public get screenState() {
		let screenState = ScreenState.WEB;
		if (!this.mobile.device) {
			if (window.innerWidth > 900) screenState = ScreenState.WEB;
			else {
				screenState = ScreenState.PORTRAIT;
			}
		} else {
			if (this.isMobileLandScape()) {
				screenState = ScreenState.WEB;
			}
			else screenState = ScreenState.PORTRAIT;
		}

		return screenState;
	}

	public get winHeight() {
		if (!this.mobile.device) {
			return innerHeight;
		} else {
			if (this.mobile.andriod) {
				return screen.height;
			} else {
				return innerHeight;
			}
		}
	}

	public get landscape() {
		if (this.isMobileLandScape()) {
			return true;
		}
		return false;
	}

	public get fullDisplay() {
		let { width, height } = screen;
		if (this.mobile.ios) {
			[height, width] = [width, height];
		}
		if (typeof orientation !== "undefined" && width / height >= 2) {
			return true;
		}
		return false;
	}

	private isMobileLandScape() {
		const screen = window.screen as any;

		const landscapeExpression1 = window.orientation == 90 || window.orientation == -90;
		const landscapeExpression2 =
			this.mobile.andriod &&
			screen &&
			screen.orientation &&
			screen.orientation.type.indexOf("landscape") > -1;

		return landscapeExpression1 || landscapeExpression2;
	}
}
