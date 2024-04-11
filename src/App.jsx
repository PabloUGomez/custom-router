import {Suspense } from "react";

import { Route } from "./Route.jsx";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import SearchPage from "./pages/Search.jsx";
import Page404 from "./pages/404.jsx"


function App() {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/search/:query" Component={SearchPage} />
          <Route path="/*" Component={Page404}/>
      </Suspense>
    </main>
  );
}

export default App;
