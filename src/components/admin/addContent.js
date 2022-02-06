import React, { Component} from 'react';
import config from "./../firebase/config";
import { get, child, ref, set } from "firebase/database";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: ' ',
            location: 'null',
            date: ' ',
            idLength: this.props.idLength
        };
    }
    
    getUserData = () => {
        const dbRef = ref(config);
        var len = 0
        get(child(dbRef, `/`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val().length);
            this.setState({length: snapshot.val().length+1})
            len = snapshot.val().length
            return len
          }
          else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        console.log('DATA RETRIEVED');
        
      }

    writeUserData = () =>{
        console.log("Button Pressed")
        this.setState({idLength: this.state.idLength+1}) //Need to get length of data to it can increase it and add it in the correct location
        var len = this.getUserData()
        console.log(len)
        console.log(" l", this.props.idLength)
        set(ref(config, '/' + 102), {
            id: 102,
            date: this.state.date,
            image: this.state.location,
            likes: 0,
            description: this.state.title
        })
    }

    componentDidMount(){
        
    }
    render() { 
        return ( <div>
            <h1>Add Content</h1>
            <form>
                <label>Title
                    <input type="text" onChange={event => this.setState({title:event.target.value})} name="title"></input>
                </label>
                <label>Location
                    <input type="text" onChange={event => this.setState({location:event.target.value})} name="locaiton"></input>
                </label>
                <label>Date
                    <input type="date" onChange={event => this.setState({date:event.target.value})} name="date"></input>
                </label>
            </form>
            <button onClick={this.writeUserData}>Submit</button>
          </div> );
    }
}
 
export default Add;