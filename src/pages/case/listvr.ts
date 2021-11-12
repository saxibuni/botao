import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
@Component({
	components: {
		Pagination,
		Button
	}
})
export default class CaseListVr extends Vue {
	paginationData={size:100,total:1000}
	tabList=[{title:'风格',info:['全部','轻奢/现代/港式','中式/新中式','欧式/法式/地中海/美式','日式/侘寂/工业风']},{title:'户型',info:['全部','别墅','复式','大平层','工装']},{title:'面积',info:['全部','200㎡以下','200㎡-500㎡以内','500㎡以上']}]
	activeIndex=[0,0,0]
	mounted(){
		this.restartWow();
	}
}
