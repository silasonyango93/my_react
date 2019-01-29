import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
class TableRow extends React.Component {
	
  constructor(props) {
    super(props);

	  this.state = {current_icon:FaHeart}
	  
	  this.open_new_tab = this.open_new_tab.bind(this);
   }
	
	
   open_new_tab() {
	   const url = 'http://localhost:3000/about';
       var character_url = this.props.data.url;
	   character_url=character_url+"?format=json";
	   var w = window.open(url);
	   w.character_url = character_url;
	   
    } 
	
	
	componentWillMount(){
   var current_icon=window.sessionStorage.getItem("current_icon");
	   if(current_icon==="trash_icon"){
	   this.setState({
          ...this.state,
          current_icon: FaTrash
        });
	   }else{
	   this.setState({
          ...this.state,
          current_icon: FaHeart
        });
	   }
   
   }
	
	
	componentWillUnmount(){window.sessionStorage.setItem("current_icon", "heart_icon");}
	
   render() {
      return (
		  
         <tr onClick={this.open_new_tab}>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.height}</td>
            <td>{this.props.data.mass}</td>
		    <td>{this.props.data.gender}</td>
		  <td><this.state.current_icon /></td>
		  
         </tr>
		  
            
      );
   }
}
export default TableRow;