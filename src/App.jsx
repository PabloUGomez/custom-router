import { useEffect, useState } from "react";

const NAVIGATION_EVENT = "pushstate";
function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <button onClick={()=>navigate('/about')}> Ir a sobre nosotros</button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img
          style={{ borderRadius: "100%" }}
          src="https://media.licdn.com/dms/image/D4D03AQHv-ROZTzpOkw/profile-displayphoto-shrink_200_200/0/1700790225530?e=1717632000&v=beta&t=cKaItCEf3shiZCoKlSdRPMqHnKMEDBqkg_ODFAw67WY"
          alt="Foto de Pablo Gomez"
        />
        <p>
          ¡Hola! Me llamo Pablo Gomez y estoy creando un clon de React Router.
        </p>
      </div>
      <button onClick={()=>navigate('/')}> Ir a la Home</button>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
