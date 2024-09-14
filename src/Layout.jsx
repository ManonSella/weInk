import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
      <div className="footer">Footer</div>
    </>
  );
}
