import React from 'react';
import "./css/User.css";

const User = (props)=>{
    const {user} = props
    const {name,address} = user;
    
    return(
        <div className="User" onClick={()=>{
            props.updateStateProp(address);
            console.log('address is',address)
        }}>
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <p className="User__details-address">{address}</p>
            </div>
      </div>
    );
}
export default User;