import { Vue, Component } from 'vue-property-decorator';
import Button from '../../components/button.vue'
import Banner from '../../components/banner.vue'

@Component({
	components:{
		Button,
		Banner
	}
})
export default class StrategyDetail extends Vue {
	BannerData = {
		imgUrl: require('../../assets/strategybg.jpg'),
		cn: '最新资讯',
		en: "Construction management"
	};
	newsList = [
		{
			imgUrl: require('../../assets/s_1.jpg'),
			date: '2021,August,10',
			title: '别再傻了，为什么好看的客厅都是别家的？',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_2.jpg'),
			date: '2021,August,10',
			title: '茶室不配"色"？装修完，真香！',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_3.jpg'),
			date: '2021,August,10',
			title: '大宅里的那些烦心事儿',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		}
	];
	addClass(i,dom) {
		console.log(1111);

		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('.item');

		lis[i].classList.add('hover');
	}
	removeClass(i,dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('.item');
		for (let i = 0; i < lis.length; i++) {
			lis[i].classList.remove('hover');
		}
	}
}
