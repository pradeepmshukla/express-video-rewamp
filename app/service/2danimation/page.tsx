import TwoDSection from "../../components/services/2danimation/2dService";
import Banner from "../../components/services/2danimation/banner";
import VideoServices from "../../components/services/2danimation/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";

const Animation2d = () =>{
    return(
        <>
        <Banner />
        <TwoDSection />
        <div className="wrapper video-boost">
           <div className="container">
           <h2 className="title">
                USE CASE OF <span className="highlight">2D ANIMATION</span> FOR BUSINESSES?
                </h2>
                <div className="description">
                2D ANIMATION STORIES | 2D RHYMES FOR KIDS | 2D VIDEOS FOR YOUTUBE CHANNELS | BUSINESS VIDEOS

                </div>
            </div>
        </div>
        <VideoServices />
        </>
    )
   
}

export default Animation2d;