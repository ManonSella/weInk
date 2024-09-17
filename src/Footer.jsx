import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// icons imported from: https://react-icons.github.io/react-icons/
// Footer component created with clickable links to social media networks
export default function Footer() {
  return (
    <footer className="bg-[#1e6262] text-white">
      <div className="max-w-[1024px] p-8 mx-auto flex flex-col lg:flex-row lg:justify-between text-center">
        <a className="mb-4 lg:mb-0" href="https://github.com/ManonSella">
          ©2024 Manon Sella
        </a>

        <ul className="flex justify-around text-2xl lg:gap-4">
          <li>
            <a href="https://www.tiktok.com">
              <FaTiktok />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
