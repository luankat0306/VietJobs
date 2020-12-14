import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import CongViecService from '../../services/CongViecService';

class ChartLine extends Component {
	constructor(props) {
		super(props);
		this.state ={
			jobs: []
		};
	  }
	componentDidMount(){
		CongViecService.countMonthlys(2020)
		.then((res) =>
			this.setState({jobs: res.data})
		)
	}


	render() {
		var months =[]
		for (let index = 1; index <= 12; index++) {
			months.push("Tháng" + index)						
		}
		return (
			
			<div className="chart-line">
				<Line			
					options = {{
						title: {
							display: true,
							text: "Biểu Đồ Số Lượng Việc làm",
							fontSize: 20
						},
						legend: {
							fontSize: 20,
							display: false,
						},
						responsive: true,

					}}
					data ={{
						labels: months,
						datasets: [{
							data: this.state.jobs.map(d => d),
							fill: false,
							borderColor: "#2a9df4",
						}]
					}}
				/>
			</div>
		);
	}
}

export default ChartLine;