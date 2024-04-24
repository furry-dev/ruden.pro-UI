import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.sass"
import React from "react"

import Footer from "@/components/basic/Layouts/Footer"
import {Toaster} from "react-hot-toast"

const openSans = Open_Sans({subsets: ['cyrillic', 'latin']})

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
        <html lang="ru">
            <body className={openSans.className}>
                <Toaster />
                {children}
                <Footer />
            </body>
        </html>
    )
}
