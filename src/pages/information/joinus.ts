import { Vue, Component } from 'vue-property-decorator';
import Button from '../../components/button.vue';
import Banner from '../../components/banner.vue';
import utils from 'root/utils';
@Component({
	components: {
		Banner,
		Button
	},
	filters: {
		formatTime(val: number) {
			const date = new Date(val * 1000);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			const newtime = `${year}-${month}-${day}`;
			return newtime;
		}
	}
})
export default class JoinUs extends Vue {
	jobShowFlag = 6;
	web_url = '';
	BannerData = {};

	rclniList = [];
	rclnList = [];
	zpxx = [];
	rlzytel = '';
	rlzyadd = '';
	rlzyewm = '';
	jsBannerOptions: any = {
		centeredSlides: true,
		speed: 1000,
		spaceBetween: 19,
		slidesPerView: 4,
		loop: true,
		navigation: {
			prevEl: '.ju-pre',
			nextEl: '.ju-next'
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false
		}
	};
	desc = '';

	created() {
		this.queryJS();
	}

	queryJS() {
		utils.service.queryJS(res => {
			this.web_url = res.data.web_url;
			//banner
			utils.emitter.$emit('bannerData', res.data.banner);

			//人才理念
			this.rclniList = res.data.rclniList;

			this.rclnList = res.data.rclnList;
			this.rclnList.forEach(item => {
				item.etitle = item.etitle.replace('\r\n', '<br/>');
				item.desc = item.desc.split('\r\n\r\n');
				item.desc = item.desc.map(v => {
					if (v.includes('：')) {
						v = v.replace('：', '</span>：');
						v = '<span>' + v;
					}
					return v;
				});
			});

			//desc
			this.desc = res.data.desc;

			//招聘信息
			res.data.zpxxList.forEach(v => {
				v.gwyq = v.gwyq.split('\r\n');
			});
			this.zpxx = res.data.zpxxList;

			// 人力资源
			this.rlzytel = res.data.rlzytel;
			this.rlzyadd = res.data.rlzyadd;
			this.rlzyewm = res.data.rlzyewm;
		});
	}

	getMore() {
		this.jobShowFlag += 3;
	}
}
