import { faBriefcase, faChartLine, faLandmark, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import CongViecService from '../../services/CongViecService'
import NguoiTimViecService from '../../services/NguoiTimViecService'
import NhaTuyenDungService from '../../services/NhaTuyenDungService'
import TrangThaiHoSoService from '../../services/TrangThaiHoSoService'
import ChartLine from './ChartLine'
import ChartPie from './ChartPie'
import Table from '../Table'


export default class ThongKe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countNguoiTimViec: 0,
            countNhaTuyenDung: 0,
            countCongViec: 0,
            countUngTuyen: 0,
            bodyCongViec: [],
            bodyCongTy: []
        }
    }
    componentDidMount() {
        NguoiTimViecService.countNguoiTimViec()
        .then((res) => {
            this.setState({countNguoiTimViec: res.data})
        });

        NhaTuyenDungService.countNhaTuyenDung()
        .then((res) => {
            this.setState({countNhaTuyenDung: res.data})
        });

        CongViecService.countCongViec()
        .then((res) => {
            this.setState({countCongViec: res.data})
        });

        TrangThaiHoSoService.countChapThuan()
        .then((res) => {
            this.setState({countUngTuyen: res.data})
        });

        CongViecService.top5CongTy()
        .then((res) => {
            this.setState({bodyCongTy: res.data})
        });

        CongViecService.top5CongViec()
        .then((res) => {
            this.setState({bodyCongViec: res.data})
        });
    }
    render() {
        const ths = ["id Công Ty", "Tên Công Ty", "Bài đăng tuyển"]
        const congViec = ["id Bài Đăng", "Tiêu đề bài đăng","Nhà Tuyển Dụng", "Số lượng ứng viên"]

        return (
            <div>
                <br/>
                <h5 style={{borderLeft: "5px solid #242849", paddingLeft: "10px", color: "#242849"}}><i><FontAwesomeIcon icon={faChartLine}/></i> THỐNG KÊ </h5>
                <br/>
                <div className = "box">
                    <div className = "grid-item" id="dashboard-ung-vien">
                        <i><FontAwesomeIcon icon={faUser}/></i>
                        <label>Ứng viên</label>
                        <p>{this.state.countNguoiTimViec}</p>
                    </div>

                    <div className = "grid-item"  id="dashboard-doanh-nghiep">
                        <i><FontAwesomeIcon icon={faLandmark}/></i>
                        <label>Doanh nghiệp</label>
                        <p>{this.state.countNhaTuyenDung}</p>
                    </div>

                    <div className = "grid-item"  id="dashboard-viec-lam">
                        <i><FontAwesomeIcon icon={faBriefcase}/></i>
                        <label>Việc làm</label>
                        <p>{this.state.countCongViec}</p>
                    </div>

                    <div className = "grid-item"  id="dashboard-ung-tuyen">
                        <i><FontAwesomeIcon icon={faUserCheck}/></i>
                        <label>Ứng tuyển</label>
                        <p>{this.state.countUngTuyen}</p>
                    </div>
                </div> 
                <br/>
                <hr className="hr" />
             
                <div className="thong-ke">
                    <ChartLine />
                    <div className="table1">
                        <Table head = {ths} body={this.state.bodyCongTy}/>
                    </div>
                    <div className="table2">
                        <Table head = {congViec} body={this.state.bodyCongViec}/>
                    </div>
                    <ChartPie/>    
                </div>
                <footer style={{
                    display: "block",
                    marginTop: "40px",
                    bottom: "0",
                    width: "100%",
                    color: "gray",
                    textAlign: "center"
                }}>
                    <h5>Copyright © VietJobs, Vietnam</h5>
                </footer>
            </div>
        )
    }
}
