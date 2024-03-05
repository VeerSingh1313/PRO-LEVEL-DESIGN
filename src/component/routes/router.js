import { createBrowserRouter } from "react-router-dom";
import Login from "../login";
import Singin from "../sinup";
import Home from "../home";
import Practie from "../practice";
import AddToCart from "../addToCart";
import DiceGame from "../dicegame";
import SnakeAndLadder from "../snakeAndLadder";
import FinalFrom from "../finalFrom";
import Htmlfile from "../htmlfile";

export const router = createBrowserRouter(
    [
        { path: '/', element: <Login /> },
        { path: '/singup', element: <Singin /> },
        { path: '/Home', element: <Home /> },
        { path: '/home2', element: <Practie /> },
        { path: '/addtocart', element: <AddToCart /> },
        { path: '/home/game', element: <DiceGame /> },
        { path: '/home/snakeAndLadder', element: <SnakeAndLadder /> },
        { path: "/home/sdfg", element: <FinalFrom /> },
        { path: "/home/html", element: <Htmlfile /> }
    ]
)