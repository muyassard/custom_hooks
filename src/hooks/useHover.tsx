import React, { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [isHover, setHover] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = divRef.current;

    if (element) {
      element.addEventListener("mouseenter", () => {
        setHover(true);
      });
      element.addEventListener("mouseleave", () => {
        setHover(false);
      });
    }
  }, []);

  return [divRef, isHover] as const;
};

export const Hover: React.FC = () => {
  const [ref, isHover] = useHover();
  const classname = isHover
    ? ` cursor-pointer active: scale-75 w-[220px] h-[150px] grid place-items-center border p-3 bg-[#efed40]`
    : " cursor-pointer active: scale-75 w-[220px] h-[150px] grid place-items-center border p-3 bg-[#faf]";

  return (
    <div className="h-[100%]  grid place-items-center m-5">
      <div className={classname} ref={ref}>
        {isHover ? "Hovered" : "Not Hovered"}
      </div>
    </div>
  );
};

// import { useHover } from "@uidotdev/usehooks";

// export default function Hover() {
//   const [ref, hovering] = useHover();

//   const classname = hovering
//     ? `w-[100px] h-[100px] border p-3 bg-[#efed40]`
//     : "w-[100px] h-[100px] border p-3 bg-[#faf]";

//   return (
//     <div>
//       <h1>useHover</h1>
//       <div ref={ref} className={classname}>
//         Hovering? {hovering ? "Yes" : "No"}
//       </div>
//     </div>
//   );
// }
