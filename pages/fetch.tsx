import { useState, useEffect } from "react";

function Sayhello() {
  // 内部で状態を持つためuseStateを使用
  const [data, setDate] = useState({ name: "" });
  // 外部APIにリクエストするのは副作用なのでuseEffect内で処理
  useEffect(() => {
    // pages/api/hello.tsの内容にリクエスト
    fetch("api/hello")
      .then((res) => res.json())
      .then((profile) => {
        setDate(profile);
      });
  }, []);

  return <div>hello {data.name}</div>;
}

export default Sayhello;
