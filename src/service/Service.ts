import { EventEmitter } from 'events';
import { ISuccess, IError } from './ICallback';
import axios, { AxiosResponse } from 'axios';
const qs = require('qs');
axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 60000;

export class Service extends EventEmitter {
	protected send(url: string, data: any, success: ISuccess, error?: IError) {
		axios.post(url, qs.stringify(data)).then(
			(res: AxiosResponse) => {
				console.log(url, res);
				return success(res);
			},
			err => {
				if (err) {
					console.error('请求出错!');
				}
			}
		);
	}

	public queryFooterData(callback: (res: any) => void) {
		this.send(`/api.php/datahub/foot`, {}, callback);
	}

	public queryMenuData(callback: (res: any) => void) {
		this.send('/api.php/datahub/menu', {}, callback);
	}

	///精选案例列表
	public queryJxCase(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/jxCase', req, callback);
	}
	///业主心声
	public queryYZXS(callback: (res: any) => void) {
		this.send('api.php/Ajax/yzxs', {}, callback);
	}
	///新闻列表
	public queryNews(req,callback: (res: any) => void) {
		this.send('api.php/Ajax/news', req, callback);
	}
	public queryjxCaseShow(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/jxCaseShow', req, callback);
	}
	public queryvrCase(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/vrCase', req, callback);
	}
	public queryDesigner(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/designer', req, callback);
	}
	public queryDesignerShow(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/designerShow', req, callback);
	}
	public querysiteCase(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/siteCase', req, callback);
	}
	public querysgteam(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/sgteam', req, callback);
	}
	public querysgmessage(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/sgmessage', req, callback);
	}

	///新闻详情
	public queryNewsDetail(aid, callback: (res: any) => void) {
		this.send(`api.php/Ajax/newsShow/aid/${aid}`, {}, callback);
	}
	///招贤纳士
	public queryJS(callback: (res: any) => void) {
		this.send('api.php/Ajax/zxns', {}, callback);
	}

	///波涛品牌
	public queryBrand(callback: (res: any) => void) {
		this.send('api.php/Ajax/btbrand', {}, callback);
	}

	public queryHome(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/indexInfo', req, callback);
	}
	public queryFoot(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/foot', req, callback);
	}
	public queryHead(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/head', req, callback);
	}
	public queryQazz(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/qazz', req, callback);
	}
	public queryYxzc(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/yxzc', req, callback);
	}
	public queryRzsh(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/rzsh', req, callback);
	}
	public formSubmit(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/form_submit', req, callback);
	}
}
