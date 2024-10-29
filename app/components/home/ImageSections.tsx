import Image from "next/image";

const ImageSections = () => {
  return (
    <div className="wrapper image-sections">
      <div className="container">
        <div className="section">
          <div className="image-wrapper border-radius-15">
            <Image
              src="/home/section/broad-audience.png"
              alt="broad audience reach"
              width="655"
              height="300"
            />
          </div>
          <div className="image-wrapper border-radius-15">
            <Image
              src="/home/section/brand-boost01.jpg"
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
                src="/home/section/brand-boost01.jpg"
                alt="increase engagement"
                width="556"
                height="300"
              />
            </div>
            <div className="sub-section2">
              <div className="image-wrapper border-radius-15">
                <Image
                  src="/home/section/131850a4-e84a-4149-a484-53dcf5f97271.jpg"
                  alt="magnet"
                  width="266"
                  height="300"
                />
              </div>
              <div className="image-wrapper border-radius-15">
                <Image
                  src="/home/section/66858e54-5708-4a96-b08b-64b9ff65c7a4.png"
                  alt="share"
                  width="268"
                  height="300"
                />
              </div>
            </div>
          </div>
          <div className="image-wrapper border-radius-15">
            <Image
              src="/home/section/higher-conversion.jpg"
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
