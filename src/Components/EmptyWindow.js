import React from "react";
import "./css/Empty.css";

const EmptyWindow = ({myDetails,style}) => {
    const {name,address} = myDetails;
    const first_name = name.split(" ")[0];
    return (
        <div className="Empty" style={style}>
            <h1 className="Empty__name">Welcome, {first_name} </h1>
            <p className="Empty__status">
                <b>Your Public Address:</b> {address}
            </p>
            <button className="Empty__btn">Start a conversation</button>
            <p className="Empty__info">
                Search for someone to start chatting with or go to Contacts to see who
                is available
            </p>
        </div>
    );
};

export default EmptyWindow;