<template>
	<div class="inquery-user">
		<div class="banner">
			海报
		</div>
		<div class="owner-vioce">
			<h2>业主心声</h2>
			<h3>OWEWE</h3>
			<div class="swiper-box">
				<swiper :options="ownerBannerOptions" ref="ownerBanner">
					<swiper-slide>
						<div class="img-box">
							<img />
							<div class="left-info">
								<div class="inner-box">
									asdas
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="img-box">
							<img />
							<div class="left-info">
								<div class="inner-box">
									asdas
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="img-box">
							<img />
							<div class="left-info">
								<div class="inner-box">
									asdas
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="img-box">
							<img />
							<div class="left-info">
								<div class="inner-box">
									asdas
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="img-box">
							<img />
							<div class="left-info">
								<div class="inner-box">
									asdas
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
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
				swiper
				<swiper>
					<swiper-slide>1</swiper-slide>
					<swiper-slide>2</swiper-slide>
					<swiper-slide>3</swiper-slide>
				</swiper>
			</div>
		</div>
		<div class="flag-honer">
			<h2>荣誉锦旗</h2>
			<h3>sadwqe</h3>
			<div class="swiper-box">
				<swiper>
					<swiper-slide>1</swiper-slide>
					<swiper-slide>2</swiper-slide>
					<swiper-slide>3</swiper-slide>
					<swiper-slide>4</swiper-slide>
					<swiper-slide>5</swiper-slide>
					<swiper-slide>6</swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import InqueryUser from './inquery_user';
export default InqueryUser;
</script>
<style lang="scss" scoped>
.inquery-user {
	font-size: 16px;
	img {
		vertical-align: bottom;
	}
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
	.banner {
		height: 670px;
		background-color: skyblue;
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
					transform: translateX(0px) translateY(-50%);
					left: -200px;
					width: 300px;
					height: 400px;
					background-color: #000;
					.inner-box{
						position: absolute;
						left: 0px;
					}
				}
			}
			/deep/.swiper-slide-active {
				.img-box {
					opacity: 1;
					.left-info {
						// transform: translateX(0px) translateY(-50%);
						// width: 300px;
						// transition: all 1.5s 0.3s ease;
					}
				}
			}
		}
	}
	.dian-ping {
		background-color: aqua;
		@include title();
		.swiper-box {
			height: 500px;
		}
	}
	.flag-honer {
		padding: 30px;
		@include title();
		.swiper-box {
			height: 500px;
		}
	}
}
</style>
