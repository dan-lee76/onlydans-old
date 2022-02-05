import React, { Component } from 'react';

class EmailSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'thisisatest',
            email:'dan@danlee.uk',
         }
    }

    sendData(event){
        event.preventDefault();
        const Pageclip = require('pageclip')
        let pageclip, promise, data
        pageclip = new Pageclip('api_svgWAuW8mbGuUbTxj58HXqvOq988Jie8')

        // Send one item
        data = {some: 'data'}
        promise = pageclip.send('test',data).then((response) => {
        console.log(
            response.status, // 200
            response.form, // 'default'
            response.data    // [Item({some: 'data'})]
        )
        })
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