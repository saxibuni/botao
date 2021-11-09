<template>
	<div class="banner" v-if="data">
		<img :src="data.imgUrl" alt="" />
		<img src="~assets/bg_b1_banner_mask.png" alt="" />
		<div class="banner-text">
			<h3>{{ data.cn }}</h3>
			<p>{{ data.en }}</p>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class banner extends Vue {
	@Prop({
		required: false,
		type: Object,
		default: () => {}
	})
	data!: any;
}
</script>
<style lang="scss" scoped>
.banner {
	position: relative;
	height: 750px;
	img {
		width: 100%;
		height: 750px;
		&:nth-of-type(2) {
			position: absolute;
			left: 0;
			top: 0;
		}
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
