import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CheckPick extends Vue {
	iconIndex = 4;
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
	list = [
		{ title: '智能门窗', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能影音', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能语音', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能中控', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能照明', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能安防', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
		{ title: '智能家电', imgUrl: require("../../assets/icons/ic_e2_part5_voice.png"), text: '将智能科技与用户关怀结合，创造健康、舒适与节能的室内居住环境' },
	]
	iconClick(i){
		this.iconIndex = i;
	}
}
