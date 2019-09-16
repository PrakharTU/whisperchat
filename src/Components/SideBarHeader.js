import React from 'react';

class SideBarHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:(""+event.target.value).trim()});
    }

    handleKeyPress(event,contact){
        if(event.key === 'Enter'){
            if(this.state.address.length===42){
                contact({
                    name:'Anonymous',
                    address:this.state.address
                });
                this.setState({
                    address:''
                })
            }
        }
    }

    render(){
        return(
            <div id="sideBarHeader" style={{textAlign:'center',borderRight:'1px solid #DFDFDF',paddingBottom:8,width:'350px'}}>
                <div style={styles.heading}>Add New Group
                <input
                    style={styles.input}
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    placeholder="Enter Address"
                    onKeyPress={(event)=>this.handleKeyPress(event,this.props.onContactAdd)}
                />
                </div>
            </div>
        );
    }
}

const styles={
    heading:{
        fontFamily:'roboto',
        fontSize:25,
        background:'#D6D9D4',
        padding: '1rem 2rem',
        borderBottom: '1px solid #D2D2D2',
        paddingLeft:13,
        
    },
    input:{
        width:'90%',
        margin:'8px auto',
        borderRadius: '50px',
        boxShadow: 'none',
        border:'none',
        padding: '10px 15px',
        fontSize:12,
        color:'#616C6F',
        background:'#fff',
        textAlign:'left',
        height:'40px'
    }
}
export default SideBarHeader;