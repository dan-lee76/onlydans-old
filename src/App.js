import React, { Component } from 'react';
import Post_Image from './components/new-image-post';
import Posts_Section from './components/posts';
import Profile_brief from './components/Profile-Banner/profile-information';
import Button_Selector from './components/button-selector';
import './components/post.css';
import logo from "./logo.png";
import posts from './components/data/data.json';
import onlyDans from './components/data/logo.svg';
console.log(posts);
let dan = {}
async function loadNames() {
    const response = await fetch('./data.json');
    const names = await response.json();
    console.log(names); 
    dan = names;
    return names;
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
  }
const names = loadNames();
console.log(names);
console.log(dan);
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            arg1:"posts",
            display:posts.map((p) => (<Post_Image d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>)).reverse()

        }
    }
    handleToUpdate(someArg){
        this.setState({arg1:someArg});
        if(someArg==="posts"){
            this.setState({display:posts.map((p) => (<Post_Image d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>)).reverse()});
        }
        else if(someArg==="media"){
            this.setState({display:posts.map((p) => {if(p.image==="null"){return null;}else{return <Post_Image d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}}).reverse()});
        }
        else if(someArg==="archive"){
            this.setState({display:null});
        }
        this.forceUpdate()
    }
    render() { 
        fetch("./data.json").then(response => response.json())
        var handleToUpdate = this.handleToUpdate;
        // var content = null;
        // console.log(content);
        // if(this.state.arg1=="posts"){
        //     content=posts.map((p) => (<Post_Image content={p.description} image={p.image} date={p.date}/>)).reverse();
        // }
        // else if(this.state.arg1=="media"){
        //     content=null;
        // }
        // else if(this.state.arg1=="archive"){
        //     content=null;
        // }
        // console.log(content);
        return ( 
            <div>
            <div className="content">
            <Profile_brief name="Dan Lee" username="@dan-lee76" dsc="The onlydans exclusive site owner ;)" image={logo} post_amount={posts.length}/>
            <Button_Selector handleToUpdate={handleToUpdate.bind(this)} activePage={this.state.arg1}/>
            {this.state.display}
            </div>
            </div>
         );
    }
}

export default App;