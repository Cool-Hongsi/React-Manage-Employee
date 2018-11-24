import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

export default class ProjectsPanel extends React.Component{
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
                console.log(err + " Occured in componentDidMount() in ProjectPanel Class");
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
                                    {this.state.projects.map((project) => {
                                        var aDays = moment().diff(moment(project.ProjectStartDate),'days');
                                        return (
                                            <tr>
                                                <td>{project.ProjectName}</td>
                                                <td>Active {aDays} Days</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                    </div>
                </div>
            </div>
        )
    }
}