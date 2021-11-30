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
	web_url = ''
	paginationData={size:0,total:0, boxName: ".craft-team > .list"}
	bannerData={}
	created(){
		this.getData(1)
	}
		getData(v) {
			utils.service.querysgteam(
				{
					page:v
				},
				res => {
					this.teamData=res.data
					this.bannerData=res.data.banner
					this.web_url = res.data.web_url;
					this.paginationData.total=res.data.pages.total
					this.paginationData.size=res.data.pages.per_page
				}
			);
		}
		getData1(v){
			this.getData(v)
		}
	mounted(){
		this.restartWow();
	}
}
