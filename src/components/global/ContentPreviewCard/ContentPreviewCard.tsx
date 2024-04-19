import styles from "./ContentPreviewCard.module.sass"
import Image from "next/image"

export default function ContentPreviewCard(props: ContentPreviewCardProps) {
    return (
        <article className={`${styles.card} ${props.isLast ? styles.last : ""}`}>
            <Image className={styles.cover} src={props.coverURL} alt={"cover"} width={375} height={535} />
            <div className={styles.right}>
                <h3>{props.title}</h3>
                {props.tags && <div className={styles.tags}>
                    {props.tags.map((tag, index) => (
                        <a key={index} className={styles.tag}>{tag}</a>
                    ))}
                </div>}
                <p className={styles.desc}>{props.desc}</p>
            </div>
        </article>
    )
}
