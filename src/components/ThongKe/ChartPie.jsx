import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import TrangThaiHoSoService from '../../services/TrangThaiHoSoService';

class ChartPie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trangThai: []
        }
    }
    componentDidMount() {
        var trangThaiCurrents = []
                
        TrangThaiHoSoService.countDangCho()
        .then((res) => {
           trangThaiCurrents[0] = (res.data);
        });

        TrangThaiHoSoService.countChapThuan()
        .then((res) => {
           trangThaiCurrents[1] = (res.data);
        });

        TrangThaiHoSoService.countTuChoi()
        .then((res) => {
           trangThaiCurrents[2] = (res.data);
        });

        this.setState({trangThai: trangThaiCurrents});

    }
    render() {
        return (
            console.log("trang thai" + this.state.trangThai),
            <div className="chart-pie">
                <Pie
                    options = {{
                        title: {
                            display: true,
                            text: "Biểu Đồ Trạng Thái Hồ Sơ Ứng Viên",
                            fontSize: 20
                        },
                        legend: {
                            fontSize: 25,
                            display: true,
                            position: "bottom"
                        },
                        scales: 500
                    }}
                    data={{
                        labels: ["Đang chờ", "Tiếp nhận", "Từ Chối"],
                        datasets: [
                            {
                                data: this.state.trangThai,
                                backgroundColor: ["#2a9df4", "#ADFF2F", "#E8615D"]
                            }
                        ]
                    }}
                />
            </div>
        );
    }
}

export default ChartPie;