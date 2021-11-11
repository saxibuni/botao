<template>
	<div class="whole-decoration">
		<!-- <Banner :data='banner'></Banner> -->
		<div class="page1">
			<img src="~assets/bg_e1_banner_right.jpg" alt="" />
			<div class="text">
				<h2>全案整改</h2>
				<p>Whole case assembly</p>
			</div>
			<img class="mask" src="~assets/bg_e1_banner_left.png" alt="" />
		</div>
		<div class="page2">
			<h2 class="wow">服务流程</h2>
			<p class="wow">Service process</p>
			<div class="part">
				<ul>
					<li v-for="(item, i) in list" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
						<h2 @mouseover="onClick(i)">
							{{ i + 1 }}
							<i :class="{active:item.active}">
								<b>
									<img :src="item.imgUrl" alt="" />
								</b>
							</i>
						</h2>
						<p :class="{ active: item.active }">{{ item.title }}</p>
						<h3 :class="{ active: item.active }">{{ item.text }}</h3>
					</li>
				</ul>
			</div>
		</div>
		<div class="page3">
			<h2 class="wow">服务团队</h2>
			<p class="wow">Service team</p>
			<ul>
				<li class="wow">
					<div class="icon">
						<i></i>
					</div>
					<div class="text">
						<h4>设计服务</h4>
						<p>预算师</p>
						<p>设计师</p>
						<p>设计助理</p>
						<p>中心经理</p>
						<p>效果图设计师</p>
					</div>
				</li>

				<li class="wow">
					<div class="icon"></div>
					<div class="text">
						<h4>软装服务</h4>
						<p>软装设计师</p>
						<p>软装设计助理</p>
						<p>软装品控员</p>
					</div>
				</li>

				<li class="wow">
					<div class="icon"></div>
					<div class="text">
						<h4>工程服务</h4>
						<p>施工人员</p>
						<p>项目经理、土建项目经理</p>
						<p>施工专员、土建专员</p>
						<p>工程主管</p>
						<p>工程总监</p>
					</div>
				</li>
				<li class="wow">
					<div class="icon"></div>
					<div class="text">
						<h4>客服服务</h4>
						<p>客服总监</p>
						<p>饰中专员</p>
						<p>饰后专员</p>
						<p>维修人员</p>
					</div>
				</li>
				<li class="wow">
					<div class="icon"></div>
					<div class="text">
						<h4>配套服务</h4>
						<p>预算造价师</p>
						<p>园林设计师</p>
						<p>设备工程师</p>
						<p>灯光设计师</p>
						<p>智能工程师</p>
					</div>
				</li>
				<li class="wow">
					<div class="icon"></div>
					<div class="text">
						<h4>材料服务</h4>
						<p>主材材料管家</p>
						<p>辅材材料管家</p>
						<p>软装产品管家</p>
						<p>材料商客户经理</p>
					</div>
				</li>
				<li class="wow">
					<div class="icon"></div>
					<div class="text">
						<h4>质检服务</h4>
						<p>质检总监</p>
						<p>质检员</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="page4">
			<h2 class="wow">如何合理规划大宅别墅装修费用？</h2>
			<p class="wow">Villa decoration cost</p>

			<ul>
				<li class="wow">
					<div>
						<span>设计</span>
						<img src="~assets/icons/ic_e1_part4_01.png" alt="" />
					</div>
					<p>平面规划、效果图、施工图、设计跟踪、现场交底</p>
				</li>
				<li class="wow">
					<div>
						<span>土建</span>
						<img src="~assets/icons/ic_e1_part4_02.png" alt="" />
					</div>
					<p>外部改造、内部改造</p>
				</li>
				<li class="wow">
					<div>
						<span>基础装修</span>
						<img src="~assets/icons/ic_e1_part4_03.png" alt="" />
					</div>
					<p>基础功能装修、设计造型装修、管理费用</p>
				</li>
				<li class="wow">
					<div>
						<img src="~assets/icons/ic_e1_part4_04.png" alt="" />
						<span>主材</span>
					</div>
					<p>
						卫浴洁具(龙头.花洒、台盆.座便器、淋浴房.浴缸) 厨电、地板、墙地砖、大理石、楼梯 木作(橱柜、衣柜、护墙板.机门窗套、软硬包) 门窗(进户门、阳光房.封窗)
						其他(集成吊顶.配电箱.空气开关、开关插座、不锈钢)
					</p>
				</li>
				<li class="wow">
					<div>
						<img src="~assets/icons/ic_e1_part4_05.png" alt="" />
						<span>智能/设备</span>
					</div>
					<p>中央空调、新风系统、五恒系统、中央水处理、 地采暖、中央吸尘、电梯、光伏系统、电渗透防潮系统、园林 防蚊系统、智能灯光系统、智能安防系统、电器控制系统、 电动窗帘系统、影音系统</p>
				</li>
				<li class="wow">
					<div>
						<img src="~assets/icons/ic_e1_part4_06.png" alt="" />
						<span>软装</span>
					</div>
					<p>家具、灯具、窗帘、地毯、挂画、饰品、壁布、绿植</p>
				</li>
			</ul>
		</div>
		<div class="page5">
			<h2 class="wow">
				选择波涛装饰 · 选择一生一
				<span>“饰”</span>
			</h2>
			<p class="wow">After-sales service</p>
			<div>
				<div class="wow">
					<h1>曾经·你是这样装修的</h1>
					<p>需要132个人前后打交道</p>
					<p>需要为联系各自事宜打326个电话</p>
					<p>需要选购28种辅材、10种大件主材、80余件软装</p>
					<p>需要去5个装饰城奔波68次</p>
					<p>需要为可能的5%折扣去低声下气，</p>
					<p>需要了解35项基础工程</p>
					<p>需要在工地上待180天</p>
					<h3>以1敌10! 工期慢! 售后无保障.. ..焦头烂额!</h3>
				</div>
				<div class="wow">
					<h1>现在·金管家全程服务</h1>
					<p>管家式专人服务，替您解决一切问题</p>
				</div>
			</div>
			<ul>
				<li class="wow">
					<div class="icon"></div>
					<h2>
						水电隐蔽工程
						<br />
						终身免费保修
					</h2>
				</li>

				<li class="wow">
					<div class="icon"></div>
					<h2>
						饰后满三年
						<br />
						家居免费保养
					</h2>
				</li>

				<li class="wow">
					<div class="icon"></div>
					<h2>
						硬装工程
						<br />
						2年免费保修
					</h2>
				</li>

				<li class="wow">
					<div class="icon"></div>
					<h2>
						24小时
						<br />
						解决报修服务
					</h2>
				</li>
				<li class="wow">
					<div class="icon"></div>
					<h2>
						终身定期
						<br />
						上门检修回访
					</h2>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import WholeDecoration from './wholedecoration';
export default WholeDecoration;
</script>

<style lang="scss">
.whole-decoration {
	box-sizing: border-box;
	width: 1920px;
	margin: 0 auto;
	img {
		display: block;
	}
	.page1 {
		height: 970px;
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
		.mask {
			position: absolute;
			left: 0;
			top: 0;
			width: auto;
			height: 100%;
		}
		.text {
			position: absolute;
			left: 80px;
			top: 428px;
			z-index: 2;
			h2 {
				height: 59px;
				font-size: 62px;
				font-weight: 400;
				color: #ffffff;
				line-height: 55px;
			}
			p {
				height: 28px;
				font-size: 32px;
				font-family: Athene;
				font-weight: 400;
				color: #ffffff;
				margin-top: 23px;
				text-transform: uppercase;
			}
		}
	}
	.page2 {
		padding: 98px 0 0 0;
		height: 969px;
		position: relative;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-family: AlibabaPuHuiTiM;
			font-weight: 400;
			color: #000000;
			text-align: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #000000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		.part {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 588px;
			background: url('~assets/bg_e1_part2.png') center center;
			background-size: cover;
			ul {
				li {
					width: 160px;
					position: absolute;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					opacity: 0;
					animation: fade-in 1s;
					animation-fill-mode: forwards;
					h2 {
						width: 25px;
						height: 25px;
						background: #ffffff;
						border: 2px solid #eb551d;
						border-radius: 50%;
						text-align: center;
						line-height: 20px;
						font-size: 16px;
						font-family: Gilroy-Bold;
						font-weight: bold;
						color: #eb551d;
						margin-bottom: 22px;
						cursor: pointer;
						position: relative;
						i {
							&.active{
								transform: translate(-50%, -50%) scale(1);
							}
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translate(-50%, -50%) scale(0);
							transition: transform .3s;
							width: 110px;
							height: 110px;
							border: 1px solid rgba(235, 85, 29, 0.2);
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							b {
								width: 92px;
								height: 92px;
								background: #eb551d;
								border-radius: 50%;
								display: flex;
								align-items: center;
								justify-content: center;
								img {
									width: 41px;
								}
							}
						}
					}
					p {
						width: 100%;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						line-height: 1;
						text-align: center;
						transition: .3s;
						&.active {
							font-size: 24px;
							margin-top: 40px;
						}
					}
					h3 {
						width: 268px;
						font-size: 18px;
						font-weight: 400;
						color: #ffffff;
						line-height: 36px;
						margin-top: 24px;
						position: absolute;
						top: 100%;
						left: 50%;
						transform: translateX(-50%) scale(0);
						overflow: hidden;
						text-align: center;
						transition:transform .3s;
						pointer-events: none;
						transform-origin: top;
						&.active{
							transform: translateX(-50%) scale(1);
						}
					}
					&:nth-child(1) {
						top: 111px;
						left: 0;
						h3 {
							left: 0;
							transform: translateX(0) scale(0);
							&.active{
									transform: translateX(0) scale(1);
							}
						}
					}
					&:nth-child(2) {
						top: 71px;
						left: 120px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(3) {
						top: 164px;
						left: 196px;
					}
					&:nth-child(4) {
						top: 44px;
						left: 288px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(5) {
						top: 106px;
						left: 388px;
					}
					&:nth-child(6) {
						top: 39px;
						left: 521px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(7) {
						top: 125px;
						left: 600px;
					}
					&:nth-child(8) {
						top: 31px;
						left: 736px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(9) {
						top: 125px;
						left: 838px;
					}
					&:nth-child(10) {
						top: -12px;
						left: 928px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(11) {
						top: 71px;
						left: 1035px;
					}
					&:nth-child(12) {
						top: 35px;
						left: 1188px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}

					&:nth-child(13) {
						top: 125px;
						left: 1287px;
					}

					&:nth-child(14) {
						top: 39px;
						left: 1395px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}

					&:nth-child(15) {
						top: 66px;
						left: 1529px;
					}

					&:nth-child(16) {
						top: 24px;
						left: 1651px;
						h2 {
							margin-bottom: 0;
						}
						p {
							color: #132132;
							position: absolute;
							top: -40px;
							left: 0;
						}
					}
					&:nth-child(17) {
						top: 103px;
						left: 1761px;
						h3 {
							right: 0;
							left: auto;
							transform: translateX(0) scale(0);
							&.active{
									transform: translateX(0) scale(1);
							}
						}
					}

					&:nth-child(2),
					&:nth-child(4),
					&:nth-child(6),
					&:nth-child(8),
					&:nth-child(10),
					&:nth-child(12),
					&:nth-child(14),
					&:nth-child(16) {
						p {
							&.active {
								margin-top: -50px;
							}
						}
						h3 {
							width: 350px;
							position: absolute;
							bottom: 500%;
							top: auto;
							color: #333;
						}
					}
				}
			}
		}
	}
	.page3 {
		height: 970px;
		padding: 100px 0 0 0;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-family: AlibabaPuHuiTiM;
			font-weight: 400;
			color: #000000;
			text-align: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #000000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		ul {
			display: flex;
			flex-wrap: wrap;
			margin-top: 68px;
			padding: 0 0 0 80px;
			background: url('~assets/bg_e1_part3.png') no-repeat 0 center;
			background: 100% auto;
			li {
				display: flex;
				height: 305px;
				border-left: 1px solid #dddddd;
				padding-left: 36px;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				&:nth-child(1) {
					animation-delay: .1s;
					width: 480px;
					padding-top: 10px;
					.icon {
						background: url('~assets/icons/ic_e1_part3_a1.png') no-repeat center center;
						&:hover {
							background: #eb551d url('~assets/icons/ic_e1_part3_a2.png') no-repeat center center;
						}
					}
				}
				&:nth-child(2) {
					animation-delay: .2s;
					padding-top: 10px;
					width: 504px;
					.icon {
						background: url('~assets/icons/ic_e1_part3_b1.png') no-repeat center center;
						&:hover {
							background: #eb551d url('~assets/icons/ic_e1_part3_b2.png') no-repeat center center;
						}
					}
				}
				&:nth-child(3) {
					animation-delay: .3s;
					padding-top: 10px;
					width: 492px;
					.icon {
						background: url('~assets/icons/ic_e1_part3_c1.png') no-repeat center center;
						&:hover {
							background: #eb551d url('~assets/icons/ic_e1_part3_c2.png') no-repeat center center;
						}
					}
				}
				&:nth-child(4) {
					animation-delay: .4s;
					padding-top: 10px;
					width: 350px;
					.icon {
						background: url('~assets/icons/ic_e1_part3_d1.png') no-repeat center center;
						&:hover {
							background: #eb551d url('~assets/icons/ic_e1_part3_d2.png') no-repeat center center;
						}
					}
				}
				&:nth-child(5) {
					animation-delay: .5s;
					width: 480px;
					margin-left: 240px;
					padding-top: 58px;
					.icon {
						background: url('~assets/icons/ic_e1_part3_e1.png') no-repeat center center;
						&:hover {
							background: #eb551d url('~assets/icons/ic_e1_part3_e2.png') no-repeat center center;
						}
					}
				}
				&:nth-child(6) {
					padding-top: 58px;
					animation-delay: .6s;
					width: 480px;
					.icon {
						background: url('~assets/icons/ic_e1_part3_f1.png') no-repeat center center;
						&:hover {
							background: #eb551d url('~assets/icons/ic_e1_part3_f2.png') no-repeat center center;
						}
					}
				}
				&:nth-child(7) {
					padding-top: 58px;
					width: 479px;
					animation-delay: .7s;
					.icon {
						background: url('~assets/icons/ic_e1_part3_g1.png') no-repeat center center;
						&:hover {
							background: #eb551d url('~assets/icons/ic_e1_part3_g2.png') no-repeat center center;
						}
					}
				}
				.icon {
					width: 100px;
					height: 100px;
					border: 2px solid rgba(235, 85, 29, 0.5);
					border-radius: 50%;
					margin-right: 32px;
					cursor: pointer;
				}
				.text {
					h4 {
						font-size: 24px;
						font-weight: 400;
						color: #000000;
						margin-bottom: 18px;
						margin-top: 10px;
					}
					p {
						font-size: 18px;
						font-weight: 400;
						color: #333333;
						line-height: 34px;
					}
				}
			}
		}
	}
	.page4 {
		height: 970px;
		padding: 100px 0 0 0;
		background: #eb551d url('~assets/bg_e1_part4b.jpg') no-repeat;
		background-size: 100% 100%;
		position: relative;
		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #fff;
			text-align: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #fff;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		ul {
			li {
				position: absolute;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				div {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					margin-bottom: 43px;
					img {
						width: 41px;
						margin-left: 20px;
					}
					span {
						font-size: 30px;
						font-weight: 400;
						color: #ffffff;
					}
				}
				p {
					font-size: 18px;
					font-weight: 400;
					color: #eeeeee;
					line-height: 1;
					text-align: right;
					padding-right: 65px;
				}
				&:nth-child(1) {
					top: 251px;
					left: 0;
					width: 675px;
					animation-delay: .2s;
					div {
						margin-bottom: 36px;
						img {
							width: 41px;
						}
					}
				}
				&:nth-child(2) {
					top: 461px;
					width: 675px;
					left: 0;
					animation-delay: .6s;
					div {
						img {
							width: 45px;
						}
					}
				}
				&:nth-child(3) {
					top: 683px;
					width: 675px;
					left: 0;
					animation-delay: 1s;
					div {
						img {
							width: 34px;
						}
					}
					p {
						padding-right: 58px;
					}
				}

				&:nth-child(4) {
					top: 251px;
					right: 0;
					width: 622px;
					animation-delay: .4s;
					div {
						margin-bottom: 25px;
						justify-content: start;
						img {
							width: 34px;
							margin-right: 20px;
							margin-left: 0;
						}
					}
					p {
						text-align: left;
						line-height: 34px;
						padding-left: 54px;
						width: 490px;
					}
				}

				&:nth-child(5) {
					top: 524px;
					right: 0;
					animation-delay: .8s;
					width: 622px;
					div {
						margin-bottom: 25px;
						justify-content: start;
						img {
							width: 34px;
							margin-right: 20px;
							margin-left: 0;
						}
					}
					p {
						text-align: left;
						padding-left: 54px;
						line-height: 34px;
						width: 520px;
					}
				}
				&:nth-child(6) {
					top: 777px;
					right: 0;
					animation-delay: 1.2s;
					width: 622px;
					div {
						justify-content: start;
						margin-bottom: 25px;
						img {
							width: 40px;
							margin-right: 20px;
							margin-left: 0;
						}
					}
					p {
						text-align: left;
						padding-left: 54px;
						line-height: 34px;
					}
				}
			}
		}
	}
	.page5 {
		padding: 100px 0 110px 0;

		> h2 {
			height: 46px;
			font-size: 48px;
			font-weight: 400;
			color: #000;
			text-align: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			span {
				color: rgba(235, 85, 29, 1);
			}
		}
		> p {
			font-family: Athene;
			text-transform: uppercase;
			height: 21px;
			font-size: 24px;
			font-family: Athene;
			font-weight: 400;
			color: #000;
			text-align: center;
			margin-top: 24px;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		> div {
			background: url('~assets/bg_e1_part5.jpg') center center;
			background-size: 100% 100%;
			display: flex;
			height: 620px;
			width: 1760px;
			margin: 60px auto 0 auto;
			> div {
				width: 50%;
				height: 620px;
				&:nth-child(1) {
					opacity: 0;
					animation: slide-down-in 1s, fade-in 1s;
					animation-fill-mode: forwards;
					padding: 90px 0 0 102px;
					h1 {
						font-size: 36px;
						font-weight: 400;
						font-style: italic;
						color: #132132;
						margin-bottom: 15px;
					}
					p {
						font-size: 18px;
						font-weight: 400;
						color: #666666;
						line-height: 44px;
						display: flex;
						align-items: center;
						&::before {
							content: 'x';
							opacity: 0.2;
							color: rgba(19, 33, 50, 1);
							margin-right: 22px;
							font-size: 12px;
						}
					}
					h3 {
						height: 23px;
						font-size: 24px;
						font-weight: 400;
						color: #eb551d;
						line-height: 44px;
						margin-top: 20px;
					}
				}
				&:nth-child(2) {
					position: relative;
					opacity: 0;
					animation: slide-down-in 1.5s, fade-in 1.5s;
					animation-fill-mode: forwards;
					h1 {
						position: absolute;
						height: 35px;
						font-size: 36px;
						font-weight: 400;
						font-style: italic;
						color: #ffffff;
						top: 90px;
						left: 448px;
					}
					p {
						position: absolute;
						top: 498px;
						height: 24px;
						font-size: 24px;
						font-weight: 400;
						color: #ffffff;
						line-height: 44px;
						left: 404px;
					}
				}
			}
		}
		> ul {
			display: flex;
			width: 1760px;
			height: 425px;
			background: #e84e14;
			margin: 0 auto;
			padding-top: 121px;
			li {
				width: 20%;
				opacity: 0;
				animation: fade-in 1s;
				animation-fill-mode: forwards;
				.icon {
					width: 89px;
					height: 89px;
					border: 2px solid #ffffff;
					margin: 0 auto;
				}
				h2 {
					margin-top: 35px;
					text-align: center;
					font-size: 24px;
					font-weight: 400;
					color: #ffffff;
					line-height: 36px;
				}
				&:nth-child(1) {
					animation-delay: .1s;
					.icon {
						background: url('~assets/icons/ic_e1_part5_1.png') no-repeat center center;
					}
				}

				&:nth-child(2) {
					animation-delay: .2s;
					.icon {
						background: url('~assets/icons/ic_e1_part5_2.png') no-repeat center center;
					}
				}

				&:nth-child(3) {
					animation-delay: .3s;
					.icon {
						background: url('~assets/icons/ic_e1_part5_3.png') no-repeat center center;
					}
				}

				&:nth-child(4) {
					animation-delay: .4s;
					.icon {
						background: url('~assets/icons/ic_e1_part5_4.png') no-repeat center center;
					}
				}

				&:nth-child(5) {
					animation-delay: .5s;
					.icon {
						background: url('~assets/icons/ic_e1_part5_5.png') no-repeat center center;
					}
				}
			}
		}
	}
}
</style>
