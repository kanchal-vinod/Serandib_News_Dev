import React from 'react';
import './article.scss'

import articleContent from '../article-content';

const Article = ({match}) =>{

    const name = match.params.name;
    const article=articleContent.find((article)=> article.name===name)
    if(!article) return <h1>article does not found</h1>

    return (

        <div className="article">
            <h1>
                {article.title}
            </h1>
                   <img src={article.image}/>
            
            {article.content.map((paragraph,index)=>(
                <p className="para" key={index}>
                    {paragraph}
                </p>
            ))}
                
                
           
        </div>
    );
}

export default Article;
