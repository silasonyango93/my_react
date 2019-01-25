import React from 'react';
import TableRow from './TableRow.js';
class Table extends React.Component {
	constructor(props){
        super(props);
	
	this.state = {data : this.props.dataProp}
	}
   render() {
      return (
		  <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Student's fee statements
                        </div>
                        
                        <div class="panel-body">
                           <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
               <tbody>
		  
		  
         {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />
	  )}
		  
		  
		  </tbody>
                            </table>
							
							
                            
                           
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>


            
      );
   }
}
export default Table;