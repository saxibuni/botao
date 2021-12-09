import { Vue, Component } from 'vue-property-decorator';
import Button from 'root/components/button.vue';
import Cases from './components/cases.vue';
import Prop from 'root/components/popup.vue';
import VideoPopup from 'root/components/videoPopup.vue';
import utils from 'root/utils';
@Component({
	components: {
		Button,
		Cases,
		Prop,
		VideoPopup
	}
})
export default class CaseDetail extends Vue {
	detailData:any = {};
	web_url = '';
	activeIndex = 0;
	tabs = ['同风格案例', '同设计师案例'];
	swiperOptions1: any = {
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
			nextEl: '.next1',
			prevEl: '.prev1'
		}
	};
	swiperOptions2: any = {
		speed: 1000,
		spaceBetween: 5,
		slidesPerView: 3,
		slidesPerGroup: 3,
		autoplay: false,
		// observer:true,
    // observeParents:true,
		pagination: {
			el: '.pagination2',
			clickable: true
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		}
	};
	videoPop = {
		isPop: false,
		url:''
	};
	playVideo(i) {
		this.videoPop.url = i;
		if(!i)return
		this.videoPop.isPop = true;
	}
	created() {
		this.getData();
	}
	getData() {
		utils.service.queryjxCaseShow(
			{
				aid: this.$route.query.aid
			},
			res => {
				this.web_url = res.data.web_url;
				this.detailData = res.data;
				utils.emitter.$emit('bannerData', res.data);
				if(res.data.styleList.list.length<=0&&res.data.sjsList.list.length>0){
					this.activeIndex=1
				}
			}
		);
	}
	push(aid,e){
		if(e.target.className=='btn')return
		this.$router.push({path:'/design/detail',query:{aid:aid}})
	}
	updateSwiper() {
		setTimeout(() => {
			let bannerSwiper = (<any>this.$refs)['swiper2'].$swiper;
			bannerSwiper.update();
			bannerSwiper.pagination.render();
			bannerSwiper.pagination.update();
		}, 0);
	}
	mounted() {
		this.restartWow();
	}
}
