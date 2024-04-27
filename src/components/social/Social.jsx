import React from "react";

const SocialShare = [
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/profile.php?id=100063698132030&sk=about",
    iconClass: "facebook",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/dog_physio_stella_kechagia/",
    iconClass: "instagram",
  },
,
];
const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
