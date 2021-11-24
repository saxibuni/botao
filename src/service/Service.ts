import { EventEmitter } from "events";
import { ISuccess, IError } from "./ICallback";
import axios, { AxiosResponse } from "axios";
const qs = require('qs');
axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 60000;

export class Service extends EventEmitter {
	protected send(url: string, data: any, success: ISuccess, error?: IError) {
		axios.post(url, qs.stringify(data)).then((res: AxiosResponse) => {
			res.data = JSON.parse(res.data);
			console.log(url, res);
			return success(res);
		}, (err) => {
			if (err) {
				console.error("请求出错!");
			}
			return error && error(0);
		});
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

}
