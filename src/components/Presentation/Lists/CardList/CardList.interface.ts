import React from 'react'

/**
 * Represents the props for the CardList component.
 * @param {React.ReactNode[]} children - The children components.
 * @param {string} title - The title of the card list.
 */
export interface CardListProps {
    children: Array<React.ReactNode>;
    title: string;
}