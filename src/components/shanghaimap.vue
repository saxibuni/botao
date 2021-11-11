<template>
	<div class="shanghai-map-wrapper">
		<div class="map-bg">
		</div>
		<div class="map-box">
		</div>
		<ul class="data-list">
			<li class="item" v-for="item in data" :class="[item.id, {'active': item.id == currentSelectId}]" :key="item.id">
				<i></i>
				<img src="" alt="">
				<span class="county">{{ item.name }}</span>
				<span class="info">{{ `（在建${item.value}套）` }}</span>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import ShangHaiMap from './shanghaimap';
export default ShangHaiMap;
</script>

<style lang="scss">
.shanghai-map-wrapper {
	position: relative;
	.map-bg {
		width: 1760px;
		height: 860px;
		position: absolute;
		background: url('~assets/shanghaimap_bg.png') no-repeat;
		background-size: 100% 100%;
	}

	.map-box {
		width: 1760px;
		height: 860px;
	}

	.data-list {
		position: absolute;
		left: calc(50% - 880px);
		top: 0;
		width: 1760px;
		height: 860px;
		pointer-events: none;
		.item {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 120px;
			height: 115px;
			position: absolute;
			font-weight: bold;
			i {
				width: 54px;
				height: 40px;
				background: url('~assets/icons/ic_d2_house1.png') no-repeat;
				background-size: 100% 100%;
			}
			.county {
				margin-top: 8px;
				color: black;
				font-size: 20.76px;
				transform: all .3s;
			}

			.info {
				margin-top: 4px;
				color: #eb551d;
				font-size: 18px;
				transform: all .3s;
			}

			&.active {
				i {
					background: url('~assets/icons/ic_d2_house2.png') no-repeat;
					background-size: 100% 100%;
				}
				.county, .info {
					color: white;
				}
			}

			&.jd {
				transform: translate(675px, 216px);
			}
			&.cm {
				transform: translate(934px, 87px);
				.county, .info {
					transform: translate(67px, -34px);
				}
			}
			&.qp {
				transform: translate(620px, 354px);
			}
			&.bs {
				transform: translate(779px, 186px);
			}
			&.sj {
				transform: translate(658px, 477px);
			}
			&.mh {
				transform: translate(773px, 429px);
				.county {
					font-size: 18.82px;
				}
				.info {
					font-size: 16.31px;
				}
			}
			&.fx {
				transform: translate(856px, 576px);
			}
			&.pd {
				width: 130px;
				i {
					width: 68px;
					height: 51px;
				}
				transform: translate(953px, 419px);
				.county {
					font-size: 23.15px;
				}
				.info {
					font-size: 20px;
				}
			}
		}
	}
}
</style>
