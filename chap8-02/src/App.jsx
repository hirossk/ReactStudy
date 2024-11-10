import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState([]);

  // 画面表示時にユーザー情報取得
  // ※実際にはこのエンドポイントは存在しないので注意
  useEffect(() => {
    axios.get("http://localhost:3333/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};
