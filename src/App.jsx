
import React from 'react';
import axios from 'axios';
import './app.scss'
import { BrowserRouter as Router,Route} from 'react-router-dom';
import {useEffect,useState} from 'react'

//component
import NewsContent from './component/newscontent/NewsContent';
import Nav from './component/navbar/Nav'
import Footer from './component/footer/Footer'




function App() {

const [newsArray, setNewsArray] = useState([]);
const [newsResult, setNewsResult] = useState();
const [loadMore, setLoadMore] = useState(12);


//connection with Api
  const newsApi = async () =>{
    try{
      const news =await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=8708b2d09474419f88a039ef5a017b9c&pageSize=${loadMore}`);
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);

    }catch(error){
      console.log(error);
    }
  };

  console.log(newsArray);



useEffect(() =>{
  newsApi();
},[newsResult,loadMore])


  return (
    
    <div className="app">
      
      <div className='topbar'>
        <Nav/>
      </div>
    
          <NewsContent className="news-content"
          setLoadMore={setLoadMore}
          loadMore={loadMore}
          newsArray={newsArray} 
          newsResult={newsResult}/>
  
      <div className="fut">
        <Footer/>
      </div>
      
      </div>
 
    
  );
}

export default App;
