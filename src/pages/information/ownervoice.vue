<template>
	<div class="owner">
		<!-- 业主心声 -->
		<div class="owner-vioce">
			<h2>业主心声</h2>
			<h3>Owner's voice</h3>
			<div class="swiper-box">
				<swiper :options="ownerBannerOptions">
					<swiper-slide v-for="n in 3" :key="n">
						<div class="img-box">
							<img src="~assets/bg_home_banner2.jpg" />
							<div class="pause">
								<img src="~assets/ic_home_b3_play.png" alt="" />
							</div>
							<div class="left-info">
								<div class="inner-box">
									<div class="top">
										<div class="address">
											<span class="name">李小姐</span>
											<span>上海</span>
										</div>
										<div class="area">
											<span>560m²</span>
											<span>面积</span>
										</div>
										<div class="style">
											<span>现代风格</span>
											<span>风格</span>
										</div>
									</div>
									<p>
										和波涛算是第二次合作了，第一次是给自己家的房子装修装修效果非常不错，于是就想着把父母的房子也交给波涛装修。
										<br />
										<br />
										装修方案老人家看了都很满意，以复古风装修为主 家里的墙纸大多是暖色调，满满的温馨祥祥和
										<span>[详情]</span>
									</p>
									<button>定制我的装修方案</button>
									<div class="img-box">
										<img />
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="controal-box">
				<div class="controals">
					<div class="swiper-next owner-next"></div>
					<div class="swiper-pre owner-pre"></div>
					<div class="swiper-pagination owener-pagination"></div>
				</div>
			</div>
		</div>

		<div class="flag-honer">
			<h2>荣誉锦旗</h2>
			<h3>Flag of honor</h3>
			<div class="swiper-box">
				<swiper :options="fhBannerOptions">
					<swiper-slide v-for="n in 3" :key="n">
						<div class="img-box">
							<div class="left">
								<div class="top">
									<img src="~assets/bg_home_banner2.jpg" alt="" />
									<img src="~assets/bg_home_banner2.jpg" alt="" />
									<img src="~assets/bg_home_banner2.jpg" alt="" />
								</div>
								<div class="bottom">
									<div class="left">
										<img src="~assets/bg_home_banner2.jpg" alt="" />
										<img src="~assets/bg_home_banner2.jpg" alt="" />
									</div>
									<div class="right">
										<img src="~assets/bg_home_banner2.jpg" alt="" />
									</div>
								</div>
							</div>
							<div class="out-right">
								<div class="top">
									<img src="~assets/bg_home_banner2.jpg" alt="" />
								</div>
								<div class="bottom">
									<img src="~assets/bg_home_banner2.jpg" alt="" />
									<img src="~assets/bg_home_banner2.jpg" alt="" />
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="controal-box">
				<div class="controals">
					<div class="swiper-next fh-next"></div>
					<div class="swiper-pre fh-pre"></div>
					<div class="swiper-pagination fh-pagination"></div>
				</div>
			</div>
		</div>
		<div class="dian-ping">
			<h2>业主点评</h2>
			<h3>owner reviews</h3>
			<div class="swiper-box">
				<swiper :options="dpBannerOptions">
					<swiper-slide v-for="n in 3" :key="n">
						<div class="img-box">
							<img src="~assets/bg_home_banner2.jpg" alt="" />
							<img src="~assets/bg_home_banner2.jpg" alt="" />
							<img src="~assets/bg_home_banner2.jpg" alt="" />
							<img src="~assets/bg_home_banner2.jpg" alt="" />
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="button-box">
				<div class="swiper-next dp-next"></div>
				<div class="swiper-pre dp-pre"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import OwnerVoice from './ownervoice';
export default OwnerVoice;
</script>

<style lang="scss">

.owner {
	font-size: 16px;
	@mixin title {
		h2,
		h3 {
			text-align: center;
			line-height: 1;
			color: #000000;
		}
		h2 {
			margin-top: 100px;
			font-size: 48px;
		}
		h3 {
			margin-top: 24px;
			font-size: 24px;
			font-family: Athene;
			margin-bottom: 62px;
		}
	}
	.owner-vioce {
		@include title();
		.swiper-box {
			height: 608px;
			.img-box {
				position: relative;
				height: 608px;
				opacity: 0.5;
				transition: all 0.3s;
				img {
					width: 100%;
					height: 100%;
				}

				.left-info {
					overflow: hidden;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: -311px;
					width: 450px !important;
					height: 493px;

					.inner-box {
						// box-sizing: border-box;
						padding: 41px 36px 64px 36px;
						position: absolute;
						left: 100%;
						width: 100%;
						height: 100%;
						background-color: #122133;
						color: #fff;
						.top {
							display: flex;
							padding-bottom: 33px;
							border-bottom: 1px solid #d2d2d2;
							> div {
								display: flex;
								flex-direction: column;
								span {
									font-size: 16px;
								}
								.name {
									font-size: 30px;
								}
							}
							.address {
								margin-right: 118px;
							}
							.area,
							.style {
								margin-top: 18px;
								span {
									&:first-child {
										color: #eb551d;
										font-size: 18px;
									}
								}
							}
							.area {
								margin-right: 42px;
							}
						}
						> p {
							width: 376px;
							margin-top: 39px;
							margin-bottom: 51px;
							font-size: 16px;
							line-height: 26px;
							span {
								color: #eb551d;
							}
						}
						> button {
							position: relative;
							color: #fff;
							border: none;
							width: 207px;
							height: 53px;
							background: #eb551d;
							font-size: 18px;
							text-shadow: 0px 0px 30px rgba(183, 53, 19, 0.55);
							letter-spacing: 1px;
							&::before,
							&::after {
								content: '';
								position: absolute;
								top: 4px;
								left: 4px;
								width: 9px;
								height: 9px;
								opacity: 0.45;
								border-top: 1px solid #fff;
								border-left: 1px solid #fff;
							}
							&::after {
								transform: rotate(180deg);
								top: 40px;
								left: 193px;
							}
						}
						.img-box {
							position: absolute;
							right: 100px;
							bottom: 122px;
							width: 99px;
							height: 84px;
							background-color: red;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
			/deep/.swiper {
				display: none;
			}
			.swiper-slide-active {
				.img-box {
					opacity: 1;
					transition: all 0.3s;
					.left-info {
						width: 450px;
						.inner-box {
							transition: all 1s 0.5s;
							left: 0px;
						}
					}
					.pause {
						position: absolute;
						z-index: 10;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 90px;
						height: 90px;
					}
				}
			}
		}
	}
	.dian-ping {
		@include title();
		position: relative;
		padding: 0 215px;
		padding-bottom: 136px;
		.swiper-box {
			margin: 0 auto;
			.img-box {
				display: flex;
				img {
					&:first-child {
						width: 344px;
						height: 649px;
						box-shadow: 0px 0px 35px 0px rgba(8, 18, 29, 0.15);
					}
					&:nth-child(2) {
						width: 343px;
						height: 548px;
						box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.15);
						opacity: 0.8;
					}
					&:nth-child(3) {
						width: 341px;
						height: 502px;
						box-shadow: 0px 0px 35px 0px rgba(8, 18, 29, 0.15);
					}
					&:nth-child(4) {
						width: 341px;
						height: 631px;
						box-shadow: 0px 0px 35px 0px rgba(8, 18, 29, 0.15);
					}
					&:not(:last-child) {
						margin-right: 40px;
					}
				}
			}
		}
		.button-box {
			position: absolute;
			.dp-pre,
			.dp-next {
				top: -438px;
			}
			.dp-pre {
				left: -100px;
			}
			.dp-next {
				right: -1590px;
			}
		}
	}
	.flag-honer {
		@include title();
		overflow: hidden;
		padding: 0 100px 0 80px;
		background-color: skyblue;
		h2,
		h3 {
			color: #fff;
		}
		.swiper-box {
			margin: 0 auto;
			width: 100%;
			.img-box {
				// height: 500px;
				display: flex;
				.left {
					.top {
						display: flex;
						margin-bottom: 15px;
						width: 332px;
						height: 266px;
						img {
							margin-right: 20px;
							width: 100%;
							height: 100%;
							&:last-child {
								margin-right: 0;
							}
						}
					}
					.bottom {
						display: flex;
						.left {
							display: flex;
							width: 332px;
							flex-direction: column;
							margin-right: 20px;
							img {
								margin-right: 20px;
								width: 332px;
								height: 266px;
								&:last-child {
									margin-right: 0;
								}
								&:not(:last-child) {
									margin-bottom: 15px;
								}
							}
						}
						.right {
							img {
								width: 684px;
								height: 548px;
							}
						}
					}
				}
				.out-right {
					margin-left: 20px;
					.top {
						img {
							width: 684px;
							height: 548px;
						}
					}
					.bottom {
						margin-top: 14px;
						display: flex;
						img {
							width: 332px;
							height: 266px;
							&:not(:last-child) {
								margin-right: 20px;
							}
						}
					}
				}
			}
		}
		.controal-box {
			height: 163px;
		}
	}
}
</style>
