<template>
	<div class="case-list">
		<div class="title">
			<div class="left wow">
				<h3>
					<ICountUp :endVal="1000" :options="options1" ref="countup1"></ICountUp>
					经典案例 筑梦幸福家
				</h3>
				<p>BUILD A HAPPY HOME</p>
			</div>
			<div class="right wow">
				<div class="search">
					<input type="text" />
					<i></i>
				</div>
				<p>
					热门搜索：
					<span>独栋别墅</span>
					<span>新中式</span>
					<span>欧式</span>
				</p>
			</div>
		</div>
		<div class="tabs">
			<div class="tabsList wow" v-for="(item, index) in tabList" :key="index">
				<p>{{ item.title }}</p>
				<ul>
					<li v-for="(v, i) in item.info" :key="i" :class="activeIndex[index] == i ? 'active' : ''" @click="activeIndex.splice(index, 1, i)">{{ v }}</li>
				</ul>
			</div>
		</div>
		<div class="swiper">
			<div class="content">
				<img src="~assets/bg_b1_part2_mask1.png" alt="" />
				<div class="text wow">
					<p>锦华花园</p>
					<p>
						<span>新中式</span>
						<span>复式</span>
						<span>300㎡</span>
					</p>
					<p>利用现代家居装饰理念，将古典美学进行了全新的改良与优化使居住空间呈现出令人痴迷的风雅意境。</p>
					<div>
						<img src="~assets/bg_b1_part2_user0.png" alt="" />
						<div>
							<p>米航</p>
							<p>首席设计师</p>
						</div>
						<div>
							<p>从业年限</p>
							<p>15年</p>
						</div>
					</div>
					<Button :text="'找TA设计'" @click.native="$store.state.dialogDesign.design = true" />
				</div>
			</div>
			<swiper :options="bannerSwiperOptions1">
				<swiper-slide v-for="(item, i) in 3" :key="i">
					<img src="~assets/bg_b1_part2_right.jpg" alt="" />
					<img src="~assets/bg_b1_part2_mask2.png" alt="" />
				</swiper-slide>
			</swiper>
			<div class="swiper-pagination3"></div>
		</div>
		<div class="cases">
			<Cases v-for="i in 6" :key="i" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }" />
		</div>
		<Pagination :data="paginationData" />
	</div>
</template>

<script lang="ts">
import CaseList from './list';
export default CaseList;
</script>

<style lang="scss">
.case-list {
	max-width: 1920px;
	.title {
		.left {
			opacity: 0;
			animation: slide-left-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.right {
			opacity: 0;
			animation: slide-right-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.tabs {
		.tabsList {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.swiper {
		.content {
			.text {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
}
.case-list {
	padding: 0 80px;
	.title {
		display: flex;
		justify-content: space-between;
		margin-top: 90px;
		.left {
			h3 {
				font-family: Gilroy-Bold;
				font-size: 56px;
				font-weight: bold;
				span {
					color: #ed5400;
					display: inline-block;
					width: 172px;
				}
			}
			p {
				font-size: 30px;
				font-family: Athene;
				font-weight: 400;
				color: #010000;
				margin-top: 20px;
			}
		}
		.right {
			margin-top: 10px;
			.search {
				position: relative;
				width: 550px;
				height: 60px;
				input {
					position: absolute;
					top: 0;
					width: 550px;
					height: 60px;
					border: 1px solid #ed5400;
					outline: none;
					font-size: 20px;
					text-indent: 1em;
				}
				i {
					position: absolute;
					right: 30px;
					top: 50%;
					transform: translateY(-50%);
					width: 18px;
					height: 18px;
					background: url('~assets/icons/bg_b1_part1_search.png') no-repeat;
					background-size: 100% 100%;
					transition: transform 0.3s;
					&:hover {
						cursor: pointer;
						transform: scale(1.1) translateY(-50%);
					}
				}
			}
			p {
				font-size: 16px;
				color: #999999;
				margin-top: 29px;
				span {
					color: #333333;
					margin-right: 20px;
					// font-weight: 600;
					transition: color 0.3s;
					&:hover {
						cursor: pointer;
						color: #ed5400;
					}
				}
			}
		}
	}
	.tabs {
		margin-top: 50px;
		.tabsList {
			display: flex;
			height: 76px;
			align-items: center;
			border-bottom: 1px solid #ececec;
			p {
				font-size: 20px;
				font-weight: 400;
				color: #000000;
				margin-right: 40px;
				// font-weight: 600;
			}
			ul {
				display: flex;
				li {
					margin-right: 20px;
					font-size: 18px;
					color: #666666;
					padding: 11px 24px;
					margin-right: 20px;
					cursor: pointer;
					position: relative;
					transition: 0.3s;
					border: 1px solid transparent;
					&::after,
					&::before {
						content: '';
						position: absolute;
						border: 2px solid transparent;
						width: 0px;
						height: 0px;
						transition: border 0.3s, width 0.3s, height 0.3s;
						opacity: 0.35;
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
					&.active,
					&:hover {
						border: 1px solid #ed5400;
						color: #fff;
						background-color: #ed5400;
						&::after,
						&::before {
							border: 2px solid #fff;
							width: 11px;
							height: 11px;
						}
						&::after {
							border-right: none;
							border-bottom: none;
						}
						&::before {
							border-top: none;
							border-left: none;
						}
					}
				}
			}
		}
	}
	.swiper {
		margin: 80px 0;
		display: flex;
		justify-content: flex-end;
		width: 100%;
		position: relative;
		overflow: hidden;
		> img {
		}
		.content {
			position: absolute;
			z-index: 99;
			left: 0px;
			height: 740px;
			> img {
				position: relative;
				width: 618px;
				height: 740px;
			}
			.text {
				position: absolute;

				top: 130px;
				left: 90px;
				> p {
					color: #ffffff;
					&:nth-of-type(1) {
						font-size: 40px;
					}
					&:nth-of-type(2) {
						margin-top: 35px;
						font-size: 18px;
						display: flex;
						align-items: center;
						span {
							padding: 0 15px;
							border-right: 1px solid rgba(225, 225, 225, 0.3);
							height: 16px;
							display: flex;
							align-items: center;
							&:first-of-type {
								padding-left: 0;
							}
							&:last-of-type {
								padding-right: 0;
								border: none;
							}
						}
					}
					&:nth-of-type(3) {
						margin-top: 30px;
						font-size: 16px;
						color: #ffffff;
						line-height: 36px;
						opacity: 0.6;
						width: 424px;
					}
				}
				> div {
					display: flex;
					margin-top: 50px;
					align-items: center;
					color: #fff;
					> div {
						font-size: 20px;
						&:nth-of-type(1) {
							margin-left: 30px;
							p {
								&:nth-of-type(1) {
									font-size: 22px;
									margin-bottom: 15px;
								}
							}
						}
						&:nth-of-type(2) {
							margin-left: 65px;
							p {
								&:nth-of-type(1) {
									color: #999999;
									margin-bottom: 15px;
								}
							}
						}
					}
				}
				.button-wrap {
					margin-top: 60px;
					.btn {
						margin: 0;
						width: 150px;
						height: 53px;
						font-size: 18px;
						color: #ffffff;
						text-shadow: 0px 0px 30px rgba(183, 53, 19, 0.55);
					}
				}
			}
		}
		.swiper-container {
			width: 1220px;
			height: 740px;
			margin: 0;
			img {
				&:nth-of-type(2) {
					position: absolute;
					bottom: 0;
					left: 0;
				}
			}
		}
		.swiper-pagination3 {
			position: absolute;
			z-index: 99;
			left: 1553px;
			bottom: 60px;
			display: flex;
			.swiper-pagination-bullet {
				font-family: Gilroy;
				width: 50px;
				height: 50px;
				outline: none;
				background: transparent;
				border: 2px solid rgba(255, 255, 255, 0.3);
				color: rgba(255, 255, 255, 0.5);
				font-size: 16px;
				line-height: 50px;
				text-align: center;
				cursor: pointer;
				opacity: 1;
				&.swiper-pagination-bullet-active {
					border: none;
					color: rgba(255, 255, 255, 1);
					position: relative;
					&::after {
						content: '';
						background: url('~assets/icons/bg_home_b5_half.png') no-repeat;
						background-size: 100% 100%;
						position: absolute;
						top: 0;
						left: 0;
						width: 50px;
						height: 50px;
					}
				}
			}
		}
	}
	.cases {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.pagination-box {
		margin: 40px 0 100px 0;
	}
}
</style>
