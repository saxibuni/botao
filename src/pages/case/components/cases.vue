<template>
	<div class="cases wow">
		<ul>
			<li>
				<div class="imgBox" @click.stop="$router.push('/case/detail')">
					<img :src="web_url + caseData.img" alt="" />
				</div>
				<div class="content">
					<div class="top">
						<div class="topLeft" @click.stop="$router.push('/case/detail')">
							<p>{{ caseData.title }}</p>
							<p>
								<span>{{ caseData.style }}</span>
								<span>{{ caseData.hx }}</span>
								<span>{{ caseData.mj }}</span>
							</p>
						</div>
						<div class="topRight">
							<!-- <i @click="fn"></i> -->
							<div>
								<img src="~assets/icons/ic_b1_part3_like1.png" alt="" @click="(flag = !flag), caseData.click++" />

								<img v-if="!isIE" class="img" :class="{ img2: !flag }" src="~assets/icons/ic_b1_part3_like2.png" alt="" @click="(flag = !flag), caseData.click--" />
								<img v-if="isIE && !flag" src="~assets/icons/ic_b1_part3_like2.png" alt="" @click="(flag = !flag), caseData.click--" />
							</div>
							<p>{{ caseData.click }}个喜欢</p>
						</div>
					</div>
					<div class="bottom">
						<div class="bottomLeft">
							<div class="imgBox2">
								<img :src="web_url + caseData.des_info.faceimg" alt="" />
							</div>
							<div class="text">
								<p>{{ caseData.des_info.author }}</p>
								<p>{{ caseData.des_info.station }}</p>
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
import { device } from 'root/utils';

@Component({
	components: {
		Button
	}
})
export default class Caese extends Vue {
	web_url = 'http://btgwcs.zhulu76.com/';
	flag = true;
	isIE: boolean = false;
	created() {
		this.isIE = device.browser.ie;
		console.log(111, this.caseData);
	}
	@Prop({
		required: false,
		type: Object,
		default: () => {}
	})
	data!: any;
	@Prop({
		required: false,
		type: Object,
		default: () => {}
	})
	caseData!: any;
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
						div {
							width: 26px;
							height: 23px;
							position: relative;
							transition: transform 0.3s;
							img {
								position: absolute;
								left: 0;
								top: 0;
								width: 26px;
								height: 23px;
								transition: all 0.3s;
								&.img {
									clip-path: ellipse(0% 0% at 0% 100%);
									z-index: 3;
								}
								&.img2 {
									clip-path: ellipse(140% 141% at 0% 100%);
								}
							}
							&:hover {
								transform: scale(1.1);
							}
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
