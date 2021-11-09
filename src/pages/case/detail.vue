<template>
	<div class="case-detail">
		<div class="crumbs">
			<p>
				精选案例 &nbsp;
				<i></i>
				&nbsp;
			</p>
			<p>上海东方颐城</p>
		</div>
		<div class="title">
			<h3>上海东方颐城</h3>
			<div class="content">
				<div class="contentLeft">
					<ul>
						<li>
							<i></i>
							<div>
								<p>面积</p>
								<p>120㎡</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>设计风格</p>
								<p>现代中式</p>
							</div>
						</li>
						<li>
							<i></i>
							<div>
								<p>房型</p>
								<p>复式</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="contentRight">
					<i></i>
					<p>2000个喜欢</p>
				</div>
			</div>
		</div>
		<div class="swiper">
			<div class="swiperBox"></div>
			<div class="content">
				<img src="~assets/bg_b2_part2_user.png" alt="" />
				<p>谷晓云</p>
				<p>首席设计师</p>
				<p>从业年限：10 年</p>
				<p>ta的作品：东方颐城 、城云开外 、玖玺合院...</p>
			</div>
		</div>
		<div class="other">
			<h3>为您推荐其他筑梦案例</h3>
			<ul>
				<li>同风格案例</li>
				<li>同设计师案例</li>
			</ul>
			<div class="otherSwiper"></div>
		</div>
	</div>
</template>

<script lang="ts">
import CaseDetail from './detail';
export default CaseDetail;
</script>

<style lang="scss">
.case-detail {
	padding: 0 80px;
	.crumbs {
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
		}
	}
	.title {
		display: flex;
		h3 {
			font-size: 56px;
			color: #000000;
		}
		.content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 320px;
			.contentLeft {
				ul {
					display: flex;
					li {
						display: flex;
						margin-right: 200px;
						i {
							width: 23px;
							height: 23px;
							background-size: 100% 100%;
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
							margin-right: 0px;
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
				margin-left: 205px;
				i {
					width: 33px;
					height: 29px;
					background-size: 100% 100%;
					background: url('~assets/icons/ic_b2_part2_like2.png') no-repeat;
				}
				p {
					margin-top: 14px;
					font-size: 18px;
					color: #122133;
				}
			}
		}
	}
	.swiper {
		display: flex;
		margin: 80px 0 110px 0;
		.swiperBox {
			width: 1220px;
			height: 740px;
			background-color: yellowgreen;
		}
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			background: #132132;
			width: 540px;
			height: 740px;
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
				}
				&:nth-of-type(3) {
					font-size: 18px;
					margin-top: 20px;
				}
				&:nth-of-type(4) {
					font-size: 18px;
					margin-top: 20px;
				}
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
		ul {
			display: flex;
			li {
				width: 140px;
				height: 39px;
				font-size: 18px;
				color: #666666;
				&:nth-of-type(1) {
					margin-right: 14px;
				}
			}
		}
	}
}
</style>
