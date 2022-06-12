import AboutAos from "aos";
import "./AboutMe.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    AboutAos.init({ duration: 2000 });
  }, []);

  return (
    <div className="AboutMe">
      <div>
        <div data-aos="fade-down" className="circle"></div>
        <h2 className="word-background">Me.</h2>
        <h3 data-aos="fade-up">About Me.</h3>
        <div className="order-phone-description">
          <img
            data-aos="fade-up"
            className="phone-img"
            src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/About-Me-Iphone.png?alt=media&token=cf581b03-de12-4278-8a29-790478082168"
            alt="Mobile phone application design introducing Gavin Szczesniak."
          />
          <p data-aos="fade-up">
            My name is Gavin Szczesniak and I am a MERN Stack Developer. As a
            child I always had a fascination of coding. At first, I used code to
            create video games using Unity Game Engine. During my high school
            days I also found a passion for design. Not knowing at the time,
            this would lead me to have a love for web developement. Piecing code
            and design together was the passion I was looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
