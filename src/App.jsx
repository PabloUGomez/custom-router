import { useState } from "react";


function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
      <a href="/about"> Ir a sobre nosotros</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img style={{borderRadius: "100%"}} src="https://media.licdn.com/dms/image/D4D03AQHv-ROZTzpOkw/profile-displayphoto-shrink_200_200/0/1700790225530?e=1717632000&v=beta&t=cKaItCEf3shiZCoKlSdRPMqHnKMEDBqkg_ODFAw67WY" alt="Foto de Pablo Gomez" />
        <p>¡Hola! Me llamo Pablo Gomez y estoy creando un clon de React Router.</p>
      </div>
      <a href="/"> Ir a la Home</a>
    </>
  );
}

function App() {

  const [currentPath,setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
