import React, {ReactElement} from "react"
import Account from "@/components/screens/Account/Account"


/**
 * Home page.
 * @returns {Promise<ReactElement>} The home page ReactElement.
 */
export default async function HomePage(): Promise<ReactElement> {
    return <Account/>
}
