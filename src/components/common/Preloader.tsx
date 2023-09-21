import Image from "next/image";
import React from "react";
import preloaderImg from "../../../public/assets/img/preloader.gif";
const Preloader = () => {
  return (
    <>
      <div id="preloader">
            <Image  src={preloaderImg} style={{ width: "auto", height: "auto" }} alt="preloader"/>
        </div>
    </>
  );
};

export default Preloader;
