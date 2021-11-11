<template>
	<div class="strategy-detail">
		<banner :data="BannerData"></banner>
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
				客厅是一个家的名片,随着需求的变化,客厅也因此变得多元化。
				<br />
				所以,客厅的打开方式也可以是这样
			</p>
			<div class="img-box">
				<img src="~assets/bg_f3_pic1.jpg" alt="" />
			</div>
			<h3>
				各种风格的客厅，当空间不被定义
			</h3>
			<p>
				客厅在整个家庭的利用率上非常的高,因此在客厅设计上,偏向于更加舒适的体验。
				<br />
				避免家装“被风格化”,每一种风格都是对生活方式的新解读。
			</p>
			<h3>新中式</h3>
			<h3>NEW CHINESE STYLE</h3>
			<p>
				业主是六十多岁的老夫妇,生活阅历丰富,喜欢偏沉稳的风格。
				<br />
				新中式风格则成为本案的设计主体,基于两人的生活需求之上,优化总体空间布局。
			</p>
			<p>
				大道至简,祛除浓墨重彩,新中式,亦是传承,亦是创新。
				<br />
				设计师为了增加空间的文化底蕴,整体空间中性基调渲染,通过大理石、水墨画连贯空间,
				<br />
				彰显国风文化的典雅别致。
			</p>
			<div class="img-box mb146">
				<img src="~assets/bg_f3_pic2.jpg" alt="" />
			</div>
			<p>
				由于业主对北欧和现代的混搭风格情有独钟,所以本案设计师摒弃繁琐的裝饰,
				<br />
				倾向简单&实用的设计,强调空间舒适性,赋予空间大自然的活力与风情魅力。
			</p>
			<p>
				整体的设计以木材为主,保留木材原有的纹理,大理石点缀,刚柔并济,
				<br />
				勾勒出温暖惬意的家居情调。
			</p>
		</div>
		<div class="recommended-news">
			<h2>推荐新闻</h2>
			<h3>Recommended news</h3>
			<div class="item-list">
				<div class="item" v-for="(v, i) in newsList" :key="i">
					<div class="img-box">
						<img :src="v.imgUrl" alt="" />
					</div>
					<div class="bottom">
						<div class="date">{{ v.date }}</div>
						<div class="title">{{ v.title }}</div>
						<div class="text">{{ v.text }}</div>
						<div class="more">
							More
							<span></span>
						</div>
					</div>
				</div>
			</div>
			<Button :text="'更多新闻'"></Button>
		</div>
	</div>
</template>

<script lang="ts">
import StrategyDetail from './strategydetail';
export default StrategyDetail;
</script>

<style lang="scss">
.strategy-detail {
	box-sizing: border-box;
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
			align-items: center;
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
					margin-right: 20px;
					width: 20px;
					height: 20px;
					background: url(~assets/icons/ic_f3_part2_time.png) no-repeat;
					background-size: 100%;
					&:nth-of-type(2) {
						width: 24px;
						height: 14px;
						background-image: url(~assets/icons/ic_f3_part2_eye.png);
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
						background: url(~assets/icons/ic_f3_part2_share.png) no-repeat;
						background-size: 100%;
					}
					&:nth-child(2) {
						width: 20px;
						height: 18px;
						margin-left: 40px;
						background-size: 100%;
						&:hover {
							background-image: url(~assets/icons/ic_home_footer_weibo2.png);
						}
					}
					&:nth-child(3) {
						width: 20px;
						height: 17px;
						background: url(~assets/icons/ic_home_footer_wechat1.png) no-repeat;
						background-size: 100%;
					}
					&:nth-child(4) {
						width: 16px;
						height: 18px;
						background: url(~assets/icons/ic_f3_part2_qq.png) no-repeat;
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
			&:nth-of-type(2) {
				margin-top: 56px;
				margin-bottom: 170px;
			}
			&:nth-of-type(3) {
				margin-top: 42px;
				line-height: 40px;
				margin-bottom: 0;
			}
			&:nth-of-type(5) {
				margin-top: 0px;
				margin-bottom: 0;
			}
			&:nth-of-type(6) {
				margin-top: 42px;
				margin-bottom: 236px;
			}
			&:nth-of-type(5),
			&:nth-of-type(6) {
				line-height: 40px;
			}
		}
		.img-box {
			margin-top: 100px;
			margin-bottom: 102px;
			img {
				width: 1400px;
				height: 708px;
			}
		}
		.mb146 {
			margin-bottom: 144px;
		}
		h3 {
			font-size: 32px;
			font-weight: 400;
			color: #000000;
			line-height: 1;
			&:nth-of-type(2) {
				margin-bottom: 16px;
			}
			&:nth-of-type(3) {
				font-size: 22px;
				font-family: Athene;
			}
		}
	}
	.recommended-news {
		padding: 100px 80px 129px;
		background-color: #f6f6f6;
		h2 {
			font-size: 48px;
			line-height: 1;
			color: #000000;
		}
		h3 {
			margin-top: 24px;
			font-size: 24px;
			font-family: Athene;
			color: #000000;
			line-height: 1;
		}
		.item-list {
			margin-top: 110px;
			margin-bottom: 72px;
			display: flex;
			.item {
				width: 570px;
				.img-box {
					overflow: hidden;
					height: 362px;
					img {
						vertical-align: bottom;
						width: 100%;
						height: 100%;
						transition: all 0.3s;
						&:hover {
							transform: scale(1.1);
						}
					}
				}
				.bottom {
					padding: 41px 33px 50px 39px;
					background-color: #fff;
					.date {
						font-size: 16px;
						color: #888888;
						line-height: 1;
					}
					.title {
						margin-top: 14px;
						font-size: 26px;
						color: #000000;
						line-height: 1;
					}
					.text {
						margin-top: 26px;
						width: 488px;
						font-size: 18px;
						color: #666666;
						line-height: 30px;
					}
					.more {
						margin-top: 56px;
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
							transform: rotate(-45deg) scale(1.1);
						}
					}
				}
			}
			> div {
				&:nth-of-type(2) {
					margin: 0 25px;
				}
			}
		}
	}
}
</style>
