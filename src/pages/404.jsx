import { Link } from "../Link";

export default function Page404 () {
  return (
    <>
      <div>
        <h1>404 Page</h1>
        <p>Esta es una pagina de error 404</p>
        <Link to="/">Ir a la Home</Link>
      </div>
    </>
  );
}