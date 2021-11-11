import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
import ICountUp from 'root/components/countup.vue';
@Component({
	components: {
		Pagination,
		Button,
		ICountUp
	}
})
export default class DesignList extends Vue {
	paginationData={size:100,total:1000}
	tabs=['全部','总监设计师','首席设计师','设计师']
	activeIndex=0
	options1 = {
		suffix: '+',
		useEasing: true
	};
}
