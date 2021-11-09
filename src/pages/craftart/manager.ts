import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";

@Component({
	components: {
		Banner
	}
})
export default class Manager extends Vue {
	bannerData={cn:'施工管理',en:'CONSTRUCTION MANAGEMENT',imgUrl:require('root/assets/bg_d3_banner.jpg')}
}
