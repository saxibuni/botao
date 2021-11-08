<template>
	<div class="strategy-list">
		<!-- 装修攻略列表 -->
		<div class="decoration-strategy">
			<h2>装修攻略</h2>
			<h3>DECORATION STRATIEGY</h3>
			<div class="strategy-box">
				<div class="strategy-left">
					<div class="img-box">
						<img src="~assets/bg_home_banner1.jpg" />
					</div>
					<div class="info-box">
						<div class="date">2021,Auguset,10</div>
						<h4 class="title">看见这些等，邮箱这等这等玩家课题了！</h4>
						<p>优秀的灯光照明，赋予视觉上舒适体验瞬间优秀的灯光照明，赋予视觉上舒适体验瞬间，优秀的灯光照明，赋予视觉上舒适体验瞬间，优秀的灯光照明，赋予视觉上舒适体验瞬间。</p>
						<div class="more">
							More
							<span></span>
						</div>
					</div>
				</div>
				<ul class="strategy-right">
					<li v-for="n in 3" :key="n">
						<div class="img-box">
							<img src="~assets/bg_home_banner2.jpg" />
						</div>
						<div class="info-box">
							<div class="date">2021,Auguset,10</div>
							<h4 class="title">看见这些等，邮箱这等这！</h4>
							<p>优秀的灯光照明，赋予视觉上舒适体验瞬间优秀的灯赋予视觉上舒适体验瞬间。</p>
							<div class="more">
								More
								<span></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<ul class="list">
			<li v-for="n in 6" :key="n">
				<div class="img-box">
					<img src="~assets/bg_home_banner2.jpg" alt="" />
				</div>
				<div class="info-box">
					<div class="date">2021,Auguset,10</div>
					<h4 class="title">看见这些等，邮箱这等这！</h4>
					<p>优秀的灯光照明，的灯赋上觉上舒适体验瞬间。</p>
					<div class="more">
						More
						<span></span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import StrategyList from './strategylist';
export default StrategyList;
</script>

<style lang="scss">
.strategy-list {
	padding-top: 112px;
	font-size: 16px;
	@mixin title {
		h2,
		h3 {
			font-weight: 700;
			font-size: 36px;
			text-align: center;
		}
		h2 {
			margin-top: 100px;
			line-height: 1;
		}
		h3 {
			margin-top: 25px;
			margin-bottom: 107px;
			line-height: 1;
		}
	}
	@mixin info {
		h4 {
			margin-top: 15px;
			font-size: 28px;
			color: #ed5300;
			font-weight: 700;
		}
		p {
			font-size: 18px;
			margin: 20px 0;
		}
		.more {
			font-size: 18px;
			font-weight: 700;
			cursor: pointer;
			span {
				top: 50%;
				margin-left: 10px;
				display: inline-block;
				width: 10px;
				height: 10px;
				border-bottom: 1px solid #ed5300;
				border-right: 1px solid #ed5300;
				transform: rotate(-45deg);
				transition: all.3s;
			}
			&:hover span {
				margin-left: 20px;
				transform: rotate(-45deg) scale(1.2);
			}
		}
	}
	@mixin bigImg {
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			transition: all 0.3s;
		}
		&:hover img {
			transform: scale(1.08);
		}
	}
	.decoration-strategy {
		@include title();
		padding: 0 80px 100px 80px;
		overflow: hidden;
		.strategy-box {
			display: flex;
			.strategy-left {
				margin-right: 40px;
				flex: 1;
				.img-box {
					@include bigImg();
					height: 544px;
				}
				.info-box {
					padding: 45px;
					background-color: #112033;
					color: #fff;
					@include info();
				}
			}
			.strategy-right {
				flex: 1;
				box-sizing: border-box;
				li {
					display: flex;
					.img-box {
						@include bigImg();
						flex: 1;
						margin-right: 42px;
						width: 365px;
						height: 232px;
					}
					.info-box {
						flex: 1;
						color: #8e8e8e;
						@include info();
						h4 {
							color: #000;
						}
						.more {
							margin-top: 40px;
							color: #000;
						}
					}
					&:not(:last-child) {
						padding-bottom: 30px;
						border-bottom: 2px solid #ed5300;
					}
					&:nth-child(2) {
						margin: 29px 0;
					}
				}
			}
		}
	}
	.list {
		display: flex;
		flex-wrap: wrap;
		padding: 100px 80px;
		background: #f6f6f6;
		justify-content: space-between;
		li {
			background-color: #fff;
			.img-box {
				width: 566px;
				height: 360px;
				@include bigImg();
			}
			@include info();
			.info-box {
				box-sizing: border-box;
				padding: 50px;
				width: 100%;
			}
			&:nth-child(n + 4) {
				margin-top: 50px;
			}
		}
	}
}
</style>
