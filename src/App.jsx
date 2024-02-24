import {
    Accordions,
    Sort,
    Form,
    Search,
    Api,
} from "./Exports"

function App() {

    return (
        <section class="max-w-sm mx-auto">
            <h1 className="text-3xl font-bold text-sky-300 text-center">
                useful components and hooks
            </h1>
            <Accordions />
            <Sort />
            <Form />
            <Search />
            <Api />
        </section>
    )
}

export default App
