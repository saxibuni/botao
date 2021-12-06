import {  Component,Mixins } from 'vue-property-decorator';
import Cases from './components/cases.vue'
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
import ICountUp from 'root/components/countup.vue';
import Com from 'root/components/baseCom';
import utils from 'root/utils'
@Component({
	components: {
		Cases,
		Pagination,
		Button,
		ICountUp
	}
})
export default class CaseList extends Mixins(Com) {
	listData:any={}
	caseList=[]
	web_url = ''
	inputVal=''
	paginationData={size:0,total:0, boxName: '.case-list .cases'}
	tabList=[{title:'风格',info:[]},{title:'户型',info:[]},{title:'面积',info:[]}]
	activeIndex=[0,0,0]
	swiperIndex=0
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
			slideChangeTransitionStart: function() {
				utils.emitter.$emit('changeIndex', this.realIndex);
			},
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
				this.caseList= res.data.list;
				this.paginationData.total=res.data.pages.total
				this.paginationData.size=res.data.pages.per_page
				utils.emitter.$emit('bannerData', res.data);
			}
		);
	}
	choice(v?){
		this.getData(1,this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]],this.tabList[2].info[this.activeIndex[2]]=='全部'?'':this.tabList[2].info[this.activeIndex[2]],v)
	}
	getData1(v){
		this.clearImgSrc(this.paginationData.boxName);
			utils.service.queryJxCase(
				{
					page: v,
					mjsx:this.tabList[2].info[this.activeIndex[2]]=='全部'?'':this.tabList[2].info[this.activeIndex[2]],
					hxsx:this.tabList[1].info[this.activeIndex[1]]=='全部'?'':this.tabList[1].info[this.activeIndex[1]],
					stylesx:this.tabList[0].info[this.activeIndex[0]]=='全部'?'':this.tabList[0].info[this.activeIndex[0]],
					keywords:'',
				},
				res => {
					this.caseList= res.data.list;
				}
			);
	}
	push(aid,e){
		if(e.target.className=='btn')return
		this.$router.push({path:'/case/detail',query:{aid:aid}})
	}
	mounted(){
		this.restartWow();
		utils.emitter.$on('changeIndex', i => {
			this.swiperIndex = i;
		});
	}
}
