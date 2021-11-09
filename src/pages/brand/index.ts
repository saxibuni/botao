import { Vue, Component } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import Button from 'root/components/button.vue';
import MapBox from 'root/pages/echartmap.vue';
import ICountUp from 'root/components/countup.vue';
@Component({
	components: {
		Button,
		Banner,
		MapBox,
		ICountUp
	}
})
export default class Brand extends Vue {
	isActive = 7;
	bannerActive=0;
	BannerData = {
		imgUrl: require('../../assets/bg_g1_banner.jpg'),
		cn: '波涛品牌',
		en: 'ABOUT BOTAOGROUP'
	};
	btBrandArr = ['壹澜建材', '九衡堂', '锦沁建筑劳务', '繁构国际设计', '汇海船舶', '锦悦建设', '波涛家庭装饰', '波澜管理', '波涛装饰家居', '波涛简嘉公寓', '波涛商学院', '波涛软装'];
	btBrandInfoArr = [
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		},
		{
			title: '波涛家庭装饰',
			text:
				'上海波涛家庭装饰有限公司以下简称【波涛家庭装饰公司】是波涛集团旗下专业为高端住宅提供建筑规划、土建改造、室内外设计、装饰施工、主材选购、智能设备、家具软装配套、园林景观以及饰后服务于一体的全案整装定制服务机构，具有国家一级施工资质和国家乙级设计资质，致力于为高端需求的业主打造“极致·个性·品位”的高品质生活空间。',
			img: require('../../assets/bg_g1_part2_pic.jpg')
		}
	];
	options1 = {
		// suffix: '+',
		useEasing: true
	};
	hoverBannerOptions = {
		speed: 500,
		spaceBetween: 77,
		slidesPerView: 4,
		loop: true,
		navigation: {
			nextEl: '.hv-next',
			prevEl: '.hv-pre'
		}
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		}
	};
}
