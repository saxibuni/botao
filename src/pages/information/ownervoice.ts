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
		url: ''
	};
	imgUrl = '';
	BannerData = {};
	web_url = '';
	yzxs = [];
	ryjq = [];
	yzdp = [];

	///banner1
	ownerBannerOptions: any = {
		centeredSlides: true,
		speed: 1200,
		spaceBetween: 30,
		slidesPerView: 2,
		loop: true,
		indexFlag: 0,
		navigation: {
			nextEl: '.owner-next',
			prevEl: '.owner-pre'
		},
		pagination: {
			clickable: true,
			el: '.owener-pagination1'
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		on: {
			click: function(e) {
				if (e.target.className == 'pause-btn') {
					utils.emitter.$emit('showVideo', e.target.getAttribute('url'));
				}
				if (e.target.className == 'btn') {
					utils.emitter.$emit('showD');
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
				console.log('dpdpdpd');

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
			el: '.fh2'
		}
	};

	created() {
		this.queryYzxs();
	}

	queryYzxs() {
		utils.service.queryYZXS(res => {
			this.web_url = res.data.web_url;
			//banner
			this.BannerData = res.data.banner;

			//yzxs
			this.yzxs = res.data.yzxsList;

			//ryjq
			this.ryjq = res.data.ryjqList;
			this.ryjq.forEach(v => {
				v.img = v.img.split(',');
			});

			//yzdp
			this.yzdp = res.data.yzdpList;

			this.restartWow();
		});
	}
	show() {}
	mounted() {
		utils.emitter.$on('dpIndex', obj => {
			this.isPop = true;
			this.imgUrl = obj.img.getAttribute('src');
		});
		utils.emitter.$on('showVideo', url => {
			if (!url) return;
			this.videoPop.isPop = true;
			this.videoPop.url = url;
		});
		utils.emitter.$on('showD', () => {
			this.$store.state.dialogVisible = true;
		});
	}
}
