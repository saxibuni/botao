<template>
	<div class="home">
		<div class="page1">
			<swiper :options="bannerSwiperOptions" v-if="banner.list&&banner.list.length!=0">
				<swiper-slide v-for="(item, i) in banner.list" :key="i">
					<template v-if="item.video">
						<video class="videos" :src="web_url + item.video" controls preload="true" loop="loop" muted autoplay="autoplay">
							<source :src="web_url + item.video" type="video/mp4" />
						</video>
						<i></i>
					</template>
					<template v-else>
						<img :src="web_url+item.img" alt="" />
					</template>
						<div class="text">
							<div class="text-content">
								<h3>
									<span></span><span>{{item.title}}</span>
								</h3>
								<div v-if="item.etitle">
									<p>{{item.etitle.split('\n')[0]}}</p>
									<p>{{item.etitle.split('\n')[1]}}</p>
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
						<input type="text" maxlength="11" @input="oninput()" v-model="form.phone" placeholder="输入您的联系电话" />
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
				<ICountUp :endVal="1000" :options="options"></ICountUp>
				经典案例 筑梦幸福家
			</h2>
			<p class="wow">Select cases</p>
			<div class="tabs wow">
				<div v-for="(item, i) in anList" :key="i" :class="{ active: i == anIndex }" @click="anIndex = i,page2Index = 0,swiperIndex = 0,anIndexFun();">{{ item.typename }}</div>
			</div>
			<div class="swiper">
				<div class="img-wrap">
					<div class="imgs-wrap" v-if="anList.length > 0">
						<swiper :options="swiperOptions" class="swiper-no-swiping" ref="mSwiper">
							<swiper-slide v-for="(item, i) in anList[anIndex].list" :key="i">
								<img @click="openUrl(item.link)" :src="web_url+item.img" alt="" />
							</swiper-slide>
						</swiper>
					</div>

				</div>
				<transition name="fade">
					<template v-if="anList.length > 0 && anList[anIndex].list&&anList[anIndex].list[page2Index]">
						<div class="text wow" v-if="page2Ani">
							<h3 v-if="anList[anIndex].list[page2Index]&&anList[anIndex].list[page2Index].title">{{anList[anIndex].list[page2Index].title}}</h3>
							<h4 v-if="anList[anIndex].list[page2Index]&&anList[anIndex].list[page2Index].title">
								<span>{{anList[anIndex].list[page2Index].istyle}}</span>
								<span>{{anList[anIndex].list[page2Index].imj}}</span>
							</h4>
							<p v-if="anList[anIndex].list[page2Index]&&anList[anIndex].list[page2Index].title">
								{{anList[anIndex].list[page2Index].desc}}
							</p>
							<!-- <div class="btn-box">
								<Button text="案例详情" @click.native="$router.push({ name: 'case-detail' ,query:{aid:anList[anIndex].list[page2Index].aid}})"></Button>
							</div> -->
						</div>
					</template>
				</transition>
				<div class="swiper-wrap wow" v-if="anList.length > 0">
					<swiper class="dswiper" :options="bannerSwiperOptions2" ref="mySwiper2">
						<swiper-slide v-for="(item, i) in anList[anIndex].list" :key="i" :class="{ active: swiperIndex == i }" @click.native="onSelect(i)">
							<img :src="web_url+item.img" alt="" />
						</swiper-slide>
					</swiper>
					<div class="swiper-button-wrap">
						<div class="prev2" @click="onClick3(-1)"></div>
						<div class="next2" @click="onClick3(1)"></div>
					</div>
				</div>
				<div class="mask" v-if="anList.length > 0&&anList[anIndex].list&&anList[anIndex].list[page2Index]">
					<img :src="web_url + anList[anIndex].list[page2Index].img" alt="" />
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
							<b><ICountUp :endVal="12" :options="options2"></ICountUp></b>
							年
						</div>
						<p>以上从业经验</p>
					</li>
					<li>
						<div>
							<b><ICountUp :endVal="8" :options="options2"></ICountUp></b>
							支
						</div>
						<p>专业设计团队</p>
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

				<div class="left-text">
					<div class="text">

					<transition name="fade">
							<div class="box wow" v-if="page3Ani">
								<h4 class="an1">{{sjsItem.title}}</h4>
								<span class="an2">{{sjsItem.sjssx}}</span>
								<h5 class="an3">从业年限：</h5>
								<b class="an4">{{sjsItem.cysj}}</b>
								<h5 class="an5" v-if="sjsItem.hor">所获荣誉</h5>
								<p class="an6"  v-if="sjsItem.hor" v-html="sjsItem.hor"></p>
								<h5 class="an7">代表作品</h5>
								<p class="an8">{{sjsItem.dbz}}</p>
								<div class="btn-box an9">
									<Button @click.native="$router.push({ name: 'design-detail',query:{aid:sjsItem.aid} })" text="TA的作品"></Button>
								</div>
							</div>
					</transition>

					</div>
					<div class="img-wrap" v-if="sjsItem&&sjsItem.img">
						<transition-group name="toggle-image">
							<img :src="web_url+sjsItem.img" alt="" v-if="showProfile" key="a" />
							<img :src="web_url+sjsItem.img" alt="" v-if="!showProfile" key="b" />
						</transition-group>

						<transition-group name="fade">
							<div v-if="showProfile" key="c" >
								<p>DESIGN CONCEPT</p>
								<b>{{sjsItem.sjln}}</b>
							</div>
							<div v-if="!showProfile"  key="d">
								<p>CONCEPT DESIGN</p>
								<b>{{sjsItem.sjln}}</b>
							</div>
						</transition-group>

					</div>
				</div>
			</div>
			<div class="right wow">
				<ul>
					<li v-for="(item, i) in currentPortraitList" :key="i" @click="onClick(item, i)" :ref="`item${i}`"
					>
						<div class="flip-box" :class="{ 'do-flip': applyFlipType==1, 'do-flip-reverse': applyFlipType==2 }">
							<img :src="nextPortraitList[i] ? (web_url+nextPortraitList[i].img) : require('assets/white.png')" alt="" />
							<img :src="web_url+item.img" alt="" v-if="item.img!=='assets/white.png'" />
							<img :src="nextPortraitList[i] ? (web_url+nextPortraitList[i].img) : require('assets/white.png')" alt="" />
						</div>
					</li>
				</ul>


				<template v-if="isShowImg">
					<div class="img-box2" @click="onClick(item.src, i)" v-for="(item, i) in listwidth" :key='i' :style="{ top: `${item.top}px`, left: `${item.left}px`, width: `${item.width}px`, height: `${item.height}px` }">
						<img :src="web_url+item.src" alt="" />
					</div>
				</template>

				<template v-if="listwidth.length!=0">
						<div class="img-box" :style="{ top: `${listwidth[page3Index].top}px`, left: `${listwidth[page3Index].left}px`, width: `${listwidth[page3Index].width}px`, height: `${listwidth[page3Index].height}px` }" v-if="isShowLightImg">
							<img :src="web_url+listwidth[page3Index].src" alt="" />
						</div>
				</template>
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
			<div class="left" v-if="sgzzDesc">
				<img v-if="sgzzDesc&&sgzzDesc.bg" :src="web_url+sgzzDesc.bg" alt="" />
				<div class="text">
					<h2 v-if="sgzzDesc.btitle">
						<span>{{sgzzDesc.btitle.split('#')[1]}}</span>
					  <b v-html="sgzzDesc.btitle.split('#')[2]"></b>
					</h2>
					<p>{{sgzzDesc.etitle}}</p>
					<div @click="onRoute('craft-building')">
						了解更多
						<i></i>
					</div>
					<ul>
						<li>
							<div>
								<b v-if="sgzzDesc.gltl">
									<ICountUp :endVal="parseInt(sgzzDesc.gltl)" :options="options2"></ICountUp>
								</b>
								<span>项</span>
							</div>
							<p>工地管理条例</p>
						</li>
						<li>
							<div>
								<b v-if="sgzzDesc.sggy">
									<ICountUp :endVal="parseInt(sgzzDesc.sggy)" :options="options2"></ICountUp>
								</b>
								<span>条</span>
							</div>
							<p>施工工艺标准</p>
						</li>
						<li>
							<div>
								<b v-if="sgzzDesc.gcjszl">
									<ICountUp :endVal="Number(sgzzDesc.gcjszl)" :options="options2"></ICountUp>
								</b>
								<span>项</span>
							</div>
							<p>工程技术专利</p>
						</li>
						<li>
							<div>
								<b v-if="sgzzDesc.ysbz">
									<ICountUp :endVal="Number(sgzzDesc.ysbz)" :options="options2"></ICountUp>
								</b>
								<span>条</span>
							</div>
							<p>验收标准</p>
						</li>
						<li>
							<div>
								<b v-if="sgzzDesc.zjgdsl">
									<ICountUp :endVal="Number(sgzzDesc.zjgdsl)" :options="options2"></ICountUp>
								</b>
								<span>个</span>
							</div>
							<p>在建工地</p>
						</li>
						<li>
							<div>
								<b v-if="sgzzDesc.jpxmjl">
									<ICountUp :endVal="Number(sgzzDesc.jpxmjl)" :options="options2"></ICountUp>
								</b>
								<span>+</span>
							</div>
							<p>金牌项目经理</p>
						</li>
					</ul>
					<img @click="videoPop.isPop = true,videoPop.url=sgzzDesc.video" src="~assets/icons/ic_c2_play.png" alt="" />
				</div>
			</div>
			<div class="right">
				<div class="text">
					<h2 v-if="sggyList&&sggyList[picIndex2]">
						<transition-group name="toggle-image">
							<img :src="web_url+sggyList[picIndex2].img" alt="" v-if="textActive" key="a" />
							<img :src="web_url+sggyList[picIndex2].img" alt="" v-if="!textActive" key="b" />
						</transition-group>
					</h2>
					<div :class="{ active: textActive2 }" v-if="sggyList&&sggyList[picIndex2]">
						<h5>{{sggyList[picIndex2].title}}</h5>
						<p v-html="sggyList[picIndex2].desc"></p>
					</div>
				</div>
				<div class="img-wrap">
					<img src="~assets/bg_home_b4_right.jpg" alt="" />
					<div class="div1" @mouseover="textActiveFun(0,0)">
						<i></i>
					</div>
					<div class="div2" @mouseover="textActiveFun(3,1)">
						<i></i>
					</div>
					<div class="div3" @mouseover="textActiveFun(1,2)">
						<i></i>
					</div>
					<div class="div4" @mouseover="textActiveFun(2,3)">
						<i></i>
					</div>

					<ul class="pic-box">
						<li style="font-size:10px;" :class="{ active: picIndex == 2 }"><img :src="picList[0]" alt="" /></li>
						<li style="font-size:10px;" :class="{ active: picIndex == 1 }" ><img :src="picList[1]" alt="" /></li>
						<li style="font-size:10px;" :class="{ active: picIndex == 0 }" ><img :src="picList[2]" alt="" /></li>
						<li style="font-size:10px;" :class="{ active: picIndex == 3 }" ><img :src="picList[3]" alt="" /></li>
					</ul>
					<div class="btn-wrap">
						<Button text="预约参观工地" @click.native="$store.state.dialogDesign.visit = true"></Button>
					</div>
				</div>
			</div>
		</div>
		<div class="page5 wow">
			<div class="swiper" v-if="page5List.length > 0">
				<swiper :options="bannerSwiperOptions3" ref="myswiper3">
					<swiper-slide v-for="(item, i) in page5List" class="page5Slide" :key="i">
						<div class="img-box" v-if="item.imgs">
							<img v-for="(v, i) in item.imgs.split(',')" :key="i" :src="web_url+v" alt="" />
						</div>
						<div class="text" v-if="item.title">
							<h3>
								<span>{{item.title.split('#')[1]}}</span>
								{{item.title.split('#')[2]}}
							</h3>
							<div>
								{{item.etitle}}
							</div>
							<h4>{{item.ctitle}}</h4>
							<h5>{{item.cftitle}}</h5>
							<p>{{item.ccenter}}</p>
							<div class="btn">
								<Button text="服务详情" @click.native="onRoute('cherry-pick')"></Button>
							</div>
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-pagination3"></div>
				<div class="bgimg">
					<div>
						<p class="banner-tag">{{page5Index2}}</p>
						<h5>{{page5List[page5Index].rtitle}}</h5>
						<h6>{{page5List[page5Index].retitle}} </h6>
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
				<h3 v-if="qaylz.title">
					<ICountUp :endVal="parseInt(qaylz.title.split('#')[1])" :options="options1"></ICountUp>
					{{qaylz.title.split('#')[2]}}
				</h3>
				<div>
					{{qaylz.etitle}}
				</div>
				<h4>{{qaylz.ctitle}}</h4>
				<h5>{{qaylz.cetitle}}</h5>
				<p>
					{{qaylz.desc}}
				</p>
				<div class="btn">
					<Button text="走进波涛" @click.native="onRoute('brand')"></Button>
				</div>
			</div>
			<div class="right wow">
				<div>
					<h3 v-if="qaylz.dzyz">
						<ICountUp :endVal="parseInt(qaylz.fgs)" :options="options2"></ICountUp>
						<b>+</b>
					</h3>
					<p>多家分公司全国开设</p>
				</div>
				<div>
					<h3 v-if="qaylz.dzyz">
						<ICountUp :endVal="parseInt(qaylz.dzyz)" :options="options2"></ICountUp>
						<b>+</b>
					</h3>
					<p>大宅业主的选择</p>
				</div>
				<div>
					<h3 v-if="qaylz.dzyz">
						<ICountUp :endVal="parseInt(qaylz.jjjc)" :options="options2"></ICountUp>
						<b>㎡</b>
					</h3>
					<p>家居建材广场</p>
				</div>
				<div>
					<h3 v-if="qaylz.dzyz">
						<ICountUp :endVal="parseInt(qaylz.dpgys)" :options="options2"></ICountUp>
						<b>个</b>
					</h3>
					<p>国内外大牌供应商</p>
				</div>
				<div>
					<h3 v-if="qaylz.dzyz">
						<ICountUp :endVal="parseInt(qaylz.cz)" :options="options2"></ICountUp>
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
					<li class="wow" v-if="zxxxList[0]" @click="$router.push({ name: 'owner-voice',query:{aid:zxxxList[4].aid}})">
						<div>
							<img :src="web_url+zxxxList[0].video_img" alt="" />
						</div>
						<i @click.stop="videoPop.isPop = true,videoPop.url=zxxxList[0].video"></i>
						<div class="text">
							<p>{{zxxxList[0].tag}}</p>
							<div>{{zxxxList[0].title}}</div>
						</div>
					</li>
					<li class="item wow">
						<div class="top" v-if="zxxxList[1]" @click="$router.push({ name: 'strategy-detail',query:{aid:zxxxList[1].aid}})">
							<div>
								<img :src="web_url+zxxxList[1].img" alt="" />
								<div>
									<p>{{yue(zxxxList[1].update_time)}}</p>
									<b>{{format(zxxxList[1].update_time)}}</b>
								</div>
							</div>
							<h4>{{zxxxList[1].title}}</h4>
							<p>{{zxxxList[1].tag}}</p>
						</div>

						<div class="items" v-if="zxxxList[2]" @click="$router.push({ name: 'strategy-detail',query:{aid:zxxxList[2].aid}})">
							<h4>{{zxxxList[2].title}}</h4>
							<p>
								<span>{{zxxxList[2].tag}}</span>
								<span>{{format(zxxxList[2].update_time)}}</span>
							</p>
						</div>

						<div class="items" v-if="zxxxList[3]" @click="$router.push({ name: 'strategy-detail',query:{aid:zxxxList[3].aid} })">
							<h4>{{zxxxList[3].title}}</h4>
							<p>
								<span>{{zxxxList[3].tag}}</span>
								<span>{{format(zxxxList[3].update_time)}}</span>
							</p>
						</div>
					</li>
					<li class="item wow">
						<div class="top" v-if="zxxxList[4]" @click="$router.push({ name: 'strategy-detail',query:{aid:zxxxList[4].aid}})">
							<div>
								<img :src="web_url+zxxxList[4].img" alt="" />
								<div>
									<p>{{yue(zxxxList[4].update_time)}}</p>
									<b>{{format(zxxxList[4].update_time)}}</b>
								</div>
							</div>
							<h4>{{zxxxList[4].title}}</h4>
							<p>{{zxxxList[4].tag}}</p>
						</div>

						<div class="items" v-if="zxxxList[5]" @click="$router.push({ name: 'strategy-detail',query:{aid:zxxxList[5].aid}})">
							<h4>{{zxxxList[5].title}}</h4>
							<p>
								<span>{{zxxxList[5].tag}}</span>
								<span>{{format(zxxxList[5].update_time)}}</span>
							</p>
						</div>

						<div class="items" v-if="zxxxList[6]" @click="$router.push({ name: 'strategy-detail',query:{aid:zxxxList[6].aid} })">
							<h4>{{zxxxList[6].title}}</h4>
							<p>
								<span>{{zxxxList[6].tag}}</span>
								<span>{{format(zxxxList[6].update_time)}}</span>
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
		height: 937px;
		overflow: hidden;
		position: relative;
		.swiper-wrapper {
			.swiper-slide {
				img {
					width: 100%;
					height: 100%;
				}
				i{
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					background:url(~assets/bg_home_banner_mask.png) no-repeat;
					background-size: 100% 100%;
					z-index: 1;
					pointer-events: none;
				}
				.text {
					position: absolute;
					left: 50%;
					top: 268px;
					z-index: 3;
					transform: translateX(-50%);
					color: #ffffff;
					.text-content {
						h3 {
							font-size: 34px;
							height: 34px;
							font-family: Gilroy;
							font-weight: 400;
							text-align: center;
							display: flex;
							align-items: center;
							justify-content: center;
							span {
								&:nth-child(1){
									font-size: 41px;
									margin-right: 4px;
									font-weight: bold;
								}
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
							p{
								/* white-space: pre-wrap; */
								text-transform: uppercase
							}
						}
						opacity: 0;
					}
				}
				.videos{
					width: 100%;
					height: 100%;
					object-fit: fill;
					pointer-events: none;
					&::-webkit-media-controls {
						display: none !important;
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
					cursor: pointer;
					.swiper-slide{
						&::after{
							pointer-events: none;
							background: url(~assets/bg_home_b2_mask1.png) no-repeat;
							background-size: 100% 100%;
							width: 100%;
							height: 100%;
							top: 0;
							left: 0;
							position: absolute;
							content: '';
							z-index: 9;
						}
					}
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
					width: 930px;
					margin: 0;
					padding-left: 10px;
					padding-right: 10px;
					.swiper-wrapper {
						.swiper-slide {
							box-sizing: border-box;
							width: 140px!important;
							height: 125px;
							border: 1px solid transparent;
							&.swiper-slide-active {
								/* img {
									transform-origin: bottom;
									border: 1px solid #ffffff;
									transform: translateY(0px) scaleY(1.2) !important;
								} */
							}
							&.active{
								margin-left: 10px!important;
								margin-right: 20px!important;
								img {
									border: 1px solid #ffffff;
									transform: translateY(0px) scale(1.2) !important;
								}
							}
							img {
								transform-origin: bottom;
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
				background: rgba(#031428,.07);
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
								width: 38px;
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
				.text {
					flex: 1;
					padding-top: 18px;
					position: relative;
					height: 700px;
					.box {
						position: absolute;
						left: 0;
						top: 0;
						animation: slide-down-in 1s forwards, fade-in .3s forwards;
						.an1{
							opacity: 0;
							animation: slide-down-in 1s forwards, fade-in 1s forwards;
						}
						.an2{
							opacity: 0;
							animation: slide-down-in 1s 0.2s forwards, fade-in 1s 0.2s forwards;
						}
						.an3{
							opacity: 0;
							animation: slide-down-in 1s 0.3s forwards, fade-in 1s 0.3s forwards;
						}
						.an4{
							opacity: 0;
							animation: slide-down-in 1s 0.4s forwards, fade-in 1s 0.4s forwards;
						}
						.an5{
							opacity: 0;
							animation: slide-down-in 1s 0.5s forwards, fade-in 1s 0.5s forwards;
						}
						.an6{
							opacity: 0;
							animation: slide-down-in 1s 0.6s forwards, fade-in 1s 0.6s forwards;
							white-space: pre-wrap;
						}
						.an7{
							opacity: 0;
							animation: slide-down-in 1s 0.7s forwards, fade-in 1s 0.7s forwards;
						}
						.an8{
							opacity: 0;
							animation: slide-down-in 1s 0.8s forwards, fade-in 1s 0.8s forwards;
						}
						.an9{
							opacity: 0;
							animation: slide-down-in 1s 0.9s forwards, fade-in 1s 0.9s forwards;
						}
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
					}
					100% {
						opacity: 0;
					}
				}
				.img-wrap {
					width: 540px;
					height: 658px;
					position: relative;
					overflow: hidden;
					z-index: 2;
					&::after{
						content: '';
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						background: linear-gradient(to bottom, rgba(23, 38, 57, 0), rgba(23, 38, 57, 0.2), rgba(23, 38, 57, 0.5));
					}
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
						padding-right: 20px;
						@include fade-out-in();
						p {
							font-size: 20px;
							font-family: Gilroy;
							font-weight: 400;
							color: #eb5518;
							margin-bottom: 12px;
						}
						b {
							display: block;
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
				background: url(~assets/bg_home_b2_mask.png) no-repeat;
				opacity: .95;
				background-size: 100% 100%;
				/* background: linear-gradient(to bottom, rgba(23, 38, 57, 0.9), rgba(23, 38, 57, 0.5), rgba(23, 38, 57, 0.9)); */
				pointer-events: none;
			}
			ul {
				li {
					position: absolute;
					cursor: pointer;
					width: 134px;
					height: 152px;
					// perspective: 1500px;
					overflow: hidden;
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
			position: absolute;
			z-index: 3;
			cursor: pointer;
			img{
				width: 100%;
				height: 100%;
				opacity: 0;
				transition:opacity .3s;
				position: relative;
				z-index: 1;
			}
			&::after,
			&::before {
				content: '';
				position: absolute;
				border: 3px solid transparent;
				width: 0;
				height: 0;
				z-index: 22;
				transition: border .1s,width .3s,height .3s;
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
				img{
					opacity: .5;
				}
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
					b{
						font-weight: bold;
						white-space: pre-wrap;
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
						width: 500px;
						font-size: 18px;
						font-weight: 400;
						color: #888888;
						white-space: pre-wrap;
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
						cursor: pointer;
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
							background: url(~assets/icons/ic_c2_play.png) no-repeat;
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
