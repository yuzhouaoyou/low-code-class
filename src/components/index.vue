<template>
	<div class="sb">
		<div class="sb_left">
			<IndexLeft v-for="component in config.componentList" :component="component" :dragStart="dragStart" :dragEnd="dragEnd"></IndexLeft>
		</div>
		<div class="sb_right">
			右
		</div>
		<div class="sb_top">
			上
		</div>
		<div class="sb_cont">
			<div class="sb_cont_canvas">
				<div class="sb_cont_canvas_cont" :style="contaninerStyle" ref="contRef" :onMousedown="contMouseDown">
					<IndexBlock :class="block.focus?'index_block_focus':''" :onMousedown="e=>blockMouseDown(e,block)" v-for="block in data.blocks" :block="block"></IndexBlock>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import './index.scss';
	import {computed,inject,ref} from 'vue'
	import IndexBlock from './index-block.jsx'
	import IndexLeft from './index-left.jsx'
	const config = inject('config');
	const contRef = ref(null);
			
	const prop = defineProps({
		modelValue:Object
	});
	
	const emits = defineEmits(['update:modelValue']);
	
	const data = computed({
		get(){
			return prop.modelValue;
		},
		set(newValue){
			emits('update:modelValue',newValue);
		}
	})
	
	const contaninerStyle = computed(()=>{
		return {
			width:`${data.value.contaniner.width}px`,
			height:`${data.value.contaniner.width}px`
		};
	})
	
	import useMenuDrag from './useMenuDrag.js'
	const {dragStart,dragEnd} = useMenuDrag(contRef,data);
	
	import useFocus from './useFocus.js'
	const {focusData,blockMouseDown,clearBlockFocus} = useFocus(data,e=>mouseDown(e));
	
	import useFocusDrag from './useFocusDrag.js'
	const mouseDown = useFocusDrag(focusData);
	
	
	const contMouseDown = ()=>clearBlockFocus();
	
</script>

<style>
</style>
