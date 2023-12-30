import React, { useEffect, useState } from 'react';
import { getNews } from './api/getNews';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';


export default function App() {
  const query = 'bitcoin';
  const sortBy = 'top';
  
  let [ news, setNews ] = useState([])

  useEffect(() => {
    getNews(query, sortBy, setNews);
  }, [])

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}
