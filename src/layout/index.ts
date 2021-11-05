import { Vue, Component } from 'vue-property-decorator';
import Header from "./header.vue";
import Footer from "./footer.vue";
import Sidebar from "./sidebar.vue";

@Component({
	components:{
		Header,
		Footer,
		Sidebar
	}
})
export default class layout extends Vue {

}
