import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CaseListVr extends Vue {
	tabList=[{title:'风格',info:['轻奢/现代/港式','中式/新中式','欧式/法式/地中海/美式','日式/侘寂/工业风']},{title:'户型',info:['别墅','复式','大平层','工装']},{title:'面积',info:['200㎡以下','200㎡-500㎡以内','500㎡以上']}]
	caseList:[{imgUrl:''}]
}
