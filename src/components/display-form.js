import React from 'react';

const display = (props) => {
    const { data } = props;


    return(
        <div>
            <h1>Hi {data.info.name}</h1>
            <p>display form running</p>
        </div>
    )
}

export default display