import thumb1 from "../../public/assets/img/slider/slider_bg01.jpg";
import thumb2 from "../../public/assets/img/slider/slider_bg02.jpg";
import thumb3 from "../../public/assets/img/slider/slider_bg03.jpg";
import check from "../../public/assets/img/icons/w_check.png";
import { HomeTwoSliderType } from "@/interFace/interFace";

export const homeTwoSliders:HomeTwoSliderType[] = [
  {
    id: 1,
    img: thumb1,
    title: "Enjoy High Speed Broadband",
    servicesList: [{ diley: ".4s", img:check, serviceTitle:"High Speed Bandwidth Connections" }, { diley: ".6s", img:check, serviceTitle:"Any Device Connectivity" }, { diley: ".8s", img:check, serviceTitle:"Netbox TV Box & Satellite Live TV" }],
  },
  {
    id: 2,
    img: thumb2,
    title: "Enjoy High Speed Broadband",
    servicesList: [{ diley: ".4s", img:check, serviceTitle:"High Speed Bandwidth Connections" }, { diley: ".6s", img:check, serviceTitle:"Any Device Connectivity" }, { diley: ".8s", img:check, serviceTitle:"Netbox TV Box & Satellite Live TV" }],
  },
  {
    id: 3,
    img: thumb3,
    title: "Enjoy High Speed Broadband",
    servicesList: [{ diley: ".4s", img:check, serviceTitle:"High Speed Bandwidth Connections" }, { diley: ".6s", img:check, serviceTitle:"Any Device Connectivity" }, { diley: ".8s", img:check, serviceTitle:"Netbox TV Box & Satellite Live TV" }],
  },
];
