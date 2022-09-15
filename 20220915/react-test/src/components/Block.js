import { React, useState } from "react";

// 리액트가 왜 리액트인지?
// 자기 값이 변하면 반응해서 알려주고 리액트는 반응한 것을 그려줌
// 리렌더링
const Block = ({ num }) => {
  let count = 0;
  // useState 함수를 사용해서 받는 값은
  // 배열의 첫번째는 실사용 값(주시하는 값)
  // 배열의 두번째는 이 값을 수정할 수 있는 함수
  // setnum 함수를 사용해서만 state값을 바꿀 수 있음
  // useState함수의 매개변수가 초기 세팅값
  // setnum 함수를 사용해서 값을 수정할때는 setnum함수의 매개변수로 전달
  // 함수사용
  // 일반변수는 초기값으로 초기화 - 리렌더링
  // 하지만 useState값은 리액트가 관리해주기 때문에
  // 그려주기 전의 값을 보관해줌
  // react에서 제공해주는 useState와 같은 유용한 함수가 많은데
  // 이걸 리액트 훅이라고 함(react hook)
  const [num1, setnum] = useState(count);
  function add() {
    count++;
    setnum(num1 + 1);
    // 비동기적으로 돌아가기 때문에 실수가 있음
    // 콘솔이 값이 변하기 전에 동작해서 바뀌기 전 값이 보이는 현상
    console.log(num1);
  }
  return (
    <>
      {/* 변수를 바꾼다고 태그에 변수값이 변하지는 않음
          useState 리액트에게 값을 주시하게 만들고 변하면
          변하도록 다시 그려줌
          결국 효율적으로 관리하기 위해 사용 */}
      <div className="block">{num1}</div>
    </>
  );
};

export default Block;
