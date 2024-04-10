import { lazy, Suspense } from "react";

import { Route } from "./Route.jsx";
import { Router } from "./Router.jsx";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));
const SearchPage = lazy(() => import("./pages/Search.jsx"));
const Page404 = lazy(() => import("./pages/404.jsx"));

const routes = [{ path: "/search/:query", Component: SearchPage }];

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={routes} defaultComponent={HomePage}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
