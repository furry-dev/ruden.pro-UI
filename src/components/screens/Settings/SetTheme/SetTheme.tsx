"use client"

import {ChangeEvent} from "react"
import {getTheme, isTypeOfTheme, setTheme} from "./themeUtils"


export default function SetTheme() {
    const themeChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        if (isTypeOfTheme(value)) setTheme(value)
    }

    return (
        <select onChange={themeChangeHandler} value={getTheme()}>
            <option value={"light"}>light</option>
            <option value={"dark"}>dark</option>
        </select>
    )
}