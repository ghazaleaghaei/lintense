import {
    createContext,
    useState,
    useContext
} from 'react'
import { useLocalStorage } from "../Hooks/Exports"

const ThemeContext = createContext()
export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useLocalStorage("DarkMode", false)
    //const [isDark,setIsDark]=useState(false)
    const onChange = (e) => { setIsDark(e) }

    return (
        <ThemeContext.Provider value={{ isDark, onChange }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined)
        throw new Error("ThemeContext was used outside the ThemeProvider")
    return context
} 
