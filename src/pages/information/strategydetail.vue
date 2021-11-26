<template>
	<div class="strategy-detail">
		<!-- 装修攻略详情 -->
		<div class="article">
			<h2 class="wow">
				{{ archivesInfo.title }}
			</h2>
			<div class="title-info wow">
				<div class="left">
					<i></i>
					时间 :
					<span>{{ archivesInfo.show_time | formatTime }}</span>
					<i></i>
					浏览量 :
					<span>{{ archivesInfo.click }}</span>
				</div>
				<div class="right">
					<i></i>
					分享 :
					<div class="wx">
						<div>
							<img src="~assets/bg_home_footer_qa.jpg" v-if="newsList[0]" alt="" />
						</div>
						<i></i>
						<i></i>
					</div>
					<div class="wb">
						<i @click="wbJump()"></i>
						<i @click="wbJump()"></i>
					</div>
					<div class="qq">
						<i @click="openQQ"></i>
						<i @click="openQQ"></i>
					</div>
				</div>
			</div>
			<div v-html="archivesInfo.content"></div>
		</div>
		<div class="recommended-news">
			<h2 class="wow">推荐新闻</h2>
			<h3 class="wow">RECOMMENDED NEWS</h3>
			<div class="item-list" v-if="newsList[0]">
				<div class="item wow" v-for="(v, i) in newsList" :key="i" v-show="i < newListFlag" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
					<div class="img-box" @click="jump(v.aid)">
						<img :src="$store.state.footData.web_url + v.img" alt="" />
					</div>
					<div class="bottom">
						<div class="date">{{ v.show_time | formatTime2 }}</div>
						<div class="title">{{ v.title }}</div>
						<div class="text">{{ v.desc }}</div>
						<div class="more" @click="$router.push({ name: 'strategy-list' })" @mouseenter="addClass(i, '.item-list')" @mouseleave="removeClass(i, '.item-list')">
							More
							<span></span>
						</div>
					</div>
				</div>
			</div>
			<Button @click.native="getMore" v-show="newListFlag - newsList.length < 0" :text="'更多新闻'"></Button>
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
		.article,
		.recommended-news {
			h2,
			p,
			h3,
			.title-info {
				opacity: 0;
				animation: slide-up-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
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
					width: 26px;
					height: 26px;
					background: url('~assets/icons/iconlist.png') no-repeat;
					background-position: -11px -11px;
					cursor: pointer;
					position: relative;
					transition: 0.3s;
					&:nth-child(1) {
						margin-right: 10px;
						background-image: url(~assets/icons/ic_f3_part2_share.png);
						background-position: center;
					}
					&:nth-child(2) {
						background-position: -41px -11px;
					}
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
				}
				.wx {
					margin-left: 50px;
					position: relative;
					width: 26px;
					height: 26px;
					&:hover {
						background-position-y: -43px;
						> div {
							opacity: 1;
							transform: translateX(-50%) translateX(0);
						}
					}
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
					i {
						position: absolute;
						left: 0;
						margin-left: 0;
						top: 0px;

						background: url('~assets/icons/iconlist.png') no-repeat;
						background-position: -11px -11px;
						// background-size: 26px 26px;
						&:nth-last-of-type(2) {
							opacity: 0;
							z-index: 11;
							background-position: -11px -43px;
						}
					}
					&:hover i:nth-last-of-type(2) {
						opacity: 1 !important;
					}
				}
				.wb {
					position: relative;
					width: 26px;
					height: 26px;
					margin: 0 20px;
					i {
						position: absolute;
						top: 0;
						left: 0;
						background: url('~assets/icons/iconlist.png') no-repeat;
						background-position: -41px -11px;
						&:nth-last-of-type(2) {
							opacity: 0;
							z-index: 11;
							background-position: -41px -43px;
						}
					}
					&:hover i:nth-last-of-type(2) {
						opacity: 1 !important;
					}
				}
				.qq {
					position: relative;
					width: 26px;
					height: 26px;
					i {
						position: absolute;
						top: 0;
						left: 0;
						background: url('~assets/icons/iconlist.png') no-repeat;
						background-position: -80px -11px;
						&:nth-last-of-type(2) {
							opacity: 0;
							z-index: 11;
							background-position: -80px -43px;
						}
					}
					&:hover i:nth-last-of-type(2) {
						opacity: 1 !important;
					}
				}
			}
		}
		p {
			margin-top: 60px;
			margin-bottom: 111px;
			text-align: center;
			line-height: 44px;
			font-size: 22px;
			font-weight: 400;
			color: #666666;
			&:first-of-type {
				margin-top: 138px;
			}
			&:nth-of-type(2) {
				margin-top: 56px;
				margin-bottom: 187px !important;
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
			font-weight: 600;
			color: #000000;
			line-height: 1;
			&:nth-of-type(2) {
				margin-bottom: 16px;
			}
			&:nth-of-type(3) {
				font-weight: 400;
				font-size: 22px;
				font-family: Athene;
			}
		}
	}
	.recommended-news {
		padding: 100px 70px 129px;
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
			flex-wrap: wrap;
			justify-content: space-between;
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
						cursor: pointer;
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
					&:hover .title {
						color: #ed5300;
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
				&:not(:nth-last-child(-n + 3)) {
					margin-bottom: 30px;
				}
			}
			// > div {
			// 	&:nth-of-type(2) {
			// 		margin: 0 25px;
			// 	}
			// }
		}
	}
}
</style>
