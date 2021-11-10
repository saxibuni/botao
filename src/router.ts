import Vue from 'vue';
import Router from 'vue-router';
import Home from 'root/pages/home.vue';
import Case from 'root/pages/case/index.vue';
import CaseList from 'root/pages/case/list.vue';
import CaseListVR from "root/pages/case/listvr.vue";
import CaseDetail from 'root/pages/case/detail.vue';
import Design from 'root/pages/design/index.vue';
import DesignList from 'root/pages/design/list.vue';
import DesignDetail from 'root/pages/design/detail.vue';
import CraftBuild from 'root/pages/craftart/building.vue';
import CraftTeam from 'root/pages/craftart/team.vue';
import CraftManager from 'root/pages/craftart/manager.vue';
import WholeDecoration from 'root/pages/service/wholedecoration.vue';
import CherryPick from 'root/pages/service/cherrypick.vue';
import SoftDecoration from 'root/pages/service/softdecoration.vue';
import Information from 'root/pages/information/index.vue';
import OwnerVoice from 'root/pages/information/ownervoice.vue';
import StrategyList from 'root/pages/information/strategylist.vue';
import StrategyDetail from 'root/pages/information/strategydetail.vue';
import JoinUs from 'root/pages/information/joinus.vue';
import Brand from 'root/pages/brand/index.vue';
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
	scrollBehavior(to, from, savedPosition) {
		if (to.name == from.name) {
			return savedPosition;
		}
		return {
			x: 0,
			y: 0
		};
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/case',
			name: 'case',
			redirect: '/case/list',
			component: Case,
			children: [
				{
					path: '/case/list',
					name: 'case-list',
					component: CaseList
				},
				{
					path: '/case/listvr',
					name: 'case-listvr',
					component: CaseListVR,
				},
				{
					path: '/case/detail',
					name: 'case-detail',
					component: CaseDetail
				}
			]
		},
		{
			path: '/design',
			name: 'design',
			redirect: '/design/list',
			component: Design,
			children: [
				{
					path: '/design/list',
					name: 'design-list',
					component: DesignList
				},
				{
					path: '/design/detail',
					name: 'design-detail',
					component: DesignDetail
				}
			]
		},
		{
			path: '/craft-building',
			name: 'craft-building',
			component: CraftBuild
		},
		{
			path: '/craft-team',
			name: 'craft-team',
			component: CraftTeam
		},
		{
			path: '/craft-manager',
			name: 'craft-manager',
			component: CraftManager
		},
		{
			path: '/whole-decoration',
			name: 'whole-decoration',
			component: WholeDecoration
		},
		{
			path: '/cherry-pick',
			name: 'cherry-pick',
			component: CherryPick
		},
		{
			path: '/soft-decoration',
			name: 'soft-decoration',
			component: SoftDecoration
		},
		{
			path: '/infomation',
			name: 'information',
			redirect: '/infomation/owner-voice',
			component: Information,
			children: [
				{
					path: '/infomation/owner-voice',
					name: 'owner-voice',
					component: OwnerVoice
				},
				{
					path: '/infomation/strategy-list',
					name: 'strategy-list',
					component: StrategyList
				},
				{
					path: '/infomation/strategy-detail',
					name: 'strategy-detail',
					component: StrategyDetail
				},
				{
					path: '/infomation/join-us',
					name: 'join-us',
					component: JoinUs
				}
			]
		},
		{
			path: '/brand',
			name: 'brand',
			component: Brand
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
