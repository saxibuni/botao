import { Vue, Component, Watch } from 'vue-property-decorator';
import utils from 'root/utils';
import { Events } from 'root/utils/EnumUtils';
@Component
export default class OwnerVoice extends Vue {
	colorArr = ['red', 'yellow', 'green'];
	///banner1
	ownerBannerOptions: any = {
		centeredSlides: true,
		speed: 500,
		spaceBetween: 30,
		slidesPerView: 2,
		loop: true,
		navigation: {
			nextEl: '.owner-next',
			prevEl: '.owner-pre'
		},
		pagination: {
			el: '.swiper-pagination'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};
	// banner2
	dpBannerOptions: any = {
		speed: 500,
		loop: true,
		navigation: {
			nextEl: '.dp-next',
			prevEl: '.dp-pre'
		},
		pagination: {
			el: '.dp-pagination'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};
	// banner3
	fhBannerOptions: any = {
		speed: 500,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.fh-next',
			prevEl: '.fh-pre'
		},
		pagination: {
			el: '.fh-pagination'
		}
	};
}
