import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
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
              <FontAwesomeIcon icon={faLink} fontSize={20} />
            </Link>
            <Link href="/" className="size-[24px]">
              <FontAwesomeIcon icon={faLink} fontSize={20} />
            </Link>
            <Link href="/" className="size-[24px]">
              <FontAwesomeIcon icon={faLink} fontSize={20} />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="cursor-default text-[#2ba9ac] text-lg font-semibold mb-2">
            Our Support
          </h2>
          <ul className="gap-1 flex flex-col">
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">Contact us</Link>
            </li>
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">Travel Guides</Link>
            </li>
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">Return & Refund</Link>
            </li>
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="cursor-default text-[#2ba9ac] text-lg font-semibold mb-2">
            Our Company
          </h2>
          <ul className="gap-1 flex flex-col">
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">About Us</Link>
            </li>
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">News & Blog</Link>
            </li>
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">Meet the Team</Link>
            </li>
            <li>
              <Link className="transition-colors  hover:text-[#ff971c]" href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
