<template>
	<transition name="slideFadeIn">
		<Popup class="video-popup" v-if="videoPop.isPop" @click.native="show">
			<div class="mask"></div>
			<div class="video-box">
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
	components: {
		Popup
	}
})
export default class videoPopup extends Vue {
	@Prop({
		required: false,
		type: Object,
		default: ''
	})
	videoPop;
	show(e) {
		if (e.target.nodeName == 'VIDEO') return;
		this.videoPop.isPop = false;
	}
}
</script>
<style scoped lang="scss">
.video-popup {
	.video-box {
		position: relative;
		display: flex;
		z-index: 11111;
		opacity: 1;
		background-color: #000;
		video {
			width: 958px;
			height: 540px;
		}
		.close {
			position: absolute;
			z-index: 222222;
			top: -90px;
			right: -10px;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background-color: #ed5400;
			cursor: pointer;
			background-image: url(~assets/icons/ic_home_popup_close2.png);
			background-size: 40px 40px;
			background-repeat: no-repeat;
			background-position: center;
			transition: all 0.3s;
			transform: scale(0.6);
			&:hover {
				background-color: #fff;
				background-image: url(~assets/icons/ic_home_menu_close.png);
			}
		}
	}
}
</style>
