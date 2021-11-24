import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue';
import Banner from '../../components/banner.vue';
import utils from 'root/utils';
@Component({
	components: {
		Pagination,
		Banner
	},
	filters: {
		formatTime(val: number) {
			const date = new Date(val * 1000);
			const year = date.getFullYear();
			const month = date.getMonth();
			const day = date.getDate();
			const eMonh = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			const newtime = `${year},${eMonh[month]},${day}`;
			return newtime;
		}
	}
})
export default class StrategyList extends Vue {
	isShow: boolean = false;
	web_url = '';
	paginationData = { size: 100, total: 1000 };
	BannerData = {
		imgUrl: require('../../assets/strategybg.jpg'),
		cn: '最新资讯',
		en: 'CONSTRUCTION MANAGEMENT'
	};
	stratiegyArr = [
		{
			imgUrl: require('../../assets/stratelist1.jpg'),
			date: '2021,Auguset,10',
			title: '温暖家｜多面客厅，一种舒适',
			text: '客厅是一个家的名片，随着需求的变化客厅也因此变得多元化所以，客厅的打开方式也可以是这样'
		},
		{
			imgUrl: require('../../assets/sratelist2.jpg'),
			date: '2021,Auguset,10',
			title: '茶室不配"色"？装修完，真香！',
			text: '色彩作为空间最无声的语言，每一种都是情绪的表达，总是以先入为主的优势结合光影与空间'
		},
		{
			imgUrl: require('../../assets/stratelist3.jpg'),
			date: '2021,Auguset,10',
			title: '大宅里的那些烦心事儿',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		}
	];
	list = [
		{
			imgUrl: require('../../assets/s_1.jpg'),
			date: '2021,Auguset,10',
			title: '别再傻了，为什么好看的客厅都是别家的？',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_2.jpg'),
			date: '2021,Auguset,10',
			title: '茶室不配"色"？装修完，真香！',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_3.jpg'),
			date: '2021,Auguset,10',
			title: '大宅里的那些烦心事儿',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_4.jpg'),
			date: '2021,Auguset,10',
			title: '辟谣 一盏灯？？真的就能避免厨房盲区吗？',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_5.jpg'),
			date: '2021,Auguset,10',
			title: '没想到，这样接地气的厨房竟然这么“色”！',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_6.jpg'),
			date: '2021,Auguset,10',
			title: '别墅装饰需要遵守的六个基本原则',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		}
	];
	topList = [];
	newsList = [];
	created() {
		this.query();
	}

	query() {
		utils.service.queryNews(res => {
			console.log(res.data);

			this.web_url = res.data.web_url;
			//banner
			this.BannerData.imgUrl = this.web_url + res.data.banner.litpic;
			this.BannerData.cn = this.web_url + res.data.banner.title;
			this.BannerData.en = this.web_url + res.data.banner.etitle;

			//toplist
			this.topList = res.data.newsTopList;

			this.newsList = res.data.newsList;
		});
	}

	addClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('li');

		lis[i].classList.add('hover');
	}
	removeClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('li');
		for (let i = 0; i < lis.length; i++) {
			lis[i].classList.remove('hover');
		}
	}
}
