import { Vue, Component } from 'vue-property-decorator';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/button.vue';
require('root/libs/pixi-spine.js');
gsap.registerPlugin(ScrollTrigger);
PIXI.utils.skipHello();
import utils from 'root/utils';
import { Events } from 'root/utils/EnumUtils';
import ICountUp from 'root/components/countup.vue';
import { TimeSelect } from 'element-ui';
import VideoPopup from 'root/components/videoPopup.vue';

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
		require('../assets/portrait/bg_home_b3_pic09.jpg')
	];
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
		speed: 500,
		loop: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1'
		},
		preventClicks: false
	};
	bannerSwiperOptions2: any = {
		speed: 500,
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
		speed: 500,
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
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next3'
		},
		on: {
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
		this.initSpineAni();
		this.initScrollTrigger();
		setTimeout(() => {
			this.onResize();
		});
		utils.emitter.$on(Events.RESIZE, this.onResize);
		utils.emitter.$on('page2IndexFun', (introductionIndex: number) => {
			this.page2Index = introductionIndex;
			this.page2Ani = false;
			setTimeout(() => {
				this.page2Ani = true;
			},300);
		});
	}
	onResize() {
		let items = `item${this.page3Index}`;
		this.left = this.$refs[items][0].offsetLeft;
		this.top = this.$refs[items][0].offsetTop;
		this.width = this.$refs[items][0].clientWidth;
		this.height = this.$refs[items][0].clientHeight;
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
	left = 0;
	top = 0;
	width = 0;
	height = 0;
	textActive2 = true;
	onClick(event, item, i) {
		this.showProfile = !this.showProfile;
		this.imgSrc = item;

		let items = `item${i}`;
		this.page3Index = i;
		this.left = this.$refs[items][0].offsetLeft;
		this.top = this.$refs[items][0].offsetTop;
		this.width = this.$refs[items][0].clientWidth;
		this.height = this.$refs[items][0].clientHeight;
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
}
