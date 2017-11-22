import React from 'React';
import {Rect} from 'react-konva';

const TowerWindow = (props)=>{

	return (
		
		<Rect
			x={10}
			y={10}
			width={50}
			height={50}
			fill={window.Konva.Util.getRandomColor()}
			shadowBlur={5}
			
	   	/>
	)
}

export default (TowerWindow)