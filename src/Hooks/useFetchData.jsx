import { useEffect, useState } from "react"
import axios from "axios"

function useFetchData(url,query) {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`${url}=${query}`, {  signal: controller.signal})
                setCharacters(data.results.slice(0, 5))
            }
            catch (err) {
                if (axios.isCancel) {
                    console.log('Request canceled');
                  } else  {
                    setCharacters([])
                    setError(err.response.data.error)
                }

            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
        return () => {
            controller.abort()
        }
    }, [query])

    return {isLoading,characters,error}
}

export default useFetchData
