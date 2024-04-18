import {
    MangaSwipeableListProps
} from "@/components/screens/MyLists/MangaSwipeableList/manga-swipeable-list.interfaces"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

import styles from "./MangaSwipeableList.module.sass"

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
    return (
        <div className={styles.container}>
            <h1>Читаю</h1>
            <div className={styles.list}>
                <SwipeableList>
                    {
                        [...Array(10)].map((x, i) => (
                            <SwipeableListItem
                                key={i}
                                leadingActions={leadingActions()}
                                trailingActions={trailingActions()}
                            >
                                <div className={styles.manga}>
                                    Манга {i + 1}
                                </div>
                            </SwipeableListItem>
                        ))
                    }
                </SwipeableList>
            </div>
            <div className={styles.scrollZone}>
                scroll zone
            </div>
        </div>
    )
}
