import { Vue, Component } from 'vue-property-decorator';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);
@Component
export default class CheckPick extends Vue {
	iconIndex = 4;
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
		preventClicks: false
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
	list = [
		{ title: '智能门窗', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能影音', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能语音', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能中控', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能照明', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能安防', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能家电', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
	]
	list2 = [
		{ tag: '材料实景体验馆', title: '样板间实景展出，零距离感受最新别墅智能系统', text:'智能设备应用体验区：全屋语音智能控制、科技安保系统、视听娱乐设备 高端橱卫整装区：品牌实景展示、功能性橱卫体验'},
		{ tag: '整装体验馆', title: '软装实景体验、现场私人定制', text:'灯光布局展示区：无主灯设计、层次灯光、功能灯光高质量睡眠体验区：专利助眠床垫、功能性卧具体验纯绿色儿童房展示区：绿色生态家具、功能性儿童家具'},
		{ tag: '沪上首家工艺博物馆', title: '赏析中华匠心工艺、解读欧标环保材料', text:'智能设备应用体验区：全屋语音智能控制、科技安保系统、视听娱乐设备'},
		{ tag: '全球主材品牌馆', title: '赏析中华100+国际一线品牌联合展出展会特供优惠产品匠心工艺、解读欧标环保材料', text:''},
		{ tag: '国际高端住宅实景体验馆', title: '20大风格整装会客厅、大健康生活体验区', text:'科技影音娱乐视听区：VR体验、互动黑科技高端橱卫整装区：品牌实景展示、功能性橱卫体验运动休闲娱乐区：高尔夫等室内运动休息区大型亲子游乐区：大型游艺设备、海洋球池、乐高天地茶酒文化大健康品评区：养生茶品茗会、限量佳酿品鉴会'},
		{ tag: '品牌实体店', title: '', text:''},
	]
	page3Data=[
		{
		text:'木作材料 ',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},
		{
		text:'防水材料 ',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},
		{
		text:'粘结材料 ',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},
		{
		text:'电线材料 ',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},
		{
		text:'吊顶材料 ',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},
		{
		text:'油漆涂料 ',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},
		{
		text:'电器管材',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},
		{
		text:'给水管材 ',
		imgUrl:require('root/assets/bg_e2_part3_09.png')
		},

]
portraitList = [
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_b2.png'),
	require('root/assets/bg_e2_part7_g2.png'),

	require('root/assets/bg_e2_part7_e2.png'),
	require('root/assets/bg_e2_part7_f2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),
	require('root/assets/bg_e2_part7_n2.png'),

]
currentPortraitList = [];
nextPortraitList = [];
portraitListSize = 26;
portraitListIndex = 0;
applyFlipType: number = 0;
portraitTotalPages = Math.ceil(this.portraitList.length / this.portraitListSize);

onPortraitListPrev(number:number=999) {
	if (this.applyFlipType) return;
	if (this.portraitListIndex == 0) return;
	this.getPreparePortraitList(false);
	this.applyFlipType = 2;
	setTimeout(() => {
		this.applyFlipType = 0;
		if(number==999){
			this.portraitListIndex--;
		}else{
			this.portraitListIndex = number;
		}
		this.getCurrentPortraitList();
	}, 600);

}

onPortraitListNext(number:number=999) {
	if (this.applyFlipType) return;
	if (this.portraitListIndex == this.portraitTotalPages - 1) return;
	this.getPreparePortraitList();
	this.applyFlipType = 1;
	setTimeout(() => {
		this.applyFlipType = 0;
		if(number==999){
			this.portraitListIndex++;
		}else{
			this.portraitListIndex = number;
		}
		this.getCurrentPortraitList();
	}, 600);

}


getCurrentPortraitList() {

	let start = this.portraitListIndex * this.portraitListSize;
	let end = (this.portraitListIndex + 1) * this.portraitListSize;
	this.currentPortraitList = this.portraitList.slice(start, end);

	if (this.currentPortraitList.length > 0 && this.currentPortraitList.length < 26) {
			let num =26 -this.currentPortraitList.length
			setTimeout(()=>{
				for (let i = 0; i <num ; i++) {
					this.currentPortraitList.push(require('root/assets/portrait/white.png'));
				}
			},600)

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



	iconClick(i){
		this.iconIndex = i;
	}
	activeIndex=9
	fn(i){
		this.activeIndex=7-i

	}
	mounted() {
		this.restartWow();
		this.initTextChars();
		this.getCurrentPortraitList();

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
	paginationFun(i){
		if(i==this.portraitListIndex) return
		if(i>this.portraitListIndex){
			this.onPortraitListNext(i)
		}else{
			this.onPortraitListPrev(i)
		}
	}
}
