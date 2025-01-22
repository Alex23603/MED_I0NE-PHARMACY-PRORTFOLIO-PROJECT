import {gsap} from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  // Handles mouse movement over the image
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  // Resets the image's rotation
  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-green-500 text-blue-700">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        {/* Subheading */}
        <p className="font-general text-sm uppercase md:text-[10px]">
        Your partners in a healthier lifestyle, offering rich medical advice.
        </p>

        {/* Title & Floating Image */}
        <div className="relative size-full">
          <AnimatedTitle
            title="Get Health<b></b> check ups<br /> and vaccines <b>today</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="a visual depiction of medical information"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* SVG Filter Placeholder */}
          <svg
            className="invisible absolute size-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="flt_tag">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="flt_tag"
                />
                <feComposite
                  in="SourceGraphic"
                  in2="flt_tag"
                  operator="atop"
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Description & Call-to-Action */}
        <div id="products"  className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-green-500 md:text-start">
            Check blood pressure and sugar levels with us.
            Discover our unique approach to healthcare.
            We provide personalized care and advanced medical solutions to ensure your well-being.
            Join us in our mission to promote a healthier lifestyle.

            </p>

            <Button
              href="footer"
              id="realm-btn"
              title="Book an Appointment"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
