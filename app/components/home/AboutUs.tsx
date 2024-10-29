const AboutUs = () => {
  return (
    <div className="wrapper about-us">
      <div className="container">
        <h2 className="title">about us</h2>
        <div className="description-video">
          <div className="description">
            <div className="counters">
              <div className="counter">
                <div className="count">18+</div>
                <div className="text">years experience</div>
              </div>
              <div className="counter">
                <div className="count">250+</div>
                <div className="text">clients</div>
              </div>
            </div>
            <div className="data">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </div>
            <button className="schedule-btn">Schedule a call now</button>
          </div>
          <div className="video embed-responsive embed-responsive-21by9">
            <iframe className="embed-responsive-item"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Yp1yHJTSXDA?si=y_sUj3RuFcA-jbYY&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
