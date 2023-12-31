import React, { useState } from 'react'
import Headings from '../components/Headings'
import { getHeadlines, getSources } from '../api/getNews';
import { useEffect } from 'react';
import HorizontalTextSlider from '../components/HorizontalTextSlider';

export default function Home() {
  const query = {
    country: 'us',
  }
  
  const [ sources, setSources ] = useState([0, 1]);
  let [ news, setNews ] = useState([])

  useEffect(() => {
    getHeadlines(query, setNews);
    getSources(setSources)
  }, [])

  return (
    <>
      <Headings headlines={news} />
      <HorizontalTextSlider data={sources} className='w-full md:w-[750px] lg:w-[1200px] px-10 py-4 no-scrollbar rounded-xl mx-auto my-4 bg-white ' />
      <div className="h-[2000vh]"></div>
    </>
  )
}
