<template>
	<div id="app" :state="$store.state.state">
		<Layout>
			<div class="out-page">
				<router-view />
			</div>
		</Layout>
	</div>
</template>

<script lang="ts">
import App from './App';
export default App;
</script>

<style lang="scss">
@import './style/animation';

@font-face {
	font-family: 'Athene';
	src: url('~assets/fonts/Athene.woff');
}

@font-face {
	font-family: 'Gilroy-Bold';
	src: url('~assets/fonts/Gilroy-Bold.woff');
}

@font-face {
	font-family: 'Gilroy-Black';
	src: url('~assets/fonts/Gilroy-Black.woff');
}

@font-face {
	font-family: 'Gilroy-Heavy';
	src: url('~assets/fonts/Gilroy-Heavy.woff');
}

@font-face {
	font-family: 'Gilroy-Regular';
	src: url('~assets/fonts/Gilroy-Regular.woff');
}

html {
	@include scrollbar-beautify();
	body {
		-webkit-font-smoothing: antialiased;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
		input,
		textarea {
			outline: none;
			-webkit-appearance: none;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}
	}

	.el-dialog {
		margin: 0 !important;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 8px;

		.el-dialog__header {
			display: none;
		}

		.el-dialog__body {
			position: relative;
			.close-btn {
				cursor: pointer;
				position: absolute;
				right: 24px;
				top: 24px;
				width: 24px;
				height: 24px;
				img {
					width: 100%;
					display: block;
					transition: transform 0.3s;
				}
				&:hover {
					img {
						transform: rotate(-90deg);
					}
				}
			}
		}
	}

	//swiper分页器样式
	/* .swiper-pagination {
		position: absolute;
		left: 50%;
		bottom: -66px;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		.swiper-pagination-bullet {
			background: #bbb !important;
			opacity: 1;
			transform: translateZ(0);
			&:not(:first-child) {
				margin-left: 27px;
			}
			&.swiper-pagination-bullet-active {
				border: 2px solid #0044b0;
				background: transparent !important;
				transform: scale(1.5) translateZ(0);
			}
		}
	} */

	///左右按钮尺寸和hover效果
	.swiper-button-prev {
		width: 50px;
		height: 35px;
		left: 0;
		top: auto;
		bottom: -79px;
		transition: transform 0.3s;
		justify-content: flex-start;
		&::after {
			color: #fff;
			font-size: 21px;
		}
		&:hover {
			transform: scale(1.2);
		}
		&[aria-disabled='true'] {
			///按钮禁用状态时的样式
		}
	}
	.swiper-button-next {
		width: 50px;
		height: 35px;
		right: 0;
		top: auto;
		bottom: -79px;
		transition: transform 0.3s;
		justify-content: flex-end;
		&::after {
			color: #fff;
			font-size: 21px;
		}
		&:hover {
			transform: scale(1.2);
		}
		&[aria-disabled='true'] {
		}
	}

	///ele 分页器修改
	.el-pagination {
		height: 45px;
		display: flex;
		align-items: center;
		.btn-prev,
		.btn-next {
			width: 45px;
			height: 45px;
			border: 2px solid #eeeeee;
			border-radius: 50%;
			transition: border 0.3s;
			color: #333;
			padding: 0;
			&:hover {
				border: 2px solid #0044b0;
				color: #0044b0;
			}
			i {
				font-size: 18px;
			}
			&:disabled {
				border: 2px solid #eeeeee;
				i {
					color: #eeeeee;
				}
			}
		}
		.btn-prev {
			margin-right: 43px;
			&[disabled] {
				i {
					color: #999;
				}
			}
		}
		.btn-next {
			margin-left: 43px;
			&[disabled] {
				i {
					color: #999;
				}
			}
		}
		ul {
			li {
				font-size: 18px;
				font-family: Gilroy-Bold;
				font-weight: bold;
				color: #333333;
				padding: 0 15px;
				transition: color.3s;
				&:nth-child(1) {
					padding-left: 0;
				}
				&:last-child {
					padding-right: 0;
				}
				&.active {
					color: #0044b0;
					transform: scale(1.1);
				}
			}
		}
		.el-pager {
			.el-icon-d-arrow-left::before,
			.el-icon-d-arrow-right::before {
				content: '\e794' !important;
			}

			.number {
				width: 50px;
			}
		}
	}
}
</style>
