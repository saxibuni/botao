import { Vue, Component } from 'vue-property-decorator';
import Button from "../../components/button.vue";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import utils from "root/utils";
import ICountUp from 'root/components/countup.vue';

gsap.registerPlugin(ScrollTrigger, SplitText);
@Component({
	components: {
		Button,
		ICountUp
	}
})
export default class SoftDecoration extends Vue {
	options1 = {
		suffix: '+',
		useGrouping: false
	};
	bannerSwiperOptions: any = {
		speed: 1000,
		loop: false,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 29,
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination2',
			clickable: true,
		},
		navigation: {
			nextEl: '.next',
			prevEl: '.prev'
		}
	};
	swiperOptions: any = {
		loop: false,
		speed: 100,
		mousewheel: true,
		slidesPerColumnFill : 'row',
		direction: 'vertical',
		slideToClickedSlide: true,
		slidesPerView: 8,//一行显示3个
    slidesPerColumn:2,//显示5行
		navigation: {
			nextEl: '.swiper2-button-next',
			prevEl: '.swiper2-button-prev'
		}
	}
	bannerSwiperOptions1: any = {
		loop: false,
		speed: 600,
		pagination: {
			el: '.swiper-pagination3',
			clickable: true,
		},
		navigation: {
			nextEl: '.next3',
			prevEl: '.prev3'
		}
	}
	swiperIndex: number = 0;
	textActive = true;
	onSelect(index) {
		this.swiperIndex = index;
		this.textActive = false;
		setTimeout(()=>{
			this.textActive = true;
		},300)
	}
	onClick(e){
		let length =this.rzalList.length;
		if(e==1){
			if(this.swiperIndex<length-1){
				this.swiperIndex = Number(this.swiperIndex) + e
			}else{
				this.swiperIndex = 0;
				setTimeout(()=>{
						(this.$refs.mywiper as any).$swiper.slideTo(0, 0, true)
				},300)
			}
		}else{
			if(this.swiperIndex<=0){
				this.swiperIndex = length-1;
				setTimeout(()=>{
						(this.$refs.mywiper as any).$swiper.slideTo(length, 0, true)
				},300)
			}else{
				this.swiperIndex =  Number(this.swiperIndex) - 1;
			}
		}
		this.textActive = false;
		setTimeout(()=>{
			this.textActive = true;
		},300)
	}
	page6Index =0;
	web_url = '';
	banner = {};
	psdzList = [];
	rzalList = [];
	rzalListImg = [];
	rzsjsList = [];
	rzfwlcList = [];
	rzpxList = [];
	mounted() {
		this.web_url=this.$store.state.footData.web_url;
		this.restartWow();
		utils.service.queryRzsh({}, res => {
			if (res.status === 200) {
				this.banner = res.data.banner;
				this.psdzList = res.data.psdzList;
				this.rzalList = res.data.rzalInfo.desc.split('\r\n');
				this.rzalListImg = res.data.rzalInfo.img.split(',');
				this.rzsjsList = res.data.rzsjsList;
				this.rzfwlcList = res.data.rzfwlcList;
				this.rzpxList = res.data.rzpxList;
				this.$nextTick(() => {
					this.initTextChars();
					this.jump(this.$route.params.number)
				});
			}
		});

	}
	jump(i) {
		if (typeof i === 'undefined') return;
		this.rollTo()
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
		let slide = document.querySelector('.page1 .text')
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
	}
	rollTo(){
		const headerHeight = document.querySelector<HTMLElement>('.header').clientHeight;
		const brand = document.querySelector<HTMLElement>('.soft-decoration');
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
}
