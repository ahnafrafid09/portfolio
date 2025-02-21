import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ahnafrafid09" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/ahnaf-rafid-nandan" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ahnafrafidd/" },
  { icon: <FaWhatsapp />, path: "https://wa.me/6289656183536" },
];

interface socialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: socialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
