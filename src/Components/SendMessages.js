import React from 'react';

class SendMessages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    sendMessage(chatRoomAddress,senderAddress){
        const text=(" "+this.state.message).trim();
        const payload = {
            chatRoomAddress,
            text,
            senderAddress
        }
        if((""+this.state.message).trim().length!==0){
            this.props.onMessageSubmit(payload);
            this.setState({
                message:''
            })
        }
        console.log('payload is:\n',payload)
    }

    handleKeyPress = (event,chatRoomAddress,senderAddress) => {
        if(event.key === 'Enter' && this.state.message){
          this.sendMessage(chatRoomAddress,senderAddress);
            console.log('send message entered');
        }
      }
    render(){
        const {style,chatRoomAddress,senderAddress} = this.props;
        return(
            <div style={{textAlign:'center',...style,...styles.wrapper}}>
                <input
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress = {(event)=>this.handleKeyPress(event,chatRoomAddress,senderAddress)}
                    style={styles.input}
                    placeholder="Type a message"
                />
                <button style={styles.send} onClick={()=>this.sendMessage(chatRoomAddress,senderAddress)}>
                    <div style={styles.circle}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="#263238" fill-opacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
                    </div>
                </button>
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
        height:'50px',
        marginTop:5,
        background:'white',
        flex:1
    },
    wrapper:{
        background:'#eeeeee',
        borderBottom:'10px solid #eeeeee',
        display:'flex',
        flexDirection:'row',

    },
    send:{
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        flex: '0 0 auto',
        marginRight: 8,
        padding: 0,
        position: 'relative',
        outline: 'none',
        marginLeft: '.5rem'
    },
    circle:{
        "background":"#008a7c",
        "borderRadius":"50%",
        "color":"#fff",
        "position":"relative",
        "width":"38px",
        "height":"38px",
        "display":"flex",
        "alignItems":"center",
        "justifyContent":"center",
        marginTop:-5
    }
}
export default SendMessages;
