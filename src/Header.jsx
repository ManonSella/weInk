import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <nav className="max-w-[1024px] p-8 mx-auto flex">
        <ul className="flex gap-8 text-lg">
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
    </header>
  );
}
