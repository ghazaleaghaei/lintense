import {
    Accordions,
    Sort,
    Form,
    Search,
    Api,
    DarkMode,
    Providers,
} from "./Exports"

function App() {

    return (
        <Providers>
            <DarkMode>
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
            </DarkMode>
        </Providers>
    )
}

export default App
