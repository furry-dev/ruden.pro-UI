import { GraphQLAgeRating } from "@/components/global/Flags/AgeRatingFlag"

/**
 * Represents a card component.
 * @param {number} id - The image source for the card.
 * @param {GraphQLAgeRating} age_rating - The image source for the card.
 * @param {{file: string}[]} url - The URL link for the card.
 */
export interface MangaCardEntity {
    _id: string;
    ageRating: GraphQLAgeRating;
    covers: {
        imagePath: string
    }[];
}

/**
 * Represents a MangaCard component props.
 * @param {string} image - The image source for the card.
 * @param {string} url - The URL link for the card.
 */
export interface MangaCardProps {
    manga: MangaCardEntity;
}
