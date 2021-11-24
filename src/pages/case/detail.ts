import { Vue, Component } from 'vue-property-decorator';
import Button from 'root/components/button.vue'
import Cases from './components/cases.vue'
import Prop from 'root/components/popup.vue';
import VideoPopup from 'root/components/videoPopup.vue';
import utils from 'root/utils'
@Component({
	components: {
		Button,
		Cases,
		Prop,
		VideoPopup
	}
})
export default class CaseDetail extends Vue {
	detailData={}
	web_url = 'http://btgwcs.zhulu76.com/'
	activeIndex=0
	tabs=['同风格案例','同设计师案例']
	swiperOptions1: any = {
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
		},

	};
	swiperOptions2: any = {
		speed: 1000,
		spaceBetween: 5,
		slidesPerView: 3,
		slidesPerGroup: 3,
		autoplay: false,
		pagination: {
			el: '.pagination2',
			clickable: true
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		}
	};
	videoPop = {
		isPop: false
	};
	playVideo(i) {
		this.videoPop.isPop = true;
	}
	created(){
		this.getData()
	}
		getData() {
			utils.service.queryjxCaseShow(
				{
					aid:20
				},
				res => {
					console.log(res.data);
					this.detailData=res.data
					utils.emitter.$emit('bannerData', res.data);
				}
			);
		}
	mounted(){
		this.restartWow();
	}
}
