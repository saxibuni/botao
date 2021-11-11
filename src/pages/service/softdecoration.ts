import { Vue, Component } from 'vue-property-decorator';
import Button from "../../components/button.vue";

@Component({
	components: {
		Button
	}
})
export default class SoftDecoration extends Vue {
	bannerSwiperOptions: any = {
		speed: 500,
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 1,
		spaceBetween: 29,
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination2',
			clickable: true
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
	list = ['金茂府','莱茵半岛','复明珑御','中海汇德里','晶萃名邸','长风瑞士璟庭','锦绣里','凯利海华府','锦绣里','凯利海华府'];
	textActive = true;
	onSelect(index) {
		this.swiperIndex = index;
		this.textActive = false;
		setTimeout(()=>{
			this.textActive = true;
		},300)
	}
	onClick(e){
		let length =this.list.length;
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
	mounted() {
		this.restartWow();
	}
}
