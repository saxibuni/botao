import Vue from 'vue';
import Router from 'vue-router';
import Home from 'root/pages/home.vue';
import ResolvePreData from './ResolvePreData';

Vue.use(Router);

const originalPush = Router.prototype.push;
const originalRelace = Router.prototype.replace;

Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err: any) => err);
};
Router.prototype.replace = function replace(location) {
	return originalRelace.call(this, location).catch((err: any) => err);
};

const router = new Router({
	mode: 'hash',
	scrollBehavior(to, from,savedPosition) {
		if (to.name == from.name) {
			return savedPosition;
		}
    return {
      x: 0,
      y: 0
    }
  },
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '*',
			redirect: {
				name: 'home'
			}
		}
	]
});
router.beforeEach(async (to, from, next) => {
	// 处理所有页面共有的后端数据
	await ResolvePreData.getFooterData();
	await ResolvePreData.getMenuData();
	next();
});

export default router;
