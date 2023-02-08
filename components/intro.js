import profilPhoto from "../public/image/Profil.png";
export default function Intro() {
  return (
    <div className="intro-page">
      <div className="introduction">
        Hi! <span className="hand-wave">&#128075;&#127995;</span>
        <p>I'm Büşra Ferşadoğlu</p>
        <p>An Enthusiastic Frontend Developer</p>
      </div>
      <img src={profilPhoto.src} className="profil-photo" />
    </div>
  );
}
