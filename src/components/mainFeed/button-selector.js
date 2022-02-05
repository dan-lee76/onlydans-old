import React, { Component } from 'react';
import styles from "./button-selector.module.css"


class Button_Selector extends Component {

    render() { 
        var handleToUpdate = this.props.handleToUpdate;
        let posts = <button onClick={() => handleToUpdate('posts')} className={styles.text_wrapper}><span className={styles.text}>Posts</span></button>;
        let media = <button onClick={() => handleToUpdate('media')} className={styles.text_wrapper}><span className={styles.text}>Media</span></button>;
        let archive = <button onClick={() => handleToUpdate('archive')} className={styles.text_wrapper}><span className={styles.text}>Archive</span></button>;
        if(this.props.activePage === "posts"){posts = <button onClick={() => handleToUpdate('posts')} className={styles.active}><span className={styles.text}>Posts</span></button>;}
        if(this.props.activePage === "media"){media = <button onClick={() => handleToUpdate('media')} className={styles.active}><span className={styles.text}>Media</span></button>;}
        if(this.props.activePage === "archive"){archive = <button onClick={() => handleToUpdate('archive')} className={styles.active}><span className={styles.text}>Archive</span></button>;}
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
