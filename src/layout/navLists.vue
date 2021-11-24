<template>
	<div class="nav-list-wrap" :class="{ active: navShow, ie: isIE }">
		<div class="logo">
			<div>
				<img src="~assets/ic_home_banner_logo2.png" alt="" />
				<div>
					<h3>我们，让空间更美好</h3>
					<p>BETTER SPACE,BETTER LIFE</p>
				</div>
			</div>
			<div @click="navShow = false">
				<img src="~assets/icons/ic_home_menu_close.png" alt="" />
				CLOSE
			</div>
		</div>
		<ul>
			<template v-for="(item, index) in navList">
				<li :key="index" v-if="item.nav_name!='首页'">
					<h2>{{ item.nav_name }}</h2>
					<h3>{{ item.englist_name }}</h3>
					<h4></h4>
					<div v-if="item.children">
						<h5 v-for="(it, i) in item.children" :key="i" @click="navShow = false;onJump(it.nav_id)">
							{{ it.nav_name }}
						</h5>
					</div>
					<b>0{{ index + 1 }}</b>
				</li>
			</template>
		</ul>
	</div>
</template>

<script lang="ts">
import { device } from 'root/utils';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class navLists extends Vue {
	isIE: boolean = false;
	navShow = false;
	navList = [
		{
			title: '精选案例',
			en: 'Selected case',
			url: 'case',
			son: [
				{ title: '墅装案例', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'case-list' },
				{ title: 'VR装修体验', icon: require('../assets/icons/ic_home_drop_experience.png'),url:'case-listvr' }
			]
		},
		{
			title: '设计名人堂',
			url: 'design',
			en: 'Design Hall of Fame',
			son: [
				{ title: '擅长户型', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'design-list' },
				{ title: '擅长风格', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'design-list' },
				{ title: '设计师级别', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'design-list' }
			]
		},
		{
			title: '精工匠艺',
			url: 'craft-building',
			en: 'fine craftsmen skill',
			son: [
				{ title: '在施工地', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'craft-building' },
				{ title: '工艺标准', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'craft-team' },
				{ title: '管理体系', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'craft-manager' }
			]
		},
		{
			title: '全案服务',
			url: 'whole-decoration',
			en: 'A whole service',
			son: [
				{ title: '严选材料', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'cherry-pick' },
				{ title: '软装生活', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'soft-decoration' },
				{ title: '无忧售后', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'whole-decoration' }
			]
		},
		{
			title: '最新资讯',
			url: 'information',
			en: 'latest information',
			son: [
				{ title: '公司新闻', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'owner-voice' },
				{ title: '装修攻略', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'strategy-list' },
				{ title: '近期活动', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'strategy-list' },
				{ title: '招贤纳士', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'join-us' }
			]
		},
		{
			title: '波涛品牌',
			url: 'brand',
			en: 'botao brand',
			son: [
				{ title: '品牌介绍', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'brand',query:0 },
				{ title: '品牌数据', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'brand',query:1 },
				{ title: '企业理念', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'brand',query:2},
				{ title: '发展历程', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'brand',query:3 },
				{ title: '荣誉资质', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'brand',query:4 },
				{ title: '社会责任', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'brand',query:5 },
				{ title: '联系我们', icon: require('../assets/icons/ic_home_drop_ex.png'),url:'brand',query:6}
			]
		}
	];
	navObj = {
		73:'case',
		77:'case-list',
		78:'case-listvr',

		74:'design',
		75:'craft-building',


		79:'craft-building',
		80:'craft-team',
		81:'craft-manager',
		76:'whole-decoration',
		82:'whole-decoration',
		83:'cherry-pick',
		84:'soft-decoration',

		85:'owner-voice',
		86:'owner-voice',
		87:'strategy-list',
		88:'join-us',
		90:'strategy-list',

		89:'brand',
		91:'brand',
		92:'brand',
		93:'brand',
		94:'brand',
		95:'brand',
		96:'brand',
		97:'brand',

	}
	onJump(navId){
		console.log(navId);
		if(navId==89||navId==91){
			this.$router.push({name:this.navObj[navId],params:{number:'0'}})
			this.$bus.$emit('params-change', 0);
		}else if(navId==92){
			this.$router.push({name:this.navObj[navId],params:{number:'1'}})
			this.$bus.$emit('params-change', 1);
		}
		else if(navId==93){
			this.$router.push({name:this.navObj[navId],params:{number:'2'}})
			this.$bus.$emit('params-change', 2);
		}
		else if(navId==94){
			this.$router.push({name:this.navObj[navId],params:{number:'3'}})
			this.$bus.$emit('params-change', 3);
		}
		else if(navId==95){
			this.$router.push({name:this.navObj[navId],params:{number:'4'}})
			this.$bus.$emit('params-change', 4);
		}
		else if(navId==96){
			this.$router.push({name:this.navObj[navId],params:{number:'5'}})
			this.$bus.$emit('params-change', 5);
		}
		else if(navId==97){
			this.$router.push({name:this.navObj[navId],params:{number:'6'}})
			this.$bus.$emit('params-change', 6);
		}
		else{
			this.$router.push({name:this.navObj[navId]})
		}
	}
	created() {
		this.isIE = device.browser.ie;
		this.navList = this.$store.state.menuData.menu_list;
	}
}
</script>
<style scoped lang="scss">
.nav-list-wrap {
	position: absolute;
	max-width: 1920px;
	top: 0;
	left: 50%;
	width: 100%;
	background: url('~assets/bg_home_menu.jpg') no-repeat;
	background-size: 100% 100%;
	z-index: 999;
	height: 970px;
	transform: translateX(-50%) translateY(0);
	padding: 0 11px;
	transition: clip-path .6s;
	clip-path: ellipse(0 0 at 100% 0);

	&.ie {
		transform: translateX(-50%) translateY(-110%);
		transition: transform .3s;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #e8e8e8;
		height: 112px;
		padding: 0 62px;
		padding-right: 5px;
		> div {
			&:nth-child(1) {
				display: flex;
				align-items: center;
				img {
					width: 170px;
					height: 32px;
					cursor: pointer;
				}
				div {
					color: #333;
					border-left: 1px solid #eee;
					padding-left: 15px;
					margin-left: 16px;
					h3 {
						height: 17px;
						font-size: 17px;
						font-weight: 400;
						margin-bottom: 5px;
					}
					p {
						height: 10px;
						font-size: 10px;
						font-family: Gilroy;
						letter-spacing: 1px;
						font-weight: 400;
					}
				}
			}
			&:nth-child(2) {
				font-size: 16px;
				font-weight: 400;
				color: #ed5400;
				display: flex;
				align-items: center;
				cursor: pointer;
				img {
					width: 18px;
					transition: 0.3s;
					margin-right: 11px;
				}
				&:hover {
					img {
						transform: rotate(-90deg);
					}
				}
			}
		}
	}
	> ul {
		display: flex;
		li {
			width: calc(100% / 6);
			text-align: center;
			padding-top: 168px;
			height: 877px;
			transition: background 0.3s;
			position: relative;
			&:nth-child(1) {
				&:hover {
					background: url('~assets/ic_home_menu_01.jpg') no-repeat;
					background-size: 100% 100%;
				}
			}
			&:nth-child(2) {
				&:hover {
					background: url('~assets/ic_home_menu_02.jpg') no-repeat;
					background-size: 100% 100%;
				}
			}
			&:nth-child(3) {
				&:hover {
					background: url('~assets/ic_home_menu_03.jpg') no-repeat;
					background-size: 100% 100%;
				}
			}
			&:nth-child(4) {
				&:hover {
					background: url('~assets/ic_home_menu_04.jpg') no-repeat;
					background-size: 100% 100%;
				}
			}
			&:nth-child(5) {
				&:hover {
					background: url('~assets/ic_home_menu_05.jpg') no-repeat;
					background-size: 100% 100%;
				}
			}
			&:nth-child(6) {
				&:hover {
					background: url('~assets/ic_home_menu_06.jpg') no-repeat;
					background-size: 100% 100%;
				}
			}
			&:hover {
				h2 {
					color: #fff;
				}
				div {
					h5 {
						color: #fff;
					}
				}
			}
			h2 {
				height: 29px;
				font-size: 30px;
				font-weight: 400;
				color: #000000;
				transition: 0.3s;
			}
			h3 {
				height: 14px;
				font-size: 18px;
				font-family: Gilroy-Regular;
				font-weight: 400;
				color: #999999;
				text-transform: uppercase;
				margin: 24px 0 59px 0;
			}
			h4 {
				width: 30px;
				height: 2px;
				background: #ed5400;
				margin: 0 auto;
			}
			div {
				margin-top: 69px;
				h5 {
					font-size: 18px;
					font-weight: 600;
					color: #333333;
					transition: 0.3s;
					cursor: pointer;
					line-height: 46px;
					transition: color .3s;
					&:hover{
						color: #ed5400;
					}
				}
			}
			b {
				font-size: 36px;
				font-family: Gilroy-Bold;
				font-weight: bold;
				color: #ffffff;
				text-align: center;
				position: absolute;
				left: 0;
				width: 100%;
				bottom: 99px;
			}
		}
	}
	&.active {
		transform: translateX(-50%) translateY(0);
		clip-path: ellipse(141% 141% at 100% 0%);
	}
}
</style>
