import React, { ReactElement } from 'react';
import styles from "./CardList.module.sass"

/**
 * Represents the props for the CardList component.
 * @param {React.ReactNode[]} children - The children components.
 * @param {string} title - The title of the card list.
 */
interface Props {
  children: Array<React.ReactNode>;
  title: string;
}

/**
 * Represents a list of cards component.
 * @param {Props} props - The props object.
 * @returns {ReactElement} The card list ReactElement.
 */
export default function CardList({children, title} : Props): ReactElement {
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
