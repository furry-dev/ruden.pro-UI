import {IconProp} from "@fortawesome/fontawesome-svg-core"

export interface LinkCardProps {
    href: string
    icon: IconProp
    text: string
    subText?: string
    className?: string
    centered?: boolean
}