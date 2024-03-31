'use client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import styles from './RecommendedManga.module.sass'
import GenreList from '@/components/Presentation/GenreList/GenreList'
import MangaActions from '@/components/Presentation/MangaActions'
import createApolloClient from '@/apollo/apollo-client'
import {gql} from '@/__generated__'
import Image from 'next/image'
import { ReactElement } from 'react'

/**
 * Fetches manga data from the server.
 * @returns {Promise<object>} The manga data fetched from the server.
 */
export async function getServerSideProps() {
    const client = createApolloClient()
    const { data } = await client.query({
        query: gql(/*GraphQL*/`
            query Mangas($limit: Int, $page: Int) {
                mangaList(limit: $limit, page: $page) {
                    title {
                        text
                        langCodes {
                            name
                        }
                    }
                    description {
                        text
                        langCodes {
                            name
                        }
                    }
                    year
                    added
                    cover {
                        file
                        langCodes {
                            name
                        }
                    }
                    id
                }
            }
        `),
    })

    return data.mangaList
}

/**
 * Displays recommended manga.
 * @returns {ReactElement} The recommended manga ReactElement.
 */
export default function RecommendedManga(): ReactElement {
    const genres = ['Повседневность', 'Романтика', 'Школа']

    getServerSideProps().then(r => console.log(r))

    return (
        <div className={styles.recommended}>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={8000}
            >
                <Image src={'/manga-cover.jpg'} alt={'MangaName'} width={500} height={500} className={styles['background-image']}></Image>
                <Image src={'/avatar.jpg'} alt={'MangaName'} width={500} height={500} className={styles['background-image']}></Image>
            </Carousel>
            <div className={styles.bottom}>
                <div className={styles.meta}>
                    <GenreList genres={genres}/>
                </div>
                <MangaActions />
            </div>
        </div>
    )
}
