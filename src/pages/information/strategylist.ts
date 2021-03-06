import {  Component, Watch,Mixins } from 'vue-property-decorator';
import Pagination from '../../components/pagination.vue';
import Banner from '../../components/banner.vue';
import utils from 'root/utils';
import Com from 'root/components/baseCom'
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
export default class StrategyList extends Mixins(Com) {
	web_url = '';
	BannerData = {};
	isShow: boolean = false;

	topList = [];
	topList2 = [];

	newsList = [];
	groupList = [];
	spFlag=false;
	showPagination: boolean = false;
	typeId: string = '';
	queryMethod: (req, callback: (res: any) => void) => void;
	created() {
		this.typeId = this.$route.query.typeId.toString();
		this.queryMethod = (this.typeId == '90' ? utils.service.queryNewAct : utils.service.queryNews).bind(utils.service);
		this.query();
	}
	paginationData = { size: 0, total: 0, arr: [], boxName: '.strategy-list .list-box' };

	query() {
		this.queryMethod({}, res => {
			//banner
			utils.emitter.$emit('bannerData', res.data.banner);
			this.BannerData=res.data.banner
			//toplist
			this.topList = res.data.newsTopList;
			this.topList2 = [...this.topList];
			this.topList2.shift();

			//groupList
			this.groupList = res.data.newsList;

			this.paginationData.total = res.data.pages.total;
			this.paginationData.size = res.data.pages.per_page;

			this.spFlag=true;

			this.restartWow();
		});
	}

	getData(v) {
		this.clearImgSrc(this.paginationData.boxName)
		this.queryMethod({ page: v }, res => {
			this.groupList = res.data.newsList;
		});
	}

	@Watch('$route.query.typeId')
	typeIdChange(typeId) {
		this.typeId = typeId;
		this.queryMethod = (typeId == '90' ? utils.service.queryNewAct : utils.service.queryNews).bind(utils.service);
		this.query();
		this.showPagination = false;
		setTimeout(() => {
			this.showPagination = true;
		});
		window.scrollTo(0, 0);
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
