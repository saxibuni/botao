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
	web_url = 'http://btgwcs.zhulu76.com/'
	detailData={}
	swiperOptions: any = {
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
		},

	};
	created(){
		this.getData()
	}
		getData() {
			utils.service.queryDesignerShow(
				{
					aid:240
				},
				res => {
					console.log(res.data);
					this.detailData=res.data
					utils.emitter.$emit('bannerData', res.data);
				}
			);
		}
	mounted(){
		this.restartWow();
	}
}
