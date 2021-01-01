import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ApplicantService from "../../services/ApplicantService";
import SearchBar from "../SearchBar";
import Table from "../Table";
import ButtonAdd from "./ButtonAdd";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import { ToastContainer } from "react-toastify";

class Applicant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            thead: ["STT", "Họ và tên", "Số điện thoại", "Email", "Chỉnh Sửa"],
            tbody: [],
        };
    }
    componentDidMount() {
        this.getApplicants();
    }

    render() {
        return (
            <div>
                <br />
                <h5
                    style={{
                        borderLeft: "5px solid #242849",
                        paddingLeft: "10px",
                        color: "#242849",
                    }}>
                    <FontAwesomeIcon icon={faUserTie} />
                    ỨNG VIÊN
                </h5>
                <br />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <SearchBar />
                    <ButtonAdd />
                </div>
                <hr />
                <Table
                    head={this.state.thead}
                    body={this.state.tbody}
                    isEdit={true}
                    headBackground={"#242849"}
                    headColor={"#ffd98d"}
                />
            </div>
        );
    }

    getApplicants() {
        let data = [];
        var applicants = [];
        var applicant = {};
        ApplicantService.getApplicants().then((res) => {
            data = res.data;
            data.forEach((e, index) => {
                applicant = {
                    stt: index + 1,
                    fullname: e.fullname,
                    phone: e.phone,
                    email: e.email,
                    edit: <ButtonEdit id={e.id} />,

                    delete: <ButtonDelete id={e.id} />,
                };
                applicants.push(applicant);
            });

            this.setState({ tbody: applicants });
        });
    }
}

export default Applicant;
