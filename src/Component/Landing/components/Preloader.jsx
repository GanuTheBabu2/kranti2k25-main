import React, { useState, useEffect } from 'react';

function Preloader({ isLoading }) {
  // List of images located in the public folder
  const images = [
    '/img1.png', '/img2.png', '/img3.png', '/img4.png',
    '/img5.png', '/img6.png', '/img7.png', '/img8.png'
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    if (isLoading) {
      // Fast transition loop (150ms per image)
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[currentIndex]);
      }, 150);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ overflow: 'hidden' }}
    >
      <div className="relative p-4">
        <h1
          style={{
            fontFamily: 'Arial, sans-serif', // Replace with your custom font if needed
            fontSize: '10vw', // Responsive font size
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: 'transparent',
            border: '2px solid white',
            backgroundImage: `url(${currentImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          KRANTI 2K25
        </h1>
      </div>
    </div>
  );
}

export default Preloader;
