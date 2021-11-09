<template>
	<div class="case-page">
		<Banner :data="bannerData" />
		<router-view />
	</div>
</template>

<script lang="ts">
import Case from './index';
export default Case;
</script>

<style lang="scss"></style>
