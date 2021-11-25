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
		this.fy();
		// console.log(this.web_url, 'asdasd');
	}
	paginationData = { size: 6, total: 1000, arr: [] };

	query() {
		utils.service.queryNews(res => {
			//banner
			res.data.banner.etitle = res.data.banner.etitle.toUpperCase();
			this.BannerData = res.data.banner;

			//toplist
			this.topList = res.data.newsTopList;
			this.topList2 = [...this.topList];
			this.topList2.shift();

			this.newsList = res.data.newsList;
			this.newsList = this.newsList.concat(this.newsList[1]);

			this.paginationData.total = this.newsList.length;
			this.paginationData.arr = this.newsList;

			this.restartWow();
		});
	}
	fy() {}

	getData(v) {
		utils.service.queryZxgl({ page: v }, res => {
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
