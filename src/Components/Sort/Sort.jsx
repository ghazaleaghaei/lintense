import {
    Select
} from "../Exports"
import { useState } from "react"

function Sort() {
    const [sortBy, setSortBy] = useState("Latest Posts")
    const [items, setItems] = useState([])
    let sortedItems = items
    if (sortBy === "Latest Posts")
        sortedItems = [...items].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    if (sortBy === "Earliest Posts")
        sortedItems = [...items].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    if (sortBy === "Completed Posts")
        sortedItems = [...items].sort((a, b) => Number(a.completed) - Number(b.completed))
    return (
        <>
            <Select sortBy={sortBy}
                onSelect={(e) => { setSortBy(e.target.value) }} />
        </>
    )
}

export default Sort
