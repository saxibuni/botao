<template>
	<div class="join-us">
		<div class="page1">
			<div class="left wow">
				<h2>
					人才理念—
					<br />
					任人唯贤有为有位
				</h2>
				<h4>TANLENT CONCEPT</h4>
			</div>
			<div class="right wow">
				<p>{{ desc }}</p>
				<Button @click.native="rollTo()" :text="'加入我们'"></Button>
			</div>
		</div>
		<div class="swiper-box wow">
			<div class="control">
				<div class="swiper-pre ju-pre"></div>
				<div class="swiper-next ju-next"></div>
			</div>
			<swiper :options="jsBannerOptions">
				<swiper-slide v-for="(v, i) in rclniList" :key="i">
					<div class="img-box">
						<img v-if="zpxx[0]"  :src="web_url + v.img" alt="" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="bottom-layer">
			<div class="xr" v-for="v in rclnList" :key="v.id">
				<div class="text-box wow">
					<div class="text" v-html="v.etitle"></div>
					<div>
						<h2>{{ v.title }}</h2>
					</div>
					<h3>{{ v.ftitle }}</h3>
					<p v-for="(value, index) in v.desc" :key="index" v-html="value"></p>
					<Button @click.native="rollTo()" :text="'加入我们'"></Button>
				</div>
				<div class="img-box wow">
					<img v-if="zpxx[0]"  :src="web_url + v.img" alt="" />
				</div>
			</div>
		</div>
		<div class="info">
			<h2 class="wow">招聘信息</h2>
			<h3 class="wow">RECREITMENT INFORMATION</h3>
			<ul>
				<li class="wow" v-for="(v, i) in zpxx" v-show="i < jobShowFlag" :key="v.id" :style="{ 'animation-delay': 0.03 * i + 0.03 + 's' }">
					<h2>{{ v.title }}</h2>
					<div class="icon">
						<i></i>
						<span>{{ v.update_time | formatTime }}</span>
						<i></i>
						<span>{{ v.num }}</span>
					</div>
					<div class="bar"></div>
					<div class="require">岗位要求</div>
					<ul>
						<li v-for="(value, index) in v.gwyq" :key="index">{{ value }}</li>
					</ul>
					<Button @click.native="openEmail(v.title)" :text="'立即申请'"></Button>
				</li>
			</ul>
			<Button :text="'更多职位'" @click.native="getMore" v-show="zpxx.length - jobShowFlag > 0"></Button>
			<h4 class="wow">人力资源部</h4>
			<p class="wow">
				<i></i>
				<span>{{rlzytel}}</span>
			</p>
			<p class="wow">
				<i></i>
				{{rlzyadd}}
			</p>
			<div class="out-box wow">
				<div class="img-box">
					<img :src="$store.state.footData.web_url+rlzyewm" v-if="zpxx[0]" alt="" />
				</div>
			</div>
			<p class="wow">扫码咨询</p>
		</div>
	</div>
</template>

<script lang="ts">
import JoinUs from './joinus';
export default JoinUs;
</script>

<style lang="scss">
html {
	.join-us {
		.page1 {
			.left {
				opacity: 0;
				animation: slide-left-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
			.right {
				opacity: 0;
				animation: slide-up-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
		}
		.swiper-box {
			opacity: 0;
			animation: slide-up-in 2s, fade-in 2s;
			animation-fill-mode: forwards;
		}
		.xr {
			.text-box {
				opacity: 0;
				animation: slide-left-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
			.img-box {
				opacity: 0;
				animation: slide-right-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
		}
		.yongr {
			.text-box {
				opacity: 0;
				animation: slide-right-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
			.img-box {
				opacity: 0;
				animation: slide-left-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
		}
		.yur {
			.text-box {
				opacity: 0;
				animation: slide-left-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
			.img-box {
				opacity: 0;
				animation: slide-right-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
		}
		.lr {
			.text-box {
				opacity: 0;
				animation: slide-right-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
			.img-box {
				opacity: 0;
				animation: slide-left-in 2s, fade-in 2s;
				animation-fill-mode: forwards;
			}
		}
		.info {
			> h2,
			h3 {
				opacity: 0;
				animation: slide-up-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
			> ul {
				li {
					opacity: 0;
					animation: fade-in 1s;
					animation-fill-mode: forwards;
				}
			}
			> h4,
			p,
			.out-box {
				opacity: 0;
				animation: slide-up-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.xr,
		.yongr,
		.yur,
		.lr,
		.info {
			.img-box {
				overflow: hidden;
				img {
					transition: all 0.3s;
				}
				&:hover img {
					transform: scale($imgScale);
				}
			}
		}
	}
}
.join-us {
	box-sizing: border-box;
	.page1 {
		display: flex;
		justify-content: space-between;
		padding: 120px 198px 0 196px;
		.left {
			h2 {
				font-size: 69px;
				color: #000000;
				line-height: 82px;
				font-weight: 600;
			}
			h4 {
				margin-top: 46px;
				font-size: 24px;
				font-family: Athene;
				color: #eb551c;
				line-height: 1;
			}
		}
		.right {
			p {
				margin-top: 55px;
				width: 570px;
				font-size: 20px;
				color: #666666;
				line-height: 40px;
			}
			.btn {
				margin: 0;
				margin-top: 92px;
			}
		}
	}
	.swiper-box {
		margin-top: 22px;
		.swiper-container {
			// overflow: visible !important;
			padding: 60px;
		}
		.swiper-wrapper {
			> div {
				transition: all 0.3s;
				> div {
					transition: all 0.3s;
				}
			}
		}
		.swiper-slide {
			transition: all 0.3s;
			overflow: inherit;
			transform: scale(1);
		}
		.swiper-slide-active {
			transform: scale(1.1);
			transition: all 0.3s;
			.img-box {
				position: relative;
				img {
					position: absolute;
					z-index: 12;
				}
				&::before,
				&::after {
					position: absolute;
					content: '';
					width: 30px;
					height: 30px;
					border-left: 8px solid #eb551d;
					border-top: 8px solid #eb551d;
				}
				&::before {
					top: 22px;
					left: 22px;
				}
				&::after {
					bottom: 22px;
					right: 22px;
					transform: rotate(180deg);
				}
			}
		}
		.swiper-slide-next {
			position: relative;
			z-index: -1 !important;
		}
		.img-box {
			position: relative;
			height: 484px;
			img {
				position: absolute;
				z-index: -1 !important;
				width: 100%;
				height: 100%;
			}
		}
		.control {
			display: flex;
			margin-bottom: 162px;
			margin-left: 197px;
			> div {
				position: static;
				&:first-child {
					margin-right: 34px;
				}
			}
		}
	}
	.bottom-layer {
		.xr {
			display: flex;
			overflow: hidden;
			justify-content: space-between;
			margin-top: 228px;
			padding: 0 196px;
			.text-box {
				position: relative;
				margin-top: 247px;
				.text {
					position: absolute;
					width: 900px;
					top: -245px;
					left: -199px;
					font-size: 161px;
					font-family: Athene;
					color: #ededed;
					line-height: 175px;
				}
				h2 {
					font-size: 62px;
					color: #000000;
					line-height: 1;
				}
				> div {
					height: 62px;
					h2 {
						position: absolute;
						top: 0;
					}
				}
				h3 {
					margin-top: 31px;
					font-size: 30px;
					color: #ea551d;
					line-height: 1;
				}
				p {
					margin-top: 68px;
					margin-bottom: 102px;
					width: 650px;
					font-size: 20px;
					color: #666666;
					line-height: 40px;
				}
				.btn {
					margin: 0;
				}
			}
			.img-box {
				margin-top: 32px;
				margin-bottom: 119px;
				img {
					width: 653px;
					height: 779px;
				}
			}
		}
		> div:nth-child(2) {
			@extend .xr;
			margin-top: 0;
			flex-direction: row-reverse;
			.img-box {
				margin-bottom: 117px;
			}
			.text-box {
				text-align: right;
				.text {
					left: -68px;
				}
				> div {
					display: flex;
					justify-content: flex-end;
				}
			}
		}
		> div:nth-child(3) {
			@extend .xr;
			margin-top: 0;
		}
		> div:nth-child(4) {
			@extend .xr;
			margin-top: 0;
			flex-direction: row-reverse;
			.img-box {
				margin-top: 31px;
				margin-bottom: 180px;
			}
			.text-box {
				margin-top: 31px;
				text-align: right;
				.text {
					top: -37px;
					left: -64px;
					z-index: -1;
				}
				> div {
					display: flex;
					justify-content: flex-end;
				}
				p {
					margin-bottom: 0;
					span {
						font-size: 20px;
						color: #000;
					}
					&:not(:first-of-type) {
						margin-top: 28px;
					}
				}
				.button-wrap {
					margin-top: 69px;
					display: flex;
					justify-content: flex-end;
				}
			}
		}
	}
	.info {
		padding: 100px 196px 103px 196px;
		background-color: #f6f6f6;
		h2,
		h3 {
			text-align: center;
			color: #000000;
			line-height: 1;
		}
		h2 {
			font-weight: 600;
			font-size: 48px;
		}
		h3 {
			margin-top: 25px;
			font-size: 24px;
			font-family: Athene;
		}
		> ul {
			margin-top: 98px;
			display: flex;
			flex-wrap: wrap;
			> li {
				padding: 49px 28px 50px;
				height: 612px;
				background-color: #fff;
				transition: all 0.3s;
				h2 {
					text-align: start;
					font-size: 30px;
					line-height: 1;
				}
				.icon {
					margin-top: 20px;
					display: flex;
					i {
						display: inline-block;
						margin-right: 10px;
						vertical-align: middle;
						width: 20px;
						height: 20px;
						background: url(~assets/icons/ic_f4_time.png) no-repeat;
						background-size: 100%;
						&:nth-of-type(2) {
							background-image: url(~assets/icons/ic_f4_user.png);
						}
					}
					span {
						font-size: 18px;
						line-height: 25px;
						color: #333333;
						&:first-of-type {
							margin-right: 44px;
						}
						&:nth-of-type(2) {
							line-height: 1;
							font-size: 20px;
							color: #000;
						}
					}
				}
				.bar {
					margin-top: 40px;
					width: 427px;
					height: 1px;
					background: #333333;
					opacity: 0.2;
				}
				.require {
					margin-top: 48px;
					font-size: 16px;
					color: #999999;
					line-height: 1;
				}
				> ul {
					min-height: 210px;
					margin-top: 15px;
					li {
						width: 435px;
						font-size: 16px;
						color: #666666;
						line-height: 30px;
					}
				}
				.button-wrap {
					margin-top: 55px;
					.btn {
						margin: 0;
						background-color: #fff;
						border: 2px solid #eb551d;
						color: #eb551d;
						text-shadow: none;
						&::after,
						&::before {
							border-color: #eb551d;
						}
					}
				}
				&:not(:nth-child(3n)) {
					margin-right: 25px;
				}
				&:not(:nth-last-child(-n + 3)) {
					margin-bottom: 30px;
				}
				&:hover {
					box-shadow: 0px 0px 35px 0px rgba(8, 18, 29, 0.15);
					transform: translateY(-10px);
				}
			}
		}
		> .button-wrap {
			margin-top: 69px;
		}
		h4 {
			margin-top: 103px;
			text-align: center;
			font-weight: 600;
			font-size: 34px;
			line-height: 1;
		}
		p {
			margin-top: 70px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24px;
			line-height: 1;
			i {
				margin-right: 10px;
				width: 16px;
				height: 16px;
				background: url(~assets/icons/ic_f4_phone.png) no-repeat;
				background-size: 100%;
			}
			&:nth-of-type(1) {
				span {
					font-family: AlibabaPuHuiTiR;
				}
			}
			&:nth-of-type(2) {
				margin-top: 27px;
				i {
					width: 18px;
					height: 21px;
					background-image: url(~assets/icons/ic_f4_location.png);
				}
			}
			&:last-of-type {
				margin-top: 33px;
				font-size: 16px;
				color: #666666;
			}
		}
		.img-box {
			margin: 0 auto;
			margin-top: 53px;
			display: flex;
			width: 128px;
			height: 128px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.button-wrap {
		.btn {
			background-color: #eb551d;
		}
	}
}
</style>
