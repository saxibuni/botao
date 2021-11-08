<template>
	<div class="home">
		<div class="page1">
			<swiper :options="bannerSwiperOptions">
				<swiper-slide v-for="(item, i) in 3" :key="i">
					<img src="~assets/bg_home_banner1.jpg" alt="" />
					<div class="text" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
						<h3>
							<span>20+</span>
							年专注别墅大宅 全案引领者
						</h3>
						<div>
							Focus on villa
							<br />
							mansions
						</div>
						<div class="btn">
							走进波涛
							<i></i>
						</div>
					</div>
				</swiper-slide>
			</swiper>
			<div class="swiper-button-wrap">
				<div class="prev prev1"></div>
				<div class="next next1"></div>
			</div>
			<div class="form">
				<ul>
					<li>
						<i></i>
						<input type="text" placeholder="输入您的姓名" />
						<b>*</b>
					</li>
					<li>
						<i></i>
						<input type="text" placeholder="输入您的联系电话" />
						<b>*</b>
					</li>
					<li>
						<i></i>
						<input type="text" placeholder="输入您的装修面积" />
						<b>*</b>
					</li>
					<li class="btn">提交需求</li>
				</ul>
			</div>
		</div>
		<div class="page2">
			<h2>
				<span>1000+</span>
				经典案例 筑梦幸福家
			</h2>
			<p>Select cases</p>
			<div class="tabs">
				<div v-for="(item, i) in anList" :key="i" :class="{ active: i == anIndex }" @click="anIndex = i">{{ item }}</div>
			</div>
			<div class="swiper">
				<div class="img-wrap">
					<img src="~assets/bg_home_b2_pic1.jpg" alt="" />
					<div class="text">
						<h3>上海东方颐城</h3>
						<h4>
							<span>现代风格</span>
							<span>120㎡</span>
						</h4>
						<p>
							地下室负一层改动较大，增加了使用面积。一层北入户外扩增加厨房使用面积。南面增加晾晒区。二层做了整个大套房，很气派。
						</p>
						<div class="btn">
							案例详情
						</div>
					</div>
				</div>

				<div class="swiper-wrap">
					<swiper class="dswiper" :options="bannerSwiperOptions2">
						<swiper-slide v-for="(item, i) in 8" :key="i">
							<img src="~assets/bg_home_b2_pic1.jpg" alt="" />
						</swiper-slide>
					</swiper>
					<div class="swiper-button-wrap">
						<div class="prev2"></div>
						<div class="next2"></div>
					</div>
				</div>
				<div class="mask">
					<img src="~assets/bg_home_b2_pic1.jpg" alt="" />
				</div>
				<div class="mask2"></div>
			</div>
		</div>
		<div class="page3">
			<div class="left">
				<h2>
					<span>100+</span>
					位别墅大宅设计大咖
				</h2>
				<ul>
					<li>
						<div>
							<b>95</b>
							%
						</div>
						<p>设计效果还原</p>
					</li>
					<li>
						<div>
							<b>10</b>
							年
						</div>
						<p>以上从业经验</p>
					</li>
					<li>
						<div>
							<b>8</b>
							支
						</div>
						<p>设计效果还原</p>
					</li>
					<li>
						<div>
							<b>90</b>
							%
						</div>
						<p>荣获设计奖项</p>
					</li>
				</ul>
				<div class="left-text">
					<div class="text">
						<h4>于一</h4>
						<span>设计总监</span>
						<h5>从业年限：</h5>
						<b>15年</b>
						<h5>所获荣誉</h5>
						<p>
							国家注册室内设计师 （证号：ZLY20102013）
							<br />
							上海市注册高级设计师（证号：XH090129）
							<br />
							上海市装饰装修行业协会会员
							<br />
							第二届中国国际空间环境艺术设计大赛优秀奖
							<br />
						</p>
						<h5>代表作品</h5>
						<p>嘉怡水岸 浦江华侨城 华侨城 两河流域...</p>
						<div class="btn">TA的作品</div>
						<img src="~assets/bg_home_b3_left_text.png" alt="" />
					</div>
					<div class="img-wrap">
						<img src="~assets/bg_home_b3_pic17.jpg" alt="" />
						<div>
							<p>Design concept</p>
							<b>细节决定成败</b>
						</div>
					</div>
				</div>
			</div>
			<div class="right"></div>
			<div class="next">
				设计名人堂
				<i></i>
			</div>
		</div>
		<div class="page4">
			<div class="left">
				<img src="~assets/bg_home_b4_left.jpg" alt="" />
				<div class="text">
					<h2>
						<span>国家一级</span>施工资质<br />隐蔽工程终身免费保修
					</h2>
					<p>build worksite</p>
					<div>
						了解更多
						<i></i>
					</div>
					<ul>
						<li>
							<div>
								138
								<span>项</span>
							</div>
							<p>工地管理条例</p>
						</li>
						<li>
							<div>
								316
								<span>条</span>
							</div>
							<p>施工工艺标准</p>
						</li>
						<li>
							<div>
								14
								<span>项</span>
							</div>
							<p>工程技术专利</p>
						</li>
						<li>
							<div>
								259
								<span>条</span>
							</div>
							<p>验收标准</p>
						</li>
						<li>
							<div>
								600
								<span>个</span>
							</div>
							<p>改在建工地</p>
						</li>
						<li>
							<div>
								100
								<span>+</span>
							</div>
							<p>金牌项目经理</p>
						</li>
					</ul>
					<img src="~assets/icons/ic_home_b3_play.png" alt="">
				</div>
			</div>
			<div class="right">
				<div class="text">
					<img src="~assets/bg_home_b4_roll.png" alt="">
					<div>
						<h5>水电工艺施工标准</h5>
						<p>先弹线后再开槽，开槽时必须横平竖直；<br>
							墙地面开槽必须弹单线用切割机开槽；<br>
							所有线管、水管必须用管卡固定。
						</p>
					</div>
				</div>
				<div class="img-wrap">
					<img src="~assets/bg_home_b4_right.jpg" alt="">
					<div class="div1"></div>
					<div class="div2"></div>
					<div class="div3"></div>
					<div class="div4"></div>
					<div class="btn">预约参观工地</div>
				</div>
			</div>
		</div>
		<div class="page5">
			<div class="swiper">
				<swiper :options="bannerSwiperOptions3">
					<swiper-slide v-for="(item, i) in 3" :key="i">
						<img src="~assets/bg_home_b5_pic1.jpg" alt="" />
						<div class="text">
							<h3>
								<span>全案服务</span>
								 创造精彩生活
							</h3>
							<div>
								Whole case service
							</div>
							<h4>园林</h4>
							<h5>自然惬意  给心灵一份静谧</h5>
							<p>智能灌溉、灯光照明、智能安防、水景设计、植物种植设计</p>
							<div class="btn">
								服务详情
							</div>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination"></div>
				<div class="bgimg">
					<div>
						<p>01</p>
						<h5>软装</h5>
						<h6>Soft outfit</h6>
						<i class="next3"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="page6">
						<div class="text">
							<h3>
								<span>20+</span>
								 年专注别墅大宅 全案引领者
							</h3>
							<div>
								Brand introduction
							</div>
							<h4>我们 让空间更美好</h4>
							<h5>we Make the space better</h5>
							<p>
								波涛装饰是波涛装饰集团旗下专业为高端住宅、豪宅、明星名流居所提供建筑规划、室内设计装饰施工、家具定制、智能设备、软装配套以及景观园林的一站式全案整装定制服务机构。 20多年年钻研，只为定制更加完美的高端品质住宅，拥有20000多位高端住宅业主的信赖。
							</p>
							<div class="btn">
								走进波涛
							</div>
						</div>
		</div>
		<div class="page7">
				<h3>
					<span>波涛</span>与您分享最新资讯
				</h3>
				<div class="title">
					<span>News information</span>
					<div>
						全部新闻
						<i></i>
					</div>
				</div>
				<div class="list">
					<ul>
						<li>
							<div>
								<img src="~assets/bg_home_b6_1.jpg" alt="">
							</div>
							<i></i>
							<div class="text">
								<p>客户评价</p>
								<div>温暖家｜多面客厅，一种舒适</div>
							</div>
						</li>
						<li class="item">
							<div class="top">
									<div>
									<img src="~assets/bg_home_b6_2.jpg" alt="">
										<div>
												<p>August</p>
												<b>28-08</b>
										</div>
									</div>
									<h4>当低奢遇到原木，原来也这么不食人间烟火</h4>
									<p>近期活动</p>
							</div>

							<div class="items">
								<h4>二孩时代的三代同堂，学学这个0-60岁的理想家</h4>
								<p><span>装修攻略</span><span>24-08</span></p>
							</div>

							<div class="items">
								<h4>又被这个600m²现代独栋装到了—5倍扩容收纳&180°</h4>
								<p><span>近期活动</span><span>24-08</span></p>
							</div>
						</li>
						<li class="item">
							<div class="top">
									<div>
									<img src="~assets/bg_home_b6_2.jpg" alt="">
										<div>
												<p>August</p>
												<b>28-08</b>
										</div>
									</div>
									<h4>当低奢遇到原木，原来也这么不食人间烟火</h4>
									<p>近期活动</p>
							</div>

							<div class="items">
								<h4>二孩时代的三代同堂，学学这个0-60岁的理想家</h4>
								<p><span>装修攻略</span><span>24-08</span></p>
							</div>

							<div class="items">
								<h4>又被这个600m²现代独栋装到了—5倍扩容收纳&180°</h4>
								<p><span>近期活动</span><span>24-08</span></p>
							</div>
						</li>
					</ul>
				</div>
		</div>
	</div>
</template>
<script lang="ts">
import home from './home';
export default home;
</script>
<style scoped lang="scss">
.home {
	box-sizing: border-box;
	max-width: 1920px;
	margin: 0 auto;
	img {
		display: block;
	}
	.page1 {
		height: 970px;
		overflow: hidden;
		position: relative;
		.swiper-wrapper {
			.swiper-slide {
				img {
					width: 100%;
					height: 100%;
				}
				.text {
					position: absolute;
					left: 50%;
					top: 268px;
					transform: translateX(-50%);
					color: #ffffff;
					h3 {
						font-size: 34px;
						font-family: Gilroy;
						font-weight: 400;
						text-align: center;
						span {
							font-size: 41px;
							margin-right: 4px;
							font-weight: bold;
						}
					}
					div {
						font-size: 97px;
						font-family: Athene;
						font-weight: 400;
						color: #ffffff;
						line-height: 103px;
						text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.23);
						text-align: center;
						margin: 62px 0 100px 0;
						&.btn {
							width: 170px;
							height: 53px;
							background: #ed5400;
							font-size: 18px;
							font-family: AlibabaPuHuiTiR;
							font-weight: 400;
							color: #ffffff;
							line-height: 53px;
							text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
							margin: 0 auto;
							cursor: pointer;
							position: relative;
							&::after,
							&::before {
								content: '';
								position: absolute;
								border: 2px solid #ffffff;
								width: 8px;
								height: 8px;
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
			}
		}
		.swiper-button-wrap {
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			transform: translateY(-50%);
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 50px;
			z-index: 99;
			padding: 0 50px;
			.prev,
			.next {
				cursor: pointer;
				width: 17px;
				height: 34px;
				background: url('~assets/icons/ic_home_banner_left.png') center center;
				background-size: cover;
				outline: none;
				transition: transform 0.3s;
				&:hover {
					transform: scale(1.2);
				}
			}
			.next {
				background: url('~assets/icons/ic_home_banner_right.png') center center;
				background-size: cover;
			}
		}
		.form {
			position: absolute;
			z-index: 99;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 90px;
			background: rgba(18, 33, 51, 0.8);
			display: flex;
			align-items: center;
			justify-content: center;
			ul {
				display: flex;
				align-items: center;
				justify-content: center;
				li {
					width: 295px;
					height: 52px;
					margin-bottom: 10px;
					display: flex;
					align-items: center;
					position: relative;
					border-bottom: 1px solid rgba(255, 255, 255, 0.3);
					&:not(:first-child) {
						margin-left: 41px;
					}
					i {
						width: 14px;
						height: 14px;
						background: url('~assets/icons/ic_home_banner_user.png');
						background-size: 100% 100%;
					}
					b {
						position: absolute;
						right: 20px;
						top: 50%;
						transform: translateY(-50%);
						font-size: 14px;
						font-weight: 400;
						color: #ed5400;
					}
					input {
						height: 100%;
						background: none;
						border: none;
						color: #fff;
						font-size: 18px;
						padding-left: 19px;
						&::placeholder {
							color: #999999;
						}
					}
					&:nth-child(2) {
						i {
							background: url('~assets/icons/ic_home_banner_phone.png');
						}
					}
					&:nth-child(3) {
						i {
							background: url('~assets/icons/ic_home_banner_area.png');
						}
					}
					&.btn {
						width: 146px;
						cursor: pointer;
						height: 48px;
						justify-content: center;
						font-size: 18px;
						font-family: AlibabaPuHuiTiR;
						font-weight: 400;
						color: #ffffff;
						border: 2px solid #ed5400;
						position: relative;
						&::after,
						&::before {
							content: '';
							position: absolute;
							border: 2px solid rgba(237, 84, 0, 0.35);
							width: 11px;
							height: 11px;
						}
						&::after {
							left: 6px;
							top: 6px;
							border-right: none;
							border-bottom: none;
						}
						&::before {
							right: 6px;
							bottom: 6px;
							border-top: none;
							border-left: none;
						}
					}
				}
			}
		}
	}
	.page2 {
		padding: 100px 0;
		background: url('~assets/bg_home_b2.jpg');
		> h2 {
			height: 53px;
			font-size: 56px;
			font-family: Gilroy;
			font-weight: bold;
			line-height: 53px;
			color: #000000;
			text-align: center;
			span {
				color: #ed5400;
			}
		}
		> p {
			height: 26px;
			font-size: 30px;
			font-family: Athene;
			font-weight: 400;
			color: #000000;
			text-align: center;
			margin: 25px 0 0 0;
			text-transform: uppercase;
		}
		.tabs {
			margin: 51px auto 60px auto;
			display: flex;
			justify-content: center;
			> div {
				font-size: 18px;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #666;
				width: 122px;
				height: 39px;
				cursor: pointer;
				position: relative;
				text-align: center;
				line-height: 39px;
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
				}
				&::after {
					left: 5px;
					top: 5px;
					border-right: none;
					border-bottom: none;
				}
				&::before {
					right: 5px;
					bottom: 5px;
					border-top: none;
					border-left: none;
				}
				&:not(:last-child) {
					margin-right: 30px;
				}
				&.active,
				&:hover {
					border: 1px solid #ed5400;
					color: #000;
					&::after,
					&::before {
						border: 2px solid #ed5400;
						width: 5px;
						height: 5px;
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
		.swiper {
			width: 1770px;
			height: 910px;
			margin: 0 auto;
			position: relative;
			.img-wrap {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				z-index: 1;
				img {
					width: 100%;
					height: 100%;
				}
				.text {
					position: absolute;
					top: 206px;
					left: 100px;
					h3 {
						height: 32px;
						font-size: 34px;
						font-weight: 400;
						color: #ffffff;
					}
					h4 {
						height: 17px;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						margin-right: 16px;
						margin: 21px 0 51px 0;
					}
					p {
						width: 354px;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						line-height: 30px;
					}
					.btn {
						width: 170px;
						height: 53px;
						margin-top: 60px;
						background: #ed5400;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						line-height: 53px;
						text-align: center;
						position: relative;
						cursor: pointer;
						&::after,
						&::before {
							content: '';
							position: absolute;
							border: 2px solid #fff;
							width: 10px;
							height: 10px;
							transition: border 0.3s, width 0.3s, height 0.3s;
						}
						&::after {
							left: 5px;
							top: 5px;
							border-right: none;
							border-bottom: none;
						}
						&::before {
							right: 5px;
							bottom: 5px;
							border-top: none;
							border-left: none;
						}
					}
				}
			}
			.swiper-wrap {
				position: absolute;
				left: 0;
				bottom: 28px;
				width: 100%;
				z-index: 2;
				display: flex;
				justify-content: flex-start;
				padding-left: 100px;
				.dswiper {
					width: 920px;
					margin: 0;
					.swiper-wrapper {
						.swiper-slide {
							height: 125px;
							border: 1px solid transparent;
							&.swiper-slide-active {
								img {
									transform-origin: bottom;
									border: 1px solid #ffffff;
									transform:translateY(0px) scaleY(1.2)!important;
								}
							}
							img {
								transition: transform 0.3s;
								width: 100%;
								height: 103px;
								margin-top: 20px;
								cursor: pointer;
								transform: translateY(2px);
							}
						}
					}
				}
			}
			.swiper-button-wrap {
				position: absolute;
				top: 50px;
				left: 57px;
				width: 1004px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 50px;
				z-index: 99;
				pointer-events: none;
				.prev2,
				.next2 {
					cursor: pointer;
					width: 13px;
					height: 25px;
					background: url('~assets/icons/ic_home_banner_left.png') center center;
					background-size: cover;
					outline: none;
					transition: transform 0.3s;
					z-index: 2;
					pointer-events: auto;
					&:hover {
						transform: scale(1.2);
					}
				}
				.next2 {
					background: url('~assets/icons/ic_home_banner_right.png') center center;
					background-size: cover;
				}
			}
			.mask2 {
				position: absolute;
				width: 100%;
				z-index: 1;
				height: 135px;
				filter: blur(5px);
				left: 0;
				top: initial;
				bottom: 0;
				background-position: bottom;
				mask: url('~assets/bg_home_b2_mask_pic00.png');
				img {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
				}
			}
			.mask2 {
				position: absolute;
				width: 100%;
				z-index: 1;
				height: 135px;
				background: url('~assets/bg_home_b2_mask_pic0.png');
				left: 0;
				top: initial;
				bottom: 0;
				opacity: 0.8;
			}
		}
	}
	.page3 {
		display: flex;
		background: #132234;
		height: 1142px;
		position: relative;
		> .left {
			background: url('~assets/bg_home_b3_left.jpg') no-repeat;
			background-size: cover;
			width: 1188px;
			padding: 106px 71px 0 80px;
			> h2 {
				height: 53px;
				font-size: 56px;
				font-weight: bold;
				color: #fff;
				line-height: 53px;
				span {
					color: #ed5400;
					font-family: Gilroy-Bold;
				}
			}
			> ul {
				display: flex;
				margin: 45px 0 110px 0;
				li {
					color: #fff;
					margin-right: 93px;
					div {
						font-size: 26px;
						font-weight: bold;
						b {
							font-family: Gilroy-Bold;
							font-size: 40px;
							margin-right: 5px;
						}
					}
					p {
						font-size: 20px;
					}
				}
			}
			.left-text {
				display: flex;
				justify-content: space-between;
				&::after {
					position: absolute;
					content: '';
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: 1;
					background: rgba(0, 0, 0, 0.15);
					pointer-events: none;
				}
				.text {
					flex: 1;
					padding-top: 18px;
					h4 {
						height: 38px;
						font-size: 46px;
						font-weight: 400;
						color: #ffffff;
						line-height: 38px;
					}
					span {
						font-size: 22px;
						font-weight: normal;
						display: block;
						color: #ec5400;
						margin: 18px 0 41px 0;
					}
					h5 {
						height: 17px;
						font-size: 18px;
						font-weight: 400;
						color: #999999;
					}
					b {
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						display: block;
						margin: 24px 0 38px 0;
					}
					p {
						margin: 24px 0 37px 0;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						line-height: 30px;
						width: 380px;
					}
					.btn {
						width: 170px;
						height: 53px;
						background: #ed5400;
						text-align: center;
						line-height: 53px;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						line-height: 53px;
						text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
						position: relative;
						cursor: pointer;
						&::after,
						&::before {
							content: '';
							position: absolute;
							border: 2px solid #fff;
							width: 11px;
							height: 11px;
						}
						&::after {
							left: 6px;
							top: 6px;
							border-right: none;
							border-bottom: none;
						}
						&::before {
							right: 6px;
							bottom: 6px;
							border-top: none;
							border-left: none;
						}
					}
					img {
						width: 878px;
						height: 220px;
						position: absolute;
						left: 80px;
						top: 319px;
						opacity: 0.4;
					}
				}
				.img-wrap {
					width: 540px;
					height: 658px;
					position: relative;
					img {
						width: 100%;
						height: 100%;
					}
					div {
						position: absolute;
						bottom: 67px;
						left: 52px;
						z-index: 2;
						p {
							font-size: 20px;
							font-family: Gilroy;
							font-weight: 400;
							color: #eb5518;
							margin-bottom: 12px;
						}
						b {
							display: block;
							height: 20px;
							font-size: 20px;
							font-weight: 400;
							color: #ffffff;
						}
					}
				}
			}
		}
		.right {
			flex: 1;
			height: 1142px;
		}
		.next {
			height: 18px;
			font-size: 18px;
			font-weight: 400;
			color: #ffffff;
			right: 80px;
			bottom: 185px;
			position: absolute;
			display: flex;
			align-items: center;
			z-index: 1;
			cursor: pointer;
			i {
				width: 8px;
				height: 14px;
				background: url('~assets/icons/ic_home_b2_enter.png') no-repeat;
				background-size: 100% 100%;
				margin-left: 19px;
			}
		}
	}
	.page4 {
		height: 970px;
		display: flex;
		.left {
			width: 960px;
			height: 970px;
			position: relative;
			> img {
				width: 100%;
				height: 100%;
			}
			&::after {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				content: '';
				background: url('~assets/bg_home_b4_mask.png') no-repeat;
				background-size: cover;
			}
			.text{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 2;
				padding: 100px 0 0 80px;
				img{
					width: 90px;
					position: absolute;
					top: 50%;
					left: 50%;
					z-index: 3;
					cursor: pointer;
					transform: translate(-50%,-50%);
					transition: .3s;
					&:hover{
						transform: translate(-50%,-50%) scale(1.1) ;
					}
				}
				>h2{
					height: 118px;
					font-size: 56px;
					font-weight: 400;
					color: #fff;
					span{
						color: #ED5400;
					}
				}
				>p{
					height: 26px;
					font-size: 30px;
					font-family: Athene;
					font-weight: 400;
					color: #FFFFFF;
					margin: 42px 0 70px 0;
					text-transform: uppercase;
				}
				>div{
					height: 18px;
					font-size: 18px;
					font-weight: 400;
					color: #ffffff;
					right: 80px;
					display: flex;
					align-items: center;
					z-index: 1;
					cursor: pointer;
					i {
						width: 8px;
						height: 14px;
						background: url('~assets/icons/ic_home_b2_enter.png') no-repeat;
						background-size: 100% 100%;
						margin-left: 19px;
					}
				}
				ul{
					display: flex;
					flex-wrap: wrap;
					color: #fff;
					margin-top: 315px;
					li{
						margin-bottom: 43px;
						div{
							font-size: 40px;
							font-weight: bold;
							line-height: 55px;
							font-family: Gilroy-Bold;
							span{
								font-size: 18px;
							}
						}
						p{
							font-size: 18px;
							font-weight: 400;
							color: #FEFEFE;
						}
						&:nth-child(1),
						&:nth-child(4){
							width: 340px;
						}
						&:nth-child(2),
						&:nth-child(5){
							width: 337px;
						}

					}
				}
			}

		}
		.right {
			width: 960px;
			height: 970px;
			background:rgba(250, 252, 255, 0.11);
			position: relative;
			.text{
				position: absolute;
				left: 80px;
				top: 96px;
				z-index: 3;
				display: flex;
				align-items: center;
				img{
					width: 215px;
					height:215px;
					border-right: 100%;
					margin-right: 35px;
				}
				h5{
					height: 23px;
					font-size: 24px;
					font-weight: 400;
					color: #000000;
					margin-bottom: 22px;
				}
				p{
					width: 337px;
					height: 82px;
					font-size: 18px;
					font-weight: 400;
					color: #888888;
					line-height: 32px;
				}
			}
			.img-wrap{
				position: relative;
				div{
					position: absolute;
					width: 65px;
					height: 65px;
					cursor: pointer;
				}
				.div1{
					top: 369px;
					left: 431px;
				}
				.div2{
					top: 330px;
					left: 775px;
				}
				.div3{
					top: 549px;
					left: 493px;
				}
				.div4{
					top: 602px;
					left: 764px;
				}
				img{
					width: 100%;
				}
				.btn{
					width: 170px;
					height: 53px;
					background: #ED5400;
					font-size: 18px;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 53px;
					text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
					text-align: center;
					right: 80px;
					bottom: 88px;
				}
			}
		}
	}
	.page5{
		height: 970px;
		position: relative;
		.swiper{
			position: relative;
		.swiper-wrapper {
			.swiper-slide {
				img {
					height: 100%;
					width: 100%;
				}
				.text{
					position: absolute;
					padding: 98px 0 0 80px;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					h3{
						height: 54px;
						font-size: 56px;
						font-weight: 400;
						color: #fff;
						span{
							color: #EC5400;
						}
					}
					div{
						font-size: 30px;
						font-family: Athene;
						font-weight: 400;
						color: #FFFFFF;
						text-transform: uppercase;
						margin: 24px 0 209px 0;
					}
					h4{
						color: #FFFFFF;
						font-size: 36px;
					}
					h5{
						color: #FFFFFF;
						font-size: 28px;
					}
					p{
						height: 18px;
						font-size: 18px;
						font-weight: 400;
						color: #FFFFFF;
						width: 605px;
						margin: 51px 0 104px 0;
					}
					.btn{
						width: 170px;
						height: 53px;
						background: #ED5400;
						font-size: 18px;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 53px;
						text-align: center;
						text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
					}
				}
			}

		}
		.swiper-pagination{
				position: absolute;
				z-index: 99;
				left: 80px;
				bottom: 91px;
				display: flex;
				/deep/.swiper-pagination-bullet{
					width: 50px;
					height: 50px;
					outline: none;
					background: transparent;
					border: 2px solid rgba(255,255,255,.8);
					color: rgba(255,255,255,.5);
					font-size: 16px;
					line-height: 50px;
					cursor: pointer;
					&.swiper-pagination-bullet-active{
						border: none;
						background: url('~assets/icons/bg_home_b5_half.png') no-repeat;
						background-size: 100% 100%;
					}
				}
			}
			.bgimg{
				position: absolute;
				right: 0;
				top: 0;
				z-index: 3;
				width: 431px;
				height: 100%;
				background: url('~assets/bg_home_b5_mask2.png') center;
				background-size: cover;
				color: #fff;
				padding-left: 225px;
				padding-top: 295px;
				p{
					font-size: 32px;
					font-family: Gilroy-Bold;
					font-weight: bold;
					color: #FFFFFF;
					line-height: 48px;
				}
				h5{
					height: 33px;
					font-size: 36px;
					font-weight: 400;
					color: #FFFFFF;
					margin: 128px 0 12px 0;
				}
				h6{
					font-size: 30px;
					font-family: Athene;
					font-weight: 400;
					color: #FFFFFF;
					text-transform: uppercase;
					overflow: hidden;
					white-space: nowrap;
					margin-bottom: 156px;
				}
				i{
					display: block;
					cursor: pointer;
					width: 45px;
					height: 45px;
					border: 2px solid rgba(255, 255, 255, 1.12);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					outline: none;
					transition: transform .3s;
					&:hover{
						transform: scale(1.1);
					}
					&::after{
						content: '';
						width: 7px;
						height: 11px;
						background: url('~assets/icons/ic_home_banner_right.png') center;
						background-size: 100% 100%;
					}
				}
			}
		}
	}
	.page6{
		height: 1110px;
		background: url('~assets/bg_home_b6.png') no-repeat right;
		position: relative;
		.text{
					position: absolute;
					padding: 101px 0 0 80px;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					h3{
						height: 54px;
						font-size: 56px;
						font-weight: 400;
						color: #000;
						span{
							color: #EC5400;
						}
					}
					div{
						font-size: 30px;
						font-family: Athene;
						font-weight: 400;
						color: #000;
						text-transform: uppercase;
						margin: 24px 0 110px 0;
					}
					h4{
						color: #000;
						font-size: 34px;
					}
					h5{
						color: #000;
						font-size: 38px;
						font-weight: 400;
						text-transform: uppercase;
					}
					p{
						font-size: 18px;
						font-weight: 400;
						color: #666;
						width: 605px;
						margin: 51px 0 104px 0;
						line-height: 30px;
					}
					.btn{
						width: 170px;
						height: 53px;
						background: #ED5400;
						font-size: 18px;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 53px;
						text-align: center;
						text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
					}
				}
	}
	.page7{
		padding: 100px 0;
		width: 1770px;
		margin: 0 auto;
		h3{
			height: 54px;
			font-size: 56px;
			font-weight: 400;
			color: #000;
			margin-bottom: 29px;
			span{
				color: #EC5400;
			}
		}
		.title{
			display: flex;
			align-items: center;
			justify-content: space-between;
			span{
				font-size: 30px;
				font-family: Athene;
				font-weight: 400;
				color: #000000;
			}
			div{
				display: flex;
				align-items: center;
				font-size: 18px;
				font-weight: bold;
				color: #000000;
				cursor: pointer;
				i {
					width: 8px;
					height: 14px;
					background: url('~assets/icons/ic_home_b2_enter.png') no-repeat;
					background-size: 100% 100%;
					margin-left: 19px;
				}
			}
		}
		.list{
			margin-top: 88px;
			>ul{
				display: flex;
				justify-content: space-between;
				li{
					width: 553px;
					position: relative;
					&:nth-child(1){
						div{
							img{
								width: 100%;
								height: 450px;
							}
							&.text{
								background: #122133;
								height: 133px;
								padding: 36px 10px 38px 39px;
								p{
									font-size: 18px;
									font-weight: 400;
									color: #FFFFFF;
								}
								div{
									font-size: 26px;
									font-weight: 400;
									color: #FFFFFF;
								}
							}
						}
						i{
							cursor: pointer;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%,-50%);
							width: 90px;
							height: 90px;
							background: url(~assets/icons/ic_home_b3_play.png) no-repeat;
							background-size: 100% 100%;
							transition: .3s;
							&:hover{
								transform: translate(-50%,-50%) scale(1.1) ;
							}
						}
					}
					&.item{
						width: 553px;
						cursor: pointer;
						.top{
							height: 325px;
							border-bottom: 1px solid #ED5400;
							>div{
								display: flex;
								width: 100%;
								img{
									width: 382px;
									height: 170px;
								}
								div{
									width: 100%;
									font-size: 16px;
									width: 170px;
									height: 170px;
									background: #122133;
									display: flex;
									flex-wrap: wrap;
									font-family: CenturyGothic;
									font-weight: 400;
									color: #FFFFFF;
									text-align: center;
									align-content: center;
									p{
										color: #FFFFFF;
										width: 100%;
										justify-content: center;
										font-size: 24px;
									}
									b{
										width: 100%;
										font-size: 16px;
										margin-top: 4px;
									}
								}
							}
						}

						h4{
							font-size: 20px;
							font-weight: 700;
							color: #000000;
							margin-bottom: 12px;
							padding-top: 50px;
						}
						p{
							font-size: 18px;
							font-weight: 400;
							color: #888888;
							display: flex;
							justify-content: space-between;
						}
					}
				}
			}
		}
	}
}
</style>
