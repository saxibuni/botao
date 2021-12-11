<template>
 <div class="has-show-tip" :class="{active:$store.state.hasShowCommitTip}">
	 <span @click="$store.state.hasShowCommitTip = false">×</span>
	 <h2>5秒快速获取装修报价<span>已有<b v-if="$store.state.footData&&$store.state.footData.bj_num">{{$store.state.footData.bj_num}}</b>人获取报价</span></h2>
		<div>
			<div class="form">
				<ul>
					<li>
						<i></i>
						<input type="text" v-model="form.userName" placeholder="输入您的姓名" />
						<b>*</b>
					</li>
					<li>
						<i></i>
						<input type="text" maxlength="11" @input="oninput()" v-model="form.phone" placeholder="输入您的联系电话" />
						<b>*</b>
					</li>
					<li>
						<i></i>
						<input type="text" v-model="form.area" placeholder="输入您的装修面积" />
						<b>*</b>
					</li>
					<li>
							<Button  @click.native="onSubmit()" text="提交需求"></Button>
					</li>
				</ul>
			</div>
			<div>
			</div>
		</div>
	 <p>为了您的权益，您的隐私将被严格保密</p>
 </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Button from 'root/components/button.vue';
import utils, { emitter } from 'root/utils';

@Component({
	components:{
		Button
	}
})
export default class videoPopup extends Vue {
	form = {
		userName: '',
		phone: '',
		area: ''
	};
	oninput() {
		this.form.phone = this.form.phone.replace(/[^\d]/g, '');
	}
		onSubmit() {
		if (!this.form.userName) {
			this.$store.state.dialog = {
				state: 2,
				text: '请输入您的姓名'
			};
			return;
		}
		if (this.form.phone.length != 11) {
			this.$store.state.dialog = {
				state: 2,
				text: '请输入正确的联系电话'
			};
			return;
		}
		if (!this.form.area) {
			this.$store.state.dialog = {
				state: 2,
				text: '请输入您的装修面积'
			};
			return;
		}
		let data = {
			form_id: 11,
			attr_45: this.form.userName,
			attr_46: this.form.phone,
			attr_47: this.form.area
		};
		utils.service.formSubmit(data, res => {
			if (res.status === 200) {
				this.$store.state.dialog = {
					state: 1,
					text: '提交成功'
				};
				this.form = {
					userName: '',
					phone: '',
					area: ''
				};
				this.$store.state.dialogVisible = false;
			} else {
				this.$store.state.dialog = {
					state: 2,
					text: '系统错误'
				};
			}
		});
	}
}
</script>
<style scoped lang="scss">
.has-show-tip {
	width: 1920px;
	height: 255px;
	background: #122133;
	opacity: 0.9;
	position: fixed;
	left: 50%;
	bottom: 0;
	z-index: 99;
	transform: translateX(-50%) translateY(100%);
	transition:transform .3s;
	padding-top: 42px;
	&.active{
		transform: translateX(-50%) translateY(0);
	}
	>span{
		top: 42px;
		right: 80px;
		color: #fff;
		font-size: 30px;
		cursor: pointer;
		position: absolute;
		transition:transform .3s;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		&:hover{
			transform: rotate(-90deg);
		}
	}
	h2{
		font-size: 34px;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		span{
			font-size: 16px;
			font-weight: 400;
			color: #FFFFFF;
			margin-left: 19px;
			b{
				color:rgba(235, 85, 24, 1);
				font-weight: normal;
			}
		}
	}
	>div{
	.form {
		  margin-top: 34px;
			width: 100%;
			height: 90px;
			background: rgba(18, 33, 51, 0.8);
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 0;
			animation: slide-down-in 1s, fade-in 1s;
			animation-fill-mode: forwards;
			ul {
				display: flex;
				align-items: center;
				justify-content: center;
				li {
					width: 295px;
					height: 52px;
					display: flex;
					align-items: center;
					position: relative;
					border-bottom: 1px solid rgba(255, 255, 255, 0.3);
					&:not(:first-child) {
						margin-left: 41px;
					}
					i {
						width: 14px;
						height: 14px;
						background: url('~assets/icons/ic_home_banner_user.png');
						background-size: 100% 100%;
					}
					b {
						position: absolute;
						right: 20px;
						top: 50%;
						transform: translateY(-50%);
						font-size: 14px;
						font-weight: 400;
						color: #ed5400;
					}
					input {
						height: 100%;
						background: none;
						border: none;
						color: #fff;
						font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
						font-size: 18px;
						padding-left: 19px;
						&::placeholder {
							font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
							color: #999999;
						}
					}
					&:nth-child(2) {
						i {
							background: url('~assets/icons/ic_home_banner_phone.png');
							background-size: 100% 100%;
						}
					}
					&:nth-child(3) {
						i {
							background: url('~assets/icons/ic_home_banner_area.png');
							background-size: 100% 100%;
						}
					}
					&:nth-child(4) {
						width: 146px;
						border: none;
						/deep/.btn {
								width: 146px;
								height: 48px;
								line-height: 48px;
								margin: 0;
						}
					}
				}
			}
		}
	}
	p{
		font-size: 14px;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 30px;
		opacity: 0.5;
		text-align: center;
	}
}
</style>
