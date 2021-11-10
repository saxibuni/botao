import { Vue, Component } from 'vue-property-decorator';
import Header from "./header.vue";
import Footer from "./footer.vue";
import Sidebar from "./sidebar.vue";
import CapitalRetention from "./CapitalRetention.vue";

@Component({
	components:{
		Header,
		Footer,
		Sidebar,
		CapitalRetention
	}
})
export default class layout extends Vue {

}
