<template>
	<div class="craft-building">
		<Banner :data="bannerData" />
		<div class="main">
			<div class="tabs">
				<div class="tabsList wow" v-for="(item, index) in tabList" :key="index">
					<p>{{ item.title }}</p>
					<ul>
						<li v-for="(v, i) in item.info" :key="i" :class="activeIndex[index] == i ? 'active' : ''" @click="activeIndex.splice(index, 1, i), choice()">{{ v }}</li>
					</ul>
				</div>
			</div>
			<div class="mapInfo">
				<!-- <ShangHaiMap @data="fn" class="wow" /> -->
				<div class="leftContent wow" v-if="buildingData.zsgddesc">
					<div>
						<p>
							<ICountUp :endVal="buildingData.zsgddesc.sgnx" :options="options1" ref="countup1"></ICountUp>
							年
						</p>
						<p>深耕别墅大宅装饰领域</p>
					</div>
					<div>
						<p>
							<ICountUp :endVal="buildingData.zsgddesc.fgl" :options="options1" ref="countup1"></ICountUp>
							%
						</p>
						<p>上海高端楼盘覆盖率</p>
					</div>
					<div>
						<p>
							<ICountUp :endVal="buildingData.zsgddesc.zjgd" :options="options1" ref="countup1"></ICountUp>
							+
						</p>
						<p>每年在建工地</p>
					</div>
				</div>
				<div class="map">
					<img src="~assets/bg_c3_part2.png" alt="" />
					<ul>
						<li v-for="(v, i) in 15" :key="i">
							<div class="circle" :style="{ 'animation-delay': setDelayTime() + 's' }"></div>
							<img src="~assets/icons/ic_d1_part2_house.png" alt="" />
						</li>
					</ul>
				</div>
				<img src="~assets/bg_d1_part2.jpg" alt="" />
			</div>
			<div class="list">
				<ul>
					<li v-for="(item, i) in buildingData.list" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
						<div class="imgBox">
							<img :src="web_url + item.img" alt="" />
							<img src="~assets/icons/ic_c2_play.png" @click="playVideo(item.video)" alt="" />
						</div>
						<div class="text">
							<p>{{ item.title }}</p>
							<p>
								{{ item.gdhxsx }}
								<span></span>
								{{ item.jzmj }}
							</p>
							<p>设计师：{{ item.designer }}</p>
							<Button :text="'预约参观工地'" @click.native="$store.state.dialogDesign.design = true" />
						</div>
					</li>
				</ul>
			</div>
			<Pagination :data="paginationData" @getData="getData1" v-if="buildingData.list" v-show="buildingData.list.length" />
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
	@keyframes scale {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: scale(1.5);
			opacity: 0;
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
			overflow: hidden;
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

			.map {
				height: 948px;
				// margin-bottom: 50px;
				// margin-top: 60px;
				width: 750px;
				// position: relative;
				position: absolute;
				top: -130px;
				left: 50%;
				transform: translateX(-50%);
				> img {
					margin-top: 23px;
				}
				ul {
					position: absolute;
					top: 0;
					left: 0;
					li {
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						.circle {
							border-radius: 50%;
							position: absolute;
							width: 100%;
							height: 100%;
							background: rgba(236, 84, 0, 0.3);
							animation: scale 2s linear infinite;
						}
						&:nth-of-type(1) {
							width: 143px;
							height: 143px;
							top: 147px;
							left: 364px;
							img {
								width: 54px;
								height: 50px;
							}
						}
						&:nth-of-type(2) {
							width: 91px;
							height: 91px;
							top: 206px;
							left: 459px;
							img {
								width: 35px;
								height: 32px;
							}
						}
						&:nth-of-type(3) {
							width: 75px;
							height: 75px;
							top: 362px;
							left: 527px;
							img {
								width: 32px;
								height: 30px;
							}
						}
						&:nth-of-type(4) {
							width: 121px;
							height: 121px;
							top: 371px;
							left: 577px;
							img {
								width: 50px;
								height: 46px;
							}
						}
						&:nth-of-type(5) {
							width: 171px;
							height: 171px;
							top: 406px;
							left: 161px;
							img {
								width: 67px;
								height: 62px;
							}
						}
						&:nth-of-type(6) {
							width: 104px;
							height: 104px;
							top: 407px;
							left: 266px;
							img {
								width: 40px;
								height: 37px;
							}
						}
						&:nth-of-type(7) {
							width: 177px;
							height: 177px;
							top: 377px;
							left: 337px;
							img {
								width: 70px;
								height: 65px;
							}
						}
						&:nth-of-type(8) {
							width: 142px;
							height: 142px;
							top: 568px;
							left: 72px;
							img {
								width: 52px;
								height: 48px;
							}
						}
						&:nth-of-type(9) {
							width: 98px;
							height: 98px;
							top: 568px;
							left: 166px;
							img {
								width: 37px;
								height: 34px;
							}
						}
						&:nth-of-type(10) {
							width: 172px;
							height: 172px;
							top: 552px;
							left: 232px;
							img {
								width: 71px;
								height: 66px;
							}
						}
						&:nth-of-type(11) {
							width: 136px;
							height: 136px;
							top: 492px;
							left: 400px;
							img {
								width: 42px;
								height: 39px;
							}
						}
						&:nth-of-type(12) {
							width: 226px;
							height: 226px;
							top: 534px;
							left: 428px;
							img {
								width: 82px;
								height: 76px;
							}
						}
						&:nth-of-type(13) {
							width: 162px;
							height: 162px;
							top: 638px;
							left: 139px;
							img {
								width: 55px;
								height: 51px;
							}
						}
						&:nth-of-type(14) {
							width: 110px;
							height: 110px;
							top: 695px;
							left: 287px;
							img {
								width: 42px;
								height: 39px;
							}
						}
						&:nth-of-type(15) {
							width: 48px;
							height: 48px;
							top: 720px;
							left: 396px;
							img {
								width: 23px;
								height: 22px;
							}
						}
					}
				}
			}
		}
		.list {
			ul {
				display: flex;
				// justify-content: space-between;
				flex-wrap: wrap;
				li {
					height: 644px;
					width: 560px;
					margin-bottom: 40px;
					box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.05);
					margin-right: 38px;
					&:nth-of-type(3n) {
						margin-right: 0;
					}
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
								transform: translate(-50%, -50%) scale($imgScale);
							}
							&:nth-of-type(2) {
								width: 60px;
								height: 60px;
								position: absolute;
								left: 50%;
								top: 50%;
								transform: translate(-50%, -50%);
								transition: all 0.3s;
							}
						}
					}
					.text {
						display: flex;
						flex-direction: column;
						align-items: center;
						p {
							font-size: 18px;
							color: #888888;
							&:nth-of-type(1) {
								font-size: 24px;
								font-weight: 600;
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
							width: 170px;
							height: 48px;
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
