<template>
	<div class="layout">
		<Header v-if="$store.state.menuData" />
		<slot />
		<Footer v-if="$store.state.footData" />
		<Sidebar v-if="$store.state.footData" />
		<CapitalRetention/>
		<Dialog />
		<MakeAppointment />
	</div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style lang="scss">
.layout {
	.out-page {
		min-height: 100vh;
	}
}
</style>
