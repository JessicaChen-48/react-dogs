
import logo from './logo.svg';
import './App.css';
import Nav from "./Nav"
import Routes from "./Routes"
import whiskey from "./whiskey.jpg"
import duke from "./duke.jpg"
import perry from "./perry.jpg"
import tubby from "./tubby.jpg"

import {BrowserRouter} from "react-router-dom"

function App({dogs}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={dogs.map(dog => dog.name)}/>
        <Routes dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}