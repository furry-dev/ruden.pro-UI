import styles from './MangaDataGenres.module.sass';
import CategoryLink from '@/components/Presentation/CategoryLink'

export default function MangaDataGenres() {
    return (
        <ul className={styles.genres}>
            <li><CategoryLink href={"/manga?genres=1"}>Повседневность</CategoryLink></li>
            <li><CategoryLink href={"/manga?genres=2"}>Романтика</CategoryLink></li>
            <li><CategoryLink href={"/manga?genres=3"}>Школа</CategoryLink></li>
            <li><CategoryLink href={"/manga?genres=4"}>В первый раз</CategoryLink></li>
            <li><CategoryLink href={"/manga?genres=5"}>Изначилование</CategoryLink></li>
            <li><CategoryLink href={"/manga?genres=6"}>Инцест</CategoryLink></li>
            <li><CategoryLink href={"/manga?genres=7"}>Принуждение</CategoryLink></li>
            <li><CategoryLink href={"/manga?genres=8"}>Спящие</CategoryLink></li>
        </ul>
    )
}