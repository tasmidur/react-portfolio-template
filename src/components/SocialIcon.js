import React from "react";

export default function SocialIcon({socialInfo}) {
  return (
    <div>
      <p className="social-container">
        {socialInfo && socialInfo.social.map((item, index) =>
          <a key={index} href={item.url} title={item.label} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        )}
      </p>
    </div>
  );
}
