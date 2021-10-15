import React, { Component } from 'react';
import Post_banner from './post-name-banner';
import Post_footer from './post-footer';
import styles from './new-image-post.module.css'
import "./post.css"
class Post_Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }
    
    render() { 
        let img
        if(this.props.image !== "null"){
            img = <img className={styles.image} src={this.props.image} alt="thing"/>
        }
        if(this.props.forceMedia === "True"){

        }
        console.log(this.props.d_location, this.props.d_name);
        return (
         <div class={styles.postSection}>
            <div className={styles.banner}><Post_banner date={this.props.date}/></div>
            <div className={styles.content}>
            <p className={styles.text}>{this.props.content}</p>
            {img}
            <Post_footer location={this.props.d_location} name={this.props.d_name} image={this.props.download}/>
            </div>
        </div>
        );
    }
}
 
export default Post_Image;