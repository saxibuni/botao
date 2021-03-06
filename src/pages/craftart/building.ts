import { Vue, Component, Watch, Mixins } from 'vue-property-decorator';
import Banner from 'root/components/banner.vue';
import Pagination from 'root/components/pagination.vue';
import Button from 'root/components/button.vue';
import ICountUp from 'root/components/countup.vue';
import VideoPopup from 'root/components/videoPopup.vue';
import utils from 'root/utils'
import Popup from 'root/components/popup.vue';
import Com from 'root/components/baseCom';

@Component({
	components: {
		Banner,
		Pagination,
		Button,
		ICountUp,
		VideoPopup,
		Popup
	}
})
export default class Building extends Mixins(Com) {
	videoPop = {
		isPop: false,
		url: ''
	};
	imgPop = {
		isPop: false,
		imgUrl:''
	};
	swiperOptions: any = {
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		autoplay: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	};
	buildingData = {}
	web_url = ''
	paginationData = { size: 9, total: 1000, boxName: '.craft-building .list' };
	bannerData = {};
	tabList = [
		{ title: '户型', info: [] },
		{ title: '面积', info: [] }
	];
	activeIndex = [0, 0];
	currentSelectId = '';
	options1 = {
		// suffix: '+',
		useEasing: true
	};
	fn(v) {
		this.currentSelectId = v;
	}
	playVideo(i) {
		this.videoPop.url = i;
		if (!i) return
		this.videoPop.isPop = true;
	}
	created() {
		this.getData(1, '', '')
	}
	getData(v, val1, val2) {
		this.clearImgSrc(this.paginationData.boxName);
		utils.service.querysiteCase(
			{
				page: v,
				gdhxsx: val1,
				gdmjsx: val2
			},
			res => {
				this.buildingData = res.data
				this.bannerData = res.data.banner
				res.data.mjsx.unshift('全部')
				res.data.hxsx.unshift('全部')
				this.tabList[0].info = res.data.hxsx
				this.tabList[1].info = res.data.mjsx
				this.web_url = res.data.web_url;
				this.paginationData.total = res.data.pages.total
				this.paginationData.size = res.data.pages.per_page
			}
		);
	}
	choice() {
		this.getData(1, this.tabList[0].info[this.activeIndex[0]] == '全部' ? '' : this.tabList[0].info[this.activeIndex[0]], this.tabList[1].info[this.activeIndex[1]] == '全部' ? '' : this.tabList[1].info[this.activeIndex[1]])
	}
	getData1(v) {
		this.getData(v, this.tabList[0].info[this.activeIndex[0]] == '全部' ? '' : this.tabList[0].info[this.activeIndex[0]], this.tabList[1].info[this.activeIndex[1]] == '全部' ? '' : this.tabList[1].info[this.activeIndex[1]])
	}
	setDelayTime() {
		return Math.random() * 0.4 + 0.1;
	}
	show(video,img) {
		if (video) return;
		if(img.split(',').length<=1)return
		this.imgPop.isPop = true;
		this.imgPop.imgUrl=img
	}
	show2(e){
		if(e.target.className=='swiper-pagination-bullet swiper-pagination-bullet-active')return
		if(e.target.className=='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets')return
		if(e.target.className=='swiper-slide swiper-slide-active')return
		if(e.target.className=='swiper-button-next'||e.target.className=='swiper-button-prev'||e.target.className=='swiper-pagination'||e.target.className=='swiper-pagination-bullet'||e.target.className=='swiper-slide')return
		this.imgPop.isPop = false
	}
	mounted() {
		this.restartWow();
	}
}
