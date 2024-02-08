// import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import store from "store2";

import { Button } from "antd";

const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const storedValue = store.get(key);
    return storedValue !== undefined ? storedValue : initialValue;
  });

  useEffect(() => {
    store.set(key, value);
  }, [key, value]);
  return [value, setValue];
};

export const LocalStorage: React.FC = () => {
  const [value, setValue] = useLocalStorage("test-key", 0);

  return (
    <div>
      <p>Count: {value}</p>
      <Button
        onClick={() => {
          setValue((x: number) => x + 1);
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          setValue((x: number) => x - 1);
        }}
      >
        Decrement
      </Button>
    </div>
  );
};
