<template>
	<div class="case-listvr">
		<div class="title wow">
			<div class="left">
				<h3>
					<span>VR体验</span>
					沉浸式畅游理想家
				</h3>
				<p>TRAVEL TO YOUR IDEAL HOME</p>
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
					<span>法式</span>
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
		<div class="list">
			<ul>
				<li v-for="i in 6" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
					<a href="https://vr.justeasy.cn/view/aaf955dd50e59970-1598584621.html" target="_blank">
						<div class="imgBox">
							<img src="~assets/bg_b3_part2_vr1.jpg" alt="" />
						</div>
						<div class="content">
							<div class="left">
								<p>上海东方颐城</p>
								<p>
									<span>现代风格</span>
									<span>独栋别墅</span>
									<span>120㎡</span>
								</p>
							</div>
							<div class="right">
								<Button :text="'VR全景体验'" />
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<Pagination :data="paginationData" />
	</div>
</template>

<script lang="ts">
import CaseListVr from './listvr';
export default CaseListVr;
</script>

<style lang="scss">
.case-listvr {
	> .title {
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
	> .tabs {
		.tabsList {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	> .list {
		ul {
			li {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
}
.case-listvr {
	padding: 0 80px;
	.title {
		display: flex;
		justify-content: space-between;
		margin-top: 90px;
		.left {
			h3 {
				font-family: Gilroy-Bold;
				font-size: 56px;
				font-weight: 400;
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
	.list {
		margin-top: 80px;
		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			li {
				margin-bottom: 60px;
				cursor: pointer;
				&:hover {
					.left {
						p {
							&:nth-of-type(1) {
								color: #eb551d !important;
							}
						}
					}
				}
				a {
					text-decoration: none;
				}
				.imgBox {
					width: 855px;
					height: 520px;
					overflow: hidden;
				}
				.content {
					display: flex;
					justify-content: space-between;
					.left {
						p {
							&:nth-of-type(1) {
								font-size: 30px;
								color: #000000;
								margin-top: 39px;
								transition: all 0.3s;
							}
							&:nth-of-type(2) {
								margin-top: 10px;
								font-size: 18px;
								display: flex;
								align-items: center;
								span {
									color: #888888;
									padding: 0 15px;
									border-right: 1px solid #cccccc;
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
						}
					}
					.button-wrap {
						margin-top: 54px;
						.btn {
							margin: 0;
						}
					}
				}
			}
		}
	}
	.pagination-box {
		margin: 40px 0 100px 0;
	}
}
</style>
