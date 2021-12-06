import { Vue, Component } from 'vue-property-decorator';

@Component
export default class BaseComp extends Vue {
	web_url = this.$store.state.footData.web_url;

	clearImgSrc(sytax: string) {
		if (!this.$el) return;

		let container = this.$el.querySelector(sytax);
		if (!container) return;

		let imgs = container.querySelectorAll('img');
		for (let i = 0, len = imgs.length; i < len; i++) {
			if (imgs[i].src.startsWith(this.web_url))
				imgs[i].src = "";
		}
	}
}
