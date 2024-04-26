import Manga from "@/components/screens/Manga/Manga"
import {MangaProps} from "@/components/screens/Manga/Manga.interface"

export default function MangaPage({params}: MangaProps) {
    return <Manga params={params}/>
}