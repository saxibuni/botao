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
			<h2>服务优势</h2>
			<p>Service advantages</p>
			<div>
				<div class="left">
					<div :class="{active:iconIndex==0}" @click="iconClick(0)">
						<i>
							<img src="~assets/icons/ic_e2_part2_a1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_a2.png" alt="" />
						</i>
						<span>产品优势</span>
					</div>
					<div :class="{active:iconIndex==1}" @click="iconClick(1)">
						<i>
							<img src="~assets/icons/ic_e2_part2_b1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_b2.png" alt="" />
						</i>
						<span>价格优势</span>
					</div>
					<div :class="{active:iconIndex==2}" @click="iconClick(2)">
						<i>
							<img src="~assets/icons/ic_e2_part2_c1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_c2.png" alt="" />
						</i>
						<span>配合优势</span>
					</div>
					<div :class="{active:iconIndex==3}" @click="iconClick(3)">
						<i>
							<img src="~assets/icons/ic_e2_part2_d1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_d2.png" alt="" />
						</i>
						<span>退补优势</span>
					</div>
					<div :class="{active:iconIndex==4}" @click="iconClick(4)">
						<i>
							<img src="~assets/icons/ic_e2_part2_e1.png" alt="" />
							<img src="~assets/icons/ic_e2_part2_e2.png" alt="" />
						</i>
						<span>饰后优势</span>
					</div>
				</div>
				<div class="right">
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
										<img src="~assets/bg_e2_part2.jpg" alt="">
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

		<div class="page3">
			<h2>绿色建材让家越住越健康</h2>
			<p>Green building materials</p>
		</div>

		<div class="page4">
			<h2>私家花园定制</h2>
			<p>Private garden customization</p>
			<div class="box">
				<div class="left">
					<div>
					  <img src="~assets/bg_e2_part4_01.jpg" alt="">
						<b>01</b>
						<div class="text">
							<h3>个性设计</h3>
							<p>Personality design</p>
						</div>
						</div>
				</div>
				<div class="right">
					<div>
						<img src="~assets/bg_e2_part4_02.jpg" alt="">
						<b>02</b>
						<div class="text">
							<h3>专业团队</h3>
							<p>Professional team</p>
						</div>
					</div>

					<div>
						<img src="~assets/bg_e2_part4_03.jpg" alt="">
						<b>03</b>
						<div class="text">
							<h3>匠心工艺</h3>
							<p>Originality process</p>
						</div>
					</div>

					<div>
						<img src="~assets/bg_e2_part4_04.jpg" alt="">
						<b>04</b>
						<div class="text">
							<h3>精选材料</h3>
							<p>Selection of materials</p>
						</div>
					</div>

					<div>
						<img src="~assets/bg_e2_part4_05.jpg" alt="">
						<b>05</b>
						<div class="text">
							<h3>规范施工</h3>
							<p>Standard construction</p>
						</div>
					</div>

					<div>
						<img src="~assets/bg_e2_part4_06.jpg" alt="">
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
			<h2>全屋智能</h2>
			<p>Whole house intelligence</p>
			<ul>
				<li v-for="(item,i) in list" :key="i">
					<i></i>
					<div>
						<h2>{{item.title}}</h2>
					</div>
				</li>
			</ul>
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
		}
		> div {
			width: 1770px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			margin-top: 80px;
			.left {
				width: 313px;
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
				.swiper{
					width: 100%;
					position: relative;
					.wrap{
						display: flex;
						align-items: center;
						justify-content: space-between;
						height: 588px;
						.text{
						  flex: 1;
							height: 520px;
							padding: 95px 0 0 119px;
							box-sizing: border-box;
							background: #132132;
							h2{
								height: 20px;
								font-size: 20px;
								font-weight: 400;
								color: #EB551D;
							}
							h1{
								height: 35px;
								font-size: 36px;
								font-weight: 400;
								color: #FFFFFF;
								margin: 40px 0 38px 0;
							}
							div{
								height: 90px;
								p{
									font-size: 18px;
									font-weight: 400;
									color: #CCCCCC;
									line-height: 36px;
								}
							}
						}
						.img-wrap{
							width: 746px;
							height: 564px;
							img{
								width: 100%;
								height: 100%;
							}
						}
					}
					.swiper-button-wrap{
						position: absolute;
						left: 110px;
						bottom: 126px;
						z-index: 99;
						height: 40px;
						display: flex;
						align-items: center;
						div{
							cursor: pointer;
							outline: none;
							width: 30px;
							height: 30px;
							display: flex;
							align-items: center;
							justify-content: center;
							i{
								width: 30px;
								height: 30px;
								background: url('~assets/icons/ic_home_banner_left.png') no-repeat center center;
								background-size: 11px 21px;
							}
							&:hover{
								i{
									background: url('~assets/icons/ic_f4_left21.png') no-repeat center center;
									background-size: 11px 21px;
								}
							}
							&:nth-child(2){
								margin-left: 10px;
								i{
									width: 30px;
									height: 30px;
									background: url('~assets/icons/ic_home_banner_left.png') no-repeat center center;
									background-size: 11px 21px;
									transform: rotate(180deg) translateY(-1px);
								}
								&:hover{
									i{
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
	.page3{
		padding: 100px 0;
		height: 970px;
		background: url('~assets/bg_e2_part3.jpg') no-repeat;
		background-size: cover;

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
	}
	.page4{
			padding: 100px 0;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000000;
			text-align: center;
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
		}
		.box{
			display: flex;
			height: 830px;
			width: 1770px;
			margin: 0 auto;
			margin-top: 63px;
			.left{
				width: 490px;
				height: 830px;
				>div{
					overflow: hidden;
					position: relative;
					&::before{
						position: absolute;
						content: '';
						width: 100%;
						height: 100%;
						left: 0;
						top: 0;
						z-index: 2;
						background: rgba(0,0,0,.3);
						pointer-events: none;
					}
					&:hover{
						img{
							transform: scale(1.02);
						}
					}
					img{
						transition: .3s;
						width: 100%;
						height: 100%;
					}
				}
			}
			b{
				height: 26px;
				font-size: 34px;
				font-family: Gilroy-Bold;
				font-weight: bold;
				color: #FFFFFF;
				position: absolute;
				left: 70px;
				top: 44px;
				z-index: 3;
			}
			.text{
				z-index: 3;
				position: absolute;
				left: 69px;
				bottom: 59px;
				h3{
					height: 29px;
					font-size: 30px;
					font-weight: 400;
					color: #FFFFFF;
					margin-bottom: 23px;
				}
				p{
					font-family: Athene;
					text-transform: uppercase;
					height: 14px;
					font-size: 18px;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
			.right{
				margin-left: 10px;
				flex: 1;
				display: flex;
				flex-wrap: wrap;
				>div{
					overflow: hidden;
					position: relative;
					&::before{
						position: absolute;
						content: '';
						width: 100%;
						height: 100%;
						left: 0;
						top: 0;
						z-index: 2;
						background: rgba(0,0,0,.3);
						pointer-events: none;
					}
					img{
						transition: .3s;
						width: 100%;
						height: 100%;
					}
					&:hover{
						img{
							transform: scale(1.02);
						}
					}
					&:nth-child(1){
						width: 416px;
						height: 410px;
						margin-right: 10px;
					}
					&:nth-child(2){
						width: 834px;
						height: 410px;
					}
					&:nth-child(3){
						width: 416px;
						height: 410px;
						margin-top: 10px;
						margin-right: 10px;

					}
					&:nth-child(4){
						width: 412px;
						margin-right: 10px;
						margin-top: 10px;
						height: 410px;
					}
					&:nth-child(5){
						width: 412px;
						height: 410px;
						margin-top: 10px;
					}
				}
			}
		}
	}
	.page5{
		padding: 100px 0;
		height: 970px;
		background: url('~assets/bg_e2_part5.jpg') no-repeat;
		background-size:100% 100%;
		position: relative;
		&::after{
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(0,0,0,.55);
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
		}
	}
}
</style>
