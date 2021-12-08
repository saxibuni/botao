import { Vue, Component } from 'vue-property-decorator';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import utils from "root/utils";
import ICountUp from 'root/components/countup.vue';
import { device } from 'root/utils';
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
	portraitList = [];
	currentPortraitList = [];
	nextPortraitList = [];
	portraitListSize = 26;
	portraitListIndex = 0;
	applyFlipType: number = 0;
	portraitTotalPages = Math.ceil(this.portraitList.length / this.portraitListSize);
	index: number = -1;
	isIE:boolean=false
	created(){
		this.isIE = device.browser.ie;
	}
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
					this.currentPortraitList.push(require('root/assets/white.png'));
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
	web_url = '';
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
				this.portraitTotalPages = Math.ceil(this.portraitList.length / this.portraitListSize);
				this.$nextTick(() => {
					this.initTextChars();
					this.rollTo2(this.$route.params.number)
				});
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
	rollTo(){
		const headerHeight = document.querySelector<HTMLElement>('.header').clientHeight;
		const brand = document.querySelector<HTMLElement>('.cherry-pick');
		const item = brand.querySelector<HTMLElement>(`.page2`);
		let top = item.offsetTop - headerHeight;
		let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;

    this.scrollTo(top, bodyTop, 300);
	}
  isAnimating: boolean = false;
  animateRaf: number;

	scrollTo(destOffsetTop: number, currentOffsetTop: number, duration: number) {
    let startTime = +new Date();
    let destTime = startTime + duration;

    // 由快到慢的缓动函数
    const circular = (k: number) => {
      return Math.sqrt(1 - (--k * k));
    }

    const step = () => {
      let now = +new Date();
      if (now >= destTime) {
        window.scrollTo(0, destOffsetTop);

        setTimeout(() => {
          this.isAnimating = false;
        }, 50);
        return;
      }

      let progress = (now - startTime) / duration;
      let offset = (destOffsetTop - currentOffsetTop) * circular(progress) + currentOffsetTop;
      window.scrollTo(0, offset);


      if (this.isAnimating) {
        this.animateRaf = requestAnimationFrame(step);
      }
    }

    this.isAnimating = true;
    step();
  }
	rollTo2(num){
		if (typeof num === 'undefined') return;
		const headerHeight = document.querySelector<HTMLElement>('.header').clientHeight;
		const brand = document.querySelector<HTMLElement>('.cherry-pick');
		const item = brand.querySelector<HTMLElement>(`.page${num}`);
		let top = item.offsetTop - headerHeight;
		let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
    this.scrollTo(top, bodyTop, 300);
	}
}
