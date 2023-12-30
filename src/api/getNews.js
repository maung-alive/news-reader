import axios from "axios";


const apiKey = "72215eb6df5f4ea58b9b04c36350647e";

const getNews = async (query, sortBy, setNews) => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          q: query,
          sortBy: sortBy,
          apiKey: apiKey
      }})
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  }

export { getNews };