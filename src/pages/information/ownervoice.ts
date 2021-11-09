import { Vue, Component } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import Button from 'root/components/button.vue';

@Component({
	components: {
		Banner,
		Button
	}
})
export default class OwnerVoice extends Vue {
	BannerData = {
		imgUrl: require('../../assets/ownerbg.jpg'),
		cn: '业主心声 ',
		en: "Owner's voice"
	};
	fhArr = [
		{
			img1: require('../../assets/bg_f1_part3_pic01.jpg'),
			img2: require('../../assets/bg_f1_part3_pic02.jpg'),
			img3: require('../../assets/bg_f1_part3_pic03.jpg'),
			img4: require('../../assets/bg_f1_part3_pic04.jpg'),
			img5: require('../../assets/bg_f1_part3_pic05.jpg'),
			img6: require('../../assets/bg_f1_part3_pic06.jpg'),
			img7: require('../../assets/bg_f1_part3_pic07.jpg'),
			img8: require('../../assets/bg_f1_part3_pic08.jpg'),
			img9: require('../../assets/bg_f1_part3_pic09.jpg')
		},
		{
			img1: require('../../assets/bg_f1_part3_pic01.jpg'),
			img2: require('../../assets/bg_f1_part3_pic02.jpg'),
			img3: require('../../assets/bg_f1_part3_pic03.jpg'),
			img4: require('../../assets/bg_f1_part3_pic04.jpg'),
			img5: require('../../assets/bg_f1_part3_pic05.jpg'),
			img6: require('../../assets/bg_f1_part3_pic06.jpg'),
			img7: require('../../assets/bg_f1_part3_pic07.jpg'),
			img8: require('../../assets/bg_f1_part3_pic08.jpg'),
			img9: require('../../assets/bg_f1_part3_pic09.jpg')
		},
		{
			img1: require('../../assets/bg_f1_part3_pic01.jpg'),
			img2: require('../../assets/bg_f1_part3_pic02.jpg'),
			img3: require('../../assets/bg_f1_part3_pic03.jpg'),
			img4: require('../../assets/bg_f1_part3_pic04.jpg'),
			img5: require('../../assets/bg_f1_part3_pic05.jpg'),
			img6: require('../../assets/bg_f1_part3_pic06.jpg'),
			img7: require('../../assets/bg_f1_part3_pic07.jpg'),
			img8: require('../../assets/bg_f1_part3_pic08.jpg'),
			img9: require('../../assets/bg_f1_part3_pic09.jpg')
		}
	];
	colorArr = ['red', 'yellow', 'green'];
	ownerArr = [
		{
			imgUrl: require('../../assets/bg_f1_part2_pic1.jpg')
		},
		{
			imgUrl: require('../../assets/bg_f1_part2_pic2.jpg')
		},
		{
			imgUrl: require('../../assets/bg_f1_part2_pic3.jpg')
		}
	];
	dpArr = [require('../../assets/dp1.jpg'), require('../../assets/dp2.jpg'), require('../../assets/dp3.jpg'), require('../../assets/dp4.jpg')];
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
		spaceBetween: 40,
		slidesPerView: 4,
		pagination: {
			el: '.dp-pagination'
		},
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false
		// }
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
