import { GraphQLAgeRating } from '@/components/Presentation/Flags/AgeRatingFlag';

/**
 * Represents a card component.
 * @param {number} id - The image source for the card.
 * @param {GraphQLAgeRating} age_rating - The image source for the card.
 * @param {{file: string}[]} url - The URL link for the card.
 */
export interface MangaCardEntity {
    id: number;
    ageRating: GraphQLAgeRating;
    cover: {
        file: string
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