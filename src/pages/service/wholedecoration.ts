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
	list = [];
	web_url = '';

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
	btysInfo = {};
	ysList = [];
	mounted() {
		this.web_url=this.$store.state.footData.web_url;
		this.restartWow();
		utils.service.queryQazz({}, res => {
			if (res.status === 200) {
				this.banner = res.data.banner;
				this.fwlcList = res.data.fwlcList.map((item,index) =>{
					return Object.assign(item,{active:false})
				});
				this.fwtdList = res.data.fwtdList;
				this.ghfyList = res.data.ghfyList;
				this.btysInfo = res.data.btysInfo;
				this.ysList = res.data.ysList;
				setTimeout(() => {
					this.initTextChars();
				}, 300);
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
