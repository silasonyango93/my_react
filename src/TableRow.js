import React from 'react';
class TableRow extends React.Component {
	
  constructor(props) {
    super(props);

    
	  
	  this.open_new_tab = this.open_new_tab.bind(this);
   }
	
	
   open_new_tab() {
	   const url = 'https://github.com/silasonyango93/my_react/blob/master/src/Home.js';
        window.open(url, '_blank');
	   console.log("Imekubali");
    }  
	
   render() {
      return (
		  
         <tr onClick={this.open_new_tab}>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.height}</td>
            <td>{this.props.data.mass}</td>
		    <td>{this.props.data.gender}</td>
         </tr>
		  
            
      );
   }
}
export default TableRow;