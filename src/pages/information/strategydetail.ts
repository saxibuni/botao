import { Vue, Component } from 'vue-property-decorator';
import Button from '../../components/button.vue';
import Banner from '../../components/banner.vue';
import utils from 'root/utils';
@Component({
	components: {
		Button,
		Banner
	},
	filters: {
		formatTime(val: number) {
			const date = new Date(val * 1000);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			const newtime = `${year}-${month}-${day}`;
			return newtime;
		},
		formatTime2(val: number) {
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
export default class StrategyDetail extends Vue {
	newListFlag: number = 3;
	web_url = '';
	BannerData = {};
	newsList = [];

	archivesInfo = {};
	created() {
		this.queryDetail(this.$route.query.aid);
	}

	queryDetail(aid) {
		utils.service.queryNewsDetail(aid, res => {

			//banner
			utils.emitter.$emit('bannerData', res.data.banner);

			this.BannerData = res.data.banner;

			//text
			this.archivesInfo = res.data.archivesInfo;

			//newList
			this.newsList = res.data.newsTopList;

			// this.restartWow();
		});
	}

	mounted() {
		this.restartWow();
	}
	wbJump() {
		window.open(`https://service.weibo.com/share/share.php?url=波涛装饰集团,我们，让空间更美好 ${window.location.href}`);
	}

	jump(aid) {
		this.$router.push({ query: { aid } });
		this.queryDetail(aid);
		setTimeout(() => {
			window.scroll({ top: 0, behavior: 'smooth' });
		}, 20);
	}

	getMore() {
		this.newListFlag = this.newsList.length;
	}
	addClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('.item');

		lis[i].classList.add('hover');
	}

	removeClass(i, dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('.item');
		for (let i = 0; i < lis.length; i++) {
			lis[i].classList.remove('hover');
		}
	}
	openQQ() {
		window.open(`https://connect.qq.com/widget/shareqq/index.html?${window.location.href}`, '_blank', 'height=100');
	}
}
