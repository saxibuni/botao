import { Vue, Component } from 'vue-property-decorator';
import Banner from "../../components/banner.vue";
@Component({
	components: {
		Banner
	}
})
export default class WholeDecoration extends Vue {
	banner = {
		imgUrl: require("../../assets/portrait/bg_home_b3_pic17.jpg"),
		cn: '全案整装',
		en: 'Whole case assembly'
	}
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
	onClick(i){
		this.list.forEach((e,index)=>{
			if(i==index){
				e.active=true
			}else{
				e.active=false
			}
		})
	}
	mounted() {
		this.restartWow();
	}
}
