import { Events } from 'root/utils/EnumUtils';
import { Vue, Component } from 'vue-property-decorator';
let echarts = require('echarts/lib/echarts');
require("echarts/extension/bmap/bmap.js");
require("root/libs/shanghai.js");

@Component
export default class ShangHaiMap extends Vue {
	chart = null;
	currentSelectId: string = "";

	data = [
		{ name: '嘉定区', id: 'jd', value: 46 },
		{ name: '崇明区', id: 'cm', value: 88 },
		{ name: '青浦区', id: 'qp', value: 46 },
		{ name: '宝山区', id: 'bs', value: 86 },
		{ name: '松江区', id: 'sj', value: 76 },
		{ name: '闵行区', id: 'mh', value: 46 },
		{ name: '奉贤区', id: 'fx', value: 66 },
		{ name: '浦东新区', id: 'pd', value: 56 },
	];

	mounted() {
		this.initChart();
	}

	initChart() {
		const color = '#EE6423';
		let series = [
			{
				type: 'map',
				map: '上海',
				roam: false,
				center: [121.490317, 31.162771], //设置可见中心坐标，以此坐标来放大和缩小
				zoom: 1.35,
				selectedMode: false,
				label: {
					show: false,
				},
				itemStyle: {
					areaColor: '#fff'
				},
				emphasis: {
					label: {
						show: false
					},
					itemStyle: {
						areaColor: color,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				},

				data: this.data,
			},
		];

		const mapBoxOption = {
			geo: {
				type: 'map',
				map: '上海',
				roam: false,
				center: [121.490317, 31.162771], //设置可见中心坐标，以此坐标来放大和缩小
				zoom: 1.35,
				silent: true
			},
			visualMap: {
				show: false,
				splitList: [
					{ start: 100, color: '#d1d1d1' },
					{ start: 50, end: 100, color: '#d7d7d7' },
					{ start: 20, end: 50, color: '#e7e7e7' },
					{ start: 0, end: 20, color: '#ededed' },
				],
			},
			series: series
		}

		this.chart = echarts.init(this.$el.querySelector(".map-box"));
		this.chart.setOption(mapBoxOption);

		this.chart.on('mouseover', params => {
			if (params.data) {
				this.currentSelectId = params.data.id;
				console.log(JSON.stringify(params.data));
			}
		});
		this.chart.on('mouseout', () => {
			this.currentSelectId = "";
		});
		this.$bus.$on(Events.RESIZE, this.onResize);
	}

	onResize() {
		this.chart.resize();
	}

	beforeDestroy() {
		this.$bus.$off(Events.RESIZE, this.onResize);
		this.chart.dispose();
		this.chart = null;
	}
}
