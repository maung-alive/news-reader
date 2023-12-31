import React, { useState } from 'react'
import Headings from '../components/Headings'
import { getHeadlines } from '../api/getNews';
import { useEffect } from 'react';

export default function Home() {
  const query = {
    country: 'us',
  }

  let [ news, setNews ] = useState([])

  useEffect(() => {
    getHeadlines(query, setNews);
  }, [])

  return (
    <>
      <Headings headlines={news} />
    </>
  )
}
