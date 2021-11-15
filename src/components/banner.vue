<template>
	<div class="banner banner-wraps" v-if="data">
		<img :src="data.imgUrl" alt="" />
		<div class="banner-text">
			<h3>{{ data.cn }}</h3>
			<p>{{ data.en }}</p>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

@Component
export default class banner extends Vue {
	@Prop({
		required: false,
		type: Object,
		default: () => {}
	})
	data!: any;
	mounted() {
		this.initTextChars();
	}
	initTextChars() {
		let textContents = this.$el.querySelectorAll<HTMLElement>('.banner-text');
		textContents.forEach(item => {
			new SplitText(item, {
				charsClass: 'char',
				type: 'chars'
			}).chars;
		});
		this.onCharsEnter();
	}
	onCharsEnter(isInit: boolean = false) {
		let slide = document.querySelector('.banner-wraps')
		let chars = slide.querySelectorAll('.char');
		gsap.timeline()
			.fromTo(chars, {
				duration: 1,
				rotate: -10,
				y: "random(100, 200)",
				ease: "power3",
				opacity: 0
			}, {
				opacity: 1,
				rotate: 0,
				y: 0
			});
	}
}
</script>
<style lang="scss" scoped>
.banner {
	position: relative;
	height: 750px;
	img {
		width: 100%;
		height: 750px;
	}
	.banner-text {
		position: absolute;
		top: 0;
		left: 50%;
		margin-top: 360px;
		transform: translateX(-50%);
		color: #fff;
		text-align: center;
		h3 {
			font-size: 62px;
			font-weight: 400;
			margin-bottom: 14px;
			letter-spacing: 2px;
		}
		p {
			font-size: 32px;
			font-family: Athene;
			font-weight: 400;
			letter-spacing: 5px;
		}
	}
}
</style>
