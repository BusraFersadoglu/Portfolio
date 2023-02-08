import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export default function Navbar() {
  return (
    <navbar className="navbar">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://twitter.com/BusraFersadoglu" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/BusraFersadoglu" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/busra-nur-fersadoglu/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:busra.fersadoglu@gmail.com" target="_blank">
            <GoMail />
          </a>
        </li>
      </ul>
    </navbar>
  );
}
