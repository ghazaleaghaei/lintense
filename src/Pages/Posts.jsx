import { Link, Outlet } from "react-router-dom"

function Posts({ }) {

    return (
        <>
            <h1> posts page </h1>
            <ul>
                <li>
                    <Link to="1">post 1</Link>
                </li>
                <li>
                    <Link to="2">post 2</Link>
                </li>
            </ul>
        </>
    )
}

export default Posts
