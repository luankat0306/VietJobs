import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import CongViecService from '../../services/CongViecService';

class ChartLine extends Component {
	constructor(props) {
		super(props);
		this.state ={
			jobs: []
		};
	  }
	
	choiseYear(event)
	{	
		CongViecService.countMonthlys(event.target.value)
		.then((res) =>
			this.setState({jobs: res.data})
		)
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
				<Form style={{width: "30%", float: "left", margin: "10px"}} inline>
					<Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
						Năm
					</Form.Label>
					<Form.Control
					as="select"
					className="mr-sm-2"
					custom	
					id="year"
					onChange={this.choiseYear.bind(this)}
					>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
					</Form.Control>
				</Form>
				
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