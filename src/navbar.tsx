import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const btns = [
    "clickAway",
    "counter",
    "favicon",
    "hover",
    "previous",
    "timeOut",
    "list",
    "keyPress",
    "localStorage",
    "state",
    "memo",
    "callback",
    "request",
    "reducer"
  ];
  return (
    <div className=" text-white flex gap-5 flex-wrap bg-blue-200 p-5 iteams-center justify-between">
      <div className="text-3xl">Hooks</div>
      <div className="flex gap-2 flex-wrap justify-center">
        {btns.map((item, idx) => (
          <Button
            key={idx}
            onClick={() => navigate(`hooks/${item}`)}
            size="large"
            className="capitalize"
            type="primary"
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
