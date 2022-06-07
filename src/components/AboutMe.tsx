import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <h3>About Me.</h3>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/About-Me-Iphone.png?alt=media&token=cf581b03-de12-4278-8a29-790478082168"
        alt="Mobile phone application design introducing Gavin Szczesniak."
      />
      <p>
        My name is Gavin Szczesniak and I am a MERN Stack Developer. As a child
        I always had a fascination of coding. At first, I used code to create
        video games using Unity Game Engine. During my high school days I also
        found a passion for design. Not knowing at the time, this would lead me
        to have a love for web developement. Piecing code and design together
        was the passion I was looking for.
      </p>
    </div>
  );
};

export default AboutMe;
