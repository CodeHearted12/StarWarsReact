import React, {Component} 'react';

class Jumbotron extends Component{
  render() {
return(
  <section>
<div>
<h1>Jumbotron</h1>
<strong>{this.props.pilotName}</strong>
</div>
</section>
      )
    }
  }


export default Jumbotron
