import { ReactElement } from 'react'
import MyListsTabs from '@/components/MyListsPage/MyListsTabs/MyListsTabs';

/**
 * My-list page component.
 * @returns {ReactElement} The my-list page ReactElement.
 */
export default function MyLists(): ReactElement {
    return (
        <main>
            <MyListsTabs />
        </main>
    )
}