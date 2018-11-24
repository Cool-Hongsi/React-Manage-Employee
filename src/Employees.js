import React from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer.js';

export default class Employees extends React.Component{
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
                console.log(err + " Occured in componentDidMount() in Employees Class");
            })
        })
    }
    render(){
        return(
            <div>
                <MainContainer sidebar={this.props.title}>   
                    <h1 className="page-header">{this.props.title}</h1>   
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Name & Position</th>
                                    <th>Address</th>
                                    <th>Phone Num</th>
                                    <th>Hire Date</th>
                                    <th>Salary Bonus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map((employee) => {
                                    return (
                                        <tr>
                                            <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                                            <td>{employee.AddressStreet} {employee.AddressState} {employee.AddressCity} {employee.AddressZip}</td>
                                            <td>{employee.PhoneNum} ex: {employee.Extension}</td>
                                            <td>{moment(employee.HireDate).utc().format('LL')}</td>
                                            <td>$ {employee.SalaryBonus}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </MainContainer>
            </div>
        )
    }
}
