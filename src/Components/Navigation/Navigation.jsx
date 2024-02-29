import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <>
            <nav class="border-b "> 
                <ul class="inline-flex w-full justify-center gap-4 text-lg font-bold p-2">
                    <li>
                        <NavLink end to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="blog">Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navigation
