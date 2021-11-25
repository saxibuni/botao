<template>
	<div class="soft-decoration">
		<div class="page1">
			<img :src="web_url+banner.litpic" alt="" />
			<div class="text">
				<h2>{{banner.title}}</h2>
				<p>{{banner.etitle}}</p>
			</div>
			<img class="mask" src="~assets/bg_e1_banner_left.png" alt="" />
			<div class="arrow"></div>
			<div class="arrow"></div>
			<div class="arrow"></div>
		</div>
		<div class="page2">
			<h2 class="wow">软装配饰定制</h2>
			<p class="wow">Deserve to act the role of custom</p>

			<ul>
				<li class="wow" v-for="(item,i) in psdzList" :key="i">
					<img :src="web_url+item.img" alt="" />
					<div>
						<p>{{item.title}}</p>
						<h6>{{item.etitle}}</h6>
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
						<ICountUp :endVal="250" :options="options1"></ICountUp>
						沪上精装楼盘
					</h2>
					<div class="swiper">
						<swiper :options="swiperOptions" ref="mywiper">
							<swiper-slide v-for="(item, i) in rzalList" :key="i">
								<div :class="{ active: swiperIndex == i }" @click="onSelect(i)">
									<span>{{ item.title }}</span>
								</div>
							</swiper-slide>
						</swiper>

						<div style="pointer-events:auto; opacity:1;cursor: pointer;" class="swiper2-button-prev" @click="onClick(-1)"></div>
						<div style="pointer-events:auto; opacity:1;cursor: pointer;" class="swiper2-button-next" @click="onClick(1)"></div>
					</div>
					<div class="text" :class="{ active: textActive }" v-if="rzalList[swiperIndex]">
						<h2>{{rzalList[swiperIndex].title}}</h2>
						<h3>{{rzalList[swiperIndex].fgmj}}</h3>
						<p>{{rzalList[swiperIndex].desc}}</p>
						<Button text="案例详情" @click.native="$router.push({ name: 'case-detail' })"></Button>
					</div>
				</div>
				<div class="right wow">
					<img v-if="rzalList[swiperIndex]" :src="web_url+rzalList[swiperIndex].img" alt="" />
				</div>
			</div>
		</div>
		<div class="page4">
			<h2 class="wow">软装设计师</h2>
			<p class="wow">Soft Designer</p>

			<div class="swiper">
				<swiper :options="bannerSwiperOptions">
					<swiper-slide class="wow" v-for="(item, i) in rzsjsList" :key="i" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
						<div class="box">
							<div class="img-wrap" @click="$router.push({ name: 'design-detail',query:{id:item.id} })">
								<img :src="web_url+item.img" alt="" />
								<div>
									<h3>{{item.title}}</h3>
									<p>{{item.sjssx}} 丨 {{item.cysj}}经验</p>
								</div>
							</div>
							<div class="text">
								<p><i></i></p>
								<h5>{{item.sjln}}</h5>
								<Button text="了解设计师" @click.native="$router.push({ name: 'design-detail',query:{id:item.id} })"></Button>
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
				<li class="wow" v-for="(item,i) in rzfwlcList" :key="i">
					<img :src="web_url+item.img" alt="" />
					<b>0{{i+1}}</b>
					<div>
						<p>{{item.desc}}</p>
					</div>
				</li>
			</ul>
		</div>

		<div class="page6">
			<h2 class="wow">软装配选</h2>
			<p class="wow">Soft assembly elected</p>
			<div>
				<ul>
					<li class="wow" :class="{active:page6Index==i}" v-for="(item,i) in rzpxList" :key="i" @mouseover="page6Index=i">
						<div>
							<i>
								<img :src="web_url+item.iconw" alt="" />
								<img :src="web_url+item.icono" alt="" />
							</i>
							<h3>{{item.title}}</h3>
							<p>{{item.etitle}}</p>
						</div>
					</li>
				</ul>
				<div class="img-wrap" :class="{active:page6Index==i}" v-for="(item,i) in rzpxList" :key="i">
						<img :src="web_url+item.img" alt="" />
				</div>
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
			animation: slide-down-in 1s, fade-in 1s;
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
					animation-delay: 0.1s;
				}
				&:nth-child(2) {
					top: 591px;
					left: 257px;
					width: 240px;
					animation-delay: 0.2s;
					height: 240px;
				}

				&:nth-child(3) {
					top: 304px;
					left: 575px;
					width: 361px;
					height: 361px;
					animation-delay: 0.3s;
					z-index: 3;
				}

				&:nth-child(4) {
					top: 419px;
					left: 900px;
					width: 265px;
					animation-delay: 0.4s;
					height: 265px;
				}

				&:nth-child(5) {
					top: 661px;
					left: 789px;
					width: 187px;
					animation-delay: 0.5s;
					height: 187px;
				}

				&:nth-child(6) {
					top: 352px;
					left: 1228px;
					width: 215px;
					animation-delay: 0.6s;
					height: 215px;
				}
				&:nth-child(7) {
					top: 602px;
					left: 1322px;
					width: 196px;
					animation-delay: 0.7s;
					height: 196px;
				}
				&:nth-child(8) {
					top: 359px;
					left: 1518px;
					width: 295px;
					animation-delay: 0.8s;
					height: 295px;
				}
			}
		}
		> div {
			opacity: 0;
			animation: fade-in 3s;
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
			color: #fff;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
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
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
				z-index: 6;
				> h2 {
					padding-left: 80px;
					span {
						font-size: 62px;
						font-family: Gilroy-Bold;
						font-weight: bold;
						color: #eb551d;
						margin-right: 21px;
						display: inline-block;
						width:145px;
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
						transition: transform 0.3s;
						&:hover {
							background: url('~assets/icons/ic_home_b3_top_orange.png') no-repeat center center;
							background-size: 26px auto;
							transform: scale(1.2);
						}
					}
					.swiper2-button-next {
						position: absolute;
						bottom: -60px;
						left: 50%;
						width: 50px;
						height: 50px;
						background: url('~assets/icons/ic_home_b3_down_white.png') no-repeat center center;
						margin-left: -25px;
						background-size: 26px auto;
						transition: transform 0.3s;
						&:hover {
							background: url('~assets/icons/ic_home_b3_down_orange.png') no-repeat center center;
							background-size: 26px auto;
							transform: scale(1.2);
						}
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
					transition: 0.3s;
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
					.button-wrap {
						width: 170px;
					}
					&.active {
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
				img {
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
			color: #000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.swiper {
			width: 1770px;
			margin: 0 auto;
			margin-top: 60px;
			position: relative;
			.swiper-slide {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
			.box {
				box-sizing: border-box;
				margin-bottom: 50px;
				.img-wrap {
					height: 510px;
					position: relative;
					overflow: hidden;
					cursor: pointer;
					&:hover {
						img {
							transform: scale(#{$imgScale});
						}
					}
					img {
						width: 100%;
						height: 100%;
						transition: 0.3s;
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
						margin: 0 0 23px 0;
						i {
							display: block;
							margin: 0 auto;
							width: 17px;
							height: 15px;
							background: url('~assets/icons/ic_e3_part4_yin.png') no-repeat center center;
							background-size: 17px auto;
						}
					}
					h5 {
						font-size: 18px;
						font-weight: 400;
						color: #333333;
						line-height: 30px;
						text-align: center;
						margin-bottom: 35px;
						@include line-clamp(2);
						height: 60px;
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
					box-sizing: border-box;
					margin: 0 30px;
					.swiper-pagination-bullet {
						box-sizing: border-box;
						cursor: pointer;
						border-radius: 0;
						width: 12px;
						height: 12px;
						background: transparent;
						opacity: 1;
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
					position: absolute;
					left: 0;
					background: url('~assets/icons/ic_e2_part7_left.png') no-repeat center center;
					background-size: 9px 16px;
					transition: transform 0.3s;
					&:hover {
						transform: scale(1.1);
						background: url('~assets/icons/ic_e2_left2.png') no-repeat center center;
						background-size: 9px 16px;
					}
				}
				.next {
					width: 16px;
					cursor: pointer;
					height: 16px;
					position: absolute;
					right: 0;
					background: url('~assets/icons/ic_e2_part7_right.png') no-repeat center center;
					background-size: 9px 16px;
					transition: transform 0.3s;
					&:hover {
						transform: scale(1.1);
						background: url('~assets/icons/ic_e2_right2.png') no-repeat center center;
						background-size: 9px 16px;
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
			color: #000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
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
				animation-delay: 0.2s;
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
					img {
						transform: scale(#{$imgScale});
					}
				}
				> img {
					width: 100%;
					height: 356px;
					transition: transform 0.3s;
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
						white-space: pre-wrap;
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
					animation-delay: 0.4s;
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
			color: #000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.img-wrap{
			width: 1760px;
			height: 735px;
			position: absolute;
			left: 0;
			top: 0;
			opacity: 0;
			transition:opacity .3s;
			img{
				width: 100%;
				height: 100%;
			}
			z-index: 1;
			&.active{
				opacity: 1;
			}
		}
		> div {
			width: 1760px;
			height: 735px;
			/* background: url('~assets/bg_e3_part6.jpg') center center; */
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
				z-index: 2;
			}
			ul {
				display: flex;

				li {
					width: calc(100% / 6);
					border-right: 2px solid rgba(255, 255, 255, 0.2);
					height: 735px;
					position: relative;
					z-index: 20;
					cursor: pointer;
					opacity: 0;
					animation: slide-down-in 2s, fade-in 2s;
					animation-fill-mode: forwards;
					&:hover,
					&.active {
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
						animation-delay: 0.15s;
						div {
							img {
								width: 52px;
							}
						}
					}

					&:nth-child(2) {
						animation-delay: 0.3s;
						div {
							img {
								width: 46px;
							}
						}
					}

					&:nth-child(3) {
						animation-delay: 0.45s;
						div {
							img {
								width: 33px;
							}
						}
					}

					&:nth-child(4) {
						animation-delay: 0.6s;
						div {
							img {
								width: 55px;
							}
						}
					}

					&:nth-child(5) {
						animation-delay: 0.75s;
						div {
							img {
								width: 39px;
							}
						}
					}

					&:nth-child(1) {
						animation-delay: 0.9s;
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
