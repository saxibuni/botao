import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";

@Component({
	components: {
		Banner
	}
})
export default class Case extends Vue {
	bannerData={cn:'精选案例',en:'SELECT CASES',imgUrl:require('root/assets/bg_b1_banner.jpg')}
	vrbannerData={cn:'VR装修体验',en:'VR DECORATION EXPERIENCE',imgUrl:require('root/assets/bg_b3_banner.jpg')}
}
