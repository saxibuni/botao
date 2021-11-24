<template>
	<div class="footer">
		<div>
			<div class="nav-wrap">
				<div class="form">
					<h2>
						已有
						<span>228</span>
						人获取报价
					</h2>
					<ul>
						<li>
							<i></i>
							<input type="text" v-model="form.userName" placeholder="输入您的姓名" />
							<b>*</b>
						</li>
						<li>
							<i></i>
							<input type="text" v-model="form.phone" maxlength="11" placeholder="输入您的联系电话" />
							<b>*</b>
						</li>
						<li>
							<i></i>
							<input type="text" v-model="form.area" placeholder="输入您的装修面积" />
							<b>*</b>
						</li>
						<li class="btn" @click="onSubmit()">免费获取报价</li>
					</ul>
				</div>
				<ul>
					<li v-for="(item, i) in navList" :key="i">
						<h5>{{ item.title }}</h5>
						<p @click="onRoute(it)" v-for="(it, index) in item.son" :key="index">{{ it.title }}</p>
					</li>
				</ul>
			</div>
			<div class="icon-wrap">
				<ul>
					<li>
						<div>
							<i>
								<img src="~assets/icons/ic_home_footer_phone.png" alt="" />
							</i>
							Phone number
						</div>
						<h3>{{ footData.tel}}</h3>
					</li>
					<li>
						<div>
							<i>
								<img src="~assets/icons/ic_home_footer_mail.png" alt="" />
							</i>
							E-mail
						</div>
						<h3>{{ footData.email}}</h3>
					</li>
					<li>
						<div>
							<i>
								<img src="~assets/icons/ic_home_footer_address.png" alt="" />
							</i>
							Address
						</div>
						<h3>{{ footData.address}}</h3>
					</li>
				</ul>
				<div>
					<img :src="web_url+footData.watch" alt="" />
					<div>
						关注波涛了解
						<br />
						最新装饰风格
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="link">
					<p>
						Copyright @ 2012-2018 沪ICP备11042317号-8 BOTAO All Rights Reserved 技术支持：
						<a href="https://www.zhulu86.com/">逐鹿科技</a>
					</p>
					友情链接：
					<template v-for="(item,i) in footData.link">
						<a :href="item.url" target='_blank' :key="i">{{item.title}}</a>
					</template>
				</div>
				<div class="icons">
					<div class="wx">
						<div>
							<img :src="web_url+footData.watch" alt="" />
						</div>
						<i>
							<img src="~assets/icons/ic_home_footer_wechat1.png" alt="" />
							<img src="~assets/icons/ic_home_footer_wechat2.png" alt="" />
						</i>
					</div>
					<div class="wb">
						<i @click="wbJump()">
							<img src="~assets/icons/ic_home_footer_weibo1.png" alt="" />
							<img src="~assets/icons/ic_home_footer_weibo2.png" alt="" />
						</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
	form = {
		userName: '',
		phone: '',
		area: ''
	};
	navList = [
		{
			title: '精选案例',
			en: 'Selected case',
			url: 'case',
			son: [
				{ title: '墅装案例', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'case-list' },
				{ title: 'VR装修体验', icon: require('../assets/icons/ic_home_drop_experience.png'), url: 'case-listvr' }
			]
		},
		{
			title: '设计名人堂',
			url: 'design',
			en: 'Design Hall of Fame',
			son: [
				{ title: '擅长户型', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'design-list' },
				{ title: '擅长风格', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'design-list' },
				{ title: '设计师级别', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'design-list' }
			]
		},
		{
			title: '精工匠艺',
			url: 'craft-building',
			en: 'fine craftsmen skill',
			son: [
				{ title: '在施工地', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'craft-building' },
				{ title: '工艺标准', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'craft-team' },
				{ title: '管理体系', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'craft-manager' }
			]
		},
		{
			title: '全案服务',
			url: 'whole-decoration',
			en: 'A whole service',
			son: [
				{ title: '严选材料', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'cherry-pick' },
				{ title: '软装生活', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'soft-decoration' },
				{ title: '无忧售后', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'whole-decoration' }
			]
		},
		{
			title: '最新资讯',
			url: 'information',
			en: 'latest information',
			son: [
				{ title: '公司新闻', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'owner-voice' },
				{ title: '装修攻略', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'strategy-list' },
				{ title: '近期活动', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'strategy-list' },
				{ title: '招贤纳士', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'join-us' }
			]
		},
		{
			title: '波涛品牌',
			url: 'brand',
			en: 'botao brand',
			son: [
				{ title: '品牌介绍', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 0 },
				{ title: '品牌数据', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 1 },
				{ title: '企业理念', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 2 },
				{ title: '发展历程', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 3 },
				{ title: '荣誉资质', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 4 },
				{ title: '社会责任', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 5 },
				{ title: '联系我们', icon: require('../assets/icons/ic_home_drop_ex.png'), url: 'brand', query: 6 }
			]
		}
	];
	onSubmit() {
		if (!this.form.userName) {
			this.$store.state.dialog = {
				state: 2,
				text: '请输入您的姓名'
			};
			return;
		}
		if (this.form.phone.length != 11) {
			this.$store.state.dialog = {
				state: 2,
				text: '请输入正确的联系电话'
			};
			return;
		}
		if (!this.form.area) {
			this.$store.state.dialog = {
				state: 2,
				text: '请输入您的装修面积'
			};
			return;
		}
		this.$store.state.dialog = {
			state: 1,
			text: '提交成功'
		};
		this.form = {
			userName: '',
			phone: '',
			area: ''
		};
	}
	wbJump() {
		window.open(`https://service.weibo.com/share/share.php?url=波涛装饰集团,我们，让空间更美好 https://www.baidu.com`);
	}

	onRoute(it) {
		if (it.url == this.$route.name && it.url == 'brand') {
			this.$bus.$emit('params-change', it.query);
		} else {
			this.$router.push({ name: it.url, params: { number: it.query } });
		}
	}
	footData = '';
	web_url = '';
	mounted(){
			this.footData = this.$store.state.footData;
			this.web_url = this.$store.state.footData.web_url;
	}
}
</script>
<style scoped lang="scss">
.footer {
	background: rgba(20, 36, 55, 1);
	background: url('~assets/bg_home_footer.jpg') no-repeat;
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	color: #fff;
	padding: 90px 0 75px 0;
	box-sizing: border-box;
	margin: 0 auto;
	img {
		display: block;
	}
	> div {
		width: 1770px;
		.nav-wrap {
			display: flex;
			justify-content: space-between;
			.form {
				h2 {
					height: 21px;
					font-size: 22px;
					font-weight: 400;
					color: #ffffff;
					margin-bottom: 40px;
					span {
						color: #ed5400;
						margin: 0 8px;
						font-weight: 700;
					}
				}
				li {
					width: 295px;
					height: 52px;
					background: rgba(11, 23, 37, 1);
					margin-bottom: 10px;
					display: flex;
					align-items: center;
					padding: 0 19px;
					position: relative;
					i {
						width: 14px;
						height: 14px;
						background: url('~assets/icons/ic_home_footer__user_gray.png');
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
						font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
						padding-left: 19px;
						&::placeholder {
							font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
							color: #999999;
						}
					}
					&:nth-child(2) {
						i {
							background: url('~assets/icons/ic_home_footer_fhone_gray.png');
						}
					}
					&:nth-child(3) {
						i {
							background: url('~assets/icons/ic_home_footer_area_gray.png');
						}
					}
					&.btn {
						margin-top: 30px;
						cursor: pointer;
						background: #ed5400;
						height: 48px;
						justify-content: center;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
					}
				}
			}
			> ul {
				display: flex;
				flex: 1;
				justify-content: flex-end;
				margin-left: 217px;
				li {
					&:not(:first-child) {
						margin-left: 144px;
					}
					h5 {
						height: 21px;
						font-size: 22px;
						font-weight: 400;
						color: #ffffff;
						margin-bottom: 41px;
						white-space: nowrap;
					}
					p {
						white-space: nowrap;
						height: 38px;
						font-size: 18px;
						font-weight: 400;
						color: #999999;
						transition: color 0.3s;
						cursor: pointer;
						&:hover {
							color: #fff;
						}
					}
				}
			}
		}
		.icon-wrap {
			margin-top: 39px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			ul {
				display: flex;
				color: #fff;
				li {
					&:hover {
						i {
							transition: all 0.4s;
							animation: bounce-up 1.5s linear infinite;
						}
					}
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
						height: 13px;
						font-size: 16px;
						font-family: Gilroy;
						font-weight: 400;
						color: #999999;
						display: flex;
						align-items: center;
						i {
							width: 36px;
							height: 36px;
							margin-right: 19px;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
					h3 {
						height: 17px;
						font-size: 20px;
						font-weight: bold;
						color: #ffffff;
						margin-top: 16px;
					}
					&:nth-child(2) {
						margin-left: 313px;
						margin-right: 267px;
					}
				}
			}
			> div {
				display: flex;
				align-items: center;
				font-size: 18px;
				font-weight: 400;
				color: #ffffff;
				img {
					width: 132px;
					height: 132px;
					margin-right: 45px;
				}
				div {
					line-height: 25px;
				}
			}
		}
		.copyright {
			display: flex;
			justify-content: space-between;
			margin-top: 49px;
			.link {
				height: 49px;
				font-size: 18px;
				font-weight: 400;
				color: #666666;
				line-height: 30px;
				a {
					color: #666666;
					text-decoration: none;
					transition: 0.3s;
					&:hover {
						color: #fff;
					}
					&::after{
						content: "  |  ";
						color: #666666!important;
					}
					&:last-child{
						&::after{
							 display: none;
						}
					}
				}
			}
			.icons {
				display: flex;
				align-items: center;
				i {
					width: 26px;
					height: 26px;
					margin-left: 21px;
					cursor: pointer;
					position: relative;
					transition: 0.3s;
					position: relative;
					img{
						width: 100%;
						height: 100%;
						display: block;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						transition: .3s;
						opacity: 1;
						&:nth-child(2){
							opacity: 0;
						}
					}
					&:nth-child(2) {
					}
					&:hover {
						img{
							opacity: 0;
							&:nth-child(2){
								opacity: 1;
							}
						}
						> div {
							opacity: 1;
							transform: translateX(-50%) translateX(0);
						}
					}
					> div {
						transition: opacity 0.5s, transform 0.5s;
						opacity: 0;
						pointer-events: none;
						background: #fff;
						position: absolute;
						left: 50%;
						transform: translateX(-50%) translateY(-10%);
						bottom: 150%;
						width: 150px;
						height: 150px;
						img {
							width: 150px;
							height: 150px;
						}
					}
				}
				.wx {
					position: relative;
					width: 26px;
					height: 26px;
					&:hover {
						> div {
							opacity: 1;
							transform: translateX(-50%) translateX(0);
						}
					}
					> div {
						transition: opacity 0.5s, transform 0.5s;
						opacity: 0;
						pointer-events: none;
						background: #fff;
						position: absolute;
						left: 50%;
						transform: translateX(-50%) translateY(-10%);
						bottom: 150%;
						width: 150px;
						height: 150px;
						img {
							width: 150px;
							height: 150px;
						}
					}
					i {
						position: absolute;
						left: 0;
						margin-left: 0;
						top: 0px;
					}
					&:hover i:nth-last-of-type(2) {
						opacity: 1 !important;
					}
				}
				.wb {
					position: relative;
					width: 26px;
					height: 26px;
					i {
						position: absolute;
						top: 0;
						left: 0;
					}
					&:hover i:nth-last-of-type(2) {
						opacity: 1 !important;
					}
				}
			}
		}
	}
}
</style>
