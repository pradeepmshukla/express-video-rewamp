import AboutUs from "./components/home/AboutUs";
import HomeSlideShow from "./components/home/HomeSlideShow";
import ImageSections from "./components/home/ImageSections";
import Section from "./components/home/Section";
import Testimonials from "./components/home/Testimonials";
import VideoBoost from "./components/home/VideoBoost";
import "./scss/home.scss";
export default function Home() {
  return (
    <>
      <HomeSlideShow />
      <Section />
      <VideoBoost />
      <ImageSections />
      <AboutUs />      
      <Testimonials />

    </>
  );
}
