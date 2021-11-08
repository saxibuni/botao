import { Vue, Component } from 'vue-property-decorator';

@Component
export default class home extends Vue {
	anList=['新中式','美式','北欧','欧式','现代'];
	anIndex = 0;
	bannerSwiperOptions: any = {
		speed: 500,
		loop: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1'
		},
		preventClicks: false,
		on: {
			click: v => {

			}
		}
	};
	bannerSwiperOptions2: any = {
		speed: 500,
		loop: true,
		slidesPerView: 6,
		slidesPerGroup: 1,
		spaceBetween: 10,
		slideToClickedSlide: true,
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		},
		preventClicks: false,
		on: {
			click: v => {

			}
		}
	};
}
