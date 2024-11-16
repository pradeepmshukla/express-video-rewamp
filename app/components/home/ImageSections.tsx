import Image from "next/image";

const ImageSections = () => {
  return (
    <div className="wrapper image-sections">
      <div className="container">
        <div className="section">
          <div className="image-wrapper border-radius-15">
            <Image
              src="/assets/home/boost/01.png"
              alt="broad audience reach"
              width="655"
              height="300"
              className=" "
            />
          </div>
          <div className="image-wrapper border-radius-15">
            <Image
              src="/assets/home/boost/02.png"
              alt="social share"
              width="465"
              height="300"
            />
          </div>
        </div>
        <div className="section">
          <div className="sub-section">
            <div className="image-wrapper border-radius-15">
              <Image
                src="/assets/home/boost/03.png"
                alt="increase engagement"
                width="556"
                height="300"
              />
            </div>
            <div className="sub-section2">
              <div className="image-wrapper border-radius-15">
                <Image
                   src="/assets/home/boost/04.png"
                  alt="magnet"
                  width="266"
                  height="300"
                />
              </div>
              <div className="image-wrapper border-radius-15">
                <Image
                  src="/assets/home/boost/05.png"
                  alt="share"
                  width="268"
                  height="300"
                />
              </div>
            </div>
          </div>
          <div className="image-wrapper border-radius-15">
            <Image
              src="/assets/home/boost/06.png"
              alt="boost brand awareness"
              width="552"
              height="620"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSections;
