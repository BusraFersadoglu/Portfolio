import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

export default function Technologies() {
  return (
    <div className="main-tec">
      <h3>Technologies</h3>
      <div className="technologies">
        <div className="logo">
          <IoLogoHtml5 fontSize={75} className="icon" />
          <h3 className="a-award-desc">HTML</h3>
        </div>
        <div className="logo">
          <IoLogoCss3 fontSize={75} className="icon" />
          <h3 className="a-award-desc">CSS</h3>
        </div>
        <div className="logo">
          <IoLogoSass fontSize={75} className="icon" />
          <h3 className="a-award-desc">Sass</h3>
        </div>
        <div className="logo">
          <IoLogoJavascript fontSize={75} className="icon" />
          <h3 className="a-award-desc">Javascript</h3>
        </div>
        <div className="logo">
          <SiReact fontSize={75} className="icon" />
          <h3 className="a-award-desc">ReactJS</h3>
        </div>
        <div className="logo">
          <SiNextdotjs fontSize={75} className="icon" />
          <h3 className="a-award-desc">NextJS</h3>
        </div>
        <div className="logo">
          <SiVuedotjs fontSize={75} className="icon" />
          <h3 className="a-award-desc">VueJS</h3>
        </div>
        <div className="logo">
          <SiNodedotjs fontSize={75} className="icon" />
          <h3 className="a-award-desc">NodeJS</h3>
        </div>
        <div className="logo">
          <SiMongodb fontSize={75} className="icon" />
          <h3 className="a-award-desc">MongoDB</h3>
        </div>
      </div>
    </div>
  );
}
