import React, { Component} from 'react';
import config from "./../firebase/config";
import { ref, child, get } from "firebase/database";
import Add from './addContent';

class EditContentMain extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    getUserData = () => {
        const dbRef = ref(config);
        get(child(dbRef, `/`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
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
            <Add></Add>
          </div> );
    }
}
 
export default EditContentMain;