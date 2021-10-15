import React, { Component } from 'react';
import logo from "./logo.png";
import styles from "./post-name-banner.module.css";
import "./post.css"
class Post_banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div className={styles.banner}>
                <div className={styles.left}>
                <img className={styles.image} src={logo} alt="Logo"/>
                <div className={styles.userText}>
                <h1 className={styles.name}>Dan Lee</h1>
                <h1 className={styles.secondaryText}>@dan-lee76</h1>
                </div>
                </div>
                <div className={styles.right}>
                <h1 className={styles.secondaryText}>{this.props.date}</h1>
                </div>
                </div>
            </div>

         );
    }
}
 
export default Post_banner;