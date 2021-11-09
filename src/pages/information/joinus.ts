import { Vue, Component } from 'vue-property-decorator';

@Component
export default class JoinUs extends Vue {
	jsBannerOptions: any = {
		centeredSlides: true,
		speed: 500,
		spaceBetween: 19,
		slidesPerView: 4,
		loop: true

		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false
		// }
	};
}
