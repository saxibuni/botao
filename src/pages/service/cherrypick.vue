<template>
	<div class="cherry-pick">
		<div class="page1">
			<img src="~assets/bg_e2_banner_right.jpg" alt="" />
			<div class="text">
				<h2>严选主材</h2>
				<p>Construction management</p>
			</div>
			<img class="mask" src="~assets/bg_e2_banner_left.png" alt="" />
		</div>

		<div class="page2">
			<h2 class="wow">服务优势</h2>
			<p class="wow">Service advantages</p>
			<div>
				<div class="left wow">
					<div :class="{ active: iconIndex == 0 }" @click="iconClick(0)">
						<i>
							<img src="~assets/icons/ic_e2_part2_a1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_a2.png" alt="" />
						</i>
						<span>产品优势</span>
					</div>
					<div :class="{ active: iconIndex == 1 }" @click="iconClick(1)">
						<i>
							<img src="~assets/icons/ic_e2_part2_b1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_b2.png" alt="" />
						</i>
						<span>价格优势</span>
					</div>
					<div :class="{ active: iconIndex == 2 }" @click="iconClick(2)">
						<i>
							<img src="~assets/icons/ic_e2_part2_c1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_c2.png" alt="" />
						</i>
						<span>配合优势</span>
					</div>
					<div :class="{ active: iconIndex == 3 }" @click="iconClick(3)">
						<i>
							<img src="~assets/icons/ic_e2_part2_d1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_d2.png" alt="" />
						</i>
						<span>退补优势</span>
					</div>
					<div :class="{ active: iconIndex == 4 }" @click="iconClick(4)">
						<i>
							<img src="~assets/icons/ic_e2_part2_e1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_e2.png" alt="" />
						</i>
						<span>饰后优势</span>
					</div>
				</div>
				<div class="right wow">
					<div class="swiper">
						<swiper :options="bannerSwiperOptions">
							<swiper-slide v-for="(item, i) in 3" :key="i">
								<div class="wrap">
									<div class="text">
										<h2>饰后优势</h2>
										<h1>多级售后·服务保障</h1>
										<div>
											<p>完工后提供材料明细售后服务清单，令售后服务更便捷所购</p>
											<p>主材享最低二年售后保障服务；</p>
											<p>客户享有饰后三年私人家装保养服务</p>
										</div>
									</div>
									<div class="img-wrap">
										<img src="~assets/bg_e2_part2.jpg" alt="" />
									</div>
								</div>
							</swiper-slide>
						</swiper>
						<div class="swiper-button-wrap">
							<div class="prev prev1">
								<i></i>
							</div>
							<div class="next next1">
								<i></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="page3 wow">
			<h2>绿色建材让家越住越健康</h2>
			<p>Green building materials</p>
			<div class="circle">
				<div class="father" v-for="(item, i) in page3Data" :key="i">
					<div class="content">
						<div class="container">
							<div class="imgBox">
								<img :src="item.imgUrl" alt="" />
								<div class="mask"></div>
							</div>
							<div class="text" :class="activeIndex == i ? 'active' : ''">
								<p>{{ item.text }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="circle2">
					<div class="box" v-for="(item, i) in page3Data" :key="i" @mouseover="fn(i)" @mouseout="fn(-1)"></div>
				</div>
			</div>
			<img src="~assets/bg_e2_part3_00.png" alt="" />
		</div>

		<div class="page4">
			<h2 class="wow">私家花园定制</h2>
			<p class="wow">Private garden customization</p>
			<div class="box">
				<div class="left wow">
					<div>
						<img src="~assets/bg_e2_part4_01.jpg" alt="" />
						<b>01</b>
						<div class="text">
							<h3>个性设计</h3>
							<p>Personality design</p>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="wow">
						<img src="~assets/bg_e2_part4_02.jpg" alt="" />
						<b>02</b>
						<div class="text">
							<h3>专业团队</h3>
							<p>Professional team</p>
						</div>
					</div>

					<div class="wow">
						<img src="~assets/bg_e2_part4_03.jpg" alt="" />
						<b>03</b>
						<div class="text">
							<h3>匠心工艺</h3>
							<p>Originality process</p>
						</div>
					</div>

					<div class="wow">
						<img src="~assets/bg_e2_part4_04.jpg" alt="" />
						<b>04</b>
						<div class="text">
							<h3>精选材料</h3>
							<p>Selection of materials</p>
						</div>
					</div>

					<div class="wow">
						<img src="~assets/bg_e2_part4_05.jpg" alt="" />
						<b>05</b>
						<div class="text">
							<h3>规范施工</h3>
							<p>Standard construction</p>
						</div>
					</div>

					<div class="wow">
						<img src="~assets/bg_e2_part4_06.jpg" alt="" />
						<b>06</b>
						<div class="text">
							<h3>竣工养护</h3>
							<p>Completion maintenance</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="page5">
			<h2 class="wow">全屋智能</h2>
			<p class="wow">Whole house intelligence</p>
			<ul>
				<li v-for="(item, i) in list" :key="i">
					<i></i>
					<p>{{ item.title }}</p>
					<div>
						<h2>
							<span>{{ item.title }}</span>
							<img :src="item.imgUrl" alt="" />
						</h2>
						<div class="line"></div>
						<p>{{ item.text }}</p>
					</div>
				</li>
			</ul>
		</div>

		<div class="page6">
			<h2 class="wow">
				<span>18000㎡</span>
				沉浸体验最潮家装逛展
			</h2>
			<p class="wow">5大主题展厅 10大品质生活体验区</p>
			<ul class="wow">
				<li v-for="(item, i) in list2" :key="i">
					<h2>
						{{ item.tag }}
					</h2>
					<h3>{{ item.title }}</h3>
					<p>{{ item.text }}</p>
				</li>
			</ul>
		</div>

		<div class="page7">
			<h2 class="wow">高端品牌直采</h2>
			<p class="wow">High-end brands</p>
			<div class="swiper wow">
				<swiper :options="bannerSwiperOptions2">
					<swiper-slide v-for="(item, i) in 3" :key="i">
						<div class="img-wrap" v-for="(item, i) in 26" :key="i">
							<img src="~assets/bg_e2_part7_b2.png" alt="" />
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-button-wrap">
					<div class="prev prev2"></div>
					<div class="swiper-pagination2"></div>
					<div class="next next2"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import CheckPick from './cherrypick';
export default CheckPick;
</script>

<style lang="scss">
.cherry-pick {
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
		> h2 {
			height: 46px;
			font-size: 48px;
			font-family: AlibabaPuHuiTiM;
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
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> div {
			width: 1770px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			margin-top: 80px;
			.left {
				width: 313px;
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
				> div {
					display: flex;
					align-items: center;
					position: relative;
					cursor: pointer;
					&:not(:first-child) {
						margin-top: 58px;
						&::before {
							content: '';
							position: absolute;
							height: 100%;
							width: 1px;
							left: 29px;
							bottom: 100%;
							border-left: 1px dashed #e5e5e5;
						}
					}
					i {
						width: 58px;
						height: 58px;
						background: #f1f2f3;
						border-radius: 50%;
						position: relative;
						transition: 0.3s;
						border: 1px solid rgba(235, 85, 29, 0);
						margin-right: 28px;
						cursor: pointer;
						&::before {
							content: '';
							width: 44px;
							height: 44px;
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							border-radius: 50%;
							transition: 0.3s;
						}
						img {
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							transition: 0.3s;
							opacity: 1;
							&:nth-child(2) {
								opacity: 0;
							}
						}
					}
					font-size: 18px;
					font-weight: 400;
					color: #000000;
					&:hover,
					&.active {
						i {
							background: transparent;
							border: 1px solid rgba(235, 85, 29, 0.3);
							&::before {
								background: #eb551d;
							}
							img {
								opacity: 0;
								&:nth-child(2) {
									opacity: 1;
								}
							}
						}
					}
				}
			}
			.right {
				width: 1457px;
				height: 588px;
				opacity: 0;
				animation: slide-down-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
				.swiper {
					width: 100%;
					position: relative;
					.wrap {
						display: flex;
						align-items: center;
						justify-content: space-between;
						height: 588px;
						.text {
							flex: 1;
							height: 520px;
							padding: 95px 0 0 119px;
							box-sizing: border-box;
							background: #132132;
							h2 {
								height: 20px;
								font-size: 20px;
								font-weight: 400;
								color: #eb551d;
							}
							h1 {
								height: 35px;
								font-size: 36px;
								font-weight: 400;
								color: #ffffff;
								margin: 40px 0 38px 0;
							}
							div {
								height: 90px;
								p {
									font-size: 18px;
									font-weight: 400;
									color: #cccccc;
									line-height: 36px;
								}
							}
						}
						.img-wrap {
							width: 746px;
							height: 564px;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
					.swiper-button-wrap {
						position: absolute;
						left: 110px;
						bottom: 126px;
						z-index: 99;
						height: 40px;
						display: flex;
						align-items: center;
						div {
							cursor: pointer;
							outline: none;
							width: 30px;
							height: 30px;
							display: flex;
							align-items: center;
							justify-content: center;
							i {
								width: 30px;
								height: 30px;
								background: url('~assets/icons/ic_home_banner_left.png') no-repeat center center;
								background-size: 11px 21px;
							}
							&:hover {
								i {
									background: url('~assets/icons/ic_f4_left21.png') no-repeat center center;
									background-size: 11px 21px;
								}
							}
							&:nth-child(2) {
								margin-left: 10px;
								i {
									width: 30px;
									height: 30px;
									background: url('~assets/icons/ic_home_banner_left.png') no-repeat center center;
									background-size: 11px 21px;
									transform: rotate(180deg) translateY(-1px);
								}
								&:hover {
									i {
										background: url('~assets/icons/ic_f4_left21.png') no-repeat center center;
										background-size: 11px 21px;
										transform: rotate(180deg) translateY(-1px);
									}
								}
							}
						}
					}
				}
			}
		}
	}
	.page3 {
		padding: 100px 0;
		height: 970px;
		background: url('~assets/bg_e2_part3.jpg') no-repeat;
		background-size: cover;
		position: relative;
		opacity: 0;
		animation: slide-down-in 1s, fade-in 1s;
		animation-fill-mode: forwards;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-family: AlibabaPuHuiTiM;
			font-weight: 400;
			color: #fff;
			text-align: center;
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
		}
		> img {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -1px;
			clip-path: ellipse(330px 330px at 50% 100%);
		}
		.circle {
			width: 1413px;
			height: 1413px;
			border: 1px solid #ffffff;
			border-radius: 50%;
			position: absolute;
			left: 50%;
			transform: translate(-50%, 50%);
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.circle2 {
				clip-path: circle(50%);
				width: 1329px;
				height: 1329px;
				border-radius: 50%;
				overflow: hidden;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				clip-path: circle(50%);
				.box {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 99999;
					width: 645px;
					height: 685px;
					background-color: transparent;
					margin-top: -20px;
					margin-left: 42px;
					transform-origin: right bottom;
					&:hover {
						cursor: pointer;
					}
					transform: rotate(-69.5deg) skewY(69.5deg);
					&:nth-of-type(2) {
						transform: rotate(-47.9deg) skewY(69.2deg);
					}
					&:nth-of-type(3) {
						transform: rotate(-25.9deg) skewY(69deg);
					}
					&:nth-of-type(4) {
						transform: rotate(-3.5deg) skewY(68.5deg);
					}
					&:nth-of-type(5) {
						transform: rotate(19.6deg) skewY(68.5deg);
					}
					&:nth-of-type(6) {
						transform: rotate(43deg) skewY(68deg);
					}
					&:nth-of-type(7) {
						transform: rotate(66.5deg) skewY(68deg);
					}
					&:nth-of-type(8) {
						transform: rotate(89.8deg) skewY(68.2deg);
					}
				}
			}
			.father {
				margin-top: 1px;
				// width: 976px;
				// height: 976px;
				width: 1329px;
				height: 1329px;
				transform: rotate(68.8deg);
				/* background: lightgoldenrodyellow; */
				position: absolute;
				overflow: hidden;
				border-radius: 50%;
				z-index: -1;
				img {
					position: absolute;
					z-index: 22;
				}
				.text {
					position: absolute;
					background-color: #eeeeee;
					width: 250px;
					height: 250px;
					display: flex;
					justify-content: center;
					align-items: center;
					transition: all 0.3s;
					z-index: 23;
					p {
						font-size: 22px;
						color: #000000;
						width: 45px;
						line-height: 32px;
						transition: all 0.3s;
						position: absolute;
					}
				}
				.active {
					background: #eb551d;
					p {
						color: #fff;
					}
				}
				&:nth-of-type(1) {
					img {
						transform: rotate(-90deg) scale(1.04);
						top: -18px;
						left: 439px;
					}
					.text {
						left: 449px;
						top: 124px;
						transform: rotate(-90deg);
						p {
							left: 90px;
							top: 110px;
						}
					}
				}
				&:nth-of-type(2) {
					transform: rotate(46.1deg);
					img {
						transform: rotate(-66deg) scale(1.02);
						top: -40px;
						left: 424px;
					}
					.text {
						left: 478px;
						top: 145px;
						transform: rotate(-67deg);
						p {
							left: 102px;
							top: 78px;
						}
					}
				}
				&:nth-of-type(3) {
					transform: rotate(23.4deg);
					img {
						transform: rotate(-45deg) scale(1.02);
						top: -40px;
						left: 431px;
					}
					.text {
						left: 478px;
						top: 145px;
						transform: rotate(-46deg);
						p {
							left: 98px;
							top: 78px;
						}
					}
				}
				&:nth-of-type(4) {
					transform: rotate(0.7deg);
					img {
						transform: rotate(-23deg) scale(1.04);
						top: -11px;
						left: 456px;
					}
					.text {
						left: 478px;
						top: 146px;
						transform: rotate(-20deg);
						p {
							left: 92px;
							top: 90px;
						}
					}
				}
				&:nth-of-type(5) {
					transform: rotate(-22.2deg);
					img {
						transform: rotate(-1deg) scale(1.01);
						top: 3px;
						left: 422px;
					}
					.text {
						left: 477px;
						top: 148px;
						transform: rotate(0deg);
						p {
							left: 96px;
							top: 88px;
						}
					}
				}
				&:nth-of-type(6) {
					transform: rotate(-44.8deg);
					img {
						transform: rotate(22deg) scale(1.01);
						top: -36px;
						left: 411px;
					}
					.text {
						left: 460px;
						top: 146px;
						transform: rotate(24deg);
						p {
							left: 110px;
							top: 82px;
						}
					}
				}
				&:nth-of-type(7) {
					transform: rotate(-67.5deg);
					img {
						transform: rotate(45deg) scale(0.99);
						top: -49px;
						left: 426px;
					}
					.text {
						left: 460px;
						top: 146px;
						transform: rotate(47deg);
						p {
							left: 100px;
							top: 80px;
						}
					}
				}
				&:nth-of-type(8) {
					transform: rotate(-90deg);
					img {
						position: absolute;
						z-index: 22;
						transform: rotate(67deg) scale(0.95);
						top: -32px;
						left: 463px;
					}
					.text {
						left: 519px;
						top: 134px;
						border-radius: 0 !important;
						transform: rotate(69deg);
						clip-path: ellipse(510px 510px at 204% 100%);
						p {
							left: 82px;
							top: 142px;
						}
					}
				}
			}
			.content {
				overflow: hidden;
				// width: 976px;
				// height: 976px;
				width: 1329px;
				height: 1329px;
				/* background: lightcoral; */
				position: absolute;
				// z-index: 999;
				z-index: -1;
				clip: rect(0px, 1329px, 1329px, 664.5px);

				border-radius: 50%;
			}
			.container {
				// width: 976px;
				// height: 976px;
				width: 1329px;
				height: 1329px;
				// background: #eeeeee;
				// background: #eb551d;
				position: absolute;
				border-radius: 50%;
				clip: rect(0px, 664.5px, 1329px, 0);
				transform: rotate(21deg);
				.imgBox {
					overflow: hidden;
					img {
						width:  300px;
						height: 300px;
					}
					.mask {
						position: absolute;
						width: 200px;
						height: 200px;
						background-color: red;
						z-index: 999999;
					}
				}
			}
		}
	}
	.page4 {
		padding: 100px 0;
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
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.box {
			display: flex;
			height: 830px;
			width: 1770px;
			margin: 0 auto;
			margin-top: 63px;
			.left {
				width: 490px;
				height: 830px;
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
				> div {
					overflow: hidden;
					position: relative;
					&::before {
						position: absolute;
						content: '';
						width: 100%;
						height: 100%;
						left: 0;
						top: 0;
						z-index: 2;
						background: rgba(0, 0, 0, 0.3);
						pointer-events: none;
					}
					&:hover {
						img {
							transform: scale(1.02);
						}
					}
					img {
						transition: 0.3s;
						width: 100%;
						height: 100%;
					}
				}
			}
			b {
				height: 26px;
				font-size: 34px;
				font-family: Gilroy-Bold;
				font-weight: bold;
				color: #ffffff;
				position: absolute;
				left: 70px;
				top: 44px;
				z-index: 3;
			}
			.text {
				z-index: 3;
				position: absolute;
				left: 69px;
				bottom: 59px;
				h3 {
					height: 29px;
					font-size: 30px;
					font-weight: 400;
					color: #ffffff;
					margin-bottom: 23px;
				}
				p {
					font-family: Athene;
					text-transform: uppercase;
					height: 14px;
					font-size: 18px;
					font-weight: 400;
					color: #ffffff;
				}
			}
			.right {
				margin-left: 10px;
				flex: 1;
				display: flex;
				flex-wrap: wrap;
				> div {
					overflow: hidden;
					position: relative;
					opacity: 0;
					animation: slide-down-in 1s, fade-in 1s;
					animation-fill-mode: forwards;
					&::before {
						position: absolute;
						content: '';
						width: 100%;
						height: 100%;
						left: 0;
						top: 0;
						z-index: 2;
						background: rgba(0, 0, 0, 0.3);
						pointer-events: none;
					}
					img {
						transition: 0.3s;
						width: 100%;
						height: 100%;
					}
					&:hover {
						img {
							transform: scale(1.02);
						}
					}
					&:nth-child(1) {
						width: 416px;
						height: 410px;
						margin-right: 10px;
						animation-delay: .1s;
					}
					&:nth-child(2) {
						width: 834px;
						height: 410px;
						animation-delay: .2s;
					}
					&:nth-child(3) {
						width: 416px;
						height: 410px;
						margin-top: 10px;
						margin-right: 10px;
						animation-delay: .3s;
					}
					&:nth-child(4) {
						width: 412px;
						margin-right: 10px;
						margin-top: 10px;
						height: 410px;
						animation-delay: .4s;
					}
					&:nth-child(5) {
						width: 412px;
						height: 410px;
						margin-top: 10px;
						animation-delay: .5s;
					}
				}
			}
		}
	}
	.page5 {
		padding: 100px 0;
		height: 970px;
		background: url('~assets/bg_e2_part5.jpg') no-repeat;
		background-size: 100% 100%;
		position: relative;
		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(0, 0, 0, 0.55);
		}
		> h2 {
			height: 46px;
			font-size: 48px;
			font-family: AlibabaPuHuiTiM;
			font-weight: 400;
			position: relative;
			color: #fff;
			text-align: center;
			z-index: 2;
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
			position: relative;
			color: #fff;
			text-align: center;
			margin-top: 24px;
			z-index: 2;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		ul {
			li {
				position: absolute;
				left: 50%;
				top: 50%;
				z-index: 5;
				width: 80px;
				height: 100px;
				cursor: pointer;
				&:hover {
					i {
						background: #eb551d !important;
						&::before {
							content: '';
							background: #ed6a38;
							position: absolute;
							left: 50%;
							width: 40px;
							height: 40px;
							top: 50%;
							transform: translate(-50%, -50%);
							opacity: 0.2;
							border-radius: 50%;
							z-index: -1;
						}
						&::after {
							content: '';
							background: #ed6a38;
							position: absolute;
							left: 50%;
							width: 70px;
							height: 70px;
							top: 50%;
							transform: translate(-50%, -50%);
							opacity: 0.1;
							z-index: -2;
							border-radius: 50%;
							animation: animated-background 1.5s infinite;
						}
					}
					> div {
						opacity: 1;
					}
				}
				i {
					display: block;
					position: relative;
					width: 10px;
					height: 10px;
					background: #ffffff;
					border-radius: 50%;
					margin: 0 auto;
					margin-top: 25px;
					transition: 0.3s;
					&::before {
						content: '';
						background: #ffffff;
						position: absolute;
						left: 50%;
						width: 40px;
						height: 40px;
						top: 50%;
						transform: translate(-50%, -50%);
						opacity: 0.2;
						border-radius: 50%;
						transition: 0.3s;
						z-index: -1;
					}
					&::after {
						content: '';
						background: #ffffff;
						position: absolute;
						left: 50%;
						width: 70px;
						height: 70px;
						top: 50%;
						transform: translate(-50%, -50%);
						transition: 0.3s;
						opacity: 0.1;
						z-index: -2;
						border-radius: 50%;
						animation: animated-background 2.5s infinite;
					}

					@keyframes animated-background {
						0% {
							width: 40px;
							height: 40px;
						}
						100% {
							width: 70px;
							height: 70px;
						}
					}
				}
				> p {
					font-size: 18px;
					font-weight: 400;
					color: #ffffff;
					white-space: nowrap;
					text-align: center;
					margin-top: 25px;
				}
				> div {
					opacity: 0;
					transition: 0.3s;
					pointer-events: none;
					position: absolute;
					z-index: 99;
					width: 320px;
					left: 115px;
					top: -28px;
					min-height: 180px;
					padding: 30px 37px;
					background: #ffffff;
					&::before {
						position: absolute;
						width: 30px;
						height: 30px;
						right: 100%;
						top: 29px;
						content: '';
						background: url('~assets/icons/ic_e2_part5_horn.png') no-repeat;
					}
					h2 {
						height: 20px;
						font-size: 20px;
						font-weight: 600;
						color: #111111;
						display: flex;
						align-items: center;
						justify-content: space-between;
						img {
							width: 32px;
						}
					}
					.line {
						width: 35px;
						height: 1px;
						background: #ed6a38;
						margin: 20px 0;
					}
					p {
						font-size: 16px;
						font-weight: 400;
						color: #666666;
						line-height: 32px;
					}
				}
				&:nth-child(1) {
					left: 301px;
					top: 318px;
				}
				&:nth-child(2) {
					top: 358px;
					left: 826px;
				}
				&:nth-child(3) {
					top: 399px;
					left: 1185px;
				}
				&:nth-child(4) {
					top: 511px;
					left: 501px;
				}
				&:nth-child(5) {
					top: 519px;
					left: 810px;
				}
				&:nth-child(6) {
					top: 536px;
					left: 968px;
				}
				&:nth-child(7) {
					top: 558px;
					left: 1105px;
				}
			}
		}
	}
	.page6 {
		padding: 100px 0;
		height: 1060px;
		background: url('~assets/bg_e2_part6a.png') no-repeat center 293px;
		position: relative;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000;
			text-align: center;
			z-index: 2;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			span {
				color: rgba(235, 85, 29, 1);
				font-family: Gilroy-Bold;
			}
		}
		> p {
			height: 21px;
			font-size: 24px;
			font-weight: 400;
			color: #000;
			text-align: center;
			margin-top: 24px;
			z-index: 2;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		ul {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
			li {
				position: absolute;
				background: #ffffff;
				border: 1px solid #eb551d;
				padding: 0 40px 0 34px;
				&::after,
				&::before {
					content: '';
					position: absolute;
					border: 2px solid #eb551d;
					width: 8px;
					height: 8px;
				}
				&::after {
					left: 10px;
					top: 10px;
					border-right: none;
					border-bottom: none;
				}
				&::before {
					right: 10px;
					bottom: 10px;
					border-top: none;
					border-left: none;
				}
				h2 {
					font-size: 24px;
					font-weight: 400;
					color: #eb551d;
					border-bottom: 1px solid #eee;
					padding-bottom: 20px;
					padding-top: 26px;
					line-height: 1;
				}
				h3 {
					font-size: 17px;
					margin-top: 19px;
					color: rgba(19, 33, 50, 1);
				}
				p {
					font-size: 15px;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);
					line-height: 30px;
					margin-top: 10px;
				}
				&:nth-child(1) {
					top: 713px;
					left: 102px;
					width: 444px;
					min-height: 244px;
				}
				&:nth-child(2) {
					top: 255px;
					left: 102px;
					width: 425px;
					min-height: 240px;
				}
				&:nth-child(3) {
					top: 757px;
					right: 80px;
					width: 455px;
					min-height: 200px;
				}
				&:nth-child(4) {
					top: 572px;
					right: 80px;
					width: 455px;
					min-height: 165px;
				}
				&:nth-child(5) {
					top: 252px;
					right: 80px;
					width: 455px;
					min-height: 300px;
				}
				&:nth-child(6) {
					top: 686px;
					right: 563px;
					width: 165px;
					height: 53px;
					padding: 0;
					h2 {
						border-bottom: none;
						line-height: 53px;
						padding: 0;
						text-align: center;
					}
				}
			}
		}
	}
	.page7 {
		padding: 100px 0;
		height: 967px;
		background: #f7f7f7 url('~assets/bg_e2_part7.jpg') no-repeat center 90px;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-family: AlibabaPuHuiTiM;
			font-weight: 400;
			position: relative;
			color: #000;
			text-align: center;
			z-index: 2;
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
			position: relative;
			color: #000;
			text-align: center;
			margin-top: 24px;
			z-index: 2;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.swiper {
			width: 1660px;
			height: 515px;
			margin: 80px auto;
			position: relative;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			.swiper-slide {
				height: 515px;
				.img-wrap {
					left: 28px;
					top: 28px;
					position: absolute;
					background: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					transform: rotate(45deg);
					width: 131px;
					height: 131px;
					overflow: hidden;
					img {
						max-width: 100%;
						transform: rotate(-45deg);
						transition: 0.3s;
					}
					&:hover {
						img {
							transform: rotate(-45deg) scale(1.06);
						}
					}
					&:nth-child(1) {
						left: 28px;
						top: 28px;
					}
					&:nth-child(2) {
						left: 238px;
						top: 28px;
					}
					&:nth-child(3) {
						left: 448px;
						top: 28px;
					}
					&:nth-child(4) {
						left: 658px;
						top: 28px;
					}
					&:nth-child(5) {
						left: 868px;
						top: 28px;
					}
					&:nth-child(6) {
						left: 1078px;
						top: 28px;
					}
					&:nth-child(7) {
						left: 1288px;
						top: 28px;
					}
					&:nth-child(8) {
						left: 1498px;
						top: 28px;
					}

					&:nth-child(9) {
						left: 133px;
						top: 133px;
					}
					&:nth-child(10) {
						left: 343px;
						top: 133px;
					}
					&:nth-child(11) {
						left: 553px;
						top: 133px;
					}
					&:nth-child(12) {
						left: 763px;
						top: 133px;
					}
					&:nth-child(13) {
						left: 973px;
						top: 133px;
					}
					&:nth-child(14) {
						left: 1183px;
						top: 133px;
					}
					&:nth-child(15) {
						left: 1393px;
						top: 133px;
					}

					&:nth-child(16) {
						left: 238px;
						top: 236px;
					}
					&:nth-child(17) {
						left: 448px;
						top: 236px;
					}
					&:nth-child(18) {
						left: 658px;
						top: 236px;
					}
					&:nth-child(19) {
						left: 868px;
						top: 236px;
					}
					&:nth-child(20) {
						left: 1078px;
						top: 236px;
					}
					&:nth-child(21) {
						left: 1288px;
						top: 236px;
					}

					&:nth-child(22) {
						left: 343px;
						top: 343px;
					}
					&:nth-child(23) {
						left: 553px;
						top: 343px;
					}
					&:nth-child(24) {
						left: 763px;
						top: 343px;
					}
					&:nth-child(25) {
						left: 973px;
						top: 343px;
					}
					&:nth-child(26) {
						left: 1183px;
						top: 343px;
					}
				}
			}
			.swiper-button-wrap {
				position: absolute;
				bottom: -82px;
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
				.prev2 {
					cursor: pointer;
					width: 16px;
					height: 16px;
					background: #f7f7f7 url('~assets/icons/ic_e2_left1.png') no-repeat center center;
					transition: 0.3s;
					&:hover {
						transform: scale(1.2);
					}
				}
				.next2 {
					width: 16px;
					cursor: pointer;
					height: 16px;
					background: #f7f7f7 url('~assets/icons/ic_e2_right1.png') no-repeat center center;
					transition: 0.3s;
					&:hover {
						transform: scale(1.2);
					}
				}
			}
		}
	}
}
</style>
