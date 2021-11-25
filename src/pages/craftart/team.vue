<template>
	<div class="craft-team">
		<Banner :data="bannerData" />
		<div class="list">
			<ul>
				<li v-for="(item, i) in teamData.list" :key="i" class="wow" :style="{ 'animation-delay': 0.08 * i + 0.03 + 's' }">
					<img :src="web_url + item.img" alt="" />
					<div class="text">
						<p>{{ item.title }}</p>
						<p>
							{{ item.gw }}&nbsp;
							<span></span>
							&nbsp; {{ item.jingyan }}
						</p>
					</div>
					<div class="mask">
						<div class="content">
							<p>{{ item.title }}</p>
							<p>
								{{ item.gw }}
								<span></span>
								{{ item.jingyan }}
							</p>
							<div class="line"></div>
							<p>服务楼盘</p>
							<p>{{ item.fwlp }}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<Pagination :data="paginationData" @getData="getData1" />
	</div>
</template>

<script lang="ts">
import Team from './team';
export default Team;
</script>

<style lang="scss" scoped>
.craft-team {
	ul {
		li {
			opacity: 0;
			animation: fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
}
.list {
	padding: 0 80px;
	margin-top: 90px;
	ul {
		display: flex;
		// justify-content: space-between;
		flex-wrap: wrap;
		li {
			width: 410px;
			height: 500px;
			position: relative;
			margin-bottom: 40px;
			margin-right: 38px;
			&:nth-of-type(4n) {
				margin-right: 0;
			}
			&:hover {
				.text {
					opacity: 0;
				}
				.mask {
					opacity: 1;
					.content {
						opacity: 1;
						transform: translateY(0px);
					}
				}
			}
			.text {
				position: absolute;
				left: 50px;
				bottom: 50px;
				opacity: 1;
				transition: opacity 0.3s;
				p {
					color: #fff;
					&:nth-of-type(1) {
						font-size: 32px;
						line-height: 30px;
					}
					&:nth-of-type(2) {
						margin-top: 24px;
						font-size: 18px;
					}
					span {
						margin-left: 6px;
						display: inline-block;
						width: 1px;
						height: 16px;
						background-color: #ffffff;
						opacity: 0.2;
						transform: translateY(2px);
					}
				}
			}
			.mask {
				position: absolute;
				top: 0;
				left: 0;
				width: 410px;
				height: 500px;
				background: rgba(19, 33, 50, 0.8);
				opacity: 0;
				transition: opacity 0.5s;
				.content {
					position: absolute;
					left: 50px;
					bottom: 45px;
					transform: translateY(100px);
					opacity: 0;
					transition: all 0.5s;
					p {
						color: #ffffff;
						&:nth-of-type(1) {
							font-size: 32px;
							line-height: 30px;
							margin-bottom: 19px;
						}
						&:nth-of-type(2) {
							font-size: 18px;
							color: #eb5518;
						}
						&:nth-of-type(3) {
							font-size: 18px;
							margin-bottom: 10px;
						}
						&:nth-of-type(4) {
							width: 310px;
							font-size: 18px;
							@include line-clamp(2);
							line-height: 35px;
						}
						span {
							margin-left: 6px;
							margin-right: 4px;
							display: inline-block;
							width: 1px;
							height: 16px;
							background-color: #ffffff;
							opacity: 0.2;
							transform: translateY(2px);
						}
					}
					.line {
						width: 310px;
						height: 1px;
						background: #ffffff;
						opacity: 0.2;
						margin: 35px 0;
					}
				}
			}
		}
	}
}
.pagination-box {
	margin: 40px 0 100px 0;
}
</style>
