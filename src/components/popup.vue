<template>
	<div class="popup">
		<slot />
	</div>
</template>
<script lang="ts">
import { device } from 'root/utils';
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class popup extends Vue {
	created() {
		document.querySelector('body').setAttribute('class', 'over-hide' + (device.browser.ie ? 'ie' : ''));
	}
	destroyed() {
		document.querySelector('body').removeAttribute('class');
	}
}
</script>
<style scoped lang="scss">
.popup {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	&.slideFadeIn-enter,
	&.slideFadeIn-leave-to {
		background: rgba(0, 0, 0, 0);
		.body {
			transform: translateY(80px);
			opacity: 0;
		}
		.mask {
			opacity: 0;
		}
		.video-box {
			opacity: 0;
			transform: scale(0);
		}
		.img-box {
			opacity: 0;
			transform: translate(-50%, -50%) scale(0);
		}
	}
	&.slideFadeIn-enter-active,
	&.slideFadeIn-leave-active {
		transition: background 0.3s ease;
		.mask {
			transition: opacity 0.3s ease;
		}
		.body {
			transition: transform 0.3s ease, opacity 0.3s ease;
		}
		.video-box {
			transition: transform 0.3s ease, opacity 0.3s ease;
		}
		.img-box {
			transform: translate(-50%, -50%) scale(1.2);
			transition: transform 0.3s ease, opacity 0.3s ease;
		}
	}
	.mask {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.1);
		z-index: 999;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	.body {
		position: relative;
		z-index: 999;
		background: #ffffff;
		transform: translateY(0);
		width: 1050px;
		height: 500px;
		opacity: 1;
		.close {
			width: 18px;
			height: 18px;
			display: block;
			position: absolute;
			right: 40px;
			top: 40px;
			cursor: pointer;
			transition: 0.3s;
			&:hover {
				transform: rotate(-90deg);
			}
		}
	}
}
</style>
