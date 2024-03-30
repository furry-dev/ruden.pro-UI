import RecommendedManga from "@/components/Presentation/RecommendedManga";
import CardList from "@/components/Presentation/CardList/CardList";
import Card from "@/components/Presentation/CardList/Card";

export default function Home() {
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
