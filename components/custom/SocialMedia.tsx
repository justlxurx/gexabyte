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
} from "@public/icons/social-media";

const SocialMedia = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      sx={{ gap: { xs: "30px", md: "48px" } }}
    >
      <a href={socialURL.instagram}>
        <Image
          src={twitterIcon}
          width={"24px"}
          height={"24px"}
          alt={"instagramIcon"}
        />
      </a>
      <a href={socialURL.linkedIn}>
        <Image
          src={telegaIcon}
          width={"24px"}
          height={"24px"}
          alt={"linkedInIcon"}
        />
      </a>
      <a href={socialURL.linkedIn}>
        <Image
          src={youtubeIcon}
          width={"24px"}
          height={"24px"}
          alt={"linkedInIcon"}
        />
      </a>
      <a href={socialURL.linkedIn}>
        <Image
          src={facebookIcon}
          width={"24px"}
          height={"24px"}
          alt={"linkedInIcon"}
        />
      </a>
      <a href={socialURL.telegramForum}>
        <Image
          src={discordIcon}
          width={"24px"}
          height={"24px"}
          alt={"telegramIcon"}
        />
      </a>
    </Stack>
  );
};

export default SocialMedia;
