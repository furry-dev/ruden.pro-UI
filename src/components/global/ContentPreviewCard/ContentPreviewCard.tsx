import styles from "./ContentPreviewCard.module.sass"
import Image from "next/image"
import Link from "next/link"

export default function ContentPreviewCard(props: ContentPreviewCardProps) {
    return (
        <article className={`${styles.card} ${props.isLast ? styles.last : ""}`}>
            <Link className={styles.coverLink} href={`${props.link || "#"}`}>
                <Image className={styles.cover} src={props.coverURL} alt={"cover"} width={375} height={535} />
            </Link>
            <div className={styles.right}>
                <Link href={`${props.link || "#"}`}><h3 className={styles.title}>{props.title}</h3></Link>
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
