import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";
import Pagination from '../../components/pagination.vue'
@Component({
	components: {
		Banner,
		Pagination
	}
})
export default class Team extends Vue {
	paginationData={size:100,total:1000}
	bannerData={cn:'施工团队',en:'CONSTRUCTION TEAM',imgUrl:require('root/assets/bg_d2_banner.jpg')}
	mounted(){
		this.restartWow();
	}
}
