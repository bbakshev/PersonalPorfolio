export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs ={12} md={6}>
            <div className="banner-content">
              <h1>I'm <span>John Doe</span></h1>
              <p>I'm a UI/UX Designer &amp; Front-End Developer from Victoria, Australia. I aim to make a difference through my creative solution.</p>
              <HashLink to='#connect'>
                <button className="vvd"><span>Hire Me</span></button>
              </HashLink>
            </div>
          </Col>
          <Col md={6}>
            <div className="banner-img">
              <img src={bannerImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}