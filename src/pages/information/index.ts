import { Vue, Component } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import utils from 'root/utils';

@Component({
	components: { Banner }
})
export default class Infomation extends Vue {
	mounted() {
		this.restartWow();
	}
	bannerData = {};
	created() {
		utils.emitter.$on('bannerData', v => {
			this.bannerData = v;
		});
	}
}
