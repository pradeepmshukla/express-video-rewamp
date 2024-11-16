import VideoSection from "../../components/services/services";
import Banner from "../../components/services/banner";
import VideoServices from "../../components/services/VideoService"
import "../../scss/home.scss";
import "../../scss/service.scss";
import Benefits from "@/app/components/services/benefits";
import { db } from "@/app/utils/db";

const banners =db.service.eLearningVideos.banners;
const videosSection = db.service.eLearningVideos.videosSection;
const videoService=db.service.eLearningVideos.videoService;
const benefits=db.service.eLearningVideos.benefits;

const Page = () => {
    return (
        <>
            <Banner data={banners} />
            <VideoSection contents={videosSection} />
            <VideoServices contents={videoService} />
            <Benefits contents={benefits} />
        </>
    )

}

export default Page;