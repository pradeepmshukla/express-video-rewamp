const Banner = () => {
    return (
        <>
            <div className="wrapper Animation-2d">
                <div className="container">
                    <div className="description-video">
                        <div className="description">
                            <div className="counters">
                                <div className="counter">
                                    <div className="text">2D Animation Services</div>
                                </div>

                            </div>
                            <div>Cost Effective | Visual Appealing | Engaging</div>

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
                        Boost your business with our 2D animation services! It’s cost-effective, easy to update, and visually appealing. 2D animation
                        helps explain your ideas clearly, engages your audience, and adds a unique, creative touch to your brand. Let’s make your
                        message stand out and attract more customers.!
                    </div>
                </div>
            </div>
        </>
    )

}

export default Banner;