import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';
import './App.css'


export function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Científicos</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export function Quimico() {

  const quimicos = people.filter(person =>person.profession === 'químico')
  const listItems = quimicos.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Quimicos</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export function LosDemas() {

  const losDemas = people.filter(person =>person.profession !== 'químico')
  const listItems = losDemas.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Los demas</h1>
      <ul>{listItems}</ul>
    </article>
  );
}




function App() {

  return (
    <>
      <Quimico/>
      <LosDemas/>
    </>
  )
}

export default App
