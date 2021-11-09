import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue'
import Button from 'root/components/button.vue'
@Component({
	components: {
		Pagination,
		Button
	}
})
export default class DesignList extends Vue {
	tabs=['全部','总监设计师','首席设计师','设计师']
	activeIndex=0
}
