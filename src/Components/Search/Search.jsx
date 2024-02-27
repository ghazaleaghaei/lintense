import { useState } from 'react'

function Search() {
    const items = [
        {
            id: 1,
            name: "jack"
        },
        {
            id: 2,
            name: "alex"
        }

    ]
    const [query, setQuery] = useState("")
    const [searchResult, setSearchResult] = useState(items)
    return (
        <div class="flex flex-col justify-center">
            <input
                class="bg-sky-50 border outline-none rounded-lg p-2 my-5 dark:text-black"
                placeholder="Search..."
                value={query}
                onChange={(e) => {
                        setQuery(e.target.value),
                        e.target.value.length > 3 && setSearchResult(items.filter((title) => title.name === e.target.value)),
                        e.target.value.length === 0 && setSearchResult(items)
                }}
            />
            <ul>
                {searchResult.map(item =>
                    <li key={item.id}>
                        {item.name}
                    </li>)}
            </ul>
        </div>
    )
}

export default Search
