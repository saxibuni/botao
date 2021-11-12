<template>
	<div class="craft-building">
		<Banner :data="bannerData" />
		<div class="main">
			<div class="tabs">
				<div class="tabsList wow" v-for="(item, index) in tabList" :key="index">
					<p>{{ item.title }}</p>
					<ul>
						<li v-for="(v, i) in item.info" :key="i" :class="activeIndex[index] == i ? 'active' : ''" @click="activeIndex.splice(index, 1, i)">{{ v }}</li>
					</ul>
				</div>
			</div>
			<div class="mapInfo">
				<ShangHaiMap @data="fn" class="wow" />
				<div class="leftContent wow">
					<div>
						<p>
							<ICountUp :endVal="20" :options="options1" ref="countup1"></ICountUp>
							年
						</p>
						<p>深耕别墅大宅装饰领域</p>
					</div>
					<div>
						<p>
							<ICountUp :endVal="95" :options="options1" ref="countup1"></ICountUp>
							%
						</p>
						<p>上海高端楼盘覆盖率</p>
					</div>
					<div>
						<p>
							<ICountUp :endVal="800" :options="options1" ref="countup1"></ICountUp>
							+
						</p>
						<p>每年在建工地</p>
					</div>
				</div>
				<div class="rightContent" v-if="currentSelectId">
					<h4>浦东</h4>
					<p>在建56套</p>
					<p>保利首创颂</p>
					<p>碧云壹零</p>
					<p>东方颐城</p>
					<p>公元2040</p>
					<p>金地城</p>
					<p>金融家</p>
					<p>绿地东上海</p>
					<p>浦发东悦城</p>
					<p>同润蓝美俊庭</p>
					<div class="line">
						<div class="line2" v-show="currentSelectId == 'pd'"></div>
						<div class="line3" v-show="currentSelectId == 'fx'"></div>
						<div class="line4" v-show="currentSelectId == 'mh'"></div>
						<div class="line5" v-show="currentSelectId == 'cm'"></div>
						<div class="line6" v-show="currentSelectId == 'bs'"></div>
						<div class="line7" v-show="currentSelectId == 'jd'"></div>
						<div class="line8" v-show="currentSelectId == 'qp'"></div>
						<div class="line9" v-show="currentSelectId == 'sj'"></div>
						<div class="line1" v-show="currentSelectId"></div>
					</div>
				</div>
				<img src="~assets/bg_d1_part2.jpg" alt="" />
			</div>
			<div class="list">
				<ul>
					<li v-for="(item, i) in 9" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
						<div class="imgBox">
							<img src="~assets/bg_d1_pic01.jpg" alt="" />
							<img src="~assets/ic_c2_play.png" @click="playVideo(i)" alt="" />
						</div>
						<div class="text">
							<p>香格丽花园</p>
							<p>
								独栋别墅
								<span></span>
								120㎡
							</p>
							<p>
								设计师：戴思琦
								<span></span>
								项目经理：江新生
							</p>
							<Button :text="'预约参观工地'" @click.native="$store.state.dialogDesign.design = true" />
						</div>
					</li>
				</ul>
			</div>
			<Pagination :data="paginationData" />
			<VideoPopup :videoPop="videoPop"></VideoPopup>
		</div>
	</div>
</template>

<script lang="ts">
import Building from './building';
export default Building;
</script>

<style lang="scss" scoped>
.craft-building {
	.main {
		> .tabs {
			.tabsList {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.mapInfo {
			.leftContent {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
			.shanghai-map-wrapper {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		> .list {
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
.craft-building {
	@keyframes fade-ine {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.main {
		padding: 0 80px;
		.tabs {
			margin-top: 68px;
			.tabsList {
				display: flex;
				height: 76px;
				align-items: center;
				border-bottom: 1px solid #ececec;
				p {
					font-size: 20px;
					font-weight: 400;
					color: #000000;
					margin-right: 40px;
					// font-weight: 600;
				}
				ul {
					display: flex;
					li {
						margin-right: 20px;
						font-size: 18px;
						color: #666666;
						padding: 11px 24px;
						margin-right: 20px;
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
			}
		}
		.mapInfo {
			height: 860px;
			margin: 70px 0 80px 0;
			position: relative;
			> img {
				position: absolute;
				left: 0;
				top: 0;
				z-index: -1;
			}
			/deep/.map-box {
				margin: 0;
			}
			.leftContent {
				position: absolute;
				left: 140px;
				top: 180px;
				> div {
					margin-bottom: 96px;
					&:nth-of-type(1) {
						> p {
							font-size: 24px !important;
							span {
								display: inline-block;
								width: 82px;
							}
						}
					}
					&:nth-of-type(2) {
						> p {
							span {
								display: inline-block;
								width: 76px;
							}
						}
					}
					&:nth-of-type(3) {
						> p {
							span {
								display: inline-block;
								width: 132px;
							}
						}
					}
					p {
						line-height: 48px;
						&:nth-of-type(1) {
							color: #eb551d;
							font-size: 36px;
							font-family: Gilroy-Bold;
						}
						&:nth-of-type(2) {
							font-size: 28px;
							color: #333333;
						}
						span {
							font-family: Gilroy-Bold;
							font-size: 72px;
							display: inline-block;
							margin-right: -5px;
						}
					}
				}
			}
			.rightContent {
				pointer-events: none;
				width: 290px;
				height: 452px;
				border: 1px solid #eb551d;
				display: flex;
				flex-direction: column;
				align-items: center;
				position: absolute;
				top: 239px;
				right: 123px;
				animation: fade-ine 1s ease forwards;
				&::after,
				&::before {
					content: '';
					position: absolute;
					border: 1px solid #eb551d;
					width: 14px;
					height: 14px;
				}
				&::after {
					left: 13px;
					top: 13px;
					border-right: none;
					border-bottom: none;
				}
				&::before {
					right: 13px;
					bottom: 13px;
					border-top: none;
					border-left: none;
				}
				h4 {
					font-size: 30px;
					color: #000000;
					line-height: 31px;
					margin-top: 42px;
				}
				p {
					color: #666666;
					font-size: 18px;
					line-height: 31px;
					&:first-of-type {
						font-size: 20px;
						color: #eb551d;
						margin-top: 8px;
						margin-bottom: 10px;
					}
				}
				.line {
					position: absolute;
					right: 288px;
					top: 117px;
					display: flex;
					div {
						height: 1px;
						background-color: #eb551d;
						transform-origin: right;
					}
					.line1 {
						width: 230px;
					}
					.line2 {
						width: 120px;
						transform: rotate(-45deg);
					}
					.line3 {
						width: 320px;
						transform: rotate(-50deg);
					}
					.line3 {
						width: 320px;
						transform: rotate(-50deg);
					}
					.line4 {
						width: 300px;
						transform: rotate(-20deg);
					}
					.line5 {
						width: 270px;
						transform: rotate(63deg);
					}
					.line6 {
						width: 305px;
						transform: rotate(28deg);
					}
					.line7 {
						width: 400px;
						transform: rotate(16deg);
					}
					.line8 {
						width: 430px;
						transform: rotate(-3deg);
					}
					.line9 {
						width: 425px;
						transform: rotate(-20deg);
					}
				}
			}
		}
		.list {
			ul {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li {
					height: 644px;
					width: 560px;
					margin-bottom: 40px;
					box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.05);
					&:hover {
						cursor: pointer;
						.text {
							p {
								&:nth-of-type(1) {
									color: #eb551d;
								}
							}
						}
					}
					.imgBox {
						position: relative;
						width: 560px;
						height: 360px;
						overflow: hidden;
						img {
							&:nth-of-type(2):hover {
								transform:translate(-50%, -50%) scale($imgScale);
							}
							&:nth-of-type(2) {
								width: 60px;
								height: 60px;
								position: absolute;
								left: 50%;
								top: 50%;
								transform: translate(-50%, -50%);
								transition: all .3s;
							}
						}
					}
					.text {
						display: flex;
						flex-direction: column;
						align-items: center;

						height: 100%;
						p {
							font-size: 18px;
							color: #888888;
							&:nth-of-type(1) {
								font-size: 24px;
								font-weight: 400;
								color: #000000;
								margin-top: 40px;
								transition: all 0.3s;
							}
							&:nth-of-type(2) {
								margin: 15px 0;
							}
							&:nth-of-type(3) {
								margin-bottom: 30px;
							}
							span {
								display: inline-block;
								width: 1px;
								height: 16px;
								background: #cccccc;
								transform: translateY(2px);
								margin: 0 10px;
							}
						}
						.button-wrap {
							/deep/.btn {
								width: 170px;
								height: 48px;
								display: flex;
								justify-content: center;
								align-items: center;
							}
						}
					}
				}
			}
		}
		.pagination-box {
			margin: 45px 0 100px 0;
		}
	}
	.close {
	}
}
</style>
