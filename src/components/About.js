import bgColor from "../assets/img/color-sharp2.png"

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
            <div className="about-bx">
            <h2>About Me</h2>
            <p className="para">
            I'm passionate about front-end development because I love the challenge of creating beautiful and user-friendly web applications. Also excited about the ever-changing landscape of front-end development and the opportunity to learn new technologies and techniques. Excited to find a position where I can use my skills and experience to make a positive impact on the world.</p>
            </div>
        </div>
      </div>
      <img className="background-image-right" src={bgColor} alt="Image" />
    </section>
  );
}