import Image from "next/image";
import Link from "next/link";
import React from "react";

type SidebarProps = {
  logo: {
    src: string;
    alt: string;
  };
  items?: {
    text: string;
    link?: string;
    icon: any;
    onCLick?: () => void;
  }[];
  bottom?: {
    items: {
      icon: any;
      text: string;
      link?: string;
      onClick?: () => void;
    }[];
  };
};

const Sidebar: React.FC<SidebarProps> = ({ logo, bottom, items }) => {
  return (
    <div className="flex flex-col justify-start gap-10 items-start">
      <div>
        <Image src={logo.src} alt={logo.alt} loading="eager" />
      </div>
      <div className="flex flex-col justify-between items-start h-full">
        <div className="flex flex-col gap-1">
          {items?.map(({ icon, text, link, onCLick }, i) => (
            <div
              key={i}
              onClick={onCLick && onCLick}
              className="flex flex-row justify-start items-center gap-3"
            >
              {link ? (
                <Link href={link}>
                  <i>{icon}</i>
                  <p>{text}</p>
                </Link>
              ) : (
                <>
                  <i>{icon}</i>
                  <p>{text}</p>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {bottom?.items?.map(({ icon, text, link, onClick }, i) => (
            <div
              key={i}
              onClick={onClick && onClick}
              className="flex flex-row justify-start items-center gap-3"
            >
              {link ? (
                <Link href={link}>
                  <i>{icon}</i>
                  <p>{text}</p>
                </Link>
              ) : (
                <>
                  <i>{icon}</i>
                  <p>{text}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
