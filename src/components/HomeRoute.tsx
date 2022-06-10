import {
  Animator,
  batch,
  FadeOut,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
} from "react-scroll-motion";
import AboutMe from "./AboutMe";
import Aos from "aos";
import "aos/dist/aos.css";
import "./HomeRoute.css";
import { useEffect } from "react";

const HomeRoute = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="HomeRoute">
      <ScrollContainer>
        <div className="opening-and-animation-container">
          <ScrollPage>
            <div className="opening-container">
              <div data-aos="fade-right" className="circle-1"></div>
              <div data-aos="fade-up" className="circle-2"></div>
              <Animator
                animation={batch(Sticky(), FadeOut(1, -1), MoveOut(0, -1000))}
              >
                <p className="background-word">Hello.</p>
              </Animator>
              <Animator animation={batch(MoveOut(-1000, 0), FadeOut(1, -2))}>
                <h4>My Name is</h4>
              </Animator>
              <Animator animation={batch(MoveOut(-400, 0), FadeOut(1, -2))}>
                <h2>Gavin Szczesniak</h2>
              </Animator>
              <Animator animation={batch(MoveOut(0, -15), FadeOut(1, -0.15))}>
                <h3>MERN Stack Developer</h3>
              </Animator>
            </div>
          </ScrollPage>
        </div>
      </ScrollContainer>
      <div>
        <AboutMe />
        <div className="skills-container">
          <div className="circle-3"></div>
          <h3 data-aos="fade-up" className="skills-heading">
            Tools and Languages I Work With.
          </h3>
          <ul className="software-icons">
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/mongoDb-icon.png?alt=media&token=e9afcd03-453f-4d96-a656-6ef439d54c40"
                alt="MongoDB icon."
              />
            </li>

            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/Expressjs.png?alt=media&token=2a0344cd-9c5a-49b7-8081-1159135c4f4c"
                alt="express js icon."
              />
            </li>

            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/ReactIcon.png?alt=media&token=b3bb999c-e9ec-4aa5-84a0-54dfff589bc6"
                alt="React js icon."
              />
            </li>

            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/NodeIcon.png?alt=media&token=2d6b3918-19ee-497e-97cc-8395b1a5e967"
                alt="Node js icon."
              />
            </li>

            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/JavaScriptIcon.png?alt=media&token=cbcf21fd-b2a0-4d6f-af92-3ea5252ef8c9"
                alt="JavaScript icon."
              />
            </li>

            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/typescript-icon.png?alt=media&token=193636ce-7b4a-4c5f-bbc0-6e911f478753"
                alt="TypeScript icon."
              />
            </li>

            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/HTMLIcon.png?alt=media&token=1fbc6f09-5d32-4d97-ab6d-6db22435bc65"
                alt="HTML icon."
              />
            </li>

            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/CSSIcon.png?alt=media&token=ad43197f-9115-4bb5-8824-e56440f794f7"
                alt="CSS icon."
              />
            </li>
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/bootstrap-icon.png?alt=media&token=39f62156-79f3-48d8-b651-f0a24b12086d"
                alt="Bootstrap icon."
              />
            </li>
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/gitIcon.png?alt=media&token=24583ff7-f7ea-49a1-a662-aa06e73775ba"
                alt="git icon."
              />
            </li>
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/Photoshop-icon.png?alt=media&token=1b7f7732-5101-4def-8a11-fbb2d7a1ee65"
                alt="Photoshop icon."
              />
            </li>
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/adobe-icon.png?alt=media&token=0d93f3fc-d108-42ba-ae0a-55c6db58435c"
                alt="Adobe Suit icon."
              />
            </li>
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/Figma_icon.png?alt=media&token=593b0a85-da74-48b4-9639-c5cd8b304de0"
                alt="Figma icon."
              />
            </li>
          </ul>
          <h3 data-aos="fade-up" className="skills-learning-heading">
            Tools I am currently learning.
          </h3>
          <ul className="software-icons learning-icons">
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/cSharp-icon.png?alt=media&token=b570ecef-81fc-4f15-b9a0-9cc688ffadc4"
                alt="C Sharp icon."
              />
            </li>
            <li data-aos="fade-up">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/aspnet-icon.png?alt=media&token=7471f13f-fd2b-4c30-86cc-ae7764083235"
                alt="asp .net icon."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeRoute;
