import React from "react";
import $ from "jquery";
import Table from "./Table.js";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Foo",
          age: "20"
        },
        {
          id: 2,
          name: "Bar",
          age: "30"
        },
        {
          id: 3,
          name: "Baz",
          age: "40"
        }
      ],
      star_wars_characters: []
    };

    
  }
	
	
  componentWillMount(){window.sessionStorage.setItem("current_icon", "heart_icon");}

  componentDidMount() {
    fetch("https://swapi.co/api/people/?format=json")
      .then(response => {
        return response.json();
      })
      .then(data => {
      console.log(data.results);
        this.setState({
          ...this.state,
          data: data.results
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