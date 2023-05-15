import bgColor from "../assets/img/color-sharp2.png"

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
            <div className="about-bx">
            <h2>About Me</h2>
            <p className="para">
            As a dedicated full stack developer, my enthusiasm for learning and creating is limitless. Recently graduated from a coding bootcamp, I have gained practical experience in React, JavaScript, HTML, CSS, and C#. I possess a natural talent for creatively solving intricate problems and thrive in collaborative team settings. The joy of continuous growth and expanding my skill set drives my excitement to flourish as a developer. In my free time I love the outdoors, being active, playing video games, film photography, as well as connecting with friends and family. </p>
            </div>
        </div>
      </div>
      <img className="background-image-right" src={bgColor} alt="Image" />
    </section>
  );
}