<template>
	<div class="case-detail">
		<div class="crumbs">
			<p>
				<span @click="$router.push('/case/list')">精选案例</span>
				&nbsp;
				<i></i>
				&nbsp;
			</p>
			<p><span>上海东方颐城</span></p>
		</div>
		<div class="title">
			<h3 class="wow">上海东方颐城</h3>
			<div class="content wow">
				<div class="contentLeft">
					<ul>
						<li>
							<i></i>
							<div>
								<p>面积</p>
								<p>120㎡</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>设计风格</p>
								<p>现代中式</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>房型</p>
								<p>复式</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="contentRight">
					<i></i>
					<p>2000个喜欢</p>
				</div>
			</div>
		</div>
		<div class="swiper">
			<div class="swiperBox">
				<swiper :options="swiperOptions1">
					<swiper-slide v-for="(item, i) in 3" :key="i">
						<img src="~assets/bg_b2_part2.jpg" alt="" />
						<img src="~assets/ic_c2_play.png" @click="playVideo(i)" alt="" />
						<img src="~assets/bg_b2_part2_mask.png" alt="" />
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination"></div>

				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
			<div class="content wow">
				<img src="~assets/bg_b2_part2_user.png" alt="" />
				<p>谷晓云</p>
				<p>首席设计师</p>
				<p>从业年限：10 年</p>
				<p>ta的作品：东方颐城 、城云开外 、玖玺合院...</p>
				<Button @click.native="$store.state.dialogDesign.design = true" :text="'找TA设计'" />
			</div>
		</div>
		<div class="other">
			<h3 class="wow">为您推荐其他筑梦案例</h3>
			<ul class="wow">
				<li v-for="(item, index) in tabs" :key="index" :class="activeIndex == index ? 'active' : ''" @click="activeIndex = index">{{ item }}</li>
			</ul>
			<div class="otherSwiper wow">
				<swiper :options="swiperOptions2">
					<swiper-slide v-for="(item, index) in 9" :key="index">
						<Cases />
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination pagination2"></div>
				<div class="swiper-button-prev prev2"></div>
				<div class="swiper-button-next next2"></div>
			</div>
		</div>
		<VideoPopup :videoPop="videoPop"></VideoPopup>
	</div>
</template>

<script lang="ts">
import CaseDetail from './detail';
export default CaseDetail;
</script>

<style lang="scss">
.case-detail {
	> .title {
		h3,
		.content {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	> .swiper {
		.content {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.other {
		h3,
		ul {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.otherSwiper {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
}
.case-detail {
	// padding: 0 80px;
	.crumbs {
		padding: 0 80px;
		display: flex;
		justify-content: flex-end;
		margin: 39px 0 60px 0;
		p {
			font-size: 16px;
			color: #666666;
			&:last-of-type {
				color: #eb5518;
			}
			i {
				display: inline-block;
				width: 6px;
				height: 11px;
				background: url('~assets/icons/ic_b2_part2_crumb.png') no-repeat;
				background-size: 100% 100%;
			}
			span {
				transition: all 0.3s;
				&:hover {
					cursor: pointer;
					color: #eb5518;
				}
			}
		}
	}
	.title {
		display: flex;
		padding: 0 80px;
		h3 {
			font-size: 56px;
			color: #000000;
		}
		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 320px;
			.contentLeft {
				ul {
					display: flex;
					li {
						display: flex;
						margin-right: 200px;
						i {
							width: 23px;
							height: 23px;
							background-size: 100% 100% !important;
							margin: 5px 28px 0 0;
						}
						&:nth-of-type(1) {
							i {
								background: url('~assets/icons/ic_b2_part2_area.png') no-repeat;
							}
						}
						&:nth-of-type(2) {
							i {
								background: url('~assets/icons/ic_b2_part2_style.png') no-repeat;
							}
						}
						&:nth-of-type(3) {
							margin-right: 0px;
							i {
								background: url('~assets/icons/ic_b2_part2_shape.png') no-repeat;
							}
						}
						> div {
							p {
								&:nth-of-type(1) {
									font-size: 20px;
									color: #999999;
								}
								&:nth-of-type(2) {
									margin-top: 10px;
									font-size: 28px;
									color: #000000;
								}
							}
						}
					}
				}
			}
			.contentRight {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-left: 200px;
				i {
					width: 33px;
					height: 29px;
					background-size: 100% 100% !important;
					background: url('~assets/icons/ic_b2_part2_like2.png') no-repeat;
				}
				p {
					margin-top: 14px;
					font-size: 18px;
					color: #122133;
					// font-weight: 600;
				}
			}
		}
	}
	.swiper {
		padding: 0 80px;
		display: flex;
		margin: 80px 0 110px 0;
		.swiperBox {
			width: 1220px;
			height: 740px;
			position: relative;
			img {
				&:nth-of-type(2) {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -80%);
					transition: all 0.3s;
					z-index: 1;
					&:hover {
						cursor: pointer;
						transform: translate(-50%, -80%) scale($imgScale);
					}
				}
				&:nth-of-type(3) {
					position: absolute;
					top: 0;
					left: 0;
				}
			}
			.swiper-container {
				width: 1220px;
				height: 740px;
			}
			.swiper-button-prev,
			.swiper-button-next {
				top: 335px;
				transform: all 0.3s;
				&:hover {
					transform: all 0.3s;
					&::after {
						color: #eb551c;
					}
				}
			}
			.swiper-button-prev {
				margin-left: 50px;
			}
			.swiper-button-next {
				margin-right: 40px;
			}
			.swiper-pagination {
				width: 70px;
				height: 12px;
				position: absolute;
				left: 50%;
				bottom: 150px;
				transform: translateX(-50%);
				.swiper-pagination-bullet {
					margin-right: 15px;
					box-sizing: border-box;
					width: 12px;
					height: 12px;
					border: 2px solid #ababab;
					border-radius: 0;
					background: transparent;
					opacity: 1;
					&:last-of-type {
						margin-right: 0;
					}
				}
				.swiper-pagination-bullet-active {
					border: 2px solid #eb551d;
				}
			}
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			background: #132132;
			width: 540px;
			height: 740px;
			padding: 0 88px;
			img {
				width: 180px;
				height: 180px;
				border-radius: 50%;
				margin-top: 120px;
			}
			p {
				color: #fff;
				&:nth-of-type(1) {
					font-size: 36px;
					margin-top: 45px;
				}
				&:nth-of-type(2) {
					font-size: 22px;
					color: #ea551c;
					margin-top: 15px;
					z-index: 1;
				}
				&:nth-of-type(3) {
					font-size: 18px;
					margin-top: 20px;
				}
				&:nth-of-type(4) {
					font-size: 18px;
					margin-top: 20px;
					margin-bottom: 57px;
					@include line-clamp(1);
				}
			}
			.button-wrap {
				width: 170px;
				height: 53px;
			}
		}
	}
	.other {
		height: 1060px;
		background-size: 100% 100%;
		background: url('~assets/bg_b2_part3.jpg') no-repeat;
		display: flex;
		flex-direction: column;
		align-items: center;
		h3 {
			font-size: 56px;
			color: #000000;
			margin: 90px 0 20px 0;
		}
		> ul {
			display: flex;
			> li {
				width: 140px;
				height: 39px;
				font-size: 18px;
				color: #666666;
				display: flex;
				justify-content: center;
				align-items: center;
				&:nth-of-type(1) {
					margin-right: 14px;
				}
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
		.otherSwiper {
			margin-top: 60px;
			height: 782px;
			width: 1760px;
			.swiper-container {
				height: 625px;
				.swiper-wrapper {
					left: 11px;
				}
			}
			.swiper-pagination {
				width: 66px;
				height: 12px;
				position: relative;
				left: 50%;
				top: -30px;
				transform: translateX(-50%);
				.swiper-pagination-bullet {
					margin-right: 15px;
					box-sizing: border-box;
					width: 12px;
					height: 12px;
					border: 2px solid #ababab;
					border-radius: 0;
					background: transparent;
					opacity: 1;
					&:last-of-type {
						margin-right: 0;
					}
				}
				.swiper-pagination-bullet-active {
					border: 2px solid #eb551d;
				}
			}
			.swiper-button-prev,
			.swiper-button-next {
				position: relative;
				z-index: 999;

				&::after {
					color: #aaaaaa;
					font-size: 34px;
					transition: all 0.3s;
				}
				&:hover {
					&::after {
						color: #eb551d !important;
					}
				}
			}
			.swiper-button-prev {
				left: 5px;
				top: 62px;
			}
			.swiper-button-next {
				// margin-right: 40px;
				left: 1705px;
				top: 50px;
			}
		}
	}
}
</style>
