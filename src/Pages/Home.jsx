import { Accordions } from "./Exports"
import { Sort } from "./Exports"
import { Form } from "./Exports"
import { Search } from "./Exports"
import { Api } from "./Exports"

function Home({ }) {
    return (
        <>
            <div class="max-w-sm mx-auto dark:bg-slate-800">
                <h1 className="text-3xl font-bold text-sky-300 text-center">
                    useful components and hooks
                </h1>
                <Accordions />
                <Sort />
                <Form />
                <Search />
                <Api />
            </div>
        </>
    )
}

export default Home
