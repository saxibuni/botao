<template>
	<div class="sidebar" :class="{ sidebarie: isIE }">
		<div>
			<div @mouseover="onInfoMouseOver($event)">
				<i>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 724 642"
						style="enable-background:new 0 0 724 642;"
						xml:space="preserve"
					>
						<path
							class="st0"
							d="M639.6,496.6H227.2c-1.3,0-2.6,0.5-3.5,1.4L112.7,609.4c-1,1-2.7,0.3-2.7-1.1V501.5c0-2.7-2.2-4.9-4.9-4.9H84.4
							c-29.2,0-52.9-23.7-52.9-52.9V85c0-29.2,23.7-52.9,52.9-52.9h555.1c29.2,0,52.9,23.7,52.9,52.9v358.7
							C692.4,472.9,668.8,496.6,639.6,496.6z"
						/>
						<circle class="st1" cx="206.9" cy="264.3" r="38.8" />
						<circle class="st1" cx="362" cy="264.3" r="38.8" />
						<circle class="st1" cx="517.1" cy="264.3" r="38.8" />
					</svg>
				</i>
				<p>在线咨询</p>
			</div>
			<div @click="$store.state.dialogVisible = true" @mouseover="onPrizeMouseOver($event)">
				<i>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 574 676"
						style="enable-background:new 0 0 574 676;"
						xml:space="preserve"
					>
						<path class="st0" d="M285.5,399" />
						<path
							class="st1"
							d="M484.6,97.5H441V40.6h-57.4C360.4,15.4,325,0.7,286.5,0.7s-73.8,14.7-97.2,39.9h-57.8v56.9H89.4
							c-48.9,0-88.7,39.8-88.7,88.7v400.4c0,48.9,39.8,88.7,88.7,88.7h395.4c48.9,0,88.7-39.8,88.6-88.7V186.2
							C573.4,137.3,533.6,97.5,484.6,97.5z M179.8,88.8h33.1l7.2-9.9c13.4-18.5,38.9-30,66.4-30s53,11.5,66.4,30l7.2,9.9h32.7V163h-213
							L179.8,88.8L179.8,88.8z M525.2,586.6c0,22.4-18.2,40.6-40.6,40.6H89.4c-22.3,0-40.6-18.2-40.6-40.6V186.2
							c0-22.3,18.2-40.6,40.6-40.6h42.2v65.5H441v-65.5h43.6c22.3,0,40.6,18.2,40.6,40.6V586.6z"
						/>
					</svg>
					<svg
						class="currency"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 574 676"
						style="enable-background:new 0 0 574 676;"
						xml:space="preserve"
					>
						<path
							class="st1 currency"
							d="M398.2,357.2h-59.4l47-47c9.4-9.4,9.4-24.6,0-34.1c-9.4-9.4-24.6-9.4-34.1,0L287,340.8l-64.6-64.6
							c-9.4-9.4-24.6-9.4-34.1,0c-9.4,9.4-9.4,24.6,0,34.1l46.9,47h-59.4c-13.3,0-24.1,10.8-24.1,24.1c0,13.3,10.8,24.1,24.1,24.1h85.7
							v10.6H210c-13.3,0-24.1,10.8-24.1,24.1c0,13.3,10.8,24.1,24.1,24.1h51.4v64.2c0,13.3,10.8,24.1,24.1,24.1
							c13.3,0,24.1-10.8,24.1-24.1V464H364c13.3,0,24.1-10.8,24.1-24.1c0.1-13.3-10.7-24.1-24-24.1h-54.5v-10.6h88.6
							c13.4,0,24.2-10.8,24.1-24.1C422.3,368,411.5,357.2,398.2,357.2z"
						/>
					</svg>
				</i>
				<p>获取报价</p>
			</div>
			<div @click="$store.state.dialogDesign.design = true" @mouseover="onDesignMouseOver($event)">
				<i>
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 710 1100"
						style="enable-background:new 0 0 710 1100;"
						xml:space="preserve"
					>
						<path
							class="st0 ruler"
							d="M4,856v223.6c0,11.4,9.2,20.6,20.6,20.6h660.7c5.5,0,10.7-2.2,14.6-6c3.8-3.8,6.1-9.1,6-14.6V856.1
							c0-5.7-2.3-10.9-6-14.6c-3.7-3.7-8.9-6.1-14.6-6.1H24.6c-5.5,0-10.7,2.2-14.6,6.1C6.2,845.3,4,850.5,4,856L4,856z M662.3,1056.4
							h-41.6v-53.2c0-5.7-2.3-10.9-6.1-14.6c-3.7-3.7-8.9-6.1-14.6-6.1c-11.4,0-20.6,9.2-20.6,20.6v53.2h-36.1v-53.2
							c0-5.7-2.3-10.9-6.1-14.6c-3.7-3.7-8.9-6.1-14.6-6.1c-11.4,0-20.6,9.2-20.6,20.6v53.2h-36.1V952c0-5.7-2.3-10.9-6.1-14.6
							c-3.7-3.7-8.9-6.1-14.6-6.1c-11.4,0-20.6,9.2-20.6,20.6v104.2h-36.1v-53.2c0-5.7-2.3-10.9-6.1-14.6c-3.7-3.7-8.9-6.1-14.6-6.1
							c-11.4,0-20.6,9.2-20.6,20.6v53.2h-36.1v-53.2c0-5.7-2.3-10.9-6.1-14.6c-3.7-3.7-8.9-6-14.6-6c-11.4,0-20.6,9.2-20.6,20.6v53.2
							h-36.1V951.8c0-5.7-2.3-10.8-6-14.6c-3.7-3.7-8.9-6-14.6-6c-11.4,0-20.6,9.2-20.6,20.6V1056h-36.1v-53.2c0-5.7-2.3-10.8-6-14.6
							c-3.7-3.7-8.9-6-14.6-6c-11.4,0-20.6,9.2-20.6,20.6v53.2H47.9V879.2l614.4-0.1V1056.4z"
						/>
						<path
							class="st0 pencil"
							d="M696.6,496.6l-112.2-89.2c-10.7-8.5-26.2-6.7-34.7,4L385,618.2c-2.3,2.9-4,6.4-4.8,10l-29.8,134.1
							c-4,18.2,12.8,34.2,30.8,29.2L518.7,753c5-1.4,9.5-4.4,12.7-8.4l169.1-213.3C709.1,520.6,707.3,505.1,696.6,496.6L696.6,496.6z
							M500.3,709.6l-95.7,27l20.1-94.1l147.1-186.1l79.9,62.4L500.3,709.6z"
						/>
						<polyline class="st1 axis" points="26.1,402 26.1,776.4 308.1,776.4 " />
						<line class="st1 line" x1="177.1" y1="625.6" x2="44.9" y2="757.8" />
					</svg>
				</i>
				<p>预约设计</p>
			</div>
			<div @click="backUp" @mouseover="onBackUpMouseOver($event)">
				<i></i>
				<p>返回顶部</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { device } from 'root/utils';
import { gsap } from 'gsap';

@Component
export default class sidebar extends Vue {
	isIE: boolean = false;
	designTween: any;
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

	onInfoMouseOver(event: MouseEvent) {
		let dots = (<HTMLElement>event.currentTarget).querySelectorAll('svg .st1');
		gsap.fromTo(
			dots,
			{
				opacity: 0
			},
			{
				duration: 0.1,
				opacity: 1,
				stagger: 0.3,
				repeat: 1,
				repeatDelay: 0.3
			}
		);
	}

	onPrizeMouseOver(event: MouseEvent) {
		let currency = (<HTMLElement>event.currentTarget).querySelector('svg.currency');
		gsap.fromTo(
			currency,
			{
				rotateY: 0
			},
			{
				duration: 1.5,
				overwrite: true,
				rotateY: 360
			}
		);
	}

	onDesignMouseOver(event: MouseEvent) {
		let target = (<HTMLElement>event.currentTarget).querySelector('i');
		let pencil = target.querySelector('.pencil');
		let axis = target.querySelector('.axis');
		let line = target.querySelector('.line');
		this.designTween && this.designTween.kill();
		this.designTween = gsap
			.timeline()
			.add(
				gsap.to(pencil, {
					duration: 0.1,
					x: -280,
					y: -374
				})
			)
			.to(pencil, {
				duration: 1,
				keyframes: [
					{ x: -280, y: 0 },
					{ x: 0, y: 0 }
				]
			})
			.fromTo(
				axis,
				{
					duration: 1,
					strokeDashoffset: 660
				},
				{
					strokeDashoffset: 0
				},
				'-=0.7'
			)
			.fromTo(
				line,
				{
					duration: 0.4,
					strokeDashoffset: -187
				},
				{
					strokeDashoffset: 0
				},
				'-=0.4'
			);
	}

	onBackUpMouseOver(event: MouseEvent) {
		let target = (<HTMLElement>event.currentTarget).querySelector('i');
		gsap.to(target, {
			duration: 0.8,
			overwrite: true,
			keyframes: [{ y: -4 }, { y: 0 }, { y: -4 }, { y: 0 }]
		});
	}
}
</script>
<style scoped lang="scss">
@media (max-width: 1440px) {
	body {
		.sidebar {
			right: 0;
			left: auto !important;
			margin-left: 0 !important;
		}
		&.over-hide {
			.sidebar {
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
	&.sidebarie {
		margin-left: 890px !important;
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
			transition: background 0.3s;
			position: relative;
			align-content: center;
			&::after,
			&::before {
				content: '';
				position: absolute;
				border: 2px solid transparent;
				width: 0px;
				transition: 0.3s;
				height: 0px;
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
					width: 60px;
					height: 77px;
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
				margin-bottom: 10px;
				pointer-events: none;
				svg {
					display: block;
				}
			}
			p {
				width: 100%;
				text-align: center;
				pointer-events: none;
			}
			&:nth-child(1) {
				i {
					width: 23px;
					height: 20px;
					.st0 {
						fill: none;
						stroke: #ffffff;
						stroke-width: 61.3882;
						stroke-miterlimit: 10;
					}
					.st1 {
						fill: #ffffff;
					}
				}
			}
			&:nth-child(2) {
				i {
					position: relative;
					width: 20px;
					height: 25px;
					svg {
						position: absolute;
						left: 0;
						top: 0;
						.st0 {
							fill: #61bfff;
						}
						.st1 {
							fill: #ffffff;
						}
					}
				}
			}
			&:nth-child(3) {
				i {
					width: 22px;
					height: 34px;
					svg {
						.axis {
							stroke-dasharray: 660;
						}
						.line {
							stroke-dasharray: 187;
						}
					}
					.st0 {
						fill: #ffffff;
					}
					.st1 {
						fill: none;
						stroke: #ffffff;
						stroke-width: 43;
						stroke-linecap: square;
						stroke-linejoin: round;
						stroke-miterlimit: 10;
					}
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
