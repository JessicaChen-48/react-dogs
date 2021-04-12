import {NavLink} from "react-router-dom"

function Nav({names}) {
  return (
    <nav>
    {names.map(name =>
      <p><NavLink exact to={`/dogs/${name}`}>{name}</NavLink></p>
      )}
    </nav>
  )

}

export default Nav;