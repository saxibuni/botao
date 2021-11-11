<template>
	<div class="owner">
		<!-- 业主心声 -->
		<Banner :data="BannerData" />
		<div class="owner-vioce">
			<h2>业主心声</h2>
			<h3>Owner's voice</h3>
			<div class="swiper-box wow">
				<swiper :options="ownerBannerOptions">
					<swiper-slide v-for="(v, i) in ownerArr" :key="i">
						<div class="img-box">
							<img :src="v.imgUrl" />
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
									<Button :text="'定制我的方案'"></Button>
									<div class="img-box">
										<img src="~assets/ic_f1_part2_dou.png" />
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="controal-box">
				<div class="controals">
					<div class="swiper-next owner-next wow"></div>
					<div class="swiper-pre owner-pre wow"></div>
					<div class="swiper-pagination wow owener-pagination"></div>
				</div>
			</div>
		</div>
		<div class="flag-honer">
			<h2 class="wow">荣誉锦旗</h2>
			<h3 class="wow">Flag of honor</h3>
			<div class="swiper-box wow">
				<swiper :options="fhBannerOptions">
					<swiper-slide v-for="(v, i) in fhArr" :key="i">
						<div class="img-box">
							<div class="left">
								<div class="top">
									<div class="img-box"><img :src="v.img1" alt="" /></div>
									<div class="img-box"><img :src="v.img4" alt="" /></div>
									<div class="img-box"><img :src="v.img5" alt="" /></div>
								</div>
								<div class="bottom">
									<div class="left">
										<div class="img-box"><img :src="v.img2" alt="" /></div>
										<div class="img-box"><img :src="v.img3" alt="" /></div>
									</div>
									<div class="right">
										<div class="img-box"><img :src="v.img6" alt="" /></div>
									</div>
								</div>
							</div>
							<div class="out-right">
								<div class="top">
									<div class="img-box"><img :src="v.img7" alt="" /></div>
								</div>
								<div class="bottom">
									<div class="img-box"><img :src="v.img8" alt="" /></div>
									<div class="img-box"><img :src="v.img9" alt="" /></div>
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="controal-box">
				<div class="controals">
					<div class="swiper-next wow fh-next"></div>
					<div class="swiper-pre wow fh-pre"></div>
					<div class="swiper-pagination wow fh-pagination"></div>
				</div>
			</div>
		</div>
		<div class="dian-ping">
			<h2 class="wow">业主点评</h2>
			<h3 class="wow">owner reviews</h3>
			<div class="swiper-box wow">
				<swiper :options="dpBannerOptions">
					<swiper-slide v-for="(v, i) in dpArr" :key="i">
						<div class="img-box">
							<img :src="v" alt="" />
							<div class="mask"></div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="button-box">
				<div class="swiper-next wow dp-next"></div>
				<div class="swiper-pre wow dp-pre"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import OwnerVoice from './ownervoice';
export default OwnerVoice;
</script>

<style lang="scss">
html {
	.owner {
		.owner-vioce,
		.flag-honer,
		.dian-ping {
			h2,
			h3 {
				opacity: 0;
				animation: slide-up-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
			.swiper-box {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.swiper-next {
			opacity: 0;
			animation: slide-left-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.swiper-pre {
			opacity: 0;
			animation: slide-right-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.swiper-pagination {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
}
.owner {
	font-size: 16px;
	box-sizing: border-box;
	margin: 0 auto;
	width: 1916px;
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
				transition: all 1s;
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
						box-sizing: border-box;
						padding: 41px 36px 64px 36px;
						position: absolute;
						left: 100%;
						width: 100%;
						height: 100%;
						background-color: #122133;
						color: #fff;
						transition: all 1s;
						.top {
							display: flex;
							padding-bottom: 33px;
							border-bottom: 1px solid #d2d2d2;
							> div {
								display: flex;
								flex-direction: column;
								span {
									font-size: 16px;
									&:nth-child(2) {
										margin-top: 5px;
									}
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
							width: 386px;
							margin-top: 39px;
							margin-bottom: 51px;
							font-size: 16px;
							line-height: 26px;
							span {
								color: #ed5400;
							}
						}
						.button-wrap {
							.btn {
								margin: 0;
								width: 207px;
								height: 53px;
								background-color: #eb551d;
							}
						}
						.img-box {
							position: absolute;
							right: 36px;
							bottom: 26px;
							width: 99px;
							height: 84px;
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
			.active {
				.img-box {
					opacity: 1;
					transition: all 1s;
					.left-info {
						width: 450px;
						.inner-box {
							transition: all 1s 0.5s;
							left: 0px;
						}
					}
					.pause {
						opacity: 0;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -45px;
						margin-top: -45px;
						animation: fade-in 1s forwards;
						width: 90px;
						height: 90px;
						overflow: hidden;
						border-radius: 50%;
						transition: transform 0.3s;
						cursor: pointer;
						&:hover {
							transform: scale(1.1);
						}
					}
				}
			}
		}
	}
	.dian-ping {
		@include title();
		position: relative;
		padding: 0 215px;
		padding-bottom: 116px;
		.swiper-box {
			margin: 0 auto;
			// min-height: 700px;
			.swiper-container {
				padding: 20px;
			}
			.img-box {
				position: relative;
				display: flex;
				box-shadow: 0px 0px 35px 0px rgba(8, 18, 29, 0.15);
				cursor: pointer;
				.mask {
					opacity: 0;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(255, 255, 255, 0.8);
					transition: all 0.3s;
					&::after {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: 10;
						width: 65px;
						height: 65px;
						content: '';
						background: url(~assets/icons/ic_f1_part4_searcg.png) no-repeat;
						background-size: 100%;
					}
				}
				&:hover .mask {
					opacity: 1;
				}
					&:hover{
						box-shadow: 0px 0px 35px 0px rgba(196, 21, 21, 0.15);
					}
			}
		}
		.button-box {
			position: absolute;
			.dp-pre,
			.dp-next {
				top: -525px;
			}
			.dp-pre {
				left: -119px;
			}
			.dp-next {
				right: -1608px;
			}
		}
	}
	.flag-honer {
		@include title();
		overflow: hidden;
		padding: 0 100px 0 80px;
		background: url(~assets/bg_f1_part3.jpg) no-repeat;
		background-size: 100%;
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
				.img-box {
					display: flex;
					overflow: hidden;
					img {
						width: 100%;
						height: 100%;
						transition: all 0.3s;
					}
					&:hover img {
						transform: scale($imgScale);
					}
				}
				.left {
					.top {
						display: flex;
						margin-bottom: 15px;
						height: 266px;
						.img-box {
							width: 332px;
							height: 266px;
							margin-right: 20px;
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
							.img-box {
								position: relative;
								display: flex;
								width: 332px;
								height: 266px;
								img {
									position: absolute;
									bottom: -2px;
									margin-right: 20px;
									&:last-child {
										margin-right: 0;
									}
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
						.img-box {
							width: 684px;
							height: 548px;
							overflow: hidden;
						}
					}
					.bottom {
						margin-top: 14px;
						display: flex;
						.img-box {
							position: relative;
							width: 332px;
							height: 266px;
							overflow: hidden;
							img {
								position: absolute;
								bottom: -2px;
							}
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
			.swiper-pre {
				top: 58px;
				left: 0px;
			}
			.swiper-next {
				top: 58px;
				right: 0px;
			}
		}
	}
}
</style>
