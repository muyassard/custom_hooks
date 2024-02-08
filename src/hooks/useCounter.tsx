import React from "react";
import { Button, Tag } from "antd";

const useCounter = (initialValue = 1, { min = 0, max = 1000 }) => {
  const [count, setCount] = React.useState(initialValue);

  const methods = {
    increment: () => setCount((c) => c + 1),
    decrement: () => setCount((c) => c - 1),
    reset: () => setCount(initialValue),
  };

  return [count, methods] as const;
};

export const Counter: React.FC = () => {
  const initialValue = 5;
  const min = 1;
  const max = 20;
  const [count, { increment, decrement, reset }] = useCounter(initialValue, {
    min,
    max,
  });

  return (
    <div className="flex gap-2 p-4 h-[100%] justify-center">
      <Tag className="grid place-items-center">{count}</Tag>
      <Button.Group>
        <Button onClick={increment} disabled={count === max}>
          Increment
        </Button>
        <Button onClick={decrement} disabled={count === min}>
          Decrement
        </Button>
        <Button onClick={reset} disabled={count === initialValue}>
          Reset
        </Button>
      </Button.Group>
    </div>
  );
};

// import { useHover } from "@uidotdev/usehooks";

// export default function Hover() {
//   const [ref, hovering] = useHover();

//   const classname = hovering
//     ? `w-[100px] h-10px] border p-3 bg-[#efed40]`
//     : "w-[100px] h-10px] border p-3 bg-[#faf]";

//   return (
//     <div>
//       <h1>useHover</h1>
//       <div ref={ref} className={classname}>
//         Hovering? {hovering ? "Yes" : "No"}
//       </div>
//     </div>
//   );
// }
