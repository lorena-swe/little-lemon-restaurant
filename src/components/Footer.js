import { HashLink } from "react-router-hash-link";
import '../App.css';

function Footer() {
  return (
    <div>
      <h1 className="violet-text">Footer Component</h1>
      <ul>
        <li> <HashLink to="/">Create</HashLink> </li>
        <li> <HashLink to="/read">Read</HashLink> </li>
        <li> <HashLink to="/update">Update</HashLink> </li>
      </ul>
    </div>
  );
}

export default Footer;