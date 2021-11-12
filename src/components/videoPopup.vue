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
				top: -110px;
				right: 0;
				width: 90px;
				height: 90px;
				border-radius: 50%;
				background-color:#ed5400;
				cursor: pointer;
				background-image: url(~assets/icons/ic_home_popup_close2.png);
				background-repeat: no-repeat;
				background-position: center;
				transition: all .3s;
				&:hover{
					background-color: #fff;
					background-image: url(~assets/icons/ic_home_menu_close.png);
				}
			}
		}
}
</style>
