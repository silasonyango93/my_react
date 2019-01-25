import React from 'react';
import ReactDOM from 'react-dom';
class About extends React.Component {
   render() {
      return (
         <div>
            return <h1> Hello {this.props.name}!</h1>;
         </div>
      );
   }
}

About.defaultProps = {
  name: "World",
};

ReactDOM.render(<About name="Welcome to the About page" />, document.getElementById('root'));

export default About;