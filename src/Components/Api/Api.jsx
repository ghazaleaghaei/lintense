import { useState } from "react"
import {
    Loading,
    Search,
} from './Exports'
import { useFetchData, useLocalStorage } from "../../Hooks/Exports"

function Api({ }) {
    const [query, setQuery] = useState("")
    const { isLoading, characters, error } = useFetchData("https://rickandmortyapi.com/api/character/?name", query)
    const [value, setValue] = useLocalStorage("ITEMS", [])
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
