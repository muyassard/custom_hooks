import { Button } from "antd";
import React, { useState, useRef, useEffect } from "react";

export const ClickAway: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside() {
      if (modalRef.current) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpenModal = () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="h-[100%]  grid place-items-center">
      <section>
        <h1 className="">useClickAway</h1>
        <Button className="link" onClick={handleOpenModal}>
          Modalni ochish
        </Button>
      </section>
      {isOpen && (
        <div ref={modalRef}>
          <Button onClick={() => setIsOpen(false)}>Yopish</Button>
          <h2>Modal</h2>
          <div>
            Modalni yopish uchun modalning tashqarisiga bosib yoki <hr />
            tugmachani ishlatishingiz mumkin.
          </div>
        </div>
      )}
    </div>
  );
};
