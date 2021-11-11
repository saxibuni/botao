<template>
	<div class="layout">
		<Header v-if="$store.state.menuData" />
		<slot />
		<Footer v-if="$store.state.footData" />
		<Sidebar v-if="$store.state.footData" />
		<CapitalRetention/>
		<MakeAppointment />
		<Dialog />

	</div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style lang="scss">
.layout {
	max-width: 1920px;
	margin: 0 auto;
	.out-page {
		min-height: 100vh;
	}
}
</style>
