"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Two() {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: -150,
        scale: 0.6,
        rotate: -8,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        scale: 1,
        rotate: 0,
        opacity: 1,
      }
    );
  }, []);
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div ref={cardRef} className=" h-96 w-80 bg-black"></div>
      </div>
    </>
  );
}
