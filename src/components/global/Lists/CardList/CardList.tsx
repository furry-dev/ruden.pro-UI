import React, { ReactElement } from "react"
import styles from "./CardList.module.sass"
import { CardListProps } from "@/components/global/Lists/CardList/CardList.interface"

/**
 * Represents a list of cards component.
 * @param {Props} props - The props object.
 * @returns {ReactElement} The card list ReactElement.
 */
export default function CardList({children, title} : CardListProps): ReactElement {
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
