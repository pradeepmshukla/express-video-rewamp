const VideoServices = (props) => {
  return (
    <>
      <div className="wrapper video-boost">
        <div className="container">
          <h2 className="title">
            {props.contents.servicecontent.content1} <span className="highlight">{props.contents.servicecontent.content2}</span> {props.contents.servicecontent.content3}
          </h2>
          <div className="description">
            {props.contents.content4}
          </div>
        </div>
      </div>

      <div className="services-container">
        {props.contents.serviceCard.map((d:any, index:any) => {
          return d.color === 'blue' ? (
            <div className="service-card" key={index}>
              <div className="service-content">
                <p className="service-description">
                  With our expertise in 3D rhymes animation for kids, we’ll help you create memorable content that not only entertains but also drives learning, allowing you to capitalize on the growing demand for engaging and educational children’s media.
                </p>
                <p className="service-description">
                  Connect your rhymes’ educational content by integrating catchy rhymes with stunning visuals, keeping your audience engaged on platforms like YouTube, educational apps, or social media.
                </p>
              </div>
              <div className="service-image">
                <img src={d.image} alt="3D Rhymes" />
              </div>
            </div>
          ) : (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={d.image} alt={d.heading} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{d.title}</h3>
                <p className="service-description">
                  {d.description}
                </p>
                <ul className="service-list">
                  {d.list && d.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoServices;
