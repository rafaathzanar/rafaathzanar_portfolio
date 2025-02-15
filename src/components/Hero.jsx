import { curve } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import pic from "../assets/hero/pic.png";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import TypingEffect from "react-typing-effect"; // Import TypingEffect for typing animation

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          <span className="h4 mb-6">
            Hi, I am{" "}  </span>
            <br></br>
            <span
  className="inline-block relative"
  style={{
    background: "linear-gradient(90deg,rgb(255, 246, 141),rgb(244, 209, 255))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
              {/* Add the typing animation for your name */}
              <TypingEffect
                text={["Rafaath Zanar"]} // Text for typing effect
                speed={100}
                eraseDelay={2000}
                typingDelay={100}
              />
              {` `}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I am driven by a passion for technology and a relentless pursuit of
            knowledge. With a keen interest in learning emerging technologies, I
            am committed to applying them in practical, hands-on projects.
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl ">
            <div className="relative bg-n-10 bg-opacity-50 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 bg-opacity-50 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={pic}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="My Pic"
                />
             <ScrollParallax isAbsolutelyPositioned>
  {/* First notification visible on all screens with adjusted size and position for small screens */}
  <Notification
    className="absolute right-[1rem] bottom-[2rem] w-[20rem] sm:-right-[5.5rem] sm:bottom-[15rem] sm:w-[18rem] flex"
    title="Hello! I am seeking for a Software Engineering Internship"
  />
  
  {/* Second notification hidden on small screens */}
  <Notification
    className="hidden sm:flex absolute -left-[5.5rem] bottom-[1rem] w-[18rem] xl:flex"
    title="Let's Connect!"
  />
</ScrollParallax>

              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
