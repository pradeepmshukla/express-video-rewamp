import AboutUs from "./components/home/AboutUs";
import ImageSections from "./components/home/ImageSections";
import Section from "./components/home/Section";
import Testimonials from "./components/home/Testimonials";
import VideoBoost from "./components/home/VideoBoost";
import "./scss/home.scss";
export default function Home() {
  return (
    <>
      {/* <HomeSlideShow /> */}
      <div className="home-top-image">
        <img src="/assets/home/4x/bulb.png"/>
        <div className="home-top-right-section">
          <p className="heading1">Animation Videos</p>
          <p className="heading2">that do it all</p>
          <p>Introduce Yourself Business, Higlight Your Product, and Power Sales</p>
          <button>CONTACT US</button>
        </div>
      </div>
      <Section />
      <VideoBoost />
      <ImageSections />
      <AboutUs />
      <Testimonials />
    </>
  );
}
