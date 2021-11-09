<template>
	<div class="join-us">
		<div class="page1">
			<div class="left">
				<h2>
					人才理念—
					<br />
					任人唯贤有为有位
				</h2>
				<h4>Talent concept</h4>
			</div>
			<div class="right">
				<p>选贤举能，贤者必上进,能者有前途。波涛引进德才兼备的贤者，为每一位真正能为企业发展做出贡献的员工提供尽情发挥的舞台,个人的付出和收获、能力和地位必定成正比</p>
				<div class="btn">加入我们</div>
			</div>
		</div>
		<div class="swiper-box">
			<swiper :options="jsBannerOptions">
				<swiper-slide v-for="n in 5" :key="n">
					<div class="img-box">
						<img src="~assets/bg_home_banner2.jpg" alt="" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script lang="ts">
import JoinUs from './joinus';
export default JoinUs;
</script>

<style lang="scss">
.join-us {
	.page1 {
		display: flex;
		justify-content: space-between;
		padding: 120px 198px 0 196px;
		.left {
			h2 {
				font-size: 69px;
				color: #000000;
				line-height: 82px;
			}
			h4 {
				margin-top: 46px;
				font-size: 24px;
				font-family: Athene;
				color: #eb551c;
				line-height: 1;
			}
		}
		.right {
			p {
				margin-top: 55px;
				width: 570px;
				font-size: 20px;
				color: #666666;
				line-height: 40px;
			}
			.btn {
				margin-top: 82px;
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
	}
	.swiper-box {
		.swiper-container {
			overflow: visible !important;
		}
		.swiper-slide {
			transition: all 0.3s;
			overflow: inherit;
		}
		.swiper-slide-active {
			transform: scale(1.3);
			.img-box {
				position: relative;
				img {
					position: absolute;
					z-index: 12;
				}
			}
		}
		.img-box {
			position: relative;
			height: 484px;
			img {
				position: absolute;
				z-index: -1 !important;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
