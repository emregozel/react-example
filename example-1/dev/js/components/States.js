import React from "react"

export default class StateComp extends React.Component {

  getInitialState: function() {
    return {checked: true}
  },

  handleChecked: function() {
    this.setState({checked: !this.state.checked})
  },

  render() {

    var msg;
    if (this.state.checked) {
      msg = 'checked'
    }else{
      msg = 'unchecked'
    }

    return (

      <div>
        <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
        <h3>Checkbox is {msg}</h3>
      </div>

    );
  }
};
