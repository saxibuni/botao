import { Vue, Component } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";

@Component({
	components: {
		Banner
	}
})
export default class Manager extends Vue {
	bannerData={cn:'施工管理',en:'CONSTRUCTION MANAGEMENT',imgUrl:require('root/assets/bg_d3_banner.jpg')}
	page1Data=[
		{
			desc1:'开工前准备',
			desc2:'熟悉图纸、人员安排、制定施工进度',
			desc3:'现场保护、现场交底、放线拆除'
		},
		{
			desc1:'土建阶段',
			desc2:'辅料申购、基础工程、钢筋工程',
			desc3:'模板工程、浇筑养护'
		},
		{
			desc1:'水电阶段',
			desc2:'刷墙固、施工放样、水电开槽',
			desc3:'强弱电排管布线、水管预埋测压',
			desc4:'开关插座点位排放、空调及地暖施工'
		},
		{
			desc1:'木工阶段',
			desc2:'放样复检、轻钢龙骨吊顶、背景施工',
			desc3:'柜体制作、定制品测量制作'
		},
		{
			desc1:'泥工阶段',
			desc2:'施工基准线、墙地面防水、墙砖铺贴',
			desc3:'地砖铺贴、地面保护'
		},
		{
			desc1:'油漆阶段',
			desc2:'阴阳角找直、墙项面找平、墙顶面批刮腻子',
			desc3:'涂料涂刷、壁纸基膜涂刷'
		},
		{
			desc1:'成品安装',
			desc2:'橱柜安装、木制品安装、卫浴电器安装',
			desc3:'开关面板安装、五金灯具安装、硬装竣工验收'
		},
		{
			desc1:'软装阶段',
			desc2:'家具、灯具、窗帘、地毯、挂画',
			desc3:'饰品、壁布、绿植'
		}
	]
	page2Data={
		left:['进户门保护 ','门窗保护','施工名牌','安全防护'],
		right:['安全用电','成品保护','区域划分','堆放规范']
	}
	page3Data=[
		{
			desc1:'基础工程',
			desc2:'基坑、放线',
			imgUrl:require('root/assets/bg_d3_part4_pic1.png')
		},
		{
			desc1:'钢筋工程',
			desc2:'弯折、绑扎、植筋',
			imgUrl:require('root/assets/bg_d3_part4_pic2.png')
		},
		{
			desc1:'模板工程',
			desc2:'切割、铺设、支设',
			imgUrl:require('root/assets/bg_d3_part4_pic3.png')
		},
		{
			desc1:'浇筑',
			imgUrl:require('root/assets/bg_d3_part4_pic4.png')
		},
		{
			desc1:'楼梯工程',
			imgUrl:require('root/assets/bg_d3_part4_pic5.png')
		},
	]
	page4Data=['拆除验收','土建验收','水电验收','泥木验收','涂装验收','定制品验收','验收竣工']
	active1Index=0
	active2Index=0
	activeName='1'
	swiperOptions1: any = {
		speed: 1000,
		spaceBetween: 22,
		slidesPerView: 3,
		slidesPerGroup: 3,
		autoplay: false,
		pagination: {
			el: '.pagination2',
			clickable: true
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		}
	};
	choice(i){
		if(Number(this.activeName)+i>4) return
		if(Number(this.activeName)+i<1) return
		this.activeName=String(Number(this.activeName)+i)
	}
	mounted(){
		this.restartWow();
	}
}
