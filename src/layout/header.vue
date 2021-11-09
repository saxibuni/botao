<template>
	<div class="header" :class="navBgColor?'active':''">

		<div>
			<div class="logo">
				<img @click="$router.push({name:'home'})" src="~assets/bg_home_banner1.jpg" alt="">
				<div>
					<h3>我们，让空间更美好</h3>
					<p>BETTER SPACE,BETTER LIFE</p>
				</div>
			</div>

			<div class="nav">
				<ul>
					<li v-for="(item,i) in navList" :key="i" :class="$route.name==item.url?'active':''" @click="$router.push({name:item.url})">{{item.title}}</li>
				</ul>
			</div>

			<div class="tel">
				<div><i></i>400-920-2982</div>
				<i class="search"></i>
				<i class="menu"></i>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
	navList = [
		{title:'精选案例',url:'case'},
		{title:'设计名人堂',url:'design'},
		{title:'精工匠艺',url:'craft-building'},
		{title:'全案服务',url:'whole-decoration'},
		{title:'最新资讯',url:'information'},
		{title:'波涛品牌',url:'brand'},
	];
	navBgColor = false;
	mounted() {
		window.addEventListener('scroll', this.handleScroll, true);
	}
	handleScroll() {
		let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		let headerHeight = document.querySelector('.header').clientHeight;
		if (scrolltop >= headerHeight) {
			this.navBgColor = true;
		} else {
			this.navBgColor = false;
		}
	}
}
</script>
<style scoped lang="scss">
.header{
	img{
		display: block;
	}
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 112px;
	position: fixed;
	z-index: 999;
	left: 0;
	top: 0;
	width: 100%;
	transition: background .6s;
	&::after{
		position: absolute;
		content: '';
		width: calc(100% - 22px);
		left: 50%;
		bottom: 1px;
		height: 1px;
		background: #fff;
		opacity: .2;
		transform: translateX(-50%);
	}
	>div{
		width: 1770px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		.logo{
			width: 22%;
			display: flex;
			align-items: center;
			img{
				width: 170px;
				height: 32px;
				cursor: pointer;
			}
			div{
				color: #fff;
				border-left: 1px solid rgba(255,255,255,.1);
				padding-left: 15px;
				margin-left: 16px;
				h3{
					height: 17px;
					font-size: 17px;
					font-family: AlibabaPuHuiTiR;
					font-weight: 400;
					margin-bottom: 5px;
				}
				p{
					height: 10px;
					font-size: 10px;
					font-family: Gilroy;
					font-weight: 400;
				}
			}
		}
		.nav{
			ul{
				display: flex;
				align-items: center;
				li{
					color: #ccc;
					font-size: 18px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					width: 110px;
					height: 30px;
					line-height: 30px;
					position: relative;
					text-align: center;
					cursor: pointer;
					transition: color .3s;
					&::after,
					&::before{
							content: '';
							position: absolute;
							border: 2px solid transparent;
							width: 0px;
							height: 0px;
							transition: border .3s, width .3s, height .3s;
						}
					&::after{
						left: 0;
						top: 0;
						border-right: none;
						border-bottom: none;
					}
					&::before{
						right: 0;
						bottom: 0;
						border-top: none;
						border-left: none;
					}
					&:not(:last-child){
						margin-right: 30px;
					}
					&.active,
					&:hover{
						color: #fff;
						&::after,
						&::before{
							border: 2px solid #ED5400;
							width: 8px;
							height: 8px;
						}
						&::after{
							border-right: none;
							border-bottom: none;
						}
						&::before{
							border-top: none;
							border-left: none;
						}
					}
				}
			}
		}
		.tel{
			width: 22%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			div{
				display: flex;
				align-items: center;
				height: 13px;
				font-size: 18px;
				font-family: Gilroy;
				font-weight: bold;
				color: #FFFFFF;
				i{
					width: 24px;
					height: 24px;
					background: url('~assets/icons/ic_home_top_phone.png');
					background-size: 100% 100%;
					margin-right: 3px;
				}
			}
			.search{
					width: 24px;
					height: 24px;
					background: url('~assets/icons/ic_home_top_search.png');
					background-size: 100% 100%;
					margin-left: 46px;
					cursor: pointer;
			}
			.menu{
					width: 24px;
					height: 24px;
					background: url('~assets/icons/ic_home_top_menu.png');
					margin-left: 46px;
					cursor: pointer;
					background-size: 100% 100%;
			}
		}
	}
	&.active{
		background: #fff;
		>div{
			.logo{
				div{
					color: #333333;
					border-left: #eee 1px solid;
				}
			}
			.nav{
				li{
					color: #000000;
					&.active,
					&:hover{
						color:#ED5400;
					}
				}
			}
			.tel{
				div{
					color:#333333;
				}
			.menu{
					background: url('~assets/icons/ic_home_top_search_orange.png');
					background-size: 100% 100%;
			}
			}
		}
	}
}
</style>
