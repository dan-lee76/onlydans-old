import React, { Component, Fragment} from 'react';
import config from "./firebase/config.js";
import { ref, child, get } from "firebase/database";
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from "react-scroll-to-top";
import PostImage from './mainFeed/new-image-post.js';
import ProfileBrief from './mainFeed/Profile-Banner/profile-information.js';
import ButtonSelector from './mainFeed/button-selector.js';
import './mainFeed/post.css';
import logo from "./../logo.png";
class MainFeed extends Component {
    constructor(props) {
        super(props);
        this.state={
            arg1:"posts",
            error: null,
            postData: [],
            display: [],
            limit: 5,
            hasMore: true,
            setPostList: []
        }
        
    }

    getUserData = () => {
      const dbRef = ref(config);
      get(child(dbRef, `/`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const result=snapshot.val();
          this.setState({
            postData: result.reverse(),
            display: result.map((p, index) => {if(index < this.state.limit){return <PostImage d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}else{return null;}})});
        }
        else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      console.log('DATA RETRIEVED');
    }

    orderUserData(){ //Orders user data based on date

    }

      //Reads the json file
    componentDidMount() { 
        this.getUserData();
        }

    handleToUpdate(){
        const postData = this.state.postData;
        var someArg = this.state.arg1;
        var limit = this.state.limit;
        if(someArg==="posts"){
          console.log("ping");
            this.setState({display:postData.map((p, index) => {if(index < limit){return <PostImage d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}else{return null;}})});
        }
        else if(someArg==="media"){
            this.setState({display:postData.map((p, index) => {if(index < limit){if(p.image==="null"){limit++; return null;}else{return <PostImage d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}}else{return null;}})});
        }
        else if(someArg==="archive"){
            this.setState({display:null});
        }
        this.forceUpdate()
    }

    fetchMoreData = () => {
      console.log(this.state.limit)
      if (this.state.limit >= this.state.postData.length) {
        this.setState({ hasMore: false });
        return;
      }
        this.setState({
          limit: this.state.limit+5
        });
      this.handleToUpdate();
    };

    changeDisplayState(stateTo){
      this.setState({arg1: stateTo, limit:5, hasMore:true}, function() {
        this.handleToUpdate();
      });
    };

    render() { 
        const { error, postData} = this.state;
        var changeDisplayState = this.changeDisplayState;
        if (error) {
            return <div>
                <h2>ERROR</h2>
                <h3>{error.message}</h3>
                <h1>Lol did you really think Dan would be able to program</h1>
                </div>;
          }
        else{
            return ( 
                <div>
                  <ScrollToTop smooth/>
                <div className="content">
                <ProfileBrief name="Dan Lee" username="@dan-lee76" dsc="The onlydans exclusive site owner ;)" image={logo} post_amount={postData.length}/>
      <ButtonSelector handleToUpdate={changeDisplayState.bind(this)} activePage={this.state.arg1}/>
      <InfiniteScroll
      dataLength={this.state.limit}
      next={this.fetchMoreData}
      hasMore={this.state.hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
    
      {this.state.display}   
    
      </InfiniteScroll>
                </div>
                </div>
            );
        }
    }
}

export default MainFeed;