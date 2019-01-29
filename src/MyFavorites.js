import React from "react";
import $ from "jquery";
import Table from "./Table.js";
import axios from "axios";
import querystring from "querystring";

class MyFavorites extends React.Component {
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
      ]
    };

    
  }
	
  componentWillMount(){window.sessionStorage.setItem("current_icon", "trash_icon");}

  componentDidMount() {
	  
	  var user_id=window.sessionStorage.getItem("UserId");
	  
      
	  
    axios.post('http://127.0.0.1:5000/get_specific_my_favorites', querystring.stringify({column_name: "UserId",
																			    search_value: user_id,
																			  }))
		.then((response) => {
        this.setState({
          ...this.state,
          data: response.data.results
        });
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
        <Table dataProp={this.state.data} />
		
      </div>
    );
  }
}

export default MyFavorites;