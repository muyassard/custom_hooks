import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";

// Usage
export const LocalStorage:React.FC = () => {
  const [value, setValue] = useLocalStorage("test-key", 0);

  return (
    <div>
      <p>Count: {value}</p>
      <button
        onClick={() => {
          setValue((x: number) => x + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue((x: number) => x - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};
