import React from "react";
import MyTableRow from "./MyTableRow.js";
import TableHeader from "./TableHeader.js";
class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.dataProps };
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
		        <TableHeader />
                  {this.props.dataProp.map((person, i) => (
                    <MyTableRow key={i} data={person} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyTable;