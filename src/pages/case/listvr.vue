<template>
	<div class="case-listvr">
		<div class="title wow">
			<div class="left">
				<h3>
					<span>VR体验</span>
					沉浸式畅游理想家
				</h3>
				<p>TRAVEL TO YOUR IDEAL HOME</p>
			</div>
			<div class="right wow">
				<div class="search">
					<input type="text" v-model="inputVal" @keyup.enter="choice(inputVal)" />
					<i @click="choice(inputVal)"></i>
				</div>
				<p v-if="vrData.keyw">
					热门搜索：
					<span v-for="(v, i) in vrData.keyw.split(',')" :key="i" @click="choice(v)">{{ v }}</span>
				</p>
			</div>
		</div>
		<div class="tabs">
			<div class="tabsList wow" v-for="(item, index) in tabList" :key="index">
				<p>{{ item.title }}</p>
				<ul>
					<li v-for="(v, i) in item.info" :key="i" :class="activeIndex[index] == i ? 'active' : ''" @click="activeIndex.splice(index, 1, i), choice()">{{ v }}</li>
				</ul>
			</div>
		</div>
		<div class="list">
			<ul>
				<li v-for="(v, i) in vrData.list" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }" @click="push(v.velink, $event)">
					<div class="imgBox">
						<img :src="web_url + v.img" alt="" />
						<img src="~assets/icons/ic_b3_part2_vr.png" alt="" />
					</div>
					<div class="content">
						<div class="top">
							<div class="topLeft">
								<p>{{ v.title }}</p>
								<p>
									<span>{{ v.hx }}</span>
									<span>{{ v.style }}</span>
									<span>{{ v.mj }}</span>
								</p>
							</div>
							<div class="topRight">
								<!-- <i @click="fn"></i> -->
								<!-- <div>
									<img src="~assets/icons/ic_b1_part3_like1.png" alt="" @click="(flag = !flag), v.click++" />

									<img v-if="!isIE" class="img" :class="{ img2: !flag }" src="~assets/icons/ic_b1_part3_like2.png" alt="" @click="(flag = !flag), v.click--" />
									<img v-if="isIE && !flag" src="~assets/icons/ic_b1_part3_like2.png" alt="" @click="(flag = !flag), v.click--" />
								</div>
								<p>{{ v.click }}个喜欢</p> -->
								<div @click="getLove(v.aid, v.is_zan), v.is_zan == 1 ? '' : v.love++, (v.is_zan = 1)" class="love">
									<img src="~assets/icons/ic_b1_part3_like1.png" alt="" class="love" />
									<img v-if="!isIE" class="img" :class="{ img2: v.love + Number(v.likejs) > 0 }" src="~assets/icons/ic_b1_part3_like2.png" alt="" />
									<img v-if="isIE && v.love + Number(v.likejs)" src="~assets/icons/ic_b1_part3_like2.png" alt="" />
								</div>
								<p>{{ v.love + Number(v.likejs) }}个喜欢</p>
							</div>
						</div>
						<div class="bottom" v-if="v.des_info">
							<div class="bottomLeft">
								<div class="imgBox2">
									<img :src="web_url + v.des_info.faceimg" alt="" />
								</div>
								<div class="text">
									<p>{{ v.des_info.title }}</p>
									<p>{{ v.des_info.station }}</p>
								</div>
							</div>
							<Button @click.native="$store.state.dialogDesign.design = true" :text="v.typename == 'VR装修体验' ? '找TA设计' : v.typename" />
						</div>
					</div>
				</li>
			</ul>
		</div>
		<Pagination :data="paginationData" @getData="getData1" v-if="vrData.list" v-show="vrData.list.length" />
	</div>
</template>

<script lang="ts">
import CaseListVr from './listvr';
export default CaseListVr;
</script>

<style lang="scss">
.case-listvr {
	> .title {
		.left {
			opacity: 0;
			animation: slide-left-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.right {
			opacity: 0;
			animation: slide-right-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	> .tabs {
		.tabsList {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
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
.case-listvr {
	padding: 0 80px;
	.title {
		display: flex;
		justify-content: space-between;
		margin-top: 90px;
		.left {
			h3 {
				font-family: Gilroy-Bold;
				font-size: 56px;
				font-weight: 400;
				span {
					color: #ed5400;
				}
			}
			p {
				font-size: 30px;
				font-family: Athene;
				font-weight: 400;
				color: #010000;
				margin-top: 20px;
			}
		}
		.right {
			margin-top: 10px;
			.search {
				position: relative;
				width: 550px;
				height: 60px;
				input {
					position: absolute;
					top: 0;
					width: 550px;
					height: 60px;
					border: 1px solid #ed5400;
					outline: none;
					font-size: 20px;
					padding-left: 1em;
					padding-right: 70px;
				}
				i {
					position: absolute;
					right: 30px;
					top: 50%;
					transform: translateY(-50%);
					width: 18px;
					height: 18px;
					background: url('~assets/icons/bg_b1_part1_search.png') no-repeat;
					background-size: 100% 100%;
					transition: transform 0.3s;
					&:hover {
						cursor: pointer;
						transform: scale(1.1) translateY(-50%);
					}
				}
			}
			p {
				font-size: 16px;
				color: #999999;
				margin-top: 29px;
				span {
					color: #333333;
					margin-right: 20px;
					// font-weight: 600;
					transition: color 0.3s;
					&:hover {
						cursor: pointer;
						color: #ed5400;
					}
				}
			}
		}
	}
	.tabs {
		margin-top: 50px;
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
	.list {
		margin-top: 80px;
		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			li {
				margin-bottom: 60px;
				cursor: pointer;
				&:hover {
					.left {
						p {
							&:nth-of-type(1) {
								color: #eb551d !important;
							}
						}
					}
				}
				a {
					text-decoration: none;
				}
				.imgBox {
					width: 855px;
					height: 520px;
					overflow: hidden;
					position: relative;
					&:hover {
						img {
							transform: scale($imgScale);
						}
					}
					img {
						transition: all 0.3s;
						&:nth-of-type(2) {
							position: absolute;
							left: 50%;
							top: 50%;
							width: 120px;
							height: 120px;
							transform: translate(-50%, -50%);
						}
					}
				}
				.content {
					width: 855px;
					height: 265px;
					// box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.05);
					.top {
						padding: 35px 0px 30px 0px;
						// margin: 0 50px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						// border-bottom: 1px solid #eeeeee;
						.topLeft {
							p {
								&:nth-of-type(1) {
									font-size: 28px;
									color: #000000;
									transition: all 0.3s;
								}
								&:nth-of-type(2) {
									margin-top: 15px;
									// margin-top: 35px;
									font-size: 18px;
									color: #888888;
									display: flex;
									align-items: center;
									span {
										padding: 0 15px;
										border-right: 1px solid #cccccc;
										height: 16px;
										display: flex;
										align-items: center;
										&:first-of-type {
											padding-left: 0;
										}
										&:last-of-type {
											padding-right: 0;
											border: none;
										}
									}
								}
							}
						}
						.topRight {
							display: flex;
							flex-direction: column;
							align-items: center;
							margin-top: 5px;
							div {
								width: 26px;
								height: 23px;
								position: relative;
								transition: transform 0.3s;
								img {
									position: absolute;
									left: 0;
									top: 0;
									width: 26px;
									height: 23px;
									transition: all 0.3s;
									&.img {
										clip-path: ellipse(0% 0% at 0% 100%);
										z-index: 3;
									}
									&.img2 {
										clip-path: ellipse(140% 141% at 0% 100%);
									}
								}
								&:hover {
									transform: scale(1.1);
								}
							}

							p {
								margin-top: 10px;
								font-size: 16px;
								color: #122133;
								// font-weight: 600;
							}
						}
					}
					.bottom {
						// padding: 25px 0px 35px 0px;
						width: 855px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						&:hover {
							.imgBox2 {
								img {
									transform: scale(1.1);
								}
							}
						}
						.bottomLeft {
							display: flex;
							align-items: center;
							.imgBox2 {
								width: 75px;
								height: 75px;
								border-radius: 50%;
								display: flex;
								align-items: center;
								overflow: hidden;
								img {
									width: 100%;
									transition: all 0.3s;
								}
							}

							.text {
								margin-left: 20px;
								p {
									&:nth-of-type(1) {
										color: #122133;
										font-size: 20px;
										// font-weight: 600;
									}
									&:nth-of-type(2) {
										margin-top: 10px;
										color: #888888;
										font-size: 16px;
									}
								}
							}
						}
						.button-wrap {
							width: 170px;
							height: 53px;
							/deep/.btn {
								margin: 0;
								width: 170px;
								height: 53px;
								display: flex;
								justify-content: center;
								align-items: center;
							}
						}
					}
				}
			}
		}
	}
	.pagination-box {
		margin: 40px 0 100px 0;
	}
}
</style>
