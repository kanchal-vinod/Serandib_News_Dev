import React from 'react';
import articlecontent from '../article-content'
import { Link } from 'react-router-dom'
import './articleList.scss'


const Articallist = () => {
    return (
        <>
            <div className="main">
                <div className="topic">
                <h1>Articles</h1>
               
           
         
                
                    {articlecontent.map((articles,index)=> (
                        <div className="main2" key={index}>
                            
                                <Link className="image" to={`/article/${articles.name}`}>
                                    <img src={articles.image} />
                                </Link>
                                
                                    <Link key={index} to={`/article/${articles.name}`}>
                                        <h3 className="title">{articles.title}</h3>
                                    </Link>

                                   <p>
                                      {articles.content[0].substring(0,125)}......
                                   </p>
                                
                            
                        </div>
                    ))}
                
              
                </div>
                </div>

        </>
    );
}

export default Articallist;
