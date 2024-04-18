import styles from './MangaMetaData.module.sass'
import CategoryLink from '@/components/Presentation/Links/Category/CategoryLink';

export default function MangaMetaData() {
    return (
        <table className={styles.metaData}>
            <colgroup>
                <col span={1} style={{ width: '140px' }} />
                <col span={1} style={{ width: 'auto' }} />
            </colgroup>
            <tbody>
            <tr>
                <td>Год</td>
                <td>
                    <CategoryLink href={'/manga?year=2016'}>2016</CategoryLink>
                </td>
            </tr>
            <tr>
                <td>Статус</td>
                <td>
                    <CategoryLink href={'/manga?status=ongoing'}>ongoing</CategoryLink>
                </td>
            </tr>
            <tr>
                <td>Автор</td>
                <td>
                    <CategoryLink href={'/author/Какой-то хер'}>Какой-то хер</CategoryLink>
                </td>
            </tr>
            <tr>
                <td>Художник</td>
                <td>
                    <CategoryLink href={'/artist/Ваще хз кто'}>Ваще хз кто</CategoryLink>
                </td>
            </tr>
            <tr>
                <td>Издатель</td>
                <td>
                    <CategoryLink href={'/publisher/Manta Comics'}>Manta Comics</CategoryLink>
                </td>
            </tr>
            <tr>
                <td>Добавлено</td>
                <td className={styles.added}>24.03.2023</td>
            </tr>
            </tbody>
        </table>
    )
}