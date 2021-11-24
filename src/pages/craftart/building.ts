import { Vue, Component, Watch } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import Pagination from 'root/components/pagination.vue';
import Button from 'root/components/button.vue';
import ShangHaiMap from 'root/components/shanghaimap.vue';
import ICountUp from 'root/components/countup.vue';
import VideoPopup from 'root/components/videoPopup.vue';
import utils from 'root/utils'

@Component({
	components: {
		Banner,
		Pagination,
		Button,
		ShangHaiMap,
		ICountUp,
		VideoPopup
	}
})
export default class Building extends Vue {
	videoPop = {
		isPop: false,
	};
	buildingData={}
	web_url = 'http://btgwcs.zhulu76.com/'
	paginationData = { size: 100, total: 1000 };
	bannerData = {};
	tabList = [
		{ title: '户型', info: [] },
		{ title: '面积', info: [] }
	];
	mapData=[
		{
			id:'pd',
			title1:'浦东',
			title2:'在建56套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
		{
			id:'fx',
			title1:'奉贤',
			title2:'在建66套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
		{
			id:'mh',
			title1:'闵行',
			title2:'在建46套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
		{
			id:'cm',
			title1:'崇明',
			title2:'在建88套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
		{
			id:'bs',
			title1:'宝山',
			title2:'在建86套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
		{
			id:'jd',
			title1:'嘉定',
			title2:'在建46套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
		{
			id:'qp',
			title1:'青浦',
			title2:'在建46套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
		{
			id:'sj',
			title1:'松江',
			title2:'在建76套',
			desc:['保利首创颂','碧云壹零','东方颐城','公元2040','金地城','金融家','绿地东上海','浦发东悦城','同润蓝美俊庭']
		},
	]
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
		this.videoPop.isPop = true;
	}
	created(){
		this.getData()
	}
		getData() {
			utils.service.querysiteCase(
				{
					// gdmjsx:'工地面积筛选',
					// gdhxsx:'工地户型筛选'
				},
				res => {
					console.log(res.data);
					this.buildingData=res.data
					this.bannerData=res.data.banner
					res.data.mjsx.unshift('全部')
					res.data.hxsx.unshift('全部')
					this.tabList[0].info=res.data.hxsx
					this.tabList[1].info=res.data.mjsx

				}
			);
		}
	mounted() {
		this.restartWow();

	}



}
