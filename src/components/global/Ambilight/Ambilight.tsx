import React, {useEffect, useRef, useState} from "react"
import {AmbilightProps} from "@/components/global/Ambilight/ambilight.interfaces"
import styles from "./Ambilight.module.sass"


export default function Ambilight(props: AmbilightProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext("2d")
            setContext(ctx)
        }
    }, [])

    useEffect(() => {
        if (context) {
            const img = new Image()
            img.onload = () => {
                const fadeDuration = props.fadeDuration || 1000
                let startTime: number | null = null

                const animate = (timestamp: number) => {
                    if (!startTime) startTime = timestamp
                    const elapsed = timestamp - startTime
                    const opacity = Math.min(1, elapsed / fadeDuration) // Прозрачность изменяется от 0 до 1

                    if (context) {
                        context.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height)
                        context.globalAlpha = opacity
                        context.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)
                    }

                    if (elapsed < fadeDuration) {
                        requestAnimationFrame(animate)
                    } else {
                        startTime = null
                    }
                }

                requestAnimationFrame(animate)
            }
            img.src = props.imagesUrls[props.currentIndex]
        }
    }, [context, props.currentIndex, props.fadeDuration, props.imagesUrls])

    return (
        <canvas
            ref={canvasRef}
            width={props.colors}
            height={props.aspectRatio * props.colors}
            style={{backgroundColor: "black"}}
            className={`${styles.light} ${props.className || ""}`}
        />
    )
}
