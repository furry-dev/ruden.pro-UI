import styles from "./MangaMetaData.module.sass"
import CategoryLink from "@/components/global/Links/Category/CategoryLink"
import {MangaDataProps} from "@/components/screens/Manga/MangaData/manga-data.interfaces"

export default function MangaMetaData({manga}: Omit<MangaDataProps, "chapterListClassName">) {
    return (
        <table className={styles.metaData}>
            <colgroup>
                <col span={1} style={{width: "140px"}}/>
                <col span={1} style={{width: "auto"}}/>
            </colgroup>
            <tbody>
                <tr>
                    <td>Год</td>
                    <td>
                        <CategoryLink href={`/manga?year=${manga.year}`}>{manga.year}</CategoryLink>
                    </td>
                </tr>
                <tr>
                    <td>Статус</td>
                    <td>
                        <CategoryLink href={"/manga?status=ongoing"}>{manga.status}</CategoryLink>
                    </td>
                </tr>
                <tr>
                    <td>Автор</td>
                    <td>
                        {manga.authors.map(people => (
                            <CategoryLink key={null}
                                href={`/author/${people.name[0].text}}`}>{people.name[0].text}</CategoryLink>
                        ))}
                    </td>
                </tr>
                <tr>
                    <td>Художник</td>
                    <td>
                        {manga.artists.map(people => (
                            <CategoryLink key={null}
                                href={`/artist/${people.name[0].text}}`}>{people.name[0].text}</CategoryLink>
                        ))}
                    </td>
                </tr>
                <tr>
                    <td>Издатель</td>
                    <td>
                        <CategoryLink key={null} href={"/publisher/Manta Comics"}>Manta Comics</CategoryLink>
                    </td>
                </tr>
                <tr>
                    <td>Добавлено</td>
                    <td className={styles.added}>{new Date(manga.createdAt).toLocaleString().split(",")[0]}</td>
                </tr>
            </tbody>
        </table>
    )
}
