import {CHARACTERS_ROUTE, FAVORITE_ROUTE, START_ROUTE} from "./Utils/consts";
import Start from "./Pages/Start";
import CharactersItems from "./Pages/CharactersItems";
import FavoriteCharacters from "./Pages/FavoriteCharacters";


export const routes = [
    {
        path : START_ROUTE,
        Component: Start
    },
    {
        path : CHARACTERS_ROUTE,
        Component: CharactersItems
    },
    {
        path : FAVORITE_ROUTE,
        Component: FavoriteCharacters
    },
]