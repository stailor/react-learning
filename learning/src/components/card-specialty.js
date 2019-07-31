// es6 functional based component
import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../images/sample-1.jpg';
const CardSpecialty = (props) => {
    
    if (props.children) {
    return ( 
        <div className="card">
            <div className="card-image">
                <img src={require('../images/sample-1.jpg')} alt="placeholder" width="150" />
            </div>
            <div className="card-content">
                <Typography variant="h1" component="h2" gutterBottom>
                    h1. Heading
                </Typography>
                <span className="card-title center-align">{props.children}</span>
                <p className="center-align"><a href="/">Browse all</a></p>
            </div>
        </div>
        )
    } else {
        return (
        <div className="card">
        <div className="card-image">
            <img src={require('../images/sample-1.jpg')} alt="placeholder" width="150" />
        </div>
        <div className="card-content">            
            <span className="card-title center-align">Card Title</span>
            <p className="center-align"><a href="/">Browse all</a></p>
        </div>
    </div>
        )
    }
}

export default CardSpecialty;