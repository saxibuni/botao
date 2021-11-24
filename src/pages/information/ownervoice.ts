import { Vue, Component } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import Button from 'root/components/button.vue';
import Prop from 'root/components/popup.vue';
import utils from 'root/utils';
import VideoPopup from 'root/components/videoPopup.vue';

@Component({
	components: {
		Banner,
		Button,
		Prop,
		VideoPopup
	}
})
export default class OwnerVoice extends Vue {
	isPop: boolean = false;
	videoPop = {
		isPop: false,
	};
	imgUrl = '';
	BannerData = {
		imgUrl: '',
		cn: ' ',
		en: ''
	};
	web_url = '';
	yzxs = [];
	ryjq = [];
	yzdp = [];
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
		speed: 1200,
		spaceBetween: 30,
		slidesPerView: 2,
		loop: true,
		navigation: {
			nextEl: '.owner-next',
			prevEl: '.owner-pre'
		},
		pagination: {
			clickable: true,
			el: '.swiper-pagination'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		on:{
			click:function(e){
				if(e.target.nodeName=='IMG'){
					utils.emitter.$emit('showVideo');
				}
			}
		}
	};
	// banner2
	dpBannerOptions: any = {
		speed: 1000,
		// loop: true,
		navigation: {
			nextEl: '.dp-next',
			prevEl: '.dp-pre'
		},
		spaceBetween: 40,
		slidesPerView: 4,
		pagination: {
			clickable: true,
			el: '.dp-pagination'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		on: {
			click: function() {
				const img = this.slides[this.clickedIndex].querySelector('img');
				utils.emitter.$emit('dpIndex', { index: this.clickedIndex, img });
			}
		}
	};
	// banner3
	fhBannerOptions: any = {
		speed: 1000,
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
			clickable: true,
			el: '.swiper-pagination'
		}
	};

	created() {
		this.queryYzxs();
	}

	queryYzxs() {
		utils.service.queryYZXS(res => {
			console.log(res.data);

			this.web_url = res.data.web_url;
			//banner
			this.BannerData.en = res.data.banner.etitle;
			this.BannerData.cn = res.data.banner.title;
			this.BannerData.imgUrl = this.web_url + res.data.banner.litpic;

			//yzxs
			this.yzxs = res.data.yzxsList;

			//ryjq
			// res.data.ryjqList.img=res.data.ryjqList.img.split(',')
			this.ryjq = res.data.ryjqList;
			this.ryjq.forEach(v => {
				v.img = v.img.split(',');
			});

			//yzdp
			this.yzdp = res.data.yzdpList;
		});
	}

	show(){
		console.log(111);

	}

	mounted() {
		utils.emitter.$on('dpIndex', obj => {
			this.isPop = true;
			this.imgUrl = obj.img.getAttribute('src');
		});
		utils.emitter.$on('showVideo',()=>{

			this.videoPop.isPop=true
		});
	}
}
