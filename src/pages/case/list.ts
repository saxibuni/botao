import { Vue, Component } from 'vue-property-decorator';
import Cases from './components/cases.vue'
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
import ICountUp from 'root/components/countup.vue';
@Component({
	components: {
		Cases,
		Pagination,
		Button,
		ICountUp
	}
})
export default class CaseList extends Vue {
	paginationData={size:100,total:1000}
	tabList=[{title:'风格',info:['全部','轻奢/现代/港式','中式/新中式','欧式/法式/地中海/美式','日式/侘寂/工业风']},{title:'户型',info:['全部','别墅','复式','大平层','工装']},{title:'面积',info:['全部','200㎡以下','200㎡-500㎡以内','500㎡以上']}]
	activeIndex=[0,0,0]
	bannerSwiperOptions1: any = {
		speed: 500,
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
	mounted(){
		this.restartWow();
	}
}
