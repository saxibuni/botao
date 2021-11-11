import { Vue, Component } from 'vue-property-decorator';
import Button from 'root/components/button.vue'
import Cases from '../case/components/cases.vue'
@Component({
	components: {
		Cases,
		Button
	}
})
export default class DesignDetail extends Vue {
	swiperOptions: any = {
		speed: 500,
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
}
