<template>
	<div class="banner banner-wraps">
		<template v-if="data.litpic">
			<img :src="$store.state.footData.web_url + data.litpic" alt="" />
			<div class="banner-text" v-if="forceRefresh">
				<h3>{{ data.title }}</h3>
				<p v-if="data.etitle">{{ data.etitle.toUpperCase() }}</p>
			</div>
		</template>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);

@Component
export default class banner extends Vue {
	@Prop(Object) data!: any;
	forceRefresh: boolean = true;

	@Watch('data')
	onDataChange() {
		this.forceRefresh = false;
		this.$nextTick(() => {
			this.forceRefresh = true;
			this.$nextTick(() => {
				this.initTextChars();
			})
		});
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

	onCharsEnter() {
		let slide = document.querySelector('.banner-wraps');
		let chars = slide.querySelectorAll('.char');
		gsap.timeline().fromTo(
			chars,
			{
				duration: 1,
				rotate: -10,
				y: 'random(100, 200)',
				ease: 'power3',
				opacity: 0
			},
			{
				opacity: 1,
				rotate: 0,
				y: 0
			}
		);
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
