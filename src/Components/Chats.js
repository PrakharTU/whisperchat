import React from 'react';
import './css/Chats.css';
const Chat = ({ message, sender}) => {
    const { text, senderAddress } = message;
    return (
      <span className={`Chat ${sender===senderAddress ? "is-user-msg" : ""}`}>{text}</span>
    );
  };
  
const Chats = ({activeMessages,myDetails})=>{
    const {groupAddress,payload} = activeMessages;
    let i=0;
    return(
      <div className="Chats scrollBar">
        {payload.messages.map(message => (
          <Chat message={message} sender={myDetails.address} key={i++} />
        ))}
      </div>
    );
}

export default Chats;