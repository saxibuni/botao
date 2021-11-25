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
	inputVal=''
	paginationData={size:12,total:1000}
	tabs=[]
	activeIndex=0
	options1 = {
		suffix: '+',
		useEasing: true
	};
	created(){
		this.getData(1,'','')
	}
		getData(val1,val2,val3) {
			utils.service.queryDesigner(
				{
					page: val1,
					sjssx:val2,
					keywords:val3,
				},
				res => {
					this.listData=res.data
					res.data.sjssx.unshift('全部')
					this.tabs=res.data.sjssx
					this.web_url = res.data.web_url;
					this.paginationData.total=res.data.pages.total
					this.paginationData.size=res.data.pages.per_page
					utils.emitter.$emit('bannerData', res.data);
				}
			);
		}
		choice(v?){
			this.getData(1,this.tabs[this.activeIndex]=='全部'?'':this.tabs[this.activeIndex],v)
		}
		getData1(v){
			this.getData(v,this.tabs[this.activeIndex]=='全部'?'':this.tabs[this.activeIndex],'')
		}
	mounted(){
		this.restartWow();
	}
}
