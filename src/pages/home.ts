import { Vue, Component } from 'vue-property-decorator';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Button from '../components/button.vue';
import utils, { emitter } from 'root/utils';
import { Events } from 'root/utils/EnumUtils';
import ICountUp from 'root/components/countup.vue';
import VideoPopup from 'root/components/videoPopup.vue';
require('root/libs/pixi-spine.js');
gsap.registerPlugin(ScrollTrigger, SplitText);
PIXI.utils.skipHello();

@Component({
	components: {
		Button,
		ICountUp,
		VideoPopup
	}
})
export default class home extends Vue {
	showProfile: boolean = true;
	videoPop = {
		 isPop:false
	};
	pixiView: PIXI.Application; //开始不能赋值，不然就会变成vue监测属性
	activeIndex: number = -1;

	anList = ['轻奢/现代/港式', '中式/新中式', '欧式/法式/地中海/美式', '日式/侘寂/工业风'];
	imgSrc = require('../assets/portrait/bg_home_b3_pic17.jpg');
	page2ImgSrc = require('../assets/bg_home_b2_pic1.jpg');
	page2ImgSrcList = [
		require('../assets/bg_home_b2_pic1.jpg'),
		require('../assets/bg_home_b2_pic2.jpg'),
		require('../assets/bg_home_b2_pic3.jpg'),
		require('../assets/bg_home_b2_pic4.jpg'),
		require('../assets/bg_home_b2_pic5.jpg'),
		require('../assets/bg_home_b2_pic6.jpg'),
		require('../assets/bg_home_b2_pic1.jpg'),
		require('../assets/bg_home_b2_pic2.jpg')
	];
	page2Index = 0;
	page3Index = 17;
	page2Ani = true;
	page3Ani = true;

	portraitList = [
		require('../assets/portrait/bg_home_b3_pic01.jpg'),
		require('../assets/portrait/bg_home_b3_pic02.jpg'),
		require('../assets/portrait/bg_home_b3_pic03.jpg'),
		require('../assets/portrait/bg_home_b3_pic04.jpg'),
		require('../assets/portrait/bg_home_b3_pic05.jpg'),
		require('../assets/portrait/bg_home_b3_pic06.jpg'),
		require('../assets/portrait/bg_home_b3_pic07.jpg'),
		require('../assets/portrait/bg_home_b3_pic08.jpg'),
		require('../assets/portrait/bg_home_b3_pic09.jpg'),
		require('../assets/portrait/bg_home_b3_pic10.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic12.jpg'),
		require('../assets/portrait/bg_home_b3_pic13.jpg'),
		require('../assets/portrait/bg_home_b3_pic14.jpg'),
		require('../assets/portrait/bg_home_b3_pic15.jpg'),
		require('../assets/portrait/bg_home_b3_pic16.jpg'),
		require('../assets/portrait/bg_home_b3_pic17.jpg'),
		require('../assets/portrait/bg_home_b3_pic18.jpg'),
		require('../assets/portrait/bg_home_b3_pic19.jpg'),
		require('../assets/portrait/bg_home_b3_pic20.jpg'),
		require('../assets/portrait/bg_home_b3_pic21.jpg'),
		require('../assets/portrait/bg_home_b3_pic22.jpg'),
		require('../assets/portrait/bg_home_b3_pic23.jpg'),
		require('../assets/portrait/bg_home_b3_pic24.jpg'),
		require('../assets/portrait/bg_home_b3_pic25.jpg'),
		require('../assets/portrait/bg_home_b3_pic26.jpg'),
		require('../assets/portrait/bg_home_b3_pic27.jpg'),
		require('../assets/portrait/bg_home_b3_pic28.jpg'),
		require('../assets/portrait/bg_home_b3_pic29.jpg'),
		require('../assets/portrait/bg_home_b3_pic30.jpg'),
		require('../assets/portrait/bg_home_b3_pic31.jpg'),
		require('../assets/portrait/bg_home_b3_pic32.jpg'),
		require('../assets/portrait/bg_home_b3_pic34.jpg'),
		require('../assets/portrait/bg_home_b3_pic35.jpg'),
		require('../assets/portrait/bg_home_b3_pic09.jpg'),

		require('../assets/portrait/bg_home_b3_pic22.jpg'),
		require('../assets/portrait/bg_home_b3_pic23.jpg'),
		require('../assets/portrait/bg_home_b3_pic24.jpg'),
		require('../assets/portrait/bg_home_b3_pic25.jpg'),
		require('../assets/portrait/bg_home_b3_pic26.jpg'),
		require('../assets/portrait/bg_home_b3_pic27.jpg'),
		require('../assets/portrait/bg_home_b3_pic28.jpg'),
		require('../assets/portrait/bg_home_b3_pic29.jpg'),
		require('../assets/portrait/bg_home_b3_pic30.jpg'),
		require('../assets/portrait/bg_home_b3_pic31.jpg'),
		require('../assets/portrait/bg_home_b3_pic32.jpg'),
		require('../assets/portrait/bg_home_b3_pic34.jpg'),
		require('../assets/portrait/bg_home_b3_pic35.jpg'),
		require('../assets/portrait/bg_home_b3_pic09.jpg'),
		require('../assets/portrait/bg_home_b3_pic01.jpg'),
		require('../assets/portrait/bg_home_b3_pic02.jpg'),
		require('../assets/portrait/bg_home_b3_pic03.jpg'),
		require('../assets/portrait/bg_home_b3_pic04.jpg'),
		require('../assets/portrait/bg_home_b3_pic05.jpg'),
		require('../assets/portrait/bg_home_b3_pic06.jpg'),
		require('../assets/portrait/bg_home_b3_pic07.jpg'),
		require('../assets/portrait/bg_home_b3_pic08.jpg'),
		require('../assets/portrait/bg_home_b3_pic09.jpg'),
		require('../assets/portrait/bg_home_b3_pic10.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic12.jpg'),
		require('../assets/portrait/bg_home_b3_pic13.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),


		require('../assets/portrait/bg_home_b3_pic05.jpg'),
		require('../assets/portrait/bg_home_b3_pic06.jpg'),
		require('../assets/portrait/bg_home_b3_pic07.jpg'),
		require('../assets/portrait/bg_home_b3_pic08.jpg'),
		require('../assets/portrait/bg_home_b3_pic09.jpg'),
		require('../assets/portrait/bg_home_b3_pic10.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic12.jpg'),
		require('../assets/portrait/bg_home_b3_pic13.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
		require('../assets/portrait/bg_home_b3_pic11.jpg'),
	];
	currentPortraitList = [];
	nextPortraitList = [];
	portraitListSize = 35;
	portraitListIndex = 0;
	portraitTotalPages = Math.ceil(this.portraitList.length / this.portraitListSize);
	applyFlipType: number = 0;
	isShowLightImg: boolean = true;

	page5List = [
		{
			imgSrc: [require('../assets/bg_home_b5_a1.jpg'), require('../assets/bg_home_b5_a2.jpg'), require('../assets/bg_home_b5_a3.jpg'), require('../assets/bg_home_b5_a4.jpg')]
		},
		{
			imgSrc: [require('../assets/bg_home_b5_b1.jpg'), require('../assets/bg_home_b5_b2.jpg'), require('../assets/bg_home_b5_b3.jpg'), require('../assets/bg_home_b5_b4.jpg')]
		},
		{
			imgSrc: [require('../assets/bg_home_b5_c1.jpg'), require('../assets/bg_home_b5_c2.jpg'), require('../assets/bg_home_b5_c3.jpg'), require('../assets/bg_home_b5_c3.jpg')]
		}
	];
	picList = [require('../assets/bg_home_b4_right1.png'), require('../assets/bg_home_b4_right2.png'), require('../assets/bg_home_b4_right3.png'), require('../assets/bg_home_b4_right4.png')];
	textActive = true;
	picIndex = 0;
	anIndex = 0;
	bannerSwiperOptions: any = {
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1'
		},
		preventClicks: false,
		on: {
			init: function() {
				setTimeout(() => {
					let activeSlide = this.slides[this.activeIndex] as HTMLElement;
					emitter.$emit('chars-ani', activeSlide, true);
				}, 100);
			},
			slideChangeTransitionStart: function() {
				let chars = (<HTMLElement>this.slides[this.activeIndex]).querySelectorAll<HTMLElement>('.char');
				chars.forEach(item => {
					item.style.opacity = "0";
				});
			},
			slideChangeTransitionEnd: function() {
				let activeSlide = this.slides[this.activeIndex] as HTMLElement;
				emitter.$emit('chars-ani', activeSlide)
			}
		}
	};
	swiperOptions:any = {
		speed: 1000,
		effect : 'fade',
	}
	bannerSwiperOptions2: any = {
		speed: 1000,
		loop: true,
		slidesPerView: 6,
		slidesPerGroup: 1,
		spaceBetween: 10,
		slideToClickedSlide: true,
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		},
		preventClicks: false,
		on: {
			slideChangeTransitionStart: function() {
				utils.emitter.$emit('page2IndexFun', this.realIndex);
			}
		}
	};
	bannerSwiperOptions3: any = {
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination3',
			clickable: true,
			type: 'custom',
			renderCustom: function(index, current, total) {
				var customPaginationHtml = '';
				for (var i = 0; i < total; i++) {
					if (i == current - 1) {
						customPaginationHtml += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i < 10 ? '0' + (i + 1) : i + 1}</span>`;
					} else {
						customPaginationHtml += `<span class="swiper-pagination-bullet">${i < 10 ? '0' + (i + 1) : i + 1}</span>`;
					}
				}
				return customPaginationHtml;
			}
		},
		autoplay: {
			delay: 6000,
			loop: true,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next3'
		},
		on: {
			slideChangeTransitionStart: function() {
				let tag = this.realIndex < 10 ? '0' + (this.realIndex + 1) : this.realIndex + 1;
				document.querySelector('.banner-tag').innerHTML = tag;
			},
			slideChangeTransitionEnd: function() {
				for (let i = 0; i <= this.slides.length - 1; i++) {
					this.slides[i].classList.remove('active');
				}
				this.slides[this.activeIndex].classList.add('active');
			}
		}
	};

	options1 = {
		suffix: '+',
		useGrouping: false
	};
	options2 = {
		useGrouping: false
	};
	mounted() {
		this.restartWow();
		this.initTextChars();
		this.initSpineAni();
		this.initScrollTrigger();
		this.getCurrentPortraitList();
		setTimeout(() => {
			this.onResize();
		});

		utils.emitter.$on('chars-ani', this.onCharsEnter);
		utils.emitter.$on(Events.RESIZE, this.onResize);
		utils.emitter.$on('page2IndexFun', (introductionIndex: number) => {
			(this.$refs.mSwiper as any).$swiper.slideTo(introductionIndex, 600, true);
			this.page2Index = introductionIndex;
			this.page2Ani = false;
			setTimeout(() => {
				this.page2Ani = true;
			},300);
		});
	}
	onResize() {
		this.getCurrentPortraitList();
	}
	initSpineAni() {
		let loader = PIXI.loader;
		let res = PIXI.loader.resources as any;
		if (!res['homeani']) loader.add('homeani', './spine/zoujinbotao.json');

		loader.load(() => {
			this.pixiView = new PIXI.Application({
				view: this.$el.querySelector('.canvas-wrapper canvas'),
				transparent: true
			});
			this.pixiView.renderer.resize(1920, 1097);

			let spine = new PIXI.spine.Spine(res['homeani'].spineData);
			spine.skeleton.setToSetupPose();
			spine.position.set(1124, 548);
			this.pixiView.stage.addChild(spine);
		});
	}

	initScrollTrigger() {
		ScrollTrigger.create({
			trigger: this.$el.querySelector('.page6'),
			onEnter: () => this.onTriggerPlaySpine(),
			onEnterBack: () => this.onTriggerPlaySpine()
		});
	}

	onTriggerPlaySpine() {
		let spine = this.pixiView.stage.children[0] as PIXI.spine.Spine;
		spine.state.setAnimation(0, 'enter', false);
		ScrollTrigger.getAll().forEach(child => child.kill());
	}
	listwidth = [];
	textActive2 = true;
	onClick(item, i) {
		this.showProfile = !this.showProfile;
		this.imgSrc = item;
		this.page3Index = i;
		this.isShowLightImg = true;
		this.page3Ani = false;
		setTimeout(() => {
			this.page3Ani = true;
		},300);
	}
	textActiveFun(i) {
		this.picIndex = i;
		this.textActive = !this.textActive;
		this.textActive2 = false;
		setTimeout(()=>{
			this.textActive2 = true;
		},300)
	}
	form = {
		userName: '',
		phone: '',
		area: ''
	};
	onSubmit() {
		if (!this.form.userName) {
			this.$store.state.dialog={
				state:2,
				text:'请输入您的姓名'
			}
			return;
		}
		if (this.form.phone.length != 11) {
			this.$store.state.dialog={
				state:2,
				text:'请输入正确的联系电话'
			}
			return;
		}
		if (!this.form.area) {
			this.$store.state.dialog={
				state:2,
				text:'请输入您的装修面积'
			}
			return;
		}
		this.$store.state.dialog={
			state:1,
			text:'提交成功'
		}
		this.form = {
			userName: '',
			phone: '',
			area: ''
		};
	}

	onRoute(name: string, query?: any) {
		this.$router.push({name: name, query: query})
	}

	onPortraitListPrev() {
		if (this.applyFlipType) return;
		if (this.portraitListIndex == 0) return;
		this.getPreparePortraitList(false);

		this.applyFlipType = 2;
		setTimeout(() => {
			this.applyFlipType = 0;
			this.portraitListIndex--;
			this.getCurrentPortraitList();
		}, 600);

		this.isShowLightImg = false;
	}

	onPortraitListNext() {
		if (this.applyFlipType) return;
		if (this.portraitListIndex == this.portraitTotalPages - 1) return;
		this.getPreparePortraitList();

		this.applyFlipType = 1;
		setTimeout(() => {
			this.applyFlipType = 0;
			this.portraitListIndex++;
			this.getCurrentPortraitList();
		}, 600);

		this.isShowLightImg = false;
	}

	getCurrentPortraitList() {
		let start = this.portraitListIndex * this.portraitListSize;
		let end = (this.portraitListIndex + 1) * this.portraitListSize;
		this.currentPortraitList = this.portraitList.slice(start, end);
		let currentPortraitListCopy=[...this.currentPortraitList]
		if (this.currentPortraitList.length > 0 && this.currentPortraitList.length < 35) {
			setTimeout(() => {
				let num =35 -this.currentPortraitList.length
				for (let i = 0; i <num ; i++) {
					this.currentPortraitList.push(require('../assets/portrait/white.png'));
				}
			},200);
		}
		let listwidth = [];
		setTimeout(() => {
			currentPortraitListCopy.forEach((e, i) => {
				let items = `item${i}`;
				let left = this.$refs[items][0].offsetLeft;
				let top = this.$refs[items][0].offsetTop;
				let width = this.$refs[items][0].clientWidth;
				let height = this.$refs[items][0].clientHeight;
				let src = e;
				listwidth.push({ left, top, width, height, src });
			});
			this.listwidth = listwidth;
		});
	}
	isShowImg = true;
	getPreparePortraitList(toNext: boolean = true) {
		let start = this.portraitListIndex * this.portraitListSize;
		let end = (this.portraitListIndex + 1) * this.portraitListSize;
		this.isShowImg = false;
		setTimeout(()=>{
			this.isShowImg = true;
		},1000)
		if (toNext) {
			if (this.portraitListIndex < this.portraitTotalPages) {
				this.nextPortraitList = this.portraitList.slice(start + this.portraitListSize, end + this.portraitListSize);
			} else {
				this.nextPortraitList = [];
			}
		} else {
			if (this.portraitListIndex > 0) {
				this.nextPortraitList = this.portraitList.slice(start - this.portraitListSize, end - this.portraitListSize);
			} else {
				this.nextPortraitList = [];
			}
		}
	}


	initTextChars() {
		let textContents = this.$el.querySelectorAll<HTMLElement>('.text-content');
		textContents.forEach(item => {
			new SplitText(item, {
				charsClass: 'char',
				type: 'chars'
			}).chars;
		});
	}

	onCharsEnter(slide: HTMLElement, isInit: boolean = false) {


		let chars = slide.querySelectorAll('.char');
		gsap.timeline()
			.fromTo(chars, {
				duration: 1,
				rotate: -10,
				y: "random(100, 200)",
				ease: "power3",
				opacity: 0
			}, {
				opacity: 1,
				rotate: 0,
				y: 0
			});

			if (isInit) {
				let textContents = this.$el.querySelectorAll<HTMLElement>('.text-content');
				textContents.forEach(item => item.style.opacity = "1");
			}
	}

	beforeDestroy() {
		utils.emitter.$off('chars-ani', this.onCharsEnter);
		utils.emitter.$off(Events.RESIZE, this.onResize);
		utils.emitter.$off('page2IndexFun');
	}
}
