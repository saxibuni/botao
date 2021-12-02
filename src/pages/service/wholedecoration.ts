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
				this.$nextTick(() => {
					this.initTextChars();
				});
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
	rollTo(){
		const headerHeight = document.querySelector<HTMLElement>('.header').clientHeight;
		const brand = document.querySelector<HTMLElement>('.whole-decoration');
		const item = brand.querySelector<HTMLElement>(`.page2`);
		let top = item.offsetTop - headerHeight;
		let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
    this.scrollTo(top, bodyTop, 300);
	}
  isAnimating: boolean = false;
  animateRaf: number;

	scrollTo(destOffsetTop: number, currentOffsetTop: number, duration: number) {
    let startTime = +new Date();
    let destTime = startTime + duration;

    // 由快到慢的缓动函数
    const circular = (k: number) => {
      return Math.sqrt(1 - (--k * k));
    }

    const step = () => {
      let now = +new Date();
      if (now >= destTime) {
        window.scrollTo(0, destOffsetTop);

        setTimeout(() => {
          this.isAnimating = false;
        }, 50);
        return;
      }

      let progress = (now - startTime) / duration;
      let offset = (destOffsetTop - currentOffsetTop) * circular(progress) + currentOffsetTop;
      window.scrollTo(0, offset);


      if (this.isAnimating) {
        this.animateRaf = requestAnimationFrame(step);
      }
    }

    this.isAnimating = true;
    step();
  }
}
