import { Vue, Component, Watch } from 'vue-property-decorator';
import utils from 'root/utils';
import { Events } from 'root/utils/EnumUtils';
@Component
export default class OwnerVoice extends Vue {
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
		},
		pagination: {
			// el: '.pagination2',
			// clickable: true
		},
		navigation: {
			// nextEl: '.next2',
			// prevEl: '.prev2'
		}
	};
}
