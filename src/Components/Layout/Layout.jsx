import { Outlet } from "react-router-dom"
import { DarkMode, Providers, Navigation } from "../Exports"

function Layout() {
    return (
        <>
            <Providers>
                <DarkMode>
                    <Navigation />
                    <Outlet/>
                </DarkMode>
            </Providers>
        </>
    )
}
export default Layout
