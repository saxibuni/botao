import { Vue, Component } from 'vue-property-decorator';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import utils from "root/utils";
import ICountUp from 'root/components/countup.vue';

gsap.registerPlugin(ScrollTrigger, SplitText);
@Component({
	components:{
		ICountUp
	}
})
export default class CheckPick extends Vue {
	iconIndex = 0;
	bannerSwiperOptions: any = {
		speed: 1000,
		loop: false,
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1'
		},
		effect: 'fade',
		preventClicks: false,
		on: {
			slideChangeTransitionStart: function () {
				utils.emitter.$emit('bannerIndexFun', this.realIndex);
			}
		}
	};

	bannerSwiperOptions2: any = {
		speed: 900,
		loop: true,
		autoplay: {
			delay: 18000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination2',
			clickable: true
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		},
		preventClicks: false
	};
	portraitList = [
		require('root/assets/bg_e2_part7_b2.png')
	];
	currentPortraitList = [];
	nextPortraitList = [];
	portraitListSize = 26;
	portraitListIndex = 0;
	applyFlipType: number = 0;
	portraitTotalPages = Math.ceil(this.portraitList.length / this.portraitListSize);
	index: number = -1;
	onPortraitListPrev(number: number = 999) {
		if (this.applyFlipType) return;
		if (this.portraitListIndex == 0) return;
		this.getPreparePortraitList(false);
		this.applyFlipType = 2;
		setTimeout(() => {
			this.applyFlipType = 0;
			if (number == 999) {
				this.portraitListIndex--;
			} else {
				this.portraitListIndex = number;
			}
			this.getCurrentPortraitList(this.portraitListIndex);
		}, 600);
	}

	onPortraitListNext(number: number = 999) {
		if (this.applyFlipType) return;
		if (this.portraitListIndex == this.portraitTotalPages - 1) return;
		this.getPreparePortraitList();
		this.applyFlipType = 1;

		setTimeout(() => {
			this.applyFlipType = 0;
			if (number == 999) {
				this.portraitListIndex++;
			} else {
				this.portraitListIndex = number;
			}
			this.getCurrentPortraitList(this.portraitListIndex);
		},600);
	}

	getCurrentPortraitList(i) {
		let start = i * this.portraitListSize;
		let end = (i + 1) * this.portraitListSize;
		this.currentPortraitList = this.portraitList.slice(start, end);
			if (this.currentPortraitList.length > 0 && this.currentPortraitList.length < 26) {
				let num = 26 - this.currentPortraitList.length;
				for (let i = 0; i < num; i++) {
					this.currentPortraitList.push(require('root/assets/portrait/white.png'));
				}
			}
	}

	getPreparePortraitList(toNext: boolean = true) {
		let start = this.portraitListIndex * this.portraitListSize;
		let end = (this.portraitListIndex + 1) * this.portraitListSize;

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

	iconClick(i) {
		this.iconIndex = i;
		(this.$refs.myswiper as any).$swiper.slideTo(i, 600, true);
	}
	activeIndex = 9;
	fn(i) {
		this.activeIndex = 7 - i;
	}
	web_url = 'http://btgwcs.zhulu76.com/';
	banner = {};
	fwysList = [];
	yzyjkList = [];
	hydzList = [];
	qwznList = [];
	jzgzList = [];

	mounted() {
		this.web_url=this.$store.state.footData.web_url;
		utils.emitter.$on('bannerIndexFun', (bannerIndex: number) => {
			this.iconIndex = bannerIndex;
		});
		this.restartWow();
		this.getCurrentPortraitList(this.portraitListIndex);

		utils.service.queryYxzc({}, res => {
			if (res.status === 200) {
				this.banner = res.data.banner;
				this.fwysList = res.data.fwysList;
				this.yzyjkList = res.data.yzyjkList;
				this.hydzList = res.data.hydzList;
				this.qwznList = res.data.qwznList;
				this.jzgzList = res.data.jzgzList;
				let array = [];
				res.data.ppzcList.forEach(element => {
					array.push(this.web_url+element.img)
				});
				this.portraitList = array
				this.getCurrentPortraitList(this.portraitListIndex);
				setTimeout(() => {
					this.initTextChars();
				}, 300);
			}
		});



	}
	initTextChars() {
		let textContents = this.$el.querySelectorAll<HTMLElement>('.page1 .text');
		textContents.forEach(item => {
			new SplitText(item, {
				charsClass: 'char',
				type: 'chars'
			}).chars;
		});
		this.onCharsEnter();
	}
	onCharsEnter(isInit: boolean = false) {
		let slide = document.querySelector('.page1 .text');
		let chars = slide.querySelectorAll('.char');
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
	options1 = {
		suffix: '㎡',
		useGrouping: false
	};
	paginationFun(i) {
		if (i == this.portraitListIndex) return;
		if (i > this.portraitListIndex) {
			this.onPortraitListNext(i);
		} else {
			this.onPortraitListPrev(i);
		}
	}
	beforeDestroy() {
		utils.emitter.$off('bannerIndexFun');
	}
}
