<template>
	<div class="capital-retention" :class="{ active: $store.state.dialogVisible }">
		<div>
			<img @click="$store.state.dialogVisible = false" class="close" src="~assets/icons/ic_home_popup_close.png" alt="" />
			<div>
				<div class="from">
					<h2>装修报价</h2>
					<h3>
						今天已有
						<span>858</span>
						位业主获取了装修预算
					</h3>
					<ul>
						<li>
							<i></i>
							<input type="text" v-model="form.userName" placeholder="您的称呼" />
							<b>*</b>
						</li>
						<li>
							<i></i>
							<input type="text" v-model="form.phone" maxlength="11" placeholder="您的电话" />
							<b>*</b>
						</li>
						<li>
							<i></i>
							<input type="text" v-model="form.area" placeholder="您的面积" />
							<b>*</b>
						</li>
					</ul>
					<div class="btns">
						<div @click="onSubmit()">提交</div>
						<div
							@click="
								form = {
									userName: '',
									phone: '',
									area: ''
								}
							"
						>
							重置
						</div>
					</div>
				</div>
				<div class="right">
					<div>
						<h3>
							您的装修预算
							<span>258238</span>
							元
						</h3>
						<ul>
							<li>
								<b>材料费：</b>
								<span>54544</span>
								<b>元</b>
							</li>

							<li>
								<b>人工费：</b>
								<span>15255</span>
								<b>元</b>
							</li>
							<li>
								<b>设计费：</b>
								<span>5115</span>
								<b>元</b>
							</li>
							<li>
								<b>质检费：</b>
								<span>3216</span>
								<b>元</b>
							</li>
						</ul>
					</div>
					<p>*装修价格会根据实际情况上下有所浮动</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class CapitalRetention extends Vue {
	@Watch('searchShow')
	onSearchFUn() {
		if (this.searchShow) {
			(<any>this.$refs)['search'].focus();
		} else {
			(<any>this.$refs)['search'].blur();
		}
	}
	keyword = '';
	searchShow: boolean = false;
	form = {
		userName: '',
		phone: '',
		area: ''
	};
	onSubmit() {
		if (!this.form.userName) {
			alert('请输入您的姓名！');
			return;
		}
		if (this.form.phone.length != 11) {
			alert('请输入您的联系电话！');
			return;
		}
		if (!this.form.area) {
			alert('请输入您的装修面积！');
			return;
		}
		alert('提交成功');
		this.form = {
			userName: '',
			phone: '',
			area: ''
		};
	}
}
</script>
<style scoped lang="scss">
.capital-retention {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: 0.3s;
	z-index: 999;
	pointer-events: none;
	&.active {
		opacity: 1;
		pointer-events: auto;
		> div {
			opacity: 1;
			transform: translateY(0);
		}
	}
	> div {
		width: 1050px;
		height: 500px;
		background: #ffffff;
		position: relative;
		display: flex;
		transition: 0.3s;
		transform: translateY(80px);
		opacity: 0;
		.close {
			width: 18px;
			height: 18px;
			display: block;
			position: absolute;
			right: 40px;
			top: 40px;
			cursor: pointer;
			transition: 0.3s;
			&:hover {
				transform: rotate(-90deg);
			}
		}
		> div {
			display: flex;
			.from {
				padding: 54px 0 0 80px;
				h2 {
					font-size: 36px;
					height: 35px;
					font-weight: 400;
					color: #000000;
					line-height: 42px;
				}
				h3 {
					height: 16px;
					font-size: 16px;
					font-weight: 400;
					color: #666666;
					margin: 19px 0 45px 0;
					span {
						color: rgba(237, 84, 0, 1);
					}
				}
				ul {
					li {
						width: 365px;
						height: 45px;
						background: #f6f8f9;
						margin-bottom: 20px;
						display: flex;
						align-items: center;
						padding: 0 30px;
						position: relative;
						i {
							width: 18px;
							height: 20px;
							background: url('~assets/icons/ic_home_footer__user_gray.png') no-repeat;
							background-size: 100% auto;
						}
						b {
							position: absolute;
							right: 20px;
							top: 50%;
							transform: translateY(-30%);
							font-size: 18px;
							font-weight: 400;
							color: #ed5400;
						}
						input {
							height: 100%;
							background: none;
							border: none;
							color: #000;
							font-size: 18px;
							font-weight: bold;
							padding-left: 19px;
							&::placeholder {
								color: #000;
								font-weight: bold;
							}
						}
						&:nth-child(2) {
							i {
								background: url('~assets/icons/ic_home_footer_fhone_gray.png') no-repeat;
								background-size: 100% auto;
							}
						}
						&:nth-child(3) {
							i {
								background: url('~assets/icons/ic_home_footer_area_gray.png') no-repeat;
								background-size: 100% auto;
							}
						}
					}
				}
				.btns {
					width: 365px;
					display: flex;
					margin-top: 35px;
					justify-content: space-between;
					div {
						width: 168px;
						height: 45px;
						background: #ed5400;
						line-height: 45px;
						text-align: center;
						color: #fff;
						cursor: pointer;
						font-weight: 700;
						font-size: 18px;
						&:nth-child(2) {
							background: #122133;
						}
					}
				}
			}
			.right {
				margin-left: 95px;
				margin-top: 115px;
				> div {
					width: 430px;
					height: 260px;
					border: 1px solid #e8e8e8;
					padding-top: 40px;
					h3 {
						font-size: 22px;
						font-weight: 400;
						color: #000000;
						text-align: center;
						span {
							font-size: 35px;
							color: rgba(237, 84, 0, 1);
						}
					}
					ul {
						width: 286px;
						display: flex;
						flex-wrap: wrap;
						margin: 0 auto;
						margin-top: 45px;
						li {
							width: 50%;
							height: 17px;
							display: flex;
							align-items: center;
							&:nth-child(1),
							&:nth-child(2) {
								margin-bottom: 30px;
							}
							b {
								font-size: 16px;
								font-weight: 600;
								color: #333333;
							}
							span {
								font-size: 16px;
								color: rgba(237, 84, 0, 1);
								font-weight: 600;
								width: 55px;
								font-family: Gilroy-Bold;
							}
						}
					}
				}
				p {
					font-size: 16px;
					font-weight: 400;
					color: #999999;
					line-height: 45px;
					text-align: center;
					margin-top: 18px;
				}
			}
		}
	}
}
</style>
