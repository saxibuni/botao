<template>
	<div class="cherry-pick">
		<div class="page1">
			<template v-if="banner && banner.litpic">
				<img :src="web_url + banner.litpic" alt="" />
				<div class="text">
					<h2>{{ banner.title }}</h2>
					<p>{{ banner.etitle }}</p>
				</div>
				<img class="mask" src="~assets/bg_e1_banner_left.png" alt="" />
				<div class="arrow" @click="rollTo()"></div>
				<div class="arrow" @click="rollTo()"></div>
				<div class="arrow" @click="rollTo()"></div>
			</template>
		</div>

		<div class="page2">
			<h2 class="wow">服务优势</h2>
			<p class="wow">Service advantages</p>
			<div>
				<div class="left wow">
					<div :class="{ active: iconIndex == i }" @click="iconClick(i)" v-for="(item, i) in fwysList" :key="i">
						<i>
							<img :src="web_url + item.iconc" alt="" />
							<img :src="web_url + item.iconw" alt="" />
						</i>
						<span>{{ item.title }}</span>
					</div>
				</div>
				<div class="right wow">
					<div class="swiper">
						<swiper :options="bannerSwiperOptions" ref="myswiper">
							<swiper-slide v-for="(item, i) in fwysList" :key="i">
								<div class="wrap">
									<div class="text">
										<h2>{{ item.title }}</h2>
										<h1>{{ item.btitle }}</h1>
										<div>
											<p>{{ item.desc }}</p>
										</div>
									</div>
									<div class="img-wrap">
										<img :src="web_url + item.img" alt="" />
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
			<div :class="isIE ? 'ieClass' : 'circle'">
				<div class="father" v-for="(item, i) in yzyjkList" :key="i" :class="activeIndex == i ? 'active' + i : ''">
					<div class="content">
						<div class="container">
							<div class="imgBox">
								<img :src="web_url + item.img" alt="" />
								<div class="mask" :class="activeIndex == i ? 'activetext' : ''" v-if="!isIE">
									<p>{{ item.desc }}</p>
								</div>
							</div>
							<div class="text" :class="activeIndex == i ? 'active' : ''">
								<p>{{ item.title }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="circle2">
					<div class="box" v-for="(item, i) in yzyjkList" :key="i" @mouseover="fn(i)" @mouseout="fn(-1)"></div>
				</div>
			</div>
			<img src="~assets/yxcl2.png" alt="" v-if="isIE" class="img" />
			<img src="~assets/bg_e2_part3_00.png" alt="" class="img2" />
		</div>

		<div class="page4">
			<h2 class="wow">私家花园定制</h2>
			<p class="wow">Private garden customization</p>
			<div class="box">
				<div class="left wow">
					<div v-if="hydzList[0]">
						<img :src="web_url + hydzList[0].img" alt="" />
						<b>01</b>
						<div class="text">
							<h3>{{ hydzList[0].title }}</h3>
							<p>{{ hydzList[0].etitle }}</p>
						</div>
					</div>
				</div>
				<div class="right">
					<template v-for="(item, i) in hydzList">
						<div class="wow" :key="i" v-if="i > 0">
							<img :src="web_url + item.img" alt="" />
							<b>0{{ i + 1 }}</b>
							<div class="text">
								<h3>{{ item.title }}</h3>
								<p>{{ item.etitle }}</p>
							</div>
						</div>
					</template>
				</div>
			</div>
		</div>

		<div class="page5">
			<h2 class="wow">全屋智能</h2>
			<p class="wow">Whole house intelligence</p>
			<ul>
				<li v-for="(item, i) in qwznList" :key="i">
					<i></i>
					<p>{{ item.title }}</p>
					<div>
						<h2>
							<span>{{ item.title }}</span>
							<img :src="web_url + item.icon" alt="" />
						</h2>
						<div class="line"></div>
						<p>{{ item.desc }}</p>
					</div>
				</li>
			</ul>
		</div>

		<div class="page6">
			<h2 class="wow">
				<ICountUp :endVal="18000" :options="options1"></ICountUp>
				沉浸体验最潮家装逛展
			</h2>
			<p class="wow">5大主题展厅 10大品质生活体验区</p>
			<ul class="wow">
				<li v-for="(item, i) in jzgzList" :key="i">
					<h2>
						{{ item.title }}
					</h2>
					<h3>{{ item.ftitle }}</h3>
					<p>{{ item.desc }}</p>
				</li>
			</ul>
		</div>

		<div class="page7">
			<h2 class="wow">高端品牌直采</h2>
			<p class="wow">High-end brands</p>
			<div class="swipers">
				<div class="swiper-slides">
					<div
						class="imgs-wrap"
						:style="{ 'transition-delay': 0.015 * i + 0.03 + 's' }"
						:class="{ 'do-flip': applyFlipType == 1, 'do-flip-reverse': applyFlipType == 2 }"
						v-for="(item, i) in currentPortraitList"
						:key="i"
					>
						<div class="one" v-if="item != 'assets/white.png'">
							<div class="inner-one" :style="{ opacity: item != 'assets/white.png' ? 1 : 1 }">
								<div class="box">
									<img :src="item" alt="" />
								</div>
							</div>
						</div>
						<div class="two" v-if="item != 'assets/white.png'" :style="{ opacity: item == 'assets/white.png' ? 0 : 1 }">
							<div class="inner-two">
								<div class="box">
									<img :src="item" alt="" />
									<img :src="require('assets/white.png')" alt="" />
									<img :src="nextPortraitList[i] || require('assets/white.png')" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-button-wrap">
					<div class="prev prev2" @click="onPortraitListPrev()"></div>
					<div class="swiper-pagination2">
						<span
							class="swiper-pagination-bullet"
							:class="{ 'swiper-pagination-bullet-active': portraitListIndex == i }"
							@click="paginationFun(i)"
							v-for="(item, i) in portraitTotalPages"
							:key="i"
						></span>
					</div>
					<div class="next next2" @click="onPortraitListNext()"></div>
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
	@keyframes arrow {
		0% {
			opacity: 0;
		}
		33% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes arrow1 {
		0% {
			opacity: 0;
		}
		33% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
	}
	@keyframes arrow2 {
		0% {
			opacity: 0;
		}
		33% {
			opacity: 1;
		}
		40% {
			opacity: 0;
		}
	}
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
		.arrow {
			box-sizing: border-box;
			width: 15px;
			height: 15px;
			border: 2px solid #fff;
			position: absolute;
			bottom: 75px;
			left: 50%;
			transform: translateX(-50%) rotate(-45deg);
			z-index: 10;
			border-top: transparent;
			border-right: transparent;
			opacity: 0;
			animation: arrow 1.2s linear infinite;
			cursor: pointer;
			&:nth-of-type(2) {
				opacity: 0;
				bottom: 62px;
				animation: arrow1 1.2s linear infinite;
				animation-delay: 0.4s;
			}
			&:nth-of-type(3) {
				opacity: 0;
				bottom: 49px;
				animation: arrow2 1.2s linear infinite;
				animation-delay: 0.8s;
			}
		}
	}
	.page2 {
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
						transition: all 0.3s;
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
							width: 25px;
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
						color: #eb551d;
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
									white-space: pre-wrap;
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
		overflow: hidden;
		> h2 {
			height: 46px;
			font-size: 48px;
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
		> .img2 {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: -2px;
			width: 660px;
			height: 324px;
			clip-path: ellipse(330px 330px at 50% 100%);
			z-index: 10;
		}
		> .ieImg {
			width: 1640px;
			position: absolute;
			left: 49%;
			bottom: -0px;
			transform: translateX(-50%);
		}
		> .img {
			// width: 100%;
			// height: 100%;
			position: relative;
			top: 10px;
			left: 6px;
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
					transform-origin: 655px bottom;
					&:hover {
						cursor: pointer;
					}
					transform: rotate(-68.5deg) skewY(68.5deg);
					&:nth-of-type(2) {
						transform: rotate(-45.8deg) skewY(68.2deg);
						transform-origin: 652px 702px;
					}
					&:nth-of-type(3) {
						transform: rotate(-23.4deg) skewY(68.5deg);
						transform-origin: 646px 730px;
					}
					&:nth-of-type(4) {
						transform: rotate(-1deg) skewY(68.5deg);
						transform-origin: 645px 1845px;
					}
					&:nth-of-type(5) {
						transform-origin: 643px 632px;
						transform: rotate(22deg) skewY(68.5deg);
					}
					&:nth-of-type(6) {
						transform-origin: 641px 663px;
						transform: rotate(44.7deg) skewY(68.5deg);
					}
					&:nth-of-type(7) {
						transform-origin: 641px 674px;
						transform: rotate(67.4deg) skewY(68.3deg);
					}
					&:nth-of-type(8) {
						transform-origin: 641px 680px;
						transform: rotate(90deg) skewY(68.3deg);
					}
				}
			}
			.father {
				margin-top: 1px;
				// width: 976px;
				// height: 976px;
				width: 1329px;
				height: 1329px;
				transform: rotate(68.3deg);
				/* background: lightgoldenrodyellow; */
				position: absolute;
				overflow: hidden;
				border-radius: 50%;
				z-index: -1;
				transition: all 0.3s;
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
					z-index: 24;
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
						transform: rotate(-90deg);
						top: -22px;
						left: 404px;
					}
					.mask {
						left: 408px;
						top: -62px;
						transform: rotate(-90deg);
					}
					.text {
						left: 415px;
						top: 130px;
						transform: rotate(-90deg);
						clip-path: ellipse(510px 510px at -116% 100%);
						p {
							left: 100px;
							top: 144px;
						}
					}
				}
				&:nth-of-type(2) {
					transform: rotate(45.7deg);
					img {
						transform: rotate(-13deg);
						top: -40px;
						left: 424px;
					}
					.mask {
						left: 406px;
						top: -62px;
						transform: rotate(-68deg);
					}
					.text {
						left: 458px;
						top: 132px;
						transform: rotate(-67deg);
						clip-path: ellipse(510px 510px at -86% 152%);
						p {
							left: 104px;
							top: 97px;
						}
					}
				}
				&:nth-of-type(3) {
					transform: rotate(23.1deg);
					img {
						transform: rotate(-12deg);
						top: -43px;
						left: 424px;
					}
					.mask {
						left: 406px;
						top: -58px;
						transform: rotate(-45deg);
					}
					.text {
						left: 464px;
						top: 132px;
						transform: rotate(-46deg);
						clip-path: ellipse(510px 510px at -54% 185%);

						p {
							left: 102px;
							top: 90px;
						}
					}
				}
				&:nth-of-type(4) {
					transform: rotate(0.5deg);
					img {
						transform: rotate(-23deg);
						top: -34px;
						left: 435px;
					}
					.mask {
						left: 406px;
						top: -58px;
						transform: rotate(-22deg);
					}
					.text {
						left: 478px;
						top: 130px;
						transform: rotate(-20deg);
						clip-path: ellipse(510px 510px at 9% 213%);
						p {
							left: 86px;
							top: 90px;
						}
					}
				}
				&:nth-of-type(5) {
					transform: rotate(-22.1deg);
					img {
						transform: rotate(-1deg);
						top: -32px;
						left: 415px;
					}
					.mask {
						left: 406px;
						top: -58px;
						transform: rotate(0deg);
					}
					.text {
						left: 477px;
						top: 130px;
						transform: rotate(0deg);
						clip-path: ellipse(510px 510px at 76% 214%);
						p {
							left: 90px;
							top: 92px;
						}
					}
				}
				&:nth-of-type(6) {
					transform: rotate(-44.7deg);
					img {
						transform: rotate(-7deg);
						top: -40px;
						left: 417px;
					}
					.mask {
						left: 404px;
						top: -62px;
						transform: rotate(22deg);
					}
					.text {
						left: 460px;
						top: 130px;
						transform: rotate(24deg);
						clip-path: ellipse(510px 510px at 145% 188%);
						p {
							left: 104px;
							top: 88px;
						}
					}
				}
				&:nth-of-type(7) {
					transform: rotate(-67.3deg);
					img {
						transform: rotate(79deg);
						top: -49px;
						left: 421px;
					}
					.mask {
						left: 404px;
						top: -62px;
						transform: rotate(46deg);
					}
					.text {
						left: 456px;
						top: 133px;
						transform: rotate(-3deg);
						clip-path: ellipse(510px 510px at 76% 214%);
						p {
							transform: rotate(49deg);
							left: 112px;
							top: 82px;
						}
					}
				}
				p {
					white-space: pre-wrap;
				}
				&:nth-of-type(8) {
					transform: rotate(-90deg);
					img {
						position: absolute;
						z-index: 22;
						transform: rotate(69deg);
						top: -32px;
						left: 444px;
					}
					.mask {
						left: 405px;
						top: -64px;
						transform: rotate(68deg);
					}
					.text {
						left: 510px;
						top: 134px;
						border-radius: 0 !important;
						transform: rotate(69deg);
						clip-path: ellipse(510px 510px at 204% 100%);
						p {
							left: 76px;
							top: 138px;
						}
					}
				}
			}
			.active0 {
				transform: rotate(68.3deg) scale(1.06);
			}
			.active1 {
				transform: rotate(45.7deg) scale(1.06) !important;
			}
			.active2 {
				transform: rotate(23.1deg) scale(1.06) !important;
			}
			.active3 {
				transform: rotate(0.5deg) scale(1.06) !important;
			}
			.active4 {
				transform: rotate(-22.1deg) scale(1.06) !important;
			}
			.active5 {
				transform: rotate(-44.7deg) scale(1.06) !important;
			}
			.active6 {
				transform: rotate(-67.3deg) scale(1.06) !important;
			}
			.active7 {
				transform: rotate(-90deg) scale(1.06) !important;
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
				transform: rotate(21.6deg);
				.imgBox {
					overflow: hidden;

					.mask {
						position: absolute;
						width: 300px;
						height: 300px;
						background-color: rgba(0, 0, 0, 0);
						z-index: 23;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						// opacity: 0;
						// display: none;
						transition: all 0.3s;
						p {
							font-size: 18px;
							color: transparent;
							font-weight: 400;
							transition: all 0.3s;
							&:nth-of-type(1) {
								margin-bottom: 10px;
							}
						}
					}
					.activetext {
						// opacity: 1;
						background-color: rgba(0, 0, 0, 0.8);
						p {
							color: #fff !important;
						}
					}
				}
			}
		}
		.ieClass {
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
			.container {
				display: flex;
				// justify-content: space-between;
				width: 660px;
				// height: 150px;
				.imgBox {
					img {
					}
				}
				.text {
					position: relative;
					flex: 1;
					background: #eeeeee;
					p {
						font-size: 22px;
						font-family: AlibabaPuHuiTiM;
						color: #000000;
						position: absolute;
						top: 0;
						left: 0;
						z-index: 5;
					}
				}
			}
			.father {
				position: absolute;
				&:nth-of-type(1) {
					left: 704px;
					bottom: 508px;
				}
				&:nth-of-type(1) {
					left: 704px;
					bottom: 508px;
				}
				&:nth-of-type(1) {
					left: 704px;
					bottom: 508px;
				}
				&:nth-of-type(1) {
					left: 704px;
					bottom: 508px;
				}
				&:nth-of-type(1) {
					left: 704px;
					bottom: 508px;
				}
				&:nth-of-type(1) {
					left: 704px;
					bottom: 508px;
				}
				&:nth-of-type(1) {
					left: 704px;
					bottom: 508px;
				}
				&:nth-of-type(8) {
					left: 24px;
					top: 458px;
				}
			}
		}
		.circleMask {
			width: 975px;
			height: 975px;
			background: #eeeeee;
			border-radius: 50%;
			// z-index: 9;
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, 50%);
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
						animation-delay: 0.1s;
					}
					&:nth-child(2) {
						width: 834px;
						height: 410px;
						animation-delay: 0.2s;
					}
					&:nth-child(3) {
						width: 416px;
						height: 410px;
						margin-top: 10px;
						margin-right: 10px;
						animation-delay: 0.3s;
					}
					&:nth-child(4) {
						width: 412px;
						margin-right: 10px;
						margin-top: 10px;
						height: 410px;
						animation-delay: 0.4s;
					}
					&:nth-child(5) {
						width: 412px;
						height: 410px;
						margin-top: 10px;
						animation-delay: 0.5s;
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
					z-index: 999;
					i {
						background: #eb551d !important;
						&::before {
							content: '';
							background: #ed6a38;
							position: absolute;
							left: 50%;
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
							top: 50%;
							transform: translate(-50%, -50%);
							opacity: 0.1;
							z-index: -2;
							border-radius: 50%;
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
						width: 10px;
						height: 10px;
						top: 50%;
						transform: translate(-50%, -50%);
						opacity: 0.2;
						border-radius: 50%;
						transition: 0.3s;
						z-index: -1;
						animation: scale 2s infinite;
					}
					&::after {
						content: '';
						background: #ffffff;
						position: absolute;
						left: 50%;
						width: 10px;
						height: 10px;
						top: 50%;
						transform: translate(-50%, -50%);
						transition: 0.3s;
						opacity: 0.1;
						z-index: -2;
						border-radius: 50%;
						animation: scale2 2s infinite;
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
					@keyframes scale {
						0% {
							transform: translate(-50%, -50%) scale(1);
							opacity: 0.9;
						}
						100% {
							transform: translate(-50%, -50%) scale(4);
							opacity: 0;
						}
					}
					@keyframes scale2 {
						0% {
							transform: translate(-50%, -50%) scale(1);
							opacity: 0.9;
						}
						100% {
							transform: translate(-50%, -50%) scale(6);
							opacity: 0;
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
					position: relative;
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
					background: #fff;
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
		background-size: 977px 604px;
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
				width: 190px;
				display: inline-block;
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
					font-weight: 700;
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
		.swipers {
			width: 1660px;
			height: 515px;
			margin: 80px auto;
			position: relative;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;

			.swiper-slides {
				height: 515px;
				perspective: 1000px;

				.imgs-wrap {
					left: 28px;
					top: 28px;
					position: absolute;
					width: 131px;
					height: 131px;
					transition: margin-top 0.3s;

					transform-style: preserve-3d;
					&.do-flip {
						transition: transform 0.5s;
						transform: rotateY(-180deg);
					}
					&.do-flip-reverse {
						transition: transform 0.5s;
						transform: rotateY(180deg);
					}
					img {
						transition: transform 0.3s;
					}
					&:hover {
						margin-top: -5px;
						transition-delay: 0s !important;
						> div {
							.inner-one,
							.inner-two {
								box-shadow: 0px 0px 30px 1px rgba(8, 18, 29, 0.15);
							}
						}
						img {
							filter: none;
						}
					}
					> div {
						width: 131px;
						height: 131px;
						position: absolute;
						left: 0;
						top: 0;
						&.one {
							transform: rotateX(-0deg);
							z-index: 2;
						}
						&.two {
							transform: rotateY(-180deg);
						}
						.inner-one,
						.inner-two {
							overflow: hidden;
							transition: box-shadow 0.3s;
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: center;
							align-items: center;
							transform: rotate(45deg);
						}
						.inner-one {
							background: #fff;
							box-shadow: 0 0 10px 1px rgba(19, 33, 50, 0.1);
						}
						.inner-two {
							background: #fff;
							box-shadow: 0 0 10px 1px rgba(19, 33, 50, 0.1);
						}
						img {
							width: 100%;
							filter: grayscale(100%);
							transition: 0.3s;
						}
						.inner-one .box {
							transform: rotate(-45deg);
							position: relative;
							width: 110px;
							height: 63px;
							overflow: hidden;
							backface-visibility: hidden;
							img {
								position: absolute;
								left: 50%;
								top: 50%;
								width: 100%;
								transform: translate(-50%, -50%);
							}
							.img2 {
								width: 100%;
								height: 100%;
								background: #fff;
							}
						}

						.inner-two .box {
							transform: rotate(-45deg);
							position: relative;
							width: 110px;
							height: 63px;
							overflow: hidden;
							backface-visibility: hidden;
							img {
								position: absolute;
								left: 50%;
								top: 50%;
								width: 100%;
								transform: translate(-50%, -50%);
								background: #fff;
							}
							.img2 {
								background: #fff;
								width: 100%;
								height: 100%;
							}
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
						border: 2px solid #acacac;
						opacity: 1;
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
					background: url('~assets/icons/ic_e2_part7_left.png') no-repeat center center;
					background-size: 9px 16px;
					transition: transform 0.3s;
					&:hover {
						transform: scale(1.1);
						background: url('~assets/icons/ic_e2_part7_left_o.png') no-repeat center center;
						background-size: 9px 16px;
					}
				}
				.next2 {
					width: 16px;
					cursor: pointer;
					height: 16px;
					background: url('~assets/icons/ic_e2_part7_right.png') no-repeat center center;
					background-size: 9px 16px;
					transition: transform 0.3s;
					&:hover {
						transform: scale(1.1);
						background: url('~assets/icons/ic_e2_part7_right_o.png') no-repeat center center;
						background-size: 9px 16px;
					}
				}
			}
		}
	}
}
</style>
