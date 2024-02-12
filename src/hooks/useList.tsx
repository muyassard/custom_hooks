import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputRef } from "antd";
import React, { useState } from "react";

interface Demo {
  list: string[];
  updateAt: any;
  removeAt: any;
  push: any;
}

const ListDemo: React.FC<Demo> = ({ list, updateAt, removeAt, push }) => {
  const ref = React.useRef<InputRef>(null);

  return (
    <div className="flex flex-col w-[30%] m-5">
      <Form
        autoComplete="off"
        onFinish={(value) => {
          push(value.todo);
          console.log(ref.current?.input?.value);

          // ref.current?.input?.value=""; 
        }}
      > 
        <Form.Item
          rules={[
            {
              required: true,
              message: "Enter  todo",
              min: 3,
              whitespace: true,
            },
          ]}
          name="todo"
        >
          <Input ref={ref} allowClear placeholder="Add new" />
        </Form.Item>
      </Form>
      <div className=" flex flex-col gap-2 ">
        {list.map((item, idx) => (
          <div className="p-2 rounded-lg flex items-center justify-between text-white bg-blue-300">
            <div className="">{item}</div>
            <div className=" flex items-center gap-4">
              <EditOutlined onClick={updateAt} />
              <DeleteOutlined onClick={() => removeAt(idx)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const useList = (initialList: string[] = []) => {
  const [list, setList] = useState(initialList);

  const methods = {
    set: (list: string[] = []) => {
      setList(list);
    },
    push: (item: any) => {
      setList((prevList) => [...prevList, item]);
    },

    removeAt: (index: number) => {
      setList((prevList: string[]) => {
        const newList = [...prevList];
        newList.splice(index, 1);
        return newList;
      });
    },
    insertAt: (index: number, item: any) => {
      setList((prevList) => {
        const newList = [...prevList];
        newList.splice(index + 1, 0, item);
        return newList;
      });
    },
    updateAt: (index: number, item: any) => {
      setList((prevList) => {
        const newList = [...prevList];
        newList[index] = item;
        return newList;
      });
    },
    clear: () => {
      setList([]);
    },
  };

  return [list, methods] as const;
};

export const List: React.FC = () => {
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
    "First",
    "Second",
    "Third",
  ]);
  return (
    <div className="h-[100%]  grid place-items-center">
      <h1 className="font-bold">useList</h1>
      <div className="  flex justify-center flex-wrap ">
        <Button
          disabled={list.length < 1}
          className="link"
          onClick={() => insertAt(1, "woo")}
        >
          Insert After First
        </Button>
        <Button
          disabled={list.length < 2}
          className="link"
          onClick={() => removeAt(1)}
        >
          Remove Second Item
        </Button>
        <Button onClick={() => set(["1", "2", "3"])}>Reset</Button>
        <Button onClick={() => clear()}>Clear</Button>
      </div>
      <ListDemo
        list={list}
        updateAt={updateAt}
        push={push}
        removeAt={removeAt}
      />
    </div>
  );
};
