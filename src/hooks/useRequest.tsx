import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQueryParams } from "use-query-params";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function useRequest<T>(url: string) {
  const http = axios.create({ url });

  const methods = {
    useList: () => {
      const [users, setUsers] = useState<T[]>([]);
      const [isLoading, setLoading] = useState(true);

      useEffect(() => {
        setLoading(true);

        const fetchUsers = async () => {
          try {
            const response = await http.get<T[]>(url);
            setUsers(response.data);
            setLoading(false);
          } catch (error) {
            console.error("Error : ", error);
            setLoading(false);
          }
        };

        fetchUsers();
      }, []);

      return { users, isLoading };
    },
    useSingle: (userId: number) => {
      const [user, setUser] = useState<T>({} as T);
      const [isLoading, setLoading] = useState(true);

      useEffect(() => {
        setLoading(true);
        const fetchUser = async () => {
          try {
            const response = await http.get<T>(`${url}/${userId}`);
            setUser(response.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching user:", error);
          }
        };

        fetchUser();
      }, [userId]);

      return { user, isLoading };
    },
  };

  return methods;
}

export const Request: React.FC = () => {
  const [{ param }, setParams] = useQueryParams({
    param: "http://localhost:3001/hooks",
  });
  let userId = 1;

  const { useList, useSingle } = useRequest<User>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { users, isLoading: usersLoading } = useList();
  const { user, isLoading: userLoading } = useSingle(userId);

  const columnData = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "username",
      dataIndex: "username",
    },
    {
      title: "email",
      dataIndex: "email",
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-4 h-[100%] items-center">
      <h1>useRequest</h1>
      <Button.Group>
        <Button onClick={() => setParams({ param: "userslist" })}>list</Button>
        <Button onClick={() => setParams({ param: `user${userId}` })}>
          user
        </Button>
      </Button.Group>
      {param === "userslist" ? (
        <Table
          rowKey="id"
          loading={usersLoading}
          pagination={{ pageSize: 4 }}
          className="rounded-lg w-80"
          dataSource={users}
          columns={columnData}
        ></Table>
      ) : (
        <div className="p-5 rounded-lg flex flex-col gap-3 text-white border bg-indigo-300">
          <div className="">
            <span>Name: </span>
            <span>{user.name}</span>
          </div>
          <div className="">
            <span>Username: </span>
            <span>{user.username}</span>
          </div>
          <div className="">
            <span>Email: </span>
            <span>{user.email}</span>
          </div>
          <div className="">
            <span>Id: </span>
            <span>{user.id}</span>
          </div>
        </div>
      )}
    </div>
  );
};
