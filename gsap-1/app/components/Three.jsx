"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Three() {
  const squareRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      squareRef.current,
      {
        y: 0,
        scale: 1,
        rotate: 0,
      },
      {
        y: -20,
        scale: 1.05,
        opacity: 1,
        rotate: 5,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      }
    );
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div ref={squareRef} className="h-40 w-40 bg-green-500"></div>
      </div>
    </>
  );
}
