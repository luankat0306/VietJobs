import {
    faBriefcase,
    faChartLine,
    faHeadset,
    faLandmark,
    faPenNib,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../services/AuthService";
export default class LeftSidebar extends Component {
    logout() {
        AuthService.logout();
    }
    render() {
        return (
            <div className="left-sidebar">
                <div className="admin">
                    <div className="img-Admin">
                        <img
                            className="avatar"
                            src={process.env.PUBLIC_URL + "/images/avatar.png"}
                            alt="avatar"
                        />
                        <a href="/login" onClick={this.logout}>
                            Logout
                        </a>
                    </div>

                    <h5 className="logo">
                        Admin
                        <br />
                        VietJobs
                    </h5>
                </div>
                <hr
                    className="hr"
                    style={{
                        backgroundImage:
                            "-webkit-linear-gradient(left, #7a80b4, #ffd98d, #7a80b4)",
                    }}
                />
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/thong-ke">
                            <i>
                                <FontAwesomeIcon icon={faChartLine} />
                            </i>
                            Thống kê{" "}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/thong-tin">
                            <i>
                                <FontAwesomeIcon icon={faPenNib} />
                            </i>
                            Thông tin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/ung-vien">
                            <i>
                                <FontAwesomeIcon icon={faUserTie} />
                            </i>
                            ứng viên
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/doanh-nghiep">
                            <i>
                                <FontAwesomeIcon icon={faLandmark} />
                            </i>
                            doanh nghiệp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/nganh-nghe">
                            <i>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </i>
                            Ngành nghề
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/ho-tro">
                            <i>
                                <FontAwesomeIcon icon={faHeadset} />
                            </i>
                            Hỗ trợ trực tuyến
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
