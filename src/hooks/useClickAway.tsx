import { Button, Modal } from "antd";
import React, { useState, useRef, useEffect } from "react";

export const ClickAway: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => { 
    function handleClickOutside(event: MouseEvent) {
      if ( 
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-[100%]  grid place-items-center">
      <section>
        <h1 className="">useClickAway</h1>
        <Button className="link" onClick={handleOpenModal}>
          Modalni ochish
        </Button>
      </section>
      <Modal
        visible={isOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Yopish
          </Button>,
        ]}
      >
        <h2>Modal</h2>
        <div>
          Modalni yopish uchun modalning tashqarisiga bosib yoki
          <hr />
          tugmachani ishlatishingiz mumkin.
        </div>
      </Modal>
    </div>
  );
};
