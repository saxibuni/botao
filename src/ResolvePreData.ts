import store from "./store";
import utils from "./utils";

export default class ResolvePreData {
	static getFooterData() {
		return new Promise((resolve: (value?: unknown) => void, reject: (reason?: any) => void) => {
      if (store.state.footData) {
        return resolve();
      }
				setTimeout(()=>{
					 store.state.hasShowCommitTip = true;
				},60000)
      utils.service.queryFooterData(res => {
        let data = res.data;
        store.state.footData = data;
        resolve();
      });
    })
	}

	static getMenuData() {
		return new Promise((resolve: (value?: unknown) => void, reject: (reason?: any) => void) => {
      if (store.state.menuData) {
        return resolve();
      }
      utils.service.queryMenuData(res => {
        let data = res.data;
        store.state.menuData = data;
        resolve();
      });
    })
	}
}
