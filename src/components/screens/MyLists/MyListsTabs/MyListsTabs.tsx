import CategoryLink from "@/components/Presentation/Links/Category/CategoryLink"
import styles from "./MyListsTabs.module.sass"
import { MyListsTabsProps } from "@/components/screens/MyLists/MyListsTabs/MyListsTabs.interface"

export default function MyListsTabs(props: MyListsTabsProps) {
    return (
        <ul className={`${styles.list} ${props.className}`}>
            <li><CategoryLink className={(!props.activeTab || props.activeTab == "reading") ? styles.active : ""} href={"/my-lists"} >Читаю</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "planned" ? styles.active : ""} href={"/my-lists?tab=planned"} >В планах</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "read" ? styles.active : ""} href={"/my-lists?tab=read"} >Прочитано</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "abandoned" ? styles.active : ""} href={"/my-lists?tab=abandoned"} >Брошено</CategoryLink></li>
            <li><CategoryLink className={props.activeTab === "favorite" ? styles.active : ""} href={"/my-lists?tab=favorite"} >Любимое</CategoryLink></li>
        </ul>
    )
}
