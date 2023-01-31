import React from 'react';

const display = (props) => {
    const { data } = props;

    return(
        <div>
            <h2>{data.name}</h2>
            <p>{data.phone}</p>
            <p>{data.email}</p>
        </div>
    )
}

export default display