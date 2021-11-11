<template>
  <transition name="slideDownward">
		<Popup class="dialog" v-if="$store.state.dialog.state!=0">
				<div class="hsycms-model-mask" ></div>
				<div class="hsycms-model" :class="$store.state.dialog.state==1?'hsycms-model-success':'hsycms-model-error'">

					<div class="hsycms-model-icon">

						<svg width="50" height="50" v-if="$store.state.dialog.state==1">
							<!-- 成功 -->
							<circle class="hsycms-alert-svgcircle" cx="25" cy="25" r="24" fill="none" stroke="#14d6a2" stroke-width="2"></circle>
							<polyline class="hsycms-alert-svggou" fill="none" stroke="#14d6a2" stroke-width="2.5" points="14,25 23,34 36,18" stroke-linecap="round" stroke-linejoin="round"></polyline>
						</svg>

						<svg width="50" height="50" v-if="$store.state.dialog.state==2">
							<!-- 失败 -->
							<circle class="hsycms-alert-svgcircle" cx="25" cy="25" r="24" fill="none" stroke="#f54655" stroke-width="2"></circle>
							<polyline class="hsycms-alert-svgca1" fill="none" stroke="#f54655" stroke-width="2.5" points="18,17 32,35" stroke-linecap="round" stroke-linejoin="round"></polyline>
							<polyline class="hsycms-alert-svgca2" fill="none" stroke="#f54655" stroke-width="2.5" points="18,35 32,17" stroke-linecap="round" stroke-linejoin="round"></polyline>
						</svg>

					</div>
					<div class="hsycms-model-text">{{$store.state.dialog.text}}</div>
				</div>
		</Popup>
	</transition>

</template>
<script lang="ts">
import { Vue, Component,Watch} from 'vue-property-decorator';
import Popup from './popup.vue';
@Component({
	components:{
		Popup
	}
})
export default class dialog extends Vue {
	time = null;
	@Watch('$store.state.dialog.state')
  dialogState() {
		clearTimeout(this.time);
    this.time = setTimeout(()=>{
			this.$store.state.dialog.state = 0
		},this.$store.state.dialog.time||3000);
  }
}
</script>

<style lang="scss" scoped>
.dialog {
		&.slideDownward-enter,
    &.slideDownward-leave-to {
        background: rgba(0, 0, 0, 0);
        .hsycms-model {
					  transform: scale(0);
        }
        .hsycms-model-mask {
            opacity: 0;
        }
    }

    &.slideDownward-enter-active,
    &.slideDownward-leave-active {
        transition: background .3s ease;
        .hsycms-model-mask {
            transition: opacity .3s ease;
        }
        .hsycms-model {
            transition: transform .3s ease;
        }
    }
	.hsycms-model-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10000;
	}
	.hsycms-model {
		position: fixed;
		z-index: 10001;
		left: 0;
		right: 0;
		margin: auto;
		top: 50%;
		transform-origin: center;
		max-width: 80%;
		max-height: 80%;
		background: #fff;
		border-radius: 5PX;
		overflow: hidden;
		margin-top: -43PX;
	}
	.hsycms-model.hsycms-model-success,
	.hsycms-model.hsycms-model-error {
		padding: 40PX 12PX;
		width: 240PX;
	}
	.hsycms-model .hsycms-model-text {
		font-size: 18px;
		text-align: center;
		color: #333;
		line-height: 23PX;
		padding: 0 20PX;
		opacity: 0;
		transform: translateY(10PX);
		animation: hsycms-alert-text 0.3s ease forwards;
		animation-delay: 0.4s;
	}

	.hsycms-model .hsycms-model-icon {
		padding-bottom: 12PX;
	}
	.hsycms-model .hsycms-model-icon svg {
		margin: 0 auto;
		display: block;
	}
	.hsycms-model.hsycms-model-success .hsycms-model-text,
	.hsycms-model.hsycms-model-error .hsycms-model-text {
		color: #14d6a2;
		padding: 0;
		opacity: 0;
		transform: translateY(10PX);
		animation: hsycms-alert-text 0.3s ease forwards;
		animation-delay: 0.9s;
	}
	.hsycms-model.hsycms-model-error .hsycms-model-text {
		color: #f54655;
	}
	.hsycms-model .hsycms-model-content {
		padding-top: 0;
		overflow: hidden auto;
		max-height: 80%;
		font-size: 14PX;
	}
	.hsycms-model .hsycms-model-btn {
		display: flex;
		align-items: center;
		border-top: 1PX solid #f1f1f1;
		justify-content: center;
		margin-top: 20PX;
		opacity: 0;
		animation: hsycms-alert-button 0.6s ease forwards;
		animation-delay: 0.6s;
	}
	.hsycms-model .hsycms-model-btn button {
		flex: 1;
		color: #999;
		cursor: pointer;
		border: 0;
		background: none;
		padding: 12PX;
	}
	.hsycms-model .hsycms-model-btn button:last-child {
		color: #fe5c42;
	}
	.hsycms-model .hsycms-model-btn button.cancel {
		border-right: 1PX solid #f1f1f1;
	}
	.hsycms-model .hsycms-model-btn button:active {
		opacity: 0.8;
	}

	@-webkit-keyframes hsycms-open {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@-webkit-keyframes hsycms-close {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		30% {
			transform: scale(1.05);
			opacity: 0.5;
		}
		100% {
			transform: scale(0.7);
			opacity: 0;
		}
	}

	.hsycms-alert-svgcircle {
		stroke-dasharray: 200;
		stroke-dashoffset: 200;
		animation: hsycms-alert-ruand 0.5s ease-in-out forwards;
	}

	.hsycms-alert-svggou {
		stroke-dasharray: 80;
		stroke-dashoffset: 80;
		animation: hsycms-alert-tick 0.6s ease-out forwards;
		animation-delay: 0.75s;
	}

	.hsycms-alert-svgca1 {
		stroke-dasharray: 80;
		stroke-dashoffset: 80;
		animation: hsycms-alert-tick 0.6s ease-out forwards;
		animation-delay: 0.75s;
	}

	.hsycms-alert-svgca2 {
		stroke-dasharray: 80;
		stroke-dashoffset: 80;
		animation: hsycms-alert-tick 0.6s ease-out forwards;
		animation-delay: 0.85s;
	}

	@keyframes hsycms-alert-ruand {
		form {
			stroke-dashoffset: 200;
		}
		to {
			stroke-dashoffset: 400;
		}
	}

	@keyframes hsycms-alert-tick {
		from {
			stroke-dashoffset: 80;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes hsycms-alert-text {
		from {
			transform: translateY(10PX);
			opacity: 0;
		}
		to {
			transform: translateY(0PX);
			opacity: 1;
		}
	}

	@keyframes hsycms-alert-button {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes hsycms-alert-load {
		0% {
			transform: translateY(0PX);
			opacity: 0;
		}
		50% {
			transform: translateY(-10PX);
			opacity: 1;
		}
		100% {
			transform: translateY(0PX);
			opacity: 0;
		}
	}
}
</style>
