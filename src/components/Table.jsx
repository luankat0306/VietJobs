import React, { Component } from 'react';

function ListHead (props) {
    return props.ths.map((th) => <th>{th}</th>)
}

function Render (props) {
    var data = []
    for (let index = 0; index < props.bodys.length; index++) {
        data.push(<tr>{
            Object.values(props.bodys[index]).map((td) => <td>{td}</td>)
        }</tr>)
            console.log(Object.values(props.bodys[index]).map((td) => td))
    }
    return data;
}
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {            
        }
    }

    render() {
        return (
                <div class = "show-data">
                    <table>
                        <thead>                      
                                <tr>
                                    <ListHead ths = {this.props.head}/>
                                </tr>
                        </thead>
                        <tbody>
                                 <Render bodys = {this.props.body}/> 
                        </tbody>
                    </table>

                </div>
        );
    }
}

export default Table;