<template>
	<div class="craft-manager">
		<Banner :data="bannerData" />
		<div class="content">
			<div class="page1">
				<div class="title">
					<h3 class="wow">施工流程</h3>
					<p class="wow">CONSTRUCTION PROCESS</p>
				</div>
				<div>
					<img src="~assets/bg_d3_part2.png" alt="" />
					<ul>
						<li v-for="(item, i) in page1Data" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
							<p>0{{ i + 1 }}</p>
							<p>{{ item.desc1 }}</p>
							<p>{{ item.desc2 }}</p>
							<p>{{ item.desc3 }}</p>
							<p v-if="item.desc4">{{ item.desc4 }}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="page2">
				<div class="title">
					<h3 class="wow">场容标准</h3>
					<p class="wow">FIELD CAPACITY STANDARD</p>
				</div>
				<div class="main">
					<img src="~assets/s_3.jpg" alt="" />
					<div class="circle wow">
						<div class="imgBox">
							<transition-group name="toggle-image">
								<div class="img" v-for="(item, index) in 8" v-show="active1Index == index" :key="index">
									<img src="~assets/bg_d3_part3.png" :key="index" />
								</div>
							</transition-group>
							<ul class="left">
								<li v-for="(v, i) in page2Data.left" :key="i" :class="active1Index == i ? 'active1' : ''" @click="active1Index = i">
									{{ v }}
									<span></span>
								</li>
							</ul>
							<ul class="right">
								<li v-for="(v, i) in page2Data.right" :key="i" :class="active1Index == i + 4 ? 'active1' : ''" @click="active1Index = i + 4">
									<span></span>
									{{ v }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="page3">
				<div class="title">
					<h3 class="wow">土建工艺标准</h3>
					<p class="wow">STANDARD OF CIVIL ENGINEERING</p>
				</div>
				<div class="main">
					<ul>
						<li v-for="(item, index) in page3Data" :key="index" class="wow" :style="{ 'animation-delay': 0.08 * index + 0.03 + 's' }">
							<div class="imgBox">
								<img :src="item.imgUrl" alt="" />
							</div>
							<div class="text">
								<p>0{{ index + 1 }}</p>
								<p>{{ item.desc1 }}</p>
								<p v-if="item.desc2">{{ item.desc2 }}</p>
								<div class="line"></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="page4">
				<div class="title">
					<h3 class="wow">质量验收</h3>
					<p class="wow">QUALITY ACCEPTANCE</p>
				</div>
				<img src="~assets/bg_d3_part5.jpg" alt="" />
				<div class="main">
					<div class="tab wow">
						<ul>
							<li v-for="(item, index) in page4Data" :key="index" :class="active2Index == index ? 'active2' : ''" @click="active2Index = index">
								<span></span>
								<p>{{ item }}</p>
							</li>
						</ul>
					</div>
					<div class="swiper wow">
						<swiper :options="swiperOptions1">
							<swiper-slide v-for="(item, index) in 9" :key="index">
								<div class="imgBox">
									<img src="~assets/bg_d3_part5_pic1.jpg" alt="" />
									<div>
										<img src="~assets/ic_c2_play.png" alt="" />
										<p>电验收-导线铺设</p>
									</div>
								</div>
							</swiper-slide>
						</swiper>
						<div class="swiper-pagination pagination2"></div>
						<div class="swiper-button-prev prev2"></div>
						<div class="swiper-button-next next2"></div>
					</div>
				</div>
			</div>
			<div class="page5">
				<div class="title">
					<h3 class="wow">质检体系</h3>
					<p class="wow">QUALITY INSPECTION SYSTEM</p>
				</div>
				<div class="main">
					<div class="left">
						<div class="tab">
							<el-tabs v-model="activeName">
								<el-tab-pane name="1">
									<span slot="label">
										<img src="~assets/icons/ic_d3_part6_a2.png" alt="" v-if="activeName == 1" />
										<!-- <img src="~assets/icons/ic_d3_part6_a1.png" alt="" v-else /> -->
										<i v-else></i>
										<p>7重质量巡检</p>
									</span>
									<div class="content">
										<ul>
											<li v-for="(v, i) in 7" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
												<p>
													<span></span>
													项目经理
												</p>
												<p>每周3次</p>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane name="2">
									<span slot="label">
										<img src="~assets/icons/ic_d3_part6_b2.png" alt="" v-if="activeName == 2" />
										<!-- <img src="~assets/icons/ic_d3_part6_b1.png" alt="" v-else /> -->
										<i v-else></i>
										<p>董事长投诉热线</p>
									</span>
									<div class="content">
										<ul>
											<li v-for="(v, i) in 7" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
												<p>
													<span></span>
													项目经理
												</p>
												<p>每周3次</p>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane name="3">
									<span slot="label">
										<img src="~assets/icons/ic_d3_part6_c2.png" alt="" v-if="activeName == 3" />
										<!-- <img src="~assets/icons/ic_d3_part6_c1.png" alt="" v-else /> -->
										<i v-else></i>
										<p>独立质检部门</p>
									</span>
									<div class="content">
										<ul>
											<li v-for="(v, i) in 7" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
												<p>
													<span></span>
													项目经理
												</p>
												<p>每周3次</p>
											</li>
										</ul>
									</div>
								</el-tab-pane>
								<el-tab-pane name="4">
									<span slot="label">
										<img src="~assets/icons/ic_d3_part6_d2.png" alt="" v-if="activeName == 4" />
										<!-- <img src="~assets/icons/ic_d3_part6_d1.png" alt="" v-else /> -->
										<i v-else></i>
										<p>微信群/工地直播</p>
									</span>
									<div class="content">
										<ul>
											<li v-for="(v, i) in 7" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
												<p>
													<span></span>
													项目经理
												</p>
												<p>每周3次</p>
											</li>
										</ul>
									</div>
								</el-tab-pane>
							</el-tabs>
						</div>
					</div>
					<div class="right">
						<img src="~assets/bg_d3_part6_right.jpg" alt="" />
						<div class="img">
							<transition-group name="toggle-image">
								<img class="clrcleimg" src="~assets/bg_d3_part6_roll.png" alt="" v-for="(v, i) in 4" :key="i" v-show="i + 1 == Number(activeName)" />
							</transition-group>
						</div>
						<div class="text">
							<p class="wow">7 HEAVY QUALITY</p>
							<p class="wow">INSPECTION</p>
						</div>
						<div class="choice">
							<img src="~assets/icons/ic_d3_part6_left.png" alt="" @click="choice(-1)" />
							<img src="~assets/icons/ic_d3_part6_right.png" alt="" @click="choice(1)" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Manager from './manager';
export default Manager;
</script>

<style lang="scss" scoped>
.craft-manager {
	.title {
		h3,
		p {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.page1 {
		ul {
			li {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
	.page2 {
		.main {
			.circle {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
	.page3 {
		.main {
			ul {
				li {
					opacity: 0;
					animation: fade-in 1s;
					animation-fill-mode: forwards;
				}
			}
		}
	}
	.page4 {
		.tab {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.swiper {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.page5 {
		.main {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			.right {
				p {
					opacity: 0;
					animation: slide-down-in 1s, fade-in 1s;
					animation-fill-mode: forwards;
				}
			}
		}
		.content {
			ul {
				li {
					opacity: 0;
					animation: fade-in 1s;
					animation-fill-mode: forwards;
				}
			}
		}
	}
}
.craft-manager {
	@keyframes fade-ine {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.content {
		.title {
			text-align: center;
			color: #000000;
			margin: 0 !important;
			h3 {
				font-size: 48px;
				line-height: 55px;
				margin-top: 99px;
			}
			p {
				font-size: 24px;
				font-family: Athene;
				margin-top: 20px;
			}
		}
		.page1 {
			height: 870px;
			> div {
				position: relative;
				margin: 160px 0;
				ul {
					display: flex;
					position: absolute;
					height: 100%;
					width: 100%;
					top: 0;
					left: 0;
					li {
						padding-left: 34px;
						border-left: 2px solid rgba(235, 85, 29, 0.2);
						position: absolute;
						width: 400px;
						&:nth-child(odd) {
							top: -20px;
						}
						&:nth-child(even) {
							bottom: 0;
						}
						&:nth-child(1) {
							height: 180px;
							margin-left: 43px;
							margin-top: -60px;
						}
						&:nth-child(2) {
							height: 190px;
							margin-left: 135px;
							margin-bottom: -40px;
							padding-top: 50px;
						}
						&:nth-child(3) {
							margin-left: 453px;
							height: 219px;
							margin-top: -40px;
						}
						&:nth-child(4) {
							margin-left: 615px;
							height: 192px;
							margin-bottom: -10px;
							padding-top: 50px;
						}
						&:nth-child(5) {
							height: 220px;
							margin-left: 891px;
							margin-top: -40px;
						}
						&:nth-child(6) {
							height: 201px;
							margin-left: 1106px;
							margin-bottom: -10px;
							padding-top: 60px;
						}
						&:nth-child(7) {
							height: 208px;
							margin-left: 1349px;
							margin-top: -65px;
						}
						&:nth-child(8) {
							right: 44px;
							padding-left: 0px;
							padding-right: 34px;
							border-left: none;
							border-right: 2px solid rgba(235, 85, 29, 0.2);
							text-align: right;
							width: 300px;
							height: 188px;
							padding-top: 50px;
							margin-bottom: -5px;
						}

						p {
							font-size: 18px;
							color: #666666;
							line-height: 30px;
							&:nth-of-type(1) {
								font-size: 22px !important;
								font-family: Gilroy;
								font-weight: bold;
								color: #eb551d !important;
								line-height: 30px;
							}
							&:nth-of-type(2) {
								font-size: 24px !important;
								color: #000000 !important;
								margin: 12px 0;
							}
						}
					}
				}
			}
		}
		.page2 {
			margin-top: 20px;
			height: 970px;
			position: relative;
			overflow: hidden;
			background-color: rgba(16, 33, 54, 0.9);
			.title {
				color: #ffffff;
			}
			.main {
				> img {
					height: 970px;
					width: 100%;
					position: absolute;
					left: 0;
					top: 0;
					z-index: -1;
				}
				.circle {
					box-sizing: border-box;
					padding: 172px;
					position: absolute;
					left: 50%;
					top: 87px;
					// transform: translateX(-50%) !important;
					margin-left: -470px;
					width: 940px;
					height: 940px;
					border: 1px solid rgba(225, 225, 225, 0.2);
					border-radius: 50%;
					border-top: 1px solid transparent;
					border-bottom: 1px solid transparent;
					.imgBox {
						width: 596px;
						height: 596px;
						position: relative;
						.img {
							position: absolute;
							opacity: 1;
							top: 0;
							width: 596px;
							height: 596px;
							border-radius: 50%;
							overflow: hidden;
							display: flex;
							justify-content: center;
							align-items: center;
							@include toggle-image();
							&:hover {
								img {
									transform: scale($imgScale);
								}
							}
							img {
								// animation: fade-ine 1s ease forwards;
								transition: transform 0.3s;
							}
						}
						ul {
							position: absolute;
							top: 24px;
							li {
								font-size: 22px;
								color: #ffffff;
								margin-bottom: 135px;
								display: flex;
								align-items: center;
								cursor: pointer;
								span {
									width: 12px;
									height: 12px;
									border: 2px solid #eb551d;
									border-radius: 50%;
								}
							}
							.active1 {
								span {
									background: #ec5a24;
								}
								color: #ec5a24;
							}
						}
						.left {
							left: 0;
							li {
								span {
									margin-left: 34px;
								}
								&:nth-child(1) {
									margin-left: -245px;
								}
								&:nth-child(2) {
									margin-left: -291px;
								}
								&:nth-child(3) {
									margin-left: -295px;
								}
								&:nth-child(4) {
									margin-left: -238px;
								}
							}
						}
						.right {
							right: 0;
							li {
								position: relative;
								span {
									margin-right: 34px;
								}
								&:nth-child(1) {
									left: 222px;
								}
								&:nth-child(2) {
									left: 290px;
								}
								&:nth-child(3) {
									left: 294px;
								}
								&:nth-child(4) {
									left: 237px;
								}
							}
						}
					}
				}
			}
		}
		.page3 {
			padding: 0 80px;
			.main {
				margin-top: 100px;
				ul {
					display: flex;
					justify-content: space-between;
					li {
						position: relative;
						height: 430px;
						width: 294px;
						&:nth-child(even) {
							.text {
								bottom: auto;
								top: 0;
							}
							.imgBox {
								clip-path: polygon(100% 39.5%, 100% 100%, 0 100%, 0 0);
							}
							.line {
								bottom: 0px;
								top: -305px;
							}
						}
						&:last-of-type {
							.text {
								border-right: none;
								height: auto;
								p {
									&:nth-of-type(2) {
										margin: 0;
										margin-top: 8px;
									}
								}
							}
							.line {
								display: none;
							}
						}
						.imgBox {
							width: 294px;
							height: 430px;
							position: absolute;
							clip-path: polygon(100% 0, 100% 60.5%, 0 100%, 0 0);
							overflow: hidden;
							&:hover {
								img {
									transform: scale($imgScale);
								}
							}
							img {
								transition: transform 0.3s;
							}
						}
						.text {
							position: absolute;
							right: -36px;
							text-align: right;
							bottom: 0;
							height: 95px;
							border-right: 2px solid #eb551d;
							padding-right: 34px;
							p {
								&:nth-of-type(1) {
									font-size: 22px;
									font-family: Gilroy;
									font-weight: bold;
									color: #eb551d;
									margin-top: -5px;
								}
								&:nth-of-type(2) {
									font-size: 22px;
									color: #000000;
									margin: 8px 0;
								}
								&:nth-of-type(3) {
									font-size: 18px;
									color: #666666;
								}
							}
							.line {
								position: absolute;
								right: -3px;
								bottom: -140px;
								height: 875px;
								width: 1px;
								background-image: linear-gradient(to bottom, #e7e7e7 0%, #e7e7e7 50%, transparent 70%);
								background-size: 1px 8px;
								background-repeat: repeat-y;
							}
						}
					}
				}
			}
		}
		.page4 {
			position: relative;
			margin-top: 140px;
			height: 885px;
			overflow: hidden;
			.title {
				color: #fff;
			}
			> img {
				position: absolute;
				left: 0;
				top: 0;
				z-index: -1;
			}
			.main {
				padding: 0 80px;
				.tab {
					margin: 0 auto;
					position: relative;
					box-sizing: border-box;
					width: 914px;
					height: 1px;
					margin: 50px auto 96px auto;
					background-image: linear-gradient(to right, #aaaaaa 0%, #aaaaaa 50%, transparent 70%);
					background-size: 8px 1px;
					background-repeat: repeat-x;
					ul {
						left: -33px;
						top: -4px;
						position: absolute;
						width: 980px;
						display: flex;
						justify-content: space-between;
						li {
							display: flex;
							flex-direction: column;
							align-items: center;
							cursor: pointer;
							span {
								box-sizing: border-box;
								width: 10px;
								height: 10px;
								border: 2px solid #aaaaaa;
								border-radius: 50%;
								background-color: #102136;
							}
							p {
								color: #aaaaaa;
								font-size: 18px;
								margin-top: 14px;
							}
						}
						.active2 {
							span {
								background-color: #eb551d;
								border: 2px solid #eb551d;
							}
							p {
								color: #eb551d;
							}
						}
					}
				}
				.swiper {
					height: 782px;
					width: 1760px;
					// animation: fade-ine 1s ease forwards;
					.imgBox {
						position: relative;
						width: 573px;
						height: 395px;
						> div {
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%);
							display: flex;
							flex-direction: column;
							align-items: center;
							img {
								width: 60px;
								height: 60px;
							}
							p {
								font-size: 18px;
								color: #ffffff;
								margin-top: 20px;
							}
						}
					}
					.swiper-container {
						height: 610px;
						.swiper-wrapper {
							left: 218px;
							top: 282px;
						}
					}
					.swiper-pagination {
						width: 66px;
						height: 12px;
						position: relative;
						left: 50%;
						top: -160px;
						transform: translateX(-50%);
						display: flex;
						/deep/.swiper-pagination-bullet {
							margin-right: 15px;
							box-sizing: border-box;
							width: 12px;
							height: 12px;
							border: 2px solid #ababab;
							border-radius: 0;
							background: transparent;
							opacity: 1;

							&:last-of-type {
								margin-right: 0;
							}
						}
						/deep/.swiper-pagination-bullet-active {
							border: 2px solid #eb551d !important;
						}
					}
					.swiper-button-prev,
					.swiper-button-next {
						position: relative;
						z-index: 999;

						&::after {
							color: #aaaaaa;
							font-size: 34px;
						}
						&:hover {
							&::after {
								color: #eb551d;
							}
						}
					}
					.swiper-button-prev {
						left: 5px;
						top: -162px;
					}
					.swiper-button-next {
						// margin-right: 40px;
						left: 1705px;
						top: -175px;
					}
				}
			}
		}
		.page5 {
			height: 970px;
			overflow: hidden;
			background: #e3e9f0;
			padding: 0 80px;
			.main {
				display: flex;
				justify-content: space-between;
				width: 1760px;
				height: 615px;
				margin-top: 60px;
				.left {
					background-color: #fff;
					flex: 1;
					.tab {
						// padding-left: 119px;
						/deep/.el-tabs__header {
							.el-tabs__nav-wrap {
								&::after {
									height: 1px;
									background-color: #eeeeee;
								}
								.el-tabs__nav-scroll {
									.el-tabs__nav {
										height: 153px;
										margin-left: 119px;
										.el-tabs__active-bar {
											// margin-left: 119px;
											height: 1px;
											background-color: #eb551d;
										}
										.is-active {
											color: #eb551d !important;
										}
										.el-tabs__item {
											height: 100%;
											position: relative;
											top: -23px;
											padding: 0;
											// margin-right: 95px;
											padding-right: 95px;
											&:nth-child(2) {
												span {
													i {
														display: block;
														background: url('~assets/icons/ic_d3_part6_a1.png') no-repeat;
														background-size: 100% 100%;
														width: 41px;
														height: 41px;
													}
												}
												&:hover {
													span {
														i {
															background: url('~assets/icons/ic_d3_part6_a2.png') no-repeat;
														}
													}
												}
											}
											&:nth-child(3) {
												span {
													i {
														display: block;
														background: url('~assets/icons/ic_d3_part6_b1.png') no-repeat;
														background-size: 100% 100%;
														width: 41px;
														height: 40px;
													}
												}
												&:hover {
													span {
														i {
															background: url('~assets/icons/ic_d3_part6_b2.png') no-repeat;
														}
													}
												}
											}
											&:nth-child(4) {
												span {
													i {
														display: block;
														background: url('~assets/icons/ic_d3_part6_c1.png') no-repeat;
														background-size: 100% 100%;
														width: 47px;
														height: 46px;
													}
												}
												&:hover {
													span {
														i {
															background: url('~assets/icons/ic_d3_part6_c2.png') no-repeat;
														}
													}
												}
											}
											&:nth-child(5) {
												span {
													i {
														display: block;
														background: url('~assets/icons/ic_d3_part6_d1.png') no-repeat;
														background-size: 100% 100%;
														width: 43px;
														height: 42px;
													}
												}
												&:hover {
													span {
														i {
															background: url('~assets/icons/ic_d3_part6_d2.png') no-repeat;
														}
													}
												}
											}
											&:hover {
												color: #eb551d !important;
											}
											span {
												display: flex;
												flex-direction: column;
												align-items: center;
												justify-content: center;
												margin-top: 42px;
												// position: relative;
												// top: 42px;
												p {
													font-size: 20px;
													// color: #000000;
													margin-top: 10px;
												}
											}
										}
									}
								}
							}
						}
						.content {
							animation: fade-ine 1s ease forwards;
							ul {
								margin-left: 120px;
								margin-top: 80px;
								display: flex;
								flex-wrap: wrap;
								justify-content: space-between;
								width: 655px;
								li {
									margin-bottom: 35px;
									width: 180px;
									p {
										font-size: 20px;
										&:nth-of-type(1) {
											color: #666666;
											display: flex;
											align-items: center;
											span {
												width: 5px;
												height: 5px;
												background: #dddddd;
												border-radius: 50%;
												margin-right: 19px;
											}
										}
										&:nth-of-type(2) {
											color: #132132;
											margin-left: 24px;
											margin-top: 10px;
										}
									}
								}
							}
						}
					}
				}
				.right {
					position: relative;
					width: 594px;
					height: 615px;
					> img {
						position: absolute;
						left: 0;
						top: 0;
					}
					.img {
						display: flex;
						position: relative;
						.clrcleimg {
							@include toggle-image();
							position: absolute;
							top: 57px;
							left: -50%;
							// transform: translateX(-50%);
							z-index: 2;
							// animation: fade-ine 1s ease forwards;
							// @include toggle-image();
						}
					}
					.text {
						text-align: right;
						position: absolute;
						right: 59px;
						top: 70px;
						p {
							font-size: 24px;
							font-family: Athene;
							color: #ffffff;
							line-height: 43px;
						}
					}
					.choice {
						display: flex;
						width: 86px;
						height: 34px;
						justify-content: space-between;
						position: absolute;
						right: 60px;
						bottom: 76px;
						img {
							display: inline-block;
							cursor: pointer;
							transition: transform 0.3s;

							&:nth-of-type(1) {
								&:hover {
									transform: scale(1.2) translateX(-5px);
								}
							}
							&:nth-of-type(2) {
								&:hover {
									transform: scale(1.2) translateX(5px);
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
