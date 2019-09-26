import React, { Component } from "react";
import Chart from "./Chart";
class PlantStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("/api/plants")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return (
      <div>
        <Chart data={this.state.data}></Chart>
      </div>
    );
  }
}

export default PlantStatus;
