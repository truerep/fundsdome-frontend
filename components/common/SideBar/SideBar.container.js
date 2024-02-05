import React from 'react'
import SideBar from './SideBar'
import { useRouter } from 'next/router';
import { appEnv } from '@/helpers';

const SideBarContainer = () => {
  const router = useRouter();
  const ImageCdn = appEnv.IMAGES_CDN_URL;

  const navMenu = [
    {
      title: "Home",
      url: "/",
      icon: `${ImageCdn}/explore.png`,
    },
    {
      title: "Explore",
      url: "/explore",
      icon: `${ImageCdn}/explore.png`,
    },
    {
      title: "Events",
      url: "/events",
      icon: `${ImageCdn}/explore.png`,
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: `${ImageCdn}/explore.png`,
    },
    {
      title: "Messages",
      url: "http://app.fundsdome.com/video-chat",
      icon: `${ImageCdn}/explore.png`,
    },
    {
      title: "About",
      url: "/about",
      icon: `${ImageCdn}/explore.png`,
    }
  ]

  return (
    <SideBar 
      router={router}
      navMenu={navMenu}
    />
  )
}

export default SideBarContainer