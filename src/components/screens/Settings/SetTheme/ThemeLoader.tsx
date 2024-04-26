"use client"

import {useEffect} from "react"
import {getTheme} from "@/components/screens/Settings/SetTheme/themeUtils"


export function ThemeLoader() {
    useEffect(() => {
        document.documentElement.dataset.theme = getTheme()
    })
    return null
}