<template>
	<div class="home">
		<div class="page1">
			<swiper :options="bannerSwiperOptions">
				<swiper-slide v-for="(item, i) in 3" :key="i">
					<img src="~assets/bg_home_banner1.jpg" alt="" />
					<div class="text">
						<div class="text-content">
							<h3>
								<span>20+</span>
								<span>年专注别墅大宅 全案引领者{{i}}</span>
							</h3>
							<div>
								<p>FOCUS ON VILLA</p>
								<p>MANSIONS</p>
							</div>
						</div>
						<div>
							<Button text="走进波涛" @click.native="onRoute('brand')"></Button>
						</div>
					</div>
				</swiper-slide>
			</swiper>
			<div class="swiper-button-wrap">
				<div class="prev prev1"></div>
				<div class="next next1"></div>
			</div>
			<div class="form wow">
				<ul>
					<li>
						<i></i>
						<input type="text" v-model="form.userName" placeholder="输入您的姓名" />
						<b>*</b>
					</li>
					<li>
						<i></i>
						<input type="text" maxlength="11" v-model="form.phone" placeholder="输入您的联系电话" />
						<b>*</b>
					</li>
					<li>
						<i></i>
						<input type="text" v-model="form.area" placeholder="输入您的装修面积" />
						<b>*</b>
					</li>
					<li class="btn" @click="onSubmit()">提交需求</li>
				</ul>
			</div>
		</div>
		<div class="page2">
			<h2 class="wow">
				<ICountUp :endVal="1000" :options="options1"></ICountUp>
				经典案例 筑梦幸福家
			</h2>
			<p class="wow">Select cases</p>
			<div class="tabs wow">
				<div v-for="(item, i) in anList" :key="i" :class="{ active: i == anIndex }" @click="anIndex = i">{{ item }}</div>
			</div>
			<div class="swiper">
				<div class="img-wrap">
					<div class="imgs-wrap">
						<swiper :options="swiperOptions" class="swiper-no-swiping" ref="mSwiper">
							<swiper-slide v-for="(item, i) in page2ImgSrcList" :key="i">
								<img :src="item" alt="" />
							</swiper-slide>
						</swiper>
					</div>

				</div>
					<transition name="fade">
						<div class="text wow" v-if="page2Ani">
							<h3>上海东方颐城</h3>
							<h4>
								<span>现代风格</span>
								<span>120㎡</span>
							</h4>
							<p>
								地下室负一层改动较大，增加了使用面积。一层北入户外扩增加厨房使用面积。南面增加晾晒区。二层做了整个大套房，很气派。
							</p>
							<div class="btn-box">
								<Button text="案例详情" @click.native="$router.push({ name: 'case-detail' })"></Button>
							</div>
						</div>
					</transition>
				<div class="swiper-wrap wow">
					<swiper class="dswiper" :options="bannerSwiperOptions2">
						<swiper-slide v-for="(item, i) in page2ImgSrcList" :key="i">
							<img :src="item" alt="" />
						</swiper-slide>
					</swiper>
					<div class="swiper-button-wrap">
						<div class="prev2"></div>
						<div class="next2"></div>
					</div>
				</div>
				<div class="mask">
					<img :src="page2ImgSrcList[page2Index]" alt="" />
				</div>
				<div class="mask2"></div>
			</div>

			<div class="next" @click="onRoute('case-list')">
				全部案例
				<i></i>
			</div>
		</div>
		<div class="page3">
			<div class="left">
				<h2>
					<ICountUp :endVal="100" :options="options1"></ICountUp>
					位别墅大宅设计大咖
				</h2>
				<ul>
					<li>
						<div>
							<b><ICountUp :endVal="95" :options="options2"></ICountUp></b>
							%
						</div>
						<p>设计效果还原</p>
					</li>
					<li>
						<div>
							<b><ICountUp :endVal="10" :options="options2"></ICountUp></b>
							年
						</div>
						<p>以上从业经验</p>
					</li>
					<li>
						<div>
							<b><ICountUp :endVal="8" :options="options2"></ICountUp></b>
							支
						</div>
						<p>设计效果还原</p>
					</li>
					<li>
						<div>
							<b><ICountUp :endVal="90" :options="options2"></ICountUp></b>
							%
						</div>
						<p>荣获设计奖项</p>
					</li>
				</ul>
				<img class="bgtext" src="~assets/bg_home_b3_left_text.png" alt="" />

				<div class="left-text wow">
					<div class="text">
						<transition-group name="slide-fade" mode="in-out">
							<div class="box" v-if="showProfile" key="a1">
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
								<div class="btn-box">
									<Button @click.native="$router.push({ name: 'design-detail' })" text="TA的作品"></Button>
								</div>
							</div>
							<div class="box" v-if="!showProfile" key="b1">
								<h4>于莎莎</h4>
								<span>设计总监</span>
								<h5>从业年限：</h5>
								<b>5年</b>
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
								<div class="btn-box">
									<Button @click.native="$router.push({ name: 'design-detail' })" text="TA的作品"></Button>
								</div>
							</div>
						</transition-group>
					</div>
					<div class="img-wrap">
						<transition-group name="toggle-image">
							<img :src="imgSrc" alt="" v-if="showProfile" key="a" />
							<img :src="imgSrc" alt="" v-if="!showProfile" key="b" />
						</transition-group>
						<div>
							<p>DESIGN CONCEPT</p>
							<b>细节决定成败</b>
						</div>
					</div>
				</div>
			</div>
			<div class="right wow">
				<ul>
					<li v-for="(item, i) in currentPortraitList" :key="i" @click="onClick(item, i)" :ref="`item${i}`"
					>
						<div class="flip-box" :class="{ 'do-flip': applyFlipType==1, 'do-flip-reverse': applyFlipType==2 }">
							<img :src="nextPortraitList[i] || require('assets/portrait/white.png')" alt="" />
							<img :src="item" alt="" />
							<img :src="nextPortraitList[i] || require('assets/portrait/white.png')" alt="" />
						</div>
					</li>
				</ul>

				<div class="img-box" :style="{ top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px` }" v-if="isShowLightImg">
					<img :src="imgSrc" alt="" />
				</div>
				<div class="img-box2" @click="onClick(item.src, i)" v-for="(item, i) in listwidth" :key='i' :style="{ top: `${item.top}px`, left: `${item.left}px`, width: `${item.width}px`, height: `${item.height}px` }">
				</div>
			</div>
			<div class="next" @click="onRoute('design-list')">
				设计名人堂
				<i></i>
			</div>
			<div class="control">
				<i @click="onPortraitListPrev"></i>
				<i @click="onPortraitListNext"></i>
			</div>
		</div>
		<div class="page4 wow">
			<div class="left">
				<img src="~assets/bg_home_b4_left.jpg" alt="" />
				<div class="text">
					<h2>
						<span>国家一级</span>
						施工资质
						<br />
						隐蔽工程终身免费保修
					</h2>
					<p>build worksite</p>
					<div @click="onRoute('craft-manager')">
						了解更多
						<i></i>
					</div>
					<ul>
						<li>
							<div>
								<b>
									<ICountUp :endVal="138" :options="options2"></ICountUp>
								</b>
								<span>项</span>
							</div>
							<p>工地管理条例</p>
						</li>
						<li>
							<div>
								<b>
									<ICountUp :endVal="316" :options="options2"></ICountUp>
								</b>
								<span>条</span>
							</div>
							<p>施工工艺标准</p>
						</li>
						<li>
							<div>
								<b>
									<ICountUp :endVal="14" :options="options2"></ICountUp>
								</b>
								<span>项</span>
							</div>
							<p>工程技术专利</p>
						</li>
						<li>
							<div>
								<b>
									<ICountUp :endVal="259" :options="options2"></ICountUp>
								</b>
								<span>条</span>
							</div>
							<p>验收标准</p>
						</li>
						<li>
							<div>
								<b>
									<ICountUp :endVal="600" :options="options2"></ICountUp>
								</b>
								<span>个</span>
							</div>
							<p>改在建工地</p>
						</li>
						<li>
							<div>
								<b>
									<ICountUp :endVal="100" :options="options2"></ICountUp>
								</b>
								<span>+</span>
							</div>
							<p>金牌项目经理</p>
						</li>
					</ul>
					<img @click="videoPop.isPop = true" src="~assets/icons/ic_home_b3_play.png" alt="" />
				</div>
			</div>
			<div class="right">
				<div class="text">
					<h2>
						<transition-group name="toggle-image">
							<img src="~assets/bg_d3_part6_roll.png" alt="" v-if="textActive" key="a" />
							<img src="~assets/bg_home_b4_roll.png" alt="" v-if="!textActive" key="b" />
						</transition-group>
					</h2>
					<div :class="{ active: textActive2 }">
						<h5>水电工艺施工标准</h5>
						<p>
							先弹线后再开槽，开槽时必须横平竖直；
							<br />
							墙地面开槽必须弹单线用切割机开槽；
							<br />
							所有线管、水管必须用管卡固定。
						</p>
					</div>
				</div>
				<div class="img-wrap">
					<img src="~assets/bg_home_b4_right.jpg" alt="" />
					<div class="div1" @click="textActiveFun(2)">
						<i></i>
					</div>
					<div class="div2" @click="textActiveFun(3)">
						<i></i>
					</div>
					<div class="div3" @click="textActiveFun(1)">
						<i></i>
					</div>
					<div class="div4" @click="textActiveFun(0)">
						<i></i>
					</div>

					<ul class="pic-box">
						<li style="font-size:10px;" :class="{ active: picIndex == i }" v-for="(item, i) in picList" :key="i"><img :src="item" alt="" /></li>
					</ul>
					<div class="btn-wrap">
						<Button text="预约参观工地" @click.native="$store.state.dialogDesign.visit = true"></Button>
					</div>
				</div>
			</div>
		</div>
		<div class="page5 wow">
			<div class="swiper">
				<swiper :options="bannerSwiperOptions3">
					<swiper-slide v-for="(item, i) in page5List" class="page5Slide" :key="i">
						<div class="img-box">
							<img v-for="(v, i) in item.imgSrc" :key="i" :src="v" alt="" />
						</div>
						<div class="text">
							<h3>
								<span>全案服务</span>
								创造精彩生活
							</h3>
							<div>
								Whole case service
							</div>
							<h4>园林</h4>
							<h5>自然惬意 给心灵一份静谧</h5>
							<p>智能灌溉、灯光照明、智能安防、水景设计、植物种植设计</p>
							<div class="btn">
								<Button text="服务详情" @click.native="onRoute('cherry-pick')"></Button>
							</div>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination3"></div>
				<div class="bgimg">
					<div>
						<p class="banner-tag">01</p>
						<h5>软装</h5>
						<h6>Soft outfit</h6>
						<i class="next3"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="page6 wow">
			<div class="canvas-wrapper">
				<canvas></canvas>
			</div>
			<div class="text">
				<h3>
					<ICountUp :endVal="20" :options="options1"></ICountUp>
					年专注别墅大宅 全案引领者
				</h3>
				<div>
					Brand introduction
				</div>
				<h4>我们 让空间更美好</h4>
				<h5>we Make the space better</h5>
				<p>
					波涛装饰是波涛装饰集团旗下专业为高端住宅、豪宅、明星名流居所提供建筑规划、室内设计装饰施工、家具定制、智能设备、软装配套以及景观园林的一站式全案整装定制服务机构。
					20多年年钻研，只为定制更加完美的高端品质住宅，拥有20000多位高端住宅业主的信赖。
				</p>
				<div class="btn">
					<Button text="走进波涛" @click.native="onRoute('brand')"></Button>
				</div>
			</div>
			<div class="right wow">
				<div>
					<h3>
						<ICountUp :endVal="300" :options="options2"></ICountUp>
						<b>+</b>
					</h3>
					<p>多家分公司全国开设</p>
				</div>
				<div>
					<h3>
						<ICountUp :endVal="15000" :options="options2"></ICountUp>
						<b>+</b>
					</h3>
					<p>大宅业主的选择</p>
				</div>
				<div>
					<h3>
						<ICountUp :endVal="2000" :options="options2"></ICountUp>
						<b>㎡</b>
					</h3>
					<p>家居建材广场</p>
				</div>
				<div>
					<h3>
						<ICountUp :endVal="300" :options="options2"></ICountUp>
						<b>个</b>
					</h3>
					<p>国内外大牌供应商</p>
				</div>
				<div>
					<h3>
						<ICountUp :endVal="100" :options="options2"></ICountUp>
						<b>亿</b>
					</h3>
					<p>产值 100年企业追求</p>
				</div>
			</div>
		</div>
		<div class="page7">
			<h3 class="wow">
				<span>波涛</span>
				与您分享最新资讯
			</h3>
			<div class="title wow">
				<span>NEWS INFORMATION</span>
				<div @click="$router.push({ name: 'owner-voice' })">
					全部新闻
					<i></i>
				</div>
			</div>
			<div class="list">
				<ul>
					<li class="wow">
						<div>
							<img src="~assets/bg_home_b6_1.jpg" alt="" />
						</div>
						<i @click="videoPop.isPop = true"></i>
						<div class="text">
							<p>客户评价</p>
							<div>温暖家｜多面客厅，一种舒适</div>
						</div>
					</li>
					<li class="item wow">
						<div class="top" @click="$router.push({ name: 'strategy-detail' })">
							<div>
								<img src="~assets/bg_home_b6_2.jpg" alt="" />
								<div>
									<p>August</p>
									<b>28-08</b>
								</div>
							</div>
							<h4>当低奢遇到原木，原来也这么不食人间烟火</h4>
							<p>近期活动</p>
						</div>

						<div class="items" @click="$router.push({ name: 'strategy-detail' })">
							<h4>二孩时代的三代同堂，学学这个0-60岁的理想家</h4>
							<p>
								<span>装修攻略</span>
								<span>24-08</span>
							</p>
						</div>

						<div class="items" @click="$router.push({ name: 'strategy-detail' })">
							<h4>又被这个600m²现代独栋装到了—5倍扩容收纳&180°</h4>
							<p>
								<span>近期活动</span>
								<span>24-08</span>
							</p>
						</div>
					</li>
					<li class="item wow">
						<div class="top" @click="$router.push({ name: 'strategy-detail' })">
							<div>
								<img src="~assets/bg_home_b6_2.jpg" alt="" />
								<div>
									<p>August</p>
									<b>28-08</b>
								</div>
							</div>
							<h4>当低奢遇到原木，原来也这么不食人间烟火</h4>
							<p>近期活动</p>
						</div>

						<div class="items" @click="$router.push({ name: 'strategy-detail' })">
							<h4>二孩时代的三代同堂，学学这个0-60岁的理想家</h4>
							<p>
								<span>装修攻略</span>
								<span>24-08</span>
							</p>
						</div>

						<div class="items" @click="$router.push({ name: 'strategy-detail' })">
							<h4>又被这个600m²现代独栋装到了—5倍扩容收纳180°</h4>
							<p>
								<span>近期活动</span>
								<span>24-08</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<VideoPopup :videoPop="videoPop"></VideoPopup>
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
		-webkit-user-drag: none;
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
			padding: 0 80px;
			.prev,
			.next {
				cursor: pointer;
				width: 17px;
				height: 34px;
				background: url('~assets/icons/ic_home_banner_left.png') center center;
				background-size: 17px 34px;
				outline: none;
				transition: transform 0.3s;
			}
			.prev{
				&:hover{
					background: url('~assets/icons/ic_f4_left2.png') center center;
					background-size: 17px 34px;
					transform: scale(1.2);
				}
			}
			.next {
				background: url('~assets/icons/ic_home_banner_right.png') center center;
				background-size: 17px 34px;
				&:hover {
					background: url('~assets/icons/ic_f4_right2.png') center center;
					background-size: 17px 34px;
					transform: scale(1.2);
				}
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
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
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
						font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
						font-size: 18px;
						padding-left: 19px;
						&::placeholder {
							font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
							color: #999999;
						}
					}
					&:nth-child(2) {
						i {
							background: url('~assets/icons/ic_home_banner_phone.png');
							background-size: 100% 100%;
						}
					}
					&:nth-child(3) {
						i {
							background: url('~assets/icons/ic_home_banner_area.png');
							background-size: 100% 100%;
						}
					}
					&.btn {
						width: 146px;
						cursor: pointer;
						height: 48px;
						justify-content: center;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						border: 2px solid #ed5400;
						position: relative;
						transition: transform 0.5s ease 0s;
						&:hover {
							transform: translateY(-3px);
						}
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
		position: relative;
		background: url('~assets/bg_home_b2.jpg');
		> h2 {
			height: 53px;
			font-size: 56px;
			font-weight: bold;
			line-height: 53px;
			color: #000000;
			text-align: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			span {
				color: #ed5400;
				width: 180px;
				display: inline-block;
				font-family: Gilroy-Bold;
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
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.tabs {
			margin: 51px auto 60px auto;
			display: flex;
			justify-content: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			> div {
				font-size: 18px;
				font-weight: 400;
				color: #666;
				min-width: 122px;
				padding: 0 20px;
				height: 39px;
				cursor: pointer;
				position: relative;
				text-align: center;
				line-height: 39px;
				transition: border 0.5s, color 0.5s;
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
			overflow: hidden;
			.img-wrap {
				position: absolute;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				z-index: 1;
				box-sizing: border-box;
				.imgs-wrap {
					width: 100%;
					height: 100%;
					position: relative;
					background: #fff;
					box-sizing: border-box;
					.imgs {
						width: 100%;
						height: 100%;
						display: block;
					}
				}

				img {
					width: 100%;
					height: 100%;
					&.active {
						opacity: 1;
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
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
				.dswiper {
					width: 920px;
					margin: 0;
					.swiper-wrapper {
						.swiper-slide {
							box-sizing: border-box;
							height: 125px;
							border: 1px solid transparent;
							&.swiper-slide-active {
								img {
									transform-origin: bottom;
									border: 1px solid #ffffff;
									transform: translateY(0px) scaleY(1.2) !important;
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
					background-size: 13px 25px;
					outline: none;
					transition: transform 0.3s;
					z-index: 2;
					pointer-events: auto;
					&:hover {
						background: url('~assets/icons/ic_f4_left2.png') center center;
						background-size: 13px 25px;
						transform: scale(1.2);
					}
				}
				.next2 {
					background: url('~assets/icons/ic_home_banner_right.png') center center;
					background-size: 13px 25px;
					&:hover {
						background: url('~assets/icons/ic_f4_right2.png') center center;
						background-size: 13px 25px;
						transform: scale(1.2);
					}
				}
			}
			.mask {
				position: absolute;
				width: 100%;
				z-index: 1;
				height: 135px;
				filter: blur(5px);
				left: 0;
				top: initial;
				bottom: 0;
				mask: url('~assets/bg_home_b2_mask_pic00.png');
				mask-repeat: no-repeat;
				mask-size: 100% 100%;
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
				background-size: 100% auto;
				left: 0;
				top: initial;
				bottom: 0;
				opacity: 0.8;
			}
		}
	.text {
					position: absolute;
					top: 206px;
					left: 100px;
					transition: opacity 0.83s;
					z-index: 50;
					@include fade(0.25);
					h3 {
						height: 32px;
						font-size: 34px;
						font-weight: 400;
						color: #ffffff;
						opacity: 0;
						animation: slide-down-in 1s forwards, fade-in 1s forwards;
					}
					h4 {
						height: 17px;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						margin-right: 16px;
						opacity: 0;
						margin: 21px 0 51px 0;
						animation: slide-down-in 1s 0.2s forwards, fade-in 1s 0.2s forwards;
					}
					p {
						width: 354px;
						font-size: 18px;
						font-weight: 400;
						opacity: 0;
						color: #ffffff;
						line-height: 30px;
						@include line-clamp(3);
						max-height: 90px;
						animation: slide-down-in 1s 0.4s forwards, fade-in 1s 0.4s forwards;
					}
					.btn-box {
						width: 170px;
						opacity: 0;
						height: 53px;
						margin-top: 60px;
						animation: slide-down-in 1s 0.6s forwards, fade-in 1s 0.6s forwards;
						/deep/.btn {
							&::after,
							&::before {
								width: 10px;
								height: 10px;
							}
							&::after {
								left: 5px;
								top: 5px;
							}
							&::before {
								right: 5px;
								bottom: 5px;
							}
						}
					}
				}
		.next {
			height: 18px;
			font-size: 18px;
			font-weight: 400;
			color: #ffffff;
			right: 180px;
			bottom: 150px;
			position: absolute;
			display: flex;
			align-items: center;
			z-index: 2;
			cursor: pointer;
			transition: color .3s;
			&:hover {
				color: #ed5400;
				i {
					transform: translateX(4px);
				}
			}
			i {
				width: 8px;
				height: 14px;
				transition: transform 0.3s;
				background: url('~assets/icons/ic_home_b2_enter.png') no-repeat;
				background-size: 100% 100%;
				margin-left: 19px;
			}
		}
	}
	.page3 {
		display: flex;
		background: #132234;
		height: 1142px;
		position: relative;
		overflow: hidden;
		> .left {
			background: url('~assets/bg_home_b3_left.jpg') no-repeat;
			background-size: cover;
			width: 1188px;
			padding: 106px 71px 0 80px;
			position: relative;
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
			> h2 {
				height: 53px;
				font-size: 56px;
				font-weight: bold;
				color: #fff;
				line-height: 53px;
				span {
					color: #ed5400;
					font-family: Gilroy-Bold;
					display: inline-block;
					width: 124px;
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
							display: inline-block;
						}
					}
					p {
						font-size: 20px;
					}
					&:nth-child(1) {
						div {
							b {
								width: 48px;
							}
						}
					}
					&:nth-child(2) {
						div {
							b {
								width: 45px;
							}
						}
					}
					&:nth-child(3) {
						div {
							b {
								width: 27px;
							}
						}
					}
					&:nth-child(4) {
						div {
							b {
								width: 50px;
							}
						}
					}
				}
			}
			.left-text {
				display: flex;
				justify-content: space-between;
				opacity: 0;
				animation: slide-down-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
				.text {
					flex: 1;
					padding-top: 18px;
					position: relative;
					height: 700px;
					.box {
						position: absolute;
						left: 0;
						top: 0;
					}
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
						@include line-clamp(4);
					}
					.btn-box {
						width: 170px;
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
				.slide-fade-enter-active {
					animation: in 1s forwards;
				}
				.slide-fade-leave-active {
					animation: out 0.4s forwards;
				}
				@keyframes in {
					0% {
						transform: translateX(-60px);
						opacity: 0;
					}
					100% {
						transform: translateX(0);
						opacity: 1;
					}
				}
				@keyframes out {
					0% {
						opacity: 1;
						/* transform: translateX(60px); */
					}
					100% {
						opacity: 0;
						/* transform: translateX(0); */
					}
				}
				.img-wrap {
					width: 540px;
					height: 658px;
					position: relative;
					overflow: hidden;
					z-index: 2;
					img {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						transition: transform 0.3s;
						&:hover {
							transform: scale($imgScale);
						}

						@include toggle-image();
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
		.bgtext {
			position: absolute;
			left: 80px;
			top: 319px;
			width: 878px;
			height: 220px;
			opacity: 0.6;
		}
		.right {
			opacity: 0;
			animation: slide-right-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			flex: 1;
			height: 1142px;
			overflow: hidden;
			background: #122133;
			position: relative;
			&::after {
				position: absolute;
				content: '';
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				z-index: 1;
				background: linear-gradient(to bottom, rgba(23, 38, 57, 0.9), rgba(23, 38, 57, 0.5), rgba(23, 38, 57, 0.9));
				pointer-events: none;
			}
			ul {
				li {
					position: absolute;
					cursor: pointer;
					width: 134px;
					height: 152px;
					// perspective: 1500px;
					transform: rotateY(0);
					.flip-box {
						width: 100%;
						height: 100%;
						transform-style: preserve-3d;
						position: relative;
						img {
							width: 100%;
							height: 100%;
							position: absolute;
							top: 0;
							left: 0;
							transform: translateZ(67px);
							backface-visibility: hidden;
							&:nth-child(1) {
								transform: rotateY(90deg) translateZ(67px);
							}
							&:nth-child(3) {
								transform: rotateY(-90deg) translateZ(67px);
							}
						}

						&.do-flip {
							transition: transform .5s ease-in-out;
							transform: rotateY(-90deg);
						}
						&.do-flip-reverse {
							transition: transform .5s ease-in-out;
							transform: rotateY(90deg);
						}
					}

					@mixin flip-box($axis, $deg: 90deg) {
						img {
							transform: translateZ($axis);
							&:nth-child(1) {
								transform: rotateY(90deg) translateZ($axis);
							}
							&:nth-child(3) {
								transform: rotateY(-90deg) translateZ($axis);
							}
						}
					}

					&:nth-child(1) {
						left: 0;
						top: -6px;
						width: 134px;
						height: 152px;
					}
					&:nth-child(2) {
						left: 0;
						top: 156px;
						width: 134px;
						height: 162px;
					}
					&:nth-child(3) {
						left: 0;
						top: 328px;
						width: 134px;
						height: 162px;
					}
					&:nth-child(4) {
						left: 0;
						top: 500px;
						width: 134px;
						height: 162px;
					}
					&:nth-child(5) {
						left: 0;
						top: 672px;
						width: 134px;
						height: 162px;
					}

					&:nth-child(6) {
						left: 0;
						top: 844px;
						width: 160px;
						height: 195px;
					}
					&:nth-child(7) {
						left: 0;
						top: 1049px;
						width: 160px;
						height: 195px;
					}
					&:nth-child(6), &:nth-child(7) {
						@include flip-box(80px);
					}

					&:nth-child(8) {
						top: -106px;
						left: 144px;
						width: 187px;
						height: 227px;
					}
					&:nth-child(9) {
						top: 133px;
						left: 144px;
						width: 187px;
						height: 227px;
					}
					&:nth-child(10) {
						top: 370px;
						left: 144px;
						width: 187px;
						height: 227px;
					}
					&:nth-child(11) {
						top: 607px;
						left: 144px;
						width: 187px;
						height: 227px;
					}
					&:nth-child(8),&:nth-child(9),&:nth-child(10),&:nth-child(11) {
						@include flip-box(93.5px);
					}

					&:nth-child(12) {
						top: 844px;
						left: 170px;
						width: 161px;
						height: 195px;
					}
					&:nth-child(13) {
						top: 1049px;
						left: 170px;
						width: 161px;
						height: 195px;
					}
					&:nth-child(12),&:nth-child(13) {
						@include flip-box(93.5px);
					}

					&:nth-child(14) {
						top: -78px;
						left: 341px;
						width: 124px;
						height: 151px;
					}
					&:nth-child(15) {
						top: 83px;
						left: 341px;
						width: 124px;
						height: 151px;
					}
					&:nth-child(16) {
						top: 244px;
						left: 341px;
						width: 124px;
						height: 151px;
					}
					&:nth-child(17) {
						top: 405px;
						left: 341px;
						width: 124px;
						height: 151px;
					}
					&:nth-child(18) {
						top: 566px;
						left: 341px;
						width: 124px;
						height: 151px;
					}
					&:nth-child(19) {
						top: 725px;
						left: 341px;
						width: 124px;
						height: 152px;
					}
					&:nth-child(20) {
						top: 887px;
						left: 341px;
						width: 124px;
						height: 152px;
					}
					&:nth-child(21) {
						top: 1049px;
						left: 341px;
						width: 124px;
						height: 152px;
					}
					&:nth-child(14),&:nth-child(15),&:nth-child(16),&:nth-child(17),&:nth-child(18),&:nth-child(19),&:nth-child(20),&:nth-child(21) {
						@include flip-box(62px);
					}

					&:nth-child(22) {
						top: -104px;
						left: 475px;
						width: 117px;
						height: 142px;
					}
					&:nth-child(23) {
						top: 48px;
						left: 475px;
						width: 117px;
						height: 142px;
					}
					&:nth-child(24) {
						top: 200px;
						left: 475px;
						width: 117px;
						height: 142px;
					}
					&:nth-child(25) {
						top: 352px;
						left: 475px;
						width: 117px;
						height: 142px;
					}
					&:nth-child(26) {
						top: 504px;
						left: 475px;
						width: 117px;
						height: 142px;
					}
					&:nth-child(27) {
						top: 656px;
						left: 475px;
						width: 117px;
						height: 142px;
					}
					&:nth-child(22),&:nth-child(23),&:nth-child(24),&:nth-child(25),&:nth-child(26),&:nth-child(27) {
						@include flip-box(58.5px);
					}

					&:nth-child(28) {
						top: 808px;
						left: 475px;
						width: 188px;
						height: 230px;
					}
					&:nth-child(29) {
						top: 1049px;
						left: 475px;
						width: 188px;
						height: 230px;
					}
					&:nth-child(28),&:nth-child(29) {
						@include flip-box(94px);
					}

					&:nth-child(30) {
						top: 9px;
						left: 602px;
						width: 178px;
						height: 174px;
					}
					&:nth-child(31) {
						top: 193px;
						left: 602px;
						width: 178px;
						height: 195px;
					}
					&:nth-child(32) {
						top: 398px;
						left: 602px;
						width: 178px;
						height: 195px;
					}
					&:nth-child(33) {
						top: 603px;
						left: 602px;
						width: 178px;
						height: 195px;
					}
					&:nth-child(28),&:nth-child(29),&:nth-child(30),&:nth-child(31) {
						@include flip-box(89px);
					}

					&:nth-child(34) {
						top: 808px;
						width: 170px;
						left: 674px;
						height: 231px;
						@include flip-box(85);
					}
					&:nth-child(35) {
						top: 1049px;
						width: 140px;
						left: 674px;
						height: 231px;
						@include flip-box(70);
					}
				}
			}
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
			z-index: 2;
			cursor: pointer;
			transition: color .3s;
			&:hover {
				color: #ed5400;
				i {
					transform: translateX(4px);
				}
			}
			i {
				width: 8px;
				height: 14px;
				transition: transform 0.3s;
				background: url('~assets/icons/ic_home_b2_enter.png') no-repeat;
				background-size: 100% 100%;
				margin-left: 19px;
			}
		}
		.control {
			position: absolute;
			z-index: 2;
			top: 50%;
			right: 80px;
			transform: translateY(-50%);
			i {
				display: block;
				width: 26px;
				height: 26px;
				cursor: pointer;
				background: url(~assets/icons/ic_home_b3_top_white.png) no-repeat center center;
				background-size: 26px 13px;
				transition: 0.3s;
				&:nth-child(1) {
					&:hover {
						background: url(~assets/icons/ic_home_b3_top_orange.png) no-repeat center center;
						background-size: 26px 13px;
						transform: scale(1.15);
					}
				}
				&:nth-child(2) {
					background: url(~assets/icons/ic_home_b3_down_white.png) no-repeat center center;
					background-size: 26px 13px;
					margin-top: 15px;
					&:hover {
						background: url(~assets/icons/ic_home_b3_down_orange.png) no-repeat center center;
						background-size: 26px 13px;
						transform: scale(1.15);
					}
				}
			}
		}
		.img-box {
			position: absolute;
			width: 124px;
			height: 151px;
			z-index: 3;
			left: 341px;
			top: 405px;
			cursor: pointer;
			background: #fff;
			img {
				width: 100%;
				height: 100%;
			}
			&::after,
			&::before {
				content: '';
				position: absolute;
				border: 3px solid #eb5518;
				width: 14px;
				height: 14px;
			}
			&::after {
				left: 9px;
				top: 9px;
				border-right: none;
				border-bottom: none;
			}
			&::before {
				right: 9px;
				bottom: 9px;
				border-top: none;
				border-left: none;
			}
		}
		.img-box2 {
			width: 124px;
			height: 151px;
			position: absolute;
			z-index: 3;
			cursor: pointer;
			&::after,
			&::before {
				content: '';
				position: absolute;
				border: 3px solid transparent;
				width: 0;
				height: 0;
				transition: border .3s,width .3s,height .3s;
			}
			&::after {
				left: 9px;
				top: 9px;
				border-right: none;
				border-bottom: none;
			}
			&::before {
				right: 9px;
				bottom: 9px;
				border-top: none;
				border-left: none;
			}
			&:hover{
				&::after,
				&::before {
					border: 3px solid #eb5518;
					content: '';
					width: 14px;
					height: 14px;
				}
				&::after {
					left: 9px;
					top: 9px;
					border-right: none;
					border-bottom: none;
				}
				&::before {
					right: 9px;
					bottom: 9px;
					border-top: none;
					border-left: none;
				}
			}
		}
	}
	.page4 {
		opacity: 0;
		animation: slide-down-in 1s, fade-in 1s;
		animation-fill-mode: forwards;
		height: 970px;
		display: flex;
		overflow: hidden;
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
			.text {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 2;
				padding: 100px 0 0 80px;
				img {
					width: 90px;
					position: absolute;
					top: 50%;
					left: 50%;
					z-index: 3;
					cursor: pointer;
					transform: translate(-50%, -50%);
					transition: transform 0.3s;
					&:hover {
						transform: translate(-50%, -50%) scale(1.1);
					}
				}
				> h2 {
					height: 118px;
					font-size: 56px;
					font-weight: 400;
					color: #fff;
					span {
						color: #ed5400;
					}
				}
				> p {
					height: 26px;
					font-size: 30px;
					font-family: Athene;
					font-weight: 400;
					color: #ffffff;
					margin: 42px 0 70px 0;
					text-transform: uppercase;
				}
				> div {
					height: 18px;
					font-size: 18px;
					font-weight: 400;
					color: #ffffff;
					right: 80px;
					display: flex;
					align-items: center;
					z-index: 1;
					cursor: pointer;
					transition: color .3s;
					&:hover {
						color: #ed5400;
						i {
							transform: translateX(4px);
						}
					}
					i {
						transition: transform 0.3s;
						width: 8px;
						height: 14px;
						background: url('~assets/icons/ic_home_b2_enter.png') no-repeat;
						background-size: 100% 100%;
						margin-left: 19px;
					}
				}
				ul {
					display: flex;
					flex-wrap: wrap;
					color: #fff;
					margin-top: 315px;
					li {
						margin-bottom: 43px;
						div {
							font-size: 40px;
							font-weight: bold;
							line-height: 55px;
							font-family: Gilroy-Bold;
							b {
								display: inline-block;
							}
							> span {
								font-size: 18px;
							}
						}
						p {
							font-size: 18px;
							font-weight: 400;
							color: #fefefe;
						}
						&:nth-child(1),
						&:nth-child(4) {
							width: 340px;
						}
						&:nth-child(2),
						&:nth-child(5) {
							width: 337px;
						}
						&:nth-child(1) {
							div {
								b {
									width: 64px;
								}
							}
						}
						&:nth-child(2) {
							div {
								b {
									width: 62px;
								}
							}
						}
						&:nth-child(3) {
							div {
								b {
									width: 43px;
								}
							}
						}

						&:nth-child(4) {
							div {
								b {
									width: 66px;
								}
							}
						}
						&:nth-child(5) {
							div {
								b {
									width: 75px;
								}
							}
						}
						&:nth-child(6) {
							div {
								b {
									width: 70px;
								}
							}
						}
					}
				}
			}
		}
		.right {
			width: 960px;
			height: 970px;
			background: rgba(250, 252, 255, 0.11);
			position: relative;
			.text {
				position: absolute;
				left: 80px;
				top: 96px;
				z-index: 3;
				display: flex;
				align-items: center;
				h2 {
					position: relative;
					width: 215px;
					margin-right: 35px;
					height: 215px;
					overflow: hidden;
					border-radius: 100%;
				}
				img {
					position: absolute;
					left: 0;
					top: 0;
					width: 215px;
					height: 215px;
					border-radius: 100%;
					@include toggle-image();
				}
				> div {
					opacity: 0;
					transition: opacity 0.3s;
					&.active {
						opacity: 1;
					}
					h5 {
						height: 23px;
						font-size: 24px;
						font-weight: 400;
						color: #000000;
						margin-bottom: 22px;
					}
					p {
						width: 337px;
						font-size: 18px;
						font-weight: 400;
						color: #888888;
						line-height: 32px;
						@include line-clamp(4);
					}
				}
			}
			.img-wrap {
				position: relative;
				> div {
					&:not(.btn-wrap) {
						position: absolute;
						width: 65px;
						height: 65px;
						cursor: pointer;
						z-index: 3;
						display: flex;
						align-items: center;
						justify-content: center;
						i {
							width: 8px;
							height: 8px;
							background: #ed5400;
							border-radius: 50%;
							&:after,
							&::before {
								position: absolute;
								content: '';
								width: 8px;
								height: 8px;
								border-radius: 50%;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								animation: scale 2s infinite;
								background: #ed5400;
							}
							&::before {
								animation: scale2 2s infinite;
							}
						}
 						@keyframes scale{0%{ transform:translate(-50%, -50%) scale(1) ; opacity:.9}100%{ transform:translate(-50%, -50%) scale(3); opacity: 0;}}
      		  @keyframes scale2{0%{ transform:translate(-50%, -50%) scale(1) ;opacity:.9;}100%{ transform:translate(-50%, -50%) scale(5);opacity:0;}}

					}
				}
				.div1 {
					top: 369px;
					left: 431px;
				}
				.div2 {
					top: 330px;
					left: 775px;
				}
				.div3 {
					top: 549px;
					left: 493px;
				}
				.div4 {
					top: 602px;
					left: 764px;
				}
				> img {
					width: 100%;
					height: 100%;
				}
				.pic-box {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					li {
						position: absolute;
						z-index: 2;
						img {
							opacity: 0;
							transition: opacity 0.5s ease 0s;
						}
						&:nth-child(1) {
							bottom: 266px;
							right: 94px;
							img {
								width: 180px;
								height: 155px;
							}
						}
						&:nth-child(2) {
							bottom: 330px;
							right: 344px;
							img {
								width: 132px;
								height: 124px;
							}
						}
						&:nth-child(3) {
							bottom: 414px;
							left: 358px;
							img {
								width: 220px;
								height: 200px;
							}
						}
						&:nth-child(4) {
							bottom: 490px;
							right: 93px;
							img {
								width: 193px;
								height: 175px;
							}
						}
						&.active {
							img {
								opacity: 1;
							}
						}
					}
				}
				.btn-wrap {
					width: 170px;
					position: absolute;
					right: 80px;
					bottom: 88px;
					display: flex;
					justify-content: flex-end;
				}
			}
		}
	}
	.page5 {
		opacity: 0;
		animation: slide-down-in 1s, fade-in 1s;
		animation-fill-mode: forwards;
		overflow: hidden;
		height: 970px;
		position: relative;
		.swiper {
			position: relative;
			.swiper-wrapper {
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				.swiper-slide {
					.img-box {
						position: relative;
						height: 970px;
						img {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							opacity: 0;
							height: 970px;
							&:first-child {
								opacity: 1;
							}
						}
					}
					.text {
						position: absolute;
						padding: 98px 0 0 80px;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						h3 {
							height: 54px;
							font-size: 56px;
							font-weight: 400;
							color: #fff;
							span {
								color: #ec5400;
							}
						}
						div {
							font-size: 30px;
							font-family: Athene;
							font-weight: 400;
							color: #ffffff;
							text-transform: uppercase;
							margin: 24px 0 209px 0;
						}
						h4 {
							color: #ffffff;
							font-size: 36px;
						}
						h5 {
							color: #ffffff;
							font-size: 28px;
						}
						p {
							font-size: 18px;
							font-weight: 400;
							color: #ffffff;
							width: 605px;
							margin: 51px 0 104px 0;
							@include line-clamp(1);
						}
						.btn {
							width: 170px;
							height: 53px;
						}
					}
				}
				.active {
					.img-box {
						img {
							&:not(:first-child) {
								animation: fadeIn 0.5s forwards;
							}
							&:nth-of-type(2) {
								animation: fadeIn 0.5s 1.5s forwards;
							}
							&:nth-of-type(3) {
								animation: fadeIn 0.5s 3s forwards;
							}
							&:nth-of-type(4) {
								animation: fadeIn 0.5s 4.5s forwards;
							}
						}
					}
				}
			}
			.swiper-pagination3 {
				position: absolute;
				z-index: 99;
				left: 80px;
				bottom: 91px;
				display: flex;
				/deep/.swiper-pagination-bullet {
					width: 50px;
					height: 50px;
					outline: none;
					background: transparent;
					border: 2px solid rgba(255, 255, 255, 0.8);
					color: rgba(255, 255, 255, 0.5);
					font-size: 16px;
					line-height: 50px;
					text-align: center;
					cursor: pointer;
					&.swiper-pagination-bullet-active {
						border: 2px solid transparent;
						background: url('~assets/icons/bg_home_b5_half.png') no-repeat;
						background-size: 100% 100%;
					}
				}
			}
			.bgimg {
				position: absolute;
				right: 0;
				top: 0;
				z-index: 3;
				width: 317px;
				height: 100%;
				background: url('~assets/bg_home_b5_mask_a.png') no-repeat;
				background-size: 100% 100%;
				color: #fff;
				padding-left: 138px;
				padding-top: 295px;
				p {
					font-size: 32px;
					font-family: Gilroy-Bold;
					font-weight: bold;
					color: #ffffff;
					line-height: 48px;
				}
				h5 {
					height: 33px;
					font-size: 36px;
					font-weight: 400;
					color: #ffffff;
					margin: 128px 0 12px 0;
				}
				h6 {
					font-size: 30px;
					font-family: Athene;
					font-weight: 400;
					color: #ffffff;
					text-transform: uppercase;
					overflow: hidden;
					white-space: nowrap;
					margin-bottom: 156px;
				}
				i {
					display: block;
					cursor: pointer;
					width: 45px;
					height: 45px;
					border: 2px solid rgba(255, 255, 255, 0.12);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					outline: none;
					transition: transform 0.3s;
					&:hover {
							transform: rotate(-90deg);
							transform: scale(1.1);
							&::after {
							/* background: url('~assets/icons/ic_home_b3_down_orange.png') center; */
							background-size: 100% 100%;
							transform: rotate(-90deg);
					}
					}
					&::after {
						content: '';
						width: 11px;
						height: 7px;
						background: url('~assets/icons/ic_home_banner_down.png') center;
						transform: rotate(-90deg);
						background-size: 100% 100%;
					}
				}
			}
		}
	}
	.page6 {
		opacity: 0;
		animation: slide-down-in 1s, fade-in 1s;
		animation-fill-mode: forwards;
		height: 1097px;
		position: relative;
		.canvas-wrapper {
			position: absolute;
			left: 0;
			top: 0;
			pointer-events: none;
			width: 100%;
			height: 100%;
			canvas {
				width: 100%;
				height: 100%;
			}
		}
		.text {
			position: absolute;
			padding: 101px 0 0 80px;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			h3 {
				height: 54px;
				font-size: 56px;
				font-weight: 400;
				color: #000;
				span {
					color: #ec5400;
					font-family: 'Gilroy-Bold';
					width: 95px;
					display: inline-block;
				}
			}
			div {
				font-size: 30px;
				font-family: Athene;
				font-weight: 400;
				color: #000;
				text-transform: uppercase;
				margin: 24px 0 110px 0;
			}
			h4 {
				color: #000;
				font-size: 34px;
			}
			h5 {
				color: #000;
				font-size: 38px;
				font-weight: 400;
				text-transform: uppercase;
			}
			p {
				font-size: 18px;
				font-weight: 400;
				color: #666;
				width: 605px;
				margin: 51px 0 104px 0;
				line-height: 30px;
				@include line-clamp(7);
			}
			.btn {
				width: 170px;
				height: 53px;
			}
		}
		.right {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
			width: 280px;
			padding-top: 145px;
			div {
				margin-bottom: 106px;
				&:last-child {
					margin: 0;
				}
				h3 {
					display: flex;
					align-items: flex-end;
					span {
						font-size: 60px;
						font-family: Gilroy-Bold;
						font-weight: bold;
						line-height: 1;
						height: 50px;
						color: #ed5400;
					}
					b {
						font-size: 18px;
						font-weight: bold;
						color: #e95627;
						line-height: 1;
						margin-left: 5px;
					}
				}
				p {
					font-size: 18px;
					font-weight: 400;
					color: #fefefe;
					margin-top: 15px;
				}
			}
		}
	}
	.page7 {
		padding: 100px 0;
		width: 1770px;
		margin: 0 auto;
		h3 {
			height: 54px;
			font-size: 56px;
			font-weight: 400;
			color: #000;
			margin-bottom: 29px;
			opacity: 0;
			animation: slide-down-in 2s, fade-in 1s;
			animation-fill-mode: forwards;
			span {
				color: #ec5400;
			}
		}
		.title {
			opacity: 0;
			animation: slide-down-in 2s, fade-in 1s;
			animation-fill-mode: forwards;
			display: flex;
			align-items: center;
			justify-content: space-between;
			span {
				font-size: 30px;
				font-family: Athene;
				font-weight: 400;
				color: #000000;
			}
			div {
				display: flex;
				align-items: center;
				font-size: 18px;
				font-weight: bold;
				color: #000000;
				cursor: pointer;
				transition: color .3s;
				&:hover {
					color: #ed5400;
					i {
						transform: translateX(4px);
					}
				}
				i {
					transition: transform 0.3s;
					width: 8px;
					height: 14px;
					background: url('~assets/icons/ic_home_b2_enter.png') no-repeat;
					background-size: 100% 100%;
					margin-left: 19px;
				}
			}
		}
		.list {
			margin-top: 88px;
			> ul {
				display: flex;
				justify-content: space-between;
				li {
					width: 553px;
					position: relative;
					.items {
						&:hover {
							h4 {
								color: #ec5400;
							}
						}
					}
					&:nth-child(1) {
						animation: slide-down-in 1s, fade-in 1s;
						div {
							img {
								width: 100%;
								height: 450px;
							}
							&.text {
								background: #122133;
								height: 133px;
								padding: 36px 10px 38px 39px;
								p {
									font-size: 18px;
									font-weight: 400;
									color: #ffffff;
								}
								div {
									font-size: 26px;
									font-weight: 400;
									color: #ffffff;
								}
							}
						}
						i {
							cursor: pointer;
							position: absolute;
							left: 50%;
							top: 38.5%;
							transform: translate(-50%, -50%);
							width: 90px;
							height: 90px;
							background: url(~assets/icons/ic_home_b3_play.png) no-repeat;
							background-size: 100% 100%;
							transition: transform 0.3s;
							&:hover {
								transform: translate(-50%, -50%) scale(1.1);
							}
						}
					}
					&:nth-child(2) {
						animation: slide-down-in 1.3s, fade-in 1.3s;
					}
					&:nth-child(3) {
						animation: slide-down-in 1.6s, fade-in 1.6s;
					}
					&.item {
						width: 553px;
						cursor: pointer;
						.top {
							height: 325px;
							border-bottom: 1px solid #ed5400;
							h4 {
								font-weight: bold;
							}
							&:hover {
								img {
									transform: scale($imgScale);
								}
								h4 {
									color: #ec5400;
								}
							}
							> div {
								display: flex;
								width: 100%;
								overflow: hidden;
								img {
									transition: transform 0.3s;
									width: 382px;
									height: 170px;
									position: relative;
									z-index: 1;
								}
								div {
									position: relative;
									z-index: 2;
									width: 100%;
									font-size: 16px;
									width: 170px;
									height: 170px;
									background: #122133;
									display: flex;
									flex-wrap: wrap;
									font-family: CenturyGothic;
									font-weight: 400;
									color: #ffffff;
									text-align: center;
									align-content: center;
									p {
										color: #ffffff;
										width: 100%;
										justify-content: center;
										font-size: 24px;
									}
									b {
										width: 100%;
										font-size: 16px;
										margin-top: 4px;
									}
								}
							}
						}

						h4 {
							font-size: 20px;
							color: #000000;
							margin-bottom: 12px;
							padding-top: 50px;
							transition: color 0.3s;
							@include line-clamp(1);
						}
						p {
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
