import { Vue, Component, Watch } from 'vue-property-decorator';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { SplitText } from 'gsap/SplitText';
import Banner from 'root/components/banner.vue';
import Button from 'root/components/button.vue';
import ChinaMap from 'root/components/chinamap.vue';
import BaiduMap from 'vue-baidu-map';
import ICountUp from 'root/components/countup.vue';
import { Events } from 'root/utils/EnumUtils';

gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, SplitText);
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
	num = 0;
	addFlag = true;
	show1 = 0;
	show2 = 1;
	show3 = 3;
	draggerTarget1: any;
	draggerTarget2: any;
	distance: number = 0;
	rotateFlag: boolean = true;
	progressIndex: number = 0;
	pos = [257, 443, 535, 630, 851, 1039];
	deg: number = 0;
	isPlayingPath: boolean = false;
	prePathIndex: number = -1; //前一次的路径点
	clickFlag: boolean = true;
	pathTween: any;
	unit = 0.06148;
	offset = 0.03;
	path: SVGPathElement;
	plane: HTMLElement;
	preRotate: number = 0;
	playFlag: boolean = false;
	center: any = { lng: 121.437186, lat: 31.188195 };
	times: '';
	historyScroll: HTMLElement;
	height: number = 0;
	isActive = 7;
	bannerActive = 0;
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
		}
		// {
		// 	imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
		// 	time: '2009',
		// 	text: ['捐资援建中国最北部希望小学-齐齐哈尔希望小学', '波涛集团每年定期组织无偿公益献血活动']
		// },
		// {
		// 	imgUrl: require('../../assets/bg_g1_part7_pic3.jpg'),
		// 	time: '2009',
		// 	text: ['捐资援建中国最北部希望小学-齐齐哈尔希望小学', '波涛集团每年定期组织无偿公益献血活动']
		// }
	];
	devolopeList = [
		{ time: '2001-2005', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2006-2010', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2011-2014', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{
			time: '2015-2016',
			name: '起航·发展',
			text: [
				'波涛装饰正式成立，披荆斩棘，砥砺前行',
				'波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场成立波涛家居建材广场。'
			]
		},
		{ time: '2017-2018', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] },
		{ time: '2019-2020', name: '起航·发展', text: ['波涛装饰正式成立，披荆斩棘，砥砺前行', '波涛装饰注册成立，率先推出工厂化施工，推出“家装一站式购齐”服务，成立波涛家居建材广场。'] }
	];
	coreList = [
		{
			imgUrl: require('../../assets/bg_g1_part4_pic1.jpg'),
			title1: '诚信',
			title2: '立业基础',
			eng: 'SINCERITY'
		},
		{
			imgUrl: require('../../assets/bg_g1_part4_pic2.jpg'),
			title1: '感恩',
			title2: '发展源泉',
			eng: 'GRATITUDE'
		},
		{
			imgUrl: require('../../assets/bg_g1_part4_pic3.jpg'),
			title1: '奋斗',
			title2: '拼搏精神',
			eng: 'STRUGGLE'
		},
		{
			imgUrl: require('../../assets/bg_g1_part4_pic4.jpg'),
			title1: '创新',
			title2: '制胜法宝',
			eng: 'INNOVATE'
		},
		{
			imgUrl: require('../../assets/bg_g1_part4_pic5.jpg'),
			title1: '共赢',
			title2: '价值追求',
			eng: 'WIN-WIN'
		}
	];
	options1 = {
		// suffix: '+',
		useEasing: true
	};
	hoverBannerOptions = {
		observer: true,
		observeParents: true,
		speed: 1000,
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
		speed: 1000,
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
	textShow: boolean = true;
	mounted() {
		this.initTextChars();
		this.createDragger();
		this.createTrigger();
		this.initPathTarget();
		this.initVideo();
		setTimeout(() => {
			this.jump(this.$route.params.number);
		}, 100);
		this.onResize();
		this.restartWow();
		this.$bus.$on(Events.RESIZE, this.onResize);
		this.$bus.$on('params-change', this.jump);
	}

	initTextChars() {
		let chars = new SplitText('.text-content', {
			charsClass: 'char',
			type: 'chars'
		}).chars;

		gsap.timeline().fromTo(
			chars,
			{
				duration: 1,
				rotate: -10,
				y: 'random(100, 200)',
				ease: 'power3',
				opacity: 0
			},
			{
				opacity: 1,
				rotate: 0,
				y: 0
			}
		);
	}

	initVideo() {
		const v1 = document.querySelector<HTMLElement>('#v1');
		v1.addEventListener('play', () => {
			this.playFlag = true;
			this.textShow = false;
		});
		v1.addEventListener('pause', () => {
			this.playFlag = false;
		});
	}

	play() {
		const v1 = document.querySelector<HTMLVideoElement>('#v1');

		v1.play();
		this.playFlag = !this.playFlag;
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
		ScrollTrigger.create({
			scroller: '.history-scroll',
			onUpdate: self => {
				let offset = self.progress * (1245 - 290);
				this.$el.querySelector<HTMLElement>('.inner-img').style.height = 2.9 + offset / 100 + 'rem';

				this.calcProgressIndex(offset + 290, this.pos);
			}
		});
	}

	calcProgressIndex(height: number, pos: number[]) {
		for (let i = 0; i < pos.length; i++) {
			if (pos[i] <= height) {
				this.progressIndex = i;
			} else {
				break;
			}
		}
	}

	@Watch('progressIndex')
	getProgressIndex(newVal, oldVal) {
		if (!this.clickFlag) {
			this.clickFlag = true;
			return;
		}
		newVal > oldVal ? this.calcRotate('next') : this.calcRotate('pre');
		this.updateText(newVal,'pre');

	}

	change(str) {
		let progressIndex = this.progressIndex;
		if ((progressIndex == 0 && str == 'pre') || (progressIndex == this.devolopeList.length - 1 && str == 'next')) return;
		str == 'pre' ? progressIndex-- : progressIndex++;
		this.updateText(progressIndex, str);
		this.clickFlag = false;
		if (!this.clickFlag) {
			this.calcRotate(str);
		}

		gsap.to('.history-scroll', {
			duration: 0.5,
			scrollTop: this.calcDistance(progressIndex)
		});
	}

	updateText(progressIndex, str) {
		if (this.num % 2 == 0) {
			if (str == 'pre') {
				this.show2 = progressIndex;
			} else {
				this.show2 = progressIndex;
			}
		} else {
			if (str == 'pre') {
				this.show1 = progressIndex;
			} else {
				this.show1 = progressIndex;
			}
		}
		this.num++;
	}

	calcRotate(str) {
		const time_box = document.querySelector<HTMLElement>('.time-box');
		const text_box = document.querySelector<HTMLElement>('.text-boxs');
		if (str == 'next') {
			this.deg += 90;
		}
		if (str == 'pre') {
			this.deg -= 90;
		}
		time_box.style.transform = `rotateX(-${this.deg}deg)`;
		text_box.style.transform = `rotateX(-${this.deg}deg)`;
	}

	changeTime(i, str = 'pre') {
		gsap.to('.history-scroll', {
			duration: 0.5,
			scrollTop: this.calcDistance(i)
		});
	}
	calcDistance(i) {
		let offset = 25;
		let height = this.pos[i] + offset;
		let progress = (height - 290) / (1245 - 290);
		let totalScroll = 1245 - 716;
		let distance = progress * totalScroll;
		return distance;
	}

	jump(i) {
		if (typeof i === 'undefined') return;
		const headerHeight = document.querySelector<HTMLElement>('.header').clientHeight;
		const brand = document.querySelector<HTMLElement>('.brand');
		const item = brand.querySelector<HTMLElement>(`.select${i}`);
		let top = item.offsetTop - headerHeight;
		if (i == 3) {
			const height = document.querySelector<HTMLElement>('.img-list').clientHeight / 2;
			top += height + 2;
		}
		window.scroll({ top, behavior: 'smooth' });
	}

	initPathTarget() {
		this.path = this.$el.querySelector<SVGPathElement>('.svg .st0');
		this.plane = this.$el.querySelector('.plane');
	}

	doMovePath(index: number, immediate: boolean = false) {
		if (this.isPlayingPath) return;
		if (index == this.prePathIndex) return;

		let isForward = index - this.prePathIndex > 0 ? true : false;
		let start = this.prePathIndex == -1 ? 0 : this.offset + this.unit * this.prePathIndex;

		let end = this.offset + this.unit * index + (isForward ? 0 : -0.0095);
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
			if (this.pathTween) {
				this.pathTween.kill();
				this.isPlayingPath = false;
				this.doMovePath(this.prePathIndex, true);
			}
		});
	}

	beforeDestroy() {
		this.$bus.$off(Events.RESIZE, this.onResize);
		this.$bus.$off('params-change', this.jump);
		this.draggerTarget1.kill();
		this.draggerTarget1 = null;
		ScrollTrigger.getAll().forEach(child => child.kill());
		this.pathTween && this.pathTween.kill();
	}
}
