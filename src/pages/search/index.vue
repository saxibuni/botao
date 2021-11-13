<template>
	<div class="search-box">
		<div class="top-box">
			<div>
				<h1>搜索结果</h1>
				<h2>SEARCH RESULTS</h2>
				<div>
					<i @click="onSearch()"></i>
					<input type="text" v-model="keyword" @keyup.13="onSearch()" placeholder="请输入搜索内容" />
				</div>
				<p>
					以为您找到
					<span>8</span>
					条符合的结果
				</p>
			</div>
		</div>
		<div class="page1">
			<h2>精选案例</h2>
			<p>经典案例 筑梦幸福家</p>
			<div class="cases">
				<Cases v-for="i in 3" :key="i" />
			</div>
			<div class="line"></div>
		</div>

		<div class="page2">
			<h2>设计名人堂</h2>
			<p>100+ 位别墅大宅设计大咖</p>

			<div class="content">
				<ul>
					<li v-for="i in 4" :key="i" @click="$router.push('/design/detail')">
						<div class="imgBox">
							<img src="~assets/bg_c1_pic01.jpg" alt="" />
							<div class="text">
								<p>于一</p>
								<p>设计总监 &nbsp;|&nbsp; 15年经验</p>
							</div>
						</div>
						<div class="text">
							<p>代表作品</p>
							<p>嘉怡水岸、三林新村、华侨城、两河流域...</p>
							<Button :text="'了解设计师'" />
						</div>
					</li>
				</ul>
			</div>

			<div class="line"></div>
		</div>

		<div class="page3">
			<h2>最新资讯</h2>
			<p>快速了解最新装修攻略和活动</p>
			<div class="list-box">
				<ul class="list wow">
					<li v-for="(v, i) in list" :style="{ 'animation-delay': 0.5 * i + 1 + 's' }" :key="i">
						<div class="img-box">
							<img :src="v.imgUrl" alt="" />
						</div>
						<div class="info-box">
							<div class="date">{{ v.date }}</div>
							<h4 class="title">{{ v.title }}</h4>
							<p>{{ v.text }}</p>
							<div class="more" @click="$router.push({ name: 'strategy-detail' })" @mouseenter="addClass(i, '.list')" @mouseleave="removeClass(i, '.list')">
							More
							<span></span>
						</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Cases from '../case/components/cases.vue';
import Button from 'root/components/button.vue';

@Component({
	components: {
		Cases,
		Button
	}
})
export default class Search extends Vue {
	keyword='';
	list = [
		{
			imgUrl: require('../../assets/s_1.jpg'),
			date: '2021,Auguset,10',
			title: '别再傻了，为什么好看的客厅都是别家的？',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_2.jpg'),
			date: '2021,Auguset,10',
			title: '茶室不配"色"？装修完，真香！',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		},
		{
			imgUrl: require('../../assets/s_3.jpg'),
			date: '2021,Auguset,10',
			title: '大宅里的那些烦心事儿',
			text: '俗话说硬装为骨，软装为魂色彩作为软装设计的精髓，就足以让家居空间出彩，客厅作为待客的门面'
		}
	];
		addClass(i,dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('li');

		lis[i].classList.add('hover');
	}
	removeClass(i,dom) {
		const father = document.querySelector<HTMLElement>(dom);
		const lis = father.querySelectorAll<HTMLElement>('li');
		for (let i = 0; i < lis.length; i++) {
			lis[i].classList.remove('hover');
		}
	}
	onSearch() {
		if (!this.keyword) {
			this.$store.state.dialog={
				state:2,
				text:'请输入需要搜索的内容'
			}
			return;
		}
	}
}
</script>
<style scoped lang="scss">
.search-box {
	max-width: 1920px;
	margin: 0 auto;
	padding-top: 112px;
	@mixin info {
		h4 {
			margin-top: 14px;
			font-size: 26px;
			font-weight: 400;
			color: #eb551c;
			line-height: 1;
		}
		p {
			margin-top: 23px;
			margin-bottom: 60px;
			font-size: 18px;
			font-weight: 400;
			line-height: 30px;
		}
		.date {
			line-height: 1;
			font-size: 16px;
		}
		.more {
			font-size: 18px;
			font-weight: 700;
			cursor: pointer;
			span {
				top: 50%;
				margin-left: 10px;
				display: inline-block;
				width: 10px;
				height: 10px;
				border-bottom: 1px solid #ed5300;
				border-right: 1px solid #ed5300;
				transform: rotate(-45deg);
				transition: all.3s;
			}
			&:hover span {
				margin-left: 20px;
				transform: rotate(-45deg) scale(1.1);
			}
		}
	}
	@mixin bigImg {
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			transition: all 0.3s;
		}
		&:hover img {
			transform: scale($imgScale);
		}
	}
	.top-box {
		padding-top: 100px;
		height: 440px;
		background: url('~assets/bg_h1_search.jpg') center center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		h1 {
			height: 53px;
			font-size: 56px;
			font-weight: 400;
			color: #000000;
		}
		h2 {
			font-size: 30px;
			font-family: Athene;
			font-weight: 400;
			color: #000000;
			margin: 24px 0 40px 0;
		}
		div{
			margin: 0 auto;
			width: 600px;
			position: relative;
			input {
				display: block;
				margin: 0 auto;
				width: 600px;
				height: 50px;
				border: 1px solid #ed5400;
				font-size: 18px;
				padding-left: 35px;
				background: transparent;
				padding-right: 90px;
			}
		 	i{
				 position: absolute;
				 right: 0;
				 top: 0;
				 width: 73px;
				 height: 100%;
				 z-index: 3;
				 cursor: pointer;
				 background:  url(~assets/icons/ic_home_top_search.png) no-repeat center center;
			   background-size: 24px 24px;
				 &:hover{
					 transform: scale(1.1);
				 	 transition: transform .3s;
				 }
			}
		}
		p {
			font-size: 18px;
			font-weight: 400;
			color: #888888;
			margin-top: 26px;
			span {
				font-size: 20px;
				font-family: Gilroy-Bold;
				color: rgba(237, 84, 0, 1);
			}
		}
	}
	.page1 {
		padding: 99px 80px 0 80px;
		> h2 {
			font-size: 50px;
			font-weight: 400;
			color: #000000;
		}
		> p {
			height: 20px;
			font-size: 20px;
			font-weight: 400;
			color: #666666;
			margin: 20px 0 58px 0;
		}
		.cases {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.line {
			margin-top: 100px;
			border-bottom: 1px solid rgba(234, 234, 234, 1);
		}
	}
	.page2 {
		padding: 99px 80px 0 80px;
		> h2 {
			font-size: 50px;
			font-weight: 400;
			color: #000000;
		}
		> p {
			height: 20px;
			font-size: 20px;
			font-weight: 400;
			color: #666666;
			margin: 20px 0 58px 0;
		}
		.content {
			margin-top: 80px;
			ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				li {
					margin-bottom: 40px;
					width: 410px;
					cursor: pointer;
					.imgBox {
						position: relative;
						width: 410px;
						height: 500px;
						overflow: hidden;
						background: url('~assets/bg_c1_pic_mask.png') no-repeat;
						background-position: bottom;
						&:hover {
							img {
								transform: scale($imgScale);
							}
						}
						img {
							width: 100%;
							height: 500px;
							position: relative;
							z-index: -1;
							transition: transform 0.3s;
						}
						.text {
							position: absolute;
							bottom: 40px;
							left: 40px;
							p {
								&:nth-of-type(1) {
									font-size: 32px;
									color: #ffffff;
								}
								&:nth-of-type(2) {
									margin-top: 10px;
									font-size: 18px;
									color: #fefefe;
								}
							}
						}
					}
					> .text {
						padding: 39px 0 0 39px;
						width: 410px;
						height: 242px;
						box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.05);
						p {
							font-size: 18px;
							&:nth-of-type(1) {
								color: #333333;
								// font-weight: 600;
							}
							&:nth-of-type(2) {
								margin-top: 20px;
								color: #666666;
								@include line-clamp(1);
							}
						}
						.button-wrap {
							margin-top: 39px;
							width: 170px;
							.btn {
								margin: 0;
							}
						}
					}
				}
			}
		}
		.line {
			margin-top: 100px;
			border-bottom: 1px solid rgba(234, 234, 234, 1);
		}
	}
	.page3 {
		padding: 99px 80px;
		> h2 {
			font-size: 50px;
			font-weight: 400;
			color: #000000;
		}
		> p {
			height: 20px;
			font-size: 20px;
			font-weight: 400;
			color: #666666;
			margin: 20px 0 58px 0;
		}
		.list-box {
			.list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				li {
					background-color: #fff;

box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.05);
					.img-box {
						width: 570px;
						height: 362px;
						@include bigImg();
					}
					@include info();

					.info-box {
						box-sizing: border-box;
						padding: 41px 0 50px 39px;
						width: 100%;
						.date {
							color: #888;
						}
						h4 {
							color: #000;
							transition: all 0.3s;
						}
						p {
							width: 490px;
							color: #666;
						}
					}
					&:nth-child(n + 4) {
						margin-top: 50px;
					}
					.more {
						transition: all 0.3s;
					}
					&.hover {
						.title {
							color: #eb551c;
						}
						.img-box {
							img {
								transform: scale($imgScale);
							}
						}
						.more {
							color: #eb551c !important;
						}
					}
				}
			}
		}
	}
}
</style>
