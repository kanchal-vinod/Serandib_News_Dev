import './NewsContent.scss';
import { Container } from '@mui/system';
import React from 'react'
import NewsCard from '../newscard/NewsCard'


function NewsContent({newsArray,newsResult,loadMore,setLoadMore}) {
  return (
    
    <Container>
      <div className="news-card">
        
          {
            newsArray.map((newsItem)=>(
                <NewsCard newsItem={newsItem} key={newsItem.title} />

            ))
          }   
        </div>


        {
            loadMore<=newsResult && ( 
               <>
                  <hr />
                  <div className="btnarea">
                  <button className="loadmore" onClick={()=> setLoadMore(loadMore+12 )}>
                  Load More
                  </button>
                  </div>
               </>
            )
        }
    </Container>
  )
}

export default NewsContent; 