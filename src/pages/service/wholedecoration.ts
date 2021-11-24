import { Vue, Component } from 'vue-property-decorator';
import Banner from "../../components/banner.vue";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import utils from "root/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);
@Component({
	components: {
		Banner
	}
})
export default class WholeDecoration extends Vue {
	list = [
		{ title: '初次沟通', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '前期设计工作', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '签订设计合同', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '全案设计初稿', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '全案设计终稿', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '签订施工合同', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '主材选定', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: true, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '开工仪式', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '土建施工', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '硬装施工', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '配套设备安装', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '阶段节点验收', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '硬装竣工', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '软装设计选配', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '软装摆场', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '项目整体交付', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
		{ title: '售后服务', imgUrl: require("../../assets/icons/ic_e1_part2_07.png"), active: false, text: '卫浴洁具、厨电、地板、墙地砖、大理石、楼梯、全屋木制品、铝合金门窗几里' },
	]
	web_url = 'http://btgwcs.zhulu76.com/';
	onClick(i){
		this.fwlcList.forEach((e,index)=>{
			if(i==index){
				e.active=true
			}else{
				e.active=false
			}
		})
	}
	banner = {};
	fwlcList = [];
	fwtdList = [];
	ghfyList = [];
	mounted() {
		this.restartWow();
		this.initTextChars();
		utils.service.queryQazz({}, res => {
			if (res.status === 200) {
				this.banner = res.data.banner;
				this.fwlcList = res.data.fwlcList.map((item,index) =>{
					return Object.assign(item,{active:false})
				});
				this.fwtdList = res.data.fwtdList;
				this.ghfyList = res.data.ghfyList;
				console.log(res.data);
				console.log(res.data.ghfyList);
			}
		});
	}
	initTextChars() {
		let textContents = this.$el.querySelectorAll<HTMLElement>('.page1 .text');
		textContents.forEach(item => {
			new SplitText(item, {
				charsClass: 'char',
				type: 'chars'
			}).chars;
		});
		this.onCharsEnter();
	}
	onCharsEnter(isInit: boolean = false) {
		let slide = document.querySelector('.page1 .text')
		let chars = slide.querySelectorAll('.char');
		gsap.timeline()
			.fromTo(chars, {
				duration: 1,
				rotate: -10,
				y: "random(100, 200)",
				ease: "power3",
				opacity: 0
			}, {
				opacity: 1,
				rotate: 0,
				y: 0
			});
	}
}
