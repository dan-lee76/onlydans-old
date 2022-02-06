import React, { Component } from 'react';
import Post_banner from './post-name-banner.js';
import "./post.css"
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content:this.props.content,
            img:this.props.image,
         }
    }
    
    render() { 
        return (
         <div>
        <div className="post">
            <Post_banner/>
            <div className="content">
            <h1 className="text">{this.state.content}</h1>
            <img src={this.state.img} alt="thing"/>
            </div>
        </div>
        </div>
        );
    }
}
 
export default Post;