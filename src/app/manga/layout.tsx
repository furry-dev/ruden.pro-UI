import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.sass"
import React from "react"

import Footer from "@/components/basic/Layouts/Footer"
import Header from "@/components/basic/Layouts/Header"
import {ThemeLoader} from "@/components/screens/Settings/SetTheme/ThemeLoader"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Ruden - Manga",
    description: "Сайт для чтения манг",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" data-theme={"dark"}>
            <body className={inter.className}>
                <Header/>
                {children}
                <Footer/>
                <ThemeLoader/>
            </body>
        </html>
    )
}
