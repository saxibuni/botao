import { Vue, Component, Watch } from "vue-property-decorator";
import Layout from "./layout/Index.vue";
import utils from "./utils";
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
	@Watch('$store.state.dialogVisible')
  bodyOverHid() {
      if(this.$store.state.dialogVisible){
        document.querySelector('body').setAttribute('class', 'over-hide');
      }else{
        document.querySelector('body').removeAttribute('class');
      }
  }
}
