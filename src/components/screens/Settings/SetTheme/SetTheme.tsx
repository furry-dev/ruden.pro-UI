"use client"

import {ChangeEvent} from "react"
import {Theme, useTheme} from "./themeUtils"

export default function SetTheme() {
    const [theme, setTheme] = useTheme()

    const themeChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as Theme
        setTheme(value)
    }

    return (
        <select onChange={themeChangeHandler} value={theme}>
            <option value={"light"}>light</option>
            <option value={"dark"}>dark</option>
        </select>
    )
}