import { ArrowDown } from "../Svg/Exports"
import { useState } from "react"

function Select({ sortBy, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div class="relative h-[133.5px] w-48 mx-auto overflow-y-hidden">
                <button
                    class="flex items-center h-8 w-full pe-3 ps-2 border border-black focus:outline-none"
                    onClick={() => { setIsOpen(!isOpen) }}
                >
                    <span class="text-sm leading-none">
                        {sortBy}
                    </span>
                    <ArrowDown class="w-5 ms-auto" />
                </button>
                <div class={`absolute flex flex-col w-full mt-1 border border-black shadow-lg *:flex *:items-center *:h-8 *:px-3 *:text-sm hover:*:bg-sky-100 duration-300 *:cursor-pointer dark:hover:*:bg-slate-500 ${isOpen ? "translate-x-0" : "translate-y-full"}`}>
                    <option
                        value="Latest Posts"
                        onClick={(e) => { onSelect(e), setIsOpen(!isOpen) }}
                    >
                        Latest Posts
                    </option>
                    <option
                        value="Earliest Posts"
                        onClick={(e) => { onSelect(e), setIsOpen(!isOpen) }}
                    >
                        Earliest Posts
                    </option>
                    <option
                        value="Completed Posts"
                        onClick={(e) => { onSelect(e), setIsOpen(!isOpen) }}
                    >
                        Completed Posts
                    </option>
                </div>
            </div>
            {/* <select value={sorted} onChange={(e) => { setSorted(e.target.value) }}>
                <option value="latest">Latest Posts</option>
                <option value="earliest">Earliest Posts</option>
                <option value="completed">Completed Posts</option>
            </select> */}
        </>
    )
}

export default Select
