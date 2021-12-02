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
import utils from 'root/utils';

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
	nextIndex=-1;
	nextFlag=true;
	addFlag = true;
	show1 = 0;
	show2 = 1;
	show3 = 3;
	draggerTarget1: any;
	draggerTarget2: any;
	distance: number = 0;
	rotateFlag: boolean = true;
	progressIndex: number = 0;
	pos = [257, 443, 535, 630, 781, 900,1139];
	deg: number = 0;
	isPlayingPath: boolean = false;
	prePathIndex: number = -1; //前一次的路径点
	clickFlag: boolean = true;
	arrowFlag: boolean = false;
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
	isActive = 0;
	bannerActive = 0;
	asideNav = ['波涛品牌', '品牌数据', '核心价值观', '发展历程', '荣誉资质', '社会责任', '联系我们'];
	isIE: boolean;
	devolopeList = [{}];

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
		// loop: true,
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
	web_url = '';
	btbrandInfo = {};
	btzgsList = {};
	brandDataInfo = { id: 0 };
	hxjzgList = [];
	fzlcList = [];
	ryzz = [];
	shzrList = [];
	footData = [];
	created() {
		this.isIE = utils.device.browser.ie;
		this.queryBrand();
	}

	queryBrand() {
		utils.service.queryBrand(res => {
			this.web_url = res.data.web_url;
			this.btbrandInfo = res.data.btbrandInfo;

			//botao子公司
			this.btzgsList = res.data.btzgsList;

			// botao品牌数据
			this.brandDataInfo = res.data.brandDataInfo;

			//核心价值观
			this.hxjzgList = res.data.hxjzgList;

			// 发展历程
			res.data.fzlcList.forEach(v => {
				v.text = [v.title];
				v.text.push(v.desc);
			});
			this.devolopeList = res.data.fzlcList;

			//荣誉资质
			this.ryzz = res.data.ryzz;

			// 社会责任
			this.shzrList = res.data.shzrList;

			this.restartWow();

			this.$nextTick(() => {
				this.createDragger();
				this.createTrigger();
				this.initPathTarget();
				this.initTextChars();
				this.initVideo();
				this.onResize();
				this.$bus.$on(Events.RESIZE, this.onResize);
			});
		});
	}

	mounted() {
		setTimeout(() => {
			this.jump(this.$route.params.number);
		}, 100);
		this.restartWow();
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
		this.updateText(newVal, 'pre');
	}

	change(str) {
		if (this.arrowFlag) return;
		let progressIndex = this.progressIndex;
		if ((progressIndex == 0 && str == 'pre') || (progressIndex == this.devolopeList.length - 1 && str == 'next')) return;
		console.log(2222);

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
		this.arrowFlag = true;
		setTimeout(() => {
			this.arrowFlag = false;
		}, 200);
	}

	IEchange(str) {
		let progressIndex = this.progressIndex;
		if ((progressIndex == 0 && str == 'pre') || (progressIndex == this.devolopeList.length - 1 && str == 'next')) return;
		str == 'pre' ? progressIndex-- : progressIndex++;

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
		console.log(time_box);

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
		console.warn(progress);
		let totalScroll = 1245 - 716;
		if (i == this.pos.length - 1) progress = 1;
		let distance = progress * totalScroll;

		return distance * (Math.min(window.innerWidth) / 1920);
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
		this.nextIndex=index
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

	next(){
		if(!this.nextFlag)return
		this.nextIndex++;
		if(this.nextIndex>=this.shzrList.length-1) this.nextIndex=this.shzrList.length-1
		this.doMovePath(this.nextIndex)
		this.nextFlag=false
		setTimeout(() => {
			this.nextFlag=true
		}, 900);
	}

	prev(){
		if(!this.nextFlag) return
		this.nextIndex--;
		if(this.nextIndex<=0) this.nextIndex=0;
		this.doMovePath(this.nextIndex)
		this.nextFlag=false
		setTimeout(() => {
			this.nextFlag=true
		}, 900);
	}

	onResize() {
		let svgBox = this.$el.querySelector<HTMLElement>('.svg-box');
		let ul = this.$el.querySelector<HTMLElement>('.content-box ul');
		svgBox.style.width = ul.clientWidth + 'px';

		if (this.pathTween) {
			this.pathTween.kill();
			this.isPlayingPath = false;
			this.doMovePath(this.prePathIndex, true);
		}
	}

	beforeDestroy() {
		this.$bus.$off(Events.RESIZE, this.onResize);
		this.$bus.$off('params-change', this.jump);
		this.draggerTarget1.kill();
		this.draggerTarget1 = null;
		ScrollTrigger.getAll().forEach(child => child.kill());
		this.pathTween && this.pathTween.kill();
	}

	bdJump(){
		window.open(`http://api.map.baidu.com/marker?location=31.188195,121.437186&title=波涛家居建材&content=上海徐汇区中山西路2331号&output=html&src=webapp.baidu.openAPIdemo`)
	}
}
