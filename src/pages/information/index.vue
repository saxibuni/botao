<template>
	<div class="information">
		<Banner :data="BannerData" />
		<router-view />
	</div>
</template>

<script lang="ts">
import Infomation from './index';
export default Infomation;
</script>

<style lang="scss">
.information {
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
				border: 1px solid #dcdcdc;
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
		height: 13px;
		border-bottom: 2px solid #ccc;
		border-left: 2px solid #ccc;
		transform: rotate(45deg);
		cursor: pointer;
		transition: all 0.3s;
	}
	.swiper-pre {
		left: 80px;
		&:hover {
			border-color: #ed5400;
			transform: rotate(45deg) scale(1.3);
		}
	}
	.swiper-next {
		transform: rotate(-135deg);
		right: 80px;
		&:hover {
			border-color: #ed5400;
			transform: rotate(-135deg) scale(1.3);
		}
	}
	.btn {
			text-align: center;
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
