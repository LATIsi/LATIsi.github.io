---
title: "React hook"
excerpt: "리엑트 내장 훅에 대하여"
date: 2022-01-12
categories:
  - React
tags:
  - React
  - 라이브러리
last_modified_at: 2022-01-13
---

react에는

- useState
- useEffect
- useReducer
- useMemo
- useCallback
- useRef

같은 내장 hook들과 커스텀 hook들이 있다.

---

## useState

useState는 기본적으로, 함수 컴포넌트에서도 가변적인 상태를 지니게해줄 수 있다.

```
const [상태값, 상태값을 바꿔줄 함수] = useState(기본값);
```

이다.

하나의 useState는 하나의 상태값만 관리할수 있으므로, 관리할 상태값이 여러개라면 거기에 맞는 각각의 useState를 사용해야한다.

---

## useEffect

useEffect는 렌더링될때마다 특정 작업을 실행하는것이다.  
( = componentDidUpdate와 componentDidMount를 섞은 느낌.)  
<br>

특히 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 다르다.  
useEffect의 기본적인 사용방법은 화살표 함수로...

```
useEffect(()=>{
 실행할 특정작업;
});
```

이런식으로 넣어주면 된다.

<br>

- 맨 처음 렌더링 될 때, 업데이트때 실행하고 싶지 않을 때
  - 두번째 파라미터로 비어있는 배열을 넣어주면 된다.

```
useEffect(()=>{
 실행할 특정작업;
}, []);
```

<br>

- 특정 값이 업데이트되면 실행하고 싶을 때
  - 두번째 파라미터로 검사하고 싶은 값을 넣기

```
useEffect(()=>{
 실행할 특정작업;
}, [변경되는 특정값]);
```

- 언마운트나 업데이트전 작업 실행하고 싶을 때
  - 뒷정리 함수 반환하기!  
    그러나 **언마운트** 할때만 함수 호출하고싶을시 두번째 파라미터를 빈 배열을 넣자.

```
useEffect(()=>{
 실행할 특정작업;
 return() =>{
   뒷정리 함수
 }
}, [변경되는 특정값]);
```

---

## useReducer

useReducer는 useState보다 다양한 상태를 다른값으로 업데이트 해주고싶을시 사용하는 hook.

Reducer는 현재상태, 업데이트를 위해 필요한 정보를 담은 액션값을 받고 새롭게 반환하는 함수이다. (불변성 중요!!!!)
<br>

```
function reducer(state, action){
  Switch (action.type){
    case '액션종류1' :
      return {state.상태값 조절이나 할 내용...};
    case '액션종류2' :
      return {state.상태값 조절이나 할 내용...};
    default :
      return {state.상태값 조절이나 할 내용...};
  }}
}
```

type을 다루는 리덕스와는 다르게 useReducer는 반드시 type을 가질 필요는 없다.

```
const [state, dispatch ] = useReducer( reducer, {해당 리듀서의 기본값});
```

이 useReducer의 기본이고, 여기서의 state는 현재 가리키고 있는 상태값, **dispatch는 액션을 발생시키는 함수**.  
즉 함수안에 액션값을 넣으면 리듀서가 호출.

특히 useReducer는 컴포넌트 업데이트 로직을 컴포넌트 외부로 빼낼수 있다.

---

## useMemo

컴포넌트 내부의 연산 최적화시 사용.  
렌더링 과정시, 특정값이 바뀔때만 연사실행하고 싶을때 사용.

```
const memo = useMemo(() => 메소드(a, b), [a, b]);
```

기본으로 이렇게 쓰인다.

---

## useCallback

useMemo와 비슷한 상황에서 사용하지만, useCallback은 만든 함수를 재사용할 수 있다.

```
useCallback (()=>{
  생성하고 싶은 함수..
},[배열]);
```

첫번째 인자값으로 생성하고 싶은 함수를 넣고  
두번째 인자값으로 **어떤값이 바뀌거나 새로운 항목이 추가되었을때** 함수를 새로 생성해야하는지 **_명시된_** 배열을 넣는다.  
만약 빈 배열값을 넣는다면 계속해서 재사용하게 된다.

---

## useRef

컴포넌트 로컬 변수(렌더링과 상관없이 바뀔 수 있는 값)를 사용할때도 useRef로 활용 가능.
렌더링과 관련되지않은 값을 관리할때만 사용하기.

---

## 커스텀 hook

여러 컴포넌트에서 비슷한 기능을 공유시, 커스텀 hook을 만들수 있다.

---

useEffect, useMemo, useCallback의 세세한 차이는
https://velog.io/@mementomori/useEffect-useCallback-useMemo-%EB%B9%84%EA%B5%90  
를 참고할 것.
