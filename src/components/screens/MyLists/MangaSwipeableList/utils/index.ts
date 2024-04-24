export function tab2name(tab: string | null | undefined) {
    switch (tab) {
    case "abandoned":
        return "Брошено"
    case "favorite":
        return "Избранное"
    case "planned":
        return "В планах"
    case "read":
        return "Прочитано"
    default:
        return "Читаю"
    }
}
