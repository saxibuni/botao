<template>
	<div class="sidebar" :class="{sidebarie:isIE}">
		<div>
			<div>
				<i></i>
				<p>在线咨询</p>
			</div>
			<div @click="$store.state.dialogVisible=true">
				<i></i>
				<p>获取报价</p>
			</div>
			<div @click="$store.state.dialogDesign.design=true">
				<i></i>
				<p>预约设计</p>
			</div>
			<div @click="backUp">
				<i></i>
				<p>返回顶部</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { device } from 'root/utils';

@Component
export default class sidebar extends Vue {
	isIE:boolean = false;
	backUp() {
		let top = document.documentElement.scrollTop || document.body.scrollTop;
		const timeTop = setInterval(() => {
			document.body.scrollTop = document.documentElement.scrollTop = top -= 100; //可以自己设置
			if (top <= 0) {
				clearInterval(timeTop);
			}
		}, 10);
	}
	created() {
		this.isIE = device.browser.ie;
	}
}
</script>
<style scoped lang="scss">
@media (max-width: 1440px) {

	body {
		.sidebar{
			right: 0;
			left: auto!important;
			margin-left: 0!important;
		}
		&.over-hide{
			.sidebar{
				margin-left: 0;
				right: 4px;
			}
		}
	}

}
.sidebar {
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	width: 70px;
	background: #122133;
	z-index: 99;
	left: 50%;
	margin-left: 888px;
	&.sidebarie{
		margin-left: 890px!important;
	}
	> div {
		div {
			height: 85px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 14px;
			flex-wrap: wrap;
			cursor: pointer;
			transition:background 0.3s;
			position: relative;
			align-content: center;
			&::after,
			&::before {
				content: '';
				position: absolute;
				border: 2px solid transparent;
				width: 8px;
				transition: 0.3s;
				height: 8px;
			}
			&::after {
				left: 4px;
				top: 4px;
				border-right: none;
				border-bottom: none;
			}
			&::before {
				right: 4px;
				bottom: 4px;
				border-top: none;
				border-left: none;
			}
			&:hover {
				background: #e95628;
				&::after,
				&::before {
					border: 2px solid #fff;
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
			i {
				height: 25px;
				width: 100%;
				background: url('~assets/icons/ic_e1_part2_07.png') no-repeat center center;
				background-size: auto 100%;
				margin-bottom: 10px;
			}
			p {
				width: 100%;
				text-align: center;
			}
			&:nth-child(1) {
				i {
					background: url('~assets/icons/ic_home_side_line.png') no-repeat center center;
					background-size: 23px auto;
				}
			}
			&:nth-child(2) {
				i {
					background: url('~assets/icons/ic_home_side_price.png') no-repeat center center;
					background-size: 20px auto;
				}
			}
			&:nth-child(3) {
				i {
					background: url('~assets/icons/ic_home_side_design.png') no-repeat center center;
					background-size:22px auto;
				}
			}
			&:nth-child(4) {
				i {
					background: url('~assets/icons/ic_home_side_up.png') no-repeat center center;
					background-size: auto 17px;
				}
			}
		}
	}
}
</style>
