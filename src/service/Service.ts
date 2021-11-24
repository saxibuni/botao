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
				res.data = JSON.parse(res.data);
				return success(res);
			},
			err => {
				if (err) {
					console.error('请求出错!');
				}
				return error && error(0);
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
	public queryNews(callback: (res: any) => void) {
		this.send('api.php/Ajax/news', {}, callback);
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

	public queryQazz(req, callback: (res: any) => void) {
		this.send('api.php/Ajax/qazz', req, callback);
	}
}
