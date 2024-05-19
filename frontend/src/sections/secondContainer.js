import icon from "../assets/images/Pic.png";

export const SecondContainer = ({ theme }) => {
  return (
    <div className={theme}>
      <span className="AboutMe">About Me</span>
      <div className="secondImageContainer">
        <img src={icon} alt="" />
      </div>
      <div className="secondTextContainer">
        <h3 className="secondHeading" id="About">
          Curious about me? Here you have it:
        </h3>
        <p>
          I'm a passionate developer who specializes in full stack development
          (React.js & Node.js). I am glad to work with technical and visual
          aspects of digital products to life. User experience, pixel perfect
          design, and writing clear, readable, highly performant code matters to
          me.
        </p>
        <p>
          I began my journey as a web developer in 2018, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, I'm sixteen,
          4 years after starting my web development journey, I'm building
          cutting-edge web applications using modern technologies such as
          Django, Express, Sass, React, MongoDB and much more.
        </p>
        <p>
          I trying to solve problems as progressive thinker and enjoy working on
          products end to end, from ideation all the way to development.
        </p>
        <p>
          You can follow me on GitHub, where I'm coding for a while during my
          free time.
        </p>
        <p>Finally, some quick bits about me.</p>
        <ul>
          <li>Student with ambitions</li>
          <li>Part Time freelancer</li>
          <li>Quick learner</li>
          <li>Aspiring to become an Indie Hacker</li>
        </ul>
        <p>
          One last thing, I'm available for freelance work or part-time job, so
          feel free to reach out and say hello! I promise I don't bite 😉
        </p>
      </div>
    </div>
  );
};
