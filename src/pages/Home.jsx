import React, { useState } from 'react'
import Headings from '../components/Headings'
import { getHeadlines, getSources } from '../api/getNews';
import { useEffect } from 'react';
import HorizontalTextSlider from '../components/HorizontalTextSlider';
import NewsContainer from '../components/NewsContainer';

export default function Home() {  
  const [ sources, setSources ] = useState([]);
  const [ headlines, setHeadlines ] = useState([]);
  const labels = [
    "Bussiness",
    "Politics",
    "Celebrity",
    "Conflict",
    "Programming",
    "Asian",
    "Hacking",
    "Jobs"
  ]

  useEffect(() => {
    getHeadlines({
      country: 'us',
    }, setHeadlines);
    getSources(setSources)
  }, [])

  return (
    <>
      <Headings headlines={headlines} />
      <HorizontalTextSlider data={sources} className='w-full md:w-[750px] lg:w-[1200px] px-10 py-4 no-scrollbar rounded-xl mx-auto my-4 bg-white ' />

      {labels.map(data => 
        <NewsContainer
          className={`my-4`}
          title={data}
          query={{
            q: data
          }}
        />
      )}
      <div className="h-[2000vh]"></div>
    </>
  )
}
