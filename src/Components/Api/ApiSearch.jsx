
function ApiSearch({query,onChange}) {

    return (
        <div class="flex flex-col max-w-sm mx-auto justify-center">
            <input
                class="bg-sky-50 border outline-none rounded-lg p-2 my-5 dark:text-black"
                placeholder="Search..."
                value={query}
                onChange={onChange}
            />
        </div>
    )
}

export default ApiSearch
