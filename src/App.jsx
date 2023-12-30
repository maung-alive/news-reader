import React, { useEffect, useState } from 'react'
import { getNews } from './api/getNews'


export default function App() {
  const query = 'bitcoin';
  const sortBy = 'top';
  
  let [ news, setNews ] = useState([])

  useEffect(() => {
    getNews(query, sortBy, setNews);
  }, [])
  
  return (
    <div className='text-3xl'>
      <h1>News API</h1>
      {news.map(i => { return <h2 key={i.title}>{i.title}</h2> })}
    </div>
  )
}
