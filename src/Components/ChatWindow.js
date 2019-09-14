import React from 'react';
import EmptyWindow from './EmptyWindow';
import GroupWindow from './GroupWindow';

function getActiveMsg(messages,activeUser) {
    console.log('inside ChatWindw.js');
    console.log(messages);
    for(let i=0;i<messages.length;i++){
        if(messages[i].groupAddress===activeUser){
            console.log('found');
            console.log(messages[i]);
            return messages[i];
        }
    }
    return null;
}
function renderWindow(props){
    const {activeUser,myDetails,style,messages} = props;
    const activeMessages = getActiveMsg(messages,activeUser)
    console.log('inside ChatWindow');
    console.log('active messages:\n',activeMessages)
    if(activeMessages){
        return (
            <GroupWindow
                activeUser={activeUser}
                style = {style}
                myDetails = {myDetails}
                onMessageSubmit={props.onMessageSubmit}
                activeMessages = {activeMessages}
            />
        );
    }
    else{
        return <EmptyWindow style={style} myDetails={myDetails}/>
    }
        
}
const ChatWindow = (props)=>{
    return renderWindow(props);
}

export default ChatWindow;