import { Vue, Component } from 'vue-property-decorator';

@Component({
	components: {
	}
})
export default class Infomation extends Vue {
mounted() {
	this.restartWow()
}
}
