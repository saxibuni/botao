<template>
	<div class="case-detail" v-if="detailData.archivesInfo">
		<div class="crumbs">
			<p>
				<span @click="$router.push('/case/list')">精选案例</span>
				&nbsp;
				<i></i>
				&nbsp;
			</p>
			<p>
				<span>{{ detailData.archivesInfo.title }}</span>
			</p>
		</div>
		<div class="title">
			<h3 class="wow">{{ detailData.archivesInfo.title }}</h3>
			<div class="content wow">
				<div class="contentLeft">
					<ul>
						<li v-if="detailData.archivesInfo.mj">
							<i></i>
							<div>
								<p>面积</p>
								<p>{{ detailData.archivesInfo.mj }}</p>
							</div>
						</li>
						<li v-if="detailData.archivesInfo.style">
							<i></i>
							<div>
								<p>设计风格</p>
								<p>{{ detailData.archivesInfo.style }}</p>
							</div>
						</li>
						<li v-if="detailData.archivesInfo.hx">
							<i></i>
							<div>
								<p>房型</p>
								<p>{{ detailData.archivesInfo.hx }}</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="contentRight">
					<i></i>
					<p>{{ detailData.archivesInfo.love + Number(detailData.archivesInfo.likejs) }}个喜欢</p>
				</div>
			</div>
		</div>
		<div class="swiper">
			<div class="swiperBox">
				<swiper :options="swiperOptions1">
					<swiper-slide v-for="(item, i) in detailData.archivesInfo.imgs.split(',')" :key="item.aid">
						<img :src="web_url + item" alt="" />
						<img
							:style="{ opacity: detailData.archivesInfo.video ? 1 : 0, pointerEvents: detailData.archivesInfo.video ? 'auto' : 'none' }"
							src="~assets/icons/ic_c2_play.png"
							@click="playVideo(detailData.archivesInfo.video)"
							v-if="detailData.archivesInfo.video"
							v-show="i == 0"
							alt=""
							class="play"
						/>
						<img src="~assets/bg_b2_part2_mask.png" alt="" />
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination"></div>

				<div class="swiper-button-prev prev1"></div>
				<div class="swiper-button-next next1"></div>
			</div>
			<div class="content wow" @click="push(detailData.designer_info.aid, $event)">
				<img :src="web_url + detailData.designer_info.faceimg" alt="" />
				<p>{{ detailData.designer_info.title }}</p>
				<p>{{ detailData.designer_info.station }}</p>
				<p>从业年限：{{ detailData.designer_info.cysj }}</p>
				<p>TA的作品：{{ detailData.designer_info.dbz }}</p>
				<Button @click.native="$store.state.dialogDesign.design = true" :text="'找TA设计'" />
			</div>
		</div>
		<div class="other">
			<h3 class="wow">为您推荐其他筑梦案例</h3>
			<ul class="wow" v-if="detailData.styleList.list.length && detailData.sjsList.list.length">
				<li v-for="(item, index) in tabs" :key="index" :class="activeIndex == index ? 'active' : ''" @click="(activeIndex = index), updateSwiper()">{{ item }}</li>
			</ul>
			<div class="otherSwiper wow">
				<swiper :options="swiperOptions2" ref="swiper2">
					<template v-if="activeIndex == 0">
						<swiper-slide v-for="item in detailData.styleList.list" :key="item.id">
							<Cases :caseData="item" />
						</swiper-slide>
					</template>
					<template v-if="activeIndex == 1">
						<swiper-slide v-for="item in detailData.sjsList.list" :key="item.click">
							<Cases :caseData="item" />
						</swiper-slide>
					</template>
				</swiper>
				<div class="swiper-pagination pagination2"></div>
				<div class="swiper-button-prev prev2"></div>
				<div class="swiper-button-next next2"></div>
			</div>
		</div>
		<VideoPopup :videoPop="videoPop"></VideoPopup>
	</div>
</template>

<script lang="ts">
import CaseDetail from './detail';
export default CaseDetail;
</script>

<style lang="scss">
.case-detail {
	> .title {
		h3,
		.content {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	> .swiper {
		.content {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.other {
		h3,
		ul {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.otherSwiper {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
}
.case-detail {
	// padding: 0 80px;
	.crumbs {
		padding: 0 80px;
		display: flex;
		justify-content: flex-end;
		margin: 39px 0 60px 0;
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
	.title {
		display: flex;
		padding: 0 80px;
		justify-content: space-between;
		h3 {
			font-size: 56px;
			color: #000000;
			white-space: nowrap;
		}
		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			// margin-left: 320px;
			.contentLeft {
				ul {
					display: flex;
					li {
						display: flex;
						margin-right: 200px;
						i {
							width: 23px;
							height: 23px;
							background-size: 100% 100% !important;
							margin: 5px 28px 0 0;
						}
						&:nth-of-type(1) {
							i {
								background: url('~assets/icons/ic_b2_part2_area.png') no-repeat;
							}
						}
						&:nth-of-type(2) {
							i {
								background: url('~assets/icons/ic_b2_part2_style.png') no-repeat;
							}
						}
						&:nth-of-type(3) {
							i {
								background: url('~assets/icons/ic_b2_part2_shape.png') no-repeat;
							}
						}
						> div {
							p {
								&:nth-of-type(1) {
									font-size: 20px;
									color: #999999;
								}
								&:nth-of-type(2) {
									margin-top: 10px;
									font-size: 28px;
									color: #000000;
									white-space: nowrap;
								}
							}
						}
					}
				}
			}
			.contentRight {
				display: flex;
				flex-direction: column;
				align-items: center;
				// margin-left: 200px;
				i {
					width: 33px;
					height: 29px;
					background-size: 100% 100% !important;
					background: url('~assets/icons/ic_b2_part2_like2.png') no-repeat;
				}
				p {
					margin-top: 14px;
					font-size: 18px;
					color: #122133;
					white-space: nowrap;
					// font-weight: 600;
				}
			}
		}
	}
	.swiper {
		padding: 0 80px;
		display: flex;
		margin: 80px 0 110px 0;
		.swiperBox {
			width: 1220px;
			height: 740px;
			position: relative;
			img {
				&:nth-of-type(1) {
					height: 100%;
					width: 100%;
				}
				&:last-of-type {
					position: absolute;
					top: 0;
					left: 0;
				}
			}
			.play {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -80%);
				transition: all 0.3s;
				z-index: 1;
				&:hover {
					cursor: pointer;
					transform: translate(-50%, -80%) scale($imgScale);
				}
			}
			.swiper-container {
				width: 1220px;
				height: 740px;
			}
			.swiper-button-prev,
			.swiper-button-next {
				top: 335px;
				transform: all 0.3s;
				&:hover {
					transform: all 0.3s;
					&::after {
						color: #eb551c;
					}
				}
			}
			.swiper-button-prev {
				margin-left: 40px;
				left: 0;
			}
			.swiper-button-next {
				margin-right: 40px;
			}
			.swiper-pagination {
				// width: 70px;
				height: 12px;
				position: absolute;
				left: 50%;
				bottom: 150px;
				transform: translateX(-50%);
				.swiper-pagination-bullet {
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
				.swiper-pagination-bullet-active {
					border: 2px solid #eb551d;
				}
			}
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			background: #132132;
			width: 540px;
			height: 740px;
			padding: 0 88px;
			cursor: pointer;
			img {
				width: 180px;
				height: 180px;
				border-radius: 50%;
				margin-top: 120px;
			}
			p {
				color: #fff;
				&:nth-of-type(1) {
					font-size: 36px;
					margin-top: 45px;
				}
				&:nth-of-type(2) {
					font-size: 22px;
					color: #ea551c;
					margin-top: 15px;
					z-index: 1;
				}
				&:nth-of-type(3) {
					font-size: 18px;
					margin-top: 20px;
				}
				&:nth-of-type(4) {
					font-size: 18px;
					margin-top: 20px;
					margin-bottom: 57px;
					width: 365px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
			.button-wrap {
				width: 170px;
				height: 53px;
			}
		}
	}
	.other {
		height: 1060px;
		background-size: 100% 100%;
		background: url('~assets/bg_b2_part3.jpg') no-repeat;
		display: flex;
		flex-direction: column;
		align-items: center;
		h3 {
			font-size: 56px;
			color: #000000;
			margin: 90px 0 20px 0;
		}
		> ul {
			display: flex;
			> li {
				width: 140px;
				height: 39px;
				font-size: 18px;
				color: #666666;
				display: flex;
				justify-content: center;
				align-items: center;
				&:nth-of-type(1) {
					margin-right: 14px;
				}
				cursor: pointer;
				position: relative;
				transition: 0.3s;
				border: 1px solid transparent;
				&::after,
				&::before {
					content: '';
					position: absolute;
					border: 2px solid transparent;
					width: 0px;
					height: 0px;
					transition: border 0.3s, width 0.3s, height 0.3s;
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
				&.active,
				&:hover {
					border: 1px solid #ed5400;
					color: #fff;
					background-color: #ed5400;
					&::after,
					&::before {
						border: 2px solid #fff;
						width: 11px;
						height: 11px;
					}
					&::after {
						border-right: none;
						border-bottom: none;
					}
					&::before {
						border-top: none;
						border-left: none;
					}
				}
			}
		}
		.otherSwiper {
			margin-top: 60px;
			height: 782px;
			width: 1760px;
			.swiper-container {
				height: 625px;
				.swiper-wrapper {
					left: 11px;
				}
			}
			.swiper-pagination {
				// width: 66px;
				height: 12px;
				position: relative;
				left: 50%;
				top: -30px;
				transform: translateX(-50%);
				.swiper-pagination-bullet {
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
				.swiper-pagination-bullet-active {
					border: 2px solid #eb551d;
				}
			}
			.swiper-button-prev,
			.swiper-button-next {
				position: relative;
				z-index: 999;

				&::after {
					color: #aaaaaa;
					font-size: 34px;
					transition: all 0.3s;
				}
				&:hover {
					&::after {
						color: #eb551d !important;
					}
				}
			}
			.swiper-button-prev {
				left: 5px;
				top: 62px;
			}
			.swiper-button-next {
				// margin-right: 40px;
				left: 1705px;
				top: 50px;
			}
		}
	}
}
</style>
