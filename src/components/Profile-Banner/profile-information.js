import React, { Component } from 'react';
import styles from "./profile-information.module.css"
import EmailSignup from './email-signup';
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
        }
    }
    render() { 
        return ( 
            <div>
                <div className={styles.banner}>
                    <div class={styles.bannerImg} style={{backgroundImage:"url(/img/banner.jpg)"}}></div>
                    <div className={styles.stickyName}>
                    <a href="https://danlee.uk"><FontAwesomeIcon className={styles.backButton} icon={faArrowLeft} /></a>
                    <div className={styles.textArea}>
                    <h1 className={styles.topName}>{this.state.name}</h1>
                    <h1 className={styles.underTopName}>{this.props.post_amount} Posts</h1>
                    </div>
                    </div>
                </div>
                <div className={styles.userSection}>
                <img className={styles.profilePic} src={this.state.profile_image} alt="DANS IMAGE"/>
                <EmailSignup></EmailSignup>
                <h1 className={styles.name}>{this.state.name}</h1>
                <h1 className={styles.username}>{this.state.username}</h1>
                <p className={styles.userText}>{this.state.description}</p>
            </div>
            </div>
         );
    }
}
 
export default Profile_brief;