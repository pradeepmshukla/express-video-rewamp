const VideoServices = (props) => {
  return (
    <>
      <div className="wrapper video-boost">
        <div className="container">
          <h2 className="title">
            {props.contents.topbanner.content1} <span className="highlight">{props.contents.topbanner.content2}</span> {props.contents.topbanner.content3}
          </h2>
          <div className="description">
            {props.contents.topbanner.content4}
          </div>
        </div>
      </div>

      <div className="services-container">
        {props.contents.serviceCard.map((d: any, index: any) => {
          return d.color === 'blue' ? (
            <div className="service-card" key={index}>
              <div className="service-content">
              <h3 className={"service-title blue"}  style={{ backgroundColor: d.headingBackgroundColor }}>{d.heading}</h3>
                {d.serviceDescription && d.serviceDescription.map((item: any, i:any) => (
                  <p key={i} className="service-description">{item}</p>
                ))}
                 <ul className="service-list">
                  {d.list && d.list.map((item:any, i:any) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-image">
                <img src={d.image} alt={d.heading} />
              </div>
            </div>
          ) : (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={d.image} alt={d.heading} />
              </div>
              <div className="service-content">
              <h3 className={"service-title"}  style={{ backgroundColor: d.headingBackgroundColor }}>{d.heading}</h3>
                {d.serviceDescription && d.serviceDescription.map((item: any, i) => (
                  <p key={i} className="service-description">{item}</p>
                ))}
                <ul className="service-list">
                  {d.list && d.list.map((item:any, i:any) => (
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
