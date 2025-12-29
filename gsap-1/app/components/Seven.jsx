"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Seven() {
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      cardRef.current.children,
      {
        y: 40,
        opacity: 0,
        scale: 1.1,
      },
      {
        y: 0,
        scale: 1,
        duration: 0.8,
        opacity: 1,
        stagger: 0.15,
        ease: "power3.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);
  return (
    <>
      <div className="flex pt-5 pl-5">
        <div ref={cardRef} className="flex gap-x-5">
          <div className="h-96 w-56 rounded-md bg-red-500"></div>
          <div className="h-96 w-56 rounded-md bg-red-500"></div>
          <div className="h-96 w-56 rounded-md bg-red-500"></div>
          <div className="h-96 w-56 rounded-md bg-red-500"></div>
          <div className="h-96 w-56 rounded-md bg-red-500"></div>
        </div>
      </div>
    </>
  );
}
