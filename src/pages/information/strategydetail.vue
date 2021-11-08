<template>
	<div class="strategy-detail">
		<!-- 装修攻略详情 -->
		<div class="article">
			<h2>
				温暖家
				<span>|</span>
				多面餐厅，一种舒适
			</h2>
			<div class="title-info">
				<div class="left">
					<i></i>
					时间 :
					<span>2021-09-14</span>
					<i></i>
					浏览量 :
					<span>5868</span>
				</div>
				<div class="right">
					<i></i>
					分享 :
					<i></i>
					<i></i>
					<i></i>
				</div>
			</div>
			<p>
			客厅是一个家的名片,随着需求的变化,客厅也因此变得多元化。<br/>
所以,客厅的打开方式也可以是这样
			</p>
			<div class="img-box">
				<img src="~assets/bg_home_banner2.jpg" alt="" />
			</div>
			<h3>
				各种风格的客厅，当空间不被定义
			</h3>
			<p>
				客厅是一个家的名片，随州需求的变化，客厅也英尺变得变化多样。
				<br />
				说以，客厅的打开方式也可以是这样
			</p>
			<h3>新中式</h3>
			<h3>NEW CHINESE STYLE</h3>
			<p>
				客厅是一个家的名片，随州需求的变化，客厅也英尺变得变化多样。
				<br />
				说以，客厅的打开方式也可以是这样
			</p>
			<p>
				客厅是一个家的名片，随州需求的变化，客厅也英尺变得变化多样。
				<br />
				说以，客厅的打开方式也可以是这样
			</p>
			<div class="img-box">
				<img src="~assets/bg_home_banner2.jpg" alt="" />
			</div>
			<p>
				客厅是一个家的名片，随州需求的变化，客厅也英尺变得变化多样。
				<br />
				说以，客厅的打开方式也可以是这样
			</p>
			<p>
				客厅是一个家的名片，随州需求的变化，客厅也英尺变得变化多样。
				<br />
				说以，客厅的打开方式也可以是这样
			</p>
		</div>
		<div class="recommended-news"></div>
	</div>
</template>

<script lang="ts">
import StrategyDetail from './strategydetail';
export default StrategyDetail;
</script>

<style lang="scss">
.strategy-detail {
	font-size: 18px;
	h2,
	h3 {
		text-align: center;
	}
	.article {
		padding: 100px 260px 0 260px;
		h2 {
			text-align: center;
			font-size: 46px;
			line-height: 1;
			color: #000;
		}
		.title-info {
			display: flex;
			justify-content: space-between;
			margin-top: 52px;
			height: 113px;
			border-top: 2px solid #ccc;
			border-bottom: 2px solid #ccc;
			color: #666;
			.left {
				display: flex;
				align-items: center;
				height: 100%;
				i {
					margin-right: 10px;
					width: 20px;
					height: 20px;
					background: url(~assets/icons/ic_clock.png) no-repeat;
					background-size: 100%;
					&:nth-of-type(2) {
						margin-left: 40px;
					}
				}
				span {
					margin-left: 10px;
					font-size: 16px;
					color: #666666;
				}
			}
			.right {
				display: flex;
				align-items: center;
				height: 100%;
				color: #666;
				font-size: 16px;
				i {
					margin: 0 10px;
					width: 18px;
					height: 18px;
					cursor: pointer;
					background: url(~assets/icons/ic_home_footer_weibo1.png) no-repeat;
					&:nth-child(1) {
						width: 17px;
						height: 17px;
						background: url(~assets/icons/ic_clock.png) no-repeat;
						background-size: 100%;
					}
					&:nth-child(2) {
						margin-left: 40px;
						background-size: 100%;
						&:hover {
							background-image: url(~assets/icons/ic_home_footer_weibo2.png);
						}
					}
					&:nth-child(3),
					&:nth-child(4) {
						background: url(~assets/icons/ic_home_footer_wechat1.png) no-repeat;
						background-size: 100%;
					}
					&:nth-child(3) {
						&:hover {
							background-image: url(~assets/icons/ic_home_footer_wechat2.png);
						}
					}
				}
			}
		}
		p {
			margin-top: 60px;
			margin-bottom: 111px;
			text-align: center;
			line-height: 36px;
			font-size: 22px;
			font-weight: 400;
			color: #666666;
			&:first-of-type {
				margin-top: 138px;
			}
		}
		.img-box {
			margin-top: 100px;
			margin-bottom: 100px;
			img {
				width: 1400px;
				height: 723px;
			}
		}
		h3 {
			font-size: 32px;
			font-weight: 400;
			color: #000000;
			line-height: 1;
		}
	}
}
</style>
