import React from 'react';
import HeaderSimple from './HeaderSimple';
import Button from './Button';

class SenderScreen extends React.Component{

    constructor(props){
        super(props);
        this.state  = {
            
        }
        
    }

    render(){
        return(
            <div>
                <HeaderSimple title = "Whisper Chat App"/>
                <div id="body">
                    <div>
                        <h2 className="heading">Sender Details</h2>

                        <div className="subheading">Your key-id Pair </div>
                        <input type="text" name="keyid" placeholder="Enter Your key-id Pair " />
                        <br />


                        <h6 className="heading-h6">
                            Asymmetric key id
                        </h6>
                        <input className="output" readOnly value="" />

                        
                        <h6 className="heading-h6">
                            Public key
                        </h6>
                        <div className="output" />

                        <br />

                        <div>Username </div>
                        <input type="text" name="keyid" placeholder="Enter your username" />

                    </div>
                    <Button title="Enter"/>
                </div>
            </div>
        );
    }
}

export default SenderScreen;