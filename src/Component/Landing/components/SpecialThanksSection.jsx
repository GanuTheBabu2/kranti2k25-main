import React from "react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";

const sponsors = [
  "/Sponsor1.jpeg",
  "/Sponsor2.jpeg",
  "/Sponsor3.jpeg",
  "/Sponsor4.jpg",
  "/Sponsor5.jpg",
];

function SpecialThanksSection() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      className="py-12"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #0b0b1a 30%, #13061a 70%, #1a001f 100%)", // Darker version of the original gradient
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-sky-500 text-left"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Special Thanks to:
        </h2>
        <div className="mt-8">
          {isMobile ? (
            <Marquee>
              {sponsors.map((sponsor, index) => (
                <img
                  key={index}
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="mx-4 h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    filter: "grayscale(30%) brightness(1.1)",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </Marquee>
          ) : (
            <div className="flex justify-center space-x-8">
              {sponsors.map((sponsor, index) => (
                <img
                  key={index}
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    filter: "grayscale(30%) brightness(1.1)",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecialThanksSection;
