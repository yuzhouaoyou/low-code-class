export default function useFocusDrag(focusData){
	let dragState = {
		startX:0,
		startY:0
	}
	const mouseDown = e=>{
		dragState = {
			startX: e.clientX,
			startY: e.clientY,
			startPos: focusData.value.focus.map(({top,left})=>({top,left}))
		}
		
		document.addEventListener('mousemove',mouseMove);
		document.addEventListener('mouseup',mouseUp);
	}
	
	const mouseUp = e=>{
		document.removeEventListener('mousemove',mouseMove);
		document.removeEventListener('mouseup',mouseUp);
	}
	
	const mouseMove = e=>{
		focusData.value.focus.forEach((block,index)=>{
			block.top = dragState.startPos[index].top + (e.clientY - dragState.startY);
			block.left = dragState.startPos[index].left + (e.clientX - dragState.startX);
		})
	}
	
	return mouseDown;
}