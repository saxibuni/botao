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
			<div class="control">
				<div class="swiper-pre ju-pre"></div>
				<div class="swiper-next ju-next"></div>
			</div>
			<swiper :options="jsBannerOptions">
				<swiper-slide v-for="n in 5" :key="n">
					<div class="img-box">
						<img src="~assets/bg_home_banner2.jpg" alt="" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="xr">
			<div class="text-box">
				<h2>选人</h2>
				<h3>“有魂、有力、有激情”的三有新人</h3>
				<p>波涛是个充满无限可能的企业，而对于选用人才，坚持选用对自己的未来有明确目标和企图心的人才，梦想是目标、能力是支撑、激情是态度、准备是自信，波涛欢迎做好准备去迎接一切未知的挑战的人才</p>
				<div class="btn">加入我们</div>
			</div>
			<div class="img-box">
				<div class="img-box">
					<img src="~assets/bg_home_banner2.jpg" alt="" />
				</div>
			</div>
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
				margin: 0;
				margin-top: 92px;
			}
		}
	}
	.swiper-box {
		margin-top: 22px;
		.swiper-container {
			overflow: visible !important;
		}
		.swiper-slide {
			transition: all 0.3s;
			overflow: inherit;
		}
		.swiper-slide-active {
			transform: scale(1.2);
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
		.control {
			display: flex;
			margin-bottom: 162px;
			margin-left: 197px;
			> div {
				position: static;
				&:first-child {
					margin-right: 34px;
				}
			}
		}
	}
	.xr {
		display: flex;
		margin-top: 288px;
		padding: 0 196px;
		.text-box {
			h2 {
				font-size: 62px;
				color: #000000;
				line-height: 1;
			}
			h3 {
				font-size: 30px;
				color: #ea551d;
				line-height: 1;
			}
			p {
				width: 617px;
				font-size: 20px;
				color: #666666;
				line-height: 40px;
			}
		}
	}
}
</style>
