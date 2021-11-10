<template>
	<div class="join-us">
		<banner :data="BannerData"></banner>
		<div class="page1">
			<div class="left">
				<h2>
					人才理念—
					<br />
					任人唯贤有为有位
				</h2>
				<h4>Talent concept</h4>
			</div>
			<div class="right">
				<p>选贤举能，贤者必上进,能者有前途。波涛引进德才兼备的贤者，为每一位真正能为企业发展做出贡献的员工提供尽情发挥的舞台,个人的付出和收获、能力和地位必定成正比</p>
				<Button :text="'加入我们'"></Button>
			</div>
		</div>
		<div class="swiper-box">
			<div class="control">
				<div class="swiper-pre ju-pre"></div>
				<div class="swiper-next ju-next"></div>
			</div>
			<swiper :options="jsBannerOptions">
				<swiper-slide v-for="(v, i) in imgList" :key="i">
					<div class="img-box">
						<img :src="v" alt="" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="xr">
			<div class="text-box">
				<h2>选人</h2>
				<h3>“有魂、有力、有激情”的三有新人</h3>
				<p>波涛是个充满无限可能的企业，而对于选用人才，坚持选用对自己的未来有明确目标和企图心的人才，梦想是目标、能力是支撑、激情是态度、准备是自信，波涛欢迎做好准备去迎接一切未知的挑战的人才</p>
				<Button :text="'加入我们'"></Button>
			</div>
			<div class="img-box">
				<img src="~assets/bg_f4_part3.jpg" alt="" />
			</div>
		</div>
		<div class="yongr">
			<div class="text-box">
				<h2>用人</h2>
				<h3>以德为先（德者先、能者上、庸者下）</h3>
				<p>
					以德为先是波涛一贯的用人理念，“德”体现的是一个人的心性和修养，“能”是指一个人的才能、能力，“庸”指懒惰、行动力极弱的人波涛重视有德的人，重用有才能的人,因为这样的人才会在团队的工作中发挥正面效果,而庸者必然会被淘汰
				</p>
				<Button :text="'加入我们'"></Button>
			</div>
			<div class="img-box">
				<img src="~assets/bg_f4_part4.jpg" alt="" />
			</div>
		</div>
		<div class="yur">
			<div class="text-box">
				<h2>育人</h2>
				<h3>递进培育（立足岗位、磨炼成才、精心培养、助推成长）</h3>
				<p>
					波涛要提升企业的综合实力，要求每一位员工都立足自己的岗位，将岗位作为自己的舞台，不断增强自己的经验、知识和技能，同时为员工提供层层递进的培训机会，挖掘员工的潜力，让其在实践中丰富自身经验，了解更多知识，提升个人的工作技能，助推人才成长
				</p>
				<Button :text="'加入我们'"></Button>
			</div>
			<div class="img-box">
				<img src="~assets/bg_f4_part5.jpg" alt="" />
			</div>
		</div>
		<div class="lr">
			<div class="text-box">
				<h2>留人</h2>
				<h3>共生共长（事业留人、发展留人、情感留人）</h3>
				<p>波涛重视员工个人价值的体现，让大家在为波涛工作的同时，个人事业有所成就、物质生活极大改善，营造一个有情感的大家庭，使大家在家的温情的感染下互相关心、互相支持、共同提高</p>
				<p>
					<span>事业留人</span>
					：波涛挖掘延伸装饰全产业链
					<br />
					为优秀的员工提供创业的机会和资源支持,实现共嬴
				</p>
				<p>
					<span>发展留人</span>
					：波涛为每一位员工提供岗位规划，制定明确的培训阶梯
					<br />
					让每个人能够深入挖掘自我潜能，在事业上获得成长展现价值
				</p>
				<p>
					<span>情感留人</span>
					：几十年的发展,波涛文化形成了有亲和力的家文化
					<br />
					相亲相爱，相互帮扶,波涛为家人们设立了爱心基金，以备不时之需
				</p>
				<Button :text="'加入我们'"></Button>
			</div>
			<div class="img-box">
				<img src="~assets/bg_f4_part6.jpg" alt="" />
			</div>
		</div>
		<div class="info">
			<h2>招聘信息</h2>
			<h3>recruitment information</h3>
			<ul>
				<li v-for="(v, i) in jobList" :key="i">
					<h2>{{ v.name }}</h2>
					<div class="icon">
						<i></i>
						<span>{{ v.time }}</span>
						<i></i>
						<span>{{ v.num }}</span>
					</div>
					<div class="bar"></div>
					<div class="require">岗位要求</div>
					<ul>
						<li v-for="(value, index) in v.require" :key="index">{{ value }}</li>
					</ul>
					<Button :text="'立即申请'"></Button>
				</li>
			</ul>
			<Button :text="'更多职位'"></Button>
			<h4>人力资源部</h4>
			<p>
				<i></i>
				13681921483（微信同号）
			</p>
			<p>
				<i></i>
				上海市徐汇区中山西路2331号 波涛装饰集团
			</p>
			<div>
				<div class="img-box">
					<img src="~assets/bg_home_footer_qa.jpg" alt="" />
				</div>
			</div>
			<p>扫码咨询</p>
		</div>
	</div>
</template>

<script lang="ts">
import JoinUs from './joinus';
export default JoinUs;
</script>

<style lang="scss">
.join-us {
		box-sizing: border-box;
	margin: 0 auto;
	width: 1916px;
	.page1 {
		display: flex;
		justify-content: space-between;
		padding: 120px 198px 0 196px;
		.left {
			h2 {
				font-size: 69px;
				color: #000000;
				line-height: 82px;
			}
			h4 {
				margin-top: 46px;
				font-size: 24px;
				font-family: Athene;
				color: #eb551c;
				line-height: 1;
			}
		}
		.right {
			p {
				margin-top: 55px;
				width: 570px;
				font-size: 20px;
				color: #666666;
				line-height: 40px;
			}
			.btn {
				margin: 0;
				margin-top: 92px;
			}
		}
	}
	.swiper-box {
		margin-top: 22px;
		.swiper-container {
			// overflow: visible !important;
			padding: 60px;
		}
		.swiper-slide {
			transition: all 0.3s;
			overflow: inherit;
		}
		.swiper-slide-active {
			transform: scale(1.1);
			.img-box {
				position: relative;
				img {
					position: absolute;
					z-index: 12;
				}
				&::before,
				&::after {
					position: absolute;
					content: '';
					width: 30px;
					height: 30px;
					border-left: 8px solid #eb551d;
					border-top: 8px solid #eb551d;
				}
				&::before {
					top: 22px;
					left: 22px;
				}
				&::after {
					bottom: 22px;
					right: 22px;
					transform: rotate(180deg);
				}
			}
		}
		.img-box {
			position: relative;
			height: 484px;
			img {
				position: absolute;
				z-index: -1 !important;
				width: 100%;
				height: 100%;
			}
		}
		.control {
			display: flex;
			margin-bottom: 162px;
			margin-left: 197px;
			> div {
				position: static;
				&:first-child {
					margin-right: 34px;
				}
			}
		}
	}
	.xr {
		display: flex;
		overflow: hidden;
		justify-content: space-between;
		margin-top: 228px;
		padding: 0 196px;
		.text-box {
			margin-top: 247px;
			h2 {
				font-size: 62px;
				color: #000000;
				line-height: 1;
			}
			h3 {
				margin-top: 31px;
				font-size: 30px;
				color: #ea551d;
				line-height: 1;
			}
			p {
				margin-top: 68px;
				margin-bottom: 102px;
				width: 650px;
				font-size: 20px;
				color: #666666;
				line-height: 40px;
			}
			.btn {
				margin: 0;
			}
		}
		.img-box {
			margin-top: 32px;
			margin-bottom: 119px;
			img {
				width: 653px;
				height: 779px;
			}
		}
	}
	.yongr {
		@extend .xr;
		margin-top: 0;
		flex-direction: row-reverse;
		.img-box {
			margin-bottom: 117px;
		}
		.text-box {
			text-align: right;
		}
	}
	.yur {
		@extend .xr;
		margin-top: 0;
	}
	.lr {
		@extend .xr;
		margin-top: 0;
		flex-direction: row-reverse;
		.img-box {
			margin-top: 31px;
			margin-bottom: 180px;
		}
		.text-box {
			margin-top: 31px;
			text-align: right;
			p {
				margin-bottom: 0;
				span {
					font-size: 20px;
					color: #000;
				}
				&:not(:first-of-type) {
					margin-top: 28px;
				}
			}
			.button-wrap {
				margin-top: 69px;
				display: flex;
				justify-content: flex-end;
			}
		}
	}
	.info {
		padding: 100px 196px 103px 196px;
		background-color: #f6f6f6;
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
			margin-top: 25px;
			font-size: 24px;
			font-family: Athene;
		}
		> ul {
			margin-top: 98px;
			display: flex;
			flex-wrap: wrap;
			> li {
				padding: 49px 28px 50px;
				background-color: #fff;
				h2 {
					text-align: start;
					font-size: 30px;
					line-height: 1;
				}
				.icon {
					margin-top: 20px;
					display: flex;
					i {
						display: inline-block;
						margin-right: 10px;
						vertical-align: middle;
						width: 20px;
						height: 20px;
						background: url(~assets/icons/ic_clock.png) no-repeat;
						background-size: 100%;
					}
					span {
						font-size: 18px;
						line-height: 25px;
						color: #333333;
						&:first-of-type {
							margin-right: 44px;
						}
						&:nth-of-type(2) {
							line-height: 1;
							font-size: 20px;
							color: #000;
						}
					}
				}
				.bar {
					margin-top: 40px;
					width: 427px;
					height: 1px;
					background: #333333;
					opacity: 0.2;
				}
				.require {
					margin-top: 48px;
					font-size: 16px;
					color: #999999;
					line-height: 1;
				}
				> ul {
					min-height: 210px;
					margin-top: 15px;
					li {
						width: 435px;
						font-size: 16px;
						color: #666666;
						line-height: 30px;
					}
				}
				.button-wrap {
					margin-top: 55px;
					.btn {
						margin: 0;
						background-color: #fff;
						border: 2px solid #eb551d;
						color: #eb551d;
						text-shadow: none;
						&::after,
						&::before {
							border-color: #eb551d;
						}
					}
				}
				&:not(:nth-child(3n)) {
					margin-right: 25px;
				}
				&:not(:nth-last-child(-n + 3)) {
					margin-bottom: 30px;
				}
			}
		}
		> .button-wrap {
			margin-top: 69px;
		}
		h4 {
			margin-top: 103px;
			text-align: center;
			font-size: 34px;
			line-height: 1;
		}
		p {
			margin-top: 70px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24px;
			line-height: 1;
			i {
				margin-right: 10px;
				width: 16px;
				height: 16px;
				background: url(~assets/icons/ic_f4_phone.png) no-repeat;
				background-size: 100%;

			}
			&:nth-of-type(1){
				i{
				}
			}
			&:nth-of-type(2) {
				margin-top: 27px;
				i {
					width: 18px;
					height: 21px;
					background-image: url(~assets/icons/ic_f4_location.png);
				}
			}
			&:last-of-type {
				margin-top: 33px;
				font-size: 16px;
				color: #666666;
			}
		}
		.img-box {
			margin: 0 auto;
			margin-top: 53px;
			display: flex;
			width: 128px;
			height: 128px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.button-wrap{
		.btn{
			background-color: #EB551D;
		}
	}
}
</style>
