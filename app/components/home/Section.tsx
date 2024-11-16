"use client";
import ToggleText from "@/app/utils/ToggleText";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/app/utils/db";

const Section = () => {
  const data = db.home;
  return (
    <div className="wrapper home-section">
      <div className="container">
        <h2>ANIMATION VIDEO SERVICES</h2>
        <h3>
          Bring your ideas to life with our professional animation services! Whether it’s 2D, 3D, or motion graphics, we deliver visually stunning and engaging content that resonates with your audience. Let us help you tell your story in a way that stands out!
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
              <div className="title"><Link href={x.url}>{x.title}</Link></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
