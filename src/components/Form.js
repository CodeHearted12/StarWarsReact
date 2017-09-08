import React, {Component} from 'react';


class Form extends Component {
  constructor(props) {
    super(props)
    console.log('props are: ', props);
}

render(){
  return (
    <section>
    <form onSubmit={this.props.handleSubmit}>
    <h2>Form</h2>
    Identify Yourself, pilot!
    <input value={this.props.value}
     onChange={this.props.handleNameChange}/>
     </form>
     </section>
     )
   }
 }








export default Form;
