// 리덕스 미들웨어

// 리덕스의 플로우 차트
// UI -> Dispatch -> Action -> Store(Reducer) -> UI
// 리덕스는 동기적으로 처리가 되는데 변경값이 있으면 바로 동작해서
// API같은 데이터를 불러올 때 비동기 작업이 힘듦
// API요청을 해서 데이터를 받은 이후에 작업을 해야하기 때문에
// 리덕스 미들웨어를 사용

// UI -> Dispatch -> Action -> Middleware -> Store(Reducer) -> UI

// 미들웨어는 양쪽을 연결해주고 데이터를 주고받을 수 있도록 중간에서
// 매개 역할을 담당하는 소프트웨어
// 컴퓨터에 있는 프로세스들에게 어떤 서비스를 사용할 수 있도록
// 연결해주는 소프트웨어

// 리덕스 미들웨어는 saga, thunk

// 리덕스 환경 만들기

// redux 저장소를 만들고 만드는 와중에 리듀서 함수를 적용
// react-redux 만들어진 저장소를 사용하는데 편하게 쓸 수 있게
// 리액트 훅 함수를 지원해주는 것

// 1. 리덕스 설치, 리덕스 리액트 설치
// 2. 저장소 js 만들고 createStore 저장소 만들고
// 3. 리듀서 js 만들고 만든 저장소에 매개변수로 전달
// 4. 완성된 저장소를 index.js에 가져와서 Provider를 사용해 App에 적용

// 리덕스를 사용할 때 유용한 툴 redux devtools
// action으로 변경한 state값을 바로바로 볼 수 있음
// npm 설치 명령어
// npm i redux-devtools-extension
// import {composeWithDevTools} from "redux-devtools-extension"
// 설치하고 미들웨어를 composeWithDevTools 함수로 감싸주면 됨
