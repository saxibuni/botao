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
	web_url = ''
	vrData={}
	flag = true;
	isIE: boolean = false;
	paginationData={size:100,total:1000}
	inputVal=''
	tabList=[{title:'风格',info:[]},{title:'户型',info:[]},{title:'面积',info:[]}]
	activeIndex=[0,0,0]
	created(){
		this.isIE = device.browser.ie;
		this.getData(1,'','','','')
	}
		getData(val1,val2,val3,val4,val5) {
			utils.service.queryvrCase(
				{
					page: val1,
					vrmjsx:val2,
					vrhxsx:val3,
					vrstylesx:val4,
					keywords:val5,
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
					this.web_url = res.data.web_url;
					utils.emitter.$emit('bannerData', res.data);
				}
			);
		}
		choice(v?){
			this.getData(1,this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]],this.tabList[2].info[this.activeIndex[2]]=='全部'?'':this.tabList[2].info[this.activeIndex[2]],v)
		}
	mounted(){
		this.restartWow();
	}
}
