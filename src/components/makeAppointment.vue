<template>
	<div class="make-appointment" :class="{ active: $store.state.dialogDesign.design || $store.state.dialogDesign.visit}">
		<div :class="{ height: $store.state.dialogDesign.design }">
			<img @click="$store.state.dialogDesign.design = false;$store.state.dialogDesign.visit = false" class="close" src="~assets/icons/ic_home_popup_close2.png" alt="" />
			<div>
				<div class="from">
					<h2>预约设计</h2>
					<h3>
						今天已有<span>{{$store.state.dialogDesign.design?58:88}}</span>位业主预约了{{$store.state.dialogDesign.design?'设计':'参观工地'}}
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
						<li v-if="$store.state.dialogDesign.design">
							<i></i>
							<input type="text" v-model="form.area" placeholder="您的户型" />
							<b>*</b>
						</li>
					</ul>
					<div class="btns">
						<div @click="onSubmit()">
							<Button text="提交" />
						</div>

						<div
							@click="
								form = {
									userName: '',
									phone: '',
									area: ''
								}
							"
						>
							<Button text="重置" />
						</div>
					</div>
				</div>
				<div class="right" :class="{active:$store.state.dialogDesign.design}">
						<div>
							<p>
 								关注波涛微信公众号<br>了解更多装饰资讯
							</p>
							<img src="~/assets/bg_home_footer_qa.jpg" alt="">
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Button from './button.vue';

@Component({
	components:{
		Button
	}
})
export default class makeAppointment extends Vue {
	form = {
		userName: '',
		phone: '',
		area: ''
	};
	onSubmit() {
		if (!this.form.userName) {
			this.$store.state.dialog={
				state:2,
				text:'请输入您的姓名'
			}
			return;
		}
		if (this.form.phone.length != 11) {
			this.$store.state.dialog={
				state:2,
				text:'请输入正确的联系电话'
			}
			return;
		}
		if (!this.form.area&&this.$store.state.dialogDesign.design) {
			this.$store.state.dialog={
				state:2,
				text:'请输入您的户型'
			}
			return;
		}
		this.$store.state.dialog={
			state:1,
			text:'提交成功'
		}
		this.form = {
			userName: '',
			phone: '',
			area: ''
		};
		this.$store.state.dialogDesign.design = false;
		this.$store.state.dialogDesign.visit = false;
	}
}
</script>
<style scoped lang="scss">
.make-appointment {
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
	transition: opacity 0.3s;
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
	  height: 470px;
		background: #ffffff;
		position: relative;
		display: flex;
		transition:opacity 0.3s,transform 0.3s;
		transform: translateY(80px);
		opacity: 0;
		&.height{
			height: 530px;
		}
		.close {
			width: 18px;
			height: 18px;
			display: block;
			position: absolute;
			right: 40px;
			top: 40px;
			cursor: pointer;
			transition: transform 0.3s;
			&:hover {
				transform: rotate(-90deg);
			}
		}
		> div {
			display: flex;
			.from {
				width: 585px;
				padding: 69px 0 0 110px;
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
							font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
							font-weight: bold;
							padding-left: 19px;
							&::placeholder {
								font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
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
								background: url('~assets/icons/ic_home_popup_homestyle.png') no-repeat;
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
						/deep/.btn{
							height: 45px;
							line-height: 45px;
						}
						&:nth-child(2) {
							/deep/.btn{
								height: 45px;
								line-height: 45px;
								background: #122133;
							}
						}
					}
				}
			}
			.right {
				background: url('~assets/bg_home_popup_visit.jpg') no-repeat;
				background-size: 100% 100%;
				width: 465px;
				display: flex;
				align-items: center;
				justify-content: center;
				&.active{
					background: url('~assets/bg_home_popup_design.jpg') no-repeat;
					background-size: 100% 100%;
				}
				>div{
					p{
						font-size: 24px;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 40px;
						text-align: center;
					}
					img{
						width: 132px;
						height: 132px;
						display: block;
						margin: 52px auto 0 auto;
					}
				}
			}
		}
	}
}
</style>
