import bgColor from "../assets/img/color-sharp2.png"

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
            <div className="about-bx">
            <h2>About Me</h2>
            <p className="para">
                I am a full stack developer with a passion for learning and
                creating. I am a recent graduate from a coding bootcamp. I
                have experience working with React, JavaScript, HTML, CSS,
                and C#. I am a creative problem solver and a
                collaborative team player. I am excited to continue to learn and
                grow as a developer.
              </p>
            </div>
        </div>
      </div>
      <img className="background-image-right" src={bgColor} alt="Image" />
    </section>
  );
}