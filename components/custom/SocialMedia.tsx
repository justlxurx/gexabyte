import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { socialURL } from "./socialURL";
import {
  discordIcon,
  twitterIcon,
  telegaIcon,
  youtubeIcon,
  facebookIcon,
  linkedinIcon,
  instaIcon,
} from "@public/icons/social-media";

const SocialMedia = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      sx={{ gap: { xs: "20px", md: "30px" } }}
    >
      <a href={socialURL.instagram}>
        <Image
          src={instaIcon}
          width={"20px"}
          height={"20px"}
          alt={"instagramIcon"}
        />
      </a>
      <a href={socialURL.telegramForum}>
        <Image
          src={telegaIcon}
          width={"20px"}
          height={"20px"}
          alt={"telegramIcon"}
        />
      </a>
      <a href={socialURL.linkedIn}>
        <Image
          src={linkedinIcon}
          width={"20px"}
          height={"20px"}
          alt={"linkedInIcon"}
        />
      </a>
    </Stack>
  );
};

export default SocialMedia;
