import React from 'react';
import ChatRoomHeader from './ChatRoomHeader';
import Chats from './Chats';
import SendMessges from './SendMessages';

const GroupWindow = (props)=>{
    const{activeUser,myDetails,style,activeMessages} = props;
    return(
        <div style={{...style,display:'flex',flexDirection:'column',height:'100vh'}}>
            <ChatRoomHeader style={styles.chatroomheader} name="prakhar" address="0x999t994"/>
            <Chats myDetails = {myDetails} style={styles.chat} activeMessages = {activeMessages}/>
            <SendMessges onMessageSubmit={props.onMessageSubmit} style={styles.sendmessages}  chatRoomAddress={activeUser} senderAddress={myDetails.address}/>
        </div>
    )
}

const styles = {
    chatroomheader:{
        width:'100%',
        height:'60px',
        background:'#EEEEEE',
        borderBottom: '1px solid rgba(189, 189, 192, 0.2)',
        paddingLeft:20
    },
    chat:{
        width:'100%',
    },
    sendmessages:{
        height:'50px',
        width:'100%',
        background:'#EEEEEE'
    }
}

export default GroupWindow