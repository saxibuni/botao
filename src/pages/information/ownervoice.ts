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
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};
	// banner2
	dpBannerOptions: any = {
		speed: 500,
		loop: true,

	};
	// banner3
	fhBannerOptions: any = {
		speed: 500,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};
}
