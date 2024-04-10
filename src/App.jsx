import { lazy, Suspense } from "react";

import { Route } from "./Route.jsx";
import { Router } from "./Router.jsx";
import HomePage from ("./pages/Home.jsx");
import AboutPage from ("./pages/About.jsx");
import SearchPage from ("./pages/Search.jsx");
import Page404 from ("./pages/404.jsx")


const routes = [{ path: "/search/:query", Component: SearchPage }];

function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
