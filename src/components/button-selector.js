import React, { Component, useState } from 'react';
import styles from "./button-selector.module.css"


class Button_Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        var handleToUpdate = this.props.handleToUpdate;
        let posts = <button onClick={() => handleToUpdate('posts')} className={styles.text_wrapper}><a className={styles.text}>Posts</a></button>;
        let media = <button onClick={() => handleToUpdate('media')} className={styles.text_wrapper}><a className={styles.text}>Media</a></button>;
        let archive = <button onClick={() => handleToUpdate('archive')} className={styles.text_wrapper}><a className={styles.text}>Archive</a></button>;
        if(this.props.activePage === "posts"){posts = <button onClick={() => handleToUpdate('posts')} className={styles.active}><a className={styles.text}>Posts</a></button>;}
        if(this.props.activePage === "media"){media = <button onClick={() => handleToUpdate('media')} className={styles.active}><a className={styles.text}>Media</a></button>;}
        if(this.props.activePage === "archive"){archive = <button onClick={() => handleToUpdate('archive')} className={styles.active}><a className={styles.text}>Archive</a></button>;}
        return ( 
            <div>
                <div className={styles.row}>
                {posts}
                {media}
                {archive}
            </div>
            </div>
         );
    }
}
 
export default Button_Selector;
