<template>
	<div class="design-detail">
		<div class="crumbs">
			<p>
				<span>设计名人堂</span>
				&nbsp;
				<i></i>
				&nbsp;
			</p>
			<p><span>周芳乐</span></p>
		</div>
		<div class="content">
			<div class="left">
				<h3>周芳乐</h3>
				<p>设计师总监</p>
				<div class="info">
					<ul>
						<li>
							<i></i>
							<div>
								<p>从业时间</p>
								<p>10年</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>毕业院校</p>
								<p>中央美术学院</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>收费标准</p>
								<p>600-800元/㎡</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="idea">
					<i></i>
					<div>
						<p>设计理念</p>
						<p>不为设计而设计,所有的设计一定是基于最舒适的体验感!</p>
					</div>
				</div>
				<div class="honor">
					<div class="title">
						<i></i>
						<p>所获荣誉</p>
					</div>
					<div class="scroll">
						<div class="text">
							<p>中国建筑装饰协会高级室内建筑师</p>
							<p>上海市装饰装修行业协会高级室内设计师</p>
							<p>亚太酒店設計協會設計高研班14期研修</p>
							<p>亞太酒店設計協會華東區合作設計師</p>
							<p>亞太酒店設計協會華東區合作設計師</p>
							<p>亞太酒店設計協會華東區合作設計師</p>
							<p>亞太酒店設計協會華東區合作設計師</p>
						</div>
					</div>
				</div>
				<Button :text="'找TA设计'" />
			</div>
			<div class="right">
				<div class="swiperBox">
					<div class="swiper">
						<swiper :options="swiperOptions">
							<swiper-slide v-for="(item, i) in 3" :key="i">
								<img src="~assets/bg_c1_pic11.jpg" alt="" />
							</swiper-slide>
						</swiper>
						<div class="swiper-pagination"></div>
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
					</div>
					<div class="box"></div>
				</div>
				<img src="~assets/bg_c2_part2_text.png" alt="" />
			</div>
		</div>
		<div class="video"></div>
		<div class="works">
			<h3>TA的作品</h3>
			<div class="list">
				<Cases />
				<Cases />
				<Cases />
			</div>
			<div class="more">更多案例</div>
		</div>
	</div>
</template>

<script lang="ts">
import DesignDetail from './detail';
export default DesignDetail;
</script>

<style lang="scss">
.design-detail {
	padding: 0 80px;
	.crumbs {
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
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
	.content {
		display: flex;
		justify-content: space-between;
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
							}
						}
						&:nth-of-type(2) {
							i {
								width: 28px;
								background: url('~assets/icons/ic_c2_part2_school.png') no-repeat;
							}
						}
						&:nth-of-type(3) {
							i {
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
									// font-weight: 600;
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
					background-size: 100% 100%;
					background: url('~assets/icons/ic_c2_part2_design.png') no-repeat;
					margin: 5px 8px 0 0;
				}
				> div {
					p {
						font-size: 18px;
						&:nth-of-type(1) {
							color: #000000;
							// font-weight: 600;
						}
						&:nth-of-type(2) {
							margin-top: 15px;
							color: #666666;
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
						background-size: 100% 100%;
						background: url('~assets/icons/ic_c2_part2_honor.png') no-repeat;
						margin: 2px 10px 0 0;
					}
					p {
						color: #000000;
						// font-weight: 600;
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
						}
					}
				}
			}
			.button-wrap {
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
					}
					.swiper-container {
						width: 590px;
						height: 720px;
					}
					.swiper-pagination {
						width: 66px;
						height: 12px;
						position: absolute;
						left: 50%;
						bottom: 183px;
						transform: translateX(-80%);
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
						&::after {
							font-size: 16px;
						}
					}
					.swiper-button-prev {
						margin-left: 218px;
					}
					.swiper-button-next {
						margin-right: 258px;
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
	.works {
		height: 1040px;
		background-size: 100% 100%;
		background: url('~assets/bg_c2_part3.jpg') no-repeat;
		overflow: hidden;
		margin-top: 100px;
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
			&:hover {
				cursor: pointer;
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
