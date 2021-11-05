import 'core-js/modules/es.promise.js';
import 'core-js/modules/es.object.assign.js';
import Vue from "vue";
import { Tabs, TabPane, Pagination, Dialog } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import store from "./store";
import router from "./router";
import utils from "./utils";
import "minireset.css/minireset.css";
import "./style/adapter.scss";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/css/swiper.css";
import TapOutside from "root/directive/TapOutside";
Vue.use(TapOutside);
Vue.use(VueAwesomeSwiper);
Vue.use(Tabs).use(TabPane).use(Pagination).use(Dialog);


const wow = new (require('wowjs').WOW)({
	mobile: false,
	live: false
});
wow.init();
utils.wow = wow;

Vue.prototype.$bus = utils.emitter;
Vue.prototype.resolveSEO = (data) => {
	document.title = data.seo_title;
	let meta = document.querySelectorAll('meta')
	meta[3].content = data.seo_keywords;
	meta[4].content = data.seo_description;
}

Vue.prototype.restartWow = () => { ///mounted周期函数之后调用
	if (!store.getters.isPortrait) {
		utils.wow.stop();
		setTimeout(() => {
			let scrollTop = document.documentElement.scrollTop;
			utils.wow.start();
			window.scrollTo(0, scrollTop + 1); ///为了触发滚动启动wow动画
			window.scrollTo(0, scrollTop);
		})
	}
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

