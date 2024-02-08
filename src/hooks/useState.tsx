import React from 'react';
import { Button, Tag } from 'antd';

function generateInitialValue() {
  const num = Math.floor(Math.random() * 100);

  console.log('num = ', num);
  return num;
}

export const State: React.FC = () => {
  const [count, setCount] = React.useState(generateInitialValue); // lazy initializer

  return (
    <div className="mt-2 flex gap-2">
      <Button onClick={() => setCount(c => c - 1)}>Decrement</Button>
      <Tag className="grid place-items-center text-2xl">{count}</Tag>
      <Button onClick={() => setCount(c => c + 1)}>Increment</Button>
    </div>
  );
};

