// import { Button, Tag } from "antd";
// import { useMemo, useState } from "react";

// const initialItem = new Array(1000000).fill(0).map((_, i) => {
//   return {
//     id: i,
//     isSelected: i === 999999,
//   };
// });

// export const Memo: React.FC = () => {
//   const [count, setCount] = useState(0);
//   const [items] = useState(initialItem);

//   const selectedItem = useMemo(() => items.find((item) => item.isSelected), []);

//   return (
//     <div className="h-[100%] flex flex-col items-center justify-center gap-3 m-5">
//       <div className="">object item: {selectedItem?.id}</div>
//       <div className="flex items-center gap-2">
//         <Button onClick={() => setCount((c) => c - 1)}>Decrement</Button>
//         <Tag className="grid place-items-center text-2xl">{count}</Tag>
//         <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
//       </div>
//     </div>
//   );
// };

import { Button } from "antd";
import React, { useRef, useEffect } from "react";

const useMemo = (computeFunction: any, dependencies: any) => {
  const computedValueRef = useRef();
  const dependenciesRef = useRef(dependencies);

  if (!areDependenciesEqual(dependenciesRef.current, dependencies)) {
    computedValueRef.current = computeFunction();
    dependenciesRef.current = dependencies;
  }

  useEffect(() => {
    return () => {
      computedValueRef.current = undefined;
    };
  }, [dependencies]);

  return computedValueRef.current;
};

const areDependenciesEqual = (deps1: any, deps2: any) => {
  if (deps1.length !== deps2.length) {
    return false;
  }

  for (let i = 0; i < deps1.length; i++) {
    if (deps1[i] !== deps2[i]) {
      return false;
    }
  }

  return true;
};
  
export const Memo: React.FC = () => {
  const [number, setNumber] = React.useState(0);

  const doubleNumber = useMemo(() => {
    console.log("Calculating doubleNumber...");
    return number * 2;
  }, [number]); 

  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="h-[100%]  grid place-items-center">
      <p>Number: {number}</p>
      <p>Double Number: {doubleNumber}</p>
      <Button onClick={incrementNumber}>Increment</Button>
    </div>
  );
};
