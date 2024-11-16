import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "./ContacUs";
import image_linkedin from '@/public/assets/footer/linkedin_2504923.png'
import image_instagram from '@/public/assets/footer/instagram_2504918.png'
import image_facebook from '@/public/assets/footer/facebook_2504903.png'
import image_youtube from '@/public/assets/footer/youtube_2504965.png'
import image_call from '@/public/assets/footer/Call.png'
import image_mail from '@/public/assets/footer/Mail.png'

const Footer = () => {
  return (
    <>
      <ContactUs />
      <footer>
        <div className="wrapper py-[60px] bg-[#191928] text-white">
          <div className="container mx-auto flex justify-between">
            <div className="section1 flex flex-col gap-2 justify-center items-center">
              <Image
                width="195"
                height="150"
                alt="logo"
                src="/loader.png"
              />
              <div className="text-lg font-semibold">Moody Fox Production</div>
              <div className="social-icons flex gap-1">
                <Link href="/" className="size-[24px]">
                  <Image
                    width="195"
                    height="150"
                    alt="logo"
                    src={image_linkedin}
                  />
                </Link>
                <Link href="/" className="size-[24px]">
                  <Image
                    width="195"
                    height="150"
                    alt="logo"
                    src={image_instagram}
                  />
                </Link>
                <Link href="/" className="size-[24px]">
                  <Image
                    width="195"
                    height="150"
                    alt="logo"
                    src={image_facebook}
                  />
                </Link>
                <Link href="/" className="size-[24px]">
                  <Image
                    width="195"
                    height="150"
                    alt="logo"
                    src={image_youtube}
                  />
                </Link>

              </div>
              
            </div>
            <div className="footer-link">
              <div>
              <h2 className="cursor-default text-[#ff971c] text-lg font-semibold mb-2">
                Our Company
              </h2>
              <div className="line"></div>
              </div>
              <ul className="gap-1 flex flex-col">
                <li>
                  <Link className="transition-colors  hover:text-[#ff971c]" href="/services">Services</Link>
                </li>
                <li>
                  <Link className="transition-colors  hover:text-[#ff971c]" href="/">Work Progress</Link>
                </li>
                <li>
                  <Link className="transition-colors  hover:text-[#ff971c]" href="/">Blog</Link>
                </li>
                <li>
                  <Link className="transition-colors  hover:text-[#ff971c]" href="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="footer-link">
            <div>
              <h2 className="cursor-default text-[#ff971c] text-lg font-semibold mb-2">
                Contact Us
              </h2>
              <div className="line" style={{width:'30%'}}></div>
              </div>
              <ul className="gap-1 flex flex-col">
                <li>
                <Image
                    width="20"
                    height="20"
                    alt="logo"
                    src={image_call}
                  /> 
                  <span>+91-7304071081</span>
                </li>
                <li>
                <Image
                    width="20"
                    height="20"
                    alt="logo"
                    src={image_mail}
                  />
                  <span>moodyfoxproductions@gmail.com</span>
                </li>

              </ul>
            </div>
          </div>
          <div className="text-right">
              Moody Fox Productions. All Rights Reserved..
              </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;
