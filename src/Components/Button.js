import React from 'react';

function Button(props){
    return(
        <div className={props.className} style={{textAlign: 'center',...props.style}}>
            <button>
                {props.title}
            </button>
        </div>
    );
}

export  default Button;