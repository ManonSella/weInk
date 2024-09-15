import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="flex flex-col max-w-full px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
      <a href="https://github.com/ManonSella">
        <p className="text-black py-4">2024 Manon Sella</p>
      </a>
      <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
        <a href="https://www.facebook.com">
          <FaFacebook fill="black" />
        </a>{" "}
        <a href="https://www.instagram.com">
          <FaInstagram fill="white" />
        </a>
        <a href="https://www.line.com">
          <FaLine fill="white" />
        </a>
        <a href="https://www.wechat.com">
          <IoLogoWechat fill="white" />
        </a>
      </div>
    </div>
  );
}
