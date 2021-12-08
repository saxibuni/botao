<template>
	<div class="brand">
		<div class="banner-box select0">
			<template v-if="btbrandInfo.id">
				<video v-if="btbrandInfo.video" id="v1" :src="web_url + btbrandInfo.video" preload="true" loop="loop" muted width="100%" height="100%" :poster="web_url + btbrandInfo.img">
					<source :src="web_url + btbrandInfo.video" type="video/mp4" />
				</video>
				<img v-else :src="web_url + btbrandInfo.img" alt="" />
				<div class="text-content">
					<div class="banner-text" v-show="textShow">
						<h3>{{ btbrandInfo.title }}</h3>
						<p>{{ btbrandInfo.etitle }}</p>
					</div>
					<h6 class="text" v-show="textShow">
						{{ btbrandInfo.desc }}
					</h6>
				</div>
				<div class="aside-text" v-show="textShow">BOTAOGROUP VIDEO</div>
				<div class="img-box" @click="play(), (textShow = false)" v-show="!playFlag">
					<img src="~assets/icons/ic_c2_play.png" alt="" />
				</div>
			</template>
		</div>
		<ul class="aside-nav">
			<li v-for="(v, i) in asideNav" :class="i == 0 ? 'active' : ''" :key="i" @click="jump(i)">
				<span @click="jump(i)" :class="'item' + i">{{ v }}</span>
			</li>
		</ul>
		<div class="botao-brand">
			<div class="left wow">
				<div class="title-box">
					<h2>
						<span>{{ btzgsList.length }}</span>
						家集团子公司
					</h2>
					<p>100亿年产值目标 100年企业愿景</p>
				</div>
				<div class="img-box">
					<img src="~assets/bg_g1_part2_logo.png" alt="" videoUrl="11111" />
				</div>
				<ul>
					<li v-for="(v, i) in btzgsList" :class="isActive == i ? 'active' : ''" @click="isActive = i" :key="i"><Button :text="v.title"></Button></li>
				</ul>
			</div>
			<div class="right-box wow">
				<div class="right" v-show="i == isActive" v-for="(v, i) in btzgsList" :key="i">
					<h3>
						{{ v.title }}
					</h3>
					<p>
						{{ v.desc }}
					</p>
					<div class="img-box">
						<img :src="web_url + v.img" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="brand-data select1">
			<div class="left">
				<p class="wow">{{ brandDataInfo.desc }}</p>
				<ul v-if="brandDataInfo.yzs">
					<li>
						<span>
							<ICountUp :endVal="brandDataInfo.yzs * 1" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
						</span>
						<span>大宅别墅业主选择</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="brandDataInfo.fgs * 1" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
							<span class="fs18">家</span>
						</span>
						<span>波涛连锁分公司</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="brandDataInfo.jcgc * 1" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
							<span class="fs18">m²</span>
						</span>
						<span>波涛建材广场</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="brandDataInfo.btdl * 1" :options="options1" ref="countup1"></ICountUp>
							<span class="fs18">m²</span>
						</span>
						<span>波涛大楼</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="brandDataInfo.blgy * 1" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
							<span class="fs18">m²</span>
						</span>
						<span>白领公寓</span>
					</li>
				</ul>
			</div>
			<div class="right">
				<div class="text-box wow">
					<h2 class="">触达全国 · 布局未来</h2>
					<h3 class="">BRAND DATA</h3>
				</div>
				<ChinaMap class="wow" />
			</div>
		</div>
		<div class="core-value select2">
			<h2 class="wow">核心价值观</h2>
			<h3 class="wow">以客户为中心 以员工为中心</h3>
			<div class="img-list">
				<div class="img-box wow" v-for="(v, i) in hxjzgList" :key="i" :style="{ 'animation-delay': 0.1 * i + 0.3 + 's' }">
					<img :src="web_url + v.img" alt="" />
					<div class="text">
						<h2>{{ v.title }}</h2>
						<h3>{{ v.ftitle }}</h3>
						<div>{{ v.etitle }}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="history select3">
			<h2 class="wow">波涛发展历程</h2>
			<h3 class="wow">DEVELOPMENT COURSE</h3>
			<div class="img-box history-scroll wow">
				<div class="gray-img wow">
					<img src="~assets/bg_g1_part5_way1.png" alt="" />
					<div v-for="(item, i) in devolopeList" :class="['yearTime', `time${i + 1}`]" @click="changeTime(i)" v-show="progressIndex >= i" :key="i">
						<span>{{ item.nf }}</span>
					</div>
				</div>
				<div class="inner-img"></div>
			</div>
			<div class="info-box wow" v-if="!isIE && devolopeList[show1].js">
				<div class="time-box">
					<div class="time">
						<!-- behind -->
						<p v-if="devolopeList[progressIndex].nf">{{ devolopeList[show1].nf }}</p>
						<h2>{{ devolopeList[show1].js }}</h2>
					</div>
					<div class="time">
						<!-- top -->
						<p v-if="devolopeList[progressIndex].nf">{{ devolopeList[show2].nf }}</p>
						<h2>{{ devolopeList[show2].js }}</h2>
					</div>
					<div class="time">
						<!-- bottom -->
						<p v-if="devolopeList[progressIndex].nf">{{ devolopeList[show2].nf }}</p>
						<h2>{{ devolopeList[show2].js }}</h2>
					</div>
					<div class="time">
						<!-- front -->
						<p v-if="devolopeList[progressIndex].nf">{{ devolopeList[show1].nf }}</p>
						<h2>{{ devolopeList[show1].js }}</h2>
					</div>
				</div>
				<div class="text-boxs">
					<div class="info">
						<p :class="progressIndex == devolopeList.length - 1 ? 'active' : ''" v-for="(item, index) in devolopeList[show1].text" :key="index">{{ item }}</p>
					</div>
					<div class="info">
						<p :class="progressIndex == devolopeList.length - 1 ? 'active' : ''" v-for="(item, index) in devolopeList[show2].text" :key="index">{{ item }}</p>
					</div>
					<div class="info">
						<p :class="progressIndex == devolopeList.length - 1 ? 'active' : ''" v-for="(item, index) in devolopeList[show2].text" :key="index">{{ item }}</p>
					</div>
					<div class="info">
						<p :class="progressIndex == devolopeList.length - 1 ? 'active' : ''" v-for="(item, index) in devolopeList[show1].text" :key="index">{{ item }}</p>
					</div>
				</div>
				<div class="pre" @click="change('pre')"></div>
				<div class="next" @click="change('next')"></div>
			</div>
			<div class="ie-info-box wow" v-else>
				<div class="time">
					<p v-if="devolopeList[progressIndex].nf">{{ devolopeList[progressIndex].nf }}</p>
					<h2>{{ devolopeList[progressIndex].js }}</h2>
				</div>
				<div class="info">
					<p v-for="(item, index) in devolopeList[progressIndex].text" :class="index == devolopeList.length - 1 ? 'active' : ''" :key="index">{{ item }}</p>
				</div>
				<div class="pre" @click="IEchange('pre')"></div>
				<div class="next" @click="IEchange('next')"></div>
			</div>
		</div>
		<div class="hover select4">
			<h2 class="wow">荣誉资质</h2>
			<h3 class="wow">匠心与精耕让我们走在行业发展前沿</h3>
			<div class="nav wow">
				<div v-for="(v, i) in ryzz" :key="i" :class="bannerActive == i ? 'active' : ''" @click="bannerActive = i">{{ v.typename }}</div>
			</div>
			<div class="swiper-box wow">
				<div class="hover-swiper" v-for="(v, i) in ryzz" :key="i">
					<template v-if="bannerActive == i">
						<swiper :options="hoverBannerOptions">
							<swiper-slide v-for="(value, i) in v.list" :key="i">
								<div class="img-box">
									<img :src="web_url + value.img" alt="" />
								</div>
								<h2>{{ value.title }}</h2>
							</swiper-slide>
						</swiper>
						<div class="controal">
							<div v-if="bannerActive == i" class="swiper-next hv-next"></div>
							<div v-if="bannerActive == i" class="swiper-pre hv-pre"></div>
						</div>
					</template>
				</div>
			</div>
		</div>
		<div class="social-response select5">
			<h2 class="wow">社会责任</h2>
			<h3 class="wow">SOCIAL RESPONSIBILITY</h3>
			<div class="content-box">
				<div class="svg-box" :class="isIE ? 'svg-box-ie' : 'svg-box-chrome'">
					<svg
						version="1.1"
						class="svg"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 7523 72"
						style="enable-background:new 0 0 7523 72;"
						xml:space="preserve"
					>
						<path
							class="st0"
							d="M0.7,30.2C52.1,14.8,108.5,1,210,1c228.5,0,228.5,70,457,70c228.5,0,228.5-70,457-70s228.5,70,457,70
                c228.5,0,228.5-70,457-70s228.5,70,457,70s228.5-70,457-70c228.5,0,228.5,70,457,70c228.5,0,228.5-70,457-70s228.5,70,457,70
                s228.5-70,457-70c228.5,0,228.5,70,457,70c228.5,0,228.5-70,457-70c228.5,0,228.5,70,457,70c228.5,0,228.5-70,457-70
                s228.5,70,457,70c228.5,0,228.5-70,457-70"
						/>
					</svg>
					<div class="plane"></div>
				</div>
				<ul>
					<li v-for="(v, i) in shzrList" :key="i" class="wow" :style="{ 'animation-delay': 0.1 * i + 0.3 + 's' }">
						<div class="img-box">
							<div class="inner">
								<img :src="web_url + v.img" alt="" />
							</div>
						</div>
						<div class="text-box">
							<div class="dosh" @click="doMovePath(i)"></div>
							<h2>{{ v.title }}</h2>
							<p>{{ v.desc }}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="btn-box">
				<div class="left-arrow" :class="nextIndex >= 1 ? 'active' : ''" @click="prev">{{ nextIndex }}</div>
				<div class="right-arrow" :class="nextIndex < shzrList.length - 1 ? 'active' : ''" @click="next"></div>
			</div>
		</div>
		<div class="contact-us select6">
			<div class="left wow">
				<h2>联系我们</h2>
				<h3>CONTACT US</h3>
				<div class="info-box">
					<ul>
						<li>
							<div>
								<span>Phone number</span>
								<span>{{ $store.state.footData.tel }}</span>
								<i></i>
							</div>
							<div></div>
						</li>
						<li>
							<div>
								<span>Address</span>
								<span>{{ $store.state.footData.address }}</span>
								<i></i>
							</div>
						</li>
						<li>
							<div class="img-box">
								<img :src="$store.state.footData.web_url + $store.state.footData.watch" alt="" />
							</div>
							<div class="info">
								<span>关注波涛了解</span>
								<span>最新装饰风格</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="right wow">
				<baidu-map class="bm-view" :zoom="22" :center="center" :scroll-wheel-zoom="true" :pinch-to-zoom="true">
					<bm-marker :position="center" @click="bdJump()" :icon="{ url: require('assets/icons/ic_g1_part8_bt.png'), size: { width: 181, height: 68 } }"></bm-marker>
					<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
					<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_SATELLITE_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
				</baidu-map>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style lang="scss">
html {
	.botao-brand {
		.left {
			opacity: 0;
			animation: slide-left-in 2s, fade-in 2s;
			animation-fill-mode: forwards;
		}
		.right-box {
			opacity: 0;
			animation: slide-right-in 2s, fade-in 2s;
			animation-fill-mode: forwards;
		}
	}
	.brand-data {
		.left {
			> p {
				opacity: 0;
				animation: slide-up-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.right {
			.text-box {
				opacity: 0;
				animation: slide-up-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
			.china-map-wrapper {
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
	.core-value {
		> h2,
		> h3 {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.img-list {
			.img-box {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
	.history {
		> h2,
		> h3 {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.history-scroll {
			opacity: 0;
			animation: slide-left-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.info-box {
			opacity: 0;
			animation: slide-right-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.hover {
		> h2,
		> h3 {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.nav,
		.swiper-box {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
	.social-response {
		> h2,
		> h3 {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		ul {
			li {
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
	}
	.contact-us {
		.left {
			opacity: 0;
			animation: slide-left-in 2s, fade-in 2s;
			animation-fill-mode: forwards;
		}
		.right {
			opacity: 0;
			animation: slide-right-in 2s, fade-in 2s;
			animation-fill-mode: forwards;
		}
	}
}
.brand {
	// display: flex;
	// position: relative;
	// flex-direction: column;
	// box-sizing: border-box;
	video {
		width: 100%;
		height: 100%;
		object-fit: fill;
		&::-webkit-media-controls {
			display: none !important;
		}
	}
	@keyframes fade-ine {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@mixin title {
		h2,
		h3 {
			text-align: center;
			font-weight: 400;
			color: #000000;
			line-height: 1;
		}
		h2 {
			margin-top: 99px;
			font-size: 48px;
		}
		h3 {
			margin-top: 25px;
			font-size: 24px;
			font-family: Athene;
		}
	}
	// @keyframes rotate {
	// 	from {
	// 		transform: rotateX(0deg);
	// 	}
	// 	to {
	// 		transform: rotateX(180deg);
	// 	}
	// }
	.swiper-pre,
	.swiper-next {
		position: absolute;
		z-index: 11;
		top: 62px;
		width: 13px;
		height: 26px;
		cursor: pointer;
		transition: all 0.3s;
	}
	.swiper-pre {
		left: 80px;
		background: url(~assets/icons/ic_f4_left1.png) no-repeat;
		background-size: 100%;
		&:hover {
			background-image: url(~assets/icons/ic_f4_left2.png);
		}
	}
	.swiper-next {
		right: 80px;
		background: url(~assets/icons/ic_f4_right1.png) no-repeat;
		background-size: 100%;
		&:hover {
			background-image: url(~assets/icons/ic_f4_right2.png);
		}
	}
	.banner-box {
		display: flex;
		position: relative;
		min-height: 937px;
		video {
			vertical-align: middle;
			height: 937px;
		}
		.banner {
			position: relative;
			height: 937px;
			img {
				height: 100%;
			}
		}
		.banner-text {
			position: absolute;
			margin-top: 0;
			transform: translate(0);
			top: 332px;
			left: 81px;
			color: #fff;
			h3 {
				text-align: start;
				font-size: 56px;
				line-height: 1;
			}
			p {
				margin-top: 24px;
				font-size: 24px;
				line-height: 1;
				font-family: Athene;
			}
		}
		.text {
			position: absolute;
			bottom: 323px;
			left: 81px;
			width: 477px;
			font-size: 18px;
			color: #ffffff;
			line-height: 38px;
		}
		.aside-text {
			position: absolute;
			right: 0px;
			bottom: 189px;
			font-size: 16px;
			font-family: Athene;
			color: #ffffff;
			transform: rotate(90deg);
		}
		.img-box {
			position: absolute;
			display: flex;
			top: 50%;
			left: 50%;
			width: 85px;
			height: 85px;
			cursor: pointer;
			border-radius: 50%;
			transform: translate(-50%, -50%) translate(0, -5px);
			overflow: hidden;
			transition: all 0.3s;

			z-index: 1;
			img {
				width: 100%;
				height: 100%;
			}
			&:hover {
				transform: translate(-50%, -50%) translate(0, -5px) scale($imgScale);
			}
		}
	}
	.aside-nav {
		z-index: 99;
		position: absolute;
		right: 5%;
		top: 20%;
		font-size: 14px;
		color: #fff;
		line-height: 1;
		li {
			position: relative;
			text-align: right;
			height: 35px;
			border-right: 1px dashed #43493a;
			cursor: pointer;
			span {
				position: absolute;
				width: 100px;
				right: 0;
				top: -5px;
				margin-right: 22px;
				transition: all 0.3s;
			}
			&::before {
				position: absolute;
				content: '';
				right: -3px;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: #fff;
				transition: all 0.3s;
			}
			&:last-child {
				border: none;
			}
			&.active {
				color: #eb551c;
				&::before {
					background-color: #eb551c;
				}
			}
			&:hover {
				color: #eb5518;
				&::before {
					background-color: #eb5518;
				}
			}
		}
	}
	.botao-brand {
		display: flex;
		padding: 99px 83px 98px 79px;
		background: url(~assets/bg_g1_part2.jpg) no-repeat;
		background-size: 100%;
		.left {
			position: relative;
			display: flex;
			align-items: center;
			.title-box {
				position: absolute;
				top: 0px;
				h2 {
					font-size: 48px;
					font-weight: bold;
					color: rgba(0, 0, 0, 1);
					line-height: 1;
					span {
						font-weight: Regular;
						font-size: 50px;
						color: rgba(235, 85, 29, 1);
					}
				}
				p {
					margin-top: 25px;
					font-size: 24px;
					font-weight: 400;
					color: #000000;
					line-height: 1;
				}
			}
			.img-box {
				margin-right: 250px;
				margin-left: 156px;
				margin-bottom: 22px;
				width: 190px;
				height: 104px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			> ul {
				margin-top: 2px;
				position: relative;
				li {
					position: relative;
					.button-wrap {
						.btn {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 310px;
							height: 48px;
							border: 1px solid #132132;
							background-color: #fff;
							font-size: 20px;
							color: #132132;
							line-height: 1;
							text-shadow: none;
							transition: all 0.3s;
							&::before,
							&::after {
								border-color: #132132;
							}
							&:hover {
								color: #fff;
								background: #eb551d;
								border: 1px solid #eb551d;
								transform: translateY(0);

								&::after {
									border-color: #fff;
								}
								&::before {
									border-color: #fff;
								}
							}
						}
					}
					&::before {
						position: absolute;
						top: 24px;
						left: -82px;
						width: 82px;
						height: 1px;
						background: #ccc;
						content: '';
					}
					&:not(:last-child):after {
						position: absolute;
						content: '';
						top: 24px;
						left: -82px;
						width: 1px;
						height: 58px;
						background-color: #ccc;
					}
					&:not(:first-child) {
						margin-top: 10px;
					}
					&.active {
						.button-wrap {
							.btn {
								color: #fff;
								background: #eb551d;
								border: 1px solid #eb551d;
								&::after {
									border-color: #fff;
								}
								&::before {
									border-color: #fff;
								}
							}
						}
					}
				}
				&::before {
					position: absolute;
					top: 50%;
					left: -198px;
					content: '';
					width: 117px;
					height: 1px;
					background: #ccc;
				}
			}
		}
		.right-box {
			position: relative;
			.right {
				margin-left: 127px;
				width: 725px;
				text-align: center;
				animation: fade-ine 1s ease forwards;
				h3 {
					margin-top: 22px;
					font-size: 36px;
					color: #000000;
					line-height: 1;
				}
				p {
					padding-right: 20px;
					margin-top: 25px;
					font-size: 18px;
					color: #666666;
					line-height: 36px;
					text-align: left;
					max-height: 180px;
					overflow-y: scroll;
					@include scrollbar-beautify(2px);
				}
				.img-box {
					margin: 0 auto;
					margin-top: 51px;
					width: 556px;
					height: 350px;
					overflow: hidden;
					cursor: pointer;
					img {
						width: 100%;
						height: 100%;
						transition: all 0.3s;
					}
					&:hover img {
						transform: scale($imgScale);
					}
				}
			}
		}
	}
	.brand-data {
		display: flex;
		padding: 99px 50px 0 80px;
		justify-content: space-between;
		.left {
			width: 523px;
			height: 100%;
			p {
				font-size: 18px;
				font-weight: 400;
				color: #666666;
				line-height: 43px;
				&:first-of-type {
					margin-top: 142px;
				}
			}
			ul {
				margin-top: 90px;
				display: flex;
				flex-wrap: wrap;
				li {
					display: flex;
					flex-direction: column;
					width: 220px;
					> span {
						display: flex;
						align-items: flex-end;
						font-size: 52px;
						font-weight: bold;
						color: #eb551c;
						line-height: 1;
						.suffix {
							font-size: 26px;
						}
						.fs18 {
							margin-left: 5px;
							font-size: 18px;
							line-height: 24px;
						}
						&:first-child {
							width: 220px;
						}
						&:nth-of-type(2) {
							margin-top: 14px;
							font-size: 18px;
							color: #333333;
							line-height: 1;
						}
					}
					&:nth-child(2n + 1) {
						margin-right: 65px;
					}
					&:nth-child(n + 3) {
						margin-top: 83px;
					}
				}
			}
		}
		.right {
			position: relative;
			.text-box {
				top: 0;
				left: 86px;
				position: absolute;
				h2,
				h3 {
					text-align: center;
					color: #000000;
					line-height: 1;
				}
				h2 {
					font-size: 48px;
				}
				h3 {
					margin-top: 27px;
					font-size: 24px;
					font-family: Athene;
				}
			}
			.map-box {
				margin: 0;
				width: 1152px;
				height: 860px;
			}
		}
	}
	.core-value {
		position: relative;
		padding: 100px 80px 0 80px;
		height: 580px;
		background: url(~assets/bg_g1_part4.jpg) no-repeat;
		background-size: 100%;
		h2,
		h3 {
			font-weight: 400;
			text-align: center;
			color: #fff;
			line-height: 1;
		}
		h2 {
			font-size: 48px;
		}
		h3 {
			margin-top: 30px;
			font-size: 24px;
		}
		.img-list {
			margin-top: 90px;
			display: flex;
			> div {
				display: flex;
				position: relative;
				z-index: 11;
				overflow: hidden;
				img {
					transition: all 0.3s;
					transform: scale(1.02);
				}
				&:hover img {
					transform: scale(1.06);
				}
				&:not(:last-child) {
					margin-right: 20px;
				}
				.text {
					position: absolute;
					padding: 50px 0 59px 49px;
					top: 0;
					left: 0;
					width: 336px;
					height: 582px;
					h2,
					h3,
					div {
						text-align: start;
						line-height: 1;
						color: #ffffff;
					}
					h2 {
						font-size: 28px;
					}
					h3 {
						margin-top: 18px;
						font-size: 20px;
					}
					div {
						position: absolute;
						left: 8px;
						transform: rotate(90deg);
						bottom: 100px;
						font-size: 20px;
					}
				}
				&:nth-child(2),
				&:nth-child(4) {
					top: -30px;
				}
			}
		}
	}
	.history {
		position: relative;
		padding-top: 387px;
		box-sizing: border-box;
		height: 1255px;
		background: url(~assets/bg_g1_part5.jpg) no-repeat;
		background-size: 100% 100%;
		h2,
		h3 {
			text-align: center;
			line-height: 1;
		}
		h2 {
			font-size: 48px;
		}
		h3 {
			margin-top: 25px;
			font-size: 24px;
			font-family: Athene;
		}
		.img-box {
			@include scrollbar-beautify(0);
			position: absolute;
			top: 540px;
			left: 400px;
			overflow-y: scroll;
			width: 670px;
			height: 716px;

			.gray-img {
				position: relative;
				height: 1245px;
				img {
					position: absolute;
					top: 5px;
					left: 7px;
					width: 654px;
					&:first {
						top: 4px;
						left: 4px;
					}
				}
				> div {
					position: absolute;
					z-index: 10;
					width: 14px;
					height: 14px;
					border-radius: 50%;
					border: 1px solid #132132;
					background-color: #fff;
					transition: all 0.3s;
					cursor: pointer;
					span {
						position: absolute;
						width: 200px;
						top: 0;
						left: 0;
						font-size: 20px;
						font-weight: bold;
						color: #132132;
					}
				}
				.time1 {
					top: 257px;
					left: 134px;
					span {
						top: -33px;
						left: -108px;
					}
				}
				.time2 {
					top: 443px;
					left: 102px;
					span {
						top: -33px;
						left: 19px;
					}
				}
				.time3 {
					top: 535px;
					left: 307px;
					span {
						top: 19px;
						left: -118px;
					}
				}
				.time4 {
					top: 630px;
					left: 397px;
					span {
						top: 19px;
						left: 18px;
					}
				}
				.time5 {
					top: 781px;
					left: 214px;
					span {
						top: -35px;
						left: 21px;
					}
				}
				.time6 {
					left: 404px;
					top: 900px;
					span {
						top: -34px;
						left: 5px;
					}
				}
				.time7 {
					left: 554px;
					top: 1139px;
					span {
						top: -34px;
						left: -100px;
					}
				}
			}
			.inner-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 660px;
				height: 290px;
				background: url(~assets/bg_g1_part5_way2.png) no-repeat;
				background-size: 100%;
			}
		}
		.info-box {
			position: absolute;
			top: 50%;
			left: 50%;
			display: flex;
			width: 870px;
			height: 180px;
			color: #ffffff;
			text-align: start;
			.time-box {
				width: 240px;
				height: 100%;
				transform-style: preserve-3d;
				transition: all 1s;
				// overflow: hidden;
				// transform-origin: bottom;
				.time {
					position: absolute;
					top: 0;
					box-sizing: border-box;
					// padding-top: 43px;
					// padding-left: 46px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 240px;
					height: 100%;
					background: #eb551d;
					transition: all 1s;
					p {
						margin-bottom: 20px;
						font-size: 30px;
						font-weight: bold;
						line-height: 1;
					}
					h2 {
						text-align: left;
						// margin-top: 16px;
						font-size: 26px;
						line-height: 1;
					}
				}
				> div:nth-child(1) {
					// top: -180px;
					transform: translateZ(-90px) rotateY(180deg) rotateZ(180deg);
				}
				> div:nth-child(2) {
					top: -180px;
					transform-origin: bottom;
					transform: rotateX(90deg) translateY(90px);
				}
				> div:nth-child(3) {
					top: 90px;
					transform: rotateX(-90deg);
				}
				> div:nth-child(4) {
					transform: translateZ(90px);
				}
			}
			.time.active {
				animation: rotate 1s ease-in-out;
			}
			.text-boxs {
				left: 240px;
				width: 630px;
				height: 180px;
				transform-style: preserve-3d;
				transition: all 1s;
				.info {
					width: 100%;
					position: absolute;
					top: 0;
					// padding: 43px 20px 0 50px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					flex: 1;
					height: 100%;
					background: #132132;
					&.active {
						text-align: center;
					}
					p {
						margin: 0 auto;
						width: 560px;
						line-height: 40px;
						text-align: center;
						@include line-clamp(2);
						&:first-of-type {
							font-size: 22px;
						}
						&:nth-of-type(2) {
							// margin-top: 12px;
							font-size: 18px;
							line-height: 32px;
						}
					}
				}
				> div:nth-child(1) {
					z-index: 11;
					// top: -180px;
					transform: translateZ(-90px) rotateX(180deg) rotateZ(0deg);
				}
				> div:nth-child(2) {
					top: -180px;
					transform-origin: bottom;
					transform: rotateX(90deg) translateY(90px);
				}
				> div:nth-child(3) {
					top: 90px;
					transform: rotateX(-90deg);
				}
				> div:nth-child(4) {
					transform: translateZ(90px) rotateX(0deg);
				}
			}
			.pre,
			.next {
				position: absolute;
				z-index: 11;
				bottom: -50px;
				width: 13px;
				height: 26px;
				cursor: pointer;
				transition: all 0.3s;
			}
			.pre {
				left: 80px;
				background: url(~assets/icons/ic_f4_left1.png) no-repeat;
				background-size: 100%;
				&:hover {
					background-image: url(~assets/icons/ic_f4_left2.png);
				}
			}
			.next {
				right: 80px;
				background: url(~assets/icons/ic_f4_right1.png) no-repeat;
				background-size: 100%;
				&:hover {
					background-image: url(~assets/icons/ic_f4_right2.png);
				}
			}
		}
		.ie-info-box {
			position: absolute;
			top: 50%;
			left: 50%;
			display: flex;
			width: 870px;
			height: 180px;
			color: #ffffff;
			text-align: start;
			.time {
				box-sizing: border-box;
				padding-top: 43px;
				padding-left: 46px;
				width: 240px;
				height: 100%;
				background: #eb551d;
				p {
					font-size: 30px;
					font-weight: bold;
					line-height: 1;
				}
				h2 {
					text-align: start;
					margin-top: 16px;
					font-size: 26px;
					line-height: 1;
				}
			}
			.info {
				padding: 43px 20px 0 50px;
				flex: 1;
				height: 100%;
				background: #132132;
				p {
					line-height: 1;
					&:first-of-type {
						font-size: 22px;
					}
					&:nth-of-type(2) {
						margin-top: 12px;
						font-size: 18px;
						line-height: 32px;
					}
				}
			}
			.pre,
			.next {
				position: absolute;
				z-index: 11;
				bottom: -50px;
				width: 13px;
				height: 26px;
				cursor: pointer;
				transition: all 0.3s;
			}
			.pre {
				left: 80px;
				background: url(~assets/icons/ic_f4_left1.png) no-repeat;
				background-size: 100%;
				&:hover {
					background-image: url(~assets/icons/ic_f4_left2.png);
				}
			}
			.next {
				right: 80px;
				background: url(~assets/icons/ic_f4_right1.png) no-repeat;
				background-size: 100%;
				&:hover {
					background-image: url(~assets/icons/ic_f4_right2.png);
				}
			}
		}
		.time {
			h2 {
				text-align: left;
			}
		}
	}
	.hover {
		box-sizing: border-box;
		padding: 0 200px 0 190px;
		overflow: hidden;
		min-height: 970px;
		background: url(~assets/bg_g1_part6.jpg) no-repeat;
		background-size: 100%;
		color: #ffffff;
		h2,
		h3 {
			text-align: center;
			line-height: 1;
		}
		h2 {
			margin-top: 99px;
			font-size: 48px;
		}
		h3 {
			margin-top: 30px;
			font-size: 24px;
		}
		.nav {
			margin-top: 40px;
			margin-bottom: 70px;
			display: flex;
			justify-content: center;
			font-size: 18px;
			outline: none;
			div {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 122px;
				height: 39px;
				cursor: pointer;
				margin-right: 20px;
				&:hover {
					border: 1px solid #eb551d;
					&::before,
					&::after {
						position: absolute;
						content: '';
						width: 5px;
						height: 5px;
						border-left: 1px solid #eb551d;
						border-top: 1px solid #eb551d;
						opacity: 0.5;
					}
					&::before {
						top: 5px;
						left: 5px;
					}
					&::after {
						bottom: 5px;
						right: 5px;
						transform: rotate(180deg);
					}
				}
				&.active {
					border: 1px solid #eb551d;
					&::before,
					&::after {
						position: absolute;
						content: '';
						width: 5px;
						height: 5px;
						border-left: 1px solid #eb551d;
						border-top: 1px solid #eb551d;
						opacity: 0.5;
					}
					&::before {
						top: 5px;
						left: 5px;
					}
					&::after {
						bottom: 5px;
						right: 5px;
						transform: rotate(180deg);
					}
				}
			}
		}
		.swiper-box {
			position: relative;

			.img-box {
				display: flex;
			}
			h2 {
				display: flex;
				max-width: 110%;
				// width: 330px;
				margin-top: 35px;
				text-align: center;
				justify-content: center;
				font-size: 20px;
				color: #ffffff;
				line-height: 1;
				// @include line-clamp(1);
			}
			.controal {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				.swiper-pre,
				.swiper-next {
					top: 215px;
					transform: translateY(-50%);
				}
				.swiper-pre {
					left: -105px;
				}
				.swiper-next {
					right: -105px;
				}
			}
		}
	}
	.social-response {
		overflow: hidden;
		@include title();
		.content-box {
			margin-bottom: 80px;
			@include scrollbar-beautify(0);
			> div {
				display: flex !important;
			}
			.svg-box {
				position: absolute;
				left: 0;
				height: 300px;
				width: 0;
				overflow: hidden;
				.svg {
					left: 138px;
					position: absolute;
					transform-origin: left center;
					path {
						fill: none;
						stroke-miterlimit: 10;
						stroke-dasharray: 4, 4;
					}
				}
				.plane {
					position: absolute;
					left: 122.37px;
					width: 37px;
					height: 31px;
					background: url(~assets/icons/ic_g1_part7_plane.png) no-repeat;
					background-size: 100%;
					transform: rotate(-13.2449deg);
				}
			}
			.svg-box-chrome {
				top: 333px;
				.svg {
					height: 80px;
					top: 28px;
					transform: scale(0.89, 0.75);
					path {
						stroke: #dbdbdb;
					}
				}
				.plane {
					top: 49.5px;
				}
			}
			.svg-box-ie {
				top: 214px;
				.svg {
					top: 36px;
					transform: scale(1.15, 0.98);
					path {
						stroke: #bbbbbb;
						stroke-width: 1;
					}
				}
				.plane {
					top: 165px;
				}
			}

			ul {
				position: relative;
				height: 537px;
				display: flex;
				margin: 137px 0 0 140px;
				width: auto;
				li {
					position: relative;
					top: -25px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					// width: 327px;
					height: 450px;
					.img-box {
						width: 327px;
						// height: 203px;
						.inner {
							display: flex;
							overflow: hidden;
							img {
								width: 327px;
								height: 203px;
								transition: all 0.3s;
							}
						}
						&:hover img {
							transform: scale($imgScale);
						}
					}
					.text-box {
						width: 327px;
						position: relative;
						flex: 1;
						min-height: 224px;
						h2 {
							margin-top: 108px;
							text-align: left;
							margin-bottom: 22px;
							font-size: 34px;
							font-weight: bold;
						}
						p {
							padding-right: 20px;
							width: 327px;
							font-size: 18px;
							color: #666666;
							line-height: 40px;
							max-height: 160px;
							overflow-y: scroll;
							@include scrollbar-beautify(1px);
							&:nth-of-type(2) {
								margin-top: 10px;
							}
						}
						.dosh {
							position: absolute;
							left: -33px;
							top: 40px;
							width: 30px;
							height: 30px;
							border-radius: 50%;
							border: 1px solid #eb551d;
							cursor: pointer;
							transition: transform 0.3s;
							&:hover {
								transform: scale(1.1);
							}
							&::before {
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								content: '';
								width: 10px;
								height: 10px;
								background: #eb551d;
								border-radius: 50%;
							}
						}
					}
					&:nth-child(2n) {
						top: 86px;
						flex-direction: column-reverse;
						.text-box {
							display: flex;
							flex-direction: column-reverse;
							margin-bottom: 115px;
						}
						p {
							margin-top: 0;
						}
						h2 {
							margin-bottom: 0;
							margin-top: 16px !important;
						}
						.dosh {
							left: -33px;
							top: 282px;
						}
					}
					&:nth-child(3) {
						top: -27px;
					}
					&:first-child {
						margin-left: 205px;
					}
					&:not(:last-child) {
						margin-right: 130px;
					}
					&:last-child {
						.text-box {
							p {
								width: 250px;
							}
						}
					}
				}
				&::after {
					position: absolute;
					content: '让梦想起飞';
					top: 56%;
					left: -54px;
					font-size: 18px;
					color: #eb551d;
				}
			}
		}
		.btn-box {
			display: flex;
			justify-content: center;
			height: 20px;
			> div {
				width: auto;
				margin: 0 100px;
				width: 15px;
				height: 15px;
				border-left: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				cursor: pointer;
				transition: all 1s;
				user-select: none;
				&:nth-child(1) {
					transform: rotate(45deg);
					&.active {
						border-color: #eb551c;
					}
				}
				&:nth-child(2) {
					transform: rotate(225deg);
					&.active {
						&.active {
							border-color: #eb551c;
						}
					}
				}
			}
		}
	}
	.contact-us {
		display: flex;
		margin-top: 105px;
		height: 745px;
		.left {
			@include title();
			box-sizing: border-box;
			padding: 99px 0 0 80px;
			width: 860px;
			height: 100%;
			background: url(~assets/bg_g1_part8.jpg) no-repeat;
			background-size: 100%;
			h2,
			h3 {
				text-align: start;
			}
			h2 {
				margin-top: 0;
			}
			.info-box {
				box-sizing: border-box;
				padding: 69px 80px 0 129px;
				margin-top: 58px;
				height: 491px;
				background-color: #fff;
				i {
					background-size: 100%;
				}
				ul {
					li {
						display: flex;
						justify-content: space-between;
						@keyframes bounce-up {
							10% {
								transform: rotate(20deg);
							}
							20% {
								transform: rotate(-10deg);
							}
							30% {
								transform: rotate(5deg);
							}
							40% {
								transform: rotate(-5deg);
							}
							50%,
							100% {
								transform: rotate(0deg);
							}
						}
						> div {
							position: relative;
							display: flex;
							flex-direction: column;
							span {
								line-height: 1;
								&:first-child {
									font-size: 16px;
									color: #999999;
								}
								&:nth-child(2) {
									margin-top: 23px;
									margin-bottom: 29px;
									font-size: 24px;
									font-weight: bold;
									color: #132132;
								}
							}
							&:first-child:hover i:last-child {
								animation: bounce-up 1.5s linear infinite;
							}
							&:first-child i:last-child {
								position: absolute;
								left: -75px;
								top: 11px;
								width: 34px;
								height: 34px;
								background: url(~assets/icons/ic_g1_part8_phone.png) no-repeat;
								background-size: 100%;
							}
							&:nth-child(2):hover i:last-child {
								animation: bounce-up 1.5s linear infinite;
							}
							&:nth-child(2) i:last-child {
								position: absolute;
								left: -75px;
								top: 11px;
								width: 40px;
								height: 28px;
								background-image: url(~assets/icons/ic_g1_part8_email.png);
							}
						}
						&:not(:first-child) {
							margin-top: 39px;
						}
						&:not(:last-child) {
							border-bottom: 1px solid #eee;
						}
						&:nth-child(2) {
							> div {
								position: relative;
								&:nth-child(1) {
									i:last-child {
										position: absolute;
										width: 34px;
										height: 42px;
										background-image: url(~assets/icons/ic_g1_part8_position.png);
									}
								}
							}
						}
						&:last-child {
							justify-content: flex-start;
							> div {
								&::before {
									display: none;
								}
							}
							.info {
								margin-top: 35px;
								margin-left: 23px;
								display: flex;
								flex-direction: column;
								span {
									margin: 0;
									font-size: 18px;
									font-weight: 400;
									color: #999999;
									line-height: 32px;
								}
							}
						}
						.img-box {
							width: 136px;
							height: 136px;
						}
					}
				}
			}
		}
		.right {
			flex: 1;
			height: 100%;
			.bm-view {
				height: 100%;
				.anchorBL {
					display: none;
				}
			}
		}
	}
	#clickToPlay {
		display: none !important;
	}
}
</style>
