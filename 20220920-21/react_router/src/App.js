import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Login, Shop, Detail } from "./page";

function App() {
  // Routers : 페이지를 스위치 해주는 일을 해줌
  // 버전업되면서 이름이 변경됨(원래는 Switch)

  // Route : 페이지들을 정의해줌. Route에는 props 값이 두개 필요한데
  // path, element
  // path : 경로(보여줄 컴포넌트들의 경로)
  // element : 보여줄 경로의 컴포넌트
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:id/:num/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
