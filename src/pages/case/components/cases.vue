<template>
	<div class="cases wow">
		<ul>
			<li>
				<div class="imgBox" @click.stop="$router.push('/case/detail')">
					<img src="~assets/bg_b1_part3_pic1.jpg" alt="" />
				</div>
				<div class="content">
					<div class="top">
						<div class="topLeft" @click.stop="$router.push('/case/detail')">
							<p>上海东方颐城</p>
							<p>
								<span>现代风格</span>
								<span>别墅</span>
								<span>120㎡</span>
							</p>
						</div>
						<div class="topRight">
							<!-- <i @click="fn"></i> -->
							<img src="~assets/icons/ic_b1_part3_like1.png" alt="" v-if="flag" @click="(flag = !flag), loveNum++" />
							<img src="~assets/icons/ic_b1_part3_like2.png" alt="" v-else @click="(flag = !flag), loveNum--" />
							<p>{{ loveNum }}个喜欢</p>
						</div>
					</div>
					<div class="bottom" @click.stop="$router.push('/design/detail')">
						<div class="bottomLeft">
							<div class="imgBox2">
								<img src="~assets/bg_b1_part3_user4.png" alt="" />
							</div>
							<div class="text">
								<p>米航</p>
								<p>首席设计师</p>
							</div>
						</div>
						<Button @click.native="$store.state.dialogDesign.design = true" :text="'找TA设计'" />
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Button from 'root/components/button.vue';
@Component({
	components: {
		Button
	}
})
export default class Caese extends Vue {
	loveNum = 2000;
	flag = true;
	@Prop({
		required: false,
		type: Object,
		default: () => {}
	})
	data!: any;
	mounted() {
		this.restartWow();
	}
}
</script>
<style lang="scss" scoped>
.cases {
	margin-bottom: 40px;
	opacity: 0;
	animation: fade-in 1s;
	animation-fill-mode: forwards;
	ul {
		li {
			display: flex;
			flex-direction: column;
			height: 610px !important;
			cursor: pointer;
			&:hover {
				.topLeft {
					p {
						&:nth-of-type(1) {
							color: #eb551d !important;
						}
					}
				}
			}
			.imgBox {
				width: 567px;
				height: 345px;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				overflow: hidden;
				&:hover {
					img {
						transform: scale($imgScale);
					}
				}
				img {
					width: 100%;
					height: 100%;
					transition: transform 0.3s;
				}
			}
			.content {
				width: 567px;
				height: 265px;
				box-shadow: 0px 3px 17px 1px rgba(0, 0, 0, 0.05);
				.top {
					padding: 35px 0px 30px 0px;
					margin: 0 50px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #eeeeee;
					.topLeft {
						p {
							&:nth-of-type(1) {
								font-size: 28px;
								color: #000000;
								transition: all 0.3s;
							}
							&:nth-of-type(2) {
								margin-top: 15px;
								// margin-top: 35px;
								font-size: 18px;
								color: #888888;
								display: flex;
								align-items: center;
								span {
									padding: 0 15px;
									border-right: 1px solid #cccccc;
									height: 16px;
									display: flex;
									align-items: center;
									&:first-of-type {
										padding-left: 0;
									}
									&:last-of-type {
										padding-right: 0;
										border: none;
									}
								}
							}
						}
					}
					.topRight {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-top: 5px;
						img {
							width: 26px;
							height: 23px;
							transition: all 0.3s;
						}
						p {
							margin-top: 10px;
							font-size: 16px;
							color: #122133;
							// font-weight: 600;
						}
					}
				}
				.bottom {
					padding: 25px 50px 35px 50px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					&:hover {
						.imgBox2 {
							img {
								transform: scale(1.1);
							}
						}
					}
					.bottomLeft {
						display: flex;
						align-items: center;
						.imgBox2 {
							width: 75px;
							height: 75px;
							border-radius: 50%;
							display: flex;
							align-items: center;
							overflow: hidden;
							img {
								transition: all 0.3s;
							}
						}

						.text {
							margin-left: 20px;
							p {
								&:nth-of-type(1) {
									color: #122133;
									font-size: 20px;
									// font-weight: 600;
								}
								&:nth-of-type(2) {
									margin-top: 10px;
									color: #888888;
									font-size: 16px;
								}
							}
						}
					}
					.button-wrap {
						width: 150px;
						height: 48px;
						/deep/.btn {
							margin: 0;
							width: 150px;
							height: 48px;
							display: flex;
							justify-content: center;
							align-items: center;
						}
					}
				}
			}
		}
	}
}
</style>
