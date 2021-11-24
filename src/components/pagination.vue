<template>
	<div class="pagination-box">
		<!-- 分页组件 -->
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="data.size" layout="prev, pager, next, jumper" :total="data.total" class="wow"></el-pagination>
		<button class="wow">确定</button>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class pagination extends Vue {
	input__inner = null;
	@Prop({
		required: false,
		type: Object,
		default: () => {}
	})
	data!: any;
	mounted() {
		this.restartWow();
	}
	currentPage = 1;
	handleSizeChange(val) {
		console.log(`每页 ${val} 条`);
	}

	handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
	}
}
</script>
<style lang="scss" scoped>
html {
	.pagination-box {
		.el-pagination {
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
		button {
			opacity: 0;
			animation: slide-up-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
		}
	}
}

.pagination-box {
	display: flex;
	justify-content: center;
	align-items: center;
	/deep/.el-pagination {
		padding: 0 5px;
		button {
			margin: 0px 20px;
			width: 40px;
			height: 40px;
			border-radius: 0;
			color: #989fa6;
			i {
				font-size: 18px;
				font-weight: normal;
			}
			&:hover {
				border-color: #ccc;
			}
		}
		ul {
			display: flex;
			justify-content: space-between;
			// width: 374px;
			li {
				width: auto;
				padding: 0;
				font-size: 18px;
				font-weight: bold;
				color: #122133;
				background-color: #fff;
				transition: all 0.3s;
				&.number:hover {
					transform: translateY(-3px);
					color: #ed5502;
				}
				&.active {
					color: #ed5502;
					transform: scale(1) !important;
				}
			}
		}
		.el-pagination__jump {
			display: flex;
			margin-left: 19px;
			font-size: 18px;
			font-weight: 600;
			color: #122133;
			> div {
				margin: 0 10px;
				position: relative;
				width: 41px;
				vertical-align: middle;
				> input {
					color: #122133;
					position: absolute;
					top: -3px;
					left: 0;
					border: none;
					border-radius: 0;
					border-bottom: 1px solid #b6bbc1;
					background-color: #fff;
					font-size: 14px;
					font-weight: bold;
				}
			}
		}
	}
	> button {
		position: relative;
		margin-left: 19px;
		vertical-align: middle;
		width: 85px;
		height: 40px;
		border: none;
		border: 1px solid #eb551d;
		background-color: #f6f6f6;
		font-size: 18px;
		font-weight: 600;
		color: #eb551d;
		cursor: pointer;
		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 4px;
			left: 4px;
			width: 11px;
			height: 11px;
			opacity: 0.35;
			border-top: 1px solid #eb551d;
			border-left: 1px solid #eb551d;
		}
		&::after {
			transform: rotate(180deg);
			top: 24px;
			left: 68px;
		}
	}
}
</style>
