import {Link} from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import "./NavBarStyle.css"

export function NavBar() {
  <nav id="NavBar">
    <h2>
      <Link to="/">
        <BiCameraMovie />
        Movie Karol
      </Link>
    </h2>
    <form type="text" placeholder="Busque um filme" />
    <button type="submit">
      <BiSearchAlt2 />
    </button>
  </nav>;
}