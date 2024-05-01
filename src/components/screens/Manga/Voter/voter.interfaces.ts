export type Vote = "like" | "dislike" | null

export interface VoteProps {
    userVote: Vote,
    className?: string
}
