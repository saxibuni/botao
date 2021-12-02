import { Vue, Component } from 'vue-property-decorator';
import Button from 'root/components/button.vue'
import Cases from '../case/components/cases.vue'
import utils from 'root/utils'
@Component({
	components: {
		Cases,
		Button
	}
})
export default class DesignDetail extends Vue {
	web_url = ''
	detailData:any={}
	swiperOptions: any = {
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
		},

	};
	video=false
	moreIndex=1
	created(){
		this.getData()
	}
		getData() {
			utils.service.queryDesignerShow(
				{
					aid:this.$route.query.aid
				},
				res => {
					this.detailData=res.data
					utils.emitter.$emit('bannerData', res.data);
					this.web_url = res.data.web_url;
				}
			);
		}
		play(e){
			this.video=true
			document.querySelector<HTMLVideoElement>('.video video').play()
			document.querySelector<HTMLVideoElement>('.video video').controls=true

		}
	mounted(){
		this.restartWow();
		setTimeout(() => {
			if(!this.detailData.designer_info.hor)return
			if((this.$refs.text as HTMLElement).clientHeight < (this.$refs.scroll as HTMLElement).clientHeight){
				(this.$refs.scroll as HTMLElement).style.overflowY="hidden"
			}
		}, 500);

	}
}
