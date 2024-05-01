"use client"

import {ReactElement, Suspense} from "react"
import MyLists from "@/components/screens/MyLists/MyLists"

/**
 * My-list page.
 * @returns {ReactElement} The my-list page ReactElement.
 */
export default function MyListsPage(): ReactElement {
    return (
        <Suspense>
            <MyLists/>
        </Suspense>
    )
}
