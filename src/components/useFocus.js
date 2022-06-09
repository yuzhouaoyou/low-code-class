import { computed } from "vue"

export default function useFocus(data,callback){
	const clearBlockFocus = ()=>{
		data.value.blocks.forEach(e=>e.focus=false);
	}
	
	const blockMouseDown = (e,block) =>{
		e.preventDefault();
		e.stopPropagation();
		
		if(e.shiftKey){
			block.focus = !block.focus;
		}else{
			if(!block.focus){
				clearBlockFocus();
				block.focus = true;
			}
			else
				block.focus = false;
		}
		callback(e);
	}
	
	const focusData = computed(()=>{
		let focus = [];
		let unFocused = [];
		data.value.blocks.forEach(e=>{
			(e.focus?focus:unFocused).push(e);
		});
		return {focus,unFocused};
	})
	
	return {focusData,blockMouseDown,clearBlockFocus};
}