import React from 'react';

function Heading(props){
    return(
        <h2 className={props.className}>{props.title}</h2>
    );
}

export default Heading;
