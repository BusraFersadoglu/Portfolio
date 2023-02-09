import { AiOutlineArrowRight } from "react-icons/ai";
import p1 from "../public/image/p1.png";
import p2 from "../public/image/p2.png";
import p3 from "../public/image/p3.png";
import p4 from "../public/image/p4.png";
import p5 from "../public/image/p5.png";
import p6 from "../public/image/p6.png";

export default function Project() {
  return (
    <div id="project">
      <h1 className="h1-title">Projects</h1>
      <div className="projects">
        <div className="project">
          <h1>Movie App</h1>
          <img src={p1.src} />
          <div className="repo">
            <a
              href="https://github.com/BusraFersadoglu/First-Next.js-Project"
              target="_blank"
            >
              Go to repo <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project">
          <h1>Star Wars StarShips</h1>
          <img src={p5.src} />
          <div className="repo">
            <a
              href="https://github.com/BusraFersadoglu/StarWars-App"
              target="_blank"
            >
              Go to repo <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project">
          <h1>JS30 Challange</h1>
          <img src={p6.src} />
          <div className="repo">
            <a
              href="https://github.com/BusraFersadoglu/JS30-Series"
              target="_blank"
            >
              Go to repo <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project">
          <h1>Password Generator</h1>
          <img src={p2.src} />
          <div className="repo">
            <a
              href="https://github.com/BusraFersadoglu/Password-Generator"
              target="_blank"
            >
              Go to repo <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project">
          <h1>Random Choice Picker</h1>
          <img src={p3.src} />
          <div className="repo">
            <a
              href="https://github.com/BusraFersadoglu/Random-Choice-Picker"
              target="_blank"
            >
              Go to repo <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <div className="project">
          <h1>XOX Game</h1>
          <img src={p4.src} />
          <div className="repo">
            <a
              href="https://github.com/BusraFersadoglu/XOX-Game"
              target="_blank"
            >
              Go to repo <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
