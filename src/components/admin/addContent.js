import React, { Component} from 'react';
import config from "./../firebase/config";
import { ref, child, get } from "firebase/database";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    

    render() { 
        return ( <div>
            <h1>Add Content</h1>
            <form>
                <label>Title
                    <input type="text" name="title"></input>
                </label>
                <label>Location
                    <input type="text" name="locaiton"></input>
                </label>
                <label>date
                    <input type="date" name="date"></input>
                </label>
            </form>
            <button>Submit</button>
          </div> );
    }
}
 
export default Add;