import React from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer.js';

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects : []
        }
    }

    componentDidMount(){
        axios.get("https://guarded-stream-67405.herokuapp.com/projects").then((res) => {
            this.setState({
                projects : res.data
            }).catch((err) => {
                console.log(err + " Occured in componentDidMount() in Projects Class");
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
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.projects.map((project) => {
                                    var startDate = moment(project.ProjectStartDate).utc().format('LL');
                                    var endDate = '';
                                    if(project.ProjectEndDate === null || project.ProjectEndDate === '') {
                                        endDate = 'n/a';
                                    }
                                    else{
                                        endDate = moment(project.ProjectEndDate).utc().format('LL');
                                    }
                                    return (
                                        <tr>
                                            <td>{project.ProjectName}</td>
                                            <td>{project.ProjectDescription}</td>
                                            <td>{startDate}</td>
                                            <td>{endDate}</td>
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
