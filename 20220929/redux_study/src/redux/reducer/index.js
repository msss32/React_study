// reducer 함수 만들기
// 필요한 매개변수 : state와 action
// state는 초기화 필요
let init = {
  count: 0,
};

// state = init 초기값 전달
function reducer(state = init, action) {
  // 이곳에 동작할 기능들 작성
  switch (action.type) {
    case "ADD":
      // 여기에 ADD type이 들어왔을 때 동작할 기능
      console.log("플러스");
      // 리듀서가 저장소의 값을 변경해주는데 반환값을 받아서 바꿔줌
      // 저장소는 항상 대기하다가 리듀서가 반환값을 주면 적용을 바로 함
      // ...state 이렇게 하는 이유는 객체에 여러 값이 있을 수 있는데
      // 값을 그대로 유지하고 count만 바꾸기 위해서
      // 새로운 주소의 객체가 전달되었을 때 저장소가 변했다고 인지하기 위해
      // ...state 값을 복사해서 새로운 주소 데이터 공간을 만들어줌
      // ...은 그냥 습관으로 가지자
      //
      return { ...state, count: state.count + 1 };
    case "REMOVE":
      console.log("마이너스");
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export default reducer;
