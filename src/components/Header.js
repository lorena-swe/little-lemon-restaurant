import { HashLink } from "react-router-hash-link";
import '../App.css';

function Header() {
  return (
    <div>
      <h1 className="orange-text">Header Component</h1>
      <ul>
        <li> <HashLink to="/">Create</HashLink> </li>
        <li> <HashLink to="/read">Read</HashLink> </li>
        <li> <HashLink to="/update">Update</HashLink> </li>
      </ul>
    </div>
  );
}

export default Header;