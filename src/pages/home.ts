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
let vm = null;
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

	// '轻奢/现代/港式', '中式/新中式', '欧式/法式/地中海/美式', '日式/侘寂/工业风'
	anList = [];

	sjsItem:any = {};
	page2Index = 0;
	page3Index = 0;
	page2Ani = true;
	page3Ani = true;
	portraitList = [];
	currentPortraitList = [];
	nextPortraitList = [];
	portraitListSize = 35;
	portraitListIndex = 0;
	portraitTotalPages = 1;
	applyFlipType: number = 0;
	isShowLightImg: boolean = true;

	page5List = [];
	picList = [require('../assets/bg_home_b4_right1.png'), require('../assets/bg_home_b4_right2.png'), require('../assets/bg_home_b4_right3.png'), require('../assets/bg_home_b4_right4.png')];
	textActive = true;
	picIndex = 0;
	anIndex = 0;
	bannerSwiperOptions: any = {
		speed: 1000,
		loop: true,
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
				});
			},
			slideChangeTransitionStart: function() {
				let chars = (<HTMLElement>this.slides[this.activeIndex]).querySelectorAll<HTMLElement>('.char');
				chars.forEach(item => {
					item.style.opacity = "0";
				});
			},
			slideChangeTransitionEnd: function() {
				let activeSlide = this.slides[this.activeIndex] as HTMLElement;
				setTimeout(() => {
					emitter.$emit('chars-ani', activeSlide);
					let video = document.querySelector(".videos");
					if(video){
						(video as any).currentTime = 0;
					}
				});
			}
		}
	};
	swiperOptions:any = {
		speed: 1000,
		effect : 'fade',
	}
	bannerSwiperOptions2: any = {
		speed: 1000,
		loop: false,
		slidesPerView: 6,
		slidesPerGroup: 1,
		spaceBetween: 10,
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
				// let tag = this.realIndex < 10 ? '0' + (this.realIndex + 1) : this.realIndex + 1;
				// document.querySelector('.banner-tag').innerHTML = tag;
				utils.emitter.$emit('page5IndexFun', this.realIndex);
			},
			slideChangeTransitionEnd: function() {
				for (let i = 0; i <= this.slides.length - 1; i++) {
					this.slides[i].classList.remove('active');
				}
				this.slides[this.activeIndex].classList.add('active');
			},
			click: function(event){
				vm.handleClickSlide(event);
			},
		}
	};
	handleClickSlide(event){
 	 if(event.target.className === 'btn'){
		   if(this.page5Index==0){
				this.$router.push({name: 'soft-decoration', params:{number:'1'}})
			 }else if(this.page5Index==1){
				this.$router.push({name: 'cherry-pick', params:{number:'5'}})
			 }else{
				this.$router.push({name: 'cherry-pick', params:{number:'4'}})
			 }
	 }

	}
	created() {
		vm = this;
	}
	options = {
		suffix: '+',
		useGrouping: false,
		duration: 0.5,
	};
	options1 = {
		suffix: '+',
		useGrouping: false,
		duration: 0.5,
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
	page5Index2:any = '01';
	mounted() {
		this.web_url=this.$store.state.footData.web_url;
		this.restartWow();
		this.initSpineAni();

		utils.emitter.$on('chars-ani', this.onCharsEnter);
		utils.emitter.$on(Events.RESIZE, this.onResize);
		utils.emitter.$on('page5IndexFun', (introductionIndex: number) => {
			if(this.page5List.length==introductionIndex+1){
				this.page5Index2 = '01';
			}else{
				this.page5Index2 = introductionIndex < 10 ? '0' + (introductionIndex + 2) : introductionIndex + 2;
			}
			this.page5Index = introductionIndex;
		});
		utils.service.queryHome({}, res => {
			if (res.status === 200) {
				this.banner = res.data.banner;
				this.anList = res.data.icase;
				this.portraitList = res.data.sjsList;

				if(res.data.sjsList.length>=16){
					this.sjsItem = res.data.sjsList[16];
					this.page3Index = 16;
				}else{
					this.sjsItem = res.data.sjsList[res.data.sjsList.length];
					this.page3Index = res.data.sjsList.length;
				}

				this.portraitTotalPages = Math.ceil(this.portraitList.length / this.portraitListSize);

				this.sgzzDesc = res.data.sgzzDesc;
				this.sggyList = res.data.sggyList;
				this.page5List = res.data.jbxgList;
				this.qaylz = res.data.qaylz;
				this.zxxxList = res.data.zxxxList;

				setTimeout(()=>{
					this.initTextChars();
					this.initScrollTrigger();
					this.onResize();
					(this.$refs.myswiper3 as any).$swiper.autoplay.stop();
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
		return this.add0(d)+'-'+this.add0(m);
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
			trigger: this.$el.querySelector('.page5'),
			onEnter: () => this.onPlayPage5Swiper(),
		});
		ScrollTrigger.create({
			trigger: this.$el.querySelector('.page6'),
			onEnter: () => this.onTriggerPlaySpine()
		});
	}

	onTriggerPlaySpine() {
		let spine = this.pixiView.stage.children[0] as PIXI.spine.Spine;
		spine.state.setAnimation(0, 'enter', false);
		ScrollTrigger.getAll().forEach(child => child.kill());
	}

	onPlayPage5Swiper() {
		let swiper = (this.$refs.myswiper3 as any).$swiper;
		swiper.autoplay.start();
	}

	listwidth = [];
	textActive2 = true;
	onClick(item, i) {
		if(item.img == "assets/white.png"){
			return
		}

		this.sjsItem = this.currentPortraitList[i];
		this.showProfile = !this.showProfile;
		this.page3Index = i;
		this.isShowLightImg = true;
		this.page3Ani = false;
		setTimeout(() => {
			this.page3Ani = true;
		},300);
	}
	picIndex2 = 0;
	textActiveFun(i,index) {
		if(this.picIndex==i){
			return
		}
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
	oninput(){
		this.form.phone=this.form.phone.replace(/[^\d]/g,'')
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
		currentPortraitListCopy.forEach(element => {
			if(this.sjsItem.aid==element.aid){
				this.isShowLightImg = true;
			}
		});

		if (this.currentPortraitList.length > 0 && this.currentPortraitList.length < 35) {
			setTimeout(() => {
				let num =35 -this.currentPortraitList.length
				for (let i = 0; i <num ; i++) {
					this.currentPortraitList.push(
						{img:require('../assets/white.png')}
					);
				}
			},200);
		}

		let listwidth = [];
		this.listwidth = [];
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
			 let nextPortraitList:any =	this.portraitList;
				this.nextPortraitList = nextPortraitList.slice(start + this.portraitListSize, end + this.portraitListSize);
			} else {
				this.nextPortraitList = [];
			}
		} else {
			if (this.portraitListIndex > 0) {
				let nextPortraitList:any =	this.portraitList;
				this.nextPortraitList = nextPortraitList.slice(start - this.portraitListSize, end - this.portraitListSize);
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
	swiperIndex: number = 0;
	onSelect(index) {
		this.swiperIndex = index;
		(this.$refs.mSwiper as any).$swiper.slideTo(index, 600, true);
		this.page2Index = index;
		this.page2Ani = false;
		setTimeout(() => {
			this.page2Ani = true;
		},300);
	}
	onClick3(e){
		let length =(this.anList[this.anIndex] as any).list.length;
		if(e==1){
			if(this.swiperIndex<length-1){
				this.swiperIndex = Number(this.swiperIndex) + e
			}else{
				this.swiperIndex = 0;
				setTimeout(()=>{
						(this.$refs.mySwiper2 as any).$swiper.slideTo(0, 600, true)
				},300)
			}
		}else{
			if(this.swiperIndex<=0){
				this.swiperIndex = length-1;
				setTimeout(()=>{
						(this.$refs.mySwiper2 as any).$swiper.slideTo(length, 600, true)
				},300)
			}else{
				this.swiperIndex =  Number(this.swiperIndex) - 1;
			}
		}
		this.page2Index = this.swiperIndex;
		this.page2Ani = false;
		(this.$refs.mSwiper as any).$swiper.slideTo(this.swiperIndex, 600, true);
		setTimeout(() => {
			this.page2Ani = true;
		},300);
	}
	openUrl(url){
		if(url){
			window.location.href = url;
		}
	}
	beforeDestroy() {
		utils.emitter.$off('chars-ani', this.onCharsEnter);
		utils.emitter.$off(Events.RESIZE, this.onResize);
		utils.emitter.$off('page5IndexFun');
	}
}
