import React from 'react';
class SingleCharacterRow extends React.Component {
	
  constructor(props) {
    super(props);

    
	  
	  
   }
	
	
   
	
   render() {
      return (
		  
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.height}</td>
            <td>{this.props.data.mass}</td>
		    <td>{this.props.data.gender}</td>
         </tr>
		  
            
      );
   }
}
export default SingleCharacterRow;