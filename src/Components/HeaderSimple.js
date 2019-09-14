import React from 'react';

function HeaderSimple(props){
    return(
        <div id="header">
            <div className="topLine" />
            <div className="header-content">
                {props.title}
            </div>
            <div style={{background: '#1ebea5', height: '2px'}} />
      </div>
    );
}

export default HeaderSimple;