import {defineComponent,inject} from 'vue'

export default defineComponent({
	props:{
		component:Object,
		dragStart:Function,
		dragEnd:Function
	},
	setup(props){
		return ()=> <div class="sb_left_item" draggable onDragstart={e => props.dragStart(e,props.component)} onDragend={props.dragEnd}>
			<span>{props.component.label}</span>
			<div>{props.component.preview()}</div>
		</div>
	}
})