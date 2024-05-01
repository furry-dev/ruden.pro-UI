import Link from "next/link"
import Image from "next/image"
import styles from "./CharacterCard.module.sass"

export default function CharacterCard() {
    return (
        <li>
            <Link href={"/character/Mino"} className={styles.card}>
                <Image className={styles.cover}
                    draggable={false}
                    src={"/characters/mino/Mino_as_a_cat.webp"}
                    alt={"Mino as a cat"}
                    width={100}
                    height={100}></Image>
                <div className={styles.data}>
                    <h3>Mino</h3>
                </div>
            </Link>
        </li>
    )
}