<template>
	<div class="design-page">
		<Banner :data="bannerData" />
		<router-view />
	</div>
</template>

<script lang="ts">
import Design from './index';
export default Design;
</script>

<style lang="scss"></style>
