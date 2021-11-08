import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";

@Component({
	components: {
		Banner
	}
})
export default class Infomation extends Vue {
	BannerData={
		imgUrl:require('../../assets/bg_home_banner2.jpg'),
		cn:'业主心声 ',
		en:"Owner's voice"
	}
}
