import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Project() {
  return (
    <div id="project">
      <h1 className="h1-title">Projects</h1>
      <div className="projects">
        <div className="project">
          <h1>Movie App</h1>
          <Image src="/../public/image/p1.png" width={400} height={200} />
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
          <Image src="/../public/image/p5.png" width={400} height={200} />
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
          <Image src="/../public/image/p6.png" width={400} height={200} />
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
          <Image src="/../public/image/p2.png" width={400} height={200} />
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
          <Image src="/../public/image/p3.png" width={400} height={200} />
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
          <Image src="/../public/image/p4.png" width={400} height={200} />
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
