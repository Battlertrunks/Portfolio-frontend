import AboutMe from "./AboutMe";
import "./HomeRoute.css";

const HomeRoute = () => {
  return (
    <section className="HomeRoute">
      <div>
        <h4>My Name is</h4>
        <h2>Gavin Szczesniak</h2>
        <h3>MERN Stack Developer</h3>
        <p>Hello.</p>
      </div>
      <div>
        <AboutMe />
        <div>
          <h3>Skills and Tools.</h3>
          <ul>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/mongoDb-icon.png?alt=media&token=e9afcd03-453f-4d96-a656-6ef439d54c40"
                alt="MongoDB icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/Expressjs.png?alt=media&token=2a0344cd-9c5a-49b7-8081-1159135c4f4c"
                alt="express js icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/ReactIcon.png?alt=media&token=b3bb999c-e9ec-4aa5-84a0-54dfff589bc6"
                alt="React js icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/NodeIcon.png?alt=media&token=2d6b3918-19ee-497e-97cc-8395b1a5e967"
                alt="Node js icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/JavaScriptIcon.png?alt=media&token=cbcf21fd-b2a0-4d6f-af92-3ea5252ef8c9"
                alt="JavaScript icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/typescript-icon.png?alt=media&token=193636ce-7b4a-4c5f-bbc0-6e911f478753"
                alt="TypeScript icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/HTMLIcon.png?alt=media&token=1fbc6f09-5d32-4d97-ab6d-6db22435bc65"
                alt="HTML icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/CSSIcon.png?alt=media&token=ad43197f-9115-4bb5-8824-e56440f794f7"
                alt="CSS icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/gitIcon.png?alt=media&token=24583ff7-f7ea-49a1-a662-aa06e73775ba"
                alt="git icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/cSharp-icon.png?alt=media&token=b570ecef-81fc-4f15-b9a0-9cc688ffadc4"
                alt="C Sharp icon."
              />
            </li>
            <li>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/adobe-icon.png?alt=media&token=0d93f3fc-d108-42ba-ae0a-55c6db58435c"
                alt="Adobe Suit icon."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeRoute;
