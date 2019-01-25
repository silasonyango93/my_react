import React from 'react';
import ReactDOM from 'react-dom';
class Contact extends React.Component {
   render() {
      return (
         <div>
            return <h1> Hello {this.props.name}!</h1>;
         </div>
      );
   }
}

/*Contact.defaultProps = {
  name: "World",
};*/

const element = <Contact name="W3Adda" />;

ReactDOM.render(element, document.getElementById('root'));


export default Contact;