import React, { Component } from 'react';

export default class SizeChanger extends Component {
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
      <select className="dropDownContainer" onChange={ (e) => this.props.update((e.target.value)/1) } disabled={ this.state.allowEdit === "false" }>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}