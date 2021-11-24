<template>
	<div class="whole-decoration">
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
			<h2 class="wow">服务流程</h2>
			<p class="wow">Service process</p>
			<div class="part">
				<ul>
					<li v-for="(item, i) in fwlcList" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
						<h2 @mouseover="onClick(i)">
							{{ i + 1 }}
							<i :class="{ active: item.active }">
								<b>
									<img :src="web_url+item.icon" alt="" />
								</b>
							</i>
						</h2>
						<p :class="{ active: item.active }">{{ item.title }}</p>
						<h3 :class="{ active: item.active }">{{ item.desc }}</h3>
					</li>
				</ul>
			</div>
		</div>
		<div class="page3">
			<h2 class="wow">服务团队</h2>
			<p class="wow">Service team</p>
			<ul>
				<li class="wow" v-for="(item,i) in fwtdList" :key="i">
					<div class="icon">
						<i>
							<img :src="web_url+item.icono" alt="">
							<img :src="web_url+item.iconw" alt="">
						</i>
					</div>
					<div class="text">
						<h4>{{item.title}}</h4>
						<p>{{item.desc}}</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="page4">
			<h2 class="wow">如何合理规划大宅别墅装修费用？</h2>
			<p class="wow">Villa decoration cost</p>

			<ul>
				<li class="wow" v-for="(item,i) in ghfyList" :key="i">
					<div v-if="i<=2">
						<span>{{item.title}}</span>
						<img :src="web_url+item.icon" alt="" />
					</div>
					<div v-else>
						<img :src="web_url+item.icon" alt="" />
						<span>{{item.title}}</span>
					</div>
					<p>{{item.desc}}</p>
				</li>
			</ul>
		</div>
		<div class="page5">
			<h2 class="wow">
				选择波涛装饰 · 选择一生一
				<span>“饰”</span>
			</h2>
			<p class="wow">After-sales service</p>
			<div :style="{background:'url('+web_url+btysInfo.bg+') no-repeat'}">
				<div class="wow" v-if="btysInfo.desc">
					<h1>{{btysInfo.title}}</h1>
					<p v-for="(item,i) in btysInfo.desc.split('\r\n')" :key="i">{{item}}</p>
					<h3>{{btysInfo.cjqd}}</h3>
				</div>
				<div class="wow">
					<h1>{{btysInfo.xztitle}}</h1>
					<p>{{btysInfo.xzdesc}}</p>
				</div>
			</div>
			<ul>
				<li class="wow" v-for="(item,i) in ysList" :key="i">
					<div class="icon" :style="{background:'url('+web_url+item.icon+') no-repeat'}">
					</div>
					<h2 v-html="item.desc">
					</h2>
				</li>


			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import WholeDecoration from './wholedecoration';
export default WholeDecoration;
</script>

<style lang="scss">
.whole-decoration {
	box-sizing: border-box;
	max-width: 1920px;
	overflow: hidden;
	margin: 0 auto;
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
	@keyframes bounce {
		0%,
		100%,
		20%,
		53%,
		80% {
			-webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
			transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
			-webkit-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		40%,
		43% {
			-webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			-webkit-transform: translate3d(0, -30px, 0);
			-ms-transform: translate3d(0, -30px, 0);
			transform: translate3d(0, -30px, 0);
		}
		70% {
			-webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
			-webkit-transform: translate3d(0, -15px, 0);
			-ms-transform: translate3d(0, -15px, 0);
			transform: translate3d(0, -15px, 0);
		}
		90% {
			-webkit-transform: translate3d(0, -4px, 0);
			-ms-transform: translate3d(0, -4px, 0);
			transform: translate3d(0, -4px, 0);
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
		padding: 98px 0 0 0;
		height: 969px;
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
		.part {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 588px;
			background: url('~assets/bg_e1_part2.png') center center;
			background-size: cover;
			ul {
				li {
					width: 160px;
					position: absolute;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					opacity: 0;
					animation: fade-in 1s;
					animation-fill-mode: forwards;
					h2 {
						width: 25px;
						height: 25px;
						background: #ffffff;
						border: 2px solid #eb551d;
						border-radius: 50%;
						text-align: center;
						line-height: 20px;
						font-size: 16px;
						font-family: Gilroy-Bold;
						font-weight: bold;
						color: #eb551d;
						margin-bottom: 22px;
						cursor: pointer;
						position: relative;
						i {
							&.active {
								transform: translate(-50%, -50%) scale(1);
							}
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%) scale(0);
							transition: transform 0.3s;
							width: 110px;
							height: 110px;
							border: 1px solid rgba(235, 85, 29, 0.2);
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							b {
								width: 92px;
								height: 92px;
								background: #eb551d;
								border-radius: 50%;
								display: flex;
								align-items: center;
								justify-content: center;
								img {
									width: 41px;
								}
							}
						}
					}
					p {
						width: 100%;
						font-size: 18px;
						font-weight: 700;
						color: #ffffff;
						line-height: 1;
						text-align: center;
						transition: 0.3s;
						&.active {
							font-size: 24px;
							margin-top: 40px;
						}
					}
					h3 {
						width: 268px;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						line-height: 36px;
						margin-top: 24px;
						position: absolute;
						top: 100%;
						left: 50%;
						transform: translateX(-50%) scale(0);
						overflow: hidden;
						text-align: center;
						transition: transform 0.3s;
						pointer-events: none;
						transform-origin: top;
						&.active {
							transform: translateX(-50%) scale(1);
						}
					}
					&:nth-child(1) {
						top: 111px;
						left: 0;
						h3 {
							left: 0;
							transform: translateX(0) scale(0);
							&.active {
								transform: translateX(0) scale(1);
							}
						}
					}
					&:nth-child(2) {
						top: 71px;
						left: 120px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(3) {
						top: 164px;
						left: 196px;
					}
					&:nth-child(4) {
						top: 44px;
						left: 288px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(5) {
						top: 106px;
						left: 388px;
					}
					&:nth-child(6) {
						top: 39px;
						left: 521px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(7) {
						top: 125px;
						left: 600px;
					}
					&:nth-child(8) {
						top: 31px;
						left: 736px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(9) {
						top: 125px;
						left: 838px;
					}
					&:nth-child(10) {
						top: -12px;
						left: 928px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(11) {
						top: 71px;
						left: 1035px;
					}
					&:nth-child(12) {
						top: 35px;
						left: 1188px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}

					&:nth-child(13) {
						top: 125px;
						left: 1287px;
					}

					&:nth-child(14) {
						top: 39px;
						left: 1395px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}

					&:nth-child(15) {
						top: 66px;
						left: 1529px;
					}

					&:nth-child(16) {
						top: 24px;
						left: 1651px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(17) {
						top: 103px;
						left: 1761px;
						h3 {
							right: 0;
							left: auto;
							transform: translateX(0) scale(0);
							&.active {
								transform: translateX(0) scale(1);
							}
						}
					}

					&:nth-child(2),
					&:nth-child(4),
					&:nth-child(6),
					&:nth-child(8),
					&:nth-child(10),
					&:nth-child(12),
					&:nth-child(14),
					&:nth-child(16) {
						p {
							&.active {
								margin-top: -50px;
							}
						}
						h3 {
							width: 350px;
							position: absolute;
							bottom: 500%;
							top: auto;
							color: #333;
						}
					}
				}
			}
		}
	}
	.page3 {
		height: 970px;
		padding: 100px 0 0 0;
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
			display: flex;
			flex-wrap: wrap;
			margin-top: 68px;
			padding: 0 0 0 80px;
			position: relative;
			li {
				display: flex;
				height: 305px;
				border-left: 1px solid #dddddd;
				padding-left: 36px;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				&:nth-child(1) {
					animation-delay: 0.1s;
					width: 480px;
					padding-top: 10px;
				}
				&:nth-child(2) {
					animation-delay: 0.2s;
					padding-top: 10px;
					width: 504px;
				}
				&:nth-child(3) {
					animation-delay: 0.3s;
					padding-top: 10px;
					width: 492px;
				}
				&:nth-child(4) {
					animation-delay: 0.4s;
					padding-top: 10px;
					width: 350px;
				}
				&:nth-child(5) {
					animation-delay: 0.5s;
					width: 480px;
					margin-left: 240px;
					padding-top: 58px;
				}
				&:nth-child(6) {
					padding-top: 58px;
					animation-delay: 0.6s;
					width: 480px;
				}
				&:nth-child(7) {
					padding-top: 58px;
					width: 479px;
					animation-delay: 0.7s;
				}
				.icon {

						&:hover {

						}
				}
				.icon {
					width: 100px;
					height: 100px;
					border: 2px solid rgba(235, 85, 29, 0.5);
					border-radius: 50%;
					margin-right: 32px;
					cursor: pointer;
					position: relative;
					&:hover{
						background: #EB551D;
						img{
							opacity: 0;
							&:nth-child(2){
								opacity: 1;
							}
						}
					}
					img{
						position: absolute;
						left: 50%;
						top: 50%;
						max-width: 40px;
						transform: translate(-50%,-50%);
						opacity: 1;
						transition: .3s;
						&:nth-child(2){
							opacity: 0;
						}
					}
				}
				.text {
					h4 {
						font-size: 24px;
						font-weight: 700;
						color: #000000;
						margin-bottom: 18px;
						margin-top: 10px;
					}
					p {
						font-size: 18px;
						font-weight: 400;
						color: #333333;
						line-height: 34px;
						white-space: pre-wrap;
					}
				}
			}

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: url('~assets/bg_e1_part3.png') no-repeat 0 center;
				background: 100% auto;
				pointer-events: none;
			}
		}
	}
	.page4 {
		height: 970px;
		padding: 100px 0 0 0;
		background: #eb551d url('~assets/bg_e1_part4b.jpg') no-repeat;
		background-size: 100% 100%;
		position: relative;
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
		ul {
			li {
				position: absolute;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				&:hover {
					div {
						img {
							animation: bounce 1s;
						}
					}
				}
				div {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-bottom: 43px;
					img {
						width: 41px;
						margin-left: 20px;
					}
					span {
						font-size: 30px;
						font-weight: 400;
						color: #ffffff;
					}
				}
				p {
					font-size: 18px;
					font-weight: 400;
					color: #eeeeee;
					line-height: 1;
					text-align: right;
					padding-right: 65px;
				}
				&:nth-child(1) {
					top: 251px;
					left: 0;
					width: 675px;
					animation-delay: 0.2s;
					div {
						margin-bottom: 36px;
						img {
							width: 41px;
						}
					}
				}
				&:nth-child(2) {
					top: 461px;
					width: 675px;
					left: 0;
					animation-delay: 0.6s;
					div {
						img {
							width: 45px;
						}
					}
				}
				&:nth-child(3) {
					top: 683px;
					width: 675px;
					left: 0;
					animation-delay: 1s;
					div {
						img {
							width: 34px;
						}
					}
					p {
						padding-right: 58px;
					}
				}

				&:nth-child(4) {
					top: 251px;
					right: 0;
					width: 622px;
					animation-delay: 0.4s;
					div {
						margin-bottom: 25px;
						justify-content: start;
						img {
							width: 34px;
							margin-right: 20px;
							margin-left: 0;
						}
					}
					p {
						text-align: left;
						line-height: 34px;
						padding-left: 54px;
						width: 490px;
					}
				}

				&:nth-child(5) {
					top: 524px;
					right: 0;
					animation-delay: 0.8s;
					width: 622px;
					div {
						margin-bottom: 25px;
						justify-content: start;
						img {
							width: 34px;
							margin-right: 20px;
							margin-left: 0;
						}
					}
					p {
						text-align: left;
						padding-left: 54px;
						line-height: 34px;
						width: 520px;
					}
				}
				&:nth-child(6) {
					top: 777px;
					right: 0;
					animation-delay: 1.2s;
					width: 622px;
					div {
						justify-content: start;
						margin-bottom: 25px;
						img {
							width: 40px;
							margin-right: 20px;
							margin-left: 0;
						}
					}
					p {
						text-align: left;
						padding-left: 54px;
						line-height: 34px;
					}
				}
			}
		}
	}
	.page5 {
		padding: 100px 0 110px 0;

		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000;
			text-align: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			span {
				color: rgba(235, 85, 29, 1);
			}
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
		> div {
			background-size: 100% 100%!important;
			display: flex;
			height: 620px;
			width: 1760px;
			margin: 60px auto 0 auto;
			> div {
				width: 50%;
				height: 620px;
				&:nth-child(1) {
					opacity: 0;
					animation: slide-down-in 1s, fade-in 1s;
					animation-fill-mode: forwards;
					padding: 90px 0 0 95px;
					h1 {
						font-size: 36px;
						font-weight: 400;
						font-style: italic;
						color: #132132;
						margin-bottom: 15px;
					}
					p {
						font-size: 18px;
						font-weight: 400;
						color: #666666;
						line-height: 44px;
						display: flex;
						align-items: center;
						&::before {
							content: '';
							margin-right: 22px;
							width: 12px;
							height: 12px;
							background: url('~assets/icons/ic_home_popup_close.png') no-repeat;
							background-size: 100% 100%;
						}
					}
					h3 {
						height: 23px;
						font-size: 24px;
						font-weight: 400;
						color: #eb551d;
						line-height: 44px;
						margin-top: 20px;
					}
				}
				&:nth-child(2) {
					position: relative;
					opacity: 0;
					animation: slide-down-in 1.5s, fade-in 1.5s;
					animation-fill-mode: forwards;
					h1 {
						position: absolute;
						height: 35px;
						font-size: 36px;
						font-weight: 400;
						font-style: italic;
						color: #ffffff;
						top: 90px;
						left: 448px;
					}
					p {
						position: absolute;
						top: 498px;
						height: 24px;
						font-size: 24px;
						font-weight: 400;
						color: #ffffff;
						line-height: 44px;
						left: 404px;
					}
				}
			}
		}
		> ul {
			display: flex;
			width: 1760px;
			height: 425px;
			background: #e84e14;
			margin: 0 auto;
			padding-top: 121px;
			li {
				width: 20%;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				&:hover {
					.icon {
						animation: bounce 1s;
					}
				}
				.icon {
					width: 89px;
					height: 89px;
					border: 2px solid #ffffff;
					margin: 0 auto;
					background-size: 46px auto!important;
					background-position: center center!important;
				}
				h2 {
					margin-top: 35px;
					text-align: center;
					font-size: 24px;
					font-weight: 400;
					color: #ffffff;
					line-height: 36px;
					white-space: pre-wrap;
				}
				&:nth-child(1) {
					animation-delay: 0.1s;

				}

				&:nth-child(2) {
					animation-delay: 0.2s;

				}

				&:nth-child(3) {
					animation-delay: 0.3s;

				}

				&:nth-child(4) {
					animation-delay: 0.4s;

				}

				&:nth-child(5) {
					animation-delay: 0.5s;

				}
			}
		}
	}
}
</style>
