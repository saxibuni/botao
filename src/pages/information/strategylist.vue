<template>
	<div class="strategy-list" v-if="topList[1]">
		<banner :data="BannerData"></banner>
		<!-- 装修攻略列表 -->
		<div class="decoration-strategy" v-if="topList[1]">
			<h2>装修攻略</h2>
			<h3>DECORATION STRATIEGY</h3>
			<div class="strategy-box">
				<div class="strategy-left wow" @click="$router.push({ name: 'strategy-detail', query: { aid: topList[0].aid }  })">
					<div class="img-box">
						<img :src="$store.state.footData.web_url + topList[0].img" />
					</div>
					<div class="info-box">
						<div class="date">{{ topList[0].show_time | formatTime }}</div>
						<h4 class="title">{{ topList[0].title }}</h4>
						<p>{{ topList[0].desc }}</p>
						<div class="more">
							More
							<span></span>
						</div>
					</div>
				</div>
				<ul class="strategy-right wow">
					<li v-for="(v, i) in topList2" :key="v.id" @click="$router.push({ name: 'strategy-detail', query: { aid: v.aid } })">
						<div class="img-box">
							<img :src="$store.state.footData.web_url + v.img" />
						</div>
						<div class="info-box">
							<div class="date">{{ v.show_time | formatTime }}</div>
							<h4 class="title">{{ v.title }}</h4>
							<p>{{ v.desc }}</p>
							<div class="more" @mouseenter="addClass(i, '.strategy-right')" @mouseleave="removeClass(i, '.strategy-right')">
								More
								<span></span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="list-box" v-if="topList[1]">
			<ul class="list wow">
				<li
					v-for="(v, i) in groupList"
					v-show="i <= paginationData.size - 1"
					:style="{ 'animation-delay': 0.3 * i + 0.5 + 's' }"
					:key="i"
					@click="$router.push({ name: 'strategy-detail', query: { aid: v.aid } })"
				>
					<div class="img-box">
						<img :src="$store.state.footData.web_url + v.img" alt="" />
					</div>
					<div class="info-box">
						<div class="date">{{ v.show_time | formatTime }}</div>
						<h4 class="title">{{ v.title }}</h4>
						<p>{{ v.desc }}</p>
						<div class="more" @mouseenter="addClass(i, '.list')" @mouseleave="removeClass(i, '.list')">
							More
							<span></span>
						</div>
					</div>
				</li>
			</ul>
			<Pagination :data="paginationData" @getData="getData"></Pagination>
		</div>
	</div>
</template>

<script lang="ts">
import StrategyList from './strategylist';
export default StrategyList;
</script>

<style lang="scss">
html {
	.strategy-list {
		.decoration-strategy {
			h2,
			h3 {
				opacity: 0;
				animation: slide-up-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.decoration-strategy {
			.strategy-left {
				opacity: 0;
				animation: slide-left-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
			.strategy-right {
				opacity: 0;
				animation: slide-right-in 1s, fade-in 1s;
				animation-fill-mode: forwards;
			}
		}
		.list-box {
			.list {
				opacity: 0;
				animation: fade-in 1s ease;
				animation-fill-mode: forwards;
				li {
					opacity: 0;
					animation: fade-in 1s ease;
					animation-fill-mode: forwards;
				}
			}
		}
	}
}
.strategy-list {
	box-sizing: border-box;
	font-size: 16px;
	@mixin title {
		h2,
		h3 {
			font-weight: 400;
			text-align: center;
			line-height: 1;
		}
		h2 {
			font-size: 48px;
			margin-top: 100px;
		}
		h3 {
			margin-top: 25px;
			margin-bottom: 107px;
			font-family: Athene;
			font-size: 24px;
		}
	}
	@mixin info {
		h4 {
			margin-top: 14px;
			font-size: 26px;
			font-weight: 600;
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
			transition: all 0.3s;
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
			&:hover {
				color: #eb551c;
			}
			&:hover span {
				margin-left: 15px;
				transform: rotate(-45deg);
			}
		}
	}
	@mixin bigImg {
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			transition: all 0.3s;
			cursor: pointer;
		}
		&:hover img {
			transform: scale($imgScale);
		}
	}
	.decoration-strategy {
		@include title();
		padding: 0 80px 100px 80px;
		overflow: hidden;
		.strategy-box {
			display: flex;
			.strategy-left {
				margin-right: 39px;
				width: 861px;
				.img-box {
					@include bigImg();
					height: 547px;
				}
				.info-box {
					padding: 49px 40px 54px 40px;
					background-color: #112033;
					color: #fff;
					cursor: pointer;
					@include info();
				}
			}
			.strategy-right {
				flex: 1;
				box-sizing: border-box;
				li {
					display: flex;
					.img-box {
						@include bigImg();
						flex: 1;
						margin-right: 43px;
						width: 366px;
						height: 233px;
					}
					.info-box {
						flex: 1;
						color: #8e8e8e;
						cursor: pointer;
						@include info();
						h4 {
							color: #000;
							transition: color 0.3s;
						}
						.more {
							margin-top: 40px;
							color: #000;
							transition: all 0.3s;
						}
						&:hover .title {
							color: #eb551c;
						}
					}

					&:not(:last-child) {
						padding-bottom: 40px;
						border-bottom: 2px solid #ed5300;
					}
					&:nth-child(2) {
						margin: 45px 0;
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
	.list-box {
		padding: 100px 80px;
		background: #f6f6f6;
		.list {
			display: flex;
			flex-wrap: wrap;
			// justify-content: space-between;
			margin-bottom: 70px;
			li {
				&:not(:nth-child(3n)) {
					margin-right: 20px;
				}
				background-color: #fff;
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
					cursor: pointer;
					.title {
						transition: all 0.3s;
					}
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
					&:hover .title {
						color: #ed5300;
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
	.el-pager {
		li {
			background-color: #f6f6f6 !important;
		}
	}
	.el-input__inner {
		background-color: #f6f6f6 !important;
	}
}
</style>
