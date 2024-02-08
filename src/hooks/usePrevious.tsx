import { Button } from "antd";
import React, { useState } from "react";

function getRandomColor() {
  const colors = ["green", "blue", "purple", "indigo", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const usePrevious = (color1: string) => {
  const col = color1;

  function closure() {
    return col;
  }

  return closure();
};       

export const Previous:React.FC = () => {
  const [color, setColor] = useState(getRandomColor());
  let previousColor = usePrevious(color);

  const handleClick = () => {
    (function getNewColor() {
      const newColor = getRandomColor();
      if (color === newColor) {
        getNewColor();
      } else {
        setColor(newColor);
      }
    })();
  };

  const prev = `w-[50px] h-[50px] bg-${previousColor}-200`;
  const cur = `w-[50px] h-[50px] bg-${color}-200`;

  return (
    <div className="h-[100%]  grid place-items-center m-5">
      <h1 className="font-bold">usePrevious</h1>
      <Button className="link" onClick={handleClick}>
        Next
      </Button>
      <div>
        <div>
          <div className={prev} />
          <div>Previous: {previousColor} </div>
        </div>
        <div>
          <div className={cur} />
          <figcaption>Current: {color}</figcaption>
        </div>
      </div>
    </div>
  );
};


// import * as React from "react";
// import { usePrevious } from "@uidotdev/usehooks";

// function getRandomColor() {
//   const colors = ["green", "blue", "purple", "indigo", "pink"];
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// export default function Prev() {
//   const [color, setColor] = React.useState(getRandomColor());
//   const previousColor = usePrevious(color);

//   const handleClick = () => {
//     function getNewColor() {
//       const newColor = getRandomColor();
//       if (color === newColor) {
//         getNewColor();
//       } else {
//         setColor(newColor);
//       }
//     }
//     getNewColor();
//   };
//   const prev = `w-[50px] h-[50px] bg-${previousColor}-200`;
//   const cur = `w-[50px] h-[50px] bg-${color}-200`;
//   return (
//     <section>
//       <h1>usePrevious</h1>
//       <button className="link" onClick={handleClick}>
//         Next
//       </button>
//       <article>
//         <figure>
//           <div className={prev} />
//           <figcaption>Previous: {previousColor}</figcaption>
//         </figure>
//         <figure>
//           <div className={cur} />
//           <figcaption>Current: {color}</figcaption>
//         </figure>
//       </article>
//     </section>
//   );
// }
