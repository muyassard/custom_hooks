import React, { useEffect, useState } from "react";

const useKeyPress = (): string => {
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();
      
      if (/[a-z]/.test(pressedKey)) {
        setActiveKey(pressedKey);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return activeKey;
};

export const KeyPress: React.FC = () => {
  const activeKey = useKeyPress();
  const letters1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const letters2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const letters3 = ["z", "x", "c", "v", "b", "n", "m"];
  const classname = `p-5 rounded-lg bg-blue-200`;

  return (
    <div className="h-[100%]  grid place-items-center mt-10">
      <h1>useKeyPress</h1>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-2">
          {letters1.map((letter) => (
            <div
              key={letter}
              className={
                classname + `${letter === activeKey ? " bg-blue-400" : ""}`
              }
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {letters2.map((letter) => (
            <div
              key={letter}
              className={
                classname + `${letter === activeKey ? " bg-blue-400" : ""}`
              }
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {letters3.map((letter) => (
            <div
              key={letter}
              className={
                classname + `${letter === activeKey ? " bg-blue-400" : ""}`
              }
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
