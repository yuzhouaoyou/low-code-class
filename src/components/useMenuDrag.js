export default function useMenuDrag(contRef,data){
	let currentComponent = null;
		
	const dragenter = e=>{
		e.dataTransfer.dropEffect = 'move';
	}
	
	const dragover = e=>{
		e.preventDefault();
	}
	
	const dragleave = e=>{
		e.dataTransfer.dropEffect = 'none';
	}
	
	const drop = e=>{
		data.value.blocks.push({
			top:e.offsetY,
			left:e.offsetX,
			zIndex:1,
			key:currentComponent.key,
			alignCenter:true
		})		
		currentComponent = null;
	}
	
	const dragStart = (e,component)=>{
		contRef.value.addEventListener('dragenter',dragenter);
		contRef.value.addEventListener('dragover',dragover);
		contRef.value.addEventListener('dragleave',dragleave);
		contRef.value.addEventListener('drop',drop);
		currentComponent = component;
	}
	
	const dragEnd = (e)=>{
		contRef.value.removeEventListener('dragenter',dragenter);
		contRef.value.removeEventListener('dragover',dragover);
		contRef.value.removeEventListener('dragleave',dragleave);
		contRef.value.removeEventListener('drop',drop);
	}
	
	return{
		dragStart,
		dragEnd
	}
}
