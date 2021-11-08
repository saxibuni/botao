import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue';
@Component({
	components: {
		Pagination
	}
})
export default class StrategyList extends Vue {
	stratiegyArr = [
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '温暖家｜多面客厅，一种舒适',
			text: '客厅是一个家的名片，随着需求的变化客厅也因此变得多元化所以，客厅的打开方式也可以是这样'
		},
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '茶室不配"色"？装修完，真香！',
			text: '色彩作为空间最无声的语言，每一种都是情绪的表达，总是以先入为主的优势结合光影与空间'
		},
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '大宅里的那些烦心事儿',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		}
	];
	list = [
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '别再傻了，为什么好看的客厅都是别家的？',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '茶室不配"色"？装修完，真香！',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '大宅里的那些烦心事儿',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '辟谣 一盏灯？？真的就能避免厨房盲区吗？',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '没想到，这样接地气的厨房竟然这么“色”！',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/bg_home_banner2.jpg'),
			date: '2021,Auguset,10',
			title: '别墅装饰需要遵守的六个基本原则',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		}
	];
}
