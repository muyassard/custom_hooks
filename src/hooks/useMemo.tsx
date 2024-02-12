import { Button } from "antd";
import { useMemo, useState } from "react";

const initialItem = new Array(1000000).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 999999,
  };
});

export const Memo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItem);

  const selectedItem = useMemo(()=>items.find((item) => item.isSelected),[]);

  return (
    <div className="h-[100%] flex flex-col items-center justify-center gap-3 m-5">
      <div className="">count: {count}</div>
      <div className="">selected item: {selectedItem?.id}</div>
      <Button onClick={() => setCount(count + 1)}>increment</Button>
    </div>
  );
};
