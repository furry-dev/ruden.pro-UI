import {
    MangaSwipeableListProps
} from "@/components/screens/MyLists/MangaSwipeableList/manga-swipeable-list.interfaces"
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions, Type } from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

import styles from "./MangaSwipeableList.module.sass"
import ContentPreviewCard from "@/components/global/ContentPreviewCard/ContentPreviewCard"
import { tab2name } from "@/components/screens/MyLists/MangaSwipeableList/utils"
import toast from "react-hot-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faCircleCheck, faCircleXmark, faHeart } from "@fortawesome/free-solid-svg-icons"

// <FontAwesomeIcon icon={faBookOpen} />

const leadingActions = (id: number) => (
    <LeadingActions>
        <SwipeAction
            destructive={true}
            onClick={() => toast.success(`${id} Перемещено в "В планах"`)}
            >
            <div className={styles.moveButton}>
                <FontAwesomeIcon icon={faBookmark} />
                В планах
            </div>
        </SwipeAction>
        <SwipeAction
            destructive={true}
            onClick={() => toast.success(`${id} Перемещено в "Брошено"`)}
            >
            <div className={styles.moveButton}>
                <FontAwesomeIcon icon={faCircleXmark} />
                Брошено
            </div>
        </SwipeAction>
    </LeadingActions>
)

const trailingActions = (id: number) => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => toast.success(`${id} Перемещено в "Любимое"`)}
        >
            <div className={styles.moveButton}>
                <FontAwesomeIcon icon={faHeart} />
                Любимое
            </div>
        </SwipeAction>
        <SwipeAction
            destructive={true}
            onClick={() => toast.success(`${id} Перемещено в "Прочитано"`)}
        >
            <div className={styles.moveButton}>
                <FontAwesomeIcon icon={faCircleCheck} />
                Прочитано
            </div>
        </SwipeAction>
    </TrailingActions>
)

export default function MangaSwipeableList(props: MangaSwipeableListProps) {
    const mangas = [...Array(10)]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{tab2name(props.tab)}</h1>
            <SwipeableList
                className={styles.list}
                type={Type.IOS}
                // fullSwipe={true}
                // threshold={0.7}
                >
                {
                    mangas.map((x, i) => (
                        <SwipeableListItem
                            key={i}
                            leadingActions={leadingActions(i)}
                            trailingActions={trailingActions(i)}
                            // className={styles.listItem}
                        >
                            <ContentPreviewCard
                                title={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
                                tags={["Романтика", "Школа", "Повседневность"]}
                                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam dolor, in molestiae optio quidem! Atque commodi doloribus eaque ex, facilis iusto nobis odit officiis quasi repellat saepe, velit?"}
                                coverURL={"/manga-cover2.jpg"}
                                isLast={(i + 1 === mangas.length)}
                            />
                        </SwipeableListItem>
                    ))
                }
            </SwipeableList>
        </div>
    )
}
