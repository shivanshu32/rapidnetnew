import useScrollDirection from "@/hooks/sticky-header";
import React, { useRef, useEffect } from "react";
const BacktoTop = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection(elementRef.current);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {/* <div
        ref={elementRef}
        className={`progress-wrap ${scrollDirection === "down" ? "active-progress" : ""
          }`}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div> */}
      <div ref={elementRef}>
        <button className={`scroll-top scroll-to-target ${scrollDirection === "down" ? "open" : ""
          }`}>
          <i className="fas fa-angle-up"></i>
        </button>
      </div>
    </>
  );
};

export default BacktoTop;


