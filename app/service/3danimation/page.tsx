import TwoDSection from "../../components/services/3danimation/service";
import Banner from "../../components/services/3danimation/banner";
import VideoServices from "../../components/services/3danimation/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";

const Animation3d = () =>{
    return(
        <>
        <Banner />
        <TwoDSection />
        <div className="wrapper video-boost">
           <div className="container">
           <h2 className="title">
                USE CASE OF <span className="highlight">3D ANIMATION</span> FOR BUSINESSES?
                </h2>
                <div className="description">
                3D ANIMATION STORIES | 3D RHYMES FOR KIDS | 3D PRODUCT | 3D MEDICAL | 3D INDUSTRIAL | 3D EDUCATIONAL


                </div>
            </div>
        </div>
        <VideoServices />
        </>
    )
   
}

export default Animation3d;