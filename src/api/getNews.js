import axios from "axios";


const apiKey = "72215eb6df5f4ea58b9b04c36350647e";

const getHeadlines = async (query, setNews) => {
    try {
      let response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          ...query,
          apiKey: apiKey
      }})
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    }
}

const getSources = async (setSources) => {
  try {
    let response = await axios.get("https://newsapi.org/v2/top-headlines/sources", {
      params: {
        apiKey
      }
    })
    setSources(response.data.sources);
  } catch (error) {
    console.log(error)
  }
}

const getEverything = async (query, setSources, limit=5) => {
  try {
    let response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        ...query,
        apiKey: apiKey
      }
    })
    setSources(response.data.articles.slice(0,5));
  } catch (error) {
    console.log(error)
  }
}

export { getHeadlines, getSources, getEverything };