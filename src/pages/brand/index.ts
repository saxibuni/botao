import { Vue, Component } from 'vue-property-decorator';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Banner from 'root/components/banner.vue';
import Button from 'root/components/button.vue';
import ChinaMap from 'root/components/chinamap.vue';
import BaiduMap from 'vue-baidu-map';
import ICountUp from 'root/components/countup.vue';
import { Events } from 'root/utils/EnumUtils';

gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
Vue.use(BaiduMap, {
	ak: 'xRnB87lnDWlcyPj4Qa0hvGDy72v3l9HE'
});
@Component({
	components: {
		Button,
		Banner,
		ChinaMap,
		ICountUp
	}
})
export default class Brand extends Vue {
	draggerTarget1: any;
	draggerTarget2: any;
	distance: number = 0;
	progressIndex: number = 0;

	isPlayingPath: boolean = false;
	prePathIndex: number = -1; //前一次的路径点
	pathTween: any;
	unit = 0.06148;
	offset = 0.03;
	path: SVGPathElement;
	plane: HTMLElement;

	center: any = { lng: 121.437186, lat: 31.188195 };
	times: '';
	historyScroll: HTMLElement;
	height: number = 0;
	isActive = 7;
	bannerActive = 0;
	isShow = 0;
	BannerData = {
		imgUrl: require('../../assets/bg_g1_banner.jpg'),
		cn: '波涛品牌',
		en: 'ABOUT BOTAOGROUP'
	};
	asideNav = ['波涛品牌', '品牌数据', '核心价值观', '发展历程', '荣誉资质', '社会责任', '联系我们'];
	nav = ['荣誉证书', '研发专利'];
	btBrandArr = ['壹澜建材', '九衡堂', '锦沁建筑劳务', '繁构国际设计', '汇海船舶', '锦悦建设', '波涛家庭装饰', '波澜管理', '波涛装饰家居', '波涛简嘉公寓', '波涛商学院', '波涛软装'];
	btBrandInfoArr = [
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		}
	];
	hvBanner = [
		{
			imgUrl: require('../../assets/bg_g1_part6_honer1.jpg'),
			title: '上海市建设工程白玉兰奖'
		},
		{
			imgUrl: require('../../assets/bg_g1_part6_honer2.jpg'),
			title: '上海市装饰装修行业“十强"企业'
		},
		{
			imgUrl: require('../../assets/bg_g1_part6_honer3.jpg'),
			title: '全国装饰装修行业“百强”企业'
		},
		{
			imgUrl: require('../../assets/bg_g1_part6_honer4.jpg'),
			title: '上海市消保委“装潢”指引企业'
		}
	];
	socialArr = [
		{
			imgUrl: require('../../assets/bg_g1_part7_pic1.jpg'),
			time: '2003',
			text: ['非典期间捐献物资，与人民群众同心协力，共克时艰', '波涛集团每年定期组织无偿公益献血活动']
		},
		{
			imgUrl: require('../../assets/bg_g1_part7_pic2.jpg'),
			time: '2008',
			text: ['为汶川地震灾区捐献救援物资', '波涛集团每年定期组织无偿公益献血活动']
		},
		{
			imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
			time: '2009',
			text: ['捐资援建中国最北部希望小学', '波涛集团每年定期组织无偿公益献血活动']
		},
		{
			imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
			time: '2009',
			text: ['捐资援建中国最北部希望尔希望小学', '波涛集团每年定期组织无偿公益献血活动']
		},
		{
			imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
			time: '2009',
			text: ['捐资援建中国最北部希望小学-齐齐哈尔希望小学', '波涛集团每年定期组织无偿公益献血活动']
		},
		{
			imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
			time: '2009',
			text: ['捐资援建中国最北部希望小学-齐齐哈尔希望小学', '波涛集团每年定期组织无偿公益献血活动']
		},
		{
			imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
			time: '2009',
			text: ['捐资援建中国最北部希望小学-齐齐哈尔希望小学', '波涛集团每年定期组织无偿公益献血活动']
		},
		{
			imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
			time: '2009',
			text: ['捐资援建中国最北部希望小学-齐齐哈尔希望小学', '波涛集团每年定期组织无偿公益献血活动']
		}
	];
	devolopeList = [
		{ time: '2001-2005', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2006-2010', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2011-2014', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2015-2016', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2017-2018', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2019-2020', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] }
	];
	options1 = {
		// suffix: '+',
		useEasing: true
	};
	hoverBannerOptions = {
		observer: true,
		observeParents: true,
		speed: 500,
		spaceBetween: 77,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: '.hv-next',
			prevEl: '.hv-pre'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};
	researchBannerOptions = {
		observer: true,
		observeParents: true,
		speed: 500,
		spaceBetween: 77,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: '.res-next',
			prevEl: '.res-pre'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};
	mounted() {
		this.createDragger();
		this.createTrigger();
		this.initPathTarget();

		let number = this.$route.query.number;
		if (number) {
			setTimeout(() => {
				this.jump(number);
			});
		}
		this.onResize();
		this.$bus.$on(Events.RESIZE, this.onResize);
	}

	createDragger() {
		this.draggerTarget1 = Draggable.create('.social-response .content-box', {
			type: 'scrollLeft',
			inertia: true,
			cursor: 'auto',
			edgeResistance: 0.7
		})[0];

		this.draggerTarget2 = Draggable.create('.history-scroll', {
			type: 'scrollTop',
			inertia: true,
			cursor: 'auto',
			edgeResistance: 0.7
		});
	}

	createTrigger() {
		let pos = [257, 443, 535, 630, 851, 1039];
		ScrollTrigger.create({
			scroller: '.history-scroll',
			onUpdate: self => {
				let offset = self.progress * (1245 - 290);
				this.$el.querySelector<HTMLElement>('.inner-img').style.height = 2.9 + offset / 100 + 'rem';

				this.calcProgressIndex(offset + 290, pos);
			}
		});
	}

	calcProgressIndex(height: number, pos: number[]) {
		for (let i = 0; i < pos.length; i++) {
			if (pos[i] <= height) {
				this.progressIndex = i;
				const times = this.$el.querySelectorAll<HTMLElement>('.yearTime');
				times[i].style.opacity = '1';
				this.isShow = i
			} else {
				const times = this.$el.querySelectorAll<HTMLElement>('.yearTime');
				times[i].style.opacity = '0';
				break;
			}
		}
	}

	change(str) {
		if ((this.isShow == 0 && str == 'pre') || (this.isShow == this.devolopeList.length - 1 && str == 'next')) return;
		str == 'pre' ? this.isShow-- : this.isShow++;
	}

	jump(i) {
		const headerHeight = document.querySelector<HTMLElement>('.header').clientHeight;
		const brand = document.querySelector<HTMLElement>('.brand');
		const item = brand.querySelector<HTMLElement>(`.select${i}`);
		let top = item.offsetTop - headerHeight;
		window.scroll({ top, behavior: 'smooth' });
	}

	initPathTarget() {
		this.path = this.$el.querySelector<SVGPathElement>('.svg .st0');
		this.plane = this.$el.querySelector('.plane');
	}

	doMovePath(index: number, immediate: boolean = false) {
		if (this.isPlayingPath) return;

		let start = this.prePathIndex == -1 ? 0 : this.offset + this.unit * this.prePathIndex;
		let end = this.offset + this.unit * index;
		let duration = immediate ? 0 : Math.abs(end - start) * 15;

		this.isPlayingPath = true;
		this.prePathIndex = index;

		this.pathTween = gsap
			.timeline({
				defaults: {
					duration,
					ease: 'none'
				}
			})
			.to(this.plane, {
				motionPath: {
					path: this.path,
					align: this.path,
					alignOrigin: [0.5, 0.5],
					autoRotate: true,
					start,
					end
				},
				onComplete: () => {
					this.isPlayingPath = false;
				}
			});
	}

	onResize() {
		let svgBox = this.$el.querySelector<HTMLElement>('.svg-box');
		let ul = this.$el.querySelector<HTMLElement>('.content-box ul');
		svgBox.style.width = ul.clientWidth + 'px';

		setTimeout(() => {
			this.pathTween.kill();
			this.isPlayingPath = false;
			this.doMovePath(this.prePathIndex, true);
		});
	}

	beforeDestroy() {
		this.$bus.$off(Events.RESIZE, this.onResize);
		this.draggerTarget1.kill();
		this.draggerTarget1 = null;
		ScrollTrigger.getAll().forEach(child => child.kill());
		this.pathTween.kill();
	}
}
