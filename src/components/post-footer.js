import React, { Component } from 'react';
import styles from "./post-footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveAs } from "file-saver";
class Post_footer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            heart:['far', 'heart']
         }
    }
    changeHeart = event =>{
        if(this.state.heart[0] === 'far'){
            this.setState({heart:['fas', 'heart']});
        }
        else{
            this.setState({heart:['far', 'heart']});
        }
    }
    downloadFile = () => {
        console.log(this.props.location, this.props.name);
        saveAs(this.props.location, this.props.name);
    }
    render() { 
        let download;
        if(this.props.name === 'null' || this.props.location === 'null'){
            download=null
        }
        else{
            download=<button onClick={this.downloadFile}><FontAwesomeIcon className={styles.icon} icon={['fas', 'download']}/></button>;
        }
        return ( 
            <div className={styles.footer}>
                {download}
                <button onClick={this.changeHeart} ><FontAwesomeIcon className={styles.icon} icon={this.state.heart}/></button>
            </div>
         );
    }
}
 
export default Post_footer;