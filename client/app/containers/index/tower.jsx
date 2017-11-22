import React ,{Component} from 'react';
import TowerWindow from 'components/tower-window';
import TowerHead from 'components/tower-head';
import {Group} from 'react-konva';
 

class Tower extends Component{
	render(){
		return(
			<Group>
			
				<TowerHead/>
				<TowerWindow/>
				
			</Group>
		)
	}
}

export default(Tower);