const Banner = (props : any) => {
    return (
        <>
            <div className="wrapper Animation-2d">
                <div className="container">
                    <div className="description-video">
                        <div className="description">
                            <div className="counters">
                                <div className="counter">
                                    <div className="text">{props.data.title}</div>
                                </div>

                            </div>
                            <div>{props.data.titleDescription}</div>

                            <button className="schedule-btn">Contact Us</button>
                        </div>
                        <div className="video embed-responsive embed-responsive-21by9">
                            <iframe className="embed-responsive-item"
                                width="560"
                                height="115"
                                src={props.data.youtubeLinks}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="data">
                        {props.data.longDescriptions}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Banner;