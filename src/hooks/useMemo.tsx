import { Button } from "antd";
import React, { useRef, useEffect } from "react";

const useMemo = (computeFunction: any, deps: any) => {
  const computedValueRef = useRef();
  const dependenciesRef = useRef(deps);

  const comparing = (deps1: any, deps2: any) => {
    for (let i = 0; i < deps1.length; i++) {
      if (deps1[i] !== deps2[i]) {
        return false;
      }
    }

    return true;   
  }; 
  
  if (!comparing(dependenciesRef.current, deps)) {
    computedValueRef.current = computeFunction();
    dependenciesRef.current = deps;  
  }
  
  useEffect(() => {
    return () => {
      computedValueRef.current = undefined;
    };
  }, [deps]);

  return computedValueRef.current;
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
    <div className="h-[100%]  flex flex-col items-center justify-center gap-5 my-5">
      <div>Number: {number}</div>
      <div>Double Number: {doubleNumber}</div>
      <Button onClick={incrementNumber}>Increment</Button>
    </div>
  );
};


