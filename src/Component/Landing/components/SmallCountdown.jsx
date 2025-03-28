import React, { useEffect, useRef, useState } from "react";
import '../../styles/flipping.css';

const Flipping = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const units = ["days", "hours", "minutes", "seconds"];
  const refs = useRef({});

  const createFlipUnit = (id, value) => {
    if (refs.current[id]) {
      refs.current[id].innerHTML = `
        <div class="card top">${value}</div>
        <div class="card bottom">${value}</div>
      `;
    }
  };

  const updateFlip = (id, newVal) => {
    const unit = refs.current[id];
    if (!unit) return;

    const topCard = unit.querySelector(".top");
    const bottomCard = unit.querySelector(".bottom");
    const current = topCard.textContent;

    if (current === newVal) return;

    unit.classList.remove("flip-animate");
    void unit.offsetWidth;
    unit.classList.add("flip-animate");

    topCard.textContent = newVal;
    bottomCard.textContent = current;

    setTimeout(() => {
      bottomCard.textContent = newVal;
    }, 1000);
  };

  const pad = (val) => String(val).padStart(2, "0");

  useEffect(() => {
    // Set the date of the event to April 15th, 2025
    const eventDate = new Date('2025-04-15T09:00:00');

    const updateClock = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        const newTimeLeft = {
          days: pad(d),
          hours: pad(h),
          minutes: pad(m),
          seconds: pad(s)
        };

        // Update individual units
        units.forEach(unit => {
          updateFlip(unit, newTimeLeft[unit]);
        });

        // Update state
        setTimeLeft(newTimeLeft);
      }
    };

    // Initial setup of flip units
    units.forEach((unit) => createFlipUnit(unit, "00"));

    // Initial update
    updateClock();

    // Set interval
    const interval = setInterval(updateClock, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flip-clock-container">
      <div className="flip-clock">
        {units.map((unit, index) => (
          <React.Fragment key={unit}>
            <div
              className="flip-unit"
              id={unit}
              ref={(el) => (refs.current[unit] = el)}
            ></div>
            {index < units.length - 1 && <div className="colon">:</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Flipping;