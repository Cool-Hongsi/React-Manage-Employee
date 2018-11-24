import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">WEB422 - Project Portal</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}