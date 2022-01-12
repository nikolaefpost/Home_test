import {CHARACTERS_ROUTE, FAVORITE_ROUTE, SIGNIN_ROUTE, START_ROUTE} from "./Utils/consts";
import Start from "./Pages/Start";
import CharactersItems from "./Pages/CharactersItems";
import FavoriteCharacters from "./Pages/FavoriteCharacters";
import SignIn from "./Pages/SignIn";


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
    {
        path : SIGNIN_ROUTE,
        Component: SignIn
    },
]