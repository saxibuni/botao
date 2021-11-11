import { Vue, Component } from 'vue-property-decorator';
import Header from "./header.vue";
import Footer from "./footer.vue";
import Sidebar from "./sidebar.vue";
import CapitalRetention from "../components/CapitalRetention.vue";
import MakeAppointment from "../components/makeAppointment.vue";
import Dialog from "../components/dialog.vue";

@Component({
	components:{
		Header,
		Footer,
		Sidebar,
		CapitalRetention,
		Dialog,
		MakeAppointment
	}
})
export default class layout extends Vue {

}
