import React, { Component} from 'react';
import config from "./../firebase/config.js";
import { ref, child, get } from "firebase/database";
import Add from './addContent.js';

class EditContentMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            idLength: 0
        };
    }

    getUserData = () => {
        const dbRef = ref(config);
        get(child(dbRef, `/`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log("Setting Value: ", snapshot.val().length);
            this.setState({idLength: snapshot.val().length})
          }
          else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        console.log('DATA RETRIEVED');
      }
  
      
  
        //Reads the json file
        componentDidMount() { 
            this.getUserData();
            }
    

    render() { 
        return ( <div>
            <h1>Data Editor </h1>
            <Add idLength={this.state.idLength}></Add>
          </div> );
    }
}
 
export default EditContentMain;