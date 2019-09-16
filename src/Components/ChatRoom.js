import React from 'react';
import SideBar from './SideBar';
import ChatWindow from './ChatWindow';

class ChatRoom extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeChatRoom:null,
            userDetails:{
                name: 'Prakhar',
                address: '0x325'
            },
            contacts:[],
            messageData:[]
        }
        this.updateActiveAddress = this.updateActiveAddress.bind(this);
        this.onMessageSubmit = this.onMessageSubmit.bind(this);
        this.onContactAdd = this.onContactAdd.bind(this);
    }

    componentWillMount(){
        this.setState({
            messageData:this.getMessages(10),
            contacts:this.getDummyContacts(3)
        })
    }

    onContactAdd(contract){
        this.setState({
            contacts:[contract,...this.state.contacts]
        })
        
    }
    onMessageSubmit(payload){
        const {chatRoomAddress, text, senderAddress  } = payload;
        const newMessageData = this.state.messageData;
        // here find index at which id of room is strored
        for(let i=0;i<newMessageData.length;i++){
            if(newMessageData[i].groupAddress===chatRoomAddress){
                newMessageData[i].payload.messages.push({
                    text,
                    senderAddress,
                    timestamp:'we wiil update it soon'
                })  
                // console.log('Inside ChatRoom, Found chats...'); 
            }
        }
        // console.log('Inside ChatRoom, Submitting Messages');
        console.log(newMessageData)
        this.setState({messageData:newMessageData})
    }
    
    getDummyContacts(howMany){
        let contacts = [];
        for(let i=0;i<howMany;i++){
            contacts.push({
                name: 'Prakhar',
                address: "0x324"+i
            });
        }
        return contacts;
    }

    getMessages(howMany){
        let messages = [];
        for(let i=0;i<howMany;i++){
            messages.push({
                senderAddress:'0x324'+i,
                text:'This is dummy message sent by me.',
                timestamp:'we will do it soon'
            })
        }
        let participants = [];
        for(let i=0;i<2;i++){
            participants.push({
                name:'Prakhar',
                address:'0x324'+i
            })
        }
        let msgData = [];
        msgData.push({
            groupAddress : '0x3242',
            payload:{
                participants:participants,
                messages:messages
            }
        })
        msgData.push({
            groupAddress : 'second-chat',
            payload:{
                participants:participants,
                messages:messages
            }
        })
        console.log('inside ChatRoom.js')
        console.log(this.state.activeChatRoom)
        console.log(msgData)
        return msgData;   
    }

    updateActiveAddress(newAddress){
        this.setState({
            activeChatRoom:newAddress
        })
    }
    render(){
        return(
            <div style={styles.chatroom}>
                <SideBar 
                    updateStateProp={this.updateActiveAddress} 
                    contacts={this.state.contacts}
                    onContactAdd = {this.onContactAdd}
                />
                <ChatWindow 
                    style={styles.chatwindow} 
                    activeUser = {this.state.activeChatRoom} 
                    myDetails = {this.state.userDetails}
                    messages = {this.state.messageData}
                    onMessageSubmit = {this.onMessageSubmit}
                />
            </div>
        );
    }
}

const styles = {
    chatroom:{
        flex:1,
        flexDirection:'row',
        display:'flex',
    },
    chatwindow:{
        flex:1,
        color:'black',
        background:' #F8F8F8',
        height:'100vh'
    }
}

export default ChatRoom;
