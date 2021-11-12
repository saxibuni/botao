import { Vue, Component } from 'vue-property-decorator';
import Button from '../../components/button.vue';
import Banner from '../../components/banner.vue';
@Component({
	components: {
		Banner,
		Button
	}
})
export default class JoinUs extends Vue {
	jobShowFlag=6;
	BannerData = {
		imgUrl: require('../../assets/bg_f4_banner.jpg'),
		cn: '招贤纳士',
		en: 'JOIn US'
	};
	imgList = [
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg'),
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg'),
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg'),
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg'),
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg'),
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg'),
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg'),
		require('../../assets/bg_f4_pic1.jpg'),
		require('../../assets/bg_f4_pic2.jpg'),
		require('../../assets/bg_f4_pic3.jpg'),
		require('../../assets/bg_f4_pic4.jpg'),
		require('../../assets/bg_f4_pic5.jpg')
	];
	jobList = [
		{
			name: '设计中心分总 ',
			time: '2021-10-16',
			num: '1名',
			require: [
				'1、负责别墅、（家装）等整体配饰设计工作；',
				'2、陈列设计、环艺等相关专业，具备良好的美学基础；',
				'3、能熟练的操作 PHOTO SHOP 草图大师等绘图工具软件，有一定手绘能力更佳；',
				'4、对色彩及国际配饰流行趋势有准确的了解与全面把握， 熟悉各种家居风格；',
				'5、有硬装设计、软装饰、配饰设计经验者优先。'
			]
		},
		{
			name: '营销总监 ',
			time: '2021-10-16',
			num: '1名',
			require: [
				'1、负责别墅、（家装）等整体配饰设计工作；',
				'2、陈列设计、环艺等相关专业，具备良好的美学基础；',
				'3、能熟练的操作 PHOTO SHOP 草图大师等绘图工具软件，有一定手绘能力更佳；',
				'4、对色彩及国际配饰流行趋势有准确的了解与全面把握，熟悉各种家居风格；',
				'5、有硬装设计、软装饰、配饰设计经验者优先。'
			]
		},
		{
			name: '别墅设计师 ',
			time: '2021-10-16',
			num: '6名',
			require: [
				'1、负责别墅、（家装）等整体配饰设计工作；',
				'2、陈列设计、环艺等相关专业，具备良好的美学基础；',
				'3、能熟练的操作 PHOTO SHOP 草图大师等绘图工具软件，有一定手绘能力更佳；',
				'4、对色彩及国际配饰流行趋势有准确的了解与全面把握，熟悉各种家居风格；',
				'5、有硬装设计、软装饰、配饰设计经验者优先。'
			]
		},
		{
			name: '软装设计师 ',
			time: '2021-10-16',
			num: '5名',
			require: [
				'1、负责别墅、（家装）等整体配饰设计工作；',
				'2、陈列设计、环艺等相关专业，具备良好的美学基础；',
				'3、能熟练的操作 PHOTO SHOP 草图大师等绘图工具软件，有一定手绘能力更佳；',
				'4、对色彩及国际配饰流行趋势有准确的了解与全面把握，熟悉各种家居风格；',
				'5、有硬装设计、软装饰、配饰设计经验者优先。'
			]
		},
		{
			name: '设计师助理 ',
			time: '2021-10-16',
			num: '6名',
			require: ['1、熟悉CAD,能单独绘制施工图纸；', '2、热爱设计工作、吃苦耐劳；', '3、按时按量完成工作，认真负责；', '4、有团队精神，有一定的抗压能力，能适应加班，有相关经验者优先。']
		},
		{
			name: '商务总监 ',
			time: '2021-10-16',
			num: '2名',
			require: ['1、根据公司整体发展目标，制定市场计划和销售计划', '2、负责开发与维护重点市场和重点行业的核心客户；', '3、组建强执行力的商务团队，并带领团队实现市场和销售目标。']
		},
		{
			name: '设计中心分总 ',
			time: '2021-10-16',
			num: '1名',
			require: [
				'1、负责别墅、（家装）等整体配饰设计工作；',
				'2、陈列设计、环艺等相关专业，具备良好的美学基础；',
				'3、能熟练的操作 PHOTO SHOP 草图大师等绘图工具软件，有一定手绘能力更佳；',
				'4、对色彩及国际配饰流行趋势有准确的了解与全面把握， 熟悉各种家居风格；',
				'5、有硬装设计、软装饰、配饰设计经验者优先。'
			]
		},
		{
			name: '营销总监 ',
			time: '2021-10-16',
			num: '1名',
			require: [
				'1、负责别墅、（家装）等整体配饰设计工作；',
				'2、陈列设计、环艺等相关专业，具备良好的美学基础；',
				'3、能熟练的操作 PHOTO SHOP 草图大师等绘图工具软件，有一定手绘能力更佳；',
				'4、对色彩及国际配饰流行趋势有准确的了解与全面把握，熟悉各种家居风格；',
				'5、有硬装设计、软装饰、配饰设计经验者优先。'
			]
		},
		{
			name: '别墅设计师 ',
			time: '2021-10-16',
			num: '6名',
			require: [
				'1、负责别墅、（家装）等整体配饰设计工作；',
				'2、陈列设计、环艺等相关专业，具备良好的美学基础；',
				'3、能熟练的操作 PHOTO SHOP 草图大师等绘图工具软件，有一定手绘能力更佳；',
				'4、对色彩及国际配饰流行趋势有准确的了解与全面把握，熟悉各种家居风格；',
				'5、有硬装设计、软装饰、配饰设计经验者优先。'
			]
		}
	];
	jsBannerOptions: any = {
		centeredSlides: true,
		speed: 1000,
		spaceBetween: 19,
		slidesPerView: 4,
		loop: true,
		navigation: {
			prevEl: '.ju-pre',
			nextEl: '.ju-next'
		},
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false
		// }
	};
	getMore() {
		this.jobShowFlag=9
	}
}
