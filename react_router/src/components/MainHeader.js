import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <haeder>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </haeder>
  );
};
export default MainHeader;
