import React from 'react';
import $ from 'jquery'
import Table from './Table.js';
import axios from "axios";



class Home extends React.Component {
	
	
	constructor(props){
        super(props);
        this.state = {
            data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],star_wars_characters : []
        };
		
		//this.updateMsg = this.updateMsg.bind(this);
    }
	
	componentDidMount() {
		
     fetch('https://swapi.co/api/people/?format=json')
     .then(function(response) {
      return response.json();
     })
    .then(function(myJson) {
     console.log(JSON.stringify(myJson.results));
		 this.setState({
            star_wars_characters: myJson.results
        });
		 
		 
	 });
		
		
  }
	
	
	
	
   render() {
      return (
         <div>
            
            
                  
		  
		  <Table dataProp={this.state.data} />
               
         </div>
      );
   }
	
	
}




export default Home;