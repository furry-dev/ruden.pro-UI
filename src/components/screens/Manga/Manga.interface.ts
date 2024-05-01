import {MangaStatusEnum} from "@/__generated__/graphql"

export interface MangaPageMangaEntity {
    covers: {
        lang: string,
        imagePath: string
    }[],
    titles: {
        lang: string,
        text: string
    }[],
    descriptions: {
        lang: string,
        text: string
    }[],
    genres: {
        names: {
            lang: string,
            text: string
        }[]
    }[],
    year: number,
    status: MangaStatusEnum,
    authors: {
        _id: string,
        name: {
            lang: string,
            text: string
        }[]
    }[],
    artists: {
        _id: string,
        name: {
            lang: string,
            text: string
        }[]
    }[],
    createdAt: Date
}

export interface MangaProps {
    params: {
        slug: string
    },
    manga: MangaPageMangaEntity
}
