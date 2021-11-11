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
			meta:{title:'case'},
			component: Case,
			children: [
				{
					path: '/case/list', //B1精选案例列表
					name: 'case-list',
					meta:{title:'case'},
					component: CaseList
				},
				{
					path: '/case/listvr', //B3精选案例列表VR
					name: 'case-listvr',
					meta:{title:'case'},
					component: CaseListVR,
				},
				{
					path: '/case/detail', //B2精选案例详情
					name: 'case-detail',
					meta:{title:'case'},
					component: CaseDetail
				}
			]
		},
		{
			path: '/design',
			name: 'design',
			redirect: '/design/list',
			meta:{title:'design'},
			component: Design,
			children: [
				{
					path: '/design/list',  //C1设计名人堂列表
					name: 'design-list',
					meta:{title:'design'},
					component: DesignList
				},
				{
					path: '/design/detail', //C2设计名人堂详情
					name: 'design-detail',
					meta:{title:'design'},
					component: DesignDetail
				}
			]
		},
		{
			path: '/craft-building', //D1精工匠艺 在建工地
			name: 'craft-building',
			meta:{title:'craft-building'},
			component: CraftBuild
		},
		{
			path: '/craft-team', //D2精工匠艺 施工团队
			name: 'craft-team',
			meta:{title:'craft-building'},
			component: CraftTeam
		},
		{
			path: '/craft-manager', //D3精工匠艺 施工管理
			name: 'craft-manager',
			meta:{title:'craft-building'},
			component: CraftManager
		},
		{
			path: '/whole-decoration', //E1全案服务 全案整装
			name: 'whole-decoration',
			meta:{title:'whole-decoration'},
			component: WholeDecoration
		},
		{
			path: '/cherry-pick', //E2全案服务 严选主材
			name: 'cherry-pick',
			meta:{title:'whole-decoration'},
			component: CherryPick
		},
		{
			path: '/soft-decoration', //E3全案服务 软装生活
			name: 'soft-decoration',
			meta:{title:'whole-decoration'},
			component: SoftDecoration
		},
		{
			path: '/infomation',
			name: 'information',
			redirect: '/infomation/owner-voice',
			meta:{title:'infomation'},
			component: Information,
			children: [
				{
					path: '/infomation/owner-voice', //F1资讯中心 业主心声
					name: 'owner-voice',
					meta:{title:'information'},
					component: OwnerVoice
				},
				{
					path: '/infomation/strategy-list', //F2资讯中心 装修攻略列表
					name: 'strategy-list',
					meta:{title:'information'},
					component: StrategyList
				},
				{
					path: '/infomation/strategy-detail', //F3资讯中心 装修攻略详情
					name: 'strategy-detail',
					meta:{title:'information'},
					component: StrategyDetail
				},
				{
					path: '/infomation/join-us', //F4资讯中心 招贤纳士
					name: 'join-us',
					meta:{title:'information'},
					component: JoinUs
				}
			]
		},
		{
			path: '/brand', // G1波涛品牌
			name: 'brand',
			meta:{title:'brand'},
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
