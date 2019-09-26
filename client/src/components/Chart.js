import React, { Component } from "react";
import { Line } from "react-chartjs-2";
export default class Chart extends Component {
  dateTransformer = e => {
    let d = new Date(Date.parse(e));
    return d.toLocaleTimeString();
  };
  render() {
    return (
      <div className="chart">
        <div>
          <Line
            data={{
              labels: this.props.data
                .map(a => this.dateTransformer(a.Created_date))
                .slice(0, 10)
                .reverse(),
              datasets: [
                {
                  label: "Temperature",
                  data: this.props.data
                    .map(a => a.Temperature)
                    .slice(0, 10)
                    .reverse(),
                  backgroundColor: "rgba(255,99,132,0.6)"
                }
              ]
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div>
          <Line
            data={{
              labels: this.props.data
                .map(a => this.dateTransformer(a.Created_date))
                .slice(0, 10)
                .reverse(),
              datasets: [
                {
                  label: "Moisture",
                  data: this.props.data
                    .map(a => a.Moisture)
                    .slice(0, 10)
                    .reverse(),
                  backgroundColor: "rgba(0,255,255,0.5)"
                }
              ]
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        {this.props.data.map(a => a.Moisture).slice(-1) < 35 ? (
          <h3>Your plant is dry. Watering is recomended</h3>
        ) : (
          ""
        )}
        <div>
          <Line
            data={{
              labels: this.props.data
                .map(a => this.dateTransformer(a.Created_date))
                .slice(0, 10)
                .reverse(),
              datasets: [
                {
                  label: "Light",
                  data: this.props.data
                    .map(a => a.Light)
                    .slice(0, 10)
                    .reverse(),
                  backgroundColor: "rgba(255,255,0,0.6)"
                }
              ]
            }}
            height={100}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}
