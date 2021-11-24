import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
import ICountUp from 'root/components/countup.vue';
import utils from 'root/utils'
@Component({
	components: {
		Pagination,
		Button,
		ICountUp
	}
})
export default class DesignList extends Vue {
	web_url = ''
	listData={}
	paginationData={size:100,total:1000}
	tabs=[]
	activeIndex=0
	options1 = {
		suffix: '+',
		useEasing: true
	};
	created(){
		this.getData()
	}
		getData() {
			utils.service.queryDesigner(
				{
		// 			page: 1,
		// sjssx:'总监设计师',
		// keywords:1,
				},
				res => {
					this.listData=res.data
					res.data.sjssx.unshift('全部')
					this.tabs=res.data.sjssx
					this.web_url = res.data.web_url;
					utils.emitter.$emit('bannerData', res.data);
				}
			);
		}
	mounted(){
		this.restartWow();
	}
}
