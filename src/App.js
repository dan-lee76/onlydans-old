import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from "react-scroll-to-top";
import Post_Image from './components/new-image-post';
import Profile_brief from './components/Profile-Banner/profile-information';
import Button_Selector from './components/button-selector';
import './components/post.css';
import logo from "./logo.png";
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            arg1:"posts",
            error: null,
            postData: [],
            display: [],
            limit: 5,
            hasMore: true
        }
    }

      //Reads the json file
    componentDidMount() { 
        fetch(process.env.PUBLIC_URL + '/dddsexytimedannybabyreccomends69420_donaldducknsfw2021_freedownload_novirus.json')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                postData: result.reverse(),
                display: result.map((p, index) => {if(index < this.state.limit){return <Post_Image d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}})
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
        }

    handleToUpdate(){
        const postData = this.state.postData;
        var someArg = this.state.arg1;
        var limit = this.state.limit;
        if(someArg==="posts"){
          console.log("ping");
            this.setState({display:postData.map((p, index) => {if(index < limit){return <Post_Image d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}})});
        }
        else if(someArg==="media"){
            this.setState({display:postData.map((p, index) => {if(index < limit){if(p.image==="null"){limit++; return null;}else{return <Post_Image d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}}})});
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
    }

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
                <Profile_brief name="Dan Lee" username="@dan-lee76" dsc="The onlydans exclusive site owner ;)" image={logo} post_amount={postData.length}/>
                <Button_Selector handleToUpdate={changeDisplayState.bind(this)} activePage={this.state.arg1}/>
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

export default App;