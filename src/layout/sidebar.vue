<template>
	<div class="sidebar">
		<div>
			<div>
				<i></i>
				<p>在线咨询</p>
			</div>
			<div>
				<i></i>
				<p>获取报价</p>
			</div>
			<div>
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

@Component
export default class sidebar extends Vue {
	backUp() {
		let top = document.documentElement.scrollTop || document.body.scrollTop;
		const timeTop = setInterval(() => {
			document.body.scrollTop = document.documentElement.scrollTop = top -= 100; //可以自己设置
			if (top <= 0) {
				clearInterval(timeTop);
			}
		}, 10);
	}
}
</script>
<style scoped lang="scss">
.sidebar {
	position: fixed;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
	width: 70px;
	background: #122133;
	z-index: 999;
	>div{
		div{
			height: 85px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 14px;
			flex-wrap: wrap;
			cursor: pointer;
			transition: .3s;
			position: relative;
			align-content: center;
			&::after,
			&::before {
				content: '';
				position: absolute;
				border: 2PX solid transparent;
				width: 8px;
				transition: .3s;
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
			&:hover{
				background: #E95628;
				&::after,
				&::before {
					border: 2PX solid #fff;
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
			i{
				height: 25px;
				width: 100%;
				background: url("~assets/icons/ic_e1_part2_07.png") no-repeat center center;
				background-size: auto 100%;
				margin-bottom: 10px;
			}
			p{
				width: 100%;
				text-align: center;
			}
		}
	}
}
</style>
