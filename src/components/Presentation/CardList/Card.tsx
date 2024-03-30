import styles from "./Card.module.sass"

interface CardProps {
    image: string
    url: string
}

export default function Card({image, url}: CardProps) {
    return (
        <a href={url} className={styles.card} style={{background: `url('${image}') center center / cover`}}>

        </a>
    )
}
