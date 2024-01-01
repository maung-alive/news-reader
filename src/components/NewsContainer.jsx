import React, { useEffect, useState } from 'react'
import { getEverything } from '../api/getNews';
import { FaChevronRight } from 'react-icons/fa';

export default function NewsContainer({className, title, query}) {
  const [ news, setNews ] = useState([]);
  
  useEffect(() => {
    getEverything(query, setNews);
  });

  return (
    <div className={`px-4 md:px-10 lg:px-28 ${className}`}>
        <a className="cursor-pointer active:text-red-700 hover:text-blue-700 py-4 flex items-center gap-x-4 md:justify-start justify-between">
            <p className="text-3xl font-medium">{title}</p>
            <FaChevronRight className='text-lg' />
        </a>
        
        <div className="grid md:grid-cols-2 grid-rows-1 h-auto gap-y-4 md:gap-2 my-2">
            <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                <img src={news[0]?.urlToImage} alt={news[0]?.title} className='w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover transition-all hover:object-contain duration-200' />
                <div className="pt-5 pb-3 px-2">
                    <p className="cursor-pointer active:text-red-700 hover:text-blue-600 text-lg md:text-xl font-medium">{news[0]?.title}</p>
                    <p className="text-sm md:text-md font-medium text-red-700">{news[0]?.author} - {new Date(news[0]?.publishedAt).toDateString()}</p>
                    <p className="text-sm md:text-md pt-2">{news[0]?.description}</p>
                    <p className="text-xs md:text-sm font-bold text-right pt-3">- {news[0]?.source.name}</p>
                </div>
            </div>
            <div className="grid grid-rows-4 items-stretch gap-y-2">
                {news.slice(1, 5).map(news => 
                    <div className="flex w-full h-auto bg-slate-100 overflow-hidden relative rounded-md">
                        <span className="absolute bottom-0 left-0 font-medium bg-[rgba(255,255,255,0.5)] text-red-700"> {news.source.name}</span>
                        <img src={news?.urlToImage} alt={news?.title} className='w-40 min-w-40 md:min-w-32 md:w-32 lg:min-w-40 lg:w-40 h-full object-cover bg-gray-400' />
                        <div className="w-full p-2 relative">
                            <p className="active:text-red-700 hover:text-blue-600 cursor-pointer text-md md:text-lg lg:text-xl font-medium">{news.title}</p>
                            <div className="text-xs md:text-sm flex justify-between absolute bottom-2">
                                {new Date(news?.publishedAt).toDateString()}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}