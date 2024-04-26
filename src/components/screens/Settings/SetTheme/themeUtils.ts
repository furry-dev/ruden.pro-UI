export type Theme = "light" | "dark"

export function isTypeOfTheme(value: any): value is Theme {
    return typeof value === "string" && ["light", "dark"].includes(value)
}

export function getTheme() {
    const themeLocalStorage = localStorage.getItem("theme")
    const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    console.log(themeLocalStorage, themeSystem)
    return themeLocalStorage && isTypeOfTheme(themeLocalStorage) ? themeLocalStorage : themeSystem
}

export function setTheme(value: Theme) {
    document.documentElement.dataset.theme = value
    localStorage.setItem("theme", value)
}
