
import React from 'react';
import './app.scss'
import { BrowserRouter as Router,Route} from 'react-router-dom';
//component

import Navbar from './component/navbar/Navbar'

//pages
import Home from './pages/home/Home';
import AboutUs from './pages/aboutus/AboutUs';
import Article from './pages/article/Article';
import ArticalList from './pages/articlelist/ArticalList';

function App() {
  return (
    
    <div className="main">
  <Router>
    <div className="nav">
    <Navbar/>
    </div>
    <div className="pages">
    <Route exact path='/' component={Home}/>
    <Route  path='/alist' component={ArticalList}/>
    <Route  path='/article/:name' component={Article}/>
    <Route  path='/about' component={AboutUs}/>
    </div>
  </Router>

    </div>
 
    
  );
}

export default App;
