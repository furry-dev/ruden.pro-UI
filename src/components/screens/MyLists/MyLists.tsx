"use client"

import { ReactElement } from "react"
import MyListsTabs from "@/components/screens/MyLists/MyListsTabs/MyListsTabs"

import styles from "./MyLists.module.sass"
import SwipeableViews from "react-swipeable-views"
import { useQueryState } from "nuqs"
import MangaSwipeableList from "@/components/screens/MyLists/MangaSwipeableList/MangaSwipeableList"

const INDEX2TAB = [
    "reading",
    "planned",
    "read",
    "abandoned",
    "favorite"
]


/**
 * My-list page component.
 * @returns {ReactElement} The my-list page ReactElement.
 */
export default function MyLists(): ReactElement {
    const [tab, setTab] = useQueryState("tab")
    const handleSwipe = (index: number) => setTab(INDEX2TAB[index] || null)

    const tabIndex = INDEX2TAB.indexOf(tab|| INDEX2TAB[0])

    return (
        <main className={styles.main}>
            <MyListsTabs className={styles.listsTabs} activeTab={tab} />
            <SwipeableViews className={styles.listsView} onChangeIndex={handleSwipe} index={tabIndex}>
                <MangaSwipeableList tab={null} />
                <div>В планах</div>
                <div>Прочитано</div>
                <div>Брошено</div>
                <div>Любимое</div>
            </SwipeableViews>
        </main>
    )
}
