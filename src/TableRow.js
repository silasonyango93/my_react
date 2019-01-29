import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import axios from "axios";
import querystring from "querystring";
class TableRow extends React.Component {
	
  constructor(props) {
    super(props);

	  this.state = {current_icon:FaHeart,show_my_icon:false}
	  
	  this.open_new_tab = this.open_new_tab.bind(this);
   }
	
	
   open_new_tab() {
	   const url = 'http://127.0.0.1:3000/about';
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
		
		
	var user_id=window.sessionStorage.getItem("UserId");
	  
      
	  
    axios.post('http://35.188.176.184:80/get_specific_my_favorites', querystring.stringify({column_name: "UserId",
																			    search_value: user_id,
																			  }))
		.then((response) => {
        
			var my_json=response.data.results;
		    
		
		my_json.forEach((item) => {
            if(item.url===this.props.data.url){
			  this.setState({
              ...this.state,
              show_my_icon: true
             });
			}
        });
		
        })
        
    
     .catch((response) => {
        //handle error
        console.log(response);
      });
		
		
   
   }
	
	
	componentWillUnmount(){window.sessionStorage.setItem("current_icon", "heart_icon");}
	
   render() {
      return (
		  
         <tr onClick={this.open_new_tab}>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.height}</td>
            <td>{this.props.data.mass}</td>
		    <td>{this.props.data.gender}</td>
		  <td><this.state.current_icon style={this.state.show_my_icon ? {} : { display: 'none' }} /></td>
		  
         </tr>
		  
            
      );
   }
}
export default TableRow;