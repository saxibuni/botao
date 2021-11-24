import { Vue, Component } from 'vue-property-decorator';
import Cases from './components/cases.vue'
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
import ICountUp from 'root/components/countup.vue';
import utils from 'root/utils'
@Component({
	components: {
		Cases,
		Pagination,
		Button,
		ICountUp
	}
})
export default class CaseList extends Vue {
	listData={}
	web_url = ''
	paginationData={size:100,total:1000}
	tabList=[{title:'风格',info:[]},{title:'户型',info:[]},{title:'面积',info:[]}]
	activeIndex=[0,0,0]
	bannerSwiperOptions1: any = {
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination3',
			clickable: true,
			type: 'custom',
			renderCustom: function(index, current, total) {
				var customPaginationHtml = "";
				for (var i = 0; i < total; i++) {
					if (i == current - 1) {
						customPaginationHtml +=
						`<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${(i<10?'0'+(i+1):i+1)}</span>`;
					} else {
						customPaginationHtml +=
						`<span class="swiper-pagination-bullet">${(i<10?'0'+(i+1):i+1)}</span>`;
					}
				}
				return customPaginationHtml;
			}
		},
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next3',
		},
		on: {
		}
	};
	options1 = {
		suffix: '+',
		useEasing: true
	};
created(){
	this.getData()
}
	getData() {
		utils.service.queryJxCase(
			{
	// 			page: 1,
	// mjsx:'500㎡以上',
	// hxsx:'别墅',
	// stylesx:'轻奢/现代/港式',
	// keywords:1,
			},
			res => {
				this.listData=res.data
				res.data.stylesx.unshift('全部')
				res.data.hxsx.unshift('全部')
				res.data.mjsx.unshift('全部')
				this.tabList[0].info=res.data.stylesx
				this.tabList[1].info=res.data.hxsx
				this.tabList[2].info=res.data.mjsx
				this.web_url = res.data.web_url;
				utils.emitter.$emit('bannerData', res.data);
			}
		);
	}
	mounted(){
		this.restartWow();
	}
}
