import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainFeed from './components/mainFeed.js';
import EditContentMain from './components/admin/editContentMain.js';
class App extends Component {
    constructor(props) {
        super(props);        
    }

    
    render() { 
            return ( 
              <Router>
                <div>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/admin">admin</a></li>
                </ul>
                  <Routes>
                    <Route path="/" element={<MainFeed/>}/>
                    <Route path="/admin" element={<EditContentMain/>}/>
                  </Routes>
                </div>
                </Router>
            );
        }
    }

export default App;