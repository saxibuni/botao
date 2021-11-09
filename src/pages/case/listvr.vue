<template>
	<div class="case-listvr">
		<div class="title">
			<div class="left">
				<h3>
					<span>1000+</span>
					经典案例 筑梦幸福家
				</h3>
				<p>BUILD A HAPPY HOME</p>
			</div>
			<div class="right">
				<div class="search">
					<input type="text" />
					<i></i>
				</div>
				<p>
					热门搜索：
					<span>独栋别墅</span>
					<span>新中式</span>
					<span>欧式</span>
				</p>
			</div>
		</div>
		<div class="tabs">
			<div class="tabsList" v-for="(item, index) in tabList" :key="index">
				<p>{{ item.title }}</p>
				<ul>
					<li>全部</li>
					<li v-for="(v, i) in item.info" :key="i">{{ v }}</li>
				</ul>
			</div>
		</div>
		<div class="list">
			<ul>
				<li v-for="i in 6" :key="i">
					<div class="imgBox">
						<img src="~assets/bg_b3_part2_vr1.jpg" alt="" />
					</div>
					<div class="content">
						<div class="left">
							<p>上海东方颐城</p>
							<p>
								<span>现代风格</span>
								<span>独栋别墅</span>
								<span>120㎡</span>
							</p>
						</div>
						<div class="Right"></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import CaseListVr from './listvr';
export default CaseListVr;
</script>

<style lang="scss">
.case-listvr {
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
	.list {
		margin-top: 80px;
		ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			li {
				margin-bottom: 60px;
				.imgBox {
					width: 855px;
					height: 520px;
					overflow: hidden;
				}
				.content {
					display: flex;
					justify-content: space-between;
					.left {
						p {
							&:nth-of-type(1) {
								font-size: 30px;
								color: #000000;
								margin-top: 39px;
							}
							&:nth-of-type(2) {
								margin-top: 10px;
								font-size: 18px;
								display: flex;
								align-items: center;
								span {
									color: #888888;
									padding: 0 15px;
									border-right: 1px solid #cccccc;
									height: 16px;
									display: flex;
									align-items: center;
									&:first-of-type {
										padding-left: 0;
									}
									&:last-of-type {
										padding-right: 0;
										border: none;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
