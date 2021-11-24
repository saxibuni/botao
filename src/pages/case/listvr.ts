import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
import utils from 'root/utils'
import { device } from 'root/utils';
@Component({
	components: {
		Pagination,
		Button
	}
})
export default class CaseListVr extends Vue {
	web_url = 'http://btgwcs.zhulu76.com/'
	vrData={}
	flag = true;
	isIE: boolean = false;
	paginationData={size:100,total:1000}
	tabList=[{title:'风格',info:[]},{title:'户型',info:[]},{title:'面积',info:[]}]
	activeIndex=[0,0,0]
	created(){
		this.isIE = device.browser.ie;
		this.getData()
	}
		getData() {
			utils.service.queryvrCase(
				{
		// 			page: 1,
		// vrmjsx:'500㎡以上',
		// vrhxsx:'别墅',
		// vrstylesx:'轻奢/现代/港式',
		// keywords:1,
				},
				res => {
					console.log(res.data);
					this.vrData=res.data
					res.data.stylesx.unshift('全部')
					res.data.hxsx.unshift('全部')
					res.data.mjsx.unshift('全部')
					this.tabList[0].info=res.data.stylesx
					this.tabList[1].info=res.data.hxsx
					this.tabList[2].info=res.data.mjsx

					utils.emitter.$emit('bannerData', res.data);
				}
			);
		}
	mounted(){
		this.restartWow();
	}
}
