<template>
	<div class="footer">
		<div>
			<div class="nav-wrap">
				<div class="form">
					<h2>
						已有
						<span>228</span>
						人获取报价
					</h2>
					<ul>
						<li>
							<i></i>
							<input type="text" placeholder="输入您的姓名" />
							<b>*</b>
						</li>
						<li>
							<i></i>
							<input type="text" placeholder="输入您的联系电话" />
							<b>*</b>
						</li>
						<li>
							<i></i>
							<input type="text" placeholder="输入您的装修面积" />
							<b>*</b>
						</li>
						<li class="btn">免费获取报价</li>
					</ul>
				</div>
				<ul>
					<li>
						<h5>精选案例</h5>
						<p>墅装案例</p>
						<p>VR装修体验</p>
					</li>
					<li>
						<h5>设计名人堂</h5>
						<p>擅长户型</p>
						<p>擅长风格</p>
						<p>设计师级别</p>
					</li>
					<li>
						<h5>精工匠艺</h5>
						<p>在施工地</p>
						<p>工艺标准</p>
						<p>管理体系</p>
					</li>
					<li>
						<h5>全案服务</h5>
						<p>严选材料</p>
						<p>软装生活</p>
						<p>无忧售后</p>
					</li>
					<li>
						<h5>最新资讯</h5>
						<p>公司新闻</p>
						<p>装修攻略</p>
						<p>近期活动</p>
						<p>招贤纳士</p>
					</li>
					<li>
						<h5>波涛品牌</h5>
						<p>品牌介绍</p>
						<p>品牌数据</p>
						<p>企业理念</p>
						<p>发展历程</p>
						<p>荣誉资质</p>
						<p>社会责任</p>
						<p>联系我们</p>
					</li>
				</ul>
			</div>
			<div class="icon-wrap">
				<ul>
					<li>
						<div>
							<i>
								<img src="~assets/icons/ic_home_footer_phone.png" alt="" />
							</i>
							Phone number
						</div>
						<h3>400-920-2982</h3>
					</li>
					<li>
						<div>
							<i>
								<img src="~assets/icons/ic_home_footer_mail.png" alt="" />
							</i>
							E-mail
						</div>
						<h3>botaogroup@BTcom</h3>
					</li>
					<li>
						<div>
							<i>
								<img src="~assets/icons/ic_home_footer_address.png" alt="" />
							</i>
							Address
						</div>
						<h3>上海徐汇区中山西路2331号</h3>
					</li>
				</ul>
				<div>
					<img src="~assets/bg_home_footer_qa.jpg" alt="" />
					<div>
						关注波涛了解
						<br />
						最新装饰风格
					</div>
				</div>
			</div>
			<div class="copyright">
				<div class="link">
					<p>Copyright @ 2012-2018 沪ICP备11042317号-8 BOTAO All Rights Reserved    技术支持：<a href="">逐鹿科技</a></p>
					 友情链接：<a href="">波涛公装</a> | <a href="">波涛装饰</a>
				</div>
				<div class="icons">
					<i></i>
					<i></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>
<style scoped lang="scss">
.footer {
	background: rgba(20, 36, 55, 1);
	display: flex;
	justify-content: center;
	color: #fff;
	padding: 90px 0 75px 0;
	box-sizing: border-box;
	max-width: 1920px;
	margin: 0 auto;
	img {
		display: block;
	}
	> div {
		width: 1770px;
		.nav-wrap {
			display: flex;
			justify-content: space-between;
			.form {
				h2 {
					height: 21px;
					font-size: 22px;
					font-family: AlibabaPuHuiTiR;
					font-weight: 400;
					color: #ffffff;
					margin-bottom: 40px;
					span {
						color: #ed5400;
						margin: 0 8px;
					}
				}
				li {
					width: 295px;
					height: 52px;
					background: rgba(11, 23, 37, 1);
					margin-bottom: 10px;
					display: flex;
					align-items: center;
					padding: 0 19px;
					position: relative;
					i {
						width: 14px;
						height: 14px;
						background: url('~assets/icons/ic_home_footer__user_gray.png');
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
						font-size: 18px;
						padding-left: 19px;
						&::placeholder {
							color: #999999;
						}
					}
					&:nth-child(2) {
						i {
							background: url('~assets/icons/ic_home_footer_fhone_gray.png');
						}
					}
					&:nth-child(3) {
						i {
							background: url('~assets/icons/ic_home_footer_area_gray.png');
						}
					}
					&.btn {
						margin-top: 30px;
						cursor: pointer;
						background: #ed5400;
						height: 48px;
						justify-content: center;
						font-size: 18px;
						font-family: AlibabaPuHuiTiR;
						font-weight: 400;
						color: #ffffff;
						text-shadow: 0px 0px 30px rgba(185, 52, 0, 0.55);
					}
				}
			}
			> ul {
				display: flex;
				flex: 1;
				justify-content: flex-end;
				margin-left: 217px;
				li {
					&:not(:first-child) {
						margin-left: 144px;
					}
					h5 {
						height: 21px;
						font-size: 22px;
						font-family: AlibabaPuHuiTiR;
						font-weight: 400;
						color: #ffffff;
						margin-bottom: 41px;
						white-space: nowrap;
					}
					p {
						white-space: nowrap;
						height: 38px;
						font-size: 18px;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #999999;
						transition: color 0.3s;
						cursor: pointer;
						&:hover {
							color: #fff;
						}
					}
				}
			}
		}
		.icon-wrap {
			margin-top: 39px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			ul {
				display: flex;
				color: #fff;
				li {
					> div {
						height: 13px;
						font-size: 16px;
						font-family: Gilroy;
						font-weight: 400;
						color: #999999;
						display: flex;
						align-items: center;
						i {
							width: 36px;
							height: 36px;
							margin-right: 19px;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
					h3 {
						height: 17px;
						font-size: 20px;
						font-family: Gilroy;
						font-weight: bold;
						color: #ffffff;
						margin-top: 16px;
					}
					&:nth-child(2){
						margin-left: 313px;
						margin-right: 267px;
					}
				}
			}
			>div{
				display: flex;
				align-items: center;
				font-size: 18px;
				font-family: Alibaba PuHuiTi;
				font-weight: 400;
				color: #FFFFFF;
				img{
				 width: 132px;
				 height: 132px;
				 margin-right: 45px;
				}
				div{
					line-height: 25px;
				}
			}
		}
		.copyright{
			display: flex;
			justify-content: space-between;
			margin-top: 49px;
			.link{
					height: 49px;
					font-size: 18px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #666666;
					line-height: 30px;
					a{
						color: #666666;
						text-decoration: none;
						transition: .3s;
						&:hover{
							color: #fff;
						}
					}
			}
			.icons{
				display: flex;
				align-items: center;
				i{
					width: 26PX;
					height: 26PX;
					background: url('~assets/icons/iconlist.png') no-repeat;
					background-position: -11PX -11PX;
					margin-left: 21px;
					cursor: pointer;
					transition: .3s;
					&:nth-child(2){
						background-position: -41PX -11PX;
					}
					&:hover{
						background-position-y: -43PX;
					}
				}
			}
		}
	}
}
</style>
