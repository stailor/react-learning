// es6 functional based component
import React from 'react';
const CardRecommended = (props) => {
    
    if (props.children) {
    return ( 
        
        
        <div className="card">
            <div className="card-image">
                <img src={require('../images/sample-1.jpg')} alt="placeholder" width="150" />
            </div>
            <div className="card-content">
                <span className="card-title">{props.children}</span>
                <p>{props.paragraph}</p>
            </div>
        </div>
        )
    } else {
        return <div>Invalid</div>
    }
}

export default CardRecommended;