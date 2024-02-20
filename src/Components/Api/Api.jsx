import { useEffect, useState } from "react"
import axios from "axios"
import {
    Loading,
    Search,
} from './Exports'

function Api({ }) {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
                setCharacters(data.results.slice(0, 5))
            }
            catch (err) {
                setCharacters([])
                setError(err.response.data.error)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [query])
    return (
        <>
             <Search
                query={query}
                onChange={(e) => { setQuery(e.target.value) }}
            />
            {isLoading && <Loading />}
            {error.length > 0 && <span class="bg-red-300 text-white p-2 rounded-md">{error}</span>}
            <ul>
                {characters.map(item =>
                    <li key={item.id}>
                        {item.name}
                    </li>)}
            </ul>
           
        </>
    )
}

export default Api
