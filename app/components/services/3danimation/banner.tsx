const Banner = () => {
    return (
        <>
            <div className="wrapper Animation-2d">
                <div className="container">
                    <div className="description-video">
                        <div className="description">
                            <div className="counters">
                                <div className="counter">
                                    <div className="text">3D Animation Services</div>
                                </div>

                            </div>
                            <div>Immersive | High Impact | Realistic</div>

                            <button className="schedule-btn">Contact Us</button>
                        </div>
                        <div className="video embed-responsive embed-responsive-21by9">
                            <iframe className="embed-responsive-item"
                                width="560"
                                height="115"
                                src="https://www.youtube.com/embed/Yp1yHJTSXDA?si=y_sUj3RuFcA-jbYY&amp;controls=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="data">
                    Boost your business with our 3D animation services that enhance storytelling and engage audiences. Our expertly crafted animations provide stunning realism and dynamic visuals, making complex ideas easier to understand. With limitless creative possibilities, we bring your concepts to life in ways that captivate viewers and elevate your brand's presence in a competitive market.

                    </div>
                </div>
            </div>
        </>
    )

}

export default Banner;