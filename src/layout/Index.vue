<template>
	<div class="layout">
		<Header v-if="$store.state.menuData" />
		<slot />
		<Footer v-if="$store.state.menuData" />
		<Sidebar v-if="$store.state.footData" />
		<CapitalRetention/>
		<MakeAppointment />
		<DialogTip />
		<Agreement />
	</div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style lang="scss">
.layout {
	max-width: 1920px;
	min-width: $minViewWidth;
	margin: 0 auto;
	.out-page {
		min-height: 100vh;
	}
}
</style>
