import React from "react";
import $ from "jquery";
import MySingleCharacterTable from "./MySingleCharacterTable.js";
import axios from "axios";

class MyAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      data: []
    };

    
  }

  componentDidMount() {
	  var character_url = window.character_url;
	  
    fetch(character_url)
      .then(response => {
        return response.json();
      })
      .then(data => {
         console.log(data.name);
        this.setState({
          ...this.state,
          data: data
        });
      });
console.log(character_url);
  }
	
	
    

  render() {
    return (
      <div>
        <MySingleCharacterTable dataProp={this.state.data} />
      </div>
    );
  }
}

export default MyAbout;