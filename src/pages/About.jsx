import {Link} from '../Link.jsx';

export default function AboutPage() {
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
        <Link to='/'> Ir a la Home</Link>
      </>
    );
  }