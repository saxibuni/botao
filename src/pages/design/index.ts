import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";
import utils from 'root/utils'
@Component({
	components: {
		Banner
	}
})
export default class Design extends Vue {

	bannerData={}
	created(){
		utils.emitter.$on('bannerData', item => {
			this.bannerData=item.banner
		});
	}
}
