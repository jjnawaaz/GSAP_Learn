"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function One() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  useEffect(() => {
    // gsap.to(box1Ref.current, {
    //   x: 300,
    //   duration: 1,
    // });
    // gsap.from(box1Ref.current, {
    //   opacity: 0,
    //   y: 100,
    //   duration: 1,
    // });
    gsap.fromTo(
      box1Ref.current,
      {
        opacity: 0,
        duration: 1,
      },
      {
        opacity: 1,
        x: 300,
        duration: 1,
      }
    );
    gsap.to(box2Ref.current, {
      x: 700,
      duration: 2,
    });
    gsap.to(box3Ref.current, {
      x: 300,
      duration: 2,
    });
  }, []);
  return (
    <div className="">
      <div ref={box1Ref} className="w-24 h-24 bg-red-500" />
      <div ref={box2Ref} className="w-24 h-24 bg-green-500" />
      <div ref={box3Ref} className="w-24 h-24 bg-violet-500" />
    </div>
  );
}
