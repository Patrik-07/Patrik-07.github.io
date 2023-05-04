import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <nav className="pt-10 pb-2 mb-12 flex justify-between items-center">
      <h1 className="text-xl">Patrik Santa</h1>
      <ul className="flex items-center">
        <li>
          <a>
            <FontAwesomeIcon
              icon={faMoon}
              className="cursor-pointer text-3xl mt-1"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
