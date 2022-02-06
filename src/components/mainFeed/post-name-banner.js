import React, { Component } from 'react';
import logo from "./logo.png";
import styles from "./post-name-banner.module.css";
import "./post.css"
class Post_banner extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: null
         }
    }

    dateSort(){
        let date = this.props.date;
        var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var year = parseInt(date.substring(0,date.indexOf("-")))
        if(isNaN(year)){
            return date
        }
        var month = parseInt(date.substring(date.indexOf("-")+1,date.lastIndexOf("-")))
        var day = parseInt(date.substring(date.lastIndexOf("-")+1,date.length))
        var wordMonth = months[month-1].substring(0,3)
        var currentYear = new Date().getFullYear()
        console.log(day,wordMonth,year, currentYear)
        if(year !== currentYear){
            year = parseInt(year.toString().substring(2,4))
            return (wordMonth+' '+day+' '+year)
        }
        else{
            return (wordMonth+' '+day)
        }

    }

    componentDidMount() { 
        const date = this.dateSort();
        this.setState({date:date})
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
                <h1 className={styles.secondaryText}>{this.state.date}</h1>
                </div>
                </div>
            </div>

         );
    }
}
 
export default Post_banner;