import React from "react";
import ReactApexCharts from "react-apexcharts";
import RadioButtons from "./RadioButtons";

export default class RadarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        labels: ["悲しみ", "教育性", "感動", "スリル", "面白さ"],
        title: {
          text: "Radar Chart - Multi Series"
        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.4
        },
        markers: {
          size: 0
        }
      },
      series: [
        {
          name: "自分",
          data: [1, 5, 2, 1, 5]
        },
        {
          name: "平均",
          data: [5, 1, 1, 4, 3]
        }
      ]
    };
  }

  handleChange = (value, labels_index) => {
    console.log(value);
    console.log(labels_index);
    const series_copy = this.state.series;
    series_copy[0].data[labels_index] = Number(value);

    this.setState({
      series: series_copy
    });

    console.log(this.state.series);
  };

  onChange = () => {
    this.setState({
      series: [
        {
          name: "自分",
          data: [1, 1, 1, 1, 1]
        },
        {
          name: "平均",
          data: [5, 1, 1, 4, 3]
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <ReactApexCharts
          options={this.state.options}
          series={this.state.series}
          type="radar"
          height="350"
        />
        {this.state.options.labels.map((value, index) => (
          <RadioButtons
            key={index}
            labels_index={index}
            title={value}
            data={this.state.series[0].data}
            handleChange={this.handleChange} //関数を引数で渡している
          /> //indexにはlabelの回数が入る(reactでmap使うとき)
        ))}

        <button onClick={this.onChange}>発火します</button>
      </div>
    );
  }
}
