import { Vue, Component } from 'vue-property-decorator';
let echarts = require('echarts/lib/echarts');
require("echarts/extension/bmap/bmap.js");
require("root/libs/shanghai.js");


@Component
export default class ShangHaiMap extends Vue {
	chart = null;

}
