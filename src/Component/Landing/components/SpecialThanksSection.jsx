import React from 'react';
import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';

const sponsors = [
  "/Sponsor1.jpeg",
  "/Sponsor2.jpeg",
  "/Sponsor3.jpeg"
];

function SpecialThanksSection() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="py-12 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500 text-left">
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
                  className="mx-4 h-20 w-auto"
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
                  className="h-20 w-auto"
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
