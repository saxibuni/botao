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
		slidesPerGroup: 1,
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
		slidesPerView: 8,
		slidesPerGroup: 1,
		direction: 'vertical',
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.swiper2-button-next',
			prevEl: '.swiper2-button-prev'
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
				console.log(e);

			}else{
				this.swiperIndex = 0;
				setTimeout(()=>{
						this.$refs.mywiper.$swiper.slideTo(0, 0, true)
				},300)
			}
		}else{
			if(this.swiperIndex<=0){
				this.swiperIndex = length-1;
				setTimeout(()=>{
						this.$refs.mywiper.$swiper.slideTo(length, 0, true)
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
	web_url = 'http://btgwcs.zhulu76.com/';
	banner = {};
	psdzList = [];
	rzalList = [];
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
				this.rzalList = res.data.rzalList;
				this.rzsjsList = res.data.rzsjsList;
				this.rzfwlcList = res.data.rzfwlcList;
				this.rzpxList = res.data.rzpxList;
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
}
