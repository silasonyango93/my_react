import React from 'react';
import { FaHeart } from 'react-icons/fa';
class TableRow extends React.Component {
	
  constructor(props) {
    super(props);

    
	  
	  this.open_new_tab = this.open_new_tab.bind(this);
   }
	
	
   open_new_tab() {
	   const url = 'http://localhost:3000/about';
       var character_url = this.props.data.url;
	   character_url=character_url+"?format=json";
	   var w = window.open(url);
	   w.character_url = character_url;
	   
    }  
	
   render() {
      return (
		  
         <tr onClick={this.open_new_tab}>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.height}</td>
            <td>{this.props.data.mass}</td>
		    <td>{this.props.data.gender}</td>
		  <td><FaHeart /></td>
		  
         </tr>
		  
            
      );
   }
}
export default TableRow;