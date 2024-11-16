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
              About Us
              Specializing in custom animated videos and explainer video production, we bring ideas to life with captivating visuals that enhance your brand message. Our clients rely on us for high-quality animation services tailored to their unique needs, whether for marketing, corporate communication, or product demonstrations. We are your trusted partner for affordable animation solutions that drive results.
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
