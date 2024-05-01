"use client"

import {faThumbsDown as faThumbsDownReg, faThumbsUp as faThumbsUpReg} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import styles from "./Voter.module.sass"
import {VoteProps} from "@/components/screens/Manga/Voter/voter.interfaces"
import {faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons"
import {useState} from "react"

export default function Voter({userVote, className}: VoteProps) {
    const [liked, setLiked] = useState(userVote === "like")
    const [disliked, setDisliked] = useState(userVote === "dislike")

    const likeHandler = () => {
        if (liked) return setLiked(!liked)
        if (disliked) setDisliked(false)
        setLiked(true)
    }

    const dislikeHandler = () => {
        if (disliked) return setDisliked(!disliked)
        if (liked) setLiked(false)
        setDisliked(true)
    }

    return (
        <div className={`${styles.vote} ${className ?? ""}`}>
            <button onClick={dislikeHandler}
                className={`${styles.button} ${styles.dislike} ${disliked ? styles.active : ""}`}>
                {disliked ? (
                    <FontAwesomeIcon icon={faThumbsDown}/>
                ) : (
                    <FontAwesomeIcon icon={faThumbsDownReg}/>
                )}
            </button>
            <button onClick={likeHandler} className={`${styles.button} ${styles.like} ${liked ? styles.active : ""}`}>
                {liked ? (
                    <FontAwesomeIcon icon={faThumbsUp}/>
                ) : (
                    <FontAwesomeIcon icon={faThumbsUpReg}/>
                )}
            </button>
        </div>
    )
}