import React, { Component } from 'react';
import Post_banner from './post-name-banner';
import Post_footer from './post-footer';
import styles from './new-image-post.module.css'
import "./post.css"
class Post_Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomed: true,
            imageZoomed: <div></div>
         }
    }
    
    makeImgBig(){
        console.log("click");
        if(this.state.zoomed){
            this.setState({zoomed: !this.state.zoomed})
            this.setState({imageZoomed:<div onClick={this.makeImgBig.bind(this)} className={styles.imageZoomedBG}><img className={styles.imageZoomed} src={this.props.image} alt={this.props.image}/></div>})
        }
        else{
            this.setState({zoomed: !this.state.zoomed})
            this.setState({imageZoomed: <div></div>})
        }
    }

    render() { 
        let img, footer;
        if(this.props.image !== "null"){
            img = <div onClick={this.makeImgBig.bind(this)} className={styles.imgArea}><img className={styles.imgStandard} src={this.props.image} alt={this.props.image}/></div>
            footer = <Post_footer location={this.props.image}/>
        }
        else{
            footer = <Post_footer location="null"/>
        }
        if(this.props.forceMedia === "True"){

        }
        return (
         <div class={styles.postSection}>
            <div className={styles.banner}><Post_banner date={this.props.date}/></div>
            <div className={styles.content}>
            <p className={styles.text}>{this.props.content}</p>
            {img}
            {this.state.imageZoomed}
            {footer}
            </div>
        </div>
        );
    }
}
 
export default Post_Image;