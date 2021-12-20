import { Vue, Component } from 'vue-property-decorator';
import Header from "./header.vue";
import Footer from "./footer.vue";
import Sidebar from "./sidebar.vue";
import CapitalRetention from "../components/CapitalRetention.vue";
import MakeAppointment from "../components/makeAppointment.vue";
import DialogTip from "../components/dialogtip.vue";
import Agreement from "../components/agreement.vue";

@Component({
	components:{
		Header,
		Footer,
		Sidebar,
		CapitalRetention,
		DialogTip,
		MakeAppointment,
		Agreement
	}
})
export default class layout extends Vue {

}
