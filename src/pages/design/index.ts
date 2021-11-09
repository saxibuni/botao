import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";

@Component({
	components: {
		Banner
	}
})
export default class Design extends Vue {

	bannerData={cn:'设计名人堂',en:'DESIGN HALL OF FAME',imgUrl:require('root/assets/bg_c1_banner.jpg')}
}
