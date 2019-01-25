import React from "react";

import SingleCharacterTableHeader from "./SingleCharacterTableHeader.js";
class SingleCharacterTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.dataProp };
    console.log(this.props.dataProp)
	  
	  
  }
	
   
	
  render() {
    return (
      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">Student's fee statements</div>

            <div class="panel-body">
              <table
                width="100%"
                class="table table-striped table-bordered table-hover"
                id="dataTables-example"
		        
              >
                <tbody>
		        
                <tr>
                   <td>NAME</td>
                   <td>{this.props.dataProp.name}</td>
               </tr>
		       <tr>
                   <td>HEIGHT</td>
                   <td>{this.props.dataProp.height}</td>
               </tr>
		       <tr>
                   <td>MASS</td>
                   <td>{this.props.dataProp.mass}</td>
               </tr>
		       <tr>
                   <td>GENDER</td>
                   <td>{this.props.dataProp.gender}</td>
               </tr>
		          
		
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleCharacterTable;