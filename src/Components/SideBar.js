import React from 'react';
import User from './User';
// import ScrollArea from 'react-scrollbar';
const SideBar = ({style,contacts,updateStateProp})=>{
    return(
        <aside style={style} className="scrollBar">
            {contacts.map((contact,i) => <User updateStateProp={updateStateProp} user={contact} key={i} />)}
       </aside>
    );
}
export default SideBar;