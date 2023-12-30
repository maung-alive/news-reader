import React, { useEffect, useState } from 'react'
import { getNews } from './api/getNews'
import NavBar from './components/NavBar';


export default function App() {
  const query = 'bitcoin';
  const sortBy = 'top';
  
  let [ news, setNews ] = useState([])

  useEffect(() => {
    getNews(query, sortBy, setNews);
  }, [])

  return (
    <>

    <NavBar />
    
    </>
  )
}
