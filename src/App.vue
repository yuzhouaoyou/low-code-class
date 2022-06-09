<template>
	<index v-model="data"></index>
</template>

<script setup>
	import {defineComponent,ref,provide} from 'vue'
	import index from './components/index.vue'
	import dataJ from './data.json'
	import {registerConfig as config} from 	'./components/index-config.jsx'
	
	const data = ref(dataJ);
	
	provide('config',config);
</script>

<style type="scss">
	#app{
		left: 20px;
		bottom: 20px;
		right: 20px;
		top: 20px;
		position: fixed;
	}
</style>
