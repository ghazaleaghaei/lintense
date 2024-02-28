import { ThemeProvider } from "../../Context/ThemeContext"

function Providers({children}) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Providers
