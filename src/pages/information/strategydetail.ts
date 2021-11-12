import { Vue, Component } from 'vue-property-decorator';
import Button from '../../components/button.vue';
import Banner from '../../components/banner.vue';

@Component({
	components: {
		Button,
		Banner
	}
})
export default class StrategyDetail extends Vue {
	newListFlag: number = 3;
	BannerData = {
		imgUrl: require('../../assets/strategybg.jpg'),
		cn: '最新资讯',
		en: 'Construction management'
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
		},
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

	mounted() {
		this.restartWow();
	}
	wbJump() {
		window.open(`https://service.weibo.com/share/share.php?url=波涛装饰集团,我们，让空间更美好 https://www.baidu.com`);
	}

	getMore() {
		this.newListFlag = 6;
		console.log(this.newListFlag);
	}
	addClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('.item');

		lis[i].classList.add('hover');
	}

	removeClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('.item');
		for (let i = 0; i < lis.length; i++) {
			lis[i].classList.remove('hover');
		}
	}
	openQQ() {
		window.open(`https://connect.qq.com/widget/shareqq/index.html?${window.location.href}`,'_blank','height=100');
	}
}
