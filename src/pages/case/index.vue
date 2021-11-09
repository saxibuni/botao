<template>
	<div class="case-page">
		<Banner :data="vrbannerData" v-if="$route.name == 'case-listvr'" />
		<Banner :data="bannerData" v-else />
		<router-view />
	</div>
</template>

<script lang="ts">
import Case from './index';
export default Case;
</script>

<style lang="scss"></style>
