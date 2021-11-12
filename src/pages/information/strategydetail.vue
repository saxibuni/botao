<template>
	<div class="strategy-detail">
		<banner :data="BannerData"></banner>
		<!-- 装修攻略详情 -->
		<div class="article">
			<h2 class="wow">
				温暖家
				<span>|</span>
				多面餐厅，一种舒适
			</h2>
			<div class="title-info wow">
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
					<i @click="wbJump"></i>
					<i>
						<div><img src="~assets/bg_home_footer_qa.jpg" alt="" /></div>
					</i>
					<i><a target="_black" href="tencent://Message/?Uin=2048395400&Menu=yes"></a></i>
				</div>
			</div>
			<p class="wow">
				客厅是一个家的名片,随着需求的变化,客厅也因此变得多元化。
				<br />
				所以,客厅的打开方式也可以是这样
			</p>
			<div class="img-box wow">
				<img src="~assets/bg_f3_pic1.jpg" alt="" />
			</div>
			<h3 class="wow">
				各种风格的客厅，当空间不被定义
			</h3>
			<p class="wow">
				客厅在整个家庭的利用率上非常的高,因此在客厅设计上,偏向于更加舒适的体验。
				<br />
				避免家装“被风格化”,每一种风格都是对生活方式的新解读。
			</p>
			<h3 class="wow">新中式</h3>
			<h3 class="wow">NEW CHINESE STYLE</h3>
			<p class="wow">
				业主是六十多岁的老夫妇,生活阅历丰富,喜欢偏沉稳的风格。
				<br />
				新中式风格则成为本案的设计主体,基于两人的生活需求之上,优化总体空间布局。
			</p>
			<p class="wow">
				大道至简,祛除浓墨重彩,新中式,亦是传承,亦是创新。
				<br />
				设计师为了增加空间的文化底蕴,整体空间中性基调渲染,通过大理石、水墨画连贯空间,
				<br />
				彰显国风文化的典雅别致。
			</p>
			<div class="img-box mb146 wow">
				<img src="~assets/bg_f3_pic2.jpg" alt="" />
			</div>
			<p class="wow">
				由于业主对北欧和现代的混搭风格情有独钟,所以本案设计师摒弃繁琐的裝饰,
				<br />
				倾向简单&实用的设计,强调空间舒适性,赋予空间大自然的活力与风情魅力。
			</p>
			<p class="wow">
				整体的设计以木材为主,保留木材原有的纹理,大理石点缀,刚柔并济,
				<br />
				勾勒出温暖惬意的家居情调。
			</p>
		</div>
		<div class="recommended-news">
			<h2 class="wow">推荐新闻</h2>
			<h3 class="wow">Recommended news</h3>
			<div class="item-list">
				<div class="item wow" v-for="(v, i) in newsList" :key="i" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
					<div class="img-box">
						<img :src="v.imgUrl" alt="" />
					</div>
					<div class="bottom">
						<div class="date">{{ v.date }}</div>
						<div class="title">{{ v.title }}</div>
						<div class="text">{{ v.text }}</div>
						<div class="more" @mouseenter="addClass(i, '.item-list')" @mouseleave="removeClass(i, '.item-list')">
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
html {
	.strategy-detail {
		h2,
		p,
		h3,
		.title-info {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.article {
			.img-box {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.item-list {
			.item {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
}
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
					background: url(~assets/icons/iconlist.png) no-repeat;
					&:nth-child(1) {
						position: relative;
						width: 17px;
						height: 17px;
						background: url(~assets/icons/ic_f3_part2_share.png) no-repeat;
						// background-size: 100%;
					}
					&:nth-child(2) {
						position: relative;
						width: 28px;
						height: 25px;
						margin-left: 40px;
						background-position: 48% 20%;
						transition: all 0.3s;
						&:hover {
							background-position: 48% 80%;
						}
					}
					&:nth-child(3) {
						position: relative;
						width: 28px;
						height: 25px;
						background-position: 9% 19%;
						transition: all 0.3s;
						> div {
							transition: opacity 0.5s, transform 0.5s;
							opacity: 0;
							pointer-events: none;
							background: #fff;
							position: absolute;
							left: 50%;
							transform: translateX(-50%) translateY(-10%);
							bottom: 150%;
							width: 150px;
							height: 150px;
							img {
								width: 150px;
								height: 150px;
							}
						}
						&:hover {
							background-position: 9% 80%;
							> div {
								opacity: 1;
								transform: translateX(-50%) translateX(0);
							}
						}
					}
					&:nth-child(4) {
						display: flex;
						width: 28px;
						height: 25px;
						background-position: 83% 20%;
						transition: all .3s;
						a{
							width: 100%;
						}
						&:hover{
							background-position: 83% 80%;
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
							transform: scale($imgScale);
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
						transition: all 0.3s;
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
				&.hover {
					.img-box {
						img {
							transform: scale($imgScale) !important;
						}
					}
					.title {
						color: #ed5300 !important;
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
