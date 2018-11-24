import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class TeamsPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teams : []
        }
    }

    componentDidMount(){
        axios.get("https://guarded-stream-67405.herokuapp.com/teams").then((res) => {
            this.setState({
                teams : res.data
            }).catch((err) => {
                console.log(err + " Occured in componentDidMount() in TeamsPanel Class");
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
                                    {this.state.teams.map((team) => {
                                        return (
                                            <tr>
                                                <td>{team.TeamName}</td>
                                                <td>{team.Employees.length} Employees</td>  
                                                {/* length -> (this is the number of employees on the team) */}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                    </div>
                </div>
            </div>
        )
    }
}