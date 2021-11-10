import { Events } from 'root/utils/EnumUtils';
import { Vue, Component } from 'vue-property-decorator';
let echarts = require('echarts/lib/echarts')
require("echarts/extension/bmap/bmap.js");
require("root/libs/china.js");
require("root/libs/chinaMapOutline.js");

@Component
export default class ChinaMap extends Vue {
	chart = null;
	geoCoordMap = {
		'安徽省铜陵': [117.81154, 30.945515],
		'长春': [125.8154, 44.2584],
		'长沙': [113.0823, 28.2568],
		'贵阳': [106.6992, 26.7682],
		'杨凌': [109.1162, 34.2004],
		'深圳': [114.5435, 22.5439],
		'济南': [117.1582, 36.8701],
		'海口': [110.3893, 19.8516],
		'沈阳': [123.1238, 42.1216],
		'武汉': [114.3896, 30.6628],
		'红安': [114.23, 31.1],
		'昆明': [102.9199, 25.4663],
		'杭州': [119.5313, 29.8773],
		'成都': [103.9526, 30.7617],
		'拉萨': [91.1865, 30.1465],
		'天津': [117.4219, 39.4189],
		'合肥': [117.29, 32.0581],
		'呼和浩特': [111.4124, 40.4901],
		'哈尔滨': [127.9688, 45.368],
		'北京': [116.4551, 40.2539],
		'南京': [118.8062, 31.9208],
		'南宁': [108.479, 23.1152],
		'南昌': [116.0046, 28.6633],
		'乌鲁木齐': [87.9236, 43.5883],
		'上海': [121.4648, 31.2891],
		'三亚': [109.5000, 18.2000]
	};

	mounted() {
		this.initChart();
	}

	initChart() {
		const HFData = [ // 数据中name的城市名称必须与geoCoordMap中城市名称一致, 不然关联不上，上海到各地区的线路
			[{ name: '上海' }, { name: '长春', value: 66 }],
			[{ name: '上海' }, { name: '长沙', value: 66 }],
			[{ name: '上海' }, { name: '贵阳', value: 66 }],
			[{ name: '上海' }, { name: '杨凌', value: 66 }],
			[{ name: '上海' }, { name: '深圳', value: 66 }],
			[{ name: '上海' }, { name: '济南', value: 66 }],
			[{ name: '上海' }, { name: '海口', value: 66 }],
			[{ name: '上海' }, { name: '沈阳', value: 66 }],
			[{ name: '上海' }, { name: '武汉', value: 66 }],
			[{ name: '上海' }, { name: '昆明', value: 66 }],
			[{ name: '上海' }, { name: '合肥', value: 66 }],
			[{ name: '上海' }, { name: '杭州', value: 66 }],
			[{ name: '上海' }, { name: '成都', value: 66 }],
			[{ name: '上海' }, { name: '拉萨', value: 66 }],
			[{ name: '上海' }, { name: '天津', value: 66 }],
			[{ name: '上海' }, { name: '呼和浩特', value: 66 }],
			[{ name: '上海' }, { name: '哈尔滨', value: 66 }],
			[{ name: '上海' }, { name: '北京', value: 66 }],
			[{ name: '上海' }, { name: '南宁', value: 66 }],
			[{ name: '上海' }, { name: '南昌', value: 66 }],
			[{ name: '上海' }, { name: '乌鲁木齐', value: 66 }],
			[{ name: '上海' }, { name: '上海', value: 118 }]
		];

		const color = '#EB551D';
		const planePath = 'arrow';
		// const planePath = "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
		let series = [];
		// 遍历由上海到其他城市的线路
		[
			['上海', HFData]
		].forEach((item, i) => {
			// 配置
			series.push({
				name: item[0],
				type: 'lines',
				zlevel: 1, // 用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中
				// effect出发到目的地 的白色尾巴线条
				// 线特效的配置
				effect: {
					show: true,
					period: 6, // 特效动画的时间，单位为 s
					trailLength: 0.1, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长
					color: color, // 移动箭头颜色
					symbol: planePath,
					symbolSize: 6 // 特效标记的大小
				},
				// lineStyle出发到目的地 的线条颜色
				lineStyle: {
					normal: {
						color: color,
						width: 0,
						curveness: 0.2 //幅度
					}
				},
				data: this.convertData(item[1]) //开始到结束数据
			},
			{
				//出发地信息
				name: item[0],
				type: 'lines',
				zlevel: 2,
				effect: {
					show: true,
					period: 6,
					trailLength: 0,
					symbol: planePath,
					symbolSize: 6
				},
				lineStyle: {
					normal: {
						color: color,
						type: 'dotted',
						width: 1.5,
						opacity: 0.4,
						curveness: 0.2
					}
				},
				data: this.convertData(item[1])
			},
			{
				// 目的地信息
				name: item[0],
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					brushType: 'stroke'
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: '{b}'
					}
				},
				symbolSize: (val) => {
					return val[2] / 8;
				},
				itemStyle: {
					normal: {
						color: color
					}
				},
				data: (<any>item[1]).map((dataItem) => {
					return {
						name: dataItem[1].name,
						value: this.geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
					};
				})
			}
			);
		});

		series.unshift({
			type: 'map',
			map: 'china',
			roam: false, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
			aspectScale: 0.75,
			zoom: 1.20,
			selectedMode: false,
			label: {
				normal: {
					show: false,
				},
				emphasis: { // 对应的鼠标悬浮效果
					show: false,
				}
			},
			itemStyle: {
				normal: {
					areaColor: '#fff',
					borderColor: color
				},
				emphasis: {
					areaColor: "#eee",
					borderColor: color,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		});

		// 指定相关的配置项和数据
		const mapBoxOption = {
			geo: {
				type: "map",
				map: "chinaMapOutline",
				// 不响应鼠标交互
				silent: true,
				//调整以下3个配置项与页面地图重合
				aspectScale: 0.75, // 地图的长宽比
				center: [104.3, 35.8], //设置可见中心坐标，以此坐标来放大和缩小
				zoom: 1.18, //放大级别
				itemStyle: {
					normal: {
						// 地图底色
						areaColor: color,
						borderColor: color,
						shadowBlur: 6,
						shadowColor: color,
						shadowOffsetX: -3,
						shadowOffsetY: 2,
					},
				}
			},
			series: series
		};

		this.chart = echarts.init(this.$el.querySelector(".map-box"));
		this.chart.setOption(mapBoxOption);
		this.$bus.$on(Events.RESIZE, this.onResize);
	}

	convertData(data) {
		let res = [];
		for (let i = 0; i < data.length; i++) {
			let dataItem = data[i];
			let fromCoord = this.geoCoordMap[dataItem[0].name];
			let toCoord = this.geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push([{
					coord: fromCoord
				}, {
					coord: toCoord
				}]);
			}
		}
		console.log(res);
		return res;
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
