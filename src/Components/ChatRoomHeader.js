import React from 'react';
const ChatRoomHeader = ({name,address,style})=>{
    const {Header,HeaderName,HeaderAddress} = styles
    return(
        <header style = {{Header,...style}}>
            {/* <h1 style={HeaderName}>{name}</h1> */}
            <p style={HeaderAddress}>{address}</p>
        </header>
    );
}

const styles= {
    Header: {
        padding: '1rem 2rem',
        borderBottom: '1px solid #D2D2D2',
        paddingLeft:13
    },
    HeaderName: {
        color: 'black',
        fontSize:20,
        fontWeight:200,
        textOverflow:'ellipsis'
    },
    HeaderAddress:{
        height:'100%',
        verticalAlign:'middle'
    }
}

export default ChatRoomHeader;