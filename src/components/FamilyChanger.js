import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

 // children don't update their value based on the edit toggle without this method
  componentWillReceiveProps(props) {
    this.setState({allowEdit: props.allowEdit});
  }

  render() {
    return (
      <select className="dropDownContainer" onChange={ (e) => this.props.update(e.target.value) } disabled={ this.state.allowEdit === "false" }>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="verdana"> Verdana </option>
      </select>
    )
  }
}