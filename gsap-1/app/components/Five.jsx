"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Five() {
  const squareRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      squareRef.current,
      {
        opacity: 0.6,
        scale: 0.8,
        x: 0,
      },
      {
        delay: 0.3,
        opacity: 1,
        scale: 1.05,
        duration: 0.8,
        ease: "power3.out",
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          ref={squareRef}
          className="h-40 w-40 rounded-full bg-red-500"
        ></div>
      </div>
    </>
  );
}
