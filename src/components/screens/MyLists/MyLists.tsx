"use client"

import { ReactElement } from "react"
import MyListsTabs from "@/components/screens/MyLists/MyListsTabs/MyListsTabs"

import styles from "./MyLists.module.sass"
import SwipeableViews from "react-swipeable-views"
import { useQueryState } from "nuqs"
import MangaSwipeableList from "@/components/screens/MyLists/MangaSwipeableList/MangaSwipeableList"
import { useSwipeable } from "react-swipeable"

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

    const handlers = useSwipeable({
        onSwiped: (e) => {
            let currentIndex = INDEX2TAB.indexOf(tab || INDEX2TAB[0])
            const lastIndex = INDEX2TAB.length - 1

            if (e.dir === "Left" && currentIndex < lastIndex) {
                currentIndex++
            } else if (e.dir === "Right" && currentIndex > 0) {
                currentIndex--
            } else if (e.dir === "Left" && currentIndex === lastIndex) {
                currentIndex = 0
            } else if (e.dir === "Right" && currentIndex === 0) {
                currentIndex = lastIndex
            } else {
                return false
            }
            void setTab(INDEX2TAB[currentIndex])
        }
    })

    const tabIndex = INDEX2TAB.indexOf(tab|| INDEX2TAB[0])

    return (
        <main className={styles.main}>
            <SwipeableViews disabled={true} className={styles.listsView} onChangeIndex={handleSwipe} index={tabIndex}>
                <MangaSwipeableList tab={"reading"} />
                <MangaSwipeableList tab={"planned"} />
                <MangaSwipeableList tab={"read"} />
                <MangaSwipeableList tab={"abandoned"} />
                <MangaSwipeableList tab={"favorite"} />
            </SwipeableViews>
            <div {...handlers}>
                <MyListsTabs className={styles.listsTabs} activeTab={tab} />
            </div>
        </main>
    )
}
