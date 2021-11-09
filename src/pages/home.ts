import { Vue, Component } from 'vue-property-decorator';
import * as PIXI from "pixi.js";
import Button from "../components/button.vue";
require("root/libs/pixi-spine.js");
PIXI.utils.skipHello();

@Component({
	components: {
		Button
	}
})
export default class home extends Vue {
	renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer; //开始不能赋值，不然就会变成vue监测属性

	anList=['新中式','美式','北欧','欧式','现代'];
	imgSrc = require("../assets/portrait/bg_home_b3_pic17.jpg");
	portraitList = [
		require("../assets/portrait/bg_home_b3_pic01.jpg"),
		require("../assets/portrait/bg_home_b3_pic02.jpg"),
		require("../assets/portrait/bg_home_b3_pic03.jpg"),
		require("../assets/portrait/bg_home_b3_pic04.jpg"),
		require("../assets/portrait/bg_home_b3_pic05.jpg"),
		require("../assets/portrait/bg_home_b3_pic06.jpg"),
		require("../assets/portrait/bg_home_b3_pic07.jpg"),
		require("../assets/portrait/bg_home_b3_pic08.jpg"),
		require("../assets/portrait/bg_home_b3_pic09.jpg"),
		require("../assets/portrait/bg_home_b3_pic10.jpg"),
		require("../assets/portrait/bg_home_b3_pic11.jpg"),
		require("../assets/portrait/bg_home_b3_pic12.jpg"),
		require("../assets/portrait/bg_home_b3_pic13.jpg"),
		require("../assets/portrait/bg_home_b3_pic14.jpg"),
		require("../assets/portrait/bg_home_b3_pic15.jpg"),
		require("../assets/portrait/bg_home_b3_pic16.jpg"),
		require("../assets/portrait/bg_home_b3_pic17.jpg"),
		require("../assets/portrait/bg_home_b3_pic18.jpg"),
		require("../assets/portrait/bg_home_b3_pic19.jpg"),
		require("../assets/portrait/bg_home_b3_pic20.jpg"),
		require("../assets/portrait/bg_home_b3_pic21.jpg"),
		require("../assets/portrait/bg_home_b3_pic22.jpg"),
		require("../assets/portrait/bg_home_b3_pic23.jpg"),
		require("../assets/portrait/bg_home_b3_pic24.jpg"),
		require("../assets/portrait/bg_home_b3_pic25.jpg"),
		require("../assets/portrait/bg_home_b3_pic26.jpg"),
		require("../assets/portrait/bg_home_b3_pic27.jpg"),
		require("../assets/portrait/bg_home_b3_pic28.jpg"),
		require("../assets/portrait/bg_home_b3_pic29.jpg"),
		require("../assets/portrait/bg_home_b3_pic30.jpg"),
		require("../assets/portrait/bg_home_b3_pic31.jpg"),
		require("../assets/portrait/bg_home_b3_pic32.jpg"),
		require("../assets/portrait/bg_home_b3_pic34.jpg"),
		require("../assets/portrait/bg_home_b3_pic35.jpg"),
		require("../assets/portrait/bg_home_b3_pic09.jpg"),
	]
	anIndex = 0;
	bannerSwiperOptions: any = {
		speed: 500,
		loop: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next1',
			prevEl: '.prev1'
		},
		preventClicks: false,
		on: {
			click: v => {

			}
		}
	};
	bannerSwiperOptions2: any = {
		speed: 500,
		loop: true,
		slidesPerView: 6,
		slidesPerGroup: 1,
		spaceBetween: 10,
		slideToClickedSlide: true,
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next2',
			prevEl: '.prev2'
		},
		preventClicks: false,
		on: {
			click: v => {

			}
		}
	};
	bannerSwiperOptions3: any = {
		speed: 500,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination3',
			clickable: true,
			type: 'custom',
			renderCustom: function(index, current, total) {
				var customPaginationHtml = "";
				for (var i = 0; i < total; i++) {
					if (i == current - 1) {
						customPaginationHtml +=
						`<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${(i<10?'0'+(i+1):i+1)}</span>`;
					} else {
						customPaginationHtml +=
						`<span class="swiper-pagination-bullet">${(i<10?'0'+(i+1):i+1)}</span>`;
					}
				}
				return customPaginationHtml;
			}
		},
		autoplay: {
			delay: 98000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.next3',
		},
		on: {
		}
	};

	mounted() {

	}

	initSpineAni() {

	}


	onClick(event,item){
		this.imgSrc = item;
		console.log(event);
	}

}
