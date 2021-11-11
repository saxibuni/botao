<template>
	<div class="search-wrap" :class="{active:searchShow}">
		<h2>
			<span @click="searchShow=false">
				<img src="~assets/icons/ic_home_menu_close.png" alt="" />
				CLOSE
			</span>
		</h2>
		<div>
			<h3>我们，让空间更美好</h3>
			<h4>BETTER SPACE,BETTER LIFE</h4>
			<div>
				<input ref="search" @keyup.13="onSearch()" v-model="keyword" type="text" placeholder="请输入关键词进行搜索" />
				<div @click="onSearch()">
					<img src="~assets/icons/ic_home_search.png" alt="" />
				</div>
			</div>
			<h5>
				<span @click="keyword='轻奢/现代/港式'">轻奢/现代/港式</span>
				<span @click="keyword='中式/新中式'">中式/新中式</span>
				<span @click="keyword='欧式/法式/地中海/美式'">欧式/法式/地中海/美式</span>
				<span @click="keyword='日式/侘寂/工业风'">日式/侘寂/工业风</span>
			</h5>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class search extends Vue {
	@Watch('searchShow')
	onSearchFUn() {
		if (this.searchShow) {
			(<any>this.$refs)['search'].focus();
		} else {
			(<any>this.$refs)['search'].blur();
		}
	}
	keyword='';
	searchShow: boolean = false;
	onSearch() {
		if (!this.keyword) {
			this.$store.state.dialog={
				state:2,
				text:'请输入需要搜索的内容'
			}
			return;
		}
		this.searchShow = false;
		this.$router.push({name:'search'})
	}
}
</script>
<style scoped lang="scss">
.search-wrap {
	position: fixed;
	top: 0;
	left: 50%;
	width: 100%;
	max-width: 1920px;
	height: 971px;
	background: url('~assets/bg_home_search.jpg') no-repeat;
	background-size: 100% 100%;
	z-index: 999;
	transform: translateX(-50%) translateY(-100%);
	transition: transform .3s;
	padding: 31px 87px 0 0;
	h2 {
		display: flex;
		justify-content: flex-end;
		font-size: 16px;
		font-weight: 400;
		color: #ed5400;
		img {
			width: 18px;
			margin-right: 11px;
			transition: .3s;
		}
		span {
			cursor: pointer;
			display: flex;
			align-items: center;
			&:hover{
				img{
					transform: rotate(-90deg);
				}
			}
		}
	}
	> div {
		padding-top: 215px;
		color: #fff;
		font-size: 18px;
		text-align: center;
		h3 {
			height: 45px;
			font-size: 46px;
			font-weight: 400;
		}
		h4 {
			height: 23px;
			font-size: 26px;
			font-family: Gilroy-Regular;
			font-weight: 400;
			margin: 30px 0 84px 0;
		}
		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			input{
				width: 754px;
				height: 76px;
				background: #FFFFFF;
				font-size: 18px;
				border: none;
				padding-left: 50px;
				padding-right:50px;

				font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
				&::placeholder{
					font-size: 18px;
					font-weight: 400;
					font-family: 'Microsoft Yahei', -apple-system, 'PingFang SC', 'Helvetica Neue', STHeiti, Tahoma, Simsun, sans-serif;
					color: #888888;
				}
			}
			div {
				width: 76px;
				height: 76px;
				background: #ed5400;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 10px;
				cursor: pointer;
				img{
					width: 25px;
				}
			}
		}
		h5{
			display: flex;
			justify-content: center;
			margin-top: 77px;
			span{
				font-size: 18px;
				font-weight: 400;
				color: #FFFFFF;
				cursor: pointer;
				&:not(:first-child){
					margin-left: 40px;
				}
			}
		}
	}
	&.active{
		transform: translateX(-50%) translateY(0) ;
	}
}
</style>
