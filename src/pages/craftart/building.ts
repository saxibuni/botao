import { Vue, Component, Watch } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import Pagination from 'root/components/pagination.vue';
import Button from 'root/components/button.vue';
import ICountUp from 'root/components/countup.vue';
import VideoPopup from 'root/components/videoPopup.vue';
import utils from 'root/utils'

@Component({
	components: {
		Banner,
		Pagination,
		Button,
		ICountUp,
		VideoPopup
	}
})
export default class Building extends Vue {
	videoPop = {
		isPop: false,
		url:''
	};
	buildingData={}
	web_url = ''
	paginationData = { size: 9, total: 1000 };
	bannerData = {};
	tabList = [
		{ title: '户型', info: [] },
		{ title: '面积', info: [] }
	];
	activeIndex = [0, 0];
	currentSelectId = '';
	options1 = {
		// suffix: '+',
		useEasing: true
	};
	fn(v) {
		this.currentSelectId = v;
	}
	playVideo(i) {
		this.videoPop.url = i;
		if(!i)return
		this.videoPop.isPop = true;
	}
	created(){
		this.getData(1,'','')
	}
		getData(v,val1,val2) {
			utils.service.querysiteCase(
				{
					page:v,
					gdhxsx:val1,
					gdmjsx:val2
				},
				res => {
					this.buildingData=res.data
					this.bannerData=res.data.banner
					res.data.mjsx.unshift('全部')
					res.data.hxsx.unshift('全部')
					this.tabList[0].info=res.data.hxsx
					this.tabList[1].info=res.data.mjsx
					this.web_url = res.data.web_url;
					this.paginationData.total=res.data.pages.total
					this.paginationData.size=res.data.pages.per_page
				}
			);
		}
		choice(){
			this.getData(1,this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]])
		}
		getData1(v){
			this.getData(v,this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]])
		}
		setDelayTime() {
			return Math.random() * 0.4 + 0.1;
		}
	mounted() {
		this.restartWow();

	}



}
