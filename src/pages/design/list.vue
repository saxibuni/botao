<template>
	<div class="design-list">
		<div class="title wow">
			<div class="left">
				<h3>
					<ICountUp :endVal="100" :options="options1" ref="countup1"></ICountUp>
					位别墅大宅设计大咖
				</h3>
				<p>VILLA MANSION DESIGN TYCOON</p>
			</div>
			<div class="right wow">
				<div class="search">
					<input type="text" />
					<i></i>
				</div>
				<p>
					您可能感兴趣的设计师:&nbsp;
					<span>陆靖浩</span>
					<span>周芳乐</span>
					<span>喻勤</span>
					<span>于一</span>
				</p>
			</div>
		</div>
		<div class="tabs">
			<div class="tabsList wow">
				<p>设计师级别</p>
				<ul>
					<li v-for="(item, index) in tabs" :key="index" :class="activeIndex == index ? 'active' : ''" @click="activeIndex = index">{{ item }}</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<ul>
				<li class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }" v-for="i in 12" :key="i" @click="$router.push('/design/detail')">
					<div class="imgBox">
						<img src="~assets/bg_c1_pic01.jpg" alt="" />
						<div class="text">
							<p>于一</p>
							<p>设计总监 &nbsp;|&nbsp; 15年经验</p>
						</div>
					</div>
					<div class="text">
						<p>代表作品</p>
						<p>嘉怡水岸、三林新村、华侨城、两河流域...</p>
						<Button :text="'了解设计师'" />
					</div>
				</li>
			</ul>
		</div>
		<Pagination :data="paginationData" />
	</div>
</template>

<script lang="ts">
import DesignList from './list';
export default DesignList;
</script>

<style lang="scss">
.design-list {
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
	> .content {
		ul {
			li {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
}
.design-list {
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
					width: 123px;
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
					cursor: pointer;
					transition: transform 0.3s;
					&:hover {
						transform: translateY(-50%) scale(1.1);
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
					cursor: pointer;
					transition: color 0.3s;
					&:hover {
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
	.content {
		margin-top: 80px;
		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			li {
				margin-bottom: 40px;
				width: 410px;
				cursor: pointer;
				.imgBox {
					position: relative;
					width: 410px;
					height: 500px;
					overflow: hidden;
					background: url('~assets/bg_c1_pic_mask.png') no-repeat;
					background-position: bottom;
					&:hover {
						img {
							transform: scale($imgScale);
						}
					}
					img {
						width: 100%;
						height: 500px;
						position: relative;
						z-index: -1;
						transition: transform 0.3s;
					}
					.text {
						position: absolute;
						bottom: 40px;
						left: 40px;
						p {
							&:nth-of-type(1) {
								font-size: 32px;
								color: #ffffff;
							}
							&:nth-of-type(2) {
								margin-top: 10px;
								font-size: 18px;
								color: #fefefe;
							}
						}
					}
				}
				> .text {
					padding: 39px 0 0 39px;
					width: 410px;
					height: 242px;
					box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.05);
					p {
						font-size: 18px;
						&:nth-of-type(1) {
							color: #333333;
							// font-weight: 600;
						}
						&:nth-of-type(2) {
							margin-top: 20px;
							color: #666666;
							@include line-clamp(1);
						}
					}
					.button-wrap {
						margin-top: 39px;
						&:hover {
							cursor: pointer;
						}
						.btn {
							margin: 0;
							width: 150px;
							height: 48px;
							display: flex;
							align-items: center;
							justify-content: center;
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
