import { Vue, Component } from "vue-property-decorator";
import Layout from "./layout/Index.vue";
import utils, { service } from "./utils";
@Component({
	components: {
		Layout,
	}
})
export default class App extends Vue {
	mounted() {
		let device = utils.device;

		let html = document.querySelector('html');
		if (device.mobile.device) {
			html.setAttribute("device", "mobile");
		} else {
			html.setAttribute("device", "pc");
		}

		window.addEventListener('scroll', () => {
			utils.emitter.$emit('scroll');
		});
	}
}
