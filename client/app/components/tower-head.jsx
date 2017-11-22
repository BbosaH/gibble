import React from 'React';
import {RegularPolygon} from 'react-konva';

const TowerHead = (props)=>{

	return (
		
		<RegularPolygon
			x={window.innerWidth/2}
			y={120}
			sides={3}
            radius={80}
			fill='#EA5200'
			
	   	/>
	)
}

export default (TowerHead)