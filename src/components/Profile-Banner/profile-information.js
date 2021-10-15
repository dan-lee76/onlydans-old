import React, { Component } from 'react';
import styles from "./profile-information.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Profile_brief extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            username:this.props.username,
            name:this.props.name,
            description:this.props.dsc,
            location:this.props.loc,
            link:this.props.link,
            profile_image:this.props.image,
            post_amount:this.props.post_amount
        }
    }
    render() { 
        return ( 
            <div>
                <div className={styles.banner}>
                    <div class={styles.bannerImg} style={{backgroundImage:"url(https://picsum.photos/750)"}}></div>
                    <div className={styles.stickyName}>
                    <a href="https://danlee.uk"><FontAwesomeIcon className={styles.backButton} icon={faArrowLeft} /></a>
                    <div className={styles.textArea}>
                    <h1 className={styles.topName}>{this.state.name}</h1>
                    <h1 className={styles.underTopName}>{this.state.post_amount} Posts</h1>
                    </div>
                    </div>
                </div>
                <div className={styles.userSection}>
                    <img className={styles.profilePic} src={this.state.profile_image} alt="DANS IMAGE"/>
                <h1 className={styles.name}>{this.state.name}</h1>
                <h1 className={styles.username}>{this.state.username}</h1>
                <p className={styles.userText}>{this.state.description}</p>
            </div>
            </div>
         );
    }
}
 
export default Profile_brief;