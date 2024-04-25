import Home from "@/components/screens/Home/Home";
import {ReactElement} from "react";

/**
 * Home page.
 * @returns {Promise<ReactElement>} The home page ReactElement.
 */
export default async function HomePage(): Promise<ReactElement> {
    return <Home />
}