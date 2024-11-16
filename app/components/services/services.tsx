"use client";
import ToggleText from "@/app/utils/ToggleText";
import Image from "next/image";

const VideoSection = (props) => {

  const data=props.contents.data;
  
  return (
    <div className="wrapper home-section">
      <div className="container">
        <h2>{props.contents.title}</h2>
        <h3>
          <ToggleText text={props.contents.descriptions} maxLength={152}
          />
        </h3>
        <div className="sections">
          {data.map((x, i) => (
            <div className="sec" key={i}>
              <Image
                className="border-radius-15"
                src={x.imageUrl}
                alt={x.title}
                width={355}
                height={225}
              />
            </div>
          ))}
        </div>
        {
          (props.contents.bottom!=null)?<div className="bootm">
          <button className="btn">
          {props.contents.bottom.content1}
          </button>
          <p>
          <span>{props.contents.bottom.content2} </span>.
          {props.contents.bottom.content3}
          </p>
      </div>:""
        }
        
      </div>
    </div>
  );
};

export default VideoSection;
