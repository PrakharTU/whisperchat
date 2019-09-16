import React from 'react';
import User from './User';
import SideBarHeader from './SideBarHeader';

const SideBar = (props)=>{
    const {contacts,updateStateProp} = props;
    return(
        <div>
            <SideBarHeader onContactAdd={props.onContactAdd}/>
            <aside id="sideBarContacts" style={styles.sidebar} className="scrollBar">
                {contacts.map((contact,i) => <User updateStateProp={updateStateProp} user={contact} key={i} />)}
            </aside>
        </div>
    );
}

const styles={
    sidebar:{
        width:350,
        overflowY:'auto',
        borderRight:'1px solid #e0e0e0'
    }
}
export default SideBar;