import {GraphQLAgeRating} from "@/components/global/Flags/AgeRatingFlag"

export interface Genre {
    names: {
        lang: string
        text: string
    }[]
}

export interface Manga {
    _id: string
    ageRating: GraphQLAgeRating
    covers: {
        lang: string
        imagePath: string
    }[]
    titles: {
        lang: string
        text: string
    }[]
    genres: Genre[]
    slug: string
}

export interface RecommendedMangaProps {
    mangas: Manga[]
}