<template>
	<div class="header" :class="navBgColor || $route.name == 'search' ? 'active' : ''">
		<div class="box">
			<div class="logo">
				<img v-if="!navBgColor && $route.name != 'search'" @click="$router.push({ name: 'home' })" src="~assets/ic_home_banner_logo.png" alt="" />
				<img v-if="navBgColor && $route.name != 'search'" @click="$router.push({ name: 'home' })" src="~assets/ic_home_banner_logo2.png" alt="" />

				<img v-if="$route.name == 'search'" @click="$router.push({ name: 'home' })" src="~assets/ic_home_banner_logo2.png" alt="" />
				<div class="summary-title">
					<h3>我们，让空间更美好</h3>
					<p>BETTER SPACE,BETTER LIFE</p>
				</div>
			</div>

			<div class="nav">
				<ul>
					<template v-for="(item, index) in navList">
					<li
						v-if="item.nav_name!='首页'"
						:key="index"
						:class="rouertName == item.url ? 'active' : ''"
						@mouseover="item.active=true"
						@mouseout="item.active=false"
						@click="onJump(item.nav_id)"
					>
						{{ item.nav_name }}
						<b></b>
						<div class="nav-son" :class="{ active: item.active }" @click.stop v-if="item.children&&item.children.length!=0">
							<div v-for="(it, i) in item.children" :key="i" @click.stop="item.active = false;onJump(it.nav_id)" :style="{ 'animation-delay': 0.08 * i + 0.09 + 's' }">
								<span>
									<i>
										<img :src="web_url+it.nav_pic" alt="" />
									</i>
									{{ it.nav_name }}
								</span>
							</div>
						</div>
					</li>
					</template>
				</ul>
			</div>

			<div class="tel">
				<div>
					<i></i>
					{{$store.state.footData.tel}}
				</div>
				<i class="search" @click="searchFun()"></i>
				<i class="menu" @click="myNavFun()" @mouseenter="onMouseover($event)">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 24 24"
						style="enable-background:new 0 0 24 24;"
						xml:space="preserve"
					>
						<g id="_x31_">
							<path class="normal" d="M2,7c0,0,2.9-2.5,6.4-1.5c4,1.2,4.8,3.3,8.3,3.3c3.4,0,5.3-1.7,5.3-1.7" />
							<path class="normal" d="M2,13c0,0,2.9-2.5,6.4-1.5c4,1.2,4.8,3.3,8.3,3.3c3.4,0,5.3-1.7,5.3-1.7" />
							<path class="normal" d="M2,19c0,0,2.9-2.5,6.4-1.5c4,1.2,4.8,3.3,8.3,3.3c3.4,0,5.3-1.7,5.3-1.7" />
						</g>
					</svg>
				</i>
			</div>
		</div>
		<NavLists ref="myNav" />
		<Search ref="mySearch" />
	</div>
</template>

<script lang="ts">
import Header from './header';
export default Header;
</script>

<style scoped lang="scss">
.header {
	min-width: 1440PX;
	img {
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
	transition: background 0.6s;
	&::after {
		position: absolute;
		content: '';
		width: calc(100% - 22px);
		left: 50%;
		bottom: 1px;
		height: 1px;
		background: #fff;
		opacity: 0.2;
		transform: translateX(-50%);
	}
	> div.box {
		width: 1770px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		.logo {
			width: 22%;
			display: flex;
			align-items: center;
			img {
				width: 170px;
				height: 32px;
				cursor: pointer;
			}
			div {
				color: #fff;
				border-left: 1px solid rgba(255, 255, 255, 0.1);
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
					font-weight: 400;
					letter-spacing: 1px;
					white-space: nowrap;
					transform: scale(0.83);
    			transform-origin: left;
				}
			}
		}
		.nav {
			ul {
				display: flex;
				align-items: center;
				li {
					color: #ccc;
					font-size: 18px;
					font-weight: 400;
					width: 110px;
					height: 30px;
					line-height: 30px;
					position: relative;
					text-align: center;
					cursor: pointer;
					transition: color 0.3s;
					&:not(:last-child) {
						margin-right: 30px;
					}
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
						left: 0;
						top: 0;
						border-right: none;
						border-bottom: none;
					}
					&::before {
						right: 0;
						bottom: 0;
						border-top: none;
						border-left: none;
					}

					&.active {
						color: #fff;
						&::after,
						&::before {
							border: 2px solid #ed5400;
							width: 8px;
							height: 8px;
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
					&:hover {
						color: #fff;
						&::after,
						&::before {
							border: 2px solid #ed5400;
							width: 8px;
							height: 8px;
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
					.nav-son {
						display: flex;
						position: fixed;
						cursor: auto;
						left: 50%;
						transform: translateX(-50%);
						top: 111px;
						width: 1920px;
						min-width: 1440px;
						height: 110px;
						background: rgba(18, 33, 51, 0.85);
						align-items: center;
						justify-content: center;
						opacity: 0;
						// transition: opacity 0.3s;
						pointer-events: none;
						&.active {
							opacity: 1;
							pointer-events: auto;
							> div {
								opacity: 0;
								animation: fade-in 1.5s;
								animation-fill-mode: forwards;
							}
						}
						div {
							/* overflow: hidden; */
							&:not(:first-child) {
								margin-left: 90px;
							}
							span {
								color: #fff;
								font-size: 18px;
								display: block;
								width: 100%;
								text-align: center;
								cursor: pointer;
								line-height: 1;
								transition: color 0.3s;
								i {
									display: block;
									margin: 0 auto;
									width: 48px;
									height: 35px;
									margin-bottom: 15px;
									text-align: center;
									position: relative;
									img {
										max-width: 48px;
										margin: 0 auto;
										position: absolute;
										left: 50%;
										top: 50%;
										transform: translate(-50%,-50%);
									}
								}
							}
							&:hover {
								span {
									color: #ed5400;
									i{
											transition: all .4s;
											animation: bounce-up 1.5s linear infinite;
									}
								}
							}
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
									50%,100% {
										transform: rotate(0deg);
									}
						}


					b {
						position: absolute;
						width: 130%;
						height: 125px;
						top: 50%;
						transform: translateY(-50%);
						left: 0;
						z-index: 999;
					}
				}
			}
		}
		.tel {
			width: 22%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			div {
				display: flex;
				align-items: center;
				height: 13px;
				font-size: 18px;
				font-family: Gilroy;
				font-weight: bold;
				color: #ffffff;
				i {
					width: 24px;
					height: 24px;
					background: url('~assets/icons/ic_home_top_phone.png');
					background-size: 100% 100%;
					margin-right: 3px;
					transition: all 0.4s;
					animation: bounce-up 1.5s linear infinite;
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
			}
			.search {
				width: 24px;
				height: 24px;
				background: url('~assets/icons/ic_home_top_search.png');
				background-size: 100% 100%;
				margin-left: 46px;
				cursor: pointer;
				transition: transform 0.3s;
				&:hover {
					transform: scale(1.1);
				}
			}
			.menu {
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
						display: inline;
						fill: none;
						stroke: #ffffff;
						stroke-width: 1.8502;
						stroke-linecap: round;
						stroke-miterlimit: 10;
					}
				}
			}
		}
	}
	&.active {
		background: #fff;
		> div {
			.logo {
				div {
					color: #333333;
					border-left: #eee 1px solid;
				}
			}
			.nav {
				li {
					color: #000000 !important;
					&.active,
					&:hover {
						color: #ed5400 !important;
					}
				}
			}
			.tel {
				div {
					color: #333333;
				}
				.menu {
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
