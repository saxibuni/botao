<template>
	<div class="design-detail" v-if="detailData.designer_info">
		<div class="crumbs">
			<p>
				<span @click="$router.push('/design/list')">设计名人堂</span>
				&nbsp;
				<i></i>
				&nbsp;
			</p>
			<p>
				<span>{{ detailData.designer_info.title }}</span>
			</p>
		</div>
		<div class="content">
			<div class="left wow">
				<h3 class="wow">{{ detailData.designer_info.title }}</h3>
				<p class="wow">{{ detailData.designer_info.station }}</p>
				<div class="info wow">
					<ul>
						<li>
							<i></i>
							<div>
								<p>从业时间</p>
								<p>{{ detailData.designer_info.cysj }}</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>毕业院校</p>
								<p>{{ detailData.designer_info.byyx }}</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>收费标准</p>
								<p>{{ detailData.designer_info.sfbz }}</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="idea wow">
					<i></i>
					<div>
						<p>设计理念</p>
						<p>{{ detailData.designer_info.sjln }}</p>
					</div>
				</div>
				<div class="honor wow">
					<div class="title">
						<i></i>
						<p>所获荣誉</p>
					</div>
					<div class="scroll" ref="scroll">
						<div class="text" ref="text">
							<p style="white-space: pre-wrap;" v-html="detailData.designer_info.hor"></p>
						</div>
					</div>
				</div>
				<Button :text="'找TA设计'" @click.native="$store.state.dialogDesign.design = true" />
			</div>
			<div class="right wow">
				<div class="swiperBox">
					<div class="swiper">
						<swiper :options="swiperOptions">
							<swiper-slide v-for="(item, i) in detailData.designer_info.imgs.split(',')" :key="i">
								<img :src="web_url + item" alt="" />
								<img src="~assets/bg_c2_part2_mask.png" alt="" />
							</swiper-slide>
						</swiper>
						<div class="btn">
							<div class="swiper-pagination"></div>
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
					</div>
					<div class="box"></div>
				</div>
				<img src="~assets/bg_c2_part2_text.png" alt="" />
			</div>
		</div>
		<div class="video" v-if="detailData.designer_info.video">
			<video :src="$store.state.footData.web_url + detailData.designer_info.video" preload="true">
				<source :src="$store.state.footData.web_url + detailData.designer_info.video" type="video/mp4" />
			</video>
			<div v-show="!video">
				<img src="~assets/icons/ic_c2_play.png" alt="" @click="play()" />
				<p>观看大咖专访视频</p>
			</div>
		</div>
		<div class="works" v-if="detailData.sjsList&&detailData.sjsList.length!=0">
			<h3 class="wow">TA的作品</h3>
			<div class="list wow">
				<Cases :caseData="v" v-for="(v, i) in detailData.sjsList.slice(0, 3)" :key="i" />
			</div>
			<div class="more" @click="$router.push('/case/list')" v-if="detailData.sjsList.length">更多案例</div>
		</div>
	</div>
</template>

<script lang="ts">
import DesignDetail from './detail';
export default DesignDetail;
</script>

<style lang="scss">
.design-detail {
	> .content {
		.left {
			opacity: 0;
			animation: slide-left-in 2s, fade-in 2s;
			animation-fill-mode: forwards;
			h3,
			p,
			.info,
			.idea,
			.honor {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.right {
			opacity: 0;
			animation: slide-right-in 2s, fade-in 2s;
			animation-fill-mode: forwards;
		}
	}
	.works {
		h3 {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.list {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
}
.design-detail {
	.crumbs {
		padding: 0 80px;
		display: flex;
		justify-content: flex-end;
		margin: 45px 0 45px 0;
		p {
			font-size: 16px;
			color: #666666;
			&:last-of-type {
				color: #eb5518;
			}
			i {
				display: inline-block;
				width: 6px;
				height: 11px;
				background: url('~assets/icons/ic_b2_part2_crumb.png') no-repeat;
				background-size: 100% 100%;
			}
			span {
				transition: all 0.3s;
				&:hover {
					cursor: pointer;
					color: #eb5518;
				}
			}
		}
	}
	> .content {
		padding: 0 80px;
		display: flex;
		justify-content: space-between;
		padding-bottom: 100px;
		.left {
			overflow: hidden;
			> h3 {
				font-size: 56px;
				color: #000000;
				margin-top: -10px;
			}
			> p {
				margin-top: 10px;
				font-size: 24px;
				color: #eb551d;
			}
			.info {
				margin-top: 56px;
				ul {
					display: flex;
					li {
						display: flex;
						i {
							width: 25px;
							height: 25px;
							background-size: 100% 100%;
							margin: 0px 18px 0 82px;
						}
						&:nth-of-type(1) {
							i {
								background: url('~assets/icons/ic_c2_part2_time.png') no-repeat;
								margin-left: 0;
								background-size: 100% 100%;
							}
						}
						&:nth-of-type(2) {
							i {
								background-size: 100% 100% !important;
								width: 28px;
								background: url('~assets/icons/ic_c2_part2_school.png') no-repeat;
							}
						}
						&:nth-of-type(3) {
							i {
								background-size: 100% 100% !important;
								background: url('~assets/icons/ic_c2_part2_pay.png') no-repeat;
							}
							> div {
								border-right: none;
								padding-right: 0;
							}
						}
						> div {
							// width: 85px;
							height: 58px;
							border-right: 1px solid #eeeeee;
							padding-right: 82px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							p {
								font-size: 22px;
								&:nth-of-type(1) {
									color: #000000;
									font-weight: 600;
								}
								&:nth-of-type(2) {
									margin-top: 10px;
									color: #666666;
								}
							}
						}
					}
				}
			}
			.idea {
				display: flex;
				margin-top: 80px;
				margin-bottom: 75px;
				i {
					width: 22px;
					height: 22px;
					background-size: 100% 100% !important;
					background: url('~assets/icons/ic_c2_part2_design.png') no-repeat;
					margin: 5px 8px 0 0;
				}
				> div {
					p {
						font-size: 18px;
						&:nth-of-type(1) {
							color: #000000;
							font-weight: 600;
							// font-weight: 600;
						}
						&:nth-of-type(2) {
							margin-top: 15px;
							color: #666666;
							width: 800px;
							@include line-clamp(1);
						}
					}
				}
			}
			.honor {
				margin-bottom: 80px;
				.title {
					display: flex;
					margin-bottom: 15px;
					i {
						width: 19px;
						height: 23px;
						background-size: 100% 100% !important;
						background: url('~assets/icons/ic_c2_part2_honor.png') no-repeat;
						margin: 2px 10px 0 0;
					}
					p {
						color: #000000;
						font-weight: 600;
						font-size: 18px;
					}
				}
				.scroll {
					padding-left: 28px;
					overflow-y: scroll;
					height: 140px;
					width: 858px;
					&::-webkit-scrollbar {
						width: 2px;
						background: #d6d6d8;
					}
					&::-webkit-scrollbar-thumb {
						background: #eb5518;
						border-radius: 2px;
					}
					.text {
						p {
							font-size: 18px;
							color: #666666;
							margin-bottom: 15px;
							line-height: 38px;
						}
					}
				}
			}
			.button-wrap {
				width: 170px;
				height: 53px;
				.btn {
					margin: 0;
				}
			}
		}
		.right {
			display: flex;
			.swiperBox {
				position: relative;
				width: 620px;
				height: 750px;
				.swiper {
					width: 590px;
					height: 720px;
					img {
						width: 590px;
						height: 720px;
						margin: 0;
						&:nth-of-type(2) {
							position: absolute;
							left: 0;
							top: 0;
						}
					}
					.swiper-container {
						width: 590px;
						height: 720px;
					}
					.btn {
						position: relative;
						height: 16px;
						width: auto;
						display: flex;
						justify-content: center;
					}
					.swiper-pagination {
						// width: 66px;
						width: auto;
						height: 12px;
						// position: absolute;
						left: 50%;
						bottom: 184px;
						transform: translateX(-50%);
						.swiper-pagination-bullet {
							margin-right: 15px;
							box-sizing: border-box;
							width: 12px;
							height: 12px;
							border: 2px solid #fff;
							border-radius: 0;
							background: transparent;
							opacity: 1;
							&:last-of-type {
								margin-right: 0;
							}
						}
						.swiper-pagination-bullet-active {
							border: 2px solid #eb551d;
						}
					}
					.swiper-button-prev,
					.swiper-button-next {
						bottom: 78px;
						width: 20px;
						&::after {
							font-size: 16px;
							transition: color 0.3s;
						}
						&:hover {
							&::after {
								color: #eb551d;
							}
						}
					}
					.swiper-button-prev {
						left: 198px;
					}
					.swiper-button-next {
						right: 198px;
					}
				}
				.box {
					width: 260px;
					height: 260px;
					background: #eb5518;
					position: absolute;
					bottom: 0;
					right: 0;
					z-index: -1;
				}
			}
			img {
				margin: 96px 0 0 30px;
				width: 61px;
				height: 287px;
			}
		}
	}
	.video {
		height: 970px;
		position: relative;
		video {
			width: 100%;
			height: 100%;
		}
		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			p {
				font-size: 18px;
				color: #ffffff;
				margin-top: 30px;
			}
			img {
				cursor: pointer;
				transition: all 0.3s;
				&:hover {
					transform: scale($imgScale);
				}
			}
		}
	}
	.works {
		padding: 0 80px;
		height: 1040px;
		background-size: 100% 100%;
		background: url('~assets/bg_c2_part3.jpg') no-repeat;
		overflow: hidden;
		// margin-top: 100px;
		h3 {
			font-size: 56px;
			color: #000000;
			text-align: center;
			font-weight: 400;
			line-height: 55px;
			margin: 99px 0 60px 0;
		}
		.list {
			display: flex;
			justify-content: space-between;

			.cases {
				.content {
					display: block;
					background-color: #fff;
				}
			}
		}
		.more {
			width: 170px;
			height: 53px;
			border: 2px solid #eb551d;
			margin: 0 auto;
			margin-top: 20px;
			position: relative;
			background-color: #fff;
			font-size: 18px;
			color: #eb551d;
			display: flex;
			justify-content: center;
			align-items: center;
			// font-weight: 600;
			transition: all 0.3s;
			&:hover {
				cursor: pointer;
				transform: translateY(-3px);
			}
			&::after,
			&::before {
				content: '';
				position: absolute;
				border: 2px solid #eb551d;
				width: 11px;
				height: 11px;
				opacity: 0.35;
			}
			&::after {
				left: 4px;
				top: 4px;
				border-right: none;
				border-bottom: none;
			}
			&::before {
				right: 4px;
				bottom: 4px;
				border-top: none;
				border-left: none;
			}
		}
	}
}
</style>
