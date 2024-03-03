import { NavLink, Outlet } from "react-router-dom"

function Blog({ }) {

    return (
        <>
            <nav class="border-b ">
                <ul class="inline-flex w-full justify-center gap-4 text-lg font-bold p-2">
                    <li>
                        <NavLink end to="category">category</NavLink>
                    </li>
                    <li>
                        <NavLink to="posts">posts</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Blog
