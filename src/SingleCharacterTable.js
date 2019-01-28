import React from "react";
import { FaHeart } from 'react-icons/fa';
import axios from "axios";
import querystring from "querystring";

import SingleCharacterTableHeader from "./SingleCharacterTableHeader.js";

class SingleCharacterTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.dataProp,home_world_details:[], current_like_icon_colour:'black',UserId:'' };
    console.log(this.props.dataProp.name);
	  
	this.on_like_icon_pressed = this.on_like_icon_pressed.bind(this);  
  }
	
   componentDidMount() {
	   var user_id=window.sessionStorage.getItem("UserId");
       this.setState({
          ...this.state,
          UserId: user_id
        });
   
   }
	
	
	componentDidUpdate(){
	//var user_name=window.sessionStorage.getItem("UserName");
		
		
	var home_world_url = this.props.dataProp.homeworld;
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
	
	
	
	on_like_icon_pressed(){
		this.setState({
          ...this.state,
          current_like_icon_colour:'red'
        });
		
		
		axios.post('http://127.0.0.1:5000/add_my_favorites', querystring.stringify({UserId: this.state.UserId,
																			  Name: this.props.dataProp.name,
																			  Height: this.props.dataProp.height,
																			  Mass: this.props.dataProp.mass,
																			  Gender: this.props.dataProp.gender,
																			  Url: this.props.dataProp.url}))
		.then((response) => {
        console.log(response);
			
        })
        
    
     .catch((response) => {
        //handle error
        console.log(response);
      });
	}
	
  render() {
    return (
		<div>
		
      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-default">
            <div class="panel-heading">Personal Detalis  <FaHeart style={{marginLeft: 70 + 'em',color:this.state.current_like_icon_colour}} onClick={this.on_like_icon_pressed}/> </div>

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