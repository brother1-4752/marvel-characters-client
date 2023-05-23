import ErrorBoundary from "./components/ErrorBoundary";
import { createHashRouter } from "react-router-dom";
import Home from "./routes/Home";
import Character from "./routes/Character";

interface IRouter {
  id: number;
  path: string;
  element: React.ReactNode;
  errorElement: React.ReactNode;
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    id: 2,
    path: "/marvels/:charId",
    element: <Character />,
    errorElement: <ErrorBoundary />,
  },
];

export const router = createHashRouter(
  routerData.map((routerInfo) => {
    return {
      path: routerInfo.path,
      element: routerInfo.element,
      errorElement: routerInfo.errorElement,
    };
  }),
  {
    basename: "/marvel-characters-client/",
  }
);
