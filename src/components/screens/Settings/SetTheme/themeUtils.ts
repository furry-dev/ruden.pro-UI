import {useEffect, useState} from "react"

export type Theme = "light" | "dark"

export function isTypeOfTheme(value: any): value is Theme {
    return typeof value === "string" && ["light", "dark"].includes(value)
}

export function useTheme(): [Theme, (theme: Theme) => void] {
    const [theme, setTheme] = useState<Theme>(() => {
        const themeLocalStorage = localStorage.getItem("theme")
        const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        return themeLocalStorage && isTypeOfTheme(themeLocalStorage) ? themeLocalStorage : themeSystem
    })

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem("theme", theme)
    }, [theme])

    return [theme, setTheme]
}
