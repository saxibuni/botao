import { Component,Mixins } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
import utils from 'root/utils'
import { device } from 'root/utils';
import Com from 'root/components/baseCom'
@Component({
	components: {
		Pagination,
		Button
	}
})
export default class CaseListVr extends Mixins(Com) {
	web_url = ''
	vrData:any={}
	flag = true;
	isIE: boolean = false;
	paginationData={size:0,total:0, boxName: '.case-listvr .list'}
	inputVal=''
	love=null
	tabList=[{title:'风格',info:[]},{title:'户型',info:[]},{title:'面积',info:[]}]
	activeIndex=[0,0,0]
	created(){
		this.isIE = device.browser.ie;
		this.getData(1,'','','','')
	}
		getData(val1,val2,val3,val4,val5) {
			this.clearImgSrc(this.paginationData.boxName);
			utils.service.queryvrCase(
				{
					page: val1,
					vrmjsx:val4,
					vrhxsx:val3,
					vrstylesx:val2,
					keywords:val5,
				},
				res => {
					this.vrData=res.data
					res.data.stylesx.unshift('全部')
					res.data.hxsx.unshift('全部')
					res.data.mjsx.unshift('全部')
					this.tabList[0].info=res.data.stylesx
					this.tabList[1].info=res.data.hxsx
					this.tabList[2].info=res.data.mjsx
					this.web_url = res.data.web_url;
					this.paginationData.total=res.data.pages.total
					this.paginationData.size=res.data.pages.per_page
					utils.emitter.$emit('bannerData', res.data);
				}
			);
		}
		choice(v?){
			this.getData(1,this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]],this.tabList[2].info[this.activeIndex[2]]=='全部'?'':this.tabList[2].info[this.activeIndex[2]],v)
		}
		getData1(v){
			this.getData(v,this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]],this.tabList[2].info[this.activeIndex[2]]=='全部'?'':this.tabList[2].info[this.activeIndex[2]],this.inputVal)
	}
	getLove(aid,iszan) {
		if (iszan == 1) return;
		utils.service.querylove(
			{
				aid: aid
			},
			res => {
				if (res.status == 200) {
					// this.love = res.data.num;
					// iszan = 1;
					// this.love = res.data.num ;
					// love = res.data.num;
				}
			}
		);
	}
	push(url,e){
		console.log(e.target.className);

		if(e.target.className=='btn'||e.target.className=='img img2'||e.target.className=='img'||e.target.className=='love'||e.target.className=='topRight')return
		window.open(url)
	}
	mounted(){
		this.restartWow();
	}
}
