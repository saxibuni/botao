<template>
	<div class="soft-decoration">
		<div class="page1">
			<img src="~assets/bg_e3_banner_right.jpg" alt="" />
			<div class="text">
				<h2>软装生活</h2>
				<p>Soft outfit life</p>
			</div>
			<img class="mask" src="~assets/bg_e3_banner_left.png" alt="" />
		</div>
		<div class="page2">
			<h2 class="wow">软装配饰定制</h2>
			<p class="wow">Deserve to act the role of custom</p>

			<ul>
				<li class="wow">
					<img src="~assets/bg_e3_part2_01.png" alt="" />
					<div>
						<p>绿植</p>
						<h6>Green Plant</h6>
					</div>
				</li>
				<li class="wow">
					<img src="~assets/bg_e3_part2_02.png" alt="" />
					<div>
						<p>挂画</p>
						<h6>Hanging Picture</h6>
					</div>
				</li>
				<li class="wow">
					<img src="~assets/bg_e3_part2_03.png" alt="" />
					<div>
						<p>家具</p>
						<h6>Furniture</h6>
					</div>
				</li>
				<li class="wow">
					<img src="~assets/bg_e3_part2_04.png" alt="" />
					<div>
						<p>灯具</p>
						<h6>Lighting</h6>
					</div>
				</li>
				<li class="wow">
					<img src="~assets/bg_e3_part2_05.png" alt="" />
					<div>
						<p>饰品</p>
						<h6>Accessories</h6>
					</div>
				</li>
				<li class="wow">
					<img src="~assets/bg_e3_part2_06.png" alt="" />
					<div>
						<p>壁布</p>
						<h6>Wall Cloth</h6>
					</div>
				</li>
				<li class="wow">
					<img src="~assets/bg_e3_part2_07.png" alt="" />
					<div>
						<p>窗帘</p>
						<h6>Curtain</h6>
					</div>
				</li>
				<li class="wow">
					<img src="~assets/bg_e3_part2_08.png" alt="" />
					<div>
						<p>地毯</p>
						<h6>Rug</h6>
					</div>
				</li>
			</ul>
			<div class="wow">
				<p></p>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
			</div>
		</div>

		<div class="page3">
			<h2 class="wow">软装案例</h2>
			<p class="wow">Soft cases</p>
			<div>
				<div class="left wow">
					<h2>
						<span>250+</span>
						沪上精装楼盘
					</h2>
					<div class="swiper">
						<swiper :options="swiperOptions" ref="mywiper">
							<swiper-slide v-for="(item, i) in list" :key="i">
								<div :class="{ active: swiperIndex == i }" @click="onSelect(i)">
									<span>{{ item }}</span>
								</div>
							</swiper-slide>
						</swiper>

						<div style="pointer-events:auto; opacity:1;cursor: pointer;" class="swiper2-button-prev" @click="onClick(-1)"></div>
						<div style="pointer-events:auto; opacity:1;cursor: pointer;" class="swiper2-button-next" @click="onClick(1)"></div>
					</div>
					<div class="text" :class="{active:textActive}">
						<h2>莱茵半岛</h2>
						<h3>现代风格 153㎡</h3>
						<p>家庭氛围活泼友爱，收纳空间多，房屋整 洁干净，楼上空间是以居住为主，地下室 空间主要是活动娱乐空间。</p>
						<Button text="案例详情"></Button>
					</div>
				</div>
				<div class="right wow">
					<img src="~assets/bg_e3_part6.jpg" alt="">
				</div>
			</div>
		</div>
		<div class="page4">
			<h2 class="wow">软装设计师</h2>
			<p class="wow">Soft Designer</p>

			<div class="swiper">
				<swiper :options="bannerSwiperOptions">
					<swiper-slide class="wow" v-for="(item, i) in 5" :key="i" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
						<div class="box" >
							<div class="img-wrap">
								<img src="~assets/bg_e3_part4_04.jpg" alt="" />
								<div>
									<h3>夏文涓</h3>
									<p>软装设计师 丨 10年经验</p>
								</div>
							</div>
							<div class="text">
								<p>“</p>
								<h5>设计源于生活，细节成就品质，人为的设计生活方式，创造更美好的生活状态。</h5>
								<Button text="了解设计师"></Button>
							</div>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-button-wrap">
					<div class="prev"></div>
					<div class="swiper-pagination2"></div>
					<div class="next"></div>
				</div>
			</div>
		</div>

		<div class="page5">
			<h2 class="wow">服务流程</h2>
			<p class="wow">Service process</p>
			<ul>
				<li class="wow">
					<img src="~assets/bg_e3_part5_01.jpg" alt="" />
					<b>01</b>
					<div>
						<p>商务洽谈</p>
						<p>签署设计合同</p>
					</div>
				</li>

				<li class="wow">
					<img src="~assets/bg_e3_part5_02.jpg" alt="" />
					<b>02</b>
					<div>
						<p>概念方案</p>
						<p>深化方案</p>
					</div>
				</li>

				<li class="wow">
					<img src="~assets/bg_e3_part5_03.jpg" alt="" />
					<b>03</b>
					<div>
						<p>配套执行</p>
						<p>配套预算</p>
						<p>签署配套合同</p>
					</div>
				</li>

				<li class="wow">
					<img src="~assets/bg_e3_part5_04.jpg" alt="" />
					<b>04</b>
					<div>
						<p>生产环节</p>
						<p>质量监控</p>
					</div>
				</li>

				<li class="wow">
					<img src="~assets/bg_e3_part5_05.jpg" alt="" />
					<b>05</b>
					<div>
						<p>现场布置</p>
						<p>安装及摆放</p>
					</div>
				</li>
			</ul>
		</div>

		<div class="page6">
			<h2 class="wow">软装配选</h2>
			<p class="wow">Soft assembly elected</p>
			<div>
				<ul>
					<li class="wow">
						<div>
							<i>
								<img src="~assets/icons/ic_e3_part6_1a.png" alt="" />
								<img src="~assets/icons/ic_e3_part6_1b.png" alt="" />
							</i>
							<h3>客厅</h3>
							<p>sitting room</p>
						</div>
					</li>

					<li class="wow">
						<div>
							<i>
								<img src="~assets/icons/ic_e3_part6_2a.png" alt="" />
								<img src="~assets/icons/ic_e3_part6_2b.png" alt="" />
							</i>
							<h3>儿童房</h3>
							<p>Children room</p>
						</div>
					</li>

					<li class="wow">
						<div>
							<i>
								<img src="~assets/icons/ic_e3_part6_3a.png" alt="" />
								<img src="~assets/icons/ic_e3_part6_3b.png" alt="" />
							</i>
							<h3>老人房</h3>
							<p>Old person room</p>
						</div>
					</li>

					<li class="wow">
						<div>
							<i>
								<img src="~assets/icons/ic_e3_part6_4a.png" alt="" />
								<img src="~assets/icons/ic_e3_part6_4b.png" alt="" />
							</i>
							<h3>餐厅</h3>
							<p>restaurant</p>
						</div>
					</li>

					<li class="wow">
						<div>
							<i>
								<img src="~assets/icons/ic_e3_part6_5a.png" alt="" />
								<img src="~assets/icons/ic_e3_part6_5b.png" alt="" />
							</i>
							<h3>书房</h3>
							<p>study</p>
						</div>
					</li>

					<li class="wow">
						<div>
							<i>
								<img src="~assets/icons/ic_e3_part6_6a.png" alt="" />
								<img src="~assets/icons/ic_e3_part6_6b.png" alt="" />
							</i>
							<h3>卧室</h3>
							<p>bedroom</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import SoftDecoration from './softdecoration';
export default SoftDecoration;
</script>

<style lang="scss">
.soft-decoration {
	box-sizing: border-box;
	margin: 0 auto;
	max-width: 1920px;
	img {
		display: block;
	}
	.page1 {
		height: 970px;
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
		.mask {
			position: absolute;
			left: 0;
			top: 0;
			width: auto;
			height: 100%;
		}
		.text {
			position: absolute;
			left: 80px;
			top: 428px;
			z-index: 2;
			h2 {
				height: 59px;
				font-size: 62px;
				font-weight: 400;
				color: #ffffff;
				line-height: 55px;
			}
			p {
				height: 28px;
				font-size: 32px;
				font-family: Athene;
				font-weight: 400;
				color: #ffffff;
				margin-top: 23px;
				text-transform: uppercase;
			}
		}
	}
	.page2 {
		padding: 100px 0;
		height: 970px;
		background: url('~assets/bg_e3_part2.jpg') center center;
		background-size: cover;
		position: relative;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000000;
			text-align: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #000000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		ul {
			li {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #ffffff;
				border-radius: 100%;
				cursor: pointer;
				overflow: hidden;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				&:hover {
					img {
						transform: scale(#{$imgScale});
					}
				}
				img {
					width: 100%;
					height: 100%;
					position: absolute;
					left: 0;
					top: 0;
					z-index: 1;
					transition: 0.3s;
				}
				div {
					position: relative;
					z-index: 2;
					p {
						font-size: 27px;
						text-align: center;
					}
					h6 {
						font-family: Gilroy-Regular;
						text-align: center;
						font-size: 18px;
					}
				}
				&:nth-child(1) {
					width: 261px;
					height: 260px;
					top: 307px;
					left: 106px;
					animation-delay: .1s;
				}
				&:nth-child(2) {
					top: 591px;
					left: 257px;
					width: 240px;
					animation-delay: .2s;
					height: 240px;
				}

				&:nth-child(3) {
					top: 304px;
					left: 575px;
					width: 361px;
					height: 361px;
					animation-delay: .3s;
					z-index: 3;
				}

				&:nth-child(4) {
					top: 419px;
					left: 900px;
					width: 265px;
					animation-delay: .4s;
					height: 265px;
				}

				&:nth-child(5) {
					top: 661px;
					left: 789px;
					width: 187px;
					animation-delay: .5s;
					height: 187px;
				}

				&:nth-child(6) {
					top: 352px;
					left: 1228px;
					width: 215px;
					animation-delay: .6s;
					height: 215px;
				}
				&:nth-child(7) {
					top: 602px;
					left: 1322px;
					width: 196px;
					animation-delay: .7s;
					height: 196px;
				}
				&:nth-child(8) {
					top: 359px;
					left: 1518px;
					width: 295px;
					animation-delay: .8s;
					height: 295px;
				}
			}
		}
		> div {
			opacity: 0;
			animation:  fade-in 3s;
			animation-fill-mode: forwards;
			p {
				position: absolute;
				border: 2px solid #eb551d;
				border-radius: 50%;
				&:nth-child(1) {
					top: 434px;
					left: 333px;
					width: 191px;
					height: 191px;
					z-index: 2;
				}
				&:nth-child(2) {
					top: 498px;
					left: 444px;
					width: 302px;
					height: 302px;
					z-index: 2;
				}
				&:nth-child(3) {
					top: 585px;
					left: 1011px;
					width: 282px;
					height: 282px;
				}
				&:nth-child(4) {
					top: 250px;
					left: 1137px;
					width: 191px;
					z-index: 2;
					height: 191px;
				}
				&:nth-child(5) {
					top: 512px;
					left: 1223px;
					width: 176px;
					height: 176px;
					z-index: 2;
				}
			}
		}
	}
	.page3 {
		padding: 100px 0;
		background: url('~assets/bg_e3_part3.jpg') center center;
		background-size: cover;
		position: relative;
		height: 1140px;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #fff;
			text-align: center;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #fff;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> div {
			margin-top: 58px;
			display: flex;
			justify-content: space-between;
			.left {
				position: relative;
				width: 600px;
				opacity: 0;
				animation:slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
				z-index: 6;
				>h2 {
					padding-left: 80px;
					span {
						font-size: 62px;
						font-family: Gilroy-Bold;
						font-weight: bold;
						color: #eb551d;
						margin-right: 21px;
					}
					font-size: 42px;
					font-weight: 400;
					display: flex;
					color: #ffffff;
					align-items: center;
				}
				.swiper {
					width: 264px;
					height: 500px;
					font-size: 18px;
					color: #fff;
					margin-top: 106px;
					text-align: center;
					box-sizing: border-box;
					position: relative;
					.swiper-container-vertical {
						box-sizing: border-box;
						height: 500px !important;
						.swiper-slide {
							box-sizing: border-box;
							cursor: pointer;
							> div {
								height: 100%;
								width: 100%;
								display: flex;
								align-items: center;
								justify-content: center;
								span {
									line-height: 40px;
									transition: 0.3s;
								}
								&.active {
									span {
										border-bottom: 1px solid #eb551d;
										color: #eb551d;
									}
								}
							}
						}
					}
					.swiper2-button-prev {
						position: absolute;
						top: -60px;
						left: 50%;
						width: 50px;
						height: 50px;
						margin-left: -25px;
						background: url('~assets/icons/ic_home_b3_top_white.png') no-repeat center center;
						background-size: 26px auto;
					}
					.swiper2-button-next {
						position: absolute;
						bottom: -60px;
						left: 50%;
						width: 50px;
						height: 50px;
						background: url('~assets/icons/ic_home_b3_top_white.png') no-repeat center center;
						margin-left: -25px;
						background-size: 26px auto;
						transform: rotate(180deg);
					}
				}
				.text {
					position: absolute;
					width: 445px;
					height: 520px;
					background: #ffffff;
					top: 132px;
					left: 318px;
					transform: translateX(-40px);
					padding: 94px 60px;
					transition: .3s;
					opacity: 0;
					h2 {
						font-size: 36px;
						font-weight: 400;
						color: #000000;
						line-height: 35px;
					}
					h3 {
						font-size: 18px;
						font-weight: 400;
						color: rgba(235, 85, 29, 1);
						line-height: 35px;
						margin-top: 6px;
					}
					p {
						font-size: 18px;
						font-weight: 400;
						color: #666666;
						line-height: 36px;
						margin: 40px 0 70px 0;
						@include line-clamp(4);
					}
					.button-wrap{
						width: 170px;
					}
					&.active{
						transform: translateX(0);
						opacity: 1;
					}
				}
			}
			.right {
				flex: 1;
				height: 778px;
				opacity: 0;
				animation: fade-in 2s;
				animation-fill-mode: forwards;
				position: relative;
				z-index: 2;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.page4 {
		padding: 100px 0;
		position: relative;
		height: 1173px;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000;
			text-align: center;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.swiper {
			width: 1770px;
			margin: 0 auto;
			margin-top: 60px;
			position: relative;
			.swiper-slide{
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
			.box {
				box-sizing: border-box;
				margin-bottom: 50px;
				.img-wrap {
					height: 510px;
					background: #000000;
					position: relative;
					overflow: hidden;
					&:hover{
						img{
							transform: scale(#{$imgScale});
						}
					}
					img {
						width: 100%;
						height: 100%;
						transition: .3s;
					}
					div {
						position: absolute;
						bottom: 49px;
						left: 0;
						color: #fff;
						width: 100%;
						text-align: center;
						h3 {
							font-size: 32px;
							font-weight: 400;
							margin-bottom: 6px;
						}
						p {
							font-size: 18px;
							font-weight: 400;
						}
					}
				}
				.text {
					height: 260px;
					background: #ffffff;
					padding: 30px 39px;
					box-shadow: 0px 0px 35px 0px rgba(8, 18, 29, 0.06);
					p {
						text-align: center;
						font-size: 48px;
						font-weight: 400;
						color: #dbdbdb;
						line-height: 1;
					}
					h5 {
						font-size: 18px;
						font-weight: 400;
						color: #333333;
						line-height: 30px;
						text-align: center;
						margin-bottom: 35px;
						@include line-clamp(2);
					}
				}
			}

			.swiper-button-wrap {
				position: absolute;
				bottom: -30px;
				height: 10px;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				.swiper-pagination2 {
					display: flex;
					margin: 0 30px;
					.swiper-pagination-bullet {
						cursor: pointer;
						border-radius: 0;
						width: 12px;
						height: 12px;
						background: transparent;
						border: 2px solid #ababab;
						&.swiper-pagination-bullet-active {
							border: 2px solid #eb551d !important;
						}
						&:not(:first-child) {
							margin-left: 15px;
						}
					}
				}
				.prev {
					cursor: pointer;
					width: 16px;
					height: 16px;
					background: url('~assets/icons/ic_e2_left1.png') no-repeat center center;
					transition: 0.3s;
					position: absolute;
					left: 0;
					&:hover {
						transform: scale(1.2);
					}
				}
				.next {
					width: 16px;
					cursor: pointer;
					height: 16px;
					background: url('~assets/icons/ic_e2_right1.png') no-repeat center center;
					transition: 0.3s;
					position: absolute;
					right: 0;
					&:hover {
						transform: scale(1.2);
					}
				}
			}
		}
	}
	.page5 {
		padding: 100px 0;
		background: url('~assets/bg_e3_part5.jpg') center center;
		background-size: cover;
		position: relative;
		height: 970px;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000;
			text-align: center;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}

		ul {
			width: 1770px;
			margin: 65px auto;
			display: flex;
			justify-content: space-between;
			li {
				width: 336px;
				height: 586px;
				display: flex;
				position: relative;
				flex-wrap: wrap;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				animation-delay: .2s;
				overflow: hidden;
				&:hover {
					> div {
						background: #eb551d;
						p {
							color: #fff;
						}
					}
					b {
						background: #fff;
						color: #eb551d;
						border: 1px solid #eb551d;
					}
					img{
						transform: scale(#{$imgScale});
					}
				}
				> img {
					width: 100%;
					height: 356px;
					transition:transform .3s;
				}
				> div {
					display: flex;
					justify-content: center;
					background: #fff;
					width: 100%;
					flex-wrap: wrap;
					height: 230px;
					transition: 0.3s;
					align-content: center;
					position: relative;
					z-index: 2;
					p {
						text-align: center;
						font-size: 24px;
						font-weight: 400;
						color: #000000;
						width: 100%;
						transition: 0.3s;
						margin-top: 3px;
					}
				}
				b {
					position: absolute;
					transition: 0.3s;
					top: 339px;
					border: 1px solid transparent;
					left: 50%;
					transform: translateX(-50%);
					width: 36px;
					height: 36px;
					background: #eb551d;
					border-radius: 50%;
					text-align: center;
					line-height: 36px;
					font-size: 18px;
					font-weight: 400;
					color: #ffffff;
					z-index: 3;
				}
				&:nth-child(2n) {
					animation-delay: .4s;
					> div {
						order: 1;
					}
					img {
						order: 2;
					}
					b {
						top: 211px;
					}
				}
			}
		}
	}
	.page6 {
		padding: 100px 0 95px 0;
		height: 1065px;
		position: relative;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000;
			text-align: center;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation:slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> div {
			width: 1760px;
			height: 735px;
			background: url('~assets/bg_e3_part6.jpg') center center;
			background-size: cover;
			margin: 57px auto;
			position: relative;
			&:after {
				content: '';
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				position: absolute;
				background: rgba(0, 0, 0, 0.2);
				pointer-events: none;
			}
			ul {
				display: flex;
				li {
					width: calc(100% / 6);
					border-right: 2px solid rgba(255, 255, 255, 0.2);
					height: 735px;
					position: relative;
					cursor: pointer;
					opacity: 0;
					animation:slide-down-in 2s, fade-in 2s;
					animation-fill-mode: forwards;
					&:hover {
						div {
							transform: translateY(-20px);
							color: #eb551d;
							i {
								img {
									display: none;
									&:nth-child(2) {
										display: block;
									}
								}
							}
						}
					}
					div {
						color: #fff;
						position: absolute;
						left: 60px;
						bottom: 70px;
						transition: 0.3s;
						i {
							display: block;
							img {
								width: 50px;
								display: block;
								&:nth-child(2) {
									display: none;
								}
							}
						}
						h3 {
							font-size: 28px;
							font-weight: 400;
							margin: 10px 35px 16px 0;
						}
						p {
							font-size: 18px;
							font-family: Gilroy-Regular;
							text-transform: uppercase;
							font-weight: 400;
						}
					}
					&:nth-child(1) {
						animation-delay: .15s;
						div {
							img {
								width: 52px;
							}
						}
					}

					&:nth-child(2) {
						animation-delay: .3s;
						div {
							img {
								width: 46px;
							}
						}
					}

					&:nth-child(3) {
						animation-delay: .45s;
						div {
							img {
								width: 33px;
							}
						}
					}

					&:nth-child(4) {
						animation-delay: .6s;
						div {
							img {
								width: 55px;
							}
						}
					}

					&:nth-child(5) {
						animation-delay: .75s;
						div {
							img {
								width: 39px;
							}
						}
					}

					&:nth-child(1) {
						animation-delay: .9s;
						div {
							img {
								width: 46px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
