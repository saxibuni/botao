<template>
	<div class="brand">
		<div class="banner-box">
			<Banner :data="BannerData"></Banner>
			<p class="text">
				波涛装饰集团成立于2001年，总部设立于中国上海，经过二十几年的发展，形成了集建筑、工装、家装、软装、加盟、培训、家居建材、供应链、船舶内装、中医健康等为一体的综合性装饰集团公司。
			</p>
			<div class="aside-text">BOTAOGROUP VIDEO</div>
			<div class="img-box">
				<img src="~assets/ic_home_b3_play.png" alt="" />
			</div>
		</div>
		<ul class="aside-nav">
			<li class="active"><span>波涛品牌</span></li>
			<li><span>品牌数据</span></li>
			<li><span>核心价值观</span></li>
			<li><span>发展历程</span></li>
			<li><span>荣誉资质</span></li>
			<li><span>社会责任</span></li>
			<li><span>联系我们</span></li>
		</ul>
		<div class="botao-brand">
			<div class="left">
				<div class="img-box">
					<img src="~assets/bg_g1_part2_logo.png" alt="" />
				</div>
				<ul>
					<li v-for="(v, i) in btBrandArr" :class="isActive == i ? 'active' : ''" @click="isActive = i" :key="i"><Button :text="v"></Button></li>
				</ul>
			</div>
			<div class="right-box">
				<div class="right" v-show="i == isActive" v-for="(v, i) in btBrandInfoArr" :key="i">
					<h3>
						{{ v.title }}
					</h3>
					<p>
						{{ v.text }}
					</p>
					<div class="img-box">
						<img :src="v.img" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style lang="scss">
.brand {

	@keyframes fade-ine {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.banner-box {
		position: relative;
		.banner {
			height: 970px;
			img {
				height: 100%;
			}
			.banner-text {
				margin-top: 0;
				transform: translate(0);
				top: 332px;
				left: 81px;
				h3 {
					text-align: start;
					font-size: 56px;
					line-height: 1;
				}
				p {
					margin-top: 24px;
					font-size: 24px;
					line-height: 1;
				}
			}
		}
		.text {
			position: absolute;
			bottom: 323px;
			left: 81px;
			width: 477px;
			font-size: 18px;
			color: #ffffff;
			line-height: 38px;
		}
		.aside-text {
			position: absolute;
			right: 0px;
			bottom: 189px;
			font-size: 16px;
			font-family: Athene;
			color: #ffffff;
			transform: rotate(90deg);
		}
		.img-box {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 85px;
			height: 85px;
			cursor: pointer;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.aside-nav {
		z-index: 99;
		position: fixed;
		top: 252px;
		right: 200px;
		font-size: 14px;
		color: #fff;
		line-height: 1;
		li {
			position: relative;
			text-align: right;
			height: 35px;
			border-right: 1px dashed #43493a;
			cursor: pointer;
			span {
				position: absolute;
				width: 70px;
				right: 0;
				top: -5px;
				margin-right: 22px;
			}
			&::before {
				position: absolute;
				content: '';
				right: -3px;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: #fff;
			}
			&:last-child {
				border: none;
			}
			&.active {
				color: #eb5518;
				&::before {
					background-color: #eb5518;
				}
			}
		}
	}
	.botao-brand {
		display: flex;
		padding: 99px 83px 98px 79px;
		background: url(~assets/bg_g1_part2.jpg) no-repeat;
		background-size: 100%;
		.left {
			display: flex;
			align-items: center;
			.img-box {
				margin-right: 250px;
				margin-left: 156px;
				margin-bottom: 22px;
				width: 190px;
				height: 104px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			> ul {
				margin-top: 2px;
				position: relative;
				li {
					position: relative;
					.button-wrap {
						.btn {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 310px;
							height: 48px;
							border: 1px solid #132132;
							background-color: #fff;
							font-size: 20px;
							color: #132132;
							line-height: 1;
							text-shadow: none;
							transition: all 0.3s;
							&::before,
							&::after {
								border-color: #132132;
							}
							&:hover {
								color: #fff;
								background: #eb551d;
								border: 1px solid #eb551d;
								&::after {
									border-color: #fff;
								}
								&::before {
									border-color: #fff;
								}
							}
						}
					}
					&::before {
						position: absolute;
						top: 24px;
						left: -82px;
						width: 82px;
						height: 1px;
						background: #ccc;
						content: '';
					}
					&:not(:last-child):after {
						position: absolute;
						content: '';
						top: 24px;
						left: -82px;
						width: 1px;
						height: 58px;
						background-color: #ccc;
					}
					&:not(:first-child) {
						margin-top: 10px;
					}
					&.active {
						.button-wrap {
							.btn {
								color: #fff;
								background: #eb551d;
								border: 1px solid #eb551d;
								&::after {
									border-color: #fff;
								}
								&::before {
									border-color: #fff;
								}
							}
						}
					}
				}
				&::before {
					position: absolute;
					top: 50%;
					left: -198px;
					content: '';
					width: 117px;
					height: 1px;
					background: #ccc;
				}
			}
		}
		.right-box {
			position: relative;
			.right {
				margin-left: 127px;
				width: 725px;
				text-align: center;
				animation: fade-ine 1s ease forwards;
				h3 {
					margin-top: 22px;
					font-size: 36px;
					color: #000000;
					line-height: 1;
				}
				p {
					margin-top: 25px;
					font-size: 18px;
					color: #666666;
					line-height: 36px;
				}
				.img-box {
					margin: 0 auto;
					margin-top: 51px;
					width: 556px;
					height: 350px;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
}
</style>
