import './NewsCard.scss'
import React from 'react'



const NewsCard = ({newsItem}) => { 

   // console.log(newsItem);

   const fulldate=new Date(newsItem.publishedAt);
   var date=fulldate.toString().split(" ");
   const hour =parseInt(date[4].substring(0,2));
   const time =hour>12 ? true : false;

    return (
        <div  className="newsCard">
          <img alt={newsItem.title} src={newsItem.urlToImage?newsItem.urlToImage:"https://st3.depositphotos.com/23594922/31822/v/1600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"} className="image" />
              

              <div className="newsText">
                <div>
                    <span className="title">
                        {newsItem.title}</span>

                        <br></br> 
                    <span className="author">
                            <a href={newsItem.url} target="_blank">
                                <b> {" "} </b>
                            </a>

                            <span className="mute">
                            by {newsItem.author ? newsItem.author : "unknown" }/{" "}
                           {
                               time?`${hour-12}:${date[4].substring(3,5)} pm`:
                               `${hour}:${date[4].substring(3,5)} am` 
                            } on { date[2]} {date[1]} {date[3]} {date[0]} 
                            </span>
                            

                    </span>
                </div>

                <div className="lowerNewsTest">
                    <div className="description">{newsItem.description}</div>
                    <span className="readmore">
                        read more at{" "}
                        <a className="srs" href={newsItem.url} target="_blank">
                            <b>{newsItem.source.name}</b>
                        </a>
                    </span>
                </div>
              </div>
        </div>
    );
}

export default NewsCard;
