export type Tab = "reading" | "planned" | "read" | "abandoned" | "favorite" | string | null | undefined

export interface MyListsTabsProps {
    className: string,
    activeTab: Tab
}
