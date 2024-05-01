import React from "react"

export interface ChapterListProps {
    showAll: boolean,
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>
    className?: string
}
