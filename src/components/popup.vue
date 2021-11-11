<template>
	<div class="popup">
		<slot />
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class popup extends Vue {
	created() {
		document.querySelector('body').setAttribute('class', 'over-hide')
	}
	destroyed() {
		document.querySelector('body').removeAttribute('class');
	}
}
</script>
<style scoped lang="scss">
	.popup{
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 999;
			&.slideFadeIn-enter,
			&.slideFadeIn-leave-to {
					background: rgba(0, 0, 0, 0);
					.body,.img-box {
							transform: translateY(80px);
							opacity: 0;
					}
					.mask {
							opacity: 0;
					}
			}
			&.slideFadeIn-enter-active,
			&.slideFadeIn-leave-active {
					transition: background .3s ease;
					.mask {
							transition: opacity .3s ease;
					}
					.body,.img-box {
							transition: transform .3s ease, opacity .3s ease;
					}
			}
		  .mask{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(0,0,0,.5);
				z-index: 999;
			}
			display: flex;
			align-items: center;
			justify-content: center;
			.body{
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
