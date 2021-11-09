<template>
	<div class="button-wrap">
		<div class="btn">{{ text }}</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class aboutInstructor extends Vue {
	@Prop({
		required: false,
		type: String,
		default: ''
	})
	text!: any;
}
</script>

<style scoped lang="scss">
.button-wrap {
	width: 100%;
	.btn {
		width: 170px;
		height: 53px;
		background: #ed5400;
		font-size: 18px;
		font-family: AlibabaPuHuiTiR;
		font-weight: 400;
		color: #ffffff;
		line-height: 53px;
		text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
		margin: 0 auto;
		cursor: pointer;
		position: relative;
		text-align: center;
		&::after,
		&::before {
			content: '';
			position: absolute;
			border: 2px solid #ffffff;
			width: 8px;
			height: 8px;
		}
		&::after {
			left: 4px;
			top: 4px;
			border-right: none;
			border-bottom: none;
		}
		&::before {
			right: 4px;
			bottom: 4px;
			border-top: none;
			border-left: none;
		}
	}
}
</style>
