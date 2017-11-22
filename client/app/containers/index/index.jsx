import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Layer,Stage, Group} from 'react-konva';
import Tower from 'containers/index/tower';
import image from 'images/vector.jpg'

class IndexContainer extends Component{

	render(){
		return(
			<div>
			  {/*<RaisedButton label="Default" />*/}
			  <img src={image} alt="home town" style={{height:700,width :1200}} />
			  {/*<Stage width={1000} height={700}>
		        <Layer>
		          <Tower/>
		        </Layer>
		      </Stage>*/}
			</div>
		)
	}
}

export default(IndexContainer);
