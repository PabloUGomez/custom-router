import { Link } from "../Link";

export default function SearchPage ({routeParams}) {
    return (
      <>
        <h1>Search Page</h1>
        <p>Esta es una pagina de busqueda</p>
        <p>Buscaste: {routeParams.query}</p>
        <Link to="/">Ir a la Home</Link>
      </>
    );
  }

