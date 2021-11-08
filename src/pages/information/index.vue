<template>
	<div class="information">
		<Banner />
		<router-view />
	</div>
</template>

<script lang="ts">
import Infomation from './index';
export default Infomation;
</script>

<style lang="scss">
.information {
	img {
		vertical-align: bottom;
	}

}
</style>
