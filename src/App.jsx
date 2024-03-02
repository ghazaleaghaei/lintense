import { Route, Routes } from "react-router-dom"
import {
    Layout,
    Home,
    Blog,
    Post,
    Category,
} from "./Exports"

function App() {

    return (
        <>
            {/* <div class="max-w-sm mx-auto dark:bg-slate-800">
                    <h1 className="text-3xl font-bold text-sky-300 text-center">
                        useful components and hooks
                    </h1>
                    <Accordions />
                    <Sort />
                    <Form />
                    <Search />
                    <Api />
                </div> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} >
                        <Route index element={<Post />} />
                        <Route path="post" element={<Post />} />
                        <Route path="category" element={<Category />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
