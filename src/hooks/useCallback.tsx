import React, { useCallback, useEffect, useState } from "react";

interface TimerProps {
  onTimerTick: (count: number) => void;
}

export const Callback1: React.FC<TimerProps> = ({ onTimerTick }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        onTimerTick(prevCount);
        return prevCount + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerTick]);

  const handleButtonClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div className="h-[100%]  grid place-items-center">
      <p>Timer Count: {count}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};
