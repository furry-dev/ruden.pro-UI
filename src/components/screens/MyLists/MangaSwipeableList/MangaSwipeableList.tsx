import {
    MangaSwipeableListProps
} from "@/components/screens/MyLists/MangaSwipeableList/manga-swipeable-list.interfaces"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

import styles from "./MangaSwipeableList.module.sass"
import ContentPreviewCard from "@/components/global/ContentPreviewCard/ContentPreviewCard"

const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => console.info("swipe action triggered")}>
            Action name
        </SwipeAction>
    </LeadingActions>
)

const trailingActions = () => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => console.info("swipe action triggered")}
        >
            Delete
        </SwipeAction>
    </TrailingActions>
)

export default function MangaSwipeableList(props: MangaSwipeableListProps) {
    const mangas = [...Array(10)]

    return (
        <div className={styles.container}>
            <h1>Читаю</h1>
            <SwipeableList className={styles.list}>
                {
                    mangas.map((x, i) => (
                        <SwipeableListItem
                            key={i}
                            leadingActions={leadingActions()}
                            trailingActions={trailingActions()}
                        >
                            <ContentPreviewCard
                                title={"Я отдала свой первый раз своему брату"}
                                tags={["Романтика", "Школа", "Первый раз"]}
                                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam dolor, in molestiae optio quidem! Atque commodi doloribus eaque ex, facilis iusto nobis odit officiis quasi repellat saepe, velit?"}
                                coverURL={"/manga-cover.jpg"}
                                isLast={(i + 1 === mangas.length)}
                            />
                        </SwipeableListItem>
                    ))
                }
            </SwipeableList>
        </div>
    )
}
