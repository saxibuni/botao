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

	sjsItem:any = {};
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
	page3Index = 0;
	page2Ani = true;
	page3Ani = true;
	portraitList = [
		{img:require('../assets/portrait/bg_home_b3_pic01.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic02.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic03.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic04.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic05.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic06.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic07.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic08.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic09.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic01.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic01.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic01.jpg')},
		{img:require('../assets/portrait/bg_home_b3_pic01.jpg')},
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
		loop: false,
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
				}, 200);
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
	page5Index = 0;
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
				utils.emitter.$emit('page5IndexFun', this.realIndex);
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
	web_url = '';
	banner = {
		list:[]
	};
	sgzzDesc = {};
	sggyList = [];
	jbxgList = [];
	qaylz = {};
	zxxxList = [];
	mounted() {
		this.web_url=this.$store.state.footData.web_url;
		this.restartWow();
		this.initSpineAni();
		this.initScrollTrigger();

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
		utils.emitter.$on('page5IndexFun', (introductionIndex: number) => {
			this.page5Index = introductionIndex;
		});
		utils.service.queryHome({}, res => {
			if (res.status === 200) {
				this.banner = res.data.banner;
				this.anList = res.data.icase;
				this.portraitList = res.data.sjsList;
				this.sjsItem = res.data.sjsList[0];
				this.sgzzDesc = res.data.sgzzDesc;
				this.sggyList = res.data.sggyList;
				this.page5List = res.data.jbxgList;
				this.qaylz = res.data.qaylz;
				this.zxxxList = res.data.zxxxList;

				setTimeout(()=>{
					this.initTextChars();
					this.onResize();
				})
				this.getCurrentPortraitList();
			}
		});

	}
	add0(m){return m<10?'0'+m:m }
	format(shijianchuo){
		var time = new Date(shijianchuo*1000);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		return this.add0(m)+'-'+this.add0(d);
	}
	eMonh = {
		1:'January',
		2:'February',
		3:'March',
	  4:'April',
		5:'May',
		6:'June',
		7:'July',
		8:'August',
		9:'September',
		10:'October',
		11:'November',
		12:'December',
	};
	yue(shijianchuo){
		var time = new Date(shijianchuo*1000);
		var m = time.getMonth()+1;
		return this.eMonh[m];
	}
	anIndexFun(){
		(this.$refs.mSwiper as any).$swiper.slideTo(0, 600, true);
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
		this.sjsItem = this.portraitList[i];
		this.showProfile = !this.showProfile;
		this.sjsItem.imgSrc = item;
		this.page3Index = i;
		this.isShowLightImg = true;
		this.page3Ani = false;
		setTimeout(() => {
			this.page3Ani = true;
		},300);
	}
	picIndex2 = 0;
	textActiveFun(i,index) {
		this.picIndex = i;
		this.picIndex2 = index;
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
		let data = {
			form_id:11,
			attr_45:this.form.userName,
			attr_46:this.form.phone,
			attr_47:this.form.area,
		}
		utils.service.formSubmit(data, res => {
			if (res.status === 200) {
			 		this.$store.state.dialog={
						state:1,
						text:'提交成功'
					}
					this.form = {
						userName: '',
						phone: '',
						area: ''
					};
					this.$store.state.dialogVisible = false;
			}else{
				this.$store.state.dialog={
						state:2,
						text:'系统错误'
				}
			}
		});
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
					this.currentPortraitList.push(
						{img:require('../assets/portrait/white.png')}
					);
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
				let src = e.img;
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
		utils.emitter.$off('page5IndexFun');
	}
}
