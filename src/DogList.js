import { Link } from "react-router-dom";
function DogList({dogs}) {

  return (
    <div>
      {dogs.map(dog =>
      <div>
        <Link to={`/dogs/${dog.name}`}><img src={dog.src} alt={dog.name}/></Link>
        <p>{dog.name}</p>
      </div>)}
    </div>
  )
}

export default DogList;