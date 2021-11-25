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
	inputVal=''
	paginationData={size:6,total:1000}
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
						`<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${(i<9?'0'+(i+1):i+1)}</span>`;
					} else {
						customPaginationHtml +=
						`<span class="swiper-pagination-bullet">${(i<9?'0'+(i+1):i+1)}</span>`;
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
	this.getData(1,'','','','')
}
	getData(val1,val2,val3,val4,val5) {
		utils.service.queryJxCase(
			{
				page: val1,
				mjsx:val4,
				hxsx:val3,
				stylesx:val2,
				keywords:val5,
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
				this.paginationData.total=res.data.list.length
				utils.emitter.$emit('bannerData', res.data);
			}
		);
	}
	choice(v?){
		this.getData(1,this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]],this.tabList[2].info[this.activeIndex[2]]=='全部'?'':this.tabList[2].info[this.activeIndex[2]],v)
	}
	mounted(){
		this.restartWow();
	}
}
