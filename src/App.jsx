import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";

import { Router } from "./Router.jsx";

const routes = [
  { path: "/", Component: HomePage },
  { path: "/about", Component: AboutPage },
];

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={HomePage} />
    </main>
  );
}

export default App;
