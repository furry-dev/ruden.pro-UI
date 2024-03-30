import React from "react"
import styles from "./CardList.module.sass"

type Props = {
    children: any[],
    title: string
}

export default function CardList({children, title} : Props) {
    return (
        <div className={styles.cardList}>
            <h2 className={styles.cardList__title}>{title}</h2>
            <ul className={styles.cardList__items}>
                {React.Children.map(children, (child) => (
                    <li>{child}</li>
                ))}
            </ul>
        </div>
    )
}
