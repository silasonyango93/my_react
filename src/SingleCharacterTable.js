import React from "react";

import SingleCharacterTableHeader from "./SingleCharacterTableHeader.js";

class SingleCharacterTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.dataProp,home_world_details:[] };//this.props.dataProp populates the first table while home_world_details:[] populates the second table
    console.log(this.props.dataProp.name);
	  
	  
  }
	
   componentDidMount() {
	   /*The line below should be replaced with 
	   
	   var home_world_url =this.props.dataProp.homeworld;
	   
	   However, when i console.log(home_world_url); after this assignment,it remains
	   undefined yet the data in the table below uses the data from this.props.dataProp.*
	   and the "this.props.dataProp.homeworld" is one of the rows on the table and it is rendering.Check the  table on a browser
	   
	   */
	   
	  var home_world_url = "https://swapi.co/api/planets/1/";//I have hard-coded this url.It should be fetched from this.props.dataProp.homeworld, which is not working
	                                                         //Data from this url is used to feed the second table below.It is fed into this.state.home_world_details array
	  home_world_url=home_world_url+"?format=json";
    fetch(home_world_url)
      .then(response => {
        return response.json();
      })
      .then(data => {
         
        this.setState({
          ...this.state,
          home_world_details: data
        });
      });
console.log(home_world_url);
  }
	
  render() {
    return (
		<div>
		
      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">Personal Detalis</div>

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
		       <tr>
                   <td>HAIR COLOUR</td>
                   <td>{this.props.dataProp.hair_color}</td>
               </tr>
		       <tr>
                   <td>SKIN COLOUR</td>
                   <td>{this.props.dataProp.skin_color}</td>
               </tr>
		       <tr>
                   <td>EYE COLOUR</td>
                   <td>{this.props.dataProp.eye_color}</td>
               </tr>
		       <tr>
                   <td>BIRTH YEAR</td>
                   <td>{this.props.dataProp.birth_year}</td>
               </tr>
		       <tr>
                   <td>HOME WORLD</td>
                   <td>{this.props.dataProp.homeworld}</td>
               </tr>
		          
		
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
		
		<br/>
		<br/>
		
		<div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">Home World</div>

            <div class="panel-body">
              <table
                width="100%"
                class="table table-striped table-bordered table-hover"
                id="dataTables-example"
		        
              >
                <tbody>
		        
                <tr>
                   <td>NAME</td>
                   <td>{this.state.home_world_details.name}</td>
               </tr>
		       <tr>
                   <td>ROTATION PERIOD</td>
                   <td>{this.state.home_world_details.rotation_period}</td>
               </tr>
		       <tr>
                   <td>ORBITAL PERIOD</td>
                   <td>{this.state.home_world_details.orbital_period}</td>
               </tr>
		       <tr>
                   <td>DIAMETER</td>
                   <td>{this.state.home_world_details.diameter}</td>
               </tr>
		       <tr>
                   <td>CLIMATE</td>
                   <td>{this.state.home_world_details.climate}</td>
               </tr>
		       <tr>
                   <td>GRAVITY</td>
                   <td>{this.state.home_world_details.gravity}</td>
               </tr>
		       <tr>
                   <td>TERRAIN</td>
                   <td>{this.state.home_world_details.terrain}</td>
               </tr>
		       <tr>
                   <td>SURFACE WATER</td>
                   <td>{this.state.home_world_details.surface_water}</td>
               </tr>
		       <tr>
                   <td>POPULATION</td>
                   <td>{this.state.home_world_details.population}</td>
               </tr>
		          
		
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
		
		
		</div>
    );
  }
}
export default SingleCharacterTable;