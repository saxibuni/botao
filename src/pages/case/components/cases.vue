<template>
	<div class="cases wow">
		<ul>
			<li>
				<div class="imgBox" @click.stop="push">
					<img :src="$store.state.footData.web_url + caseData.img" alt="" />
					<img src="~assets/ic_b3_part2_vr.png" alt="" v-if="caseData.typename == 'VR装修体验'" />
				</div>
				<div class="content">
					<div class="top">
						<div class="topLeft" @click.stop="push">
							<p>{{ caseData.title }}</p>
							<p>
								<span v-if="caseData.style">{{ caseData.style }}</span>
								<span v-if="caseData.hx">{{ caseData.hx }}</span>
								<span>{{ caseData.mj }}</span>
							</p>
						</div>
						<div class="topRight">
							<!-- <i @click="fn"></i> -->
							<div @click="getLove(caseData.aid)">
								<img src="~assets/icons/ic_b1_part3_like1.png" alt="" />
								<img v-if="!isIE" class="img" :class="{ img2: caseData.love + Number(caseData.likejs) > 0 }" src="~assets/icons/ic_b1_part3_like2.png" alt="" />
								<img v-if="isIE && caseData.love + Number(caseData.likejs) > 0" src="~assets/icons/ic_b1_part3_like2.png" alt="" />
							</div>
							<p>{{ caseData.love + Number(caseData.likejs) }}个喜欢</p>
						</div>
					</div>
					<div class="bottom" @click.stop="push">
						<div class="bottomLeft">
							<div class="imgBox2">
								<img :src="$store.state.footData.web_url + caseData.des_info.faceimg" alt="" />
							</div>
							<div class="text">
								<p>{{ caseData.des_info.title }}</p>
								<p>{{ caseData.des_info.station }}</p>
							</div>
						</div>
						<!-- <Button @click.native="$store.state.dialogDesign.design = true" :text="caseData.typename" v-if="caseData.typename == 'VR装修体验'" /> -->
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
import utils from 'root/utils';

@Component({
	components: {
		Button
	}
})
export default class Caese extends Vue {
	love: number = 0;
	flag = true;
	isIE: boolean = false;
	created() {
		this.isIE = device.browser.ie;
		// this.love = this.caseData.love;
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
	getLove(aid) {
		if (this.caseData.is_zan == 1) return;
		utils.service.querylove(
			{
				aid: aid
			},
			res => {
				if (res.status == 200) {
					this.love = res.data.num + Number(this.caseData.likejs);
					this.caseData.love = res.data.num;
					this.caseData.is_zan = 1;
				}
			}
		);
		this.caseData.is_zan = 1;
	}
	push(e) {
		if (e.target.className == 'btn') return;
		if (this.$route.path == '/case/detail') {
			this.$router.push({ query: { aid: this.caseData.aid } });
			setTimeout(() => {
				window.location.reload();
			}, 0);
		} else {
			if (this.caseData.typename == 'VR装修体验') {
				window.open(this.caseData.velink);
			} else {
				this.$router.push({ path: '/case/detail', query: { aid: this.caseData.aid } });
			}
		}
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
				position: relative;
				&:hover {
					img {
						transform: scale($imgScale);
					}
				}
				img {
					width: 100%;
					height: 100%;
					transition: transform 0.3s;
					&:nth-of-type(2) {
						position: absolute;
						left: 50%;
						top: 50%;
						width: 120px;
						height: 120px;
						transform: translate(-50%, -50%);
					}
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
						padding-right: 120px;
						p {
							&:nth-of-type(1) {
								font-size: 28px;
								color: #000000;
								white-space: nowrap;
								text-overflow: ellipsis;
								width: 250px;
								overflow: hidden;
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
									white-space: nowrap;
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
							white-space: nowrap;
						}
					}
				}
				.bottom {
					padding: 25px 50px 35px 50px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					&:hover {
						.bottomLeft {
							img {
								border-radius: 50%;
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
							-webkit-transform: rotate(0deg);
							img {
								width: 100%;
								height: 100%;
								transition: all 0.3s;
								border-radius: 50%;
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
