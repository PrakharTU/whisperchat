import React from 'react';
import './css/Chats.css';
const Chat = ({ message, sender}) => {
    const { text, senderAddress } = message;
    return (
      <span className={`Chat ${sender===senderAddress ? "is-user-msg" : ""}`}>{text}</span>
    );
  };
  

class Chats extends React.Component{
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  
  render(){
    const {activeMessages,myDetails} = this.props;
    let i=0;
    const {groupAddress,payload} = activeMessages;
    return(
      <span className="Chats scrollBar" ref={this.chatsRef}>
        {payload.messages.map(message => (
          <Chat message={message} sender={myDetails.address} key={i++} />
        ))}
      </span>
    );
  }
}
export default Chats;