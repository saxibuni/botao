import { Vue, Component } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import utils from 'root/utils';
import { Events } from 'root/utils/EnumUtils';
import VideoPopup from 'root/components/videoPopup.vue';
@Component({
	components: {
		Banner,
		VideoPopup
	}
})
export default class Manager extends Vue {
	bannerData = {};
	videoPop = {
		isPop: false,
		url:''
	};
	managerData={}
	web_url = ''
	page2Data = {
		left: ['进户门保护 ', '门窗保护', '施工名牌', '安全防护'],
		right: ['安全用电', '成品保护', '区域划分', '堆放规范']
	};
	imgList = [
		require('../../assets/bg_d3_part3.png'),
		require('../../assets/bg_d3_part6_roll.png'),
		require('../../assets/bg_d3_part3.png'),
		require('../../assets/bg_d3_part6_roll.png'),
		require('../../assets/bg_d3_part3.png'),
		require('../../assets/bg_d3_part6_roll.png'),
		require('../../assets/bg_d3_part3.png'),
		require('../../assets/bg_d3_part6_roll.png')
	];
	page4Data = ['拆除验收', '土建验收', '水电验收', '泥木验收', '涂装验收', '定制品验收', '验收竣工'];
	active1Index = 0;
	active2Index = 0;
	activeName = '1';
	swiperOptions1: any = {
		speed: 1000,
		spaceBetween: 22,
		slidesPerView: 3,
		slidesPerGroup: 3,
		autoplay: false,
		pagination: {
			el: '.pagination2',
			clickable: true
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		}
	};
	choice(i) {
		if (Number(this.activeName) + i > 4) return;
		if (Number(this.activeName) + i < 1) return;
		this.activeName = String(Number(this.activeName) + i);
	}
	playVideo(i) {
		this.videoPop.isPop = true;
		this.videoPop.url = i;
	}
	mounted() {
		this.restartWow();

		utils.emitter.$on(Events.RESIZE, this.onResize);
	}

	handleClick(tab) {
		this.activeName = String(tab.index * 1 + 1);

	}
	created(){
		this.getData()
	}
	getData() {
		utils.service.querysgmessage(
				{},
				res => {
					console.log(res.data);
					this.managerData=res.data
					this.bannerData=res.data.banner
					this.web_url = res.data.web_url;
				}
		);
	}

	///修复el-tab下环线位置
	onResize() {
		let underline = this.$el.querySelector<HTMLElement>('.el-tabs__active-bar');
		let activeTab = this.$el.querySelector<HTMLElement>(`#tab-${this.activeName}`);
		let offsetLeft = activeTab.offsetLeft;
		let tabWidth = activeTab.clientWidth;

		let tabStyles = window.getComputedStyle(activeTab);
		let width = tabWidth - parseFloat(tabStyles.paddingLeft) - parseFloat(tabStyles.paddingRight);
		let offsetX = offsetLeft + parseFloat(tabStyles.paddingLeft);
		underline.style.transitionDuration = '0s';
		underline.style.transform = `translateX(${offsetX}px)`;
		underline.style.width = `${width}px`;

		setTimeout(() => {
			underline.style.transitionDuration = '';
		});
	}

	beforeDestroy() {
		utils.emitter.$off(Events.RESIZE, this.onResize);
	}
}
