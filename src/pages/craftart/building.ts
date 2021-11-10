import { Vue, Component,Watch } from 'vue-property-decorator';
import Banner from "root/components/banner.vue";
import Pagination from 'root/components/pagination.vue'
import Button from 'root/components/button.vue'
import ShangHaiMap from 'root/components/shanghaimap.vue';
import ICountUp from 'root/components/countup.vue';
@Component({
	components: {
		Banner,
		Pagination,
		Button,
		ShangHaiMap,
		ICountUp
	}
})
export default class Building extends Vue {
	bannerData={cn:'在建工地',en:'THE CONSTRUCTION SITE',imgUrl:require('root/assets/bg_d1_banner.jpg')}
	tabList=[{title:'户型',info:['全部','独栋别墅','联排别墅','大平层','复式']},{title:'面积',info:['全部','200㎡以下','200-500㎡','500-800㎡','800㎡以上']}]
	activeIndex=[0,0]
	currentSelectId=''
	options1 = {
		// suffix: '+',
		useEasing: true
	};
	fn(v){
		this.currentSelectId=v
	}
}
