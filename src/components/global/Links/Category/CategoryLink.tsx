import React from 'react'
import Link from 'next/link'
import styles from './CategoryLink.module.sass'

interface Props {
    children: React.ReactNode,
    href: string,
    className?: string
}

export default function CategoryLink({children, href, className}: Props) {
    return (
        <Link className={`${styles.link} ${className}`} href={href}>{children}</Link>
    )
}