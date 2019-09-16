import React from 'react';
import './App.css';
import Web3 from 'web3';
import {decodeFromHex, encodeToHex} from './hexutils';
import logo from './logo.png';
import SenderScreen from './Components/SenderScreen';
import ChatRoom from './Components/ChatRoom';

const defaultRecipientPubKey = "";
const defaultTopic = "0x5a4ea131";

class App extends React.Component{

  constructor(props){
    super(props);
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    this.shh = this.web3.shh;    
    this.state = {
      msgs: [],
			text: "",
			name: "",
			asymKeyId: "",
			sympw: "",
			configured: true,
			topic: defaultTopic,
			recipientPubKey: defaultRecipientPubKey,
			asymPubKey: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.configWithKey = this.configWithKey.bind(this);
    this.get_key_id_pair_from_pvt_key = this.get_key_id_pair_from_pvt_key.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.extractPUBKEY = this.extractPUBKEY.bind(this);
    this.handleKeyPressReceipent = this.handleKeyPressReceipent.bind(this);
  }
  get_key_id_pair_from_pvt_key(pvtkey){
    this.shh.addPrivateKey(pvtkey)
        .then(id=>{
          console.log(id);
        }).catch(console.log);
  }
  sendMessage() {
    let msg = {
      text: this.state.text,
      name: this.state.name
    };

    this.setState({
      msgs : [...this.state.msgs, msg]
    })

    let postData = {
      ttl: 7,
      topic: '0x07678231',
      powTarget: 2.01,
      powTime: 100,
      payload: encodeToHex(JSON.stringify(msg)),
    };

    postData.pubKey = this.state.recipientPubKey;
    postData.sig = this.state.asymKeyId;
    
    this.shh.post(postData);
    this.setState({text:""});
  }

  extractPUBKEY(){
      console.log(this.shh);
        this.shh.getPublicKey(this.state.asymKeyId).then(pubKey =>{
            this.setState({asymPubKey:pubKey})	;
            console.log('pub key extracted',this.state.asymPubKey);
        });
  }


  configWithKey() {
    // TODO use a form
    if (!this.state.name || this.state.name.length === 0) {
      alert("Please pick a username");
      return;
    }

    let filter = {
      topics: ['0x07678231']
    };

    if(!this.state.asymKeyId) {
      alert("No valid asymmetric key",this.asymKeyId);
      return;
    }

    filter.privateKeyID = this.state.asymKeyId;
    
    this.msgFilter = this.shh.newMessageFilter(filter).then(filterId => {

      setInterval(() => {
        console.log('setInter');
        this.shh.getFilterMessages(filterId).then(messages => {
          console.log('filter donr');
          for (let msg of messages) {
            console.log('inside');
            let message = decodeFromHex(msg.payload);
            this.setState({
              msgs:[...this.state.msgs,{
                name: message.name,
                text: message.text
              }]
            })
          }
        });
      }, 1000);
    });
    this.setState({configured:true})
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.extractPUBKEY();
    }
  }
  handleKeyPressReceipent(event){
    if(event.key === 'Enter'){
      this.sendMessage();
    }
  }

  renderLoginScreen(){
    return(
      <div style={{display:'flex',justifyItems:'center',height:'100vh',margin:'100px auto'}}>
        <div className="loginWrapper">
          <div style={{display:'flex',justifyContent:'center'}}>
            <img src={logo} alt="Logo" style={{width:100}} />
          </div>
          <div className="login-heading">Whisper Chat App</div>
          {/* <button onClick={()=>this.get_key_id_pair_from_pvt_key('0xd100e4e74c2b9a6993357706eba3f9cac5cd6893800c3da453b06b6c21e8ea98')}>
            get keyid from pvtkey
          </button> */}
          <div style={{textAlign:'center'}}>
          <div className="group">
            <input type="text" value={this.state.asymKeyId} 
              onChange={this.handleChange} 
              name="asymKeyId" 
              onKeyPress={this.handleKeyPress}
              required  
            />
              <span className="highlight"></span><span className="bar"></span>
              <label>Enter Your Key ID Pair</label>

            </div>
            <div className="group">
              <input name="name" 
                  onChange={this.handleChange} 
                  value={this.state.name} 
                  required 
              />
              <span className="highlight"></span><span className="bar"></span>
              <label>Username</label>
            </div>
              <button onClick={this.configWithKey} >Start</button>
          </div>
        </div>
      </div>
    )
  }
  render(){
    return (
      <div>
        {!this.state.configured&&this.renderLoginScreen()}
        {this.state.configured&&<div style={{height:'100vh',overflow:'hidden'}}>
          <ChatRoom/>
        </div>}
      </div>
      
    );
  }
}


export default App;