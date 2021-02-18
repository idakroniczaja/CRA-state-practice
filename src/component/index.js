import React from 'react';

class ExampleToggle extends React.Component {
  state = {
    didClick: true
  };

  handleClick = () => {
    console.log('clicking');
    this.setState({
        didClick: !this.state.didClick
    })
  };


  render() {
    return (
      <div>
        {/* we will cover conditionals soon, so don't worry if you don't understand the following line */}
        {this.state.didClick ? <h2>Did I click?</h2> : <h2>Yes you did!</h2>}

        <button onClick={this.handleClick}>Click here!</button>
      </div>
    );
  }
}

export default ExampleToggle;