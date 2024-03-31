import RecommendedManga from "@/components/Presentation/RecommendedManga"
import CardList from "@/components/Presentation/CardList/CardList"
import Card from "@/components/Presentation/CardList/Card"
import { ReactElement } from 'react'

/**
 * Home page component.
 * @returns {ReactElement} The home page ReactElement.
 */
export default function Home(): ReactElement {
    return (
        <div>
            <RecommendedManga/>
            <CardList title={"Новинки: "}>
                <Card image={"/manga-cover.jpg"} url={"/manga/I-gave-my-first-time-to-my-brother"}/>
                <Card image={"/manga-cover.jpg"} url={"/manga/I-gave-my-first-time-to-my-brother"}/>
                <Card image={"/manga-cover.jpg"} url={"/manga/I-gave-my-first-time-to-my-brother"}/>
                <Card image={"/manga-cover.jpg"} url={"/manga/I-gave-my-first-time-to-my-brother"}/>
            </CardList>
        </div>
    )
}
