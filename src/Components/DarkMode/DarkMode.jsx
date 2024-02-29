import { useTheme } from "../Exports"

function DarkMode({ children }) {
    const { isDark, onChange } = useTheme()
    return (
        <section class={`${isDark && "dark bg-slate-800 text-white"}`}>
            <button class="border rounded p-2 bg-sky-50 dark:bg-sky-300" onClick={() => onChange(!isDark)} />
            {children}
        </section>

    )
}

export default DarkMode
