import { Vue, Component, Watch } from 'vue-property-decorator';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { SplitText } from 'gsap/SplitText';
import Search from './search.vue';
import NavLists from './navLists.vue';
gsap.registerPlugin(MorphSVGPlugin, SplitText);

const warps = [
	[
		'M2,8.4C5.2,6,8,5.2,10.3,5.3c3,0.1,7,2.1,8.3,2.8c1.2,0.7,3.1,0.7,3.1,0.7',
		'M2,9.2C2.2,9.3,4.7,9,6.5,7.9c2.6-1.6,6.4-3,8.6-3.1c3.9-0.2,6.6,2.5,6.6,2.5',
		'M2,7.2c1.8,1.2,4.1,1,5.9,0.5c2.9-0.8,5.2-2.5,7.5-2.9C19.1,4.2,22,5.7,22,5.7',
		'M2,6.1c3.6-0.1,4.6,2.7,7.9,3c2.8,0.3,4.6-1.6,6.8-2.6C19.6,5.3,22,5.7,22,5.7',
		'M2,5.1c1.4,0.1,2.6,0.3,4,0.6c2.1,0.5,6.3,3,10,2.8c3.3-0.2,6-2.8,6-2.8'
	],
	[
		'M2,14.4c3.2-2.4,6-3.1,8.3-3.1c3,0.1,7,2.1,8.3,2.8c1.2,0.7,3.1,0.7,3.1,0.7',
		'M2,15.2c0.2,0.1,2.7-0.2,4.5-1.3c2.6-1.6,6.4-3,8.6-3.1c3.9-0.2,6.6,2.5,6.6,2.5',
		'M2,13.3c1.8,1.2,4.1,1,5.9,0.5c2.9-0.8,5.2-2.5,7.5-2.9c3.7-0.7,6.6,0.9,6.6,0.9',
		'M2,11.9c3.6-0.1,4.6,2.7,7.9,3c2.8,0.3,4.6-1.7,6.8-2.6c2.5-1,5.3-0.8,5.3-0.8',
		'M2,10.8c1.4,0.1,2.6,0.3,4,0.6c2.1,0.5,6.3,3,10,2.8c3.3-0.2,6-2.8,6-2.8'
	],
	[
		'M2,20.3c3.2-2.4,6-3.1,8.3-3.1c3,0.1,7,2.1,8.3,2.8c1.2,0.7,3.1,0.7,3.1,0.7',
		'M2,21.1c0.2,0.1,2.7-0.2,4.5-1.3c2.6-1.6,6.4-3,8.6-3.1c3.9-0.2,6.6,2.5,6.6,2.5',
		'M2,19.3c1.8,1.2,4.1,1,5.9,0.5c2.9-0.8,5.2-2.5,7.5-2.9c3.7-0.7,6.6,0.9,6.6,0.9',
		'M2,17.7c3.6-0.1,4.6,2.7,7.9,3c2.8,0.3,4.6-1.7,6.8-2.6c2.5-1,5.3-0.8,5.3-0.8',
		'M2,16.5c1.4,0.1,2.6,0.3,4,0.6c2.1,0.5,6.3,3,10,2.8c3.3-0.2,6-2.8,6-2.8'
	]
];
@Component({
	components: {
		Search,
		NavLists
	}
})
export default class Header extends Vue {
	tl: any;
	navObj = {
		73:'case',
		77:'case-list',
		78:'case-listvr',

		74:'design',
		75:'craft-building',


		79:'craft-building',
		80:'craft-team',
		81:'craft-manager',
		76:'whole-decoration',
		82:'whole-decoration',
		83:'cherry-pick',
		84:'soft-decoration',

		85:'owner-voice',
		86:'owner-voice',
		87:'strategy-list',
		88:'join-us',
		90:'strategy-list',

		89:'brand',
		91:'brand',
		92:'brand',
		93:'brand',
		94:'brand',
		95:'brand',
		96:'brand',
		97:'brand',

	}
	navList = [
		{
			title: '精选案例',
			url: 'case',
			en: 'Selected case',
			active: false,
			son: [
				{ title: '墅装案例', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'case-list' },
				{ title: 'VR装修体验', icon: require('../assets/icons/ic_home_drop_experience.png'), url: 'case-listvr' }
			]
		},
		{
			title: '设计名人堂',
			url: 'design',
			en: 'Design Hall of Fame',
			active: false,
			son: [
				{ title: '擅长户型', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'design-list' },
				{ title: '擅长风格', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'design-list' },
				{ title: '设计师级别', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'design-list' }
			]
		},
		{
			title: '精工匠艺',
			url: 'craft-building',
			en: 'fine craftsmen skill',
			active: false,
			son: [
				{ title: '在施工地', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'craft-building' },
				{ title: '工艺标准', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'craft-team' },
				{ title: '管理体系', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'craft-manager' }
			]
		},
		{
			title: '全案服务',
			url: 'whole-decoration',
			en: 'A whole service',
			active: false,
			son: [
				{ title: '严选材料', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'cherry-pick' },
				{ title: '软装生活', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'soft-decoration' },
				{ title: '无忧售后', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'whole-decoration' }
			]
		},
		{
			title: '最新资讯',
			url: 'information',
			en: 'latest information',
			active: false,
			son: [
				{ title: '业主心声', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'owner-voice' },
				{ title: '公司新闻', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'strategy-list' },
				{ title: '装修攻略', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'strategy-list' },
				{ title: '近期活动', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'strategy-list' },
				{ title: '招贤纳士', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'join-us' }
			]
		},
		{
			title: '波涛品牌',
			url: 'brand',
			en: 'botao brand',
			active: false,
			son: [
				{ title: '品牌介绍', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 0 },
				{ title: '品牌数据', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 1 },
				{ title: '企业理念', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 2 },
				{ title: '发展历程', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 3 },
				{ title: '荣誉资质', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 4 },
				{ title: '社会责任', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 5 },
				{ title: '联系我们', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 6 }
			]
		}
	];
	navBgColor = false;
	rouertName = '';
	web_url = '';
	@Watch('$route', { immediate: true })
	routeChange() {
		this.rouertName = this.$route.meta.title;
	}

	onJump(navId){
		console.log(navId);
		if(navId==89||navId==91){
			this.$router.push({name:this.navObj[navId],params:{number:'0'}})
			this.$bus.$emit('params-change', 0);
		}else if(navId==92){
			this.$router.push({name:this.navObj[navId],params:{number:'1'}})
			this.$bus.$emit('params-change', 1);
		}
		else if(navId==93){
			this.$router.push({name:this.navObj[navId],params:{number:'2'}})
			this.$bus.$emit('params-change', 2);
		}
		else if(navId==94){
			this.$router.push({name:this.navObj[navId],params:{number:'3'}})
			this.$bus.$emit('params-change', 3);
		}
		else if(navId==95){
			this.$router.push({name:this.navObj[navId],params:{number:'4'}})
			this.$bus.$emit('params-change', 4);
		}
		else if(navId==96){
			this.$router.push({name:this.navObj[navId],params:{number:'5'}})
			this.$bus.$emit('params-change', 5);
		}
		else if(navId==97){
			this.$router.push({name:this.navObj[navId],params:{number:'6'}})
			this.$bus.$emit('params-change', 6);
		}
		else{
			this.$router.push({name:this.navObj[navId]})
		}
	}
	mounted() {
		this.web_url = this.$store.state.footData.web_url;
		this.summaryAni();
		window.addEventListener('scroll', this.handleScroll, true);

		this.navList = this.$store.state.menuData.menu_list.map((item,index) =>{
			this.$set(item, 'active', false);
			if(item.nav_id==73){
				this.$set(item, 'url', 'case');
			}
			if(item.nav_id==74){
				this.$set(item, 'url', 'design');
			}
			if(item.nav_id==75){
				this.$set(item, 'url', 'craft-building');
			}
			if(item.nav_id==76){
				this.$set(item, 'url', 'whole-decoration');
			}
			if(item.nav_id==85){
				this.$set(item, 'url', 'information');
			}
			if(item.nav_id==89){
				this.$set(item, 'url', 'brand');
			}
			return item;
		});
	}
	handleScroll() {
		let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		let headerHeight = document.querySelector('.header').clientHeight;
		if (scrolltop >= headerHeight) {
			this.navBgColor = true;
		} else {
			this.navBgColor = false;
		}
	}

	onMouseover(event) {
		let normals = event.target.querySelectorAll('.normal');
		if (gsap.isTweening(normals[0])) return;

		for (let i = 0; i < 3; i++) {
			let morph = [];
			warps[i].forEach(p => {
				morph.push({
					morphSVG: p
				});
			});

			let tl = gsap.timeline().to(normals[i], {
				defaults: {
					duration: 1,
					ease: 'none'
				},

				keyframes: [
					...morph,
					{
						morphSVG: normals[i]
					}
				]
			});

			gsap.fromTo(
				tl,
				{
					time: 0
				},
				{
					duration: 1,
					time: 7
				}
			);
			if (i === 0) this.tl = tl;
		}
	}

	summaryAni() {
		let text = new SplitText('.summary-title >h3, .summary-title >p', {
			type: 'chars'
		}).chars;

		gsap.timeline({
				repeat: -1,
			})
			.fromTo(text, {
				opacity: 0
			}, {
				duration: 0.3,
				opacity: 1,
				stagger: 0.1
			})
			.to(text, {
				opacity: 0,
				duration: 0.3,
				// stagger: -0.1,
				delay: 5
			})
	}

	searchFun() {
		(this.$refs.mySearch as any).searchShow = true;
	}

	myNavFun() {
		(this.$refs.myNav as any).navShow = true;
	}


}
