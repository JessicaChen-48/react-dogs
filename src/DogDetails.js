import { useParams } from "react-router-dom";
import {Redirect } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  let dog = dogs.filter((dog) => dog.name === name)[0];

  if(!dog) {
    <Redirect to="/dogs" />
  }

  return (
    <div>
      <div>      
          <img src={dog.src} alt={dog.name} />
      </div>
      <div> Name: {dog.name}</div>
      <div> Age: {dog.age}</div>
      <div>
        Facts:
        <ul>
          {dog.facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DogDetails;
