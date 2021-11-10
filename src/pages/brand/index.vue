<template>
	<div class="brand">
		<div class="banner-box">
			<Banner :data="BannerData"></Banner>
			<p class="text">
				波涛装饰集团成立于2001年，总部设立于中国上海，经过二十几年的发展，形成了集建筑、工装、家装、软装、加盟、培训、家居建材、供应链、船舶内装、中医健康等为一体的综合性装饰集团公司。
			</p>
			<div class="aside-text">BOTAOGROUP VIDEO</div>
			<div class="img-box">
				<img src="~assets/ic_home_b3_play.png" alt="" />
			</div>
		</div>
		<ul class="aside-nav">
			<li v-for="(v, i) in asideNav" :key="i">
				<span @click="scroll(i)" :class="'item' + i">{{ v }}</span>
			</li>
		</ul>
		<div class="botao-brand select0">
			<div class="left">
				<div class="img-box">
					<img src="~assets/bg_g1_part2_logo.png" alt="" />
				</div>
				<ul>
					<li v-for="(v, i) in btBrandArr" :class="isActive == i ? 'active' : ''" @click="isActive = i" :key="i"><Button :text="v"></Button></li>
				</ul>
			</div>
			<div class="right-box">
				<div class="right" v-show="i == isActive" v-for="(v, i) in btBrandInfoArr" :key="i">
					<h3>
						{{ v.title }}
					</h3>
					<p>
						{{ v.text }}
					</p>
					<div class="img-box">
						<img :src="v.img" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="brand-data select1">
			<div class="left">
				<p>在全国近30个省，开设了300多家分公司</p>
				<p>
					深受20000+高端住宅业主的信赖
				</p>
				<p>建立核心竞争力，巩固市场优势，形成具有长久生命力的商业模式</p>
				<ul>
					<li>
						<span>
							<ICountUp :endVal="20000" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
						</span>
						<span>大宅别墅业主选择</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="300" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
							<span class="fs18">家</span>
						</span>
						<span>波涛连锁分公司</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="18000" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
							<span class="fs18">m²</span>
						</span>
						<span>波涛建材广场</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="21000" :options="options1" ref="countup1"></ICountUp>
							<span class="fs18">m²</span>
						</span>
						<span>波涛大楼</span>
					</li>
					<li>
						<span>
							<ICountUp :endVal="15000" :options="options1" ref="countup1"></ICountUp>
							<span class="suffix">+</span>
							<span class="fs18">m²</span>
						</span>
						<span>白领公寓</span>
					</li>
				</ul>
			</div>
			<div class="right">
				<div class="text-box">
					<h2>触达全国 · 布局未来</h2>
					<h3>BRAND DATA</h3>
				</div>
				<ChinaMap />
			</div>
		</div>
		<div class="core-value select2">
			<h2>核心价值观</h2>
			<h3>以客户为中心 以员工为中心</h3>
			<div class="img-list">
				<div class="img-box">
					<img src="~assets/bg_g1_part4_pic1.jpg" alt="" />
					<div class="text">
						<h2>诚信</h2>
						<h3>立业基础</h3>
						<div>SINCERITY</div>
					</div>
				</div>
				<div class="img-box">
					<img src="~assets/bg_g1_part4_pic2.jpg" alt="" />
					<div class="text">
						<h2>感恩</h2>
						<h3>发展源泉</h3>
						<div>GRATITUDE</div>
					</div>
				</div>
				<div class="img-box">
					<img src="~assets/bg_g1_part4_pic3.jpg" alt="" />
					<div class="text">
						<h2>奋斗</h2>
						<h3>拼搏精神</h3>
						<div>STRUGGLE</div>
					</div>
				</div>
				<div class="img-box">
					<img src="~assets/bg_g1_part4_pic4.jpg" alt="" />
					<div class="text">
						<h2>创新</h2>
						<h3>制胜法宝</h3>
						<div>INNOVATE</div>
					</div>
				</div>
				<div class="img-box">
					<img src="~assets/bg_g1_part4_pic5.jpg" alt="" />
					<div class="text">
						<h2>共赢</h2>
						<h3>价值追求</h3>
						<div>WIN-WIN</div>
					</div>
				</div>
			</div>
		</div>
		<div class="history select3">
			<h2>波涛发展历程</h2>
			<h3>DEVELOPMENT COURSE</h3>
			<div class="img-box history-scroll">
				<div class="gray-img">
					<img src="~assets/bg_g1_part5_way1.png" alt="" />
					<div class="time1">
						<span>2001-2005</span>
					</div>
					<div class="time2">
						<span>2006-2010</span>
					</div>
					<div class="time3">
						<span>2011-2014</span>
					</div>
					<div class="time4">
						<span>2015-2016</span>
					</div>
					<div class="time5">
						<span>2017-2018</span>
					</div>
					<div class="time6">
						<span>2019-2020</span>
					</div>
					<div class="time7">
						<span>2020-2021</span>
					</div>
				</div>
				<div class="inner-img"></div>
			</div>
			<div class="info-box" v-for="(v, i) in devolopeList" v-show="isShow == i" :key="i">
				<div class="time">
					<p>{{ v.time }}</p>
					<h2>{{ v.name }}</h2>
				</div>
				<div class="info">
					<p v-for="(item, index) in v.text" :key="index">{{ item }}</p>
				</div>
				<div class="pre" @click="change('pre')"></div>
				<div class="next" @click="change('next')"></div>
			</div>
		</div>
		<div class="hover select4">
			<h2>荣誉资质</h2>
			<h3>匠心与精耕让我们走在行业发展前沿</h3>
			<div class="nav">
				<div v-for="(v, i) in nav" :key="i" :class="bannerActive == i ? 'active' : ''" @click="bannerActive = i">{{ v }}</div>
			</div>
			<div class="swiper-box">
				<div class="hover-swiper" v-if="bannerActive == 0">
					<swiper :options="hoverBannerOptions">
						<swiper-slide v-for="(v, i) in hvBanner" :key="i">
							<div class="img-box">
								<img :src="v.imgUrl" alt="" />
							</div>
							<h2>{{ v.title }}</h2>
						</swiper-slide>
					</swiper>
					<div class="controal">
						<div v-if="bannerActive == 0" class="swiper-next hv-next"></div>
						<div v-if="bannerActive == 0" class="swiper-pre hv-pre"></div>
					</div>
				</div>
				<div class="research-swiper" v-if="bannerActive == 1">
					<swiper :options="researchBannerOptions">
						<swiper-slide v-for="(v, i) in hvBanner" :key="i">
							<div class="img-box">
								<img :src="v.imgUrl" alt="" />
							</div>
							<h2>{{ v.title }}</h2>
						</swiper-slide>
					</swiper>
					<div class="controal">
						<div v-if="bannerActive == 1" class="swiper-next res-next"></div>
						<div v-if="bannerActive == 1" class="swiper-pre res-pre"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="social-response select5">
			<h2>社会责任</h2>
			<h3>social responsibility</h3>
			<div class="content-box">
				<svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 3680 80" style="enable-background:new 0 0 3680 80;" xml:space="preserve">
					<g>
						<path d="M0,5c230,0,230,70,460,70C690,75,690,5,920,5s230,70,460,70c230,0,230-70,460-70c230,0,230,70,460,70c230,0,230-70,460-70c230,0,230,70,460,70c230,0,230-70,460-70"/>
						<path class="progress" d="M0,5c230,0,230,70,460,70C690,75,690,5,920,5s230,70,460,70c230,0,230-70,460-70c230,0,230,70,460,70c230,0,230-70,460-70c230,0,230,70,460,70c230,0,230-70,460-70"/>
					</g>
				</svg>
				<div class="testball"></div>
				<ul>
					<li v-for="(v, i) in socialArr" :key="i">
						<div class="img-box"><img :src="v.imgUrl" alt="" /></div>
						<div class="text-box">
							<div class="dosh"></div>
							<h2>{{ v.time }}</h2>
							<p v-for="(value, index) in v.text" :key="index">{{ value }}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="contact-us select6">
			<div class="left">
				<h2>联系我们</h2>
				<h3>CONTACTUS</h3>
				<div class="info-box">
					<ul>
						<li>
							<div>
								<span>Phone number</span>
								<span>400-920-2982</span>
							</div>
							<div>
								<span>E-mail</span>
								<span>botaogroup@BTcom</span>
							</div>
						</li>
						<li>
							<div>
								<span>Address</span>
								<span>上海徐汇区中山西路2331号</span>
							</div>
						</li>
						<li>
							<div class="img-box">
								<img src="~assets/bg_home_footer_qa.jpg" alt="" />
							</div>
							<div class="info">
								<span>关注波涛了解</span>
								<span>最新装饰风格</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="right">
				<baidu-map class="bm-view" :zoom="20" :center="center" :scroll-wheel-zoom="true" :pinch-to-zoom="true">
					<bm-marker :position="center" :icon="{ url: require('assets/icons/ic_g1_part8_bt.png'), size: { width: 181, height: 68 } }"></bm-marker>
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
.brand {
	box-sizing: border-box;
	margin: 0 auto;
	width: 1916px;
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
		position: relative;
		.banner {
			height: 970px;
			img {
				height: 100%;
			}
			.banner-text {
				margin-top: 0;
				transform: translate(0);
				top: 332px;
				left: 81px;
				h3 {
					text-align: start;
					font-size: 56px;
					line-height: 1;
				}
				p {
					margin-top: 24px;
					font-size: 24px;
					line-height: 1;
				}
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
			top: 50%;
			left: 50%;
			width: 85px;
			height: 85px;
			cursor: pointer;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.aside-nav {
		z-index: 99;
		position: absolute;
		top: 252px;
		right: 200px;
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
				width: 70px;
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
			display: flex;
			align-items: center;
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
					margin-top: 25px;
					font-size: 18px;
					color: #666666;
					line-height: 36px;
				}
				.img-box {
					margin: 0 auto;
					margin-top: 51px;
					width: 556px;
					height: 350px;
					img {
						width: 100%;
						height: 100%;
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
		height: 1260px;
		background: url(~assets/bg_g1_part5.jpg) no-repeat;
		background-size: 100%;
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
					top: 6px;
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
					top: 851px;
					left: 334px;
					span {
						top: -35px;
						left: 21px;
					}
				}
				.time6 {
					left: 554px;
					top: 1039px;
					span {
						top: -34px;
						left: 5px;
					}
					.time7 {
						top: 1216px;
						left: 588px;
						span {
							top: 1px;
							left: -134px;
						}
					}
				}
			}
			.inner-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 660px;
				height: 190px;
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
				margin-top: 35px;
				font-size: 22px;
				color: #ffffff;
				line-height: 1;
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
		padding-bottom: 60px;
		@include title();

		.content-box {
			@include scrollbar-beautify(0);
			.svg {
				position: absolute;
				left: 150px;
				top: 100px;
				height: 80px;
				path {
					fill:none;stroke:#DCDCDC;stroke-miterlimit:10;stroke-dasharray:3.9998,2.9998;
					&.progress {
						opacity: 0;
					}
				}
			}
			.testball {
				position: absolute;
				left: 150px;
				top: 100px;
				width: 10px;
				height: 10px;
				background: red;
				border-radius: 5px;
			}
			ul {
				position: relative;
				padding-bottom: 20px;
				display: flex;
				margin: 137px 0 0 140px;
				width: 100%;
				background: url(~assets/bg_g1_part7_line.png) no-repeat center;
				background-size: 100%;
				li {
					position: relative;
					top: -25px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 327px;
					height: 450px;
					.img-box {
						height: 203px;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.text-box {
						position: relative;
						h2 {
							margin-top: 0;
							text-align: start;
							margin-bottom: 16px;
							font-size: 34px;
							font-weight: bold;
						}
						p {
							width: 359px;
							font-size: 18px;
							color: #666666;
							line-height: 30px;
							&:nth-of-type(2) {
								margin-top: 10px;
							}
						}
						.dosh {
							position: relative;
							left: -34px;
							top: -34px;
							width: 30px;
							height: 30px;
							border-radius: 50%;
							border: 1px solid #eb551d;
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
						}
						p {
							margin-top: 0;
							line-height: 40px;
						}
						h2 {
							margin-bottom: 0;
							margin-top: 26px;
						}
						.dosh {
							left: -34px;
							top: 28px;
						}
					}
					&:first-child {
						margin-left: 205px;
					}
					&:not(:last-child) {
						margin-right: 130px;
					}
				}
				&::before {
					position: absolute;
					top: 50.5%;
					left: -31px;
					content: '';
					width: 31px;
					height: 31px;
					background: url(~assets/icons/ic_g1_part7_plane.png) no-repeat;
					background-size: 100%;
					font-size: 18px;
					color: #eb551d;
				}
				&::after {
					position: absolute;
					content: '让梦想起飞';
					top: 58%;
					left: -54px;
					font-size: 18px;
					color: #eb551d;
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
				ul {
					li {
						display: flex;
						justify-content: space-between;

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
							&::before {
								position: absolute;
								left: -75px;
								top: 11px;
								content: '';
								width: 34px;
								height: 34px;
								background: url(~assets/icons/ic_g1_part8_phone.png) no-repeat;
								background-size: 100%;
							}
							&:nth-child(2)::before {
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
								&:nth-child(1) {
									&::before {
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
					}
				}
			}
		}
		.right {
			flex: 1;
			height: 100%;
			.bm-view {
				height: 100%;
			}
		}
	}
}
</style>
