import "./App.css";
import Block from "./components/Block";
import { img1 } from "./img/index";

function App() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <div className="App">
      {/* 배열의 갯수만큼 반복해서 컴포넌트 생성 */}
      {arr.map((el) => (
        <Block num={el} />
      ))}
      <Block num="0" />
    </div>
  );
}

export default App;
