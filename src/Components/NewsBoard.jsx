import { useEffect } from "react";
import { useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category,country}) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = ` https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data=>setArticles(data.articles))
        console.log("hi");
    },[category,country])

  return (
    <div>
      <h2 className="text-center my-3 mx-3 px-2 py-2">Latest <span className="badge bg-primary">News</span></h2>
      {articles.filter(news => news.title!=="[Removed]").map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
