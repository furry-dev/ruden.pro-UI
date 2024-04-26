import {Manga} from "@/components/screens/Home/RecommendedManga/recommended-manga.interfaces"

/**
 * Represents a MangaCard component props.
 * @param {string} image - The image source for the card.
 * @param {string} url - The URL link for the card.
 */
export interface MangaCardProps {
    manga: Manga
}
