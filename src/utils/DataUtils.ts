export default class DataUtils {
	static updateObject(obj: {[key:string]: any}, ...objArr: {[key:string]: any}[]){
		if(!objArr) return;

		objArr.forEach( ob => {
				for(let k in ob){
						if(obj[k] instanceof Array){
								obj[k] = ob[k];
						}else if(typeof obj[k] === "object"){
								this.updateObject(obj[k], ob[k]);
						}else{
								obj[k] = ob[k];
						}
				}
		});
}

static cloneObject(target: any){
		let result: any;
		if (typeof target === 'object') {
				if (Array.isArray(target)) {
						result = [];
						for (let i in target) {
								result.push(this.cloneObject(target[i]))
						}
				} else if (target === null) {
						result = null;
				} else if(target.constructor === RegExp){
						result = target;
				} else {
						result = {};
						for (let i in target) {
								result[i] = this.cloneObject(target[i]);
						}
				}
		} else {
				result = target;
		}
		return result;
}
}
