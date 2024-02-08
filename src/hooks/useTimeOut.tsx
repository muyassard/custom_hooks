import { Button } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";

function Bomb({
  hasExploded,
  hasDefused,
  handleClick,
}: {
  hasExploded: boolean;
  hasDefused: boolean;
  handleClick: () => void;
}) {
  if (hasExploded) {
    return (
      <div className="flex items-center">
        <div role="img" aria-label="Explosion Emoji">
          💥
        </div>
        <div>You lose</div>
      </div>
    );
  }

  if (hasDefused) {
    return (
      <div className="flex items-center">
        <span role="img" aria-label="Explosion Emoji">
          🎉
        </span>
        <div>You Win</div>
      </div>
    );
  }

  return (
    <Button className="bomb" onClick={handleClick}>
      <div role="img" aria-label="Dynamite Emoji">
        🧨
      </div>
    </Button>
  );
}

function useTimeout(callback: () => void, delay: number) {
  const timeoutRef = useRef<number>();

  useEffect(() => {
    timeoutRef.current = window.setTimeout(callback, delay);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  }, []);

  return clear;
}

export const TimeOut: React.FC = () => {
  const [hasDefused, setHasDefused] = useState(false);
  const [hasExploded, setHasExploded] = useState(false);

  const clear = useTimeout(() => {
    setHasExploded(!hasExploded);
  }, 1000);

  const handleClick = () => {
    clear();
    setHasDefused(true);
  };

  return (
    <section className="h-[100%]  grid place-items-center m-5">
      <h1>useTimeout</h1>
      <p>You have 1s to defuse (click) the bomb or it will explode</p>
      <div className="flex items-center">
        <Button
          type="primary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </Button>
        <Bomb
          hasDefused={hasDefused}
          hasExploded={hasExploded}
          handleClick={handleClick}
        />
      </div>
    </section>
  );
};
