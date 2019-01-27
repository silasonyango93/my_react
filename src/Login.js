import React from "react";


class Login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        AttemptedUserName: '',
		AttemptedPassword: '',
		login_credentials:[]
		
    };

      
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state.login_credentials);

  }
	
	handleSubmit(event){ 
      event.preventDefault();
      fetch('http://35.226.21.250:80/user_login', {//It connects to the server but passes null values to the server
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: {
          "AttemptedUserName": this.state.AttemptedUserName,
		  "AttemptedPassword": this.state.AttemptedPassword
        }
      })
		.then(response => {
        return response.json();
      })
      .then(data => {
       console.log(data);
        this.setState({
          ...this.state,
          login_credentials: data
        });
      });
     //Returns undefined
 }
   
	
	
	handleChange(event) {    
    let newState = this.state
    newState[event.target.name] = event.target.value
    let prop = event.target.name
        this.setState({
          ...newState     
        });
		
	
    }

  render() {
    return (
      <div>
        <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Please Sign In</h3>
                    </div>
                    <div class="panel-body">
                        <form action="" method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
                            <fieldset>
                                <div class="form-group">
                                    <input name="AttemptedUserName" class="form-control" placeholder="UserName" value={this.state.AttemptedUserName} type="text" onChange={this.handleChange} autofocus />
                                </div>
                                <div class="form-group">
                                    <input name="AttemptedPassword" class="form-control" placeholder="Password" value={this.state.AttemptedPassword} type="password" onChange={this.handleChange} />
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                    </label>
                                </div>
                                
                                 <button type="submit" class="btn btn-lg btn-success btn-block">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}

export default Login;