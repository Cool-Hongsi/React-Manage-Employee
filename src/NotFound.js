import React from 'react';
import MainContainer from './MainContainer';

export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <MainContainer>   
                    <h1 className="page-header">Not Found</h1>   
                    <span>
                        Page Not Found
                    </span>
                </MainContainer>
            </div>
        )
    }
}
