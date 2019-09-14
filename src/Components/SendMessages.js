import React from 'react';

class SendMessages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    sendMessage(chatRoomAddress,senderAddress){
        const payload = {
            chatRoomAddress,
            text:this.state.message,
            senderAddress
        }
        this.props.onMessageSubmit(payload);
        this.setState({
            message:''
        })
        console.log('payload is:\n',payload)
    }

    handleKeyPress = (event,chatRoomAddress,senderAddress) => {
        if(event.key === 'Enter'){
          this.sendMessage(chatRoomAddress,senderAddress);
            console.log('send message entered');
        }
      }
    render(){
        const {style,chatRoomAddress,senderAddress} = this.props;
        return(
            <div style={{textAlign:'center',...style,background:'transparent',marginBottom:10}}>
                <input
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress = {(event)=>this.handleKeyPress(event,chatRoomAddress,senderAddress)}
                    style={{...styles.input,background:style.background}}
                    placeholder="Type a message"
                />
            </div>
        );
    }
}

const styles={
    input:{
        width:'90%',
        margin:'3px auto',
        borderRadius: '50px',
        boxShadow: 'none',
        border:'none',
        padding: '20px 15px',
        fontSize:20,
        color:'#616C6F',
        textAlign:'left',
        height:'100%'
    }
}
export default SendMessages;