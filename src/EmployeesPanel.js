import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class EmployeesPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employees : []
        }
    }

    componentDidMount(){
        axios.get("https://guarded-stream-67405.herokuapp.com/employees").then((res) => {
            this.setState({
                employees : res.data
            }).catch((err) => {
                console.log(err + " Occured in componentDidMount() in EmployeesPanel Class");
            })
        })
    }

    render(){
        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    {this.state.employees.map((employee) => {
                                        return (
                                            <tr>
                                                <td>{employee.FirstName} {employee.LastName}</td>
                                                <td>{employee.Position.PositionName}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                    </div>
                </div>
            </div>
        )
    }
}