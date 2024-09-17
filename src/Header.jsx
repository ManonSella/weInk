import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { TfiGallery } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";

/* icons imported from https://react-icons.github.io/react-icons/ */
/* creation of the nav bar in Header with links to specific routes for each page */

export default function Header() {
  return (
    <header className="bg-[#1e6262] text-white">
      <nav className="max-w-[1024px] p-8 mx-auto flex">
        <ul className="flex gap-8 text-lg">
          <li>
            <Link className="align-middle" to="/">
              <IoHomeOutline className="inline-block" /> Home
            </Link>
          </li>
          <li>
            <Link className="align-middle" to="/gallery">
              <TfiGallery className="inline-block" /> Gallery
            </Link>
          </li>
          <li>
            <Link className="align-middle" to="/search">
              <IoSearchOutline className="inline-block" /> Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
