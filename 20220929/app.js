// 리덕스

// 리액트에서 사용할 수 있는 라이브러리

// 실무에서 리덕스를 안쓰면 매우 불편하기 때문에 필수로 사용

// 리액트는 자식 컴포넌트에 props로 전달은 가능한데
// 다른 컴포넌트에서 직접 데이터공유가 불가능
// 그래서 공유해야할 데이터를 공유받는 자식 컴포넌트들의
// 공통부모에서 State를 만들어서 자식 컴포넌트에게 전달

// 리액트의 데이터의 흐름(단방향)의 단점을 보완하기 위해 사용

// 리덕스는 state를 저장해주는 store(저장소)
// 각각의 컴포넌트가 사용할 수 있는 공통된 store(저장소) 사용
// 원하는 값 저장 및 사용 가능

// 쉽게 생각해서 컴포넌트에서 값을 요청하고 전달받는 것이 직접 가능

// But, 컴포넌트에서 저장소의 값을 직접적으로 바로 수정 불가능
// 함수를 통해서 동작하는 방식으로 수정과 요청 가능

// 리덕스 동작 구조
// 값을 저장하는 구조는
// useDispatch 리액트 훅 함수
// 컴포넌트 -> useDispatch -> Action -> Reducer -> Store 최신화

// Action은 동작할 기능의 이름(행동)
// Reducer는 내가 사용할 동작들을 조건문으로 모아둔 곳

// Store(저장소) : state값을 저장해 둘 객체
// state의 값이 바뀌면 컴포넌트가 리렌더링

// 값을 가져오는 구조는
// useSelector 리액트 훅
// Store -> useSelector -> 컴포넌트
// useSelector는 Store에 있는 값을 가져올 때 사용하는 함수

// 리덕스 설치 & 사용
// npm i redux

// redux는 리액트에서만 쓸 수 있는게 아니라 리액트도 사용가능한 것

// 리액트에서 react-redux 라이브러리
// npm i react-redux

// Provider
// Provider(컴포넌트) : Provider로 감싼 컴포넌트를 리덕스 저장소의 사용을 가능하게 해줌
// Provider는 props로 store(저장소)를 전달 받음
