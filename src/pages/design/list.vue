<template>
	<div class="design-list">
		<div class="title">
			<div class="left">
				<h3>
					<span>100+</span>
					位别墅大宅设计大咖
				</h3>
				<p>VILLA MANSION DESIGN TYCOON</p>
			</div>
			<div class="right">
				<div class="search">
					<input type="text" />
					<i></i>
				</div>
				<p>
					您可能感兴趣的设计师:
					<span>陆靖浩</span>
					<span>周芳乐</span>
					<span>喻勤</span>
					<span>于一</span>
				</p>
			</div>
		</div>
		<div class="tabs">
			<div class="tabsList">
				<p>设计师级别</p>
				<ul>
					<li>全部</li>
					<li>总监设计师</li>
					<li>首席设计师</li>
					<li>设计师</li>
				</ul>
			</div>
		</div>
		<div class="content">
			<ul>
				<li v-for="i in 12" :key="i">
					<div class="imgBox">
						<img src="~assets/bg_home_b3_pic17.jpg" alt="" />
						<div class="text">
							<p>于一</p>
							<p>设计总监 | 15年经验</p>
						</div>
					</div>
					<div class="text">
						<p>代表作品</p>
						<p>嘉怡水岸、三林新村、华侨城、两河流域...</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import DesignList from './list';
export default DesignList;
</script>

<style lang="scss">
.design-list {
	padding: 0 80px;
	.title {
		display: flex;
		justify-content: space-between;
		margin-top: 90px;
		.left {
			h3 {
				font-family: Gilroy-Bold;
				font-size: 56px;
				font-weight: bold;
				span {
					color: #ed5400;
				}
			}
			p {
				font-size: 30px;
				font-family: Athene;
				font-weight: 400;
				color: #010000;
				margin-top: 20px;
			}
		}
		.right {
			margin-top: 10px;
			.search {
				position: relative;
				width: 550px;
				height: 60px;
				input {
					position: absolute;
					top: 0;
					width: 550px;
					height: 60px;
					border: 1px solid #ed5400;
					outline: none;
					font-size: 20px;
				}
				i {
					position: absolute;
					right: 30px;
					top: 50%;
					transform: translateY(-50%);
					width: 18px;
					height: 18px;
					background: url('~assets/icons/bg_b1_part1_search.png') no-repeat;
					background-size: 100% 100%;
				}
			}
			p {
				font-size: 16px;
				color: #999999;
				margin-top: 29px;
				span {
					color: #333333;
					margin-right: 20px;
				}
			}
		}
	}
	.tabs {
		margin-top: 50px;
		.tabsList {
			display: flex;
			height: 76px;
			align-items: center;
			border-bottom: 1px solid #ececec;
			p {
				font-size: 20px;
				font-weight: 400;
				color: #000000;
				margin-right: 40px;
			}
			ul {
				display: flex;
				li {
					margin-right: 20px;
					font-size: 18px;
					color: #666666;
					padding: 11px 24px;
					margin-right: 20px;
				}
			}
		}
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
				.imgBox {
					position: relative;
					width: 410px;
					height: 500px;
					overflow: hidden;
					img {
						width: 100%;
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
						}
						&:nth-of-type(2) {
							margin-top: 20px;
							color: #666666;
						}
					}
				}
			}
		}
	}
}
</style>
