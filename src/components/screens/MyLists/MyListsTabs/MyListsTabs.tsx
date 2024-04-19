import CategoryLink from "@/components/global/Links/Category/CategoryLink"
import styles from "./MyListsTabs.module.sass"
import { MyListsTabsProps } from "@/components/screens/MyLists/MyListsTabs/MyListsTabs.interface"
import { useEffect, useRef } from "react"

export default function MyListsTabs(props: MyListsTabsProps) {
    const listRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        // Функция для прокрутки списка так, чтобы активная вкладка была видна
        const scrollToActiveTab = () => {
            if (!listRef.current) return

            const activeTabElement = listRef.current.querySelector(`.${styles.active}`)
            if (!(activeTabElement instanceof HTMLElement)) return

            const containerWidth = listRef.current.offsetWidth
            const containerPaddingLeft = parseFloat(getComputedStyle(listRef.current).paddingLeft)
            const containerPaddingRight = parseFloat(getComputedStyle(listRef.current).paddingRight)
            const activeTabLeft = activeTabElement.offsetLeft
            const activeTabWidth = activeTabElement.offsetWidth

            // Если активная вкладка находится за пределами видимой области вправо
            if (activeTabLeft + activeTabWidth > containerWidth - containerPaddingRight) {
                listRef.current.scrollLeft = activeTabLeft - containerWidth + containerPaddingRight + activeTabWidth
            }
            // Если активная вкладка находится за пределами видимой области влево
            else if (activeTabLeft < listRef.current.scrollLeft + containerPaddingLeft) {
                listRef.current.scrollLeft = activeTabLeft - containerPaddingLeft
            }
        }

        // Вызов функции прокрутки при изменении активной вкладки
        scrollToActiveTab()
    }, [props.activeTab])

    return (
        <ul ref={listRef} className={`${styles.list} ${props.className}`}>
            <li><CategoryLink className={(!props.activeTab || props.activeTab == "reading") ? styles.active : ""} href={"/my-lists"} >Читаю</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "planned" ? styles.active : ""} href={"/my-lists?tab=planned"} >В планах</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "read" ? styles.active : ""} href={"/my-lists?tab=read"} >Прочитано</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "abandoned" ? styles.active : ""} href={"/my-lists?tab=abandoned"} >Брошено</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "favorite" ? styles.active : ""} href={"/my-lists?tab=favorite"} >Любимое</CategoryLink></li>
        </ul>
    )
}
