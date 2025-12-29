"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Four() {
  const squareRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      squareRef.current,
      {},
      {
        delay: 0.5,
        rotateZ: 360,
        duration: 2,
        ease: "power3.inOut",
      }
    );
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div ref={squareRef} className="h-40 w-40 bg-red-500"></div>
      </div>
    </>
  );
}
