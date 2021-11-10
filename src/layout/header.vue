<template>
	<div class="header" :class="navBgColor?'active':''">

		<div>
			<div class="logo">
				<img v-if="!navBgColor" @click="$router.push({name:'home'})" src="~assets/ic_home_banner_logo.png" alt="">
				<img v-if="navBgColor" @click="$router.push({name:'home'})" src="~assets/ic_home_banner_logo2.png" alt="">
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
				<i class="menu" @mouseenter="onMouseover($event)">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
					<g id="_x31_">
						<path class="normal" d="M2,7c0,0,2.9-2.5,6.4-1.5c4,1.2,4.8,3.3,8.3,3.3c3.4,0,5.3-1.7,5.3-1.7"/>
						<path class="normal" d="M2,13c0,0,2.9-2.5,6.4-1.5c4,1.2,4.8,3.3,8.3,3.3c3.4,0,5.3-1.7,5.3-1.7"/>
						<path class="normal" d="M2,19c0,0,2.9-2.5,6.4-1.5c4,1.2,4.8,3.3,8.3,3.3c3.4,0,5.3-1.7,5.3-1.7"/>
					</g>
					</svg>
				</i>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

const warps = [
	[
		"M2,9.2C2.2,9.3,4.7,9,6.5,7.9c2.6-1.6,6.4-3,8.6-3.1c3.9-0.2,6.6,2.5,6.6,2.5",
		"M2,7.2c1.8,1.2,4.1,1,5.9,0.5c2.9-0.8,5.2-2.5,7.5-2.9C19.1,4.2,22,5.7,22,5.7",
		"M2,6.1c3.6-0.1,4.6,2.7,7.9,3c2.8,0.3,4.6-1.6,6.8-2.6C19.6,5.3,22,5.7,22,5.7",
		"M2,5.1c1.4,0.1,2.6,0.3,4,0.6c2.1,0.5,6.3,3,10,2.8c3.3-0.2,6-2.8,6-2.8"
	],
	[
		"M2,14.4c3.2-2.4,6-3.1,8.3-3.1c3,0.1,7,2.1,8.3,2.8c1.2,0.7,3.1,0.7,3.1,0.7",
		"M2,15.2c0.2,0.1,2.7-0.2,4.5-1.3c2.6-1.6,6.4-3,8.6-3.1c3.9-0.2,6.6,2.5,6.6,2.5",
		"M2,13.3c1.8,1.2,4.1,1,5.9,0.5c2.9-0.8,5.2-2.5,7.5-2.9c3.7-0.7,6.6,0.9,6.6,0.9",
		"M2,11.9c3.6-0.1,4.6,2.7,7.9,3c2.8,0.3,4.6-1.7,6.8-2.6c2.5-1,5.3-0.8,5.3-0.8",
		"M2,10.8c1.4,0.1,2.6,0.3,4,0.6c2.1,0.5,6.3,3,10,2.8c3.3-0.2,6-2.8,6-2.8"
	],
	[
		"M2,20.3c3.2-2.4,6-3.1,8.3-3.1c3,0.1,7,2.1,8.3,2.8c1.2,0.7,3.1,0.7,3.1,0.7",
		"M2,21.1c0.2,0.1,2.7-0.2,4.5-1.3c2.6-1.6,6.4-3,8.6-3.1c3.9-0.2,6.6,2.5,6.6,2.5",
		"M2,19.3c1.8,1.2,4.1,1,5.9,0.5c2.9-0.8,5.2-2.5,7.5-2.9c3.7-0.7,6.6,0.9,6.6,0.9",
		"M2,17.7c3.6-0.1,4.6,2.7,7.9,3c2.8,0.3,4.6-1.7,6.8-2.6c2.5-1,5.3-0.8,5.3-0.8",
		"M2,16.5c1.4,0.1,2.6,0.3,4,0.6c2.1,0.5,6.3,3,10,2.8c3.3-0.2,6-2.8,6-2.8"
	]
];

@Component
export default class Header extends Vue {
	tl: any;
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

	onMouseover(event) {
		let normals = event.target.querySelectorAll(".normal");
		if(gsap.isTweening(normals[0])) return;

	 	for (let i = 0; i < 3; i++) {
			let morph = [];
			warps[i].forEach(p => {
				morph.push({
					morphSVG: p
				})
			});

			let tl = gsap.timeline()
			.to(normals[i], {
				defaults: {
					duration: 1,
					ease: "none"
				},

				keyframes: [...morph, {
					morphSVG: normals[i]
				}]
			})

			gsap.fromTo(tl, {
				time: 0
			}, {
				duration: 1,
				time: 5,
			});
			if (i === 0) this.tl = tl;
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
				margin-left: 46px;
				cursor: pointer;
				position: relative;
				svg {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					path {
						display:inline;fill:none;
						stroke:#FFFFFF;stroke-width:1.8502;stroke-linecap:round;stroke-miterlimit:10;
					}
				}
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
				svg {
					path {
						stroke: #ed5401;
					}
				}
			}
			}
		}
	}
}
</style>
