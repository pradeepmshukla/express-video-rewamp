"use client"
import Image from "next/image";

import img_client1 from '@/public/assets/home/clients/Complan.png'
import img_client2 from '@/public/assets/home/clients/cadbury.png'
import img_client3 from '@/public/assets/home/clients/Yamaha-Motor-logo.png'
import img_client4 from '@/public/assets/home/clients/Thomson Reuters Eikon.png'
import img_client5 from '@/public/assets/home/clients/nestle_logo_3.png'
import img_client6 from '@/public/assets/home/clients/hershey.png'
import img_client7 from '@/public/assets/home/clients/tata capital.png'
import img_client8 from '@/public/assets/home/clients/HDFC.png'
import img_client9 from '@/public/assets/home/clients/mahindra.png'
import img_client10 from '@/public/assets/home/clients/Byju-s.png'
import img_client11 from '@/public/assets/home/clients/airtel.png'
import img_client12 from '@/public/assets/home/clients/usp.png'
import img_client13 from '@/public/assets/home/clients/unfoldu.png'
import img_client14 from '@/public/assets/home/clients/harpic.png'
import img_client15 from '@/public/assets/home/clients/636b999a619a40bec2a4c5c3.png'
const clientList = [
  { image: img_client1, name: 'Complan' },
  { image: img_client2, name: 'Cadbury' },
  { image: img_client3, name: 'Yamaha Motor' },
  { image: img_client4, name: 'Thomson Reuters Eikon' },
  { image: img_client5, name: 'Nestle' },
  { image: img_client6, name: 'Hershey' },
  { image: img_client7, name: 'Tata Capital' },
  { image: img_client8, name: 'HDFC' },
  { image: img_client9, name: 'Mahindra' },
  { image: img_client10, name: 'Byju’s' },
  { image: img_client11, name: 'Airtel' },
  { image: img_client12, name: 'USP' },
  { image: img_client13, name: 'UnfoldU' },
  { image: img_client14, name: 'Harpic' },
  { image: img_client15, name: 'Client 15' }  // You can replace "Client 15" with the actual name if available
];
const Testimonials = () => {


  return (
    <div className="wrapper testimonials">
      <div className="container">
        <h2 className="title">Happy Clients</h2>
        <div className="description">
          Bring your ideas to life with our professional animation services! Whether it’s 2D, 3D, or motion graphics, we deliver visually stunning and engaging content that resonates with your audience. Let us help you tell your story in a way that stands out!
        </div>
        <div className="img-testimonials">
          {clientList.map((d, i) => (
            <div className="card">

              <Image
                src={d.image}
                alt="magnet"
                width="195"
                height="195"
                className="img-testimonials"
              />
            </div>
          ))
          }


        </div>
      </div>
    </div>
  );
};

export default Testimonials;
