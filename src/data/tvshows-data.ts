import {showsType } from "@/interFace/interFace";
import logo from "../../public/assets/img/images/stream_logo.png"
import thumb1 from "../../public/assets/img/images/streaming_img01.jpg"
import thumb2 from "../../public/assets/img/images/streaming_img02.jpg"
import thumb3 from "../../public/assets/img/images/streaming_img03.jpg"
import thumb4 from "../../public/assets/img/images/streaming_img04.jpg"
import thumb5 from "../../public/assets/img/images/streaming_img05.jpg"

const tvshows_data:showsType[] = [
  {
    id: 1,
    img: thumb1,
    tag: "Music Song",
    videoUrl: "D3FN2umFaM8",
    category: "Music",
    title: "Rockstar Fashion Show",
    rating: 5,
    ratingCount: 80,
    days: "Fri - Mon",
    time: "10:30",
    amPm: "PM",
    logo: logo,
  },
  {
    id: 2,
    img: thumb2,
    tag: "Live",
    videoUrl: "AKtTeEYG2uc",
    category: "Sports",
    title: "World Cup Football",
    rating: 5,
    ratingCount: 50,
    days: "Tue - Thu",
    time: "9:30",
    amPm: "AM",
    logo: logo,
  },
  {
    id: 3,
    img: thumb3,
    tag: "Tv Show",
    videoUrl: "hoKDrFyQDy0",
    category: "Fashion & Life Style",
    title: "Rockstar Fashion Show",
    rating: 5,
    ratingCount: 40,
    days: "Fri - Tue",
    time: "7:30",
    amPm: "PM",
    logo: logo,
  },
  {
    id: 4,
    img: thumb4,
    tag: "TV Serial",
    videoUrl: "HpJGsz6h2Mo",
    category: "Magic",
    title: "Magic Fashion Show",
    rating: 5,
    ratingCount: 75,
    days: "Mon - Wed",
    time: "8:30",
    amPm: "AM",
    logo: logo,
  },
  {
    id: 5,
    img: thumb5,
    tag: "Cartoon Show",
    videoUrl: "zTk7G73kbHo",
    category: "Cartoon",
    title: "Hottoka berry Cartoon",
    rating: 5,
    ratingCount: 35,
    days: "Sat - Mon",
    time: "11:30",
    amPm: "PM",
    logo: logo,
  },
];

export default tvshows_data;
