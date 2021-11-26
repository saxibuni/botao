<template>
	<div class="information">
		<Banner  :data="bannerData"></Banner>
		<router-view />
	</div>
</template>

<script lang="ts">
import Infomation from './index';
export default Infomation;
</script>

<style lang="scss">
.information {
	box-sizing: border-box;
	img {
		vertical-align: bottom;
	}
	.controal-box {
		height: 198px;
	}
	.controals {
		position: relative;
		height: 100%;
		.swiper-pagination {
			position: absolute;
			top: 50px;
			left: 50%;
			transform: translateX(-50%);
			> span {
				margin: 10px;
				width: 15px;
				height: 15px;
				border-radius: 0;
				background-color: #fff;
				border: 1px solid #ccc;
				&.swiper-pagination-bullet-active {
					border: 1px solid #ed5400;
				}
			}
		}
	}
	.swiper-pre,
	.swiper-next {
		position: absolute;
		z-index: 11;
		top: 62px;
		width: 13px;
		height: 26px;
		cursor: pointer;
		transition: all 0.3s;
	}
	.swiper-pre {
		left: 80px;
		background: url(~assets/icons/ic_f4_left1.png) no-repeat;
		background-size: 100%;
		&:hover {
			background-image: url(~assets/icons/ic_f4_left2.png);
		}
	}
	.swiper-next {
		right: 80px;
		background: url(~assets/icons/ic_f4_right1.png) no-repeat;
		background-size: 100%;
		&:hover {
			background-image: url(~assets/icons/ic_f4_right2.png);
		}
	}
}
</style>
