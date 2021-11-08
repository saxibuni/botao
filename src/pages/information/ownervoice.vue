<template>
	<div class="owner">
		<!-- 业主心声 -->
		<div class="owner-vioce">
			<h2>业主心声</h2>
			<h3>OWEWE</h3>
			<div class="swiper-box">
				<swiper :options="ownerBannerOptions">
					<swiper-slide v-for="n in 3" :key="n">
						<div class="img-box">
							<img />
							<div class="left-info">
								<div class="inner-box">
									asdas
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="dian-ping">
			<h2>大众点评</h2>
			<h3>sadas</h3>
			<div class="swiper-box">
				<swiper :options="dpBannerOptions">
					<swiper-slide v-for="n in 3" :key="n">
						<div class="img-box" :style="{ background: colorArr[n] }">{{ n }}</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="flag-honer">
			<h2>荣誉锦旗</h2>
			<h3>sadwqe</h3>
			<div class="swiper-box">
				<swiper :options="fhBannerOptions">
					<swiper-slide v-for="n in 3" :key="n">
						<div class="img-box">
							{{ n }}
						</div>
					</swiper-slide>
				</swiper>
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
			font-weight: 700;
			font-size: 36px;
			text-align: center;
		}
		h2 {
			margin-top: 140px;
		}
		h3 {
			margin-bottom: 50px;
		}
	}
	.owner-vioce {
		@include title();
		.swiper-box {
			height: 500px;
			.img-box {
				position: relative;
				height: 500px;
				opacity: 0.5;
				transition: all 0.3s;
				img {
					width: 100%;
					height: 100%;
					background-color: skyblue;
				}
				.left-info {
					overflow: hidden;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: -200px;
					width: 300px;
					height: 400px;
					.inner-box {
						position: absolute;
						width: 100%;
						height: 100%;
						background: #000;
						left: 100%;
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
						width: 300px;
						.inner-box {
							transition: all 1s 0.5s;
							left: 0px;
						}
					}
				}
			}
		}
	}
	.dian-ping {
		background-color: aqua;
		overflow: hidden;
		.swiper-box {
			margin: 0 auto;
			width: 1400px;
			.img-box {
				height: 400px;
				background: red;
			}
		}
		@include title();
		.swiper-box {
			height: 500px;
		}
	}
	.flag-honer {
		padding: 30px;
		.swiper-box {
			margin: 0 auto;
			width: 1400px;
			.img-box {
				height: 500px;
				background-color: red;
			}
		}
		@include title();
		.swiper-box {
			height: 500px;
		}
	}
}
</style>
