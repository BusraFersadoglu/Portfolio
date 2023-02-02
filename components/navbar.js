import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Navbar() {
  return (
    <navbar>
      <ul>
        <li>
          <a href="#about-page">About</a>
        </li>
        <li>
          <a>Work</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://twitter.com/BusraFersadoglu">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/BusraFersadoglu">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/busra-nur-fersadoglu/">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </navbar>
  );
}
