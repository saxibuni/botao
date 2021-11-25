import { Vue, Component } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue';
import Banner from '../../components/banner.vue';
import utils from 'root/utils';
@Component({
	components: {
		Pagination,
		Banner
	},
	filters: {
		formatTime(val: number) {
			const date = new Date(val * 1000);
			const year = date.getFullYear();
			const month = date.getMonth();
			const day = date.getDate();
			const eMonh = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			const newtime = `${year},${eMonh[month]},${day}`;
			return newtime;
		}
	}
})
export default class StrategyList extends Vue {
	web_url = '';
	BannerData = {};
	isShow: boolean = false;

	topList = [];
	topList2 = [];

	newsList = [];
	groupList = [];
	created() {
		this.query();
	}
	paginationData = { size: 6, total: 1000, arr: [], boxName: '.strategy-list .list-box' };

	query() {
		utils.service.queryNews({},res => {
			//banner
			res.data.banner.etitle = res.data.banner.etitle.toUpperCase();
			this.BannerData = res.data.banner;

			//toplist
			this.topList = res.data.newsTopList;
			this.topList2 = [...this.topList];
			this.topList2.shift();

			this.groupList = res.data.newsList;

			this.paginationData.total = res.data.pages.total;
			this.paginationData.size = res.data.pages.per_page;

			this.restartWow();
		});
	}

	getData(v) {
		utils.service.queryNews({ page: v }, res => {
			this.groupList = res.data.newsList;
		});
	}

	addClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('li');
		lis[i].classList.add('hover');
	}
	removeClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('li');
		for (let i = 0; i < lis.length; i++) {
			lis[i].classList.remove('hover');
		}
	}
}
