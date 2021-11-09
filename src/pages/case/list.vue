<template>
	<div class="case-list">
		<div class="title">
			<div class="left">
				<h3>
					<span>VR体验</span>
					沉浸式畅游理想家
				</h3>
				<p>TRAVEL TO YOUR IDEAL HOME</p>
			</div>
			<div class="right">
				<div class="search">
					<input type="text" />
					<i></i>
				</div>
				<p>
					热门搜索：
					<span>独栋别墅</span>
					<span>新中式</span>
					<span>法式</span>
				</p>
			</div>
		</div>
		<div class="tabs">
			<div class="tabsList" v-for="(item, index) in tabList" :key="index">
				<p>{{ item.title }}</p>
				<ul>
					<li>全部</li>
					<li v-for="(v, i) in item.info" :key="i">{{ v }}</li>
				</ul>
			</div>
		</div>
		<div class="swiper">
			<div class="content">
				<img src="~assets/bg_b1_part2_mask1.png" alt="" />
				<div class="text">
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
				</div>
			</div>
			<img src="~assets/bg_b1_part2_right.jpg" alt="" />
		</div>
		<div class="cases">
			<Cases v-for="i in 6" :key="i" />
		</div>
		<Pagination />
	</div>
</template>

<script lang="ts">
import CaseList from './list';
export default CaseList;
</script>

<style lang="scss">
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
				}
			}
			p {
				font-size: 16px;
				color: #999999;
				margin-top: 29px;
				span {
					color: #333333;
					margin-right: 20px;
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
			}
			ul {
				display: flex;
				li {
					margin-right: 20px;
					font-size: 18px;
					color: #666666;
					padding: 11px 24px;
					margin-right: 20px;
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
		> img {
		}
		.content {
			position: absolute;
			left: 0px;
			> img {
				position: relative;
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
			}
		}
	}
	.cases {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}
</style>
