import style from './AgeRatingFlag.module.sass'

export type GraphQLAgeRating = "R_18" | "R_16" |"R_12" | "R_H"

interface Props {
    className?: string,
    rating: GraphQLAgeRating
}

export function convertAgeRating(rating: GraphQLAgeRating) {
    switch (rating) {
        case 'R_18':
            return "18+"
        case 'R_16':
            return "16+"
        case 'R_12':
            return "12+"
        default:
            return "H18+"
    }
}

export function convertAgeRating2color(rating: GraphQLAgeRating) {
    switch (rating) {
        case 'R_18':
            return "rgba(255, 0, 0, 0.5)"
        case 'R_16':
            return "rgba(255, 215, 0, 0.5)"
        case 'R_12':
            return "rgba(0, 170, 0, 0.5)"
        default:
            return "rgba(255, 0, 0, 0.5)"
    }
}

export default function AgeRatingFlag({className, rating}: Props) {
    return (
        <div className={`${style.flag} ${className}`} style={{backgroundColor: convertAgeRating2color(rating)}}>{convertAgeRating(rating)}</div>
    )
}