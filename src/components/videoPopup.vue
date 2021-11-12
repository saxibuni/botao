<template>
	<transition name="slideFadeIn">
		<Popup class="video-popup" v-if="videoPop.isPop" @click.native="show">
				<div class="mask"></div>
				<div class="img-box">
					<video controls preload="true">
						<source :src="'./botao.mp4'" type="video/mp4" />
					</video>
					<div class="close"></div>
				</div>
		</Popup>
	</transition>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Popup from './popup.vue';
import Button from './button.vue';

@Component({
	components:{
		Popup,
	}
})
export default class videoPopup extends Vue {
	@Prop({
		required: false,
		type: Object,
		default: ''
	})videoPop;
	show(e) {
		if (e.target.nodeName == 'VIDEO') return;
		this.videoPop.isPop = false;
	}
}
</script>
<style scoped lang="scss">
.video-popup {
		.img-box {
			position: absolute;
			z-index: 11111;
			video{
				width: 100%;
			}
			.close {
				position: absolute;
				top: -40px;
				right: 0;
				width: 30px;
				height: 30px;
				border-radius: 50%;
				background-color: #878787;
				cursor: pointer;
				&::after,
				&::before {
					position: absolute;
					content: '';
					top: 15px;
					left: 6px;
					width: 20px;
					height: 2px;
					background-color: #525151;
				}
				&::after {
					transform: rotate(45deg);
				}
				&::before {
					transform: rotate(-45deg);
				}
			}
		}
}
</style>
