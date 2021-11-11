import { Vue, Component } from 'vue-property-decorator';
import Button from 'root/components/button.vue'
import Cases from './components/cases.vue'
@Component({
	components: {
		Button,
		Cases
	}
})
export default class CaseDetail extends Vue {
	activeIndex=0
	tabs=['同风格案例','同设计师案例']
	swiperOptions1: any = {
		speed: 500,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination',
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
		speed: 500,
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
}
