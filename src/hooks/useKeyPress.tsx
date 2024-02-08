import { Button } from "antd";
import React, { useEffect } from "react";

const useKeyPress = () => {};

export const KeyPress = () => {
  const [activeKey, setActiveKey] = React.useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();

      if (/[a-z]/.test(pressedKey)) {
        setActiveKey(pressedKey);
        // console.log( pressedKey);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, []);
  const letters1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const letters2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const letters3 = ["z", "x", "c", "v", "b", "n", "m"];
  const classname = `p-5 rounded-lg bg-blue-200 `;
  return (
    <div className="h-[100%]  grid place-items-center mt-10">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-2">
          {letters1.map((letter, index) => (
            <div
              className={
                classname + `${letter === activeKey ? "bg-blue-400" : ""}`
              }
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {letters2.map((letter, index) => (
            <div
              className={
                classname + `${letter === activeKey ? "bg-blue-400" : ""}`
              }
            >
              {letter}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {letters3.map((letter, index) => (
            <div
              className={
                classname + `${letter === activeKey ? "bg-blue-400" : ""}`
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

// import * as React from "react";
// import { useKeyPress } from "@uidotdev/usehooks";

// export default function App() {
//   const [activeKey, setActiveKey] = React.useState("");

//   useKeyPress("ArrowRight", onKeyPress);
//   useKeyPress("ArrowLeft", onKeyPress);
//   useKeyPress("ArrowUp", onKeyPress);
//   useKeyPress("ArrowDown", onKeyPress);

//   function onKeyPress(e) {
//     e.preventDefault();
//     setActiveKey(e.key);
//     setTimeout(() => {
//       setActiveKey("");
//     }, 600);
//   }

//   return (
//     <section>
//       <h1>useKeyPress</h1>
//       <p>Press one of the arrow keys on your keyboard</p>
//       <article>
//         <button className={activeKey === "ArrowUp" ? "pressed" : ""}>
//           <span>&uarr;</span>
//         </button>
//         <button className={activeKey === "ArrowLeft" ? "pressed" : ""}>
//           <span>&larr;</span>
//         </button>
//         <button className={activeKey === "ArrowDown" ? "pressed" : ""}>
//           <span>&darr;</span>
//         </button>
//         <button className={activeKey === "ArrowRight" ? "pressed" : ""}>
//           <span>&rarr;</span>
//         </button>
//       </article>
//       {Boolean(activeKey) && <label>{activeKey} was pressed</label>}
//     </section>
//   );
// }
