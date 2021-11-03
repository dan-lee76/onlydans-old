import React, { Component } from 'react';
import Pageclip from 'pageclip';
const pageclipAPIKey = 'api_svgWAuW8mbGuUbTxj58HXqvOq988Jie8';
const pageclip = new Pageclip(pageclipAPIKey)

class EmailSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'thisisatest',
            email:'dan@danlee.uk',
         }
    }

    sendData(){
        console.log('called');
        pageclip.send({some: 'data'})
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.sendData}>
                    <label>
                        Name:
                    </label>
                    <input type='text' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    <label>
                        Email:
                    </label>
                    <input type='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
         );
    }
}
 
export default EmailSignup;