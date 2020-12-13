import React, { Component } from 'react'

export default class ListNguoiTimViec extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nguoiTimViecs: []
        }
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Danh sách người tìm việc</h2>
                <div className="table-responsive">
                    <table className="table table-hover-red">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Họ Tên</th>
                                <th scope="col">Tên Người Dùng</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
