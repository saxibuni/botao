import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";
import Pagination from '../../components/pagination.vue'
import utils from 'root/utils'
@Component({
	components: {
		Banner,
		Pagination
	}
})
export default class Team extends Vue {
	teamData={}
	web_url = 'http://btgwcs.zhulu76.com/'
	paginationData={size:100,total:1000}
	bannerData={}
	created(){
		this.getData()
	}
		getData() {
			utils.service.querysgteam(
				{},
				res => {
					console.log(res.data);
					this.teamData=res.data
					this.bannerData=res.data.banner

				}
			);
		}
	mounted(){
		this.restartWow();
	}
}
